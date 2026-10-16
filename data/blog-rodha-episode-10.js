const priorPages = require("./blog-october-15-exam-updates");

const rodhaEpisode10Article = {
  slug: "blog/cat-2026-lrdi-ludo-currency-notes-set-rodha-episode-10",
  title: "CAT 2026 LRDI Ludo and Currency Notes Set: Rodha Train Your Mind Episode 10",
  section: "CAT 2026 Video Guide",
  description: "Rodha's Train Your Mind Episode 10 teaches a CAT LRDI set using Ludo dice, currency-note constraints, odd-even equations and minimum-maximum reasoning.",
  answer: "Rodha's CAT 2026 Train Your Mind Episode 10 uses a Ludo-dice and currency-notes problem to demonstrate a reliable LRDI workflow: translate the story into variables, separate odd and even outcomes, organize conditions in a table, test feasible cases, and optimize only after the base constraints are stable. The 52-minute lesson had crossed 1,800 views when checked on October 16, 2026.",
  body: [
    "Rodha has published Episode 10 of its CAT 2026 LRDI Train Your Mind series. Ravi Sir works through a hybrid set built around Ludo dice outcomes and available currency notes, using it to teach equation building, conditional counting and minimum-maximum analysis.",
    "The value of the lesson is not the final numeric result alone. It shows how a dense story can be converted into a small logical model. That conversion is one of the most transferable skills in CAT DILR, where unfamiliar themes often hide familiar counting and optimization structures."
  ],
  sections: [
    {
      id: "video-summary",
      heading: "What is Rodha Train Your Mind Episode 10 about?",
      paragraphs: [
        "The episode begins with a Ludo-based setup and a fixed collection of currency notes. Dice outcomes influence which notes or values are considered, while odd-even conditions and totals restrict the possible arrangements. Later questions ask for minimum and maximum outcomes.",
        "The official video description identifies six main ideas: Ludo dice logic, currency-note constraints, odd-even outcomes, a table-based approach, minimum and maximum, and conditional counting. Ravi Sir develops these ideas across roughly 52 minutes rather than presenting the set as a short trick.",
        "When checked on October 16, the video showed 1,878 views and had been published about one day earlier. View counts change continuously; the number is included only to document that the video crossed the automation's 1,000-view publication threshold."
      ],
      links: [
        ["Watch Rodha Train Your Mind Episode 10", "https://www.youtube.com/watch?v=LlDoCWct2uo"],
        ["Rodha YouTube channel", "https://www.youtube.com/@Rodha/videos"],
        ["Rodha official website", "https://www.rodha.co.in/"],
        ["Rodha CAT mock-test portal", "https://mocks.rodha.co.in/"]
      ]
    },
    {
      id: "chapters",
      heading: "Episode 10 chapter map",
      paragraphs: [
        "The chapter sequence reveals the intended learning progression. The lesson first establishes the objects and conditions, then builds the odd-even relationship, organizes the information, and only afterward moves to optimization.",
        "This order is worth copying in practice. Many aspirants attempt a minimum or maximum question before they have identified the full feasible set. That often produces an attractive value that violates an earlier condition."
      ],
      table: {
        headers: ["Approximate timestamp", "Focus"],
        rows: [
          ["00:00", "Introduction to the Ludo set"],
          ["01:43", "Understanding the available notes"],
          ["05:03", "Building the odd-even equation"],
          ["07:10", "Organizing the conditions"],
          ["26:13", "Minimum and maximum question"],
          ["45:46", "Maximizing odd outcomes"],
          ["48:29", "Difference between minimum and maximum"]
        ]
      }
    },
    {
      id: "core-method",
      heading: "The core LRDI method demonstrated in the lesson",
      paragraphs: [
        "Start by removing the theme from the problem. Ludo and currency notes make the set memorable, but the underlying structure is a constrained counting problem. Identify what can vary, what remains fixed, and which totals or parity conditions connect the variables.",
        "Give each meaningful quantity a short symbol. For example, distinguish the number of odd outcomes from the number of even outcomes, and separate the count of notes from their total value. A symbol should represent one quantity consistently; changing its meaning midway is a common source of errors.",
        "Translate every sentence into either an equation, inequality, parity condition or case restriction. Once the language has been converted, the solver can compare conditions directly instead of repeatedly rereading the story.",
        "Next, organize candidate cases in a table. Rows can represent one dice outcome or one count choice, while columns record the remaining quantities and whether the case satisfies every condition. The table becomes a compact proof that no valid combination has been skipped."
      ],
      list: [
        "List fixed totals and available denominations first.",
        "Define variables for the quantities that can change.",
        "Separate odd and even outcomes before detailed counting.",
        "Convert narrative statements into equations or inequalities.",
        "Build a table of feasible cases.",
        "Eliminate a row immediately when it violates a condition.",
        "Attempt minimum or maximum questions only after feasibility is clear."
      ]
    },
    {
      id: "odd-even",
      heading: "Why odd-even reasoning is useful in CAT LRDI",
      paragraphs: [
        "Parity often reduces a large search space before any detailed calculation. If a total must be odd, then the number and type of odd contributions are restricted. If a combination must be even, the solver can classify cases by whether it contains an even number of odd components.",
        "In a dice-based set, three outcomes are odd and three are even, but the useful observation is not merely the count of faces. The set can attach different actions or values to those outcomes. The solver must track what an odd result does to the note count or total, then express that relationship cleanly.",
        "A good parity equation acts as a filter. It does not always determine the complete answer, but it can rule out broad groups of cases. That leaves a smaller list for exact value checking."
      ]
    },
    {
      id: "table-approach",
      heading: "How to build the table without making it too large",
      paragraphs: [
        "A table is helpful only when its rows represent meaningful cases. Do not create a row for every imaginable sequence of dice results. First use the equations and bounds to identify the counts that can actually occur.",
        "Choose the variable with the fewest possible values as the row driver. For each row, derive the other values rather than guessing them independently. This keeps the table narrow and prevents duplicate cases.",
        "Add a final validity column. Mark why a row fails: wrong total, impossible note count, parity mismatch or violation of a conditional rule. During review, this makes the logic auditable and helps detect an incorrectly rejected case.",
        "If two rows are symmetric under the rules, note that relationship instead of recomputing everything. CAT sets often reward recognition of equivalence as much as arithmetic speed."
      ]
    },
    {
      id: "minimum-maximum",
      heading: "Minimum and maximum questions: optimize the right quantity",
      paragraphs: [
        "Optimization questions can be deceptive because several quantities may move together. A question might ask for the maximum number of odd outcomes, the minimum number of notes or the largest difference between two counts. Confirm exactly which expression is being optimized.",
        "Write the target beside the table, such as maximize O or minimize a difference. Then ask which constraints become tight at an extreme. A maximum frequently occurs at a boundary, but the boundary still has to satisfy every equation and availability limit.",
        "Do not assume that using the largest denomination always minimizes the number of notes, or that maximizing odd outcomes automatically maximizes value. Conditional rules can reverse those intuitions. Test the boundary case and then the nearest alternatives.",
        "Finally, distinguish between the minimum value, maximum value and the difference between them. The video dedicates a separate closing chapter to this distinction because a solver can find both endpoints correctly and still subtract or interpret them incorrectly."
      ]
    },
    {
      id: "selection",
      heading: "Should you attempt a set like this in the CAT exam?",
      paragraphs: [
        "The theme looks unusual, but set selection should depend on structure rather than familiarity. A Ludo story can be approachable when it provides a few variables, firm totals and conditions that translate cleanly into equations.",
        "During the initial scan, look for three signals: whether the objects can be named clearly, whether at least one strong equation or count relation is available, and whether the questions appear to reuse the same base table. Those signals suggest that setup time may pay off across multiple questions.",
        "Leave the set temporarily if the first several minutes produce only disconnected observations, if the wording remains ambiguous after rereading, or if the number of unconstrained cases keeps growing. Returning later is better than protecting an unproductive sunk cost."
      ],
      table: {
        headers: ["Positive selection signal", "Warning signal"],
        rows: [
          ["Clear fixed totals", "Several quantities with no connecting condition"],
          ["Small range for one key variable", "Case count expands with every step"],
          ["Parity or equation removes cases", "Only trial-and-error progress"],
          ["One table supports multiple questions", "Each question appears to require a new setup"]
        ]
      }
    },
    {
      id: "practice-plan",
      heading: "How to use the video as an active practice session",
      paragraphs: [
        "Watching the entire solution passively can create false confidence. Pause after the conditions are introduced and spend 10 to 15 minutes building your own representation. Compare the structure of your table with the lesson before continuing.",
        "At the minimum-maximum chapter, pause again and predict which boundary should work. Write the condition that could invalidate it. This forces the same decision that the exam requires instead of turning the video into a lecture you merely recognize.",
        "After finishing, reconstruct the set on a blank page without replaying the explanation. If the model cannot be rebuilt, review only the point where the translation failed. Two days later, solve it once more under a timer or attempt a related conditional-counting set.",
        "Record the error type rather than only the final score. Useful labels include missed parity clue, duplicate case, wrong variable definition, ignored availability constraint and optimized the wrong expression."
      ],
      list: [
        "First attempt: solve independently before the full explanation.",
        "Second pass: compare equations and table design.",
        "Third pass: redo the optimization without notes.",
        "Delayed review: reproduce the model after 48 hours.",
        "Transfer practice: solve another set with counting and parity constraints."
      ]
    },
    {
      id: "cat-application",
      heading: "What this episode teaches beyond one LRDI set",
      paragraphs: [
        "The episode reinforces that CAT DILR is not a catalogue of themes. Dice, games, scheduling, currency and distribution can all reduce to the same habits: define, constrain, enumerate selectively and verify.",
        "It also shows why neat representation is not cosmetic. A table stores deductions externally, reducing the amount of information held in working memory. That leaves more attention for checking conditional rules and recognizing the next deduction.",
        "The final lesson is patience with setup. Spending several disciplined minutes on a correct model can be faster than starting calculations immediately and restarting after every contradiction."
      ]
    },
    {
      id: "source-note",
      heading: "Source and verification note",
      paragraphs: [
        "This guide is an original editorial summary of Rodha's public video and its official description. It does not reproduce the complete question, transcript or step-by-step copyrighted solution.",
        "The title, duration, chapter topics, channel attribution and view count were checked on October 16, 2026. Learners should watch the original lesson for the full problem statement and Ravi Sir's complete solution."
      ],
      links: [
        ["Original Rodha video", "https://www.youtube.com/watch?v=LlDoCWct2uo"],
        ["Rodha YouTube videos", "https://www.youtube.com/@Rodha/videos"],
        ["Rodha CAT preparation", "https://www.rodha.co.in/"],
        ["Rodha mocks", "https://mocks.rodha.co.in/"]
      ]
    }
  ],
  related: [
    "/cat-preparation/",
    "/cat-preparation/mock-tests/",
    "/cat-2026/exam-pattern/",
    "/cat-coaching/rodha/",
    "/blog/cat-2026-lrdi-venn-diagram-recruitment-set-rodha/",
    "/blog/"
  ],
  faqs: [
    { q: "What is Rodha Train Your Mind Episode 10 about?", a: "It is a CAT 2026 LRDI lesson using a Ludo-dice and currency-notes set to teach parity, equations, tables, conditional counting and minimum-maximum reasoning." },
    { q: "Who teaches Episode 10?", a: "The lesson is taught by Ravi Sir on Rodha's official YouTube channel." },
    { q: "How long is the video?", a: "The video runs for approximately 52 minutes and 39 seconds." },
    { q: "What LRDI skills does the episode cover?", a: "It covers translating conditions, odd-even logic, table construction, feasible-case analysis, conditional counting and optimization." },
    { q: "Is the set useful for CAT 2026 preparation?", a: "Yes. Its main value is the structured method for handling an unfamiliar, condition-heavy LRDI set." },
    { q: "Where can I watch the full solution?", a: "The complete lesson is available on Rodha's official YouTube channel at youtube.com/watch?v=LlDoCWct2uo." }
  ]
};

const rodhaEpisode10Href = `/${rodhaEpisode10Article.slug}/`;
const previousIndex = priorPages.find((page) => page.slug === "blog");
const index = {
  ...previousIndex,
  sections: previousIndex.sections.map((section) => section.id === "latest-articles"
    ? {
        ...section,
        table: {
          ...section.table,
          rows: [
            [rodhaEpisode10Article.title, rodhaEpisode10Article.description, { label: "Read article", href: rodhaEpisode10Href }],
            ...section.table.rows.filter((row) => row[2]?.href !== rodhaEpisode10Href)
          ]
        }
      }
    : section)
};

module.exports = [index, rodhaEpisode10Article, ...priorPages.filter((page) => page.slug !== "blog")];
