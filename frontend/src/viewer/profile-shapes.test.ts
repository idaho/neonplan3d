import assert from 'node:assert/strict';
import { test } from 'node:test';
import { packShape } from './pack-shapes.ts';
import type { PackPart } from '../packs.ts';
import { profilePlanPoints } from '../packs.ts';
const points:[number,number][]=[[-0.5,0],[0.5,0],[0.5,1],[-0.5,1]];
const part:PackPart={shape:'profile',x:0,y:0,z:0,w:1,h:1,d:1,color:'body',sections:[{at:-0.5,points},{at:0,points:points.map(([x,y])=>[x*0.8,y])},{at:0.5,points}]};
test('profile plan envelope keeps tapered outlines and respects part placement',()=>{
  const actual=profilePlanPoints({...part,x:0.1,z:0.2,w:0.5,d:0.6});
  const expected=[[-0.15,-0.1],[-0.1,0.2],[-0.15,0.5],[0.35,0.5],[0.3,0.2],[0.35,-0.1]];
  actual.forEach((p,i)=>p.forEach((v,j)=>assert.ok(Math.abs(v-expected[i][j])<1e-9)));
});
test('profile solids are closed, correctly wound and bounded at every section',()=>{
  const g=packShape(part,2,4,3)!;g.computeBoundingBox();
  assert.deepEqual(g.boundingBox!.min.toArray(),[-1,0,-2]);assert.deepEqual(g.boundingBox!.max.toArray(),[1,3,2]);
  const pos=g.getAttribute('position'),normal=g.getAttribute('normal'),edges=new Map<string,number>();
  let volume=0;
  const vertex=(i:number)=>[pos.getX(i),pos.getY(i),pos.getZ(i)];
  for(let i=0;i<pos.count;i+=3){
    const [a,b,c]=[vertex(i),vertex(i+1),vertex(i+2)];
    volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])+a[1]*(b[2]*c[0]-b[0]*c[2])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
    for(const [p,q] of [[a,b],[b,c],[c,a]]){const key=[p.join(','),q.join(',')].sort().join('|');edges.set(key,(edges.get(key)??0)+1);}
  }
  assert.ok(volume>0);assert.ok([...edges.values()].every(n=>n===2));
  for(let i=0;i<pos.count;i++){assert.ok(Number.isFinite(normal.getX(i)));if(pos.getZ(i)===-2&&Math.abs(normal.getZ(i))>0.9)assert.ok(normal.getZ(i)<0);}
  g.dispose();
});
test('crease smoothing changes shading without moving the model or softening right-angle caps',()=>{
  const flat=packShape({...part,crease_angle:0},2,4,3)!,smooth=packShape({...part,crease_angle:45},2,4,3)!;
  assert.deepEqual(Array.from(flat.getAttribute('position').array),Array.from(smooth.getAttribute('position').array));
  assert.notDeepEqual(Array.from(flat.getAttribute('normal').array),Array.from(smooth.getAttribute('normal').array));
  const n=smooth.getAttribute('normal');
  for(let i=0;i<n.count;i++)if(Math.abs(n.getZ(i))>0.9){assert.ok(Math.abs(n.getX(i))<1e-6);assert.ok(Math.abs(n.getY(i))<1e-6);}
  flat.dispose();smooth.dispose();
});
