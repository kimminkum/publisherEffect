import React from "react";
import { Link } from "react-router-dom";
import { Parallax, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const ParallaxExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Parallax Effect</h2>
      </nav>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h3>↓ 아래로 스크롤하여 패럴랙스 효과를 확인하세요 ↓</h3>
      </div>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2c3e50",
          color: "white"
        }}
      >
        <Parallax speed={0.5}>
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px"
            }}
          >
            <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
              패럴랙스 효과
            </h3>
            <p style={{ fontSize: "20px" }}>스크롤 속도와 다르게 움직입니다</p>
          </div>
        </Parallax>
      </section>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#34495e",
          color: "white"
        }}
      >
        <Parallax speed={1}>
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px"
            }}
          >
            <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
              더 빠른 패럴랙스
            </h3>
            <p style={{ fontSize: "20px" }}>
              speed 값을 조절하여 속도를 변경할 수 있습니다
            </p>
          </div>
        </Parallax>
      </section>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2c3e50",
          color: "white"
        }}
      >
        <Parallax speed={0.2}>
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px"
            }}
          >
            <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
              느린 패럴랙스
            </h3>
            <p style={{ fontSize: "20px" }}>더 부드러운 효과를 원할 때</p>
          </div>
        </Parallax>
      </section>
    </div>
  );
};
