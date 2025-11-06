import React, { useState, useEffect } from "react";
import { SectionNavigationProps } from "../../types";
import "./SectionNavigation.css";

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  sections,
  className = ""
}) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`section-navigation ${className}`}>
      {sections.map((section) => {
        const sectionElement = document.getElementById(section.id);
        const sectionTop = sectionElement?.offsetTop || 0;
        const sectionBottom = sectionTop + (sectionElement?.offsetHeight || 0);
        const scrollPosition = window.scrollY;

        // 섹션 하단이 보이기 시작하면 네비 고정
        const isSticky =
          scrollPosition >= sectionTop && scrollPosition < sectionBottom;

        return (
          <div
            key={section.id}
            className={`section-nav-item ${
              section.id === activeSection ? "active" : ""
            } ${isSticky ? "sticky" : ""}`}
            style={{
              top: isSticky ? "20px" : "auto"
            }}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              className="section-nav-btn"
            >
              {section.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};
