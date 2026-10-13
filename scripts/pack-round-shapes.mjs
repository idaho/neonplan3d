// Native geometry upgrades; preserve item IDs and all indexed display references.
const replace=(p,g)=>{for(const k of ['tx','tz','tw','td','rot','axis','points'])delete p[k];Object.assign(p,g,{edges:false,detail:'high'});};
export function winderPoints(start,end,inner,outer,cx,cz){
  const angles=[start];for(const c of [Math.PI/4,3*Math.PI/4])if(c>start+1e-6&&c<end-1e-6)angles.push(c);angles.push(end);
  const at=(a,r)=>{const f=r/Math.max(Math.abs(Math.cos(a)),Math.abs(Math.sin(a)));return [cx+f*Math.cos(a),cz-f*Math.sin(a)];};
  return [...angles.map(a=>at(a,outer)),...angles.toReversed().map(a=>at(a,inner))];
}
export function modernize(item,id){
  if(/^open_[ul]_stair/.test(id)&&!item.parts.some(p=>p.shape==='polygon')){
    const [W,D]=item.size,groups=new Map();
    for(const p of item.parts.filter(p=>p.shape==='box'&&p.rot)){if(!groups.has(p.y))groups.set(p.y,[]);groups.get(p.y).push(p);}
    const steps=[...groups.values()].sort((a,b)=>a[0].y-b[0].y);
    if(!steps.length)return item;
    const straight=item.parts.filter(p=>p.shape==='box'&&p.rot===0),incoming=straight.filter(p=>p.y<steps[0][0].y).at(-1),outgoing=straight.find(p=>p.y>steps.at(-1)[0].y);
    const l=id.startsWith('open_l'),cx=l?(outgoing.x+outgoing.w/2)*W:0,cz=(incoming.z-incoming.d/2)*D,inner=(incoming.x-incoming.w/2)*W-cx,outer=inner+incoming.w*W;
    steps.forEach((parts,i)=>{
      const points=winderPoints(i*(l?Math.PI/2:Math.PI)/steps.length,(i+1)*(l?Math.PI/2:Math.PI)/steps.length,inner,outer,cx,cz);
      const xs=points.map(p=>p[0]),zs=points.map(p=>p[1]),x=(Math.min(...xs)+Math.max(...xs))/2,z=(Math.min(...zs)+Math.max(...zs))/2,w=Math.max(...xs)-Math.min(...xs),d=Math.max(...zs)-Math.min(...zs);
      const fraction=v=>Math.max(-0.5,Math.min(0.5,Number(v.toFixed(9))));
      replace(parts[0],{shape:'polygon',x:x/W,z:z/D,w:w/W,d:d/D,points:points.map(p=>[fraction((p[0]-x)/w),fraction((p[1]-z)/d)])});
      parts.slice(1).forEach(p=>p.visible=false);
    });
  }
  if(/^football_size_[345]$/.test(id)&&!(item.parts[0].shape==='sphere'&&item.parts[1].shape==='polygon')){
    const white=item.parts[0].color,black=item.parts.find(p=>p.color!==white)?.color??'dark';item.parts.forEach(p=>p.visible=false);
    replace(item.parts[0],{shape:'sphere',x:0,z:0,y:0,w:1,d:1,h:1,color:white,visible:true});
    // Shallow decorative dark panels; the body itself is a continuous sphere.
    const caps=[{x:0,z:0,y:0.965,w:0.26,d:0.26,h:0.035},{x:0,z:0,y:0,w:0.26,d:0.26,h:0.035},{x:0.4825,z:0,y:0.37,w:0.035,d:0.26,h:0.26},{x:-0.4825,z:0,y:0.37,w:0.035,d:0.26,h:0.26},{x:0,z:0.4825,y:0.37,w:0.26,d:0.035,h:0.26},{x:0,z:-0.4825,y:0.37,w:0.26,d:0.035,h:0.26}];
    const points=Array.from({length:5},(_,i)=>{const a=i*2*Math.PI/5-Math.PI/2;return [0.5*Math.cos(a),0.5*Math.sin(a)];});
    caps.forEach((cap,i)=>replace(item.parts[i+1],{shape:'polygon',...cap,axis:i<2?'y':i<4?'x':'z',points,color:black,visible:true}));
  }
  if(/^echo_dot3_(?!outlet)/.test(id))item.parts.filter(p=>p.shape==='cyl').forEach(p=>p.detail='high');
  if(/^echo_dot4_/.test(id)&&item.parts[1].shape!=='ellipsoid'){
    replace(item.parts[1],{shape:'ellipsoid',x:0,z:0,y:0.0224719,w:1,d:1,h:0.9550562,visible:true});for(let i=2;i<=44;i++)item.parts[i].visible=false;
    item.parts.filter(p=>p.shape==='cyl').forEach(p=>p.detail='high');
  }
  if(id==='echo_dot3_outlet_black'&&item.parts[16].shape!=='ellipsoid'){
    replace(item.parts[16],{shape:'ellipsoid',x:0,z:0,y:0.0355556,w:0.9166667,d:0.6923077,h:0.44,visible:true});for(let i=17;i<=51;i++)item.parts[i].visible=false;
    replace(item.parts[28],{shape:'torus',x:0,z:0.3384615,y:0.0488889,w:0.8611111,d:0.0307692,h:0.4133333,thickness:0.015,visible:true});
    replace(item.parts[40],{shape:'ellipsoid',x:0,z:0.3692308,y:0.0577778,w:0.8240741,d:0.0307692,h:0.3955556,visible:true});item.parts.filter(p=>p.shape==='cyl').forEach(p=>p.detail='high');
  }
  return item;
}
