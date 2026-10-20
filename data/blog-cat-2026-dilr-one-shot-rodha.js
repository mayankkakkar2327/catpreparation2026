const priorPages = require("./blog-cat-2026-final-42-days-rodha");

const article = {
  slug: "blog/cat-2026-dilr-one-shot-marathon-rodha-abhishek-sir",
  title: "CAT 2026 DILR One-Shot Marathon: 8 LRDI Sets from Rodha Explained",
  section: "CAT 2026 Video Guide",
  description: "A structured guide to Rodha's six-hour CAT 2026 DILR one-shot marathon, covering eight LRDI sets, representation, constraints and revision strategy.",
  answer: "Rodha's CAT 2026 DILR one-shot marathon is a six-hour, 24-minute session taught by Abhishek Sir. It covers eight advanced sets involving voting, IIM selection scores, tournament rankings, elections, production ratios, thesis evaluation, marks distribution and a prime-number grid. The main learning objective is not memorizing set types; it is building compact representations, tracking constraints, eliminating cases and selecting workable sets under CAT time pressure. The video crossed 2,300 views when checked on October 20, 2026.",
  body: [
    "Rodha has published a long-form CAT 2026 LRDI revision class featuring eight varied sets. The session is designed as a marathon rather than a short concept lecture, giving aspirants repeated exposure to the decisions that matter in DILR: how to represent data, where to begin, which cases to test and when a set is becoming too expensive.",
    "This article is an original study guide to the session. It maps the chapters, explains the transferable skill in each set and provides a practical way to use a six-hour video without turning it into passive viewing. The complete questions and solutions remain in Rodha's original lesson."
  ],
  sections: [
    {
      id: "video-summary",
      heading: "What is the Rodha CAT 2026 DILR one-shot marathon?",
      paragraphs: [
        "The video is titled “CAT 2026 DILR One Shot: Complete LRDI CAT Marathon” and is taught by Abhishek Sir on Rodha's official YouTube channel. It runs for approximately six hours and 24 minutes and was published on October 19, 2026.",
        "The class contains eight CAT-level sets with different surfaces: competition voting, selection scores, team rankings, an election, a production process, evaluator assignments, percentage distribution and a number grid. This variety helps students see that unfamiliar stories often reduce to a small group of reasoning actions.",
        "The official description identifies six recurring ideas: data representation, compact tables, constraint tracking, weighted scores, case elimination and exam thinking. Those are more important than the themes themselves because they transfer to unseen CAT sets.",
        "When checked on October 20, the video showed 2,362 views. That count is recorded only to verify that it crossed the automation's 1,000-view publication threshold and will naturally change."
      ],
      links: [
        ["Watch the full Rodha DILR marathon", "https://www.youtube.com/watch?v=3uLFYYeZGAI"],
        ["Rodha YouTube channel", "https://www.youtube.com/@Rodha/videos"],
        ["Rodha official website", "https://www.rodha.co.in/"],
        ["Rodha CAT mock platform", "https://mocks.rodha.co.in/"]
      ]
    },
    {
      id: "chapter-map",
      heading: "Complete chapter map for the eight LRDI sets",
      paragraphs: [
        "The chapter sequence moves across several common reasoning structures without labelling them as a fixed syllabus. Use the timestamps to attempt one set at a time rather than watching the entire marathon in one sitting.",
        "Each chapter is long enough to include the initial interpretation, construction of a representation, deductions and questions. Pause when a set is introduced and make a genuine attempt before viewing the solution."
      ],
      table: {
        headers: ["Timestamp", "Set", "Primary reasoning focus"],
        rows: [
          ["00:00", "Introduction", "How to approach a long DILR revision session"],
          ["02:16", "Singing competition and gharana voting", "Votes, relationships and compact tabulation"],
          ["28:23", "IIM selection with GE and PI scores", "Weighted scores and ranking conditions"],
          ["1:19:16", "India versus Korea tournament", "Teams, rankings and comparative constraints"],
          ["2:02:38", "Society election", "Vote distribution and case analysis"],
          ["2:59:46", "Production, testing and shipping", "Ratios, process flow and linked quantities"],
          ["3:40:46", "Professors and thesis evaluation", "Assignment logic and arrangement constraints"],
          ["4:30:10", "Student marks and percentage distribution", "Percentages, totals and table reconstruction"],
          ["5:21:48", "Code Breakers prime-number grid", "Number placement, grid logic and elimination"]
        ]
      }
    },
    {
      id: "how-to-use",
      heading: "How should you use a six-hour DILR video?",
      paragraphs: [
        "Do not treat the marathon as a movie. Divide it into two to four study sessions, and attempt each set before watching Abhishek Sir's method. A productive cycle is 12 to 18 minutes of independent work, solution review, a short error note and a clean reconstruction.",
        "If you cannot solve the set, still record what you understood: the entities, fixed totals, relationships and possible table. This reveals whether the difficulty came from interpretation, representation, deduction or calculation.",
        "After the explanation, close the video and rebuild the solution from a blank page. Recognition is not mastery. You should be able to recreate the table, justify the key deduction and explain why rejected cases fail.",
        "Return to selected sets after two or three days under a timer. Do not repeat all eight immediately; choose the sets that exposed different weaknesses."
      ],
      list: [
        "Attempt before watching the full solution.",
        "Set a realistic first-attempt time limit.",
        "Write the representation even when deductions are incomplete.",
        "Record one decisive clue and one avoidable mistake.",
        "Reconstruct the set without replaying the explanation.",
        "Reattempt representative sets after a short gap."
      ]
    },
    {
      id: "representation",
      heading: "Why data representation is the central skill in DILR",
      paragraphs: [
        "DILR stories are deliberately noisy. Names, scores, stages, teams and conditions compete for attention. A strong representation removes the narrative surface and stores only the information needed for deductions.",
        "The best table is not necessarily the most detailed. It should make relationships visible while leaving room for unknowns. In a voting set, rows may represent participants and columns may represent voters or rounds. In a process set, a flow diagram can be better than a grid because quantities change between production, testing and shipping.",
        "Build the smallest structure that can answer multiple questions. If every question requires rereading the passage, the representation is probably incomplete. If constructing the table consumes excessive time and many cells remain irrelevant, it may be too large.",
        "Use consistent symbols. A dash, zero and blank cell should not mean three different things unless you define them. Mark confirmed facts differently from temporary cases so assumptions do not quietly become conclusions."
      ],
      table: {
        headers: ["Set feature", "Useful representation"],
        rows: [
          ["Two groups compared across criteria", "Matrix or score table"],
          ["Events occurring in an order", "Timeline or sequence slots"],
          ["Quantities moving through stages", "Flow diagram with ratios"],
          ["Assignments between two entity types", "Grid with possible and impossible cells"],
          ["Ranks determined by several results", "Outcome table plus rank bounds"],
          ["Percentages linked to totals", "Base-total table with derived counts"]
        ]
      }
    },
    {
      id: "set-one",
      heading: "Set 1: Singing competition and gharana voting",
      paragraphs: [
        "A voting set usually contains two layers: who can vote for whom and how votes translate into a final outcome. The temptation is to list every possible vote sequence, but the cleaner route is to aggregate information wherever order does not matter.",
        "Identify fixed totals first. Count the participants, available votes and any restrictions on self-voting, group voting or repeated choices. Then create a table that separates direct facts from inferred totals.",
        "The transferable lesson is conservation: every vote cast must appear somewhere in the receiving totals. If row totals and column totals represent the same pool, their equality can expose missing values or impossible cases.",
        "For CAT set selection, a voting theme is attractive when the totals are small and several conditions immediately restrict the grid. It is risky when the rules create many symmetric possibilities without a strong starting clue."
      ]
    },
    {
      id: "set-two",
      heading: "Set 2: IIM selection using GE and PI scores",
      paragraphs: [
        "Selection-score sets combine arithmetic with logic. Candidates may receive scores in components such as a group exercise and personal interview, with a weighted formula producing the final ranking.",
        "Write the formula before inserting numbers. Keep raw scores separate from weighted contributions, especially when components have different maximum marks or weights. A candidate who leads in one raw component may not lead overall.",
        "Use inequalities when exact values are unavailable. If one candidate must outrank another, compare their weighted totals and derive the minimum change required. This is often faster than enumerating all score combinations.",
        "The key exam habit is precision. Percentage points, marks and weighted points are not interchangeable. Label every column with its unit and delay rounding unless the set explicitly requires it."
      ],
      list: [
        "Separate raw marks from weights.",
        "Convert ranking statements into inequalities.",
        "Check ties and tie-breaking rules.",
        "Keep maximum possible scores visible.",
        "Verify whether percentages apply before or after aggregation."
      ]
    },
    {
      id: "set-three",
      heading: "Set 3: India versus Korea tournament rankings",
      paragraphs: [
        "Tournament sets can become large because every match appears to create another branch. Start by confirming the scoring system, the number of games and whether draws are possible. Total points available across the tournament may provide a powerful global constraint.",
        "Rank statements are usually weaker than exact scores but still useful. First place means no other team has a greater total, not necessarily that the leader won every match. Build score ranges and use head-to-head or tie-break conditions only when needed.",
        "A compact outcome table can record win, loss or draw while a separate column tracks points. Do not repeatedly recompute totals from the match grid.",
        "For selection, tournament sets are promising when some results are fixed and the question asks about a small number of remaining matches. They are dangerous when several rankings depend on unspoken tie-break assumptions; read the wording carefully."
      ]
    },
    {
      id: "set-four",
      heading: "Set 4: Society election and voting analysis",
      paragraphs: [
        "The second voting-themed set is useful because similar stories can demand different representations. An election may involve candidates, voter groups, rounds or transfers, so copying the first set's table without checking the structure can create confusion.",
        "Translate percentages into counts only after establishing the correct base. The total electorate, valid votes and votes cast may be different quantities. A percentage of registered voters is not automatically a percentage of valid votes.",
        "Use minimum and maximum bounds before detailed casework. If a candidate already has a fixed block of support, calculate the range still possible from undecided or conditional voters. Bounds can answer some questions without identifying every vote."
      ]
    },
    {
      id: "set-five",
      heading: "Set 5: Production, testing and shipping ratios",
      paragraphs: [
        "Process sets connect quantities across stages. A product may be manufactured, tested, rejected, reworked and shipped, with each step governed by a ratio or percentage. A flow diagram is often clearer than a standard table.",
        "Choose a convenient base when only ratios are given. The least common multiple of denominators can eliminate fractions, but verify that the chosen base remains compatible with any fixed totals later in the set.",
        "Track what each percentage applies to. A rejection rate at testing is applied to units tested, not necessarily total production. A shipping ratio may apply only to approved units.",
        "The broader lesson is to resist premature calculation. Map the process first, label each edge and then substitute values. This reduces the chance of applying a correct percentage to the wrong quantity."
      ],
      table: {
        headers: ["Step", "Question to ask"],
        rows: [
          ["Production", "What is the starting total or ratio base?"],
          ["Testing", "Are all units tested, and what proportion passes?"],
          ["Rework", "Do rejected units leave the process or return?"],
          ["Shipping", "Which approved units are allocated to each destination?"],
          ["Final check", "Do all flows reconcile with the original total?"]
        ]
      }
    },
    {
      id: "set-six",
      heading: "Set 6: Professors and thesis evaluation",
      paragraphs: [
        "Assignment sets link one entity type to another: professors to theses, employees to tasks or judges to cases. Begin with a grid and mark direct impossibilities before placing any positive assignment.",
        "Pay attention to capacity. A professor evaluating exactly two theses creates both a row total and a restriction on the remaining cells. Combined row and column counts can trigger deductions even when no single sentence seems decisive.",
        "Conditional clues should be written symbolically. “If A evaluates X, then B does not evaluate Y” is easier to track as a branch than as remembered prose. Complete one branch far enough to find a contradiction or a stable arrangement before opening another.",
        "The session's transferable skill is disciplined case separation. Never carry a deduction from one hypothetical case into another."
      ]
    },
    {
      id: "set-seven",
      heading: "Set 7: Student marks and percentage distribution",
      paragraphs: [
        "Marks-distribution sets mix data interpretation with arithmetic reconstruction. Establish the total number of students and the score bands before converting percentages to counts.",
        "Check integrality. Student counts must be whole numbers, so a percentage can restrict the possible total even when the total is not explicitly stated. Use the denominator implied by each percentage to find compatible bases.",
        "Separate cumulative statements from interval statements. “At least 60 percent” includes several score bands, while “between 60 and 70” refers to one interval. A cumulative table can prevent double counting.",
        "When the set includes averages, write total marks as average multiplied by count. Do not average subgroup averages without weighting them by subgroup size."
      ]
    },
    {
      id: "set-eight",
      heading: "Set 8: Code Breakers and the prime-number grid",
      paragraphs: [
        "The final set uses a 5-by-5 grid and prime-number restrictions. Grid puzzles reward early control of candidate values. List the allowed primes and any row, column or adjacency conditions before placing numbers.",
        "Use elimination marks lightly. Filling every cell with a long candidate list can make the grid unreadable. Record only candidates that remain plausible after global restrictions.",
        "Look for the most constrained row, column or cell. A location affected by several conditions provides a stronger starting point than the first clue in the paragraph.",
        "Number-property knowledge should serve the logic. Prime parity, possible sums and factor restrictions can eliminate placements, but avoid calculating combinations that violate a simpler positional clue."
      ]
    },
    {
      id: "constraint-tracking",
      heading: "How to track constraints without losing control",
      paragraphs: [
        "Classify each condition as fixed, relational, numerical or conditional. Fixed clues can enter the table immediately. Relational clues connect two entities. Numerical clues govern totals. Conditional clues create branches and should remain visibly separate.",
        "After every important placement, scan for consequences across rows, columns and totals. DILR progress often comes from propagation rather than a new clever idea.",
        "When a contradiction appears, identify the assumption that caused it and close only that branch. Erasing the entire table wastes valid deductions.",
        "Use an audit check before answering: totals reconcile, all entities are used as required, and every original condition has been tested against the final arrangement."
      ],
      list: [
        "Number the clues when the passage is long.",
        "Mark confirmed values differently from assumptions.",
        "Write row and column totals at the edge of the table.",
        "Close a failed case explicitly.",
        "Recheck all original conditions before selecting an option."
      ]
    },
    {
      id: "exam-selection",
      heading: "How do these sets improve CAT set selection?",
      paragraphs: [
        "A marathon is useful only if it improves the choice of sets in a timed section. During each first attempt, spend the opening two or three minutes identifying entities, likely representation, number of open variables and visible entry points.",
        "A good set for you is not necessarily the set with the most familiar theme. Choose the one where the structure becomes clear and early deductions reduce uncertainty. A familiar tournament can still be expensive if outcomes branch widely, while an unfamiliar process set may collapse after one ratio equation.",
        "Set an exit rule. If the representation remains unstable or no new deduction appears after a reasonable attempt, leave and scan another set. Returning later preserves optionality; spending the entire section defending the first choice does not.",
        "After the video, rank the eight sets by your personal selection order and compare that ranking with your actual solving experience. This creates a useful profile of which structural signals you read well."
      ],
      table: {
        headers: ["Positive signal", "Warning signal"],
        rows: [
          ["Clear entities and a compact table", "Representation keeps changing"],
          ["Fixed totals constrain multiple cells", "Many independent variables remain"],
          ["One clue creates a deduction chain", "Progress depends on broad guessing"],
          ["Questions reuse the same base work", "Each question needs a new branch"],
          ["Calculations are controlled", "Arithmetic overwhelms the logic"]
        ]
      }
    },
    {
      id: "revision-plan",
      heading: "A four-day revision plan using the marathon",
      paragraphs: [
        "On Day 1, attempt the first two sets and focus on representation and weighted scores. On Day 2, cover the tournament and election sets, paying attention to totals, ranks and voting bases.",
        "On Day 3, work through the process and assignment sets. Compare the flow diagram with the professor-thesis grid and note why each representation fits its structure.",
        "On Day 4, attempt the marks-distribution and prime-grid sets. Finish with a timed scan of all eight set introductions, giving yourself only enough time to choose an order.",
        "Two or three days later, reattempt one set from each major weakness category. Follow it with a full DILR sectional or a mock so that the learning is tested under selection pressure."
      ],
      table: {
        headers: ["Day", "Sets", "Primary goal"],
        rows: [
          ["Day 1", "Singing competition; IIM selection", "Tables, conservation and weighted scoring"],
          ["Day 2", "Tournament; society election", "Rankings, totals and voting bounds"],
          ["Day 3", "Production flow; thesis evaluation", "Ratios, process mapping and assignments"],
          ["Day 4", "Marks distribution; prime grid", "Percentage bases, integrality and grid elimination"],
          ["Follow-up", "Selected reattempts plus sectional", "Transfer learning to timed performance"]
        ]
      }
    },
    {
      id: "source-note",
      heading: "Source and verification note",
      paragraphs: [
        "This guide is an original editorial summary of Rodha's public DILR marathon and official description. It does not reproduce the complete questions, transcript, PDF or step-by-step copyrighted solutions.",
        "The title, teacher, duration, publication date, chapter timestamps, topic labels and view count were checked on October 20, 2026. Learners should watch the original video for the full sets and Abhishek Sir's complete explanations."
      ],
      links: [
        ["Original CAT 2026 DILR marathon", "https://www.youtube.com/watch?v=3uLFYYeZGAI"],
        ["Rodha YouTube videos", "https://www.youtube.com/@Rodha/videos"],
        ["Rodha CAT preparation", "https://www.rodha.co.in/"],
        ["Rodha mocks", "https://mocks.rodha.co.in/"],
        ["CAT preparation guide", "/cat-preparation/"]
      ]
    }
  ],
  related: [
    "/cat-preparation/",
    "/cat-preparation/mock-tests/",
    "/cat-2026/exam-pattern/",
    "/cat-2026/syllabus/",
    "/cat-coaching/rodha/",
    "/blog/cat-2026-final-42-days-strategy-rodha-ravi-sir/",
    "/blog/cat-2026-lrdi-ludo-currency-notes-set-rodha-episode-10/",
    "/blog/"
  ],
  faqs: [
    { q: "How long is Rodha's CAT 2026 DILR one-shot marathon?", a: "The video runs for approximately six hours, 24 minutes and 26 seconds." },
    { q: "Who teaches the Rodha DILR marathon?", a: "The session is taught by Abhishek Sir on Rodha's official YouTube channel." },
    { q: "How many LRDI sets are solved?", a: "The marathon covers eight sets across voting, selection scores, tournaments, elections, ratios, assignments, percentage distributions and grid logic." },
    { q: "Should I watch the complete marathon in one sitting?", a: "No. Most learners will gain more by dividing it into several sessions, attempting each set first and reconstructing the solution afterward." },
    { q: "Is this video enough for CAT 2026 DILR preparation?", a: "It is a useful revision and practice resource, but one video cannot replace regular set practice, sectionals, full mocks and analysis of personal weaknesses." },
    { q: "What is the main skill taught in the marathon?", a: "The central skill is converting dense information into compact tables, grids or flow diagrams and then using constraints to eliminate cases." },
    { q: "Where can I take Rodha CAT mocks?", a: "Rodha's official mock platform is available at mocks.rodha.co.in." },
    { q: "Where can I watch the full DILR session?", a: "The complete session is available at youtube.com/watch?v=3uLFYYeZGAI on Rodha's official channel." }
  ]
};

const href = `/${article.slug}/`;
const previousIndex = priorPages.find((page) => page.slug === "blog");
const index = {
  ...previousIndex,
  sections: previousIndex.sections.map((section) => section.id === "latest-articles"
    ? {
        ...section,
        table: {
          ...section.table,
          rows: [
            [article.title, article.description, { label: "Read article", href }],
            ...section.table.rows.filter((row) => row[2]?.href !== href)
          ]
        }
      }
    : section)
};

module.exports = [index, article, ...priorPages.filter((page) => page.slug !== "blog")];
