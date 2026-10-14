// Photo-guided second-generation Soul and facelift (2022-24) C5 Aircross.
// Keep placement sizes/IDs. Coordinates are fractions; front is +Z.
const round=v=>Math.round(v*1e7)/1e7;
const lerp=(knots,z)=>{const i=knots.findIndex(p=>p[0]>=z);if(i<=0)return knots[Math.max(i,0)][1];const [a,b]=[knots[i-1],knots[i]];return a[1]+(b[1]-a[1])*(z-a[0])/(b[0]-a[0]);};
export function vehicleProfiles(item,baseId=item.id){
  const soul=baseId==='kia_soul2_white_black_roof';
  if(!soul&&baseId!=='citroen_c5_aircross_2024_black')return item;
  const colored=item.parts[0].color.startsWith('#'),body=item.parts[0].color,dark=colored?'#202326':'dark',glass=colored?'#25343b':'glass';
  const [W,L,H]=item.size,wheelRadius=soul?0.326:0.36,wheelY=wheelRadius/H;
  const axles=soul?[-0.5+0.73/L,0.5-0.84/L]:[-0.5+0.88/L,-0.5+0.88/L+2.73/L];
  const profile=(sections,color,crease=35)=>({shape:'profile',axis:'z',x:0,y:0,z:0,w:1,h:1,d:1,color,crease_angle:crease,
    sections:sections.map(([at,points])=>({at:round(at),points:points.map(p=>p.map(round))})),edges:colored?false:'faint'});
  const set=(index,part)=>{const old=item.parts[index];item.parts[index]={...part,id:old.id};for(const key of ['glow','screen','visible','status'])if(key in old)item.parts[index][key]=old[key];};
  const upsert=(id,part)=>{const i=item.parts.findIndex(p=>p.id===id);const p={...part,id};if(i<0)item.parts.push(p);else item.parts[i]=p;};
  const top=soul?[[-0.49,0.57],[-0.43,0.64],[-0.15,0.65],[0.15,0.66],[0.34,0.64],[0.49,0.57]]:
    [[-0.49,0.55],[-0.43,0.63],[-0.12,0.65],[0.14,0.66],[0.35,0.64],[0.49,0.56]];
  const width=soul?[[-0.49,0.40],[-0.43,0.465],[-0.25,0.49],[0.2,0.49],[0.40,0.465],[0.49,0.40]]:
    [[-0.49,0.39],[-0.43,0.46],[-0.28,0.49],[0.16,0.49],[0.38,0.47],[0.49,0.40]];
  const zs=new Set([...top.map(p=>p[0]),...width.map(p=>p[0])]);
  for(const z of axles)for(let i=0;i<=16;i++)zs.add(round(z-(wheelRadius+0.028)/L+2*(wheelRadius+0.028)/L*i/16));
  const sections=[...zs].sort((a,b)=>a-b).map(z=>{
    let bottom=soul?0.13:0.15;
    for(const axle of axles){const dz=(z-axle)*L,r=wheelRadius+0.025;if(Math.abs(dz)<r)bottom=Math.max(bottom,wheelY+Math.sqrt(r*r-dz*dz)/H);}
    const t=lerp(top,z),s=lerp(width,z),b=s-0.022,q=Math.min(0.025,(t-bottom)/4),u=s-(soul?0.035:0.055);
    return [z,[[-b+q,bottom],[b-q,bottom],[b,bottom+q],[s,t-0.075],[s-0.008,t-0.038],[u,t-0.007],[0,t],[-u,t-0.007],[-s+0.008,t-0.038],[-s,t-0.075],[-b,bottom+q]]];
  });
  set(0,profile(sections,body,soul?28:45));
  set(1,{shape:'rounded_box',x:0,y:0.18,z:0.46,w:0.9,h:0.18,d:0.05,radius:0.13,color:body});
  const cabin=soul?[[-0.435,0.62,0.84,0.40,0.37],[-0.37,0.64,0.966,0.432,0.385],[-0.20,0.65,0.978,0.44,0.39],[0,0.65,0.970,0.44,0.385],[0.09,0.65,0.935,0.435,0.37],[0.235,0.65,0.678,0.405,0.395]]:
    [[-0.43,0.62,0.78,0.40,0.365],[-0.36,0.64,0.942,0.428,0.37],[-0.20,0.65,0.954,0.44,0.375],[-0.03,0.65,0.943,0.443,0.37],[0.09,0.65,0.887,0.432,0.357],[0.25,0.65,0.676,0.398,0.385]];
  const ring=(b,t,x,u)=>[[-x,b],[x,b],[x-0.006,b+0.025],[u+0.009,t-0.025],[u,t],[0,t+0.005],[-u,t],[-u-0.009,t-0.025],[-x+0.006,b+0.025]];
  set(2,profile(cabin.map(([z,b,t,x,u])=>[z,ring(b,t,x,u)]),glass,30));
  const roof=cabin.slice(1,5).map(([z,,t,,u])=>[z,[[-u,t+0.004],[u,t+0.004],[u+0.005,t+0.011],[u-0.009,t+0.02],[0,t+0.022],[-u+0.009,t+0.02],[-u-0.005,t+0.011]]]);
  set(3,profile(roof,dark,35));
  // Thin side pillars follow the leaning window surfaces rather than vertical boxes.
  const sideRing=(side,b,t,x,u)=>{const a=side*x,c=side*u,e=0.008;return [[a-e,b],[a+e,b],[c+e,t],[c-e,t]];};
  for(const [side,rear,middle] of [[-1,4,5],[1,9,10]]){
    set(rear,profile([[-0.425,sideRing(side,0.625,soul?0.865:0.82,0.407,0.37)],[-0.365,sideRing(side,0.641,soul?0.968:0.94,0.433,0.378)]],body,0));
    set(middle,profile([[-0.077,sideRing(side,0.65,soul?0.977:0.95,0.44,soul?0.39:0.375)],[-0.065,sideRing(side,0.65,soul?0.977:0.95,0.44,soul?0.39:0.375)]],dark,0));
    // A-pillars are narrow sloping ribbons, not solid triangular side panels.
    upsert(`vehicle_a_pillar_${side<0?'left':'right'}`,profile([[0.085,sideRing(side,soul?0.92:0.87,soul?0.94:0.89,soul?0.37:0.357,soul?0.37:0.357)],[soul?0.235:0.25,sideRing(side,0.656,0.678,0.395,0.395)]],body,0));
    upsert(`vehicle_mirror_${side<0?'left':'right'}`,{shape:'ellipsoid',x:side*0.468,y:0.655,z:0.125,w:0.063,h:0.04,d:0.06,color:dark,detail:'high'});
  }
  set(6,{shape:'rounded_box',x:0,y:0.12,z:0,w:0.64,h:0.20,d:0.9,radius:0.05,color:dark});
  set(11,{shape:'rounded_box',x:0,y:0.19,z:-0.463,w:0.9,h:0.15,d:0.04,radius:0.1,color:body});
  for(const [index,side] of [[7,-1],[8,-1],[12,1],[13,1]])Object.assign(item.parts[index],{x:side*0.492,y:0.60});
  // Correct non-symmetric overhangs while preserving the actual part IDs.
  for(let wheel=0;wheel<4;wheel++){
    const side=wheel<2?-1:1,z=axles[wheel%2],start=14+wheel*3;
    for(let j=0;j<3;j++){const old=item.parts[start+j],diam=j===0?wheelRadius*2:j===1?wheelRadius*1.45:wheelRadius*1.3;
      Object.assign(old,{shape:'cyl',axis:'x',x:side*(j===0?0.44:j===1?0.484:0.493),w:j===0?old.w:0.008/W,z:round(z),y:round(wheelY-diam/2/H),h:round(diam/H),d:round(diam/L),detail:'high'});
    }
    const diam=wheelRadius*1.38,points=Array.from({length:10},(_,i)=>{const a=2*Math.PI*i/10,r=i%2?0.19:0.48;return [round(Math.cos(a)*r),round(Math.sin(a)*r)];});
    upsert(`vehicle_spokes_${wheel}`,{shape:'polygon',axis:'x',x:side*0.497,z:round(z),y:round(wheelY-diam/2/H),w:0.005/W,h:round(diam/H),d:round(diam/L),points,color:colored?'#b1b8bf':'metal'});
  }
  // Body profiles contain real wheel openings; dark arch lips follow their boundary.
  for(const side of [-1,1])for(let axle=0;axle<2;axle++){
    const r=wheelRadius+0.034,lip=0.017,sections=Array.from({length:17},(_,i)=>{
      const dz=-r+2*r*i/16,z=axles[axle]+dz/L,y=wheelY+Math.sqrt(Math.max(0,r*r-dz*dz))/H,x=side*0.47;
      return [z,[[x-0.008,y-lip],[x+0.008,y-lip],[x+0.008,y+lip],[x-0.008,y+lip]]];
    });
    upsert(`vehicle_arch_${side<0?'left':'right'}_${axle}`,profile(sections,dark,45));
  }
  if(!soul)for(const [index,side] of [[35,-1],[36,1]]){
    const height=cabin.map(([z,,t])=>[z,t]);
    set(index,profile([-0.34,-0.30,-0.20,-0.03,0.07].map(z=>{const x=side*0.34,y=lerp(height,z)+0.025;
      return [z,[[x-0.007,y],[x+0.007,y],[x+0.007,Math.min(0.999,y+0.018)],[x-0.007,Math.min(0.999,y+0.018)]]];
    }),colored?'#949b9f':'metal',40));
  }
  // Keep grille/lights/plates outside the new nose and tail, not buried in the body.
  for(const p of item.parts.filter(p=>p.shape!=='profile'&&p.d<0.02&&Math.abs(p.z)>0.47))p.z=p.z<0?-0.493:0.493;
  if(soul)for(const index of [30,34])Object.assign(item.parts[index],{shape:'rounded_box',x:index===30?-0.402:0.402,z:-0.41,y:0.55,h:0.34,w:0.038,d:0.026,radius:0.12});
  for(const p of item.parts.filter(p=>p.shape==='box'&&p.z>0.49))Object.assign(p,{shape:'rounded_box',radius:0.12});
  return item;
}
