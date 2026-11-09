// Run locally; use the user's existing OpenSSH configuration to update packs.py remotely.
import { spawnSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { loadKeys, mergeKeys } from "./restore-pack-keys.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const defaultHost = "192.168.0.16";
const defaultPacks = "/config/custom_components/neonplan3d/packs.py";

export function validateConfig(config) {
  if (!config || typeof config !== "object" || typeof config.host !== "string"
    || !/^[A-Za-z0-9_][A-Za-z0-9_.@:\[\]-]*$/.test(config.host)) {
    throw new Error("Enter an SSH alias or user@host, without spaces or SSH options.");
  }
  if (typeof config.packs !== "string" || !config.packs.startsWith("/")
    || !config.packs.endsWith("/packs.py") || /[\r\n\0]/.test(config.packs)) {
    throw new Error("The remote file must be an absolute path ending in /packs.py.");
  }
  if (config.port !== undefined && (!Number.isInteger(config.port) || config.port < 1 || config.port > 65535)) {
    throw new Error("SSH port must be a number between 1 and 65535.");
  }
  return config;
}

export function shellQuote(text) {
  return "'" + text.replaceAll("'", "'\\''") + "'";
}

export function remoteWriteCommand(target, original, updated) {
  // Only known paths and hashes enter shell code. File contents travel separately through stdin.
  const backup = `${target}.before-local-keys-${randomUUID()}.bak`;
  const beforeHash = createHash("sha256").update(original).digest("hex");
  const afterHash = createHash("sha256").update(updated).digest("hex");
  const script = `set -eu
target=${shellQuote(target)}
backup=${shellQuote(backup)}
test -f "$target" && test ! -L "$target" || { echo "Target missing or symlink; file left unchanged." >&2; exit 1; }
if command -v sha256sum >/dev/null 2>&1; then
  hash_file() { sha256sum "$1" | cut -d ' ' -f 1; }
elif command -v shasum >/dev/null 2>&1; then
  hash_file() { shasum -a 256 "$1" | cut -d ' ' -f 1; }
else
  echo "Remote sha256sum or shasum is required; file left unchanged." >&2; exit 1
fi
test "$(hash_file "$target")" = '${beforeHash}' || { echo "packs.py changed; retry after the update." >&2; exit 1; }
temp=$(mktemp "${target}.local-keys.XXXXXX")
trap 'rm -f -- "$temp"' EXIT
trap 'exit 1' HUP INT TERM
cp -p -- "$target" "$temp"
base64 -d > "$temp"
test "$(hash_file "$temp")" = '${afterHash}' || { echo "Upload verification failed; file left unchanged." >&2; exit 1; }
test "$(hash_file "$target")" = '${beforeHash}' || { echo "packs.py changed; file left unchanged." >&2; exit 1; }
test ! -e "$backup"
cp -p -- "$target" "$backup"
test "$(hash_file "$backup")" = '${beforeHash}' && test "$(hash_file "$target")" = '${beforeHash}' || { echo "packs.py changed during backup; file left unchanged." >&2; exit 1; }
mv -f -- "$temp" "$target"
printf '%s\\n' "$backup"
`;
  return { command: `sh -c ${shellQuote(script)}`, backup };
}

function ssh(config, command, input) {
  const args = ["-T", "-o", "ConnectTimeout=15"];
  if (config.port) args.push("-p", String(config.port));
  args.push("--", config.host, command);
  const result = spawnSync("ssh", args, {
    input,
    stdio: ["pipe", "pipe", "inherit"],
    maxBuffer: 8 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`SSH command failed (exit ${result.status ?? result.signal}).`);
  return result.stdout;
}

export function updateRemote(config, keys, dryRun = false, runSsh = ssh) {
  validateConfig(config);
  const original = runSsh(config, `cat -- ${shellQuote(config.packs)}`);
  const source = original.toString("utf8");
  if (!Buffer.from(source, "utf8").equals(original)) throw new Error("Remote packs.py must be UTF-8; file left unchanged.");
  const result = mergeKeys(source, keys);
  if (!result.added.length || dryRun) return { added: result.added, backup: null };
  const updated = Buffer.from(result.source, "utf8");
  const write = remoteWriteCommand(config.packs, original, updated);
  runSsh(config, write.command, updated.toString("base64"));
  const saved = runSsh(config, `cat -- ${shellQuote(config.packs)}`);
  if (!saved.equals(updated)) throw new Error(`Remote verification failed. Backup available at ${write.backup}`);
  return { added: result.added, backup: write.backup };
}

export function parseArgs(args) {
  const config = { host: defaultHost, packs: defaultPacks };
  let dryRun = false;
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === "--dry-run") dryRun = true;
    else if (arg === "--host" || arg === "--packs") {
      const value = args[++index];
      if (!value || value.startsWith("--")) throw new Error(`Missing value for ${arg}.`);
      config[arg.slice(2)] = value;
    } else throw new Error(`Unknown option: ${arg}. Use --dry-run, --host or --packs.`);
  }
  return { config: validateConfig(config), dryRun };
}

export async function main(args = process.argv.slice(2)) {
  try {
    const { config, dryRun } = parseArgs(args);
    const result = updateRemote(config, loadKeys(join(here, "custom-pack-keys.json")), dryRun);
    if (!result.added.length) console.log("Alle öffentlichen Schlüssel sind bereits vorhanden. Keine Änderung nötig.");
    else if (dryRun) console.log(`Würde ${result.added.length} Schlüssel ergänzen: ${result.added.join(", ")}`);
    else {
      console.log(`Ergänzt: ${result.added.join(", ")}`);
      console.log(`Sicherung auf Home Assistant: ${result.backup}`);
      console.log("Starte Home Assistant neu, damit die Schlüssel geladen werden.");
    }
    return 0;
  } catch (error) {
    console.error(`Fehler: ${error.message}`);
    return 1;
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) process.exitCode = await main();
