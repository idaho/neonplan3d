import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DOOR_STYLES, openingStyle, type Opening } from '../model.ts';
import type { OpeningInfo } from './build.ts';
import { buildOpeningParts, CLOSED } from './openings.ts';

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
