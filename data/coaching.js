const coachings = [
  {
    id: "ims",
    name: "IMS",
    slug: "ims",
    mode: "hybrid",
    cities: ["mumbai", "delhi", "bangalore", "pune", "hyderabad", "kolkata", "chennai"],
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 18000,
    feeMax: 65000,
    rating: 4.3,
    reviewCount: 128,
    summary:
      "A long-running MBA entrance preparation institute with classroom, online, mock test, and mentoring options across major Indian cities.",
    bestFor: ["Structured classroom preparation", "Mock analysis", "MBA admissions mentoring"],
    pros: ["Wide city presence", "Established CAT material", "Strong test-series ecosystem"],
    cons: ["Pricing and mentor quality can vary by center", "Batch experience depends on local faculty"],
    features: ["CAT mocks", "Sectional tests", "GD-PI support", "Online learning portal"],
    lastVerifiedAt: "Needs source verification",
    sourceUrls: ["Official institute website", "Center pages", "Course brochures"]
  },
  {
    id: "time",
    name: "T.I.M.E.",
    slug: "time",
    mode: "hybrid",
    cities: ["delhi", "mumbai", "bangalore", "hyderabad", "chennai", "kolkata", "ahmedabad", "pune"],
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 20000,
    feeMax: 70000,
    rating: 4.2,
    reviewCount: 146,
    summary:
      "A national CAT preparation brand known for classroom programs, AIMCAT mock tests, and MBA entrance preparation across multiple exams.",
    bestFor: ["Mock-heavy preparation", "Students wanting national benchmark tests", "Multi-exam MBA prep"],
    pros: ["Large offline network", "Popular mock test series", "Coverage beyond CAT"],
    cons: ["Large batches in some centers", "Offline experience may differ by branch"],
    features: ["AIMCATs", "Classroom courses", "Online tests", "MBA exam coverage"],
    lastVerifiedAt: "Needs source verification",
    sourceUrls: ["Official institute website", "Center pages", "Course brochures"]
  },
  {
    id: "career-launcher",
    name: "Career Launcher",
    slug: "career-launcher",
    mode: "hybrid",
    cities: ["delhi", "mumbai", "bangalore", "pune", "kolkata", "lucknow", "jaipur"],
    courseTypes: ["classroom", "online", "test-series", "gd-pi"],
    feeMin: 16000,
    feeMax: 68000,
    rating: 4.1,
    reviewCount: 119,
    summary:
      "A test-prep company offering CAT classroom programs, online courses, mocks, and MBA admissions support.",
    bestFor: ["Online plus offline flexibility", "Exam strategy sessions", "Students comparing multiple MBA exams"],
    pros: ["Recognized national brand", "Good range of course formats", "Useful exam analysis content"],
    cons: ["Course quality can depend on faculty and center", "Exact fee information needs local verification"],
    features: ["CAT mocks", "Live online classes", "Classroom batches", "Admissions support"],
    lastVerifiedAt: "Needs source verification",
    sourceUrls: ["Official institute website", "Center pages", "Course brochures"]
  },
  {
    id: "elites-grid",
    name: "Elites Grid",
    slug: "elites-grid",
    mode: "online",
    cities: ["online"],
    courseTypes: ["online", "test-series"],
    feeMin: 12000,
    feeMax: 45000,
    rating: 4.4,
    reviewCount: 84,
    summary:
      "An online-first CAT preparation option known among aspirants for live classes, doubt solving, and exam-focused preparation.",
    bestFor: ["Online CAT preparation", "Students outside metro cities", "Flexible study schedules"],
    pros: ["Online-first delivery", "Useful for remote learners", "Focused CAT programs"],
    cons: ["No offline center network", "Peer group experience depends on online engagement"],
    features: ["Live classes", "Recorded sessions", "Doubt support", "Mock guidance"],
    lastVerifiedAt: "Needs source verification",
    sourceUrls: ["Official institute website", "Course pages"]
  },
  {
    id: "rodha",
    name: "Rodha",
    slug: "rodha",
    mode: "online",
    cities: ["online"],
    courseTypes: ["online", "quant", "dilr", "varc"],
    feeMin: 8000,
    feeMax: 40000,
    rating: 4.5,
    reviewCount: 92,
    summary:
      "An online CAT preparation platform with section-focused courses and a strong aspirant following for concept-based preparation.",
    bestFor: ["Online concept building", "Quant and DILR practice", "Self-paced learners"],
    pros: ["Strong online accessibility", "Concept-oriented teaching", "Suitable for non-metro aspirants"],
    cons: ["Limited offline support", "Students need self-discipline for online learning"],
    features: ["Online classes", "Practice sets", "Sectional learning", "Recorded content"],
    lastVerifiedAt: "Needs source verification",
    sourceUrls: ["Official institute website", "Course pages"]
  }
];

module.exports = coachings;
