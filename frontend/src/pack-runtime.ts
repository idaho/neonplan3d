import { openingState, windowPosition } from "./devices.ts";
import type { Furniture } from "./model.ts";
import type { PackDisplayField, PackMotion, PackPart } from "./packs.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import type { HistoryRow } from "./trail.ts";

export interface PackMoment { time: number; historical: boolean; playing: boolean; seek: number; history?: (ids:readonly string[],from:number,to:number)=>Record<string,HistoryRow[]> }
export function knownState(st: HassEntity | undefined): boolean {
  return !!st && !["unknown","unavailable",""].includes(st.state.toLowerCase());
}
export function boundEntity(f: Furniture, role?: string): string | null {
  const id=role ? Object.prototype.hasOwnProperty.call(f.bindings??{},role) ? f.bindings?.[role] :
    (role==="status" ? f.status ?? f.entity : role==="power" ? f.power : role==="door_left" ? f.door_left : role==="door_right" ? f.door_right : null) : f.status ?? f.entity;
  return id && id!=="none" ? id : null;
}
export function clockParts(time: number, zone: string | undefined): { hour: number; minute: number; text: string } | null {
  if (!Number.isFinite(time)) return null;
  try {
    const parts=new Intl.DateTimeFormat("en-GB",{timeZone:zone ?? "UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(time);
    const hour=Number(parts.find(p=>p.type==="hour")?.value), minute=Number(parts.find(p=>p.type==="minute")?.value);
    return Number.isFinite(hour+minute) ? {hour,minute,text:`${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}`} : null;
  } catch { return null; }
}
export function displayText(field: PackDisplayField, f: Furniture, hass: HomeAssistant, moment: PackMoment): string {
  if(field.kind==="digital"||field.kind==="analog")return clockParts(moment.time,hass.config?.time_zone)?.text ?? "--:--";
  const id=boundEntity(f,field.binding), st=id ? hass.states[id] : undefined;
  if(!knownState(st))return "--:--";
  const value=st!.state, unit=String(st!.attributes.unit_of_measurement ?? "");
  if(field.kind==="duration"){
    const factor=({s:1,min:60,h:3600} as Record<string,number>)[field.unit ?? unit];
    const number=value.trim() ? Number(value) : NaN;
    if(!factor||!Number.isFinite(number)||number<0)return "--:--";
    const minutes=Math.round(number*factor/60);
    return `${Math.floor(minutes/60)}:${String(minutes%60).padStart(2,"0")}`;
  }
  return `${value}${unit ? ` ${unit}` : ""}`;
}
export function statusAppearance(part: PackPart, f: Furniture, hass: HomeAssistant): {color:string;visible:boolean} {
  const id=boundEntity(f,part.status?.binding), st=id ? hass.states[id] : undefined;
  if(!part.status||!knownState(st))return {color:part.color,visible:part.visible!==false};
  return {color:f.status_colors?.[part.id!]?.[st!.state] ?? part.status.colors?.[st!.state] ?? part.color,
    visible:part.status.visibility?.[st!.state] ?? part.visible!==false};
}
export interface MotionState { open: number; tilt: number; known: boolean; running: boolean }
export function motionState(m: PackMotion, f: Furniture, hass: HomeAssistant): MotionState {
  const config=f.motion_config?.[m.id];
  const contact=m.binding ? boundEntity(f,m.binding) : ["fan","washer","dryer"].includes(m.kind) ? boundEntity(f) : null;
  const tilt=m.tilt_binding ? boundEntity(f,m.tilt_binding) : null;
  const motor=m.motor_binding ? boundEntity(f,m.motor_binding) : null;
  const tiltAngle=m.tilt_angle_binding ? boundEntity(f,m.tilt_angle_binding) : null;
  const st=contact ? hass.states[contact] : undefined;
  if(["fan","washer","dryer"].includes(m.kind)){
    const active=knownState(st)&&["on","running","active","washing","drying","heating","cooling"].includes(st!.state.toLowerCase());
    return {open:0,tilt:0,known:knownState(st),running:active};
  }
  const validContact=knownState(st)&&windowPosition(st)!==null;
  const tiltState=tilt ? hass.states[tilt] : undefined;
  // An asserted tilt contradicts an explicit closed contact; do not invent a sash position.
  const contactClosed=windowPosition(st)===(config?.contact_invert?"open":"closed");
  const conflict=contactClosed && knownState(tiltState) && ["on","open","tilted"].includes(tiltState!.state);
  const r=openingState(hass,{contact,tilt,tiltAngle,cover:null,contactInvert:config?.contact_invert,tiltMax:config?.tilt_max,tiltInvert:config?.tilt_invert},m.kind==="window"?"window":"door");
  const motorState=motor ? hass.states[motor] : undefined;
  const position=motorState?.attributes.current_position;
  if(knownState(motorState) && typeof position==="number" && Number.isFinite(position))
    return {open:Math.min(1,Math.max(0,position/100)),tilt:r.tilt,known:!conflict&&!(validContact&&contactClosed&&position>1),running:false};
  if(knownState(motorState)&&["open","opening","closed","closing"].includes(motorState!.state))
    return {open:["open","opening"].includes(motorState!.state)?1:0,tilt:r.tilt,known:!conflict,running:false};
  const angleState=tiltAngle ? hass.states[tiltAngle] : undefined;
  const assertedTilt=knownState(tiltState)&&["on","tilted"].includes(tiltState!.state)||knownState(angleState)&&Number.isFinite(Number(angleState!.state))&&r.tilt>0;
  return {open:r.open,tilt:r.tilt,known:!conflict && (!!validContact || !!assertedTilt) && (!tilt || knownState(tiltState)),running:false};
}

/** Recover the last valid historical contact state at or before this moment, never a future/live value. */
export function historicalMotion(m:PackMotion,f:Furniture,hass:HomeAssistant,moment:PackMoment):MotionState|null{
  if(!moment.historical||!moment.history)return null;
  const ids=[m.binding,m.tilt_binding,m.motor_binding,m.tilt_angle_binding].filter((role):role is string=>!!role).map(role=>boundEntity(f,role)).filter((id):id is string=>!!id);
  const rows=moment.history(ids,moment.time-7*86400000,moment.time);
  const events=ids.flatMap(id=>(rows[id]??[]).filter(r=>r.lu*1000<=moment.time).map(r=>({id,row:r}))).sort((a,b)=>a.row.lu-b.row.lu);
  const states:Record<string,HassEntity>={};
  let valid:MotionState|null=null;
  for(const {id,row} of events){
    states[id]={entity_id:id,state:row.s,attributes:{}};
    const result=motionState(m,f,{...hass,states});
    if(result.known)valid=result;
  }
  return valid;
}

/** Keeps uncertainty local to one placement and one time domain. Backward seeks discard future state. */
export class MotionMemory {
  private states=new Map<string,MotionState>();
  private last: PackMoment | null=null;
  begin(moment: PackMoment): void {
    if(this.last && (this.last.historical!==moment.historical || moment.historical && (moment.time<this.last.time || moment.seek!==this.last.seek))) this.states.clear();
    this.last={...moment};
  }
  resolve(key:string,next:MotionState):MotionState {
    if(next.known){this.states.set(key,next);return next;}
    const old=this.states.get(key);
    return {...(old ?? {open:0,tilt:0,running:false,known:false}),known:false,running:false};
  }
}
