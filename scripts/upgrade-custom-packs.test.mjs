import assert from "node:assert/strict";
import { test } from "node:test";
import { upgrade, enrich } from "./upgrade-custom-packs.mjs";
import { modernize, winderPoints } from './pack-round-shapes.mjs';
const part={shape:"box",x:0,z:0,y:0,w:1,d:1,h:1,color:"body"};
test('all refrigerator doors swing forward from their actual left/right hinges',()=>{
  for(const id of ['samsung_rs80f65kdfef','siemens_kg36ealca','mini_fridge_60','liebherr_fna6635_20']){
    const item=enrich({id,parts:Array.from({length:12},()=>({...part}))});
    for(const motion of item.motions){
      const [hingeX,,hingeZ]=motion.pivot;
      // A point on the closed door inside its hinge: runtime rotation is -angle*direction.
      const dx=hingeX<0?0.3:-0.3,angle=-1.5*motion.direction;
      const openedZ=hingeZ-Math.sin(angle)*dx;
      assert.ok(openedZ>hingeZ,`${id} ${motion.id} opened into its cabinet`);
    }
  }
});
test('winders meet on identical boundaries and widen away from the stair well',()=>{
  const a=winderPoints(0,Math.PI/6,0.15,1.05,0,0),b=winderPoints(Math.PI/6,Math.PI/3,0.15,1.05,0,0);
  assert.deepEqual(a[1],b[0]);assert.deepEqual(a[2],b.at(-1));
  const distance=(p,q)=>Math.hypot(p[0]-q[0],p[1]-q[1]);assert.ok(distance(a[0],a[1])>distance(a[2],a[3]));
  assert.equal(b.length,6); // square outer/inner corners are part of the plate, not a landing
});
test('round models retain dimensions, part IDs and migration is idempotent',()=>{
  for(const id of ['football_size_3','echo_dot4_clock_bluegrey','echo_dot3_outlet_black']){
    const item={id,size:[1,1,1],parts:Array.from({length:60},(_,i)=>({...part,id:'p'+i,color:i===0?'white':'dark'})),displays:[{id:'clock'}]};
    const ids=item.parts.map(p=>p.id);modernize(item,id);const before=structuredClone(item);modernize(item,id);
    assert.deepEqual(item,before);assert.deepEqual(item.parts.map(p=>p.id),ids);assert.deepEqual(item.size,[1,1,1]);assert.deepEqual(item.displays,[{id:'clock'}]);
    assert.ok(item.parts.some(p=>p.shape==='sphere'||p.shape==='ellipsoid'));
  }
});
test("product geometry is preserved and its neon counterpart is corrected with stable IDs",()=>{
  const input=[{id:"neon",items:[{id:"base",size:[1,1,1],parts:[part]}]},{id:"color",items:[{id:"brown",name:{de:"Braun"},size:[1,1,1],parts:[{...part,w:0.9,color:"#443322"}]}]}];
  const map={neon_to_colors:{"pack:neon:base":["pack:color:brown"]},color_to_neon:{"pack:color:brown":"pack:neon:base"}};
  const {packs,geometryChanges}=upgrade(input,map);
  assert.equal(geometryChanges,1);assert.equal(packs[0].items[0].parts[0].w,0.9);assert.equal(packs[0].items[0].parts[0].color,"body");
  assert.equal(packs[1].items[0].parts[0].color,"#443322");assert.equal(input[0].items[0].parts[0].w,1);
  assert.deepEqual(packs.map(p=>p.items[0].parts[0].id),["p000","p000"]);
  assert.equal(packs[1].items[0].product.base,"pack:neon:base");
});
test("conflicting product geometry is rejected instead of arbitrarily changing a model",()=>{
  const source=[{id:"n",items:[{id:"b",parts:[part]}]},{id:"c",items:[{id:"a",parts:[part]},{id:"b",parts:[{...part,w:0.8}]}]}];
  assert.throws(()=>upgrade(source,{neon_to_colors:{"pack:n:b":["pack:c:a","pack:c:b"]},color_to_neon:{}}),/Conflicting/);
});
test("clock and head metadata use explicit parts and contain no personal entity IDs",()=>{
  const lamp=enrich({id:"nymane_4_weiss",parts:Array.from({length:13},()=>({...part}))});
  assert.equal(lamp.spots.length,4);assert.deepEqual(lamp.spots[0].parts,["p001","p002","p003"]);
  assert.ok(!JSON.stringify(lamp).includes("light."));
});
