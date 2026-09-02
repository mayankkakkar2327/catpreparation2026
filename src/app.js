(function () {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", () => {
      menu.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  }

  document.querySelectorAll(".coaching-card").forEach((card) => {
    const target = card.querySelector("h3 a")?.getAttribute("href");
    if (!target) return;
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a,button,input,select,textarea")) location.href = target;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") location.href = target;
    });
  });

  const directory = document.querySelector("[data-directory]");
  if (directory) {
    const cards = [...directory.querySelectorAll(".coaching-card")];
    const search = document.querySelector("[data-filter-search]");
    const mode = document.querySelector("[data-filter-mode]");
    const city = document.querySelector("[data-filter-city]");
    const count = document.querySelector("[data-result-count]");
    const update = () => {
      const query = (search?.value || "").trim().toLowerCase();
      const selectedMode = mode?.value || "";
      const selectedCity = city?.value || "";
      let visible = 0;
      cards.forEach((card) => {
        const names = card.dataset.name || "";
        const cardMode = card.dataset.mode || "";
        const cities = card.dataset.cities || "";
        const show = (!query || names.includes(query) || cities.includes(query)) &&
          (!selectedMode || cardMode === selectedMode || (selectedMode === "online" && cities.includes("online"))) &&
          (!selectedCity || cities.includes(selectedCity));
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (count) count.textContent = visible + " shown";
    };
    [search, mode, city].forEach((input) => {
      input?.addEventListener("input", update);
      input?.addEventListener("change", update);
    });
    update();
  }

  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-form-status]");
      const button = form.querySelector("button[type=submit]");
      if (!form.reportValidity()) return;
      status.className = "form-status";
      status.textContent = "Sending your request…";
      button.disabled = true;
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        status.classList.add("success");
        status.textContent = "Thank you. Your request has been received.";
      } catch (error) {
        status.classList.add("error");
        status.textContent = "We could not send this right now. Please email onlinecoaching4u.official@gmail.com.";
      } finally {
        button.disabled = false;
      }
    });
  });
})();

