/**
 * CustomSwiper - Vanilla JavaScript Swiper Component
 * 다양한 pagination 타입과 옵션을 지원하는 슬라이더
 */
class CustomSwiper {
  constructor(options = {}) {
    this.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    if (!this.container) {
      console.error("Swiper container not found");
      return;
    }

    this.options = {
      paginationType: options.paginationType || "dots",
      autoplay: options.autoplay || false,
      autoplayDelay: options.autoplayDelay || 3000,
      loop: options.loop !== undefined ? options.loop : true,
      speed: options.speed || 300,
      navigation: options.navigation !== undefined ? options.navigation : true,
      onSlideChange: options.onSlideChange || null,
      customCursor: options.customCursor || false
    };

    this.currentIndex = 0;
    this.isTransitioning = false;
    this.autoplayTimer = null;
    this.gaugeAnimationFrame = null;
    this.gaugeProgress = 0;

    this.init();
  }

  init() {
    this.slides = this.container.querySelectorAll(".swiper-slide");
    this.totalSlides = this.slides.length;

    if (this.totalSlides === 0) {
      console.error("No slides found");
      return;
    }

    this.setupHTML();
    this.setupNavigation();
    this.setupPagination();
    this.setupCustomCursor();

    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }

  setupHTML() {
    // Add custom cursor class if enabled
    if (this.options.customCursor) {
      this.container.classList.add("custom-cursor");
    }

    // Wrap slides if not already wrapped
    if (!this.container.querySelector(".swiper-slides")) {
      const wrapper = document.createElement("div");
      wrapper.className = "swiper-wrapper";

      const slidesContainer = document.createElement("div");
      slidesContainer.className = "swiper-slides";

      Array.from(this.slides).forEach(slide => {
        slidesContainer.appendChild(slide);
      });

      wrapper.appendChild(slidesContainer);
      this.container.innerHTML = "";
      this.container.appendChild(wrapper);

      this.slidesContainer = slidesContainer;
    } else {
      this.slidesContainer = this.container.querySelector(".swiper-slides");
    }
  }

  setupNavigation() {
    if (!this.options.navigation) return;

    const prevBtn = document.createElement("button");
    prevBtn.className = "swiper-button-prev";
    prevBtn.innerHTML = "‹";
    prevBtn.setAttribute("aria-label", "Previous slide");
    prevBtn.addEventListener("click", () => this.prevSlide());

    const nextBtn = document.createElement("button");
    nextBtn.className = "swiper-button-next";
    nextBtn.innerHTML = "›";
    nextBtn.setAttribute("aria-label", "Next slide");
    nextBtn.addEventListener("click", () => this.nextSlide());

    this.container.appendChild(prevBtn);
    this.container.appendChild(nextBtn);

    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
  }

  setupPagination() {
    if (this.options.paginationType === "none") return;

    const pagination = document.createElement("div");
    pagination.className = "swiper-pagination";

    switch (this.options.paginationType) {
      case "dots":
        pagination.classList.add("swiper-pagination-dots");
        for (let i = 0; i < this.totalSlides; i++) {
          const dot = document.createElement("button");
          dot.className = "swiper-pagination-dot";
          if (i === 0) dot.classList.add("active");
          dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
          dot.addEventListener("click", () => this.goToSlide(i));
          pagination.appendChild(dot);
        }
        break;

      case "progressbar":
        pagination.classList.add("swiper-pagination-progressbar");
        const progressFill = document.createElement("div");
        progressFill.className = "swiper-pagination-progressbar-fill";
        progressFill.style.width = `${1 / this.totalSlides * 100}%`;
        pagination.appendChild(progressFill);
        break;

      case "fraction":
        pagination.classList.add("swiper-pagination-fraction");
        pagination.innerHTML = `
          <span class="current">1</span>
          <span class="separator">/</span>
          <span class="total">${this.totalSlides}</span>
        `;
        break;

      case "gauge":
        pagination.classList.add("swiper-pagination-gauge");
        for (let i = 0; i < this.totalSlides; i++) {
          const gauge = document.createElement("button");
          gauge.className = "swiper-pagination-gauge-item";
          if (i === 0) gauge.classList.add("active");
          gauge.addEventListener("click", () => this.goToSlide(i));

          if (i === 0) {
            const fill = document.createElement("div");
            fill.className = "swiper-pagination-gauge-fill";
            gauge.appendChild(fill);
          }

          pagination.appendChild(gauge);
        }
        break;
    }

    this.container.appendChild(pagination);
    this.pagination = pagination;
  }

  goToSlide(index) {
    if (this.isTransitioning) return;

    let newIndex = index;
    if (this.options.loop) {
      if (index < 0) newIndex = this.totalSlides - 1;
      if (index >= this.totalSlides) newIndex = 0;
    } else {
      if (index < 0 || index >= this.totalSlides) return;
    }

    this.isTransitioning = true;
    this.currentIndex = newIndex;
    this.gaugeProgress = 0;

    this.updateSlides();
    this.updatePagination();
    this.updateNavigation();

    if (this.options.onSlideChange) {
      this.options.onSlideChange(newIndex);
    }

    setTimeout(() => {
      this.isTransitioning = false;
    }, this.options.speed);

    if (this.options.autoplay) {
      this.restartAutoplay();
    }
  }

  nextSlide() {
    this.goToSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.goToSlide(this.currentIndex - 1);
  }

  updateSlides() {
    this.slidesContainer.style.transform = `translateX(-${this.currentIndex *
      100}%)`;
    this.slidesContainer.style.transition = `transform ${this.options
      .speed}ms ease-in-out`;
  }

  updatePagination() {
    if (!this.pagination) return;

    switch (this.options.paginationType) {
      case "dots":
        const dots = this.pagination.querySelectorAll(".swiper-pagination-dot");
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === this.currentIndex);
        });
        break;

      case "progressbar":
        const fill = this.pagination.querySelector(
          ".swiper-pagination-progressbar-fill"
        );
        fill.style.width = `${(this.currentIndex + 1) /
          this.totalSlides *
          100}%`;
        break;

      case "fraction":
        const current = this.pagination.querySelector(".current");
        current.textContent = this.currentIndex + 1;
        break;

      case "gauge":
        const gauges = this.pagination.querySelectorAll(
          ".swiper-pagination-gauge-item"
        );
        gauges.forEach((gauge, index) => {
          gauge.classList.remove("active", "completed");

          // Remove existing fill
          const existingFill = gauge.querySelector(
            ".swiper-pagination-gauge-fill"
          );
          if (existingFill) existingFill.remove();

          if (index < this.currentIndex) {
            gauge.classList.add("completed");
          } else if (index === this.currentIndex) {
            gauge.classList.add("active");
            const fill = document.createElement("div");
            fill.className = "swiper-pagination-gauge-fill";
            gauge.appendChild(fill);

            if (this.options.autoplay) {
              this.animateGauge();
            }
          }
        });
        break;
    }
  }

  updateNavigation() {
    if (!this.options.navigation) return;

    if (!this.options.loop) {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
    }
  }

  startAutoplay() {
    this.autoplayTimer = setTimeout(() => {
      this.nextSlide();
      this.startAutoplay();
    }, this.options.autoplayDelay);

    if (this.options.paginationType === "gauge") {
      this.animateGauge();
    }
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer);
      this.autoplayTimer = null;
    }
    if (this.gaugeAnimationFrame) {
      cancelAnimationFrame(this.gaugeAnimationFrame);
      this.gaugeAnimationFrame = null;
    }
  }

  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }

  animateGauge() {
    if (this.gaugeAnimationFrame) {
      cancelAnimationFrame(this.gaugeAnimationFrame);
    }

    const startTime = Date.now();
    const fill = this.pagination.querySelector(
      ".swiper-pagination-gauge-item.active .swiper-pagination-gauge-fill"
    );

    if (!fill) return;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(
        elapsed / this.options.autoplayDelay * 100,
        100
      );

      fill.style.width = `${progress}%`;

      if (progress < 100) {
        this.gaugeAnimationFrame = requestAnimationFrame(animate);
      }
    };

    animate();
  }

  setupCustomCursor() {
    if (!this.options.customCursor) return;

    const cursor = document.createElement("div");
    cursor.className = "swiper-custom-cursor";
    cursor.innerHTML = '<div class="cursor-dot"></div>';
    this.container.appendChild(cursor);
    this.customCursor = cursor;

    this.container.addEventListener("mousemove", e => {
      const rect = this.container.getBoundingClientRect();
      cursor.style.left = `${e.clientX - rect.left}px`;
      cursor.style.top = `${e.clientY - rect.top}px`;
    });

    this.container.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
    });

    this.container.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });
  }

  destroy() {
    this.stopAutoplay();

    if (this.prevBtn) this.prevBtn.remove();
    if (this.nextBtn) this.nextBtn.remove();
    if (this.pagination) this.pagination.remove();
    if (this.customCursor) this.customCursor.remove();
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = CustomSwiper;
}
