import React from "react";
import { Link } from "react-router-dom";
import { AOS, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const AOSExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>AOS - Animate On Scroll</h2>
      </nav>

      <section className="example-section">
        <h3>Fade Animations</h3>
        <div className="aos-grid">
          <AOS animation="fade-up">
            <div className="aos-card">
              <h4>Fade Up</h4>
              <p>아래에서 위로</p>
            </div>
          </AOS>
          <AOS animation="fade-down" delay={100}>
            <div className="aos-card">
              <h4>Fade Down</h4>
              <p>위에서 아래로</p>
            </div>
          </AOS>
          <AOS animation="fade-left" delay={200}>
            <div className="aos-card">
              <h4>Fade Left</h4>
              <p>오른쪽에서 왼쪽으로</p>
            </div>
          </AOS>
          <AOS animation="fade-right" delay={300}>
            <div className="aos-card">
              <h4>Fade Right</h4>
              <p>왼쪽에서 오른쪽으로</p>
            </div>
          </AOS>
        </div>
      </section>

      <section className="example-section">
        <h3>Zoom Animations</h3>
        <div className="aos-grid">
          <AOS animation="zoom-in">
            <div className="aos-card">
              <h4>Zoom In</h4>
              <p>확대되며 나타남</p>
            </div>
          </AOS>
          <AOS animation="zoom-out" delay={200}>
            <div className="aos-card">
              <h4>Zoom Out</h4>
              <p>축소되며 나타남</p>
            </div>
          </AOS>
        </div>
      </section>

      <section className="example-section">
        <h3>Flip Animations</h3>
        <div className="aos-grid">
          <AOS animation="flip-left">
            <div className="aos-card">
              <h4>Flip Left</h4>
              <p>왼쪽으로 플립</p>
            </div>
          </AOS>
          <AOS animation="flip-right" delay={200}>
            <div className="aos-card">
              <h4>Flip Right</h4>
              <p>오른쪽으로 플립</p>
            </div>
          </AOS>
        </div>
      </section>
    </div>
  );
};
