/**
 * Morphing Blob (Vanilla JS)
 * 유동적으로 변하는 SVG 배경 도형
 */

class MorphingBlob {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      size: options.size || 400,
      colors: options.colors || ["#667eea", "#764ba2", "#f093fb"],
      speed: options.speed || 20,
      blur: options.blur || 40,
      ...options
    };

    this.angle = 0;
    this.init();
  }

  init() {
    this.element.classList.add("morphing-blob-container");
    this.render();
    this.animate();
  }

  render() {
    const gradientId = `blob-gradient-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    const gradientStops = this.options.colors
      .map((color, index) => {
        const offset = index / (this.options.colors.length - 1) * 100;
        return `<stop offset="${offset}%" stop-color="${color}" />`;
      })
      .join("");

    this.element.innerHTML = `
      <svg
        class="morphing-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style="width: ${this.options.size}px; height: ${this.options.size}px;"
      >
        <defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
            ${gradientStops}
          </linearGradient>
          <filter id="blob-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="${this.options
              .blur / 10}" />
          </filter>
        </defs>
        <path
          class="blob-path"
          fill="url(#${gradientId})"
          filter="url(#blob-blur)"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.4,76.2C27,83.4,13.5,85.2,-0.9,86.9C-15.3,88.6,-30.6,90.2,-43.8,83.8C-57,77.4,-68.1,63,-75.6,47.1C-83.1,31.2,-87,13.8,-86.2,-3.4C-85.4,-20.6,-79.9,-37.6,-70.7,-51.8C-61.5,-66,-48.6,-77.4,-34.1,-84.3C-19.6,-91.2,-3.6,-93.6,10.7,-89.2C25,-84.8,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    `;

    this.blobPath = this.element.querySelector(".blob-path");
  }

  animate() {
    const update = () => {
      this.angle += 0.005 * (this.options.speed / 10);

      const x = Math.sin(this.angle) * 30;
      const y = Math.cos(this.angle * 1.2) * 30;
      const scale = 1 + Math.sin(this.angle * 0.5) * 0.1;
      const rotate = this.angle * 20;

      if (this.blobPath) {
        this.blobPath.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`;
      }

      this.animationFrame = requestAnimationFrame(update);
    };

    update();
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.element.innerHTML = "";
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = MorphingBlob;
}
