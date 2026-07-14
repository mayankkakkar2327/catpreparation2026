const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "site");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#072552"/><path d="M44 0h20v64H44z" fill="#f25a05"/><text x="30" y="40" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800" fill="#fff">CP</text></svg>`;
const iconTag = `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(svg)}" type="image/svg+xml">`;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [fullPath] : [];
  });
}

for (const file of walk(outDir)) {
  const html = fs.readFileSync(file, "utf8");
  if (html.includes('rel="icon"')) continue;
  const updated = html.includes('<link rel="stylesheet"')
    ? html.replace('<link rel="stylesheet"', `${iconTag}<link rel="stylesheet"`)
    : html.replace("</head>", `${iconTag}</head>`);
  fs.writeFileSync(file, updated);
}
