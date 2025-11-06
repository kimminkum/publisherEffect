/**
 * CurtainReveal - Vanilla JavaScript
 * 좌우에서 커튼이 열리듯 이미지가 나타나는 효과
 */
class CurtainReveal {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("CurtainReveal container not found");
      return;
    }

    this.options = {
      imageSrc: options.imageSrc || "",
      imageAlt: options.imageAlt || "",
      curtainColor: options.curtainColor || "#ffffff",
      triggerOffset: options.triggerOffset || 0
    };

    this.hasRevealed = false;
    this.init();
  }

  init() {
    this.setupHTML();
    this.setupObserver();
  }

  setupHTML() {
    this.container.classList.add("curtain-reveal");

    this.container.innerHTML = `
      <img src="${this.options.imageSrc}" 
           alt="${this.options.imageAlt}" 
           class="curtain-image">
      <div class="curtain curtain-left" style="background: ${this.options
        .curtainColor}"></div>
      <div class="curtain curtain-right" style="background: ${this.options
        .curtainColor}"></div>
    `;
  }

  setupObserver() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasRevealed) {
            this.container.classList.add("revealed");
            this.hasRevealed = true;
            this.observer.unobserve(this.container);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: `${this.options.triggerOffset}px`
      }
    );

    this.observer.observe(this.container);
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = CurtainReveal;
}
