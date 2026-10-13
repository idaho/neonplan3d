import { pointInPolygon, roomLevelAt, type Building, type Furniture, type Vec2 } from "./model.ts";
import { ROOF_THICK, sectionGeometry, sectionHeightAt, sectionProfile, sectionUV } from "./roof-sections.ts";
import { groundLevel, outdoorDrop, OUTDOOR_TOP } from "./model.ts";

export function boundSurface(building: Building, binding: NonNullable<Furniture["surface_binding"]>) {
  const floor = building.floors.find(f => f.id === binding.floor_id);
  if (!floor) return null;
  if (binding.kind === "pergola") {
    const a = floor.outdoor?.find(a => a.id === binding.id && a.type === "pergola");
    return a ? { floor, points: a.points, height: (x: number, z: number) => groundLevel(floor) + (a.offset ?? 0) + (a.height ?? OUTDOOR_TOP.pergola) - outdoorDrop(a, x, z) } : null;
  }
  const roof = building.settings.roof.sections?.find(s => s.id === binding.id);
  if (!roof) return null;
  const points: Vec2[] = roof.points ?? [[roof.x0, roof.z0], [roof.x1, roof.z0], [roof.x1, roof.z1], [roof.x0, roof.z1]];
  const geom = sectionGeometry(roof, { u0: 0, u1: 0, a: 0, b: 0 });
  const flat = roof.shape === "flat" || roof.shape === "parapet";
  return { floor, points, height: (x: number, z: number) => {
    const [u, v] = sectionUV(roof, x, z);
    return (flat ? roof.eave_a : sectionHeightAt(geom, u, v) ?? sectionProfile(roof).y(v)) - (flat || roof.open ? 0 : ROOF_THICK) - floor.elevation;
  } };
}

export function surfaceTilt(height: (x: number, z: number) => number, x: number, z: number): { rotation_x: number; rotation_z: number } {
  const e = 0.001, dx = (height(x + e, z) - height(x - e, z)) / (2 * e), dz = (height(x, z + e) - height(x, z - e)) / (2 * e);
  const length = Math.hypot(dx, 1, dz);
  return { rotation_x: -Math.asin(dz / length) * 180 / Math.PI, rotation_z: Math.atan2(dx, 1) * 180 / Math.PI };
}

/** Reconcile against the pre-edit document so repeated drag frames never accumulate movement. */
export function syncSurfaceSpots(previous: Building, next: Building): void {
  for (const floor of next.floors) for (const f of floor.furniture) {
    if (!f.surface_binding) continue;
    const surface = boundSurface(next, f.surface_binding);
    const old = previous.floors.find(p => p.id === floor.id)?.furniture.find(p => p.id === f.id);
    const oldSurface = old?.surface_binding ? boundSurface(previous, old.surface_binding) : null;
    const detach = (why: NonNullable<Furniture["binding_warning"]>) => {
      if (old) for (const key of ["x", "z", "rotation", "rotation_x", "rotation_z", "mount_y"] as const) Object.assign(f, { [key]: old[key] });
      f.surface_binding = null; f.binding_warning = why;
    };
    if (!surface || surface.floor.id !== floor.id) { detach("surface_missing"); continue; }
    if (oldSurface && old) {
      const a = oldSurface.points, b = surface.points;
      const dx = b[0][0] - a[0][0], dz = b[0][1] - a[0][1];
      if (a.length === b.length && a.every((p, i) => Math.abs(b[i][0] - p[0] - dx) < 1e-6 && Math.abs(b[i][1] - p[1] - dz) < 1e-6)) {
        f.x = old.x + dx; f.z = old.z + dz;
      }
    }
    if (!pointInPolygon([f.x, f.z], surface.points)) { detach("surface_outside"); continue; }
    const mount = surface.height(f.x, f.z) - roomLevelAt(floor, f.x, f.z) - f.h;
    if (!Number.isFinite(mount) || mount < 0 || mount > 10) { detach("surface_height"); continue; }
    Object.assign(f, surfaceTilt(surface.height, f.x, f.z), { rotation: 0, mount_y: mount, binding_warning: null });
  }
}
