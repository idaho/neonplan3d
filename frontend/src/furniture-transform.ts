/** Extra local X/Z rotations applied before the existing plan rotation (Y). Angles are degrees. */
export interface FurniturePose {
  x: number;
  z: number;
  rotation?: number;
  rotation_x?: number;
  rotation_z?: number;
}

export type FurnitureBox = FurniturePose & { w: number; d: number; h: number };

/** Eight corners of the same centre-pivot box used by the 3D renderer. No position correction. */
export function furnitureBoxCorners(f: FurnitureBox, base = 0): [number, number, number][] {
  const a = (f.rotation ?? 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  const transform = furnitureTransform(f, base + f.h / 2);
  return [0, f.h].flatMap(y => [
    [-f.w / 2, -f.d / 2], [f.w / 2, -f.d / 2], [f.w / 2, f.d / 2], [-f.w / 2, f.d / 2],
  ].map(([x, z]) => transform(f.x + x * c - z * s, base + y, f.z + x * s + z * c)));
}

/** Convex outline of the tilted box projected onto the plan. */
export function furniturePlanOutline(f: FurnitureBox): [number, number][] {
  const points = furnitureBoxCorners({ ...f, x: 0, z: 0 }).map(([x, , z]): [number, number] => [x, z]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (a: number[], b: number[], c: number[]) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const half = (ps: [number, number][]) => {
    const hull: [number, number][] = [];
    for (const p of ps) {
      while (hull.length > 1 && cross(hull[hull.length - 2], hull[hull.length - 1], p) <= 1e-10) hull.pop();
      hull.push(p);
    }
    return hull.slice(0, -1);
  };
  return [...half(points), ...half([...points].reverse())].map(([x, z]) => [x + f.x, z + f.z]);
}

/** Vertical extent relative to the unrotated mounting base. */
export function furnitureHeightBounds(f: FurnitureBox): [number, number] {
  if (!f.rotation_x && !f.rotation_z) return [0, f.h];
  const ys = furnitureBoxCorners(f).map(p => p[1]);
  return [Math.min(...ys), Math.max(...ys)];
}

/** Transform already yawed world coordinates around the item's centre at pivotY. */
export function furnitureTransform(f: FurniturePose, pivotY: number): (x: number, y: number, z: number) => [number, number, number] {
  const rx = (f.rotation_x ?? 0) * Math.PI / 180;
  const rz = (f.rotation_z ?? 0) * Math.PI / 180;
  if (!rx && !rz) return (x, y, z) => [x, y, z];
  const a = (f.rotation ?? 0) * Math.PI / 180;
  const c = Math.cos(a), s = Math.sin(a);
  const cx = Math.cos(rx), sx = Math.sin(rx), cz = Math.cos(rz), sz = Math.sin(rz);
  return (x, y, z) => {
    const dx = x - f.x, dz = z - f.z;
    const lx = dx * c + dz * s;
    const ly = y - pivotY;
    const lz = -dx * s + dz * c;
    const yy = ly * cx - lz * sx;
    const zz = ly * sx + lz * cx;
    const xx = lx * cz - yy * sz;
    const y2 = lx * sz + yy * cz;
    return [f.x + xx * c - zz * s, pivotY + y2, f.z + xx * s + zz * c];
  };
}

/** Rotate just the newly appended vertices; winding and UVs are preserved by this rigid transform. */
export function rotateFurniturePositions(positions: number[], from: number, f: FurniturePose, pivotY: number): void {
  if (!f.rotation_x && !f.rotation_z) return;
  const P = furnitureTransform(f, pivotY);
  for (let i = from; i < positions.length; i += 3) {
    const [x, y, z] = P(positions[i], positions[i + 1], positions[i + 2]);
    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;
  }
}
