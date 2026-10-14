// Curved native front skins. These are geometry, not painted flat front plates.
const round=v=>Math.round(v*1e7)/1e7;
const mix=(a,b,t)=>a+(b-a)*t;
const sample=(rows,x)=>{
  const i=rows.findIndex(row=>row[0]>=x);
  if(i<=0)return rows[Math.max(0,i)].slice(1);
  const a=rows[i-1],b=rows[i],t=(x-a[0])/(b[0]-a[0]);
  return a.slice(1).map((v,j)=>mix(v,b[j+1],t));
};
export const vehicleFrontZ=(x,y,soul)=>0.493-(soul?0.05:0.057)*(x/0.48)**2-0.006*((y-0.39)/0.3)**2;
export function smoothVehicleFront(item,soul,colored){
  const body=item.parts[0].color,dark=colored?'#17191c':'dark',metal=colored?'#a3aab0':'metal',white=colored?'#d5e1e2':'white';
  const profile=(sections,color)=>({shape:'profile',axis:'z',x:0,y:0,z:0,w:1,h:1,d:1,color,crease_angle:65,edges:colored?false:'faint',
    sections:[...new Map(sections.map(([at,points])=>[round(at),{at:round(at),points:points.map(p=>p.map(round))}])).values()]});
  const replace=(id,part)=>{
    const n=typeof id==='number'?id:item.parts.findIndex(p=>p.id===id);
    if(n<0)throw new Error('Missing front part '+id);
    const old=item.parts[n];item.parts[n]={...part,id:old.id};
    for(const key of ['glow','screen','status','visible'])if(key in old)item.parts[n][key]=old[key];
  };
  const old=item.parts[0].sections.map(section=>{
    if(!soul||section.at<=0.15)return section;
    const points=section.points.map(p=>[...p]),s=Math.min(0.495,Math.max(...points.map(p=>p[0]))+0.008);
    const u=Math.min(1,(section.at-0.15)/0.12),t=u*u*(3-2*u),offsets=[0.009,0.003,0.004,0.003,0.011,0.038,0.12];
    for(let i=1;i<=7;i++){
      points[i][0]=mix(points[i][0],s-offsets[i-1],t);
      const j=i===1?0:16-i;points[j][0]=-points[i][0];
    }
    return {...section,points};
  });
  const original=z=>{
    const i=old.findIndex(s=>s.at>=z);
    if(i<=0)return old[Math.max(i,0)].points;
    const a=old[i-1],b=old[i],t=(z-a.at)/(b.at-a.at);
    return a.points.map((p,j)=>p.map((v,k)=>mix(v,b.points[j][k],t)));
  };
  const rightAt=(ring,y)=>{
    const end=ring.findIndex(p=>p[0]===0),right=ring.slice(1,end+1);
    if(y<=right[0][1])return right[0][0];
    for(let i=1;i<right.length;i++)if(y<=right[i][1]){
      const a=right[i-1],b=right[i];return mix(a[0],b[0],(y-a[1])/(b[1]-a[1]));
    }
    return 0;
  };
  const nose=z=>{
    const ring=original(z),reach=0.3*Math.sqrt((0.493-z)/0.006);
    const low=Math.max(Math.min(...ring.map(p=>p[1])),0.39-reach),high=Math.min(Math.max(...ring.map(p=>p[1])),0.39+reach);
    const at=f=>{const y=mix(low,high,f),r=0.48*Math.sqrt(Math.max(0,(0.493-z-0.006*((y-0.39)/0.3)**2)/(soul?0.05:0.057)));
      return [Math.max(0.0005,Math.min(rightAt(ring,y),r)),y];};
    const chain=[0,0.02,0.23,0.5,0.75,0.9,0.98].map(at);
    const curved=[[-chain[0][0],low],...chain,[0,high],...chain.slice(1).toReversed().map(([x,y])=>[-x,y])];
    const u=Math.max(0,Math.min(1,(z-0.40)/0.04)),t=u*u*(3-2*u);
    return curved.map((p,i)=>p.map((v,j)=>mix(ring[i][j],v,t)));
  };
  // The main body closes at a small rounded tip, not a full-width vertical cap.
  const stations=[0.402,0.412,0.422,0.432,0.442,0.450,0.458,0.466,0.474,0.480,0.485,0.489,0.491,0.4928];
  item.parts[0]={...item.parts[0],crease_angle:soul?55:65,sections:[...old.filter(s=>s.at<=0.40),...stations.map(z=>({at:z,points:nose(z).map(p=>p.map(round))}))]};
  // Symmetric front patches are solid behind the curved skin; the body hides
  // their internal caps. The exposed sides follow the same bow as the body.
  const symmetric=(outline,color,offset)=>{
    const xs=[...new Set([0.002,...outline.map(p=>p[0]).filter(x=>x>0),...Array.from({length:9},(_,i)=>outline.at(-1)[0]*(i+1)/9)])].sort((a,b)=>b-a);
    return profile(xs.map(x=>{const [b,t]=sample(outline,x),z=vehicleFrontZ(x,(b+t)/2,soul)+offset;
      return [z,[[-x,b],[x,b],[x,t],[-x,t]]];}).sort((a,b)=>a[0]-b[0]),color);
  };
  // One-sided lens/inlet follows the nose around its corner. No flat sticker.
  const patch=(side,outline,color,offset)=>{
    const xs=[...new Set([...outline.map(p=>p[0]),...outline.slice(1).map((p,i)=>(p[0]+outline[i][0])/2)])];
    return profile(xs.map(x=>{const [b,t]=sample(outline,x),z=vehicleFrontZ(x,(b+t)/2,soul)+offset,a=side*x;
      return [z,[[a-0.002,b],[a+0.002,b],[a+0.002,t],[a-0.002,t]]];}).sort((a,b)=>a[0]-b[0]),color);
  };
  const oval=(side,x,y,rx,ry,color,offset)=>patch(side,Array.from({length:11},(_,i)=>{
    const dx=rx*(-0.985+1.97*i/10),r=ry*Math.sqrt(1-(dx/rx)**2);return [x+dx,y-r,y+r];
  }),color,offset);
  replace(1,symmetric([[0,0.168,0.445],[0.36,0.18,0.453],[0.44,0.21,0.432],[0.47,0.277,0.389]],body,0.003));
  replace(26,symmetric(soul?[[0,0.225,0.382],[0.25,0.225,0.38],[0.31,0.244,0.359],[0.33,0.28,0.325]]:
    [[0,0.212,0.413],[0.25,0.213,0.4],[0.32,0.238,0.363],[0.35,0.271,0.323]],dark,0.0045));
  if(soul){
    for(const [housing,lamp,fog,side] of [[27,28,29,-1],[31,32,33,1]]){
      replace(housing,patch(side,[[0.235,0.474,0.548],[0.26,0.463,0.561],[0.33,0.46,0.587],[0.412,0.483,0.612],[0.432,0.508,0.610]],dark,0.0035));
      replace(lamp,patch(side,[[0.242,0.482,0.540],[0.267,0.474,0.552],[0.33,0.471,0.577],[0.402,0.489,0.598],[0.42,0.512,0.600]],colored?'#9caeb6':'white',0.005));
      replace(`vehicle_projector_${side}`,oval(side,0.369,0.532,0.027,0.03,dark,0.006));
      replace(fog,oval(side,0.367,0.277,0.037,0.041,colored?'#a9b7ba':'white',0.0055));
    }
    replace('vehicle_tiger_surround',symmetric([[0,0.473,0.511],[0.055,0.465,0.517],[0.19,0.462,0.521],[0.245,0.479,0.508]],metal,0.004));
    replace('vehicle_upper_grille',symmetric([[0,0.48,0.505],[0.055,0.473,0.511],[0.187,0.469,0.514],[0.232,0.482,0.505]],dark,0.0055));
    // The central badge crosses X=0: use a symmetric rounded band instead.
    replace('vehicle_badge',symmetric([[0,0.564,0.588],[0.024,0.569,0.583],[0.03,0.575,0.577]],dark,0.005));
    replace(35,symmetric([[0,0.265,0.309],[0.104,0.265,0.309],[0.11,0.27,0.304]],white,0.006));
  }else{
    replace('vehicle_upper_grille',symmetric([[0,0.513,0.626],[0.14,0.512,0.627],[0.33,0.513,0.62],[0.43,0.532,0.60]],dark,0.0035));
    for(const [upper,lower,side] of [[27,28,-1],[30,31,1]]){
      replace(upper,patch(side,[[0.18,0.595,0.604],[0.29,0.592,0.603],[0.38,0.6,0.614],[0.426,0.605,0.615]],white,0.005));
      replace(lower,patch(side,[[0.18,0.53,0.539],[0.29,0.524,0.536],[0.38,0.522,0.537],[0.426,0.531,0.539]],white,0.005));
    }
    for(const [id,side] of [[6,-1],['vehicle_front_inlet_right',1]])replace(id,patch(side,[[0.345,0.298,0.436],[0.36,0.267,0.455],[0.40,0.27,0.455],[0.427,0.295,0.435],[0.437,0.326,0.4]],dark,0.005));
    for(const [id,shift] of [[33,0],[34,-0.034]]){
      const points=[[-0.077,0.554+shift],[0,0.592+shift],[0.077,0.554+shift],[0.077,0.564+shift],[0,0.602+shift],[-0.077,0.564+shift]];
      const z=vehicleFrontZ(0,0.585+shift,false)+0.0065;
      replace(id,profile([[z-0.0005,points],[z+0.0005,points]],metal));
    }
    replace('vehicle_skid_plate',symmetric([[0,0.169,0.20],[0.30,0.17,0.207],[0.37,0.198,0.221]],metal,0.0055));
    replace(37,symmetric([[0,0.36,0.403],[0.104,0.36,0.403],[0.11,0.366,0.397]],white,0.006));
  }
  return item;
}
