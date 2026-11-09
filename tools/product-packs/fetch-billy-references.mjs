// Original product photos for private comparison only, never distributed in packs.
import { mkdirSync, writeFileSync } from 'node:fs';
const dir = 'private/product-packs-v2/references';
mkdirSync(dir, { recursive:true });
const products = {
  blue: 'https://www.ikea.com/de/de/p/billy-buecherregal-blau-40594928/',
  walnut: 'https://www.ikea.com/de/de/p/billy-buecherregal-braun-nussbaumnachbildung-80508641/',
  mixed: 'https://www.ikea.com/de/de/p/oxberg-paneel-vitrinentuer-weiss-50275558/',
  glass: 'https://www.ikea.com/de/de/p/oxberg-vitrinentuer-weiss-90275617/',
  flat: 'https://www.ikea.com/de/de/p/ottebol-tuer-weiss-10407565/',
  bamboo: 'https://www.ikea.com/de/de/p/hoegadal-tuer-weiss-geflochtener-bambus-80533283/',
  extension: 'https://www.ikea.com/de/de/p/billy-aufsatzregal-weiss-70401933/',
};
const sources = {};
await Promise.all(Object.entries(products).map(async ([id,url]) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  const html = await response.text();
  const tag = html.match(/<meta[^>]+(?:property|name)=["']og:image["'][^>]*>/i)?.[0];
  const photo = tag?.match(/content=["']([^"']+)["']/i)?.[1]?.replaceAll('&amp;', '&');
  if (!photo) throw new Error(`${id}: missing photo`);
  const image = await fetch(new URL(photo,url));
  if (!image.ok) throw new Error(`${id}: ${image.status}`);
  writeFileSync(`${dir}/billy_${id}.jpg`, Buffer.from(await image.arrayBuffer()));
  sources[id] = { url, photo };
  console.log(`${id}: downloaded`);
}));
writeFileSync(`${dir}/sources.json`, JSON.stringify(sources,null,2)+'\n');
