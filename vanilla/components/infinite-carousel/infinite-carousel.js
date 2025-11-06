/**
 * Infinite Carousel Component (Vanilla JS)
 * 자동 무한 루프 캐러셀
 */

class InfiniteCarousel {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      items: options.items || [],
      speed: options.speed || 30,
      direction: options.direction || "left",
      gap: options.gap || 20,
      pauseOnHover:
        options.pauseOnHover !== undefined ? options.pauseOnHover : true,
      ...options
    };

    this.init();
  }

  init() {
    this.render();
    this.setupAnimation();
  }

  render() {
    const { items, gap, pauseOnHover } = this.options;

    this.container.className = "infinite-carousel";
    this.container.innerHTML = `
      <div class="infinite-carousel-track ${pauseOnHover
        ? "pause-on-hover"
        : ""}" style="gap: ${gap}px">
        ${items
          .map(
            (item, index) => `
          <div class="infinite-carousel-item" key="original-${index}">
            ${item}
          </div>
        `
          )
          .join("")}
        ${items
          .map(
            (item, index) => `
          <div class="infinite-carousel-item" key="clone-${index}">
            ${item}
          </div>
        `
          )
          .join("")}
      </div>
    `;

    this.track = this.container.querySelector(".infinite-carousel-track");
  }

  setupAnimation() {
    const { speed, direction } = this.options;

    // 첫 렌더링 후 실제 너비 계산
    requestAnimationFrame(() => {
      const items = Array.from(this.track.children).slice(
        0,
        this.options.items.length
      );
      const totalWidth = items.reduce((sum, item) => {
        return sum + item.offsetWidth + this.options.gap;
      }, 0);

      // CSS 변수 설정
      this.track.style.setProperty("--scroll-width", `${totalWidth}px`);
      this.track.style.setProperty("--scroll-speed", `${speed}s`);
      this.track.style.setProperty(
        "--scroll-direction",
        direction === "left" ? "normal" : "reverse"
      );
    });
  }

  updateOptions(newOptions) {
    this.options = { ...this.options, ...newOptions };
    this.init();
  }

  destroy() {
    this.container.innerHTML = "";
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = InfiniteCarousel;
}
