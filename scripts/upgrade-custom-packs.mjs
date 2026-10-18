import { readFileSync, readdirSync, writeFileSync, copyFileSync, mkdirSync, mkdtempSync, existsSync, unlinkSync, rmdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join, basename } from "node:path";
import { createPrivateKey, createPublicKey, createHash, sign } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { modernize } from './pack-round-shapes.mjs';
import { addPhotoInventory } from './photo-kitchen-inventory.mjs';
import { addHouseNumbers } from './house-numbers.mjs';
import { vehicleProfiles } from './pack-vehicle-profiles.mjs';

const partId=i=>`p${String(i).padStart(3,"0")}`;
const geometry=p=>Object.fromEntries(Object.entries(p).filter(([k])=>!["color","top","edges","glow","screen","id","status","visible"].includes(k)));
const canonical=value=>JSON.stringify(sort(value));
function sort(v){return Array.isArray(v)?v.map(sort):v&&typeof v==="object"?Object.fromEntries(Object.keys(v).sort().map(k=>[k,sort(v[k])])):v;}
export function enrich(item,baseId=item.id){
  item.parts.forEach((p,i)=>{p.id??=partId(i);});
  const bind=(id,label,domains=["sensor","binary_sensor","input_boolean","input_text"])=>{
    item.bindings??=[];if(!item.bindings.some(b=>b.id===id))item.bindings.push({id,label,domains});
  };
  const ids=indices=>indices.map(i=>item.parts[i]?.id).filter(Boolean);
  const door=(id,indices,pivot,kind="door",axis="y",direction=1,travel)=>{
    bind(id,id==="door_left"?"Linke Tür / Gefrierteil":"Tür / Kühlteil",["binary_sensor","sensor","cover"]);
    item.motions=(item.motions??[]).filter(m=>m.id!==id);item.motions.push({id,parts:ids(indices),kind,pivot,axis,binding:id,direction,...(travel?{travel}:{})});
  };
  const display=(part,index=0,parent)=>{
    bind("value","Displaywert",["sensor","input_number","number"]);
    item.displays=(item.displays??[]).filter(d=>d.id!==`value_${index}`);item.displays.push({id:`value_${index}`,kind:"sensor",binding:"value",position:[part.x,part.y+part.h/2,Math.min(1,part.z+part.d/2+0.005)],size:[part.w,part.h],...(parent?{parent}:{})});
  };
  if(/miele_|kitchen_dishwasher|samsung_rs80|mini_fridge|siemens_kg|liebherr_fna|weishaupt_wtc|bosch_cl3200/.test(baseId)){
    bind("status","Betriebsstatus");bind("power","Leistung",["sensor"]);item.electric=true;
    for(const p of item.parts.filter(p=>p.screen && !(/^bosch_cl3200iu_w(26|35)e$/.test(baseId)&&p.id==="p018"))){
      p.status={binding:"status",colors:{running:"#37e0ff",on:"#37e0ff",active:"#37e0ff",heating:"#ff9d32",cooling:"#37e0ff",error:"#ff3b4f",finished:"#55dba7",standby:"#29364a"}};
    }
  }
  if(/^bosch_cl3200iu_w(26|35)e$/.test(baseId)){
    bind("climate","Klimagerät",["climate"]);
    // The authored air outlet is the native mode-coloured glow surface; do not light the body.
    const outlet=item.parts.find(p=>p.id==="p018");if(outlet)outlet.screen=true;
  }
  if(baseId.startsWith("miele_")){
    const screen=item.parts.find(p=>p.screen);
    if(screen){item.motions=[{id:"run",kind:baseId.includes("twc")?"dryer":"washer",parts:[screen.id],binding:"status",pivot:[0,0.5,0],axis:"z"}];
      bind("remaining","Restlaufzeit",["sensor","input_number","number"]);
      item.displays=[{id:"remaining",kind:"duration",binding:"remaining",position:[screen.x,screen.y+screen.h/2,screen.z+screen.d/2+0.005],size:[screen.w,screen.h]}];
    }
  }
  if(baseId==='kitchen_dishwasher_panel_60'){
    door('door',Array.from({length:10},(_,i)=>i+3),[0,0.0993377,0.4580645],'door','x',-1);
    item.bindings.find(b=>b.id==='door').label='Spülmaschinentür';item.motions.find(m=>m.id==='door').angle=90;
    const colored=item.parts[0].color.startsWith('#'),metal=colored?'#30383a':'dark';
    Object.assign(item.parts[0],{z:-0.48,d:0.03,color:metal});
    const shell=[{id:'dishwasher_side_left',x:-0.475,y:0.0883002,z:-0.0322581,w:0.05,h:0.8609272,d:0.88},
      {id:'dishwasher_side_right',x:0.475,y:0.0883002,z:-0.0322581,w:0.05,h:0.8609272,d:0.88},
      {id:'dishwasher_inner_bottom',x:0,y:0.0883002,z:-0.0322581,w:0.9,h:0.025,d:0.88}];
    for(const p of shell){const part={shape:'box',...p,color:p.id.startsWith('dishwasher_side')?item.parts[3].color:metal,edges:false},i=item.parts.findIndex(old=>old.id===p.id);if(i<0)item.parts.push(part);else item.parts[i]=part;}
    const lining=[{id:'dishwasher_door_lining',shape:'box',x:0,y:0.103,z:0.437,w:0.93,h:0.82,d:0.005,color:colored?'#a9b2b7':'metal'},
      {id:'dishwasher_dispenser',shape:'rounded_box',x:0.22,y:0.42,z:0.427,w:0.22,h:0.12,d:0.018,radius:0.06,color:colored?'#6d7477':'dark'}];
    for(const part of lining){const i=item.parts.findIndex(old=>old.id===part.id);if(i<0)item.parts.push(part);else item.parts[i]=part;item.motions.find(m=>m.id==='door').parts.push(part.id);}
    for(const d of item.displays??[])d.parent='door';
  }
  // Model fronts face +z; pose() applies -angle*direction around the hinge.
  if(baseId==="samsung_rs80f65kdfef"){door("door_left",[1,4,5,6,7],[-0.496,0.5,0.457],"door","y",1);door("door_right",[2,8],[0.496,0.5,0.457],"door","y",-1);}
  if(baseId==="siemens_kg36ealca"){door("door_left",[3,6,8],[-0.486,0.2,0.472],"door","y",1);door("door_right",[4,7,9,10,11],[-0.486,0.6,0.472],"door","y",1);}
  if(baseId==="mini_fridge_60")door("door_right",[3,4,5,6],[-0.484,0.5,0.46],"door","y",1);
  if(baseId==="liebherr_fna6635_20")door("door_right",[3,4,5,6],[0.49,0.5,0.476],"door","y",-1);
  if(/samsung_rs80|mini_fridge|siemens_kg|liebherr_fna/.test(baseId)){
    const screen=item.parts.find(p=>p.screen);if(screen)display(screen,0,baseId.startsWith("samsung")?"door_left":"door_right");
  }
  if(baseId==="glass_sliding_door_90x210")door("door_left",[0,1,2,3,4,5,12,13,14,15,18,19,20,21,22,23],[0,0.5,0],"slide","x",1,0.5);
  if(/^shower_door_60_/.test(baseId))door("door_right",[0,1,2,3,5,6,7,8,9,10,11,12,13],[baseId.endsWith("left")?-0.49:0.49,0.5,-0.23],"door","y",baseId.endsWith("left")?-1:1);
  if(baseId==="nymane_4_weiss"){
    item.spots=[0,1,2,3].map(i=>{const start=1+i*3,p=item.parts[start+2];return {id:`head_${i+1}`,parts:ids([start,start+1,start+2]),pivot:[p.x,0.7,p.z],position:[p.x,p.y,p.z],direction:[0,-1,0],angle:60};});
  }
  if(baseId==="bill_5_led"){
    item.spots=Array.from({length:5},(_,i)=>{const start=5+i*11,p=item.parts[start],emitter=item.parts[12+i*11];return {
      id:`head_${i+1}`,parts:ids(Array.from({length:8},(_,j)=>start+j)),pivot:[p.x,p.y+p.h,p.z],position:[emitter.x,emitter.y,emitter.z],direction:[0,-1,0],angle:60,
    };});
  }
  if(baseId==="ceiling_spots_wood_two_photo"){
    item.spots=[{id:"left",parts:ids(Array.from({length:24},(_,i)=>11+i)),pivot:[-0.3166667,0.6875,-0.16875],position:[-0.38333,0.43,0.08],direction:[-0.5,-Math.SQRT1_2,0.5],angle:60},
      {id:"right",parts:ids(Array.from({length:24},(_,i)=>35+i)),pivot:[0.3166667,0.6875,-0.16875],position:[0.38333,0.43,0.08],direction:[0.5,-Math.SQRT1_2,0.5],angle:60}];
  }
  if(baseId==="clock_orange_white"){
    for(const i of [57,58])item.parts[i].visible=false;
    item.displays=[{id:"clock",kind:"analog",position:[0,0.5,0.5],size:[0.9,0.9],color:"#ffffff"}];
  }
  if(/echo_dot[34]_clock/.test(baseId)){
    const start=baseId.startsWith("echo_dot3")?15:52;
    const face=item.parts[start];
    for(let i=start+1;i<item.parts.length;i++)item.parts[i].visible=false;
    if(face)item.displays=[{id:"clock",kind:"digital",position:[0,face.y+face.h/2,0.501],size:[0.6,Math.max(0.1,face.h)],color:"#ffffff"}];
  }
  return item;
}

export function upgrade(source,map){
  const packs=structuredClone(source);map=addPhotoInventory(packs,structuredClone(map));
  addHouseNumbers(packs,map);
  const byType=new Map(packs.flatMap(p=>p.items.map(i=>[`pack:${p.id}:${i.id}`,i])));
  let geometryChanges=0;
  for(const [base,colors] of Object.entries(map.neon_to_colors)){
    const neo=byType.get(base),variants=colors.map(type=>byType.get(type));
    if(!neo||variants.some(v=>!v))throw new Error(`Missing variant for ${base}`);
    const shape=canonical(variants[0].parts.map(geometry));
    if(variants.some(v=>canonical(v.parts.map(geometry))!==shape))throw new Error(`Conflicting product geometries: ${base}`);
    if(canonical(neo.parts.map(geometry))!==shape){
      const old=neo.parts;
      neo.parts=variants[0].parts.map((p,i)=>({...p,color:old[i]?.color??"body",top:old[i]?.top,edges:old[i]?.edges??false}));
      geometryChanges++;
    }
    variants.forEach((variant,i)=>{variant.product={base,variant:variant.id,label:variant.name.de??variant.name.en??variant.id,default:i===0};});
  }
  for(const p of packs){
    const before=canonical(source.find(old=>old.id===p.id));p.version=2;
    for(const item of p.items){const type=`pack:${p.id}:${item.id}`,base=map.color_to_neon[type]??type;enrich(item,base.split(":").at(-1));modernize(item,base.split(':').at(-1));vehicleProfiles(item,base.split(':').at(-1));}
    if(canonical(p)!==before)p.release=(p.release??1)+1;
  }
  return {packs,geometryChanges,mapping:map};
}

export function run(args){
  const [dirArg,keyArg,python,moduleArg]=args;
  if(!dirArg||!keyArg||!python||!moduleArg)throw new Error("Usage: upgrade-custom-packs.mjs <pack-dir> <key-file> <python> <packs.py>");
  const dir=resolve(dirArg),mapping=JSON.parse(readFileSync(join(dir,"VARIANTS.json"),"utf8"));
  const files=readdirSync(dir).filter(f=>/^v2\..+(?<!canonical)\.json$/.test(f)&&!f.endsWith(".canonical.json"));
  const source=files.map(f=>JSON.parse(readFileSync(join(dir,f),"utf8")));
  const hash=p=>createHash("sha256").update(canonical(p)).digest("hex");
  const manifestPath=join(dir,"CUSTOM-FEATURES.json");
  if(existsSync(manifestPath)){
    const previous=JSON.parse(readFileSync(manifestPath,"utf8"));
    if(!args.includes('--force') && previous.contract===17 && source.every((p,i)=>previous.payloadHashes?.[files[i]]===hash(p))){console.log(JSON.stringify({upToDate:true,packs:source.length}));return;}
  }
  const {packs,geometryChanges,mapping:updatedMapping}=upgrade(source,mapping);
  const modulePath=resolve(moduleArg);
  const checkDir=mkdtempSync(join(tmpdir(),"neon-pack-validate-")),checkFile=join(checkDir,"payloads.json"),canonicalFile=join(checkDir,"canonical.json");
  writeFileSync(checkFile,JSON.stringify(packs));
  let signedBytes;
  try{
    execFileSync(python,["-c","import importlib.util,json,sys; s=importlib.util.spec_from_file_location('pack_schema',sys.argv[1]); m=importlib.util.module_from_spec(s); s.loader.exec_module(m); ps=json.load(open(sys.argv[2])); [m.validate_payload(p) for p in ps]; json.dump([m.canonical(p).decode() for p in ps],open(sys.argv[3],'w'),ensure_ascii=False)",modulePath,checkFile,canonicalFile],{stdio:["ignore","pipe","pipe"],timeout:30000});
    signedBytes=JSON.parse(readFileSync(canonicalFile,"utf8"));
  } catch(error){throw new Error(String(error.stderr??error.message));}
  finally{unlinkSync(checkFile);if(existsSync(canonicalFile))unlinkSync(canonicalFile);rmdirSync(checkDir);}
  const privateKey=createPrivateKey(readFileSync(resolve(keyArg)));
  const pub=createPublicKey(privateKey).export({format:"der",type:"spki"}).subarray(-32),key=createHash("sha256").update(pub).digest("hex").slice(0,12);
  const backupParent=join(dir,"backups");mkdirSync(backupParent,{recursive:true});
  const backup=mkdtempSync(join(backupParent,"custom-features-"));
  copyFileSync(join(dir,'VARIANTS.json'),join(backup,'VARIANTS.json'));
  for(let i=0;i<packs.length;i++){
    const p=packs[i],name=files[i],exportDir=p.id.endsWith("_farben")?"color":"neon",packName=name.replace(/\.json$/,".fp3dpack");
    for(const relative of [name,name.replace(/\.json$/,".canonical.json"),join(exportDir,packName)]){
      const old=join(dir,relative);try{mkdirSync(join(backup,exportDir),{recursive:true});copyFileSync(old,join(backup,relative));}catch(e){if(e.code!=="ENOENT")throw e;}
    }
    // Use the backend's canonical bytes, including Python's exponent spelling.
    const bytes=signedBytes[i],signed={payload:p,signature:{key,sig:sign(null,Buffer.from(bytes),privateKey).toString("base64")}};
    writeFileSync(join(dir,name),JSON.stringify(p,null,2)+"\n");
    writeFileSync(join(dir,name.replace(/\.json$/,".canonical.json")),bytes+"\n");
    writeFileSync(join(dir,exportDir,packName),JSON.stringify(signed)+"\n");
  }
  writeFileSync(join(dir,'VARIANTS.json'),JSON.stringify({...updatedMapping,updated:'2026-10-18'},null,2)+'\n');
  writeFileSync(manifestPath,JSON.stringify({contract:17,version:2,packs:packs.length,geometryChanges,backup:basename(backup),publicKey:key,payloadHashes:Object.fromEntries(packs.map((p,i)=>[files[i],hash(p)]))},null,2)+"\n");
  console.log(JSON.stringify({packs:packs.length,geometryChanges,backup}));
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))run(process.argv.slice(2));
