import React from "react";
import { TextGradientAnimationProps } from "../../types";
import "./TextGradientAnimation.css";

export const TextGradientAnimation: React.FC<TextGradientAnimationProps> = ({
  text,
  colors = ["#667eea", "#764ba2", "#f093fb", "#4facfe"],
  speed = 3,
  direction = "left-right",
  className = ""
}) => {
  const gradientStyle = {
    background: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize:
      direction === "left-right" || direction === "right-left"
        ? "200% 100%"
        : "100% 200%",
    animationDuration: `${speed}s`,
    animationDirection:
      direction === "right-left" || direction === "bottom-top"
        ? "reverse"
        : "normal"
  } as React.CSSProperties;

  return (
    <span
      className={`text-gradient-animation text-gradient-${direction} ${className}`}
      style={gradientStyle}
    >
      {text}
    </span>
  );
};
