// Deploy only the updater's verified artifact. Default: existing HA SSH connection.
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

export function quote(value) { return "'" + value.replaceAll("'", "'\\''") + "'"; }

export function sshOptions(args) {
  const options = { host: '192.168.0.16', config: '/config', apply: false, restart: false, mounted: false };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--apply') options.apply = true;
    else if (arg === '--restart') options.restart = true;
    else if (['--host', '--config', '--port'].includes(arg)) {
      const value = args[++i];
      if (!value || value.startsWith('--')) throw new Error('Wert fehlt: ' + arg);
      if (arg === '--config') options.mounted = true;
      options[arg.slice(2)] = arg === '--port' ? Number(value) : value;
    } else throw new Error('Unbekannte Option: ' + arg);
  }
  if (!/^[a-zA-Z0-9_][a-zA-Z0-9_.@:-]*$/.test(options.host)) throw new Error('Ungültiges SSH-Ziel.');
  if (options.port !== undefined && (!Number.isInteger(options.port) || options.port < 1 || options.port > 65535)) throw new Error('Ungültiger SSH-Port.');
  if (options.restart && (!options.apply || options.mounted)) throw new Error('--restart benötigt SSH und --apply.');
  return options;
}

export function remoteScript(hash, restart = false) {
  if (!/^[a-f0-9]{64}$/.test(hash)) throw new Error('Ungültige Transfer-Prüfsumme.');
  return `set -eu
config=/config
target=/config/custom_components/neonplan3d
backups=/config/neonplan-deploy-backups
test -f "$config/configuration.yaml"
for folder in "$config/custom_components" "$target" "$backups"; do
  test ! -L "$folder" || exit 1
  if test -e "$folder"; then test -d "$folder" || exit 1; fi
done
mkdir -p "$config/custom_components" "$backups"
lock="$backups/deploy.lock"
mkdir "$lock" || { echo 'Anderes Deployment läuft; Ziel unverändert.' >&2; exit 1; }
trap 'rmdir "$lock"' EXIT
trap 'exit 1' HUP INT TERM
stage=$(mktemp -d "$config/custom_components/.neonplan-stage.XXXXXX")
upload=$(mktemp "$backups/upload.XXXXXX")
cat > "$upload"
test "$(sha256sum "$upload" | cut -d ' ' -f 1)" = '${hash}' || { echo 'Transfer-Prüfsumme falsch; Ziel unverändert.' >&2; exit 1; }
tar -xf "$upload" -C "$stage"
test -f "$stage/manifest.json" && test -f "$stage/__init__.py" && test -f "$stage/frontend/neonplan3d.js"
backup="$backups/neonplan3d-$(date -u +%Y%m%dT%H%M%SZ)-$(basename "$stage")"
saved=0
if test -e "$target"; then mv "$target" "$backup"; saved=1; fi
if ! mv "$stage" "$target"; then
  if test "$saved" = 1; then mv "$backup" "$target"; fi
  echo 'Installation fehlgeschlagen; vorheriger Stand zurückgesetzt.' >&2; exit 1
fi
rm -f "$upload"
printf 'Installiert: %s\\n' "$target"
if test "$saved" = 1; then printf 'Sicherung: %s\\n' "$backup"; fi
${restart ? 'ha core restart' : "echo 'Home Assistant bitte neu starten.'"}
`;
}

export function deploySsh(source, options, run = execFileSync) {
  const sshArgs = ['-T', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=15'];
  if (options.port) sshArgs.push('-p', String(options.port));
  sshArgs.push('--', options.host);
  const probe = `set -eu; test -f /config/configuration.yaml; test ! -L /config/custom_components; test ! -L /config/custom_components/neonplan3d; test ! -L /config/neonplan-deploy-backups; command -v tar; command -v sha256sum; command -v mktemp${options.restart ? '; command -v ha' : ''}`;
  run('ssh', [...sshArgs, probe], {stdio: ['pipe', 'inherit', 'inherit']});
  if (!options.apply) { console.log('SSH-Testmodus: nichts verändert. Installation mit --apply.'); return; }
  const archive = run('tar', ['-cf', '-', '-C', source, '.'], {maxBuffer: 64 * 1024 * 1024});
  const hash = createHash('sha256').update(archive).digest('hex');
  run('ssh', [...sshArgs, 'sh -c ' + quote(remoteScript(hash, options.restart))], {input: archive, stdio:['pipe', 'inherit', 'inherit']});
}

export function main(args = process.argv.slice(2)) {
  if (args.includes('--help')) {
    console.log('node scripts/neon-deploy.mjs [--apply] [--restart] [--host SSH-Ziel] [--port PORT]\nStandard: SSH zu 192.168.0.16, bestehende ~/.ssh/config, Ziel /config.\nOhne --apply: nur prüfen. --restart: HA nach erfolgreicher Installation neu starten.\nOptionaler Netzwerkordner: --config /Volumes/config. Kein HACS-Wechsel oder Pack-Import.');
    return;
  }
  const options = sshOptions(args);
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const state = verifiedArtifact(root);
  const paths = options.mounted ? targetPaths(options.config) : null;
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
    console.log('Geprüft: NeonPlan ' + manifest.version + ', Commit ' + state.head + '\nZiel: ' + (paths?.target ?? options.host + ':/config/custom_components/neonplan3d'));
    if (!paths) deploySsh(temporary, options);
    else if (options.apply) install(temporary, paths, state);
    else console.log('Testmodus: nichts verändert. Für Installation denselben Aufruf mit --apply starten.');
  } finally { rmSync(temporary, { recursive: true }); }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error('Deployment abgebrochen: ' + error.message); process.exitCode = 1; }
}
