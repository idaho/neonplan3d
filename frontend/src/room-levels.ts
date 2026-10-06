// Resolve shared-wall levels and optional stairs without depending on the renderer.
import { pointInPolygon, roomHeight, roomLevel, type Floor, type Opening, type Room, type Vec2 } from "./model.ts";
import { locateOpening, openingHost, type Wall } from "./geometry/walls.ts";

export function wallLevels(floor: Floor, wall: Wall): { bottom: number; top: number } {
  const rooms = [wall.roomLeft, wall.roomRight].map((id) => floor.rooms.find((r) => r.id === id)).filter((r): r is Room => !!r);
  if (!rooms.length) return { bottom: 0, top: Math.min(floor.height, wall.height ?? floor.height) };
  return {
    bottom: Math.min(...rooms.map((r) => roomLevel(floor, r))),
    top: Math.max(...rooms.map((r) => roomLevel(floor, r) + Math.min(roomHeight(floor, r), wall.height ?? Infinity))),
  };
}

export interface RoomTransition {
  opening: Opening;
  room: Room;
  other?: Room;
  wall: Wall;
  start: Vec2;
  axis: Vec2;
  toRoom: Vec2;
  width: number;
  threshold: number;
  ceiling: number;
  low: number;
  high: number;
  stair?: { room: Room; toward: Vec2; face: number; count: number; depth: number; recess: boolean; bay: Vec2[] };
}

export function roomTransition(floor: Floor, opening: Opening, walls: Wall[]): RoomTransition | null {
  const host = openingHost(opening, floor.rooms, floor.walls ?? []);
  const hit = host && locateOpening(walls, opening, host);
  if (!host || !hit) return null;
  const wall = hit.wall, length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
  if (length < 1e-6) return null;
  const axis: Vec2 = [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length];
  const ownerLeft = wall.roomLeft === host.room.id;
  const owner = floor.rooms.find((r) => r.id === host.room.id || (wall.free && r.id === wall.roomLeft)) ?? host.room;
  const other = wall.free ? undefined : floor.rooms.find((r) => r.id === (ownerLeft ? wall.roomRight : wall.roomLeft));
  const toRoom: Vec2 = ownerLeft ? [-axis[1], axis[0]] : [axis[1], -axis[0]];
  const width = Math.min(opening.width, length), s0 = Math.max(0, Math.min(length - width, hit.s - width / 2));
  const start: Vec2 = [wall.a[0] + axis[0] * s0, wall.a[1] + axis[1] * s0];
  const a = roomLevel(floor, owner), b = other ? roomLevel(floor, other) : a;
  const low = Math.min(a, b), high = Math.max(a, b);
  const out: RoomTransition = { opening, room: owner, other, wall, start, axis, toRoom, width, low, high, threshold: opening.type === "window" ? a : high, ceiling: Math.min(a + roomHeight(floor, owner), other ? b + roomHeight(floor, other) : Infinity) };
  if (!opening.steps || !other || high - low < 0.001 || opening.type === "window") return out;
  const own = opening.steps.side === "room", room = own ? owner : other;
  const toward: Vec2 = own ? toRoom : [-toRoom[0], -toRoom[1]];
  const level = roomLevel(floor, room), recess = level === high;
  const face = own ? (ownerLeft ? wall.left : wall.right) : (ownerLeft ? wall.right : wall.left);
  const depth = opening.steps.depth, count = opening.steps.count;
  if (!Number.isFinite(depth) || depth < 0.1 || depth > 10 || !Number.isInteger(count) || count < 1 || count > 30) return out;
  const at = (u: number, n: number): Vec2 => [start[0] + axis[0] * u + toward[0] * n, start[1] + axis[1] * u + toward[1] * n];
  // Recesses start on the wall centreline, so the slab cannot cover the entrance to a descending stair.
  const bay = [at(0, -0.005), at(width, -0.005), at(width, face + depth), at(0, face + depth)];
  const inside = [at(0.01, face + 0.01), at(width - 0.01, face + 0.01), at(width - 0.01, face + depth - 0.01), at(0.01, face + depth - 0.01)];
  if (!inside.every((p, i) => pointInPolygon(p, room.points) && outsideBays(p, inside[(i + 1) % inside.length], [room.points]).length === 0)) return out;
  out.threshold = own ? b : a;
  out.stair = { room, toward, face, count, depth, recess, bay };
  return out;
}

/** Remove a convex stair bay from a convex floor triangle; output fragments never overlap. */
export function subtractBay(subject: Vec2[], bay: Vec2[]): Vec2[][] {
  const area = (p: Vec2[]) => p.reduce((s, a, i) => { const b = p[(i + 1) % p.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0);
  const sign = area(bay) >= 0 ? 1 : -1;
  const pieces: Vec2[][] = [];
  let inside = subject;
  for (let i = 0; i < bay.length && inside.length >= 3; i++) {
    const a = bay[i], b = bay[(i + 1) % bay.length];
    const dist = (p: Vec2) => sign * ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]));
    const clip = (keep: number) => {
      const out: Vec2[] = [];
      inside.forEach((p, j) => {
        const q = inside[(j + 1) % inside.length], dp = keep * dist(p), dq = keep * dist(q);
        if (dp >= -1e-9) out.push(p);
        if ((dp >= -1e-9) !== (dq >= -1e-9)) { const t = dp / (dp - dq); out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]); }
      });
      return out;
    };
    const outside = clip(-1), next = clip(1);
    if (outside.length >= 3 && Math.abs(area(outside)) > 1e-8) pieces.push(outside);
    inside = next;
  }
  return pieces;
}

export function outsideBays(a: Vec2, b: Vec2, bays: Vec2[][]): [Vec2, Vec2][] {
  const cuts = [0, 1], dx = b[0] - a[0], dz = b[1] - a[1];
  for (const bay of bays) bay.forEach((p, i) => {
    const q = bay[(i + 1) % bay.length], ex = q[0] - p[0], ez = q[1] - p[1], den = dx * ez - dz * ex;
    if (Math.abs(den) < 1e-9) return;
    const t = ((p[0] - a[0]) * ez - (p[1] - a[1]) * ex) / den;
    const u = ((p[0] - a[0]) * dz - (p[1] - a[1]) * dx) / den;
    if (t > 0 && t < 1 && u >= 0 && u <= 1) cuts.push(t);
  });
  cuts.sort((x, y) => x - y);
  const at = (t: number): Vec2 => [a[0] + dx * t, a[1] + dz * t];
  const out: [Vec2, Vec2][] = [];
  for (let i = 1; i < cuts.length; i++) if (cuts[i] - cuts[i - 1] > 1e-9 && !bays.some((p) => pointInPolygon(at((cuts[i] + cuts[i - 1]) / 2), p))) out.push([at(cuts[i - 1]), at(cuts[i])]);
  return out;
}
