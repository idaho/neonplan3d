import assert from "node:assert/strict";
import { test } from "node:test";
import { GeoBuffer } from "./geo.ts";
import { packShape } from "./pack-shapes.ts";
import { lightColors, type LightSource, type LightSurface } from "./lighting.ts";
import { packSpotLights, lightCone } from "./directed-light.ts";
import { setPacks, setProductColors, renderPackItem } from "../packs.ts";
import { newFloor, type Furniture } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
const p={id:"p",shape:"box" as const,x:0,z:0,y:0,w:1,d:1,h:1,color:"body"};
test("new curved and hollow forms produce finite bounded geometry with different detail levels",()=>{
  for(const shape of ["polygon","rounded_box","sphere","ellipsoid","pipe","torus","bowl"] as const){
    const g=packShape({...p,shape,points:[[-0.5,-0.5],[0.5,-0.5],[0.3,0.5],[-0.2,0.5]],path:[[-0.3,0,0],[0,0.3,0],[0.3,0,0]],detail:"high"},1,1,1)!;
    assert.ok(g.getAttribute("position").count>0);assert.ok([...g.getAttribute("position").array].every(Number.isFinite));g.dispose();
  }
  const low=packShape({...p,shape:"sphere"},1,1,1,true)!,high=packShape({...p,shape:"sphere",detail:"high"},1,1,1)!;
  assert.ok(low.getAttribute("position").count<high.getAttribute("position").count);low.dispose();high.dispose();
});
test("product appearance switches colours without changing stored type or dimensions",()=>{
  setPacks([{id:"n",name:"n",publisher:"test",licensee:null,items:[{id:"x",name:{en:"x"},size:[1,1,1],parts:[p]}]},{id:"c",name:"c",publisher:"test",licensee:null,items:[{id:"red",name:{en:"red"},size:[1,1,1],parts:[{...p,color:"#ff0000"}],product:{base:"pack:n:x",variant:"red",label:"Red",default:true}}]}]);
  const f={type:"pack:c:red",w:1,d:1,h:1} as Furniture,before=structuredClone(f);
  setProductColors(false);assert.equal(renderPackItem(f)!.parts[0].color,"body");
  setProductColors(true);assert.equal(renderPackItem(f)!.parts[0].color,"#ff0000");assert.deepEqual(f,before);setProductColors(false);setPacks([]);
});
test("a directed light cannot illuminate behind its aperture; a wider angle reaches a wider footprint",()=>{
  const source:LightSource={x:0,y:1,z:0,kind:"spot",room:0,color:[1,1,1],level:1,direction:[0,-1,0],angle:20};
  const surface:LightSurface={pos:Float32Array.from([0,0,0,0,2,0,0.5,0,0]),normal:Float32Array.from([0,1,0,0,-1,0,0,1,0]),room:Int16Array.from([0,0,0]),fold:new Float32Array(3),doors:[],blockers:[]};
  const narrow=lightColors(surface,[source]),wide=lightColors(surface,[{...source,angle:100}]);
  assert.ok(narrow[0]>0);assert.equal(narrow[3],0);assert.equal(narrow[6],0);assert.ok(wide[6]>0);
  const cone=new GeoBuffer();lightCone(cone,source,newFloor("f","f",0),[]);
  assert.ok(cone.count>0);assert.ok(cone.p.every(Number.isFinite));
});
test("head entity and angle overrides are independent and follow parent XYZ rotation",()=>{
  setPacks([{id:"lamp",name:"lamp",publisher:"test",licensee:null,items:[{id:"two",name:{en:"Two"},size:[1,1,1],light:"spot",parts:[p],spots:[{id:"a",parts:["p"],position:[0,0.5,0],direction:[0,-1,0],angle:40}]}]}]);
  const f: Furniture={id:"l",type:"pack:lamp:two",x:0,z:0,w:1,d:1,h:1,rotation:0,rotation_x:90,variant:null,entity:"light.main",spot_config:{a:{entity:"light.head",beam_angle:80}}};
  const h={states:{"light.main":{state:"off",attributes:{}},"light.head":{state:"on",attributes:{brightness:255,rgb_color:[255,0,0]}}}} as unknown as HomeAssistant;
  const [s]=packSpotLights(f,newFloor("f","f",0),h);assert.equal(s.angle,80);assert.ok(s.direction![2]<-0.99);assert.ok(Math.abs(s.direction![1])<1e-6);
  assert.equal(packSpotLights({...f,only_color:"#00ff00"},newFloor("f","f",0),h).length,0);
  assert.ok(packSpotLights({...f,glow_scale:0.5},newFloor("f","f",0),h)[0].level<s.level);
  setPacks([]);
});
