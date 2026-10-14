// Photo-guided second-generation Soul and facelift (2022-24) C5 Aircross.
// Keep placement sizes/IDs. Coordinates are fractions; front is +Z.
import { smoothVehicleFront } from './pack-vehicle-fronts.mjs';
const round=v=>Math.round(v*1e7)/1e7;
const lerp=(knots,z)=>{const i=knots.findIndex(p=>p[0]>=z);if(i<=0)return knots[Math.max(i,0)][1];const [a,b]=[knots[i-1],knots[i]];return a[1]+(b[1]-a[1])*(z-a[0])/(b[0]-a[0]);};
export function vehicleProfiles(item,baseId=item.id){
  const soul=baseId==='kia_soul2_white_black_roof';
  if(!soul&&baseId!=='citroen_c5_aircross_2024_black')return item;
  const colored=item.parts[0].color.startsWith('#'),body=colored?(soul?'#c7c9c6':'#202428'):item.parts[0].color,dark=colored?'#17191c':'dark',glass=colored?'#192b33':'glass';
  const metal=colored?'#a3aab0':'metal',trim=colored?'#303338':'dark',white=colored?'#d5e1e2':'white';
  const box=(x,y,z,w,h,d,color,radius=0.12)=>({shape:'rounded_box',x,y,z,w,h,d,color,radius,detail:'low'});
  const [W,L,H]=item.size,wheelRadius=soul?0.326:0.36,wheelY=wheelRadius/H;
  const axles=soul?[-0.5+0.73/L,0.5-0.84/L]:[-0.5+0.88/L,-0.5+0.88/L+2.73/L];
  const profile=(sections,color,crease=35)=>({shape:'profile',axis:'z',x:0,y:0,z:0,w:1,h:1,d:1,color,crease_angle:crease,
    sections:sections.map(([at,points])=>({at:round(at),points:points.map(p=>p.map(round))})),edges:colored?false:'faint'});
  const set=(index,part)=>{const old=item.parts[index];item.parts[index]={...part,id:old.id};for(const key of ['glow','screen','visible','status'])if(key in old)item.parts[index][key]=old[key];};
  const upsert=(id,part)=>{const i=item.parts.findIndex(p=>p.id===id);const p={...part,id};if(i<0)item.parts.push(p);else item.parts[i]=p;};
  // Soul: upright short box nose; C5: tall SUV bonnet/fascia, not a low estate wedge.
  const top=soul?[[-0.495,0.62],[-0.47,0.655],[-0.32,0.662],[-0.10,0.658],[0.20,0.666],[0.30,0.658],[0.44,0.636],[0.495,0.607]]:
    [[-0.495,0.60],[-0.46,0.675],[-0.32,0.719],[-0.10,0.72],[0.17,0.714],[0.27,0.706],[0.41,0.688],[0.47,0.67],[0.495,0.642]];
  const width=soul?[[-0.495,0.425],[-0.47,0.467],[-0.40,0.482],[-0.32,0.495],[-0.20,0.478],[-0.05,0.464],[0.14,0.475],[0.30,0.495],[0.43,0.477],[0.47,0.464],[0.495,0.449]]:
    [[-0.495,0.403],[-0.47,0.46],[-0.40,0.485],[-0.28,0.495],[-0.10,0.483],[0.14,0.49],[0.30,0.495],[0.41,0.481],[0.47,0.463],[0.495,0.435]];
  const zs=new Set([...top.map(p=>p[0]),...width.map(p=>p[0])]);
  for(const z of axles)for(let i=0;i<=16;i++)zs.add(round(z-(wheelRadius+0.028)/L+2*(wheelRadius+0.028)/L*i/16));
  const bodyRing=z=>{
    let bottom=soul?0.13:0.15;
    let flare=0;
    for(const axle of axles){const dz=(z-axle)*L,r=wheelRadius+0.025;if(Math.abs(dz)<r)bottom=Math.max(bottom,wheelY+Math.sqrt(r*r-dz*dz)/H);}
    for(const axle of axles)flare=Math.max(flare,Math.sqrt(Math.max(0,1-Math.abs((z-axle)*L)/(wheelRadius+0.08))));
    const t=lerp(top,z),s=lerp(width,z),b=s-0.033,q=Math.min(0.018,(t-bottom)/5);
    if(soul){
      const lower=s-0.055+0.049*flare;
      return [[-lower+q,bottom],[lower-q,bottom],[lower,bottom+q],[s-0.041,Math.max(bottom+q,t-0.28)],[s-0.024,t-0.12],[s-0.008,t-0.066],[s-0.038,t-0.021],[s-0.12,t-0.004],[0,t],[-s+0.12,t-0.004],[-s+0.038,t-0.021],[-s+0.008,t-0.066],[-s+0.024,t-0.12],[-s+0.041,Math.max(bottom+q,t-0.28)],[-lower,bottom+q]];
    }
    return [[-b+q,bottom],[b-q,bottom],[b,bottom+q],[s-0.01,Math.max(bottom+q,t-0.21)],[s,t-0.085],[s-0.008,t-0.047],[s-0.032,t-0.022],[s-0.11,t-0.006],[0,t],[-s+0.11,t-0.006],[-s+0.032,t-0.022],[-s+0.008,t-0.047],[-s,t-0.085],[-s+0.01,Math.max(bottom+q,t-0.21)],[-b,bottom+q]];
  };
  const sections=[...zs].sort((a,b)=>a-b).map(z=>[z,bodyRing(z)]);
  set(0,profile(sections,body,soul?42:45));
  set(1,box(0,soul?0.17:0.195,0.465,soul?0.90:0.92,soul?0.24:0.285,0.05,body,soul?0.10:0.16));
  // Painted cabin plus separate thin window patches, not a glass van-shaped prism.
  const cabin=soul?[[-0.482,0.64,0.703,0.424,0.369],[-0.451,0.653,0.945,0.45,0.39],[-0.34,0.657,0.975,0.453,0.409],[-0.08,0.654,0.975,0.452,0.41],[0.12,0.657,0.966,0.448,0.404],[0.165,0.657,0.948,0.445,0.40],[0.275,0.649,0.702,0.43,0.416]]:
    [[-0.475,0.643,0.71,0.429,0.363],[-0.408,0.704,0.943,0.455,0.379],[-0.27,0.721,0.965,0.463,0.389],[-0.08,0.72,0.969,0.462,0.389],[0.083,0.714,0.945,0.455,0.38],[0.247,0.707,0.752,0.449,0.429]];
  const value=(index,z)=>lerp(cabin.map(row=>[row[0],row[index]]),z);
  const ring=(b,t,x,u)=>{
    if(!soul)return [[-x,b],[x,b],[x-0.006,b+0.025],[u+0.009,t-0.025],[u,t],[0,t+0.005],[-u,t],[-u-0.009,t-0.025],[-x+0.006,b+0.025]];
    const span=t-b;
    return [[-x,b],[x,b],[x-0.003,b+span*0.07],[x-0.008,b+span*0.23],[u+0.016,t-span*0.13],[u+0.005,t-span*0.04],[u-0.005,t],[0,t+0.009],[-u+0.005,t],[-u-0.005,t-span*0.04],[-u-0.016,t-span*0.13],[-x+0.008,b+span*0.23],[-x+0.003,b+span*0.07]];
  };
  upsert('vehicle_cabin',profile(cabin.map(([z,b,t,x,u])=>[z,ring(b,t,x,u)]),body,50));
  const screen=(a,b)=>profile([a,b].map(z=>{const y=value(2,z)+0.004,u=value(4,z)-0.025;
    return [z,[[-u,y],[u,y],[u-0.014,y+0.007],[0,y+0.017],[-u+0.014,y+0.007]]];}),glass,50);
  set(2,screen(soul?0.172:0.095,soul?0.262:0.233));
  upsert('vehicle_rear_screen',screen(soul?-0.480:-0.469,soul?-0.456:-0.415));
  const roof=cabin.slice(1,-1).map(([z,,t,,u])=>[z,[[-u,t+0.004],[u,t+0.004],[u+0.005,t+0.011],[u-0.009,t+0.02],[0,t+0.022],[-u+0.009,t+0.02],[-u-0.005,t+0.011]]]);
  set(3,profile(roof,dark,soul?18:40));
  const pane=(side,a,b)=>{
    const knots=[a,a+0.006,...cabin.map(c=>c[0]).filter(z=>z>a+0.006&&z<b-0.006),b-0.006,b];
    return profile(knots.map((z,i)=>{
      const corner=i===0||i===knots.length-1?0.014:0;
      const bottom=value(1,z)+0.028+corner,top=value(2,z)-0.037-corner;
      const lo=side*(value(3,z)-0.003),hi=side*(value(4,z)+0.014);
      return [z,[[lo-0.004,bottom],[lo+0.004,bottom],[hi+0.004,top],[hi-0.004,top]]];
    }),glass,45);
  };
  // Each Soul pane has its own traced upper/lower silhouette. Project the thin
  // glass skin onto the actual cabin cross-section, not a guessed straight slab.
  const faceX=(points,y)=>{
    const right=points.slice(1,points.findIndex(p=>p[0]===0)+1);
    if(y<=right[0][1])return right[0][0];
    for(let i=1;i<right.length;i++)if(y<=right[i][1]){
      const a=right[i-1],b=right[i];return a[0]+(b[0]-a[0])*(y-a[1])/(b[1]-a[1]);
    }
    return right.at(-1)[0];
  };
  const soulPane=(side,outline,color=glass,offset=0.008)=>{
    const zs=[...new Set([...outline.map(p=>p[0]),...cabin.map(p=>p[0]).filter(z=>z>outline[0][0]&&z<outline.at(-1)[0])])].sort((a,b)=>a-b);
    return profile(zs.map(z=>{
      const b=lerp(outline.map(p=>[p[0],p[1]]),z),t=lerp(outline.map(p=>[p[0],p[2]]),z);
      const cabinFace=ring(value(1,z),value(2,z),value(3,z),value(4,z));
      const skin=Array.from({length:9},(_,i)=>{const y=b+(t-b)*i/8;return [side*(faceX(cabinFace,y)+offset),y];});
      return [z,[[skin[0][0]-0.001,b],...skin.map(([x,y])=>[x+0.001,y]),...skin.slice(1).toReversed().map(([x,y])=>[x-0.001,y])]];
    }),color,42);
  };
  const soulRear=[[-0.331,0.804,0.930],[-0.318,0.778,0.938],[-0.27,0.741,0.940],[-0.16,0.709,0.938],[-0.057,0.703,0.934]];
  const soulFront=[[-0.038,0.703,0.935],[0.10,0.697,0.928],[0.153,0.695,0.911],[0.193,0.694,0.827],[0.234,0.700,0.737]];
  const soulQuarter=[[-0.405,0.918,0.924],[-0.388,0.881,0.931],[-0.365,0.850,0.937],[-0.345,0.821,0.937]];
  for(const [side,rear,middle] of [[-1,4,5],[1,9,10]]){
    set(rear,soul?soulPane(side,soulRear):pane(side,-0.29,-0.077));
    set(middle,soul?soulPane(side,soulFront):pane(side,-0.060,0.193));
    upsert(`vehicle_a_pillar_${side<0?'left':'right'}`,soul?soulPane(side,soulQuarter):pane(side,-0.387,-0.315));
    upsert(`vehicle_mirror_${side<0?'left':'right'}`,{shape:'ellipsoid',x:side*0.463,y:soul?0.665:0.714,z:soul?0.205:0.17,w:0.07,h:0.055,d:0.048,color:soul?body:dark,detail:'medium'});
  }
  set(6,{shape:'rounded_box',x:0,y:0.12,z:0,w:0.64,h:0.20,d:0.9,radius:0.05,color:dark});
  set(11,box(0,0.15,-0.464,0.85,0.16,0.045,body,0.22));
  for(const [index,side,z] of [[7,-1,-0.22],[8,-1,0.04],[12,1,-0.22],[13,1,0.04]])set(index,box(side*(soul?faceX(bodyRing(z),0.631)+0.004:0.481),soul?0.623:0.66,z,0.012,0.016,0.032,soul?body:metal));
  for(const side of [-1,1]){
    upsert(`vehicle_sill_${side}`,box(side*0.475,0.13,0,0.035,soul?0.055:0.135,0.44,soul?dark:trim));
    const x=side*0.484;
    upsert(`vehicle_door_seam_${side}`,profile([[-0.069,[[x-0.002,0.20],[x+0.002,0.20],[x+0.002,0.641],[x-0.002,0.641]]],[-0.066,[[x-0.002,0.20],[x+0.002,0.20],[x+0.002,0.641],[x-0.002,0.641]]]],trim,0));
    if(soul){
      upsert(`vehicle_door_seam_${side}`,soulPane(side,[[-0.413,0.905,0.932],[-0.388,0.853,0.941],[-0.345,0.79,0.948],[-0.27,0.727,0.949],[-0.057,0.692,0.944],[-0.038,0.692,0.945],[0.10,0.686,0.938],[0.153,0.684,0.92],[0.193,0.682,0.838],[0.243,0.688,0.724]],dark,0.004));
      upsert(`vehicle_sill_${side}`,profile([-0.22,-0.10,0,0.10,0.20].map(z=>{
        const lo=side*(faceX(bodyRing(z),0.134)+0.006),hi=side*(faceX(bodyRing(z),0.187)+0.006);
        return [z,[[lo-0.004,0.134],[lo+0.004,0.134],[hi+0.004,0.187],[hi-0.004,0.187]]];
      }),dark,42));
    }
  }
  // Correct non-symmetric overhangs while preserving the actual part IDs.
  for(let wheel=0;wheel<4;wheel++){
    const side=wheel<2?-1:1,z=axles[wheel%2],start=14+wheel*3;
    for(let j=0;j<3;j++){const old=item.parts[start+j],diam=j===0?wheelRadius*2:j===1?wheelRadius*1.45:wheelRadius*1.3;
      Object.assign(old,{shape:'cyl',axis:'x',x:side*(j===0?0.436:j===1?0.483:0.488),w:j===0?0.20/W:0.006/W,z:round(z),y:round(wheelY-diam/2/H),h:round(diam/H),d:round(diam/L),color:j===0?dark:j===1?metal:dark,detail:'high'});
    }
    const diam=wheelRadius*1.38,points=Array.from({length:5},(_,i)=>[[-0.18,0.47],[0.18,0.47],[0.22,0.18],[2*Math.PI/5-0.22,0.18]].map(([angle,r])=>{
      const a=i*2*Math.PI/5+angle+(soul?0:r*0.28);return [round(Math.cos(a)*r),round(Math.sin(a)*r)];
    })).flat();
    upsert(`vehicle_spokes_${wheel}`,{shape:'polygon',axis:'x',x:side*0.497,z:round(z),y:round(wheelY-diam/2/H),w:0.005/W,h:round(diam/H),d:round(diam/L),points,color:colored?'#b1b8bf':'metal'});
  }
  // Body profiles contain real wheel openings; dark arch lips follow their boundary.
  for(const side of [-1,1])for(let axle=0;axle<2;axle++){
    const r=wheelRadius+0.034,lip=soul?0.010:0.019,sections=Array.from({length:17},(_,i)=>{
      const dz=-r+2*r*i/16,z=axles[axle]+dz/L,y=wheelY+Math.sqrt(Math.max(0,r*r-dz*dz))/H,x=side*Math.min(0.493,soul?faceX(bodyRing(z),y)+0.004:lerp(width,z)+0.003);
      return [z,[[x-0.006,y-lip],[x+0.006,y-lip],[x+0.006,y+lip],[x-0.006,y+lip]]];
    });
    upsert(`vehicle_arch_${side<0?'left':'right'}_${axle}`,profile(sections,soul?body:trim,50));
  }
  if(!soul)for(const [index,side] of [[35,-1],[36,1]]){
    const height=cabin.map(([z,,t])=>[z,t]);
    set(index,profile([-0.355,-0.27,-0.08,0.04].map(z=>{const x=side*0.332,y=lerp(height,z)+0.024;
      return [z,[[x-0.007,y],[x+0.007,y],[x+0.007,Math.min(0.999,y+0.018)],[x-0.007,Math.min(0.999,y+0.018)]]];
    }),colored?'#949b9f':'metal',40));
  }
  set(26,box(0,soul?0.22:0.205,0.4965,soul?0.64:0.67,soul?0.16:0.22,0.009,dark,soul?0.12:0.20));
  if(soul){
    const lampPoints=side=>[[-0.32,-0.44],[0.45,-0.44],[0.49,0.47],[0.28,0.32],[-0.30,0.03],[-0.32,-0.16]].map(([x,y])=>[side*x,y]);
    for(const [housing,lamp,fog,tail,side] of [[27,28,29,30,-1],[31,32,33,34,1]]){
      set(housing,{shape:'polygon',axis:'z',x:side*0.322,y:0.463,z:0.487,w:0.24,h:0.156,d:0.018,points:lampPoints(side),color:trim});
      set(lamp,{shape:'polygon',axis:'z',x:side*0.322,y:0.475,z:0.498,w:0.222,h:0.127,d:0.004,points:lampPoints(side),color:colored?'#9caeb6':'white'});
      upsert(`vehicle_projector_${side}`,{shape:'cyl',axis:'z',x:side*0.371,y:0.491,z:0.500,w:0.057,h:0.064,d:0.004,color:dark,detail:'high'});
      set(fog,{shape:'cyl',axis:'z',x:side*0.371,y:0.235,z:0.500,w:0.075,h:0.084,d:0.007,color:colored?'#a9b7ba':'white',detail:'high'});
      set(tail,profile([-0.484,-0.470,-0.448].map(z=>{
        const t=Math.min(0.905,value(2,z)-0.035);
        const lo=side*Math.min(0.486,faceX(bodyRing(z),0.575)+0.004),hi=side*(faceX(ring(value(1,z),value(2,z),value(3,z),value(4,z)),t)+0.004);
        return [z,[[lo-0.006,0.575],[lo+0.006,0.575],[hi+0.006,t],[hi-0.006,t]]];
      }),colored?'#972a2b':'accent',40));
    }
    const tiger=[[-0.48,-0.48],[-0.15,-0.48],[0,-0.33],[0.15,-0.48],[0.48,-0.48],[0.5,0.43],[0.14,0.43],[0,0.26],[-0.14,0.43],[-0.5,0.43]];
    upsert('vehicle_tiger_surround',{shape:'polygon',axis:'z',x:0,y:0.459,z:0.495,w:0.478,h:0.089,d:0.005,points:tiger,color:metal});
    upsert('vehicle_upper_grille',{shape:'polygon',axis:'z',x:0,y:0.465,z:0.500,w:0.455,h:0.075,d:0.003,points:tiger,color:dark});
    upsert('vehicle_badge',{shape:'polygon',axis:'z',x:0,y:0.561,z:0.499,w:0.061,h:0.027,d:0.004,points:Array.from({length:16},(_,i)=>[round(0.49*Math.cos(i*Math.PI/8)),round(0.49*Math.sin(i*Math.PI/8))]),color:dark});
    set(35,box(0,0.26,0.500,0.22,0.045,0.004,white));set(36,box(0,0.33,-0.500,0.22,0.045,0.004,colored?'#b0bcc4':'white'));
  }else{
    for(const [upper,lower,tail,side] of [[27,28,29,-1],[30,31,32,1]]){
      const strip=([x,y])=>[side*x,y];
      set(upper,{shape:'polygon',axis:'z',x:side*0.303,y:0.59,z:0.500,w:0.25,h:0.027,d:0.004,points:[[-0.5,-0.18],[0.5,-0.3],[0.5,0.2],[0.32,0.5],[-0.5,0.12]].map(strip),color:white});
      set(lower,{shape:'polygon',axis:'z',x:side*0.303,y:0.525,z:0.500,w:0.25,h:0.027,d:0.004,points:[[-0.5,-0.18],[0.35,-0.5],[0.5,-0.15],[0.5,0.2],[0.25,0.45],[-0.5,0.12]].map(strip),color:white});
      set(tail,box(side*0.305,0.557,-0.500,0.225,0.067,0.012,colored?'#952126':'accent',0.22));
    }
    for(const [index,offset] of [[33,0],[34,-0.034]])set(index,{shape:'polygon',axis:'z',x:0,y:0.572+offset,z:0.500,w:0.16,h:0.039,d:0.005,points:[[-0.48,-0.40],[0,0.20],[0.48,-0.40],[0.48,-0.12],[0,0.48],[-0.48,-0.12]],color:metal});
    upsert('vehicle_upper_grille',box(0,0.51,0.497,0.84,0.112,0.006,dark));
    // Tall corner inlets make the bumper a SUV fascia rather than a thin estate lip.
    set(6,box(-0.398,0.265,0.500,0.11,0.205,0.009,dark,0.24));
    upsert('vehicle_front_inlet_right',box(0.398,0.265,0.500,0.11,0.205,0.009,dark,0.24));
    upsert('vehicle_skid_plate',box(0,0.158,0.500,0.74,0.047,0.009,metal));
    set(37,box(0,0.36,0.500,0.22,0.043,0.004,white));set(38,box(0,0.31,-0.500,0.22,0.043,0.004,white));
  }
  // Tiny trim does not need the same subdivision as a bumper or wheel.
  for(const p of item.parts.filter(p=>p.shape==='rounded_box'&&!['p001','p011'].includes(p.id)))p.detail='low';
  return smoothVehicleFront(item,soul,colored);
}
