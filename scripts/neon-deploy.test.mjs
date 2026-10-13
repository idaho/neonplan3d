import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { deploySsh, install, remoteScript, sshOptions, targetPaths, verifiedArtifact } from './neon-deploy.mjs';

function fixture(fn) {
  const root = mkdtempSync(join(tmpdir(), 'neon-deploy-test-'));
  try { fn(root); } finally { rmSync(root, { recursive: true }); }
}
test('defaults to the configured HA SSH host and rejects unsafe arguments', () => {
  assert.equal(sshOptions([]).host, '192.168.0.16');
  assert.equal(sshOptions([]).mounted, false);
  for (const args of [['--host','-bad'], ['--host','x;touch y'], ['--port','0'], ['--restart'], ['--wat']]) assert.throws(() => sshOptions(args));
  assert.equal(sshOptions(['--apply','--restart']).restart, true);
});
test('SSH dry run performs only a read-only probe; apply transfers verified tar bytes', () => {
  const calls = [];
  const run = (...args) => { calls.push(args); return Buffer.from('archive'); };
  deploySsh('/fixture', sshOptions([]), run);
  assert.equal(calls.length, 1); assert.equal(calls[0][0], 'ssh');
  assert.ok(!calls[0][1].at(-1).includes('mkdir'));
  calls.length = 0;
  deploySsh('/fixture', sshOptions(['--apply','--restart']), run);
  assert.deepEqual(calls.map(c => c[0]), ['ssh','tar','ssh']);
  assert.equal(calls[2][2].input.toString(), 'archive');
  assert.match(calls[2][1].at(-1), /ha core restart/);
});
test('remote installer has valid shell syntax, backup, lock and rollback', () => {
  const script = remoteScript('a'.repeat(64));
  execFileSync('sh', ['-n'], { input:script });
  assert.match(script, /mv "\$target" "\$backup"/);
  assert.match(script, /mv "\$backup" "\$target"/);
  assert.match(script, /mkdir "\$lock"/);
  assert.ok(!script.includes('ha core restart'));
  assert.throws(() => remoteScript('x'));
});
test('refuses a non-HA folder and symlinked integration target', () => fixture(root => {
  assert.throws(() => targetPaths(root), /Konfigurationsordner/);
  writeFileSync(join(root, 'configuration.yaml'), '');
  mkdirSync(join(root, 'custom_components'));
  mkdirSync(join(root, 'elsewhere'));
  symlinkSync(join(root, 'elsewhere'), join(root, 'custom_components/neonplan3d'));
  assert.throws(() => targetPaths(root), /Unsicheres Ziel/);
}));
test('real checked ZIP can be validated in dry-run without touching the target', { skip: !existsSync(new URL('../private/update-automation/latest.json', import.meta.url)) }, () => fixture(root => {
  writeFileSync(join(root, 'configuration.yaml'), '');
  const output = execFileSync(process.execPath, [new URL('./neon-deploy.mjs', import.meta.url).pathname, '--config', root], {encoding:'utf8'});
  assert.match(output, /Testmodus: nichts verändert/);
  assert.throws(() => readFileSync(join(root, 'custom_components/neonplan3d/manifest.json')));
}));
test('installs a complete version and preserves the old one outside custom_components', () => fixture(root => {
  writeFileSync(join(root, 'configuration.yaml'), '');
  const paths = targetPaths(root);
  mkdirSync(paths.target, { recursive: true });
  writeFileSync(join(paths.target, 'old.py'), 'old');
  const source = join(root, 'source'); mkdirSync(source);
  writeFileSync(join(source, 'new.py'), 'new');
  install(source, paths, { head: 'fixture' });
  assert.equal(readFileSync(join(paths.target, 'new.py'), 'utf8'), 'new');
  assert.throws(() => readFileSync(join(paths.target, 'old.py')));
  assert.equal(readFileSync(join(root, 'configuration.yaml'), 'utf8'), '');
}));
test('rejects failed checks and modified artifacts', () => fixture(root => {
  mkdirSync(join(root, 'scripts')); mkdirSync(join(root, 'state'));
  writeFileSync(join(root, 'scripts/neon-update.config.json'), JSON.stringify({stateDirectory:'state'}));
  const artifact = join(root, 'build.zip'); writeFileSync(artifact, 'fixture');
  const state = { status:'adopted', steps:[{passed:true}], artifact, sha256:createHash('sha256').update('fixture').digest('hex') };
  const save = () => writeFileSync(join(root, 'state/latest.json'), JSON.stringify(state));
  save(); assert.equal(verifiedArtifact(root).artifact, artifact);
  state.steps[0].passed = false; save(); assert.throws(() => verifiedArtifact(root), /geprüfter Build/);
  state.steps[0].passed = true; save(); writeFileSync(artifact, 'tampered');
  assert.throws(() => verifiedArtifact(root), /Prüfsumme/);
}));
