import React from "react";
import { Link } from "react-router-dom";
import { TextColorTransition, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const TextColorExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Text Color Transition</h2>
      </nav>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <h3>↓ 아래로 스크롤하세요 ↓</h3>
        <p style={{ color: "#666", textAlign: "center" }}>
          텍스트가 좌에서 우로
          <br />한 줄씩 색상이 전환됩니다
        </p>
      </div>

      <TextColorTransition
        lines={[
          "첫 번째 줄의 텍스트가",
          "좌에서 우로 서서히",
          "색상이 전환됩니다"
        ]}
        startColor="#cccccc"
        endColor="#000000"
      />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <h3>다른 색상으로도 가능합니다</h3>
        <p style={{ color: "#666" }}>↓ 아래로 계속 스크롤 ↓</p>
      </div>

      <div style={{ background: "#1a1a1a", padding: "40px 0" }}>
        <TextColorTransition
          lines={["다양한 색상 조합으로", "창의적인 효과를", "만들어보세요"]}
          startColor="#666666"
          endColor="#00ffff"
        />
      </div>
    </div>
  );
};
