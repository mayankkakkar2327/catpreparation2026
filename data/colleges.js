const iimColleges = [
  ["IIM Ahmedabad", "Ahmedabad", "MBA/PGP", "CAT", "CAT score, academic profile, AWT and PI as per official admission criteria.", "Official admission criteria, fee pages and placement reports should be checked on iima.ac.in.", "https://www.iima.ac.in/academics/mba/admissions"],
  ["IIM Bangalore", "Bangalore", "MBA/PGP", "CAT", "CAT score, academics, work experience and interview process as per IIMB admission policy.", "Verify programme fee, batch profile and placement report on iimb.ac.in.", "https://www.iimb.ac.in/programmes/pgp"],
  ["IIM Calcutta", "Kolkata", "MBA", "CAT", "CAT-based shortlisting followed by institute-specific admission criteria.", "Use the official MBA admissions and placement pages on iimcal.ac.in for latest figures.", "https://www.iimcal.ac.in/programs/pgp/admissions"],
  ["IIM Lucknow", "Lucknow", "PGP/MBA", "CAT", "CAT, academics, diversity, work experience and interview-stage evaluation as per IIML policy.", "Check iiml.ac.in for current fees, selection policy and placement reports.", "https://www.iiml.ac.in/programmes/post-graduate-programme"],
  ["IIM Kozhikode", "Kozhikode", "PGP/MBA", "CAT", "CAT-based admission with institute-specific shortlisting and final selection weights.", "Verify latest admission policy, fees and placement reports on iimk.ac.in.", "https://iimk.ac.in/academic-programmes/pgp"],
  ["IIM Indore", "Indore", "PGP/MBA", "CAT", "CAT score and academic profile are central to IIM Indore's admission process.", "Use iimidr.ac.in for official PGP admission, fee and placement data.", "https://www.iimidr.ac.in/academic-programmes/post-graduate-program-in-management/"],
  ["IIM Mumbai", "Mumbai", "MBA", "CAT", "CAT-based MBA admission after NITIE's transition to IIM Mumbai.", "Confirm programme-specific eligibility, fees and placement reports on iimmumbai.ac.in.", "https://iimmumbai.ac.in/"],
  ["IIM Shillong", "Shillong", "PGP/MBA", "CAT", "Admission uses CAT and IIM Shillong's published shortlisting/final selection rules.", "Check iimshillong.ac.in for exact fees, seats and placements.", "https://www.iimshillong.ac.in/"],
  ["IIM Rohtak", "Rohtak", "PGP/MBA", "CAT", "CAT-based admissions with institute-specific eligibility, shortlist and interview process.", "Verify latest admission and placement information on iimrohtak.ac.in.", "https://www.iimrohtak.ac.in/"],
  ["IIM Ranchi", "Ranchi", "MBA", "CAT", "CAT scores are used with profile and interview-stage parameters.", "Use iimranchi.ac.in for official MBA admission, fee and placement details.", "https://iimranchi.ac.in/"],
  ["IIM Raipur", "Raipur", "MBA", "CAT", "CAT-based admission through IIM Raipur's published selection criteria.", "Confirm fees, seats and placements on iimraipur.ac.in.", "https://iimraipur.ac.in/"],
  ["IIM Tiruchirappalli", "Tiruchirappalli", "PGPM/MBA", "CAT", "CAT scores, profile and interview-stage performance are used as per admission policy.", "Verify official fee and placement details on iimtrichy.ac.in.", "https://www.iimtrichy.ac.in/"],
  ["IIM Udaipur", "Udaipur", "MBA", "CAT", "Admission is CAT-led with profile and interview evaluation as per IIMU policy.", "Check iimu.ac.in for latest MBA fees, admission criteria and placements.", "https://www.iimu.ac.in/"],
  ["IIM Kashipur", "Kashipur", "MBA", "CAT", "CAT-based admission with institute-specific shortlisting and selection rules.", "Use iimkashipur.ac.in for official admission and placement data.", "https://www.iimkashipur.ac.in/"],
  ["IIM Nagpur", "Nagpur", "MBA", "CAT", "CAT is used for MBA shortlisting with additional profile and interview-stage criteria.", "Verify details on iimnagpur.ac.in before quoting fees or placements.", "https://www.iimnagpur.ac.in/"],
  ["IIM Visakhapatnam", "Visakhapatnam", "PGP/MBA", "CAT", "CAT-based admission with institute-specific eligibility and selection process.", "Check iimv.ac.in for current admissions, fees and placement reports.", "https://www.iimv.ac.in/"],
  ["IIM Amritsar", "Amritsar", "MBA", "CAT", "CAT-led selection process for the flagship MBA programme.", "Use iimamritsar.ac.in for latest official admission and placement data.", "https://iimamritsar.ac.in/"],
  ["IIM Bodh Gaya", "Bodh Gaya", "MBA", "CAT", "CAT-based admission with profile and interview-stage assessment.", "Verify admission policy, fee and placements on iimbg.ac.in.", "https://iimbg.ac.in/"],
  ["IIM Jammu", "Jammu", "MBA", "CAT", "CAT is the primary entrance test for flagship MBA admission.", "Confirm latest details on iimj.ac.in.", "https://www.iimj.ac.in/"],
  ["IIM Sambalpur", "Sambalpur", "MBA", "CAT", "CAT-based admission with institute-specific selection criteria.", "Use iimsambalpur.ac.in for official fee, admission and placement data.", "https://iimsambalpur.ac.in/"],
  ["IIM Sirmaur", "Sirmaur", "MBA", "CAT", "CAT-based admission for the flagship MBA programme.", "Check iimsirmaur.ac.in for official admissions, fees and placement reports.", "https://www.iimsirmaur.ac.in/"]
];

const nonIimColleges = [
  ["FMS Delhi", "Delhi", "University department", "MBA", "CAT", "CAT-based shortlisting followed by FMS/University of Delhi admission criteria.", "Strong ROI institute; verify official fees and admissions on fms.edu.", "https://www.fms.edu/"],
  ["XLRI Jamshedpur", "Jamshedpur", "Private", "PGDM BM/HRM", "XAT", "XAT-led admission with institute-specific profile and interview process.", "Premier XAT institute; verify fees and placements on xlri.ac.in.", "https://xlri.ac.in/"],
  ["SPJIMR Mumbai", "Mumbai", "Private", "PGDM/BM", "CAT, GMAT", "Profile-based and score-based shortlisting with interviews as per SPJIMR policy.", "Verify official admissions, fees and placement reports on spjimr.org.", "https://www.spjimr.org/"],
  ["MDI Gurgaon", "Gurgaon", "Private", "PGDM", "CAT", "CAT-based PGDM admission with MDI's published shortlisting process.", "Verify programme fee and placement report on mdi.ac.in.", "https://www.mdi.ac.in/"],
  ["IIFT Delhi", "Delhi", "Deemed university", "MBA IB", "CAT", "MBA International Business admission uses CAT as per current official admission route.", "Check iift.ac.in for exact admission cycle, fee and placement report.", "https://www.iift.ac.in/"],
  ["IIT Delhi DMS", "Delhi", "IIT department", "MBA", "CAT", "CAT-based MBA admission through IIT Delhi's Department of Management Studies.", "Verify DMS IIT Delhi admissions, fees and placement reports officially.", "https://dms.iitd.ac.in/"],
  ["IIT Bombay SJMSOM", "Mumbai", "IIT department", "MBA", "CAT", "CAT-based admission with IIT Bombay's MBA selection process.", "Check sjmsom.iitb.ac.in for latest admission and placement data.", "https://www.sjmsom.iitb.ac.in/"],
  ["IIT Kharagpur VGSoM", "Kharagpur", "IIT department", "MBA", "CAT", "CAT-led MBA admission through Vinod Gupta School of Management.", "Verify official VGSoM admission and placement sources.", "https://som.iitkgp.ac.in/"],
  ["IIT Madras DoMS", "Chennai", "IIT department", "MBA", "CAT", "CAT-based admission through Department of Management Studies, IIT Madras.", "Check doms.iitm.ac.in for official admission and placement details.", "https://doms.iitm.ac.in/"],
  ["IIT Roorkee DoMS", "Roorkee", "IIT department", "MBA", "CAT", "CAT-based MBA admission through IIT Roorkee DoMS.", "Verify current selection criteria and placement report on iitr.ac.in/doms.", "https://doms.iitr.ac.in/"],
  ["SIBM Pune", "Pune", "Private", "MBA", "SNAP", "SNAP-based admission through Symbiosis International University.", "Verify official SNAP and SIBM Pune admission pages.", "https://www.sibm.edu/"],
  ["NMIMS Mumbai", "Mumbai", "Private", "MBA", "NMAT", "NMAT-based admission for NMIMS management programmes.", "Check nmims.edu and mba.com/nmat for official details.", "https://sbm.nmims.edu/"],
  ["XIM University Bhubaneswar", "Bhubaneswar", "Private university", "MBA BM", "XAT, CAT, GMAT, XGMT", "Admission route varies by programme; XAT and CAT are commonly relevant for MBA aspirants.", "Verify official admission and placement reports on xim.edu.in.", "https://xim.edu.in/"],
  ["IMT Ghaziabad", "Ghaziabad", "Private", "PGDM", "CAT, XAT, GMAT", "PGDM shortlisting uses accepted exam score and profile as per IMT policy.", "Check imt.edu for official fee and placement data.", "https://www.imt.edu/"],
  ["MICA Ahmedabad", "Ahmedabad", "Private", "PGDM-C", "CAT, XAT, GMAT, MICAT", "MICA uses CAT/XAT/GMAT with MICAT and GE-PI for communication-focused management programmes.", "Verify admissions on mica.ac.in.", "https://www.mica.ac.in/"],
  ["Great Lakes Chennai", "Chennai", "Private", "PGPM/PGDM", "CAT, XAT, GMAT, CMAT", "Admission accepts multiple MBA entrance scores depending on programme.", "Verify official admissions and placement reports on greatlakes.edu.in.", "https://www.greatlakes.edu.in/"],
  ["TAPMI Manipal", "Manipal", "Private", "MBA/PGDM", "CAT, XAT, NMAT, GMAT", "Admission considers accepted test score, profile and interview process.", "Check tapmi.edu.in for official admissions, fees and placements.", "https://www.tapmi.edu.in/"],
  ["Goa Institute of Management", "Goa", "Private", "PGDM", "CAT, XAT, CMAT, GMAT", "GIM accepts multiple management entrance exams for PGDM admission.", "Verify official details on gim.ac.in.", "https://gim.ac.in/"],
  ["IRMA Anand", "Anand", "Private", "PGDM RM", "CAT, XAT, CMAT", "IRMA is relevant for rural management and accepts major MBA entrance scores as per cycle.", "Check irma.ac.in for current admissions and placement data.", "https://www.irma.ac.in/"],
  ["FORE School of Management", "Delhi", "Private", "PGDM", "CAT, XAT, GMAT", "Admission is based on accepted exam score and selection process.", "Verify official sources on fsm.ac.in.", "https://www.fsm.ac.in/"],
  ["IMI New Delhi", "Delhi", "Private", "PGDM", "CAT, XAT, GMAT", "Admission uses accepted test score, profile and interview-stage evaluation.", "Check imi.edu for official admission and placement data.", "https://www.imi.edu/"],
  ["K J Somaiya Institute of Management", "Mumbai", "Private", "MBA", "CAT, XAT, NMAT, CMAT, GMAT", "K J Somaiya accepts multiple MBA entrance scores as per programme cycle.", "Verify official admissions and fee data on somaiya.edu.", "https://kjsim.somaiya.edu/"],
  ["JBIMS Mumbai", "Mumbai", "Public", "MMS/MBA", "MAH MBA CET, CAT, CMAT", "Admission routes depend on Maharashtra CET/CAP and applicable all-India seats.", "Verify official admission route through JBIMS/Maharashtra CET Cell.", "https://jbims.edu/"],
  ["BITS Pilani MBA", "Pilani", "Private university", "MBA", "CAT, XAT, GMAT", "Relevant for MBA aspirants comparing non-IIM options with major management entrance scores.", "Check bits-pilani.ac.in for official programme and admission details.", "https://www.bits-pilani.ac.in/"],
  ["BIMTECH Greater Noida", "Greater Noida", "Private", "PGDM", "CAT, XAT, CMAT, GMAT", "Admission uses accepted entrance test score and institute selection process.", "Verify official data on bimtech.ac.in.", "https://www.bimtech.ac.in/"]
];

const colleges = [
  ...iimColleges.map(([name, city, flagship, accepted, admissionRoute, dataStatus, sourceUrl]) => ({
    name,
    slug: name.toLowerCase().replaceAll(".", "").replaceAll(" ", "-"),
    type: "IIM",
    city,
    flagship,
    acceptedExams: accepted.split(", "),
    admissionRoute,
    summary: `${name} is an Indian Institute of Management where the flagship MBA/PGP admission route is anchored around CAT and institute-specific selection criteria.`,
    feeNote: "Fees change by batch and programme; verify from the official admissions or fee page.",
    placementNote: "Use the latest official placement report before quoting average, median or highest CTC.",
    dataStatus,
    sourceUrl
  })),
  ...nonIimColleges.map(([name, city, type, flagship, accepted, admissionRoute, dataStatus, sourceUrl]) => ({
    name,
    slug: name.toLowerCase().replaceAll(".", "").replaceAll(" ", "-"),
    type,
    city,
    flagship,
    acceptedExams: accepted.split(", "),
    admissionRoute,
    summary: `${name} is a relevant top MBA college for aspirants comparing IIMs with strong non-IIM options through ${accepted}.`,
    feeNote: "Fees should be verified from the official programme brochure or admissions page.",
    placementNote: "Placement numbers should be taken only from official placement reports or audited institute releases.",
    dataStatus,
    sourceUrl
  }))
];

module.exports = colleges;
