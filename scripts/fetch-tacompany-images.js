const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = res.headers.location.startsWith('http')
            ? res.headers.location
            : `https://info.tacompany.ru${res.headers.location}`;
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
            : `https://info.tacompany.ru${res.headers.location}`;
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

function contentImages(html) {
  const proxies = [...html.matchAll(/https:\/\/info\.tacompany\.ru\/~gitbook\/image\?url=[^"'\\]+/g)].map((m) =>
    m[0].replace(/&amp;/g, '&').split(' ')[0]
  );

  const byKey = new Map();
  for (const proxy of proxies) {
    const u = new URL(proxy);
    const decoded = decodeURIComponent(u.searchParams.get('url') || '');
    if (!decoded.includes('/spaces/MAxbEczCUvnu33b0RZT2/uploads/')) continue;
    const key = decoded.split('?')[0];
    const width = Number(u.searchParams.get('width') || 0);
    const dpr = Number(u.searchParams.get('dpr') || 1);
    const score = width * dpr;
    const prev = byKey.get(key);
    if (!prev || score > prev.score) byKey.set(key, { proxy, decoded, score });
  }

  return [...byKey.values()];
}

function fileIdsFromRaw(raw) {
  const ids = [];
  for (const m of raw.matchAll(/\/files\/([A-Za-z0-9]+)/g)) {
    if (!ids.includes(m[1])) ids.push(m[1]);
  }
  return ids;
}

function extFrom(decoded, contentType) {
  if (/\.png/i.test(decoded)) return '.png';
  if (/\.jpe?g/i.test(decoded)) return '.jpg';
  if (/\.webp/i.test(decoded)) return '.webp';
  if (/\.gif/i.test(decoded)) return '.gif';
  if (contentType?.includes('png')) return '.png';
  if (contentType?.includes('jpeg')) return '.jpg';
  if (contentType?.includes('webp')) return '.webp';
  return '.jpg';
}

const GUIDES = [
  {
    slug: 'sda',
    pageUrl: 'https://info.tacompany.ru/steam-obuchenie/obuchenie-zarabotku-steam/sda-i-rabota-s-nim',
    rawFile: '_sda-guide-raw.md',
  },
  {
    slug: 'nebulaauth',
    pageUrl: 'https://info.tacompany.ru/steam-obuchenie/obuchenie-zarabotku-steam/nebulaauth-i-rabota-s-nim',
    rawFile: '_nebulaauth-guide-raw.md',
  },
];

module.exports.run = async () => {
  const root = path.join(__dirname, '..');
  const chaptersDir = path.join(root, 'chapters');
  const imagesDir = path.join(chaptersDir, 'images', 'tacompany');
  const map = {};

  for (const guide of GUIDES) {
    const raw = fs.readFileSync(path.join(chaptersDir, guide.rawFile), 'utf8');
    const ids = fileIdsFromRaw(raw);
    const page = await fetchText(guide.pageUrl);
    const images = contentImages(page);

    if (ids.length !== images.length) {
      throw new Error(`[${guide.slug}] ids=${ids.length}, images=${images.length}`);
    }

    const outDir = path.join(imagesDir, guide.slug);
    fs.mkdirSync(outDir, { recursive: true });

    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      const image = images[i];
      const result = await fetchBuffer(image.proxy);
      if (result.status !== 200 || !result.type?.startsWith('image/')) {
        throw new Error(`[${guide.slug}] failed ${id}: ${result.status} ${result.type}`);
      }

      const ext = extFrom(image.decoded, result.type);
      const rel = `images/tacompany/${guide.slug}/${id}${ext}`;
      fs.writeFileSync(path.join(chaptersDir, rel), result.body);
      map[id] = rel;
      console.log('saved', rel, result.body.length, 'bytes');
    }
  }

  fs.writeFileSync(path.join(imagesDir, 'image-map.json'), JSON.stringify(map, null, 2));
  console.log('done,', Object.keys(map).length, 'images');
};

if (require.main === module) {
  module.exports.run().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
