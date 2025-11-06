import React from "react";
import { Link } from "react-router-dom";
import { ImageZoomScroll, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const ImageZoomExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Image Zoom on Scroll (기본 모드)</h2>
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
          화면에 나타난 후 스크롤하면
          <br />
          이미지가 확대됩니다
        </p>
      </div>

      <ImageZoomScroll
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
        imageAlt="Mountain landscape"
        initialScale={0.6}
        finalScale={1}
        showDimOverlay={true}
        overlayContent={
          <div>
            <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>
              스크롤하면 이미지가 확대됩니다
            </h2>
            <p style={{ fontSize: "24px" }}>
              딤 처리와 함께 텍스트가 나타납니다
            </p>
          </div>
        }
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
        <h3>섹션 고정 모드는?</h3>
        <Link
          to="/sticky-image-zoom"
          style={{
            color: "#007aff",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          → Sticky Image Zoom 예제 보기
        </Link>
      </div>
    </div>
  );
};
