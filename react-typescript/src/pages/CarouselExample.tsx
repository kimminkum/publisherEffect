import React from "react";
import { Link } from "react-router-dom";
import { Carousel, InfiniteCarousel, ScrollProgress, AOS } from "../components";
import "./ExamplePage.css";

export const CarouselExample: React.FC = () => {
  const carouselItems = Array.from({ length: 8 }, (_, i) => (
    <div
      style={{
        background: `linear-gradient(135deg, hsl(${i * 45}, 70%, 60%), hsl(${
          i * 45 + 30
        }, 70%, 50%))`,
        padding: "40px",
        borderRadius: "12px",
        color: "white",
        textAlign: "center",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h3 style={{ fontSize: "32px", marginBottom: "16px" }}>Item {i + 1}</h3>
      <p style={{ fontSize: "18px", opacity: 0.9 }}>캐러셀 아이템 {i + 1}</p>
    </div>
  ));

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Carousel</h2>
      </nav>

      <section className="example-section">
        <h3>3개씩 보기 + 자동재생</h3>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Carousel
            items={carouselItems}
            itemsPerView={3}
            gap={20}
            autoplay={true}
            autoplayDelay={3000}
          />
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>4개씩 보기</h3>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Carousel
            items={carouselItems}
            itemsPerView={4}
            gap={16}
            autoplay={false}
          />
        </div>
      </section>

      <section className="example-section">
        <h3>1개씩 보기 (슬라이드쇼)</h3>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Carousel
            items={carouselItems}
            itemsPerView={1}
            gap={0}
            autoplay={true}
            autoplayDelay={2000}
          />
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>제품 캐러셀</h3>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Carousel
            items={[
              <AOS animation="fade-up">
                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "16px"
                    }}
                  />
                  <h4 style={{ fontSize: "20px", marginBottom: "8px" }}>
                    제품 1
                  </h4>
                  <p style={{ fontSize: "14px", color: "#666" }}>설명...</p>
                </div>
              </AOS>,
              <AOS animation="fade-up" delay={100}>
                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "16px"
                    }}
                  />
                  <h4 style={{ fontSize: "20px", marginBottom: "8px" }}>
                    제품 2
                  </h4>
                  <p style={{ fontSize: "14px", color: "#666" }}>설명...</p>
                </div>
              </AOS>,
              <AOS animation="fade-up" delay={200}>
                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "16px"
                    }}
                  />
                  <h4 style={{ fontSize: "20px", marginBottom: "8px" }}>
                    제품 3
                  </h4>
                  <p style={{ fontSize: "14px", color: "#666" }}>설명...</p>
                </div>
              </AOS>,
              <AOS animation="fade-up" delay={300}>
                <div
                  style={{
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "16px"
                    }}
                  />
                  <h4 style={{ fontSize: "20px", marginBottom: "8px" }}>
                    제품 4
                  </h4>
                  <p style={{ fontSize: "14px", color: "#666" }}>설명...</p>
                </div>
              </AOS>
            ]}
            itemsPerView={3}
            gap={24}
            autoplay={false}
          />
        </div>
      </section>

      <section
        className="example-section"
        style={{ background: "#1a1a2e", padding: "80px 40px" }}
      >
        <h3 style={{ color: "white", marginBottom: "40px" }}>
          무한 캐러셀 (Infinite Carousel) - 왼쪽으로
        </h3>
        <InfiniteCarousel
          items={Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              style={{
                width: "300px",
                height: "200px",
                background: `linear-gradient(135deg, hsl(${
                  i * 36
                }, 70%, 60%), hsl(${i * 36 + 30}, 70%, 50%))`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold"
              }}
            >
              Item {i + 1}
            </div>
          ))}
          speed={40}
          direction="left"
          gap={24}
          pauseOnHover={true}
        />
      </section>

      <section
        className="example-section"
        style={{ background: "#f0f0f0", padding: "80px 40px" }}
      >
        <h3 style={{ marginBottom: "40px" }}>
          무한 캐러셀 - 오른쪽으로 (빠른 속도)
        </h3>
        <InfiniteCarousel
          items={Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              style={{
                width: "250px",
                height: "150px",
                background: "white",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
                fontSize: "20px",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              Logo {i + 1}
            </div>
          ))}
          speed={20}
          direction="right"
          gap={32}
          pauseOnHover={true}
        />
      </section>

      <section
        className="example-section"
        style={{ background: "#fff", padding: "80px 40px" }}
      >
        <h3 style={{ marginBottom: "40px" }}>로고 배너 (느린 속도)</h3>
        <InfiniteCarousel
          items={Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              style={{
                width: "180px",
                height: "100px",
                background: `linear-gradient(135deg, ${
                  [
                    "#667eea",
                    "#764ba2",
                    "#f093fb",
                    "#4facfe",
                    "#43e97b",
                    "#fa709a"
                  ][i % 6]
                }, ${
                  [
                    "#764ba2",
                    "#667eea",
                    "#4facfe",
                    "#00f2fe",
                    "#38f9d7",
                    "#fee140"
                  ][i % 6]
                })`,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold"
              }}
            >
              Brand {i + 1}
            </div>
          ))}
          speed={60}
          direction="left"
          gap={20}
          pauseOnHover={false}
        />
      </section>
    </div>
  );
};
