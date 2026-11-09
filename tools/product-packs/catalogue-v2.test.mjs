import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { createPublicKey, verify } from 'node:crypto';
import { setPacks, packType, packScreen, isElectric } from '../../frontend/src/packs.ts';
import { pushFurniture, pushPackLamp } from '../../frontend/src/viewer/furniture.ts';
import { GeoBuffer, LineBuffer } from '../../frontend/src/viewer/geo.ts';

const dir = resolve(process.env.PRODUCT_PACK_V2_DIR ?? 'private/product-packs-v2');
const read = file => JSON.parse(readFileSync(resolve(dir, file), 'utf8'));
const files = readdirSync(dir).filter(f => f.endsWith('.fp3dpack'));
const envelopes = files.map(read), packs = envelopes.map(e => e.payload);
const records = read('research.json').models;
setPacks(packs);
const get = (category, colors = false) => packs.find(p => p.id === `local.v2.${category}${colors ? '_farben' : ''}`);

test('17 clean category pairs use unqualified standard names and Produktfarben suffixes', () => {
  assert.equal(packs.length, 34);
  assert.equal(packs.flatMap(p => p.items).length, 520);
  for (const standard of packs.filter(p => !p.id.endsWith('_farben'))) {
    const product = packs.find(p => p.id === `${standard.id}_farben`);
    assert.equal(product.name, `${standard.name} · Produktfarben`);
    assert.equal(standard.release, 1);
    assert.equal(product.release, 1);
    assert.ok(!standard.name.includes('NeonPlan'));
    assert.ok(product.items.length <= 200);
    assert.ok(standard.items.every(i => i.parts.every(p => !p.color.startsWith('#') && !p.top)));
  }
  assert.deepEqual(get('kuechenmoebel', true).items.map(i => i.id).sort(), ['corner_cabinet','corner_sink']);
  assert.deepEqual(get('kuechenzubehoer', true).items.map(i => i.id).sort(), ['farmarkvast_graugruen','knife_block']);
  assert.equal(get('kuechengeraete', true).items.length, 5);
  assert.ok(get('multimedia', true).items.some(i => i.id === 'sony_wh1000xm5_schwarz'));
  assert.equal(get('computer_zubehoer', true).items.length, 6);
  assert.deepEqual(get('ikea_wohnen', true).items.map(i => i.id).sort(), ['kvistbro_44_weiss','poang_rocker']);
  assert.ok(get('ikea_schlafzimmer', true).items.some(i => i.id.startsWith('askvoll_')));
  assert.equal(get('dekoration', true).items.length, 17);
});

test('all 278 existing types have a valid documented destination; all 166 coloured models remain exact', () => {
  const mappings = read('REGROUPING.json');
  assert.equal(mappings.length, 278);
  assert.equal(new Set(mappings.map(m => m.old)).size, 278);
  const all = new Map(packs.flatMap(p => p.items.map(i => [packType(p.id, i.id), i])));
  const oldDir = resolve('private/product-packs');
  const old = new Map(readdirSync(oldDir).filter(f => f.endsWith('.fp3dpack')).flatMap(file => {
    const pack = JSON.parse(readFileSync(resolve(oldDir, file), 'utf8')).payload;
    return pack.items.map(i => [packType(pack.id, i.id), i]);
  }));
  for (const mapping of mappings) {
    assert.ok(all.has(mapping.new), mapping.old);
    assert.ok(old.has(mapping.old));
    if (!mapping.old.split(':')[1].endsWith('_neon')) assert.deepEqual(all.get(mapping.new), old.get(mapping.old));
    const source = old.get(mapping.old), target = all.get(mapping.new);
    assert.deepEqual(target.size, source.size);
    assert.equal(target.electric, source.electric);
    assert.equal(target.mount, source.mount);
    assert.equal(target.light, source.light);
    assert.equal(!!packScreen(mapping.new), source.parts.some(p => p.screen));
  }
  assert.equal(records.length, 520);
});

test('BILLY covers ten formats, seven finishes, three OXBERG fronts, OTTEBOL/HÖGADAL and four extensions', () => {
  const colored = get('ikea_billy', true), standard = get('ikea_billy');
  assert.equal(colored.items.length, 189);
  assert.equal(standard.items.length, 57);
  const open = colored.items.filter(i => !i.id.includes('_aufsatz_') && !/(paneel|glas|mix|halb|ottebol|hogadal)$/.test(i.id));
  assert.equal(new Set(open.map(i => i.size.join(','))).size, 10);
  for (const finish of ['weiss','eiche_weiss','buche','eiche','schwarz_eiche','nussbaum','blau']) {
    assert.ok(open.some(i => i.id.endsWith(`_${finish}`)), finish);
  }
  assert.equal(open.filter(i => i.id.endsWith('_blau')).length, 1);
  for (const style of ['paneel','glas','mix','halb','ottebol','hogadal']) {
    assert.ok(colored.items.some(i => i.id.endsWith(`_${style}`)));
    assert.ok(standard.items.some(i => i.id.endsWith(`_${style}`)));
  }
  const heights = new Set(standard.items.filter(i => i.id.startsWith('billy_aufsatz_')).map(i => i.size.join(',')));
  assert.equal(heights.size, 4);
  assert.ok([...heights].every(s => s.endsWith(',0.35')));
  for (const item of standard.items.filter(i => i.id.endsWith('_glas') || i.id.endsWith('_mix'))) {
    assert.ok(item.parts.some(p => p.color === 'glass'));
    assert.equal(!!packScreen(packType(standard.id, item.id)), false);
  }
  for (const item of colored.items.filter(i => i.id.endsWith('_hogadal'))) {
    const columns = item.size[0] > .5 ? 2 : 1;
    assert.equal(item.parts.filter(p => p.color === '#ba9b67').length, 4*columns, 'four cane panels per HÖGADAL door');
  }
  const blue = colored.items.find(i => i.id === 'billy_40x28x202_blau');
  assert.equal(blue.parts[0].color, '#146795');
  for (const item of colored.items.filter(i => i.id.startsWith('billy_aufsatz_'))) {
    assert.equal(item.parts.length, 4, 'extension has sides, back and top, no bottom board');
  }
});

test('all regrouped pack signatures verify against canonical bytes and reject tampering', () => {
  const keys = read('custom-pack-keys.json');
  files.forEach((file, i) => {
    const envelope = envelopes[i];
    const key = createPublicKey({ key: Buffer.concat([Buffer.from('302a300506032b6570032100','hex'), Buffer.from(keys[envelope.signature.key],'base64')]), format:'der', type:'spki' });
    const bytes = readFileSync(resolve(dir, file.replace('.fp3dpack','.canonical.json')));
    assert.deepEqual(JSON.parse(bytes), envelope.payload);
    assert.ok(verify(null, bytes, key, Buffer.from(envelope.signature.sig,'base64')));
    assert.equal(verify(null, Buffer.concat([bytes, Buffer.from(' ')]), key, Buffer.from(envelope.signature.sig,'base64')), false);
  });
});

for (const pack of packs) for (const item of pack.items) test(`existing viewer ${pack.id}/${item.id}`, () => {
  const [w,d,h] = item.size;
  const furniture = { id:'preview', type:packType(pack.id,item.id), x:0,z:0,rotation:0,w,d,h,variant:null,entity:null,power:null };
  const buffer = new GeoBuffer();
  if (item.light) pushPackLamp(buffer,item,furniture,0,0xffcc88);
  else pushFurniture(buffer,new LineBuffer(),new GeoBuffer(),furniture,0);
  assert.ok(item.parts.length <= 60 && buffer.count > 0);
  assert.ok(buffer.p.every(Number.isFinite) && buffer.c.every(Number.isFinite));
  for (let i=0;i<buffer.p.length;i+=3) {
    assert.ok(Math.abs(buffer.p[i]) <= w/2+1e-5, 'width');
    assert.ok(buffer.p[i+1] >= -1e-5 && buffer.p[i+1] <= h+1e-5, 'height');
    assert.ok(Math.abs(buffer.p[i+2]) <= d/2+1e-5, 'depth');
  }
});
