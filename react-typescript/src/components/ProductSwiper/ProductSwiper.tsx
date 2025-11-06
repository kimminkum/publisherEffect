import React, { useState, useRef, useEffect } from "react";
import { ProductSwiperProps } from "../../types";
import "./ProductSwiper.css";

export const ProductSwiper: React.FC<ProductSwiperProps> = ({
  slides,
  textPosition = "right",
  className = "",
  stickyMode = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  // 스티키 모드: 스크롤로 제어
  useEffect(() => {
    if (!stickyMode) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();

      if (rect.top <= 100 && rect.bottom >= window.innerHeight - 100) {
        const progress =
          Math.abs(rect.top) / (rect.height - window.innerHeight);
        const slideIndex = Math.min(
          Math.floor(progress * slides.length),
          slides.length - 1
        );

        if (slideIndex !== currentIndex) {
          setCurrentIndex(slideIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyMode, slides.length, currentIndex]);

  const containerHeight = stickyMode ? `${slides.length * 100}vh` : "100vh";

  return (
    <div
      ref={containerRef}
      className={`product-swiper product-text-${textPosition} ${
        stickyMode ? "sticky-mode" : ""
      } ${className}`}
      style={{ minHeight: containerHeight }}
    >
      <div className={`product-swiper-wrapper ${stickyMode ? "sticky" : ""}`}>
        <div className="product-swiper-content">
          {/* 이미지 영역 */}
          <div className="product-image-area">
            <div className="product-image-container">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.title}
                  className={`product-image ${
                    index === currentIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>

            {/* 네비게이션 버튼 - 이미지 하단 왼쪽 */}
            <div className="product-navigation">
              <button
                className="product-nav-btn product-nav-prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                ‹
              </button>
              <button
                className="product-nav-btn product-nav-next"
                onClick={nextSlide}
                disabled={currentIndex === slides.length - 1}
              >
                ›
              </button>
            </div>
          </div>

          {/* 텍스트 영역 */}
          <div className="product-text-area">
            {/* Pagination - 텍스트 영역 상단 */}
            <div className="product-pagination">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`product-pagination-bar ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* 텍스트 컨텐츠 - Peek 효과 */}
            <div className="product-text-scroll-container">
              {/* 이전 텍스트 (일부만 보임 - 하단) */}
              {currentIndex > 0 && (
                <div className="product-text-peek product-text-peek-prev">
                  <h2>{slides[currentIndex - 1].title}</h2>
                  <p>{slides[currentIndex - 1].description}</p>
                </div>
              )}

              {/* 현재 텍스트 (전체 보임) */}
              <div className="product-text-item product-text-current">
                <h2>{slides[currentIndex].title}</h2>
                <p>{slides[currentIndex].description}</p>
              </div>

              {/* 다음 텍스트 (일부만 보임 - 상단) */}
              {currentIndex < slides.length - 1 && (
                <div className="product-text-peek product-text-peek-next">
                  <h2>{slides[currentIndex + 1].title}</h2>
                  <p>{slides[currentIndex + 1].description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
