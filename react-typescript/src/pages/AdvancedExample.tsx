import React from "react";
import { Link } from "react-router-dom";
import {
  ScrollCounter,
  ScrollProgress,
  AOS,
  Card3DHover,
  MagneticButton
} from "../components";
import "./ExamplePage.css";

export const AdvancedExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Advanced Effects</h2>
      </nav>

      <section className="example-section">
        <h3>Scroll Triggered Counter</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          화면에 나타나면 숫자가 카운트됩니다
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <ScrollCounter end={1000} suffix="+" duration={2000} />
            <p style={{ marginTop: "12px", color: "#666" }}>고객 수</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ScrollCounter end={95} suffix="%" duration={2500} />
            <p style={{ marginTop: "12px", color: "#666" }}>만족도</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ScrollCounter end={50} suffix="개" duration={2000} />
            <p style={{ marginTop: "12px", color: "#666" }}>프로젝트</p>
          </div>
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Combined Effects (AOS + 3D Hover)</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          여러 효과를 조합하여 사용
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          <AOS animation="fade-up">
            <Card3DHover>
              <div
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <h4
                  style={{
                    fontSize: "24px",
                    marginBottom: "16px",
                    color: "#333"
                  }}
                >
                  AOS + 3D Hover
                </h4>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  스크롤 애니메이션과 3D 호버 효과를 동시에 적용
                </p>
              </div>
            </Card3DHover>
          </AOS>

          <AOS animation="fade-up" delay={200}>
            <Card3DHover intensity={20}>
              <div
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <h4
                  style={{
                    fontSize: "24px",
                    marginBottom: "16px",
                    color: "#333"
                  }}
                >
                  강한 3D 효과
                </h4>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  intensity 값을 높여 더 역동적인 효과
                </p>
              </div>
            </Card3DHover>
          </AOS>

          <AOS animation="fade-up" delay={400}>
            <Card3DHover>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "40px",
                  borderRadius: "12px",
                  color: "white",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
              >
                <h4 style={{ fontSize: "24px", marginBottom: "16px" }}>
                  그라데이션 배경
                </h4>
                <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
                  다양한 스타일과 조합 가능
                </p>
              </div>
            </Card3DHover>
          </AOS>
        </div>
      </section>

      <section className="example-section">
        <h3>Magnetic Buttons</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          마우스를 버튼 근처로 가져가보세요
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <MagneticButton strength={0.3}>약한 자석</MagneticButton>

          <MagneticButton strength={0.5}>중간 자석</MagneticButton>

          <MagneticButton strength={0.8}>강한 자석</MagneticButton>
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Interactive Stats</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <AOS animation="zoom-in">
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <ScrollCounter end={24} suffix="/7" duration={1500} />
              <p style={{ marginTop: "12px", color: "#666" }}>연중무휴</p>
            </div>
          </AOS>

          <AOS animation="zoom-in" delay={200}>
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <ScrollCounter end={99} suffix=".9%" duration={2000} />
              <p style={{ marginTop: "12px", color: "#666" }}>정확도</p>
            </div>
          </AOS>

          <AOS animation="zoom-in" delay={400}>
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <ScrollCounter end={500} suffix="ms" duration={1800} />
              <p style={{ marginTop: "12px", color: "#666" }}>응답 속도</p>
            </div>
          </AOS>
        </div>
      </section>

      <section className="example-section">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: "24px" }}>더 많은 효과 조합</h3>
          <p style={{ color: "#666", marginBottom: "40px" }}>
            컴포넌트를 자유롭게 조합하여
            <br />
            창의적인 웹 경험을 만드세요
          </p>

          <MagneticButton
            strength={0.6}
            onClick={() => (window.location.href = "/")}
          >
            홈으로 돌아가기
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
