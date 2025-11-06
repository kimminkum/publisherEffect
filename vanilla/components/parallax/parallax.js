/**
 * Parallax - Vanilla JavaScript
 * 패럴랙스 스크롤 효과
 */
class Parallax {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("Parallax container not found");
      return;
    }

    this.options = {
      speed: options.speed !== undefined ? options.speed : 0.5,
      direction: options.direction || "vertical"
    };

    this.offset = 0;
    this.init();
  }

  init() {
    this.container.classList.add("parallax-container");

    // Wrap content if not already wrapped
    if (!this.container.querySelector(".parallax-content")) {
      const content = document.createElement("div");
      content.className = "parallax-content";
      content.innerHTML = this.container.innerHTML;
      this.container.innerHTML = "";
      this.container.appendChild(content);
    }

    this.contentElement = this.container.querySelector(".parallax-content");
    this.attachScrollListener();
    this.updateParallax();
  }

  calculateOffset() {
    const rect = this.container.getBoundingClientRect();
    const scrollY = window.pageYOffset;
    const elementTop = rect.top + scrollY;
    const windowHeight = window.innerHeight;

    const relativeScroll = scrollY + windowHeight / 2 - elementTop;
    return relativeScroll * this.options.speed;
  }

  updateParallax() {
    this.offset = this.calculateOffset();

    const transform =
      this.options.direction === "vertical"
        ? `translateY(${this.offset}px)`
        : `translateX(${this.offset}px)`;

    this.contentElement.style.transform = transform;
  }

  attachScrollListener() {
    this.scrollHandler = () => this.updateParallax();
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    window.addEventListener("resize", this.scrollHandler, { passive: true });
  }

  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.scrollHandler);
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = Parallax;
}
