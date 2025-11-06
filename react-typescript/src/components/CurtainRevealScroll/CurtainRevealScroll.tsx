import React, { useRef, useEffect, useState } from "react";
import { CurtainRevealProps } from "../../types";
import "./CurtainRevealScroll.css";

export const CurtainRevealScroll: React.FC<CurtainRevealProps> = ({
  imageSrc,
  imageAlt = "",
  curtainColor = "#ffffff",
  className = "",
  openThreshold = 0.75
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openProgress, setOpenProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 요소가 화면에 보이기 시작할 때부터 계산
      const visibleHeight = windowHeight * openThreshold;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // 화면 상단부터 시작
        const scrollProgress = 1 - rect.top / windowHeight;
        const progress = Math.max(
          0,
          Math.min(1, scrollProgress / openThreshold)
        );
        setOpenProgress(progress);
      } else if (rect.top > windowHeight) {
        setOpenProgress(0);
      } else {
        setOpenProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [openThreshold]);

  return (
    <div ref={containerRef} className={`curtain-reveal-scroll ${className}`}>
      <img src={imageSrc} alt={imageAlt} className="curtain-image" />
      <div
        className="curtain curtain-left"
        style={{
          background: curtainColor,
          transform: `translateX(-${openProgress * 100}%)`
        }}
      />
      <div
        className="curtain curtain-right"
        style={{
          background: curtainColor,
          transform: `translateX(${openProgress * 100}%)`
        }}
      />
    </div>
  );
};
