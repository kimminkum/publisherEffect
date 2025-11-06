import React from "react";
import { Link } from "react-router-dom";
import { ProductSwiper, ScrollProgress } from "../components";
import "./ExamplePage.css";

export const ProductSwiperExample: React.FC = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      title: "프리미엄 헤드폰",
      description:
        "최고급 사운드 품질과 편안한 착용감을 제공하는 프리미엄 헤드폰입니다. 노이즈 캔슬링 기능으로 더욱 몰입감 있는 청취 경험을 선사합니다."
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      title: "스마트 워치",
      description:
        "건강 관리와 스타일을 동시에 챙기는 스마트 워치. 심박수 모니터링, 운동 추적, 알림 기능 등 다양한 기능을 제공합니다."
    },
    {
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
      title: "무선 이어폰",
      description:
        "완벽한 핏과 뛰어난 음질의 무선 이어폰. 장시간 배터리 수명으로 하루 종일 음악을 즐기세요."
    },
    {
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
      title: "카메라 렌즈",
      description:
        "전문가급 사진 촬영을 위한 고성능 렌즈. 선명하고 생생한 이미지를 담아보세요."
    }
  ];

  return (
    <div className="example-page">
      <ScrollProgress position="top" height={4} color="#007aff" />

      <nav className="example-nav">
        <Link to="/" className="back-btn">
          ← 홈으로
        </Link>
        <h2>Product Swiper</h2>
      </nav>

      <div
        style={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>일반 모드 (버튼 & 스크롤)</h3>
          <p style={{ marginTop: "12px", color: "#666" }}>
            스크롤하거나 버튼을 클릭하세요
            <br />
            이전/다음 텍스트가 그라데이션 블러 효과로 표시됩니다
          </p>
        </div>
      </div>

      <ProductSwiper
        slides={products}
        textPosition="left"
        gradientOverlay={true}
      />

      <div
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>Sticky Mode (스크롤로 자동 제어)</h3>
        <p style={{ marginTop: "12px", color: "#666" }}>
          ↓ 아래로 스크롤하면 제품을 모두 볼 때까지 섹션에 고정됩니다 ↓
        </p>
      </div>

      <ProductSwiper
        slides={products}
        textPosition="right"
        stickyMode={true}
        gradientOverlay={true}
      />

      <div
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5"
        }}
      >
        <h3>Product Swiper 예제 완료</h3>
      </div>
    </div>
  );
};
