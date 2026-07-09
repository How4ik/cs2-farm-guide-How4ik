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

function absUrl(href) {
  if (!href) return '';
  if (href.startsWith('http')) return href;
  if (href.startsWith('/')) return `https://docs.dmpanel.com${href}`;
  return href;
}

function astToMd(node, ctx = {}) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map((n) => astToMd(n, ctx)).join('');

  if (node.type === 'bulletList' || node.type === 'orderedList') {
    const items = node.content || [];
    return items
      .map((item, i) => {
        const prefix = node.type === 'orderedList' ? `${i + 1}. ` : '- ';
        const text = astToMd(item, ctx).trim();
        return `${prefix}${text}`;
      })
      .join('\n');
  }

  if (node.type === 'listItem') {
    return astToMd(node.content || node.children || [], ctx);
  }

  if (node.type === 'note') {
    const inner = astToMd(node.content || [], ctx).trim();
    return inner
      .split('\n')
      .map((line) => `> ${line}`)
      .join('\n');
  }

  const { $$mdtype, name, attributes = {}, children = [], content = [] } = node;
  const kids = children.length ? children : content;

  if (name === 'article') return kids.map((c) => astToMd(c, ctx)).join('\n\n');
  if (name === 'p') return kids.map((c) => astToMd(c, ctx)).join('');
  if (name === 'strong') return `**${kids.map((c) => astToMd(c, ctx)).join('')}**`;
  if (name === 'em') return `*${kids.map((c) => astToMd(c, ctx)).join('')}*`;
  if (name === 'br') return '\n';
  if (name === 'Code') return `\`${kids.map((c) => astToMd(c, ctx)).join('')}\``;
  if (name === 'Link') {
    const href = absUrl(attributes.href || '');
    const text = kids.map((c) => astToMd(c, ctx)).join('');
    return `[${text}](${href})`;
  }
  if (name === 'Heading') {
    const level = attributes.level || 1;
    const text = kids.map((c) => astToMd(c, ctx)).join('');
    return `${'#'.repeat(level)} ${text}`;
  }
  if (name === 'Image') {
    const src = absUrl(attributes.renderSrc || attributes.src || '');
    const alt = attributes.alt || '';
    return `![${alt}](${src})`;
  }
  if (name === 'ul' || name === 'ol') {
    return kids
      .map((c, i) => {
        const prefix = name === 'ol' ? `${i + 1}. ` : '- ';
        return `${prefix}${astToMd(c, ctx).trim()}`;
      })
      .join('\n');
  }
  if (name === 'li') {
    return kids.map((c) => astToMd(c, ctx)).join('').trim();
  }
  if (name === 'table') {
    const rows = kids.map((c) => astToMd(c, ctx));
    if (rows.length > 1) {
      const cols = rows[0].split('|').filter(Boolean).length;
      rows.splice(1, 0, `| ${Array(cols).fill('---').join(' | ')} |`);
    }
    return rows.join('\n');
  }
  if (name === 'tr') {
    const cells = kids.map((c) => astToMd(c, ctx).trim());
    return `| ${cells.join(' | ')} |`;
  }
  if (name === 'th' || name === 'td') {
    return kids.map((c) => astToMd(c, ctx)).join('').replace(/\|/g, '\\|').replace(/\n/g, ' ');
  }
  if (name === 'blockquote') {
    return kids
      .map((c) => astToMd(c, ctx))
      .join('\n')
      .split('\n')
      .map((l) => `> ${l}`)
      .join('\n');
  }
  if (name === 'hr') return '---';
  if (name === 'span') return kids.map((c) => astToMd(c, ctx)).join('');

  return kids.map((c) => astToMd(c, ctx)).join('');
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
    const pageData = data.props.pageProps.data;
    const title = pageData.articleProps?.title || p;
    const md = astToMd(pageData.content).trim();
    out.push(`# ${title}\n\n${md}`);
  }
  const file = path.join(__dirname, '..', 'chapters', '_dmpanel-guide-raw.md');
  fs.writeFileSync(file, out.join('\n\n---\n\n'), 'utf8');
  console.log('Written', file, 'pages:', paths.length, 'chars:', fs.statSync(file).size);
})();
