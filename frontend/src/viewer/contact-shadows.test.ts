import assert from "node:assert/strict";
import { test } from "node:test";
import { GeoBuffer } from "./geo.ts";
import { tiltedContactShadows } from "./contact-shadows.ts";
import { newFloor, type Furniture } from "../model.ts";
import { generateWalls } from "../geometry/walls.ts";
function fixture(){
  const floor=newFloor("f","f",0);
  floor.rooms=[{id:"r",name:"r",area_id:null,points:[[0,0],[4,0],[4,4],[0,4]],floor_material:"wood"}];
  const tilted: Furniture={id:"deco",type:"shelf",x:2,z:2,w:0.6,d:0.6,h:0.2,rotation:0,rotation_x:20,variant:null,mount_y:0.05};
  floor.furniture=[tilted];return floor;
}
test("tilted contact shadows are finite and are clipped away from floor openings",()=>{
  const floor=fixture(),walls=generateWalls(floor.rooms,{exterior:0.24,interior:0.12}).walls,buf=new GeoBuffer();
  const hole:[[number,number],[number,number],[number,number],[number,number]]=[[1.9,1.9],[2.1,1.9],[2.1,2.1],[1.9,2.1]];
  tiltedContactShadows(buf,floor,walls,[],[hole],walls.map(()=>0));
  assert.ok(buf.count>0);assert.ok([...buf.p,...buf.c].every(Number.isFinite));
  for(let i=0;i<buf.p.length;i+=9){
    const x=(buf.p[i]+buf.p[i+3]+buf.p[i+6])/3,z=(buf.p[i+2]+buf.p[i+5]+buf.p[i+8])/3;
    assert.ok(!(x>1.9+1e-6&&x<2.1-1e-6&&z>1.9+1e-6&&z<2.1-1e-6));
  }
});
test("contact shadows reach a nearby table surface and fade away at larger gaps",()=>{
  const floor=fixture(),f=floor.furniture[0];f.mount_y=0.85;
  floor.furniture.push({id:"table",type:"table",x:2,z:2,w:0.8,d:0.8,h:0.8,rotation:0,variant:null});
  const walls=generateWalls(floor.rooms,{exterior:0.24,interior:0.12}).walls,buf=new GeoBuffer();
  tiltedContactShadows(buf,floor,walls,[],[],walls.map(()=>0));
  assert.ok(buf.p.some((v,i)=>i%3===1&&Math.abs(v-0.803)<0.00001));
  f.mount_y=2;
  const far=new GeoBuffer();tiltedContactShadows(far,floor,walls,[],[],walls.map(()=>0));
  assert.equal(far.count,0);
});
test("a tilted frame casts a nearby wall contact shadow without projecting it onto the floor",()=>{
  const floor=fixture(),f=floor.furniture[0];Object.assign(f,{z:0.16,d:0.03,h:0.6,mount_y:1,rotation_x:5});
  const walls=generateWalls(floor.rooms,{exterior:0.24,interior:0.12}).walls,buf=new GeoBuffer();
  tiltedContactShadows(buf,floor,walls,[],[],walls.map(()=>0));
  assert.ok(buf.count>0);
  assert.ok(buf.p.filter((_,i)=>i%3===1).every(y=>y>0.9));
  f.z=1;
  const far=new GeoBuffer();tiltedContactShadows(far,floor,walls,[],[],walls.map(()=>0));assert.equal(far.count,0);
});
