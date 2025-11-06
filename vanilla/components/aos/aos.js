/**
 * AOS - Animate On Scroll (Vanilla JavaScript)
 * 스크롤 시 애니메이션을 적용하는 컴포넌트
 */
class AOS {
  constructor(options = {}) {
    this.options = {
      selector: options.selector || "[data-aos]",
      animation: options.animation || "fade-up",
      duration: options.duration || 600,
      delay: options.delay || 0,
      once: options.once !== undefined ? options.once : true,
      offset: options.offset || 0,
      threshold: options.threshold || 0.1
    };

    this.elements = [];
    this.observers = new Map();
    this.init();
  }

  init() {
    this.findElements();
    this.setupObservers();
  }

  findElements() {
    const elements = document.querySelectorAll(this.options.selector);

    elements.forEach(element => {
      const animation =
        element.getAttribute("data-aos") || this.options.animation;
      const duration =
        parseInt(element.getAttribute("data-aos-duration")) ||
        this.options.duration;
      const delay =
        parseInt(element.getAttribute("data-aos-delay")) || this.options.delay;
      const once =
        element.getAttribute("data-aos-once") !== "false" && this.options.once;

      element.classList.add("aos-component", `aos-${animation}`);
      element.style.setProperty("--aos-duration", `${duration}ms`);
      element.style.setProperty("--aos-delay", `${delay}ms`);

      this.elements.push({
        element,
        animation,
        duration,
        delay,
        once
      });
    });
  }

  setupObservers() {
    this.elements.forEach(({ element, once }) => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("aos-animate");

              if (once) {
                observer.unobserve(entry.target);
              }
            } else if (!once) {
              entry.target.classList.remove("aos-animate");
            }
          });
        },
        {
          threshold: this.options.threshold,
          rootMargin: `${this.options.offset}px`
        }
      );

      observer.observe(element);
      this.observers.set(element, observer);
    });
  }

  refresh() {
    this.destroy();
    this.elements = [];
    this.observers.clear();
    this.init();
  }

  destroy() {
    this.observers.forEach((observer, element) => {
      observer.unobserve(element);
    });
    this.observers.clear();
  }
}

// Auto-init if data-aos-init is present
if (document.querySelector("[data-aos-init]")) {
  document.addEventListener("DOMContentLoaded", () => {
    new AOS();
  });
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = AOS;
}
