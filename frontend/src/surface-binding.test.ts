import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "./model.ts";
import { ceilingSpots } from "./ceiling-spots.ts";
import { syncSurfaceSpots } from "./surface-binding.ts";
import { furnitureTransform } from "./furniture-transform.ts";

function fixture() {
  const b = emptyBuilding(), f = newFloor("f", "Floor", 0);
  b.floors = [f];
  const a = { id: "p", type: "pergola" as const, points: [[0,0],[4,0],[4,4],[0,4]] as [number,number][], height: 3, area_id: "garden" };
  f.outdoor = [a];
  f.furniture = ceilingSpots({ id: a.id, points: a.points, pergola: a }, { type: "lamp_spot", rows: 1, cols: 1, entity: "light.garden" }, f, () => "lamp");
  return b;
}
const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);

test("bound pergola lamps follow translation, height and surface normal, preserving HA links", () => {
  const old = fixture(), next = structuredClone(old), a = next.floors[0].outdoor[0];
  a.points = a.points.map(([x,z]) => [x+1,z+2]); a.height = 4; a.slope = 1; a.slope_dir = "z";
  syncSurfaceSpots(old, next);
  const f = next.floors[0].furniture[0];
  near(f.x, old.floors[0].furniture[0].x + 1);
  near(f.z, old.floors[0].furniture[0].z + 2);
  assert.equal(f.entity, "light.garden");
  assert.ok(f.surface_binding); assert.ok(f.rotation_x);
  const P = furnitureTransform(f, 0), a0 = P(f.x,0,f.z), a1 = P(f.x,-1,f.z);
  assert.ok(a1[1] < a0[1]);
  assert.ok(Number.isFinite(f.mount_y));
});

test("removed or narrowed surfaces detach only affected spots at their last valid pose", () => {
  for (const remove of [false, true]) {
    const old = fixture(), next = structuredClone(old), f = next.floors[0];
    if (remove) f.outdoor = [];
    else f.outdoor[0].points = [[0,0],[0.5,0],[0.5,0.5],[0,0.5]];
    syncSurfaceSpots(old,next);
    assert.equal(f.furniture[0].surface_binding, null);
    assert.equal(f.furniture[0].binding_warning, remove ? "surface_missing" : "surface_outside");
    for (const key of ["x","z","mount_y","rotation_x","rotation_z","entity"] as const) assert.equal(f.furniture[0][key], old.floors[0].furniture[0][key]);
  }
});

test("explicitly detached lamps remain free when the surface moves; bindings survive JSON", () => {
  const old = fixture(), next = JSON.parse(JSON.stringify(old));
  next.floors[0].furniture[0].surface_binding = null;
  next.floors[0].outdoor[0].points = [[1,1],[5,1],[5,5],[1,5]];
  syncSurfaceSpots(old,next);
  near(next.floors[0].furniture[0].x, old.floors[0].furniture[0].x);
  assert.deepEqual(JSON.parse(JSON.stringify(old)).floors[0].furniture[0].surface_binding, old.floors[0].furniture[0].surface_binding);
});
