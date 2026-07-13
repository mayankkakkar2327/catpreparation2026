const today = "2026-07-14";

const officialLinks = {
  Rodha: "https://www.rodha.co.in/",
  "Rodha mocks": "https://mocks.rodha.co.in/",
  "Rodha Buddy": "https://buddy.rodha.co.in/",
  Cracku: "https://cracku.in/cat-2026/",
  "2IIM": "https://online.2iim.com/",
  iQuanta: "https://www.iquanta.in/",
  "Elites Grid": "https://www.elitesgrid.com/",
  "Career Launcher": "https://www.careerlauncher.com/cat-mba/",
  TIME: "https://www.time4education.com/",
  IMS: "https://www.imsindia.com/",
  "MBA Pathshala": "https://mbapathshala.com/",
  "Aarambh Academy": "https://aarambhacademy.com/",
  "Physics Wallah": "https://www.pw.live/",
  Unacademy: "https://unacademy.com/",
  Alchemist: "https://www.alchemistindia.com/",
  Hitbullseye: "https://www.hitbullseye.com/",
  CATKing: "https://catking.in/"
};

const profile = {
  Rodha: {
    fit: "Guided CAT preparation with strong Quant/LRDI teaching, improved mocks, VARC faculty depth, mentoring and doubt support.",
    strengths: "Concept depth, revamped mocks, sectionals, previous papers, analytics, KD Sir-led VARC support, Rodha Buddy, Rodha Panchayat, working-professional batches, live lectures and recordings.",
    watch: "Best suited to students who want guided learning and can follow a structured class-to-practice routine."
  },
  Cracku: {
    fit: "Practice-heavy CAT preparation, mocks, sectionals, previous papers and analytics.",
    strengths: "Mock-focused workflow, timed practice, analytics, revision videos and question-led preparation.",
    watch: "Works best when the student is disciplined enough to learn from mock analysis consistently."
  },
  "2IIM": {
    fit: "Self-paced CAT learning with a calm, concept-first online format.",
    strengths: "Beginner-friendly explanation, self-paced study, video-led learning and structured practice.",
    watch: "Students who need frequent live pressure or a larger peer community may want additional accountability."
  },
  iQuanta: {
    fit: "Community-led CAT preparation with active doubt discussion and peer learning.",
    strengths: "Large online community, doubt interaction, peer discussions, shortcut-oriented practice and high engagement.",
    watch: "The active community can be useful, but students should avoid distraction and keep a fixed study plan."
  },
  "Elites Grid": {
    fit: "Mentor-led CAT preparation with strong DILR/Quant orientation and disciplined batch structure.",
    strengths: "Mentorship, accountability, DILR practice, Quant focus and close batch tracking.",
    watch: "Best for students who want a more disciplined environment rather than a self-paced routine."
  },
  "Career Launcher": {
    fit: "Established national CAT preparation brand with classroom, online and test-series options.",
    strengths: "National presence, structured courses, CDC mocks, offline centers and MBA admission support.",
    watch: "Quality can vary by batch, city and faculty, so verify the local center and current course inclusions."
  },
  TIME: {
    fit: "National benchmark test-series and classroom CAT preparation.",
    strengths: "AIMCATs, offline center network, long CAT test-prep history and broad MBA entrance coverage.",
    watch: "Students should check local faculty quality and whether the batch style matches their learning pace."
  },
  IMS: {
    fit: "Structured CAT preparation with strong SimCAT benchmarking and admission guidance.",
    strengths: "SimCATs, online/offline options, admission counselling, test analysis and established classroom systems.",
    watch: "Best value depends on local center quality, mentorship access and how seriously the student reviews mocks."
  },
  "MBA Pathshala": {
    fit: "Affordable, teacher-led online CAT preparation for students who want direct classroom-style learning.",
    strengths: "Budget-conscious courses, live classes, concept coverage and approachable teaching style.",
    watch: "Students should compare mock depth, analytics and mentorship before treating it as a complete ecosystem."
  },
  "Aarambh Academy": {
    fit: "Online CAT preparation for students who prefer compact batches and direct faculty connect.",
    strengths: "Live teaching, focused batches, concept support and exam-oriented preparation.",
    watch: "Verify current mock quality, doubt systems, recordings and batch schedule before enrolling."
  },
  "Physics Wallah": {
    fit: "Budget-friendly online CAT preparation for students who want accessible pricing and app-based learning.",
    strengths: "Affordable plans, app ecosystem, live/recorded classes and broad reach across exam categories.",
    watch: "Students should verify CAT-specific faculty depth, mock quality and individual mentorship availability."
  },
  Unacademy: {
    fit: "Platform-led CAT preparation with multiple educators and flexible live/recorded options.",
    strengths: "Educator choice, subscription-style access, app experience, live classes and recorded learning.",
    watch: "The experience depends heavily on educator selection and consistency of self-study."
  },
  Alchemist: {
    fit: "Classroom-oriented CAT preparation with mentoring and Delhi/NCR-style offline support.",
    strengths: "Personal attention, offline learning, mentoring orientation and structured classroom rhythm.",
    watch: "Students outside its strong locations should compare online alternatives and mock depth carefully."
  },
  Hitbullseye: {
    fit: "MBA entrance preparation with online courses, mocks and broader exam coverage beyond CAT.",
    strengths: "Mocks, MBA entrance coverage, online preparation and practice resources.",
    watch: "Best for students who want broader exam coverage; CAT-only students should compare depth by section."
  },
  CATKing: {
    fit: "High-energy CAT/MBA preparation with motivational content, workshops and MBA admission orientation.",
    strengths: "Engaging style, MBA admission content, interview/GDPI orientation and community visibility.",
    watch: "Students should separate motivation from measurable preparation quality: mocks, faculty depth and review discipline matter."
  }
};

function linkList(names) {
  const links = [];
  names.forEach((name) => {
    if (officialLinks[name]) links.push([`${name} official website`, officialLinks[name]]);
  });
  if (names.includes("Rodha")) {
    links.push(["Rodha mocks portal", officialLinks["Rodha mocks"]], ["Rodha Buddy", officialLinks["Rodha Buddy"]]);
  }
  return links;
}

function comparisonPage({ slug, title, description, answer, names, verdictRows, studentRows, recommendation }) {
  return {
    slug: `blog/${slug}`,
    title,
    section: "CAT Coaching",
    description,
    answer,
    body: [
      `${title.replace(/ for CAT 2026.*/, "")} is not a one-line decision. The better choice depends on whether a student needs guided teaching, mocks, analytics, doubt support, mentoring, offline access, budget flexibility or a self-paced routine.`,
      "This page is written as an editorial comparison for CAT 2026 aspirants. Course features, fees, batches, faculty and platform inclusions can change, so students should verify details on official websites before enrolling."
    ],
    sections: [
      {
        id: "quick-verdict",
        heading: "Quick verdict",
        table: { headers: ["Requirement", "Better fit", "Why"], rows: verdictRows }
      },
      {
        id: "platform-comparison",
        heading: "Platform-by-platform comparison",
        table: {
          headers: ["Platform", "Best fit", "Key strengths", "What to verify"],
          rows: names.map((name) => [name, profile[name].fit, profile[name].strengths, profile[name].watch])
        }
      },
      {
        id: "student-fit",
        heading: "Which should different students choose?",
        table: { headers: ["Student profile", "Suggested option", "Reason"], rows: studentRows }
      },
      {
        id: "balanced-recommendation",
        heading: "Balanced recommendation",
        paragraphs: [recommendation]
      },
      {
        id: "official-links",
        heading: "Official links to verify",
        links: linkList(names)
      }
    ],
    faqs: [
      {
        q: `Which is better for CAT 2026: ${names.join(" vs ")}?`,
        a: answer
      },
      {
        q: "Should I choose only one CAT coaching platform?",
        a: "Most students should keep one primary learning platform and add an extra test series only if they can review mocks properly. Buying multiple courses without a weekly plan usually creates confusion."
      },
      {
        q: "What should I verify before enrolling?",
        a: "Verify current fees, batch timing, faculty, recordings, mock count, sectional tests, previous paper access, analytics, refund rules and doubt support on the official website."
      },
      {
        q: "Are mocks more important than classes?",
        a: "Both matter. Classes build concepts, while mocks test selection, accuracy, speed and exam temperament. The right balance depends on how strong the student already is."
      }
    ]
  };
}

const rodhaCrackuPage = comparisonPage({
  slug: "rodha-vs-cracku-cat-2026",
  title: "Rodha vs Cracku for CAT 2026: How Rodha Has Improved Its CAT Prep Ecosystem",
  description: "Compare Rodha and Cracku for CAT 2026 across teaching, mocks, VARC faculty, mentoring, doubt support, working-professional batches, recordings and student fit.",
  answer: "Rodha may be the better fit for students who want guided teaching, improved mock support, VARC faculty depth, doubt support and mentoring. Cracku remains a strong choice for students who primarily want practice, mocks and analytics.",
  names: ["Rodha", "Cracku"],
  verdictRows: [
    ["Concept learning", "Rodha", "Rodha is stronger for guided Quant/LRDI learning and concept repair."],
    ["Mocks and analytics", "Cracku remains strong; Rodha has narrowed the gap", "Rodha's revamped mock platform makes it more relevant than before."],
    ["VARC support", "Rodha has become more competitive", "KD Sir, Nikita Gupta and Brijesh Pandey strengthen Rodha's VARC case."],
    ["Working professionals", "Both can work", "Rodha has working-professional batches and recordings; Cracku remains practice-flexible."]
  ],
  studentRows: [
    ["Beginner", "Rodha", "Needs guided fundamentals and doubt support."],
    ["Mock-heavy repeater", "Cracku or Rodha plus extra tests", "Depends on whether the issue is concepts or test execution."],
    ["Weak in VARC", "Rodha has become more relevant", "Rodha's VARC faculty bench is now stronger."],
    ["Working professional", "Both can work", "Choose based on batch timing and self-study discipline."]
  ],
  recommendation: "Rodha deserves stronger consideration for CAT 2026 than before because it has worked on learner feedback around mocks, analytics, VARC, doubts, mentoring and recordings. Cracku still remains a strong practice-heavy option, especially for students who already have concept clarity."
});

const newComparisonPages = [
  comparisonPage({
    slug: "career-launcher-vs-time-vs-ims-cat-2026",
    title: "Career Launcher vs TIME vs IMS for CAT 2026: Which Test Prep Brand Fits You?",
    description: "Compare Career Launcher, T.I.M.E. and IMS for CAT 2026 by mocks, classroom support, online courses, mentoring, admissions guidance and student fit.",
    answer: "Career Launcher, TIME and IMS are all established CAT brands. TIME is often considered for AIMCAT-style benchmarking, IMS for SimCATs and admission guidance, and Career Launcher for structured courses, CDC mocks and national classroom/online coverage.",
    names: ["Career Launcher", "TIME", "IMS"],
    verdictRows: [
      ["National-level mocks", "TIME or IMS", "AIMCATs and SimCATs are widely used benchmark test series."],
      ["Admissions guidance", "IMS or Career Launcher", "Both have strong MBA admission and interview-prep orientation."],
      ["Offline classroom access", "Career Launcher, TIME or IMS", "The best option depends on local center quality."],
      ["Structured all-round prep", "Career Launcher or IMS", "Both suit students who want a guided course plus mocks."]
    ],
    studentRows: [
      ["Student wanting benchmark mocks", "TIME or IMS", "Mock quality and national competition matter most."],
      ["Student wanting admissions support", "IMS or Career Launcher", "Counselling and GDPI orientation can help after CAT."],
      ["Offline learner", "Compare local centers", "Faculty and batch quality vary city-wise."],
      ["Self-driven student", "Any test series can work", "Pick the mock interface and analysis style you will review consistently."]
    ],
    recommendation: "Do not choose only by brand name. For Career Launcher, TIME and IMS, the decisive factor is often the local faculty, batch schedule, mock review quality and how well the test series analysis is used."
  }),
  comparisonPage({
    slug: "elites-grid-vs-iquanta-cat-2026",
    title: "Elites Grid vs iQuanta for CAT 2026: Mentorship vs Community Learning",
    description: "Compare Elites Grid and iQuanta for CAT 2026 by teaching style, community, mentorship, Quant, DILR, VARC, doubts and student fit.",
    answer: "Elites Grid is usually a better fit for students who want mentor-led discipline and structured Quant/DILR preparation, while iQuanta fits students who want active community learning and frequent peer-driven doubt discussion.",
    names: ["Elites Grid", "iQuanta"],
    verdictRows: [
      ["Mentorship", "Elites Grid", "Its positioning is more mentor-led and accountability-focused."],
      ["Community", "iQuanta", "iQuanta is better known for active peer discussion and doubt interaction."],
      ["DILR/Quant discipline", "Elites Grid", "Works well for students who need structured practice."],
      ["Engagement", "iQuanta", "Useful if the student thrives in a large online learning community."]
    ],
    studentRows: [
      ["Needs accountability", "Elites Grid", "Mentor-led structure can reduce drift."],
      ["Likes peer learning", "iQuanta", "Community discussions can keep preparation active."],
      ["Gets distracted easily", "Elites Grid", "A tighter plan may work better than a high-noise community."],
      ["Needs frequent doubt interaction", "iQuanta", "Community-led doubt solving may help."
      ]
    ],
    recommendation: "Choose Elites Grid if discipline and mentor-led preparation matter most. Choose iQuanta if you are motivated by community interaction and can filter noise from useful discussion."
  }),
  comparisonPage({
    slug: "mba-pathshala-vs-aarambh-academy-cat-2026",
    title: "MBA Pathshala vs Aarambh Academy for CAT 2026: Which Online Course Should You Choose?",
    description: "Compare MBA Pathshala and Aarambh Academy for CAT 2026 by pricing, live classes, teaching style, mocks, doubt support and student profile.",
    answer: "MBA Pathshala and Aarambh Academy both appeal to students looking beyond the largest CAT brands. MBA Pathshala is a better fit for budget-conscious classroom-style online learning, while Aarambh Academy can suit students who prefer compact, focused batches and direct faculty connect.",
    names: ["MBA Pathshala", "Aarambh Academy"],
    verdictRows: [
      ["Budget-conscious prep", "MBA Pathshala", "Often considered by students looking for affordable live teaching."],
      ["Compact batch feel", "Aarambh Academy", "Can suit students who want more direct faculty connection."],
      ["Mock ecosystem", "Verify both", "Students should compare mock count, analytics and sectionals before enrolling."],
      ["Beginner support", "Depends on faculty", "Attend demos and check recordings before deciding."]
    ],
    studentRows: [
      ["Budget-sensitive student", "MBA Pathshala", "Pricing and course inclusions may be attractive."],
      ["Needs smaller environment", "Aarambh Academy", "Focused batches can feel more personal."],
      ["Mock-heavy repeater", "Verify both carefully", "Mock quality and analytics become decisive."],
      ["Beginner", "Demo both", "Teaching clarity matters more than brand recall."]
    ],
    recommendation: "For smaller online CAT programs, do not rely only on testimonials. Compare demo classes, recordings, mock platform, doubt response time and batch schedule before enrolling."
  }),
  comparisonPage({
    slug: "physics-wallah-vs-unacademy-cat-2026",
    title: "Physics Wallah vs Unacademy CAT 2026: Budget App Learning vs Educator Choice",
    description: "Compare Physics Wallah and Unacademy for CAT 2026 by pricing, app learning, educator choice, live classes, recordings, mocks and student fit.",
    answer: "Physics Wallah can suit students who want affordable app-based CAT preparation, while Unacademy can suit students who want educator choice and flexible subscription-style learning. The better option depends on CAT-specific faculty, mocks and consistency.",
    names: ["Physics Wallah", "Unacademy"],
    verdictRows: [
      ["Budget", "Physics Wallah", "PW is commonly considered for accessible pricing."],
      ["Educator choice", "Unacademy", "Students can choose among multiple educators and courses."],
      ["Self-paced flexibility", "Both", "Both platforms rely on app-based live and recorded learning."],
      ["CAT depth", "Verify current batches", "Faculty and mock quality should be checked for the current CAT cycle."]
    ],
    studentRows: [
      ["Budget-first learner", "Physics Wallah", "Lower pricing may reduce entry barrier."],
      ["Wants educator choice", "Unacademy", "Multiple educators can help match teaching style."],
      ["Needs handholding", "Check mentorship first", "Large platforms may require extra self-discipline."],
      ["Mock-focused student", "Compare mock products", "Testing depth matters more than app size."]
    ],
    recommendation: "PW vs Unacademy should be decided by the current CAT faculty, mock quality, recordings, doubt support and your ability to stay consistent inside a large app ecosystem."
  }),
  comparisonPage({
    slug: "alchemist-vs-hitbullseye-cat-2026",
    title: "Alchemist vs Hitbullseye for CAT 2026: Classroom Mentoring vs Broader Exam Practice",
    description: "Compare Alchemist and Hitbullseye for CAT 2026 by offline support, mentoring, mocks, online prep, MBA entrance coverage and student fit.",
    answer: "Alchemist is more suitable for students who want classroom-style mentoring and local support, while Hitbullseye is more suitable for students who want broader MBA entrance practice, online resources and mocks.",
    names: ["Alchemist", "Hitbullseye"],
    verdictRows: [
      ["Offline mentoring", "Alchemist", "Better fit where its local classroom support is strong."],
      ["Broader exam coverage", "Hitbullseye", "Useful for students preparing beyond CAT."],
      ["Online practice", "Hitbullseye", "Its positioning includes online prep and practice resources."],
      ["Personal attention", "Alchemist", "Offline mentoring can help students who need accountability."]
    ],
    studentRows: [
      ["Delhi/NCR classroom learner", "Alchemist", "Local mentoring may matter more than generic online content."],
      ["Multiple MBA exams", "Hitbullseye", "Broader exam preparation can help."],
      ["CAT-only aspirant", "Compare section depth", "Check mocks, faculty and CAT-specific schedule."],
      ["Needs offline discipline", "Alchemist", "Classroom rhythm can improve consistency."]
    ],
    recommendation: "Choose Alchemist if local mentoring and classroom accountability are your priority. Choose Hitbullseye if you want online practice and broader MBA entrance coverage beyond CAT."
  }),
  comparisonPage({
    slug: "cracku-vs-2iim-cat-2026",
    title: "Cracku vs 2IIM for CAT 2026: Mock Analytics vs Self-Paced Concept Learning",
    description: "Compare Cracku and 2IIM for CAT 2026 by mocks, analytics, self-paced learning, concepts, videos, practice and student fit.",
    answer: "Cracku is a better fit for mock-heavy, analytics-led CAT preparation, while 2IIM is a better fit for students who want calm, self-paced concept learning before moving into intense testing.",
    names: ["Cracku", "2IIM"],
    verdictRows: [
      ["Mocks and analytics", "Cracku", "Cracku is more practice and test-analysis oriented."],
      ["Self-paced concepts", "2IIM", "2IIM suits students who want slower, clearer learning."],
      ["Working professionals", "Both", "Cracku for concise practice; 2IIM for flexible concept videos."],
      ["Repeater with basics", "Cracku", "More mocks and analytics may help score conversion."]
    ],
    studentRows: [
      ["Beginner", "2IIM", "Concept clarity and self-paced learning can help."],
      ["Mock-focused repeater", "Cracku", "Analytics and timed practice become important."],
      ["Working professional", "Depends on routine", "Pick the format you can follow daily."],
      ["Needs handholding", "Neither alone may be enough", "Add mentorship or accountability if required."]
    ],
    recommendation: "Cracku and 2IIM serve different preparation moods. Use 2IIM if you need patient concept learning; use Cracku if your main goal is mock practice, analytics and exam execution."
  }),
  comparisonPage({
    slug: "iquanta-vs-cracku-vs-rodha-cat-2026",
    title: "iQuanta vs Cracku vs Rodha for CAT 2026: Community, Mocks or Guided Learning?",
    description: "Compare iQuanta, Cracku and Rodha for CAT 2026 by community, mocks, analytics, concepts, VARC faculty, mentoring, doubts and student fit.",
    answer: "iQuanta fits community-led learners, Cracku fits mock-heavy and analytics-led learners, and Rodha now fits students who want guided teaching plus improved mocks, VARC depth, mentoring and doubt support.",
    names: ["iQuanta", "Cracku", "Rodha"],
    verdictRows: [
      ["Community", "iQuanta", "Best fit for active peer learning and discussion."],
      ["Mocks and analytics", "Cracku remains strong; Rodha has improved", "Cracku is mock-first, while Rodha has narrowed the testing gap."],
      ["Guided concepts", "Rodha", "Rodha is stronger for structured teaching and concept repair."],
      ["Mentoring and doubts", "Rodha or iQuanta", "Rodha has Buddy/Panchayat; iQuanta has active community discussion."]
    ],
    studentRows: [
      ["Needs community", "iQuanta", "Peer discussion can keep motivation high."],
      ["Needs mocks", "Cracku", "Analytics and test review are central."],
      ["Needs guided teaching", "Rodha", "Rodha is more complete than before because it has improved mocks and support."],
      ["Working professional", "Rodha or Cracku", "Rodha for recordings and batches; Cracku for practice flexibility."]
    ],
    recommendation: "This is a choice between learning style, not just brand. iQuanta is community-led, Cracku is analytics-led, and Rodha is now a more complete guided ecosystem after improving mocks, VARC, doubt support and mentoring."
  }),
  comparisonPage({
    slug: "rodha-vs-elites-grid-vs-hitbullseye-cat-2026",
    title: "Rodha vs Elites Grid vs Hitbullseye for CAT 2026: Guided Concepts, Mentorship or Broader Practice?",
    description: "Compare Rodha, Elites Grid and Hitbullseye for CAT 2026 by concepts, mentoring, mocks, DILR, VARC, broader MBA exam prep and student fit.",
    answer: "Rodha is a strong fit for guided concepts with improved mocks and VARC depth, Elites Grid fits students who want mentor-led discipline, and Hitbullseye fits students who want broader MBA entrance practice resources.",
    names: ["Rodha", "Elites Grid", "Hitbullseye"],
    verdictRows: [
      ["Concept depth", "Rodha", "Strong guided teaching plus improved testing layer."],
      ["Mentor-led discipline", "Elites Grid", "Works well for students who need accountability."],
      ["Broader MBA exams", "Hitbullseye", "Useful if the student is preparing beyond CAT."],
      ["Doubts and mentoring", "Rodha or Elites Grid", "Rodha has Buddy/Panchayat; Elites Grid has mentor-led tracking."]
    ],
    studentRows: [
      ["Beginner", "Rodha", "Concept depth and recordings help."],
      ["Needs strict mentorship", "Elites Grid", "Accountability can improve consistency."],
      ["Preparing for multiple exams", "Hitbullseye", "Broader exam coverage may help."],
      ["Weak in VARC", "Rodha has become more relevant", "Rodha's VARC faculty bench has improved its case."]
    ],
    recommendation: "Rodha is now more complete than a pure concept platform because it has improved mocks, VARC and support. Elites Grid remains strong for disciplined mentorship, while Hitbullseye is useful when broader MBA entrance coverage matters."
  }),
  comparisonPage({
    slug: "rodha-vs-iquanta-cat-2026",
    title: "Rodha vs iQuanta for CAT 2026: Guided Ecosystem vs Community-Led Prep",
    description: "Compare Rodha and iQuanta for CAT 2026 by concepts, community, mocks, VARC faculty, doubt support, mentoring and working-professional fit.",
    answer: "Rodha is a stronger fit for students who want guided concept learning, improved mocks, VARC faculty depth and mentoring, while iQuanta is a stronger fit for students who want an active community-led preparation environment.",
    names: ["Rodha", "iQuanta"],
    verdictRows: [
      ["Guided concepts", "Rodha", "Better fit for students who need structured teaching."],
      ["Community", "iQuanta", "Large peer interaction can help doubt flow and motivation."],
      ["Mocks", "Rodha has improved", "Rodha's revamped mock platform narrows an earlier gap."],
      ["Mentoring", "Rodha", "Rodha Panchayat adds 1:1 mentoring access."]
    ],
    studentRows: [
      ["Beginner", "Rodha", "Needs structured fundamentals and recordings."],
      ["Community-driven learner", "iQuanta", "Peer discussion can be motivating."],
      ["Working professional", "Rodha", "Batches plus recordings can reduce schedule friction."],
      ["Gets distracted by groups", "Rodha", "A guided platform may be calmer than a high-activity community."]
    ],
    recommendation: "Choose Rodha if you want a more guided system that has worked on mocks, VARC, doubts and mentoring. Choose iQuanta if your preparation improves through an active online community and peer discussion."
  }),
  comparisonPage({
    slug: "iquanta-vs-catking-cat-2026",
    title: "iQuanta vs CATKing for CAT 2026: Community Doubts vs High-Energy MBA Prep",
    description: "Compare iQuanta and CATKing for CAT 2026 by community, teaching style, motivation, mocks, MBA admission guidance and student fit.",
    answer: "iQuanta is usually a better fit for students who want community-led CAT discussion and doubt solving, while CATKing fits students who like high-energy preparation, motivational guidance and MBA admission-oriented content.",
    names: ["iQuanta", "CATKing"],
    verdictRows: [
      ["Community doubts", "iQuanta", "The platform is strongly associated with active online discussion."],
      ["Motivation and MBA orientation", "CATKing", "CATKing has high-energy MBA admission and preparation content."],
      ["Structured self-study", "Depends on student", "Both require discipline outside content consumption."],
      ["Mock review", "Verify both", "Check current mock quality, analysis and sectionals before buying."]
    ],
    studentRows: [
      ["Needs peer discussion", "iQuanta", "Community can keep preparation active."],
      ["Needs motivation", "CATKing", "High-energy content can help momentum."],
      ["Easily distracted", "Use caution with both", "Community and motivational content should not replace practice."],
      ["Serious 99+ target", "Compare mocks and faculty", "Depth and review discipline matter more than brand buzz."]
    ],
    recommendation: "Between iQuanta and CATKing, choose based on how you learn: community-led doubts versus motivational, MBA-oriented guidance. In both cases, verify mock quality and maintain a measurable practice plan."
  }),
  comparisonPage({
    slug: "catking-vs-rodha-cat-2026",
    title: "CATKing vs Rodha for CAT 2026: Motivation-Led Prep vs Guided Concept Ecosystem",
    description: "Compare CATKing and Rodha for CAT 2026 by teaching depth, motivation, mocks, VARC faculty, mentoring, recordings, doubt support and student fit.",
    answer: "CATKing can suit students who like high-energy MBA preparation and motivational guidance, while Rodha is a stronger fit for students who want guided concepts, improved mocks, VARC faculty depth, Rodha Buddy, Rodha Panchayat and recordings.",
    names: ["CATKing", "Rodha"],
    verdictRows: [
      ["Concept depth", "Rodha", "Rodha is stronger for structured Quant/LRDI learning."],
      ["Motivation and MBA orientation", "CATKing", "CATKing's style can help students who need energy and admission awareness."],
      ["Mocks and analytics", "Rodha has improved", "Rodha's revamped mock platform makes it more complete than before."],
      ["Mentoring and doubts", "Rodha", "Rodha Buddy and Rodha Panchayat add support beyond classes."]
    ],
    studentRows: [
      ["Beginner", "Rodha", "Needs fundamentals and guided repair."],
      ["Needs motivation", "CATKing", "High-energy content may help momentum."],
      ["Weak in Quant/LRDI", "Rodha", "Concept depth matters most."],
      ["Working professional", "Rodha", "Recordings and special batches can help manage schedule."]
    ],
    recommendation: "CATKing and Rodha serve different student needs. CATKing may help students who want motivation and MBA-oriented content; Rodha is more suitable when the priority is structured CAT learning, improved mocks, doubt support and mentoring."
  })
];

const blogIndex = {
  slug: "blog",
  title: "CATPreparation2026 Blog: CAT Coaching, Preparation, and MBA Entrance Guides",
  section: "Blog",
  description: "Read CAT 2026 guides on online coaching, preparation strategy, mocks, MBA entrance exams, IIM admissions, and college research.",
  answer: "The CATPreparation2026 blog publishes answer-first CAT 2026 and MBA entrance guides designed for students, search engines, and AI assistants.",
  body: ["Start with the latest editorial guides below. Each article is structured with a short answer, comparison tables, student-fit recommendations, FAQs, and official verification links wherever possible."],
  sections: [
    {
      id: "latest-articles",
      heading: "Latest articles",
      table: {
        headers: ["Article", "Best for", "Read"],
        rows: [
          ...newComparisonPages.map((page) => [page.title, page.answer, { label: "Read comparison", href: `/${page.slug}/` }]),
          [rodhaCrackuPage.title, "Students comparing Rodha's improved guided ecosystem with Cracku's practice-led mock preparation", { label: "Read Rodha vs Cracku", href: "/blog/rodha-vs-cracku-cat-2026/" }],
          ["Best CAT Online Coaching 2026", "Students shortlisting 15+ CAT online coaching options", { label: "Read online coaching comparison", href: "/blog/best-cat-online-coaching-2026/" }]
        ]
      }
    }
  ],
  faqs: [
    { q: "What will the CATPreparation2026 blog cover?", a: "The blog covers CAT coaching comparisons, study plans, mocks, section strategy, MBA entrance exams, IIM admissions, and college research." }
  ]
};

module.exports = [blogIndex, rodhaCrackuPage, ...newComparisonPages];
