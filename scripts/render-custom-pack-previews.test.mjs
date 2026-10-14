import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { previewPlan, validatePreviews } from './render-custom-pack-previews.mjs';

function fixture(t){const dir=mkdtempSync(join(tmpdir(),'neon-preview-test-'));t.after(()=>rmSync(dir,{recursive:true,force:true}));return dir;}
const source={id:'local.test',name:'Test',items:[{id:'item',name:{de:'Modell'},size:[1,1,1]}]};
function png(w,h){const b=Buffer.alloc(64);Buffer.from('89504e470d0a1a0a','hex').copy(b);b.writeUInt32BE(w,16);b.writeUInt32BE(h,20);return b;}
test('preview planning includes only actual pack sources and records their content hashes',t=>{
  const dir=fixture(t);writeFileSync(join(dir,'v2.test.json'),JSON.stringify(source));writeFileSync(join(dir,'v2.test.canonical.json'),'{}');writeFileSync(join(dir,'VARIANTS.json'),'{}');
  const packs=previewPlan(dir);assert.equal(packs.length,1);assert.equal(packs[0].pages,1);assert.equal(packs[0].sha256.length,64);
  writeFileSync(join(dir,'v2.test.json'),JSON.stringify({...source,name:'Changed'}));assert.notEqual(previewPlan(dir)[0].sha256,packs[0].sha256);
});
test('preview planning rejects unsafe and duplicate item IDs before any render output',t=>{
  const dir=fixture(t);const file=join(dir,'v2.test.json');
  for(const items of [[{...source.items[0],id:'../outside'}],[source.items[0],source.items[0]]]){
    writeFileSync(file,JSON.stringify({...source,items}));assert.throws(()=>previewPlan(dir),/Invalid item IDs/);
  }
  writeFileSync(file,JSON.stringify({...source,id:'..'}));assert.throws(()=>previewPlan(dir),/Invalid source/);
});
test('gallery validation requires all item images and exact current overview pages',t=>{
  const dir=fixture(t);writeFileSync(join(dir,'v2.test.json'),JSON.stringify(source));const packs=previewPlan(dir);
  mkdirSync(join(dir,source.id,'items'),{recursive:true});writeFileSync(join(dir,source.id,'items/item.png'),png(960,960));writeFileSync(join(dir,source.id,'overview.png'),png(3200,2400));
  assert.deepEqual(validatePreviews(dir,packs),{packs:1,items:1,pages:1});
  writeFileSync(join(dir,source.id,'overview-2.png'),png(3200,2400));assert.throws(()=>validatePreviews(dir,packs),/stale overview/);
  rmSync(join(dir,source.id,'overview-2.png'));writeFileSync(join(dir,source.id,'items/item.png'),png(180,180));assert.throws(()=>validatePreviews(dir,packs),/Invalid PNG/);
  writeFileSync(join(dir,source.id,'items/item.png'),png(960,960));writeFileSync(join(dir,source.id,'items/old.png'),png(960,960));assert.throws(()=>validatePreviews(dir,packs),/stale item/);
});
