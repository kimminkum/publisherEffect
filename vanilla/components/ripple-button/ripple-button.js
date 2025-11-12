/**
 * Ripple Button (Vanilla JS)
 * Material Design 스타일 물결 효과
 */

class RippleButton {
  constructor(button, options = {}) {
    this.button = button;
    this.options = {
      rippleColor: options.rippleColor || "rgba(255, 255, 255, 0.6)",
      duration: options.duration || 600,
      ...options
    };

    this.init();
  }

  init() {
    this.button.classList.add("ripple-button");
    this.button.style.position = "relative";
    this.button.style.overflow = "hidden";

    this.button.addEventListener("click", e => this.createRipple(e));
  }

  createRipple(event) {
    const rect = this.button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = this.options.rippleColor;
    ripple.style.animationDuration = `${this.options.duration}ms`;

    this.button.appendChild(ripple);

    setTimeout(() => ripple.remove(), this.options.duration);
  }

  destroy() {
    this.button.classList.remove("ripple-button");
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = RippleButton;
}
