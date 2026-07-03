const pages = [
  ["cat-2026", "CAT 2026: Exam Overview, Pattern, Syllabus, Dates, and Preparation", "CAT 2026", "CAT 2026 is expected to be the main MBA entrance test for IIM and top B-school admissions. Track official CAT updates and prepare across VARC, DILR, and Quantitative Aptitude."],
  ["cat-2026/syllabus", "CAT 2026 Syllabus: VARC, DILR, and Quant Topics", "CAT 2026", "The CAT 2026 syllabus should be prepared across VARC, DILR, and Quantitative Aptitude, using previous CAT papers and official pattern updates."],
  ["cat-2026/eligibility", "CAT 2026 Eligibility: Qualification, Marks, Final-Year Rules, and Categories", "CAT 2026", "CAT 2026 eligibility should be confirmed from the official notification before applying, especially for final-year, category, and marks rules."],
  ["cat-2026/exam-pattern", "CAT 2026 Exam Pattern: Sections, Duration, and Marking Scheme", "CAT 2026", "CAT 2026 exam pattern details should be verified from the official notification. Preparation should center on VARC, DILR, and Quant."],
  ["cat-2026/important-dates", "CAT 2026 Important Dates: Notification, Registration, Admit Card, Exam, Result", "CAT 2026", "CAT 2026 dates should be treated as tentative until official CAT notification confirms registration, admit card, exam, and result dates."],
  ["cat-2026/registration", "CAT 2026 Registration: Application Process, Fees, and Documents", "CAT 2026", "CAT 2026 registration details should be confirmed from the official CAT website, including fee, documents, and correction window rules."],
  ["cat-2026/admit-card", "CAT 2026 Admit Card: Download, Exam Center, and Instructions", "CAT 2026", "CAT 2026 admit card instructions should be followed exactly as published by the official CAT authority."],
  ["cat-2026/cutoff", "CAT 2026 Cutoff: IIM Shortlisting, Percentile, and Category Notes", "CAT 2026", "CAT cutoffs vary by IIM, program, category, academic profile, and admission stage. Read each IIM's official admission policy."],
  ["cat-2026/latest-news", "CAT 2026 Latest News and Official Updates", "News", "CAT 2026 news should be tracked from official sources first, then summarized with clear dates and source links."],
  ["cat-preparation", "CAT Preparation 2026: Study Plan, Books, Mocks, and Section Strategy", "Preparation", "CAT 2026 preparation should combine concept building, timed practice, mock analysis, revision, and section-wise strategy."],
  ["cat-preparation/mock-tests", "CAT Mock Tests 2026: How to Choose and Analyze Mocks", "Preparation", "CAT mocks build speed, accuracy, stamina, and strategy. The real value comes from post-mock analysis."],
  ["cat-coaching/test-series", "CAT Test Series 2026: Compare Mocks, Analysis, and Sectional Tests", "Coaching", "A good CAT test series should provide full-length mocks, sectional tests, percentile benchmarking, and detailed analysis."],
  ["mba-entrance-exams", "MBA Entrance Exams in India: CAT, XAT, SNAP, NMAT, CMAT, MAT", "Exams", "CAT is the main entrance exam for IIMs, while XAT, SNAP, NMAT, CMAT, MAT, and MAH MBA CET open additional MBA pathways."],
  ["iim", "IIM Admissions: CAT, Shortlisting, Fees, Cutoffs, and Placements", "IIMs", "IIM admissions usually use CAT scores along with academic profile, category, work experience, WAT, PI, and institute-specific criteria."],
  ["iim/selection-criteria", "IIM Selection Criteria: CAT Score, Academics, Work Experience, WAT and PI", "IIMs", "IIM selection criteria are institute-specific and usually combine CAT performance with academics, category, work experience, WAT, PI, and diversity factors."]
].map(([slug, title, section, answer]) => ({
  slug, title, section, answer,
  description: answer,
  body: [
    "This page is structured for search engines and AI assistants with a direct answer, source policy, FAQs, and related links.",
    "Exact dates, fees, cutoffs, and admission rules should be updated only after checking official CAT, IIM, college, or institute sources."
  ],
  faqs: [{ q: `Is this ${section} information final?`, a: "Fact-heavy details should be verified from official sources before decisions are made." }]
}));

module.exports = pages;
