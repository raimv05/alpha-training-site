import React, { useEffect, useRef } from "react";

// Helper component to render Lottie animations using CDN script window.lottie
export default function LottiePlayer({ src, style, className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let anim;

    const initLottie = () => {
      if (window.lottie) {
        anim = window.lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: src,
        });
      }
    };

    initLottie();

    return () => {
      if (anim) anim.destroy();
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      style={style}
      className={`lottie-container-wrapper ${className || ""}`}
    />
  );
}
