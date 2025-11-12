/**
 * Text Gradient Animation (Vanilla JS)
 * 흐르는 그라데이션 텍스트
 */

class TextGradientAnimation {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      colors: options.colors || ["#667eea", "#764ba2", "#f093fb", "#4facfe"],
      speed: options.speed || 3,
      direction: options.direction || "left-right",
      ...options
    };

    this.init();
  }

  init() {
    const { colors, speed, direction } = this.options;

    this.element.classList.add(
      "text-gradient-animation",
      `text-gradient-${direction}`
    );

    const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;
    this.element.style.background = gradient;

    if (direction === "left-right" || direction === "right-left") {
      this.element.style.backgroundSize = "200% 100%";
    } else {
      this.element.style.backgroundSize = "100% 200%";
    }

    this.element.style.animationDuration = `${speed}s`;

    if (direction === "right-left" || direction === "bottom-top") {
      this.element.style.animationDirection = "reverse";
    }
  }

  updateColors(newColors) {
    this.options.colors = newColors;
    const gradient = `linear-gradient(90deg, ${newColors.join(", ")})`;
    this.element.style.background = gradient;
  }

  destroy() {
    this.element.classList.remove("text-gradient-animation");
    this.element.style.background = "";
    this.element.style.backgroundSize = "";
    this.element.style.animationDuration = "";
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = TextGradientAnimation;
}
