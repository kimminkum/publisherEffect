import React from "react";
import { Link } from "react-router-dom";
import { Tabs, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const TabsExample: React.FC = () => {
  const basicTabs = [
    {
      label: "홈",
      content: (
        <div style={{ padding: "20px" }}>
          <h3>홈 컨텐츠</h3>
          <p>여기는 홈 탭의 내용입니다.</p>
        </div>
      )
    },
    {
      label: "프로필",
      content: (
        <div style={{ padding: "20px" }}>
          <h3>프로필 컨텐츠</h3>
          <p>사용자 프로필 정보를 표시합니다.</p>
        </div>
      )
    },
    {
      label: "설정",
      content: (
        <div style={{ padding: "20px" }}>
          <h3>설정 컨텐츠</h3>
          <p>애플리케이션 설정을 관리합니다.</p>
        </div>
      )
    }
  ];

  const iconTabs = [
    {
      label: "대시보드",
      icon: "📊",
      content: (
        <div style={{ padding: "20px" }}>
          <h3>📊 대시보드</h3>
          <p>주요 지표와 통계를 확인하세요.</p>
        </div>
      )
    },
    {
      label: "메시지",
      icon: "💬",
      badge: 5,
      content: (
        <div style={{ padding: "20px" }}>
          <h3>💬 메시지</h3>
          <p>새로운 메시지 5개가 있습니다.</p>
        </div>
      )
    },
    {
      label: "알림",
      icon: "🔔",
      badge: "NEW",
      content: (
        <div style={{ padding: "20px" }}>
          <h3>🔔 알림</h3>
          <p>새로운 알림을 확인하세요.</p>
        </div>
      )
    },
    {
      label: "비활성화",
      icon: "🚫",
      disabled: true,
      content: <div>이 탭은 비활성화되었습니다.</div>
    }
  ];

  const productTabs = [
    {
      label: "전체",
      content: (
        <div style={{ padding: "30px" }}>
          <h3 style={{ marginBottom: "20px" }}>전체 제품</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px"
            }}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    background: `linear-gradient(135deg, hsl(${
                      i * 60
                    }, 70%, 60%), hsl(${i * 60 + 30}, 70%, 50%))`,
                    borderRadius: "6px",
                    marginBottom: "12px"
                  }}
                />
                <h4>제품 {i + 1}</h4>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  ₩{(i + 1) * 10000}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      label: "인기",
      badge: "🔥",
      content: (
        <div style={{ padding: "30px" }}>
          <h3 style={{ marginBottom: "20px" }}>인기 제품</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px"
            }}
          >
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    background: `linear-gradient(135deg, #ff6b6b, #ee5a6f)`,
                    borderRadius: "6px",
                    marginBottom: "12px"
                  }}
                />
                <h4>인기 제품 {i + 1}</h4>
                <p style={{ fontSize: "14px", color: "#666" }}>⭐⭐⭐⭐⭐</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      label: "신상품",
      badge: 12,
      content: (
        <div style={{ padding: "30px" }}>
          <h3 style={{ marginBottom: "20px" }}>신상품</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px"
            }}
          >
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    background: `linear-gradient(135deg, #4facfe, #00f2fe)`,
                    borderRadius: "6px",
                    marginBottom: "12px"
                  }}
                />
                <h4>신상품 {i + 1}</h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#4facfe",
                    fontWeight: "600"
                  }}
                >
                  NEW
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      label: "세일",
      badge: "-50%",
      content: (
        <div style={{ padding: "30px" }}>
          <h3 style={{ marginBottom: "20px" }}>할인 제품</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px"
            }}
          >
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    background: `linear-gradient(135deg, #f093fb, #f5576c)`,
                    borderRadius: "6px",
                    marginBottom: "12px"
                  }}
                />
                <h4>할인 제품 {i + 1}</h4>
                <p style={{ fontSize: "14px" }}>
                  <span
                    style={{ textDecoration: "line-through", color: "#999" }}
                  >
                    ₩50000
                  </span>
                  <span
                    style={{
                      color: "#f5576c",
                      fontWeight: "600",
                      marginLeft: "8px"
                    }}
                  >
                    ₩25000
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#3b82f6" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Tabs</h2>
      </nav>

      <section className="example-section">
        <h3>Underline (기본)</h3>
        <Tabs tabs={basicTabs} variant="underline" />
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Box</h3>
        <Tabs tabs={basicTabs} variant="box" />
      </section>

      <section className="example-section">
        <h3>Pill</h3>
        <Tabs tabs={basicTabs} variant="pill" />
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Fill (Segmented Control)</h3>
        <Tabs tabs={basicTabs} variant="fill" />
      </section>

      <section className="example-section">
        <h3>Card</h3>
        <Tabs tabs={basicTabs} variant="card" />
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Bordered</h3>
        <Tabs tabs={basicTabs} variant="bordered" />
      </section>

      <section className="example-section">
        <h3>Lifted</h3>
        <div
          style={{
            background: "#f5f5f5",
            padding: "40px",
            borderRadius: "12px"
          }}
        >
          <Tabs tabs={basicTabs} variant="lifted" />
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>Gradient</h3>
        <Tabs tabs={basicTabs} variant="gradient" />
      </section>

      <section className="example-section">
        <h3>Minimal</h3>
        <Tabs tabs={basicTabs} variant="minimal" />
      </section>

      <section
        className="example-section"
        style={{ background: "#0f0f1e", padding: "80px 40px" }}
      >
        <h3 style={{ color: "white", marginBottom: "30px" }}>Neon</h3>
        <Tabs tabs={basicTabs} variant="neon" />
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>아이콘 + 배지</h3>
        <Tabs tabs={iconTabs} variant="box" size="large" />
      </section>

      <section className="example-section">
        <h3>Full Width</h3>
        <Tabs tabs={basicTabs} variant="underline" fullWidth={true} />
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>세로 방향 (Vertical)</h3>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Tabs tabs={basicTabs} variant="underline" orientation="vertical" />
        </div>
      </section>

      <section className="example-section">
        <h3>크기 비교</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div>
            <h4 style={{ marginBottom: "16px", color: "#666" }}>Small</h4>
            <Tabs tabs={basicTabs} variant="pill" size="small" />
          </div>
          <div>
            <h4 style={{ marginBottom: "16px", color: "#666" }}>
              Medium (기본)
            </h4>
            <Tabs tabs={basicTabs} variant="pill" size="medium" />
          </div>
          <div>
            <h4 style={{ marginBottom: "16px", color: "#666" }}>Large</h4>
            <Tabs tabs={basicTabs} variant="pill" size="large" />
          </div>
        </div>
      </section>

      <section className="example-section" style={{ background: "#f5f5f5" }}>
        <h3>제품 탭 (실전 예제)</h3>
        <div
          style={{ background: "#fff", borderRadius: "12px", padding: "40px" }}
        >
          <Tabs tabs={productTabs} variant="underline" size="large" />
        </div>
      </section>
    </div>
  );
};
