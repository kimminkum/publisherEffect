import React from "react";
import { Link } from "react-router-dom";
import { HorizontalScrollSection, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const HorizontalScrollExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Horizontal Scroll Section</h2>
      </nav>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h3>↓ 아래로 스크롤하면 좌우로 움직입니다 ↓</h3>
      </div>

      <HorizontalScrollSection>
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "60px"
          }}
        >
          <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Slide 1</h2>
          <p style={{ fontSize: "24px" }}>
            세로 스크롤이 가로 스크롤로 변환됩니다
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            padding: "60px"
          }}
        >
          <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Slide 2</h2>
          <p style={{ fontSize: "24px" }}>계속 아래로 스크롤하세요</p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "white",
            padding: "60px"
          }}
        >
          <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Slide 3</h2>
          <p style={{ fontSize: "24px" }}>
            이 섹션이 끝나면 다시 세로 스크롤로
          </p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            color: "white",
            padding: "60px"
          }}
        >
          <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Slide 4</h2>
          <p style={{ fontSize: "24px" }}>마지막 슬라이드입니다</p>
        </div>
      </HorizontalScrollSection>

      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>다시 세로 스크롤로 돌아왔습니다</h3>
      </div>
    </div>
  );
};
