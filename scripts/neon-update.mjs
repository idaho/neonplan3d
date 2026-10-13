// Local candidate preparation only: never pushes, publishes, deploys or restarts HA.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, renameSync, unlinkSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, join, relative, isAbsolute } from 'node:path';
import { randomUUID, createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';

export function stableTag(value) {
  if (typeof value !== 'string' || !/^v?\d+\.\d+\.\d+$/.test(value)) throw new Error('No stable three-part release tag: ' + value);
  return value;
}
export function inside(root, path) {
  const result = resolve(root, path), rel = relative(root, result);
  if (!rel || rel === '..' || rel.startsWith('../') || isAbsolute(rel)) throw new Error('Unsafe path: ' + path);
  return result;
}
export function tagCommit(output, tag) {
  const refs = new Map(output.trim().split('\n').filter(Boolean).map(line => { const [sha, ref] = line.split(/\s+/); return [ref, sha]; }));
  const wanted = 'refs/tags/' + stableTag(tag);
  const sha = refs.get(wanted + '^{}') ?? refs.get(wanted);
  if (!sha || !/^[a-f0-9]{40,64}$/.test(sha)) throw new Error('Release tag could not be resolved');
  return sha;
}
export const xmlEscape = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
export function updater(root, config, releaseProvider) {
  root = resolve(root);
  const directory = inside(root, config.stateDirectory);
  const stateFile = join(directory, 'latest.json');
  const git = (args, cwd = root) => execFileSync('git', args, { cwd, encoding: 'utf8', timeout: 120000, maxBuffer: 16e6,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_EDITOR: 'true' } }).trim();
  const save = state => { mkdirSync(directory, { recursive: true }); writeFileSync(stateFile + '.tmp', JSON.stringify(state, null, 2) + '\n'); renameSync(stateFile + '.tmp', stateFile); };
  const status = () => existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf8')) : { status: 'not_started' };
  const revision = ref => git(['rev-parse', '--verify', ref + '^{commit}']);
  const branchExists = branch => { try { git(['show-ref', '--verify', '--quiet', 'refs/heads/' + branch]); return true; } catch { return false; } };
  const ancestor = (a, b) => { try { git(['merge-base', '--is-ancestor', a, b]); return true; } catch (error) { if (error.status === 1) return false; throw error; } };
  for (const branch of [config.customBranch, config.initialBase, ...config.featureBranches]) git(['check-ref-format', '--branch', branch]);
  if (config.upstreamBranch) git(['check-ref-format', '--branch', config.upstreamBranch]);

  async function check() {
    let tag, sha, upstreamRef;
    if (config.upstreamBranch) {
      tag = config.upstreamBranch; upstreamRef = 'refs/heads/' + tag;
      const output = git(['ls-remote', config.upstream, upstreamRef]);
      const entry = output.split('\n').map(line => line.split(/\s+/)).find(([, ref]) => ref === upstreamRef);
      sha = entry?.[0];
      if (!sha || !/^[a-f0-9]{40,64}$/.test(sha)) throw new Error('Upstream branch could not be resolved');
    } else {
      const release = await releaseProvider(config);
      if (release.draft || release.prerelease) throw new Error('Refusing draft/prerelease');
      tag = stableTag(release.tag_name); upstreamRef = 'refs/tags/' + tag;
      sha = tagCommit(git(['ls-remote', config.upstream, upstreamRef, upstreamRef + '^{}']), tag);
    }
    const base = branchExists(config.customBranch) ? revision('refs/heads/' + config.customBranch) : revision(config.initialBase);
    const features = config.featureBranches.map(branch => ({ branch, sha: revision('refs/heads/' + branch) }));
    let hasUpstream = false;
    try { hasUpstream = ancestor(sha, base); } catch { /* Remote commit may not be fetched yet. */ }
    const result = { checkedAt: new Date().toISOString(), tag, upstreamRef, upstreamSha: sha, base,
      initial: !branchExists(config.customBranch), features,
      needsPreparation: !branchExists(config.customBranch) || !hasUpstream || features.some(f => !ancestor(f.sha, base)) };
    mkdirSync(directory, { recursive: true }); writeFileSync(join(directory, 'check.json'), JSON.stringify(result, null, 2) + '\n');
    return result;
  }
  function log(state, text) { writeFileSync(join(state.runDirectory, 'run.log'), text + '\n', { flag: 'a' }); console.log(text); }
  function safeRun(state) {
    const run = inside(directory, state.runDirectory);
    if (run !== state.runDirectory || state.worktree !== join(run, 'worktree')) throw new Error('Invalid run paths');
    if (!/^neon-candidate\/[a-zA-Z0-9-]+$/.test(state.branch)) throw new Error('Invalid candidate branch');
    if (revision(state.branch) !== git(['rev-parse', 'HEAD'], state.worktree)) throw new Error('Candidate worktree switched to a different revision');
    if (git(['symbolic-ref', '--short', 'HEAD'], state.worktree) !== state.branch) throw new Error('Candidate worktree switched to a different branch');
  }
  function finish(state) {
    safeRun(state);
    if (git(['diff', '--name-only', '--diff-filter=U'], state.worktree)) throw new Error('Resolve and commit merge conflicts in ' + state.worktree + ' before resume');
    if (existsSync(resolve(state.worktree, git(['rev-parse', '--git-path', 'MERGE_HEAD'], state.worktree)))) throw new Error('Commit the completed merge before resume');
    for (; state.nextMerge < state.merges.length; state.nextMerge++) {
      const merge = state.merges[state.nextMerge];
      log(state, 'Merge: ' + merge.name); state.status = 'merging'; save(state);
      try { log(state, git(['-c', 'rerere.enabled=true', '-c', 'rerere.autoupdate=false', 'merge', '--no-edit', merge.sha], state.worktree)); }
      catch (error) {
        log(state, String(error.stdout ?? '') + '\n' + String(error.stderr ?? error.message));
        state.status = 'merge_failed'; state.error = String(error.message); state.conflicts = git(['diff', '--name-only', '--diff-filter=U'], state.worktree).split('\n').filter(Boolean); save(state);
        const index = git(['ls-files', '-u'], state.worktree).split('\n').filter(Boolean).map(line => {
          const [metadata, path] = line.split('\t'), [mode, object, stage] = metadata.split(' ');
          return { path, mode, object, stage: Number(stage), generated: path.startsWith('custom_components/neonplan3d/frontend/') };
        });
        writeFileSync(join(state.runDirectory, 'conflict-context.json'), JSON.stringify({ head: revision(state.branch), incoming: merge,
          upstream: { tag: state.upstreamTag, sha: state.upstreamSha }, contracts: config.contracts ?? [], index }, null, 2) + '\n');
        throw new Error('Merge stopped: ' + merge.name + '\nWorktree: ' + state.worktree + '\nConflicts: ' + state.conflicts.join(', ') + '\nResolve and commit there, then run resume.');
      }
    }
    save(state);
    // No candidate may bypass validation through uncommitted manual edits.
    if (git(['status', '--porcelain', '--untracked-files=all'], state.worktree)) throw new Error('Commit candidate edits before resume');
    state.status = 'testing'; state.steps = []; delete state.error; delete state.conflicts; save(state);
    if (config.requiredCustomFeatures?.length) {
      const path = inside(state.worktree, config.customFeatureManifest ?? 'docs/custom-features.json');
      const manifest = existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : {};
      const absent = config.requiredCustomFeatures.filter(id => !manifest.features?.some(f => f.id === id && f.implemented && f.tests?.length));
      if (absent.length) {
        state.status = 'checks_failed'; state.error = 'Missing custom features: ' + absent.join(', '); save(state);
        throw new Error(state.error);
      }
      for (const feature of manifest.features) {
        for (const test of feature.tests ?? []) {
          const file = inside(state.worktree, test);
          if (!existsSync(file) || !readFileSync(file, 'utf8').trim()) throw new Error('Missing feature tests: ' + feature.id);
        }
      }
    }
    for (const contract of config.contracts ?? []) {
      const missing = contract.files.filter(file => { const path = inside(state.worktree, file); return !existsSync(path) || !lstatSync(path).isFile() || !readFileSync(path, 'utf8').trim(); });
      if (missing.length) {
        state.status = 'checks_failed'; state.error = 'Missing regression coverage: ' + contract.feature + ': ' + missing.join(', '); save(state);
        throw new Error(state.error);
      }
      log(state, 'Feature contract: ' + contract.feature);
    }
    for (const step of config.steps) {
      log(state, 'Check: ' + step.name);
      const cwd = step.cwd ? inside(state.worktree, step.cwd) : state.worktree;
      try {
        const args = step.command.slice(1).map(arg => arg === '{custom_packs}' ? inside(root, config.customPackDirectory) : arg);
        const output = execFileSync(step.command[0], args, { cwd, encoding: 'utf8', timeout: 900000, maxBuffer: 32e6 });
        log(state, output); state.steps.push({ name: step.name, passed: true }); save(state);
      } catch (error) {
        log(state, String(error.stdout ?? '') + '\n' + String(error.stderr ?? error.message));
        state.steps.push({ name: step.name, passed: false }); state.status = 'checks_failed'; state.error = step.name; save(state);
        throw new Error('Validation failed: ' + step.name + '\nSee ' + join(state.runDirectory, 'run.log'));
      }
    }
    const dirty = git(['status', '--porcelain', '--untracked-files=all'], state.worktree);
    if (dirty) {
      // Build output only; unexpected changes made by tests must never be auto-committed.
      const changed = [...git(['diff', '--name-only'], state.worktree).split('\n'), ...git(['diff', '--cached', '--name-only'], state.worktree).split('\n')].filter(Boolean);
      const untracked = git(['ls-files', '--others', '--exclude-standard'], state.worktree).split('\n').filter(Boolean);
      if ([...changed, ...untracked].some(path => !path.startsWith('custom_components/neonplan3d/frontend/'))) throw new Error('Unexpected test/build modifications; inspect candidate before resume');
      git(['add', '--', 'custom_components/neonplan3d/frontend'], state.worktree);
      git(['commit', '-m', 'build: regenerate frontend for custom candidate'], state.worktree);
    }
    state.head = git(['rev-parse', 'HEAD'], state.worktree);
    const integration = join(state.worktree, 'custom_components/neonplan3d');
    function walk(path) {
      for (const entry of readdirSync(path, { withFileTypes: true })) {
        const full = join(path, entry.name);
        if (entry.isSymbolicLink() || lstatSync(full).isSymbolicLink()) throw new Error('Refusing archive symlink: ' + full);
        if (entry.name === '__pycache__' || entry.name.endsWith('.pyc')) continue;
        if (entry.isDirectory()) walk(full);
        else if (/\.(pem|key|HEIC)$/i.test(entry.name)) throw new Error('Refusing private file in archive: ' + full);
      }
    }
    walk(integration);
    state.artifact = join(state.runDirectory, 'neonplan3d.zip');
    // Never update an old ZIP, which could retain obsolete integration members.
    if (existsSync(state.artifact)) throw new Error('Artifact already exists; start a new prepare run');
    execFileSync('zip', ['-q', '-r', '-X', state.artifact, '.', '-x', '*/__pycache__/*', '*.pyc'], { cwd: integration });
    execFileSync('unzip', ['-t', state.artifact], { encoding: 'utf8' });
    state.sha256 = createHash('sha256').update(readFileSync(state.artifact)).digest('hex');
    state.manifestVersion = JSON.parse(readFileSync(join(integration, 'manifest.json'), 'utf8')).version;
    state.status = 'ready'; state.readyAt = new Date().toISOString(); save(state);
    return state;
  }
  async function prepare() {
    const previous = status();
    if (['merge_failed', 'merging', 'testing', 'checks_failed', 'ready'].includes(previous.status)) throw new Error('Existing candidate needs attention: ' + previous.status + '. Use status, resume or adopt; archive latest.json explicitly to start over.');
    const result = await check();
    if (!result.needsPreparation) return { status: 'up_to_date', ...result };
    const ref = 'refs/neon-updates/upstream/' + result.tag;
    git(['fetch', '--no-tags', config.upstream, result.upstreamRef + ':' + ref]);
    if (revision(ref) !== result.upstreamSha) throw new Error('Upstream release changed during check; refusing integration');
    const id = new Date().toISOString().replace(/[^0-9]/g, '') + '-' + randomUUID().slice(0, 8);
    const runDirectory = join(directory, 'runs', id), worktree = join(runDirectory, 'worktree'), branch = 'neon-candidate/' + id;
    mkdirSync(runDirectory, { recursive: true });
    git(['worktree', 'add', '-b', branch, worktree, result.base]);
    const state = { status: 'merging', branch, runDirectory, worktree, previousCustom: result.initial ? null : result.base,
      upstreamTag: result.tag, upstreamSha: result.upstreamSha, nextMerge: 0,
      merges: [...result.features.map(f => ({ name: f.branch, sha: f.sha })), { name: result.tag, sha: result.upstreamSha }] };
    save(state); return finish(state);
  }
  function resume() {
    const state = status();
    if (!['merging', 'merge_failed', 'testing', 'checks_failed'].includes(state.status)) throw new Error('No resumable candidate');
    try { return finish(state); } catch (error) { if (state.status === 'testing') { state.status = 'checks_failed'; state.error = error.message; save(state); } throw error; }
  }
  function adopt() {
    const state = status(); if (state.status !== 'ready') throw new Error('Only a fully checked candidate can be adopted');
    safeRun(state);
    if (revision(state.branch) !== state.head || git(['status', '--porcelain', '--untracked-files=all'], state.worktree)) throw new Error('Candidate changed since validation');
    if (createHash('sha256').update(readFileSync(state.artifact)).digest('hex') !== state.sha256) throw new Error('Artifact changed since validation');
    if (git(['worktree', 'list', '--porcelain']).split('\n').includes('branch refs/heads/' + config.customBranch)) throw new Error('custom is checked out in a worktree; refusing ref update');
    git(['update-ref', 'refs/heads/' + config.customBranch, state.head, state.previousCustom ?? '0'.repeat(state.head.length)]);
    state.status = 'adopted'; state.adoptedAt = new Date().toISOString(); save(state); return state;
  }
  function recheck() {
    const state = status();
    if (!['ready', 'checks_failed'].includes(state.status)) throw new Error('No checked candidate to revalidate');
    safeRun(state);
    if (git(['status', '--porcelain', '--untracked-files=all'], state.worktree)) throw new Error('Commit candidate changes before recheck');
    if (state.head && !ancestor(state.head, revision(state.branch))) throw new Error('Candidate history was replaced');
    if (state.artifact && existsSync(state.artifact)) {
      if (state.artifact !== join(state.runDirectory, 'neonplan3d.zip')) throw new Error('Invalid candidate artifact path');
      const archived = join(state.runDirectory, 'neonplan3d-checked-' + state.head.slice(0, 12) + '-' + Date.now() + '.zip');
      renameSync(state.artifact, archived);
      state.previousArtifact = { path: archived, sha256: state.sha256, head: state.head };
    }
    delete state.artifact; delete state.sha256;
    state.status = 'testing'; save(state);
    return finish(state);
  }
  async function locked(fn) {
    mkdirSync(directory, { recursive: true }); const lock = join(directory, 'lock.json');
    if (existsSync(lock)) {
      const owner = JSON.parse(readFileSync(lock, 'utf8')); let dead = false;
      try { process.kill(owner.pid, 0); } catch (e) { if (e.code === 'ESRCH') dead = true; else throw e; }
      if (!dead) throw new Error('Another update is running (PID ' + owner.pid + ')');
      unlinkSync(lock);
    }
    writeFileSync(lock, JSON.stringify({ pid: process.pid }), { flag: 'wx' });
    try { return await fn(); } finally { unlinkSync(lock); }
  }
  function schedule() {
    mkdirSync(directory, { recursive: true });
    const label = 'de.idaho.neonplan3d.update', file = join(directory, label + '.plist');
    if (existsSync(file)) throw new Error('Schedule template already exists: ' + file);
    const string = value => '<string>' + xmlEscape(value) + '</string>';
    const data = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0"><dict>\n' +
      '<key>Label</key>' + string(label) + '\n<key>ProgramArguments</key><array>' + [process.execPath, join(root, 'scripts/neon-update.mjs'), 'watch'].map(string).join('') + '</array>\n' +
      '<key>WorkingDirectory</key>' + string(root) + '\n<key>EnvironmentVariables</key><dict><key>PATH</key>' + string(process.env.PATH ?? '/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin') + '</dict>\n' +
      '<key>StartCalendarInterval</key><dict><key>Hour</key><integer>8</integer><key>Minute</key><integer>30</integer></dict>\n' +
      '<key>StandardOutPath</key>' + string(join(directory, 'schedule.out.log')) + '\n<key>StandardErrorPath</key>' + string(join(directory, 'schedule.error.log')) + '\n</dict></plist>\n';
    writeFileSync(file, data, { mode: 0o600 });
    return { status: 'template_only', file, dailyLocalTime: '08:30', label, installed: false };
  }
  return { check, prepare, resume, recheck, adopt, status, locked, schedule };
}
async function releaseProvider(config) {
  const response = await fetch(config.releaseApi, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'neonplan-local-updater' }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error('GitHub release lookup failed: HTTP ' + response.status);
  return response.json();
}
const help = `Local NeonPlan update automation (Node.js 24+)
Usage from this repository:
  node scripts/neon-update.mjs check     Latest original main (or configured release) + custom commits
  node scripts/neon-update.mjs prepare   Separate candidate worktree, merges, tests, build, ZIP
  node scripts/neon-update.mjs status    Last candidate, conflicts, logs and ZIP path
  node scripts/neon-update.mjs resume    Retry after manual merge resolution/commit or failed tests
  node scripts/neon-update.mjs recheck   Verify a committed follow-up; preserve the previous checked ZIP
  node scripts/neon-update.mjs adopt     Explicitly advance LOCAL custom branch to a checked candidate
  node scripts/neon-update.mjs watch     Check and prepare if needed; unresolved candidate blocks new runs
  node scripts/neon-update.mjs schedule  Write optional launchd template (daily 08:30); does not install it

Config: scripts/neon-update.config.json. All features/fixes must be committed in custom or configured branches.
Main working tree, main branch, furniture packs and HA are never overwritten. No push, release or HA restart.
Logs/ZIP/worktrees: private/update-automation/. Conflicts remain there for manual resolution.
Python checks need python3.13. Dependencies need network. First integration can require manual conflict fixes.
ZIP is a LOCAL TEST CANDIDATE with the upstream manifest version, not a published custom HACS release.
Own release numbering, GitHub publication and visual HA smoke testing are separate steps.
Optional schedule: run schedule, then activate the returned plist with launchctl bootstrap gui/$(id -u) <plist>.
Stop schedule: launchctl bootout gui/$(id -u)/de.idaho.neonplan3d.update. Not activated by this tool.
Never install a conflict candidate. Inspect status. Exit code 1 means manual attention is needed.
`;
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const command = process.argv[2] ?? 'help';
  if (['help', '--help', '-h'].includes(command)) console.log(help);
  else try {
    if (Number(process.versions.node.split('.')[0]) < 24) throw new Error('Node.js 24+ required');
    const root = resolve(import.meta.dirname, '..'), config = JSON.parse(readFileSync(join(import.meta.dirname, 'neon-update.config.json'), 'utf8'));
    const app = updater(root, config, releaseProvider);
    const commands = { check: app.check, prepare: app.prepare, status: app.status, resume: app.resume, recheck: app.recheck, adopt: app.adopt, schedule: app.schedule,
      watch: async () => { const result = await app.check(); return result.needsPreparation ? app.prepare() : { status: 'up_to_date', ...result }; } };
    if (!commands[command]) throw new Error('Unknown command: ' + command);
    const result = command === 'status' ? app.status() : await app.locked(commands[command]);
    console.log(JSON.stringify(result, null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
