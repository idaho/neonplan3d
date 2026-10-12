// Simple polygon operations shared by the editor, roof geometry and solar placement; no renderer dependency.
import type { Vec2 } from "../model.ts";

const EPS = 1e-8;
const cross = (a: readonly number[], b: readonly number[], c: readonly number[]) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
export function polygonSignedArea(p: readonly (readonly number[])[]): number {
  return p.reduce((sum, a, i) => { const b = p[(i + 1) % p.length]; return sum + a[0] * b[1] - b[0] * a[1]; }, 0) / 2;
}
const onSegment = (p: readonly number[], a: readonly number[], b: readonly number[]) => Math.abs(cross(a, b, p)) < EPS && p[0] >= Math.min(a[0], b[0]) - EPS && p[0] <= Math.max(a[0], b[0]) + EPS && p[1] >= Math.min(a[1], b[1]) - EPS && p[1] <= Math.max(a[1], b[1]) + EPS;

/** Boundary points count as inside. */
export function polygonContains(p: readonly Vec2[], q: readonly number[]): boolean {
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const a = p[j], b = p[i];
    if (onSegment(q, a, b)) return true;
    if ((a[1] > q[1]) !== (b[1] > q[1]) && q[0] < (b[0] - a[0]) * (q[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}

export function validPolygon(p: readonly Vec2[]): boolean {
  if (p.length < 3 || p.length > 200 || !p.every((q) => q.every(Number.isFinite)) || Math.abs(polygonSignedArea(p)) < 0.05) return false;
  for (let i = 0; i < p.length; i++) {
    const a = p[i], b = p[(i + 1) % p.length];
    if (Math.hypot(a[0] - b[0], a[1] - b[1]) < EPS) return false;
    // A folded-back adjacent edge overlaps its neighbour.
    const c = p[(i + 2) % p.length];
    if (Math.abs(cross(a, b, c)) < EPS && (b[0] - a[0]) * (c[0] - b[0]) + (b[1] - a[1]) * (c[1] - b[1]) < 0) return false;
    for (let j = i + 2; j < p.length; j++) {
      if ((j + 1) % p.length === i) continue;
      const c = p[j], d = p[(j + 1) % p.length];
      if (cross(a, b, c) * cross(a, b, d) < 0 && cross(c, d, a) * cross(c, d, b) < 0) return false;
      if (onSegment(a, c, d) || onSegment(b, c, d) || onSegment(c, a, b) || onSegment(d, a, b)) return false;
    }
  }
  return true;
}

/** Ear clipping for a simple, possibly concave polygon, in either winding. */
export function polygonTriangles(p: readonly Vec2[]): number[][] {
  const ids = p.map((_, i) => i);
  if (polygonSignedArea(p) < 0) ids.reverse();
  const out: number[][] = [];
  let budget = p.length * p.length;
  while (ids.length > 3 && budget-- > 0) {
    let found = false;
    for (let i = 0; i < ids.length; i++) {
      const a = ids[(i + ids.length - 1) % ids.length], b = ids[i], c = ids[(i + 1) % ids.length];
      const turn = cross(p[a], p[b], p[c]);
      if (Math.abs(turn) < EPS) { ids.splice(i, 1); found = true; break; }
      if (turn < 0 || ids.some((j) => j !== a && j !== b && j !== c && cross(p[a], p[b], p[j]) >= -EPS && cross(p[b], p[c], p[j]) >= -EPS && cross(p[c], p[a], p[j]) >= -EPS)) continue;
      out.push([a, b, c]); ids.splice(i, 1); found = true; break;
    }
    if (!found) return [];
  }
  if (ids.length === 3 && Math.abs(cross(p[ids[0]], p[ids[1]], p[ids[2]])) > EPS) out.push([...ids]);
  return out;
}

/** Clip a polygon with interpolated height (u,v,y) to a convex plan polygon. */
export function clipConvex(subject: [number, number, number][], clip: readonly Vec2[]): [number, number, number][] {
  let out = subject;
  const sign = polygonSignedArea(clip) < 0 ? -1 : 1;
  for (let i = 0; i < clip.length && out.length; i++) {
    const a = clip[i], b = clip[(i + 1) % clip.length], input = out;
    out = [];
    for (let j = 0; j < input.length; j++) {
      const p = input[j], q = input[(j + 1) % input.length];
      const dp = sign * cross(a, b, p), dq = sign * cross(a, b, q);
      if (dp >= -EPS) out.push(p);
      if ((dp >= -EPS) !== (dq >= -EPS)) {
        const t = dp / (dp - dq);
        out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t]);
      }
    }
  }
  return out.filter((p, i) => { const q = out[(i + 1) % out.length]; return Math.hypot(p[0] - q[0], p[1] - q[1]) > EPS; });
}

/** All intervals of a segment inside a polygon; a notch can split a ridge into several parts. */
export function polygonSegment(p: readonly Vec2[], a: readonly number[], b: readonly number[]): [number, number][] {
  const cuts = [0, 1], dx = b[0] - a[0], dz = b[1] - a[1];
  for (let i = 0; i < p.length; i++) {
    const c = p[i], d = p[(i + 1) % p.length], ex = d[0] - c[0], ez = d[1] - c[1];
    const den = dx * ez - dz * ex;
    if (Math.abs(den) < EPS) continue;
    const t = ((c[0] - a[0]) * ez - (c[1] - a[1]) * ex) / den;
    const u = ((c[0] - a[0]) * dz - (c[1] - a[1]) * dx) / den;
    if (t > EPS && t < 1 - EPS && u >= -EPS && u <= 1 + EPS) cuts.push(t);
  }
  cuts.sort((x, y) => x - y);
  const out: [number, number][] = [];
  for (let i = 1; i < cuts.length; i++) {
    const lo = cuts[i - 1], hi = cuts[i], t = (lo + hi) / 2;
    if (hi - lo > EPS && polygonContains(p, [a[0] + dx * t, a[1] + dz * t])) out.push([lo, hi]);
  }
  return out;
}

/** Corners alone are not enough for a module spanning a concave notch. */
export function polygonContainsPolygon(outer: readonly Vec2[], inner: readonly Vec2[]): boolean {
  return inner.every((p, i) => polygonContains(outer, p) && polygonSegment(outer, p, inner[(i + 1) % inner.length]).reduce((sum, [a, b]) => sum + b - a, 0) > 1 - EPS);
}
