import assert from "node:assert/strict";
import test from "node:test";
import { emptyBuilding, newFloor, pointInPolygon } from "../model.ts";
import { roofFaces, proposeWindow } from "../solar.ts";
import { roofSectionsFromRooms } from "../roof-sections.ts";
import { GeoBuffer } from "./geo.ts";
import { appendRoofSun } from "./roof-sun.ts";

function fixture(custom = false) {
  const b = emptyBuilding(), floor = newFloor("upper", "Upper", 3);
  floor.rooms = [{ id: "r", name: "Room", area_id: null, points: [[0,0],[10,0],[10,8],[0,8]], floor_material: "wood" }];
  b.floors = [floor]; b.settings.roof = { type: "gable", pitch: 35, overhang: 0.4 };
  if (custom) { b.settings.roof.sections = roofSectionsFromRooms(b); b.settings.roof.type = "custom"; }
  const face = roofFaces(b).find((f) => f.n[2] > 0)!;
  b.settings.roof.windows = [proposeWindow(face, "sky")];
  return { b, floor };
}

function area(buf: GeoBuffer) {
  let sum = 0;
  for (let i = 0; i < buf.p.length; i += 9) {
    const p = buf.p.slice(i, i + 9);
    sum += Math.abs((p[3] - p[0]) * (p[8] - p[2]) - (p[6] - p[0]) * (p[5] - p[2])) / 2;
  }
  return sum;
}

test("gable and custom skylights project warm finite sunlight onto their owning floor", () => {
  for (const custom of [false, true]) {
    const { b, floor } = fixture(custom), buf = new GeoBuffer();
    appendRoofSun(buf, b, floor, { elevation: 70, azimuth: 180 }, 0, new Map());
    assert.ok(buf.count > 0); assert.ok(buf.p.every(Number.isFinite));
    for (let i = 1; i < buf.p.length; i += 3) assert.equal(buf.p[i], 0.02);
    for (let i = 0; i < buf.c.length; i += 3) assert.ok(buf.c[i] > buf.c[i + 1] && buf.c[i + 1] > buf.c[i + 2]);
    for (let i = 0; i < buf.p.length; i += 9) assert.ok(pointInPolygon([(buf.p[i] + buf.p[i + 3] + buf.p[i + 6]) / 3, (buf.p[i + 2] + buf.p[i + 5] + buf.p[i + 8]) / 3], floor.rooms[0].points));
  }
});

test("blinds shrink and eliminate the skylight patch; clouds dim it", () => {
  const { b, floor } = fixture();
  const render = (cover: number, cloud = 0) => {
    const buf = new GeoBuffer();
    appendRoofSun(buf, b, floor, { elevation: 70, azimuth: 180 }, cloud, new Map([["sky", { open: 0, tilt: 0, cover }]]));
    return buf;
  };
  const open = render(0), half = render(0.5);
  assert.ok(area(half) > 0 && area(half) < area(open));
  assert.equal(render(1).count, 0);
  assert.ok(Math.max(...render(0, 0.8).c) < Math.max(...open.c));
});

test("no sunlight at night, in heavy cloud, behind the slope, through floor holes or on a different floor", () => {
  const { b, floor } = fixture();
  for (const [elevation, azimuth, cloud] of [[0,180,0],[70,180,1],[5,0,0]]) {
    const buf = new GeoBuffer(); appendRoofSun(buf, b, floor, { elevation, azimuth }, cloud, new Map());
    assert.equal(buf.count, 0);
  }
  const hole = new GeoBuffer(); appendRoofSun(hole, b, floor, { elevation: 70, azimuth: 180 }, 0, new Map(), [floor.rooms[0].points]);
  assert.equal(hole.count, 0);
  const wrong = new GeoBuffer(); appendRoofSun(wrong, b, { ...floor, id: "lower", elevation: 0 }, { elevation: 70, azimuth: 180 }, 0, new Map());
  assert.equal(wrong.count, 0);
});
