import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { loadKeys, mergeKeys } from "./restore-pack-keys.mjs";
import { parseArgs, remoteWriteCommand, shellQuote, updateRemote, validateConfig } from "./ssh-update.mjs";

const keys = loadKeys(new URL("./custom-pack-keys.json", import.meta.url));
const source = Buffer.from('PACK_PUBLIC_KEYS = {"publisher": "keep"}\n');
const updated = Buffer.from(mergeKeys(source.toString(), keys).source);
const config = { host: "root@homeassistant.local", packs: "/config/custom_components/neonplan3d/packs.py" };

test("defaults use the supplied IP and existing SSH configuration without local settings", () => {
  assert.deepEqual(parseArgs([]), { config: { ...config, host: "192.168.0.16" }, dryRun: false });
  assert.deepEqual(parseArgs(["--host", "ha-alias", "--dry-run"]), {
    config: { ...config, host: "ha-alias" }, dryRun: true,
  });
  assert.throws(() => parseArgs(["--host"]), /Missing value/);
  assert.throws(() => parseArgs(["--setup"]), /Unknown option/);
});

test("validates SSH destinations, ports and remote paths", () => {
  assert.equal(validateConfig(config), config);
  validateConfig({ ...config, host: "ha-alias", port: 2222 });
  for (const bad of [
    { host: "-oProxyCommand=evil" }, { host: "root@host;touch /tmp/x" },
    { host: "host\ncommand" }, { port: 0 }, { port: 65536 }, { port: "22" },
    { packs: "relative/packs.py" }, { packs: "/config/packs.py\n" },
  ]) assert.throws(() => validateConfig({ ...config, ...bad }));
});

test("shell quoting preserves special characters without executing them", () => {
  const value = "a'b $HOME `id` $(id)";
  const result = spawnSync("sh", ["-c", `printf '%s' ${shellQuote(value)}`], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, value);
});

test("dry-run and repeat runs only read the remote file", () => {
  for (const [contents, dryRun, expected] of [[source, true, Object.keys(keys)], [updated, false, []]]) {
    let calls = 0;
    const result = updateRemote(config, keys, dryRun, (_config, command, input) => {
      calls++;
      assert.match(command, /^cat -- /);
      assert.equal(input, undefined);
      return contents;
    });
    assert.deepEqual(result, { added: expected, backup: null });
    assert.equal(calls, 1);
  }
});

test("SSH update uploads separately and verifies the remote result", () => {
  let calls = 0;
  const result = updateRemote(config, keys, false, (_config, command, input) => {
    calls++;
    if (calls === 1) return source;
    if (calls === 2) {
      assert.match(command, /^sh -c /);
      assert.deepEqual(Buffer.from(input, "base64"), updated);
      return Buffer.alloc(0);
    }
    return updated;
  });
  assert.equal(calls, 3);
  assert.deepEqual(result.added, Object.keys(keys));
  assert.ok(result.backup.startsWith(config.packs + ".before-local-keys-"));
  assert.throws(() => updateRemote(config, keys, false, () => source), /verification failed/);
  assert.throws(() => updateRemote(config, keys, false, () => Buffer.from([0xff])), /UTF-8/);
});

test("remote shell preserves permissions and backup, including paths with quotes", (t) => {
  const dir = mkdtempSync(join(tmpdir(), "neonplan-ssh-quote'-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const target = join(dir, "packs.py");
  writeFileSync(target, source);
  chmodSync(target, 0o640);
  const write = remoteWriteCommand(target, source, updated);
  const result = spawnSync("sh", ["-c", write.command], { input: updated.toString("base64"), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(readFileSync(target), updated);
  assert.deepEqual(readFileSync(write.backup), source);
  assert.equal(statSync(target).mode & 0o777, 0o640);
  assert.equal(readdirSync(dir).length, 2);
});

test("remote shell refuses changed originals and invalid uploads without replacing them", (t) => {
  const dir = mkdtempSync(join(tmpdir(), "neonplan-ssh-refusal-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const target = join(dir, "packs.py");
  for (const [contents, upload] of [[Buffer.from("changed"), updated], [source, Buffer.from("wrong upload")]]) {
    writeFileSync(target, contents);
    const write = remoteWriteCommand(target, source, updated);
    const result = spawnSync("sh", ["-c", write.command], { input: upload.toString("base64"), encoding: "utf8" });
    assert.notEqual(result.status, 0);
    assert.deepEqual(readFileSync(target), contents);
    assert.deepEqual(readdirSync(dir), ["packs.py"]);
  }
});
