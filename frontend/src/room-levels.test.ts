import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, floorTop, newFloor, roomCeilingAt, roomHeight, roomLevel, roomWallLevel, type Opening, type Room } from "./model.ts";
import { generateWalls } from "./geometry/walls.ts";
import { roomTransition, stairBays, stairOpeningBottom, subtractBay, wallLevels } from "./room-levels.ts";
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

test("wall base, finished floor and clear ceiling height remain independent", () => {
  const f = splitFloor(), r = f.rooms[0];
  Object.assign(r, { wall_offset: 0.1, floor_offset: 0.3, ceiling_height: 2.5 });
  near(roomWallLevel(f, r), 0.1);
  near(roomLevel(f, r), 0.4);
  near(roomCeilingAt(f, 2, 2), 2.9);
  const w = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls.find(w => w.exterior && (w.roomLeft === r.id || w.roomRight === r.id))!;
  near(wallLevels(f, w).bottom, 0.1);
  near(wallLevels(f, w).top, 2.9);
  f.elevation = 10;
  near(roomLevel(f, r), 0.4);
  near(roomWallLevel(f, r), 0.1);
  near(mountBase(f, { type: "chair", x: 2, z: 2, h: 1, mount_y: 0.2 }), 0.6);
});

test("new door and window profiles measure sill and height from the owner's finished floor", () => {
  const f = splitFloor();
  Object.assign(f.rooms[0], { wall_offset: 0.1, floor_offset: 0.3, ceiling_height: 3 });
  for (const type of ["door", "window"] as const) {
    Object.assign(f.openings[0], { type, sill: 0.2, height: 1.5 });
    const g = buildFloorGeometry(f, 0.24, 0.12);
    near(g.openings[0].sill, 0.6);
    near(g.openings[0].top, 2.1);
  }
});

test("signed stair offsets preserve count and depth on either side and clear the raised floor", () => {
  for (const side of ["room", "other"] as const) for (const offset of [-0.3, 0, 0.3]) {
    const f = splitFloor();
    f.openings[0].steps = { side, offset, count: 3, depth: 0.9 };
    const walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
    const t = roomTransition(f, f.openings[0], walls)!;
    assert.ok(t.stair, `${side}: ${offset}`);
    near(t.stair.face - t.stair.wallFace, offset);
    near(t.stair.depth, 0.9);
    assert.equal(t.stair.count, 3);
    assert.equal(stairBays(f, f.rooms[1], [t]).length, side === "other" || offset < 0 ? 1 : 0);
    assert.equal(stairBays(f, f.rooms[0], [t]).length, 0);
    assert.ok(stairOpeningBottom(t) <= t.threshold);
    const g = buildFloorGeometry(f, 0.24, 0.12);
    for (const key of ["floor", "walls", "lines", "shadow"] as const) {
      assert.ok([...g[key].getAttribute("position").array].every(Number.isFinite));
      g[key].dispose();
    }
  }
});

test("invalid stair offsets are reported, never silently moved or clamped", () => {
  const f = splitFloor(), walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
  for (const offset of [-2, 5, NaN, Infinity]) {
    f.openings[0].steps = { side: "room", offset, count: 3, depth: 0.9 };
    const t = roomTransition(f, f.openings[0], walls)!;
    assert.equal(t.stair, undefined);
    assert.equal(t.issue, "fit");
    assert.ok(Object.is(f.openings[0].steps.offset, offset));
  }
});

test("stairs follow the doorway axis for rotated and mirrored plans", () => {
  for (const angle of [0, 0.7, Math.PI / 2]) for (const mirror of [-1, 1]) for (const side of ["room", "other"] as const) {
    const f = splitFloor(), c = Math.cos(angle), s = Math.sin(angle);
    for (const r of f.rooms) r.points = r.points.map(([x, z]) => [mirror * x * c - z * s, mirror * x * s + z * c]);
    f.openings[0].steps = { side, count: 3, depth: 0.9, offset: -0.3 };
    const walls = generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls;
    const t = roomTransition(f, f.openings[0], walls)!;
    assert.ok(t.stair);
    near(t.axis[0] * t.stair.toward[0] + t.axis[1] * t.stair.toward[1], 0);
    near(t.stair.face - t.stair.wallFace, -0.3);
  }
});

test("equal finished floors need no stairs even with different wall bases", () => {
  const f = splitFloor();
  Object.assign(f.rooms[0], { wall_offset: 0.1, floor_offset: 0.3 });
  Object.assign(f.rooms[1], { wall_offset: 0.4, floor_offset: 0 });
  f.openings[0].steps = { side: "room", count: 3, depth: 0.9, offset: 0.3 };
  const t = roomTransition(f, f.openings[0], generateWalls(f.rooms, { exterior: 0.24, interior: 0.12 }).walls)!;
  near(t.high, t.low);
  assert.equal(t.stair, undefined);
});

test("missing and zero stair offsets produce identical legacy geometry", () => {
  const f = splitFloor();
  f.openings[0].steps = { side: "other", count: 3, depth: 0.9 };
  const before = buildFloorGeometry(f, 0.24, 0.12);
  f.openings[0].steps.offset = 0;
  const after = buildFloorGeometry(f, 0.24, 0.12);
  for (const key of ["floor", "walls", "lines", "shadow"] as const)
    assert.deepEqual([...before[key].getAttribute("position").array], [...after[key].getAttribute("position").array]);
});

test("upstream ceiling height wins over the legacy branch alias without moving the floor", () => {
  const f = splitFloor(), r = f.rooms[1];
  r.ceiling_height = 4;
  near(roomHeight(f, r), 4);
  near(roomCeilingAt(f, 6, 2), 4.6);
  near(roomLevel(f, r), 0.6);
  r.ceiling_height = null;
  near(roomHeight(f, r), 2.4);
});

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
  near(marker.base!, 0.6); near(marker.top!, 3);
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
