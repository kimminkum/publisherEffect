import React, { useRef, MouseEvent } from "react";
import { RippleButtonProps } from "../../types";
import "./RippleButton.css";

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  rippleColor = "rgba(255, 255, 255, 0.6)",
  duration = 600,
  className = "",
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = rippleColor;
    ripple.style.animationDuration = `${duration}ms`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, duration);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`ripple-button ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
