import React, { useEffect, useState } from "react";
import { ScrollProgressCircleProps } from "../../types";
import "./ScrollProgressCircle.css";

export const ScrollProgressCircle: React.FC<ScrollProgressCircleProps> = ({
  size = 60,
  strokeWidth = 4,
  color = "#007aff",
  backgroundColor = "rgba(0, 0, 0, 0.1)",
  position = "bottom-right",
  showPercentage = false,
  className = ""
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`scroll-progress-circle scroll-progress-${position} ${className}`}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.1s ease" }}
        />
      </svg>
      {showPercentage && (
        <div className="progress-percentage">{Math.round(progress)}%</div>
      )}
    </div>
  );
};
