import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, ROOF_SHAPES, type RoofSection, type Vec2 } from "./model.ts";
import { offsetPolygon, roofUnderAt, sectionGeometry, sectionPolygon, sectionUV } from "./roof-sections.ts";
import { polygonContains, polygonContainsPolygon, polygonSignedArea } from "./geometry/polygon.ts";
import { roofFaces, faceAt, fieldModules } from "./solar.ts";
import { pushSection } from "./viewer/roof.ts";
import { pushOutdoor } from "./viewer/outdoor.ts";
import { GeoBuffer, LineBuffer } from "./viewer/geo.ts";

const L: Vec2[] = [[0, 0], [6, 0], [6, 2], [2, 2], [2, 6], [0, 6]];
const section: RoofSection = { id: "test", shape: "gable", x0: 0, z0: 0, x1: 6, z1: 6, axis: "x", eave_a: 3, eave_b: 3, pitch_a: 30, pitch_b: 30, base: 3, points: L, overhang: 0 };

test("every roof shape follows the same concave footprint in 3D", () => {
  for (const shape of ROOF_SHAPES) for (const axis of ["x", "z"] as const) for (const flip of [false, true]) {
    const s = { ...section, shape, axis, flip };
    const buf = new GeoBuffer(), lines = new LineBuffer();
    pushSection(buf, lines, s, 0, 0);
    assert.ok(buf.count > 0, shape);
    assert.ok(buf.p.every(Number.isFinite) && lines.p.every(Number.isFinite), shape);
    for (let i = 0; i < buf.p.length; i += 9) {
      const centre = [0, 0];
      for (let j = 0; j < 3; j++) { centre[0] += buf.p[i + j * 3] / 3; centre[1] += buf.p[i + j * 3 + 2] / 3; }
      assert.ok(polygonContains(L, centre), `${shape}/${axis}: triangle outside ${centre}`);
    }
    assert.equal(roofUnderAt({ settings: { roof: { sections: [s] } } }, 4, 4), null);
  }
});

test("clipped planes cover exactly the footprint, without gaps or duplicate area", () => {
  for (const shape of ROOF_SHAPES.filter((s) => s !== "flat" && s !== "parapet")) {
    const s = { ...section, shape };
    const geometry = sectionGeometry(s, { u0: 0, u1: 0, a: 0, b: 0 });
    const area = geometry.faces.reduce((sum, f) => sum + Math.abs(polygonSignedArea(f)), 0);
    assert.ok(Math.abs(area - 20) < 1e-8, `${shape}: ${area}`);
    for (const [a, b] of geometry.ridges) {
      const u = (a[0] + b[0]) / 2, v = (a[1] + b[1]) / 2;
      assert.ok(polygonContains(L, [u, v]));
    }
  }
});

test("overhang expands both clockwise and counter-clockwise outlines", () => {
  for (const points of [L, [...L].reverse()]) {
    assert.ok(Math.abs(polygonSignedArea(offsetPolygon(points, 0.2))) > 20);
    assert.ok(polygonContains(sectionPolygon({ ...section, points }, 0.2), [-0.1, 1]));
  }
});

test("solar picking and modules do not enter a concave roof's missing corner", () => {
  const b = emptyBuilding();
  b.settings.roof = { ...b.settings.roof, type: "custom", sections: [{ ...section, shape: "flat" }], overhang: 0 };
  const faces = roofFaces(b);
  assert.equal(faceAt(faces, [4, 4]), null);
  assert.ok(faceAt(faces, [1, 4]));
  const modules = fieldModules(faces[0], { id: "field", face: "test:top", u: 0, v: 0, rows: 4, cols: 5, portrait: true, tilt: 0, flip: false, entity: null, look: "black" });
  assert.ok(modules.length > 0);
  for (const m of modules) assert.ok(polygonContainsPolygon(L, m.corners.map((p) => [p[0], p[2]])));
});

test("free outdoor surfaces keep their concave cut-out", () => {
  const floor = newFloor("test", "Test", 0);
  floor.outdoor = [{ id: "lawn", type: "lawn", points: L, freeform: true }];
  const buf = new GeoBuffer();
  pushOutdoor(buf, new LineBuffer(), floor);
  assert.ok(buf.count > 0);
  for (let i = 0; i < buf.p.length; i += 3) assert.ok(polygonContains(L, [buf.p[i], buf.p[i + 2]]));
  const [u, v] = sectionUV(section, 4, 4);
  assert.equal(u, 4); assert.equal(v, 4);
});

test("free canopies draw panels and supports without filling the missing corner", () => {
  const solid = new GeoBuffer(), glass = new GeoBuffer();
  pushSection(solid, new LineBuffer(), { ...section, shape: "pent", open: true }, 0.2, 0, glass);
  assert.ok(solid.count > 0 && glass.count > 0);
  assert.ok(solid.p.every(Number.isFinite));
  // A post/beam may straddle the perimeter by half its thickness, never occupy the notch's interior.
  for (let i = 0; i < solid.p.length; i += 3) assert.ok(!(solid.p[i] > 2.2 && solid.p[i + 2] > 2.2));
});
