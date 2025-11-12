import React, { useEffect, useState, useRef } from "react";
import { TypewriterProps } from "../../types";
import "./Typewriter.css";

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  className = ""
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.substring(0, displayText.length + 1));
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            if (loop || currentIndex < texts.length - 1) {
              setCurrentIndex((currentIndex + 1) % texts.length);
            }
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    timeoutRef.current = timeout;

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    currentIndex,
    texts,
    speed,
    deleteSpeed,
    delayBetween,
    loop
  ]);

  return (
    <span className={`typewriter ${className}`}>
      {displayText}
      {showCursor && <span className="typewriter-cursor">{cursorChar}</span>}
    </span>
  );
};
