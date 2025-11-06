/**
 * ScrollProgress - Vanilla JavaScript Scroll Progress Indicator
 * 스크롤 진행도를 표시하는 컴포넌트
 */
class ScrollProgress {
  constructor(options = {}) {
    this.options = {
      position: options.position || "top",
      height: options.height || 4,
      color: options.color || "#007aff",
      backgroundColor: options.backgroundColor || "rgba(0, 0, 0, 0.1)",
      container: options.container || null
    };

    this.progressBar = null;
    this.init();
  }

  init() {
    this.createProgressBar();
    this.attachScrollListener();
    this.updateProgress();
  }

  createProgressBar() {
    const container = document.createElement("div");
    container.className = `scroll-progress scroll-progress-${this.options
      .position}`;
    container.style.cssText = `
      position: fixed;
      ${this.options.position}: 0;
      left: 0;
      width: 100%;
      height: ${this.options.height}px;
      background-color: ${this.options.backgroundColor};
      z-index: 9999;
    `;

    const bar = document.createElement("div");
    bar.className = "scroll-progress-bar";
    bar.style.cssText = `
      height: 100%;
      width: 0%;
      background-color: ${this.options.color};
      transition: width 0.1s ease-out;
    `;

    container.appendChild(bar);

    if (this.options.container) {
      const targetContainer =
        typeof this.options.container === "string"
          ? document.querySelector(this.options.container)
          : this.options.container;
      targetContainer.appendChild(container);
    } else {
      document.body.appendChild(container);
    }

    this.progressBar = bar;
    this.container = container;
  }

  calculateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const totalScroll = documentHeight - windowHeight;
    const currentProgress = scrollTop / totalScroll * 100;

    return Math.min(Math.max(currentProgress, 0), 100);
  }

  updateProgress() {
    const progress = this.calculateProgress();
    this.progressBar.style.width = `${progress}%`;
  }

  attachScrollListener() {
    this.scrollHandler = () => this.updateProgress();
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
  }

  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
    if (this.container) {
      this.container.remove();
    }
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = ScrollProgress;
}
