// Photo-guided second-generation Soul and facelift (2022-24) C5 Aircross.
// Keep placement sizes/IDs. Coordinates are fractions; front is +Z.
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
  const top=soul?[[-0.495,0.59],[-0.46,0.645],[-0.32,0.665],[-0.10,0.666],[0.18,0.64],[0.26,0.60],[0.43,0.575],[0.495,0.52]]:
    [[-0.495,0.56],[-0.46,0.625],[-0.32,0.68],[-0.10,0.675],[0.17,0.65],[0.25,0.62],[0.40,0.597],[0.495,0.53]];
  const width=[[-0.495,0.36],[-0.47,0.425],[-0.40,0.48],[-0.28,0.495],[-0.10,0.48],[0.14,0.485],[0.30,0.495],[0.41,0.47],[0.47,0.43],[0.495,0.36]];
  const zs=new Set([...top.map(p=>p[0]),...width.map(p=>p[0])]);
  for(const z of axles)for(let i=0;i<=16;i++)zs.add(round(z-(wheelRadius+0.028)/L+2*(wheelRadius+0.028)/L*i/16));
  const sections=[...zs].sort((a,b)=>a-b).map(z=>{
    let bottom=soul?0.13:0.15;
    for(const axle of axles){const dz=(z-axle)*L,r=wheelRadius+0.025;if(Math.abs(dz)<r)bottom=Math.max(bottom,wheelY+Math.sqrt(r*r-dz*dz)/H);}
    const t=lerp(top,z),s=lerp(width,z),b=s-0.033,q=Math.min(0.018,(t-bottom)/5);
    return [z,[[-b+q,bottom],[b-q,bottom],[b,bottom+q],[s-0.01,Math.max(bottom+q,t-0.21)],[s,t-0.085],[s-0.008,t-0.047],[s-0.032,t-0.022],[s-0.11,t-0.006],[0,t],[-s+0.11,t-0.006],[-s+0.032,t-0.022],[-s+0.008,t-0.047],[-s,t-0.085],[-s+0.01,Math.max(bottom+q,t-0.21)],[-b,bottom+q]]];
  });
  set(0,profile(sections,body,50));
  set(1,box(0,0.15,0.463,0.85,0.17,0.045,body,0.22));
  // Painted cabin plus separate thin window patches, not a glass van-shaped prism.
  const cabin=soul?[[-0.482,0.625,0.68,0.418,0.375],[-0.449,0.65,0.958,0.442,0.385],[-0.30,0.665,0.973,0.447,0.389],[-0.08,0.665,0.973,0.449,0.389],[0.12,0.65,0.957,0.443,0.38],[0.265,0.607,0.655,0.425,0.405]]:
    [[-0.467,0.61,0.685,0.414,0.355],[-0.38,0.665,0.919,0.443,0.365],[-0.27,0.68,0.945,0.448,0.372],[-0.08,0.675,0.95,0.449,0.373],[0.055,0.666,0.923,0.439,0.365],[0.23,0.632,0.673,0.417,0.397]];
  const value=(index,z)=>lerp(cabin.map(row=>[row[0],row[index]]),z);
  const ring=(b,t,x,u)=>[[-x,b],[x,b],[x-0.006,b+0.025],[u+0.009,t-0.025],[u,t],[0,t+0.005],[-u,t],[-u-0.009,t-0.025],[-x+0.006,b+0.025]];
  upsert('vehicle_cabin',profile(cabin.map(([z,b,t,x,u])=>[z,ring(b,t,x,u)]),body,50));
  const screen=(a,b)=>profile([a,b].map(z=>{const y=value(2,z)+0.004,u=value(4,z)-0.025;
    return [z,[[-u,y],[u,y],[u-0.014,y+0.007],[0,y+0.017],[-u+0.014,y+0.007]]];}),glass,50);
  set(2,screen(soul?0.132:0.068,soul?0.252:0.215));
  upsert('vehicle_rear_screen',screen(soul?-0.479:-0.455,soul?-0.453:-0.390));
  const roof=cabin.slice(1,5).map(([z,,t,,u])=>[z,[[-u,t+0.004],[u,t+0.004],[u+0.005,t+0.011],[u-0.009,t+0.02],[0,t+0.022],[-u+0.009,t+0.02],[-u-0.005,t+0.011]]]);
  set(3,profile(roof,dark,35));
  const pane=(side,a,b)=>{
    const knots=[a,a+0.006,...cabin.map(c=>c[0]).filter(z=>z>a+0.006&&z<b-0.006),b-0.006,b];
    return profile(knots.map((z,i)=>{
      const corner=i===0||i===knots.length-1?0.014:0;
      const bottom=value(1,z)+0.028+corner,top=value(2,z)-0.037-corner;
      const lo=side*(value(3,z)-0.003),hi=side*(value(4,z)+0.014);
      return [z,[[lo-0.004,bottom],[lo+0.004,bottom],[hi+0.004,top],[hi-0.004,top]]];
    }),glass,45);
  };
  for(const [side,rear,middle] of [[-1,4,5],[1,9,10]]){
    set(rear,pane(side,soul?-0.355:-0.29,-0.077));
    set(middle,pane(side,-0.060,soul?0.235:0.18));
    upsert(`vehicle_a_pillar_${side<0?'left':'right'}`,pane(side,soul?-0.421:-0.376,soul?-0.371:-0.315));
    upsert(`vehicle_mirror_${side<0?'left':'right'}`,{shape:'ellipsoid',x:side*0.463,y:0.65,z:0.16,w:0.07,h:0.055,d:0.048,color:soul?body:dark,detail:'medium'});
  }
  set(6,{shape:'rounded_box',x:0,y:0.12,z:0,w:0.64,h:0.20,d:0.9,radius:0.05,color:dark});
  set(11,box(0,0.15,-0.464,0.85,0.16,0.045,body,0.22));
  for(const [index,side,z] of [[7,-1,-0.22],[8,-1,0.04],[12,1,-0.22],[13,1,0.04]])set(index,box(side*0.481,0.606,z,0.012,0.016,0.032,soul?body:metal));
  for(const side of [-1,1]){
    upsert(`vehicle_sill_${side}`,box(side*0.475,0.13,0,0.035,soul?0.055:0.135,0.44,soul?dark:trim));
    const x=side*0.484;
    upsert(`vehicle_door_seam_${side}`,profile([[-0.069,[[x-0.002,0.20],[x+0.002,0.20],[x+0.002,0.641],[x-0.002,0.641]]],[-0.066,[[x-0.002,0.20],[x+0.002,0.20],[x+0.002,0.641],[x-0.002,0.641]]]],trim,0));
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
      const dz=-r+2*r*i/16,z=axles[axle]+dz/L,y=wheelY+Math.sqrt(Math.max(0,r*r-dz*dz))/H,x=side*Math.min(0.493,lerp(width,z)+0.003);
      return [z,[[x-0.006,y-lip],[x+0.006,y-lip],[x+0.006,y+lip],[x-0.006,y+lip]]];
    });
    upsert(`vehicle_arch_${side<0?'left':'right'}_${axle}`,profile(sections,soul?body:trim,50));
  }
  if(!soul)for(const [index,side] of [[35,-1],[36,1]]){
    const height=cabin.map(([z,,t])=>[z,t]);
    set(index,profile([-0.355,-0.27,-0.08,0.04].map(z=>{const x=side*0.332,y=lerp(height,z)+0.03;
      return [z,[[x-0.007,y],[x+0.007,y],[x+0.007,Math.min(0.999,y+0.018)],[x-0.007,Math.min(0.999,y+0.018)]]];
    }),colored?'#949b9f':'metal',40));
  }
  set(26,box(0,0.22,0.493,0.64,soul?0.13:0.16,0.009,dark,0.24));
  if(soul){
    for(const [housing,lamp,fog,tail,side] of [[27,28,29,30,-1],[31,32,33,34,1]]){
      set(housing,box(side*0.302,0.465,0.48,0.23,0.091,0.034,trim,0.28));
      set(lamp,box(side*0.302,0.478,0.498,0.20,0.057,0.007,white,0.2));
      set(fog,{shape:'cyl',axis:'z',x:side*0.33,y:0.245,z:0.489,w:0.05,h:0.056,d:0.007,color:white,detail:'high'});
      set(tail,profile([[-0.474,[[side*0.418-0.012,0.58],[side*0.418+0.012,0.58],[side*0.386+0.012,0.875],[side*0.386-0.012,0.875]]],[-0.451,[[side*0.434-0.012,0.58],[side*0.434+0.012,0.58],[side*0.403+0.012,0.9],[side*0.403-0.012,0.9]]]],colored?'#972a2b':'accent',45));
    }
    upsert('vehicle_upper_grille',box(0,0.473,0.495,0.34,0.042,0.008,dark,0.15));
    set(35,box(0,0.26,0.500,0.22,0.045,0.004,white));set(36,box(0,0.33,-0.500,0.22,0.045,0.004,colored?'#b0bcc4':'white'));
  }else{
    for(const [upper,lower,tail,side] of [[27,28,29,-1],[30,31,32,1]]){
      set(upper,box(side*0.293,0.49,0.486,0.235,0.019,0.020,white));
      set(lower,box(side*0.293,0.423,0.486,0.215,0.017,0.020,white));
      set(tail,box(side*0.298,0.555,-0.483,0.235,0.061,0.016,colored?'#952126':'accent',0.22));
    }
    for(const [index,offset] of [[33,0],[34,-0.035]])set(index,{shape:'polygon',axis:'z',x:0,y:0.443+offset,z:0.498,w:0.15,h:0.035,d:0.005,points:[[-0.48,-0.40],[0,0.20],[0.48,-0.40],[0.48,-0.12],[0,0.48],[-0.48,-0.12]],color:metal});
    upsert('vehicle_upper_grille',box(0,0.411,0.493,0.75,0.095,0.006,dark));
    upsert('vehicle_skid_plate',box(0,0.138,0.485,0.65,0.028,0.016,metal));
    set(37,box(0,0.26,0.500,0.22,0.043,0.004,white));set(38,box(0,0.31,-0.500,0.22,0.043,0.004,white));
  }
  // Tiny trim does not need the same subdivision as a bumper or wheel.
  for(const p of item.parts.filter(p=>p.shape==='rounded_box'&&!['p001','p011'].includes(p.id)))p.detail='low';
  return item;
}
