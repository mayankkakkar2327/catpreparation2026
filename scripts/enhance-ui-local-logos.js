const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "site");
const coachingDomains = {
  "physics wallah mba": "pw.live",
  "pw mba": "pw.live",
  erudite: "erudite.in",
  "ascent education": "ascenteducation.com",
  "proton training solutions": "protontraining.com",
  "mentors eduserv": "mentorsedu.com"
};

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=96`;
}

function addMissingLogos(html) {
  return html.replace(
    /(<article class="card coaching-card"[^>]*data-name="([^"]+)"[^>]*>[\s\S]*?<div class="card-top">\s*<div>)([\s\S]*?<h3>[\s\S]*?<\/h3>)/g,
    (match, prefix, rawName, titleBlock) => {
      if (match.includes("coaching-logo")) return match;
      const domain = coachingDomains[rawName.toLowerCase()];
      if (!domain) return match;
      return `${prefix}<div class="coaching-title"><img class="coaching-logo" src="${faviconUrl(domain)}" alt="${rawName} logo" loading="lazy"><div>${titleBlock}</div></div>`;
    }
  );
}

for (const file of walk(outDir)) {
  const html = fs.readFileSync(file, "utf8");
  fs.writeFileSync(file, addMissingLogos(html));
}
