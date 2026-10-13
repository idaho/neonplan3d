import { Color, Euler, Vector3 } from "three";
import { packLightGlow } from "../pack-runtime.ts";
import { pointInPolygon, roomLevelAt, roomHeight, roomLevel, type Floor, type Furniture } from "../model.ts";
import { mountBase, packItem } from "../packs.ts";
import type { HomeAssistant } from "../types.ts";
import type { Blocker, LightSource } from "./lighting.ts";
import { GeoBuffer } from "./geo.ts";

export function packSpotLights(f: Furniture,floor:Floor,hass:HomeAssistant):LightSource[]{
  const item=packItem(f.type),base=mountBase(floor,f);
  return (item?.spots??[]).flatMap(s=>{
    const cfg=f.spot_config?.[s.id],id=cfg?.entity??(s.binding?f.bindings?.[s.binding]:null)??f.entity;
    const st=id?hass.states[id]:undefined;if(!st||st.state!=="on")return [];
    const glow=packLightGlow(f,hass,id);if(!glow)return [];const pivot=s.pivot??s.position;
    const source=new Vector3(s.position[0]*f.w,s.position[1]*f.h,s.position[2]*f.d);
    const centre=new Vector3(pivot[0]*f.w,pivot[1]*f.h,pivot[2]*f.d);
    const local=new Euler((cfg?.rotation_x??0)*Math.PI/180,-(cfg?.rotation_y??0)*Math.PI/180,(cfg?.rotation_z??0)*Math.PI/180,"YZX");
    const direction=new Vector3(...s.direction).applyEuler(local).normalize();
    source.sub(centre).applyEuler(local).add(centre);
    source.y-=f.h/2;
    if(f.mirror){source.x*=-1;direction.x*=-1;}
    const whole=new Euler((f.rotation_x??0)*Math.PI/180,-f.rotation*Math.PI/180,(f.rotation_z??0)*Math.PI/180,"YZX");
    source.applyEuler(whole).add(new Vector3(f.x,base+f.h/2,f.z));direction.applyEuler(whole).normalize();
    const ri=floor.rooms.findIndex(r=>pointInPolygon([f.x,f.z],r.points));
    return [{x:source.x,y:source.y,z:source.z,direction:direction.toArray(),angle:cfg?.beam_angle??f.beam_angle??s.angle??60,color:glow.color,level:glow.level,kind:"spot" as const,room:ri<0?floor.rooms.length:ri}];
  });
}

export type CeilingHeight=(x:number,z:number)=>number|null;
export function roomCeilingSurface(floor:Floor,roofUnder?:CeilingHeight):CeilingHeight{
  return (x,z)=>{
    const roof=roofUnder?.(x,z);if(roof!=null)return roof;
    const room=floor.rooms.find(r=>pointInPolygon([x,z],r.points));
    return room?roomLevel(floor,room)+roomHeight(floor,room):null;
  };
}
export function rayLength(o:Vector3,d:Vector3,floor:Floor,blockers:Blocker[],ceiling:CeilingHeight=roomCeilingSurface(floor)):number{
  let length=5;
  if(d.y < -0.001)length=Math.min(length,Math.max(0.01,(o.y-roomLevelAt(floor,o.x,o.z)-0.02)/-d.y));
  for(const wall of blockers){
    const ex=wall.b[0]-wall.a[0],ez=wall.b[1]-wall.a[1],den=d.x*ez-d.z*ex;
    if(Math.abs(den)<1e-8)continue;
    const dx=wall.a[0]-o.x,dz=wall.a[1]-o.z,t=(dx*ez-dz*ex)/den,u=(dx*d.z-dz*d.x)/den;
    const y=o.y+t*d.y;
    if(t<=0.01||t>=length||u<0||u>1||y<0||y>wall.h)continue;
    const s=u*Math.hypot(ex,ez);
    if(wall.gaps.some(g=>s>=g.s0&&s<=g.s1&&y>=g.y0&&y<=g.y1))continue;
    length=t;
  }
  // Height fields cover pitched/free-form roofs as well as flat room ceilings.
  // Find the first underside crossing, then refine it; do not clip at an
  // unrelated roof which starts above a source already outside that room.
  let before=0,previous=ceiling(o.x,o.z);
  let below=previous!=null&&o.y<=previous+0.001;
  for(let t=0.025;t<=length+1e-9;t+=0.025){
    const top=ceiling(o.x+d.x*t,o.z+d.z*t),y=o.y+d.y*t;
    if(top!=null&&below&&y>=top){
      let lo=before,hi=t;
      for(let i=0;i<12;i++){const mid=(lo+hi)/2,h=ceiling(o.x+d.x*mid,o.z+d.z*mid);if(h!=null&&o.y+d.y*mid>=h)hi=mid;else lo=mid;}
      length=Math.max(0,hi-0.002);break;
    }
    below=top!=null&&y<=top;previous=top;before=t;
  }
  return length;
}
export function lightCone(buf:GeoBuffer,s:LightSource,floor:Floor,blockers:Blocker[],ceiling?:CeilingHeight):void{
  if(!s.direction)return;
  const origin=new Vector3(s.x,s.y,s.z),dir=new Vector3(...s.direction).normalize();
  const axis=Math.abs(dir.y)<0.95?new Vector3(0,1,0):new Vector3(1,0,0);
  const u=new Vector3().crossVectors(dir,axis).normalize(),v=new Vector3().crossVectors(dir,u).normalize();
  const angle=(s.angle??60)*Math.PI/360,near=new Color(...s.color.map(c=>c*0.09*s.level) as [number,number,number]),far=new Color(0,0,0);
  const rim=(i:number)=>{
    const a=i*Math.PI/8,d=dir.clone().multiplyScalar(Math.cos(angle)).addScaledVector(u,Math.cos(a)*Math.sin(angle)).addScaledVector(v,Math.sin(a)*Math.sin(angle)).normalize();
    return origin.clone().addScaledVector(d,rayLength(origin,d,floor,blockers,ceiling)).toArray();
  };
  for(let i=0;i<16;i++)buf.tri(origin.toArray(),rim(i),rim(i+1),near,far,far);
}
