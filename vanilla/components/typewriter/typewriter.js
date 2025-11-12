/**
 * Typewriter Effect (Vanilla JS)
 * 타자기 효과로 텍스트 출력
 */

class Typewriter {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      texts: options.texts || [],
      speed: options.speed || 100,
      deleteSpeed: options.deleteSpeed || 50,
      delayBetween: options.delayBetween || 2000,
      loop: options.loop !== undefined ? options.loop : true,
      showCursor: options.showCursor !== undefined ? options.showCursor : true,
      cursorChar: options.cursorChar || "|",
      ...options
    };

    this.displayText = "";
    this.currentIndex = 0;
    this.isDeleting = false;
    this.timeout = null;

    this.init();
  }

  init() {
    this.element.classList.add("typewriter");
    this.type();
  }

  type() {
    const currentText = this.options.texts[this.currentIndex];

    if (!this.isDeleting) {
      // Typing
      if (this.displayText.length < currentText.length) {
        this.displayText = currentText.substring(
          0,
          this.displayText.length + 1
        );
        this.updateDisplay();
        this.timeout = setTimeout(() => this.type(), this.options.speed);
      } else {
        // Wait before deleting
        this.timeout = setTimeout(() => {
          this.isDeleting = true;
          this.type();
        }, this.options.delayBetween);
      }
    } else {
      // Deleting
      if (this.displayText.length > 0) {
        this.displayText = currentText.substring(
          0,
          this.displayText.length - 1
        );
        this.updateDisplay();
        this.timeout = setTimeout(() => this.type(), this.options.deleteSpeed);
      } else {
        this.isDeleting = false;
        if (
          this.options.loop ||
          this.currentIndex < this.options.texts.length - 1
        ) {
          this.currentIndex =
            (this.currentIndex + 1) % this.options.texts.length;
          this.timeout = setTimeout(() => this.type(), this.options.speed);
        }
      }
    }
  }

  updateDisplay() {
    let html = this.displayText;
    if (this.options.showCursor) {
      html += `<span class="typewriter-cursor">${this.options
        .cursorChar}</span>`;
    }
    this.element.innerHTML = html;
  }

  destroy() {
    if (this.timeout) clearTimeout(this.timeout);
    this.element.classList.remove("typewriter");
    this.element.innerHTML = "";
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = Typewriter;
}
