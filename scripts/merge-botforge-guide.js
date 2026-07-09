const fs = require('fs');
const path = require('path');
const { cleanGuide } = require('./botforge-clean');

const dir = path.join(__dirname, '..', 'chapters');
const guide = cleanGuide(fs.readFileSync(path.join(dir, '_botforge-guide-raw.md'), 'utf8'));

const head = `# Bot Forge

> **Официальный гайд:** [pochito.gitbook.io/bot-forge](https://pochito.gitbook.io/bot-forge/ustanovka-paneli/sait) · [botforge.farm](https://botforge.farm/)

---

`;

fs.writeFileSync(path.join(dir, '29-bot-forge.md'), head + guide);
console.log('Merged', head.length + guide.length, 'chars → chapters/29-bot-forge.md');
