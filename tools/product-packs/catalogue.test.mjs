import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { createPublicKey, verify } from 'node:crypto';
import { setPacks, packType, packScreen, isElectric } from '../../frontend/src/packs.ts';
import { pushFurniture, pushPackLamp } from '../../frontend/src/viewer/furniture.ts';
import { GeoBuffer, LineBuffer } from '../../frontend/src/viewer/geo.ts';

const dir = resolve(process.env.PRODUCT_PACK_DIR ?? 'private/product-packs');
const read = name => JSON.parse(readFileSync(resolve(dir, name), 'utf8'));
const files = readdirSync(dir).filter(name => name.endsWith('.fp3dpack')).sort();
const envelopes = files.map(read);
const packs = envelopes.map(envelope => envelope.payload);
setPacks(packs);

test('26 signed packs cover 278 unique product and standard-palette models', () => {
  assert.equal(packs.length, 26);
  const records = read('research.json').models;
  const ids = packs.flatMap(pack => pack.items.map(item => packType(pack.id, item.id)));
  assert.equal(ids.length, 278);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(new Set(ids), new Set(records.map(r => packType(r.pack, r.item))));
  for (const record of records) assert.ok(read('research.json').sources[record.source]);
});

test('standard variants use only native palette roles and preserve geometry and capabilities', () => {
  const roles = new Set(['body','fabric','cushion','wood','white','metal','dark','glass','plant','pot','accent']);
  const records = read('research.json').models.filter(r => r.style === 'neonplan_standard');
  assert.equal(records.length, 112);
  assert.equal(packs.filter(p => p.id.endsWith('_neon')).length, 13);
  const clean = item => ({ ...item, id: null, name: null, parts: item.parts.map(({ color, top, edges, ...p }) => p) });
  const visited = new Set();
  for (const record of records) {
    const pack = packs.find(p => p.id === record.pack);
    const variant = pack.items.find(i => i.id === record.item);
    const original = packs.find(p => p.id === record.original_pack).items.find(i => i.id === record.original_item);
    assert.equal(pack.release, pack.id === 'local.haustechnik_neon' ? 2 : 1);
    assert.deepEqual(clean(variant), clean(original));
    assert.ok(variant.name.de.endsWith(' · NeonPlan'));
    for (const part of variant.parts) {
      assert.ok(roles.has(part.color));
      assert.equal(part.top, undefined);
    }
    visited.add(record.original_pack);
    assert.equal(isElectric(packType(pack.id, variant.id)), isElectric(packType(record.original_pack, original.id)));
    assert.equal(!!packScreen(packType(pack.id, variant.id)), !!packScreen(packType(record.original_pack, original.id)));
  }
  assert.equal(visited.size, 13);
  for (const originalPack of packs.filter(p => !p.id.endsWith('_neon'))) {
    const variants = packs.find(p => p.id === `${originalPack.id}_neon`).items;
    for (const original of originalPack.items) {
      assert.ok(variants.some(v => JSON.stringify(clean(v)) === JSON.stringify(clean(original))), original.id);
    }
  }
  const installation = packs.find(p => p.id === 'local.haustechnik_neon');
  assert.equal(installation.items.length, 11, 'preserve gas/water pipes plus Viessmann');
  const wood = packs.find(p => p.id === 'local.ikea_wohnen_neon').items.find(i => i.id.startsWith('billy_'));
  assert.ok(wood.parts.every(p => p.color === 'wood'));
});

test('Viessmann is copied verbatim from the approved test pack, alongside its standard variant', () => {
  const source = JSON.parse(readFileSync(resolve('private/heating-test/heating.json'), 'utf8')).items.find(i => i.id === 'gas_condensing_boiler');
  const authored = JSON.parse(readFileSync(resolve('tools/product-packs/viessmann.json'), 'utf8'));
  assert.deepEqual(authored, source);
  for (const packId of ['local.haustechnik', 'local.haustechnik_neon']) {
    const pack = packs.find(p => p.id === packId);
    const item = pack.items.find(i => i.id === source.id);
    assert.equal(pack.release, 2);
    assert.deepEqual(item.size, source.size);
    assert.deepEqual(item.symbol, source.symbol);
    assert.equal(item.electric, source.electric);
    assert.equal(item.mount, source.mount);
    if (packId === 'local.haustechnik') for (const [key, value] of Object.entries(source)) {
      if (key !== 'parts') assert.deepEqual(item[key], value);
      else source.parts.forEach((part, i) => {
        for (const [field, expected] of Object.entries(part)) assert.deepEqual(item.parts[i][field], expected);
      });
    }
  }
});

test('BILLY adds white-stained oak and beech without changing the original model geometry', () => {
  const pack = packs.find(p => p.id === 'local.ikea_wohnen');
  assert.equal(pack.release, 2);
  assert.equal(pack.items.length, 21);
  const original = pack.items.find(i => i.id === 'billy_40x28x202_weiss');
  assert.equal(original.parts[0].color, '#eeeae2');
  for (const [finish, color] of [['eiche_weiss', '#cbbd9c'], ['buche', '#c69c6e']]) {
    const variant = pack.items.find(i => i.id === `billy_40x28x202_${finish}`);
    assert.deepEqual(variant.size, original.size);
    assert.equal(variant.surface, true);
    assert.equal(variant.parts[0].color, color);
    assert.deepEqual(variant.parts.map(({color, ...geometry}) => geometry),
                     original.parts.map(({color, ...geometry}) => geometry));
  }
});

test('additional products preserve researched sizes, all frame formats and existing capabilities', () => {
  const get = (pack, id) => packs.find(p => p.id === `local.${pack}`).items.find(i => i.id === id);
  const frames = packs.find(p => p.id === 'local.ikea_wohnen').items.filter(i => i.id.startsWith('rodalm_'));
  assert.equal(frames.length, 16);
  for (const [w, h] of [[10,15],[13,18],[21,30],[30,40],[40,50],[50,70],[61,91],[70,100]]) {
    for (const landscape of [false, true]) {
      const item = get('ikea_wohnen', `rodalm_${w}x${h}_${landscape ? 'quer' : 'hoch'}`);
      assert.deepEqual(item.size, [(landscape ? h+2 : w+2)/100, .05, (landscape ? w+2 : h+2)/100]);
      assert.equal(item.mount, 'wall');
      assert.equal(item.parts[0].color, '#202020');
      assert.equal(!!packScreen(packType('local.ikea_wohnen', item.id)), false);
      assert.ok(item.parts.every(p => Math.abs(p.z*.05)+p.d*.05/2 <= .015001));
    }
  }
  assert.deepEqual(get('ikea_wohnen', 'askvoll_90x200_weiss').size, [.97,2.08,.77]);
  assert.deepEqual(get('ikea_wohnen', 'billy_40x28x202_weiss').size, [.4,.28,2.02]);
  assert.deepEqual(get('ikea_buero', 'markus_vissle_dunkelgrau').size, [.62,.60,1.29]);
  assert.ok(get('ikea_buero', 'markus_vissle_dunkelgrau').parts.filter(p => p.shape === 'loft').length >= 14);
  assert.equal(get('ikea_buero', 'bekant_160x80_weiss_schwarz').electric, undefined);
  assert.equal(get('ikea_buero', 'bekant_160x80_weiss_schwarz').surface, true);
  assert.deepEqual(get('garten_grill', 'plonos_tunnel_300x200x200').size, [2,3,2]);
  assert.deepEqual(get('kueche', 'farmarkvast_graugruen').size, [.20,.20,.35]);
  const lamp = get('beleuchtung', 'virrmo_36_vernickelt');
  assert.deepEqual(lamp.size, [.36,.36,.076]);
  assert.equal(lamp.mount, 'ceiling');
  assert.ok(lamp.parts.some(p => p.glow));
  for (const pro of [true, false]) {
    const stem = `macbook_${pro ? 'pro14' : 'air13'}`;
    assert.deepEqual(get('apple_audio', `${stem}_zu`).size, pro ? [.3126,.2212,.0155] : [.3041,.215,.0113]);
    assert.ok(packScreen(packType('local.apple_audio', `${stem}_offen`)));
    assert.equal(!!packScreen(packType('local.apple_audio', `${stem}_zu`)), false);
  }
  assert.deepEqual(get('apple_audio', 'magic_mouse_weiss').size, [.0571,.1135,.0216]);
  assert.deepEqual(get('apple_audio', 'magic_keyboard_numpad_weiss').size, [.4187,.1149,.0109]);
  for (const id of ['magic_mouse_weiss', 'magic_keyboard_numpad_weiss', 'sony_wh1000xm5_schwarz']) {
    assert.equal(get('apple_audio', id).electric, undefined);
  }
  for (const id of ['beleuchtung','kueche','garten_grill']) assert.equal(packs.find(p => p.id === `local.${id}`).release, 2);
});

test('MALM/PAX finishes match KALLAX while preserving white IDs and non-wood details', () => {
  const malm = packs.find(p => p.id === 'local.ikea_malm_kura');
  const pax = packs.find(p => p.id === 'local.ikea_pax');
  const kallax = packs.find(p => p.id === 'local.ikea_kallax');
  assert.equal(malm.items.length, 29);
  assert.equal(pax.items.length, 48);
  assert.equal(malm.release, 3);
  assert.equal(pax.release, 2);
  for (const [pack, finishes] of [[malm, ['eiche_weiss', 'schokobraun']], [pax, ['eiche_weiss']]]) {
    const originals = pack.items.filter(i => !finishes.some(f => i.id.endsWith(`_${f}`)) && !i.id.startsWith('kura_'));
    for (const original of originals) for (const finish of finishes) {
      const variant = pack.items.find(i => i.id === `${original.id}_${finish}`);
      assert.ok(variant, `${original.id}/${finish}`);
      assert.deepEqual(variant.size, original.size);
      assert.equal(variant.parts.length, original.parts.length);
      const wood = kallax.items.find(i => i.id === `kallax_4x4_${finish}`).parts[0].color;
      for (let j = 0; j < original.parts.length; j++) {
        const before = original.parts[j], after = variant.parts[j];
        assert.deepEqual({ ...before, color: null }, { ...after, color: null });
        if (before.color === '#eeeae2') assert.equal(after.color, wood);
        if (original.id.startsWith('malm_bed_') && before.color !== '#eeeae2') assert.equal(after.color, before.color);
        if (before.color === '#aeb5b9') assert.equal(after.color, before.color);
      }
    }
  }
  assert.deepEqual(malm.items.filter(i => i.id.startsWith('kura_')).map(i => i.id), ['kura_low', 'kura_high']);
});

test('Schwarzbraun stays near-black with only a slight warm cast across MALM and KALLAX', () => {
  for (const packId of ['local.ikea_malm_kura', 'local.ikea_kallax']) {
    const pack = packs.find(p => p.id === packId);
    for (const item of pack.items.filter(i => i.id.includes('_schokobraun'))) {
      assert.ok(item.name.de.includes('Schwarzbraun'));
      assert.equal(item.parts[0].color, '#201f1d');
      const [r, g, b] = item.parts[0].color.slice(1).match(/../g).map(v => parseInt(v, 16));
      assert.ok(r >= g && g >= b && r <= 32 && r - b <= 3);
    }
  }
  assert.equal(packs.find(p => p.id === 'local.ikea_kallax').release, 2);
});

test('Ed25519 signatures match canonical payloads and reject tampering', () => {
  const keys = read('custom-pack-keys.json');
  for (let i = 0; i < files.length; i++) {
    const envelope = envelopes[i];
    const key = createPublicKey({ key: Buffer.concat([
      Buffer.from('302a300506032b6570032100', 'hex'),
      Buffer.from(keys[envelope.signature.key], 'base64'),
    ]), format: 'der', type: 'spki' });
    const bytes = readFileSync(resolve(dir, files[i].replace('.fp3dpack', '.canonical.json')));
    assert.deepEqual(JSON.parse(bytes), envelope.payload);
    const signature = Buffer.from(envelope.signature.sig, 'base64');
    assert.ok(verify(null, bytes, key, signature));
    assert.equal(verify(null, Buffer.concat([bytes, Buffer.from(' ')]), key, signature), false);
  }
});

for (const pack of packs) for (const item of pack.items) {
  test(`existing renderer: ${pack.id}/${item.id}`, () => {
    const [w, d, h] = item.size;
    assert.ok(item.parts.length > 0 && item.parts.length <= 60);
    const furniture = { id: 'preview', type: packType(pack.id, item.id), x: 0, z: 0,
      rotation: 0, w, d, h, variant: null, entity: null, power: null };
    const buf = new GeoBuffer();
    if (item.light) pushPackLamp(buf, item, furniture, 0, 0xffcc88);
    else pushFurniture(buf, new LineBuffer(), new GeoBuffer(), furniture, 0);
    assert.ok(buf.count > 0);
    assert.ok(buf.p.every(Number.isFinite) && buf.c.every(Number.isFinite));
    for (let i = 0; i < buf.p.length; i += 3) {
      assert.ok(Math.abs(buf.p[i]) <= w / 2 + 1e-5, 'width');
      assert.ok(buf.p[i + 1] >= -1e-5 && buf.p[i + 1] <= h + 1e-5, 'height');
      assert.ok(Math.abs(buf.p[i + 2]) <= d / 2 + 1e-5, 'depth');
    }
    if (item.light) assert.ok(item.parts.some(p => p.glow));
  });
}

test('TV screen and Echo entity flags use only existing pack capabilities', () => {
  for (const item of packs.find(p => p.id === 'local.multimedia').items) {
    const type = packType('local.multimedia', item.id);
    assert.ok(isElectric(type));
    assert.equal(!!packScreen(type), item.id.startsWith('philips_'));
    assert.equal('entity_domains' in item, false);
  }
});

test('every clock numeral survives the shipped renderer minimum thickness', () => {
  const clock = packs.find(p => p.id === 'local.wohnen').items.find(i => i.id === 'clock_orange_white');
  for (const p of clock.parts.filter(p => p.shape === 'box')) {
    assert.ok(p.w * clock.size[0] >= .0001);
    assert.ok(p.h * clock.size[2] >= .0001);
    assert.ok(p.d * clock.size[1] >= .0001);
  }
});

test('Echo Dot 4 uses official sphere dimensions, requested finishes and current entity flags', () => {
  const multimedia = packs.find(p => p.id === 'local.multimedia');
  assert.equal(multimedia.release, 2);
  assert.equal(multimedia.items.length, 6);
  for (const [id, colour] of [['echo_dot4_black', '#303236'], ['echo_dot4_clock_bluegrey', '#92a2b7']]) {
    const item = multimedia.items.find(i => i.id === id);
    assert.deepEqual(item.size, [.1, .1, .089]);
    assert.equal(item.mount, 'surface');
    assert.equal(item.electric, true);
    assert.ok(item.parts.some(p => p.color === colour));
    assert.equal(!!item.light, false);
    assert.equal(!!packScreen(packType(multimedia.id, id)), false);
    const ring = item.parts.find(p => p.color === '#37b7db');
    assert.ok(ring.y * item.size[2] < .005);
    const numerals = item.parts.filter(p => p.shape === 'box' && p.color === '#ffffff');
    assert.equal(numerals.length, id.includes('clock') ? 12 : 0);
    for (const p of numerals) {
      assert.ok(p.d * item.size[1] >= .0001);
      assert.ok(p.z > .35, 'digits face forward');
    }
  }
  for (const id of ['echo_dot3_black', 'echo_dot3_clock_black', 'philips_65pus8848_stand', 'philips_65pus8848_wall']) {
    assert.ok(multimedia.items.some(i => i.id === id), 'existing model ID preserved');
  }
});
