import React from "react";
import { Link } from "react-router-dom";
import { StickyImageZoom, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const StickyImageZoomExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Sticky Image Zoom</h2>
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
          섹션에 걸리면 이미지가 점점 확대되고
          <br />
          이미지가 다 차면 텍스트가 한글자씩 나타납니다
        </p>
      </div>

      <StickyImageZoom
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
        imageAlt="Mountain landscape"
        initialScale={0.3}
        finalScale={1}
        showDimOverlay={true}
        dimOpacity={0.7}
        overlayContent={
          <div>
            <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>
              섹션 고정 이미지 확대
            </h2>
            <p style={{ fontSize: "24px" }}>
              스크롤하면 이미지가 점점 커지고
              <br />
              텍스트가 순차적으로 나타납니다
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
          background: "#f5f5f5"
        }}
      >
        <h3>다음 예제도 확인해보세요</h3>
      </div>

      <StickyImageZoom
        imageSrc="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920"
        imageAlt="Starry night"
        initialScale={0.5}
        finalScale={1}
        showDimOverlay={true}
        dimOpacity={0.6}
        overlayContent={
          <div>
            <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>
              별이 가득한 밤하늘
            </h2>
            <p style={{ fontSize: "24px" }}>
              초기 스케일 값을 조절할 수 있습니다
            </p>
          </div>
        }
      />
    </div>
  );
};
