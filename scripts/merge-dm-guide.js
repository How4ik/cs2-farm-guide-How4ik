const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters');
const guide = fs.readFileSync(path.join(dir, '_dmpanel-guide-raw.md'), 'utf8');
const head = `# DM Panel

> **Официальный гайд:** [docs.dmpanel.com/dmpanelguide](https://docs.dmpanel.com/dmpanelguide)

---

`;

fs.writeFileSync(path.join(dir, '26-dm-panel.md'), head + guide);
console.log('Merged', head.length + guide.length, 'chars');
