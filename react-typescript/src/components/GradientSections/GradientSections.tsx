import React, { useEffect, useMemo, useRef, useState } from "react";
import type { GradientSectionsProps } from "../../types";
import "./GradientSections.css";

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

const hexToRgb = (hex: string) => {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const intVal = parseInt(value, 16);
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255
  };
};

const rgbToHex = (r: number, g: number, b: number) =>
  `#${[r, g, b]
    .map((c) => {
      const v = Math.round(c);
      return v.toString(16).padStart(2, "0");
    })
    .join("")}`;

const mixColor = (c1: string, c2: string, t: number) => {
  const a = hexToRgb(c1);
  const b = hexToRgb(c2);
  return rgbToHex(
    a.r + (b.r - a.r) * t,
    a.g + (b.g - a.g) * t,
    a.b + (b.b - a.b) * t
  );
};

export const GradientSections: React.FC<GradientSectionsProps> = ({
  sections,
  backgroundWidth = "100%",
  className = ""
}) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [progressMap, setProgressMap] = useState<Record<number, number>>({});

  // 섹션 높이가 200vh보다 크면 스크롤 위치 기반 동적 보간
  const getDynamicThresholdPx = () =>
    typeof window !== "undefined" ? window.innerHeight * 2 : 2000;

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    const update = () => {
      const thresholdPx = getDynamicThresholdPx();
      const next: Record<number, number> = {};
      refs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const height = rect.height;
        // 화면 중간 지점(viewportMid) 대비 섹션 내 진행도(0~1)
        const viewportMid = window.innerHeight / 2;
        const start = rect.top;
        const end = rect.bottom;
        const progress = clamp((viewportMid - start) / (end - start));
        // 높이가 threshold 이하이면 0으로 두어 기본 그라데이션만 사용
        next[idx] = height > thresholdPx ? progress : 0;
      });
      setProgressMap(next);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const innerWidthStyle = useMemo(() => {
    if (backgroundWidth === "100%") return { maxWidth: "100%" };
    if (typeof backgroundWidth === "number") {
      return {
        maxWidth: `${backgroundWidth}px`,
        marginLeft: "auto",
        marginRight: "auto"
      };
    }
    return {};
  }, [backgroundWidth]);

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

          const progress = progressMap[index] ?? 0;
          // progress에 따라 상/하단 색을 부드럽게 보간
          const topMixed = mixColor(
            section.topColor,
            section.bottomColor,
            progress * 0.4
          );
          const bottomMixed = mixColor(
            section.topColor,
            section.bottomColor,
            progress
          );

          const bgStyle = {
            background: `linear-gradient(to bottom, ${topMixed}, ${bottomMixed})`,
            minHeight:
              typeof minHeight === "number" ? `${minHeight}px` : minHeight
          };

          return (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="gradient-section-item"
              style={bgStyle}
            >
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
