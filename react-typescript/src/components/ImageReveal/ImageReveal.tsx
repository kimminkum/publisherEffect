import React from "react";
import { ImageRevealProps } from "../../types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./ImageReveal.css";

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt = "",
  direction = "left",
  duration = 1000,
  delay = 0,
  className = ""
}) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    once: true
  });

  return (
    <div
      ref={targetRef}
      className={`image-reveal image-reveal-${direction} ${
        hasIntersected ? "revealed" : ""
      } ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};
