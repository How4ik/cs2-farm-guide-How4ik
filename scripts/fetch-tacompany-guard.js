const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'chapters');
const pages = [
  {
    url: 'https://info.tacompany.ru/steam-obuchenie/obuchenie-zarabotku-steam/sda-i-rabota-s-nim.md',
    file: '_sda-guide-raw.md',
  },
  {
    url: 'https://info.tacompany.ru/steam-obuchenie/obuchenie-zarabotku-steam/nebulaauth-i-rabota-s-nim.md',
    file: '_nebulaauth-guide-raw.md',
  },
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetch(res.headers.location).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      })
      .on('error', reject);
  });
}

(async () => {
  for (const page of pages) {
    const text = await fetch(page.url);
    fs.writeFileSync(path.join(dir, page.file), text);
    console.log('Saved', page.file, text.length, 'chars');
  }

  await require('./fetch-tacompany-images').run();
})();
