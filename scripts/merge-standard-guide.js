const fs = require('fs');
const path = require('path');
const { cleanGuide } = require('./standard-clean');

const dir = path.join(__dirname, '..', 'chapters');
const guide = cleanGuide(fs.readFileSync(path.join(dir, '_standard-guide-raw.md'), 'utf8'));

const head = `# Standard Panel

> **Официальный гайд:** [standard-arb.gitbook.io/standard-arb-docs](https://standard-arb.gitbook.io/standard-arb-docs)

---

`;

fs.writeFileSync(path.join(dir, '28-standard-panel.md'), head + guide);
console.log('Merged', head.length + guide.length, 'chars → chapters/28-standard-panel.md');
