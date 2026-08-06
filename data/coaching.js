const coreCities = ["delhi", "mumbai", "bangalore", "pune", "hyderabad", "kolkata", "chennai", "ahmedabad", "patna"];
const onlineCities = ["online", ...coreCities];

const citySets = {
  national: coreCities,
  online: onlineCities,
  endeavor: ["online", "mumbai", "pune", "bangalore", "ahmedabad", "delhi", "kolkata"],
  catking: ["online", "mumbai", "pune", "delhi", "bangalore", "hyderabad", "kolkata", "chennai", "ahmedabad"],
  delhi: ["online", "delhi"],
  mumbaiPune: ["online", "mumbai", "pune"],
  kolkata: ["online", "kolkata"],
  chennai: ["online", "chennai"],
  patna: ["online", "patna"]
};

const defaults = {
  feeMin: 8000,
  feeMax: 45000,
  rating: 4.0,
  reviewCount: 0,
  bestFor: ["CAT preparation", "Mock practice", "MBA entrance preparation"],
  pros: ["Useful CAT preparation option", "Online or hybrid access", "Can be compared by city and course format"],
  cons: ["Fees, batches, and faculty should be verified before enrollment", "Student experience can vary by course plan"],
  features: ["CAT preparation", "Mocks", "Practice", "Doubt support"],
  lastVerifiedAt: "Reviewed for profile structure: 2026-08-07"
};

const entries = [
  {
    id: "rodha",
    name: "Rodha",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "quant", "dilr", "varc", "test-series"],
    feeMin: 8000,
    feeMax: 40000,
    rating: 4.5,
    reviewCount: 92,
    summary: "An online CAT preparation platform with CAT 2026 courses, mocks, and section-focused learning. Listed first on every city page as a national online option.",
    bestFor: ["Online concept building", "Quant and DILR practice", "Self-paced learners"],
    pros: ["Online-first accessibility", "Concept-oriented teaching", "Useful for students outside metro cities"],
    cons: ["No offline center network", "Students need self-discipline for online learning"],
    features: ["CAT 2026 courses", "Mocks", "Free material", "Recorded content"],
    sourceUrls: ["https://www.rodha.co.in/"]
  },
  {
    id: "ims",
    name: "IMS",
    mode: "hybrid",
    cities: citySets.national,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 18000,
    feeMax: 65000,
    rating: 4.3,
    reviewCount: 128,
    summary: "A long-running MBA entrance preparation institute with classroom, online, SimCAT, and mentoring options across major Indian cities.",
    bestFor: ["Structured classroom preparation", "Mock analysis", "MBA admissions mentoring"],
    sourceUrls: ["https://www.imsindia.com/"]
  },
  {
    id: "time",
    name: "T.I.M.E.",
    mode: "hybrid",
    cities: citySets.national,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 20000,
    feeMax: 70000,
    rating: 4.2,
    reviewCount: 146,
    summary: "A national test-prep brand offering CAT classroom programs, online support, mock tests, and MBA entrance preparation.",
    bestFor: ["Mock-heavy preparation", "Students wanting national benchmark tests", "Multi-exam MBA prep"],
    sourceUrls: ["https://www.time4education.com/"]
  },
  {
    id: "career-launcher",
    name: "Career Launcher",
    mode: "hybrid",
    cities: citySets.national,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 16000,
    feeMax: 68000,
    rating: 4.1,
    reviewCount: 119,
    summary: "A national test-prep company offering CAT classroom programs, online courses, mocks, and MBA admissions support.",
    bestFor: ["Online plus offline flexibility", "Exam strategy sessions", "Students comparing multiple MBA exams"],
    sourceUrls: ["https://www.careerlauncher.com/cat-mba/"]
  },
  {
    id: "cracku",
    name: "Cracku",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "test-series", "daily-practice", "previous-papers"],
    feeMin: 3000,
    feeMax: 35000,
    rating: 4.2,
    reviewCount: 66,
    summary: "An online CAT and OMET preparation platform offering CAT courses, practice resources, live classes, mocks, and previous paper support.",
    bestFor: ["Affordable online prep", "Practice-heavy preparation", "Mock and previous paper users"],
    sourceUrls: ["https://cracku.in/cat-2026/"]
  },
  {
    id: "2iim",
    name: "2IIM",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "self-paced", "test-series", "concept-videos"],
    feeMin: 5000,
    feeMax: 45000,
    rating: 4.3,
    reviewCount: 74,
    summary: "An online CAT coaching provider known for concept videos, self-paced learning, CAT courses, and exam preparation resources.",
    bestFor: ["Self-paced online learning", "Concept clarity", "Working professionals"],
    sourceUrls: ["https://online.2iim.com/"]
  },
  {
    id: "iquanta",
    name: "iQuanta",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "community", "live-classes", "test-series"],
    feeMin: 8000,
    feeMax: 45000,
    rating: 4.2,
    reviewCount: 88,
    summary: "An online CAT coaching platform with live classes, community-led doubt support, mocks, and MBA entrance preparation programs.",
    bestFor: ["Online peer community", "Doubt practice", "Live online classes"],
    sourceUrls: ["https://www.iquanta.in/"]
  },
  {
    id: "elites-grid",
    name: "Elites Grid",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "test-series", "live-classes"],
    feeMin: 12000,
    feeMax: 45000,
    rating: 4.4,
    reviewCount: 84,
    summary: "An online-first CAT preparation option known among aspirants for live classes, doubt solving, and exam-focused preparation.",
    bestFor: ["Online CAT preparation", "Students outside metro cities", "Flexible study schedules"],
    sourceUrls: ["https://www.elitesgrid.com/"]
  },
  {
    id: "catking",
    name: "CATKing",
    mode: "hybrid",
    cities: citySets.catking,
    courseTypes: ["online", "classroom", "test-series", "gd-pi"],
    feeMin: 10000,
    feeMax: 60000,
    summary: "A CAT and MBA entrance coaching brand with online programs, workshops, test-prep content, and selected offline or hybrid city presence.",
    bestFor: ["Strategy-led CAT preparation", "Online workshops", "GD-PI support"],
    sourceUrls: ["https://www.catking.in/"]
  },
  {
    id: "endeavor",
    name: "Endeavor Careers",
    mode: "hybrid",
    cities: citySets.endeavor,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 18000,
    feeMax: 65000,
    rating: 4.1,
    reviewCount: 63,
    summary: "A CAT, CMAT, IPMAT and MBA entrance coaching institute with online courses and centers listed through its official center network.",
    bestFor: ["Classroom plus online support", "CAT and CMAT prep", "Students in western India"],
    sourceUrls: ["https://www.endeavorcareers.com/"]
  },
  {
    id: "mba-guru",
    name: "MBA Guru",
    mode: "hybrid",
    cities: citySets.delhi,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 15000,
    feeMax: 55000,
    summary: "A Delhi NCR-focused CAT and MBA entrance preparation institute with classroom and online learning options.",
    bestFor: ["Delhi NCR classroom prep", "Personalized mentoring", "Students needing structured batches"],
    sourceUrls: ["https://www.mbaguru.in/"]
  },
  {
    id: "alchemist",
    name: "Alchemist",
    mode: "hybrid",
    cities: citySets.delhi,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 15000,
    feeMax: 60000,
    summary: "A Delhi-based CAT and MBA entrance coaching option known for adaptive learning, classroom support, and test preparation programs.",
    bestFor: ["Delhi classroom prep", "Adaptive learning support", "CAT and OMET preparation"],
    sourceUrls: ["https://www.alchemistindia.com/"]
  },
  {
    id: "tathagat",
    name: "Tathagat",
    mode: "hybrid",
    cities: citySets.delhi,
    courseTypes: ["classroom", "online", "test-series"],
    feeMin: 15000,
    feeMax: 55000,
    summary: "A Delhi CAT coaching option commonly considered by aspirants looking for classroom-led MBA entrance preparation.",
    bestFor: ["Delhi classroom aspirants", "Quant and DILR practice", "Small-group prep seekers"],
    sourceUrls: ["https://www.tathagat.co.in/"]
  },
  {
    id: "hitbullseye",
    name: "Hitbullseye",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "test-series", "practice", "mba-exams"],
    feeMin: 5000,
    feeMax: 35000,
    summary: "An online test-prep platform offering CAT and MBA entrance preparation resources, practice material, and mock-test support.",
    bestFor: ["Online practice", "Test-series users", "Multi-exam preparation"],
    sourceUrls: ["https://www.hitbullseye.com/"]
  },
  {
    id: "unacademy-cat",
    name: "Unacademy CAT",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "live-classes", "recorded", "test-series"],
    feeMin: 5000,
    feeMax: 45000,
    summary: "An online learning platform with CAT and MBA entrance exam courses, live classes, educators, and test-prep options.",
    bestFor: ["Online live classes", "Flexible schedules", "App-based learning"],
    sourceUrls: ["https://unacademy.com/goal/cat-other-mba-entrance-tests/CAT4M"]
  },
  {
    id: "pw-mba",
    name: "Physics Wallah MBA",
    mode: "online",
    cities: citySets.online,
    courseTypes: ["online", "live-classes", "recorded", "test-series"],
    feeMin: 2000,
    feeMax: 30000,
    rating: 3.9,
    reviewCount: 52,
    summary: "An online MBA entrance preparation option from Physics Wallah, useful for budget-focused CAT aspirants comparing live online programs.",
    bestFor: ["Budget online prep", "App-based learning", "Beginner CAT aspirants"],
    sourceUrls: ["https://www.pw.live/"]
  },
  {
    id: "erudite",
    name: "Erudite",
    mode: "hybrid",
    cities: citySets.kolkata,
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 15000,
    feeMax: 55000,
    summary: "A Kolkata-focused MBA entrance coaching option for CAT aspirants looking for classroom or hybrid preparation support.",
    bestFor: ["Kolkata classroom prep", "MBA entrance guidance", "Local mentor access"],
    sourceUrls: ["https://www.erudite.in/"]
  },
  {
    id: "ascent-education",
    name: "Ascent Education",
    mode: "hybrid",
    cities: citySets.chennai,
    courseTypes: ["classroom", "online", "test-series"],
    feeMin: 12000,
    feeMax: 50000,
    rating: 3.9,
    reviewCount: 28,
    summary: "A Chennai-focused coaching option included for aspirants comparing local classroom and hybrid CAT preparation choices.",
    bestFor: ["Chennai classroom prep", "Local batch support", "Beginner aspirants"],
    sourceUrls: ["https://www.ascenteducation.com/"]
  },
  {
    id: "proton-training",
    name: "Proton Training Solutions",
    mode: "hybrid",
    cities: citySets.mumbaiPune,
    courseTypes: ["classroom", "online", "test-series"],
    feeMin: 12000,
    feeMax: 50000,
    rating: 3.9,
    reviewCount: 31,
    summary: "A Maharashtra-focused test-prep option included for Pune and Mumbai aspirants comparing local CAT coaching choices.",
    bestFor: ["Pune and Mumbai aspirants", "Local classroom support", "Hybrid preparation"],
    sourceUrls: ["https://www.protontraining.com/"]
  },
  {
    id: "mentors-eduserv",
    name: "Mentors Eduserv",
    mode: "hybrid",
    cities: citySets.patna,
    courseTypes: ["classroom", "online", "test-series"],
    feeMin: 10000,
    feeMax: 45000,
    rating: 3.8,
    reviewCount: 24,
    summary: "A Patna education brand included as a local option for aspirants comparing classroom and hybrid preparation choices in the city.",
    bestFor: ["Patna local support", "Classroom discipline", "Students comparing local institutes"],
    sourceUrls: ["https://www.mentorsedu.com/"]
  }
];

const commonCourses = [
  "CAT full-length preparation",
  "Sectional practice for VARC, DILR, and QA",
  "Mock tests or test-series support where offered",
  "Other MBA entrance exam preparation depending on the course plan"
];

const profileDefaults = {
  positioning:
    "A CAT and MBA entrance preparation option that should be evaluated by course structure, faculty access, mock quality, doubt support, schedule flexibility, and official pricing clarity.",
  courses: commonCourses,
  faculty:
    "Faculty details can change by batch, city, and course plan. Learners should attend a demo class, check the latest faculty allocation, and verify who handles each CAT section before enrolling.",
  mocks:
    "Mock availability, analytics depth, and solution quality should be checked on the official course page before purchase. Students should compare full mocks, sectionals, previous-year papers, percentile reports, and post-test analysis.",
  support:
    "Doubt solving and mentoring can vary by batch. Ask whether support is handled by faculty, mentors, community groups, app-based tickets, live sessions, or offline center teams.",
  onlineExperience:
    "For online learners, confirm live class timings, recording access, app or portal stability, downloadable material, test access, and whether missed classes can be watched later.",
  offlineExperience:
    "For offline learners, center quality can vary by city. Visit the nearest center, ask for batch size, faculty schedule, study-room access, mock discussion process, and local mentor availability.",
  feeNote:
    "Official fees can vary by course, batch, city, discount, and enrollment window. This page does not list an estimated fee unless it is clearly visible on the official website.",
  learnerFit: [
    "Students who want a structured CAT preparation plan.",
    "Aspirants comparing coaching options by mode, mocks, support, and schedule fit.",
    "Learners who are willing to verify the latest course details before payment."
  ],
  checklist: [
    "Attend a demo class or watch a recent sample lecture.",
    "Check whether the course includes full mocks, sectionals, previous papers, and analysis.",
    "Confirm live class timings, recording access, and doubt-solving process.",
    "Verify the official fee, validity period, refund policy, and extension policy.",
    "Compare the course with at least two alternatives before enrolling."
  ]
};

const profileDetails = {
  rodha: {
    positioning:
      "Rodha is a strong online-first CAT preparation option for learners who want concept-led teaching, serious Quant and DILR practice, improving VARC support, and an ecosystem that has become more complete over time.",
    courses: [
      "CAT full courses with live lectures and recordings",
      "Section-wise CAT preparation for QA, DILR, and VARC",
      "CAT mocks, sectionals, previous-year papers, and analytics through the revamped mock platform",
      "Special batches for working professionals",
      "Mentoring support through initiatives such as Rodha Panchayat"
    ],
    faculty:
      "Rodha's VARC depth has improved with faculty such as Krishnendu Dutta (KD), a CAT veteran with 20+ years of experience and consistent 99.9 percentile-level performance, Nikita Gupta, a verbal aptitude expert and TESOL scholar with strong CAT, XAT, NMAT, SNAP, and IELTS credentials, and Brijesh Pandey, a verbal mentor with 15+ years of CAT, GMAT, and IPMAT experience.",
    mocks:
      "Rodha has revamped its mock-test platform and now offers a more serious testing layer with mocks, sectionals, previous papers, and analytics. This makes Rodha more relevant for aspirants who earlier saw it mainly as a concept-teaching platform.",
    support:
      "Rodha has added more learner-support infrastructure through the Rodha Buddy App for community doubt solving and Rodha Panchayat for personalised 1:1 mentoring conversations with mentors.",
    onlineExperience:
      "Rodha is online-first. Every course is designed around live lectures plus recordings, which helps students who miss classes and working professionals who need flexibility.",
    offlineExperience:
      "Rodha does not depend on an offline center network. Students in any city should evaluate it as an online coaching option and compare it with local classroom institutes if they need face-to-face discipline.",
    learnerFit: [
      "Students who want deep concept building before aggressive mock attempts.",
      "Working professionals who need live classes plus recordings.",
      "Learners who want Rodha's improved mocks, Buddy App doubt support, and Panchayat-style mentoring in one ecosystem."
    ]
  },
  ims: {
    positioning:
      "IMS is a legacy MBA entrance preparation brand suited to learners who value structured programs, SimCAT-style benchmarking, mentoring, and a mix of online and offline support.",
    courses: ["CAT classroom programs", "Online CAT courses", "SimCAT test series", "GD-WAT-PI and admissions mentoring", "OMET preparation support"],
    mocks:
      "IMS is widely considered by aspirants for its mock-test ecosystem and analysis discipline. Learners should verify the current SimCAT plan, number of mocks, sectionals, and solution access before enrolling.",
    learnerFit: ["Students who want a legacy brand with structured mocks.", "Aspirants who need admissions mentoring after CAT.", "Learners comparing online plus center-based support."]
  },
  time: {
    positioning:
      "T.I.M.E. is a national test-prep brand best suited for aspirants who want classroom discipline, AIMCAT-style national benchmarking, and preparation support across CAT and other MBA entrance exams.",
    courses: ["CAT classroom programs", "Online CAT courses", "AIMCAT test series", "Sectional tests", "GD-WAT-PI support"],
    mocks:
      "T.I.M.E. is often compared for its AIMCAT test series and national-level benchmarking. Students should verify the latest AIMCAT schedule, analysis depth, and classroom discussion process.",
    learnerFit: ["Students who need a strict classroom rhythm.", "Mock-heavy aspirants who want national competition signals.", "Learners preparing for CAT plus multiple OMETs."]
  },
  "career-launcher": {
    positioning:
      "Career Launcher is a broad test-prep brand for CAT aspirants who want classroom or online flexibility, MBA exam strategy, mocks, and admissions guidance.",
    courses: ["CAT classroom programs", "Online CAT courses", "CAT test series", "OMET preparation", "GD-WAT-PI support"],
    mocks:
      "Career Launcher is commonly evaluated for its CAT mocks, analysis, and strategy sessions. Check the latest test-series count, percentile benchmarking, and video solution access.",
    learnerFit: ["Students who want a known national brand.", "Aspirants comparing CAT with XAT, SNAP, NMAT, and other exams.", "Learners who want strategy-led prep with flexible modes."]
  },
  cracku: {
    positioning:
      "Cracku is a practice-heavy online CAT preparation platform suited to students who care about mocks, previous-year papers, analytics, and affordable online prep.",
    courses: ["Online CAT courses", "CAT test series", "Daily targets and practice", "Previous-year paper practice", "OMET preparation support"],
    mocks:
      "Cracku is often considered for mocks, previous papers, and analytics. Students should compare its test experience with Rodha, IMS, TIME, and other mock providers before buying.",
    learnerFit: ["Self-driven learners who want lots of practice.", "Students looking for previous CAT paper access.", "Aspirants who want online mocks at a comparatively accessible price point."]
  },
  "2iim": {
    positioning:
      "2IIM is an online CAT learning option suited to students who prefer calm concept videos, self-paced study, and thoughtful preparation over high-pressure classroom formats.",
    courses: ["Self-paced CAT courses", "Online concept videos", "CAT test series", "Quant, DILR, and VARC practice", "Preparation resources"],
    learnerFit: ["Working professionals who need self-paced learning.", "Students who like concept videos and independent practice.", "Learners who want an online-first course without center dependency."]
  },
  iquanta: {
    positioning:
      "iQuanta is a community-led online CAT coaching option for aspirants who like active peer discussion, live online classes, and high-volume doubt engagement.",
    courses: ["Online CAT courses", "Live classes", "Community doubt solving", "CAT test series", "MBA entrance exam preparation"],
    support:
      "iQuanta's community model can help students who stay consistent through peer activity. Learners should still verify how doubts are prioritized, who answers them, and whether faculty-led resolution is available.",
    learnerFit: ["Students who enjoy active online communities.", "Learners who need peer accountability.", "Aspirants comparing live online coaching options."]
  },
  "elites-grid": {
    positioning:
      "Elites Grid is an online CAT coaching option often considered by aspirants who want live online classes, focused mentoring, and exam-oriented practice.",
    courses: ["Live online CAT courses", "CAT test series", "Sectional practice", "Doubt-solving sessions", "MBA entrance preparation"],
    learnerFit: ["Students outside metro cities.", "Learners who want online classes with mentor visibility.", "Aspirants comparing focused online CAT courses."]
  },
  catking: {
    positioning:
      "CATKing is a strategy and motivation-led MBA entrance preparation brand suited to learners who respond well to high-energy sessions, workshops, and admissions-oriented guidance.",
    courses: ["CAT online and classroom courses", "Workshops", "Test series", "MBA entrance preparation", "GD-WAT-PI support"],
    learnerFit: ["Students who need motivation and strategy nudges.", "Aspirants looking for MBA admission guidance.", "Learners who prefer energetic online sessions."]
  },
  endeavor: {
    positioning:
      "Endeavor Careers is a hybrid test-prep brand suited to students in cities where its centers are active and to aspirants preparing for CAT along with CMAT, IPMAT, and other aptitude exams.",
    courses: ["CAT classroom programs", "Online courses", "Mock tests", "CMAT and other aptitude exam support", "GD-WAT-PI preparation"],
    learnerFit: ["Students in cities with active Endeavor centers.", "Aspirants who want classroom plus online support.", "Learners preparing for multiple management or aptitude exams."]
  },
  "mba-guru": {
    positioning:
      "MBA Guru is a Delhi NCR-focused CAT coaching option for students who want local classroom support, mentoring, and a more personal preparation environment.",
    courses: ["CAT classroom courses", "Online or hybrid support", "Mock tests", "Sectional practice", "GD-WAT-PI preparation"],
    learnerFit: ["Delhi NCR aspirants.", "Students who prefer local mentor access.", "Learners who want classroom discipline over purely online prep."]
  },
  alchemist: {
    positioning:
      "Alchemist is a Delhi-focused CAT coaching option for aspirants comparing adaptive classroom support, mentoring, and local center-led preparation.",
    courses: ["CAT classroom programs", "Online learning support", "Mocks and practice", "MBA entrance preparation", "GD-WAT-PI support"],
    learnerFit: ["Delhi classroom aspirants.", "Students who want adaptive support.", "Learners comparing local institutes with national brands."]
  },
  tathagat: {
    positioning:
      "Tathagat is a Delhi CAT coaching option suited to aspirants looking for classroom-led preparation, especially if they want a local institute rather than a national chain.",
    courses: ["CAT classroom coaching", "Online or hybrid support where available", "Test practice", "Quant and DILR preparation", "MBA entrance preparation"],
    learnerFit: ["Delhi aspirants who want classroom learning.", "Students who value local institute access.", "Learners who want to compare faculty style through demo classes."]
  },
  hitbullseye: {
    positioning:
      "Hitbullseye is an online test-prep platform for students who want CAT practice resources, broader MBA entrance prep, and test-series style preparation.",
    courses: ["Online CAT preparation", "Mock tests", "Practice resources", "MBA entrance exam preparation", "Sectional tests"],
    learnerFit: ["Students who want online practice.", "Aspirants preparing for multiple MBA exams.", "Learners comparing test-series and practice platforms."]
  },
  "unacademy-cat": {
    positioning:
      "Unacademy CAT is suited to learners who want app-based live classes, multiple educator choices, flexible schedules, and a large online learning ecosystem.",
    courses: ["Live online CAT classes", "Recorded lessons", "Educator-led batches", "Test practice", "MBA entrance preparation"],
    learnerFit: ["Students who like choosing among educators.", "Learners who need app-based access.", "Aspirants who prefer flexible live and recorded classes."]
  },
  "pw-mba": {
    positioning:
      "Physics Wallah MBA is useful for budget-conscious aspirants who want app-based live learning and a lower-cost entry point into CAT preparation.",
    courses: ["Online MBA entrance batches", "Live classes", "Recorded lectures", "Practice tests", "Foundation-focused preparation"],
    learnerFit: ["Budget-focused beginners.", "Students comfortable with app-based learning.", "Learners who want affordable structured prep before upgrading to advanced mocks."]
  },
  erudite: {
    positioning:
      "Erudite is a Kolkata-focused MBA entrance coaching option suited to students who want local classroom or hybrid support with mentor access.",
    courses: ["CAT classroom programs", "Hybrid learning support", "Mock tests", "MBA entrance preparation", "GD-WAT-PI guidance"],
    learnerFit: ["Kolkata aspirants.", "Students who want local classroom accountability.", "Learners comparing regional institutes with online national options."]
  },
  "ascent-education": {
    positioning:
      "Ascent Education is a Chennai-focused option for aspirants comparing local classroom and hybrid CAT preparation choices.",
    courses: ["CAT classroom coaching", "Hybrid support", "Mock practice", "Section-wise preparation", "MBA entrance guidance"],
    learnerFit: ["Chennai aspirants.", "Students who want local classroom support.", "Beginners comparing coaching before committing."]
  },
  "proton-training": {
    positioning:
      "Proton Training Solutions is a Maharashtra-focused coaching option for Pune and Mumbai aspirants comparing local classroom support with online alternatives.",
    courses: ["CAT classroom coaching", "Hybrid CAT preparation", "Mock tests", "Sectional practice", "MBA entrance preparation"],
    learnerFit: ["Pune and Mumbai aspirants.", "Students who want local batch support.", "Learners comparing regional institutes with Rodha, IMS, TIME, and Cracku."]
  },
  "mentors-eduserv": {
    positioning:
      "Mentors Eduserv is a Patna education brand included for aspirants comparing local classroom discipline with online CAT coaching alternatives.",
    courses: ["Classroom aptitude preparation", "Hybrid learning support", "Practice tests", "Sectional preparation", "MBA entrance guidance where available"],
    learnerFit: ["Patna aspirants.", "Students who want offline discipline.", "Learners who want to compare a local institute with online-first CAT platforms."]
  }
};

const coachings = entries.map((entry) => ({
  ...defaults,
  ...profileDefaults,
  slug: entry.id,
  ...entry,
  ...(profileDetails[entry.id] || {}),
  pros: entry.pros || defaults.pros,
  cons: entry.cons || defaults.cons,
  features: entry.features || defaults.features,
  lastVerifiedAt: entry.lastVerifiedAt || defaults.lastVerifiedAt
}));

module.exports = coachings;
