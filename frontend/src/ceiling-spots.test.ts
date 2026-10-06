import assert from "node:assert/strict";
import { test } from "node:test";
import { canLift, FURNITURE_SIZE, newFloor, pointInPolygon, type RoofSection, type Vec2 } from "./model.ts";
import { ceilingSpots, spotSurfaceKey } from "./ceiling-spots.ts";
import { ROOF_THICK, sectionGeometry, sectionHeightAt, sectionUV } from "./roof-sections.ts";
import { GeoBuffer } from "./viewer/geo.ts";
import { pushLampModel } from "./viewer/viewer3d.ts";

const points: Vec2[] = [[0, 0], [6, 0], [6, 2], [2, 2], [2, 6], [0, 6]];
const floor = newFloor("upper", "Upper", 2.8);
const options = { type: "lamp_downlight" as const, rows: 3, cols: 3, entity: "light.spots" };
const roof: RoofSection = { id: "roof", x0: 0, z0: 0, x1: 6, z1: 6, shape: "pent", axis: "x", eave_a: 5.8, eave_b: 5.8, pitch_a: 20, pitch_b: 20, base: 5.8, points };
let sequence = 0;
const id = () => `spot_${++sequence}`;
const near = (a: number, b: number) => assert.ok(Math.abs(a - b) <= 0.00051, `${a} != ${b}`);

test("room raster and light links remain unchanged, without overriding its ceiling", () => {
  const spots = ceilingSpots({ id: "room", points }, options, floor, id);
  assert.equal(spots.length, 5);
  assert.equal(new Set(spots.map((s) => s.id)).size, spots.length);
  for (const s of spots) {
    assert.ok(pointInPolygon([s.x, s.z], points));
    assert.equal(s.entity, "light.spots"); assert.equal(s.mount_y, undefined);
  }
});

test("spots sit under pitched roofs at each point's height, relative to the correct floor", () => {
  const spots = ceilingSpots({ id: roof.id, points, roof }, options, floor, id);
  const geometry = sectionGeometry(roof, { u0: 0, u1: 0, a: 0, b: 0 });
  assert.ok(new Set(spots.map((s) => s.mount_y)).size > 1);
  for (const s of spots) {
    const [u, v] = sectionUV(roof, s.x, s.z);
    const height = sectionHeightAt(geometry, u, v)!;
    near(s.mount_y! + s.h + floor.elevation, height - ROOF_THICK);
  }
});

test("flat slabs mount at their underside, not on top of the roof", () => {
  for (const shape of ["flat", "parapet"] as const) {
    const s = { ...roof, shape };
    const spots = ceilingSpots({ id: s.id, points, roof: s }, options, floor, id);
    for (const f of spots) near(f.mount_y! + f.h + floor.elevation, s.eave_a);
  }
});

test("a transparent canopy has no solid slab thickness and its lamps can be adjusted individually", () => {
  const open = { ...roof, open: true };
  const geometry = sectionGeometry(open, { u0: 0, u1: 0, a: 0, b: 0 });
  for (const f of ceilingSpots({ id: open.id, points, roof: open }, options, floor, id)) {
    const [u, v] = sectionUV(open, f.x, f.z);
    near(f.mount_y! + f.h + floor.elevation, sectionHeightAt(geometry, u, v)!);
    assert.equal(canLift(f), true);
  }
  assert.equal(canLift({ type: 'lamp_downlight' }), false);
});

test("pergolas use their own height, offset and slope", () => {
  const lower = newFloor("ground", "Ground", 0);
  const pergola = { id: "pergola", type: "pergola" as const, points, height: 2.7, offset: 0.2, slope: 0.6, slope_dir: "x" as const };
  const spots = ceilingSpots({ id: pergola.id, points, pergola }, options, lower, id);
  for (const f of spots) near(f.mount_y! + f.h, -0.2 + 0.2 + 2.7 - 0.6 * f.x / 6);
});

test("surface keys keep an open raster tied to its intended selection", () => {
  assert.notEqual(spotSurfaceKey({ id: "same", points }), spotSurfaceKey({ id: "same", points, roof }));
  assert.notEqual(spotSurfaceKey({ id: "a", points, roof }), spotSurfaceKey({ id: "b", points, roof }));
});

test("invalid mounting heights stop placement rather than clamp lamps into the wrong position", () => {
  assert.throws(() => ceilingSpots({ id: roof.id, points, roof: { ...roof, eave_a: 50, eave_b: 50 } }, options, floor, id));
});

test("ceiling lamp geometry follows the custom mount height while normal rooms keep their ceiling", () => {
  for (const [lamp, type] of [["downlight", "lamp_downlight"], ["spot", "lamp_spot"], ["panel", "lamp_panel"], ["ceiling", "lamp_ceiling"]] as const) {
    const a = new GeoBuffer(), b = new GeoBuffer();
    const pose = { x: 0, z: 0, size: FURNITURE_SIZE[type], lamp };
    pushLampModel(a, pose, 2.5, 0x00ff00);
    pushLampModel(b, { ...pose, ceiling_y: 3.7 }, 2.5, 0x00ff00);
    assert.equal(a.p.length, b.p.length);
    for (let i = 0; i < a.p.length; i++) near(b.p[i], a.p[i] + (i % 3 === 1 ? 1.2 : 0));
  }
});
