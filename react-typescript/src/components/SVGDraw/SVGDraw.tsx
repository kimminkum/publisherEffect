import React, { useEffect, useRef, useState } from "react";
import { SVGDrawProps } from "../../types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./SVGDraw.css";

export const SVGDraw: React.FC<SVGDrawProps> = ({
  children,
  duration = 2000,
  delay = 0,
  strokeColor,
  strokeWidth,
  triggerOnce = true,
  className = ""
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    once: triggerOnce
  });
  const [shouldDraw, setShouldDraw] = useState(false);

  useEffect(() => {
    if (hasIntersected) {
      setTimeout(() => setShouldDraw(true), delay);
    }
  }, [hasIntersected, delay]);

  useEffect(() => {
    if (!svgRef.current || !shouldDraw) return;

    const paths = svgRef.current.querySelectorAll(
      "path, circle, rect, line, polyline, polygon"
    );

    paths.forEach((path) => {
      const element = path as SVGGeometryElement;
      const length = element.getTotalLength();

      element.style.strokeDasharray = `${length}`;
      element.style.strokeDashoffset = `${length}`;
      element.style.animation = `svgDraw ${duration}ms ease forwards`;

      if (strokeColor) {
        element.style.stroke = strokeColor;
      }
      if (strokeWidth) {
        element.setAttribute("stroke-width", strokeWidth.toString());
      }
    });
  }, [shouldDraw, duration, strokeColor, strokeWidth]);

  return (
    <div ref={targetRef} className={`svg-draw-container ${className}`}>
      <svg ref={svgRef} className="svg-draw">
        {children}
      </svg>
    </div>
  );
};
