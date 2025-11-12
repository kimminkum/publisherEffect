import React, { useEffect, useState } from "react";
import { SplitTextProps } from "../../types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./SplitText.css";

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  animation = "fade-up",
  staggerDelay = 50,
  splitBy = "char",
  triggerOnce = true,
  className = ""
}) => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    once: triggerOnce
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (hasIntersected) {
      setShouldAnimate(true);
    }
  }, [hasIntersected]);

  const splitContent = () => {
    if (splitBy === "char") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className={`split-char ${shouldAnimate ? "animate" : ""}`}
          style={{
            animationDelay: `${index * staggerDelay}ms`
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (splitBy === "word") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`split-word ${shouldAnimate ? "animate" : ""}`}
          style={{
            animationDelay: `${index * staggerDelay}ms`
          }}
        >
          {word}
          {index < text.split(" ").length - 1 && "\u00A0"}
        </span>
      ));
    } else {
      // line
      return text.split("\n").map((line, index) => (
        <div
          key={index}
          className={`split-line ${shouldAnimate ? "animate" : ""}`}
          style={{
            animationDelay: `${index * staggerDelay}ms`
          }}
        >
          {line}
        </div>
      ));
    }
  };

  return (
    <div
      ref={targetRef}
      className={`split-text split-text-${animation} ${className}`}
    >
      {splitContent()}
    </div>
  );
};
