# React TypeScript Publisher Components

React와 TypeScript로 작성된 퍼블리셔용 재사용 가능한 컴포넌트 라이브러리입니다.

## 🚀 빠른 시작

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 접속

### 빌드

```bash
npm run build
```

## 📦 전체 컴포넌트 목록 (20+개)

### 기본 컴포넌트

1. **Swiper** - 리모컨, pagination 배치 설정
2. **AOS** - 12가지 스크롤 애니메이션
3. **Text Effects** - 5가지 텍스트 효과
4. **Scroll Progress** - 진행도 표시
5. **Sticky** - 고정 요소
6. **Parallax** - 패럴랙스

### 이미지 효과 ⭐

7. **Image Zoom** - 기본 이미지 확대
8. **Sticky Image Zoom** - 섹션 고정 + 점진 확대 + 텍스트 순차 표시
9. **Curtain Reveal** - 좌우 커튼 열림
10. **Image Comparison** - Before/After 비교

### 스크롤 효과 ⭐

11. **Section Stacking** - 섹션 쌓기 (일반/투명)
12. **Horizontal Scroll** - 세로→가로 전환
13. **Text Color Transition** - 좌→우 색상 전환
14. **Sticky Image with Text** - 이미지 고정, 텍스트 스크롤

### 제품/상품 ⭐

15. **Product Swiper** - 제품 소개 최적화 (일반/Sticky)

### 인터랙티브 ⭐

16. **Card3DHover** - 3D 카드
17. **MagneticButton** - 자석 버튼
18. **ScrollCounter** - 카운터
19. **Section Navigation** - 구역 네비
20. **IntroAnimation** - 인트로

## 🎯 신규 기능 하이라이트

### Sticky Image Zoom

```tsx
import { StickyImageZoom } from "./components";

<StickyImageZoom
  imageSrc="image.jpg"
  initialScale={0.1} // 10%부터 시작
  finalScale={1} // 100%까지 확대
  overlayContent={<h2>텍스트</h2>}
/>;
```

**동작:**
섹션 걸림 → 스크롤로 확대 → 딤 처리 → 텍스트 표시 → 완료

### Product Swiper (개선)

```tsx
// Sticky 모드 - 모든 제품 보기
<ProductSwiper
  slides={products}
  stickyMode={true}
  gradientOverlay={true} // 흰색→투명 그라데이션
/>
```

**특징:**

- 이전 텍스트: 위→아래 선명
- 현재 텍스트: 완전 선명
- 다음 텍스트: 아래→위 선명

### Text Color Transition

```tsx
<TextColorTransition
  lines={["1줄", "2줄", "3줄"]}
  startColor="#ccc"
  endColor="#000"
/>
```

**효과:** 좌→우로 한 줄씩 색상 전환

### Section Navigation

```tsx
<SectionNavigation
  sections={[
    { id: "section1", label: "소개" },
    { id: "section2", label: "기능" }
  ]}
/>
```

**쇼핑몰 스타일:** 구역마다 네비 따라다님

### Swiper 리모컨

```tsx
<Swiper
  showRemoteControl={true}
  paginationPosition="top" // top/bottom/left/right
/>
```

**기능:** 재생/일시정지, 이전/다음, 현재/전체

## 🪝 커스텀 훅

```tsx
// 교차 감지
const { targetRef, isIntersecting } = useIntersectionObserver();

// 스크롤 진행도
const progress = useScrollProgress(); // 0~100

// 스크롤 위치
const { x, y } = useScrollPosition();
```

## 🎨 스타일링

### CSS 변수

```css
:root {
  --swiper-navigation-color: #007aff;
  --swiper-pagination-color: #007aff;
  --aos-duration: 600ms;
}
```

### className prop

```tsx
<Swiper className="my-custom-swiper" />
```

## 📱 반응형

모든 컴포넌트는 768px 이하에서 모바일 최적화 레이아웃으로 자동 전환됩니다.

## 🎓 사용 예제

### 제품 랜딩

```tsx
<IntroAnimation textLines={["Brand", "Name"]} />
<StickyImageZoom ... />
<ProductSwiper stickyMode={true} />
<ScrollCounter end={1000} suffix="+" />
```

### 포트폴리오

```tsx
<SectionNavigation sections={...} />
<HorizontalScrollSection>
  <Card3DHover>...</Card3DHover>
</HorizontalScrollSection>
```

## 📚 문서

- **사용설명서.txt** - 상세 사용법 및 모든 옵션
- **CONTRIBUTING.md** - 새 컴포넌트 추가 가이드
- **README.md** - 전체 개요 (현재 문서)

## 🔧 TypeScript

완전한 타입 지원:

```tsx
import type {
  SwiperProps,
  ProductSwiperProps,
  StickyImageZoomProps,
  TextColorTransitionProps
} from "./types";
```

## 💡 팁

1. **성능**: 모든 스크롤 이벤트는 passive
2. **메모리**: 자동 cleanup
3. **독립성**: 각 컴포넌트 개별 사용 가능
4. **조합**: 여러 컴포넌트 조합 가능

## 📄 라이센스

MIT License - 자유롭게 사용하세요!

---

**🌟 계속 업데이트 중!**
더 필요한 기능이 있다면 알려주세요!
