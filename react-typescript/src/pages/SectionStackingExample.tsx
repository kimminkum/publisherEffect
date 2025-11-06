import React from "react";
import { Link } from "react-router-dom";
import { SectionStacking, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const SectionStackingExample: React.FC = () => {
  const stackingSections = [
    <div
      style={{
        background: "#FF6B6B",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "60px"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 1</h2>
      <p style={{ fontSize: "24px" }}>스크롤하면 다음 섹션이 쌓입니다</p>
    </div>,
    <div
      style={{
        background: "#4ECDC4",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "60px"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 2</h2>
      <p style={{ fontSize: "24px" }}>각 섹션이 겹쳐서 보입니다</p>
    </div>,
    <div
      style={{
        background: "#45B7D1",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "60px"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 3</h2>
      <p style={{ fontSize: "24px" }}>창의적인 레이아웃을 만들 수 있습니다</p>
    </div>,
    <div
      style={{
        background: "#96CEB4",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "60px"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 4</h2>
      <p style={{ fontSize: "24px" }}>마지막 섹션입니다</p>
    </div>
  ];

  const transparentSections = [
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "60px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "20px", color: "#333" }}>
          투명 섹션 1
        </h2>
        <p style={{ fontSize: "20px", color: "#666" }}>배경 없이 겹치는 효과</p>
      </div>
    </div>,
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "60px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "20px", color: "#333" }}>
          투명 섹션 2
        </h2>
        <p style={{ fontSize: "20px", color: "#666" }}>겹쳐서 보입니다</p>
      </div>
    </div>,
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "60px",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "20px", color: "#333" }}>
          투명 섹션 3
        </h2>
        <p style={{ fontSize: "20px", color: "#666" }}>창의적인 레이아웃</p>
      </div>
    </div>
  ];

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Section Stacking</h2>
      </nav>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h3>↓ 일반 모드: 배경이 있는 섹션 쌓기 ↓</h3>
      </div>

      <SectionStacking sections={stackingSections} stickyHeight={60} gap={20} />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white"
        }}
      >
        <h3>↓ 투명 모드: 배경 없이 겹치는 효과 ↓</h3>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        <SectionStacking
          sections={transparentSections}
          stickyHeight={60}
          gap={30}
          transparent={true}
        />
      </div>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>섹션 스태킹 효과 완료</h3>
      </div>
    </div>
  );
};
