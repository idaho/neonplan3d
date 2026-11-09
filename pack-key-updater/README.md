# Restore local furniture-pack keys

Standalone Node.js utility for restoring your own trusted public keys after a NeonPlan 3D update.
It runs on your computer with Node.js 18 or newer and no npm packages. The SSH workflow
contacts only your Home Assistant SSH destination; it makes no shop or licence requests.

The utility and its documentation live entirely in this folder. No changes to the repository's
main README or integration code are needed to keep the utility alongside upstream updates.

```text
pack-key-updater/
  restore-pack-keys.mjs       Command-line tool
  custom-pack-keys.json      Public keys to restore
  restore-pack-keys.test.mjs Tests
  ssh-update.mjs            SSH updater
  ssh-update.test.mjs       SSH workflow tests
  package.json              npm commands
  README.md                 Instructions
```

The key file already contains the public key for the locally created heating test pack. Additional
publishers can be added as further JSON entries. Private signing keys and shop licence keys do not
belong in this file.

## Run from your computer (SSH)

From the repository root:

```bash
cd pack-key-updater
npm run update
```

The destination is `192.168.0.16`, using your existing `~/.ssh/config` for the user, port,
identity and other connection options, just like `ssh 192.168.0.16`. The default remote path
is `/config/custom_components/neonplan3d/packs.py`. No setup, separate configuration file or
`npm install` is needed. SSH uses your existing keys, agent or password prompt; passwords
are not stored. Normal SSH host-key verification remains enabled.

After each completed NeonPlan 3D update, run:

```bash
npm run update
```

Or, from the repository root without changing folders:

```bash
npm --prefix pack-key-updater run update
```

Restart Home Assistant afterwards to load the keys. To check without changing anything,
run `npm run check`. All scripts and keys stay on your computer; no Node.js installation
is needed on Home Assistant. The remote SSH environment must expose the config folder and
allow writing the integration file. It needs `sh`, `cat`, `base64`, `mktemp`, `cp`, `mv`,
`rm`, `cut` and either `sha256sum` or `shasum` (normally supplied by the SSH add-on).

If your SSH configuration uses a named alias instead of the IP, you can optionally override
the destination with `npm run update -- --host your-alias`. A different remote path can be
passed with `--packs /absolute/path/packs.py`. Run the updater only once HACS has finished
updating, not concurrently.

## Optional: run directly against a local or mounted config folder

Copy the folder to `/config/pack-key-updater/`, outside the integration folder. Once an integration
update has finished, run this in a terminal that has Node.js and access to the config folder:

```bash
node /config/pack-key-updater/restore-pack-keys.mjs
```

Restart Home Assistant afterwards. The script does not restart Home Assistant or schedule itself.

To check without writing anything:

```bash
node /config/pack-key-updater/restore-pack-keys.mjs --dry-run
```

Home Assistant's terminal environment may not have Node.js installed. You can also run the tool from
your own computer against the config folder mounted through a network share:

```bash
node pack-key-updater/restore-pack-keys.mjs \
  --packs /path/to/ha-config/custom_components/neonplan3d/packs.py
```

`--keys /path/to/keys.json` selects a different key file. By default the tool uses
`custom-pack-keys.json` next to the script, independently of the working directory.

## Behavior

- Validates each Base64-encoded 32-byte Ed25519 public key against its 12-character SHA-256 identifier.
- Preserves existing publisher keys, comments and line endings; adds only missing keys.
- Refuses conflicting keys, duplicate entries and unsupported dictionary formats.
- Creates `packs.py.before-local-keys-<unique ID>.bak` beside the original before changing it.
- Preserves permission bits and replaces the file atomically.
- Running it again makes no changes when all configured keys are already present.

The tool reads the literal `PACK_PUBLIC_KEYS` dictionary without executing Python. It verifies the
modified dictionary but does not validate all other Python code in `packs.py`. A future integration
version using a computed dictionary requires the tool to be adapted; it will stop rather than guess.

## Run tests

```bash
cd pack-key-updater
npm test
```
