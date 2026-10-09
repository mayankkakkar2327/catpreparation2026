// Editorial navigation: stable, relevant routes rather than automatic keyword links.
const priorityGuides = [
 ['CAT syllabus','/cat-2026/syllabus/','Build a topic checklist for VARC, DILR and Quant.'],
 ['Exam pattern','/cat-2026/exam-pattern/','Understand confirmed timing and sectional practice.'],
 ['Important dates','/cat-2026/important-dates/','Check the source-backed exam and admit-card calendar.'],
 ['Mock analysis','/cat-preparation/mock-tests/','Use a repeatable review template after each test.'],
 ['Test-series comparison','/cat-coaching/test-series/','Compare mock packages separately from teaching courses.'],
 ['IIM selection criteria','/iim/selection-criteria/','Read eligibility, shortlisting and final selection in stages.']
];
const nextSteps = {
 'cat-2026': ['cat-2026/admit-card','cat-preparation/mock-tests','iim/selection-criteria'],
 'cat-2026/syllabus':['cat-2026/exam-pattern','cat-preparation/mock-tests','cat-coaching/test-series'],
 'cat-2026/exam-pattern':['cat-preparation/mock-tests','cat-2026/syllabus','cat-2026/admit-card'],
 'cat-2026/important-dates':['cat-2026/admit-card','cat-2026/registration','cat-2026/latest-news'],
 'cat-2026/eligibility':['cat-2026/registration','iim/selection-criteria'],
 'cat-2026/registration':['cat-2026/admit-card','cat-2026/important-dates'],
 'cat-2026/admit-card':['cat-2026/important-dates','cat-2026/exam-pattern','cat-preparation/mock-tests'],
 'cat-2026/cutoff':['iim/selection-criteria','cat-preparation/mock-tests'],
 'cat-preparation':['cat-2026/syllabus','cat-2026/exam-pattern','cat-preparation/mock-tests','cat-coaching/test-series'],
 'cat-preparation/mock-tests':['cat-coaching/test-series','cat-2026/exam-pattern','cat-2026/syllabus'],
 'cat-coaching/test-series':['cat-preparation/mock-tests','cat-coaching/online'],
 'iim':['iim/selection-criteria','cat-2026/cutoff','cat-2026/eligibility'],
 'iim/selection-criteria':['cat-2026/cutoff','cat-2026/eligibility','mba-colleges'],
 'mba-entrance-exams':['cat-2026','cat-2026/latest-news','cat-preparation/mock-tests']
};
module.exports={priorityGuides,nextSteps};
