/**
 * Product Swiper Component (Vanilla JS)
 * 이미지와 텍스트 Peek 효과가 있는 제품 스와이퍼
 */

class ProductSwiper {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      slides: options.slides || [],
      textPosition: options.textPosition || 'right',
      stickyMode: options.stickyMode || false,
      ...options
    };

    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();

    if (this.options.stickyMode) {
      this.initStickyMode();
    }
  }

  render() {
    const { slides, textPosition, stickyMode } = this.options;

    this.container.className = `product-swiper product-text-${textPosition} ${
      stickyMode ? 'sticky-mode' : ''
    }`;
    this.container.style.minHeight = stickyMode ? `${slides.length * 100}vh` : '100vh';

    this.container.innerHTML = `
      <div class="product-swiper-wrapper ${stickyMode ? 'sticky' : ''}">
        <div class="product-swiper-content">
          <!-- 이미지 영역 -->
          <div class="product-image-area">
            <div class="product-image-container">
              ${slides
                .map(
                  (slide, index) => `
                <img
                  src="${slide.image}"
                  alt="${slide.title}"
                  class="product-image ${index === 0 ? 'active' : ''}"
                  data-index="${index}"
                />
              `
                )
                .join('')}
            </div>
            
            <!-- 네비게이션 버튼 -->
            <div class="product-navigation">
              <button class="product-nav-btn product-nav-prev" ${
                slides.length <= 1 ? 'disabled' : ''
              }>‹</button>
              <button class="product-nav-btn product-nav-next" ${
                slides.length <= 1 ? 'disabled' : ''
              }>›</button>
            </div>
          </div>

          <!-- 텍스트 영역 -->
          <div class="product-text-area">
            <!-- Pagination -->
            <div class="product-pagination">
              ${slides
                .map(
                  (_, index) => `
                <button
                  class="product-pagination-bar ${index === 0 ? 'active' : ''}"
                  data-index="${index}"
                  aria-label="Go to slide ${index + 1}"
                ></button>
              `
                )
                .join('')}
            </div>

            <!-- 텍스트 컨텐츠 -->
            <div class="product-text-scroll-container" data-text-container>
              <!-- 동적으로 렌더링 -->
            </div>
          </div>
        </div>
      </div>
    `;

    this.updateTextContent();
  }

  updateTextContent() {
    const container = this.container.querySelector('[data-text-container]');
    const { slides } = this.options;
    const { currentIndex } = this;

    let html = '';

    // 이전 텍스트 (일부만 보임)
    if (currentIndex > 0) {
      const prevSlide = slides[currentIndex - 1];
      html += `
        <div class="product-text-peek product-text-peek-prev">
          <h2>${prevSlide.title}</h2>
          <p>${prevSlide.description}</p>
        </div>
      `;
    }

    // 현재 텍스트 (전체 보임)
    const currentSlide = slides[currentIndex];
    html += `
      <div class="product-text-item product-text-current">
        <h2>${currentSlide.title}</h2>
        <p>${currentSlide.description}</p>
      </div>
    `;

    // 다음 텍스트 (일부만 보임)
    if (currentIndex < slides.length - 1) {
      const nextSlide = slides[currentIndex + 1];
      html += `
        <div class="product-text-peek product-text-peek-next">
          <h2>${nextSlide.title}</h2>
          <p>${nextSlide.description}</p>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  attachEventListeners() {
    // 이전 버튼
    const prevBtn = this.container.querySelector('.product-nav-prev');
    prevBtn?.addEventListener('click', () => this.prevSlide());

    // 다음 버튼
    const nextBtn = this.container.querySelector('.product-nav-next');
    nextBtn?.addEventListener('click', () => this.nextSlide());

    // Pagination 버튼
    const paginationBtns = this.container.querySelectorAll('.product-pagination-bar');
    paginationBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });
  }

  goToSlide(index) {
    if (index < 0 || index >= this.options.slides.length) return;

    this.currentIndex = index;

    // 이미지 업데이트
    const images = this.container.querySelectorAll('.product-image');
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });

    // Pagination 업데이트
    const paginationBtns = this.container.querySelectorAll('.product-pagination-bar');
    paginationBtns.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    // 텍스트 업데이트
    this.updateTextContent();

    // 버튼 상태 업데이트
    const prevBtn = this.container.querySelector('.product-nav-prev');
    const nextBtn = this.container.querySelector('.product-nav-next');
    
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === this.options.slides.length - 1;
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  nextSlide() {
    if (this.currentIndex < this.options.slides.length - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  initStickyMode() {
    const handleScroll = () => {
      const rect = this.container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 100 && rect.bottom >= windowHeight - 100) {
        const progress = Math.abs(rect.top) / (rect.height - windowHeight);
        const slideIndex = Math.min(
          Math.floor(progress * this.options.slides.length),
          this.options.slides.length - 1
        );

        if (slideIndex !== this.currentIndex) {
          this.goToSlide(slideIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    this.scrollHandler = handleScroll;
  }

  destroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProductSwiper;
}

