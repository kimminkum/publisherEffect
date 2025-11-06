import React, { useState, useRef, useEffect } from "react";
import { CarouselProps } from "../../types";
import "./Carousel.css";

export const Carousel: React.FC<CarouselProps> = ({
  items,
  itemsPerView = 3,
  gap = 20,
  autoplay = false,
  autoplayDelay = 3000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const goToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(maxIndex, index));
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // 처음으로
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // 끝으로
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, autoplayDelay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying, currentIndex, autoplayDelay]);

  const itemWidth = `calc((100% - ${
    gap * (itemsPerView - 1)
  }px) / ${itemsPerView})`;
  const translateX = -(
    currentIndex *
    (100 / itemsPerView + gap / itemsPerView)
  );

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${translateX}%)`,
            gap: `${gap}px`
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ width: itemWidth }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn carousel-prev"
        onClick={prevSlide}
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        className="carousel-btn carousel-next"
        onClick={nextSlide}
        aria-label="Next"
      >
        ›
      </button>

      {autoplay && (
        <button
          className="carousel-play-toggle"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      )}

      <div className="carousel-indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
