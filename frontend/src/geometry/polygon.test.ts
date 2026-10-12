import assert from "node:assert/strict";
import { test } from "node:test";
import type { Vec2 } from "../model.ts";
import { clipConvex, polygonContains, polygonContainsPolygon, polygonSegment, polygonSignedArea, polygonTriangles, validPolygon } from "./polygon.ts";

const L: Vec2[] = [[0, 0], [6, 0], [6, 2], [2, 2], [2, 6], [0, 6]];

test("simple concave polygons triangulate in either winding without filling the missing corner", () => {
  for (const poly of [L, [...L].reverse(), [[0, 0], [3, 0], [6, 0], ...L.slice(2)] as Vec2[]]) {
    assert.equal(validPolygon(poly), true);
    const triangles = polygonTriangles(poly);
    assert.ok(triangles.length > 0);
    const area = triangles.reduce((sum, ids) => sum + Math.abs(polygonSignedArea(ids.map((i) => poly[i]))), 0);
    assert.equal(area, 20);
    for (const ids of triangles) {
      const centre = ids.reduce((p, i) => [p[0] + poly[i][0] / 3, p[1] + poly[i][1] / 3], [0, 0]);
      assert.ok(polygonContains(L, centre));
    }
  }
});

test("self crossings, repeated corners, degenerate and non-finite contours are rejected", () => {
  for (const p of [
    [[0, 0], [4, 4], [0, 4], [4, 0]], [[0, 0], [2, 0], [2, 0], [0, 2]],
    [[0, 0], [1, 0], [2, 0]], [[0, 0], [Infinity, 0], [0, 2]],
    [[0, 0], [4, 0], [2, 0], [0, 4]],
  ] as Vec2[][]) assert.equal(validPolygon(p), false);
});

test("clip interpolation preserves a sloping plane", () => {
  const clipped = clipConvex([[0, 0, 0], [6, 0, 6], [6, 6, 18], [0, 6, 12]], [[0, 0], [3, 0], [0, 3]]);
  assert.equal(Math.abs(polygonSignedArea(clipped)), 4.5);
  for (const [u, v, y] of clipped) assert.ok(Math.abs(y - (u + 2 * v)) < 1e-8);
});

test("a concave notch clips ridges and excludes modules that span it", () => {
  const U: Vec2[] = [[0, 0], [6, 0], [6, 6], [4, 6], [4, 2], [2, 2], [2, 6], [0, 6]];
  assert.deepEqual(polygonSegment(U, [0, 4], [6, 4]), [[0, 1 / 3], [2 / 3, 1]]);
  assert.equal(polygonContainsPolygon(U, [[1, 3], [5, 3], [5, 5], [1, 5]]), false);
  assert.equal(polygonContainsPolygon(U, [[0, 0], [6, 0], [6, 1], [0, 1]]), true);
});
