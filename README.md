# Publisher Components Library 🎨

퍼블리셔를 위한 재사용 가능한 컴포넌트 라이브러리입니다.
다양한 바리에이션과 옵션을 제공하여 프로젝트에 바로 적용할 수 있습니다.

## 📁 프로젝트 구조

```
pub/
├── react-typescript/     # React + TypeScript 버전
│   ├── src/
│   │   ├── components/   # 모든 재사용 컴포넌트
│   │   ├── hooks/        # 커스텀 훅
│   │   ├── types/        # TypeScript 타입 정의
│   │   ├── pages/        # 예제 페이지
│   │   └── App.tsx       # 메인 앱 (라우터 포함)
│   └── package.json
│
├── vanilla/              # Vanilla HTML/CSS/JS 버전
│   ├── components/       # 독립적인 컴포넌트
│   ├── utils/            # 유틸리티 함수
│   └── examples/         # 데모 페이지
│
├── 사용설명서.txt        # 상세 사용 설명서
├── CONTRIBUTING.md       # 기여 가이드
└── README.md
```

## 🎯 제공 컴포넌트

### 기본 컴포넌트

- ✅ **Swiper** - 다양한 Pagination (dots, progressbar, fraction, gauge) + 리모컨
- ✅ **AOS** - 12가지 스크롤 애니메이션
- ✅ **Text Effects** - 5가지 텍스트 애니메이션
- ✅ **Scroll Progress** - 스크롤 진행도 표시
- ✅ **Sticky** - 고정 요소
- ✅ **Parallax** - 패럴랙스 스크롤

### 이미지 효과

- ✅ **Image Zoom** - 스크롤 시 이미지 확대
- ✅ **Sticky Image Zoom** ⭐ - 섹션 고정 + 점진적 확대 + 텍스트 순차 표시
- ✅ **Curtain Reveal** ⭐ - 좌우 커튼 열림 효과
- ✅ **Image Comparison** ⭐ - Before/After 이미지 비교 슬라이더

### 스크롤 효과

- ✅ **Section Stacking** - 섹션 쌓기 (일반 + 투명 모드)
- ✅ **Horizontal Scroll** ⭐ - 세로→가로 스크롤 자동 전환
- ✅ **Text Color Transition** ⭐ - 좌→우 색상 전환 (3줄)
- ✅ **Sticky Image with Text** ⭐ - 이미지 고정 + 텍스트 스크롤

### 제품 소개

- ✅ **Product Swiper** ⭐ - 중앙 이미지 + 측면 텍스트 + 그라데이션 효과
  - 일반 모드: 버튼/스크롤 제어
  - Sticky 모드: 모든 제품 볼 때까지 섹션 고정

### 인터랙티브

- ✅ **Card3DHover** ⭐ - 마우스 따라 3D 회전
- ✅ **MagneticButton** ⭐ - 자석 효과 버튼
- ✅ **ScrollCounter** ⭐ - 스크롤 트리거 카운터
- ✅ **Section Navigation** ⭐ - 구역별 네비게이션 (쇼핑몰 스타일)

### 특수 효과

- ✅ **IntroAnimation** ⭐ - 인트로 애니메이션 (텍스트 사라짐 → 줌인)
- ✅ **Scroll Snap** - 스크롤 스냅

## 🚀 시작하기

### React + TypeScript 버전

```bash
cd react-typescript
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속

### Vanilla 버전

```bash
# 방법 1: 직접 열기
vanilla/examples/menu.html 파일을 브라우저에서 열기

# 방법 2: 로컬 서버
cd vanilla
npx serve .
```

## 📖 주요 기능 설명

### 🎬 Sticky Image Zoom (섹션 고정 이미지 확대)

섹션에 걸리면:

1. 이미지가 점진적으로 확대 (10% → 100%)
2. 이미지가 다 차면 딤 처리
3. 텍스트가 한글자씩 나타남
4. 완료 후 다음 섹션 이동 가능

```tsx
<StickyImageZoom
  imageSrc="image.jpg"
  initialScale={0.1} // 시작 크기
  finalScale={1} // 최종 크기
  overlayContent={<h2>텍스트</h2>}
/>
```

### 🎨 Product Swiper (제품 스와이퍼)

**그라데이션 오버레이:**

- 이전 텍스트: 위→아래 흰색→투명
- 현재 텍스트: 완전 선명
- 다음 텍스트: 아래→위 흰색→투명

**두 가지 모드:**

1. 일반 모드: 버튼/스크롤 제어
2. Sticky 모드: 모든 제품 볼 때까지 고정

```tsx
<ProductSwiper
  slides={products}
  stickyMode={true} // 고정 모드
  gradientOverlay={true} // 그라데이션
/>
```

### 🌈 Text Color Transition

3줄 텍스트가 좌→우로 색상 전환

```tsx
<TextColorTransition
  lines={["첫째줄", "둘째줄", "셋째줄"]}
  startColor="#ccc"
  endColor="#000"
/>
```

### 🎭 Curtain Reveal

좌우 커튼이 열리면서 이미지 공개

```tsx
<CurtainReveal
  imageSrc="image.jpg"
  curtainColor="#fff" // 배경색과 맞추기
/>
```

### 🧭 Section Navigation

구역별로 네비게이션이 따라다니는 효과

```tsx
<SectionNavigation
  sections={[
    { id: "section1", label: "소개" },
    { id: "section2", label: "기능" }
  ]}
/>
```

### 🎮 Swiper 리모컨

재생/일시정지, 이전/다음 제어

```tsx
<Swiper
  showRemoteControl={true} // 리모컨 표시
  paginationPosition="top" // 'top'|'bottom'|'left'|'right'
/>
```

### 🎯 기타 신기능

**3D Card Hover:**

```tsx
<Card3DHover intensity={15}>
  <div>카드 내용</div>
</Card3DHover>
```

**Magnetic Button:**

```tsx
<MagneticButton strength={0.5}>Click Me</MagneticButton>
```

**Scroll Counter:**

```tsx
<ScrollCounter end={1000} suffix="+" duration={2000} />
```

**Image Comparison:**

```tsx
<ImageComparison beforeImage="before.jpg" afterImage="after.jpg" />
```

## 🎨 커스터마이징

모든 컴포넌트는 CSS 변수를 통해 쉽게 커스터마이징할 수 있습니다.

```css
:root {
  --swiper-pagination-color: #007aff;
  --scroll-progress-height: 4px;
  --animation-duration: 0.6s;
}
```

## 📱 반응형

모든 컴포넌트는 모바일, 태블릿, 데스크톱 환경을 지원합니다.

## 📚 상세 문서

**`사용설명서.txt`** 파일에서 모든 컴포넌트의 상세한 사용법을 확인하세요:

- 각 컴포넌트별 사용법
- 옵션 설명
- 실전 예제
- 문제 해결 가이드

## 🎓 예제 페이지 (React)

홈(/) → 각 예제 선택:

- Swiper (리모컨, pagination 배치)
- Sticky Image Zoom (섹션 고정 확대)
- Product Swiper (일반/Sticky 모드)
- Text Color Transition (색상 전환)
- Curtain Reveal (커튼 열림)
- Section Navigation (구역 네비)
- 3D Effects (3D 카드, 자석 버튼)
- Image Comparison (비교 슬라이더)
- Advanced (고급 효과 조합)
- 그 외 다수...

## 💡 추천 조합

### 랜딩 페이지

```tsx
<IntroAnimation ... />
<StickyImageZoom ... />
<ProductSwiper stickyMode={true} ... />
<ScrollCounter ... />
```

### 포트폴리오

```tsx
<SectionNavigation ... />
<Card3DHover>
  <HorizontalScrollSection>
    ...프로젝트들
  </HorizontalScrollSection>
</Card3DHover>
```

### 제품 소개

```tsx
<CurtainReveal ... />
<ProductSwiper stickyMode={true} gradientOverlay={true} ... />
<ImageComparison ... />
```

## 🔧 성능 최적화

- ✅ Passive 이벤트 리스너
- ✅ requestAnimationFrame 사용
- ✅ will-change 속성
- ✅ 메모리 누수 방지
- ✅ 자동 cleanup

## 📝 라이센스

MIT License - 자유롭게 사용하세요!

---

**🌟 새로운 기능 계속 추가 중!**

더 필요한 컴포넌트나 효과가 있다면 CONTRIBUTING.md를 참고하여 기여해주세요.
