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
    assert.ok(item.parts.filter(p=>p.id.startsWith('vehicle_mirror')).every(p=>p.detail==='medium'));
    assert.ok(item.parts.filter(p=>p.shape==='rounded_box'&&!['p001','p011'].includes(p.id)).every(p=>p.detail==='low'));
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
test('individual car windows remain positive-height closed patches, not a full glass cabin',()=>{
  for(const id of ['kia_soul2_white_black_roof','citroen_c5_aircross_2024_black']){
    const item=vehicleProfiles(fixture(id));
    assert.equal(item.parts.find(p=>p.id==='vehicle_cabin').color,item.parts[0].color);
    for(const index of [4,5,9,10])for(const s of item.parts[index].sections){
      assert.ok(s.points[2][1]>s.points[0][1]+0.005,'window must not invert at its pointed end');
      const area=s.points.reduce((sum,a,i)=>{const b=s.points[(i+1)%s.points.length];return sum+a[0]*b[1]-b[0]*a[1];},0);
      assert.ok(area>0);
    }
    assert.ok(item.parts[2].sections.length===2,'windshield must be a separate thin surface');
    const rear=item.parts.find(p=>p.id==='vehicle_rear_screen');
    assert.ok(Math.abs(rear.sections[1].points[0][1]-rear.sections[0].points[0][1])>0.16,'rear screen must not be a tiny slit');
    assert.ok(item.parts.filter(p=>p.id.startsWith('vehicle_spokes')).every(p=>p.points.length===20),'alloy faces must have narrow five-spoke cutouts');
    for(const p of item.parts.filter(p=>p.shape==='profile'))for(const s of p.sections){
      for(const [x,y] of s.points)assert.ok(Math.abs(x)<=0.5&&y>=0&&y<=1);
      assert.ok(s.points.reduce((area,a,i)=>{const b=s.points[(i+1)%s.points.length];return area+a[0]*b[1]-b[0]*a[1];},0)>0,'all profiles, including the clipped roof rails, need nonzero CCW sections');
    }
  }
});
test('C5 has a tall SUV nose and Soul keeps a broad upright box silhouette',()=>{
  const kia=vehicleProfiles(fixture('kia_soul2_white_black_roof')),c5=vehicleProfiles(fixture('citroen_c5_aircross_2024_black'));
  for(const [item,height,width] of [[kia,0.60,0.88],[c5,0.64,0.86]]){
    const nose=item.parts[0].sections.at(-1).points;
    assert.ok(Math.max(...nose.map(p=>p[1]))>=height);
    assert.ok(Math.max(...nose.map(p=>p[0]))-Math.min(...nose.map(p=>p[0]))>=width);
    assert.equal(item.parts[2].sections.length,2);
    assert.ok(item.parts[26].z+item.parts[26].d/2<item.parts[item===kia?35:37].z+item.parts[item===kia?35:37].d/2,'license plate must not be buried in grille');
  }
  assert.ok(kia.parts[0].crease_angle<c5.parts[0].crease_angle,'Soul edges must stay more pronounced');
  assert.ok(Math.max(...kia.parts[3].sections[1].points.map(p=>p[0]))>0.41,'Soul roof must not taper to a narrow rounded MPV canopy');
  assert.ok(kia.parts[2].sections[0].at>=0.17,'Soul windscreen stands above a short upright bonnet');
  assert.ok(kia.parts.filter(p=>p.id.startsWith('vehicle_projector_')).length===2);
  assert.ok(c5.parts[1].h>=0.28&&c5.parts[27].y>=0.58,'C5 bumper and lamps must not sit at estate height');
});
