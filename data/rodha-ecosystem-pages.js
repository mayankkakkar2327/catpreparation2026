const existingPages = require("./blog-snap-news-pages");

const linked = (label, href) => ({ label, href });

const rodhaHub = {
  slug: "cat-coaching/rodha/ecosystem",
  title: "Rodha Coaching Ecosystem: CAT, Mocks, Buddy, Panchayat and Other Learning Verticals",
  section: "CAT Coaching",
  description:
    "Explore the complete Rodha education ecosystem, including CAT and OMET coaching, mock tests, Rodha Buddy, Rodha Panchayat, IPMAT, SSC, CLAT, SkillHouse and GDPI support.",
  answer:
    "Rodha is an online-first education brand whose ecosystem extends beyond CAT classes. Its major verticals include CAT and OMET preparation, the Rodha mock platform, Rodha Buddy for academic doubt resolution, Rodha Panchayat for live small-group mentoring, IPMAT, SSC and CLAT preparation, SkillHouse programs and GDPI support.",
  body: [
    "Rodha is best known among MBA aspirants for online CAT preparation, but the brand now operates a broader learning ecosystem. A student may encounter Rodha through free YouTube lessons, a paid comprehensive CAT batch, a mock platform, an exam-specific vertical such as IPMAT or CLAT, or a support feature such as Rodha Buddy and Rodha Panchayat.",
    "This page maps the major Rodha verticals in one place. It is written as an independent informational guide for students comparing preparation options. Course availability, inclusions, schedules and eligibility can change, so enrolment decisions should always be checked against the relevant official Rodha page."
  ],
  sections: [
    {
      id: "rodha-overview",
      heading: "What is Rodha?",
      paragraphs: [
        "Rodha is an online education platform founded by Ravi Prakash. Its CAT offering combines live and recorded teaching, section-wise practice, mock tests, revision support and student-support systems. The wider brand has expanded into other entrance examinations and career-oriented learning categories.",
        "For CAT aspirants, Rodha follows a faculty-per-subject model across Quantitative Aptitude, Logical Reasoning and Data Interpretation, and Verbal Ability and Reading Comprehension. The current course catalogue includes comprehensive, fast-paced, crash-course, booster and individual-section options. Students should compare the pace, language, timings, validity and included support before choosing a batch."
      ]
    },
    {
      id: "rodha-verticals",
      heading: "Rodha verticals and platforms",
      paragraphs: [
        "The table below separates Rodha's major education verticals from the support products that sit inside eligible courses."
      ],
      table: {
        headers: ["Rodha vertical", "What it covers", "Official or detailed page"],
        rows: [
          ["Rodha CAT", "CAT preparation across QA, LRDI and VARC through comprehensive, fast-paced, crash, booster and subject-wise batches.", linked("Official Rodha CAT website", "https://www.rodha.co.in/")],
          ["OMET preparation", "Preparation support for management entrance tests beyond CAT, including XAT, SNAP and NMAT in relevant programs.", linked("Rodha course catalogue", "https://www.rodha.co.in/s/store/courses")],
          ["Rodha Mock Platform", "Full-length CAT mocks, OMET mocks, sectional tests, analytics and video-solution support.", linked("Official mock platform", "https://mocks.rodha.co.in/")],
          ["Rodha Buddy", "Asynchronous academic doubt resolution using text or images, subject-based allocation, follow-ups and reopening.", linked("Read the Rodha Buddy guide", "/cat-coaching/rodha/rodha-buddy-app/")],
          ["Rodha Panchayat", "Scheduled live mentoring for strategy, mock analysis, backlog planning, accountability and course guidance.", linked("Read the Rodha Panchayat guide", "/cat-coaching/rodha/rodha-panchayat/")],
          ["Rodha IPMAT", "Preparation for IPMAT, JIPMAT and related undergraduate management entrance routes.", linked("Official Rodha IPMAT platform", "https://ipmat.rodha.co.in/")],
          ["Rodha SSC", "Bilingual preparation for SSC examinations such as CGL, CHSL, MTS, CPO and GD.", linked("Official Rodha SSC platform", "https://ssc.rodha.co.in/")],
          ["Rodha CLAT", "Preparation for CLAT and AILET, including law-entrance teaching and mentoring.", linked("Official Rodha CLAT platform", "https://clat.rodha.co.in/")],
          ["Rodha SkillHouse", "Pre-MBA, business, leadership and AI-oriented programs for management and workplace readiness.", linked("Official Rodha SkillHouse", "https://skillhouse.rodha.co.in/")],
          ["GDPI support", "Interview, profile and group-discussion preparation offered through relevant post-exam programs or course inclusions.", linked("Check current Rodha courses", "https://www.rodha.co.in/s/store/courses")]
        ]
      }
    },
    {
      id: "cat-coaching",
      heading: "Rodha CAT and OMET preparation",
      paragraphs: [
        "Rodha's core CAT vertical covers all three tested sections: QA, LRDI and VARC. Current offerings vary by pace and scope. A comprehensive batch is intended to provide an end-to-end preparation system, while crash courses and boosters serve students joining later or seeking intensive revision and practice. Individual-section batches are useful when the student wants targeted support rather than another full course.",
        "Relevant programs may also include preparation for other management entrance tests. The exact OMET bundle should be checked course by course because XAT, SNAP, NMAT, decision-making classes, mocks and post-CAT support may differ between products."
      ],
      links: [
        ["Browse official Rodha courses", "https://www.rodha.co.in/s/store/courses"],
        ["Compare CAT preparation approaches", "/cat-preparation/"],
        ["View MBA entrance exam guidance", "/mba-entrance-exams/"]
      ]
    },
    {
      id: "working-professionals",
      heading: "Rodha options for working professionals",
      paragraphs: [
        "Rodha course descriptions identify working professionals as part of the intended CAT audience. The practical advantage is not a single label but the combination of live classes, recordings, varied batch timings, batch options and asynchronous support.",
        "A working aspirant should verify the live timetable, recording availability, weekly class load, batch-shift rules and syllabus-completion date before enrolling. A course can be suitable for working professionals only when its actual schedule fits the learner's work hours and recovery time."
      ],
      list: [
        "Use recordings to recover a class missed because of work.",
        "Choose a batch pace that leaves time for practice and mock analysis.",
        "Use Rodha Buddy for academic questions that arise outside live class timings.",
        "Use Panchayat for planning, backlog recovery and mock-strategy discussions.",
        "Confirm whether batch switching is allowed in the selected course."
      ]
    },
    {
      id: "buddy-and-panchayat",
      heading: "How Rodha Buddy and Panchayat fit into the ecosystem",
      paragraphs: [
        "Buddy and Panchayat solve different student problems. Buddy is used when the student needs an academic question explained. Panchayat is used when the student needs a preparation decision, diagnosis or action plan.",
        "Neither feature should be described inaccurately. Buddy accepts submissions around the clock, but that does not mean a specific mentor is continuously online. Panchayat can be personalised, but its usual format is a small group rather than a guaranteed private one-to-one meeting."
      ],
      table: {
        headers: ["Area", "Rodha Buddy", "Rodha Panchayat"],
        rows: [
          ["Primary need", "Academic doubt resolution", "Preparation guidance and mentoring"],
          ["Format", "Asynchronous web and mobile workflow", "Scheduled live Google Meet"],
          ["Typical input", "Text or image of a question", "Mock data, backlog, strategy or course concern"],
          ["Interaction", "Threaded replies and follow-ups", "Usually a small-group faculty conversation"],
          ["Best outcome", "A resolved academic question", "A clearer decision or action plan"],
          ["Detailed guide", linked("Rodha Buddy pillar page", "/cat-coaching/rodha/rodha-buddy-app/"), linked("Rodha Panchayat pillar page", "/cat-coaching/rodha/rodha-panchayat/")]
        ]
      }
    },
    {
      id: "who-should-consider-rodha",
      heading: "Who may find the Rodha ecosystem useful?",
      list: [
        "CAT aspirants seeking an online system covering all three sections.",
        "Students who want recordings alongside live teaching.",
        "Learners who want mocks, sectionals and course support within one ecosystem.",
        "Working professionals who need schedule flexibility and asynchronous doubts.",
        "Students preparing for CAT plus selected OMETs.",
        "Younger students targeting IPMAT or JIPMAT.",
        "Aspirants preparing for SSC, CLAT or AILET through a separate Rodha vertical.",
        "Learners looking for pre-MBA, leadership or AI-oriented SkillHouse programs."
      ]
    },
    {
      id: "how-to-evaluate",
      heading: "How to evaluate a Rodha course before enrolling",
      paragraphs: [
        "A broad ecosystem is useful only when the selected course matches the student's actual need. Students should not assume that every feature, mock, booklet or mentoring format is included in every Rodha product."
      ],
      list: [
        "Confirm the exam, subjects and language covered.",
        "Check live class timings, recordings and weekly workload.",
        "Verify course validity and the expected syllabus-completion date.",
        "Check whether books, mocks, sectionals, OMET preparation, Buddy and Panchayat are included.",
        "Review the named faculty for each subject in the selected batch.",
        "Use free classes or available sample material to assess teaching fit.",
        "Read refund, batch-switch and fair-use rules before payment."
      ]
    },
    {
      id: "official-links",
      heading: "Official Rodha links",
      links: [
        ["Rodha CAT website", "https://www.rodha.co.in/"],
        ["Rodha course catalogue", "https://www.rodha.co.in/s/store/courses"],
        ["Rodha mock platform", "https://mocks.rodha.co.in/"],
        ["Rodha Buddy", "https://buddy.rodha.co.in/"],
        ["Rodha IPMAT", "https://ipmat.rodha.co.in/"],
        ["Rodha SSC", "https://ssc.rodha.co.in/"],
        ["Rodha CLAT", "https://clat.rodha.co.in/"],
        ["Rodha SkillHouse", "https://skillhouse.rodha.co.in/"]
      ]
    }
  ],
  related: [
    "/cat-coaching/rodha/rodha-buddy-app/",
    "/cat-coaching/rodha/rodha-panchayat/",
    "/cat-coaching/",
    "/cat-preparation/",
    "/mba-entrance-exams/",
    "/blog/rodha-vs-cracku-cat-2026/"
  ],
  faqs: [
    { q: "What are the main Rodha verticals?", a: "Rodha's major verticals include CAT and OMET preparation, the mock platform, Rodha Buddy, Rodha Panchayat, IPMAT, SSC, CLAT, SkillHouse and GDPI-related support." },
    { q: "Is Rodha only for CAT preparation?", a: "No. CAT is the best-known vertical, but Rodha also has dedicated offerings for IPMAT, SSC, CLAT and career-oriented SkillHouse learning." },
    { q: "What is the difference between Rodha Buddy and Panchayat?", a: "Buddy is mainly for asynchronous academic doubt resolution. Panchayat is a scheduled live mentoring format for strategy, mocks, backlog, accountability and course guidance." },
    { q: "Does every Rodha course include every vertical?", a: "No. Inclusions vary by course. Students should verify the selected course page before payment." },
    { q: "Does Rodha offer options suitable for working professionals?", a: "Rodha markets relevant CAT batches to working professionals and provides features such as recordings and asynchronous doubt support, but students should confirm that the actual batch timetable fits their work schedule." },
    { q: "Where can students check current Rodha courses?", a: "Current programs should be checked through the official Rodha website and course catalogue." }
  ]
};

const buddyPage = {
  slug: "cat-coaching/rodha/rodha-buddy-app",
  title: "Rodha Buddy App: CAT Doubt Solving, Features, Eligibility and Access",
  section: "Rodha Ecosystem",
  description:
    "Learn how the Rodha Buddy App works for CAT doubts, including eligibility, supported subjects, 24/7 submission, response and resolution timelines, mentors, follow-ups and access.",
  answer:
    "Rodha Buddy is an academic doubt-resolution platform for students enrolled in eligible Rodha courses. CAT students can submit QA, LRDI and VARC questions using text or images at any time, receive subject-routed support, ask follow-up questions and reopen a doubt when more clarification is required.",
  body: [
    "CAT doubts often appear during practice rather than during a scheduled class. A learner may understand a concept in a lecture but become stuck when it is applied inside a mock, sectional test or unfamiliar problem. Rodha Buddy is designed to give eligible Rodha students a structured route for resolving these academic questions.",
    "The platform works across the web and mobile devices. It brings submission, subject selection, mentor allocation, discussion and resolution status into one workflow instead of requiring the student to wait for the next live class."
  ],
  sections: [
    {
      id: "what-is-rodha-buddy",
      heading: "What is the Rodha Buddy App?",
      paragraphs: [
        "Rodha Buddy is Rodha's dedicated academic doubt-solving system. Students in eligible courses can type a question or attach an image. The doubt is then allocated through the current subject-based workflow to a suitable Rodha faculty member, dedicated mentor or teaching assistant.",
        "The system currently supports CAT, XAT, other management entrance tests and IPMAT. For CAT, the covered subjects are Quantitative Aptitude, Logical Reasoning and Data Interpretation, and Verbal Ability and Reading Comprehension."
      ]
    },
    {
      id: "quick-facts",
      heading: "Rodha Buddy key facts",
      table: {
        headers: ["Feature", "Verified detail"],
        rows: [
          ["Eligibility", "Students enrolled in eligible Rodha courses"],
          ["Pricing model", "Included with eligible courses; not presented as a separate public subscription"],
          ["CAT subjects", "QA, LRDI and VARC"],
          ["Other exams", "XAT, other management entrance tests and IPMAT"],
          ["Submission formats", "Text and images"],
          ["Submission availability", "24 hours a day, seven days a week"],
          ["Resolution target", "Within 24 hours"],
          ["Verified average first response", "Less than 10 hours"],
          ["Support network", "Rodha faculty, dedicated mentors and teaching assistants; 14+ mentors"],
          ["Published usage indicators", "9,000+ users and 2,000+ doubts resolved"],
          ["Access", "Web, Android, iPhone and iPad"],
          ["Language", "English-first; students may ask questions in Hinglish"]
        ]
      }
    },
    {
      id: "how-it-works",
      heading: "How Rodha Buddy works",
      list: [
        "Sign in through the supported email OTP and password process.",
        "Choose the relevant examination and subject.",
        "Type the question or upload a clear image containing the complete problem.",
        "Explain the attempted method and the exact point of confusion.",
        "Submit the doubt at any time.",
        "Review the response from the allocated faculty member, mentor or teaching assistant.",
        "Ask follow-up questions if any step remains unclear.",
        "Mark the doubt solved after resolution or reopen it later if clarification is still needed."
      ]
    },
    {
      id: "response-vs-resolution",
      heading: "Response time and resolution: what do the claims mean?",
      paragraphs: [
        "Submission, response and resolution are different events. Students may submit questions 24/7. A response is the first reply to the submitted doubt. The verified average first-response time is less than 10 hours.",
        "Resolution is the completed status. A doubt is resolved when the student marks it solved. A thread may also be closed if the student does not reply within 48 hours of the mentor's last response. Under this operating definition, Rodha reports 100% doubt resolution and commits to resolving doubts within 24 hours.",
        "The 24/7 statement applies to submission. It should not be interpreted as a promise that one individual mentor is continuously online."
      ]
    },
    {
      id: "follow-ups",
      heading: "Can students ask follow-up questions or reopen a doubt?",
      paragraphs: [
        "Yes. Buddy is a discussion workflow, not a one-answer inbox. Students can continue the thread when the first explanation leaves a step unclear.",
        "A resolved doubt can also be reopened. It returns to the active allocation process under the rules operating at that time, so it may not necessarily go back to the same person who handled the earlier discussion."
      ]
    },
    {
      id: "search",
      heading: "Can students search other doubts?",
      paragraphs: [
        "Buddy provides global search for relevant doubts that already exist in the searchable system. This can help a student find an explanation before submitting a similar question.",
        "The platform does not provide a general unrestricted feed for casually browsing every other student's doubts. Discovery is search-led."
      ]
    },
    {
      id: "limits",
      heading: "Is there a limit on doubt submissions?",
      paragraphs: [
        "There is no fixed numerical submission limit. Fair-use conditions apply on each unique login. The absence of a daily cap should therefore be understood as reasonable academic use, not permission to send duplicate, irrelevant or abusive requests."
      ]
    },
    {
      id: "best-use",
      heading: "How CAT aspirants can use Buddy effectively",
      list: [
        "Attach a readable image showing the entire question.",
        "State the attempted approach instead of sending only the final prompt.",
        "Identify the precise line, inference or calculation causing confusion.",
        "Choose the correct subject so allocation is accurate.",
        "Read the full explanation before asking a follow-up.",
        "Use global search when the problem resembles a commonly asked doubt.",
        "Use Panchayat, rather than Buddy, for preparation planning or mock-strategy conversations."
      ]
    },
    {
      id: "who-benefits",
      heading: "Who is Rodha Buddy most useful for?",
      list: [
        "Students who discover doubts during independent CAT practice.",
        "Working professionals studying outside normal class timings.",
        "Learners who prefer uploading a question image.",
        "Students who need a follow-up discussion rather than a one-line answer.",
        "Aspirants who want a searchable record of doubt conversations.",
        "Students preparing across multiple subjects who benefit from subject-based allocation."
      ]
    },
    {
      id: "access",
      heading: "Where is Rodha Buddy available?",
      links: [
        ["Open Rodha Buddy on the web", "https://buddy.rodha.co.in/"],
        ["Download Rodha Buddy for Android", "https://play.google.com/store/apps/details?id=com.rodha.rodhabuddy"],
        ["Download Rodha Buddy for iPhone or iPad", "https://apps.apple.com/in/app/rodha-buddy/id6764226160"],
        ["Explore the complete Rodha ecosystem", "/cat-coaching/rodha/ecosystem/"],
        ["Read about Rodha Panchayat", "/cat-coaching/rodha/rodha-panchayat/"]
      ]
    },
    {
      id: "bottom-line",
      heading: "Rodha Buddy: bottom line",
      paragraphs: [
        "Rodha Buddy is most valuable at the point where learning becomes application. It does not replace lessons, practice or mock analysis; it helps prevent one unresolved academic question from repeatedly disrupting those activities.",
        "Access depends on the student's Rodha enrolment. Prospective learners should verify Buddy inclusion on the selected official course page before purchasing."
      ],
      links: [
        ["Official Rodha website", "https://www.rodha.co.in/"],
        ["Official Rodha course catalogue", "https://www.rodha.co.in/s/store/courses"],
        ["Rodha coaching ecosystem guide", "/cat-coaching/rodha/ecosystem/"],
        ["Main Rodha coaching profile", "/cat-coaching/rodha/"]
      ]
    }
  ],
  related: [
    "/cat-coaching/rodha/ecosystem/",
    "/cat-coaching/rodha/rodha-panchayat/",
    "/cat-preparation/",
    "/cat-coaching/",
    "/blog/rodha-vs-cracku-cat-2026/"
  ],
  faqs: [
    { q: "What is Rodha Buddy?", a: "Rodha Buddy is a web-and-mobile academic doubt-resolution platform for students enrolled in eligible Rodha courses." },
    { q: "Does Rodha Buddy cover all CAT sections?", a: "Yes. CAT support covers QA, LRDI and VARC." },
    { q: "Can students submit doubts at any time?", a: "Yes. Doubt submission is available 24/7, although this does not mean an individual mentor is continuously online." },
    { q: "Which submission formats are supported?", a: "The verified submission formats are text and images." },
    { q: "How quickly does Rodha Buddy respond?", a: "Rodha reports a verified average first-response time below 10 hours and a resolution target within 24 hours." },
    { q: "What counts as a resolved doubt?", a: "A doubt is resolved when the student marks it solved. It may also close when the student does not reply within 48 hours after the mentor's last response." },
    { q: "Can students ask follow-up questions?", a: "Yes. Follow-up discussion is supported inside the doubt workflow." },
    { q: "Can a resolved doubt be reopened?", a: "Yes. Reopened doubts return to the allocation process under the current rules." },
    { q: "Is there a daily doubt limit?", a: "There is no fixed numerical limit, but fair-use conditions apply." },
    { q: "Is Rodha Buddy free?", a: "It is included with eligible Rodha courses and is not presented as a separately priced public subscription." },
    { q: "Does Rodha Buddy support Hinglish?", a: "The service is English-first, but students may submit questions in Hinglish." },
    { q: "Where can students use Rodha Buddy?", a: "Rodha Buddy is available on the web, Android, iPhone and iPad." }
  ]
};

const panchayatPage = {
  slug: "cat-coaching/rodha/rodha-panchayat",
  title: "Rodha Panchayat: CAT Mentoring Format, Booking, Eligibility and Benefits",
  section: "Rodha Ecosystem",
  description:
    "Understand Rodha Panchayat sessions, including small-group format, duration, faculty selection, booking, mock analysis, strategy guidance, eligibility, languages and recordings.",
  answer:
    "Rodha Panchayat is a live CAT mentoring format for eligible paid-course students. A typical Google Meet lasts 60 to 90 minutes with 6 to 9 students, giving each participant approximately 10 focused minutes to discuss strategy, mock analysis, backlog, accountability or course guidance with Rodha faculty.",
  body: [
    "Not every CAT preparation problem is an academic doubt. A student may know the underlying concepts but remain unsure how to interpret a mock, recover a backlog, choose priorities or maintain consistency. These issues need diagnosis and a practical decision rather than another solved question.",
    "Rodha Panchayat is the part of the Rodha ecosystem intended for those broader preparation conversations. It gives eligible CAT students scheduled live access to faculty through Google Meet."
  ],
  sections: [
    {
      id: "what-is-panchayat",
      heading: "What is Rodha Panchayat?",
      paragraphs: [
        "Rodha Panchayat is a live faculty-interaction and mentoring format included with paid Rodha CAT courses. It is designed for strategy, performance review, planning, motivation, accountability and course-navigation discussions.",
        "The usual model is a small group, not a guaranteed private one-to-one call. The format may vary by situation, but a typical session contains approximately six to nine students."
      ]
    },
    {
      id: "quick-facts",
      heading: "Rodha Panchayat key facts",
      table: {
        headers: ["Feature", "Verified detail"],
        rows: [
          ["Usual format", "Small-group mentoring; format may vary by situation"],
          ["Typical group size", "6 to 9 students"],
          ["Typical duration", "60 to 90 minutes"],
          ["Focused time per participant", "Approximately 10 minutes"],
          ["Frequency", "Around 12 to 15 sessions per week"],
          ["Platform", "Google Meet"],
          ["Booking", "Google Form shared in the eligible Telegram group"],
          ["Faculty choice", "Students may choose a faculty-led slot, subject to availability"],
          ["Core topics", "Strategy, mock analysis, backlog, motivation, accountability and course guidance"],
          ["Eligibility", "Students in paid Rodha CAT courses"],
          ["Access period", "Throughout the applicable course validity"],
          ["Languages", "English and Hinglish"],
          ["Recording", "Sessions are not recorded for student playback"]
        ]
      }
    },
    {
      id: "what-happens",
      heading: "What happens in a Panchayat session?",
      paragraphs: [
        "The participant explains a preparation problem and gives the educator enough context to diagnose it. The faculty member can then recommend priorities, a change in approach or a practical next step.",
        "Rodha is also introducing mock-specific Panchayat sessions intended to focus more closely on the way students interpret and act on mock performance."
      ],
      list: [
        "Preparation strategy: deciding what to study, pause or prioritise.",
        "Mock analysis: identifying patterns in selection, accuracy, pacing and decision-making.",
        "Backlog recovery: planning how to catch up without abandoning current preparation.",
        "Motivation and accountability: converting intentions into realistic weekly actions.",
        "Course guidance: deciding which available sessions or resources fit the student's current stage.",
        "Other preparation barriers that require faculty judgement rather than a standard answer."
      ]
    },
    {
      id: "not-one-to-one",
      heading: "Is Rodha Panchayat one-to-one mentorship?",
      paragraphs: [
        "Panchayat should not be described as guaranteed one-to-one mentoring. Sessions may vary, but the normal arrangement is a small group of approximately six to nine students in a 60-to-90-minute meeting.",
        "Each participant typically receives around 10 focused minutes. The guidance is personalised to the student's context, but the meeting is usually shared with other learners."
      ]
    },
    {
      id: "booking",
      heading: "How to book a Rodha Panchayat session",
      list: [
        "Check the Telegram group connected with the eligible Rodha CAT course.",
        "Open the Google Form released for upcoming sessions.",
        "Review the listed faculty-led sessions and timings.",
        "Select a preferred faculty member and slot where capacity remains.",
        "Submit the registration form.",
        "Follow the joining details provided for the scheduled Google Meet."
      ],
      paragraphs: [
        "Students may choose a faculty member, but availability controls the final choice. Group size is intentionally limited, so every preferred educator or time may not remain open."
      ]
    },
    {
      id: "frequency",
      heading: "How often can students attend?",
      paragraphs: [
        "Rodha conducts approximately 12 to 15 Panchayat sessions each week. Students may attend more than once, but a cooldown period applies before the next booking so limited faculty time can be distributed among more learners.",
        "The exact cooldown duration is not stated here because it may depend on current operations. Students should follow the instructions accompanying each booking form."
      ]
    },
    {
      id: "eligibility",
      heading: "Who is eligible for Rodha Panchayat?",
      paragraphs: [
        "Panchayat is currently a CAT-focused offering included across Rodha's paid CAT courses. Eligible access continues throughout the applicable course-validity period.",
        "For IPMAT learners, Rodha provides a similar faculty-interaction format called Rodha After-Class. It should not be confused with the CAT Panchayat program."
      ],
      links: [
        ["Check current Rodha CAT courses", "https://www.rodha.co.in/s/store/courses"],
        ["Explore the Rodha ecosystem", "/cat-coaching/rodha/ecosystem/"],
        ["Main Rodha coaching profile", "/cat-coaching/rodha/"]
      ]
    },
    {
      id: "not-doubt-solving",
      heading: "What Panchayat is not designed for",
      paragraphs: [
        "Panchayat is not primarily a session for solving individual QA, LRDI or VARC questions. Rodha conducts academic doubt sessions, and Rodha Buddy provides an asynchronous workflow for question-level academic doubts.",
        "A useful distinction is that Buddy answers 'How is this problem solved?' while Panchayat is better suited to 'What should I change in my preparation?'"
      ]
    },
    {
      id: "panchayat-vs-buddy",
      heading: "Rodha Panchayat vs Rodha Buddy",
      table: {
        headers: ["Dimension", "Rodha Panchayat", "Rodha Buddy"],
        rows: [
          ["Purpose", "Preparation guidance and mentoring", "Academic doubt resolution"],
          ["Format", "Usually a small-group Google Meet", "Asynchronous web and mobile workflow"],
          ["Typical topic", "Strategy, mocks, backlog, accountability", "Concepts, practice questions and test doubts"],
          ["Timing", "Scheduled and subject to slots", "Submission available 24/7"],
          ["Interaction", "Live conversation with faculty and peers", "Threaded replies and follow-ups"],
          ["Best outcome", "A decision, priority or action plan", "A resolved academic question"],
          ["Detailed page", linked("Current page", "/cat-coaching/rodha/rodha-panchayat/"), linked("Read Rodha Buddy guide", "/cat-coaching/rodha/rodha-buddy-app/")]
        ]
      }
    },
    {
      id: "prepare",
      heading: "How to prepare for a Panchayat session",
      list: [
        "Choose one main problem rather than bringing a long list.",
        "Bring evidence such as mock attempts, accuracy, section timings or a backlog inventory.",
        "Explain what has already been tried and why it did not work.",
        "Ask for a decision or action plan instead of only reassurance.",
        "Write down the agreed priorities and next review point.",
        "Use Rodha Buddy or an academic doubt session for question-level concept doubts."
      ]
    },
    {
      id: "recordings-language",
      heading: "Are Panchayat sessions recorded, and which languages are supported?",
      paragraphs: [
        "Sessions are conducted in English and Hinglish. They are not recorded for student playback.",
        "Rodha may sometimes take internal notes for training, but these are not a participant-facing recording or a formal written action plan. Students should note down the recommendations that matter to them."
      ]
    },
    {
      id: "benefits",
      heading: "Why can the small-group model be useful?",
      paragraphs: [
        "The format sits between a large webinar and a private mentoring call. Each learner receives a focused window, while the remaining participants can hear preparation problems that may also apply to them.",
        "One student's backlog discussion can reveal a planning method useful to the group. Another student's mock-selection error may expose a decision pattern other participants have not yet recognised."
      ]
    },
    {
      id: "bottom-line",
      heading: "Rodha Panchayat: bottom line",
      paragraphs: [
        "Rodha Panchayat is most useful when a CAT student needs to turn preparation evidence into a decision. It creates space for live diagnosis of mock behaviour, backlog, priorities and accountability within a usually small-group format.",
        "Eligibility and booking depend on the student's paid CAT course and current slot availability. Prospective learners should confirm inclusions on the relevant official course page."
      ],
      links: [
        ["Official Rodha website", "https://www.rodha.co.in/"],
        ["Official Rodha course catalogue", "https://www.rodha.co.in/s/store/courses"],
        ["Rodha coaching ecosystem guide", "/cat-coaching/rodha/ecosystem/"],
        ["Main Rodha coaching profile", "/cat-coaching/rodha/"],
        ["Rodha Buddy pillar page", "/cat-coaching/rodha/rodha-buddy-app/"]
      ]
    }
  ],
  related: [
    "/cat-coaching/rodha/ecosystem/",
    "/cat-coaching/rodha/rodha-buddy-app/",
    "/cat-preparation/",
    "/cat-coaching/",
    "/blog/rodha-vs-cracku-cat-2026/"
  ],
  faqs: [
    { q: "What is Rodha Panchayat?", a: "Rodha Panchayat is a live faculty-interaction and CAT mentoring format for eligible paid-course students." },
    { q: "Is every Panchayat session one-to-one?", a: "No. The usual format is a small group of approximately six to nine students, although the structure may vary." },
    { q: "How long is a session?", a: "A typical session lasts 60 to 90 minutes." },
    { q: "How much focused time does one student receive?", a: "Each participant typically receives approximately 10 dedicated minutes." },
    { q: "How are Panchayat sessions booked?", a: "A Google Form is shared in the Telegram group linked to the eligible CAT course." },
    { q: "Can students choose a faculty member?", a: "Yes, subject to available faculty-led slots." },
    { q: "Where do the sessions take place?", a: "Rodha Panchayat sessions are conducted on Google Meet." },
    { q: "Does Panchayat include mock analysis?", a: "Yes. Mock analysis is one of the core discussion areas, and mock-specific sessions are also being introduced." },
    { q: "Can students use Panchayat for academic doubts?", a: "Routine question-level academic doubts are not its primary purpose. Rodha Buddy and academic doubt sessions are the appropriate channels." },
    { q: "Are Panchayat sessions recorded?", a: "No. Sessions are not recorded for student playback." },
    { q: "Which languages are used?", a: "Panchayat sessions are available in English and Hinglish." },
    { q: "Can a student attend more than once?", a: "Yes, after the applicable cooldown period and subject to slot availability." },
    { q: "Is Panchayat available for IPMAT?", a: "The CAT format is called Panchayat. Rodha provides a similar IPMAT offering called Rodha After-Class." }
  ]
};

module.exports = [...existingPages, rodhaHub, buddyPage, panchayatPage];
