import React from "react";
import { Link } from "react-router-dom";
import { TextEffect, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const TextEffectsExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Text Effects</h2>
      </nav>

      <section className="example-section text-section">
        <h3>Reveal Effect</h3>
        <TextEffect
          text="텍스트가 드러나는 효과"
          effect="reveal"
          duration={1500}
        />
      </section>

      <section className="example-section text-section">
        <h3>Typing Effect</h3>
        <TextEffect
          text="한 글자씩 타이핑되는 효과"
          effect="typing"
          duration={2000}
        />
      </section>

      <section className="example-section text-section">
        <h3>Character Disappear</h3>
        <TextEffect
          text="글자가 하나씩 사라지는 효과"
          effect="character-disappear"
          duration={2000}
        />
      </section>

      <section className="example-section text-section">
        <h3>Word by Word</h3>
        <TextEffect
          text="단어별로 나타나는 효과입니다"
          effect="word-by-word"
          duration={2000}
        />
      </section>

      <section className="example-section text-section">
        <h3>Glitch Effect</h3>
        <TextEffect text="글리치 효과" effect="glitch" duration={2000} />
      </section>
    </div>
  );
};
