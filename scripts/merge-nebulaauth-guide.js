const fs = require('fs');
const path = require('path');
const { cleanGuide } = require('./tacompany-clean');

const dir = path.join(__dirname, '..', 'chapters');
const raw = fs.readFileSync(path.join(dir, '_nebulaauth-guide-raw.md'), 'utf8');
const guide = cleanGuide(raw).replace(/^# NebulaAuth и работа с ним\s*\n+/, '');

const head = `# NebulaAuth

`;

fs.writeFileSync(path.join(dir, '31-nebulaauth.md'), head + guide);
console.log('Merged', head.length + guide.length, 'chars → chapters/31-nebulaauth.md');
