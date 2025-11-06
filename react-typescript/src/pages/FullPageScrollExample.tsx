import React from "react";
import { Link } from "react-router-dom";
import { FullPageScroll, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const FullPageScrollExample: React.FC = () => {
  const sections = [
    <div
      style={{
        background: "#FF6B6B",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 1</h2>
      <p style={{ fontSize: "24px" }}>마우스 휠을 내리세요</p>
      <p style={{ fontSize: "18px", marginTop: "20px", opacity: 0.8 }}>
        중간에 걸치지 않고 완전히 넘어갑니다
      </p>
    </div>,
    <div
      style={{
        background: "#4ECDC4",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 2</h2>
      <p style={{ fontSize: "24px" }}>부드럽게 전환됩니다</p>
      <p style={{ fontSize: "18px", marginTop: "20px", opacity: 0.8 }}>
        ↑ ↓ 키보드도 사용 가능
      </p>
    </div>,
    <div
      style={{
        background: "#45B7D1",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 3</h2>
      <p style={{ fontSize: "24px" }}>우측 인디케이터를 클릭하면</p>
      <p style={{ fontSize: "18px", marginTop: "20px", opacity: 0.8 }}>
        원하는 섹션으로 바로 이동
      </p>
    </div>,
    <div
      style={{
        background: "#96CEB4",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column"
      }}
    >
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Section 4</h2>
      <p style={{ fontSize: "24px" }}>마지막 섹션입니다</p>
      <Link
        to="/"
        style={{
          marginTop: "40px",
          color: "white",
          fontSize: "18px",
          textDecoration: "underline"
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  ];

  return <FullPageScroll>{sections}</FullPageScroll>;
};
