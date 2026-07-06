(function () {
  document.querySelectorAll(".brand-mark").forEach((mark) => {
    mark.textContent = "CAT26";
  });

  document.querySelectorAll(".brand > span:not(.brand-mark)").forEach((item) => {
    item.remove();
  });

  document.querySelectorAll("a").forEach((link) => {
    const text = link.textContent.trim();
    if (text === "Explore CAT coaching") {
      link.textContent = "Explore Coaching";
    }
    if (text === "CAT Mocks" && link.href === "https://www.rodha.co.in/") {
      link.href = "https://mocks.rodha.co.in/";
    }
  });

  if (window.location.pathname === "/about/" || window.location.pathname === "/about") {
    const prose = document.querySelector(".prose");
    if (prose) {
      prose.innerHTML = `
        <p class="eyebrow">About CATPreparation2026</p>
        <h1>About CATPreparation2026</h1>
        <p>CATPreparation2026 is an independent education platform for CAT 2026 aspirants in India. The platform helps students research CAT preparation, online and offline coaching options, IIM admissions, MBA entrance exams, and top MBA colleges in one structured place.</p>
        <h2>What we cover</h2>
        <p>We publish CAT 2026 guides, syllabus and pattern explainers, preparation strategy, mock-test guidance, city-wise coaching listings, IIM admission information, MBA college comparisons, and latest MBA entrance exam updates.</p>
        <h2>Who this platform is for</h2>
        <p>This site is built for college students, working professionals, repeat CAT takers, and MBA aspirants who want clear comparison-led information before choosing coaching, mocks, colleges, or exam plans.</p>
        <h2>How we structure information</h2>
        <p>Pages are written in a direct answer-first format with tables, FAQs, official links where useful, and clean internal linking so that students, search engines, and AI assistants can understand the content easily.</p>
        <h2>Our goal</h2>
        <p>The goal of CATPreparation2026 is to become a serious, easy-to-cite CAT and MBA preparation resource that helps aspirants make better decisions with less confusion.</p>
      `;
    }
  }

  const directory = document.querySelector("[data-directory]");
  if (!directory) return;

  const cards = Array.from(directory.querySelectorAll(".coaching-card"));
  const search = document.querySelector("[data-filter-search]");
  const mode = document.querySelector("[data-filter-mode]");
  const city = document.querySelector("[data-filter-city]");
  const fee = document.querySelector("[data-filter-fee]");
  const feeLabel = document.querySelector("[data-fee-label]");
  const count = document.querySelector("[data-result-count]");

  function update() {
    const query = (search?.value || "").trim().toLowerCase();
    const selectedMode = mode?.value || "";
    const selectedCity = city?.value || "";
    const maxFee = Number(fee?.value || 80000);
    let visible = 0;

    cards.forEach((card) => {
      const name = card.dataset.name || "";
      const cardMode = card.dataset.mode || "";
      const cities = card.dataset.cities || "";
      const startsAt = Number(card.dataset.fee || 0);
      const show = (!query || name.includes(query) || cities.includes(query)) &&
        (!selectedMode || cardMode === selectedMode || (selectedMode === "online" && cities.includes("online"))) &&
        (!selectedCity || cities.includes(selectedCity)) && startsAt <= maxFee;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (feeLabel) feeLabel.textContent = `Up to Rs ${maxFee.toLocaleString("en-IN")}`;
    if (count) count.textContent = `${visible} shown`;
  }

  [search, mode, city, fee].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", update);
    input.addEventListener("change", update);
  });
  update();
})();
