import React from "react";
import type { GradientSectionsProps } from "../../types";
import "./GradientSections.css";

export const GradientSections: React.FC<GradientSectionsProps> = ({
  sections,
  backgroundWidth = "100%",
  className = ""
}) => {
  const innerWidthStyle =
    backgroundWidth === "100%"
      ? { maxWidth: "100%" }
      : typeof backgroundWidth === "number"
      ? {
          maxWidth: `${backgroundWidth}px`,
          marginLeft: "auto",
          marginRight: "auto"
        }
      : {};

  const innerClassName =
    backgroundWidth === "100%"
      ? "gradient-sections-inner max-width-100"
      : "gradient-sections-inner max-width-1920";

  return (
    <div className={`gradient-sections-wrapper ${className}`}>
      <div className={innerClassName} style={innerWidthStyle}>
        {sections.map((section, index) => {
          const layout = section.contentLayout ?? "full";
          const contentWidth = section.contentWidth ?? 1280;
          const minHeight = section.minHeight ?? "100vh";
          const bgStyle = {
            background: `linear-gradient(to bottom, ${section.topColor}, ${section.bottomColor})`,
            minHeight:
              typeof minHeight === "number" ? `${minHeight}px` : minHeight
          };

          return (
            <div key={index} className="gradient-section-item" style={bgStyle}>
              {section.content != null ? (
                <div
                  className={`gradient-section-content layout-${layout}`}
                  style={
                    layout === "contained"
                      ? { maxWidth: `${contentWidth}px` }
                      : undefined
                  }
                >
                  {section.content}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
