import React from "react";
import { Link } from "react-router-dom";
import { ImageComparison, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const ImageComparisonExample: React.FC = () => {
  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Image Comparison</h2>
      </nav>

      <section className="example-section">
        <h3>Before / After 이미지 비교</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          슬라이더를 좌우로 드래그하세요
        </p>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ImageComparison
            beforeImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
            afterImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&sat=-100"
            beforeLabel="원본"
            afterLabel="흑백"
          />
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>다양한 용도로 활용</h3>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
          포토샵 전/후, 리모델링 전/후 등
        </p>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <ImageComparison
            beforeImage="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200"
            afterImage="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&contrast=150&brightness=110"
            beforeLabel="보정 전"
            afterLabel="보정 후"
          />
        </div>
      </section>
    </div>
  );
};
