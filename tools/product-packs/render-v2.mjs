// Reuse the existing viewer, excluding canonical JSON and documentation files.
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const dir = resolve(process.argv[2] ?? 'private/product-packs-v2');
const files = readdirSync(dir).filter(f => /^v2\..+\.json$/.test(f) && !f.endsWith('.canonical.json')).sort();
if (files.length !== 34) throw new Error('Expected all 34 regrouped source packs');
const result = spawnSync(process.execPath, ['frontend/pack-images.mjs', ...files.map(f => resolve(dir,f)), '--out', resolve(dir,'previews')], { stdio:'inherit', env:process.env });
if (result.error) throw result.error;
process.exit(result.status ?? 1);
