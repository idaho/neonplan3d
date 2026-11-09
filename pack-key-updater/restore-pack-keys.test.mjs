import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync, chmodSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { loadKeys, mergeKeys, restore } from "./restore-pack-keys.mjs";

const raw = Buffer.from(Array.from({ length: 32 }, (_, i) => i));
const id = createHash("sha256").update(raw).digest("hex").slice(0, 12);
const keys = { [id]: raw.toString("base64") };
const source = '# Original\nPACK_PUBLIC_KEYS: dict[str, str] = {\n    # Publisher\n    "original": "keep",\n}\nAFTER = 42\n';

test("preserves existing entries and comments; repeat runs do not add duplicates", () => {
  const result = mergeKeys(source, keys);
  assert.deepEqual(result.added, [id]);
  assert.ok(result.source.includes('# Publisher\n    "original": "keep",'));
  assert.ok(result.source.endsWith("}\nAFTER = 42\n"));
  assert.deepEqual(mergeKeys(result.source, keys), { source: result.source, added: [] });
});

test("handles CRLF, inline dictionaries, missing commas and empty dictionaries", () => {
  for (const original of [
    '# Heizgeräte\r\nPACK_PUBLIC_KEYS = {"old": "value"}\r\n',
    'PACK_PUBLIC_KEYS = {\n    "old": "value" # comment\n}\n',
    "PACK_PUBLIC_KEYS = {}\n",
  ]) {
    const result = mergeKeys(original, keys);
    assert.deepEqual(result.added, [id]);
    assert.equal(mergeKeys(result.source, keys).added.length, 0);
    if (original.includes("\r\n")) assert.equal(result.source.replaceAll("\r\n", "").includes("\n"), false);
  }
});

test("ignores commented assignments and assignments inside docstrings", () => {
  const prefix = '# PACK_PUBLIC_KEYS = {}\n"""Example:\nPACK_PUBLIC_KEYS = {}\n"""\n';
  const result = mergeKeys(prefix + source, keys);
  assert.ok(result.source.startsWith(prefix));
  assert.deepEqual(result.added, [id]);
});

test("rejects conflicts, duplicate dictionaries, duplicate entries and unsupported syntax", () => {
  for (const original of [
    "OTHER = {}",
    "PACK_PUBLIC_KEYS = load()",
    "PACK_PUBLIC_KEYS = {}\nPACK_PUBLIC_KEYS = {}",
    'PACK_PUBLIC_KEYS = {"x": "a", "x": "b"}',
    'PACK_PUBLIC_KEYS = {"x": compute()}',
    "PACK_PUBLIC_KEYS = {**OTHER}",
    `PACK_PUBLIC_KEYS = {"${id}": "different"}`,
    'PACK_PUBLIC_KEYS = {"x": "unterminated}',
  ]) assert.throws(() => mergeKeys(original, keys));
});

test("validates key length, Base64, fingerprint and duplicate configuration keys", (t) => {
  const dir = mkdtempSync(join(tmpdir(), "neonplan-key-validation-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const path = join(dir, "keys.json");
  writeFileSync(path, JSON.stringify(keys));
  assert.deepEqual(loadKeys(path), keys);
  for (const invalid of [{}, [], { [id]: "invalid" }, { ["0".repeat(12)]: keys[id] }, { [id]: 123 }]) {
    writeFileSync(path, JSON.stringify(invalid));
    assert.throws(() => loadKeys(path));
  }
  writeFileSync(path, `{"${id}":"a","${id}":"b"}`);
  assert.throws(() => loadKeys(path));
});

test("dry-run writes nothing; applying makes one backup and preserves permissions", (t) => {
  const dir = mkdtempSync(join(tmpdir(), "neonplan-key-restore-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const path = join(dir, "packs.py");
  writeFileSync(path, source);
  chmodSync(path, 0o640);
  assert.deepEqual(restore(path, keys, true), { added: [id], backup: null });
  assert.deepEqual(readdirSync(dir), ["packs.py"]);
  const result = restore(path, keys);
  assert.equal(readFileSync(result.backup, "utf8"), source);
  assert.equal(statSync(path).mode & 0o777, 0o640);
  assert.deepEqual(restore(path, keys), { added: [], backup: null });
  assert.equal(readdirSync(dir).length, 2);
});

test("supports multiple custom keys without changing unrelated code", () => {
  const other = Buffer.alloc(32, 7);
  const second = createHash("sha256").update(other).digest("hex").slice(0, 12);
  const result = mergeKeys(source, { ...keys, [second]: other.toString("base64") });
  assert.deepEqual(result.added, [id, second]);
  assert.ok(result.source.endsWith("}\nAFTER = 42\n"));
});

test("CLI works against the actual integration and supplied test key without changing it", () => {
  const script = fileURLToPath(new URL("./restore-pack-keys.mjs", import.meta.url));
  const target = fileURLToPath(new URL("../custom_components/neonplan3d/packs.py", import.meta.url));
  const before = readFileSync(target);
  const result = spawnSync(process.execPath, [script, "--packs", target, "--dry-run"], { encoding: "utf8", cwd: tmpdir() });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Would add 1 public key/);
  assert.deepEqual(readFileSync(target), before);
  const invalid = spawnSync(process.execPath, [script, "--packs"], { encoding: "utf8" });
  assert.equal(invalid.status, 1);
});
