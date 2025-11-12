/**
 * Smooth Scroll (Vanilla JS)
 * Lenis 스타일의 부드러운 스크롤
 */

class SmoothScroll {
  constructor(options = {}) {
    this.options = {
      speed: options.speed || 1,
      smoothness: options.smoothness || 0.1,
      ...options
    };

    this.scroll = { current: 0, target: 0 };
    this.animationFrame = null;
    this.init();
  }

  init() {
    this.container = document.createElement("div");
    this.container.className = "smooth-scroll-container";

    this.content = document.createElement("div");
    this.content.className = "smooth-scroll-content";

    // Move all body children to content
    while (document.body.firstChild) {
      this.content.appendChild(document.body.firstChild);
    }

    this.container.appendChild(this.content);
    document.body.appendChild(this.container);

    this.attachEventListeners();
    this.updateBodyHeight();
    this.animate();
  }

  attachEventListeners() {
    this.scrollHandler = () => {
      this.scroll.target = window.pageYOffset;
    };

    this.resizeHandler = () => this.updateBodyHeight();

    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    window.addEventListener("resize", this.resizeHandler);
  }

  updateBodyHeight() {
    document.body.style.height = `${this.content.offsetHeight}px`;
  }

  animate() {
    const diff = this.scroll.target - this.scroll.current;
    this.scroll.current += diff * this.options.smoothness * this.options.speed;

    this.content.style.transform = `translateY(-${this.scroll.current}px)`;

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.resizeHandler);
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    document.body.style.height = "";

    // Move content back to body
    while (this.content.firstChild) {
      document.body.appendChild(this.content.firstChild);
    }
    this.container.remove();
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = SmoothScroll;
}
