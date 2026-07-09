const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'dist');

const copy = (src, dest) => {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
};

const copyDir = (srcDir, destDir) => {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else copy(src, dest);
  }
};

if (fs.existsSync(out)) fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

['index.html', 'README.md', '_sidebar.md', '.nojekyll'].forEach((file) => {
  copy(path.join(root, file), path.join(out, file));
});

copyDir(path.join(root, 'access'), path.join(out, 'access'));
copyDir(path.join(root, 'chapters'), path.join(out, 'chapters'));
copyDir(path.join(root, 'styles'), path.join(out, 'styles'));

console.log('Site ready in ./dist');
