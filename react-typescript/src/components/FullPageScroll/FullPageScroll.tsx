import React, { useState, useEffect, useRef } from "react";
import { FullPageScrollProps } from "../../types";
import "./FullPageScroll.css";

export const FullPageScroll: React.FC<FullPageScrollProps> = ({
  children,
  className = ""
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < children.length) {
        setIsScrolling(true);
        setCurrentSection(nextSection);

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection, isScrolling, children.length]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentSection < children.length - 1) {
        setIsScrolling(true);
        setCurrentSection(currentSection + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(currentSection - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isScrolling, children.length]);

  return (
    <div ref={containerRef} className={`full-page-scroll ${className}`}>
      <div
        className="full-page-scroll-wrapper"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="full-page-section"
            id={`section-${index}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* 인디케이터 */}
      <div className="full-page-indicators">
        {children.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSection ? "active" : ""}`}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                setCurrentSection(index);
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
