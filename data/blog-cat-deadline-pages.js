const priorPages = require("./blog-snap-news-pages");

const article = {
  slug: "blog/cat-2026-registration-deadline-extended-september-22",
  title: "CAT 2026 Registration Deadline Extended to September 22: What Applicants Need to Check",
  section: "CAT 2026 News",
  description: "CAT 2026 registration now closes on September 22 at 5 PM IST. See the revised deadline, application checklist, exam date and official portal.",
  answer: "The CAT 2026 registration deadline has moved from September 15 to September 22, 2026, at 5:00 PM IST. Applicants should complete the form and payment through iimcat.ac.in. The exam remains scheduled for November 29, 2026.",
  body: [
    "Applicants who missed the original CAT 2026 registration deadline have another week. The revised closing time is 5:00 PM IST on September 22, 2026, according to reports of the CAT announcement published on September 15. The exam date remains November 29.",
    "This is a change to the application deadline, not a change to the exam itself. If you have already submitted the form and received a successful payment confirmation, you do not need to register again. If your form is still in progress, use the extension to finish it and check the final status in your CAT account."
  ],
  sections: [
    {
      id: "revised-deadline",
      heading: "CAT 2026 revised registration deadline at a glance",
      table: {
        headers: ["Item", "Current position"],
        rows: [
          ["Original registration deadline", "September 15, 2026, 5:00 PM IST"],
          ["Revised registration deadline", "September 22, 2026, 5:00 PM IST"],
          ["Where to apply", "Official CAT portal: iimcat.ac.in"],
          ["CAT 2026 exam date", "November 29, 2026"],
          ["Conducting institute", "IIM Indore"]
        ]
      },
      paragraphs: [
        "The extension adds seven days to the original registration window. It does not imply another extension will follow. Check the date shown in your official CAT account before making any last-minute decision."
      ]
    },
    {
      id: "who-needs-to-act",
      heading: "Who needs to act before September 22?",
      paragraphs: [
        "The extension matters most to candidates who created an account but did not finish the form, uploaded documents but did not pay, or could not complete registration because of a payment or document problem. Creating a login alone is not a completed CAT application.",
        "If you have already paid, sign in once to confirm that the payment and submitted application are reflected correctly. Keep the confirmation page and transaction record. If the dashboard shows an unresolved issue, follow the help instructions on the official portal rather than starting a duplicate application on an unofficial site."
      ],
      list: [
        "New applicant: create an account and complete every form section before paying.",
        "Part-finished application: review saved fields, upload missing documents and submit the fee.",
        "Payment attempted: check the final application status and transaction record in the portal.",
        "Already submitted: retain the confirmation and continue exam preparation."
      ]
    },
    {
      id: "application-checklist",
      heading: "A practical CAT 2026 application checklist",
      paragraphs: [
        "Use the additional week to verify the fields that are hard to correct later. Compare your name, birth date and category with your supporting documents. Recheck Class 10, Class 12 and graduation marks using the marksheets, including any university conversion rule for CGPA. Choose five test-city preferences that you could realistically reach.",
        "Upload a clear recent photograph and signature in the format specified by CAT. Keep the relevant category, EWS or PwD document ready if it applies to you. Before the final payment, review the full application preview; after payment, save proof that submission succeeded."
      ],
      list: [
        "Use an email address and mobile number you will continue to access through result day.",
        "Enter academic percentages using the applicable board or university rules.",
        "Review category and certificate details against the official form instructions.",
        "Check image files before uploading; unreadable files can cause avoidable trouble.",
        "Confirm the completed application in your dashboard after payment."
      ]
    },
    {
      id: "fees-and-date",
      heading: "Fees and what happens next",
      paragraphs: [
        "The CAT 2026 application fee has been reported as Rs. 2,700 for General, EWS and NC-OBC candidates, and Rs. 1,350 for SC, ST and PwD candidates. Verify the amount shown in the CAT portal for your category before paying.",
        "CAT 2026 is scheduled for November 29. A limited edit facility has been reported for selected fields after registration closes, but its dates should be taken only from a new CAT announcement. Do not depend on a future correction window to fix information you can check today."
      ]
    },
    {
      id: "what-to-do-this-week",
      heading: "How to use the extra week",
      paragraphs: [
        "If you are unregistered, finish the form early enough to resolve OTP, upload or payment issues. Then return to your preparation plan. One administrative deadline should not consume the entire week before a competitive exam.",
        "For applicants who have already submitted, the extension does not change the number of days available before CAT. Keep your mock schedule steady, review one recurring weakness in each section and continue comparing colleges with separate application deadlines."
      ]
    },
    {
      id: "sources",
      heading: "Sources",
      paragraphs: [
        "Multiple education newsrooms reported the revised deadline on September 15, 2026. The CAT portal is the authority for the live application status and instructions. The portal could not be independently fetched by our automated check on September 17, so candidates should verify the displayed deadline there before submitting."
      ],
      links: [
        ["Official CAT website", "https://iimcat.ac.in/"],
        ["Careers360 deadline report", "https://news.careers360.com/cat-2026-registration-last-date-extended-september-22-apply-iimcat-ac-in-mba-pg-management-admissions-iim-applications-deadline"],
        ["India Today deadline report", "https://www.indiatoday.in/education-today/news/story/cat-2026-registration-deadline-extended-september-22-exam-date-edit-window-iimcat-ac-in-2994879-2026-09-15"]
      ]
    }
  ],
  related: ["/cat-2026/registration/", "/cat-2026/important-dates/", "/cat-2026/latest-news/", "/cat-preparation/", "/blog/"],
  faqs: [
    { q: "What is the new last date to register for CAT 2026?", a: "The revised deadline is September 22, 2026, at 5:00 PM IST. Apply through the official CAT portal." },
    { q: "Was the CAT 2026 exam postponed?", a: "No exam-date change was announced with the registration extension. CAT 2026 remains scheduled for November 29, 2026." },
    { q: "Do I need to apply again if I already registered?", a: "No. If your application is submitted and payment is confirmed in the CAT dashboard, retain the confirmation and continue preparing." },
    { q: "Does creating a CAT login count as completing registration?", a: "No. The form, required uploads, payment and final submission must be completed successfully." }
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
