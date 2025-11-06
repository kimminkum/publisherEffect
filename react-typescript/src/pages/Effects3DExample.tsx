import React from "react";
import { Link } from "react-router-dom";
import { Card3DHover, MagneticButton, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const Effects3DExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>3D Effects</h2>
      </nav>

      <section className="example-section">
        <h3>3D Card Hover</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          마우스를 카드 위에 올려보세요
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          <Card3DHover intensity={15}>
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "60px",
                borderRadius: "16px",
                color: "white",
                textAlign: "center"
              }}
            >
              <h4 style={{ fontSize: "28px", marginBottom: "16px" }}>
                3D Card 1
              </h4>
              <p style={{ fontSize: "16px", opacity: 0.9 }}>
                마우스를 따라 3D로 회전합니다
              </p>
            </div>
          </Card3DHover>

          <Card3DHover intensity={20}>
            <div
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                padding: "60px",
                borderRadius: "16px",
                color: "white",
                textAlign: "center"
              }}
            >
              <h4 style={{ fontSize: "28px", marginBottom: "16px" }}>
                3D Card 2
              </h4>
              <p style={{ fontSize: "16px", opacity: 0.9 }}>
                intensity로 강도 조절 가능
              </p>
            </div>
          </Card3DHover>

          <Card3DHover intensity={10}>
            <div
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                padding: "60px",
                borderRadius: "16px",
                color: "white",
                textAlign: "center"
              }}
            >
              <h4 style={{ fontSize: "28px", marginBottom: "16px" }}>
                3D Card 3
              </h4>
              <p style={{ fontSize: "16px", opacity: 0.9 }}>
                부드러운 애니메이션
              </p>
            </div>
          </Card3DHover>
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Magnetic Button</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          마우스를 버튼 근처로 가져가보세요
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <MagneticButton strength={0.3}>Weak Magnet</MagneticButton>

          <MagneticButton strength={0.5}>Medium Magnet</MagneticButton>

          <MagneticButton strength={0.8}>Strong Magnet</MagneticButton>
        </div>
      </section>
    </div>
  );
};
