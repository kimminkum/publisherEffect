import React from "react";
import { Link } from "react-router-dom";
import { SectionNavigation, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const SectionNavExample: React.FC = () => {
  const sections = [
    { id: "section1", label: "소개" },
    { id: "section2", label: "기능" },
    { id: "section3", label: "가격" },
    { id: "section4", label: "후기" },
    { id: "section5", label: "문의" }
  ];

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Section Navigation</h2>
      </nav>

      <SectionNavigation sections={sections} />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h3>↓ 스크롤하면 우측 네비게이션이 자동으로 변경됩니다 ↓</h3>
      </div>

      <section
        id="section1"
        style={{
          minHeight: "100vh",
          background: "#FF6B6B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px"
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
            섹션 1 - 소개
          </h2>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            이 네비게이션은 현재 보고 있는 섹션에 따라 자동으로 활성화됩니다. 각
            섹션의 하단이 보이기 시작하면 네비게이션이 해당 위치에 고정됩니다.
          </p>
        </div>
      </section>

      <section
        id="section2"
        style={{
          minHeight: "100vh",
          background: "#4ECDC4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px"
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
            섹션 2 - 기능
          </h2>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            우측 네비게이션을 클릭하면 해당 섹션으로 부드럽게 이동합니다.
            쇼핑몰이나 리뷰 페이지에서 자주 볼 수 있는 패턴입니다.
          </p>
        </div>
      </section>

      <section
        id="section3"
        style={{
          minHeight: "100vh",
          background: "#45B7D1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px"
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
            섹션 3 - 가격
          </h2>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            각 섹션은 최소 100vh 높이를 가지며, 스크롤에 따라 자동으로
            감지됩니다.
          </p>
        </div>
      </section>

      <section
        id="section4"
        style={{
          minHeight: "100vh",
          background: "#96CEB4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px"
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
            섹션 4 - 후기
          </h2>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            반응형으로 모바일에서도 잘 작동합니다. 네비게이션은 항상 화면 우측에
            고정됩니다.
          </p>
        </div>
      </section>

      <section
        id="section5"
        style={{
          minHeight: "100vh",
          background: "#FFEAA7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#333",
          padding: "60px"
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "24px" }}>
            섹션 5 - 문의
          </h2>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            마지막 섹션입니다. 섹션 ID와 라벨을 자유롭게 설정할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
};
