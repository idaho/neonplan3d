// Batch lamps under a room ceiling, roof section or pergola, using the same polygon raster.
import { FURNITURE_SIZE, groundLevel, outdoorDrop, OUTDOOR_TOP, roomLevelAt, spotGrid, type Floor, type Furniture, type FurnitureType, type OutdoorArea, type RoofSection, type Vec2 } from "./model.ts";
import { ROOF_THICK, sectionGeometry, sectionHeightAt, sectionProfile, sectionUV } from "./roof-sections.ts";
import { surfaceTilt } from "./surface-binding.ts";

export interface SpotSurface {
  id: string;
  points: Vec2[];
  area_id?: string | null;
  floorId?: string;
  roof?: RoofSection;
  pergola?: OutdoorArea;
}

export function spotSurfaceKey(s: SpotSurface): string {
  return `${s.roof ? "roof" : s.pergola ? "pergola" : "room"}:${s.id}`;
}

export function ceilingSpots(surface: SpotSurface, options: { type: FurnitureType; rows: number; cols: number; entity: string | null }, floor: Floor, id: () => string): Furniture[] {
  const [w, d, h] = FURNITURE_SIZE[options.type];
  const roof = surface.roof;
  const geometry = roof ? sectionGeometry(roof, { u0: 0, u1: 0, a: 0, b: 0 }) : null;
  return spotGrid(surface, options.rows, options.cols).map(([x, z]) => {
    const f: Furniture = { id: id(), type: options.type, x, z, rotation: 0, w, d, h, variant: null, entity: options.entity ?? "none", power: null };
    let ceiling: number | null = null;
    if (roof && geometry) {
      const [u, v] = sectionUV(roof, x, z);
      const flat = roof.shape === "flat" || roof.shape === "parapet";
      ceiling = (flat ? roof.eave_a : sectionHeightAt(geometry, u, v) ?? sectionProfile(roof).y(v)) - (flat || roof.open ? 0 : ROOF_THICK) - floor.elevation;
    } else if (surface.pergola) {
      const a = surface.pergola;
      ceiling = groundLevel(floor) + (a.offset ?? 0) + (a.height ?? OUTDOOR_TOP.pergola) - outdoorDrop(a, x, z);
    }
    if (ceiling !== null) {
      f.surface_binding = { kind: roof ? "roof" : "pergola", id: surface.id, floor_id: floor.id };
      const heightAt = (px: number, pz: number) => {
        if (roof && geometry) {
          const [u, v] = sectionUV(roof, px, pz), flat = roof.shape === "flat" || roof.shape === "parapet";
          return (flat ? roof.eave_a : sectionHeightAt(geometry, u, v) ?? sectionProfile(roof).y(v)) - (flat || roof.open ? 0 : ROOF_THICK) - floor.elevation;
        }
        const a = surface.pergola!;
        return groundLevel(floor) + (a.offset ?? 0) + (a.height ?? OUTDOOR_TOP.pergola) - outdoorDrop(a, px, pz);
      };
      Object.assign(f, surfaceTilt(heightAt, x, z));
      f.mount_y = Math.round((ceiling - roomLevelAt(floor, x, z) - h) * 1000) / 1000;
      if (!Number.isFinite(f.mount_y) || f.mount_y < 0 || f.mount_y > 10) throw new Error("Invalid ceiling mounting height");
    }
    return f;
  });
}
