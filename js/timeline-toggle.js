document.addEventListener("DOMContentLoaded", () => {
  const timelineContainers = document.querySelectorAll(
    ".timeline .container.left, .timeline .container.right",
  );

  timelineContainers.forEach((container, index) => {
    const content = container.querySelector(".content");
    if (!content) {
      return;
    }

    const contentId = `timeline-content-${index + 1}`;
    content.id = contentId;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "timeline-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", contentId);
    toggle.setAttribute("aria-label", "Rozbalit blok");

    container.appendChild(toggle);

    toggle.addEventListener("click", () => {
      const expanded = container.classList.toggle("is-expanded");
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute(
        "aria-label",
        expanded ? "Sbalit blok" : "Rozbalit blok",
      );
    });
  });
});
