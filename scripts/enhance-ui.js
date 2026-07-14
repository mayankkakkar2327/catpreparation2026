const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "site");
const cssPath = path.join(outDir, "assets", "styles.css");

const coachingDomains = {
  rodha: "rodha.co.in",
  ims: "imsindia.com",
  "t.i.m.e.": "time4education.com",
  "career launcher": "careerlauncher.com",
  cracku: "cracku.in",
  "2iim": "online.2iim.com",
  iquanta: "iquanta.in",
  "elites grid": "elitesgrid.com",
  catking: "catking.in",
  "endeavor careers": "endeavorcareers.com",
  "mba guru": "mbaguru.in",
  alchemist: "alchemistindia.com",
  tathagat: "tathagat.co.in",
  hitbullseye: "hitbullseye.com",
  "unacademy cat": "unacademy.com",
  "physics wallah": "pw.live",
  "pw mba": "pw.live"
};

const heroImages = {
  "/": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  "/cat-2026/": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
  "/cat-coaching/": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  "/cat-preparation/": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  "/mba-colleges/": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
  "/iim/": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
  "/mba-entrance-exams/": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  "/blog/": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
};

const css = `

/* Premium UI enhancement layer */
body {
  background:
    radial-gradient(circle at 18% -8%, rgba(242, 90, 5, .08), transparent 32%),
    linear-gradient(180deg, #f8fbff 0%, #ffffff 240px);
}

.site-header {
  box-shadow: 0 10px 30px rgba(7, 37, 82, .06);
}

.nav a {
  padding: 8px 2px;
  border-bottom: 2px solid transparent;
  font-weight: 720;
}

.nav a:hover {
  border-bottom-color: var(--accent);
}

.hero {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(7, 37, 82, .98), rgba(10, 54, 112, .94) 52%, rgba(242, 90, 5, .92));
  color: #fff;
  border-bottom: 0;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, .08) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255, 255, 255, .06) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: .28;
}

.hero-grid {
  position: relative;
  z-index: 1;
  grid-template-columns: minmax(0, 1.04fr) minmax(330px, .76fr);
  gap: 42px;
}

.hero h1 {
  color: #fff;
  letter-spacing: 0;
}

.hero .answer {
  color: rgba(255, 255, 255, .84);
}

.hero .eyebrow {
  color: #ffb276;
}

.hero .btn {
  border-color: rgba(255, 255, 255, .28);
  box-shadow: 0 14px 34px rgba(0, 0, 0, .14);
}

.hero .btn:not(.primary) {
  background: rgba(255, 255, 255, .12);
  color: #fff;
}

.hero-visual {
  min-height: 360px;
  border: 1px solid rgba(255, 255, 255, .22);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(0, 0, 0, .28);
  background: rgba(255, 255, 255, .08);
}

.hero-visual img {
  width: 100%;
  height: 100%;
  min-height: 360px;
  object-fit: cover;
  display: block;
}

.section {
  padding: 66px 0;
}

.feature,
.card,
.topic-block,
.source-box,
.filters,
details,
.table-wrap {
  border-color: rgba(7, 37, 82, .1);
  box-shadow: 0 18px 48px rgba(7, 37, 82, .075);
}

.feature,
.card {
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

.feature:hover,
.card:hover {
  transform: translateY(-3px);
  border-color: rgba(242, 90, 5, .28);
  box-shadow: 0 24px 62px rgba(7, 37, 82, .12);
}

.feature h2::after,
.card h2::after,
.card h3::after {
  content: "";
  display: block;
  width: 42px;
  height: 3px;
  margin-top: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), #ffb36d);
}

.coaching-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.coaching-logo {
  width: 46px;
  height: 46px;
  border-radius: 8px;
  object-fit: contain;
  padding: 7px;
  background: #fff;
  border: 1px solid rgba(7, 37, 82, .1);
  box-shadow: 0 10px 26px rgba(7, 37, 82, .09);
  flex: 0 0 auto;
}

.coaching-card .card-top > strong {
  padding: 6px 10px;
  border-radius: 999px;
  color: #0a2347;
  background: #fff4eb;
  border: 1px solid #ffd8bf;
  font-size: 13px;
}

.meta-grid > div,
.profile-facts > div {
  padding: 12px;
  border-radius: 8px;
  background: #f8fbff;
  border: 1px solid rgba(7, 37, 82, .06);
}

.visual-band {
  background: #f7fbff;
  border-top: 1px solid rgba(7, 37, 82, .08);
  border-bottom: 1px solid rgba(7, 37, 82, .08);
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.visual-tile {
  min-height: 220px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(7, 37, 82, .1);
  box-shadow: 0 18px 50px rgba(7, 37, 82, .09);
}

.visual-tile img {
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  display: block;
}

.visual-tile span {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  color: #fff;
  font-weight: 850;
  text-shadow: 0 2px 14px rgba(0, 0, 0, .48);
}

@media (max-width: 920px) {
  .hero-grid,
  .visual-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual,
  .hero-visual img {
    min-height: 260px;
  }
}

@media (max-width: 560px) {
  .coaching-title {
    align-items: flex-start;
  }

  .coaching-logo {
    width: 40px;
    height: 40px;
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

function routeFor(file) {
  const rel = path.relative(outDir, file);
  if (rel === "index.html") return "/";
  return `/${rel.replace(/index\.html$/, "").replace(/\\/g, "/")}`;
}

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=96`;
}

function imageForRoute(route) {
  if (heroImages[route]) return heroImages[route];
  if (route.startsWith("/cat-coaching/")) return "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80";
  if (route.startsWith("/blog/")) return "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80";
  return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";
}

function addHeroVisual(html, route) {
  if (html.includes("hero-visual")) return html;
  const image = imageForRoute(route);
  return html.replace(
    /(<section class="hero">[\s\S]*?<div class="container hero-grid">[\s\S]*?<\/div>)(\s*<\/div>\s*<\/section>)/,
    `$1<div class="hero-visual"><img src="${image}" alt="CAT preparation and MBA admissions guidance" loading="eager"></div>$2`
  );
}

function addCoachingLogos(html) {
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

function addVisualBand(html, route) {
  if (route !== "/" || html.includes("visual-band")) return html;
  const band = `<section class="section visual-band"><div class="container"><div class="section-head"><div><p class="eyebrow">Built for serious aspirants</p><h2>Research, compare, prepare</h2></div></div><div class="visual-grid"><div class="visual-tile"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80" alt="Students discussing preparation strategy" loading="lazy"><span>Coaching comparisons</span></div><div class="visual-tile"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80" alt="Online learning and mock tests" loading="lazy"><span>Mocks and strategy</span></div><div class="visual-tile"><img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80" alt="MBA college campus research" loading="lazy"><span>IIM and college research</span></div></div></div></section>`;
  return html.replace("</main>", `${band}</main>`);
}

if (fs.existsSync(cssPath)) {
  const existing = fs.readFileSync(cssPath, "utf8");
  if (!existing.includes("Premium UI enhancement layer")) {
    fs.writeFileSync(cssPath, `${existing}\n${css}`);
  }
}

for (const file of walk(outDir)) {
  const route = routeFor(file);
  let html = fs.readFileSync(file, "utf8");
  html = addHeroVisual(html, route);
  html = addCoachingLogos(html);
  html = addVisualBand(html, route);
  fs.writeFileSync(file, html);
}
