import { Color } from "three";
import type { Building, Floor, Vec2 } from "../model.ts";
import { pointInPolygon } from "../model.ts";
import { roofFaces, topFloor, windowCorners } from "../solar.ts";
import { sectionFloor } from "../roof-sections.ts";
import { GeoBuffer } from "./geo.ts";
import type { RoofWindowState } from "./roof.ts";

/** Warm floor patches through skylights, using the same sun, cloud and blind rules as wall windows. */
export function appendRoofSun(buf: GeoBuffer, building: Building, floor: Floor, sun: { elevation: number; azimuth: number }, cloud: number, states: ReadonlyMap<string, RoofWindowState>, holes: readonly Vec2[][] = []): void {
  if (sun.elevation <= 2 || cloud >= 0.97) return;
  const el = sun.elevation * Math.PI / 180;
  const az = (sun.azimuth + (building.settings.north ?? 0)) * Math.PI / 180;
  const toSun = [Math.sin(az), -Math.cos(az)];
  const ray = [toSun[0] * Math.cos(el), Math.sin(el), toSun[1] * Math.cos(el)];
  const day = Math.min(1, sun.elevation / 12) * (1 - 0.8 * cloud);
  const reach = 1 / Math.tan(el);
  const faces = new Map(roofFaces(building).map((f) => [f.key, f]));
  for (const w of building.settings.roof.windows ?? []) {
    const face = faces.get(w.face);
    if (!face) continue;
    const section = building.settings.roof.sections?.find((s) => s.id === face.section);
    const owner = section ? sectionFloor(building, section) : topFloor(building);
    if (owner?.id !== floor.id) continue;
    const corners = windowCorners(face, w);
    if (!corners) continue;
    const facing = face.n.reduce((v, n, i) => v + n * ray[i], 0);
    if (facing < 0.05) continue;
    const cover = Math.min(1, Math.max(0, states.get(w.id)?.cover ?? 0));
    if (cover >= 0.99) continue;
    // Find the room directly below the opening, not one across a wall along the projected ray.
    const center: Vec2 = [corners.reduce((s, p) => s + p[0], 0) / 4, corners.reduce((s, p) => s + p[2], 0) / 4];
    const room = floor.rooms.find((r) => pointInPolygon(center, r.points));
    if (!room) continue;
    const mix = (a: number[], b: number[], t: number) => a.map((v, i) => v + (b[i] - v) * t);
    const at = (u: number, v: number) => {
      const p = mix(mix(corners[0], corners[1], u), mix(corners[3], corners[2], u), v * (1 - cover));
      const d = Math.min(7, (p[1] - floor.elevation) * reach);
      return [p[0] - toSun[0] * d, 0.02, p[2] - toSun[1] * d];
    };
    const distance = (a: number[], b: number[]) => Math.hypot(...a.map((v, i) => v - b[i]));
    const cols = Math.max(1, Math.ceil(distance(at(0, 0), at(1, 0)) / 0.3));
    const rows = Math.max(1, Math.ceil(distance(at(0, 0), at(0, 1)) / 0.25));
    const k = 0.14 * day * Math.min(1, facing * 1.5);
    const near = new Color(k, 0.82 * k, 0.55 * k), far = near.clone().multiplyScalar(0.45);
    for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
      const u0 = j / cols, u1 = (j + 1) / cols, v0 = i / rows, v1 = (i + 1) / rows;
      const m = at((u0 + u1) / 2, (v0 + v1) / 2), point: Vec2 = [m[0], m[2]];
      if (!pointInPolygon(point, room.points) || holes.some((h) => pointInPolygon(point, h))) continue;
      const a = at(u0, v0), b = at(u1, v0), c = at(u1, v1), d = at(u0, v1);
      const c0 = near.clone().lerp(far, v0), c1 = near.clone().lerp(far, v1);
      buf.tri(a, b, c, c0, c0, c1);
      buf.tri(a, c, d, c0, c1, c1);
    }
  }
}
