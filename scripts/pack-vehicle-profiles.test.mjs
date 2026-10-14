import assert from 'node:assert/strict';
import { test } from 'node:test';
import { vehicleProfiles } from './pack-vehicle-profiles.mjs';
const fixture=id=>({id,size:id.startsWith('kia')?[1.8,4.14,1.6]:[1.84,4.5,1.689],parts:Array.from({length:id.startsWith('kia')?37:39},(_,i)=>({id:`p${String(i).padStart(3,'0')}`,shape:'box',x:0,y:0,z:0,w:0.1,h:0.1,d:0.1,color:i===0?'#eeeeee':'#222222'})),bindings:[{id:'presence'}]});
test('both vehicle migrations keep IDs, sizes, bindings and are idempotent',()=>{
  for(const id of ['kia_soul2_white_black_roof','citroen_c5_aircross_2024_black']){
    const item=fixture(id),original=structuredClone(item);vehicleProfiles(item);const once=structuredClone(item);vehicleProfiles(item);
    assert.deepEqual(item,once);assert.deepEqual(item.size,original.size);assert.deepEqual(item.bindings,original.bindings);
    original.parts.forEach((p,i)=>assert.equal(item.parts[i].id,p.id));assert.ok(item.parts.length<=60);
    assert.ok(item.parts[0].sections.length>20);assert.equal(item.parts[2].shape,'profile');
    assert.equal(item.parts.filter(p=>p.id.startsWith('vehicle_arch')).length,4);
    assert.ok(item.parts.filter(p=>p.shape==='cyl').every(p=>p.detail==='high'));
    const minY=item.parts[0].sections.map(s=>Math.min(...s.points.map(p=>p[1])));
    assert.ok(Math.max(...minY)-Math.min(...minY)>0.2,'wheel cutouts must be real body contour changes');
  }
});
test('neon/product geometry matches and models have distinct silhouettes',()=>{
  const items=['kia_soul2_white_black_roof','citroen_c5_aircross_2024_black'].map(id=>vehicleProfiles(fixture(id)));
  const colored=fixture(items[0].id),neon=fixture(items[0].id);neon.parts.forEach(p=>p.color='body');vehicleProfiles(colored);vehicleProfiles(neon);
  const geometry=i=>i.parts.map(({color,edges,...p})=>p);assert.deepEqual(geometry(colored),geometry(neon));
  assert.notDeepEqual(items[0].parts[2].sections,items[1].parts[2].sections);
  const unchanged=fixture('unrelated');const before=structuredClone(unchanged);vehicleProfiles(unchanged);assert.deepEqual(unchanged,before);
});
