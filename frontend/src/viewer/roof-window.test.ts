import assert from "node:assert/strict";
import test from "node:test";
import { roofWindowSash } from "./roof-window.ts";

const corners = [[0,0,0],[1,0,0],[1,2,0],[0,2,0]], normal = [0,0,1], slope = [0,1,0];
const near = (a: number[], b: number[]) => a.forEach((v, i) => assert.ok(Math.abs(v - b[i]) < 1e-8));

test("closed roof windows keep their size and location for every pivot", () => {
  for (const hinge of [undefined, "top", "middle", "bottom"] as const) {
    roofWindowSash(corners, normal, slope, hinge, 0).forEach((p, i) => near(p, corners[i]));
  }
});

test("top-hung preserves the legacy opening and keeps the upper edge fixed", () => {
  const angle = Math.PI / 6, result = roofWindowSash(corners, normal, slope, undefined, angle);
  assert.deepEqual(result, roofWindowSash(corners, normal, slope, "top", angle));
  near(result[2], corners[2]); near(result[3], corners[3]);
  near(result[0], [0, 2 - 2 * Math.cos(angle), 2 * Math.sin(angle)]);
});

test("middle pivot keeps the centre fixed and swings the two halves in opposite directions", () => {
  const result = roofWindowSash(corners, normal, slope, "middle", Math.PI / 6);
  near(result[0].map((v, i) => (v + result[3][i]) / 2), [0,1,0]);
  assert.ok(result[0][2] > 0 && result[3][2] < 0);
});

test("bottom pivot keeps the lower edge fixed and opens the upper edge outward", () => {
  for (const angle of [12, 30].map((d) => d * Math.PI / 180)) {
    const result = roofWindowSash(corners, normal, slope, "bottom", angle);
    near(result[0], corners[0]); near(result[1], corners[1]);
    assert.ok(result[2][2] > 0);
    assert.ok(Math.abs(Math.hypot(...result[2].map((v, i) => v - result[1][i])) - 2) < 1e-8);
  }
});
