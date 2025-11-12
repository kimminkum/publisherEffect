/**
 * Image Reveal (Vanilla JS)
 * 이미지가 드러나는 효과
 */

class ImageReveal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      direction: options.direction || "left",
      duration: options.duration || 1000,
      delay: options.delay || 0,
      ...options
    };

    this.hasRevealed = false;
    this.init();
  }

  init() {
    this.element.classList.add(
      "image-reveal",
      `image-reveal-${this.options.direction}`
    );
    this.element.style.animationDuration = `${this.options.duration}ms`;
    this.element.style.animationDelay = `${this.options.delay}ms`;

    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasRevealed) {
            this.element.classList.add("revealed");
            this.hasRevealed = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.element);
    this.observer = observer;
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = ImageReveal;
}
