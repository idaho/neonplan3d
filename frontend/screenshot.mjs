// Serves the repository and takes screenshots of the preview page with a local Chrome/Edge.
// Usage (from frontend/): node screenshot.mjs [out-dir]

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? join(root, "preview", "screenshots"));
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });

// puts the furniture of the local starter pack (private/packs) into the living room and kitchen
const PACK_SCRIPT = `
  const f = e._doc.floors[0];
  const put = (item, x, z, rotation = 0) => { e._floorId = f.id; e.addFurniture('pack:mastershort.starter:' + item); const m = e._doc.floors[0].furniture.at(-1); Object.assign(m, { x, z, rotation }); };
  e._doc.floors[0].furniture = e._doc.floors[0].furniture.filter((m) => !['sofa', 'armchair', 'rug', 'coffee_table', 'table', 'chair'].includes(m.type));
  put('lounge_chair', 1.2, 2.4, 90);
  put('fireplace', 0.45, 3.8, 90);
  put('scandi_sideboard', 3.4, 4.3, 180);
  put('gaming_desk', 4.6, 1.2, 0);
  put('dining_set', 8.0, 3.0, 0);
  put('side_by_side_fridge', 9.4, 0.5, 0);
  e.setDoc(structuredClone(e._doc));
`;

// switches the lab on (cleared again before every shot) and opens the editor's last section, the opt-in reports
const DIAG_SCRIPT = "localStorage.setItem('neonplan3d.lab', '1'); e.requestUpdate(); setTimeout(() => { const d = [...e.renderRoot.querySelectorAll('details')].at(-1); d.open = true; d.scrollIntoView(); }, 300); setTimeout(() => e.changeDiagnostics('on'), 700);";

// a farmhouse like a user's: a two-storey house, a long barn whose front slope sweeps down lower
// (catslide), and a lean-to with a pent roof in front of the barn; roof sections at their own heights
const ATTIC_SCRIPT = "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ base: 3.7, eave_a: 3.7, eave_b: 3.7, pitch_a: 40, pitch_b: 40 }); }, 600);";
const DORMER_SCRIPT = ATTIC_SCRIPT + " setTimeout(() => { e.addDormer('b'); e.addDormer('a'); }, 900);";
const CROSS_SCRIPT = ATTIC_SCRIPT + " setTimeout(() => { e.addDormer('a'); const d = e._doc.settings.roof.sections.find((s) => s.dormer); e._roofId = d.id; const cx = (d.x0 + d.x1) / 2; const cz = (d.z0 + d.z1) / 2; const deep = Math.abs(d.z1 - d.z0) > Math.abs(d.x1 - d.x0); const patch = deep ? { x0: cx - 1.7, x1: cx + 1.7 } : { z0: cz - 1.7, z1: cz + 1.7 }; e.updateRoofSection({ ...patch, eave_a: 3.7, eave_b: 3.7, base: 3.7 }); }, 900);";
const FARM_SCRIPT = `
  const b = structuredClone(e._doc);
  const eg = b.floors[0];
  const og = b.floors[1];
  const R = (id, name, x0, z0, x1, z1, mat) => ({ id, name, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: mat ?? "wood" });
  for (const f of [eg, og]) Object.assign(f, { openings: [], furniture: [], placements: [], outdoor: [], walls: [], background: null });
  eg.height = 2.6;
  eg.rooms = [R("wohnen", "Wohnen", 0, 0, 6, 9), R("kueche", "Küche", 6, 0, 10, 9, "tiles"), R("scheune", "Scheune", -16, 0, 0, 11, "concrete"), R("schuppen", "Schuppen", -16, -3, -6, 0, "concrete")];
  eg.outdoor = [{ id: "hof", type: "driveway", points: [[-20, -8], [14, -8], [14, -3.3], [-20, -3.3]] }, { id: "rasen", type: "lawn", points: [[-20, -3.3], [14, -3.3], [14, 16], [-20, 16]] }];
  og.elevation = 2.75;
  og.height = 2.5;
  og.rooms = [R("schlafen", "Schlafen", 0, 0, 5, 9), R("kind", "Kind", 5, 0, 10, 9)];
  b.settings.roof = { type: "custom", pitch: 42, overhang: 0.4, sections: [
    { id: "haus", x0: -0.25, z0: -0.25, x1: 10.25, z1: 9.25, shape: "gable", axis: "x", eave_a: 5.25, eave_b: 5.25, pitch_a: 45, pitch_b: 45, base: 5.25, overhang: null },
    { id: "scheune", x0: -16.25, z0: -0.25, x1: -0.25, z1: 11.25, shape: "gable", axis: "x", eave_a: 2.3, eave_b: 3.0, pitch_a: 40, pitch_b: 40, base: 2.6, overhang: null },
    { id: "schuppen", x0: -16.25, z0: -3.25, x1: -6, z1: -0.25, shape: "pent", axis: "x", eave_a: 2.0, eave_b: 2.0, pitch_a: 6, pitch_b: 6, base: 2.4, overhang: null },
  ] };
  e.setDoc(b);
`;

// kitchen with pack furniture on the island, pendant lights from a pack and a wallbox (local packs)
const PACK_MOUNT_SCRIPT = `
  const f = e._doc.floors[0];
  e._floorId = f.id;
  const put = (type, x, z, rotation = 0, entity = null) => { e.addFurniture(type); Object.assign(e._doc.floors[0].furniture.at(-1), { x, z, rotation, entity }); };
  put('pack:mastershort.kitchen:island_bar', 8.0, 3.0, 0);
  put('pack:mastershort.kitchen:coffee_machine', 7.6, 3.1, 0);
  put('pack:mastershort.kitchen:microwave', 8.6, 2.9, 0);
  put('pack:mastershort.kitchen:pendant_trio', 8.0, 3.0, 0, 'light.kueche_links');
  put('pack:mastershort.smarthome:wallbox', 9.9, 2.0, 270);
  put('pack:mastershort.living:arc_lamp', 1.5, 3.0, 90, 'light.stehlampe');
  e.setDoc(structuredClone(e._doc));
`;

const ROOF_FREEFORM_SCRIPT = `
  const b = structuredClone(e._doc), f = b.floors[0];
  Object.assign(f, { elevation: 0, height: 2.8, openings: [], furniture: [], placements: [], outdoor: [], walls: [], background: null,
    rooms: [{ id: 'terrace', name: 'Terrassenglasdach', area_id: null, floor_material: 'tiles', points: [[0,0],[8,0],[8,6],[0,6]] }] });
  b.floors = [f];
  b.settings.pets = { on: false, list: [] };
  b.settings.roof = { type: 'custom', pitch: 10, overhang: 0, sections: [{ id: 'canopy', x0: 0, z0: 0, x1: 8, z1: 6, shape: 'pent', axis: 'x', base: 2.8, eave_a: 2.8, eave_b: 3.86, pitch_a: 10, pitch_b: 10, open: true }],
    windows: [{ id: 'free', name: 'Terrassenmarkise', face: 'canopy:a', u: 1, v: 1, w: 4, h: 3, points: [[0,0],[1,0],[1,0.4],[0.4,0.4],[0.4,1],[0,1]], cover_style: 'awning', cover_direction: 'left', cover_color: '#b59664', cover: 'cover.terrasse', contact: 'binary_sensor.terrasse', float: true }] };
  e.setDoc(b); e._floorId = f.id; e._tool = 'roof'; e._roofWinId = 'free'; e._roofId = null; e.fit();
`;

const shots = [
  { name: "editor-roof-freeform", query: "", width: 1440, height: 1100, editor: true, mockPrivatePacks: true, editorScript: ROOF_FREEFORM_SCRIPT, roofWindowExercise: true },
  { name: "editor-roof-freeform-tablet", query: "", width: 1000, height: 1100, editor: true, mockPrivatePacks: true, editorScript: ROOF_FREEFORM_SCRIPT, roofWindowExercise: true },
  { name: "view-roof-freeform-awning", query: "", width: 1280, height: 900, editor: true, mockPrivatePacks: true, editorScript: ROOF_FREEFORM_SCRIPT, then3d: true, camera: { theta: 0.4, phi: 0.65, radius: 12, target: { x: 4, y: 1.8, z: 3 } }, roofAwning: true },
  { name: "view-house", query: "?fp3d_stats", width: 1280, height: 800 },
  { name: "promo-house", query: "", width: 1280, height: 800 },
  { name: "view-stacked", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-floor-og", query: "", width: 1280, height: 800, click: "Obergeschoss" },
  { name: "view-floor-eg", query: "?fp3d_stats", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-room", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche" },
  { name: "view-garage", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-hall", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Flur" },
  { name: "view-tablet-level", query: "?fp3d_stats", width: 1280, height: 800, click: "Tablet", then: "Erdgeschoss" },
  { name: "view-tap-lamp", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche", tapAt: [688, 395] },
  { name: "view-high", query: "", width: 1280, height: 800, click: "Hoch", then: "Bad" },
  { name: "view-garden", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-sun", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schlafzimmer" },
  { name: "view-heat", query: "", width: 1280, height: 800, click: "Temp.", then: "Erdgeschoss" },
  { name: "view-blueprint", query: "", width: 1280, height: 800, click: "Blueprint", then: "Erdgeschoss" },
  { name: "view-day", query: "", width: 1280, height: 800, click: "Tag", then: "Erdgeschoss" },
  { name: "view-day-house", query: "", width: 1280, height: 800, click: "Tag" },
  { name: "view-cut", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schnitt" },
  { name: "view-room-panel", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "tablet-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "editor", query: "", width: 1280, height: 800, editor: true },
  { name: "editor-room", query: "", width: 1280, height: 800, editor: true, select: "Wohnzimmer" },
  { name: "editor-devices", query: "", width: 1280, height: 800, editor: true, select: "Küche", scrollSide: true },
  { name: "editor-opening", query: "", width: 1280, height: 800, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" } },
  { name: "editor-camera-wedge", query: "", width: 1280, height: 800, editor: true, editorState: { _floorId: "eg", _deviceId: "camera.wohnzimmer", _roomId: "wohnen", _tool: "select" } },
  { name: "editor-picture-rules", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((m) => m.pictures); e._roomId = 'wohnen'; e._furnitureId = f.id; e.renderRoot.querySelector('aside').scrollTop = 900;" },
  // the opt-in reports (unreleased: only with the lab switch) and the exact JSON they send
  { name: "editor-diagnostics", query: "", width: 1280, height: 1000, editor: true, editorScript: DIAG_SCRIPT, afterWait: 800 },
  { name: "editor-diagnostics-data", query: "", width: 1280, height: 1000, editor: true, editorScript: DIAG_SCRIPT + " setTimeout(() => (e._diagView = true), 1100);", afterWait: 1200 },
  { name: "editor-library", query: "", width: 1280, height: 900, editor: true, editorScript: "e._roomId = 'wohnen'; e._furnQuery = 'sofa';" },
  { name: "editor-split-3d", query: "", width: 1400, height: 900, editor: true, editorScript: "e._split = true; e._furnitureId = 'm2';" },
  { name: "editor-free-wall", query: "", width: 1280, height: 800, editor: true, editorState: { _floorId: "og", _tool: "select" } },
  { name: "editor-room-wall-heights", query: "", width: 1280, height: 1000, editor: true, editorState: { _floorId: "og", _tool: "select", _roomId: "kind", _edgeHi: 1 }, scrollSide: true },
  { name: "view-free-wall", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Gästezimmer" },
  { name: "editor-free-wall-door", query: "", width: 1280, height: 800, editor: true, editorScript: "const o = e._doc.floors[0].openings.find((x) => x.wall); e._floorId = e._doc.floors[0].id; e._tool = 'select'; e._openingId = o.id;" },
  { name: "view-free-wall-door", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "editor-garage-devices", query: "", width: 1280, height: 1000, editor: true, editorState: { _roomId: "garage" }, scrollSide: true },
  { name: "view-marker-show", query: "", width: 1280, height: 800, editor: true, editorScript: "const p = e._doc.floors[0].placements; p.find((x) => x.entity_id === 'media_player.fernseher').marker = 'no_power'; p.find((x) => x.entity_id === 'climate.wohnzimmer').marker = 'never'; e.setDoc(structuredClone(e._doc));", then3d: "Wohnzimmer" },
  { name: "editor-marker-show", query: "", width: 1280, height: 900, editor: true, editorState: { _deviceId: "media_player.fernseher", _roomId: "wohnen" } },
  { name: "view-mark-closed", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.floors[0].openings.filter((o) => o.type === 'door').forEach((o) => (o.mark = 'closed')); e.setDoc(structuredClone(e._doc));", then3d: "Flur" },
  { name: "view-mark-default", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Flur" },
  { name: "editor-fix-menu", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((m) => m.id === 'm2'); f.locked = true; e._doc.settings.lock_plan = true; e.setDoc(structuredClone(e._doc)); e._roomId = 'wohnen'; e._furnitureId = 'm2'; const [x, y] = e.toScreen([f.x + 0.6, f.z]); e._ctx = { x, y, kind: 'furniture', id: 'm2' };" },
  { name: "editor-plan-locked", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.settings.lock_plan = true; e._doc.floors[0].placements.find((p) => p.entity_id === 'climate.wohnzimmer').locked = true; e.setDoc(structuredClone(e._doc)); e._roomId = 'garage'; const [x, y] = e.toScreen([11, 3]); e._ctx = { x, y, kind: 'room', id: 'garage' };" },
  { name: "view-dryer-on-washer", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0]; const w = f.furniture.find((m) => m.type === 'washer'); f.furniture.push({ ...structuredClone(w), id: 'dryer_demo', type: 'dryer', entity: null, power: null, mount_y: w.h }); e.setDoc(structuredClone(e._doc));", then3d: "Bad" },
  { name: "editor-device-extras", query: "", width: 1280, height: 1500, editor: true, editorScript: "e._roomId = 'garage'; e._devSource = 'other'; e._deviceQuery = 'licht'; const r = e._doc.floors[0].rooms.find((x) => x.id === 'garage'); r.climate = { temperature: null, humidity: 'none', co2: null }; e.setDoc(structuredClone(e._doc));", scrollSide: true },
  { name: "view-wall-cabinet-low", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0]; const k = f.furniture.find((m) => m.type === 'kitchen_wall'); if (k) { f.furniture.push({ ...structuredClone(k), id: 'kw_low', x: k.x + k.w + 0.1, mount_y: 1.0 }); } e.setDoc(structuredClone(e._doc));", then3d: "Küche" },
  { name: "editor-roof-tool", query: "", width: 1500, height: 900, wait: 0, editor: true, editorScript: FARM_SCRIPT + "e._floorId = e._doc.floors[0].id; setTimeout(() => { e._tool = 'roof'; e._roofId = 'scheune'; e.updateRoofSection({ locked: true }); }, 1500); setTimeout(() => e.fit(), 2600);", afterWait: 3500 },
  { name: "editor-solar", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._solarId = 'pv_sued'; setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-solar-pattern", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._solarId = 'pv_sued'; e.updateSolar({ layout: [4, 4, 3], rows: 3, cols: 4, align: 'center', skip: ['0:1'], name: 'Strang 1 Süd' }); e._solarPick = true; setTimeout(() => e.fit(), 300);", afterWait: 1800 },
  { name: "editor-solar-string", query: "", width: 1500, height: 1100, editor: true, editorScript: "e._tool = 'energy'; e._solarId = 'pv_sued'; e.setSolarString('new'); setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-solar-garden", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e.addGroundField(); setTimeout(() => e.fit(), 400);", afterWait: 2000 },
  { name: "editor-roof-window", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'roof'; e._roofWinId = 'dachfenster'; setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-solar-wall", query: "", width: 1500, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e.addWallField(); setTimeout(() => e.updateSolar({ tilt: 35, rows: 1 }), 300); setTimeout(() => e.fit(), 700);", afterWait: 2200 },
  { name: "editor-energy-devices", query: "", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; setTimeout(() => e.fit(), 300);", afterWait: 1500 },
  { name: "editor-energy-add", query: "", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; setTimeout(() => e.addEnergyDevice('wallbox'), 500);", afterWait: 1800 },
  { name: "editor-solar-list", query: "", width: 1280, height: 900, editor: true, editorScript: "e._tool = 'energy'; e._solarId = null; setTimeout(() => e.fit(), 300);" },
  // Energie Pro: the cables from the roof to the inverter, battery, meter, wallbox and grid with their moving dots
  { name: "view-flows", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.6, phi: 1.15, radius: 22 } },
  { name: "view-holo-plants", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.15, radius: 24 } },
  { name: "view-holo-free", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => (d.settings.roof.hologram = { field: null, size: 1, right: 0, up: 0, place: 'free', x: 9, z: -2, height: 3.5 })); e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.2, radius: 24 } },
  { name: "editor-holo-free", query: "", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; e.change((d) => (d.settings.roof.hologram = { field: null, size: 1, right: 0, up: 0, place: 'free', x: 9, z: -2, height: 3.5 })); setTimeout(() => e.fit(), 300);", afterWait: 1500, scrollSide: true },
  { name: "view-flows-garage", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 3.6, phi: 1.2, radius: 16 } },
  { name: "view-house-fr", query: "?lang=fr", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-house-es", query: "?lang=es", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-house-nl", query: "?lang=nl", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-house-it", query: "?lang=it", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-open-plan", query: "", width: 1280, height: 800, editor: true, editorScript: "const r = e._doc.floors[0].rooms.find((x) => x.id === 'kueche'); r.wall_heights = r.points.map(() => 0); e.setDoc(structuredClone(e._doc));", then3d: "Erdgeschoss" },
  { name: "view-start-view-floor", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => (d.settings.start_view = { theta: 2.4, phi: 1.0, radius: 26 }));", then3d: "Erdgeschoss" },
  { name: "view-start-view", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => (d.settings.start_view = { theta: 2.4, phi: 1.0, radius: 26 }));", then3d: "Alle Etagen" },
  { name: "editor-cables", query: "?flows", width: 1500, height: 1000, editor: true, editorScript: "e._tool = 'energy'; e._floorId = 'eg'; e._solarId = null; setTimeout(() => { e.layCable('inv:' + e._doc.floors[0].furniture.find((m) => m.type === 'inverter').id); e.fit(); }, 400);", afterWait: 1800, scrollSide: true },
  { name: "view-solar-live", query: "?flows&pv=5400", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 1.1, phi: 0.9, radius: 26 } },
  { name: "view-flows-eg", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", camera: { theta: 0.25, phi: 1.2, radius: 11 } },
  { name: "view-flows-room", query: "?flows", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-flows-back", query: "?flows", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.1, radius: 18 } },
  { name: "editor-solar-flat", query: "", width: 1500, height: 900, editor: true, editorScript: "e.change((d) => { d.settings.roof.type = 'flat'; d.settings.roof.solar = []; }); setTimeout(() => { e._tool = 'energy'; e.addSolarField(); }, 500); setTimeout(() => e.fit(), 900);", afterWait: 2000 },
  { name: "editor-roof-overview", query: "", width: 1280, height: 900, editor: true, editorScript: FARM_SCRIPT + "e._floorId = e._doc.floors[0].id; e._tool = 'roof'; e._roofId = null; setTimeout(() => e.fit(), 300);" },
  { name: "view-roof-proposal", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT + "setTimeout(() => { e._doc.settings.roof.sections = []; e.useRoofSections(); }, 300);", then3d: "Alle Etagen", then3dAlso: "Gestapelt", camera: { theta: 2.3, phi: 0.95, radius: 52 } },
  { name: "editor-split-wall", query: "", width: 1400, height: 900, editor: true, editorScript: "const r = e._doc.floors[0].rooms.find((x) => x.id === 'wohnen'); r.wall_splits = [[2.2], null, null, null]; r.wall_heights = [[1.1, null], null, null, null]; e.setDoc(structuredClone(e._doc)); e._roomId = 'wohnen'; e._tool = 'select'; setTimeout(() => e.renderRoot.querySelector('aside')?.scrollTo(0, 500), 400);", afterWait: 1200 },
  { name: "view-flat-outline", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.floors = e._doc.floors.filter((f) => f.id === 'eg'); e._doc.settings.roof.sections = []; e.setDoc(structuredClone(e._doc)); e._floorId = 'eg'; setTimeout(() => { e.useRoofSections(); setTimeout(() => { const sec = e._doc.settings.roof.sections[0]; e._tool = 'roof'; e._roofId = sec.id; e.updateRoofSection({ shape: 'flat', eave_a: 2.95, eave_b: 2.95, base: 2.95 }); e.takeRoofOutline(); }, 500); }, 300);", afterWait: 2000, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.8, phi: 1.0, radius: 24 } },
  { name: "editor-flat-outline", query: "", width: 1400, height: 900, editor: true, editorScript: "e._doc.floors = e._doc.floors.filter((f) => f.id === 'eg'); e._doc.settings.roof.sections = []; e.setDoc(structuredClone(e._doc)); e._floorId = 'eg'; setTimeout(() => { e.useRoofSections(); setTimeout(() => { const sec = e._doc.settings.roof.sections[0]; e._tool = 'roof'; e._roofId = sec.id; e.updateRoofSection({ shape: 'flat', eave_a: 2.95, eave_b: 2.95, base: 2.95 }); e.takeRoofOutline(); setTimeout(() => e.fit(), 300); }, 500); }, 300);", afterWait: 2500 },
  { name: "view-roof-halfhip", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'halfhip', pitch_a: 42, pitch_b: 42 }); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-roof-pyramid", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'pyramid', pitch_a: 35, pitch_b: 35 }); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-roof-mansard", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'mansard', pitch_a: 70, pitch_b: 70 }); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-roof-parapet", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const secs = e._doc.settings.roof.sections; const big = [...secs].sort((p, q) => Math.abs((q.x1 - q.x0) * (q.z1 - q.z0)) - Math.abs((p.x1 - p.x0) * (p.z1 - p.z0)))[0]; e._tool = 'roof'; e._roofId = big.id; e.updateRoofSection({ shape: 'parapet', eave_a: 5.6, eave_b: 5.6 }); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.9, phi: 1.0, radius: 26 } },
  { name: "view-dormer-flat", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT + " setTimeout(() => { e.addDormer('b'); const d = e._doc.settings.roof.sections.find((s) => s.dormer); e._roofId = d.id; const deep = Math.abs(d.z1 - d.z0) > Math.abs(d.x1 - d.x0); const cx = (d.x0 + d.x1) / 2; const cz = (d.z0 + d.z1) / 2; e.updateRoofSection({ shape: 'flat', base: 5.6, ...(deep ? { x0: cx - 1.6, x1: cx + 1.6 } : { z0: cz - 1.6, z1: cz + 1.6 }) }); }, 900);", afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.75, phi: 1.05, radius: 24 } },
  { name: "view-dormer", query: "", width: 1280, height: 800, editor: true, editorScript: DORMER_SCRIPT, afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.75, phi: 1.05, radius: 24 } },
  { name: "view-dormer-floor", query: "", width: 1280, height: 800, editor: true, editorScript: DORMER_SCRIPT, afterWait: 2200, then3d: "Obergeschoss", camera: { theta: 0.5, phi: 1.0, radius: 14 } },
  { name: "editor-dormer", query: "", width: 1400, height: 900, editor: true, editorScript: DORMER_SCRIPT + " setTimeout(() => e.fit(), 1300);", afterWait: 2600 },
  { name: "view-cross-gable", query: "", width: 1280, height: 800, editor: true, editorScript: CROSS_SCRIPT, afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt", "Dach bleibt"], camera: { theta: 3.9, phi: 1.15, radius: 17 } },
  { name: "view-cross-gable-b", query: "", width: 1280, height: 800, editor: true, editorScript: CROSS_SCRIPT, afterWait: 2200, then3d: "Alle Etagen", then3dAlso: ["Gestapelt", "Dach bleibt"], camera: { theta: 2.6, phi: 1.2, radius: 15 } },
  { name: "editor-cross-gable", query: "", width: 1400, height: 900, editor: true, editorScript: CROSS_SCRIPT + " setTimeout(() => e.fit(), 1400);", afterWait: 2600 },
  { name: "view-camera-detect", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "view-camera-wall-big", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Kameras", viewScript: "setTimeout(() => (v._wallBig = 'camera.wohnzimmer'), 400);", wait: 1500 },
  { name: "view-camera-wall", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Kameras" },
  { name: "view-attic", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT, afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.7, phi: 1.05, radius: 24 } },
  // ceiling lamps under the roof slope hang from the roof's underside (#168): one near the eave, one near the ridge
  { name: "view-attic-lamps", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT + " setTimeout(() => { const og = e._doc.floors.find((f) => f.id === 'og'); const xs = og.rooms.flatMap((r) => r.points.map((q) => q[0])); const zs = og.rooms.flatMap((r) => r.points.map((q) => q[1])); const x = (Math.min(...xs) + Math.max(...xs)) / 2; const z0 = Math.min(...zs); const z1 = Math.max(...zs); og.furniture.push({ id: 'lx1', type: 'lamp_ceiling', x: x - 1, z: z0 + 0.8, w: 0.4, d: 0.4, h: 0.12, rotation: 0, variant: null }, { id: 'lx2', type: 'lamp_pendant', x: x + 1, z: z0 + 1.2, w: 0.35, d: 0.35, h: 0.6, rotation: 0, variant: null }, { id: 'lx3', type: 'lamp_ceiling', x, z: (z0 + z1) / 2, w: 0.4, d: 0.4, h: 0.12, rotation: 0, variant: null }); e.setDoc(structuredClone(e._doc)); }, 1300);", afterWait: 2500, then3d: "Obergeschoss", camera: { theta: 1.6, phi: 1.4, radius: 12 } },
  // outdoor areas as a free shape (#97): the tool's shape switch and a finished bed drawn corner by corner
  { name: "editor-outdoor-free", query: "", width: 1400, height: 900, editor: true, editorScript: "e._tool = 'outdoor'; e._outdoorFree = true; e._draft = [[2, 12], [6, 11.2], [9, 12.5], [8.5, 15], [4, 15.5], [1.5, 14.2]]; e._cursor = [2.4, 12.6]; e.fit();", afterWait: 1200 },
  { name: "view-outdoor-free", query: "", width: 1280, height: 800, editor: true, editorScript: "e._tool = 'outdoor'; e._outdoorFree = true; e._draft = [[2, 12], [6, 11.2], [9, 12.5], [8.5, 15], [4, 15.5], [1.5, 14.2]]; e.closeDraft(); e.updateOutdoor({ type: 'bed' });", afterWait: 1500, then3d: "Erdgeschoss", camera: { theta: 0.3, phi: 0.9, radius: 22 } },
  // feet and inches (#117): the room form, the plan's areas and a selected item's size in imperial
  { name: "editor-imperial", query: "?lang=en", width: 1400, height: 900, editor: true, editorScript: "e._doc.settings.units = 'imperial'; e.setDoc(structuredClone(e._doc)); e._roomId = 'wohnen';", afterWait: 1200 },
  // a floor opening across a room line is cut in both rooms (#353)
  { name: "view-hole-across", query: "", width: 1280, height: 800, editor: true, editorScript: "const og = e._doc.floors.find((f) => f.id === 'og'); const r = og.rooms[0]; const xs = r.points.map((q) => q[0]); const zs = r.points.map((q) => q[1]); const x1 = Math.max(...xs); const z = (Math.min(...zs) + Math.max(...zs)) / 2; og.furniture.push({ id: 'hx', type: 'stairwell', x: x1, z, w: 2.4, d: 1.4, h: 0.01, rotation: 0, variant: null }); e.setDoc(structuredClone(e._doc));", afterWait: 1500, then3d: "Obergeschoss", camera: { theta: 0.01, phi: 0.25, radius: 11 } },
  { name: "view-attic-floor", query: "", width: 1280, height: 800, editor: true, editorScript: ATTIC_SCRIPT, afterWait: 1500, then3d: "Obergeschoss", camera: { theta: 0.5, phi: 1.0, radius: 14 } },
  { name: "editor-attic", query: "", width: 1400, height: 900, editor: true, editorScript: ATTIC_SCRIPT + " setTimeout(() => { e._floorId = 'og'; e._tool = 'select'; e._roofId = null; e.fit(); }, 1200);", afterWait: 2500 },
  { name: "promo-roof-day", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT, then3d: "Alle Etagen", then3dAlso: ["Gestapelt", "Tag"], camera: { theta: 2.3, phi: 0.95, radius: 52 } },
  { name: "promo-parapet", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Kinderzimmer" },
  { name: "editor-outdoor-handles", query: "", width: 1280, height: 800, editor: true, editorScript: "const a = e._doc.floors[0].outdoor.find((x) => x.type === 'terrace'); e._tool = 'select'; e._outdoorId = a.id; e._roomId = null;" },
  { name: "view-canopy", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { e._tool = 'roof'; e.addRoofSection([1.5, -2.8], [6.2, -0.24]); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 3.9, phi: 1.1, radius: 24 } },
  { name: "view-canopy-apart", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { e._tool = 'roof'; e.addRoofSection([1.5, -2.8], [6.2, -0.24]); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Auseinander"], camera: { theta: 3.9, phi: 1.1, radius: 26 } },
  { name: "view-canopy-b", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { e._tool = 'roof'; e.addRoofSection([1.5, -2.8], [6.2, -0.24]); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 2.6, phi: 1.1, radius: 24 } },
  { name: "view-roof-garage-pent", query: "", width: 1280, height: 800, editor: true, editorScript: "e.useRoofSections(); setTimeout(() => { const g = e._doc.settings.roof.sections.find((s) => s.x0 > 9.5); e._tool = 'roof'; e._roofId = g.id; e.updateRoofSection({ shape: 'pent', axis: 'z', flip: true, pitch_a: 25, pitch_b: 25, eave_a: 2.6, eave_b: 2.6 }); }, 700);", afterWait: 1500, then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.6, phi: 1.15, radius: 24 } },
  { name: "view-roof-farmhouse-front", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT, then3d: "Alle Etagen", then3dAlso: "Gestapelt", camera: { theta: 2.3, phi: 0.95, radius: 52 } },
  { name: "view-roof-farmhouse", query: "", width: 1280, height: 800, editor: true, editorScript: FARM_SCRIPT, then3d: "Alle Etagen", then3dAlso: "Gestapelt" },
  // the state hint above "Power sensor" must not overlap it (customer mail 2026-10-09)
  { name: "editor-state-hint", query: "", width: 1280, height: 900, editor: true, editorScript: "const fl = e._doc.floors[0]; const f = fl.furniture.find((x) => ['stove', 'kitchen', 'dishwasher', 'washer', 'fridge', 'desk'].includes(x.type)); f.state_entity = 'switch.kaffeemaschine'; e._roomId = null; e._furnitureId = f.id; e.setDoc(structuredClone(e._doc)); setTimeout(() => { const a = e.renderRoot.querySelector('aside'); const h = [...a.querySelectorAll('p')].find((x) => /glows|leuchtet/.test(x.textContent)); h?.scrollIntoView({ block: 'center' }); }, 600);", afterWait: 1200 },
  { name: "editor-state-hint-phone", query: "?lang=en", width: 412, height: 900, editor: true, editorScript: "const fl = e._doc.floors[0]; const f = fl.furniture.find((x) => ['stove', 'kitchen', 'dishwasher', 'washer', 'fridge', 'desk'].includes(x.type)); f.state_entity = 'switch.kaffeemaschine'; e._roomId = null; e._furnitureId = f.id; e.setDoc(structuredClone(e._doc)); setTimeout(() => { const a = e.renderRoot.querySelector('aside'); const h = [...a.querySelectorAll('p')].find((x) => /glows|leuchtet/.test(x.textContent)); h?.scrollIntoView({ block: 'center' }); }, 600);", afterWait: 1200 },
  { name: "view-tv-plug", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'tv_board'); f.entity = 'switch.kaffeemaschine'; f.pictures = []; e._roomId = 'wohnen'; e._furnitureId = f.id; e.setDoc(structuredClone(e._doc));", then3d: "Wohnzimmer" },
  { name: "editor-tv-plug", query: "", width: 1280, height: 1000, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'tv_board'); f.entity = 'switch.kaffeemaschine'; e._roomId = 'wohnen'; e._furnitureId = f.id; e.setDoc(structuredClone(e._doc));" },
  { name: "view-shared-light", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Bad" },
  { name: "view-lamp-height", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'led_strip'); f.mount_y = 0.1; f.x = 4.9; f.w = 1.6; e.setDoc(structuredClone(e._doc));", then3d: "Wohnzimmer" },
  { name: "view-lamp-height-default", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "view-roof-short", query: "", width: 1280, height: 800, editor: true, editorScript: "e._doc.settings.roof.ridge = 'short'; e.setDoc(structuredClone(e._doc));", then3d: "Alle Etagen" },
  { name: "editor-roof-ridge", query: "", width: 1280, height: 1200, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-lamp-height", query: "", width: 1280, height: 1000, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((x) => x.type === 'led_strip'); e._roomId = 'wohnen'; e._furnitureId = f.id;", scrollSide: true },
  { name: "editor-hole-tool", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "hole" } },
  { name: "editor-split-idle", query: "", width: 1400, height: 900, editor: true, editorScript: "e._split = true; e._sidePinned = false;" },
  { name: "editor-front-door", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0]; const o = f.openings.find((x) => x.style === 'sidelight'); e._roomId = o.room_id; e._openingId = o.id;" },
  { name: "editor-opening-leaves", query: "", width: 1280, height: 800, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-furniture", query: "", width: 1280, height: 800, editor: true, editorState: { _furnitureId: "m2" } },
  { name: "editor-parking", query: "", width: 1280, height: 900, editor: true, editorScript: "e._furnitureId = e._doc.floors[0].furniture.find((f) => f.type === 'parking').id;" },
  { name: "editor-furniture-tool", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" } },
  { name: "editor-device", query: "", width: 1280, height: 900, editor: true, editorState: { _deviceId: "light.wohnzimmer_decke", _roomId: "wohnen" } },
  { name: "editor-devlist", query: "", width: 1280, height: 1100, editor: true, editorState: { _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-backup", query: "", width: 1280, height: 1600, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-spots", query: "", width: 1280, height: 1000, editor: true, editorState: { _roomId: "wohnen", _spots: { type: "lamp_downlight", rows: 3, cols: 4, entity: "light.wohnzimmer_decke" } } },
  { name: "editor-ha-floors", query: "", width: 1280, height: 900, editor: true, editorScript: "e._doc.floors[0].ha_floor = 'erdgeschoss'; e._doc.floors[1].ha_floor = 'obergeschoss'; e._floorMenu = true;" },
  { name: "editor-area-rooms", query: "", width: 1280, height: 900, editor: true, editorScript: "e._doc.floors[0].ha_floor = 'erdgeschoss'; e._doc.floors[1].ha_floor = 'obergeschoss'; e.addFloor(e.freeHaFloors[0]); e.addAreaRooms(e.floor);" },
  { name: "editor-resize", query: "", width: 1280, height: 800, editor: true, editorState: { _furnitureId: "m2" } },
  { name: "editor-door", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o5", _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-opening-kinds", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" } },
  { name: "view-double-door", query: "", width: 1280, height: 800, click: "Wohnzimmer" },
  { name: "editor-packs", query: "", width: 1280, height: 1000, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" }, scrollSide: true },
  { name: "view-packs", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_SCRIPT, then3d: "Wohnzimmer" },
  { name: "editor-packs-plan", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_SCRIPT },
  { name: "extensions", query: "?shop", width: 1280, height: 1000, click: "✦ Erweiterungen", wait: 800 },
  { name: "tab-new-offers", query: "?shop", width: 1280, height: 300, wait: 1500 },
  { name: "extensions-locked", query: "?nopro", width: 1280, height: 1000, click: "✦ Erweiterungen", wait: 800 },
  { name: "card-editor", query: "?card", width: 1400, height: 900 },
  { name: "card-og-dim", query: "?card&floor=og", width: 1400, height: 900 },
  { name: "card-og-stacked", query: "?card&floor=og&stack=stacked", width: 1400, height: 900 },
  { name: "card-og-single", query: "?card&floor=og&stack=single", width: 1400, height: 900 },
  { name: "view-camera", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.onDeviceTap('camera.wohnzimmer', 420, 380);" },
  { name: "view-camera-model", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "const c = v.viewer.controls; c.view.target.set(0.9, 1.2, 0.9); c.view.radius = 4.5; c.view.theta = 2.2; c.view.phi = 1.0; c.events.change(); v.viewer.invalidate();" },
  { name: "view-camera-through", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.lookThrough('camera.wohnzimmer'); v._blend = 0.55;", wait: 1400 },
  { name: "view-camera-screen", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Arbeitszimmer", viewScript: "v.markerMode = 'none'; const c = v.viewer.controls; c.view.target.set(8.4, 3.75, 0.2); c.view.radius = 2.2; c.view.theta = 0.3; c.view.phi = 1.2; c.events.change(); v.viewer.invalidate();" },
  { name: "view-media-wall", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Arbeitszimmer", viewScript: "v.markerMode = 'none';" },
  { name: "view-find", query: "", width: 1280, height: 800, viewScript: "v._find = 'licht';" },
  { name: "view-find-go", query: "", width: 1280, height: 800, viewScript: "v._find = 'stehlampe'; setTimeout(() => v.renderRoot.querySelector('.fp3d-find-list button').click(), 300);" },
  { name: "view-quickmenu", query: "", width: 1280, height: 800, click: "Wohnzimmer", viewScript: "v.onDeviceHold('light.wohnzimmer_decke', 520, 420);" },
  { name: "view-quickmenu-media", query: "", width: 1280, height: 800, click: "Küche", viewScript: "v.onDeviceHold('media_player.kueche_lautsprecher', 640, 400);" },
  { name: "view-quickmenu-cover", query: "", width: 1280, height: 800, viewScript: "v.onDeviceTap('cover.wohnzimmer', 700, 400);" },
  { name: "view-swipe", query: "", width: 1280, height: 800, viewScript: "v.onDeviceSwipe('light.wohnzimmer_decke', 'start', 0, 600, 420); v.onDeviceSwipe('light.wohnzimmer_decke', 'move', -40, 600, 420);" },
  { name: "editor-preview-sofa", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Sofa" },
  { name: "editor-preview-pendant", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Pendelleuchte" },
  { name: "editor-preview-kitchen", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Küchenzeile" },
  { name: "editor-preview-pack", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Kamin" },
  { name: "view-pack-mounts", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_MOUNT_SCRIPT, then3d: "Küche" },
  { name: "editor-package", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[1]; e._floorId = f.id; e.applyPackage(f.rooms.find((r) => r.id === 'gast'), 'bedroom'); e.applyPackage(f.rooms.find((r) => r.id === 'kind'), 'kids');" },
  { name: "view-package", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[1]; e.applyPackage(f.rooms.find((r) => r.id === 'gast'), 'bedroom');", then3d: "Obergeschoss" },
  // a tap on the camera's wedge (1.2 m in front of it) selects the camera in the furnish bar
  { name: "save-failed", query: "?savefail", width: 1280, height: 800, editor: true, editRoomName: "Wohnen", reload: true },
  { name: "tablet", query: "", width: 800, height: 1280, click: "Obergeschoss" },
  { name: "tablet-portrait-house", query: "", width: 800, height: 1280 },
  { name: "tablet-portrait-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "phone-floor", query: "", width: 420, height: 800, click: "Erdgeschoss" },
  { name: "card-portrait-room", query: "?card&floor=eg", width: 700, height: 1000, click: "Wohnzimmer" },
  { name: "view-alert-banner", query: "?alerts", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-alert-short", query: "?alerts", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v.building = { ...v.building, settings: { ...v.building.settings, alert_names: false } };", wait: 800 },
  { name: "view-garden-trees", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.35, phi: 1.15, radius: 30, target: { x: 7, y: 0, z: -1 } } },
  { name: "view-outdoor-light", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0]; const r = (x0, z0, x1, z1) => [[x0, z0], [x1, z0], [x1, z1], [x0, z1]]; f.outdoor.push({ id: 'lt_lawn', type: 'lawn', points: r(8.3, 9.5, 10.1, 14) }, { id: 'lt_bed', type: 'bed', points: r(8.6, 10, 9.8, 12.8), offset: -0.3, slope: 0.3, slope_dir: 'x', cut: true }); e.setDoc(structuredClone(e._doc));", afterWait: 800, then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 1.0, radius: 7, target: { x: 9.2, y: 0, z: 11.2 } } },
  { name: "view-pool", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const c = v.viewer.controls; c.view.target.set(10.25, 0.2, -5); c.view.radius = 7.5; c.view.theta = 3.6; c.view.phi = 0.95; c.events.change(); v.viewer.invalidate();", wait: 2000, afterWait: 800 },
  { name: "view-pool-phone", query: "", width: 430, height: 860, click: "Erdgeschoss", viewScript: "const c = v.viewer.controls; c.view.target.set(10.25, 0.2, -5); c.view.radius = 9; c.view.theta = 3.6; c.view.phi = 0.95; c.events.change(); v.viewer.invalidate();", wait: 2000, afterWait: 800 },
  { name: "editor-pool", query: "", width: 1280, height: 1300, editor: true, editorScript: "e._tool = 'outdoor'; e._outdoorId = 'a4'; setTimeout(() => e.fit(), 300);", afterWait: 1200, scrollSide: true },
  { name: "view-pool-above", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0]; f.outdoor = f.outdoor.filter((o) => o.id !== 'a4'); e.setDoc(structuredClone(e._doc)); e._tool = 'outdoor'; e._outdoorType = 'pool'; e._poolShape = 'oval'; e.addOutdoor([[8.5, -6.5], [12.5, -6.5], [12.5, -3.5], [8.5, -3.5]]); const n = e._doc.floors[0].outdoor.at(-1); n.pool = {}; n.above = true; n.height = 1.2; e.setDoc(structuredClone(e._doc));", afterWait: 1200, then3d: "Erdgeschoss", camera: { theta: 3.6, phi: 1.05, radius: 7.5, target: { x: 10.5, y: 0.6, z: -5 } } },
  { name: "editor-outdoor-pick", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0]; f.outdoor = f.outdoor.filter((o) => o.id !== 'a4'); e.setDoc(structuredClone(e._doc)); e._tool = 'outdoor'; e._outdoorType = 'pool'; e._poolShape = 'oval'; e.addOutdoor([[8.5, -6.5], [12.5, -6.5], [12.5, -3.5], [8.5, -3.5]]); const n = e._doc.floors[0].outdoor.at(-1); n.pool = {}; e.setDoc(structuredClone(e._doc)); e._outdoorId = n.id; e._tool = 'outdoor'; setTimeout(() => e.fit(), 300);", afterWait: 1200 },
  { name: "editor-pool-pipes", query: "", width: 1280, height: 1000, editor: true, editorScript: "e._tool = 'pool'; e.selectItem('outdoor', 'a4'); e._tool = 'pool'; e._pipeId = 'p_by'; setTimeout(() => { e._view = { ...e._view, scale: 70 }; e.showPoint(11, -2.4); }, 300);", afterWait: 1500 },
  // the wall view: the living room's walls from the front with the furniture on them
  // the wall view in 3D: standing in the kitchen, looking at the wall with the corner bench and the table
  { name: "editor-wall-3d", query: "", width: 1280, height: 900, editor: true, editorScript: "localStorage.setItem('neonplan3d.wall3d', '1'); e._wallView3d = true; const r = e._doc.floors[0].rooms.find((x) => x.name === 'Küche'); e.openWallView(r.id, 2);", afterWait: 4000 },
  { name: "editor-wall-3d-b", query: "", width: 1280, height: 900, editor: true, editorScript: "e._wallView3d = true; const r = e._doc.floors[0].rooms.find((x) => x.name === 'Wohnzimmer'); e.openWallView(r.id, 0);", afterWait: 4000 },
  { name: "editor-wall-view", query: "", width: 1280, height: 900, editor: true, editorScript: "e._wallView3d = false; const r = e._doc.floors[0].rooms.find((x) => x.name === 'Wohnzimmer'); e.openWallView(r.id, 0);", afterWait: 800 },
  { name: "editor-wall-view-2", query: "", width: 1280, height: 900, editor: true, editorScript: "e._wallView3d = false; const r = e._doc.floors[0].rooms.find((x) => x.name === 'Küche'); e.openWallView(r.id, 0); setTimeout(() => { const it = e._doc.floors[0].furniture.find((m) => m.type === 'kitchen_wall'); if (it) e._wallSel = it.id; }, 200);", afterWait: 900 },
  // without Pool Pro (unreleased): no ports, devices or pipes in the pool tool
  { name: "editor-pool-free", query: "?nopro", width: 1280, height: 1000, editor: true, editorScript: "e._tool = 'pool'; e.selectItem('outdoor', 'a4'); e._tool = 'pool'; setTimeout(() => { e._view = { ...e._view, scale: 70 }; e.showPoint(11, -2.4); }, 300);", afterWait: 1500, scrollSide: true },
  { name: "editor-pool-tech", query: "", width: 1280, height: 1000, editor: true, editorScript: "e._tool = 'pool'; e.selectItem('outdoor', 'a4'); e._tool = 'pool'; e._pipeId = 'p_by'; setTimeout(() => { e._view = { ...e._view, scale: 70 }; e.showPoint(11, -2.4); }, 300);", afterWait: 1500, scrollSide: true },
  { name: "view-pool-pipes", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const c = v.viewer.controls; c.view.target.set(11.2, 0.3, -1.6); c.view.radius = 8.5; c.view.theta = 3.9; c.view.phi = 0.85; c.events.change(); v.viewer.invalidate();", wait: 2000, afterWait: 1200 },
  { name: "view-pool-backwash", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((m) => m.id === 'pt_filter'); f.valve_position = 'backwash'; e.setDoc(structuredClone(e._doc));", afterWait: 800, then3d: "Erdgeschoss", wait: 1500, camera: { theta: 3.9, phi: 0.85, radius: 8.5, target: { x: 11.2, y: 0.3, z: -1.6 } } },
  { name: "editor-round-drag", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0]; f.outdoor = f.outdoor.filter((o) => o.id !== 'a4'); e.setDoc(structuredClone(e._doc)); e._tool = 'pool'; e._poolShape = 'round'; e.addOutdoor([[8.5, -6.5], [12.5, -6.5], [12.5, -3.5], [8.5, -3.5]]); setTimeout(() => e.showPoint(10.5, -5), 200); setTimeout(() => { const a = e._doc.floors[0].outdoor.at(-1); const h = e.renderRoot.querySelectorAll('[data-out-box]')[2]; const r = h.getBoundingClientRect(); const x = r.x + r.width / 2; const y = r.y + r.height / 2; e.drag = { kind: 'outbox', id: a.id, corner: 2, base: e._doc, moved: false }; const ev = (dx, dy, type) => ({ type, clientX: x + dx, clientY: y + dy, pointerId: 7, altKey: false, target: h }); e.onPointerMove(ev(60, 10, 'pointermove')); e.onPointerMove(ev(140, 20, 'pointermove')); e.onPointerUp(ev(140, 20, 'pointerup')); const b = e._doc.floors[0].outdoor.at(-1).points; const xs = b.map((q) => q[0]); const zs = b.map((q) => q[1]); document.title = 'W=' + (Math.max(...xs) - Math.min(...xs)).toFixed(2) + ' D=' + (Math.max(...zs) - Math.min(...zs)).toFixed(2) + ' shape=' + e._doc.floors[0].outdoor.at(-1).pool_shape; }, 900);", afterWait: 1800 },
  { name: "test-media-next", query: "", width: 1280, height: 800, click: "Erdgeschoss", wait: 2500, mouseClickIn: ".fp3d-holo-media:not([hidden]) .fp3d-holo-media-controls button:nth-child(3)" },
  { name: "view-balcony", query: "", width: 1280, height: 800, editor: true, editorScript: "const og = e._doc.floors.find((f) => f.id === 'og'); og.outdoor = [...(og.outdoor ?? []), { id: 'bal', type: 'balcony', points: [[0.6, -1.6], [4.0, -1.6], [4.0, 0], [0.6, 0]] }]; e.setDoc(structuredClone(e._doc));", afterWait: 800, then3d: "Obergeschoss", camera: { theta: 3.5, phi: 1.15, radius: 7, target: { x: 2.3, y: 3.2, z: -0.6 } } },
  { name: "test-wall-corners", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const c = v.viewer.controls; c.view.target.set(6, 1.5, 4.6); c.view.radius = 5; c.view.theta = 0.7; c.view.phi = 0.55; c.events.change(); v.viewer.invalidate();", wait: 1500, afterWait: 800 },
  { name: "view-outdoor-round", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: ["Gestapelt"], camera: { theta: 0.6, phi: 1.1, radius: 15, target: { x: 12.5, y: 0, z: -2 } } },
  { name: "editor-outdoor-pergola", query: "", width: 1280, height: 900, editor: true, editorState: { _outdoorId: "a11" }, scrollSide: true },
  { name: "view-room-ceiling", query: "", width: 1280, height: 800, editor: true, editorScript: "const k = e._doc.floors[0].rooms.find((r) => r.id === 'kueche'); k.ceiling_height = 1.4; e.setDoc(structuredClone(e._doc));", afterWait: 800, then3d: "Erdgeschoss", camera: { target: { x: 8, y: 1.4, z: 2.3 }, radius: 6, phi: 1.2, theta: 0.6 } },
  { name: "view-central", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v._central = true;", wait: 1200 },
  { name: "view-central-phone", query: "", width: 430, height: 860, click: "Alle Etagen", viewScript: "v._central = true;", wait: 1200 },
  { name: "view-wall-unit", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors.find((x) => x.id === 'og'); f.furniture.push({ id: 'wu1', type: 'pack:mastershort.living:wall_unit', x: 5.0, z: 4.52, w: 3.0, d: 0.45, h: 2.1, rotation: 0, variant: null, entity: 'light.garten' }, { id: 'wu2', type: 'pack:mastershort.living:wall_unit_tv', x: 8.3, z: 4.52, w: 3.0, d: 0.45, h: 2.1, rotation: 0, variant: null, entity: 'media_player.fernseher' }); }); e.fit();", then3d: "Obergeschoss", camera: { theta: 0.15, phi: 1.2, radius: 7, target: { x: 6.6, y: 3.9, z: 5.2 } } },
  { name: "editor-own-buttons", query: "", width: 1280, height: 1000, editor: true, editorScript: "const d = e.renderRoot.querySelectorAll('details.fp3d-section'); for (const x of d) if (x.textContent.includes('Favoriten')) { x.open = true; x.scrollIntoView(); }", wait: 800 },
  { name: "view-smart-speakers", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors[0]; f.placements = f.placements.filter((p) => p.entity_id !== 'media_player.kueche_lautsprecher'); f.furniture.push({ id: 'ss1', type: 'pack:mastershort.cinema:smart_display_8', x: 7.2, z: 0.45, w: 0.2, d: 0.1, h: 0.14, rotation: 0, variant: null, entity: 'media_player.kueche_lautsprecher' }, { id: 'ss2', type: 'pack:mastershort.cinema:smart_cylinder', x: 1.2, z: 1.0, w: 0.1, d: 0.1, h: 0.15, rotation: 0, variant: null, entity: 'media_player.fernseher' }); }); e.fit();", then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 0.95, radius: 9, target: { x: 4.5, y: 0.8, z: 1.5 } } },
  { name: "view-smart-speakers-zoom", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors[0]; f.placements = f.placements.filter((p) => p.entity_id !== 'media_player.kueche_lautsprecher'); f.furniture.push({ id: 'ss1', type: 'pack:mastershort.cinema:smart_display_8', x: 7.2, z: 0.45, w: 0.2, d: 0.1, h: 0.14, rotation: 0, variant: null, entity: 'media_player.kueche_lautsprecher' }, { id: 'ss2', type: 'pack:mastershort.cinema:smart_cylinder', x: 1.2, z: 1.0, w: 0.1, d: 0.1, h: 0.15, rotation: 0, variant: null, entity: 'media_player.fernseher' }); }); e.fit();", then3d: "Erdgeschoss", camera: { theta: 0.4, phi: 1.15, radius: 1.1, target: { x: 1.2, y: 0.1, z: 1.0 } } },
  { name: "view-glass-wall", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const o = d.floors[0].openings.find((x) => x.type === 'door' && x.style !== 'front' && !x.wall); window.__gw = o.id; Object.assign(o, { type: 'window', style: 'glass_wall', sill: 0, height: 2.4, width: 1.8, leaves: 1 }); }); e.fit();", then3d: "Erdgeschoss", camera: { theta: -1.9, phi: 1.3, radius: 4, target: { x: 6, y: 1.1, z: 3.9 } } },
  { name: "view-auto-helpers", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const p = d.floors[0].furniture.find((m) => m.type === 'parking'); p.entity = 'input_boolean.test_auto_da'; delete p.type_entity; p.x = 16.2; p.z = 2.7; p.rotation = 90; p.car = { soc: 'input_number.test_ladestand', charging: 'input_number.test_ladeleistung', climate: 'input_boolean.test_klima', lock: 'input_boolean.test_verriegelt', device: 'input_boolean.test_auto_da', range: 'input_number.test_reichweite', plugged: null, tracker: null }; });", then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 1.1, radius: 7.5, target: { x: 16.2, y: 0.8, z: 2.7 } } },
  { name: "shop-auto-pro", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const p = d.floors[0].furniture.find((m) => m.type === 'parking'); p.x = 16.3; p.z = 2.7; p.rotation = 90; });", then3d: "Erdgeschoss", camera: { theta: 0.5, phi: 1.1, radius: 8, target: { x: 16, y: 0.8, z: 2.7 } } },
  { name: "view-thumbs-compact", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v._thumbsCompact = true;", wait: 1200 },
  { name: "view-holo-stack", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { const f = d.floors[0]; for (const m of f.furniture) if (['washer', 'dryer', 'dishwasher', 'fridge'].includes(m.type)) m.holo = true; for (const p of f.placements) if (p.entity_id.endsWith('_leistung')) p.holo = true; });", then3d: "Erdgeschoss", camera: { theta: 0.3, phi: 0.95, radius: 9, target: { x: 6.5, y: 0.8, z: 4.5 } } },
  { name: "editor-bg-handles", query: "", width: 1280, height: 900, editor: true, editorScript: "e._images = { ...e._images, demobg: { url: '/preview/screenshots/editor-sidelight.png', aspect: 0.7 } }; e.change((d) => { d.floors[0].background = { image_id: 'demobg', x: 0, z: -1, width: 15, opacity: 0.35, rotation: 6 }; }); e._bgOpen = true; e.fit();", wait: 800 },
  { name: "view-auto", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-sound", query: "", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-sound-locked", query: "?nopro", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-heat-values", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Werte" },
  { name: "view-accent", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; p._accent = '#ff8a00';", wait: 1500 },
  { name: "view-bed-state", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", camera: { theta: 3.6, phi: 0.55, radius: 6, target: { x: 2.2, y: 0.5, z: 6.9 } } },
  { name: "view-cut-furniture", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", then3dAlso: ["Schnitt"], camera: { theta: 2.4, phi: 1.1, radius: 8, target: { x: 8.6, y: 0.6, z: 6.2 } } },
  { name: "editor-sidelight", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o14", _roomId: "flur" }, scrollSide: true },
  { name: "view-mirror", query: "", width: 1280, height: 800, editor: true, editorScript: "e.change((d) => { for (const m of d.floors[0].furniture) if (m.type === 'sofa' || m.type === 'tv_board') m.mirror = true; });", then3d: "Erdgeschoss", camera: { theta: 0.9, phi: 1.15, radius: 6, target: { x: 2.4, y: 0.8, z: 2.2 } } },
  { name: "view-nav-wrap", query: "", width: 760, height: 700, click: "Alle Etagen", viewScript: "v.getRootNode().host._navWrap = true;", wait: 1200 },
  // the online demo on a phone: a one-time hint what it is made for, with "only the house" (the eye)
  { name: "demo-phone-hint", query: "?site", width: 390, height: 844, wait: 1500 },
  { name: "demo-phone-clean", query: "?site", width: 390, height: 844, click: "Nur das Haus zeigen", wait: 1500 },
  { name: "view-clean-phone", query: "", width: 430, height: 860, click: "Erdgeschoss", viewScript: "v.dispatchEvent(new CustomEvent('clean-toggle', { bubbles: true, composed: true }));", wait: 1200 },
  { name: "view-strip-upright", query: "", width: 1280, height: 800, editor: true, editorScript: "e.fit();", then3d: "Erdgeschoss", camera: { theta: 1.3, phi: 1.2, radius: 5, target: { x: 1.2, y: 1, z: 1.4 } } },
  { name: "view-pro-locked", query: "?nopro", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.lookThrough('camera.wohnzimmer');" },
  { name: "view-weather-rain", query: "?weather=pouring", width: 1280, height: 800, wait: 1200 },
  { name: "view-weather-snow", query: "?weather=snowy", width: 1280, height: 800, wait: 1200 },
  { name: "view-trail", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Spur", wait: 1500 },
  // Zeitreise (Pro): the invented week of the demo replayed – time bar, clock, amber frame, read-only room panel
  { name: "view-timetravel", query: "?tt=07:42", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-timetravel-house", query: "?tt=20:40", width: 1280, height: 800 },
  { name: "view-timetravel-tap", query: "?tt=20:40", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v.onDeviceTap('light.stehlampe', 470, 420)" },
  { name: "view-timetravel-heat", query: "?tt=06:50", width: 1280, height: 800, click: "Temp.", then: "Erdgeschoss" },
  { name: "view-timetravel-right", query: "?tt=15:10", width: 1280, height: 800, click: "◨", then: "Erdgeschoss" },
  { name: "tablet-timetravel", query: "?tt=20:40", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "phone-timetravel", query: "?tt=07:42", width: 390, height: 844, click: "Erdgeschoss" },
  // phase 2/3: the week (older days load one after another), the events sheet, "while you were away", the day summary, energy
  { name: "view-timetravel-7d", query: "?tt=-30h", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); s.setRange('7d');", afterWait: 3500 },
  { name: "view-timetravel-events", query: "?tt=10:20", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); bar._sheet = 'events';", afterWait: 1200 },
  { name: "view-timetravel-away", query: "?tt=11:30", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); bar._sheet = 'away';", afterWait: 1200 },
  { name: "view-timetravel-day", query: "?tt=-26h", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); s.setRange('7d'); bar._sheet = 'day'; setTimeout(() => (bar._compare = true), 2500);", afterWait: 3500 },
  { name: "view-timetravel-energy", query: "?tt=13:00&flows", width: 1280, height: 800, wait: 1500 },
  { name: "tablet-timetravel-7d", query: "?tt=-20h", width: 800, height: 1280, click: "Tablet", then: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); s.setRange('7d');", afterWait: 3000 },
  // shop pictures of the time travel add-on (de), framed by tools/shop/pro-image.py
  { name: "shop-tt-events-de", query: "?tt=10:20", width: 1200, height: 860, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); bar._sheet = 'events';", afterWait: 1500 },
  { name: "shop-tt-away-de", query: "?tt=11:30", width: 1200, height: 860, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); bar._sheet = 'away';", afterWait: 1500 },
  { name: "shop-tt-day-de", query: "?tt=-26h", width: 1200, height: 860, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); s.setRange('7d'); bar._sheet = 'day'; setTimeout(() => (bar._compare = true), 2500);", afterWait: 3500 },
  // shop pictures of the time travel add-on (en), framed by tools/shop/pro-image.py
  { name: "shop-tt-events-en", query: "?tt=10:20&lang=en", width: 1200, height: 860, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); bar._sheet = 'events';", afterWait: 1500 },
  { name: "shop-tt-away-en", query: "?tt=11:30&lang=en", width: 1200, height: 860, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); bar._sheet = 'away';", afterWait: 1500 },
  { name: "shop-tt-day-en", query: "?tt=-26h&lang=en", width: 1200, height: 860, click: "Erdgeschoss", viewScript: "const p = v.getRootNode().host; const s = p.tt.session; const bar = p.renderRoot.querySelector('fp3d-time-bar'); s.setRange('7d'); bar._sheet = 'day'; setTimeout(() => (bar._compare = true), 2500);", afterWait: 3500 },
  // "fill the screen" reaches the bottom edge, measured from where the card starts (#344)
  { name: "card-fill", query: "?card&fill", width: 1280, height: 800, wait: 1500 },
  { name: "card-timetravel", query: "?card&tt", width: 1400, height: 900, click: "⏪ Zeitreise" },
  { name: "view-timetravel-locked", query: "?nopro", width: 1280, height: 800, click: "🔒 Zeitreise" },
  { name: "card-alert", query: "?card&alerts", width: 1400, height: 900 },
  { name: "card-scenes", query: "?card&nopanel", width: 1400, height: 900, click: "Wohnzimmer" },
  { name: "card-night", query: "?card&night", width: 1400, height: 900 },
  { name: "card-kiosk-orbit", query: "?card&kiosk", width: 1400, height: 900, wait: 2600 },
  { name: "view-floor-stack-panel", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Einzeln" },
  { name: "view-room-names-off", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Raumnamen" },
  { name: "empty", query: "?empty", width: 1280, height: 800 },
  { name: "site-demo", query: "?site&lang=en", width: 1280, height: 800 },
  { name: "site-demo-phone", query: "?site&lang=de", width: 390, height: 844 },
];

const FREEFORM_SCRIPT = `
  const b = structuredClone(e._doc), f = b.floors[0];
  b.floors = [f];
  Object.assign(f, { rooms: [{ id: 'free', name: 'Freiform-Haus', area_id: null, points: [[0,0],[8,0],[8,2.5],[3,2.5],[3,6],[0,6]], floor_material: 'wood' }], walls: [], openings: [], outdoor: [], furniture: [], placements: [] });
  b.settings.roof = { type: 'none', pitch: 30, overhang: 0, sections: [], solar: [], windows: [], cables: [] };
  e.setDoc(b); e._floorId = f.id; e._roomId = null; e._tool = 'outdoor'; e._split = false;
  setTimeout(() => { const scale = Math.min(e._size.w / 16, e._size.h / 12); e._view = { scale, ox: e._size.w / 2 - 2 * scale, oy: e._size.h / 2 - 3 * scale }; }, 200);
`;
const CEILING_SPOTS_SCRIPT = FREEFORM_SCRIPT + `
  e.change((b, f) => {
    const points = [[-4,0],[-1,0],[-1,3.5],[-2,3.5],[-2,6],[-4,6]];
    f.outdoor = [{ id: 'pergola_spots', type: 'pergola', points: [[9,0],[12,0],[12,4],[9,4]], height: 2.7 }];
    b.settings.roof.type = 'custom';
    b.settings.roof.sections = [{ id: 'canopy_spots', x0: -4, z0: 0, x1: -1, z1: 6, points, shape: 'pent', open: true, axis: 'z', eave_a: 2.8, eave_b: 2.8, pitch_a: 8, pitch_b: 8, base: 2.8, overhang: 0.15 }];
  }); e._tool = 'roof'; e._roofId = 'canopy_spots'; e._split = true;
`;
shots.push(
  { name: "editor-freeform-roof", query: "", width: 1500, height: 1000, editor: true, editorScript: FREEFORM_SCRIPT, freeformExercise: true, mockPrivatePacks: true },
  { name: "editor-freeform-phone", query: "", width: 430, height: 1100, editor: true, editorScript: FREEFORM_SCRIPT, freeformExercise: true, mockPrivatePacks: true },
  { name: "view-freeform-roof", query: "", width: 1280, height: 900, editor: true, editorScript: FREEFORM_SCRIPT, freeformExercise: true, mockPrivatePacks: true, houseView: true, then3d: "Alle Etagen", then3dAlso: ["Dach bleibt"], camera: { theta: 1.2, phi: 0.85, radius: 17, target: { x: 2, y: 1.5, z: 3 } } },
  { name: "editor-freeform-legacy-rectangles", query: "", width: 1500, height: 1000, editor: true, mockPrivatePacks: true, rectangleExercise: true, editorScript: FREEFORM_SCRIPT + `
    e.change((b, f) => {
      f.outdoor = [{ id: 'legacy_out', type: 'terrace', points: [[-4,0],[-1,0],[-1,4],[-4,4]], freeform: false }];
      b.settings.roof.type = 'custom'; b.settings.roof.sections = [{ id: 'legacy_roof', x0: 0, z0: 0, x1: 8, z1: 6, points: null, shape: 'gable', axis: 'x', eave_a: 3, eave_b: 3, pitch_a: 30, pitch_b: 30, base: 3, overhang: 0 }];
    }); e._tool = 'select'; e.selectItem('outdoor', 'legacy_out');
  ` },
  { name: "editor-ceiling-spots", query: "", width: 1500, height: 1100, editor: true, editorScript: CEILING_SPOTS_SCRIPT, spotsExercise: true, mockPrivatePacks: true, showSpotForm: true },
  { name: "editor-ceiling-spots-phone", query: "", width: 430, height: 1100, editor: true, editorScript: CEILING_SPOTS_SCRIPT, spotsExercise: true, mockPrivatePacks: true, showSpotForm: true },
  { name: "view-canopy-spots", query: "", width: 1280, height: 900, editor: true, editorScript: CEILING_SPOTS_SCRIPT, spotsExercise: true, mockPrivatePacks: true, then3d: "Alle Etagen", houseView: true, camera: { theta: 1.6, phi: 1.25, radius: 20, target: { x: 3.5, y: 1.2, z: 3 } } },
);
const ROTATION_SCRIPT = `
  const floor = e._doc.floors[0];
  const strip = floor.furniture.find((f) => f.type === 'led_strip');
  Object.assign(strip, { mount_y: 1.2, x: 2.4, z: 1.3, rotation: 25, rotation_x: 40, rotation_z: 70, upright: false });
  const sofa = floor.furniture.find((f) => f.type === 'sofa');
  Object.assign(sofa, { mount_y: 0.6, rotation_x: 20, rotation_z: -25 });
  const tv = floor.furniture.find((f) => f.type === 'tv_board');
  if (tv) Object.assign(tv, { rotation_x: -15, rotation_z: 20 });
  e.setDoc(structuredClone(e._doc));
  e._roomId = 'wohnen'; e._furnitureId = strip.id;
`;
shots.push(
  { name: "editor-inventory-rotation", query: "", width: 1400, height: 1000, editor: true, editorScript: ROTATION_SCRIPT + "e._split = true;", focusRotation: true, mockPrivatePacks: true },
  { name: "editor-inventory-rotation-phone", query: "", width: 430, height: 1000, editor: true, editorScript: ROTATION_SCRIPT, focusRotation: true, mockPrivatePacks: true },
  { name: "view-inventory-rotation", query: "", width: 1280, height: 800, editor: true, editorScript: ROTATION_SCRIPT, mockPrivatePacks: true, then3d: "Erdgeschoss", camera: { theta: 1.3, phi: 1.1, radius: 7, target: { x: 2.4, y: 1.1, z: 2 } } },
);
const ROOM_LEVELS_SCRIPT = `
  const b = structuredClone(e._doc), f = b.floors[0]; b.floors = [f];
  const room = (id, name, x0, x1) => ({ id, name, area_id: null, points: [[x0,0],[x1,0],[x1,4],[x0,4]], floor_material: 'wood' });
  Object.assign(f, { elevation: 0, height: 2.6, rooms: [room('low','Tiefer Raum',0,4),room('high','Höherer Raum',4,8)], walls: [], outdoor: [], placements: [],
    openings: [{ id: 'level_passage', room_id: 'low', edge: 1, offset: 2, width: 1.4, type: 'door', style: 'passage', sill: 0, height: 2.3, hinge: 'left', leaves: 1, swing: 'in', cover: null, contact: null, contact2: null, tilt: null }],
    furniture: [{ id: 'low_chair', type: 'chair', x: 1.5, z: 1.5, w: 0.5, d: 0.5, h: 0.85, rotation: 0, variant: null }, { id: 'high_chair', type: 'chair', x: 6.5, z: 1.5, w: 0.5, d: 0.5, h: 0.85, rotation: 0, variant: null }, { id: 'high_lamp', type: 'lamp_downlight', x: 6, z: 3, w: 0.14, d: 0.14, h: 0.05, rotation: 0, variant: null, entity: 'light.led_band' }] });
  b.settings.roof = { type: 'none', pitch: 30, overhang: 0, sections: [], solar: [], windows: [] };
  e.setDoc(b); e._floorId = f.id; e._tool = 'select'; e._split = true; e._wall3d = 'auto'; e.selectItem('room','high');
  setTimeout(() => e.fit(), 300);
`;
shots.push(
  { name: "editor-room-levels-low", query: "", width: 1500, height: 1100, editor: true, editorScript: ROOM_LEVELS_SCRIPT, roomLevelsSide: "room", mockPrivatePacks: true },
  { name: "editor-room-levels-high", query: "", width: 1500, height: 1100, editor: true, editorScript: ROOM_LEVELS_SCRIPT, roomLevelsSide: "other", mockPrivatePacks: true },
  { name: "editor-room-levels-phone", query: "", width: 430, height: 1100, editor: true, editorScript: ROOM_LEVELS_SCRIPT, roomLevelsSide: "other", mockPrivatePacks: true },
  { name: "view-room-levels-high", query: "", width: 1280, height: 900, editor: true, editorScript: ROOM_LEVELS_SCRIPT, roomLevelsSide: "other", mockPrivatePacks: true, then3d: "Alle Etagen", camera: { theta: 0.9, phi: 0.8, radius: 12, target: { x: 4, y: 1.2, z: 2 } } },
);
shots.push(...[true, false].map((near) => ({ name: `view-kept-roof-${near ? 'near' : 'far'}`, query: "", width: 1280, height: 900, editor: true, editorScript: "e.fit();", then3d: "Alle Etagen", then3dAlso: "Gestapelt", keptRoofNear: near })));

shots.push({
  name: "editor-custom-block-integration", query: "", width: 1400, height: 1000,
  editor: true, mockPrivatePacks: true,
  editorScript: `
    const b = structuredClone(e._doc), f = b.floors[0];
    b.floors = [f];
    f.rooms = [{ id: 'raised', name: 'Erhöhter Raum', area_id: null, points: [[0,0],[6,0],[6,5],[0,5]], floor_material: 'wood', elevation: f.elevation + 0.6, ceiling_height: 3.2 }];
    f.openings = []; f.walls = []; f.outdoor = []; f.placements = [];
    f.furniture = ['a','b'].map((id,i) => ({ id, type: 'kitchen_wall', x: 1 + i, z: 0.2, w: 0.6, d: 0.35, h: 0.8, rotation: 0, rotation_x: i ? 0 : 20, rotation_z: 0, variant: null, mount_y: 1.2 }));
    b.settings.roof = { type: 'none', sections: [], windows: [], solar: [], pitch: 30, overhang: 0 };
    e.setDoc(b); e._floorId = f.id; e._tool = 'select'; e._split = true; e._wall3d = 'auto';
    e.setMulti(['a','b']); e.groupSelection();
    if (e.selection().length !== 2) throw new Error('Custom furniture lost block selection');
    e.rotateSelection(90);
    const parts = () => e._doc.floors[0].furniture;
    if (parts()[0].rotation_x !== 20 || parts().some(m => m.rotation !== 90)) throw new Error('Block rotation lost XYZ orientation');
    e.undo();
    e.lockSelection(true);
    const locked = JSON.stringify(parts()); e.rotateSelection(90);
    if (JSON.stringify(parts()) !== locked) throw new Error('A fixed block moved');
    e.lockSelection(false);
    const frame = { a: [0,0], b: [6,0], u: [1,0], n: [0,1], length: 6, rightward: true };
    e.moveSetOnWall(frame, ['a','b'], 0.2, 0.1);
    if (parts().some(m => Math.abs(m.mount_y - 1.3) > 0.001)) throw new Error('Wall block counted room elevation twice');
    e.moveOnWall(frame, 'a', 0, 1.1);
    const part = parts()[0], angle = 20 * Math.PI / 180;
    const projectedBottom = part.mount_y + part.h / 2 - (part.h * Math.cos(angle) + part.d * Math.sin(angle)) / 2;
    if (Math.abs(projectedBottom - 1.1) > 0.001) throw new Error('Tilted wall height is not relative to room floor');
    const projectedHeight = part.h * Math.cos(angle) + part.d * Math.sin(angle);
    const originalWidth = part.w;
    e.resizeOnWall(frame, 'a', null, null, null, projectedBottom + projectedHeight * 1.5);
    if (Math.abs(parts()[0].w - originalWidth * 1.5) > 0.001) throw new Error('Tilted wall resize must scale uniformly');
    e.undo();
    e.selectItem('furniture', 'a'); e.fit();
  `,
});

const errors = [];
shots.push(...[false, true].map((closed) => ({ name: `view-roof-sun-${closed ? 'closed' : 'open'}`, query: "", width: 1280, height: 900, editor: true, roofSunClosed: closed, then3d: "Alle Etagen", then3dAlso: "Gestapelt", editorScript: `
  const b = structuredClone(e._doc), f = b.floors[0]; b.floors = [f];
  Object.assign(f, { elevation: 0, height: 2.5, rooms: [{ id: 'sunroom', name: 'Dachfenster-Test', area_id: null, points: [[0,0],[10,0],[10,8],[0,8]], floor_material: 'wood' }], openings: [], furniture: [], placements: [], outdoor: [], walls: [] });
  b.settings.roof = { type: 'gable', pitch: 35, overhang: 0.4, windows: [{ id: 'sky', face: 'main:b', u: 5.25, v: 1.96, w: 1.2, h: 1.6 }] }; b.settings.north = 0;
  e.setDoc(b); e._floorId = f.id; e.fit();
` })));
const only = process.env.SHOTS?.split(",");
for (const side of [-1, 1]) {
  const fixture = shots.find((s) => s.name === 'view-roof-sun-open');
  shots.push({ ...fixture, name: `view-roof-gable-${side < 0 ? 'left' : 'right'}`, roofSunClosed: undefined, gableSide: side,
    editorScript: fixture.editorScript + "e.change((b) => b.floors[0].furniture.push({ id: 'gable-chair', type: 'chair', x: 5, z: 4, w: 0.6, d: 0.6, h: 0.9, rotation: 0 }));" });
}
const kneeFixture = shots.find((s) => s.name === 'view-roof-gable-left');
for (const hinge of ['middle', 'bottom']) shots.push({ ...kneeFixture, name: `view-roof-window-${hinge}`, gableSide: undefined, roofHinge: hinge,
  editorScript: kneeFixture.editorScript + "e._tool = 'roof'; e._roofWinId = 'sky';" });
for (const below of [true, false]) shots.push({ ...kneeFixture, name: `view-roof-solar-${below ? 'below' : 'above'}`, gableSide: undefined, solarBelow: below,
  editorScript: kneeFixture.editorScript + "e.change((b) => { b.settings.roof.solar = [{ id: 'pv-test', face: 'main:b', u: 3, v: 1, rows: 2, cols: 3, portrait: true, look: 'blue' }]; });" });
shots.push({ ...kneeFixture, name: 'view-roof-knee-outlines', gableSide: 0.5,
  editorScript: kneeFixture.editorScript + "e.useRoofSections(); e.change((b) => { for (const s of b.settings.roof.sections) { s.eave_a += 1; s.eave_b += 1; } });" });
const CUSTOM_PACK = {
  id:"preview.custom",name:"Custom Preview",publisher:"Preview",licensee:null,items:[
    {id:"unit",name:{de:"Custom Gerät"},size:[1,0.5,1],electric:true,bindings:[{id:"door",label:"Türsensor",domains:["binary_sensor"]},{id:"status",label:"Status",domains:["sensor"]},{id:"temperature",label:"Temperatur",domains:["sensor"]}],
      parts:[{id:"body",shape:"box",x:0,z:0,y:0,w:1,d:0.9,h:1,color:"body"},{id:"door",shape:"box",x:0,z:0.47,y:0,w:1,d:0.04,h:1,color:"wood"},{id:"led",shape:"box",x:0.3,z:0.495,y:0.9,w:0.1,d:0.01,h:0.06,color:"dark",status:{binding:"status",colors:{running:"#ff0000"}}}],
      motions:[{id:"door",kind:"door",parts:["door","led"],pivot:[-0.5,0.5,0.47],binding:"door",axis:"y"}],
      displays:[{id:"temperature",kind:"sensor",binding:"temperature",position:[0,0.65,0.501],size:[0.6,0.15],parent:"door"},{id:"clock",kind:"digital",position:[0,0.3,0.501],size:[0.6,0.15],parent:"door"}]},
    {id:"unit_red",name:{de:"Custom Gerät rot"},size:[1,0.5,1],product:{base:"pack:preview.custom:unit",variant:"red",label:"Rot",default:true},
      parts:[{id:"body",shape:"box",x:0,z:0,y:0,w:1,d:0.9,h:1,color:"#aa3322"},{id:"door",shape:"box",x:0,z:0.47,y:0,w:1,d:0.04,h:1,color:"#bb4433"},{id:"led",shape:"box",x:0.3,z:0.495,y:0.9,w:0.1,d:0.01,h:0.06,color:"dark"}]}
  ]
};
CUSTOM_PACK.items[1]={...structuredClone(CUSTOM_PACK.items[0]),id:"unit_red",name:{de:"Custom Gerät rot"},product:CUSTOM_PACK.items[1].product,
  parts:CUSTOM_PACK.items[0].parts.map(p=>({...structuredClone(p),color:p.id==="led"?p.color:"#aa3322"}))};
shots.push({name:"editor-custom-features",query:"",width:1400,height:1000,editor:true,mockPrivatePacks:true,customPackExercise:true,
  editorScript:`
    const panel=document.querySelector("neonplan3d-panel");
    panel.hass={...panel.hass,config:{...panel.hass.config,time_zone:"Europe/Berlin"},states:{...panel.hass.states,
      "binary_sensor.custom_door":{entity_id:"binary_sensor.custom_door",state:"on",attributes:{device_class:"door"}},
      "sensor.custom_status":{entity_id:"sensor.custom_status",state:"running",attributes:{}},
      "sensor.custom_temperature":{entity_id:"sensor.custom_temperature",state:"21.5",attributes:{unit_of_measurement:"°C"}}}};
    e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[{id:"custom",name:"Custom",area_id:null,points:[[0,0],[5,0],[5,4],[0,4]],floor_material:"wood"}];f.openings=[];f.outdoor=[];f.placements=[];f.walls=[];
      f.furniture=[{id:"unit",type:"pack:preview.custom:unit",x:2,z:2,w:1,d:0.5,h:1,rotation:0,variant:null,bindings:{door:"binary_sensor.custom_door",status:"sensor.custom_status",temperature:"sensor.custom_temperature"}}];b.settings.roof.type="none";});
    e._split=true;e._tool="select";e.selectItem("furniture","unit");e.fit();
  `});
shots.push({name:'editor-contour-press-drag',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,contourPressDrag:true,editorScript:`
  e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[];f.furniture=[];f.openings=[];f.walls=[];f.placements=[];f.outdoor=[{id:'area',type:'terrace',points:[[0,0],[4,0],[4,3],[0,3]]}];b.settings.roof.type='custom';b.settings.roof.sections=[{id:'canopy',shape:'flat',axis:'x',x0:0,z0:0,x1:4,z1:3,eave_a:2.6,eave_b:2.6,pitch_a:0,pitch_b:0,base:2.6,overhang:0}];});e._split=false;e.selectItem('outdoor','area');e.fit();
`});
shots.push({name:'editor-gravel-bed',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,gravelBed:true,editorScript:`
  e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[];f.furniture=[];f.openings=[];f.walls=[];f.placements=[];f.outdoor=[{id:'gravel',type:'lawn',freeform:true,points:[[0,0],[4,0],[4,2],[2,2],[2,4],[0,4]],offset:0.2,slope:0.08,slope_dir:'x'}];b.settings.roof.type='none';});e._split=true;e.selectItem('outdoor','gravel');e.fit();
`});
shots.push({name:'editor-glass-sliding-door',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,glassSlider:true,editorScript:`
  const panel=document.querySelector('neonplan3d-panel');panel.hass={...panel.hass,states:{...panel.hass.states,'binary_sensor.preview_glass':{entity_id:'binary_sensor.preview_glass',state:'on',attributes:{device_class:'door'}}}};
  e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[{id:'left',name:'Raum links',area_id:null,points:[[0,0],[4,0],[4,4],[0,4]],floor_material:'wood'},{id:'right',name:'Raum rechts',area_id:null,points:[[4,0],[8,0],[8,4],[4,4]],floor_material:'wood'}];f.furniture=[];f.openings=[{id:'glass',room_id:'left',edge:1,offset:2,width:1.1,type:'door',sill:0,height:2.1,style:'interior',hinge:'left',leaves:1,swing:'in',contact:'binary_sensor.preview_glass',contact2:null,tilt:null,cover:null}];f.outdoor=[];f.walls=[];f.placements=[];b.settings.roof.type='none';});e._split=true;e.selectItem('opening','glass');e.fit();
`});
shots.push({name:'editor-standard-stair-height',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,stairHeight:true,editorScript:`
  e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[{id:'stairs',name:'Treppen',area_id:null,points:[[0,0],[6,0],[6,6],[0,6]],floor_material:'wood'}];f.openings=[];f.outdoor=[];f.walls=[];f.placements=[];f.furniture=['stairs','stairs_u'].map((type,i)=>({id:type,type,x:1.5+i*3,z:3,w:1.2,d:2.8,h:2.3,rotation:0,variant:null}));b.settings.roof.type='none';});e._split=true;e.selectItem('furniture','stairs');e.fit();
`});
shots.push({name:'editor-negative-object-heights',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,negativeHeights:true,editorScript:`
  e.change(b=>{b.floors=[b.floors[0]];b.settings.pets={on:false,list:[]};b.settings.roof.type='none';const f=b.floors[0];f.rooms=[{id:'r',name:'Negative Höhen',area_id:null,points:[[0,0],[6,0],[6,6],[0,6]],floor_material:'wood'}];f.walls=[];f.placements=[];f.furniture=[{id:'chair',type:'chair',x:3,z:3,w:0.6,d:0.6,h:0.8,rotation:0,variant:null}];f.openings=['door','window','garage'].map((type,i)=>({id:type,type,room_id:'r',edge:i,offset:2,width:1.2,height:2.1,sill:0,style:type==='door'?'front_slot':null,leaves:1,hinge:'left',swing:'in'}));f.outdoor=[{id:'fence',type:'fence',height:1.2,offset:0,points:[[0,7],[6,7],[6,7.1],[0,7.1]]}];});e._split=true;e.selectItem('opening','door');e.fit();
`});
shots.push({name:'view-upward-spot-roof',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,upwardSpot:true,then3d:'Alle Etagen',then3dAlso:['Dach bleibt'],camera:{theta:0.5,phi:0.9,radius:9,target:{x:2.5,y:1.8,z:2.5}},editorScript:`
  const panel=document.querySelector('neonplan3d-panel');panel._quality='high';
  panel.hass={...panel.hass,states:{...panel.hass.states,'light.led_band':{entity_id:'light.led_band',state:'on',attributes:{brightness:255,rgb_color:[255,200,90]}}}};
  e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[{id:'up',name:'Spot unter Dach',area_id:null,points:[[0,0],[5,0],[5,5],[0,5]],floor_material:'wood'}];f.height=3;f.openings=[];f.outdoor=[];f.walls=[];f.placements=[];f.furniture=[{id:'up',type:'lamp_spot',x:2,z:2.5,w:0.15,d:0.15,h:0.2,mount_y:1.2,rotation:0,rotation_x:150,beam_angle:40,entity:'light.led_band',variant:null}];b.settings.roof.type='custom';b.settings.roof.sections=[{id:'roof',shape:'gable',axis:'x',x0:0,z0:0,x1:5,z1:5,eave_a:1.5,eave_b:1.5,pitch_a:35,pitch_b:35,base:1.5,overhang:0}];});e.fit();
`});
for(const style of ['front_slot','sliding_wood']){
  const base=shots.find(s=>s.name==='editor-glass-sliding-door');
  shots.push({...base,name:'editor-'+style,glassSlider:false,editorScript:base.editorScript+`const panel2=document.querySelector('neonplan3d-panel');panel2._productColors=true;e.change(b=>{const f=b.floors[0];f.rooms=[f.rooms[0]];Object.assign(f.openings[0],{style:'${style}',width:0.9,contact:'none',shut:true});b.settings.pets={on:false,list:[]};});`});
}
if(process.env.ROUND_PACK_DIR){
  const directory=resolve(process.env.ROUND_PACK_DIR);
  for(const colored of [false,true]){
    const vehicles=JSON.parse(readFileSync(join(directory,`v2.fahrzeuge${colored?'_farben':''}.json`),'utf8')).items;
    for(const original of vehicles)for(const side of [false,true]){
      const item=structuredClone(original);delete item.product;
      const f={id:'vehicle',type:`pack:preview.vehicle:${item.id}`,x:2.5,z:3,w:item.size[0],d:item.size[1],h:item.size[2],rotation:0,variant:null};
      shots.push({name:`vehicle-${item.id}-${colored?'color':'neon'}-${side?'side':'front'}`,query:'',width:1200,height:850,editor:true,mockPrivatePacks:true,shapePack:{id:'preview.vehicle',name:'Fahrzeugprofil',publisher:'Preview',items:[item]},then3d:'Erdgeschoss',camera:{theta:side?Math.PI/2:0.8,phi:side?1.49:1.0,radius:6.7,target:{x:2.5,y:0.8,z:3}},editorScript:`
        document.querySelector('neonplan3d-panel')._quality='high';e.change(b=>{b.floors=[b.floors[0]];b.settings.roof.type='none';b.settings.pets={on:false,list:[]};const floor=b.floors[0];floor.rooms=[{id:'vehicle',name:'Fahrzeugprofil',area_id:null,points:[[0,0],[5,0],[5,6],[0,6]],floor_material:'concrete',wall_h:0}];floor.furniture=[${JSON.stringify(f)}];floor.openings=[];floor.walls=[];floor.outdoor=[];floor.placements=[];});e.fit();
      `});
    }
  }
  const load=category=>JSON.parse(readFileSync(join(directory,`v2.${category}_farben.json`),'utf8')).items;
  const dishwasher=structuredClone(load('kuechenmoebel').find(i=>i.id==='kitchen_dishwasher_panel_60'));delete dishwasher.product;
  shots.push({name:'pack-dishwasher-open',query:'',width:1200,height:900,editor:true,mockPrivatePacks:true,dishwasherOpen:true,shapePack:{id:'preview.dishwasher',name:'Spülmaschine',publisher:'Preview',items:[dishwasher]},then3d:'Erdgeschoss',camera:{theta:0.3,phi:0.9,radius:3.5,target:{x:1,y:0.4,z:1.2}},editorScript:`
    const panel=document.querySelector('neonplan3d-panel');panel.hass={...panel.hass,states:{...panel.hass.states,'binary_sensor.preview_dishwasher':{entity_id:'binary_sensor.preview_dishwasher',state:'on',attributes:{device_class:'door'}}}};
    e.change(b=>{b.floors=[b.floors[0]];b.settings.pets={on:false,list:[]};b.settings.roof.type='none';const f=b.floors[0];f.rooms=[{id:'dish',name:'Spülmaschine',area_id:null,points:[[0,0],[2,0],[2,3],[0,3]],floor_material:'wood'}];f.furniture=[{id:'dish',type:'pack:preview.dishwasher:kitchen_dishwasher_panel_60',x:1,z:1,w:0.6,d:0.62,h:0.906,rotation:0,variant:null,animations:false,bindings:{door:'binary_sensor.preview_dishwasher'}}];f.outdoor=[];f.openings=[];f.walls=[];f.placements=[];});e.fit();
  `});
  const numbers=load('tueren_fenster').filter(i=>i.id.startsWith('house_number_')).map(i=>{const item=structuredClone(i);delete item.product;return item;});
  const numberFurniture=numbers.map((i,n)=>({id:i.id,type:'pack:preview.numbers:'+i.id,x:0.5+(n%5)*0.6,z:0.5+Math.floor(n/5)*0.8,w:i.size[0]*4,d:i.size[1]*4,h:i.size[2]*4,rotation:0,variant:null,mount_y:0}));
  shots.push({name:'pack-house-numbers',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,shapePack:{id:'preview.numbers',name:'Hausnummern',publisher:'Preview',items:numbers},then3d:'Erdgeschoss',camera:{theta:0.05,phi:1.0,radius:4.8,target:{x:1.7,y:0.3,z:1.4}},editorScript:`e.change(b=>{b.floors=[b.floors[0]];b.settings.pets={on:false,list:[]};b.settings.roof.type='none';const f=b.floors[0];f.rooms=[{id:'numbers',name:'Hausnummern · Vorschau vergrößert',area_id:null,points:[[0,0],[3.5,0],[3.5,3],[0,3]],floor_material:'concrete'}];f.furniture=${JSON.stringify(numberFurniture)};f.outdoor=[];f.openings=[];f.walls=[];f.placements=[];});e.fit();`});
  for(const [category,id,scale] of [['kuechenzubehoer','ikea_snudda_39',2],['haustechnik','wall_thermostat_white_grey',10]])for(const colored of [false,true]){
    const pack=JSON.parse(readFileSync(join(directory,`v2.${category}${colored?'_farben':''}.json`),'utf8'));
    const item=structuredClone(pack.items.find(i=>i.id===id||i.id.startsWith(id+'__')));delete item.product;
    const f={id:'new',type:`pack:preview.new:${item.id}`,x:1,z:1,w:item.size[0]*scale,d:item.size[1]*scale,h:item.size[2]*scale,rotation:0,variant:null,mount_y:0,bindings:{temperature:'sensor.preview_temperature'}};
    shots.push({name:`pack-${id}-${colored?'color':'neon'}`,query:'',width:1200,height:900,editor:true,mockPrivatePacks:true,shapePack:{id:'preview.new',name:'Neue Modelle',publisher:'Preview',items:[item]},then3d:'Erdgeschoss',camera:{theta:0.35,phi:category==='haustechnik'?1.2:0.7,radius:2.3,target:{x:1,y:category==='haustechnik'?0.5:0.05,z:1}},editorScript:`
      const panel=document.querySelector('neonplan3d-panel');panel.hass={...panel.hass,states:{...panel.hass.states,'sensor.preview_temperature':{entity_id:'sensor.preview_temperature',state:'20.0',attributes:{unit_of_measurement:'°C'}}}};
      panel._quality='high';
      e.change(b=>{b.floors=[b.floors[0]];b.settings.roof.type='none';b.settings.pets={on:false,list:[]};const floor=b.floors[0];floor.rooms=[{id:'new',name:'Neue Modelle · Vorschau vergrößert',area_id:null,points:[[0,0],[2,0],[2,2],[0,2]],floor_material:'wood'}];floor.furniture=[${JSON.stringify(f)}];floor.walls=[];floor.openings=[];floor.outdoor=[];floor.placements=[];});e.fit();
    `});
  }
  const refrigerators=load('kuechengeraete').filter(i=>['samsung_rs80f65kdfef','siemens_kg36ealca','mini_fridge_60','liebherr_fna6635_20'].includes(i.id));
  const fridgeFurniture=refrigerators.map((i,n)=>({id:i.id,type:`pack:preview.fridges:${i.id}`,x:1+n*2,z:2.5,w:i.size[0],d:i.size[1],h:i.size[2],rotation:0,variant:null,animations:false,bindings:Object.fromEntries((i.motions??[]).map(m=>[m.binding,'binary_sensor.preview_fridge']))}));
  shots.push({name:'pack-fridges-forward',query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,fridgesForward:true,shapePack:{id:'preview.fridges',name:'Fridges',publisher:'Preview',items:refrigerators},then3d:'Erdgeschoss',camera:{theta:0.3,phi:0.9,radius:10,target:{x:4,y:0.8,z:2.5}},editorScript:`
    const panel=document.querySelector('neonplan3d-panel');panel.hass={...panel.hass,states:{...panel.hass.states,'binary_sensor.preview_fridge':{entity_id:'binary_sensor.preview_fridge',state:'on',attributes:{device_class:'door'}}}};
    e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[{id:'fridges',name:'Kühlschranktüren',area_id:null,points:[[0,0],[8,0],[8,5],[0,5]],floor_material:'wood'}];f.furniture=${JSON.stringify(fridgeFurniture)};f.openings=[];f.outdoor=[];f.walls=[];f.placements=[];b.settings.roof.type='none';});e.fit();
  `});
  const stairs=load('treppen').filter(i=>/^open_[ul]_stair/.test(i.id));
  const round=[...load('garten').filter(i=>/^football_size_/.test(i.id)),...load('multimedia').filter(i=>/^echo_dot[34]_/.test(i.id))];
  for(const [name,items,scale] of [...stairs.map(i=>[i.id,[i],1]),['round-devices',round,8]]){
    const pack={id:'preview.round',name:'Native Shapes',publisher:'Preview',items};
    const furniture=items.map((i,n)=>({id:i.id,type:`pack:preview.round:${i.id}`,x:items.length===1?3:1+(n%4)*1.4,z:items.length===1?3:1+Math.floor(n/4)*1.7,w:i.size[0]*scale,d:i.size[1]*scale,h:i.size[2]*scale,rotation:0,variant:null}));
    shots.push({name:`pack-${name}`,query:'',width:1400,height:1000,editor:true,mockPrivatePacks:true,shapePack:pack,then3d:'Erdgeschoss',camera:{theta:0.5,phi:0.7,radius:items.length===1?8:10,target:{x:3,y:items.length===1?1.5:0.4,z:2.8}},editorScript:`e.change(b=>{b.floors=[b.floors[0]];const f=b.floors[0];f.rooms=[{id:'shapes',name:'Formen',area_id:null,ceiling_height:5,points:[[0,0],[6,0],[6,6],[0,6]],floor_material:'concrete'}];f.openings=[];f.outdoor=[];f.placements=[];f.walls=[];f.furniture=${JSON.stringify(furniture)};b.settings.roof.type='none';});e.fit();`});
  }
}
for (const shot of shots.filter((s) => !only || only.includes(s.name))) {
  const page = await browser.newPage();
  if (shot.freeformExercise || shot.spotsExercise || shot.roofWindowExercise) page.on("dialog", async (dialog) => { errors.push(`${shot.name}: ${dialog.message()}`); await dialog.dismiss(); });
  if (shot.mockPrivatePacks || shot.keptRoofNear !== undefined || shot.roofSunClosed !== undefined || shot.gableSide !== undefined || shot.solarBelow !== undefined || shot.roofHinge !== undefined) {
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const path = new URL(request.url()).pathname;
      if (path === "/private/packs/starter.json" || path === "/private/packs/src/index.json") {
        request.respond({ status: 200, contentType: "application/json", body: JSON.stringify(path.endsWith("index.json") ? [] : shot.shapePack ?? (shot.customPackExercise ? CUSTOM_PACK : { id: "preview.empty", name: "Preview", publisher: "Preview", items: [] })) });
      } else request.continue();
    });
  }
  page.on("pageerror", (e) => errors.push(`${shot.name}: ${e.message}`));
  page.on("console", (m) => m.type() === "error" && !m.location()?.url?.endsWith("favicon.ico") && errors.push(`${shot.name}: ${m.text()}`));
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 });
  // every shot starts with the default settings (the panel remembers quality and FPS per device)
  // (only on the first load of the tab, so a reload keeps what the page stored)
  await page.evaluateOnNewDocument(() => {
    if (sessionStorage.getItem("fp3d-shot")) return;
    sessionStorage.setItem("fp3d-shot", "1");
    localStorage.clear();
  });
  await page.goto(base + shot.query, { waitUntil: "networkidle0", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 1200));
  const clickText = async (text) => {
    await page.evaluate((t) => {
      const find = (root) => {
        // exact text, or the first part of a row button ("Flur" in "Flur 12,8 m²")
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      find(document)?.click();
    }, text);
    await new Promise((r) => setTimeout(r, 1200));
  };
  const hoverText = async (text) => {
    const at = await page.evaluate((t) => {
      const find = (root) => {
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      const el = find(document);
      if (!el) return null;
      el.scrollIntoView({ block: "center" });
      const r = el.getBoundingClientRect();
      return [r.left + r.width / 2, r.top + r.height / 2];
    }, text);
    if (at) await page.mouse.move(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1500));
  };
  if (shot.wait) await new Promise((r) => setTimeout(r, shot.wait));
  if (shot.editor) await clickText("Editor");
  if (shot.select) await clickText(shot.select);
  if (shot.click) await clickText(shot.click);
  if (shot.then) await clickText(shot.then);
  if (shot.tapAt) {
    await page.mouse.click(shot.tapAt[0], shot.tapAt[1]);
    await new Promise((r) => setTimeout(r, 900));
  }
  if (shot.editRoomName) {
    // change a room name through the panel's data controller, wait for the failed save, then reload
    await page.evaluate((name) => {
      const panel = document.querySelector("neonplan3d-panel");
      const b = structuredClone(panel.data.building);
      b.floors[0].rooms[0].name = name;
      panel.data.edit(b);
    }, shot.editRoomName);
    await new Promise((r) => setTimeout(r, 1500));
    if (shot.reload) {
      await page.reload({ waitUntil: "networkidle0", timeout: 120000 });
      await new Promise((r) => setTimeout(r, 1200));
    }
  }
  if (shot.viewScript) {
    // runs with v = the 3D view of the panel (search, quick menu, swipe)
    await page.evaluate((code) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      new Function("v", code)(v);
    }, shot.viewScript);
    await new Promise((r) => setTimeout(r, 1500 + (shot.afterWait ?? 0)));
  }
  if (shot.mouseClickIn) {
    // a real mouse click on an element inside the 3D view (CSS selector in its shadow root); prints the services called
    const at = await page.evaluate((sel) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const h = v.hass;
      window.__calls = [];
      const orig = h.callService.bind(h);
      h.callService = (d, s, data) => (window.__calls.push(`${d}.${s} ${JSON.stringify(data)}`), orig(d, s, data));
      const el = v.renderRoot.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return [r.x + r.width / 2, r.y + r.height / 2];
    }, shot.mouseClickIn);
    if (at) await page.mouse.click(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 400));
    console.log("CLICK", shot.mouseClickIn, at ? "at " + at.map(Math.round).join(",") : "NOT FOUND", await page.evaluate(() => JSON.stringify(window.__calls)));
  }
  if (shot.editorScript) {
    await page.evaluate((code) => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      new Function("e", code)(e);
    }, shot.editorScript);
    await new Promise((r) => setTimeout(r, 1200 + (shot.afterWait ?? 0)));
    if (shot.roofWindowExercise) {
      const at = await page.evaluate(() => {
        const e = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
        const el = e.shadowRoot.querySelector('[data-win-mid="free:0"]');
        if (!el) throw new Error('Freeform midpoint handles are missing');
        const r = el.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2];
      });
      await page.mouse.move(...at); await page.mouse.down(); await page.mouse.move(at[0] + 1, at[1] + 1); await page.mouse.up();
      await new Promise(r => setTimeout(r, 350));
      await page.evaluate(async () => {
        const e = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
        const settle = async () => { await e.updateComplete; await new Promise(r => setTimeout(r, 200)); };
        const current = () => e._doc.settings.roof.windows[0];
        if (current().points.length !== 7) throw new Error('Midpoint insertion lost on tiny drag');
        e.undo(); await settle(); if (current().points.length !== 6) throw new Error('Window contour undo failed');
        e.redo(); await settle(); if (current().points.length !== 7) throw new Error('Window contour redo failed');
        const select = [...e.shadowRoot.querySelectorAll('label')].find(l => l.textContent.includes('Auszugsrichtung')).querySelector('select');
        select.value = 'right'; select.dispatchEvent(new Event('change')); await settle();
        if (current().cover_direction !== 'right' || current().cover !== 'cover.terrasse') throw new Error('Shading configuration lost the cover binding');
        [...e.shadowRoot.querySelectorAll('button')].find(b => b.textContent.trim() === 'Kontur neu zeichnen').click(); await settle();
      });
      for (const point of [[1,1],[5,1],[5,2.2],[2.2,2.2],[2.2,4],[1,4]]) {
        const pos = await page.evaluate(p => {
          const e = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
          const a = e.toScreen(p), r = e.shadowRoot.querySelector('svg.fp3d-plan').getBoundingClientRect(); return [a[0]+r.x,a[1]+r.y];
        }, point);
        await page.mouse.click(...pos); await new Promise(r => setTimeout(r, 100));
      }
      await page.evaluate(async () => {
        const e = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
        if(e._draft.length !== 6) throw new Error('Freeform roof-window drawing failed: '+e._draft.length);
        e.closeDraft(); await e.updateComplete; await new Promise(r => setTimeout(r, 250));
        const w = e._doc.settings.roof.windows[0];
        if(w.points.length !== 6 || w.w < 3.9 || w.h < 2.9 || w.cover_style !== 'awning' || w.contact !== 'binary_sensor.terrasse' || !w.float) throw new Error('Redrawing lost geometry or original window settings');
        const data = document.querySelector('neonplan3d-panel').data.building.settings.roof.windows[0];
        if(JSON.stringify(data)!==JSON.stringify(w))throw new Error('Parent plan did not receive the freeform window');
        if(e.shadowRoot.querySelector('aside').scrollWidth > e.shadowRoot.querySelector('aside').clientWidth + 2)throw new Error('Window controls overflow the sidebar');
      });
      console.log('verified freeform roof-window drawing, tiny-drag insertion, undo/redo, shading and plan bindings');
    }
    if (shot.spotsExercise) {
      await page.evaluate(async () => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const settle = async () => { await e.updateComplete; await new Promise((r) => setTimeout(r, 150)); };
        const open = async () => {
          const actions = e.shadowRoot.querySelector('details.fp3d-points')?.nextElementSibling;
          const names = [...(actions?.querySelectorAll('button') ?? [])].map((b) => b.textContent.trim());
          if (names.join('|') !== 'Spots setzen|Duplizieren|Löschen') throw new Error('Contour actions do not match the intended ceiling workflow: ' + names.join('|'));
          const button = [...e.shadowRoot.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Spots setzen');
          if (!button) throw new Error('Missing Spots setzen action'); button.click(); await settle();
          const labels = [...e.shadowRoot.querySelectorAll('.fp3d-spot-form label')];
          for (const [text, value] of [['Spalten', '2'], ['Reihen', '3']]) {
            const input = labels.find((l) => l.textContent.includes(text)).querySelector('input');
            input.value = value; input.dispatchEvent(new Event('change')); await settle();
          }
          e._spots = { ...e._spots, entity: 'light.led_band' }; await settle();
        };
        const place = async () => {
          const button = e.shadowRoot.querySelector('.fp3d-spot-form .fp3d-primary');
          if (!button || button.disabled) throw new Error('Cannot place the lamp raster'); button.click(); await settle();
        };
        await open(); await place();
        const f = e._doc.floors[0], first = f.furniture;
        if (first.length !== 5 || !first.every((l) => l.entity === 'light.led_band' && l.mount_y > 0)) throw new Error('Canopy raster or heights incorrect');
        if (new Set(first.map((l) => l.mount_y)).size < 2) throw new Error('Canopy lamps do not follow the slope');
        // Placement is one undo step and redo keeps the same lamp ids.
        const ids = first.map((l) => l.id).join(','); e.undo(); await settle();
        if (e._doc.floors[0].furniture.length) throw new Error('Spot placement undo failed');
        e.redo(); await settle(); if (e._doc.floors[0].furniture.map((l) => l.id).join(',') !== ids) throw new Error('Spot redo changed ids');
        e._tool = 'select'; e.selectItem('outdoor', 'pergola_spots'); await settle();
        await open(); await place();
        if (e._doc.floors[0].furniture.length !== 11) throw new Error('Pergola raster not placed');
        const added = e._doc.floors[0].furniture.slice(5);
        if (!added.every((l) => Math.abs(l.mount_y + l.h - 2.5) < 0.001)) throw new Error('Pergola uses the room height instead of its own height');
        e._tool = 'roof'; e._roofId = 'canopy_spots'; await settle(); await open();
      });
      await new Promise((r) => setTimeout(r, 1500));
      await page.evaluate(async () => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const saved = await e.hass.callWS({ type: 'neonplan3d/building/get' });
        if (saved.building.floors[0].furniture.length !== 11) throw new Error('Lamp mounting data did not save');
      });
      console.log(`verified canopy/pergola raster, heights, links, undo/redo and save: ${shot.name}`);
    }
    if (shot.rectangleExercise) {
      for (const kind of ['outdoor', 'roof']) {
        if (kind === 'roof') await page.evaluate(() => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
          e._tool = 'roof'; e._roofId = 'legacy_roof';
        });
        await new Promise((r) => setTimeout(r, 400));
        const drag = await page.evaluate((kind) => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
          const svg = e.shadowRoot.querySelector('svg.fp3d-plan'), r = svg.getBoundingClientRect(), scale = Math.min(r.width / 16, r.height / 12);
          e._view = { scale, ox: r.width / 2 - 2 * scale, oy: r.height / 2 - 3 * scale };
          const points = kind === 'roof' ? e.roofPoints(e.roofSection) : e.outdoorArea.points, p = points[0];
          const world = (p) => [e._view.ox + p[0] * scale + r.left, e._view.oy + p[1] * scale + r.top];
          const list = e.shadowRoot.querySelector('details.fp3d-points');
          if (!list?.open || list.querySelectorAll('.fp3d-point').length !== 4) throw new Error('Legacy rectangle is not editable by default');
          return { from: world(p), to: world([p[0], -0.5]) };
        }, kind);
        await new Promise((r) => setTimeout(r, 200));
        await page.keyboard.down('Alt'); await page.mouse.move(...drag.from); await page.mouse.down();
        await page.mouse.move(...drag.to, { steps: 5 }); await page.mouse.up(); await page.keyboard.up('Alt');
        await new Promise((r) => setTimeout(r, 300));
        await page.evaluate((kind) => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
          const points = kind === 'roof' ? e.roofSection.points : e.outdoorArea.points;
          if (!points || points[0][1] !== -0.5 || points[1][1] !== 0) throw new Error('Legacy rectangle still moves neighbouring corners: ' + kind);
        }, kind);
      }
      console.log('verified independent editing of legacy rectangular outdoor areas and roofs');
    }
    if (shot.freeformExercise) {
      await page.evaluate(() => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const svg = e.shadowRoot.querySelector("svg.fp3d-plan"), r = svg.getBoundingClientRect();
        if (e.narrow && r.width > window.innerWidth + 1) throw new Error("The phone's drawing canvas overflows the viewport");
        if (e._drawShape !== 'polygon') throw new Error("Free drawing is not the default");
      });
      const draw = async (points) => {
        for (const point of points) {
          const at = await page.evaluate((p) => {
            const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
            const svg = e.shadowRoot.querySelector("svg.fp3d-plan"), r = svg.getBoundingClientRect(), q = e.toScreen(p);
            return [r.left + q[0], r.top + q[1]];
          }, point);
          await page.mouse.click(...at);
        }
        await page.keyboard.press("Enter");
        await new Promise((r) => setTimeout(r, 400));
      };
      const insertAndDrag = async (kind) => {
        const at = await page.evaluate((kind) => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
          const mark = [...e.shadowRoot.querySelectorAll('[data-contour-mid]')].find((m) => m.getAttribute('data-contour-mid').startsWith(kind + ':'));
          if (!mark) throw new Error('Missing + edge marker: ' + kind);
          const r = mark.querySelector('circle:not(.fp3d-hit)').getBoundingClientRect();
          return [r.left + r.width / 2, r.top + r.height / 2];
        }, kind);
        await page.mouse.click(...at);
        await new Promise((r) => setTimeout(r, 200));
        const drag = await page.evaluate((kind) => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor"), selection = e._contourVertex;
          const points = kind === 'roof' ? e.roofSection.points : e.outdoorArea.points;
          if (points.length !== 7 || selection?.kind !== kind || selection.index !== 1) throw new Error('Edge insertion did not select the new vertex');
          const r = e.shadowRoot.querySelector('svg.fp3d-plan').getBoundingClientRect(), p = points[1];
          return { from: e.toScreen(p).map((n, i) => n + (i ? r.top : r.left)), to: e.toScreen([p[0], p[1] - 0.25]).map((n, i) => n + (i ? r.top : r.left)) };
        }, kind);
        await page.keyboard.down('Alt');
        await page.mouse.move(...drag.from); await page.mouse.down();
        await page.mouse.move(...drag.to, { steps: 5 }); await page.mouse.up();
        await page.keyboard.up('Alt');
        await new Promise((r) => setTimeout(r, 200));
        await page.evaluate((kind) => {
          const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
          const points = kind === 'roof' ? e.roofSection.points : e.outdoorArea.points;
          if (points[1][1] !== -0.25 || points[0][1] !== 0) throw new Error(`Independent ${kind} vertex drag failed: ${JSON.stringify(points)}`);
        }, kind);
      };
      await draw([[-4, 0], [-1, 0], [-1, 3], [-2, 3], [-2, 6], [-4, 6]]);
      await insertAndDrag('outdoor');
      await page.keyboard.press('Delete');
      await new Promise((r) => setTimeout(r, 200));
      await page.evaluate(() => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        if (e.outdoorArea.points.length !== 6) throw new Error('Delete removed the area instead of the selected corner');
        // Undo delete, drag and insertion, leaving only the initial area creation in history.
        e.undo(); e.undo(); e.undo();
      });
      await new Promise((r) => setTimeout(r, 200));
      const outdoor = await page.evaluate(() => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const a = e._doc.floors[0].outdoor[0];
        if (!a?.freeform || a.points.length !== 6) throw new Error("Outdoor polygon was not drawn");
        e.undo(); if (e._doc.floors[0].outdoor.length) throw new Error("Outdoor undo failed");
        e.redo(); e.updateOutdoor({ type: 'terrace' });
        e._tool = 'roof'; e._roofId = null;
        return a.points;
      });
      await new Promise((r) => setTimeout(r, 300));
      await page.evaluate(() => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const r = e.shadowRoot.querySelector("svg.fp3d-plan").getBoundingClientRect(), scale = Math.min(r.width / 16, r.height / 12);
        e._view = { scale, ox: r.width / 2 - 2 * scale, oy: r.height / 2 - 3 * scale };
      });
      await new Promise((r) => setTimeout(r, 200));
      await draw([[0, 0], [8, 0], [8, 2.5], [3, 2.5], [3, 6], [0, 6]]);
      await insertAndDrag('roof');
      const roof = await page.evaluate(async () => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        if (e.roofSection.points.length !== 7) throw new Error("Roof polygon edge insertion failed");
        const details = () => [...e.shadowRoot.querySelectorAll('details')].find((d) => d.querySelector('summary')?.textContent.includes('Eckpunkte'));
        const settle = async () => { await e.updateComplete; await new Promise((r) => setTimeout(r, 100)); };
        if (!details().open || !details().matches('.fp3d-points') || !details().querySelector('.fp3d-point')) throw new Error('Corner list does not match the rooms');
        [...details().querySelectorAll('button[title="Punkt löschen"]')][1].click();
        await settle();
        if (e.roofSection.points.length !== 6) throw new Error(`Remove vertex failed (${e.roofSection.points.length} vertices)`);
        const sec = e.roofSection;
        const input = details().querySelector('input');
        input.value = '-0.2'; input.dispatchEvent(new Event('change'));
        await settle();
        if (e.roofSection.points[0][0] !== -0.2 || e.roofSection.points[5][0] !== 0) throw new Error("Independent vertex edit failed");
        e.undo();
        await settle();
        e.duplicateRoofSection();
        const copy = e.roofSection;
        if (copy.points.some((p, i) => p[0] !== sec.points[i][0] + 1 || p[1] !== sec.points[i][1] + 1)) throw new Error("Polygon duplicate did not move its vertices");
        e.undo(); e._roofId = sec.id;
        e.updateRoofSection({ shape: 'gable', open: false, overhang: 0, eave_a: 3, eave_b: 3, base: 3 });
        return e.roofSection.points;
      });
      // Wait for the simulated backend save, then check the actual stored document.
      await new Promise((r) => setTimeout(r, 1500));
      const saved = await page.evaluate(async () => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        const { building } = await e.hass.callWS({ type: 'neonplan3d/building/get' });
        return { outdoor: building.floors[0].outdoor[0]?.points, roof: building.settings.roof.sections[0]?.points };
      });
      if (JSON.stringify(saved) !== JSON.stringify({ outdoor, roof })) throw new Error(`${shot.name}: free contours did not persist`);
      console.log(`verified drawing, vertex editing, undo/redo, duplication and save: ${shot.name}`);
    }
    if (shot.roomLevelsSide) {
      await page.evaluate(async (side) => {
        const e = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
        const settle = async () => { await e.updateComplete; await new Promise((r) => setTimeout(r, 150)); };
        const setNumber = async (label, value) => {
          const field = [...e.shadowRoot.querySelectorAll('label.fp3d-field')].find((l) => l.textContent.trim() === label);
          const input = field?.querySelector('input'); if (!input) throw new Error('Missing field: ' + label);
          input.value = String(value); input.dispatchEvent(new Event('change')); await settle();
        };
        e.selectItem('room', 'low'); await settle(); await setNumber('Deckenhöhe (m)', 4);
        e.selectItem('room', 'high'); await settle(); await setNumber('Wandbeginn über Etagenboden (m)', 0.1); await setNumber('Raumboden über Wandbeginn (m)', 0.5); await setNumber('Deckenhöhe (m)', 3.4);
        if (e._doc.floors[0].height !== 2.6 || e._doc.floors[0].elevation !== 0) throw new Error('Room editing changed floor defaults');
        const reset = [...e.shadowRoot.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Etagenhöhen übernehmen');
        if (!reset) throw new Error('Missing inheritance reset'); reset.click(); await settle();
        if (e.room.wall_offset !== null || e.room.floor_offset !== null || e.room.elevation !== null || e.room.height !== null || e.room.ceiling_height !== null) throw new Error('Room defaults did not reset');
        e.undo(); await settle();
        if (e.room.wall_offset !== 0.1 || e.room.floor_offset !== 0.5 || e.room.ceiling_height !== 3.4) throw new Error('Undo did not restore independent room heights');
        e.selectItem('opening', 'level_passage'); await settle();
        const label = [...e.shadowRoot.querySelectorAll('label.fp3d-field')].find((l) => l.textContent.includes('Stufen in diesem Raum'));
        const select = label?.querySelector('select'); if (!select) throw new Error('Missing stair side selector');
        select.value = side; select.dispatchEvent(new Event('change')); await settle();
        await setNumber('Anzahl Stufen', 3); await setNumber('Gesamttiefe (m)', 1);
        await setNumber('Stufenversatz (m)', 0.3);
        if (!e.shadowRoot.querySelector('.fp3d-step-landing')) throw new Error('Missing positive-offset landing');
        await setNumber('Stufenversatz (m)', -0.3);
        if (e.shadowRoot.querySelector('.fp3d-step-landing')) throw new Error('Negative offset must not add a landing over the stairs');
        const before = JSON.stringify(e._doc); e.undo(); await settle(); e.redo(); await settle();
        if (JSON.stringify(e._doc) !== before) throw new Error('Level/step undo and redo did not preserve data');
        const svg = e.shadowRoot.querySelector('.fp3d-level-steps');
        if (!svg || svg.querySelectorAll('line').length !== 4) throw new Error('The editor does not show all treads');
      }, shot.roomLevelsSide);
      await new Promise((r) => setTimeout(r, 1500));
      await page.evaluate(async (side) => {
        const e = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
        const saved = (await e.hass.callWS({ type: 'neonplan3d/building/get' })).building.floors[0];
        if (saved.rooms[1].wall_offset !== 0.1 || saved.rooms[1].floor_offset !== 0.5 || saved.rooms[1].ceiling_height !== 3.4 || saved.openings[0].steps.side !== side || saved.openings[0].steps.offset !== -0.3) throw new Error('Room levels and steps did not save');
      }, shot.roomLevelsSide);
      console.log('verified independent heights, stair side, undo/redo and save: ' + shot.name);
    }
    if (shot.roofHinge) {
      await page.evaluate(async (hinge) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        for (const value of ['top', 'middle', 'bottom', hinge]) {
          await e.updateComplete;
          const label = [...e.shadowRoot.querySelectorAll('label')].find((l) => l.textContent.includes('Angelpunkt'));
          const select = label?.querySelector('select');
          if (!select || select.disabled || select.options.length !== 3) throw new Error('Pivot selector is missing');
          select.value = value; select.dispatchEvent(new Event('change', { bubbles: true }));
          if (e._doc.settings.roof.windows[0].hinge !== value) throw new Error('Pivot selection was not stored');
        }
      }, shot.roofHinge);
    }
    // DEBUG_EVAL="<code using e>" prints what the editor says (for looking into a scene)
    if (process.env.DEBUG_EVAL) {
      const out = await page.evaluate((code) => {
        const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
        try {
          return String(new Function("e", "return " + code)(e));
        } catch (err) {
          return "ERROR " + err.message;
        }
      }, process.env.DEBUG_EVAL);
      console.log("DEBUG", out);
    }
    if (shot.then3d) {
      await clickText("3D");
      await clickText(shot.then3d);
      for (const t of [shot.then3dAlso ?? []].flat()) await clickText(t);
      if (shot.houseView) {
        // A one-floor fixture has no "All floors" button; select the house view explicitly.
        await page.evaluate(() => {
          const panel = document.querySelector("neonplan3d-panel");
          panel._floorId = null; panel._roomId = null;
        });
        await new Promise((r) => setTimeout(r, 400));
      }
      if (shot.camera) {
        // turn the camera (radius, theta, phi around the house) for a view from another side
        await page.evaluate((cam) => {
          const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
          const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
          const { target, houseView, ...rest } = cam;
          if (houseView) { viewer.setFloor(null, false); viewer.setKeepRoof(true); }
          if (target) viewer.controls.view.target.set(target.x, target.y ?? 1, target.z);
          Object.assign(viewer.controls.view, rest);
          viewer.invalidate();
        }, { ...shot.camera, houseView: !!shot.houseView });
        await new Promise((r) => setTimeout(r, 1500));
        if (shot.houseView) await page.evaluate(() => {
          const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
          const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
          if (!viewer.roof?.group.visible || !viewer.roof.parts.length) throw new Error("The free roof is not visible in the house view");
        });
      }
      // DEBUG_VIEW="<code using v>" prints what the panel's 3D view says after the switch
      if (process.env.DEBUG_VIEW) {
        const out = await page.evaluate((code) => {
          const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
          try {
            return String(new Function("v", "return " + code)(v));
          } catch (err) {
            return "ERROR " + err.message;
          }
        }, process.env.DEBUG_VIEW);
        console.log("DEBUG_VIEW", out);
      }
    }
  }
  if (shot.keptRoofNear !== undefined) {
    await page.evaluate((near) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      v.setKeepRoof(true);
      v.controls.view.radius = v.houseRadius * (near ? 0.6 : 1.1);
      v.invalidate();
    }, shot.keptRoofNear);
    await new Promise((r) => setTimeout(r, 1600));
    await page.evaluate(() => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      if (!v.roof?.group.visible || Math.abs(v.roof.solid.opacity - 1) > 0.005) throw new Error('Kept roof visibility is incorrect');
      for (const part of v.roof.parts) {
        const fv = v.floorMap.get(part.floorId);
        if (Math.abs(part.group.position.y - (fv.floor.elevation + fv.y + part.base)) > 0.005) throw new Error('Kept roof lifted while zooming');
      }
      if (v.roof.solid.depthWrite) throw new Error('Glass roof still occludes the room');
    });
  }
  if (shot.roofAwning) {
    await page.evaluate(() => {
      const v = document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-view3d').viewer;
      v.setKeepRoof(true); v.setWeather(null);
      v.setRoofWindows(new Map([['free', {open:0,tilt:0,cover:0.55}]])); v.invalidate();
    });
    await new Promise(r => setTimeout(r, 500));
  }
  if (shot.roofSunClosed !== undefined) {
    await page.evaluate((closed) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      v.setWeather(null); v.setSun({ elevation: 70, azimuth: 180 });
      v.setRoofWindows(new Map([['sky', { open: 0, tilt: 0, cover: 0 }]]));
      const fv = v.floors[0];
      if (!fv.sunMesh.visible || !fv.sunMesh.geometry.getAttribute('position').count) throw new Error('Skylight sunlight is missing');
      v.setRoofWindows(new Map([['sky', { open: 0, tilt: 0, cover: 1 }]]));
      if (fv.sunMesh.visible || fv.sunMesh.geometry.getAttribute('position').count) throw new Error('Closed skylight blind still lets sunlight through');
      if (!closed) v.setRoofWindows(new Map([['sky', { open: 0, tilt: 0, cover: 0 }]]));
      v.setWallMode('cut');
      Object.assign(v.controls.view, { radius: 12, theta: 0.5, phi: 0.65 });
      v.controls.view.target.set(5, 0.5, 4); v.invalidate();
    }, shot.roofSunClosed);
    await new Promise((r) => setTimeout(r, 1600));
  }
  if (shot.gableSide !== undefined) {
    await page.evaluate((side) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      v.setFloor(null, false);
      v.setKeepRoof(true);
      Object.assign(v.controls.view, { radius: 16, theta: side * Math.PI / 2, phi: 1.3 });
      v.controls.view.target.set(5, 2.5, 4); v.invalidate();
    }, shot.gableSide);
    await new Promise((r) => setTimeout(r, 1600));
    await page.evaluate(() => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      if (!v.roof?.group.visible) throw new Error('Gable test roof is not visible');
    });
  }
  if (shot.solarBelow !== undefined) {
    await page.evaluate((below) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      v.setFloor(null, false); v.setKeepRoof(true); v.setSolarLevels(new Map([['pv-test', 1]]));
      Object.assign(v.controls.view, { radius: below ? 4 : 12, theta: below ? 0 : 0.4, phi: below ? 2 : 0.7 });
      v.controls.view.target.set(5, 3.8, 4); v.invalidate();
    }, shot.solarBelow);
    await new Promise((r) => setTimeout(r, 1600));
    await page.evaluate((below) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      if (!v.roof?.group.visible) throw new Error('Solar test roof is hidden');
      let count = 0;
      v.roof.group.traverse((mesh) => {
        if (!mesh.geometry || ![v.roof.solar, v.roof.solarLines, v.roof.live].includes(mesh.material)) return;
        const n = mesh.geometry.getAttribute('solarNormal'), p = mesh.geometry.getAttribute('solarPoint');
        if (!n?.count || p?.count !== n.count) throw new Error('Solar facing data missing');
        for (let i = 0; i < n.count; i++) {
          const normal = v.camera.position.clone().set(n.getX(i), n.getY(i), n.getZ(i)).transformDirection(mesh.matrixWorld);
          const point = v.camera.position.clone().set(p.getX(i), p.getY(i), p.getZ(i)).applyMatrix4(mesh.matrixWorld);
          const facing = normal.dot(v.camera.position.clone().sub(point));
          if (below ? facing >= 0 : facing <= 0) throw new Error('Solar test camera is on the wrong side');
        }
        count++;
      });
      if (count < 3) throw new Error('Module, grid or live overlay is missing');
    }, shot.solarBelow);
  }
  if (shot.roofHinge) {
    await page.evaluate((hinge) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d").viewer;
      if (v.building.settings.roof.windows[0].hinge !== hinge) throw new Error('Pivot did not reach the viewer');
      v.setFloor(null, false); v.setKeepRoof(true);
      v.setRoofWindows(new Map([['sky', { open: 1, tilt: 0, cover: 0.4 }]]));
      Object.assign(v.controls.view, { radius: 4, theta: 0.4, phi: 0.8 });
      v.controls.view.target.set(5, 3.7, 5.5); v.invalidate();
    }, shot.roofHinge);
    await new Promise((r) => setTimeout(r, 1600));
  }
  if (shot.furnishDrag) {
    await clickText("Einrichten");
    // screen position of the item: project its centre with the viewer's camera
    const at = await page.evaluate((id) => {
      const view = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const v = view.viewer;
      const fv = v.floors.find((f) => f.floor.furniture.some((m) => m.id === id));
      const f = fv.floor.furniture.find((m) => m.id === id);
      const p = v.camera.position.clone().set(f.x, fv.floor.elevation + fv.y + f.h * 0.6, f.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishDrag.id);
    await page.mouse.move(at[0], at[1]);
    await page.mouse.down();
    for (let i = 1; i <= 10; i++) await page.mouse.move(at[0] + (shot.furnishDrag.dx * i) / 10, at[1] + (shot.furnishDrag.dy * i) / 10);
    await page.mouse.up();
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.furnishTap) {
    await clickText("Einrichten");
    const at = await page.evaluate((pt) => {
      const view = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const v = view.viewer;
      const fv = v.floors[0];
      const p = v.camera.position.clone().set(pt.x, fv.floor.elevation + fv.y + 0.02, pt.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishTap);
    await page.mouse.click(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1200));
  }
  if (shot.editorState) {
    await page.evaluate((state) => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      Object.assign(editor, state);
    }, shot.editorState);
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.hover) await hoverText(shot.hover);
  if (shot.openDetails) {
    await page.evaluate(() => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      for (const d of editor.shadowRoot.querySelectorAll("details.fp3d-section")) d.open = !d.querySelector(".fp3d-library");
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.scrollSide) {
    await page.evaluate(() => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const side = editor.shadowRoot.querySelector(".fp3d-side");
      side.scrollTop = side.scrollHeight;
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.showSpotForm) {
    await page.evaluate(() => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      e.shadowRoot.querySelector('.fp3d-spot-form')?.scrollIntoView({ block: 'center' });
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if(shot.contourPressDrag){
    for(const kind of ['outdoor','roof']){
      const at=await page.evaluate(async kind=>{
        const e=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
        if(kind==='roof'){e._tool='roof';e._roofId='canopy';}else e.selectItem('outdoor','area');
        await e.updateComplete;await new Promise(r=>setTimeout(r,100));
        const marker=e.shadowRoot.querySelector(`[data-contour-mid="${kind}:${kind==='roof'?'canopy':'area'}:0"] circle:not(.fp3d-hit)`);
        if(!marker)throw new Error('Missing + marker');const r=marker.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2];
      },kind);
      await page.mouse.move(...at);await page.mouse.down();await new Promise(r=>setTimeout(r,100));
      await page.mouse.move(at[0]+1,at[1]+1,{steps:2});await new Promise(r=>setTimeout(r,100));await page.mouse.up();
      await page.evaluate(async kind=>{
        const e=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');await e.updateComplete;
        const settle=async()=>{await e.updateComplete;await new Promise(r=>setTimeout(r,150));};
        const points=()=>kind==='roof'?e.roofSection.points:e.outdoorArea.points;
        if(points()?.length!==5)throw new Error('Click/press movement lost the inserted '+kind+' vertex: '+points()?.length);
        e.undo();await settle();if((kind==='roof'?e.roofPoints(e.roofSection):e.outdoorArea.points).length!==4)throw new Error('Insertion undo failed');
        e.redo();await settle();if(points().length!==5)throw new Error('Insertion redo failed');
      },kind);
    }
    console.log('verified + press with mouse jitter preserves inserted outdoor/roof corners and undo/redo');
  }
  if(shot.gravelBed){
    await page.evaluate(async()=>{
      const e=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
      const select=[...e.shadowRoot.querySelectorAll('select')].find(s=>[...s.options].some(o=>o.value==='gravel_bed')&&s.value==='lawn');
      if(!select)throw new Error('Kiesbeet absent from outdoor kind selector');
      const points=JSON.stringify(e.floor.outdoor[0].points);select.value='gravel_bed';select.dispatchEvent(new Event('change',{bubbles:true}));
      await e.updateComplete;await new Promise(r=>setTimeout(r,300));
      const a=e.floor.outdoor[0];if(a.type!=='gravel_bed'||JSON.stringify(a.points)!==points||a.offset!==0.2||a.slope!==0.08)throw new Error('Gravel selection lost its contour/height/slope');
      if(!e.shadowRoot.querySelector('.fp3d-out-gravel_bed'))throw new Error('Gravel plan styling missing');
    });
    console.log('verified gravel bed selection and preserved free contour, offset and slope');
  }
  if(shot.glassSlider){
    await page.evaluate(async()=>{
      const panel=document.querySelector('neonplan3d-panel'),e=panel.shadowRoot.querySelector('fp3d-editor');
      const select=[...e.shadowRoot.querySelectorAll('select')].find(s=>[...s.options].some(o=>o.value==='sliding_glass'));
      if(!select)throw new Error('Glass slider absent from opening style selector');
      select.value='sliding_glass';select.dispatchEvent(new Event('change',{bubbles:true}));await e.updateComplete;await new Promise(r=>setTimeout(r,800));
      if(e.floor.openings[0].style!=='sliding_glass'||e.floor.openings[0].contact!=='binary_sensor.preview_glass'||e.floor.furniture.length)throw new Error('Glass slider did not remain a linked opening');
      const view=e.shadowRoot.querySelector('fp3d-view3d'),fv=view.viewer.floors[0];
      if(!fv.geo.openings.some(o=>o.opening.id==='glass')||!fv.glassMesh.geometry.getAttribute('position').count)throw new Error('Missing wall opening or glass pane');
      if(fv.openings.get('glass').open<0.99)throw new Error('Glass slider does not follow contact');
      panel.hass={...panel.hass,states:{...panel.hass.states,'binary_sensor.preview_glass':{entity_id:'binary_sensor.preview_glass',state:'off',attributes:{device_class:'door'}}}};
      await panel.updateComplete;
      const deadline=Date.now()+6000;
      while(view.viewer.floors[0].openings.get('glass').open>0.01&&Date.now()<deadline)await new Promise(r=>setTimeout(r,100));
      const latest=view.viewer.floors[0];
      if(latest.openings.get('glass').open>0.01)throw new Error('Glass slider does not close: '+JSON.stringify({open:latest.openings.get('glass').open,target:latest.openings.get('glass').targetOpen,view:view.hass.states['binary_sensor.preview_glass'].state,panel:panel.hass.states['binary_sensor.preview_glass'].state}));
    });
    console.log('verified glass sliding door selection, wall opening, glass pane and contact-driven open/close without inventory furniture');
  }
  if(shot.negativeHeights){
    await page.evaluate(async()=>{
      const e=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
      const settle=async()=>{await e.updateComplete;await new Promise(r=>setTimeout(r,150));};
      // The 1.18 toolbar and custom contour controls must select the same drawing mode.
      for(const [key,polygon] of [['outdoor_shape_rect',false],['outdoor_shape_free',true]]){
        e._toolMenu='outside';e._toolOpen='outdoor';await settle();
        const button=[...e.shadowRoot.querySelectorAll('.fp3d-menu-sub button')].find(b=>b.textContent.trim()===e.t(key));
        if(!button)throw new Error('Missing original outdoor menu choice: '+key);
        button.click();await settle();
        if(e.drawingPolygon!==polygon||e._outdoorFree!==polygon)throw new Error('Toolbar contour choice disagrees with drawing mode');
      }
      e._toolMenu=null;e._toolOpen=null;e.setTool('select');await settle();
      for(const [kind,id,key,property] of [['furniture','chair','mount_height','mount_y'],['opening','door','mount_height','sill'],['opening','window','sill','sill'],['opening','garage','mount_height','sill'],['outdoor','fence','outdoor_offset','offset']]){
        e.selectItem(kind,id);await settle();
        const list=()=>kind==='opening'?e.floor.openings:kind==='outdoor'?e.floor.outdoor:e.floor.furniture;
        const before=structuredClone(list().find(o=>o.id===id));
        const input=[...e.shadowRoot.querySelectorAll('label.fp3d-field')].find(l=>l.textContent.trim().startsWith(e.t(key)))?.querySelector('input');
        if(!input)throw new Error(id+' lacks a signed height field');
        input.value='-0.4';input.dispatchEvent(new Event('change',{bubbles:true}));await settle();
        const changed=list().find(o=>o.id===id);
        if(changed[property]!==-0.4||(changed.h??changed.height)!==(before.h??before.height))throw new Error(id+' negative height was rejected or changed dimensions');
        if(kind==='opening'){
          const view=e.shadowRoot.querySelector('fp3d-view3d'),opening=view.viewer.floors[0].geo.openings.find(o=>o.opening.id===id);
          if(Math.abs(opening.sill+0.4)>0.001)throw new Error(id+' geometry did not follow negative position');
        }
        e.undo();await settle();if((list().find(o=>o.id===id)[property]??null)!==(before[property]??null))throw new Error(id+' height undo failed');
        e.redo();await settle();if(list().find(o=>o.id===id)[property]!==-0.4)throw new Error(id+' height redo failed');
      }
      e.selectItem('opening','door');await settle();
    });
    console.log('verified original toolbar contour choices, negative chair/door/window/garage/fence heights, geometry and undo/redo');
  }
  if(shot.stairHeight){
    await page.evaluate(async()=>{
      const e=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-editor');
      const settle=async()=>{await e.updateComplete;await new Promise(r=>setTimeout(r,80));};
      for(const type of ['stairs','stairs_u']){
        e.selectItem('furniture',type);await settle();
        for(const value of [0.6,-0.4]){
        const before=structuredClone(e.floor.furniture.find(f=>f.id===type));
        const input=[...e.shadowRoot.querySelectorAll('label.fp3d-field')].find(l=>l.textContent.trim().startsWith(e.t('mount_height')))?.querySelector('input');
        if(!input)throw new Error(type+' has no vertical position field');
        input.value=String(value);input.dispatchEvent(new Event('change',{bubbles:true}));await settle();
        const f=e.floor.furniture.find(f=>f.id===type);
        if(f.mount_y!==value||f.x!==before.x||f.z!==before.z||f.h!==before.h)throw new Error('Stair height control changed the wrong coordinates');
        e.undo();await settle();if((e.floor.furniture.find(f=>f.id===type).mount_y??null)!==(before.mount_y??null))throw new Error('Vertical stair undo failed');
        e.redo();await settle();if(e.floor.furniture.find(f=>f.id===type).mount_y!==value)throw new Error('Vertical stair redo failed');
        }
      }
    });
    console.log('verified standard straight/U stair height fields and undo/redo without changing X/Z or model height');
  }
  if(shot.dishwasherOpen){
    await page.evaluate(()=>{
      const view=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-view3d');
      const item=[...view.viewer.customLayers.values()].flatMap(l=>l.items).find(i=>i.f.id==='dish'),motion=item?.motions.find(m=>m.definition.id==='door');
      if(!motion||motion.shown!==1)throw new Error('Dishwasher did not open');
      motion.group.updateWorldMatrix(true,false);
      const hinge=motion.group.localToWorld(motion.group.position.clone().set(0,0,0));
      const top=motion.group.localToWorld(motion.group.position.clone().set(0,0.7,0));
      if(top.z<hinge.z+0.69||Math.abs(top.y-hinge.y)>0.001)throw new Error('Dishwasher did not fold forward and down');
      if(!item.parts.some(p=>p.part.id==='p006'&&p.mesh.parent===motion.group))throw new Error('Control panel lost its door attachment');
    });console.log('verified dishwasher folds forward/down with its control panel');
  }
  if(shot.fridgesForward){
    await page.evaluate(()=>{
      const view=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-view3d'),v=view.viewer;
      let doors=0;for(const layer of v.customLayers.values())for(const item of layer.items)for(const motion of item.motions){
        if(motion.shown!==1)throw new Error('Refrigerator door did not open');
        motion.group.updateWorldMatrix(true,false);
        const hinge=motion.group.localToWorld(motion.group.position.clone().set(0,0,0));
        const edge=motion.group.localToWorld(motion.group.position.clone().set((motion.definition.pivot[0]<0?0.3:-0.3)*item.f.w,0,0));
        if(edge.z<=hinge.z)throw new Error(item.f.id+' opens into its cabinet');doors++;
      }
      if(doors!==6)throw new Error('Expected six independent refrigerator doors');
    });
    console.log('verified six refrigerator doors swing forward around their declared hinges');
  }
  if(shot.upwardSpot){
    await page.evaluate(()=>{
      const view=document.querySelector('neonplan3d-panel').shadowRoot.querySelector('fp3d-view3d'),v=view.viewer,fv=v.floors[0];
      if(!v.lightSources(fv).some(s=>s.direction?.[1]>0.5))throw new Error('Upward source missing');
      const pos=fv.coneMesh.geometry.getAttribute('position');if(!pos.count)throw new Error('Upward cone missing');
      for(let i=0;i<pos.count;i++){const top=fv.geo.roofUnder?.(pos.getX(i),pos.getZ(i));if(top!=null&&pos.getY(i)>top+0.003)throw new Error('Cone passes through roof');}
      const surface=fv.lightSurface,colors=fv.glowMesh.geometry.getAttribute('color');let lit=false;
      for(let i=0;i<surface.room.length;i++)if(surface.normal[i*3+1]<-0.1&&colors.getX(i)>0.01)lit=true;
      if(!lit)throw new Error('Roof underside receives no light');
    });
    console.log('verified upward cone is bounded by the roof and lights its underside');
  }
  if(shot.customPackExercise){
    await page.evaluate(async()=>{
      const panel=document.querySelector("neonplan3d-panel"),e=panel.shadowRoot.querySelector("fp3d-editor"),v=e.shadowRoot.querySelector("fp3d-view3d").viewer;
      const layer=v.customLayers.get(e._floorId),item=layer?.items.find(i=>i.f.id==="unit");
      if(!item)throw new Error("Custom pack runtime layer missing");
      const original=e.floor.furniture[0];
      const moment={time:Date.parse("2026-01-01T02:05:00Z"),historical:false,playing:true,seek:0};
      const h={...e.hass,config:{...e.hass.config,time_zone:"Europe/Berlin"},states:{...e.hass.states,
        "binary_sensor.custom_door":{entity_id:"binary_sensor.custom_door",state:"on",attributes:{}},
        "sensor.custom_status":{entity_id:"sensor.custom_status",state:"running",attributes:{}},
        "sensor.custom_temperature":{entity_id:"sensor.custom_temperature",state:"21.5",attributes:{unit_of_measurement:"°C"}}}};
      layer.update(h,moment,true);for(let i=0;i<20;i++)layer.step(50);
      if(item.motions[0].shown<0.99)throw new Error("Door did not open");
      if(item.displays.find(d=>d.field.id==="clock").key!=="03:05")throw new Error("Clock timezone mismatch");
      if(item.displays.find(d=>d.field.id==="temperature").key!=="21.5 °C")throw new Error("Sensor display missing");
      const led=item.parts.find(p=>p.part.id==="led").mesh.geometry.getAttribute("color");
      if(led.getX(0)<0.9||led.getY(0)>0.05)throw new Error("Status colour did not reach only the LED");
      const unknown={...h,states:{...h.states,"binary_sensor.custom_door":{state:"unavailable",attributes:{}},"sensor.custom_temperature":{state:"unavailable",attributes:{}}}};
      layer.update(unknown,moment,true);
      if(item.motions[0].state.open!==1||item.motions[0].state.known)throw new Error("Unknown contact lost the last valid position or became known");
      if("unclear" in item)throw new Error("Floating unknown-status badge still exists");
      const view=e.shadowRoot.querySelector("fp3d-view3d");
      view.furnitureLinks.set("unit",{entity:"sensor.custom_status",power:null});
      const pins=view.furnitureMarkers(h,e.building,new Set(),new Set());
      if(pins.markers.some(m=>m.furnitureId==="unit"))throw new Error("Pack status pin still floats above the appliance");
      if(pins.targets.get("unit")!=="sensor.custom_status")throw new Error("Click-to-inspect status target was lost");
      if(item.displays.find(d=>d.field.id==="temperature").key!=="--:--")throw new Error("Missing display value has no fallback");
      layer.update(unknown,{...moment,historical:true,playing:false,seek:1,time:moment.time-3600000},true);
      if(item.motions[0].shown!==0)throw new Error("Replay inherited a live door state");
      const before=JSON.stringify(original);
      layer.update(h,moment,false);
      if(item.motions[0].shown!==1)throw new Error("Animation disabled must show target immediately");
      if(JSON.stringify(e.floor.furniture[0])!==before)throw new Error("Runtime changed stored furniture");
      const dims=[original.x,original.z,original.w,original.d,original.h];
      panel._productColors=true;await panel.updateComplete;await new Promise(r=>setTimeout(r,250));
      const productView=e.shadowRoot.querySelector("fp3d-view3d");
      await e.updateComplete;await productView.updateComplete;
      const shown=()=>productView.viewer.customLayers.get(e._floorId)?.items.find(i=>i.f.id==="unit")?.parts.find(p=>p.part.id==="door")?.part.color;
      // The public switch must rebuild actual geometry, not just save its preference.
      if(productView.productColors!==true||productView.viewer.productColors!==true)throw new Error("Product toggle did not propagate reactively: "+JSON.stringify({panel:panel._productColors,editor:e.productColors,view:productView.productColors,viewer:productView.viewer.productColors,ownPanel:Object.hasOwn(panel,"_productColors"),ownView:Object.hasOwn(productView,"productColors")}));
      if(shown()!=="#aa3322")throw new Error("Product geometry colours did not update");
      panel._productColors=false;await panel.updateComplete;await e.updateComplete;await productView.updateComplete;
      if(productView.viewer.productColors!==false)throw new Error("Neon toggle did not propagate reactively");
      if(shown()!=="wood")throw new Error("Neon geometry colours did not update");
      if(JSON.stringify([e.floor.furniture[0].x,e.floor.furniture[0].z,e.floor.furniture[0].w,e.floor.furniture[0].d,e.floor.furniture[0].h])!==JSON.stringify(dims))throw new Error("Product switch changed furniture");
    });
    console.log("verified custom bindings, displays, status parts, animated doors, unknown/history fallbacks and product toggle");
  }
  if (shot.focusRotation) {
    const values = await page.evaluate(async () => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const settle = async () => { await editor.updateComplete; await new Promise(r => setTimeout(r, 150)); };
      const f = editor.furnitureItem;
      const before = structuredClone(f);
      const polygon = editor.shadowRoot.querySelector('[data-furniture="' + f.id + '"] .fp3d-furn-projected');
      if (!polygon || polygon.points.numberOfItems < 4) throw new Error('Missing XYZ plan projection');
      const outline = polygon.getAttribute('points');
      editor.updateFurniture({ rotation_x: 90 }); await settle();
      const changed = editor.shadowRoot.querySelector('[data-furniture="' + f.id + '"] .fp3d-furn-projected');
      if (changed.getAttribute('points') === outline) throw new Error('XYZ plan projection did not update');
      for (const key of ['x','z','w','d','h','mount_y']) if (editor.furnitureItem[key] !== before[key]) throw new Error('Rotation changed ' + key);
      editor.undo(); await settle();
      if (editor.furnitureItem.rotation_x !== before.rotation_x) throw new Error('Rotation undo failed');
      const labels = [...editor.shadowRoot.querySelectorAll("label.fp3d-field")];
      const x = labels.find((label) => label.textContent.includes("Drehung X"));
      const z = labels.find((label) => label.textContent.includes("Drehung Z"));
      x?.scrollIntoView({ block: "center", inline: "nearest" });
      return [x?.querySelector("input")?.value, z?.querySelector("input")?.value];
    });
    if (values[0] !== "40" || values[1] !== "70") throw new Error(`${shot.name}: rotation fields missing or stale (${values})`);
    await new Promise((r) => setTimeout(r, 300));
  }
  await page.screenshot({ path: join(outDir, `${shot.name}.png`) });
  await page.close();
  console.log(`saved ${shot.name}.png`);
}
await browser.close();
server.close();
if (errors.length) {
  console.error("Errors:\n" + errors.join("\n"));
  process.exit(1);
}
