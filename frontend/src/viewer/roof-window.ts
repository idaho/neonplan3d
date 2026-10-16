import type { RoofWindow } from "../model.ts";
import { DoubleSide, MeshBasicMaterial } from "three";

/** Glass must never hide an exterior blind when viewed from the room. */
export function roofWindowGlassMaterial(): MeshBasicMaterial {
  return new MeshBasicMaterial({ vertexColors: true, side: DoubleSide, transparent: true, opacity: 0.22, depthWrite: false });
}

/** Rotate the sash around its chosen cross-slope pivot. Bottom-hung opens outward at the top. */
export function roofWindowSash(corners: number[][], normal: readonly number[], slope: readonly number[], hinge: RoofWindow["hinge"], angle: number): number[][] {
  const pivot = hinge === "bottom" ? 0 : hinge === "middle" ? 0.5 : 1;
  const sign = hinge === "bottom" ? -1 : 1;
  const rotate = (p: number[], low: number[], high: number[]) => {
    const axis = low.map((v, i) => v + (high[i] - v) * pivot);
    const delta = p.map((v, i) => v - axis[i]);
    const along = delta.reduce((s, v, i) => s + v * slope[i], 0);
    return axis.map((v, i) => v + delta[i] * Math.cos(angle) - normal[i] * along * Math.sin(angle) * sign);
  };
  const values = corners.map(p => p.reduce((s, v, i) => s + v * slope[i], 0));
  const low = Math.min(...values), high = Math.max(...values);
  return corners.map((p, j) => {
    const a = p.map((v, i) => v + slope[i] * (low - values[j]));
    const b = p.map((v, i) => v + slope[i] * (high - values[j]));
    return rotate(p, a, b);
  });
}
