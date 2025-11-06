import React from "react";
import { Link } from "react-router-dom";
import { StickyImageWithText, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const StickyImageExample: React.FC = () => {
  const textSections = [
    <div>
      <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#333" }}>
        첫 번째 섹션
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#666" }}>
        이미지는 고정되어 있고, 텍스트만 스크롤됩니다. 이 방식은 제품 소개나
        스토리텔링에 효과적입니다. 계속 스크롤하여 다음 섹션을 확인하세요.
      </p>
    </div>,
    <div>
      <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#333" }}>
        두 번째 섹션
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#666" }}>
        각 섹션은 독립적인 컨텐츠를 가질 수 있습니다. 이미지는 계속 고정된
        상태로 유지됩니다. 사용자의 시선을 이미지에 유지하면서도 정보를 전달할
        수 있습니다.
      </p>
    </div>,
    <div>
      <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#333" }}>
        세 번째 섹션
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#666" }}>
        원하는 만큼 섹션을 추가할 수 있습니다. imagePosition prop으로 이미지
        위치를 왼쪽 또는 오른쪽으로 설정할 수 있습니다.
      </p>
    </div>
  ];

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Sticky Image with Scrolling Text</h2>
      </nav>

      <StickyImageWithText
        imageSrc="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200"
        imageAlt="Beautiful landscape"
        imagePosition="left"
        textSections={textSections}
      />

      <div
        style={{
          padding: "60px 40px",
          textAlign: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>이미지 위치를 오른쪽으로도 설정할 수 있습니다</h3>
        <p>↓ 아래로 계속 스크롤 ↓</p>
      </div>

      <StickyImageWithText
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
        imageAlt="Mountains"
        imagePosition="right"
        textSections={textSections}
      />
    </div>
  );
};
