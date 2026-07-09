const fs = require('fs');
const path = require('path');

const BASE = 'https://standard-arb.gitbook.io';
const root = path.join(__dirname, '..');
const mapPath = path.join(root, 'chapters', 'images', 'standard-panel', 'image-map.json');

function loadImageMap() {
  if (!fs.existsSync(mapPath)) return {};
  return JSON.parse(fs.readFileSync(mapPath, 'utf8'));
}

function imageIdFromSrc(src) {
  return src
    .replace(/^\/files\//, '')
    .replace(`${BASE}/files/`, '')
    .replace('https://standard-arb.gitbook.io/files/', '')
    .replace(/^\//, '');
}

function toLocalImage(src) {
  const id = imageIdFromSrc(src);
  const map = loadImageMap();
  if (map[id]) return `![](${map[id]})`;
  if (src.startsWith('http')) return `![](${src})`;
  return `![](${BASE}${src.startsWith('/') ? src : `/${src}`})`;
}

function cleanGuide(raw) {
  const map = loadImageMap();

  let text = raw
    .replace(/^> For the complete documentation index.*\n\n/m, '')
    .replace(/Прежде всего, благодарю за приобретение подписки на Standard ARB\.\n\n/g, '')
    .replace(/\]\(\/files\//g, `](${BASE}/files/`)
    .replace(/!\[\]\(\/files\//g, `![](${BASE}/files/`)
    .replace(/\]\(\/standard-arb-docs\//g, '](https://standard-arb.gitbook.io/standard-arb-docs/')
    .replace(/<figure><img src="([^"]+)"[^>]*><figcaption>[\s\S]*?<\/figcaption><\/figure>/g, (_, src) =>
      `\n\n${toLocalImage(src)}\n`
    )
    .replace(/<figure><img src="([^"]+)"[^>]*><figcaption><\/figcaption><\/figure>/g, (_, src) =>
      `\n\n${toLocalImage(src)}\n`
    )
    .replace(/<img src="([^"]+)"[^>]*>/g, (_, src) => {
      if (!src.includes('/files/')) return `<img src="${src}">`;
      return `\n\n${toLocalImage(src)}\n`;
    })
    .replace(/:exclamation:/g, '⚠️')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  text = text.replace(/!\[\]\(([^)]+)\)/g, (_, url) => {
    const fileId = imageIdFromSrc(url);
    if (map[fileId]) return `![](${map[fileId]})`;
    return `![](${url})`;
  });

  return text;
}

module.exports = { cleanGuide, loadImageMap };
