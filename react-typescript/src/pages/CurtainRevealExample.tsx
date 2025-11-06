import React from "react";
import { Link } from "react-router-dom";
import {
  CurtainReveal,
  CurtainRevealScroll,
  ScrollProgress
} from "../components";
import "./ExamplePage.css";

export const CurtainRevealExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Curtain Reveal</h2>
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
          좌우에서 커튼이 열리듯
          <br />
          이미지가 나타납니다
        </p>
      </div>

      <CurtainReveal
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
        imageAlt="Mountain"
        curtainColor="#ffffff"
      />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>다른 커튼 색상으로도 가능합니다</h3>
      </div>

      <CurtainReveal
        imageSrc="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920"
        imageAlt="Stars"
        curtainColor="#000000"
      />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          color: "white"
        }}
      >
        <h3>커튼 색상을 배경과 맞춰 더욱 자연스럽게</h3>
      </div>

      <div style={{ background: "#667eea", padding: "40px 0" }}>
        <CurtainReveal
          imageSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920"
          imageAlt="Forest"
          curtainColor="#667eea"
        />
      </div>

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <h3>스크롤 제어 모드 ⭐</h3>
        <p style={{ color: "#666", textAlign: "center" }}>
          ↓ 아래로 스크롤하면
          <br />
          스크롤 진행도에 따라 커튼이 열립니다
        </p>
      </div>

      <CurtainRevealScroll
        imageSrc="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920"
        imageAlt="Nature"
        curtainColor="#ffffff"
        openThreshold={0.75}
      />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>스크롤을 내릴수록 커튼이 점점 열립니다</h3>
      </div>
    </div>
  );
};
