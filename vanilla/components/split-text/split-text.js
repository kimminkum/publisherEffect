/**
 * Split Text Animation (Vanilla JS)
 * 텍스트를 글자/단어/줄 단위로 분리하여 애니메이션
 */

class SplitText {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      animation: options.animation || "fade-up",
      staggerDelay: options.staggerDelay || 50,
      splitBy: options.splitBy || "char",
      triggerOnce:
        options.triggerOnce !== undefined ? options.triggerOnce : true,
      ...options
    };

    this.originalText = element.textContent;
    this.hasAnimated = false;
    this.init();
  }

  init() {
    this.element.classList.add(
      "split-text",
      `split-text-${this.options.animation}`
    );
    this.splitContent();
    this.setupIntersectionObserver();
  }

  splitContent() {
    let html = "";

    if (this.options.splitBy === "char") {
      const chars = this.originalText.split("");
      chars.forEach((char, index) => {
        const displayChar = char === " " ? "&nbsp;" : char;
        html += `<span class="split-char" style="animation-delay: ${index *
          this.options.staggerDelay}ms">${displayChar}</span>`;
      });
    } else if (this.options.splitBy === "word") {
      const words = this.originalText.split(" ");
      words.forEach((word, index) => {
        html += `<span class="split-word" style="animation-delay: ${index *
          this.options.staggerDelay}ms">${word}</span>`;
        if (index < words.length - 1) html += "&nbsp;";
      });
    } else {
      // line
      const lines = this.originalText.split("\n");
      lines.forEach((line, index) => {
        html += `<div class="split-line" style="animation-delay: ${index *
          this.options.staggerDelay}ms">${line}</div>`;
      });
    }

    this.element.innerHTML = html;
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (
            entry.isIntersecting &&
            (!this.hasAnimated || !this.options.triggerOnce)
          ) {
            this.animate();
            if (this.options.triggerOnce) {
              this.hasAnimated = true;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.element);
    this.observer = observer;
  }

  animate() {
    const elements = this.element.querySelectorAll(
      ".split-char, .split-word, .split-line"
    );
    elements.forEach(el => el.classList.add("animate"));
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.element.textContent = this.originalText;
    this.element.className = "";
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = SplitText;
}
