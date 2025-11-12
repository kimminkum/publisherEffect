// Swiper Types
export type PaginationType =
  | "dots"
  | "progressbar"
  | "fraction"
  | "gauge"
  | "none";

export interface SwiperProps {
  slides?: React.ReactNode[];
  paginationType?: PaginationType;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  speed?: number;
  navigation?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
  showRemoteControl?: boolean;
  paginationPosition?: "top" | "bottom" | "left" | "right";
  customCursor?: boolean;
}

// Scroll Progress Types
export interface ScrollProgressProps {
  position?: "top" | "bottom";
  height?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

// Sticky Types
export interface StickyProps {
  children: React.ReactNode;
  top?: number;
  bottom?: number;
  zIndex?: number;
  className?: string;
}

// AOS Types
export type AOSAnimation =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-left"
  | "flip-right";

export interface AOSProps {
  children: React.ReactNode;
  animation?: AOSAnimation;
  duration?: number;
  delay?: number;
  once?: boolean;
  offset?: number;
  className?: string;
}

// Section Stacking Types
export interface SectionStackingProps {
  sections: React.ReactNode[];
  stickyHeight?: number;
  gap?: number;
  className?: string;
  transparent?: boolean;
}

// Image Zoom on Scroll Types - Enhanced
export interface ImageZoomScrollProps {
  imageSrc: string;
  imageAlt?: string;
  initialScale?: number;
  finalScale?: number;
  overlayContent?: React.ReactNode;
  showDimOverlay?: boolean;
  dimOpacity?: number;
  className?: string;
  stickyMode?: boolean;
  textRevealDelay?: number;
}

// Text Effects Types
export type TextEffectType =
  | "reveal"
  | "character-disappear"
  | "word-by-word"
  | "typing"
  | "glitch";

export interface TextEffectProps {
  text: string;
  effect?: TextEffectType;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

// Parallax Types
export interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
}

// Scroll Snap Types
export interface ScrollSnapContainerProps {
  children: React.ReactNode;
  type?: "mandatory" | "proximity";
  axis?: "x" | "y" | "both";
  className?: string;
}

export interface ScrollSnapItemProps {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  className?: string;
}

// Horizontal Scroll Section Types
export interface HorizontalScrollSectionProps {
  children: React.ReactNode[];
  className?: string;
}

// Sticky Image with Text Types
export interface StickyImageWithTextProps {
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  textSections: React.ReactNode[];
  className?: string;
}

// Product Swiper Types
export interface ProductSlide {
  image: string;
  title: string;
  description: string;
}

export interface ProductSwiperProps {
  slides: ProductSlide[];
  textPosition?: "left" | "right";
  className?: string;
  stickyMode?: boolean;
}

// Intro Animation Types
export interface IntroAnimationProps {
  textLines: string[];
  onComplete?: () => void;
  textDuration?: number;
  transitionDuration?: number;
}

// Text Color Transition Types
export interface TextColorTransitionProps {
  lines: string[];
  startColor?: string;
  endColor?: string;
  className?: string;
}

// Curtain Reveal Types
export interface CurtainRevealProps {
  imageSrc: string;
  imageAlt?: string;
  curtainColor?: string;
  triggerOffset?: number;
  className?: string;
  scrollControlled?: boolean;
  openThreshold?: number;
}

// Section Navigation Types
export interface SectionNavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
  className?: string;
}

// Full Page Scroll Types
export interface FullPageScrollProps {
  children: React.ReactNode[];
  className?: string;
}

// 3D Card Hover Types
export interface Card3DHoverProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

// Magnetic Button Types
export interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

// Scroll Triggered Counter Types
export interface ScrollCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

// Image Comparison Slider Types
export interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

// Carousel Types
export interface CarouselProps {
  items: React.ReactNode[];
  itemsPerView?: number;
  gap?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

// Infinite Carousel Types
export interface InfiniteCarouselProps {
  items: React.ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
}

// Tabs Types
export interface TabItem {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  badge?: number | string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveIndex?: number;
  onChange?: (index: number) => void;
  variant?:
    | "underline"
    | "box"
    | "pill"
    | "fill"
    | "card"
    | "bordered"
    | "lifted"
    | "gradient"
    | "minimal"
    | "neon";
  orientation?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  animated?: boolean;
  className?: string;
}

// Text Scramble Types
export interface TextScrambleProps {
  text: string;
  speed?: number;
  scrambleSpeed?: number;
  characters?: string;
  trigger?: "auto" | "click" | "hover";
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

// Split Text Types
export interface SplitTextProps {
  text: string;
  animation?:
    | "fade-up"
    | "fade-in"
    | "scale"
    | "rotate"
    | "slide-left"
    | "bounce";
  staggerDelay?: number;
  splitBy?: "char" | "word" | "line";
  triggerOnce?: boolean;
  className?: string;
}

// Morphing Blob Types
export interface MorphingBlobProps {
  size?: number;
  colors?: string[];
  speed?: number;
  blur?: number;
  className?: string;
}

// Ripple Button Types
export interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rippleColor?: string;
  duration?: number;
}

// Typewriter Types
export interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
}

// Text Gradient Animation Types
export interface TextGradientAnimationProps {
  text: string;
  colors?: string[];
  speed?: number;
  direction?: "left-right" | "right-left" | "top-bottom" | "bottom-top";
  className?: string;
}

// Scroll Progress Circle Types
export interface ScrollProgressCircleProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  showPercentage?: boolean;
  className?: string;
}

// Toast Types
export interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
  onClose?: () => void;
  showCloseButton?: boolean;
}

// SVG Draw Types
export interface SVGDrawProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  strokeColor?: string;
  strokeWidth?: number;
  triggerOnce?: boolean;
  className?: string;
}

// Particle Effect Types
export interface ParticleEffectProps {
  color?: string;
  particleCount?: number;
  particleSize?: number;
  speed?: number;
  followMouse?: boolean;
  className?: string;
}

// Smooth Scroll Types
export interface SmoothScrollProps {
  children: React.ReactNode;
  speed?: number;
  smoothness?: number;
  className?: string;
}

// Image Reveal Types
export interface ImageRevealProps {
  src: string;
  alt?: string;
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  delay?: number;
  className?: string;
}
