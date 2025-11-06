/**
 * SmoothScroll - Vanilla JavaScript
 * 부드러운 스크롤 효과
 */
class SmoothScroll {
  constructor(options = {}) {
    this.options = {
      selector: options.selector || 'a[href^="#"]',
      duration: options.duration || 800,
      offset: options.offset || 0,
      easing: options.easing || "easeInOutCubic"
    };

    this.easings = {
      linear: t => t,
      easeInQuad: t => t * t,
      easeOutQuad: t => t * (2 - t),
      easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
      easeInCubic: t => t * t * t,
      easeOutCubic: t => --t * t * t + 1,
      easeInOutCubic: t =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    };

    this.init();
  }

  init() {
    const links = document.querySelectorAll(this.options.selector);

    links.forEach(link => {
      link.addEventListener("click", e => {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
          const target = document.querySelector(href);

          if (target) {
            e.preventDefault();
            this.scrollTo(target);
          }
        }
      });
    });
  }

  scrollTo(target) {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - this.options.offset;
    const startTime = performance.now();

    const animate = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easing =
        this.easings[this.options.easing] || this.easings.easeInOutCubic;
      const position = startPosition + distance * easing(progress);

      window.scrollTo(0, position);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}

// Auto-init
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("[data-smooth-scroll]")) {
    new SmoothScroll();
  }
});

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = SmoothScroll;
}
