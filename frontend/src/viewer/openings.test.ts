import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DOOR_STYLES, openingStyle, type Opening } from '../model.ts';
import type { OpeningInfo } from './build.ts';
import { buildOpeningParts, CLOSED, visionSlot } from './openings.ts';
import { setPacks } from '../packs.ts';
import { Color } from 'three';

const door:Opening={id:'slide',room_id:'r',edge:0,offset:1,width:0.9,type:'door',sill:0,height:2.1,style:'sliding_glass',hinge:'left',leaves:1,swing:'in',contact:null,contact2:null,tilt:null,cover:null};
const info:OpeningInfo={opening:door,bucket:0,start:[0,0],axis:[1,0],width:0.9,toRoom:[0,1],faceRoom:0.1,faceOut:0.1,sill:0,top:2.1,hingeAtStart:true,exterior:false};
const positions=(i:OpeningInfo,open:number,open2=0)=>{
  const parts=buildOpeningParts([i],new Map([['slide',{...CLOSED,open,open2}]]),1);
  const result=Array.from(parts.glass.getAttribute('position').array);
  parts.frames.dispose();parts.glass.dispose();parts.blinds.dispose();return result;
};
test('glass sliding door is selectable as a normal opening style',()=>{
  assert.ok(DOOR_STYLES.includes('sliding_glass'));
  assert.equal(openingStyle(door,false),'sliding_glass');assert.equal(openingStyle(door,true),'sliding_glass');
});
test('new front door has a central 40cm slit with 30cm margins and no overhead lamp',()=>{
  const slot=visionSlot(0.86,2.1);assert.ok(Math.abs(slot.x1-slot.x0-0.4)<1e-9);assert.equal(slot.y0,0.3);assert.equal(slot.y1,1.8);
  const parts=buildOpeningParts([{...info,exterior:true,opening:{...door,style:'front_slot'}}],new Map([['slide',CLOSED]]),1);
  parts.glass.computeBoundingBox();parts.frames.computeBoundingBox();
  assert.ok(Math.abs(parts.glass.boundingBox!.getSize(parts.glass.boundingBox!.min.clone()).x-0.4)<1e-6);
  assert.ok(parts.frames.boundingBox!.max.y<2.18);
  parts.frames.dispose();parts.glass.dispose();parts.blinds.dispose();
});
test('wood sliding doors are opaque, slide parallel to their wall and use the kitchen product colour',()=>{
  const opening={...info,opening:{...door,style:'sliding_wood' as const}},closed=buildOpeningParts([opening],new Map([['slide',CLOSED]]),1),open=buildOpeningParts([opening],new Map([['slide',{...CLOSED,open:1}]]),1);
  assert.equal(open.glass.getAttribute('position').count,0);
  const a=closed.frames.getAttribute('position'),b=open.frames.getAttribute('position');
  for(let i=0;i<a.count;i++){assert.equal(a.getY(i),b.getY(i));assert.equal(a.getZ(i),b.getZ(i));}
  setPacks([{id:'local.v2.kuechenmoebel_farben',name:'Kitchen',publisher:'Test',licensee:null,items:[{id:'kitchen_dishwasher_panel_60',name:{en:'Kitchen'},size:[1,1,1],parts:[{id:'p003',shape:'box',x:0,z:0,y:0,w:1,d:1,h:1,color:'#a47948'}]}]}]);
  const colored=buildOpeningParts([opening],new Map([['slide',CLOSED]]),1,true),c=new Color('#a47948'),colors=colored.frames.getAttribute('color');
  assert.ok(Array.from({length:colors.count},(_,i)=>i).some(i=>Math.abs(colors.getX(i)-c.r)<1e-6&&Math.abs(colors.getY(i)-c.g)<1e-6&&Math.abs(colors.getZ(i)-c.b)<1e-6));
  for(const parts of [closed,open,colored]){parts.frames.dispose();parts.glass.dispose();parts.blinds.dispose();}setPacks([]);
});
test('glass leaves slide along the wall in either direction, without a swing or depth jump',()=>{
  for(const hingeAtStart of [true,false]){
    const i={...info,hingeAtStart},closed=positions(i,0);assert.ok(closed.length>0);
    for(const open of [0.01,0.5,1]){
      const moved=positions(i,open);assert.equal(moved.length,closed.length);
      closed.forEach((v,n)=>assert.ok(Math.abs(moved[n]-v-(n%3===0?(hingeAtStart?-1:1)*0.86*open:0))<1e-6));
    }
  }
});
test('double glass sliders keep the two leaf states independent; existing styles stay unchanged',()=>{
  const i={...info,opening:{...door,leaves:2 as const}},closed=positions(i,0),left=positions(i,1,0);
  assert.ok(closed.length>0);assert.deepEqual(left.slice(left.length/2),closed.slice(closed.length/2));
  assert.notDeepEqual(left.slice(0,left.length/2),closed.slice(0,closed.length/2));
  assert.equal(positions({...info,opening:{...door,style:'sliding'}},1).length,0);
  const glass={...info,opening:{...door,style:'glass' as const}};
  assert.notDeepEqual(positions(glass,0).filter((_,i)=>i%3===2),positions(glass,1).filter((_,i)=>i%3===2));
});
