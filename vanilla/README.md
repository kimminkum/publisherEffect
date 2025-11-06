# Publisher Components Library - Vanilla JavaScript

React-TypeScript 버전과 동일한 기능을 제공하는 순수 JavaScript 버전입니다.

## 🚀 새로 추가된 컴포넌트 (2024)

### 1. Product Swiper

이미지와 텍스트가 함께 전환되며, 이전/다음 텍스트를 미리보기(Peek)할 수 있는 제품 스와이퍼

**사용법:**

```html
<div id="productSwiper"></div>

<link rel="stylesheet" href="components/product-swiper/product-swiper.css" />
<script src="components/product-swiper/product-swiper.js"></script>

<script>
  const swiper = new ProductSwiper(document.getElementById("productSwiper"), {
    slides: [
      {
        image: "path/to/image1.jpg",
        title: "제품 1",
        description: "제품 설명..."
      }
    ],
    textPosition: "right", // 'left' or 'right'
    stickyMode: false // true로 설정하면 스크롤 제어
  });
</script>
```

### 2. Infinite Carousel

자동으로 무한 루프되는 캐러셀

**사용법:**

```html
<div id="infiniteCarousel"></div>

<link
  rel="stylesheet"
  href="components/infinite-carousel/infinite-carousel.css"
/>
<script src="components/infinite-carousel/infinite-carousel.js"></script>

<script>
  const carousel = new InfiniteCarousel(
    document.getElementById("infiniteCarousel"),
    {
      items: ["<div>Item 1</div>", "<div>Item 2</div>"],
      speed: 30, // 초 단위
      direction: "left", // 'left' or 'right'
      gap: 20, // px
      pauseOnHover: true
    }
  );
</script>
```

### 3. Tabs

10가지 스타일을 지원하는 탭 컴포넌트

**스타일:** underline, box, pill, fill, card, bordered, lifted, gradient, minimal, neon

**사용법:**

```html
<div id="tabs"></div>

<link rel="stylesheet" href="components/tabs/tabs.css" />
<script src="components/tabs/tabs.js"></script>

<script>
  const tabs = new Tabs(document.getElementById("tabs"), {
    tabs: [
      {
        label: "홈",
        content: "<div>홈 컨텐츠</div>",
        icon: "🏠", // optional
        badge: 5, // optional
        disabled: false // optional
      }
    ],
    variant: "underline", // 스타일 선택
    orientation: "horizontal", // 'horizontal' or 'vertical'
    size: "medium", // 'small', 'medium', 'large'
    fullWidth: false,
    animated: true,
    onChange: (index) => console.log("Active tab:", index)
  });
</script>
```

## 📦 기존 컴포넌트 (업데이트됨)

### Text Effect

- **Reveal Effect**: 이제 테이프가 아닌 실제 텍스트 색상이 전환됩니다

### Image Zoom Scroll

- **딤 타이밍**: 이미지가 완전히 확대된 후(90%)에 딤 효과가 시작됩니다

## 🎨 데모

새로운 컴포넌트 데모를 확인하세요:

```
examples/new-components.html
```

기존 컴포넌트 데모:

```
examples/index.html
examples/all-features.html
```

## 📖 사용 방법

1. 필요한 CSS 파일을 `<head>`에 포함
2. 필요한 JS 파일을 `</body>` 직전에 포함
3. 컴포넌트 클래스의 인스턴스를 생성
4. 옵션을 통해 커스터마이징

## 🌐 React-TypeScript 버전

React-TypeScript 버전은 `../react-typescript` 디렉토리에서 확인할 수 있습니다.

## 📝 라이센스

MIT License
