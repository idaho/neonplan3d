import { Float32BufferAttribute, type BufferGeometry, type Material } from "three";

export interface SolarFacing {
  normals: number[];
  points: number[];
  lineNormals: number[];
  linePoints: number[];
}

/** Actual module normal, including tilted frames on flat roofs (not just the roof normal). */
export function moduleNormal(a: number[], b: number[], c: number[], outward: readonly number[]): number[] {
  const u = b.map((v, i) => v - a[i]), v = c.map((n, i) => n - a[i]);
  const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  const length = Math.hypot(...n) || 1;
  const sign = n.reduce((sum, v, i) => sum + v * outward[i], 0) < 0 ? -1 : 1;
  return n.map((v) => sign * v / length);
}

export function solarFacingGeometry(geometry: BufferGeometry, normals: number[], points: number[]): BufferGeometry {
  geometry.setAttribute("solarNormal", new Float32BufferAttribute(normals, 3));
  geometry.setAttribute("solarPoint", new Float32BufferAttribute(points, 3));
  return geometry;
}

/** Hide the whole module, its edges and live overlay when viewed from below its plane. */
export function makeSolarFacing<T extends Material>(material: T): T {
  const before = material.onBeforeCompile.bind(material), key = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    before(shader, renderer);
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nattribute vec3 solarNormal;\nattribute vec3 solarPoint;").replace("#include <project_vertex>", `#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`);
  };
  material.customProgramCacheKey = () => `${key()}-solar-facing`;
  return material;
}
