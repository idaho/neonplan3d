import { CanvasTexture, Color, DoubleSide, Float32BufferAttribute, Group, Material, Mesh, MeshBasicMaterial, Plane, PlaneGeometry, Vector3 } from "three";
import type { Floor, Furniture } from "../model.ts";
import { mountBase, renderPackItem, type PackDisplayField, type PackMotion, type PackPart } from "../packs.ts";
import { clockParts, displayText, historicalMotion, motionState, MotionMemory, packLightGlow, statusAppearance, type MotionState, type PackMoment } from "../pack-runtime.ts";
import type { HomeAssistant } from "../types.ts";
import { packPartGeometry } from "./furniture.ts";
import { OPENING_TAU, OPEN_ANGLE, DOOR_ANGLE, TILT_ANGLE } from "./opening-motion.ts";

interface PartView { part: PackPart; mesh: Mesh; key: string; baseColors:Float32Array }
interface MotionView { definition: PackMotion; group: Group; state: MotionState; shown: number; tilt: number }
interface ItemView { f: Furniture; group: Group; parts: PartView[]; motions: MotionView[]; displays: {field:PackDisplayField;mesh:Mesh;texture:CanvasTexture;key:string}[]; unclear: Mesh; unclearTexture:CanvasTexture }
const palette:Record<string,number>={body:0x172238,fabric:0x1a2644,cushion:0x243661,wood:0x19233c,white:0x1d2946,metal:0x2a3a60,dark:0x0b111f,glass:0x1c3a52,plant:0x12302e,pot:0x1d2640,accent:0x2b8fb3};
const color=(v:string)=>v.startsWith("#")?parseInt(v.slice(1),16):palette[v]??palette.body;

function textSurface(width:number,height:number): {mesh:Mesh;texture:CanvasTexture} {
  const canvas=document.createElement("canvas");canvas.width=512;canvas.height=256;
  const texture=new CanvasTexture(canvas);
  const mesh=new Mesh(new PlaneGeometry(width,height),new MeshBasicMaterial({map:texture,transparent:true,side:DoubleSide,depthWrite:false}));
  mesh.renderOrder=7;
  return {mesh,texture};
}

export class CustomPackLayer {
  readonly group=new Group();
  private items:ItemView[]=[];
  private memory=new MotionMemory();
  private hass:HomeAssistant|null=null;
  private moment:PackMoment={time:NaN,historical:false,playing:true,seek:0};
  private global=true;
  private timer:ReturnType<typeof setTimeout>|undefined;
  private initial=true;
  private seconds=0;
  private plane=new Plane(new Vector3(0,-1,0),0);
  private clipped=false;
  private material:Material;
  private invalidate:()=>void;
  constructor(floor:Floor, material:Material, invalidate:()=>void, memory?:MotionMemory) {
    this.material=material.clone();this.material.onBeforeCompile=material.onBeforeCompile;this.material.customProgramCacheKey=material.customProgramCacheKey;this.invalidate=invalidate;
    if(memory)this.memory=memory;
    for(const f of floor.furniture){
      const item=renderPackItem(f);if(!item)continue;
      const ids=new Set([...(item.motions??[]),...(item.spots??[])].flatMap(m=>m.parts));
      const parts=item.parts.filter(p=>p.status||p.id&&ids.has(p.id));
      if(!parts.length&&!item.displays?.length)continue;
      const group=new Group();group.position.set(f.x,mountBase(floor,f)+f.h/2,f.z);
      group.rotation.set((f.rotation_x??0)*Math.PI/180,-f.rotation*Math.PI/180,(f.rotation_z??0)*Math.PI/180,"YZX");
      group.scale.x=f.mirror?-1:1;this.group.add(group);
      const views:PartView[]=parts.map(part=>{
        const geo=packPartGeometry({...item,parts:[part]},f);geo.translate(0,-f.h/2,0);
        const mesh=new Mesh(geo,part.status?new MeshBasicMaterial({vertexColors:true,side:DoubleSide}):this.material);group.add(mesh);
        mesh.userData.furnitureId=f.id;
        return {part,mesh,key:"",baseColors:Float32Array.from(geo.getAttribute("color").array)};
      });
      const motions:MotionView[]=(item.motions??[]).map(definition=>{
        const g=new Group(),[x,y,z]=definition.pivot;g.position.set(x*f.w,(y-0.5)*f.h,z*f.d);group.add(g);
        for(const p of views.filter(v=>v.part.id&&definition.parts.includes(v.part.id))){p.mesh.position.copy(g.position).negate();g.add(p.mesh);}
        return {definition,group:g,state:{open:0,tilt:0,known:false,running:false},shown:0,tilt:0};
      });
      for(const spot of item.spots??[]){
        const g=new Group(),pivot=spot.pivot??spot.position;g.position.set(pivot[0]*f.w,(pivot[1]-0.5)*f.h,pivot[2]*f.d);
        const cfg=f.spot_config?.[spot.id];g.rotation.set((cfg?.rotation_x??0)*Math.PI/180,-(cfg?.rotation_y??0)*Math.PI/180,(cfg?.rotation_z??0)*Math.PI/180,"YZX");group.add(g);
        for(const p of views.filter(v=>v.part.id&&spot.parts.includes(v.part.id))){p.mesh.position.copy(g.position).negate();g.add(p.mesh);}
      }
      const displays=(item.displays??[]).map(field=>{
        const s=textSurface(field.size[0]*f.w,field.size[1]*f.h),[x,y,z]=field.position;
        s.mesh.userData.furnitureId=f.id;
        if(field.kind==="analog")(s.texture.image as HTMLCanvasElement).height=512;
        s.mesh.position.set(x*f.w,(y-0.5)*f.h,z*f.d);
        s.mesh.rotation.set(...(field.rotation??[0,0,0]).map(v=>v*Math.PI/180) as [number,number,number],"YZX");
        const parent=motions.find(m=>m.definition.id===field.parent)?.group;
        if(parent){s.mesh.position.sub(parent.position);parent.add(s.mesh);}else group.add(s.mesh);
        return {...s,field,key:""};
      });
      const unclear=textSurface(Math.max(0.15,f.w*0.75),0.09);
      unclear.mesh.position.set(0,f.h/2+0.12,0);unclear.mesh.visible=false;group.add(unclear.mesh);
      const ctx=(unclear.texture.image as HTMLCanvasElement).getContext("2d")!;
      ctx.fillStyle="#162137";ctx.fillRect(0,0,512,256);ctx.fillStyle="#ffcf66";ctx.font="bold 70px sans-serif";ctx.textAlign="center";ctx.fillText("Status unklar",256,155);unclear.texture.needsUpdate=true;
      this.items.push({f,group,parts:views,motions,displays,unclear:unclear.mesh,unclearTexture:unclear.texture});
    }
  }
  meshes():Mesh[]{return this.items.flatMap(i=>[...i.parts.map(p=>p.mesh),...i.displays.map(d=>d.mesh)]).filter(m=>m.visible);}
  clip(cut:number|null,worldY:number,opacity:number):void{
    const enabled=cut!==null;this.plane.constant=worldY+(cut??0);
    this.material.opacity=opacity;
    for(const mesh of this.items.flatMap(i=>[...i.parts.map(p=>p.mesh),...i.displays.map(d=>d.mesh)])){
      const mat=mesh.material as Material;mat.opacity=opacity;mat.transparent=true;
      if(enabled!==this.clipped){mat.clippingPlanes=enabled?[this.plane]:null;mat.needsUpdate=true;}
    }
    this.clipped=enabled;
  }
  update(hass:HomeAssistant,moment:PackMoment,global:boolean):void{
    const instant=this.initial||moment.historical&&(moment.seek!==this.moment.seek||!this.moment.historical);
    this.initial=false;
    this.hass=hass;this.moment={...moment};this.global=global;this.memory.begin(moment);
    for(const item of this.items){
      let unclear=false;
      for(const p of item.parts){
        const a=statusAppearance(p.part,item.f,hass),key=JSON.stringify(a);p.mesh.visible=a.visible;
        if(p.key!==key || p.part.glow || item.motions.some(m=>m.definition.parts.includes(p.part.id??"")&&m.state.running)){
          p.key=key;const c=new Color(color(a.color)),arr=p.mesh.geometry.getAttribute("color") as Float32BufferAttribute;
          if(a.color===p.part.color)(arr.array as Float32Array).set(p.baseColors);
          else for(let i=0;i<arr.count;i++)arr.setXYZ(i,c.r,c.g,c.b);
          arr.needsUpdate=true;
        }
      }
      for(const m of item.motions){
        const key=item.f.id+":"+m.definition.id, state=motionState(m.definition,item.f,hass);
        if(!state.known&&moment.historical&&instant){const previous=historicalMotion(m.definition,item.f,hass,moment);if(previous)this.memory.resolve(key,previous);}
        m.state=this.memory.resolve(key,state);
        unclear ||= !m.state.known && !["fan","washer","dryer"].includes(m.definition.kind);
        if(instant||!global||item.f.animations===false){m.shown=m.state.open;m.tilt=m.state.tilt;this.pose(m,item.f);}
      }
      for(const spot of renderPackItem(item.f)?.spots??[]){
        const id=item.f.spot_config?.[spot.id]?.entity ?? (spot.binding?item.f.bindings?.[spot.binding]:null) ?? item.f.entity;
        const glow=packLightGlow(item.f,hass,id);
        if(!glow)continue;
        for(const p of item.parts.filter(p=>p.part.glow&&spot.parts.includes(p.part.id??""))){
          const a=p.mesh.geometry.getAttribute("color") as Float32BufferAttribute,c=new Color(...glow.color.map(v=>Math.min(1,v*(0.55+0.45*glow.level))) as [number,number,number]);
          for(let i=0;i<a.count;i++)a.setXYZ(i,c.r,c.g,c.b);a.needsUpdate=true;
        }
      }
      item.unclear.visible=unclear;
      this.drawDisplays(item);
    }
    this.scheduleClock();this.invalidate();
  }
  private drawDisplays(item:ItemView):void{
    if(!this.hass)return;
    for(const d of item.displays){
      const text=displayText(d.field,item.f,this.hass,this.moment);
      if(text===d.key)continue;d.key=text;
      const canvas=d.texture.image as HTMLCanvasElement,ctx=canvas.getContext("2d")!;
      ctx.clearRect(0,0,512,canvas.height);
      if(d.field.kind!=="analog"||d.field.background){ctx.fillStyle=d.field.background??"#101827";ctx.fillRect(0,0,512,canvas.height);}
      ctx.fillStyle=d.field.color??"#ffffff";
      if(d.field.kind==="analog"){
        const time=clockParts(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10};
        const hand=(angle:number,length:number,width:number)=>{ctx.save();ctx.translate(256,256);ctx.rotate(angle);ctx.strokeStyle=d.field.color??"#ffffff";ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(0,10);ctx.lineTo(0,-length);ctx.stroke();ctx.restore();};
        hand((time.hour%12+time.minute/60)*Math.PI/6,144,9);hand(time.minute*Math.PI/30,204,5);
      }else{
        ctx.textAlign="center";ctx.textBaseline="middle";ctx.font="bold 100px sans-serif";
        const width=ctx.measureText(text).width;if(width>480)ctx.font=`bold ${Math.max(20,Math.floor(100*480/width))}px sans-serif`;
        ctx.fillText(text,256,128);
      }
      d.texture.needsUpdate=true;
    }
  }
  private scheduleClock():void{
    if(this.timer){clearTimeout(this.timer);this.timer=undefined;}
    if(this.moment.historical||!this.items.some(i=>i.displays.some(d=>["analog","digital"].includes(d.field.kind))))return;
    this.timer=setTimeout(()=>{this.timer=undefined;this.moment.time=Date.now();for(const i of this.items)this.drawDisplays(i);this.invalidate();this.scheduleClock();},60000-Date.now()%60000+10);
  }
  private pose(m:MotionView,f:Furniture):void{
    const kind=m.definition.kind;
    const c=f.motion_config?.[m.definition.id],direction=c?.direction??m.definition.direction??1;
    if(kind==="slide"){const axis=m.definition.axis??"x",index=axis==="x"?0:axis==="y"?1:2,size=axis==="x"?f.w:axis==="y"?f.h:f.d;
      m.group.position[axis]=m.definition.pivot[index]*size-(axis==="y"?f.h/2:0)+(c?.travel_m??(m.definition.travel??1)*size)*m.shown*direction;return;}
    const angle=c?.angle??m.definition.angle;
    m.group.rotation[m.definition.axis??"y"]=-(angle==null?(kind==="window"?OPEN_ANGLE:DOOR_ANGLE):angle*Math.PI/180)*m.shown*direction;
    if(kind==="window"){const tiltAngle=c?.tilt_angle??m.definition.tilt_angle;m.group.rotation.x=-(tiltAngle==null?TILT_ANGLE:tiltAngle*Math.PI/180)*m.tilt;}
  }
  step(dt:number):boolean{
    this.seconds+=dt/1000;
    let moving=false;
    for(const item of this.items)for(const m of item.motions){
      const enabled=this.global&&item.f.animations!==false;
      if(["fan","washer","dryer"].includes(m.definition.kind)){
        if(!enabled||!m.state.running||this.moment.historical&&!this.moment.playing)continue;
        if(m.definition.kind==="fan")m.group.rotation[m.definition.axis??"z"]+=dt*0.008;
        else {
          // Same cyan running indicator as the original appliances, with a subtle breathing effect.
          const level=0.75+0.08*Math.sin(this.seconds);
          for(const p of item.parts.filter(p=>p.part.id&&m.definition.parts.includes(p.part.id))){
            const appearance=this.hass?statusAppearance(p.part,item.f,this.hass):null;
            const c=appearance&&p.part.status?new Color(color(appearance.color)).multiplyScalar(level):new Color(0.3*level,0.85*level,level);
            const a=p.mesh.geometry.getAttribute("color") as Float32BufferAttribute;
            for(let i=0;i<a.count;i++)a.setXYZ(i,c.r,c.g,c.b);a.needsUpdate=true;
          }
        }
        moving=true;continue;
      }
      if(!enabled){this.pose(m,item.f);continue;}
      const k=1-Math.exp(-dt/OPENING_TAU),delta=m.state.open-m.shown,tilt=m.state.tilt-m.tilt;
      if(Math.abs(delta)<0.003&&Math.abs(tilt)<0.003){m.shown=m.state.open;m.tilt=m.state.tilt;}
      else{m.shown+=delta*k;m.tilt+=tilt*k;moving=true;}
      this.pose(m,item.f);
    }
    return moving;
  }
  dispose():void{
    if(this.timer)clearTimeout(this.timer);
    for(const i of this.items){for(const p of i.parts){p.mesh.geometry.dispose();if(p.mesh.material!==this.material)(p.mesh.material as Material).dispose();}for(const d of i.displays){d.mesh.geometry.dispose();(d.mesh.material as Material).dispose();d.texture.dispose();}i.unclear.geometry.dispose();(i.unclear.material as Material).dispose();i.unclearTexture.dispose();}
    this.group.removeFromParent();this.items=[];
    this.material.dispose();
  }
}
