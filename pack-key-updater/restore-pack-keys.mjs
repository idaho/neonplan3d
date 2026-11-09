// Restore local furniture-pack publisher keys after integration updates. No dependencies.
import { createHash, randomUUID } from "node:crypto";
import { chmodSync, constants, copyFileSync, existsSync, readFileSync, realpathSync, renameSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

export function loadKeys(path) {
  const text = readFileSync(path, "utf8");
  const keys = JSON.parse(text);
  if (!keys || Array.isArray(keys) || typeof keys !== "object" || !Object.keys(keys).length) {
    throw new Error("The key file must contain a non-empty JSON object.");
  }
  // Every accepted value is a plain Base64 string, so each JSON string followed by ':' is a key.
  const names = [...text.matchAll(/("(?:[^"\\]|\\.)*")\s*:/g)].map((m) => JSON.parse(m[1]));
  if (new Set(names).size !== names.length) throw new Error("Duplicate keys in the JSON configuration.");
  for (const [id, value] of Object.entries(keys)) {
    if (!/^[0-9a-f]{12}$/.test(id) || typeof value !== "string" || !/^[A-Za-z0-9+/]{43}=$/.test(value)) {
      throw new Error(`Invalid public key entry: ${id}`);
    }
    const bytes = Buffer.from(value, "base64");
    if (bytes.length !== 32 || bytes.toString("base64") !== value || createHash("sha256").update(bytes).digest("hex").slice(0, 12) !== id) {
      throw new Error(`Public key length or fingerprint does not match: ${id}`);
    }
  }
  return keys;
}

// Hide comments and Python strings, including docstrings, while retaining character positions.
function maskPython(source) {
  const chars = source.split("");
  const hide = (start, end) => {
    for (let p = start; p < end; p++) if (chars[p] !== "\n" && chars[p] !== "\r") chars[p] = " ";
  };
  for (let i = 0; i < source.length;) {
    if (source[i] === "#") {
      const end = source.indexOf("\n", i);
      const stop = end < 0 ? source.length : end;
      hide(i, stop);
      i = stop;
    } else if (source[i] === '"' || source[i] === "'") {
      const start = i;
      const quote = source[i];
      const marker = source.startsWith(quote.repeat(3), i) ? quote.repeat(3) : quote;
      i += marker.length;
      let closed = false;
      while (i < source.length) {
        if (source[i] === "\\") i += 2;
        else if (source.startsWith(marker, i)) {
          i += marker.length;
          closed = true;
          break;
        } else {
          if (marker.length === 1 && /[\r\n]/.test(source[i])) throw new Error("Unsupported Python string; file left unchanged.");
          i++;
        }
      }
      if (!closed) throw new Error("Unterminated Python string; file left unchanged.");
      hide(start, i);
    } else i++;
  }
  return chars.join("");
}

function dictionary(source) {
  const matches = [...maskPython(source).matchAll(/^PACK_PUBLIC_KEYS(?:[ \t]*:[^=\r\n]+)?[ \t]*=[ \t]*/gm)];
  if (matches.length !== 1) throw new Error("Expected exactly one PACK_PUBLIC_KEYS assignment; file left unchanged.");
  let pos = matches[0].index + matches[0][0].length;
  if (source[pos] !== "{") throw new Error("Expected a literal PACK_PUBLIC_KEYS dictionary; file left unchanged.");
  const existing = new Map();
  let lastValueEnd = null;
  let trailingComma = false;
  const skip = () => {
    while (pos < source.length) {
      if (/\s/.test(source[pos])) pos++;
      else if (source[pos] === "#") {
        const end = source.indexOf("\n", pos);
        pos = end < 0 ? source.length : end;
      } else break;
    }
  };
  const string = () => {
    const match = /^(['"])([^'"\\\r\n]*)\1/.exec(source.slice(pos));
    if (!match) throw new Error("Unsupported dictionary entry; expected plain string literals. File left unchanged.");
    pos += match[0].length;
    return match[2];
  };
  pos++;
  skip();
  while (source[pos] !== "}") {
    const id = string();
    skip();
    if (source[pos++] !== ":") throw new Error("Expected ':' in PACK_PUBLIC_KEYS; file left unchanged.");
    skip();
    const value = string();
    lastValueEnd = pos;
    if (existing.has(id)) throw new Error(`Duplicate existing public key: ${id}`);
    existing.set(id, value);
    skip();
    trailingComma = source[pos] === ",";
    if (trailingComma) {
      pos++;
      skip();
    } else if (source[pos] !== "}") throw new Error("Unsupported dictionary expression; file left unchanged.");
  }
  return { existing, closing: pos, lastValueEnd, trailingComma };
}

export function mergeKeys(source, keys) {
  const { existing, closing, lastValueEnd, trailingComma } = dictionary(source);
  const added = [];
  for (const [id, value] of Object.entries(keys)) {
    if (existing.has(id) && existing.get(id) !== value) throw new Error(`Conflicting existing public key: ${id}`);
    if (!existing.has(id)) added.push(id);
  }
  if (!added.length) return { source, added };
  const newline = source.includes("\r\n") ? "\r\n" : "\n";
  const lineStart = source.lastIndexOf("\n", closing - 1) + 1;
  const prefix = source.slice(lineStart, closing);
  const multiline = /^[ \t]*$/.test(prefix);
  const indent = (multiline ? prefix : "") + "    ";
  const insertion = (multiline ? "" : newline) + indent + "# Local furniture-pack publishers" + newline
    + added.map((id) => `${indent}${JSON.stringify(id)}: ${JSON.stringify(keys[id])},`).join(newline) + newline;
  const at = multiline ? lineStart : closing;
  let updated = source.slice(0, at) + insertion + source.slice(at);
  if (lastValueEnd !== null && !trailingComma) updated = updated.slice(0, lastValueEnd) + "," + updated.slice(lastValueEnd);
  const checked = dictionary(updated).existing;
  if (checked.size !== existing.size + added.length || added.some((id) => checked.get(id) !== keys[id])) {
    throw new Error("Updated dictionary verification failed; file left unchanged.");
  }
  return { source: updated, added };
}

export function restore(path, keys, dryRun = false) {
  const target = realpathSync(path);
  const original = readFileSync(target);
  const source = original.toString("utf8");
  if (!Buffer.from(source, "utf8").equals(original)) throw new Error("packs.py must be UTF-8; file left unchanged.");
  const updated = mergeKeys(source, keys);
  if (!updated.added.length || dryRun) return { added: updated.added, backup: null };
  const mode = statSync(target).mode & 0o777;
  const suffix = randomUUID();
  const temp = join(dirname(target), `.packs-local-keys-${suffix}.tmp`);
  const backup = `${target}.before-local-keys-${suffix}.bak`;
  let tempCreated = false;
  try {
    writeFileSync(temp, updated.source, { encoding: "utf8", flag: "wx", mode });
    tempCreated = true;
    chmodSync(temp, mode);
    if (!readFileSync(target).equals(original)) throw new Error("packs.py changed during preparation; retry after the update.");
    copyFileSync(target, backup, constants.COPYFILE_EXCL);
    chmodSync(backup, mode);
    if (!readFileSync(backup).equals(original) || !readFileSync(target).equals(original)) {
      throw new Error("packs.py changed during backup; file left unchanged.");
    }
    renameSync(temp, target);
  } finally {
    if (tempCreated && existsSync(temp)) unlinkSync(temp);
  }
  return { added: updated.added, backup };
}

export function main(args = process.argv.slice(2)) {
  let packs = "/config/custom_components/neonplan3d/packs.py";
  let keys = join(here, "custom-pack-keys.json");
  let dryRun = false;
  try {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === "--dry-run") dryRun = true;
      else if (args[i] === "--help" || args[i] === "-h") {
        console.log("Usage: node restore-pack-keys.mjs [--packs /path/to/packs.py] [--keys /path/to/keys.json] [--dry-run]");
        return 0;
      } else if (["--packs", "--keys"].includes(args[i]) && args[i + 1] && !args[i + 1].startsWith("--")) {
        if (args[i] === "--packs") packs = args[++i];
        else keys = args[++i];
      } else throw new Error(`Unknown option or missing value: ${args[i]}`);
    }
    const result = restore(packs, loadKeys(keys), dryRun);
    if (!result.added.length) console.log("All configured public keys are already present; no changes needed.");
    else if (dryRun) console.log(`Would add ${result.added.length} public key(s): ${result.added.join(", ")}`);
    else {
      console.log(`Added ${result.added.length} public key(s): ${result.added.join(", ")}`);
      console.log(`Backup: ${result.backup}`);
      console.log("Restart Home Assistant to load the restored public keys.");
    }
    return 0;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return 1;
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) process.exitCode = main();
