import assert from "node:assert/strict";
import test from "node:test";
import { climateModeGlow, furnitureEntities } from "./devices.ts";
import { newFloor, type Furniture } from "./model.ts";
import { isPackClimate, setPacks } from "./packs.ts";
import { screenRect } from "./viewer/furniture.ts";
import type { HomeAssistant } from "./types.ts";

test("pack climate bindings use native entities, preserve explicit disable and retain a positive thin outlet", () => {
  setPacks([{id:"test.climate",name:"Climate",publisher:"Test",licensee:null,items:[{
    id:"ac",name:{en:"AC"},size:[0.726,0.21,0.291],mount:"wall",wall_y:1.8,
    bindings:[{id:"climate",label:"Climate",domains:["climate"]}],
    parts:[{id:"outlet",shape:"box",x:0,z:0.45,y:0.06,w:0.92,d:0.03,h:0.1,color:"dark",screen:true}],
  }]}]);
  try {
    const floor=newFloor("f","Floor",0);
    const f: Furniture={id:"ac",type:"pack:test.climate:ac",x:1,z:1,w:0.726,d:0.21,h:0.291,rotation:0,variant:null};
    assert.ok(isPackClimate(f.type));assert.equal(isPackClimate("pack:missing:ac"),false);
    const hass={states:{"climate.bosch":{entity_id:"climate.bosch",state:"cool",attributes:{hvac_action:"cooling"}}},entities:{}} as unknown as HomeAssistant;
    for(const bound of [false,true]){
      floor.furniture=[bound?{...f,bindings:{climate:"climate.bosch"}}:{...f,entity:"climate.bosch"}];
      assert.equal(furnitureEntities(hass,[floor]).get(f.id)?.entity,"climate.bosch");
    }
    floor.furniture=[{...f,entity:"climate.bosch",bindings:{climate:"none"}}];
    assert.equal(furnitureEntities(hass,[floor]).get(f.id)?.entity,undefined);
    const r=screenRect(f,floor)!;assert.ok(r.x1>r.x0&&r.y1>r.y0);
    assert.ok(r.y0>=1.8&&r.y1<=1.8+f.h);
    for(const state of ["heat","cool","dry","fan_only","heat_cool"]){
      const active=climateModeGlow({entity_id:"climate.bosch",state,attributes:{hvac_action:"cooling"}})!;
      const idle=climateModeGlow({entity_id:"climate.bosch",state,attributes:{hvac_action:"idle"}})!;
      assert.ok(active.level>idle.level);assert.deepEqual(active.color,idle.color);
    }
    for(const state of ["off","unknown","unavailable"])assert.equal(climateModeGlow({entity_id:"climate.bosch",state,attributes:{}}),null);
  } finally {setPacks([]);}
});
