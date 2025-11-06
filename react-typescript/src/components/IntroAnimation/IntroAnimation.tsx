import React, { useState, useEffect } from "react";
import { IntroAnimationProps } from "../../types";
import "./IntroAnimation.css";

export const IntroAnimation: React.FC<IntroAnimationProps> = ({
  textLines,
  onComplete,
  textDuration = 1000,
  transitionDuration = 1500
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("🎬 IntroAnimation 시작");

    // 전체 애니메이션 시간 계산
    const totalTime = textLines.length * textDuration + transitionDuration;

    console.log(`⏱️ 총 ${totalTime}ms 후 완료 예정`);

    // 전체 시간 후 완료
    const completeTimer = setTimeout(() => {
      console.log("✅ 애니메이션 시간 완료!");
      setVisible(false);

      // 완료 콜백 호출
      if (onComplete) {
        console.log("📞 onComplete 호출!");
        onComplete();
      }
    }, totalTime);

    return () => {
      console.log("🧹 IntroAnimation cleanup");
      clearTimeout(completeTimer);
    };
  }, []);

  const handleSkip = () => {
    console.log("⏭️ Skip 버튼 클릭!");
    setVisible(false);
    if (onComplete) {
      onComplete();
    }
  };

  if (!visible) {
    console.log("👋 IntroAnimation 제거됨");
    return null;
  }

  return (
    <div className="intro-animation">
      <div className="intro-content">
        {textLines.map((line, index) => (
          <div key={index} className="intro-line">
            {line}
          </div>
        ))}
      </div>

      <button className="intro-skip" onClick={handleSkip}>
        Skip →
      </button>
    </div>
  );
};
