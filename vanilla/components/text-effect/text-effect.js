/**
 * TextEffect - Vanilla JavaScript
 * 다양한 텍스트 애니메이션 효과
 */
class TextEffect {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("TextEffect container not found");
      return;
    }

    this.options = {
      text: options.text || this.container.textContent || "",
      effect: options.effect || "reveal",
      duration: options.duration || 2000,
      delay: options.delay || 0,
      once: options.once !== undefined ? options.once : true
    };

    this.isAnimating = false;
    this.hasAnimated = false;
    this.visibleChars = 0;

    this.init();
  }

  init() {
    this.container.classList.add(
      "text-effect",
      `text-effect-${this.options.effect}`
    );
    this.setupHTML();
    this.setupObserver();
  }

  setupHTML() {
    const chars = this.options.text.split("");

    if (this.options.effect === "reveal" || this.options.effect === "glitch") {
      this.container.innerHTML = `<span class="text-effect-full">${this.options
        .text}</span>`;
      if (this.options.effect === "glitch") {
        this.container.setAttribute("data-text", this.options.text);
      }
    } else {
      this.container.innerHTML = chars
        .map((char, index) => {
          const displayChar = char === " " ? "&nbsp;" : char;
          return `<span class="text-effect-char" data-index="${index}">${displayChar}</span>`;
        })
        .join("");

      this.charElements = this.container.querySelectorAll(".text-effect-char");

      if (this.options.effect === "character-disappear") {
        this.visibleChars = chars.length;
        this.charElements.forEach(el => el.classList.add("visible"));
      } else {
        this.charElements.forEach(el => el.classList.add("hidden"));
      }
    }
  }

  setupObserver() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animate();
            if (this.options.once) {
              this.hasAnimated = true;
              this.observer.unobserve(this.container);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.container);
  }

  animate() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    setTimeout(() => {
      switch (this.options.effect) {
        case "reveal":
        case "glitch":
          this.container.classList.add("animate");
          setTimeout(() => {
            this.isAnimating = false;
          }, this.options.duration);
          break;

        case "character-disappear":
          this.animateCharacterDisappear();
          break;

        case "word-by-word":
        case "typing":
          this.animateTyping();
          break;
      }
    }, this.options.delay);
  }

  animateCharacterDisappear() {
    const chars = this.options.text.split("");
    const charDelay = this.options.duration / chars.length;

    chars.forEach((_, index) => {
      setTimeout(() => {
        if (this.charElements[index]) {
          this.charElements[index].classList.remove("visible");
          this.charElements[index].classList.add("hidden");
        }

        if (index === chars.length - 1) {
          this.isAnimating = false;
        }
      }, charDelay * index);
    });
  }

  animateTyping() {
    const chars = this.options.text.split("");
    const charDelay = this.options.duration / chars.length;

    chars.forEach((_, index) => {
      setTimeout(() => {
        if (this.charElements[index]) {
          this.charElements[index].classList.remove("hidden");
          this.charElements[index].classList.add("visible");
        }

        if (index === chars.length - 1) {
          this.isAnimating = false;
          if (this.options.effect === "typing") {
            this.container.classList.add("typing-complete");
          }
        }
      }, charDelay * index);
    });
  }

  reset() {
    this.hasAnimated = false;
    this.isAnimating = false;
    this.container.classList.remove("animate", "typing-complete");

    if (this.charElements) {
      if (this.options.effect === "character-disappear") {
        this.charElements.forEach(el => {
          el.classList.remove("hidden");
          el.classList.add("visible");
        });
      } else {
        this.charElements.forEach(el => {
          el.classList.remove("visible");
          el.classList.add("hidden");
        });
      }
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = TextEffect;
}
