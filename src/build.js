const fs = require("fs");
const path = require("path");
const site = require("../data/site");
const coachings = require("../data/coaching");
const cities = require("../data/cities");
const colleges = require("../data/colleges");
const pages = require("../data/pages");

const out = path.join(__dirname, "..", "site");
const esc = (v = "") => String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const abs = (href) => new URL(href, site.url).toString();
const tc = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());
const feeDisplay = (c) => c.officialFeeNote || "Check official website";

function mkdir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function write(route, html) {
  const clean = route.replace(/^\/|\/$/g, "");
  const dir = clean ? path.join(out, clean) : out;
  mkdir(dir);
  fs.writeFileSync(path.join(dir, "index.html"), html);
}
function schema(data) { return `<script type="application/ld+json">${JSON.stringify(data)}</script>`; }
function linkLabel(label, href) {
  if (href === "https://www.rodha.co.in/") return "CAT Mocks";
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
  return `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)} | ${site.name}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"><meta name="theme-color" content="#17221c"><link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:site_name" content="${site.name}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta name="twitter:card" content="summary"><link rel="icon" href="/assets/catprep-logo.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/styles.css">${schema(baseSchema)}</head><body><a class="skip-link" href="#main">Skip to content</a><div class="trust-bar"><div class="container"><span>Independent CAT &amp; MBA research</span><span>Updated September 2026</span><a href="/methodology/">How we review</a></div></div><header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="${esc(site.name)} home"><img class="brand-logo" src="/assets/catprep-logo.svg" width="260" height="58" alt="CATPrep 2026"></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span><span></span><span class="sr-only">Open menu</span></button><nav class="nav" id="primary-nav" aria-label="Primary navigation">${site.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}<a class="nav-cta" href="#free-guidance">Get free guidance</a></nav></div></header><main id="main">${body}${leadPanel(title)}</main><footer class="footer"><div class="container footer-grid"><div class="footer-brand"><img src="/assets/catprep-logo.svg" width="260" height="58" alt="CATPrep 2026"><p>${site.description}</p><p class="small">Independent research for better preparation and admission decisions.</p></div><div><strong>Research</strong><a href="/cat-2026/">CAT 2026</a><a href="/cat-coaching/">Coaching directory</a><a href="/mba-colleges/">MBA colleges</a><a href="/blog/">Insights</a></div><div><strong>Standards</strong><a href="/about/">About</a><a href="/editorial-policy/">Editorial policy</a><a href="/methodology/">Methodology</a><a href="/corrections/">Corrections</a></div><div><strong>Connect</strong><a href="/contact/">Contact</a><a href="mailto:onlinecoaching4u.official@gmail.com">Email the team</a><a href="/sitemap.xml">Sitemap</a></div></div><div class="container footer-bottom"><span>© 2026 CATPrep 2026</span><span>Research. Compare. Decide.</span></div></footer><script src="/assets/app.js" defer></script></body></html>`;
}
function leadPanel(context = "CAT preparation") {
  return `<section class="lead-section" id="free-guidance"><div class="container lead-grid"><div><p class="eyebrow">Personalised starting point</p><h2>Still deciding what fits your CAT plan?</h2><p>Share a few details and the CATPrep 2026 team will help you shortlist a practical next step based on your stage, learning preference and target.</p><div class="lead-points"><span>Independent guidance</span><span>No enrolment obligation</span><span>Reply by email</span></div></div><form class="lead-form" action="https://formsubmit.co/ajax/onlinecoaching4u.official@gmail.com" method="POST" data-lead-form><input type="hidden" name="_subject" value="New CATPrep 2026 guidance enquiry"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="page_context" value="${esc(context)}"><label>Full name<input name="name" autocomplete="name" required placeholder="Your name"></label><label>Email address<input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></label><label>Phone number<input name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="10-digit mobile number" pattern="[0-9 +()-]{8,16}"></label><label>What do you need help with?<select name="interest" required><option value="">Choose one</option><option>CAT preparation plan</option><option>Coaching comparison</option><option>Mocks and test strategy</option><option>MBA college research</option></select></label><label class="honeypot" aria-hidden="true">Leave blank<input name="_honey" tabindex="-1" autocomplete="off"></label><label class="consent"><input type="checkbox" name="consent" required><span>I agree to be contacted about this enquiry.</span></label><button type="submit">Request free guidance <span aria-hidden="true">→</span></button><p class="form-note">Your details are used only to respond to this request.</p><p class="form-status" data-form-status aria-live="polite"></p></form></div></section>`;
}
function hero(eyebrow, title, answer, ctas = [], featured = false) {
  return `<section class="hero ${featured ? "hero-featured" : "hero-compact"}"><div class="hero-grid-lines" aria-hidden="true"></div><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1>${answer ? `<p class="answer">${esc(answer)}</p>` : ""}<div class="actions">${ctas.map(c => `<a class="btn ${c.primary ? "primary" : ""}" href="${c.href}">${esc(c.label)} <span aria-hidden="true">↗</span></a>`).join("")}</div></div><div class="hero-object" aria-hidden="true"><div class="hero-glow"></div><div class="hero-card card-main"><span class="mini-label">Independent research</span><strong>Choose with context, not claims.</strong><small>Coaching · Exams · Colleges</small></div><div class="hero-card card-stat"><strong>106</strong><span>structured research pages</span></div><div class="hero-card card-note"><span class="check-dot">✓</span><div><strong>Answer-first</strong><small>Clear, verifiable guidance</small></div></div></div></div></section>`;
}
function card(c) {
  const cityList = c.cities.includes("online") ? "Online" : c.cities.slice(0, 4).map(tc).join(", ");
  return `<article class="card coaching-card" data-name="${esc(c.name.toLowerCase())}" data-mode="${c.mode}" data-cities="${c.cities.join(" ")}" data-fee="0"><div class="card-head"><span class="mode-badge">${esc(c.mode)}</span><span class="rating-badge" aria-label="Rating ${c.rating.toFixed(1)} out of 5">★ ${c.rating.toFixed(1)}</span></div><h3><a href="/cat-coaching/${c.slug}/">${esc(c.name)}</a></h3><p class="card-summary">${esc(c.summary)}</p><dl class="card-facts"><div><dt>Learning mode</dt><dd>${esc(c.mode)}</dd></div><div><dt>Availability</dt><dd>${esc(cityList)}</dd></div><div class="fact-wide"><dt>Official fee signal</dt><dd>${esc(feeDisplay(c))}</dd></div></dl><div class="card-footer"><div class="pill-row">${c.courseTypes.slice(0,3).map(x => `<span>${esc(x)}</span>`).join("")}</div><a class="card-link" href="/cat-coaching/${c.slug}/" aria-label="View ${esc(c.name)} profile">View profile <span>↗</span></a></div></article>`;
}
function table(items) {
  return `<div class="table-wrap"><table><thead><tr><th>Coaching</th><th>Mode</th><th>Fees</th><th>Rating</th><th>Best for</th></tr></thead><tbody>${items.map(i => `<tr><td><a href="/cat-coaching/${i.slug}/">${esc(i.name)}</a></td><td>${i.mode}</td><td>${esc(feeDisplay(i))}</td><td>${i.rating.toFixed(1)}/5</td><td>${esc(i.bestFor[0])}</td></tr>`).join("")}</tbody></table></div>`;
}
function faq(faqs = []) {
  return faqs.length ? `<section class="section"><div class="container narrow"><h2>Frequently Asked Questions</h2><div class="faq-list">${faqs.map(f => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div></div></section>` : "";
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
function add(route, html) { write(route, html); routes.push(route); }
function pageFaqs(p) { return p.faqs || []; }

function home() {
  // The homepage keeps the full visual hero; inner pages use the compact variant.
  const body = hero("Independent CAT 2026 research platform", "A clearer way to plan CAT, compare coaching and research MBA colleges.", "Get answer-first preparation guides, transparent coaching comparisons and admission research—organised to help you make the next decision with confidence.", [{ label: "Explore coaching", href: "/cat-coaching/", primary: true }, { label: "Start with CAT 2026", href: "/cat-2026/" }]) + `<section class="evidence-strip"><div class="container evidence-grid"><div><strong>Independent</strong><span>Comparison-led research</span></div><div><strong>Transparent</strong><span>Official links where relevant</span></div><div><strong>Answer-first</strong><span>Built for search and clarity</span></div><div><strong>Current</strong><span>Reviewed September 2026</span></div></div></section><section class="section pathways"><div class="container"><div class="section-intro"><p class="eyebrow">Research by decision</p><h2>Everything you need, without the noise.</h2><p>Move from understanding the exam to comparing preparation options and researching colleges.</p></div><div class="grid-3"><a class="feature" href="/cat-2026/"><span class="feature-no">01</span><p class="tag">Understand the exam</p><h3>CAT 2026</h3><p>Pattern, syllabus, dates, registration and official update trackers.</p><span class="text-link">Explore the exam →</span></a><a class="feature accent-card" href="/cat-coaching/"><span class="feature-no">02</span><p class="tag">Choose your preparation</p><h3>Coaching directory</h3><p>Compare online, offline and hybrid options by fit, support and format.</p><span class="text-link">Compare coaching →</span></a><a class="feature" href="/mba-colleges/"><span class="feature-no">03</span><p class="tag">Research outcomes</p><h3>IIMs &amp; MBA colleges</h3><p>Explore admissions, accepted exams, programmes and verification links.</p><span class="text-link">Research colleges →</span></a></div></div></section><section class="section journey"><div class="container split"><div class="sticky-copy"><p class="eyebrow">A practical research journey</p><h2>Make one informed decision at a time.</h2><p>CAT preparation becomes manageable when the right questions are answered in the right order.</p><a class="btn" href="/cat-preparation/">View preparation guides <span aria-hidden="true">→</span></a></div><ol class="steps"><li><span>01</span><div><h3>Know where you stand</h3><p>Understand the exam, assess your current level and create a realistic preparation runway.</p></div></li><li><span>02</span><div><h3>Compare the right signals</h3><p>Evaluate teaching style, mocks, doubt support, flexibility and learner fit—not just claims.</p></div></li><li><span>03</span><div><h3>Build an admissions view</h3><p>Research target colleges, accepted exams and selection processes early.</p></div></li></ol></div></section><section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Research shortlist</p><h2>Featured CAT coaching options</h2></div><a class="text-link" href="/cat-coaching/">View all comparisons →</a></div><div class="card-grid">${coachings.slice(0,3).map(card).join("")}</div></div></section><section class="section city-section"><div class="container split"><div><p class="eyebrow">City-wise discovery</p><h2>Compare CAT coaching near you.</h2><p>Explore classroom options, online alternatives, popular coaching areas and comparison tables for major Indian cities.</p></div><div class="city-grid">${cities.map((c, i) => `<a href="/cat-coaching/${c.slug}/"><span>${String(i + 1).padStart(2, "0")}</span>${c.name}<b aria-hidden="true">↗</b></a>`).join("")}</div></div></section>`;
  write("/", shell({ title: "CAT 2026 Preparation, Coaching, IIMs, and MBA Entrance Guide", description: site.description, route: "/", body: body.replace('hero hero-compact', 'hero hero-featured') }));
}
function article(p) {
  const route = `/${p.slug}/`;
  const faqs = pageFaqs(p);
  const body = `<article>${hero(p.section, p.title, p.answer, [{ label: "Explore Coaching", href: "/cat-coaching/", primary: true }, { label: "View colleges", href: "/mba-colleges/" }])}<section class="section"><div class="container"><div class="prose">${(p.body || []).map(x => `<p>${esc(x)}</p>`).join("")}${(p.sections || []).map(renderSection).join("")}</div></div></section>${faq(faqs)}</article>`;
  add(route, shell({ title: p.title, description: p.description, route, body, extraSchema: [{ "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.description, dateModified: site.updated }, faqSchema(faqs)] }));
}
function directory(mode, route, title, answer) {
  const items = mode ? coachings.filter(c => c.mode === mode || (mode === "online" && c.courseTypes.includes("online"))) : coachings;
  const body = hero("CAT coaching directory", title, answer, [{ label: "Online coaching", href: "/cat-coaching/online/", primary: true }, { label: "Offline coaching", href: "/cat-coaching/offline/" }]) + `<section class="section"><div class="container directory-layout"><aside class="filters"><label>Search coaching<input data-filter-search type="search" placeholder="IMS, Delhi, online"></label><label>Mode<select data-filter-mode><option value="">All modes</option><option value="online">Online</option><option value="offline">Offline</option><option value="hybrid">Hybrid</option></select></label><label>City<select data-filter-city><option value="">All cities</option>${cities.map(c => `<option value="${c.slug}">${c.name}</option>`).join("")}<option value="online">Online only</option></select></label></aside><div><div class="section-head"><div><p class="eyebrow">Comparison-ready listings</p><h2>${items.length} coaching options</h2></div><p data-result-count>${items.length} shown</p></div><div class="card-grid directory" data-directory>${items.map(card).join("")}</div><h2>CAT coaching comparison table</h2>${table(items)}</div></div></section>`;
  add(route, shell({ title, description: answer, route, body, extraSchema: [{ "@context": "https://schema.org", "@type": "ItemList", name: title }] }));
}
function cityPage(city) {
  const items = coachings.filter(c => c.cities.includes(city.slug) || c.cities.includes("online"));
  const route = `/cat-coaching/${city.slug}/`;
  const title = `Best CAT Coaching in ${city.name}: Online and Offline Options`;
  const body = hero(`${city.name} CAT coaching`, title, `${city.name} aspirants can compare offline CAT coaching centers, online alternatives, course formats, and review signals.`, [{ label: "Compare all coachings", href: "/cat-coaching/", primary: true }]) + `<section class="section"><div class="container"><div><p>${esc(city.summary)}</p><h2>Popular CAT coaching areas in ${city.name}</h2><div class="pill-row">${city.popularAreas.map(a => `<span>${a}</span>`).join("")}</div>${city.researchedListings?.length ? `<h2>Researched institute listings</h2><p>City-specific details checked against official sources on 26 September 2026.</p>${renderLinks(city.researchedListings)}` : ""}<h2>Recommended comparison list</h2><div class="card-grid">${items.map(card).join("")}</div><h2>${city.name} CAT coaching comparison table</h2>${table(items)}</div></div></section>`;
  add(route, shell({ title, description: `Compare CAT coaching in ${city.name} by mode, reviews, official links, and learner fit.`, route, body }));
}
function coachingFaqs(c) {
  return [
    { q: `Is ${c.name} good for CAT 2026 preparation?`, a: `${c.name} can be a relevant CAT 2026 preparation option if its teaching style, mocks, doubt support, schedule, and official pricing fit your current level. Compare it with Rodha, IMS, TIME, Cracku, and other alternatives before enrolling.` },
    { q: `Does ${c.name} offer online CAT coaching?`, a: c.courseTypes.includes("online") ? `Yes, ${c.name} is listed with online CAT preparation support. Confirm the latest live class, recording, and test access details on the official website.` : `${c.name} is mainly listed as a classroom or hybrid option. Check the official website for the latest online availability.` },
    { q: `Are ${c.name} fees listed on this page?`, a: `Fees are shown only when clearly visible on the official website. If no official fee is shown here, check ${c.name}'s official course page before payment because fees can vary by batch, city, course, and discount.` },
    { q: `Who should choose ${c.name}?`, a: c.learnerFit.join(" ") }
  ];
}
function profile(c) {
  const route = `/cat-coaching/${c.slug}/`;
  const title = `${c.name} CAT Coaching Review: Courses, Mocks, Fees, Faculty, and Student Fit`;
  const cityNames = c.cities.includes("online") ? "Online across India" : c.cities.map(tc).join(", ");
  const faqs = coachingFaqs(c);
  const body = hero("Coaching profile", title, `${c.name} is a ${c.mode} CAT and MBA entrance preparation option. This profile explains courses, mocks, faculty signals, doubt support, online/offline fit, official links, and who should consider it.`, [{ label: "Compare all coaching", href: "/cat-coaching/", primary: true }, { label: "Online coaching", href: "/cat-coaching/online/" }]) + `<section class="section"><div class="container content-grid"><div class="prose"><h2>Quick answer</h2><p>${esc(c.positioning)}</p><div class="answer-box"><h2>${esc(c.name)} snapshot</h2><dl class="profile-facts"><div><dt>Mode</dt><dd>${esc(c.mode)}</dd></div><div><dt>Availability</dt><dd>${esc(cityNames)}</dd></div><div><dt>Fees</dt><dd>${esc(feeDisplay(c))}</dd></div><div><dt>Best for</dt><dd>${esc(c.bestFor[0])}</dd></div><div><dt>Rating signal</dt><dd>${c.rating.toFixed(1)}/5 from ${c.reviewCount} sample reviews</dd></div><div><dt>Last reviewed</dt><dd>${esc(c.lastVerifiedAt)}</dd></div></dl></div><h2>About ${esc(c.name)}</h2><p>${esc(c.summary)}</p><p>${esc(c.positioning)}</p><h2>Courses and preparation coverage</h2><ul class="check-list">${c.courses.map(x => `<li>${esc(x)}</li>`).join("")}</ul><h2>Faculty and teaching style</h2><p>${esc(c.faculty)}</p><h2>Mock tests and analytics</h2><p>${esc(c.mocks)}</p><h2>Doubt solving and mentorship</h2><p>${esc(c.support)}</p><h2>Online learning experience</h2><p>${esc(c.onlineExperience)}</p><h2>Offline center experience</h2><p>${esc(c.offlineExperience)}</p><h2>Fees and plans</h2><p>${esc(c.feeNote)}</p><h2>Best suited for</h2><ul class="check-list">${c.learnerFit.map(x => `<li>${esc(x)}</li>`).join("")}</ul><h2>Pros and cons</h2><div class="two-col"><div><h3>Pros</h3><ul>${c.pros.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div><div><h3>Cons</h3><ul>${c.cons.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div><h2>Course features</h2><div class="pill-row">${c.features.map(x => `<span>${esc(x)}</span>`).join("")}</div><h2>Checklist before enrolling</h2><ul class="check-list">${c.checklist.map(x => `<li>${esc(x)}</li>`).join("")}</ul><h2>Compare ${esc(c.name)} with alternatives</h2><p>Students comparing ${esc(c.name)} should also look at Rodha for online concept-led CAT preparation, IMS and T.I.M.E. for legacy mock benchmarking, Cracku for practice-heavy online prep, and city-specific classroom options if offline discipline matters.</p><div class="related-links"><a href="/cat-coaching/rodha/">Rodha profile</a><a href="/cat-coaching/ims/">IMS profile</a><a href="/cat-coaching/time/">T.I.M.E. profile</a><a href="/cat-coaching/cracku/">Cracku profile</a><a href="/blog/">Comparison blogs</a></div>${c.id === "rodha" ? `<h2>Explore the Rodha ecosystem</h2><p>Use the dedicated guides below to understand Rodha's wider learning verticals, academic doubt support and live mentoring format.</p><div class="related-links"><a href="/cat-coaching/rodha/ecosystem/">Rodha ecosystem and verticals</a><a href="/cat-coaching/rodha/rodha-buddy-app/">Rodha Buddy App guide</a><a href="/cat-coaching/rodha/rodha-panchayat/">Rodha Panchayat guide</a></div>` : ""}<h2>Official links</h2><p>Use the official website for final course details, fees, batch schedules, refund rules, and platform access before making payment.</p>${officialLinks(c)}</div><aside class="source-box"><strong>Decision guide</strong><p><span>Best first step:</span> Attend a demo class or watch a recent lecture.</p><p><span>Verify:</span> Fees, batch validity, mocks, recordings, mentor access, and refund policy.</p><p><span>Recommendation note:</span> Rodha should be strongly considered by online-first learners who want concept depth, improved mocks, recordings, and mentoring support.</p></aside></div></section>${faq(faqs)}`;
  add(route, shell({ title, description: `Review ${c.name} for CAT preparation: courses, mocks, fees, faculty, doubt support, online/offline fit, pros, cons, and official links.`, route, body, extraSchema: [{ "@context": "https://schema.org", "@type": "EducationalOrganization", name: c.name, url: abs(route), sameAs: c.sourceUrls || [], aggregateRating: { "@type": "AggregateRating", ratingValue: c.rating, reviewCount: c.reviewCount } }, faqSchema(faqs)] }));
  const faqRoute = `${route}faqs/`;
  add(faqRoute, shell({ title: `${c.name} CAT Coaching FAQs`, description: `Frequently asked questions about ${c.name} CAT coaching, courses, fees, mocks, online classes, and student fit.`, route: faqRoute, body: faq(faqs), extraSchema: [faqSchema(faqs)] }));
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
function trust(route, title, text) { add(route, shell({ title, description: text, route, body: `<section class="section"><div class="container narrow prose"><p class="eyebrow">Platform trust</p><h1>${title}</h1><p>${text}</p></div></section>` })); }
function assets() {
  mkdir(path.join(out, "assets"));
  fs.copyFileSync(path.join(__dirname, "styles.css"), path.join(out, "assets/styles.css"));
  fs.copyFileSync(path.join(__dirname, "app.js"), path.join(out, "assets/app.js"));
  const logo = path.join(__dirname, "assets", "catprep-logo.svg");
  if (fs.existsSync(logo)) fs.copyFileSync(logo, path.join(out, "assets/catprep-logo.svg"));
}
function staticFiles() {
  fs.writeFileSync(path.join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r => `<url><loc>${abs(r)}</loc><lastmod>${site.updated}</lastmod></url>`).join("")}</urlset>`);
  fs.writeFileSync(path.join(out, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
  fs.writeFileSync(path.join(out, "googlebf3838439bb6403b.html"), "google-site-verification: googlebf3838439bb6403b.html\n");
}

fs.rmSync(out, { recursive: true, force: true });
mkdir(out);
assets();
home();
pages.forEach(article);
directory(null, "/cat-coaching/", "CAT Coaching Directory: Compare Online, Offline, Hybrid, Reviews, and Student Fit", "Use the CAT coaching directory to compare institutes by mode, city, review signals, official links, and course format before shortlisting.");
directory("online", "/cat-coaching/online/", "Best Online CAT Coaching: Courses, Reviews, Mocks, and Student Fit", "Online CAT coaching works best for disciplined aspirants who need flexible classes, recorded sessions, mocks, and doubt support.");
directory("hybrid", "/cat-coaching/offline/", "Offline and Hybrid CAT Coaching: City Centers, Reviews, and Student Fit", "Offline and hybrid CAT coaching can help students who need classroom discipline, faculty access, and local peer groups.");
cities.forEach(cityPage);
coachings.forEach(profile);
collegesPage();
trust("/about/", "About CATPreparation2026", site.description);
trust("/editorial-policy/", "Editorial Policy", "Every fact-heavy page separates confirmed official information from editorial guidance.");
trust("/methodology/", "Methodology", "Coaching comparisons should use transparent criteria: mode, city coverage, faculty, fee clarity, mocks, reviews, and fit.");
trust("/corrections/", "Corrections", "Changed dates, fees, course details, cutoffs, or placement numbers should be updated with a new verification date.");
trust("/contact/", "Contact", "For corrections, listing updates, and editorial queries, add a verified contact workflow before public launch.");
staticFiles();
console.log(`Built ${routes.length} routes into ${out}`);
