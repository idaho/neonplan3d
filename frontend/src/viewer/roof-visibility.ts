import type { Material, Vector3 } from "three";

/** Roof visibility and lift are independent of the camera-facing glass treatment. */
export function roofPresentation(radius: number, houseRadius: number, keep: boolean, opacity?: number): { opacity: number; lift: number } {
  const zoom = Math.min(1, Math.max(0, (radius / houseRadius - 0.62) / 0.3));
  const target = keep ? 1 : 0.94 * zoom;
  return { opacity: target, lift: keep ? 0 : (1 - (opacity ?? target)) * 2.2 };
}

/** Same facing threshold and glass tint as walls; horizontal roof faces open from above. */
export function roofFaceIsGlass(normal: readonly number[], camera: readonly number[]): boolean {
  const sign = normal[1] < 0 ? -1 : 1;
  const n = Math.hypot(normal[0], normal[2]), c = Math.hypot(camera[0], camera[2]);
  return n < 1e-6 ? camera[1] > 0 : sign * (normal[0] * camera[0] + normal[2] * camera[2]) / (n * (c || 1)) >= 0.25;
}

/** Blend around the walls' facing threshold instead of abruptly switching to glass. */
export function roofGlassAmount(facing: number): number {
  const t = Math.min(1, Math.max(0, (facing - 0.1) / 0.3));
  return t * t * (3 - 2 * t);
}

export function makeRoofGlass<T extends Material>(material: T, direction: { value: Vector3 }): T {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uRoofDirection = direction;
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nuniform vec3 uRoofDirection;\nvarying float vRoofGlass;").replace("#include <begin_vertex>", `#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`);
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vRoofGlass;").replace("#include <color_fragment>", `#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`);
  };
  material.customProgramCacheKey = () => "fp3d-roof-glass";
  return material;
}
