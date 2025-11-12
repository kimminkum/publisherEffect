/**
 * Text Scramble Effect (Vanilla JS)
 * 해커/사이버펑크 스타일의 텍스트 스크램블 효과
 */

class TextScramble {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      speed: options.speed || 50,
      characters: options.characters || "!@#$%^&*()_+-=[]{}|;:,.<>?",
      trigger: options.trigger || "auto",
      delay: options.delay || 0,
      onComplete: options.onComplete || null,
      ...options
    };

    this.originalText = element.textContent;
    this.isScrambling = false;
    this.timeout = null;

    this.init();
  }

  init() {
    this.element.classList.add("text-scramble");

    if (this.options.trigger === "auto") {
      setTimeout(() => this.scramble(), this.options.delay);
    } else if (this.options.trigger === "click") {
      this.element.style.cursor = "pointer";
      this.element.addEventListener("click", () => this.scramble());
    } else if (this.options.trigger === "hover") {
      this.element.style.cursor = "pointer";
      this.element.addEventListener("mouseenter", () => this.scramble());
    }
  }

  scramble() {
    if (this.isScrambling) return;

    this.isScrambling = true;
    this.element.classList.add("scrambling");

    let frame = 0;
    const targetLength = this.originalText.length;

    const update = () => {
      let output = "";

      for (let i = 0; i < targetLength; i++) {
        if (i < frame) {
          output += this.originalText[i];
        } else {
          const randomChar = this.options.characters[
            Math.floor(Math.random() * this.options.characters.length)
          ];
          output += randomChar;
        }
      }

      this.element.textContent = output;

      if (frame < targetLength) {
        frame++;
        this.timeout = setTimeout(update, this.options.speed);
      } else {
        this.isScrambling = false;
        this.element.classList.remove("scrambling");
        if (this.options.onComplete) {
          this.options.onComplete();
        }
      }
    };

    update();
  }

  destroy() {
    if (this.timeout) clearTimeout(this.timeout);
    this.element.textContent = this.originalText;
    this.element.classList.remove("text-scramble", "scrambling");
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = TextScramble;
}
