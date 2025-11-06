/**
 * SectionStacking - Vanilla JavaScript
 * 스크롤 시 섹션이 쌓이는 효과
 */
class SectionStacking {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("SectionStacking container not found");
      return;
    }

    this.options = {
      sectionSelector: options.sectionSelector || ".stacking-section",
      stickyHeight: options.stickyHeight || 0,
      gap: options.gap || 0
    };

    this.init();
  }

  init() {
    this.container.classList.add("section-stacking-container");
    this.sections = this.container.querySelectorAll(
      this.options.sectionSelector
    );

    this.sections.forEach((section, index) => {
      section.classList.add("section-stacking-item");
      section.style.position = "sticky";
      section.style.top = `${this.options.stickyHeight +
        index * this.options.gap}px`;
      section.style.zIndex = this.sections.length - index;
    });
  }

  destroy() {
    this.sections.forEach(section => {
      section.classList.remove("section-stacking-item");
      section.style.position = "";
      section.style.top = "";
      section.style.zIndex = "";
    });
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = SectionStacking;
}
