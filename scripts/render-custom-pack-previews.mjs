// Regenerate the complete regular gallery, validate it, then swap with a recoverable backup.
// Run from repository root: node <feature-worktree>/scripts/render-custom-pack-previews.mjs private/product-packs-v2
import { existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function previewPlan(directory){
  const files=readdirSync(directory).filter(f=>/^v2\..+\.json$/.test(f)&&!f.endsWith('.canonical.json')).sort();
  const packs=files.map(file=>{const bytes=readFileSync(join(directory,file)),p=JSON.parse(bytes);
    if(!/^[a-z0-9][a-z0-9_.-]*$/.test(p.id)||!Array.isArray(p.items)||!p.items.length)throw new Error('Invalid source '+file);
    const ids=p.items.map(i=>i.id);if(new Set(ids).size!==ids.length||ids.some(id=>!/^[a-z0-9][a-z0-9_.-]*$/.test(id)))throw new Error('Invalid item IDs '+file);
    return {file,id:p.id,name:p.name,items:p.items.map(i=>({id:i.id,name:i.name,size:i.size})),pages:Math.ceil(p.items.length/12),sha256:createHash('sha256').update(bytes).digest('hex')};
  });
  if(!packs.length||new Set(packs.map(p=>p.id)).size!==packs.length)throw new Error('Missing or duplicate packs');
  return packs;
}
export function validatePreviews(directory,packs){
  let items=0,pages=0;
  const png=(path,w,h)=>{const b=readFileSync(path);if(b.length<50||b.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||b.readUInt32BE(16)!==w||b.readUInt32BE(20)!==h)throw new Error('Invalid PNG '+path);};
  for(const p of packs){
    const dir=join(directory,p.id),names=readdirSync(join(dir,'items')).sort(),expected=p.items.map(i=>i.id+'.png').sort();
    if(JSON.stringify(names)!==JSON.stringify(expected))throw new Error('Missing/stale item pictures '+p.id);
    for(const i of p.items){png(join(dir,'items',i.id+'.png'),960,960);items++;}
    const overviews=readdirSync(dir).filter(f=>/^overview.*\.png$/.test(f)).sort();
    const wanted=Array.from({length:p.pages},(_,i)=>i?'overview-'+(i+1)+'.png':'overview.png').sort();
    if(JSON.stringify(overviews)!==JSON.stringify(wanted))throw new Error('Missing/stale overview sheets '+p.id);
    for(const f of wanted){png(join(dir,f),3200,2400);pages++;}
  }
  return {packs:packs.length,items,pages};
}
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export async function run(directory){
  const dir=resolve(directory),packs=previewPlan(dir),featureRoot=resolve(dirname(fileURLToPath(import.meta.url)),'..');
  const live=join(dir,'previews');
  if(existsSync(live)&&(!lstatSync(live).isDirectory()||lstatSync(live).isSymbolicLink()))throw new Error('Preview target must be a real directory');
  const staging=mkdtempSync(join(dir,'.previews-build-'));
  console.log(`Rendering ${packs.length} packs / ${packs.reduce((n,p)=>n+p.items.length,0)} items into ${staging}`);
  const env={...process.env};
  if(!env.CHROME_PATH&&existsSync('/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'))env.CHROME_PATH='/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
  await new Promise((ok,reject)=>{const child=spawn(process.execPath,[join(featureRoot,'frontend/pack-images.mjs'),...packs.map(p=>join(dir,p.file)),'--out',staging],{cwd:join(featureRoot,'frontend'),env,stdio:'inherit'});
    child.once('error',reject);child.once('exit',code=>code===0?ok():reject(new Error(`Preview renderer failed (${code}); old gallery preserved, staging: ${staging}`)));
  });
  const counts=validatePreviews(staging,packs);
  // Do not publish pictures if model sources changed while they were rendering.
  if(JSON.stringify(packs)!==JSON.stringify(previewPlan(dir)))throw new Error('Sources changed during rendering; old gallery preserved');
  const generatedAt=new Date().toISOString();
  writeFileSync(join(staging,'manifest.json'),JSON.stringify({generatedAt,renderer:'native-source-catalogue',...counts,sources:packs.map(({file,id,sha256,pages,items})=>({file,id,sha256,pages,items:items.length}))},null,2)+'\n');
  writeFileSync(join(staging,'index.html'),`<!doctype html><html lang="de"><meta charset="utf-8"><title>Aktuelle Möbelpack-Vorschauen</title><style>body{background:#0b1220;color:#edf3ff;font:16px system-ui;margin:30px}a{color:#60eaff}img{max-width:580px;width:100%;display:block}section{margin-bottom:30px}li{margin:5px 0}</style><h1>Möbelpack-Vorschauen</h1><p>${counts.packs} Packs · ${counts.items} Einzelbilder · ${counts.pages} Übersichten · ${escape(generatedAt)}</p>${packs.map(p=>`<section><h2>${escape(p.name)}</h2><a href="${p.id}/overview.png"><img loading="lazy" src="${p.id}/overview.png"></a><p>${Array.from({length:p.pages},(_,i)=>`<a href="${p.id}/${i?'overview-'+(i+1)+'.png':'overview.png'}">Übersicht ${i+1}</a>`).join(' · ')}</p><details><summary>${p.items.length} Einzelbilder</summary><ul>${p.items.map(i=>`<li><a href="${p.id}/items/${i.id}.png">${escape(i.name.de??i.name.en??i.id)}</a> · ${i.size.map(v=>Math.round(v*1000)/10).join(' × ')} cm</li>`).join('')}</ul></details></section>`).join('')}</html>`);
  const backups=join(dir,'backups');mkdirSync(backups,{recursive:true});
  const backup=join(backups,'previews-'+generatedAt.replace(/[:.]/g,'-'));
  if(existsSync(live))renameSync(live,backup);
  try{renameSync(staging,live);}catch(error){if(existsSync(backup)&&!existsSync(live))renameSync(backup,live);throw error;}
  console.log(JSON.stringify({...counts,gallery:live,backup:existsSync(backup)?backup:null,generatedAt}));
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  if(!process.argv[2])throw new Error('Usage: render-custom-pack-previews.mjs <pack-directory>');
  await run(process.argv[2]);
}
