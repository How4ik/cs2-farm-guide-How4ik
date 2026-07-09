const fs = require('fs');
const path = require('path');

const paths = [
  '/dmpanelguide/znakomstvo',
  '/dmpanelguide/osnovnye-vozmozhnosti-dm-panel',
  '/dmpanelguide/nastroyka/zagruzka-obraza-sistemy',
  '/dmpanelguide/nastroyka/ustanovka-hyperv',
  '/dmpanelguide/nastroyka/nastroyka-hyper-v/sozdanie-virtualnoy-mashiny-vm',
  '/dmpanelguide/nastroyka/nastroyka-hyper-v/podklyuchenie-k-vm-i-ustanovka-windows',
  '/dmpanelguide/nastroyka/nastroyka-hyper-v/nastroyka-i-probros-drayverov-2/nvidia',
  '/dmpanelguide/nastroyka/nastroyka-hyper-v/nastroyka-i-probros-drayverov-2/amd',
  '/dmpanelguide/nastroyka/nastroyka-hyper-v/probros-drayverov',
  '/dmpanelguide/nastroyka/nastroyka-hyper-v/nastroyka-sistemy',
  '/dmpanelguide/nastroyka/nastroyka-paneli-na-vm',
  '/dmpanelguide/nastroyka/chastye-problemy/problema-svyazannaya-s-faylami-nvapi-pri-zapuske',
  '/dmpanelguide/nastroyka/chastye-problemy/problema-vidimosti-videokarty',
  '/dmpanelguide/nastroyka/chastye-problemy/problema-probrosa-drayverov-videokarty-neudachnyy',
  '/dmpanelguide/nastroyka/funkcii-dm-panel/nastroyki-krasnaya-ramochka',
  '/dmpanelguide/nastroyka/funkcii-dm-panel/treydy-oranzhevaya-ramochka',
  '/dmpanelguide/nastroyka/funkcii-dm-panel/taymer-zheltaya-ramochka',
  '/dmpanelguide/nastroyka/funkcii-dm-panel/khranilische-zelenaya-ramochka',
  '/dmpanelguide/nastroyka/funkcii-dm-panel/prochee',
];

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function htmlToMd(html) {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<img[^>]*src="([^"]+)"[^>]*>/gi, (_, src) => {
    const url = src.startsWith('http') ? src : `https://docs.dmpanel.com${src}`;
    return `\n\n![](${url})\n\n`;
  });
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${strip(t)}\n\n`);
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${strip(t)}\n\n`);
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${strip(t)}\n\n`);
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${strip(t)}\n\n`);
  s = s.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, t) => `**${strip(t)}**`);
  s = s.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, (_, t) => `**${strip(t)}**`);
  s = s.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, t) => `*${strip(t)}*`);
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, t) => `\`${strip(t)}\``);
  s = s.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
    const url = href.startsWith('http') ? href : `https://docs.dmpanel.com${href}`;
    return `[${strip(t)}](${url})`;
  });
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `\n- ${strip(t)}`);
  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n\n${strip(t)}\n\n`);
  s = s.replace(/<[^>]+>/g, '');
  s = decodeHtml(s);
  s = s.replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

function strip(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
}

(async () => {
  const out = [];
  for (const p of paths) {
    const url = `https://docs.dmpanel.com${p}`;
    const r = await fetch(url);
    const html = await r.text();
    const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (!m) throw new Error('No data for ' + p);
    const data = JSON.parse(m[1]);
    const title = data.props.pageProps.data.articleProps?.title || p;
    const body = html.match(/<article>([\s\S]*?)<\/article>/);
    const md = body ? htmlToMd(body[1]) : '';
    out.push(`# ${title}\n\n${md}`);
  }
  const file = path.join(__dirname, '..', 'chapters', '_dmpanel-guide-raw.md');
  fs.writeFileSync(file, out.join('\n\n---\n\n'), 'utf8');
  console.log('Written', file, 'chars:', fs.statSync(file).size);
})();
