/**
 * SVG Path Drawing (Vanilla JS)
 * SVG가 그려지는 애니메이션
 */

class SVGDraw {
  constructor(svg, options = {}) {
    this.svg = typeof svg === "string" ? document.querySelector(svg) : svg;
    this.options = {
      duration: options.duration || 2000,
      delay: options.delay || 0,
      strokeColor: options.strokeColor || null,
      strokeWidth: options.strokeWidth || null,
      triggerOnce:
        options.triggerOnce !== undefined ? options.triggerOnce : true,
      ...options
    };

    this.hasDrawn = false;
    this.init();
  }

  init() {
    if (!this.svg) {
      console.error("SVG element not found");
      return;
    }

    this.svg.classList.add("svg-draw");
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (
            entry.isIntersecting &&
            (!this.hasDrawn || !this.options.triggerOnce)
          ) {
            setTimeout(() => this.draw(), this.options.delay);
            if (this.options.triggerOnce) {
              this.hasDrawn = true;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.svg);
    this.observer = observer;
  }

  draw() {
    const paths = this.svg.querySelectorAll(
      "path, circle, rect, line, polyline, polygon"
    );

    paths.forEach(path => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `svgDraw ${this.options.duration}ms ease forwards`;

      if (this.options.strokeColor) {
        path.style.stroke = this.options.strokeColor;
      }
      if (this.options.strokeWidth) {
        path.setAttribute("stroke-width", this.options.strokeWidth);
      }
    });
  }

  reset() {
    const paths = this.svg.querySelectorAll(
      "path, circle, rect, line, polyline, polygon"
    );
    paths.forEach(path => {
      path.style.strokeDashoffset = path.getTotalLength();
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = SVGDraw;
}
