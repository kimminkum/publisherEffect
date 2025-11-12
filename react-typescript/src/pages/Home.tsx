import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroAnimation } from "../components";
import "./Home.css";

export const Home: React.FC = () => {
  // 인트로를 보고 싶지 않으면 false로 설정
  const [showIntro, setShowIntro] = useState(false);

  const examples = [
    { path: "/swiper", name: "Swiper", desc: "다양한 Pagination 타입" },
    { path: "/aos", name: "AOS", desc: "스크롤 애니메이션" },
    { path: "/text-effects", name: "Text Effects", desc: "텍스트 애니메이션" },
    { path: "/image-zoom", name: "Image Zoom", desc: "이미지 확대 스크롤" },
    {
      path: "/sticky-image-zoom",
      name: "Sticky Image Zoom",
      desc: "섹션 고정 이미지 확대"
    },
    { path: "/parallax", name: "Parallax", desc: "패럴랙스 효과" },
    { path: "/section-stacking", name: "Section Stacking", desc: "섹션 쌓기" },
    {
      path: "/horizontal-scroll",
      name: "Horizontal Scroll",
      desc: "좌우 스크롤"
    },
    {
      path: "/sticky-image",
      name: "Sticky Image",
      desc: "이미지 고정 + 텍스트"
    },
    { path: "/product-swiper", name: "Product Swiper", desc: "제품 스와이퍼" },
    {
      path: "/text-color",
      name: "Text Color Transition",
      desc: "텍스트 색상 전환"
    },
    { path: "/curtain-reveal", name: "Curtain Reveal", desc: "커튼 열림 효과" },
    {
      path: "/section-nav",
      name: "Section Navigation",
      desc: "구역별 네비게이션"
    },
    { path: "/3d-effects", name: "3D Effects", desc: "3D 카드 & 버튼" },
    {
      path: "/image-comparison",
      name: "Image Comparison",
      desc: "이미지 비교"
    },
    { path: "/advanced", name: "Advanced", desc: "고급 효과 모음" },
    {
      path: "/full-page-scroll",
      name: "Full Page Scroll",
      desc: "섹션 스냅 스크롤"
    },
    { path: "/carousel", name: "Carousel", desc: "캐러셀 슬라이더" },
    { path: "/tabs", name: "Tabs", desc: "탭 컴포넌트 (10+ 스타일)" },
    {
      path: "/creative-effects",
      name: "Creative Effects",
      desc: "신기한 효과 모음"
    }
  ];

  return (
    <>
      {showIntro && (
        <IntroAnimation
          textLines={["Publisher Components", "Library"]}
          onComplete={() => {
            console.log("🏠 Home: setShowIntro(false) 실행!");
            setShowIntro(false);
          }}
          textDuration={700} // 0.7초로 단축
          transitionDuration={600} // 0.6초로 단축
        />
      )}

      <div className={`home-page ${!showIntro ? "zoom-in" : ""}`}>
        <div className="home-container">
          <header className="home-header">
            <h1>Publisher Components Library</h1>
            <p>퍼블리셔를 위한 재사용 가능한 컴포넌트 모음</p>
          </header>

          <div className="examples-grid">
            {examples.map((example) => (
              <Link
                key={example.path}
                to={example.path}
                className="example-card"
              >
                <h3>{example.name}</h3>
                <p>{example.desc}</p>
                <span className="card-arrow">→</span>
              </Link>
            ))}
          </div>

          <footer className="home-footer">
            <p>
              각 예제를 클릭하여 데모를 확인하세요. <br />
              모든 컴포넌트는 독립적으로 사용 가능합니다.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};
