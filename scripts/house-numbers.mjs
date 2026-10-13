// Wall-mounted metal glyphs, built from smooth stroke joins and polygon strokes.
const arc=(cx,cy,rx,ry,a,b,n=12)=>Array.from({length:n+1},(_,i)=>{const t=(a+(b-a)*i/n)*Math.PI/180;return [cx+rx*Math.cos(t),cy+ry*Math.sin(t)];});
const six=[[[0.78,0.9],[0.58,0.92],[0.24,0.66],[0.2,0.3]],arc(0.5,0.3,0.3,0.2,180,540)];
const glyphs={
  '0':[arc(0.5,0.5,0.32,0.4,0,360,24)],'1':[[[0.32,0.75],[0.52,0.9],[0.52,0.1]],[[0.32,0.1],[0.72,0.1]]],
  '2':[[...arc(0.5,0.7,0.32,0.22,160,0),[0.2,0.1],[0.84,0.1]]],
  '3':[arc(0.44,0.7,0.35,0.2,110,-110),arc(0.44,0.3,0.35,0.2,110,-110)],
  '4':[[[0.72,0.1],[0.72,0.92]],[[0.7,0.92],[0.18,0.4],[0.85,0.4]]],
  '5':[[[0.82,0.9],[0.2,0.9],[0.2,0.54],[0.5,0.54]],arc(0.47,0.3,0.34,0.24,75,-140)],
  '6':six,'7':[[[0.15,0.9],[0.85,0.9],[0.35,0.1]]],
  '8':[arc(0.5,0.72,0.28,0.2,0,360,14),arc(0.5,0.29,0.32,0.21,0,360,14)],
  '9':six.map(path=>path.map(([x,y])=>[1-x,1-y])),
  a:[arc(0.45,0.36,0.28,0.24,0,360),[[0.73,0.62],[0.73,0.13],[0.84,0.1]]],
  b:[[[0.22,0.1],[0.22,0.9]],arc(0.48,0.35,0.26,0.25,0,360)],
  c:[arc(0.51,0.4,0.32,0.3,50,310)]
};
export function houseNumber(character,colored=false){
  if(!glyphs[character])throw new Error('Unsupported house number');
  const W=0.09,H=0.15,D=0.01,r=0.0045,color=colored?'#282b2d':'metal',parts=[];
  for(const path of glyphs[character]){
    for(let i=1;i<path.length;i++){
      const a=[(path[i-1][0]-0.5)*W,path[i-1][1]*H],b=[(path[i][0]-0.5)*W,path[i][1]*H];
      const dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);if(len<1e-9)continue;
      const nx=-dy*r/len,ny=dx*r/len,poly=[[a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny],[b[0]-nx,b[1]-ny],[a[0]-nx,a[1]-ny]];
      const xs=poly.map(p=>p[0]),ys=poly.map(p=>p[1]),x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);
      const w=x1-x0,h=y1-y0,x=(x0+x1)/2,y=(y0+y1)/2,clamp=v=>Math.max(-0.5,Math.min(0.5,v));
      parts.push({shape:'polygon',axis:'z',x:x/W,y:y0/H,z:0,w:w/W,h:h/H,d:1,color,edges:false,points:poly.map(p=>[clamp((p[0]-x)/w),clamp((p[1]-y)/h)])});
    }
    for(const [x,y] of path)parts.push({shape:'cyl',axis:'z',x:x-0.5,y:y-r/H,z:0,w:2*r/W,h:2*r/H,d:1,color,edges:false});
  }
  return {id:'house_number_'+character,name:{de:'Hausnummer '+character+(colored?' · Schwarz':' · NeonPlan'),en:'House number '+character+(colored?' · Black':' · NeonPlan')},size:[W,D,H],mount:'wall',wall_y:1.7,parts:parts.map((p,i)=>({...p,id:`p${String(i).padStart(3,'0')}`})),symbol:[{shape:'rect',x:0,z:0,w:1,d:1}]};
}
export function addHouseNumbers(packs,mapping){
  const n=packs.find(p=>p.id==='local.v2.tueren_fenster'),c=packs.find(p=>p.id==='local.v2.tueren_fenster_farben');
  if(!n&&!c)return;if(!n||!c)throw new Error('Missing door/window pack pair');
  for(const char of '0123456789abc'){
    const base=houseNumber(char),variant=houseNumber(char,true);variant.id=base.id+'__schwarz';
    for(const [pack,item] of [[n,base],[c,variant]]){const i=pack.items.findIndex(p=>p.id===item.id);if(i<0)pack.items.push(item);else pack.items[i]={...pack.items[i],...item};}
    const nt=`pack:${n.id}:${base.id}`,ct=`pack:${c.id}:${variant.id}`;mapping.color_to_neon[ct]=nt;mapping.neon_to_colors[nt]=[ct];
  }
  mapping.counts={...mapping.counts,color_items:Object.keys(mapping.color_to_neon).length,neon_items:Object.keys(mapping.neon_to_colors).length};
}
