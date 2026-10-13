// Photo approximation for the unidentified thermostat; SNUDDA diameter from IKEA.
const part=(shape,x,y,z,w,h,d,color,extra={})=>({shape,x,y,z,w,h,d,color,edges:false,detail:'high',...extra});
const finish=parts=>parts.map((p,i)=>({...p,id:`p${String(i).padStart(3,'0')}`}));
export function snudda(colored=false){
  const wood=colored?'#d1b17b':'wood',top=colored?'#d9bc88':'wood',rubber=colored?'#454443':'dark';
  return {id:'ikea_snudda_39',name:{de:'IKEA SNUDDA Drehplatte · Ø39 cm'+(colored?' · Gummibaum':' · NeonPlan'),en:'IKEA SNUDDA rotating tray · Ø39 cm'+(colored?' · Rubberwood':' · NeonPlan')},size:[0.39,0.39,0.03],mount:'surface',surface:true,
    parts:finish([part('cyl',0,0,0,0.58,0.12,0.58,rubber),part('cyl',0,0.12,0,0.54,0.25,0.54,wood),part('cyl',0,0.37,0,0.64,0.13,0.64,wood),part('cyl',0,0.5,0,1,0.42,1,wood),part('cyl',0,0.92,0,0.994,0.08,0.994,top)]),symbol:[{shape:'circle',x:0,z:0,r:0.5}]};
}
export function photoThermostat(colored=false){
  const white=colored?'#e3e2d9':'white',grey=colored?'#a9aeae':'metal',dark=colored?'#343c39':'dark',lcd=colored?'#a9beb2':'dark';
  const parts=[part('rounded_box',0,0,0,1,1,0.86,white,{radius:0.09}),
    part('rounded_box',-0.385,0.04,0.43,0.23,0.92,0.12,white,{radius:0.08}),part('rounded_box',0.385,0.04,0.43,0.23,0.92,0.12,white,{radius:0.08}),
    part('box',0,0.52,0.46,0.61,0.35,0.055,dark),part('box',0,0.535,0.49,0.58,0.325,0.012,lcd),
    part('rounded_box',0,0.11,0.44,0.59,0.38,0.08,grey,{radius:0.025}),
    part('box',0,0.33,0.484,0.009,0.16,0.006,dark),part('box',0,0.258,0.484,0.59,0.008,0.006,dark),
    part('cyl',0,0.205,0.48,0.24,0.19,0.04,grey,{axis:'z'}),
    part('box',-0.15,0.414,0.49,0.075,0.01,0.008,white),part('box',0.15,0.414,0.49,0.075,0.01,0.008,white),part('box',0.15,0.387,0.49,0.012,0.064,0.008,white),
    part('torus',-0.04,0.265,0.5,0.08,0.073,0.005,dark,{thickness:0.09}),part('box',0.036,0.265,0.5,0.011,0.073,0.005,dark),
    part('polygon',0.067,0.300,0.5,0.06,0.038,0.005,dark,{axis:'z',points:[[-0.5,-0.5],[-0.3,-0.5],[0.5,0.4],[0.5,0.5]]}),
    part('polygon',0.067,0.265,0.5,0.06,0.038,0.005,dark,{axis:'z',points:[[-0.5,0.5],[-0.3,0.5],[0.5,-0.4],[0.5,-0.5]]})];
  for(const x of [-0.15,0,0.15])for(const y of [0.145,0.175])parts.push(part('cyl',x,y,0.484,0.012,0.01,0.012,white,{axis:'z'}));
  parts.push(part('torus',0,0.198,0.5,0.255,0.204,0.012,dark,{thickness:0.025}));
  return {id:'wall_thermostat_white_grey',name:{de:'Wandthermostat · Weiß/Grau'+(colored?'':' · NeonPlan'),en:'Wall thermostat · White/Grey'+(colored?'':' · NeonPlan')},size:[0.08,0.03,0.10],electric:true,mount:'wall',wall_y:1.35,parts:finish(parts),symbol:[{shape:'rect',x:0,z:0,w:1,d:1,fill:true}],
    bindings:[{id:'main',label:'Thermostat-Gerät / Entität',domains:['climate']},{id:'temperature',label:'Temperaturanzeige',domains:['sensor','input_number','number']}],
    displays:[{id:'temperature',kind:'sensor',binding:'temperature',position:[0,0.6975,0.503],size:[0.55,0.22],color:colored?'#24362d':'#37e0ff',background:colored?'#a9beb2':'#101827'}]};
}
export function addPhotoInventory(packs,mapping){
  for(const [category,factory,suffix] of [['kuechenzubehoer',snudda,'holz'],['haustechnik',photoThermostat,'wg']]){
    const neon=packs.find(p=>p.id===`local.v2.${category}`),color=packs.find(p=>p.id===`local.v2.${category}_farben`);
    if(!neon&&!color)continue;if(!neon||!color)throw new Error('Missing pack pair: '+category);
    const base=factory(false),variant=factory(true);variant.id=base.id+'__'+suffix;
    const set=(pack,item)=>{const i=pack.items.findIndex(old=>old.id===item.id);if(i<0)pack.items.push(item);else pack.items[i]={...pack.items[i],...item};};
    set(neon,base);set(color,variant);
    const n=`pack:${neon.id}:${base.id}`,c=`pack:${color.id}:${variant.id}`;
    mapping.color_to_neon[c]=n;mapping.neon_to_colors[n]=[c];
  }
  mapping.counts={...mapping.counts,color_items:Object.keys(mapping.color_to_neon).length,neon_items:Object.keys(mapping.neon_to_colors).length};
  return mapping;
}
