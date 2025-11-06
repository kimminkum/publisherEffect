/**
 * HorizontalScrollSection - Vanilla JavaScript
 * 세로 스크롤이 가로 스크롤로 전환되는 효과
 */
class HorizontalScrollSection {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("HorizontalScrollSection container not found");
      return;
    }

    this.options = {
      itemSelector: options.itemSelector || ".horizontal-scroll-item"
    };

    this.init();
  }

  init() {
    this.items = this.container.querySelectorAll(this.options.itemSelector);

    if (this.items.length === 0) {
      console.error("No items found");
      return;
    }

    this.setupHTML();
    this.attachScrollListener();
  }

  setupHTML() {
    this.container.classList.add("horizontal-scroll-section");
    this.container.style.height = `${this.items.length * 100}vh`;

    const sticky = document.createElement("div");
    sticky.className = "horizontal-scroll-sticky";

    const scrollContainer = document.createElement("div");
    scrollContainer.className = "horizontal-scroll-container";

    Array.from(this.items).forEach(item => {
      item.classList.add("horizontal-scroll-item");
      scrollContainer.appendChild(item);
    });

    sticky.appendChild(scrollContainer);
    this.container.innerHTML = "";
    this.container.appendChild(sticky);

    this.scrollContainer = scrollContainer;
  }

  updateScroll() {
    const rect = this.container.getBoundingClientRect();
    const scrollWidth = this.scrollContainer.scrollWidth;
    const containerWidth = this.container.clientWidth;
    const maxScroll = scrollWidth - containerWidth;

    if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
      const progress = Math.abs(rect.top) / (rect.height - window.innerHeight);
      const scrollAmount = progress * maxScroll;
      this.scrollContainer.scrollLeft = scrollAmount;
    }
  }

  attachScrollListener() {
    this.scrollHandler = () => this.updateScroll();
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
  }

  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = HorizontalScrollSection;
}
