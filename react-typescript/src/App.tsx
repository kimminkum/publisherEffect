import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SwiperExample } from "./pages/SwiperExample";
import { AOSExample } from "./pages/AOSExample";
import { TextEffectsExample } from "./pages/TextEffectsExample";
import { ImageZoomExample } from "./pages/ImageZoomExample";
import { StickyImageZoomExample } from "./pages/StickyImageZoomExample";
import { ParallaxExample } from "./pages/ParallaxExample";
import { SectionStackingExample } from "./pages/SectionStackingExample";
import { HorizontalScrollExample } from "./pages/HorizontalScrollExample";
import { StickyImageExample } from "./pages/StickyImageExample";
import { ProductSwiperExample } from "./pages/ProductSwiperExample";
import { TextColorExample } from "./pages/TextColorExample";
import { CurtainRevealExample } from "./pages/CurtainRevealExample";
import { SectionNavExample } from "./pages/SectionNavExample";
import { Effects3DExample } from "./pages/Effects3DExample";
import { ImageComparisonExample } from "./pages/ImageComparisonExample";
import { AdvancedExample } from "./pages/AdvancedExample";
import { FullPageScrollExample } from "./pages/FullPageScrollExample";
import { CarouselExample } from "./pages/CarouselExample";
import { TabsExample } from "./pages/TabsExample";
import { CreativeEffectsExample } from "./pages/CreativeEffectsExample";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swiper" element={<SwiperExample />} />
        <Route path="/aos" element={<AOSExample />} />
        <Route path="/text-effects" element={<TextEffectsExample />} />
        <Route path="/image-zoom" element={<ImageZoomExample />} />
        <Route path="/sticky-image-zoom" element={<StickyImageZoomExample />} />
        <Route path="/parallax" element={<ParallaxExample />} />
        <Route path="/section-stacking" element={<SectionStackingExample />} />
        <Route
          path="/horizontal-scroll"
          element={<HorizontalScrollExample />}
        />
        <Route path="/sticky-image" element={<StickyImageExample />} />
        <Route path="/product-swiper" element={<ProductSwiperExample />} />
        <Route path="/text-color" element={<TextColorExample />} />
        <Route path="/curtain-reveal" element={<CurtainRevealExample />} />
        <Route path="/section-nav" element={<SectionNavExample />} />
        <Route path="/3d-effects" element={<Effects3DExample />} />
        <Route path="/image-comparison" element={<ImageComparisonExample />} />
        <Route path="/advanced" element={<AdvancedExample />} />
        <Route path="/full-page-scroll" element={<FullPageScrollExample />} />
        <Route path="/carousel" element={<CarouselExample />} />
        <Route path="/tabs" element={<TabsExample />} />
        <Route path="/creative-effects" element={<CreativeEffectsExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
