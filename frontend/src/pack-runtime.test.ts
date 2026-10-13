import assert from "node:assert/strict";
import { test } from "node:test";
import { boundEntity, clockParts, displayText, historicalMotion, motionState, MotionMemory, statusAppearance } from "./pack-runtime.ts";
import type { Furniture } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
const f: Furniture={id:"f",type:"pack:test:x",x:0,z:0,w:1,d:1,h:1,rotation:0,variant:null,bindings:{value:"sensor.value",door:"binary_sensor.door",tilt:"binary_sensor.tilt"},status:"sensor.status"};
const hass=(states:Record<string,string>,unit?:string)=>({states:Object.fromEntries(Object.entries(states).map(([id,state])=>[id,{entity_id:id,state,attributes:{unit_of_measurement:unit}}])),config:{time_zone:"Europe/Berlin"}} as unknown as HomeAssistant);
const moment={time:Date.parse("2026-01-01T02:05:00Z"),historical:false,playing:true,seek:0};
test("clocks use HA timezone and DST; missing timestamps remain missing",()=>{
  assert.equal(clockParts(moment.time,"Europe/Berlin")!.text,"03:05");
  assert.equal(clockParts(Date.parse("2026-07-01T01:05:00Z"),"Europe/Berlin")!.text,"03:05");
  assert.equal(clockParts(NaN,"Europe/Berlin"),null);
});
test("durations require a known unit; sensor fields keep units and missing placeholders",()=>{
  const field={id:"v",kind:"duration" as const,binding:"value",position:[0,0,0] as [number,number,number],size:[1,1] as [number,number]};
  assert.equal(displayText(field,f,hass({"sensor.value":"85"},"min"),moment),"1:25");
  assert.equal(displayText(field,f,hass({"sensor.value":"85"}),moment),"--:--");
  assert.equal(displayText({...field,kind:"sensor"},f,hass({"sensor.value":"21.5"},"°C"),moment),"21.5 °C");
  assert.equal(displayText(field,f,hass({"sensor.value":"unavailable"},"min"),{...moment,historical:true}),"--:--");
});
test("status affects only described parts and unknown states restore base visibility and colour",()=>{
  const p={id:"led",shape:"box" as const,color:"#112233",visible:false,x:0,z:0,y:0,w:1,d:1,h:1,status:{binding:"status",colors:{running:"#00ff00"},visibility:{running:true}}};
  assert.deepEqual(statusAppearance(p,f,hass({"sensor.status":"running"})),{color:"#00ff00",visible:true});
  assert.deepEqual(statusAppearance(p,f,hass({"sensor.status":"unknown"})),{color:"#112233",visible:false});
  assert.deepEqual(statusAppearance(p,f,hass({"sensor.status":"toString"})),{color:"#112233",visible:false});
  assert.equal(statusAppearance(p,{...f,status_colors:{led:{running:"#ff0000"}}},hass({"sensor.status":"running"})).color,"#ff0000");
});
test("opening uncertainty preserves a valid live position and cannot carry future/live state into replay",()=>{
  const memory=new MotionMemory();
  memory.begin(moment);memory.resolve("door",{open:1,tilt:0,known:true,running:false});
  assert.equal(memory.resolve("door",{open:0,tilt:0,known:false,running:false}).open,1);
  memory.begin({...moment,historical:true,time:moment.time-1000,seek:1});
  assert.equal(memory.resolve("door",{open:0,tilt:0,known:false,running:false}).open,0);
});
test("a compressor state cannot open a separately bound fridge door; contradictory tilt is unclear",()=>{
  const m={id:"door",parts:["p"],kind:"door" as const,pivot:[0,0,0] as [number,number,number],binding:"door"};
  assert.equal(motionState(m,f,hass({"binary_sensor.door":"off","sensor.status":"running"})).open,0);
  assert.equal(motionState(m,f,hass({"binary_sensor.door":"on","sensor.status":"standby"})).open,1);
  assert.equal(motionState({...m,kind:"window",tilt_binding:"tilt"},f,hass({"binary_sensor.door":"off","binary_sensor.tilt":"on"})).known,false);
});
test("explicitly clearing a role does not reconnect its legacy entity",()=>{
  assert.equal(boundEntity({...f,bindings:{...f.bindings,status:null}},"status"),null);
});
test("historical recovery uses only valid rows at or before the selected moment",()=>{
  const m={id:"door",parts:["p"],kind:"door" as const,pivot:[0,0,0] as [number,number,number],binding:"door"};
  const at={...moment,historical:true,history:()=>({"binary_sensor.door":[{s:"on",lu:(moment.time-1000)/1000},{s:"unavailable",lu:moment.time/1000},{s:"off",lu:(moment.time+1000)/1000}]})};
  assert.equal(historicalMotion(m,f,hass({}),at)!.open,1);
});
