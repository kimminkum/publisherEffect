import React from "react";
import { Link } from "react-router-dom";
import { GradientSections } from "../components";
import "./ExamplePage.css";

export const GradientSectionsExample: React.FC = () => {
  const sections = [
    {
      topColor: "#000000",
      bottomColor: "#ffffff",
      minHeight: "100vh",
      content: (
        <div style={{ textAlign: "center", color: "white", padding: "40px" }}>
          <h2
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px" }}
          >
            섹션 1: 검정 → 흰색
          </h2>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            스크롤하면 아래로 갈수록 배경이 흰색으로 변합니다.
          </p>
        </div>
      ),
      contentLayout: "full" as const
    },
    {
      topColor: "#ffffff",
      bottomColor: "#00ff00",
      minHeight: "100vh",
      content: (
        <div style={{ textAlign: "center", color: "#333", padding: "40px" }}>
          <h2
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "16px" }}
          >
            섹션 2: 흰색 → 초록
          </h2>
          <p style={{ fontSize: "18px" }}>
            이 섹션은 흰색에서 초록색(#00ff00)으로 그라데이션됩니다.
          </p>
        </div>
      ),
      contentLayout: "full" as const
    },
    {
      topColor: "#00ff00",
      bottomColor: "#0066ff",
      minHeight: "300vh",
      content: (
        <>
          <h2 style={{ marginBottom: "16px", color: "#111" }}>
            섹션 3: 고정 너비 콘텐츠 (1280px)
          </h2>
          <p style={{ lineHeight: 1.7, color: "#333" }}>
            contentLayout을 &quot;contained&quot;로 두면, 콘텐츠 영역만
            1280px(또는 contentWidth로 지정) 너비에 흰색 배경으로 감싸집니다. 긴
            텍스트나 폼, 카드 등을 넣기 좋습니다. 배경 그라데이션(초록→파랑)은
            양옆으로 보입니다. contentLayout을 &quot;contained&quot;로 두면,
            콘텐츠 영역만 1280px(또는 contentWidth로 지정) 너비에 흰색 배경으로
            감싸집니다. 긴 텍스트나 폼, 카드 등을 넣기 좋습니다. 배경
            그라데이션(초록→파랑)은 양옆으로 보입니다.
          </p>
        </>
      ),
      contentLayout: "contained" as const,
      contentWidth: 1280
    },
    {
      topColor: "#0066ff",
      bottomColor: "#6600ff",
      minHeight: "400vh",
      content: (
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              borderRadius: "16px",
              padding: "48px 32px",
              color: "white"
            }}
          >
            <h2 style={{ marginBottom: "12px" }}>섹션 4: 이미지처럼 쓰기</h2>
            <p style={{ opacity: 0.95 }}>
              contentLayout &quot;full&quot;이면 콘텐츠만 넣고 배경 그라데이션을
              살릴 수 있습니다. 반투명 박스나 사진만 넣어도 됩니다.
            </p>
          </div>
        </div>
      ),
      contentLayout: "full" as const
    }
  ];

  return (
    <div className="example-page">
      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈
        </Link>
        <h2>Gradient Sections (섹션별 그라데이션 배경)</h2>
      </nav>

      <GradientSections sections={sections} backgroundWidth={1920} />
    </div>
  );
};
