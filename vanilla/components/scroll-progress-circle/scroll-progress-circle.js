/**
 * Scroll Progress Circle (Vanilla JS)
 * 원형 스크롤 프로그레스
 */

class ScrollProgressCircle {
  constructor(options = {}) {
    this.options = {
      size: options.size || 60,
      strokeWidth: options.strokeWidth || 4,
      color: options.color || "#007aff",
      backgroundColor: options.backgroundColor || "rgba(0, 0, 0, 0.1)",
      position: options.position || "bottom-right",
      showPercentage: options.showPercentage || false,
      ...options
    };

    this.progress = 0;
    this.init();
  }

  init() {
    this.createContainer();
    this.attachScrollListener();
    this.updateProgress();
  }

  createContainer() {
    const {
      size,
      strokeWidth,
      color,
      backgroundColor,
      position,
      showPercentage
    } = this.options;

    this.container = document.createElement("div");
    this.container.className = `scroll-progress-circle scroll-progress-${position}`;

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    this.circumference = circumference;
    this.radius = radius;

    this.container.innerHTML = `
      <svg width="${size}" height="${size}">
        <circle
          cx="${size / 2}"
          cy="${size / 2}"
          r="${radius}"
          fill="none"
          stroke="${backgroundColor}"
          stroke-width="${strokeWidth}"
        />
        <circle
          class="progress-circle"
          cx="${size / 2}"
          cy="${size / 2}"
          r="${radius}"
          fill="none"
          stroke="${color}"
          stroke-width="${strokeWidth}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}"
          stroke-linecap="round"
          transform="rotate(-90 ${size / 2} ${size / 2})"
          style="transition: stroke-dashoffset 0.1s ease"
        />
      </svg>
      ${showPercentage ? '<div class="progress-percentage">0%</div>' : ""}
    `;

    document.body.appendChild(this.container);
    this.circle = this.container.querySelector(".progress-circle");
    this.percentageEl = this.container.querySelector(".progress-percentage");
  }

  attachScrollListener() {
    this.scrollHandler = () => this.updateProgress();
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
  }

  updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollPercent = scrollTop / (documentHeight - windowHeight) * 100;
    this.progress = Math.min(scrollPercent, 100);

    const strokeDashoffset =
      this.circumference - this.progress / 100 * this.circumference;

    if (this.circle) {
      this.circle.style.strokeDashoffset = strokeDashoffset;
    }

    if (this.percentageEl) {
      this.percentageEl.textContent = `${Math.round(this.progress)}%`;
    }
  }

  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = ScrollProgressCircle;
}
