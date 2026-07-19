const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "site");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

for (const file of walk(outDir)) {
  let html = fs.readFileSync(file, "utf8");
  const next = html.replaceAll(
    '<a href="https://www.rodha.co.in/">CAT Mocks</a>',
    '<a href="https://www.rodha.co.in/">Rodha official website</a>'
  );
  if (next !== html) fs.writeFileSync(file, next);
}
