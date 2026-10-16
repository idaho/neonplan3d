import assert from "node:assert/strict";
import test from "node:test";
import type { HomeAssistant } from "./types.ts";
import type { RoofWindow } from "./model.ts";
import { roofWindowState } from "./roof-window-state.ts";
import { watchedEntities } from "./watched.ts";
import { emptyBuilding } from "./model.ts";

const w:RoofWindow={id:"roof",face:"main:a",u:1,v:1,cover:"cover.blind",window:"cover.motor"};
const hass=(state:string,position:unknown,device_class="shutter")=>({states:{"cover.blind":{entity_id:"cover.blind",state,attributes:{current_position:position,device_class}}}} as unknown as HomeAssistant);
test("roof shutters retract at HA 100 and close at HA 0, including live reversals",()=>{
  for(const p of [100,50,0,50,100])assert.equal(roofWindowState(hass(p===0?"closed":"open",p),w).cover,1-p/100);
  assert.equal(roofWindowState(hass("open",undefined),w).cover,0);
  assert.equal(roofWindowState(hass("closed",undefined),w).cover,1);
});
test("roof awnings retract at HA 0 and extend at 100, not the other way round",()=>{
  for(const p of [0,50,100])assert.equal(roofWindowState(hass(p===0?"closed":"open",p,"awning"),w).cover,p/100);
  assert.equal(roofWindowState(hass("closed",undefined,"awning"),w).cover,0);
  assert.equal(roofWindowState(hass("open",undefined,"awning"),w).cover,1);
  assert.equal(roofWindowState(hass("closed",0,""),{...w,cover_style:"awning"}).cover,0);
  assert.equal(roofWindowState(hass("open",100),{...w,cover_style:"awning"}).cover,0,"explicit HA shutter class wins over appearance");
});
test("unavailable or malformed roof cover values never create NaN or phantom closed awnings",()=>{
  for(const state of ["unavailable","unknown"])assert.equal(roofWindowState(hass(state,0),w).cover,0);
  for(const p of [NaN,Infinity,undefined,null,""]){const s=roofWindowState(hass("unavailable",p),w);assert.ok(Object.values(s).every(Number.isFinite));assert.equal(s.cover,0);}
  assert.equal(roofWindowState(hass("open","100"),w).cover,0);
});
test("roof sash motor and shade are independent, and motor-only updates are watched",()=>{
  const h=hass("closed",0);h.states["cover.motor"]={entity_id:"cover.motor",state:"open",attributes:{current_position:60}} as HomeAssistant["states"][string];
  assert.deepEqual(roofWindowState(h,w),{open:0.6,tilt:0,cover:1});
  const b=emptyBuilding();b.settings.roof.windows=[w];
  const ids=watchedEntities({...h,areas:{},entities:{}} as HomeAssistant,b,{openings:new Map(),furniture:new Map(),heat:false,warnings:[],weatherEntityId:null});
  assert.ok(ids.includes("cover.motor"));assert.ok(ids.includes("cover.blind"));
});
