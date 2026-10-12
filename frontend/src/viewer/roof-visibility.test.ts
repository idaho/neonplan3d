import assert from "node:assert/strict";
import test from "node:test";
import { roofPresentation, roofFaceIsGlass, roofGlassAmount } from "./roof-visibility.ts";
import { Color } from "three";
import { emptyBuilding, newFloor } from "../model.ts";
import { buildRoof } from "./roof.ts";
import { roofSectionsFromRooms } from "../roof-sections.ts";

test("gable walls have one outward-facing surface at either ridge end", () => {
  const b = emptyBuilding(), floor = newFloor("f", "Floor", 0);
  floor.rooms = [{ id: "r", name: "R", area_id: null, points: [[0,0],[10,0],[10,8],[0,8]], floor_material: "wood" }];
  b.floors = [floor]; b.settings.roof = { type: "gable", pitch: 35, overhang: 0.4 };
  const color = new Color(0x141d31);
  for (const custom of [false, true]) {
    if (custom) {
      b.settings.roof.sections = roofSectionsFromRooms(b);
      for (const section of b.settings.roof.sections) { section.eave_a += 0.8; section.eave_b += 0.8; }
      b.settings.roof.type = "custom";
    }
    const roof = buildRoof(b)[0], geo = roof.solid;
    let count = 0, left = false, right = false;
    for (let i = 0; i < geo.p.length; i += 9) {
      if (Math.abs(geo.c[i] - color.r) > 1e-8 || Math.abs(geo.c[i + 1] - color.g) > 1e-8 || Math.abs(geo.c[i + 2] - color.b) > 1e-8) continue;
      const p = geo.p.slice(i, i + 9);
      const nx = (p[4] - p[1]) * (p[8] - p[2]) - (p[5] - p[2]) * (p[7] - p[1]);
      const nz = (p[3] - p[0]) * (p[7] - p[1]) - (p[4] - p[1]) * (p[6] - p[0]);
      if (Math.hypot(nx, nz) < 1e-8) continue;
      count++;
      assert.ok(nx * (p[0] - 5) + nz * (p[2] - 4) > 0, 'Roof wall normal points inside');
      const normal = [nx, 0, nz];
      assert.equal(roofFaceIsGlass(normal, [nx, 1, nz]), true);
      assert.equal(roofFaceIsGlass(normal, [-nx, 1, -nz]), false);
      // Every wall perimeter edge must remain visible, but no triangulation diagonals are added.
      for (const [a, z] of [[0, 3], [3, 6], [6, 0]]) {
        // A triangulated quad can have an internal diagonal; only require actual vertical edges here.
        if (Math.hypot(p[a] - p[z], p[a + 2] - p[z + 2]) > 1e-8) continue;
        const edge = [...p.slice(a, a + 3), ...p.slice(z, z + 3)];
        const matches = Array.from({ length: roof.lines.p.length / 6 }, (_, n) => roof.lines.p.slice(n * 6, n * 6 + 6));
        assert.ok(matches.some((e) => e.every((v, j) => Math.abs(v - edge[j]) < 1e-8) || e.every((v, j) => Math.abs(v - edge[(j + 3) % 6]) < 1e-8)), 'Knee wall edge is missing');
      }
      if (nx < 0) left = true;
      if (nx > 0) right = true;
    }
    assert.ok(left && right, 'Both gable ends must be present');
    if (!custom) assert.equal(count, 2, 'Duplicate reversed gable faces must not block glass');
    else assert.ok(count > 2, 'Raised eaves must include outward-facing knee walls');
  }
});

test("roof glass blends smoothly around the wall facing threshold", () => {
  assert.equal(roofGlassAmount(0), 0);
  assert.equal(roofGlassAmount(1), 1);
  assert.ok(Math.abs(roofGlassAmount(0.25) - 0.5) < 1e-8);
  assert.ok(roofGlassAmount(0.2) > 0 && roofGlassAmount(0.3) < 1);
  assert.ok(roofGlassAmount(0.2) < roofGlassAmount(0.25) && roofGlassAmount(0.25) < roofGlassAmount(0.3));
});

test("kept roofs remain fully present without lifting at any zoom", () => {
  for (const radius of [5, 7.7, 20]) assert.deepEqual(roofPresentation(radius, 10, true), { opacity: 1, lift: 0 });
  assert.equal(roofPresentation(5, 10, true, 0.1).lift, 0);
});

test("ordinary roofs still lift and fade while zooming", () => {
  assert.deepEqual(roofPresentation(5, 10, false), { opacity: 0, lift: 2.2 });
  assert.equal(roofPresentation(20, 10, false).opacity, 0.94);
  assert.equal(roofPresentation(5, 10, false, 0.5).lift, 1.1);
});

test("camera-facing slopes use the wall threshold; opposite slopes stay solid", () => {
  assert.equal(roofFaceIsGlass([1, 1, 0], [1, 1, 0]), true);
  assert.equal(roofFaceIsGlass([-1, 1, 0], [1, 1, 0]), false);
  assert.equal(roofFaceIsGlass([-1, -1, 0], [1, 1, 0]), true);
  assert.equal(roofFaceIsGlass([0, 1, 0], [1, 1, 0]), true);
  assert.equal(roofFaceIsGlass([0, 1, 0], [1, -1, 0]), false);
  assert.equal(roofFaceIsGlass([1, 1, 0], [0.2, 1, 1]), false);
});
