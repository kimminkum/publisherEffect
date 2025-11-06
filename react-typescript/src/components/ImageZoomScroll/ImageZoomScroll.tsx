import React, { useRef, useEffect, useState } from "react";
import { ImageZoomScrollProps } from "../../types";
import "./ImageZoomScroll.css";

export const ImageZoomScroll: React.FC<ImageZoomScrollProps> = ({
  imageSrc,
  imageAlt = "",
  initialScale = 0.5,
  finalScale = 1,
  overlayContent,
  showDimOverlay = true,
  dimOpacity = 0.6,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(initialScale);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position
      const start = windowHeight;
      const end = 0;
      const current = rect.top;

      let progress = 0;
      if (current <= start && current >= end) {
        progress = 1 - current / start;
      } else if (current < end) {
        progress = 1;
      }

      // Update scale
      const newScale = initialScale + (finalScale - initialScale) * progress;
      setScale(newScale);

      // Update overlay opacity (이미지가 다 채워진 후 시작: progress >= 0.9)
      if (showDimOverlay) {
        const overlayProgress = Math.max(0, Math.min(1, (progress - 0.9) * 10));
        setOverlayOpacity(overlayProgress * dimOpacity);
      }

      // Update content opacity (딤이 완료된 후 나타남)
      if (overlayContent) {
        const contentProgress = Math.max(
          0,
          Math.min(1, (progress - 0.95) * 20)
        );
        setContentOpacity(contentProgress);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialScale, finalScale, showDimOverlay, dimOpacity, overlayContent]);

  return (
    <div ref={containerRef} className={`image-zoom-scroll ${className}`}>
      <div className="image-zoom-scroll-inner">
        <div
          className="image-zoom-scroll-image"
          style={{
            backgroundImage: `url(${imageSrc})`,
            transform: `scale(${scale})`
          }}
          role="img"
          aria-label={imageAlt}
        />

        {showDimOverlay && (
          <div
            className="image-zoom-scroll-overlay"
            style={{ opacity: overlayOpacity }}
          />
        )}

        {overlayContent && (
          <div
            className="image-zoom-scroll-content"
            style={{ opacity: contentOpacity }}
          >
            {overlayContent}
          </div>
        )}
      </div>
    </div>
  );
};
