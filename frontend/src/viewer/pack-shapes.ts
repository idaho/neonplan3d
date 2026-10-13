import { BoxGeometry, BufferGeometry, CatmullRomCurve3, CylinderGeometry, Float32BufferAttribute, LatheGeometry, SphereGeometry, TorusGeometry, TubeGeometry, Vector2, Vector3 } from "three";
import type { PackPart } from "../packs.ts";
import { triangulate } from "./geo.ts";
let lowQuality=false;
export function setPackShapeQuality(low:boolean):void{lowQuality=low;}

export function packShape(p: PackPart, w: number, d: number, h: number, low = lowQuality): BufferGeometry | null {
  const n = low || p.detail === "low" ? 12 : p.detail === "high" ? 40 : 24;
  const W = p.w * w, D = p.d * d, H = p.h * h;
  let g: BufferGeometry;
  if (p.shape === "cyl" && p.detail) {
    const axis=p.axis??'y',length=axis==='x'?W:axis==='z'?D:H;
    const radius=(axis==='x'?Math.min(D,H):axis==='z'?Math.min(W,H):Math.min(W,D))/2;
    g=new CylinderGeometry(radius,radius,length,low?32:p.detail==='high'?64:40);
    if(axis==='x')g.rotateZ(-Math.PI/2);else if(axis==='z')g.rotateX(Math.PI/2);
    g.translate(0,H/2,0);
  } else if (p.shape === "polygon") {
    const axis=p.axis??'y',a=axis==='x'?D:W,b=axis==='y'?D:H,t=axis==='y'?H:axis==='x'?W:D;
    const poly = p.points ?? [], positions: number[] = [];
    for (const [a,b,c] of triangulate(poly)) {
      for (const i of [a,c,b]) positions.push(poly[i][0],0,poly[i][1]);
      for (const i of [a,b,c]) positions.push(poly[i][0],1,poly[i][1]);
    }
    for (let i=0;i<poly.length;i++) {
      const a=poly[i], b=poly[(i+1)%poly.length];
      positions.push(a[0],0,a[1],b[0],1,b[1],b[0],0,b[1],a[0],0,a[1],a[0],1,a[1],b[0],1,b[1]);
    }
    for(let i=0;i<positions.length;i+=3){const x=positions[i]*a,y=positions[i+1]*t,z=positions[i+2]*b;
      if(axis==='z'){positions[i]=x;positions[i+1]=z+H/2;positions[i+2]=D/2-y;}
      else if(axis==='x'){positions[i]=y-W/2;positions[i+1]=z+H/2;positions[i+2]=x;}
      else {positions[i]=x;positions[i+1]=y;positions[i+2]=z;}
    }
    g = new BufferGeometry(); g.setAttribute("position",new Float32BufferAttribute(positions,3));
  } else if (p.shape === "sphere" || p.shape === "ellipsoid") {
    const curved=low?32:p.detail==='high'?64:40;
    g = new SphereGeometry(0.5,curved,curved/2);
    const dia = Math.min(W,D,H);
    g.scale(p.shape === "sphere" ? dia : W,p.shape === "sphere" ? dia : H,p.shape === "sphere" ? dia : D);
    g.translate(0,H/2,0);
  } else if (p.shape === "rounded_box") {
    const segments = n===12 ? 3 : n===40 ? 8 : 5, r = Math.min(p.radius ?? 0.08,0.49);
    g = new BoxGeometry(1,1,1,segments,segments,segments);
    const attr = g.getAttribute("position"), core = 0.5-r;
    for (let i=0;i<attr.count;i++) {
      const v=new Vector3().fromBufferAttribute(attr,i), c=v.clone().clampScalar(-core,core);
      v.sub(c).normalize().multiplyScalar(r).add(c); attr.setXYZ(i,v.x,v.y,v.z);
    }
    g.scale(W,H,D); g.translate(0,H/2,0);
  } else if (p.shape === "torus") {
    const r=Math.min(0.24,p.thickness ?? 0.06);
    const curved=low?32:p.detail==='high'?64:40;
    g=new TorusGeometry(0.5-r,r,Math.max(8,curved/4),curved); g.scale(W,H,D); g.translate(0,H/2,0);
  } else if (p.shape === "pipe") {
    const path=(p.path ?? []).map(([x,y,z])=>new Vector3(x*W,(y+0.5)*H,z*D));
    if(path.length<2) return null;
    const curve=new CatmullRomCurve3(path,false,"centripetal"), radius=(p.radius ?? 0.1)*Math.min(W,D,H);
    const outer=new TubeGeometry(curve,Math.min(256,n*(path.length-1)),radius,Math.max(8,n/2),false);
    const inner=new TubeGeometry(curve,Math.min(256,n*(path.length-1)),Math.max(radius*0.05,radius-(p.thickness ?? 0.025)*Math.min(W,D,H)),Math.max(8,n/2),false);
    const a=outer.toNonIndexed(), b=inner.toNonIndexed(), pos=[...a.getAttribute("position").array];
    const ip=b.getAttribute("position").array;
    for(let i=0;i<ip.length;i+=9) pos.push(...ip.slice(i,i+3),...ip.slice(i+6,i+9),...ip.slice(i+3,i+6));
    g=new BufferGeometry();g.setAttribute("position",new Float32BufferAttribute(pos,3));
    for(const mesh of [outer,inner,a,b])mesh.dispose();
  } else if (p.shape === "bowl") {
    const t=Math.min(0.2,p.thickness ?? 0.04);
    g=new LatheGeometry([new Vector2(0,0),new Vector2(0.5,0),new Vector2(0.5,1),new Vector2(0.5-t,1),new Vector2(0.5-t,t),new Vector2(0,t)],n);
    g.scale(W,H,D);
  } else return null;
  g.translate(p.x*w,p.y*h,p.z*d); g.computeVertexNormals();
  return g;
}
