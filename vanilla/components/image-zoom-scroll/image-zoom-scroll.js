/**
 * ImageZoomScroll - Vanilla JavaScript
 * 스크롤 시 이미지가 확대되고 오버레이가 나타나는 효과
 */
class ImageZoomScroll {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("ImageZoomScroll container not found");
      return;
    }

    this.options = {
      imageSrc: options.imageSrc || "",
      imageAlt: options.imageAlt || "",
      initialScale: options.initialScale || 0.5,
      finalScale: options.finalScale || 1,
      showDimOverlay:
        options.showDimOverlay !== undefined ? options.showDimOverlay : true,
      dimOpacity: options.dimOpacity || 0.6,
      overlayContent: options.overlayContent || null
    };

    this.scale = this.options.initialScale;
    this.overlayOpacity = 0;
    this.contentOpacity = 0;

    this.init();
  }

  init() {
    this.setupHTML();
    this.attachScrollListener();
    this.updateEffect();
  }

  setupHTML() {
    this.container.classList.add("image-zoom-scroll");

    this.container.innerHTML = `
      <div class="image-zoom-scroll-inner">
        <div class="image-zoom-scroll-image" 
             style="background-image: url(${this.options.imageSrc})"
             role="img"
             aria-label="${this.options.imageAlt}">
        </div>
        ${this.options.showDimOverlay
          ? '<div class="image-zoom-scroll-overlay"></div>'
          : ""}
        ${this.options.overlayContent
          ? `<div class="image-zoom-scroll-content">${this.options
              .overlayContent}</div>`
          : ""}
      </div>
    `;

    this.imageElement = this.container.querySelector(
      ".image-zoom-scroll-image"
    );
    this.overlayElement = this.container.querySelector(
      ".image-zoom-scroll-overlay"
    );
    this.contentElement = this.container.querySelector(
      ".image-zoom-scroll-content"
    );
  }

  calculateProgress() {
    const rect = this.container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight;
    const end = 0;
    const current = rect.top;

    let progress = 0;
    if (current <= start && current >= end) {
      progress = 1 - current / start;
    } else if (current < end) {
      progress = 1;
    }

    return progress;
  }

  updateEffect() {
    const progress = this.calculateProgress();

    // Update scale
    this.scale =
      this.options.initialScale +
      (this.options.finalScale - this.options.initialScale) * progress;
    this.imageElement.style.transform = `scale(${this.scale})`;

    // Update overlay opacity (이미지가 다 채워진 후 시작: progress >= 0.9)
    if (this.options.showDimOverlay && this.overlayElement) {
      const overlayProgress = Math.max(0, Math.min(1, (progress - 0.9) * 10));
      this.overlayOpacity = overlayProgress * this.options.dimOpacity;
      this.overlayElement.style.opacity = this.overlayOpacity;
    }

    // Update content opacity (딤이 완료된 후 나타남)
    if (this.options.overlayContent && this.contentElement) {
      const contentProgress = Math.max(0, Math.min(1, (progress - 0.95) * 20));
      this.contentOpacity = contentProgress;
      this.contentElement.style.opacity = this.contentOpacity;
    }
  }

  attachScrollListener() {
    this.scrollHandler = () => this.updateEffect();
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
  module.exports = ImageZoomScroll;
}
