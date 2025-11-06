# 기여 가이드

Publisher Components Library에 기여해 주셔서 감사합니다! 🎉

## 새로운 컴포넌트 추가하기

### React/TypeScript 컴포넌트

1. **타입 정의 추가** (`react-typescript/src/types/index.ts`):

```typescript
export interface MyComponentProps {
  // props 정의
}
```

2. **컴포넌트 생성** (`react-typescript/src/components/MyComponent/`):

```
MyComponent/
├── MyComponent.tsx
├── MyComponent.css
└── index.ts
```

3. **컴포넌트 구현**:

```tsx
import React from "react";
import { MyComponentProps } from "../../types";
import "./MyComponent.css";

export const MyComponent: React.FC<MyComponentProps> = (
  {
    // props
  }
) => {
  return <div className="my-component">{/* 컴포넌트 내용 */}</div>;
};
```

4. **Export 추가** (`react-typescript/src/components/index.ts`):

```typescript
export { MyComponent } from "./MyComponent";
```

### Vanilla JavaScript 컴포넌트

1. **컴포넌트 생성** (`vanilla/components/my-component/`):

```
my-component/
├── my-component.js
└── my-component.css
```

2. **클래스 구현**:

```javascript
class MyComponent {
  constructor(options = {}) {
    this.options = {
      // 기본 옵션
      ...options
    };
    this.init();
  }

  init() {
    // 초기화 로직
  }

  destroy() {
    // 정리 로직
  }
}

// Export
if (typeof module !== "undefined" && module.exports) {
  module.exports = MyComponent;
}
```

## 컴포넌트 작성 가이드라인

### 1. 재사용성

- 컴포넌트는 독립적이어야 합니다
- 외부 의존성을 최소화하세요
- 다양한 상황에서 사용 가능해야 합니다

### 2. 커스터마이징

- 충분한 옵션/props를 제공하세요
- CSS 변수를 활용하세요
- 기본값을 제공하세요

### 3. 성능

- 불필요한 리렌더링을 방지하세요
- 스크롤 이벤트는 passive로 설정하세요
- requestAnimationFrame을 활용하세요

### 4. 접근성

- 적절한 ARIA 속성을 추가하세요
- 키보드 네비게이션을 지원하세요
- 시맨틱 HTML을 사용하세요

### 5. 문서화

- JSDoc 주석을 작성하세요
- README에 사용 예제를 추가하세요
- TypeScript 타입을 정의하세요

## 코드 스타일

### JavaScript/TypeScript

- 들여쓰기: 2 스페이스
- 세미콜론 사용
- 함수명: camelCase
- 클래스명: PascalCase
- 상수: UPPER_SNAKE_CASE

### CSS

- 클래스명: kebab-case
- BEM 네이밍 권장
- CSS 변수는 `--component-property` 형식

## 예제 작성

새로운 컴포넌트를 추가할 때는 반드시 예제도 함께 작성해 주세요:

1. React 예제: `react-typescript/src/App.tsx`에 추가
2. Vanilla 예제: `vanilla/examples/index.html`에 추가

## Pull Request

1. 기능 브랜치를 생성하세요: `git checkout -b feature/my-component`
2. 변경사항을 커밋하세요: `git commit -m "Add MyComponent"`
3. 브랜치를 푸시하세요: `git push origin feature/my-component`
4. Pull Request를 생성하세요

### PR 체크리스트

- [ ] 코드가 정상적으로 동작하는가?
- [ ] 타입 정의가 있는가? (React/TypeScript)
- [ ] CSS가 포함되어 있는가?
- [ ] 예제가 추가되었는가?
- [ ] README가 업데이트되었는가?
- [ ] 반응형이 지원되는가?
- [ ] 접근성이 고려되었는가?

## 버그 리포트

버그를 발견하셨나요? 다음 정보를 포함하여 이슈를 등록해 주세요:

- 버그 설명
- 재현 방법
- 예상 동작
- 실제 동작
- 브라우저 및 버전
- 스크린샷 (선택사항)

## 기능 제안

새로운 기능을 제안하고 싶으신가요?

- 기능 설명
- 사용 사례
- 예상되는 API
- 코드 예제 (선택사항)

감사합니다! 🙏
