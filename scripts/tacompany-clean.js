const fs = require('fs');
const path = require('path');

const BASE = 'https://info.tacompany.ru';
const root = path.join(__dirname, '..');
const mapPath = path.join(root, 'chapters', 'images', 'tacompany', 'image-map.json');

function loadImageMap() {
  if (!fs.existsSync(mapPath)) return {};
  return JSON.parse(fs.readFileSync(mapPath, 'utf8'));
}

function localImagePath(fileId) {
  const map = loadImageMap();
  return map[fileId] || `${BASE}/files/${fileId}`;
}

function cleanGuide(raw) {
  const map = loadImageMap();

  let text = raw
    .replace(/^> For the complete documentation index.*\n\n/m, '')
    .replace(/^Для более лёгкого обучения.*\n\n/m, '')
    .replace(/^Если вам нужно автоматизировать.*\n\n/m, '')
    .replace(/\nСтатья написана специально для проекта.*$/s, '')
    .replace(/\n\*\*Статья написана специально для проекта.*$/s, '')
    .replace(/\nВнимание! Команда "ТА" не имеет.*\n\n/g, '\n')
    .replace(/\n\*\*Внимание! Команда "ТА" не имеет.*\n\n/g, '\n')
    .replace(/\[Steam бот\]\(https:\/\/t\.me\/TAsteamBot\)/g, 'Steam-бот')
    .replace(
      /<figure><img src="([^"]+)"([^>]*)><figcaption><\/figcaption><\/figure>/g,
      (_, src) => {
        const id = src.replace(/^\/files\//, '').replace(`${BASE}/files/`, '');
        const local = map[id] || `${BASE}${src.startsWith('/') ? src : `/${src}`}`;
        return `\n\n![](${local})\n`;
      }
    )
    .replace(/ <a href="#[^"]*" id="[^"]*"><\/a>/g, '')
    .replace(/&#x20;/g, '')
    .replace(/\\_/g, '_')
    .replace(/\\\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  text = text.replace(/!\[\]\(([^)]+)\)/g, (_, url) => {
    const id = path.basename(url).replace(/\.[^.]+$/, '');
    if (map[id]) return `![](${map[id]})`;
    if (url.includes('/files/')) {
      const fileId = url.replace(`${BASE}/files/`, '').replace(/\/files\//, '').replace(/^\//, '');
      if (map[fileId]) return `![](${map[fileId]})`;
    }
    return `![](${url})`;
  });

  text = text.replace(/src="\/files\/([^"]+)"/g, (_, id) => {
    const local = map[id] || `${BASE}/files/${id}`;
    return `src="${local}"`;
  });

  return text;
}

module.exports = { cleanGuide, BASE, loadImageMap, localImagePath };
