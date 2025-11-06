import React from "react";
import { Link } from "react-router-dom";
import { Swiper, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const SwiperExample: React.FC = () => {
  const swiperSlides = [
    <div
      className="slide"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      <h2>Slide 1</h2>
      <p>Gauge Pagination으로 진행도를 확인하세요</p>
    </div>,
    <div
      className="slide"
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }}
    >
      <h2>Slide 2</h2>
      <p>자동으로 슬라이드가 전환됩니다</p>
    </div>,
    <div
      className="slide"
      style={{
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      }}
    >
      <h2>Slide 3</h2>
      <p>다양한 Pagination 타입을 지원합니다</p>
    </div>,
    <div
      className="slide"
      style={{
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
      }}
    >
      <h2>Slide 4</h2>
      <p>커스터마이징이 가능합니다</p>
    </div>
  ];

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Swiper</h2>
      </nav>

      <section className="example-section">
        <h3>1️⃣ Gauge Pagination + Remote Control</h3>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          게이지가 채워지면서 자동으로 다음 슬라이드로 전환됩니다
        </p>
        <div className="swiper-demo">
          <Swiper
            slides={swiperSlides}
            paginationType="gauge"
            autoplay={true}
            autoplayDelay={3000}
            navigation={true}
            showRemoteControl={true}
          />
        </div>
      </section>

      <section className="example-section">
        <h3>Dots Pagination (상단)</h3>
        <div className="swiper-demo">
          <Swiper
            slides={swiperSlides}
            paginationType="dots"
            autoplay={false}
            navigation={true}
            paginationPosition="top"
          />
        </div>
      </section>

      <section className="example-section">
        <h3>Progress Bar (좌측)</h3>
        <div className="swiper-demo">
          <Swiper
            slides={swiperSlides}
            paginationType="progressbar"
            autoplay={false}
            navigation={true}
            paginationPosition="left"
          />
        </div>
      </section>

      <section className="example-section">
        <h3>4️⃣ Fraction (우측)</h3>
        <div className="swiper-demo">
          <Swiper
            slides={swiperSlides}
            paginationType="fraction"
            autoplay={true}
            autoplayDelay={2500}
            navigation={true}
            paginationPosition="right"
            showRemoteControl={true}
          />
        </div>
      </section>

      <section className="example-section" style={{ background: "#1a1a2e" }}>
        <h3 style={{ color: "white" }}>5️⃣ 커스텀 마우스 커서</h3>
        <p style={{ color: "#aaa", marginBottom: "20px" }}>
          마우스를 올려보세요! 따라다니는 커스텀 커서가 나타납니다
        </p>
        <div className="swiper-demo">
          <Swiper
            slides={[
              <div
                className="slide"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                }}
              >
                <h2>마우스를 움직여보세요</h2>
                <p>커스텀 커서가 마우스를 따라다닙니다</p>
              </div>,
              <div
                className="slide"
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                }}
              >
                <h2>인터랙티브한 경험</h2>
                <p>클릭하면 커서 크기가 변합니다</p>
              </div>,
              <div
                className="slide"
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                }}
              >
                <h2>부드러운 애니메이션</h2>
                <p>맥락 있는 사용자 경험을 제공합니다</p>
              </div>
            ]}
            paginationType="dots"
            autoplay={true}
            autoplayDelay={3000}
            navigation={true}
            customCursor={true}
          />
        </div>
      </section>
    </div>
  );
};
