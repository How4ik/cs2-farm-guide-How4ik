const fs = require('fs');
const path = require('path');

const BASE = 'https://pochito.gitbook.io';
const root = path.join(__dirname, '..');
const mapPath = path.join(root, 'chapters', 'images', 'bot-forge', 'image-map.json');

function loadImageMap() {
  if (!fs.existsSync(mapPath)) return {};
  return JSON.parse(fs.readFileSync(mapPath, 'utf8'));
}

function cleanGuide(raw) {
  const map = loadImageMap();

  let text = raw
    .replace(/^> For the complete documentation index.*\n\n/m, '')
    .replace(/\]\(\/files\//g, `](${BASE}/files/`)
    .replace(/!\[\]\(\/files\//g, `![](${BASE}/files/`)
    .replace(/src="\/files\//g, `src="${BASE}/files/`)
    .replace(/\]\(\/bot-forge\//g, '](https://pochito.gitbook.io/bot-forge/')
    .replace(/<div[^>]*>/g, '\n')
    .replace(/<\/div>/g, '\n')
    .replace(/<p align="center">/g, '\n\n> ')
    .replace(/<\/p>/g, '\n')
    .replace(/<br\s*\/?>/g, '\n')
    .replace(/<figure><img src="([^"]+)"[^>]*><figcaption><\/figcaption><\/figure>/g, (_, src) => {
      const id = src.replace(/^\/files\//, '').replace(`${BASE}/files/`, '').replace('https://pochito.gitbook.io/files/', '');
      const local = map[id];
      return local ? `\n\n![](${local})\n` : `\n\n![](${src.startsWith('http') ? src : `${BASE}${src}`})\n`;
    })
    .replace(/&#x20;/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  text = text.replace(/!\[\]\(([^)]+)\)/g, (_, url) => {
    const id = path.basename(url).replace(/\.[^.]+$/, '');
    if (map[id]) return `![](${map[id]})`;
    const fileId = url.replace(`${BASE}/files/`, '').replace('https://pochito.gitbook.io/files/', '').replace(/^\//, '');
    if (map[fileId]) return `![](${map[fileId]})`;
    return `![](${url})`;
  });

  return text;
}

module.exports = { cleanGuide, loadImageMap };
