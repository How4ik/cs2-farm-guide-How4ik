const fs = require('fs');
const path = require('path');
const { cleanGuide } = require('./tacompany-clean');

const dir = path.join(__dirname, '..', 'chapters');
const raw = fs.readFileSync(path.join(dir, '_sda-guide-raw.md'), 'utf8');
const guide = cleanGuide(raw).replace(/^# SDA и работа с ним\s*\n+/, '');

const head = `# SDA

`;

fs.writeFileSync(path.join(dir, '30-sda.md'), head + guide);
console.log('Merged', head.length + guide.length, 'chars → chapters/30-sda.md');
