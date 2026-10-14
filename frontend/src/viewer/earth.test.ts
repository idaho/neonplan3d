import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, groundLevel, newFloor, setTerrain, terrainAt, type Building, type Opening, type Room } from "../model.ts";
import { buildFloorGeometry } from "./build.ts";
import { buildEarth, inGround } from "./earth.ts";

const rect = (id: string, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[0, 0], [x1, 0], [x1, z1], [0, z1]], floor_material: "wood" });

function house(terrain?: Building["settings"]["terrain"]): Building {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("ug", "UG", -2.6), height: 2.4, rooms: [rect("k", 10, 8)] }, { ...newFloor("eg", "EG", 0), rooms: [rect("a", 10, 8)] }];
  b.settings = { ...b.settings, wall_exterior: 0.3, wall_interior: 0.12, terrain };
  setTerrain(b);
  return b;
}

const earthOf = (b: Building, i: number) => {
  const f = b.floors[i];
  const geo = buildFloorGeometry(f, b.settings.wall_exterior, b.settings.wall_interior);
  return buildEarth(b, f, geo.openings);
};

test("without a ground of its own the plan keeps its lawn 0.2 m under the ground floor", () => {
  const b = house();
  assert.equal(terrainAt(3, 3), -0.2);
  assert.equal(groundLevel(b.floors[1]), -0.2);
  // a garden drawn on the cellar floor stays where it was
  assert.equal(groundLevel(b.floors[0]), -0.2);
});

test("a cellar sits in the earth, the ground floor above it does not", () => {
  const b = house();
  assert.ok(inGround(b, b.floors[0]));
  assert.ok(!inGround(b, b.floors[1]));
  assert.ok(earthOf(b, 0)!.earth.count > 0);
  assert.equal(earthOf(b, 1), null);
  // switched off: no earth at all
  const off = house({ earth: false });
  assert.equal(earthOf(off, 0), null);
});

test("a cellar window below the ground gets a light well, one above the ground does not", () => {
  const win = (sill: number): Opening => ({ id: "w", room_id: "k", edge: 0, offset: 5, width: 1, type: "window", sill, height: 0.5, hinge: "left", leaves: 1, swing: "in", contact2: null }) as Opening;
  const b = house();
  b.floors[0].openings = [win(1.65)];
  assert.ok(earthOf(b, 0)!.wells.count > 0);
  // a semi-basement: the ground 1.2 m under the ground floor, the window's sill (−0.95 m) above it
  const half = house({ level: -1.2 });
  half.floors[0].openings = [win(1.65)];
  assert.equal(earthOf(half, 0)!.wells.count, 0);
});

test("a raised house (the ground lower, no cellar) stands on a plinth; on a flat plot it gets none", () => {
  const flat = house();
  flat.floors = [flat.floors[1]];
  setTerrain(flat);
  const eg = (b: Building) => {
    const f = b.floors[0];
    return buildEarth(b, f, buildFloorGeometry(f, b.settings.wall_exterior, b.settings.wall_interior).openings, true);
  };
  assert.equal(eg(flat), null);
  const hill = house({ level: -1.0 });
  hill.floors = [hill.floors[1]];
  setTerrain(hill);
  assert.ok(eg(hill)!.earth.count > 0);
});
