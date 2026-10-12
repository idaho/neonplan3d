import assert from "node:assert/strict";
import { test } from "node:test";
import { Euler, Vector3 } from "three";
import { furnitureTransform, rotateFurniturePositions, furnitureBoxCorners, furniturePlanOutline, furnitureHeightBounds } from "./furniture-transform.ts";
import { furnitureFootprint, resizeFurniture, type Furniture } from "./model.ts";

function close(actual: readonly number[], expected: readonly number[]) {
  actual.forEach((value, i) => assert.ok(Math.abs(value - expected[i]) < 1e-9, `${actual} != ${expected}`));
}

test("90 degree tilt projects the height into the footprint without changing the item", () => {
  const f = { x: 3, z: 7, w: 2, d: 0.4, h: 1.2, rotation: 0, rotation_x: 90 } as Furniture;
  const before = structuredClone(f), p = furnitureFootprint(f);
  close([Math.min(...p.map(v => v[0])), Math.max(...p.map(v => v[0])), Math.min(...p.map(v => v[1])), Math.max(...p.map(v => v[1]))], [2, 4, 6.4, 7.6]);
  close(furnitureHeightBounds(f), [0.4, 0.8]);
  assert.deepEqual(f, before);
});

test("combined XYZ outline contains every transformed box corner and follows translation", () => {
  const f = { x: 3, z: 7, w: 2, d: 0.4, h: 1.2, rotation: 37, rotation_x: 43, rotation_z: -21 };
  const outline = furniturePlanOutline(f), corners = furnitureBoxCorners(f);
  assert.ok(outline.length >= 4 && outline.length <= 6);
  for (const [x, , z] of corners) for (let i = 0; i < outline.length; i++) {
    const a = outline[i], b = outline[(i + 1) % outline.length];
    assert.ok((b[0] - a[0]) * (z - a[1]) - (b[1] - a[1]) * (x - a[0]) >= -1e-9);
  }
  const moved = furniturePlanOutline({ ...f, x: f.x + 5, z: f.z - 2 });
  outline.forEach((p, i) => close(moved[i], [p[0] + 5, p[1] - 2]));
});

test("tilted resize keeps the opposite projected corner and scales dimensions uniformly", () => {
  const f = { x: 3, z: 7, w: 2, d: 0.4, h: 1.2, rotation: 37, rotation_x: 43, rotation_z: -21 } as Furniture;
  const p = furnitureFootprint(f), x0 = Math.min(...p.map(v => v[0])), z0 = Math.min(...p.map(v => v[1]));
  const x1 = Math.max(...p.map(v => v[0])), z1 = Math.max(...p.map(v => v[1]));
  const resized = resizeFurniture(f, [1, 1], [x0 + 2 * (x1 - x0), z0 + 2 * (z1 - z0)], 0.01);
  close([resized.w, resized.d, resized.h!], [4, 0.8, 2.4]);
  const after = furnitureFootprint({ ...f, ...resized });
  close([Math.min(...after.map(v => v[0])), Math.min(...after.map(v => v[1]))], [x0, z0]);
});

test("missing angles preserve old plans exactly, and the centre stays fixed", () => {
  const f = { x: 3, z: 7, rotation: 123 };
  assert.deepEqual(furnitureTransform(f, 2)(1, 4, 8), [1, 4, 8]);
  close(furnitureTransform({ ...f, rotation_x: 55, rotation_z: -135 }, 2)(3, 2, 7), [3, 2, 7]);
});

test("X and Z can turn in either direction including upside down", () => {
  const f = { x: 0, z: 0 };
  close(furnitureTransform({ ...f, rotation_x: 90 }, 0)(0, 1, 0), [0, 0, 1]);
  close(furnitureTransform({ ...f, rotation_x: -90 }, 0)(0, 1, 0), [0, 0, -1]);
  close(furnitureTransform({ ...f, rotation_z: 90 }, 0)(1, 0, 0), [0, 1, 0]);
  close(furnitureTransform({ ...f, rotation_z: 180 }, 0)(0, 1, 0), [0, -1, 0]);
});

test("combined rotations match the picture plane's Three.js YZX orientation", () => {
  for (const yaw of [0, 90, 217]) for (const rx of [-90, 35, 180]) for (const rz of [-60, 0, 90]) {
    const f = { x: 4, z: -2, rotation: yaw, rotation_x: rx, rotation_z: rz };
    const a = yaw * Math.PI / 180;
    const local = new Vector3(0.7, 0.3, -0.9);
    const original = local.clone().applyEuler(new Euler(0, -a, 0)).add(new Vector3(f.x, 1.4, f.z));
    const expected = local.clone().applyEuler(new Euler(rx * Math.PI / 180, -a, rz * Math.PI / 180, "YZX")).add(new Vector3(f.x, 1.4, f.z));
    close(furnitureTransform(f, 1.4)(...original.toArray()), expected.toArray());
  }
});

test("only the appended position range changes", () => {
  const vertices = [10, 20, 30, 0, 1, 0];
  rotateFurniturePositions(vertices, 3, { x: 0, z: 0, rotation_x: 90 }, 0);
  close(vertices, [10, 20, 30, 0, 0, 1]);
});
