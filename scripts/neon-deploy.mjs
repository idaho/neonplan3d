// Deploy only the updater's verified artifact to a mounted HA config folder.
import { createHash, randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function verifiedArtifact(root) {
  const config = JSON.parse(readFileSync(join(root, 'scripts/neon-update.config.json'), 'utf8'));
  const state = JSON.parse(readFileSync(resolve(root, config.stateDirectory, 'latest.json'), 'utf8'));
  if (!['ready', 'adopted'].includes(state.status) || !state.steps?.length || state.steps.some(s => s.passed !== true)) {
    throw new Error('Kein vollständig geprüfter Build. Zuerst neon-update prepare/resume ausführen.');
  }
  if (!/^[a-f0-9]{64}$/.test(state.sha256 ?? '')) throw new Error('Ungültige Prüfsumme.');
  const artifact = resolve(state.artifact);
  if (createHash('sha256').update(readFileSync(artifact)).digest('hex') !== state.sha256) throw new Error('ZIP-Prüfsumme stimmt nicht.');
  return { ...state, artifact };
}

export function targetPaths(configFolder) {
  const config = realpathSync(configFolder);
  if (!lstatSync(config).isDirectory() || !existsSync(join(config, 'configuration.yaml'))) {
    throw new Error('Ziel muss der HA-Konfigurationsordner mit configuration.yaml sein.');
  }
  const components = join(config, 'custom_components');
  const target = join(components, 'neonplan3d');
  const backups = join(config, 'neonplan-deploy-backups');
  for (const path of [components, target, backups]) {
    if (existsSync(path) && (!lstatSync(path).isDirectory() || lstatSync(path).isSymbolicLink())) {
      throw new Error('Unsicheres Ziel (kein echter Ordner): ' + path);
    }
  }
  return { config, components, target, backups };
}

export function install(source, paths, metadata) {
  mkdirSync(paths.components, { recursive: true });
  mkdirSync(paths.backups, { recursive: true });
  const id = new Date().toISOString().replace(/[:.]/g, '-') + '-' + randomUUID();
  const staging = join(paths.components, '.neonplan-stage-' + id);
  const backup = join(paths.backups, 'neonplan3d-' + id);
  // Never merge two versions; prepare the complete new directory first.
  cpSync(source, staging, { recursive: true, errorOnExist: true, force: false });
  let saved = false;
  try {
    if (existsSync(paths.target)) { renameSync(paths.target, backup); saved = true; }
    renameSync(staging, paths.target);
  } catch (error) {
    if (saved && !existsSync(paths.target)) renameSync(backup, paths.target);
    throw error;
  } finally {
    if (existsSync(staging)) rmSync(staging, { recursive: true });
  }
  console.log('Installiert: ' + paths.target + '\nBuild: ' + metadata.head);
  if (saved) console.log('Wiederherstellung: neuen neonplan3d-Ordner beiseitelegen und diesen Ordner zurückkopieren:\n' + backup);
  console.log('Jetzt Home Assistant neu starten, anschließend Browser/Frontend-Cache neu laden.');
}

export function main(args = process.argv.slice(2)) {
  if (args.includes('--help')) {
    console.log('node scripts/neon-deploy.mjs --config /Volumes/config [--apply]\nOhne --apply: nur prüfen. Ziel ist ein eingebundener HA-Konfigurationsordner.\nKein Neustart, keine HACS-Änderung, kein Möbelpack-Import.');
    return;
  }
  const at = args.indexOf('--config');
  if (at < 0 || !args[at + 1] || args.some((v, i) => i !== at + 1 && !['--config', '--apply'].includes(v))) {
    throw new Error('Aufruf: node scripts/neon-deploy.mjs --config /Volumes/config [--apply]');
  }
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const state = verifiedArtifact(root);
  const paths = targetPaths(args[at + 1]);
  const temporary = mkdtempSync(join(tmpdir(), 'neonplan-deploy-'));
  try {
    // Validate every entry before extracting; no traversal or symlinks from ZIPs.
    execFileSync('python3', ['-c', `import zipfile,pathlib,stat,sys
with zipfile.ZipFile(sys.argv[1]) as z:
 for entry in z.infolist():
  p=pathlib.PurePosixPath(entry.filename)
  if p.is_absolute() or '..' in p.parts or '\\\\' in entry.filename or stat.S_ISLNK(entry.external_attr >> 16):
   raise ValueError('Unsafe archive entry')
 z.extractall(sys.argv[2])`, state.artifact, temporary], { stdio: 'pipe' });
    const manifest = JSON.parse(readFileSync(join(temporary, 'manifest.json'), 'utf8'));
    if (manifest.domain !== 'neonplan3d' || manifest.version !== state.manifestVersion || !existsSync(join(temporary, '__init__.py')) || !existsSync(join(temporary, 'frontend/neonplan3d.js'))) {
      throw new Error('ZIP enthält nicht die erwartete Integration.');
    }
    console.log('Geprüft: NeonPlan ' + manifest.version + ', Commit ' + state.head + '\nZiel: ' + paths.target);
    if (args.includes('--apply')) install(temporary, paths, state);
    else console.log('Testmodus: nichts verändert. Für Installation denselben Aufruf mit --apply starten.');
  } finally { rmSync(temporary, { recursive: true }); }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error('Deployment abgebrochen: ' + error.message); process.exitCode = 1; }
}
