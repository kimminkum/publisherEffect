/**
 * StickyImageZoom - Vanilla JavaScript
 * 섹션에 걸리면 스크롤로 이미지가 확대되고 텍스트가 나타나는 효과
 */
class StickyImageZoom {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("StickyImageZoom container not found");
      return;
    }

    this.options = {
      imageSrc: options.imageSrc || "",
      imageAlt: options.imageAlt || "",
      initialScale: options.initialScale || 0.1,
      finalScale: options.finalScale || 1,
      showDimOverlay:
        options.showDimOverlay !== undefined ? options.showDimOverlay : true,
      dimOpacity: options.dimOpacity || 0.6,
      overlayContent: options.overlayContent || null,
      textRevealDelay: options.textRevealDelay || 500
    };

    this.scale = this.options.initialScale;
    this.overlayOpacity = 0;
    this.showText = false;

    this.init();
  }

  init() {
    this.setupHTML();
    this.attachScrollListener();
    this.updateEffect();
  }

  setupHTML() {
    this.container.classList.add("sticky-image-zoom");
    this.container.style.height = "300vh";

    this.container.innerHTML = `
      <div class="sticky-image-zoom-wrapper">
        <div class="sticky-image-zoom-image" 
             style="background-image: url(${this.options.imageSrc})"
             role="img"
             aria-label="${this.options.imageAlt}">
        </div>
        ${this.options.showDimOverlay
          ? '<div class="sticky-image-zoom-overlay"></div>'
          : ""}
        ${this.options.overlayContent
          ? `<div class="sticky-image-zoom-content">${this.options
              .overlayContent}</div>`
          : ""}
      </div>
    `;

    this.imageElement = this.container.querySelector(
      ".sticky-image-zoom-image"
    );
    this.overlayElement = this.container.querySelector(
      ".sticky-image-zoom-overlay"
    );
    this.contentElement = this.container.querySelector(
      ".sticky-image-zoom-content"
    );
  }

  updateEffect() {
    const rect = this.container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= 0 && rect.bottom >= windowHeight) {
      const sectionHeight = rect.height - windowHeight;
      const scrolled = Math.abs(rect.top);
      const progress = Math.min(scrolled / sectionHeight, 1);

      if (progress <= 0.7) {
        const scaleProgress = progress / 0.7;
        this.scale =
          this.options.initialScale +
          (this.options.finalScale - this.options.initialScale) * scaleProgress;
        this.imageElement.style.transform = `scale(${this.scale})`;

        if (this.contentElement) {
          this.contentElement.classList.remove("reveal");
        }
      } else if (progress <= 0.85) {
        this.scale = this.options.finalScale;
        this.imageElement.style.transform = `scale(${this.scale})`;

        const dimProgress = (progress - 0.7) / 0.15;
        if (this.options.showDimOverlay && this.overlayElement) {
          this.overlayOpacity = dimProgress * this.options.dimOpacity;
          this.overlayElement.style.opacity = this.overlayOpacity;
        }

        if (dimProgress > 0.3 && this.contentElement && !this.showText) {
          this.showText = true;
          this.contentElement.classList.add("reveal");
        }
      } else {
        this.scale = this.options.finalScale;
        this.imageElement.style.transform = `scale(${this.scale})`;

        if (this.options.showDimOverlay && this.overlayElement) {
          this.overlayElement.style.opacity = this.options.dimOpacity;
        }

        if (this.contentElement && !this.showText) {
          this.showText = true;
          this.contentElement.classList.add("reveal");
        }
      }
    } else if (rect.top > 0) {
      this.scale = this.options.initialScale;
      this.imageElement.style.transform = `scale(${this.scale})`;
      this.overlayOpacity = 0;
      if (this.overlayElement) {
        this.overlayElement.style.opacity = 0;
      }
      this.showText = false;
      if (this.contentElement) {
        this.contentElement.classList.remove("reveal");
      }
    }
  }

  attachScrollListener() {
    this.scrollHandler = () => this.updateEffect();
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
  }

  destroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = StickyImageZoom;
}
