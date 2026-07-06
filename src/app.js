(function () {
  document.querySelectorAll(".brand-mark").forEach((mark) => {
    mark.textContent = "CP";
  });

  document.querySelectorAll("a").forEach((link) => {
    if (link.textContent.trim() === "Explore CAT coaching") {
      link.textContent = "Explore Coaching";
    }
  });

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
