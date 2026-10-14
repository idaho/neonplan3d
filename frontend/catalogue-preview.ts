// Offline catalogue only: use the actual pack renderer, all visible parts in their
// closed/neutral pose, and the normal display fallback. Never send HA services.
import { Box3, Color, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, OrthographicCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { newFloor, type Furniture } from './src/model.ts';
import { setPacks, setProductColors, type FurniturePack } from './src/packs.ts';
import { pushFurniture, pushPackLamp } from './src/viewer/furniture.ts';
import { CustomPackLayer } from './src/viewer/custom-pack-layer.ts';
import { GeoBuffer, LineBuffer } from './src/viewer/geo.ts';
import type { HomeAssistant } from './src/types.ts';

let renderer:WebGLRenderer|null=null;
export function cataloguePreview(source:FurniturePack,id:string,size=480,view='front'){
  const original=source.items.find(i=>i.id===id);if(!original)throw new Error('Missing item '+id);
  const item=structuredClone(original);
  // Closed moving parts must not disappear from thumbnails. Status is unknown,
  // so the original colour/visibility wins. No live/historical state is invented.
  item.motions=[];item.spots=[];delete item.product;
  for(const p of item.parts)delete p.status;
  setPacks([{...source,items:[item]}]);setProductColors(true);
  const f:Furniture={id:'catalogue',type:`pack:${source.id}:${id}`,x:0,z:0,mount_y:0,w:item.size[0],d:item.size[1],h:item.size[2],rotation:0,variant:null};
  const floor=newFloor('catalogue','catalogue',0);floor.furniture=[f];
  const buf=new GeoBuffer(),lines=new LineBuffer(),scene=new Scene();
  if(item.light)pushPackLamp(buf,item,f,0,0xffb547);
  else pushFurniture(buf,lines,new GeoBuffer(),f,0);
  if(!buf.count)throw new Error('Empty visible geometry '+source.id+':'+id);
  const material=new MeshBasicMaterial({vertexColors:true,color:new Color(1.6,1.6,1.6)});
  const mesh=new Mesh(buf.geometry(),material);
  const edges=new LineSegments(lines.geometry(),new LineBasicMaterial({vertexColors:true,color:new Color(2.2,2.2,2.2)}));
  scene.add(mesh,edges);
  const layer=new CustomPackLayer(floor,material,()=>{});
  layer.update({states:{},config:{time_zone:'Europe/Berlin'}} as unknown as HomeAssistant,{time:NaN,historical:true,playing:false,seek:0},false);
  scene.add(layer.group);
  try{
    const box=new Box3().setFromObject(scene),center=box.getCenter(new Vector3());
    if(![...box.min.toArray(),...box.max.toArray()].every(Number.isFinite))throw new Error('Invalid geometry bounds '+id);
    const camera=new OrthographicCamera(-1,1,1,-1,0.01,100);
    const direction=view==='side'?new Vector3(1,0.06,0):view==='headon'?new Vector3(0,0.04,1):view==='rear'?new Vector3(0.9,0.45,-1.3):new Vector3(0.9,0.75,1.3);
    camera.position.copy(center).add(direction.normalize().multiplyScalar(20));camera.lookAt(center);camera.updateMatrixWorld();
    let r=0.05;
    for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
      const p=new Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);r=Math.max(r,Math.abs(p.x),Math.abs(p.y));
    }
    camera.left=-r*1.12;camera.right=r*1.12;camera.top=r*1.12;camera.bottom=-r*1.12;camera.updateProjectionMatrix();
    renderer??=new WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
    renderer.setPixelRatio(2);renderer.setSize(size,size,false);renderer.setClearColor(0x000000,0);renderer.render(scene,camera);
    // Fail instead of silently publishing a blank image.
    const gl=renderer.getContext(),width=renderer.domElement.width,height=renderer.domElement.height,pixels=new Uint8Array(width*height*4);gl.readPixels(0,0,width,height,gl.RGBA,gl.UNSIGNED_BYTE,pixels);
    let opaque=0;for(let i=3;i<pixels.length;i+=4)if(pixels[i])opaque++;
    if(opaque<8)throw new Error('Blank preview '+source.id+':'+id);
    return {url:renderer.domElement.toDataURL('image/png'),triangles:buf.count,opaquePixels:opaque};
  }finally{
    layer.dispose();mesh.geometry.dispose();material.dispose();edges.geometry.dispose();(edges.material as LineBasicMaterial).dispose();
    renderer?.renderLists.dispose();
  }
}
