const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "site");
const cssPath = path.join(outDir, "assets", "styles.css");
const marker = "CAT26 spacing cleanup layer";
const css = `

/* ${marker} */
.section-head {
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.table-wrap + .section-head,
.card-grid + .section-head,
.prose > .article-section + .article-section {
  margin-top: 54px;
}

.section-head h2 {
  margin-bottom: 0;
}

.section-head .eyebrow + h2 {
  margin-top: 8px;
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
  const html = fs.readFileSync(file, "utf8").replace('<p class="eyebrow">Sample comparison</p>', "");
  fs.writeFileSync(file, html);
}
