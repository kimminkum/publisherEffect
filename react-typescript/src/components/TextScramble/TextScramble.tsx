import React, { useEffect, useRef, useState } from "react";
import { TextScrambleProps } from "../../types";
import "./TextScramble.css";

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  speed = 50,
  scrambleSpeed = 30,
  characters = "!@#$%^&*()_+-=[]{}|;:,.<>?",
  trigger = "auto",
  delay = 0,
  onComplete,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scramble = () => {
    if (isScrambling) return;

    setIsScrambling(true);
    let frame = 0;
    const targetLength = text.length;

    const update = () => {
      let output = "";
      const progress = frame / targetLength;

      for (let i = 0; i < targetLength; i++) {
        if (i < frame) {
          output += text[i];
        } else {
          const randomChar =
            characters[Math.floor(Math.random() * characters.length)];
          output += randomChar;
        }
      }

      setDisplayText(output);

      if (frame < targetLength) {
        frame++;
        timeoutRef.current = setTimeout(update, speed);
      } else {
        setIsScrambling(false);
        if (onComplete) onComplete();
      }
    };

    update();
  };

  useEffect(() => {
    if (trigger === "auto") {
      const timer = setTimeout(() => {
        scramble();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [text, trigger, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleClick = () => {
    if (trigger === "click") {
      scramble();
    }
  };

  const handleHover = () => {
    if (trigger === "hover") {
      scramble();
    }
  };

  return (
    <span
      className={`text-scramble ${
        isScrambling ? "scrambling" : ""
      } ${className}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      style={{ cursor: trigger !== "auto" ? "pointer" : "default" }}
    >
      {displayText || text}
    </span>
  );
};
