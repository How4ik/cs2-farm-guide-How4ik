const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE = 'https://standard-arb.gitbook.io/standard-arb-docs';
const LLMS = `${BASE}/llms.txt`;

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = res.headers.location.startsWith('http')
            ? res.headers.location
            : `https://standard-arb.gitbook.io${res.headers.location}`;
          fetchText(next).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      })
      .on('error', reject);
  });
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = res.headers.location.startsWith('http')
            ? res.headers.location
            : `https://standard-arb.gitbook.io${res.headers.location}`;
          fetchBuffer(next).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () =>
          resolve({ status: res.statusCode, type: res.headers['content-type'], body: Buffer.concat(chunks) })
        );
      })
      .on('error', reject);
  });
}

function pageUrlsFromLlms(llms) {
  return [...llms.matchAll(/\((https:\/\/standard-arb\.gitbook\.io\/standard-arb-docs\/[^)]+\.md)\)/g)].map(
    (m) => m[1]
  );
}

function contentImages(html) {
  const proxies = [
    ...html.matchAll(/https:\/\/standard-arb\.gitbook\.io\/standard-arb-docs\/~gitbook\/image\?url=[^"'\\]+/g),
  ].map((m) => m[0].replace(/&amp;/g, '&').split(' ')[0]);

  const byKey = new Map();
  for (const proxy of proxies) {
    let decoded = '';
    try {
      decoded = decodeURIComponent(new URL(proxy).searchParams.get('url') || '');
    } catch {
      continue;
    }
    const u = new URL(proxy);
    if (!decoded.includes('/spaces/') || !decoded.includes('/uploads/')) continue;
    const key = decoded.split('?')[0];
    const width = Number(u.searchParams.get('width') || 0);
    const dpr = Number(u.searchParams.get('dpr') || 1);
    const score = width * dpr;
    const prev = byKey.get(key);
    if (!prev || score > prev.score) byKey.set(key, { proxy, decoded, score });
  }
  return [...byKey.values()];
}

function fileIdsFromMd(md) {
  const ids = [];
  for (const m of md.matchAll(/\/files\/([A-Za-z0-9]+)/g)) ids.push(m[1]);
  return ids;
}

function extFrom(contentType) {
  if (contentType?.includes('png')) return '.png';
  if (contentType?.includes('jpeg')) return '.jpg';
  if (contentType?.includes('webp')) return '.webp';
  if (contentType?.includes('gif')) return '.gif';
  return '.jpg';
}

async function buildImageMap() {
  const llms = await fetchText(LLMS);
  const pages = pageUrlsFromLlms(llms);
  const proxies = {};

  for (const mdUrl of pages) {
    const htmlUrl = mdUrl.replace(/\.md$/, '');
    const [md, html] = await Promise.all([fetchText(mdUrl), fetchText(htmlUrl)]);
    const ids = fileIdsFromMd(md);
    const images = contentImages(html);
    if (ids.length !== images.length) {
      console.warn(`count mismatch ${htmlUrl}: ids=${ids.length}, images=${images.length}`);
    }
    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      const image = images[i];
      if (!image) continue;
      if (!proxies[id]) proxies[id] = image.proxy;
    }
  }

  return proxies;
}

module.exports.run = async () => {
  const root = path.join(__dirname, '..');
  const outDir = path.join(root, 'chapters', 'images', 'standard-panel');
  fs.mkdirSync(outDir, { recursive: true });

  const proxies = await buildImageMap();
  const map = {};

  const ids = Object.keys(proxies);
  console.log('downloading', ids.length, 'images...');

  for (const id of ids) {
    const proxy = proxies[id];
    const result = await fetchBuffer(proxy);
    if (result.status !== 200 || !result.type?.startsWith('image/')) {
      throw new Error(`failed ${id}: ${result.status} ${result.type}`);
    }
    const ext = extFrom(result.type);
    const rel = `images/standard-panel/${id}${ext}`;
    fs.writeFileSync(path.join(root, 'chapters', rel), result.body);
    map[id] = rel;
    console.log('saved', rel, result.body.length, 'bytes');
  }

  fs.writeFileSync(path.join(outDir, 'image-map.json'), JSON.stringify(map, null, 2));
  console.log('done,', Object.keys(map).length, 'images');
};

if (require.main === module) {
  module.exports.run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
