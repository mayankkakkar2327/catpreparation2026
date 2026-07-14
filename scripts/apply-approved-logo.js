const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "site");
const cssPath = path.join(outDir, "assets", "styles.css");
const marker = "CAT26 approved logo layer";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="420" viewBox="0 0 1200 420"><defs><linearGradient id="n" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#082a5c"/><stop offset="1" stop-color="#031b3c"/></linearGradient><linearGradient id="o" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ff7a1a"/><stop offset="1" stop-color="#f25a05"/></linearGradient></defs><g><rect x="92" y="86" width="260" height="248" rx="42" fill="url(#n)"/><path d="M222 130 306 286H138L222 130Z" fill="#fff"/><path d="M222 194 260 286H184L222 194Z" fill="url(#o)"/></g><g font-family="Inter,Arial,Helvetica,sans-serif" font-weight="900" letter-spacing="-2"><text x="398" y="246" font-size="158" fill="url(#n)">CAT</text><text x="718" y="246" font-size="158" fill="url(#o)">26</text></g><text x="404" y="302" font-family="Inter,Arial,Helvetica,sans-serif" font-size="34" font-weight="750" letter-spacing="3" fill="#596878">CAT PREPARATION 2026</text><path d="M404 328h510" stroke="#dbe5ef" stroke-width="3" stroke-linecap="round"/><path d="M404 328h154" stroke="url(#o)" stroke-width="3" stroke-linecap="round"/></svg>`;
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="n" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#082a5c"/><stop offset="1" stop-color="#031b3c"/></linearGradient><linearGradient id="o" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ff7a1a"/><stop offset="1" stop-color="#f25a05"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#n)"/><path d="M32 11 52 52H12L32 11Z" fill="#fff"/><path d="M32 29 42 52H22L32 29Z" fill="url(#o)"/></svg>`;

const logoUrl = `data:image/svg+xml,${encodeURIComponent(logoSvg)}`;
const iconUrl = `data:image/svg+xml,${encodeURIComponent(iconSvg)}`;
const css = `

/* ${marker} */
.brand {
  min-width: 240px;
}

.brand-mark {
  width: 240px;
  height: 84px;
  background: transparent url("${logoUrl}") center/contain no-repeat !important;
  color: transparent !important;
  font-size: 0 !important;
}

.brand-logo {
  width: 240px;
  height: 84px;
  object-fit: contain;
}

.brand > span:not(.brand-mark) {
  display: none;
}

@media (max-width: 560px) {
  .brand {
    min-width: 176px;
  }

  .brand-mark,
  .brand-logo {
    width: 176px;
    height: 62px;
  }
}
`;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

if (fs.existsSync(cssPath)) {
  const existing = fs.readFileSync(cssPath, "utf8");
  if (!existing.includes(marker)) fs.writeFileSync(cssPath, `${existing}\n${css}`);
}

for (const file of walk(outDir)) {
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<img class="brand-logo"[^>]+>/g, '<span class="brand-mark">CAT26</span>');
  html = html.replace(/<link rel="icon"[^>]*>/g, `<link rel="icon" href="${iconUrl}" type="image/svg+xml">`);
  html = html.replace(/<link rel="apple-touch-icon"[^>]*>/g, `<link rel="apple-touch-icon" href="${iconUrl}">`);
  if (!html.includes('rel="icon"')) html = html.replace("</head>", `<link rel="icon" href="${iconUrl}" type="image/svg+xml"></head>`);
  fs.writeFileSync(file, html);
}
