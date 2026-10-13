import assert from 'node:assert/strict';
import { test } from 'node:test';
import { newFloor, outdoorGround, outdoorStanding, OUTDOOR_TYPES } from '../model.ts';
import { GeoBuffer, LineBuffer } from './geo.ts';
import { pushOutdoor } from './outdoor.ts';

test('fences, hedges and pergolas move below ground without changing their height',()=>{
  for(const type of ['fence','hedge','pergola'] as const){
    const floor=newFloor('f','f',0);
    floor.outdoor=[{id:'a',type,height:1.2,offset:0,points:[[0,0],[3,0],[3,1],[0,1]]}];
    const a=new GeoBuffer();pushOutdoor(a,new LineBuffer(),floor);
    floor.outdoor[0].offset=-0.4;
    const b=new GeoBuffer();pushOutdoor(b,new LineBuffer(),floor);
    assert.equal(a.p.length,b.p.length);assert.ok(a.p.length>0);
    a.p.forEach((v,i)=>assert.ok(Math.abs(b.p[i]-v-(i%3===1?-0.4:0))<1e-8));
  }
});

test('gravel beds are ground surfaces with deterministic finite stones following their slope',()=>{
  const floor=newFloor('f','f',0);
  floor.outdoor=[{id:'gravel',type:'gravel_bed',area_id:'garden',freeform:true,offset:0.2,slope:0.1,slope_dir:'x',points:[[0,0],[3,0],[3,1],[1,1],[1,3],[0,3]]}];
  assert.ok(OUTDOOR_TYPES.includes('gravel_bed'));assert.equal(outdoorStanding('gravel_bed'),false);
  const first=new GeoBuffer(),again=new GeoBuffer();pushOutdoor(first,new LineBuffer(),floor);pushOutdoor(again,new LineBuffer(),floor);
  assert.deepEqual(first.p,again.p);assert.deepEqual(first.c,again.c);assert.ok(first.count>100);
  assert.ok([...first.p,...first.c].every(Number.isFinite));
  assert.ok(Math.abs(outdoorGround(floor,0.5,0.5)-outdoorGround(floor,2.5,0.5)-0.1*2/3)<1e-8);
});
