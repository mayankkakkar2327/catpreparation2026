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
    pros: [
      "Online-first accessibility with live classes and recordings",
      "Concept-oriented teaching across QA, DILR and VARC",
      "Improved mock platform with CAT mocks, OMET mocks, sectionals, topic tests, video solutions and analytics",
      "Useful for students outside metro cities and working professionals who need schedule flexibility"
    ],
    cons: [
      "No offline center network for students who need face-to-face classroom discipline",
      "Batch pace can feel intense for students who do not revise regularly",
      "Course, batch and fee details should be checked on the official website before payment"
    ],
    features: [
      "CAT 2026 comprehensive batches",
      "Live and recorded classes",
      "Rodha CAT Mocks",
      "OMET mocks",
      "Sectional tests",
      "Physical booklets",
      "Rodha Buddy",
      "Rodha Panchayat"
    ],
    sourceUrls: [
      "https://www.rodha.co.in/",
      "https://mocks.rodha.co.in/",
      "https://www.rodha.co.in/s/store/courses/CAT%202026",
      "https://play.google.com/store/apps/details?id=com.rodha.rodhabuddy"
    ]
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
      "Rodha is a strong online-first CAT preparation option for learners who want a complete preparation system rather than only recorded lectures or only a test series. Its strongest fit is for students who need concept-led teaching, serious QA and DILR practice, structured VARC support, live plus recorded classes, mock-led improvement and mentor/community support in one ecosystem. Based on official Rodha pages checked on 7 August 2026, Rodha now positions itself around CAT 2026 courses, OMET preparation, free material, a dedicated mock portal, Rodha Buddy for doubt support and Rodha Panchayat-style personalised mentor interaction.",
    officialFeeNote:
      "Officially visible Rodha pricing checked on 7 August 2026: CAT 2026 comprehensive batches are listed around Rs 24,999 on several current course pages, the CAT 2026 crash course is listed at Rs 19,999, section-specific R8 courses are listed at Rs 13,499, the R4 English comprehensive batch is listed at Rs 26,499, and mock packages range from Free to Rs 6,999 on the Rodha mock portal. Students should verify final price, coupons, books, validity and refund terms on Rodha's official checkout page before enrolling.",
    courses: [
      "CAT 2026 comprehensive batches covering Quantitative Aptitude, Logical Reasoning and Data Interpretation, and Verbal Ability and Reading Comprehension from basics to advanced.",
      "Fast-paced CAT 2026 batches such as R8 for students joining later or wanting accelerated coverage, with live and recorded classes across QA, DILR and VARC.",
      "Section-specific CAT 2026 courses for VARC, DILR and Quant, useful for students who want to strengthen one weak area without buying a complete package.",
      "CAT 2026 crash course covering QA, LRDI, VARC and OMETs for students who need a compact revision and test-readiness route.",
      "Complete English batch option for students who want the learning environment to match the language of the CAT exam more closely.",
      "OMET preparation support for XAT, SNAP and NMAT inside several comprehensive courses, reducing the need for separate post-CAT resources.",
      "Rodha CAT Mocks and OMET mock packages with CAT mocks, XAT mocks, SNAP mocks, NMAT mocks, sectional tests and topic-wise practice modules.",
      "Free resources and free mock access for students who want to sample Rodha before enrolling in a paid batch.",
      "Physical booklets in several paid courses, including comprehensive batches and VARC-focused courses, for students who prefer structured offline practice material.",
      "Mentoring and doubt support through Rodha Buddy and Rodha Panchayat-style face-to-face mentor sessions."
    ],
    faculty:
      "Rodha follows a faculty-per-section model across many CAT 2026 batches, which helps students know who is responsible for QA, DILR and VARC instead of dealing with a scattered course structure. Official course pages mention Ravi Prakash Sir, Swapanil/Swapnil Sir, Apoorv Sir, Adarsh Pandey, Abhishek Sir, KD Sir, Nikita Ma'am and Brijesh Sir across different batches and sections. For VARC specifically, Rodha has strengthened its position with Krishnendu Dutta (KD), a CAT veteran with 20+ years of experience and a strong 99.9 percentile track record, Nikita Gupta, a verbal aptitude expert and TESOL scholar with strong CAT, XAT, NMAT, SNAP and IELTS credentials, and Brijesh Pandey, a verbal mentor with 15+ years of CAT, GMAT and IPMAT experience. A student should still verify the exact faculty for the specific batch before enrolling because faculty allocation can differ by R-batch, language format, timing and section.",
    mocks:
      "Rodha's mock platform is no longer just an add-on to the course ecosystem. The official Rodha mock portal lists 30 full-length CAT mocks, 50 OMET mocks in the full CAT and OMET package, 105 sectional tests, 40+ topic-wise practice modules, video solutions, strategy-based mock analysis sessions and percentile tracking. The portal also shows detailed performance analysis signals such as right marks, negative marks, left questions, attempted questions, time per question, accuracy, rank, score and percentile. Rodha's own mock-positioning content says the mocks are intentionally slightly tougher than CAT to expose conceptual gaps and build pressure-handling ability. That approach is useful for serious aspirants, but beginners should not judge themselves only by early mock scores; they should use the analysis to identify weak concepts, poor question selection and time traps.",
    support:
      "Rodha's support layer now includes more than the usual class chat. Official course pages mention Rodha Buddy as an exclusive doubt-solving platform from Rodha mentors, and the Google Play listing describes Rodha Buddy as an app for faster doubt resolution and improved conceptual clarity. Rodha course pages also mention Rodha Panchayat as exclusive face-to-face Google Meet sessions where learners can connect with faculty and discuss doubts or preparation issues personally. This matters because online CAT coaching often fails when students do not get timely doubt resolution; Rodha is trying to close that gap with a dedicated app, mentor access and community interaction. Students should still ask how quickly doubts are answered, whether faculty or mentors respond, and whether support is available for the exact batch they are buying.",
    onlineExperience:
      "Rodha is an online-first CAT coaching platform, so its student experience depends heavily on live-class discipline, recording access, app/portal stability, doubt channels and mock analysis. Official course pages repeatedly mention live plus recorded CAT 2026 classes, structured learning, community interaction, practice tests and course validity up to 10 January 2027 for several CAT 2026 batches. This setup is especially useful for college students and working professionals because missed live classes can be revised through recordings, while live sessions still create accountability. The trade-off is that students must create their own daily routine; Rodha can provide lectures, mocks, booklets and mentors, but online learners still need consistency in revision, practice and mock analysis.",
    offlineExperience:
      "Rodha should be evaluated as an online coaching option, not as an offline center network. That is a strength for students in cities where strong CAT faculty are not easily available because the same online course can be accessed from Delhi, Mumbai, Bangalore, Pune, Hyderabad, Kolkata, Chennai, Ahmedabad, Patna or smaller towns. It is also a limitation for learners who require daily physical classroom discipline, in-person peer groups, or a local center manager. Such students should compare Rodha with nearby offline institutes, but they should also factor in Rodha's recordings, booklets, mock portal, Buddy App and Panchayat-style mentor sessions before assuming offline is automatically better.",
    learnerFit: [
      "Rodha is a strong fit for beginners who want to build QA, DILR and VARC from basics to advanced through one structured online system instead of collecting random YouTube playlists, PDFs and test series.",
      "Rodha is suitable for repeaters who already know CAT basics but need disciplined revision, stronger DILR exposure, better VARC guidance, tougher mocks and sharper mock analysis.",
      "Rodha is useful for working professionals because several courses combine live classes with recordings, and some batch timings are designed to work around college or office schedules.",
      "Rodha is worth considering for students who earlier liked Rodha's teaching but wanted a stronger test platform, because the current mock portal now includes CAT mocks, OMET mocks, sectionals, topic tests, video solutions and analytics.",
      "Rodha may not be ideal for students who need daily offline classroom supervision, fixed physical attendance, or a local study-center environment."
    ],
    feeNote:
      "Rodha is one of the few coaching profiles where we can mention current visible prices because the official Rodha course and mock pages show them publicly. On 7 August 2026, visible CAT 2026 course prices included Rs 24,999 for multiple comprehensive batches, Rs 26,499 for the R4 Complete English batch, Rs 19,999 for the crash course, and Rs 13,499 for several section-specific R8 courses. The mock portal listed Rodha CAT Mocks at Rs 3,499, Rodha Sectional Tests at Rs 3,499, Rodha CAT Mocks and Sectional Tests at Rs 5,999, and the Rodha CAT Mocks and OMETs package at Rs 6,999, with a free mock option also visible. Prices can change with coupons, batch timing, books, old-student offers and checkout rules, so students should always verify the final payable amount on Rodha's official website before buying.",
    checklist: [
      "Decide whether you need a complete CAT course, a section-specific course, a crash course, or only the mock portal; Rodha has different products for each use case.",
      "Check the exact batch name, start date, language, class timings, weekly class load and validity date before paying.",
      "Verify the faculty allocation for your batch because Rodha lists different faculty combinations across R1, R3, R4, R5, R7, R8 and other courses.",
      "Ask whether the course includes live classes, recordings, physical booklets, boosters, concept capsules, CAT Countdown, OMET preparation and mock access.",
      "If you are buying mocks separately, compare the package inclusions: CAT mocks only, sectionals, topic tests, OMET mocks, video solutions and percentile tracking.",
      "Use Rodha's free classes, free material or free mock access before buying if you are unsure about teaching style or mock difficulty.",
      "Clarify refund rules because several Rodha course pages state that refunds are not available after enrollment.",
      "If you are a working professional, check whether the live timing is realistic and whether recordings are enough for your schedule.",
      "After enrollment, create a weekly routine for class revision, booklet practice, Buddy doubts, sectionals and mock analysis; the platform works best when the learner follows the system consistently."
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
