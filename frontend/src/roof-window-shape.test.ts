import assert from "node:assert/strict";
import test from "node:test";
import { emptyBuilding, newFloor, type RoofWindow, type Vec2 } from "./model.ts";
import { polygonContains, polygonSignedArea } from "./geometry/polygon.ts";
import { roofFaces, windowCorners, roofWindowRoom } from "./solar.ts";
import { subtractWindowPolygon, validWindowOutline, windowCoverPieces } from "./roof-window-shape.ts";
import { buildRoof } from "./viewer/roof.ts";
import { roofWindowSash } from "./viewer/roof-window.ts";
import { appendRoofSun } from "./viewer/roof-sun.ts";
import { GeoBuffer } from "./viewer/geo.ts";
import { Color } from "three";
import { exportFile, parseExport } from "./transfer.ts";

const shape: Vec2[] = [[0,0],[1,0],[1,0.4],[0.4,0.4],[0.4,1],[0,1]];
const window: RoofWindow = { id: "free", face: "main:top", u: 1, v: 1, w: 3, h: 3, points: shape, cover_style: "awning" };
const area = (polygons: number[][][]) => polygons.reduce((sum,p) => sum + Math.abs(polygonSignedArea(p)),0);
function fixture(type: "flat" | "gable" = "flat") {
  const b = emptyBuilding(), floor = newFloor("eg", "EG", 0);
  floor.rooms = [{ id:"r", name:"Room", area_id:null, points:[[0,0],[12,0],[12,10],[0,10]], floor_material:"wood" }];
  b.floors = [floor]; b.settings.roof = { type, pitch:35, overhang:0.4 };
  const face = roofFaces(b)[0];
  const w = { ...window, face:face.key };
  b.settings.roof.windows = [w];
  return { b, floor, face, w };
}

test("simple concave contours survive; invalid outlines are rejected", () => {
  assert.ok(validWindowOutline(shape));
  for (const points of [[[0,0],[1,1],[0,1],[1,0]], [[0,0],[1,0],[1,0],[0,1]], [[0,0],[2,0],[0,1]], [[0,0],[NaN,0],[0,1]]] as Vec2[][]) assert.ok(!validWindowOutline(points));
});
test("all four shading directions partition a concave window without bridging notches", () => {
  for (const direction of ["top","bottom","left","right"] as const) {
    const w = { ...window, cover_direction:direction };
    for (const k of [0,0.2,0.5,0.8,1]) {
      const cover=windowCoverPieces(w,k), open=windowCoverPieces(w,k,true);
      assert.ok(Math.abs(area(cover)+area(open)-0.64)<1e-8);
      for(const p of [...cover,...open]) for(const q of p) assert.ok(polygonContains(shape,q));
    }
    assert.equal(area(windowCoverPieces(w,0)),0);
    assert.equal(area(windowCoverPieces(w,1,true)),0);
    const covered=windowCoverPieces(w,0.5).flat();
    const axis=direction==="left"||direction==="right"?0:1;
    assert.ok(covered.every(p=>direction==="top"||direction==="right"?p[axis]>=0.5-1e-8:p[axis]<=0.5+1e-8));
  }
});
test("polygon subtraction preserves the notch and interpolated roof heights", () => {
  const surface = [[-1,-1,-2],[2,-1,1],[2,2,4],[-1,2,1]];
  const pieces = subtractWindowPolygon(surface,shape);
  assert.ok(Math.abs(area(pieces)-(9-0.64))<1e-8);
  assert.ok(pieces.some(p=>polygonContains(p as Vec2[],[0.75,0.75])));
  for(const p of pieces)for(const [u,v,y]of p)assert.ok(Math.abs(y-u-v)<1e-8);
  assert.deepEqual(subtractWindowPolygon(surface,[[8,8],[9,8],[8,9]]),[surface]);
});
test("freeform roof windows stay in their face, keep an interior room anchor and rotate rigidly", () => {
  const { b, face, w }=fixture();
  const corners=windowCorners(face,w)!;
  assert.equal(corners.length,6);
  assert.equal(roofWindowRoom(b,face,w)?.roomId,"r");
  assert.equal(windowCorners(face,{...w,u:100}),null);
  for(const hinge of ["top","middle","bottom"] as const){
    const moved=roofWindowSash(corners,face.n,face.es,hinge,Math.PI/6);
    for(let i=0;i<corners.length;i++){
      const j: number=(i+1)%corners.length;
      assert.ok(Math.abs(Math.hypot(...corners[i].map((v,k)=>v-corners[j][k]))-Math.hypot(...moved[i].map((v,k)=>v-moved[j][k])))<1e-8);
    }
  }
});
test("roof cut-outs remove the real polygon from both skins, not its bounding rectangle", () => {
  for(const type of ["flat","gable"] as const){
    const { b, face, w }=fixture(type), outline=windowCorners(face,w)!;
    const hole=outline.map(p=>[p[0]-face.n[0]*0.02,p[2]-face.n[2]*0.02] as Vec2);
    const roof=buildRoof(b)[0];
    let keptNotch=false;
    for(let i=0;i<roof.solid.p.length;i+=9){
      const triangle=[0,3,6].map(j=>[roof.solid.p[i+j],roof.solid.p[i+j+2]] as Vec2);
      const a=Math.abs(polygonSignedArea(triangle));
      if(a<1e-8)continue;
      assert.ok(Math.abs(area(subtractWindowPolygon(triangle,hole))-a)<1e-7);
      const notch=face.o.map((v,k)=>v+face.eu[k]*(w.u+w.w!*0.75)+face.es[k]*(w.v+w.h!*0.75));
      keptNotch ||= polygonContains(triangle,[notch[0],notch[2]]);
    }
    assert.ok(keptNotch,"roof must remain in the concave notch");
    assert.ok(roof.winRoof!.solid.p.every(Number.isFinite));
  }
});
test("freeform sunlight follows its cover and does not fill the concave notch or floor holes", () => {
  const {b,floor,w}=fixture();
  const render=(cover:number,holes:Vec2[][]=[])=>{const buf=new GeoBuffer();appendRoofSun(buf,b,floor,{elevation:90,azimuth:180},0,new Map([[w.id,{open:0,tilt:0,cover}]]),holes);return buf;};
  const full=render(0),half=render(0.5);
  const planArea=(buf:GeoBuffer)=>area(Array.from({length:buf.count},(_,i)=>[0,3,6].map(j=>[buf.p[i*9+j],buf.p[i*9+j+2]])));
  assert.ok(Math.abs(planArea(full)-9*0.64)<1e-6);
  assert.ok(planArea(half)>0&&planArea(half)<planArea(full));
  assert.equal(render(1).count,0);
  assert.equal(render(0,[floor.rooms[0].points]).count,0);
});

test("awning stays above the fixed glass while a roller follows the moving sash", () => {
  const {b,w}=fixture();
  w.cover_color="#b59664";
  const color=new Color(w.cover_color);
  const coords=(open:number)=>{
    const buf=buildRoof(b,new Map([[w.id,{open,tilt:0,cover:0.55}]]))[0].winRoof!.solid;
    return buf.p.filter((_,i)=>{const j=Math.floor(i/3)*3;return Math.abs(buf.c[j]-color.r)<1e-8&&Math.abs(buf.c[j+1]-color.g)<1e-8&&Math.abs(buf.c[j+2]-color.b)<1e-8;});
  };
  const shut=coords(0); assert.ok(shut.length>0); assert.deepEqual(coords(1),shut);
  w.cover_style="roller";
  assert.notDeepEqual(coords(1),coords(0));
});

test("freeform windows survive plan export/import without changing bindings or shape", () => {
  const {b,w}=fixture();Object.assign(w,{cover:"cover.test",window:"cover.motor",contact:"binary_sensor.test",float:true,hinge:"middle"});
  const restored=parseExport(JSON.stringify(exportFile(b,false))).settings.roof.windows![0];
  assert.deepEqual(restored,w);
});

test("a window in one custom roof does not cut through a higher section in the same part", () => {
  const {b,w}=fixture();
  b.settings.roof={type:"custom",pitch:0,overhang:0,sections:[2.8,4.8].map((y,i)=>({id:`roof${i}`,x0:0,z0:0,x1:12,z1:10,shape:"flat",axis:"x",base:y,eave_a:y,eave_b:y,pitch_a:0,pitch_b:0})),windows:[{...w,face:"roof0:top"}]};
  const withWindow=buildRoof(b)[0].solid;
  b.settings.roof.windows=[];
  const original=buildRoof(b)[0].solid;
  const upper=(buf:GeoBuffer)=>Array.from({length:buf.count},(_,i)=>buf.p.slice(i*9,i*9+9)).filter(p=>p[1]>4&&p[4]>4&&p[7]>4);
  assert.deepEqual(upper(withWindow),upper(original));
});

test("legacy rectangular flat-roof blinds remain on the original raised, tilted sash", () => {
  const {b,w,face}=fixture();w.points=null;w.cover_style="roller";w.cover_color="#b59664";
  const corners=windowCorners(face,w)!,color=new Color(w.cover_color),buf=buildRoof(b,new Map([[w.id,{open:0,tilt:0,cover:1}]]))[0].winRoof!.solid;
  const points=Array.from({length:buf.p.length/3},(_,i)=>i*3).filter(i=>Math.abs(buf.c[i]-color.r)<1e-8&&Math.abs(buf.c[i+1]-color.g)<1e-8).map(i=>buf.p.slice(i,i+3));
  assert.ok(points.length>0);
  const bottom=Math.min(...corners.map(p=>p[1]))-b.floors[0].elevation-b.floors[0].height+0.075;
  assert.ok(Math.abs(Math.min(...points.map(p=>p[1]))-bottom)<1e-8);
});
