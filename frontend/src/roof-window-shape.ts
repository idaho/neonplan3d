import type { RoofWindow, Vec2 } from "./model.ts";
import { polygonSignedArea, polygonTriangles, validPolygon } from "./geometry/polygon.ts";

/** Normalised local contour: u along the eave, v uphill. Dimensions remain independent. */
export const RECT_WINDOW: Vec2[] = [[0, 0], [1, 0], [1, 1], [0, 1]];
export function validWindowOutline(points: readonly Vec2[]): boolean {
  return points.length <= 32 && points.every(p => p.length === 2 && p.every(v => Number.isFinite(v) && v >= 0 && v <= 1)) && validPolygon(points);
}
export function windowOutline(w: RoofWindow): Vec2[] {
  return w.points && validWindowOutline(w.points) ? w.points : RECT_WINDOW;
}
export function windowLocalPoints(w: RoofWindow): Vec2[] {
  return windowOutline(w).map(([u, v]) => [w.u + u * (w.w ?? 0.78), w.v + v * (w.h ?? 1.18)]);
}

/** Clip an interpolated (u,v,height) polygon against a half plane. */
export function clipWindowPlane(points: number[][], a: Vec2, b: Vec2, inside = true): number[][] {
  const distance = (p: number[]) => ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) * (inside ? 1 : -1);
  const out: number[][] = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i], q = points[(i + 1) % points.length], dp = distance(p), dq = distance(q);
    if (dp >= -1e-9) out.push(p);
    if ((dp >= -1e-9) !== (dq >= -1e-9)) {
      const t = dp / (dp - dq);
      out.push(p.map((v, j) => v + (q[j] - v) * t));
    }
  }
  return out.filter((p, i) => {
    const q = out[(i + 1) % out.length];
    return Math.hypot(p[0] - q[0], p[1] - q[1]) > 1e-8;
  });
}
const nonempty = (p: number[][]) => p.length >= 3 && Math.abs(polygonSignedArea(p)) > 1e-9;

/** Subtract a simple, possibly concave opening without removing its bounding box. */
export function subtractWindowPolygon(surface: number[][], hole: Vec2[]): number[][][] {
  let pieces = [surface];
  for (const ids of polygonTriangles(hole)) {
    const triangle = ids.map(i => hole[i]);
    pieces = pieces.flatMap(piece => {
      let overlap = piece;
      for (let i = 0; i < 3; i++) overlap = clipWindowPlane(overlap, triangle[i], triangle[(i + 1) % 3]);
      if (!nonempty(overlap)) return [piece];
      let rest = piece;
      const outside: number[][][] = [];
      for (let i = 0; i < 3; i++) {
        const a = triangle[i], b = triangle[(i + 1) % 3];
        const cut = clipWindowPlane(rest, a, b, false);
        if (nonempty(cut)) outside.push(cut);
        rest = clipWindowPlane(rest, a, b);
      }
      return outside;
    });
  }
  return pieces;
}

/** Triangular pieces avoid accidental bridges when clipping a concave blind. */
export function windowCoverPieces(w: RoofWindow, amount: number, uncovered = false): Vec2[][] {
  const points = windowOutline(w), k = Math.max(0, Math.min(1, amount));
  const direction = w.cover_direction ?? "top";
  const axis = direction === "left" || direction === "right" ? 0 : 1;
  const reverse = direction === "top" || direction === "right";
  const min = Math.min(...points.map(p => p[axis])), max = Math.max(...points.map(p => p[axis]));
  const at = reverse ? max - k * (max - min) : min + k * (max - min);
  const a: Vec2 = axis === 0 ? [at, 1] : [0, at], b: Vec2 = axis === 0 ? [at, 0] : [1, at];
  return polygonTriangles(points).map(ids => clipWindowPlane(ids.map(i => points[i]), a, b, reverse !== uncovered))
    .filter(nonempty).map(p => p as Vec2[]);
}
