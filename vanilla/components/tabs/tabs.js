/**
 * Tabs Component (Vanilla JS)
 * 10가지 바리에이션을 지원하는 탭 컴포넌트
 */

class Tabs {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      tabs: options.tabs || [],
      defaultActiveIndex: options.defaultActiveIndex || 0,
      onChange: options.onChange || null,
      variant: options.variant || "underline",
      orientation: options.orientation || "horizontal",
      size: options.size || "medium",
      fullWidth: options.fullWidth !== undefined ? options.fullWidth : false,
      animated: options.animated !== undefined ? options.animated : true,
      ...options
    };

    this.activeIndex = this.options.defaultActiveIndex;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
    if (
      this.options.variant === "underline" ||
      this.options.variant === "fill"
    ) {
      this.updateIndicator();
    }
  }

  render() {
    const {
      tabs,
      variant,
      orientation,
      size,
      fullWidth,
      animated
    } = this.options;

    this.container.className = `tabs-container tabs-${orientation} tabs-${variant} tabs-${size} ${fullWidth
      ? "tabs-full-width"
      : ""} ${animated ? "tabs-animated" : ""}`;

    this.container.innerHTML = `
      <div class="tabs-header" role="tablist">
        ${tabs
          .map(
            (tab, index) => `
          <button
            class="tab-button ${index === this.activeIndex
              ? "active"
              : ""} ${tab.disabled ? "disabled" : ""}"
            data-index="${index}"
            ${tab.disabled ? "disabled" : ""}
            role="tab"
            aria-selected="${index === this.activeIndex}"
            aria-controls="tab-panel-${index}"
          >
            ${tab.icon ? `<span class="tab-icon">${tab.icon}</span>` : ""}
            <span class="tab-label">${tab.label}</span>
            ${tab.badge !== undefined
              ? `<span class="tab-badge">${tab.badge}</span>`
              : ""}
          </button>
        `
          )
          .join("")}
        
        ${(variant === "underline" || variant === "fill") && animated
          ? '<div class="tab-indicator"></div>'
          : ""}
      </div>

      <div class="tabs-content">
        ${tabs
          .map(
            (tab, index) => `
          <div
            id="tab-panel-${index}"
            class="tab-panel ${index === this.activeIndex ? "active" : ""}"
            role="tabpanel"
            aria-labelledby="tab-${index}"
          >
            ${index === this.activeIndex ? tab.content : ""}
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  attachEventListeners() {
    const buttons = this.container.querySelectorAll(
      ".tab-button:not([disabled])"
    );
    buttons.forEach(button => {
      button.addEventListener("click", e => {
        const index = parseInt(e.currentTarget.dataset.index);
        this.setActiveIndex(index);
      });
    });

    // 윈도우 리사이즈 시 인디케이터 업데이트
    if (
      this.options.variant === "underline" ||
      this.options.variant === "fill"
    ) {
      this.resizeHandler = () => this.updateIndicator();
      window.addEventListener("resize", this.resizeHandler);
    }
  }

  setActiveIndex(index) {
    if (
      index === this.activeIndex ||
      index < 0 ||
      index >= this.options.tabs.length
    ) {
      return;
    }

    this.activeIndex = index;

    // 버튼 상태 업데이트
    const buttons = this.container.querySelectorAll(".tab-button");
    buttons.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
      btn.setAttribute("aria-selected", i === index);
    });

    // 패널 상태 업데이트
    const panels = this.container.querySelectorAll(".tab-panel");
    panels.forEach((panel, i) => {
      panel.classList.toggle("active", i === index);
      // 컨텐츠는 active일 때만 렌더링
      if (i === index) {
        panel.innerHTML = this.options.tabs[i].content;
      }
    });

    // 인디케이터 업데이트
    if (
      this.options.variant === "underline" ||
      this.options.variant === "fill"
    ) {
      this.updateIndicator();
    }

    // onChange 콜백 호출
    if (this.options.onChange) {
      this.options.onChange(index);
    }
  }

  updateIndicator() {
    const indicator = this.container.querySelector(".tab-indicator");
    if (!indicator) return;

    const activeButton = this.container.querySelector(
      `.tab-button[data-index="${this.activeIndex}"]`
    );
    if (!activeButton) return;

    if (this.options.orientation === "horizontal") {
      indicator.style.width = `${activeButton.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeButton.offsetLeft}px)`;
    } else {
      indicator.style.height = `${activeButton.offsetHeight}px`;
      indicator.style.transform = `translateY(${activeButton.offsetTop}px)`;
    }
  }

  destroy() {
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }
    this.container.innerHTML = "";
  }
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = Tabs;
}
