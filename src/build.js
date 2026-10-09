const fs = require("fs");
const path = require("path");
const site = require("../data/site");
const evidence = require("../data/coaching-evidence.json");
const coachings = [...evidence.providers].sort((a,b) => a.name.localeCompare(b.name));
const { prepareEvidencePages, centreSection, prices, method } = require("../data/evidence-pages");
const cities = require("../data/cities");
const colleges = require("../data/colleges");
const { redirects, resolveInternal, preparePages } = require("../data/consolidation");
const pages = prepareEvidencePages(preparePages(require("../data/pages")));
const {priorityGuides, nextSteps} = require("../data/navigation");
const trustPages = require("../data/trust-pages");

const out = path.join(__dirname, "..", "site");
const esc = (v = "") => String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const abs = (href) => new URL(href, site.url).toString();
const tc = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());
const feeDisplay = (c) => c.officialFeeNote || "Check official website";

function mkdir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function write(route, html) {
  if (redirects[route]) return;
  html = html.replace(/href="([^"<>]+)"/g, (_, href) => `href="${resolveInternal(href)}"`);
  const clean = route.replace(/^\/|\/$/g, "");
  const dir = clean ? path.join(out, clean) : out;
  mkdir(dir);
  fs.writeFileSync(path.join(dir, "index.html"), html);
}
function schema(data) { return `<script type="application/ld+json">${JSON.stringify(data)}</script>`; }
function linkLabel(label, href) {
  if (href === "https://www.rodha.co.in/") return label;
  if (href === "https://mocks.rodha.co.in/") return "CAT Mocks";
  if (href === "https://www.youtube.com/results?search_query=Rodha+CAT+200+days+strategy") return "CAT 200-day Strategy";
  return label;
}
function renderCell(cell) {
  if (cell && typeof cell === "object" && cell.href) return `<a href="${esc(cell.href)}">${esc(cell.label || cell.href)}</a>`;
  return esc(cell);
}
function renderLinks(links = []) {
  return links.length ? `<div class="related-links resource-links">${links.map(([label, href]) => `<a href="${esc(href)}">${esc(linkLabel(label, href))}</a>`).join("")}</div>` : "";
}
function officialLinks(c) {
  return c.sourceUrls?.length ? `<div class="related-links resource-links">${c.sourceUrls.map((href) => `<a href="${esc(href)}" rel="nofollow noopener">${esc(new URL(href).hostname.replace(/^www\./, ""))}</a>`).join("")}</div>` : "";
}
function faqSchema(faqs = []) {
  return faqs.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } : null;
}

function shell({ title, description, route, body, extraSchema = [] }) {
  const canonical = abs(route);
  const baseSchema = [{ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, description: site.description }].concat(extraSchema.filter(Boolean));
  return `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)} | ${site.name}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"><meta name="theme-color" content="#17221c"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="${site.name}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary"><link rel="icon" href="/favicon.ico" sizes="96x96"><link rel="icon" href="/assets/favicon-96.png" type="image/png" sizes="96x96"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" sizes="180x180"><link rel="stylesheet" href="/assets/styles.css">${schema(baseSchema)}</head><body><a class="skip-link" href="#main">Skip to content</a><div class="trust-bar"><div class="container"><span>CAT &amp; MBA research</span><span>CAT preparation and coaching guides</span><a href="/methodology/">How we review</a></div></div><header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="${esc(site.name)} home"><img class="brand-logo" src="/assets/catprep-logo.svg" width="260" height="58" alt="CATPrep 2026"></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button><nav class="nav" id="primary-nav" aria-label="Primary navigation">${site.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}<a class="nav-cta" href="${route === "/enquiry-data/" ? "/contact/#free-guidance" : "#free-guidance"}">Get free guidance</a></nav></div></header><main id="main">${breadcrumbs(route, title)}${body}${route === "/enquiry-data/" ? "" : leadPanel(title)}</main><footer class="footer"><div class="container footer-grid"><div class="footer-brand"><img src="/assets/catprep-logo.svg" width="260" height="58" alt="CATPrep 2026"><p>${site.description}</p><p class="small">Research for preparation and admission decisions.</p></div><div><strong>Research</strong><a href="/cat-2026/">CAT 2026</a><a href="/cat-coaching/">Coaching directory</a><a href="/mba-colleges/">MBA colleges</a><a href="/blog/">Insights</a></div><div><strong>Standards</strong><a href="/guides/">Guide library</a><a href="/about/">About</a><a href="/editorial-policy/">Editorial policy</a><a href="/methodology/">Methodology</a><a href="/corrections/">Corrections</a></div><div><strong>Connect</strong><a href="/contact/">Contact</a><a href="/enquiry-data/">Enquiry data</a><a href="mailto:onlinecoaching4u.official@gmail.com">Email the team</a><a href="/sitemap.xml">Sitemap</a></div></div><div class="container footer-bottom"><span>© 2026 CATPrep 2026</span><span>Research. Compare. Decide.</span></div></footer><script src="/assets/app.js" defer></script></body></html>`;
}
function leadPanel(context = "CAT preparation") {
  return `<section class="lead-section" id="free-guidance"><div class="container lead-grid"><div><p class="eyebrow">Personalised starting point</p><h2>Still deciding what fits your CAT plan?</h2><p>Share a few details and the CATPrep 2026 team will help you shortlist a practical next step based on your stage, learning preference and target.</p><div class="lead-points"><span>Preparation guidance</span><span>No enrolment obligation</span><span>Reply by email</span></div></div><form class="lead-form" action="https://formsubmit.co/ajax/onlinecoaching4u.official@gmail.com" method="POST" data-lead-form><input type="hidden" name="_subject" value="New CATPrep 2026 guidance enquiry"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="page_context" value="${esc(context)}"><label>Full name<input name="name" autocomplete="name" required placeholder="Your name"></label><label>Email address<input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></label><label>Phone number (optional)<input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="10-digit mobile number" pattern="[0-9 +()-]{8,16}"></label><label>What do you need help with?<select name="interest" required><option value="">Choose one</option><option>CAT preparation plan</option><option>Coaching comparison</option><option>Mocks and test strategy</option><option>MBA college research</option></select></label><label class="honeypot" aria-hidden="true">Leave blank<input name="_honey" tabindex="-1" autocomplete="off"></label><label class="consent"><input type="checkbox" name="consent" required><span>I agree to be contacted about this enquiry.</span></label><button type="submit">Request free guidance <span aria-hidden="true">→</span></button><p class="form-note">This form sends your details through FormSubmit to the site inbox. <a href="/enquiry-data/">See what is sent</a>. You can also <a href="mailto:onlinecoaching4u.official@gmail.com">email us</a>.</p><p class="form-status" data-form-status aria-live="polite"></p></form></div></section>`;
}
function hero(eyebrow, title, answer, ctas = [], featured = false) {
  return `<section class="hero ${featured ? "hero-featured" : "hero-compact"}"><div class="hero-grid-lines" aria-hidden="true"></div><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1>${answer ? `<p class="answer">${esc(answer)}</p>` : ""}<div class="actions">${ctas.map(c => `<a class="btn ${c.primary ? "primary" : ""}" href="${c.href}">${esc(c.label)} <span aria-hidden="true">↗</span></a>`).join("")}</div></div><div class="hero-object" aria-hidden="true"><div class="hero-glow"></div><div class="hero-card card-main"><span class="mini-label">Course research</span><strong>Choose with context, not claims.</strong><small>Coaching · Exams · Colleges</small></div><div class="hero-card card-stat"><strong>Explore</strong><span>exam and coaching guides</span></div><div class="hero-card card-note"><span class="check-dot">✓</span><div><strong>Answer-first</strong><small>Clear, verifiable guidance</small></div></div></div></div></section>`;
}
function card(c) {
  const cityList = c.cities.length ? "Verified local examples: " + c.cities.map(tc).join(", ") : "Online; no local centre verified in these city guides";
  return `<article class="card coaching-card" data-name="${esc(c.name.toLowerCase())}" data-mode="${c.mode}" data-cities="${(c.mode === "online" ? ["online"] : c.cities).join(" ")}" data-fee="0"><div class="card-head"><span class="mode-badge">${esc(c.mode)}</span></div><h3><a href="/cat-coaching/${c.slug}/">${esc(c.name)}</a></h3><p class="card-summary">${esc(c.summary)}</p><dl class="card-facts"><div><dt>Learning mode</dt><dd>${esc(c.mode)}</dd></div><div><dt>Availability</dt><dd>${esc(cityList)}</dd></div><div class="fact-wide"><dt>Official fee signal</dt><dd>${esc(feeDisplay(c))}</dd></div></dl><div class="card-footer"><div class="pill-row">${c.courseTypes.slice(0,3).map(x => `<span>${esc(x)}</span>`).join("")}</div><a class="card-link" href="/cat-coaching/${c.slug}/" aria-label="View ${esc(c.name)} profile">View profile <span>↗</span></a></div></article>`;
}
function table(items) {
  return `<div class="table-wrap"><table><thead><tr><th>Coaching</th><th>Mode</th><th>Fees</th><th>Decision focus</th></tr></thead><tbody>${items.map(i => `<tr><td><a href="/cat-coaching/${i.slug}/">${esc(i.name)}</a></td><td>${i.mode}</td><td>${esc(feeDisplay(i))}</td><td>${esc(i.bestFor[0])}</td></tr>`).join("")}</tbody></table></div>`;
}
function faq(faqs = []) {
  return faqs.length ? `<section class="section" id="faqs"><div class="container narrow"><h2>Frequently Asked Questions</h2><div class="faq-list">${faqs.map(f => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div></div></section>` : "";
}
function renderSection(s) {
  const ps = (s.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("");
  const list = s.list?.length ? `<ul class="check-list">${s.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
  const links = renderLinks(s.links);
  const cols = s.columns?.length ? `<div class="topic-grid">${s.columns.map(c => `<div class="topic-block"><h3>${esc(c.title)}</h3><ul>${c.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>` : "";
  const tbl = s.table ? `<div class="table-wrap article-table"><table><thead><tr>${s.table.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.table.rows.map(r => `<tr>${r.map(cell => `<td>${renderCell(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
  return `<section class="article-section" id="${esc(s.id || "")}"><h2>${esc(s.heading)}</h2>${ps}${list}${links}${cols}${tbl}</section>`;
}

const routes = ["/"];
function add(route, html) {
  if (redirects[route]) return;
  if (routes.includes(route)) throw new Error(`Duplicate output route: ${route}`);
  write(route, html); routes.push(route);
}
function pageFaqs(p) { return p.faqs || []; }

function home() {
  // The homepage keeps the full visual hero; inner pages use the compact variant.
  const body = hero("CAT 2026 research platform", "A clearer way to plan CAT, compare coaching and research MBA colleges.", "Get answer-first preparation guides, transparent coaching comparisons and admission research—organised to help you make the next decision with confidence.", [{ label: "Explore coaching", href: "/cat-coaching/", primary: true }, { label: "Start with CAT 2026", href: "/cat-2026/" }]) + priorityPanel() + `<section class="evidence-strip"><div class="container evidence-grid"><div><strong>Source-based</strong><span>Comparison-led research</span></div><div><strong>Transparent</strong><span>Official links where relevant</span></div><div><strong>Answer-first</strong><span>Built for search and clarity</span></div><div><strong>Sources</strong><span>Check dates on each guide</span></div></div></section><section class="section pathways"><div class="container"><div class="section-intro"><p class="eyebrow">Research by decision</p><h2>Everything you need, without the noise.</h2><p>Move from understanding the exam to comparing preparation options and researching colleges.</p></div><div class="grid-3"><a class="feature" href="/cat-2026/"><span class="feature-no">01</span><p class="tag">Understand the exam</p><h3>CAT 2026</h3><p>Pattern, syllabus, dates, registration and official update trackers.</p><span class="text-link">Explore the exam →</span></a><a class="feature accent-card" href="/cat-coaching/"><span class="feature-no">02</span><p class="tag">Choose your preparation</p><h3>Coaching directory</h3><p>Compare online, offline and hybrid options by fit, support and format.</p><span class="text-link">Compare coaching →</span></a><a class="feature" href="/mba-colleges/"><span class="feature-no">03</span><p class="tag">Research outcomes</p><h3>IIMs &amp; MBA colleges</h3><p>Explore admissions, accepted exams, programmes and verification links.</p><span class="text-link">Research colleges →</span></a></div></div></section><section class="section journey"><div class="container split"><div class="sticky-copy"><p class="eyebrow">A practical research journey</p><h2>Make one informed decision at a time.</h2><p>CAT preparation becomes manageable when the right questions are answered in the right order.</p><a class="btn" href="/cat-preparation/">View preparation guides <span aria-hidden="true">→</span></a></div><ol class="steps"><li><span>01</span><div><h3>Know where you stand</h3><p>Understand the exam, assess your current level and create a realistic preparation runway.</p></div></li><li><span>02</span><div><h3>Compare the right signals</h3><p>Evaluate teaching style, mocks, doubt support, flexibility and learner fit—not just claims.</p></div></li><li><span>03</span><div><h3>Build an admissions view</h3><p>Research target colleges, accepted exams and selection processes early.</p></div></li></ol></div></section><section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Research shortlist</p><h2>Coaching directory preview (alphabetical)</h2></div><a class="text-link" href="/cat-coaching/">View all comparisons →</a></div><div class="card-grid">${coachings.filter(c => c.active).slice(0,3).map(card).join("")}</div></div></section><section class="section city-section"><div class="container split"><div><p class="eyebrow">City-wise discovery</p><h2>Compare CAT coaching near you.</h2><p>Explore classroom options, online alternatives, verified centre examples and comparison tables for major Indian cities.</p></div><div class="city-grid">${cities.map((c, i) => `<a href="/cat-coaching/${c.slug}/"><span>${String(i + 1).padStart(2, "0")}</span>${c.name}<b aria-hidden="true">↗</b></a>`).join("")}</div></div></section>`;
  write("/", shell({ title: "CAT 2026 Preparation, Coaching, IIMs, and MBA Entrance Guide", description: site.description, route: "/", body: body.replace('hero hero-compact', 'hero hero-featured') }));
}
function article(p) {
  const route = `/${p.slug}/`;
  const faqs = pageFaqs(p);
  const body = `<article>${hero(p.section, p.title, p.answer, [{ label: "Explore Coaching", href: "/cat-coaching/", primary: true }, { label: "View colleges", href: "/mba-colleges/" }])}<section class="section"><div class="container"><div class="prose">${(p.body || []).map(x => `<p>${esc(x)}</p>`).join("")}${(p.sections || []).map(renderSection).join("")}${p.sourceNotes?.length || p.sourceLinks?.length ? `<section class="article-section"><h2>Sources and verification notes</h2>${(p.sourceNotes || []).map(note => `<p>${esc(note)}</p>`).join("")}${renderLinks(p.sourceLinks)}</section>` : ""}${p.related?.length ? `<section class="article-section"><h2>Related guides</h2>${renderLinks(p.related.map(href => href === "/blog/xat-2027-registration-open-dates-eligibility-application-guide/" ? "/blog/xat-2027-registration-open-apply-online-xlri/" : href).map(href => [pages.find(page => `/${page.slug}/` === href)?.title || href.split("/").filter(Boolean).pop().replaceAll("-", " "), href]))}</section>` : ""}</div></div></section>${nextStepLinks(p)}${faq(faqs)}</article>`;
  add(route, shell({ title: p.title, description: p.description, route, body, extraSchema: [{ "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.description, ...(p.updated ? { dateModified: p.updated } : {}) }, faqSchema(faqs)] }));
}
function directory(mode, route, title, answer) {
  const items = coachings.filter(c => c.active && (!mode || (mode === "online" ? c.courseTypes.includes("online") : c.courseTypes.includes("classroom"))));
  const body = hero("CAT coaching directory", title, answer, [{ label: "Online coaching", href: "/cat-coaching/online/", primary: true }, { label: "Offline coaching", href: "/cat-coaching/offline/" }]) + `<section class="section"><div class="container directory-layout"><aside class="filters"><label>Search coaching<input data-filter-search type="search" placeholder="IMS, Delhi, online"></label><label>Mode<select data-filter-mode><option value="">All modes</option><option value="online">Online</option><option value="offline">Classroom available</option><option value="hybrid">Online and classroom</option></select></label><label>Verified local examples<select data-filter-city><option value="">All cities</option>${cities.map(c => `<option value="${c.slug}">${c.name}</option>`).join("")}<option value="online">Online-only providers</option></select></label></aside><div><div class="section-head"><div><p class="eyebrow">Comparison-ready listings</p><h2>${items.length} coaching options</h2><p>${esc(method)}</p><p>Source review: 8 October 2026. See each profile for named packages, tax treatment and evidence limits.</p></div><p data-result-count>${items.length} shown</p></div><div class="card-grid directory" data-directory>${items.map(card).join("")}</div><h2>All options on this page</h2><p>The filters above apply to cards. This reference table contains the full list.</p>${table(items)}</div></div></section>`;
  add(route, shell({ title, description: answer, route, body, extraSchema: [{ "@context": "https://schema.org", "@type": "ItemList", name: title }] }));
}
function cityPage(city) {
  const entries = evidence.centres.filter(x => x.city === city.slug).sort((a,b) => a.name.localeCompare(b.name));
  const route = `/cat-coaching/${city.slug}/`;
  const title = `CAT Coaching in ${city.name}: Verified Centre Listings and Online Options`;
  const links = entries.filter(x => x.local).map(x => [x.name + " local course guide", `/cat-coaching/${city.slug}/${x.id}/`]);
  const body = hero(`${city.name} CAT coaching`, title, `Compare selected official CAT centre listings in ${city.name}. Online providers are listed separately and are not presented as local branches.`) + `<section class="section"><div class="container prose"><p>${esc(method)}</p>${renderSection(centreSection(entries))}${renderLinks(links)}<h2>Plan a branch visit</h2><p>Use the listed area to test your commute at the proposed class time. Confirm the teacher roster, batch start date, remaining syllabus and missed-class access before paying. These addresses are selected examples, not an exhaustive list of operating branches.</p><h2>Compare classroom fees correctly</h2><p>A national mock-test price is not a classroom fee. Request a written quote for this branch covering teaching, books, taxes, mock access and course validity.</p><h2>Online alternatives available without a local branch</h2><p>These options can be considered remotely. Their inclusion does not establish a physical centre in ${esc(city.name)}.</p>${table(coachings.filter(c => c.active && c.courseTypes.includes("online")))}<p><a href="/cat-coaching/online/">Explore online course profiles and evidence</a></p></div></section>`;
  add(route, shell({title, description:`Official CAT centre examples in ${city.name}, with source dates, branch checks and separate online alternatives.`,route,body}));
}
function coachingFaqs(c) {
 return [
 {q:`What is verified about ${c.name}?`,a:c.summary},
 {q:`What are the current ${c.name} fees?`,a:c.offers.length ? 'Named products and dated displayed prices appear in the fee table. Different product types are not equivalent; confirm the total and validity before payment.' : 'A current package fee is not verified here. Obtain a written quote for the exact course and exam year.'},
 {q:`Does ${c.name} have a classroom near me?`,a:c.cities.length ? 'Selected official listings are recorded for '+c.cities.map(tc).join(', ')+'. These examples are not an exhaustive centre directory; confirm your branch and batch directly.' : 'No current classroom address has been verified in our nine city guides for this provider. Online availability does not establish a local branch.'},
 {q:`What should I check before enrolling?`,a:c.limitation}
 ];
}
function profile(c) {
 const route=`/cat-coaching/${c.slug}/`;
 const title=c.active ? `${c.name} CAT 2026: Courses, Fees and Evidence` : `${c.name}: CAT Listing Verification Status`;
 const faqs=coachingFaqs(c);
 const entries=evidence.centres.filter(x=>x.id===c.id);
 const body=hero(c.active?'Coaching profile':'Listing clarification',title,c.summary)+`<section class="section"><div class="container prose"><p>Official source review: <time datetime="2026-10-08">8 October 2026</time>.</p><p>${esc(method)}</p><h2>Course scope and delivery</h2><p>Advertised delivery: ${esc(c.mode)}. Check the package table for the scope of each named product.</p><h2>Decision focus</h2><p>${esc(c.bestFor[0])}.</p><h2>Limitations and unresolved details</h2><p>${esc(c.limitation)}</p>${c.active?renderSection(prices([c])):'<p>This listing is excluded from current course shortlists. No CAT course price or outcome claim is endorsed here.</p>'}${entries.length?renderSection(centreSection(entries)):'<h2>Classroom coverage</h2><p>No current address has been verified for this provider in our nine city guides. This does not prove that it has no physical centres elsewhere.</p>'}<h2>Check before payment</h2><ul><li>Obtain the exact batch name, exam year, language and teacher roster.</li><li>Confirm remaining live lessons, recording access and a catch-up plan.</li><li>Separate full-length CAT mocks, sectional tests and other entrance-exam tests.</li><li>Ask how doubts are handled and whether individual mentoring has a booking limit.</li><li>Keep a written invoice and refund policy, including taxes and access expiry.</li></ul><h2>Official sources</h2>${officialLinks(c)}${c.id==='ascent-education'?'<p><a href="/cat-coaching/2iim/">Read the 2IIM CAT profile</a></p>':''}<h2>Compare alternatives</h2>${renderLinks([['All providers and course types','/cat-coaching/'],['Online programmes','/cat-coaching/online/'],['Classroom providers','/cat-coaching/offline/']])}</div></section>${faq(faqs)}`;
 add(route,shell({title,description:c.summary,route,body,extraSchema:[faqSchema(faqs)]}));
}
function collegeCard(c) {
  return `<article class="card"><p class="tag">${esc(c.type)}</p><h3><a href="${esc(c.sourceUrl || "#")}">${esc(c.name)}</a></h3><p>${esc(c.summary)}</p><dl class="meta-grid"><div><dt>City</dt><dd>${esc(c.city)}</dd></div><div><dt>Flagship</dt><dd>${esc(c.flagship || "MBA/PGP")}</dd></div><div><dt>Accepted exams</dt><dd>${esc(c.acceptedExams.join(", "))}</dd></div><div><dt>Official source</dt><dd><a href="${esc(c.sourceUrl || "#")}">Visit</a></dd></div></dl><p><strong>Admission route:</strong> ${esc(c.admissionRoute || "Verify from official admissions page.")}</p><p class="note">${esc(c.dataStatus)}</p></article>`;
}
function collegeTable(items) {
  return `<div class="table-wrap"><table><thead><tr><th>College</th><th>City</th><th>Type</th><th>Flagship</th><th>Accepted exams</th><th>Verification note</th></tr></thead><tbody>${items.map(c => `<tr><td><a href="${esc(c.sourceUrl || "#")}">${esc(c.name)}</a></td><td>${esc(c.city)}</td><td>${esc(c.type)}</td><td>${esc(c.flagship || "MBA/PGP")}</td><td>${esc(c.acceptedExams.join(", "))}</td><td>${esc(c.dataStatus)}</td></tr>`).join("")}</tbody></table></div>`;
}
function collegesPage() {
  const route = "/mba-colleges/";
  const iims = colleges.filter(c => c.type === "IIM");
  const others = colleges.filter(c => c.type !== "IIM");
  const body = hero("MBA colleges", "Top MBA Colleges in India: IIMs, Non-IIMs, Exams, Fees, and ROI", "Compare all IIMs and major non-IIM MBA colleges by accepted exams, city, institute type, flagship programme, admission route, and official verification source.", [{ label: "IIM guide", href: "/iim/", primary: true }, { label: "MBA entrance exams", href: "/mba-entrance-exams/" }]) + `<section class="section"><div class="container"><div><div class="section-head"><div><p class="eyebrow">All IIMs</p><h2>${iims.length} IIMs accepting CAT</h2></div></div>${collegeTable(iims)}<div class="section-head"><div><p class="eyebrow">Top non-IIM options</p><h2>${others.length} relevant MBA colleges</h2></div></div><div class="card-grid">${others.map(collegeCard).join("")}</div><h2>Full MBA college comparison table</h2>${collegeTable(colleges)}</div></div></section>`;
  add(route, shell({ title: "Top MBA Colleges in India", description: "Research all IIMs and top MBA colleges in India by accepted exams, city, admission route, official sources, fees, placements and ROI context.", route, body, extraSchema: [{ "@context": "https://schema.org", "@type": "ItemList", name: "Top MBA Colleges in India", itemListElement: colleges.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: c.sourceUrl || abs(route) })) }] }));
}

function titleFor(route) {
 const fixed={"/":"Home","/cat-coaching/":"Coaching","/cat-preparation/":"Preparation","/cat-2026/":"CAT 2026","/iim/":"IIM admissions","/blog/":"Articles","/mba-colleges/":"MBA colleges","/guides/":"Guide library"};
 return fixed[route] || pages.find(p=>`/${p.slug}/`===route)?.title || coachings.find(c=>`/cat-coaching/${c.slug}/`===route)?.name || cities.find(c=>`/cat-coaching/${c.slug}/`===route)?.name || route.split('/').filter(Boolean).pop().replaceAll('-',' ');
}
function breadcrumbs(route,title) {
 if(route==='/')return '';
 const parts=route.split('/').filter(Boolean);const chain=[['Home','/']];
 const known=new Set(['/cat-coaching/','/mba-colleges/',...pages.map(p=>`/${p.slug}/`),...cities.map(c=>`/cat-coaching/${c.slug}/`),...coachings.map(c=>`/cat-coaching/${c.slug}/`)]);
 for(let i=1;i<parts.length;i++){const parent='/'+parts.slice(0,i).join('/')+'/';if(known.has(parent))chain.push([titleFor(parent),parent]);}
 return `<nav class="container breadcrumbs" aria-label="Breadcrumb"><ol>${chain.map(([label,href])=>`<li><a href="${href}">${esc(label)}</a></li>`).join('')}<li aria-current="page">${esc(title)}</li></ol></nav>`;
}
function priorityPanel(){
 return `<section class="section priority-guides"><div class="container"><div class="section-head"><div><p class="eyebrow">Start with a useful guide</p><h2>Plan your next study decision</h2></div><a href="/guides/" class="text-link">Browse the guide library →</a></div><div class="grid-3">${priorityGuides.map(([label,href,description])=>`<a class="feature" href="${href}"><h3>${esc(label)}</h3><p>${esc(description)}</p><span class="text-link">Read the guide →</span></a>`).join('')}</div></div></section>`;
}
function nextStepLinks(p){
 const existing=new Set(p.related||[]);
 const links=(nextSteps[p.slug]||[]).map(slug=>'/'+slug+'/').filter(href=>!existing.has(href));
 return links.length?`<section class="section next-steps"><div class="container narrow"><h2>Continue with the next step</h2>${renderLinks(links.map(href=>[titleFor(href),href]))}</div></section>`:'';
}
function guideLibrary(){
 const groups=[
 ['Exam facts and notices',p=>p.slug==='cat-2026'||p.slug.startsWith('cat-2026/')||p.slug==='mba-entrance-exams'],
 ['Preparation and admissions',p=>p.slug.startsWith('cat-preparation')||p.slug==='iim'||p.slug.startsWith('iim/')||p.slug==='cat-coaching/test-series'],
 ['Local coaching guides',p=>p.slug.startsWith('cat-coaching/')&&!p.slug.startsWith('cat-coaching/rodha/')&&p.slug!=='cat-coaching/test-series'],
 ['Coaching comparisons',p=>p.slug.startsWith('blog/')&&(p.slug.includes('-vs-')||p.slug.includes('best-cat-'))],
 ['Other articles and provider resources',p=>true]
 ];const used=new Set();
 const sections=groups.map(([heading,predicate])=>{const items=pages.filter(p=>p.slug!=='blog'&&!used.has(p.slug)&&predicate(p));items.forEach(p=>used.add(p.slug));return {heading,links:items.map(p=>[p.title,`/${p.slug}/`])};});
 const body=hero('Guide library','Find a CAT guide by task','Start with exam facts, work through a preparation question, or compare a specific course. Each link leads to a full guide and its available source notes.')+`<section class="section"><div class="container prose">${renderSection({heading:'Six useful starting points',links:priorityGuides.map(([label,href])=>[label,href])})}${sections.map(renderSection).join('')}${renderSection({heading:'Coaching directories',links:[['All coaching profiles','/cat-coaching/'],['Online courses','/cat-coaching/online/'],['Classroom providers','/cat-coaching/offline/'],...cities.map(c=>[c.name+' centre guide',`/cat-coaching/${c.slug}/`])]})}${renderSection({heading:'Provider profiles and listing clarifications',paragraphs:['Some retained profiles explain why a current CAT offering could not be verified. Inclusion here is navigation, not a recommendation.'],links:coachings.map(c=>[c.name,`/cat-coaching/${c.slug}/`])})}${renderSection({heading:'About this research',links:[['About','/about/'],['Editorial policy','/editorial-policy/'],['Methodology','/methodology/'],['Corrections','/corrections/'],['Contact','/contact/'],['Enquiry data','/enquiry-data/'],['MBA college directory','/mba-colleges/']]})}</div></section>`;
 add('/guides/',shell({title:'CAT Guide Library: Exam, Preparation and Coaching',description:'Find CAT exam facts, preparation guides, mock analysis, coaching profiles and local centre research.',route:'/guides/',body}));
}
function trustPage(p){
 const route=`/${p.slug}/`;
 const body=hero('About this publication',p.title,p.answer)+`<section class="section"><div class="container narrow prose">${p.sections.map(renderSection).join('')}</div></section>`;
 add(route,shell({title:p.title,description:p.answer,route,body}));
}

function trust(route, title, text) { add(route, shell({ title, description: text, route, body: `<section class="section"><div class="container narrow prose"><p class="eyebrow">Platform trust</p><h1>${title}</h1><p>${text}</p></div></section>` })); }
function assets() {
  mkdir(path.join(out, "assets"));
  for (const [source,target] of [["favicon.ico","favicon.ico"],["favicon-96.png","assets/favicon-96.png"],["apple-touch-icon.png","assets/apple-touch-icon.png"]]) fs.copyFileSync(path.join(__dirname,"assets",source),path.join(out,target));
  fs.copyFileSync(path.join(__dirname, "styles.css"), path.join(out, "assets/styles.css"));
  fs.copyFileSync(path.join(__dirname, "app.js"), path.join(out, "assets/app.js"));
  const logo = path.join(__dirname, "assets", "catprep-logo.svg");
  if (fs.existsSync(logo)) fs.copyFileSync(logo, path.join(out, "assets/catprep-logo.svg"));
}
function staticFiles() {
  fs.writeFileSync(path.join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...new Set(routes)].map(r => `<url><loc>${abs(r)}</loc></url>`).join("")}</urlset>`);
  fs.writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
  fs.writeFileSync(path.join(out, "googlebf3838439bb6403b.html"), "google-site-verification: googlebf3838439bb6403b.html\n");
}

fs.rmSync(out, { recursive: true, force: true });
mkdir(out);
assets();
home();
pages.forEach(article);
directory(null, "/cat-coaching/", "CAT Coaching Directory: Compare Courses, Fees and Centres", "Use the CAT coaching directory to compare institutes by mode, verified centre examples, named course prices and official sources before shortlisting.");
directory("online", "/cat-coaching/online/", "Online CAT Coaching: Courses, Fees and Evidence", "Online CAT coaching works best for disciplined aspirants who need flexible classes, recorded sessions, mocks, and doubt support.");
directory("hybrid", "/cat-coaching/offline/", "Classroom CAT Coaching: Providers and Verified Centre Examples", "Offline and hybrid CAT coaching can help students who need classroom discipline, faculty access, and local peer groups.");
cities.forEach(cityPage);
coachings.forEach(profile);
collegesPage();
guideLibrary();
trustPages.forEach(trustPage);
trust("/methodology/", "Coaching Comparison Methodology", method + " Source review: 8 October 2026. Fees are attached to named products, with tax status and official links. City tables contain selected official physical listings; online alternatives are separated. An unverified current course is excluded from the shortlist, while its existing URL explains the evidence gap. We do not publish numerical ratings without a traceable review dataset. Ask for current teachers, access expiry and refund terms before enrolling. Send corrections and official supporting sources to onlinecoaching4u.official@gmail.com.");
staticFiles();
console.log(`Built ${routes.length} routes into ${out}`);
