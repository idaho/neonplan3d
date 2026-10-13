import { Color, Vector3 } from "three";
import { furnitureBoxCorners } from "../furniture-transform.ts";
import { clipConvex } from "../geometry/area.ts";
import { roomLevel, roomAt, SURFACES, type Floor, type Vec2 } from "../model.ts";
import { mountBase, packItem } from "../packs.ts";
import { subtractBay, wallLevels } from "../room-levels.ts";
import type { Wall } from "../geometry/walls.ts";
import type { OpeningInfo } from "./build.ts";
import { cutAbove, FURN_OFFSET, GeoBuffer, triangulate } from "./geo.ts";
import { shadowed, type Blocker } from "./lighting.ts";

interface Receiver { origin:Vector3; u:Vector3; v:Vector3; normal:Vector3; polygon:Vec2[]; holes:Vec2[][]; room?:string; fold?:number }
function hull(points:Vec2[]):Vec2[]{
  const ps=[...points].sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const half=(a:Vec2[])=>{const out:Vec2[]=[];for(const p of a){while(out.length>1){const x=out[out.length-2],y=out[out.length-1];if((y[0]-x[0])*(p[1]-x[1])-(y[1]-x[1])*(p[0]-x[0])>1e-9)break;out.pop();}out.push(p);}return out.slice(0,-1);};
  return [...half(ps),...half([...ps].reverse())];
}
export function tiltedContactShadows(shadow:GeoBuffer,floor:Floor,walls:Wall[],openings:OpeningInfo[],holes:Vec2[][],wallBuckets:number[]):void{
  const blockers:Blocker[]=walls.map(w=>{
    const length=Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])||1,ux=(w.b[0]-w.a[0])/length,uz=(w.b[1]-w.a[1])/length;
    const gaps=openings.filter(o=>Math.abs((o.start[0]-w.a[0])*uz-(o.start[1]-w.a[1])*ux)<0.01).map(o=>{
      const s=(o.start[0]-w.a[0])*ux+(o.start[1]-w.a[1])*uz;return {s0:s,s1:s+o.width,y0:o.sill,y1:o.top};
    });
    return {a:w.a,b:w.b,h:wallLevels(floor,w).top,bottom:wallLevels(floor,w).bottom,ra:0,rb:0,gaps};
  });
  const receivers:Receiver[]=floor.rooms.map(r=>({origin:new Vector3(0,roomLevel(floor,r),0),u:new Vector3(1,0,0),v:new Vector3(0,0,1),normal:new Vector3(0,1,0),polygon:r.points,holes,room:r.id}));
  for(const w of walls){
    const dx=w.b[0]-w.a[0],dz=w.b[1]-w.a[1],length=Math.hypot(dx,dz);if(length<0.01)continue;
    const u=new Vector3(dx/length,0,dz/length),levels=wallLevels(floor,w);
    for(const [room,face,side] of [[w.roomLeft,w.left,1],[w.roomRight,w.right,-1]] as const){
      if(!room)continue;
      const normal=new Vector3(-u.z*side,0,u.x*side),origin=new Vector3(w.a[0],levels.bottom,w.a[1]).addScaledVector(normal,face+0.003);
      const cuts:Vec2[][]=[];
      for(const o of openings){
        const rel=new Vector3(o.start[0]-w.a[0],0,o.start[1]-w.a[1]);
        if(Math.abs(rel.x*u.z-rel.z*u.x)>0.01)continue;
        const s=rel.dot(u);if(s+o.width<0||s>length)continue;
        cuts.push([[s,o.sill-levels.bottom],[s+o.width,o.sill-levels.bottom],[s+o.width,o.top-levels.bottom],[s,o.top-levels.bottom]]);
      }
      receivers.push({origin,u,v:new Vector3(0,1,0),normal,polygon:[[0,0],[length,0],[length,levels.top-levels.bottom],[0,levels.top-levels.bottom]],holes:cuts,room,fold:wallBuckets[walls.indexOf(w)]});
    }
  }
  for(const f of floor.furniture.filter(f=>f.rotation_x||f.rotation_z)){
    const base=mountBase(floor,f),corners=furnitureBoxCorners(f,base).map(p=>new Vector3(...p)),room=roomAt(floor,f.x,f.z)?.id;
    const local=[...receivers];
    for(const support of floor.furniture){
      if(support===f||!(SURFACES.has(support.type)||packItem(support.type)?.surface))continue;
      if(roomAt(floor,support.x,support.z)?.id!==room)continue;
      const top=furnitureBoxCorners(support,mountBase(floor,support)).slice(4).map(p=>new Vector3(...p));
      const u=top[1].clone().sub(top[0]).normalize(),v=top[3].clone().sub(top[0]).normalize(),normal=new Vector3().crossVectors(v,u).normalize();
      if(normal.y<0)normal.negate();
      const width=top[0].distanceTo(top[1]),depth=top[0].distanceTo(top[3]);
      local.push({origin:top[0],u,v,normal,polygon:[[0,0],[width,0],[width,depth],[0,depth]],holes:[],room,fold:FURN_OFFSET});
    }
    for(const r of local){
      if(r.room!==room)continue;
      const distances=corners.map(c=>c.clone().sub(r.origin).dot(r.normal));
      if(Math.max(...distances)<-0.01)continue;
      const gap=Math.max(0,Math.min(...distances));if(gap>0.35)continue;
      const inner=hull(corners.map(c=>{const p=c.clone().sub(r.origin);return [p.dot(r.u),p.dot(r.v)];}));
      if(inner.length<3)continue;
      const cx=inner.reduce((s,p)=>s+p[0],0)/inner.length,cz=inner.reduce((s,p)=>s+p[1],0)/inner.length;
      const grow=0.055+gap*0.15,outer=inner.map(([x,z]):Vec2=>{const len=Math.hypot(x-cx,z-cz)||1;return [x+(x-cx)*grow/len,z+(z-cz)*grow/len];});
      const dark=new Color(1-0.45*Math.exp(-gap*8),1-0.45*Math.exp(-gap*8),1-0.45*Math.exp(-gap*8)),clear=new Color(1,1,1);
      const triangles=triangulate(r.polygon).map(([a,b,c])=>[r.polygon[a],r.polygon[b],r.polygon[c]]);
      const before=shadow.count;
      const emit=(tri:Vec2[],colors:Color[])=>{
        for(const receiver of triangles){
          let pieces=[clipConvex(tri,receiver)];for(const hole of r.holes)for(const [a,b,c] of triangulate(hole))pieces=pieces.flatMap(p=>subtractBay(p,[hole[a],hole[b],hole[c]]));
          for(const p of pieces)for(let i=1;i+1<p.length;i++){
            const coords=[p[0],p[i],p[i+1]];
            const P=(q:Vec2)=>r.origin.clone().addScaledVector(r.u,q[0]).addScaledVector(r.v,q[1]).addScaledVector(r.normal,0.003).toArray();
            const centre=P([(coords[0][0]+coords[1][0]+coords[2][0])/3,(coords[0][1]+coords[1][1]+coords[2][1])/3]);
            if(shadowed({x:f.x,y:base+f.h/2,z:f.z},blockers,centre[0],centre[1],centre[2]))continue;
            const area=(tri[1][1]-tri[2][1])*(tri[0][0]-tri[2][0])+(tri[2][0]-tri[1][0])*(tri[0][1]-tri[2][1]);
            const tint=(q:Vec2)=>{const a=((tri[1][1]-tri[2][1])*(q[0]-tri[2][0])+(tri[2][0]-tri[1][0])*(q[1]-tri[2][1]))/area;const b=((tri[2][1]-tri[0][1])*(q[0]-tri[2][0])+(tri[0][0]-tri[2][0])*(q[1]-tri[2][1]))/area;return new Color(colors[0].r*a+colors[1].r*b+colors[2].r*(1-a-b),colors[0].g*a+colors[1].g*b+colors[2].g*(1-a-b),colors[0].b*a+colors[1].b*b+colors[2].b*(1-a-b));};
            if(Math.abs(area)>1e-10)shadow.tri(P(coords[0]),P(coords[1]),P(coords[2]),tint(coords[0]),tint(coords[1]),tint(coords[2]));
          }
        }
      };
      for(const [a,b,c] of triangulate(inner))emit([inner[a],inner[b],inner[c]],[dark,dark,dark]);
      for(let i=0;i<inner.length;i++){const j=(i+1)%inner.length;emit([inner[i],outer[i],outer[j]],[dark,clear,clear]);emit([inner[i],outer[j],inner[j]],[dark,clear,dark]);}
      if(r.fold!==undefined)cutAbove(shadow,before,floor.cut_height,r.fold);
    }
  }
}
