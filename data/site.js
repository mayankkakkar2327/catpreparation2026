const Module = require("module");

if (!global.__catPreparationBlogPagesPatch) {
  const originalLoad = Module._load;
  Module._load = function patchedCatPreparationLoad(request, parent, isMain) {
    const loaded = originalLoad.apply(this, arguments);
    if (request === "../data/pages" && Array.isArray(loaded)) {
      const existingBlogPages = require("./blog-pages").filter((page) => page.slug !== "blog");
      return loaded.concat(existingBlogPages, require("./blog-rodha-cracku-pages"));
    }
    return loaded;
  };
  global.__catPreparationBlogPagesPatch = true;
}

const site = {
  name: "CATPreparation2026",
  domain: "www.catpreparation2026.com",
  url: "https://www.catpreparation2026.com",
  tagline: "Research-led CAT 2026 preparation, coaching, and MBA admissions guidance.",
  description:
    "CATPreparation2026 is an independent education platform for CAT 2026 aspirants comparing coachings, IIMs, MBA colleges, exams, and preparation resources.",
  nav: [
    { label: "CAT 2026", href: "/cat-2026/" },
    { label: "Coaching", href: "/cat-coaching/" },
    { label: "Colleges", href: "/mba-colleges/" },
    { label: "IIMs", href: "/iim/" },
    { label: "Exams", href: "/mba-entrance-exams/" },
    { label: "Preparation", href: "/cat-preparation/" },
    { label: "News", href: "/cat-2026/latest-news/" },
    { label: "Blog", href: "/blog/" }
  ],
  sourcePolicy:
    "Dates, exam rules, college data, and coaching details should be verified against official websites, brochures, admission pages, and institute disclosures before publication.",
  updated: "2026-07-14"
};

module.exports = site;
