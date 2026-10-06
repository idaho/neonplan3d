import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, floorTop, newFloor, roomCeilingAt, roomHeight, roomLevel, type Opening, type Room } from "./model.ts";
import { generateWalls } from "./geometry/walls.ts";
import { roomTransition, subtractBay, wallLevels } from "./room-levels.ts";
import { buildFloorGeometry } from "./viewer/build.ts";
import { buildLightSurface } from "./viewer/lighting.ts";
import { mountBase } from "./packs.ts";
import { wallTopUnder } from "./roof-sections.ts";
import { buildMarkers } from "./markers.ts";
import type { HomeAssistant } from "./types.ts";

const rectangle = (id: string, x0: number, x1: number): Room => ({ id, name: id, area_id: null, points: [[x0, 0], [x1, 0], [x1, 4], [x0, 4]], floor_material: "wood" });
export function splitFloor() {
  const floor = newFloor("test", "Test", 2.8);
  floor.height = 3;
  floor.rooms = [{ ...rectangle("low", 0, 4), elevation: 2.8, height: 3 }, { ...rectangle("high", 4, 8), elevation: 3.4, height: 2.4 }];
  const opening: Opening = { id: "passage", room_id: "low", edge: 1, offset: 2, width: 1.2, type: "door", style: "passage", height: 2.1, sill: 0, hinge: "left", leaves: 1, swing: "in", contact: null, contact2: null, cover: null, tilt: null };
  floor.openings = [opening];
  return floor;
}
const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-5, `${a} != ${b}`);

test("room elevation is absolute while its height remains independent", () => {
  const f = splitFloor();
  near(roomLevel(f, f.rooms[1]), 0.6); near(roomHeight(f, f.rooms[1]), 2.4);
  near(roomCeilingAt(f, 6, 2), 3);
  const old = rectangle("old", 0, 2);
  assert.equal(roomLevel(f, old), 0); assert.equal(roomHeight(f, old), 3);
  const walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
  const shared = walls.find((w) => !w.exterior)!;
  near(wallLevels(f, shared).bottom, 0); near(wallLevels(f, shared).top, 3);
  f.rooms[1].height = 4; near(wallLevels(f, shared).top, 4.6);
});

test("steps can sit on either side; the doorway threshold follows the opposite floor", () => {
  const f = splitFloor(), walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
  for (const side of ["room", "other"] as const) {
    const o = { ...f.openings[0], steps: { side, depth: 0.9, count: 3 } };
    const t = roomTransition(f, o, walls)!;
    assert.ok(t.stair);
    assert.equal(t.stair.room.id, side === "room" ? "low" : "high");
    assert.equal(t.stair.recess, side === "other");
    near(t.threshold, side === "room" ? 0.6 : 0); near(t.width, 1.2);
    const g = buildFloorGeometry({ ...f, openings: [o] }, 0.24, 0.12);
    near(g.openings[0].sill, t.threshold);
    assert.equal(g.holes.length > 0, side === "other");
    for (const mesh of [g.floor, g.walls, g.lines, g.shadow]) {
      assert.ok([...mesh.getAttribute('position').array].every(Number.isFinite)); mesh.dispose();
    }
  }
});

test("a higher-side recess removes the raised slab instead of hiding the stairs", () => {
  const f = splitFloor(); f.openings[0].steps = { side: "other", count: 3, depth: 0.9 };
  const g = buildFloorGeometry(f, 0.24, 0.12), p = g.floor.getAttribute('position').array;
  const range = g.roomTris.find((r) => r.roomId === 'high')!;
  let area = 0;
  for (let i = range.start * 9; i < range.end * 9; i += 9) {
    const [ax, az, bx, bz, cx, cz] = [p[i], p[i + 2], p[i + 3], p[i + 5], p[i + 6], p[i + 8]];
    area += Math.abs((bx - ax) * (cz - az) - (bz - az) * (cx - ax)) / 2;
    near(p[i + 1], 0.6);
  }
  near(area, 16 - 1.2 * (0.9 + 0.06));
});

test("cross-boundary bay subtraction preserves exactly the remaining floor area", () => {
  const pieces = subtractBay([[0, 0], [4, 0], [0, 4]], [[-1, -1], [1, -1], [1, 5], [-1, 5]]);
  const area = pieces.reduce((sum, p) => sum + Math.abs(p.reduce((a, q, i) => { const r = p[(i + 1) % p.length]; return a + q[0] * r[1] - r[0] * q[1]; }, 0)) / 2, 0);
  near(area, 4.5);
});

test("floor materials, light cells, furniture and roof proposals use room levels", () => {
  const f = splitFloor(), g = buildFloorGeometry(f, 0.24, 0.12);
  const lights = buildLightSurface(f, g.walls2d, g.wallBuckets, g.openings, 0.3);
  for (let i = 0; i < lights.pos.length; i += 3) if (lights.normal[i + 1] === 1 && lights.room[i / 3] === 1) near(lights.pos[i + 1], 0.612);
  near(mountBase(f, { type: 'chair', x: 6, z: 2, h: 1 }), 0.6);
  near(mountBase(f, { type: 'chair', x: 6, z: 2, h: 1, mount_y: 0.3 }), 0.9);
  const b = emptyBuilding(); b.floors = [f]; f.rooms[1].height = 4;
  near(wallTopUnder(b, 4.5, 0.5, 7.5, 3.5)!, 7.4);
});

test("oversized steps are not rendered into another room", () => {
  const f = splitFloor(), walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
  f.openings[0].steps = { side: 'room', depth: 9, count: 3 };
  assert.equal(roomTransition(f, f.openings[0], walls)!.stair, undefined);
});

test("furniture geometry and ceiling devices follow the elevated room", () => {
  const f = splitFloor();
  f.furniture = [{ id: 'chair', type: 'chair', x: 6, z: 2, w: 0.5, d: 0.5, h: 0.85, rotation: 0, variant: null }];
  const g = buildFloorGeometry(f, 0.24, 0.12), range = g.furnitureTris[0], p = g.walls.getAttribute('position').array;
  const ys = [];
  for (let i = range.start * 9 + 1; i < range.end * 9; i += 3) ys.push(p[i]);
  near(Math.min(...ys), 0.6);
  f.placements = [{ entity_id: 'light.test', x: 6, z: 2, y: null, rotation: 0, mount: 'ceiling' }];
  const building = emptyBuilding(); building.floors = [f];
  const hass = { states: { 'light.test': { entity_id: 'light.test', state: 'on', attributes: {} } }, areas: {}, devices: {}, entities: {} } as unknown as HomeAssistant;
  const marker = buildMarkers(hass, building)[0];
  near(marker.base!, 0.6); near(marker.ceiling_y!, 3);
});

test("changing doorway width changes both stair width and the high-side recess", () => {
  const f = splitFloor(); f.openings[0].steps = { side: 'other', count: 3, depth: 0.9 };
  const walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
  f.openings[0].width = 2;
  near(roomTransition(f, f.openings[0], walls)!.width, 2);
  const g = buildFloorGeometry(f, 0.24, 0.12);
  near(g.openings[0].width, 2);
  assert.equal(g.holes.length, 1);
});

test("legacy plans and explicit default heights build exactly the same geometry", () => {
  const f = splitFloor();
  for (const room of f.rooms) { delete room.elevation; delete room.height; }
  const before = buildFloorGeometry(f, 0.24, 0.12);
  for (const room of f.rooms) { room.elevation = f.elevation; room.height = f.height; }
  const after = buildFloorGeometry(f, 0.24, 0.12);
  for (const key of ['floor', 'walls', 'lines', 'shadow'] as const) assert.deepEqual([...before[key].getAttribute('position').array], [...after[key].getAttribute('position').array]);
});

test("explicit room heights can be lower than the floor default without a floating automatic roof", () => {
  const f = splitFloor(); f.height = 10;
  near(floorTop(f), 5.8);
});
