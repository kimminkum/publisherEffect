import React, { useEffect, useRef } from "react";
import { SmoothScrollProps } from "../../types";
import "./SmoothScroll.css";

export const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  speed = 1,
  smoothness = 0.1,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrame: number;

    const updateScroll = () => {
      const { current, target } = scrollRef.current;
      const diff = target - current;

      scrollRef.current.current += diff * smoothness * speed;

      if (content) {
        content.style.transform = `translateY(-${scrollRef.current.current}px)`;
      }

      animationFrame = requestAnimationFrame(updateScroll);
    };

    const handleScroll = () => {
      scrollRef.current.target = window.pageYOffset;
    };

    const handleResize = () => {
      if (content) {
        document.body.style.height = `${content.offsetHeight}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    handleResize();
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.body.style.height = "";
    };
  }, [speed, smoothness]);

  return (
    <div ref={containerRef} className={`smooth-scroll-container ${className}`}>
      <div ref={contentRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  );
};
