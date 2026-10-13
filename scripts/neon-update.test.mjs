import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { updater, tagCommit, stableTag, inside, xmlEscape } from './neon-update.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'neon-update-test-'));
  t.after(() => { rmSync(root, { recursive: true, force: true }); });
  const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  git(['init', '-b', 'main']); git(['config', 'user.name', 'Updater test']); git(['config', 'user.email', 'test@example.invalid']);
  git(['config', 'commit.gpgsign', 'false']); git(['config', 'tag.gpgsign', 'false']);
  mkdirSync(join(root, 'custom_components/neonplan3d'), { recursive: true });
  writeFileSync(join(root, 'custom_components/neonplan3d/manifest.json'), '{"version":"1.0.0"}\n');
  writeFileSync(join(root, '.gitignore'), 'private/\n');
  writeFileSync(join(root, 'shared.txt'), 'base\n'); git(['add', '.']); git(['commit', '-m', 'base']); git(['tag', 'v1.0.0']);
  git(['checkout', '-b', 'feature/test']); writeFileSync(join(root, 'feature.txt'), 'custom feature\n'); git(['add', '.']); git(['commit', '-m', 'feature']); git(['checkout', 'main']);
  writeFileSync(join(root, 'unrelated-dirty.txt'), 'user work\n');
  const config = { upstream: root, customBranch: 'custom', initialBase: 'main', featureBranches: ['feature/test'], stateDirectory: 'private/update-automation', steps: [{ name: 'fixture check', command: [process.execPath, '-e', 'process.exit(0)'] }] };
  const app = updater(root, config, async () => ({ tag_name: 'v1.0.0', prerelease: false, draft: false }));
  return { root, git, config, app };
}
test('stable release tags reject argument injection and prereleases', () => {
  assert.equal(stableTag('v1.15.0'), 'v1.15.0');
  for (const tag of ['--upload-pack=x', 'v1.0.0-beta', '../main', null]) assert.throws(() => stableTag(tag));
});
test('annotated tags select the peeled commit and ignore similarly named refs', () => {
  const sha = 'a'.repeat(40), peeled = 'b'.repeat(40);
  assert.equal(tagCommit(`${sha}\trefs/tags/v1.0.0\n${peeled}\trefs/tags/v1.0.0^{}\n`, 'v1.0.0'), peeled);
  assert.throws(() => tagCommit(`${sha}\trefs/tags/v1.0.00`, 'v1.0.0'));
});
test('paths cannot escape the owned state directory', () => {
  assert.equal(inside('/tmp/example', 'runs/one'), '/tmp/example/runs/one');
  for (const value of ['..', '../other', '/private', '.']) assert.throws(() => inside('/tmp/example', value));
});
test('check is read-only to git branches and preserves user work', async t => {
  const f = fixture(t), before = f.git(['rev-parse', 'main']);
  const result = await f.app.check(); assert(result.initial); assert(result.needsPreparation);
  assert.equal(f.git(['rev-parse', 'main']), before); assert.equal(f.git(['branch', '--show-current']), 'main');
  assert.equal(readFileSync(join(f.root, 'unrelated-dirty.txt'), 'utf8'), 'user work\n');
});
test('candidate passes checks, produces clean ZIP, adopt is explicit and later prepare is a no-op', async t => {
  const f = fixture(t), original = f.git(['rev-parse', 'main']);
  const state = await f.app.prepare(); assert.equal(state.status, 'ready'); assert(existsSync(state.artifact));
  assert(existsSync(join(state.worktree, 'feature.txt'))); assert.equal(f.git(['rev-parse', 'main']), original);
  assert.throws(() => f.git(['show-ref', '--verify', 'refs/heads/custom']));
  assert.equal(f.app.adopt().status, 'adopted'); assert.equal(f.git(['rev-parse', 'custom']), state.head);
  assert.equal((await f.app.prepare()).status, 'up_to_date');
  const contents = execFileSync('unzip', ['-Z1', state.artifact], { encoding: 'utf8' });
  assert(contents.includes('manifest.json')); assert(!contents.includes('unrelated-dirty')); assert(!contents.includes('feature.txt'));
});
test('failed tests never make a candidate ready or advance custom', async t => {
  const f = fixture(t); f.config.steps = [{ name: 'failing test', command: [process.execPath, '-e', 'process.exit(4)'] }];
  await assert.rejects(f.app.prepare(), /Validation failed/);
  const state = f.app.status(); assert.equal(state.status, 'checks_failed'); assert(!state.artifact);
  assert.throws(() => f.app.adopt(), /fully checked/);
  f.config.steps = [{ name: 'fixed check', command: [process.execPath, '-e', 'process.exit(0)'] }];
  assert.equal(f.app.resume().status, 'ready');
});
test('merge conflict is kept in the candidate; primary worktree remains untouched', async t => {
  const f = fixture(t);
  f.git(['checkout', 'feature/test']); writeFileSync(join(f.root, 'shared.txt'), 'feature change\n'); f.git(['add', 'shared.txt']); f.git(['commit', '-m', 'feature conflict']);
  f.git(['checkout', 'main']); writeFileSync(join(f.root, 'shared.txt'), 'upstream change\n'); f.git(['add', 'shared.txt']); f.git(['commit', '-m', 'main conflict']);
  const main = f.git(['rev-parse', 'main']);
  await assert.rejects(f.app.prepare(), /Merge stopped/);
  const state = f.app.status(); assert.equal(state.status, 'merge_failed'); assert(state.conflicts.includes('shared.txt'));
  assert.equal(f.git(['rev-parse', 'main']), main); assert.equal(readFileSync(join(f.root, 'shared.txt'), 'utf8'), 'upstream change\n');
  assert.throws(() => f.app.resume(), /Resolve and commit/);
  writeFileSync(join(state.worktree, 'shared.txt'), 'both changes resolved\n');
  execFileSync('git', ['add', 'shared.txt'], { cwd: state.worktree }); execFileSync('git', ['commit', '-m', 'resolve conflict'], { cwd: state.worktree, stdio: 'pipe' });
  assert.equal(f.app.resume().status, 'ready');
});
test('adopt refuses modifications after validation', async t => {
  const f = fixture(t), state = await f.app.prepare();
  writeFileSync(join(state.worktree, 'unexpected.txt'), 'changed\n'); assert.throws(() => f.app.adopt(), /changed since validation/);
});
test('active updater lock prevents a second run', async t => {
  const f = fixture(t); mkdirSync(join(f.root, f.config.stateDirectory), { recursive: true });
  writeFileSync(join(f.root, f.config.stateDirectory, 'lock.json'), JSON.stringify({ pid: process.pid }));
  await assert.rejects(f.app.locked(() => f.app.check()), /Another update is running/);
});
test('launchd template is generated locally, escaped and never installed', t => {
  const f = fixture(t), result = f.app.schedule(); assert.equal(result.installed, false);
  const text = readFileSync(result.file, 'utf8'); assert(text.includes('StartCalendarInterval')); assert(text.includes('<integer>30</integer>')); assert(text.includes('watch'));
  assert.equal(xmlEscape('a&<b>"'), 'a&amp;&lt;b&gt;&quot;'); assert.throws(() => f.app.schedule(), /already exists/);
});
test('missing feature regression coverage blocks release readiness', async t => {
  const f = fixture(t); f.config.contracts = [{ feature: 'critical custom feature', files: ['frontend/src/required.test.ts'] }];
  await assert.rejects(f.app.prepare(), /Missing regression coverage/); assert.equal(f.app.status().status, 'checks_failed');
  assert.throws(() => f.app.adopt(), /fully checked/);
});
test('original main changes are noticed without waiting for a release tag', async t => {
  const f = fixture(t); f.config.upstreamBranch = 'main';
  f.git(['checkout', 'main']); writeFileSync(join(f.root, 'main-new.txt'), 'new original feature'); f.git(['add', 'main-new.txt']); f.git(['commit', '-m', 'new main change']);
  const result = await f.app.check();
  assert.equal(result.tag, 'main'); assert.equal(result.upstreamSha, f.git(['rev-parse', 'main']));
  assert.equal((await f.app.prepare()).status, 'ready');
});
test('a custom build cannot become ready while an agreed feature is absent', async t => {
  const f = fixture(t); f.config.requiredCustomFeatures = ['pack_displays'];
  await assert.rejects(f.app.prepare(), /Missing custom features/);
  assert.equal(f.app.status().status, 'checks_failed');
  assert.throws(() => f.app.adopt(), /fully checked/);
});

