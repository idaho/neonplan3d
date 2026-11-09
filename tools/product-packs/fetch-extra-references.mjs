// Private visual research only; these third-party photos are not shipped in packs.
import { mkdirSync, writeFileSync } from 'node:fs';
const dir = 'private/product-packs/references/extras';
mkdirSync(dir, { recursive: true });
const products = {
  markus: 'https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-dunkelgrau-70261150/',
  virrmo: 'https://www.ikea.com/de/de/p/virrmo-deckenleuchte-led-vernickelt-70430780/',
  farmarkvast: 'https://www.ikea.com/de/de/p/farmarkvast-komposteimer-mit-deckel-graugruen-90567003/',
  kvistbro: 'https://www.ikea.com/cz/en/p/kvistbro-storage-table-white-30349452/',
  askvoll: 'https://www.ikea.com/cl/es/p/askvoll-estructura-de-cama-blanco-luroey-s49262439/',
  billy: 'https://www.ikea.com/de/de/p/billy-buecherregal-weiss-50263838/',
  rodalm: 'https://www.ikea.com/de/de/p/roedalm-rahmen-schwarz-20548918/',
  bekant: 'https://www.ikea.com.tr/urun/bekant-beyaz-siyah-160x80-cm-calisma-masasi-79022810',
  plonos: 'https://pandalooshop.com/products/plonos-folientunnel-gewaechshaus-2x3m-gruen',
  sony: 'https://www.sony.de/electronics/kopfbandkopfhoerer/wh-1000xm5',
};
const sources = {};
await Promise.all(Object.entries(products).map(async ([id, url]) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    const html = await response.text();
    const tag = html.match(/<meta[^>]+(?:property|name)=["']og:image["'][^>]*>/i)?.[0];
    const photo = tag?.match(/content=["']([^"']+)["']/i)?.[1]?.replaceAll('&amp;', '&');
    if (!photo) throw new Error('No og:image');
    const image = await fetch(new URL(photo, url));
    if (!image.ok) throw new Error(image.status);
    writeFileSync(`${dir}/${id}.jpg`, Buffer.from(await image.arrayBuffer()));
    sources[id] = { url, photo };
    console.log(`${id}: downloaded`);
  } catch (error) { console.log(`${id}: ${error.message}`); }
}));
for (const [id, url] of Object.entries({
  macbook_pro: 'https://www.apple.com/v/macbook-pro/specs/d/images/specs/14-inch/macbook_pro_14_inch__fjlrd633eki2_large.jpg',
  macbook_air: 'https://www.apple.com/v/macbook-air/specs/c/images/specs/13-inch/mba_13_specs_hero__gcrzfzta9pyu_large.jpg',
  magic_mouse: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111885_SP730_magic_mouse_2.png',
  magic_keyboard: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/112037_MQ052_US.jpg',
})) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  writeFileSync(`${dir}/${id}.jpg`, Buffer.from(await response.arrayBuffer()));
  sources[id] = { photo: url };
}
writeFileSync(`${dir}/sources.json`, JSON.stringify(sources, null, 2) + '\n');
