import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ScrollProgress,
  TextScramble,
  SplitText,
  MorphingBlob,
  RippleButton,
  Typewriter,
  TextGradientAnimation,
  ScrollProgressCircle,
  Toast,
  useToast,
  SVGDraw,
  ParticleEffect,
  ImageReveal
} from "../components";
import "./ExamplePage.css";

export const CreativeEffectsExample: React.FC = () => {
  const { toasts, showToast } = useToast();

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#667eea" />
      <ScrollProgressCircle showPercentage={true} />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Creative Effects</h2>
      </nav>

      {/* Text Scramble */}
      <section
        className="example-section"
        style={{ background: "#0f0f1e", color: "white", minHeight: "100vh" }}
      >
        <h3 style={{ color: "white", marginBottom: "40px" }}>
          1. Text Scramble (해커 효과)
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <TextScramble
            text="CYBER PUNK STYLE"
            speed={50}
            trigger="auto"
            className="scramble-demo"
            style={{ fontSize: "48px", color: "#00ff41" } as any}
          />
          <TextScramble
            text="Click Me to Scramble!"
            speed={40}
            trigger="click"
            className="scramble-demo"
            style={{ fontSize: "32px", color: "#0ff" } as any}
          />
          <TextScramble
            text="Hover Me!"
            speed={30}
            trigger="hover"
            className="scramble-demo"
            style={{ fontSize: "32px", color: "#ff0080" } as any}
          />
        </div>
      </section>

      {/* Split Text */}
      <section className="example-section">
        <h3>2. Split Text Animation (글자별 애니메이션)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            maxWidth: "800px"
          }}
        >
          <SplitText
            text="Beautiful Typography"
            animation="fade-up"
            staggerDelay={50}
            splitBy="char"
            style={{ fontSize: "48px", fontWeight: "bold" } as any}
          />
          <SplitText
            text="Word by word animation"
            animation="scale"
            staggerDelay={100}
            splitBy="word"
            style={
              { fontSize: "36px", fontWeight: "600", color: "#667eea" } as any
            }
          />
          <SplitText
            text="Rotating characters effect"
            animation="rotate"
            staggerDelay={40}
            splitBy="char"
            style={{ fontSize: "32px", color: "#f093fb" } as any}
          />
        </div>
      </section>

      {/* Morphing Blob */}
      <section
        className="example-section"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "100vh",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.3
          }}
        >
          <MorphingBlob
            size={600}
            colors={["#ffffff", "#ffd6ff", "#e7c6ff"]}
            speed={15}
            blur={60}
          />
        </div>
        <h3
          style={{
            color: "white",
            position: "relative",
            zIndex: 2,
            marginBottom: "20px"
          }}
        >
          3. Morphing Blob (유동적 배경)
        </h3>
        <p
          style={{
            color: "white",
            position: "relative",
            zIndex: 2,
            fontSize: "18px",
            maxWidth: "600px",
            textAlign: "center"
          }}
        >
          부드럽게 변형되는 유기적인 배경 도형
        </p>
      </section>

      {/* Ripple Button */}
      <section className="example-section">
        <h3>4. Ripple Effect (물결 효과)</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <RippleButton onClick={() => alert("Clicked!")}>
            Click Me!
          </RippleButton>
          <RippleButton
            rippleColor="rgba(102, 126, 234, 0.6)"
            style={{ background: "#667eea" }}
          >
            Purple Ripple
          </RippleButton>
          <RippleButton
            rippleColor="rgba(239, 68, 68, 0.6)"
            duration={800}
            style={{ background: "#ef4444" }}
          >
            Slow Ripple
          </RippleButton>
        </div>
      </section>

      {/* Typewriter */}
      <section
        className="example-section"
        style={{ background: "#1a1a2e", color: "white", minHeight: "80vh" }}
      >
        <h3 style={{ color: "white", marginBottom: "40px" }}>
          5. Typewriter Effect (타자기 효과)
        </h3>
        <div
          style={{ fontSize: "36px", fontWeight: "600", textAlign: "center" }}
        >
          <Typewriter
            texts={[
              "Welcome to our website",
              "We create amazing experiences",
              "Discover endless possibilities",
              "Let's build something great"
            ]}
            speed={100}
            deleteSpeed={50}
            delayBetween={2000}
            loop={true}
          />
        </div>
      </section>

      {/* Text Gradient */}
      <section className="example-section">
        <h3>6. Text Gradient Animation (흐르는 그라데이션)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center"
          }}
        >
          <TextGradientAnimation
            text="Flowing Gradient Text"
            colors={["#667eea", "#764ba2", "#f093fb", "#4facfe"]}
            speed={3}
            direction="left-right"
            style={{ fontSize: "48px" } as any}
          />
          <TextGradientAnimation
            text="Rainbow Colors"
            colors={["#ff0080", "#ff8c00", "#40e0d0", "#9370db", "#ff0080"]}
            speed={4}
            direction="right-left"
            style={{ fontSize: "36px" } as any}
          />
        </div>
      </section>

      {/* SVG Draw */}
      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>7. SVG Path Drawing (선 그리기)</h3>
        <SVGDraw
          duration={3000}
          delay={0}
          strokeColor="#007aff"
          strokeWidth={3}
        >
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path
              d="M 10 80 Q 52.5 10, 95 80 T 180 80"
              stroke="#007aff"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="100" cy="100" r="50" stroke="#667eea" strokeWidth="3" />
            <path
              d="M 50 150 L 100 120 L 150 150 L 130 100 L 170 70 L 120 70 L 100 20 L 80 70 L 30 70 L 70 100 Z"
              stroke="#f093fb"
              strokeWidth="2"
            />
          </svg>
        </SVGDraw>
      </section>

      {/* Particle Effect */}
      <section
        className="example-section"
        style={{ background: "#000", minHeight: "100vh", position: "relative" }}
      >
        <ParticleEffect
          color="#00d2ff"
          particleCount={80}
          particleSize={4}
          speed={1.5}
          followMouse={true}
        />
        <h3
          style={{
            color: "white",
            position: "relative",
            zIndex: 10,
            marginBottom: "20px"
          }}
        >
          8. Particle Effect (파티클 효과)
        </h3>
        <p
          style={{
            color: "#aaa",
            position: "relative",
            zIndex: 10,
            fontSize: "18px"
          }}
        >
          마우스를 움직여보세요!
        </p>
      </section>

      {/* Image Reveal */}
      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>9. Image Reveal (이미지 드러남 효과)</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
            maxWidth: "1000px"
          }}
        >
          <ImageReveal
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
            alt="Image 1"
            direction="left"
            duration={1200}
          />
          <ImageReveal
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Image 2"
            direction="right"
            duration={1200}
            delay={200}
          />
          <ImageReveal
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600"
            alt="Image 3"
            direction="top"
            duration={1200}
            delay={400}
          />
          <ImageReveal
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600"
            alt="Image 4"
            direction="bottom"
            duration={1200}
            delay={600}
          />
        </div>
      </section>

      {/* Toast Notifications */}
      <section className="example-section">
        <h3>10. Toast Notifications (알림 메시지)</h3>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <button
            onClick={() =>
              showToast({
                message: "성공적으로 저장되었습니다!",
                type: "success"
              })
            }
            style={{
              padding: "12px 24px",
              background: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Success Toast
          </button>
          <button
            onClick={() =>
              showToast({ message: "오류가 발생했습니다.", type: "error" })
            }
            style={{
              padding: "12px 24px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Error Toast
          </button>
          <button
            onClick={() =>
              showToast({ message: "주의가 필요합니다.", type: "warning" })
            }
            style={{
              padding: "12px 24px",
              background: "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Warning Toast
          </button>
          <button
            onClick={() =>
              showToast({
                message: "새로운 정보가 있습니다.",
                type: "info",
                duration: 5000
              })
            }
            style={{
              padding: "12px 24px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Info Toast
          </button>
        </div>
      </section>

      {/* Render Toasts */}
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
