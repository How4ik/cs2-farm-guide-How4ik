const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const imagesRoot = path.join(root, 'chapters', 'images', 'tacompany');
const map = {};

for (const slug of ['sda', 'nebulaauth']) {
  const dir = path.join(imagesRoot, slug);
  for (const file of fs.readdirSync(dir)) {
    if (file === '.gitkeep') continue;
    const id = file.replace(/\.[^.]+$/, '');
    map[id] = `images/tacompany/${slug}/${file}`;
  }
}

fs.writeFileSync(path.join(imagesRoot, 'image-map.json'), JSON.stringify(map, null, 2));
console.log('image-map updated:', Object.keys(map).length, 'entries');
