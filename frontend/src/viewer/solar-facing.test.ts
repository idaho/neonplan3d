import assert from "node:assert/strict";
import test from "node:test";
import { emptyBuilding, newFloor } from "../model.ts";
import { roofFaces, proposeField } from "../solar.ts";
import { buildRoof } from "./roof.ts";
import { buildSolarLive } from "./solar-live.ts";

test("roof modules and cell lines are separate from the transparent roof and face outward", () => {
  for (const type of ["gable", "flat"] as const) {
    const b = emptyBuilding(), f = newFloor("f", "Floor", 0);
    f.rooms = [{ id: "r", name: "R", area_id: null, points: [[0,0],[10,0],[10,8],[0,8]], floor_material: "wood" }];
    b.floors = [f]; b.settings.roof = { type, pitch: 35, overhang: 0.4 };
    const bare = buildRoof(b)[0];
    const face = roofFaces(b)[0], field = proposeField(face, "pv");
    b.settings.roof.solar = [field];
    const withSolar = buildRoof(b)[0];
    assert.deepEqual(withSolar.solid.p, bare.solid.p);
    assert.deepEqual(withSolar.lines.p, bare.lines.p);
    const solar = withSolar.solar!;
    assert.ok(solar.solid.count > 0 && solar.lines.p.length > 0);
    assert.equal(solar.facing.normals.length, solar.solid.p.length);
    assert.equal(solar.facing.lineNormals.length, solar.lines.p.length);
    assert.equal(solar.facing.points.length, solar.solid.p.length);
    assert.equal(solar.facing.linePoints.length, solar.lines.p.length);
    const live = buildSolarLive([{ face, field }], 0)!;
    assert.equal(live.geometry.getAttribute("solarNormal").count, live.geometry.getAttribute("position").count);
    for (const normals of [solar.facing.normals, solar.facing.lineNormals, Array.from(live.geometry.getAttribute("solarNormal").array)]) {
      for (let i = 0; i < normals.length; i += 3) {
        const n = normals.slice(i, i + 3);
        assert.ok(n.reduce((sum, v, j) => sum + v * face.n[j], 0) > 0);
        assert.ok(Math.abs(Math.hypot(...n) - 1) < 1e-6);
        assert.ok(n[1] > 0, 'Modules must not be visible from straight underneath');
      }
    }
    if (type === "flat") assert.ok(Math.abs(solar.facing.normals[0]) + Math.abs(solar.facing.normals[2]) > 0, 'Flat-roof panels must use their tilted mounting normal');
  }
});
