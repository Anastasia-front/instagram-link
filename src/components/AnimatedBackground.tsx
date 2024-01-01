import React, { useEffect, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function AnimatedBackground() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#bg-parallax",
      start: "top top",
      end: "bottom bottom",
    });
    gsap.to(".parallax", {
      scrollTrigger: {
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="bg-parallax">
      <div className="mountains">
        {isTop && <p>scroll down</p>}
        <div className="layer-1 layer parallax" data-speed="1"></div>
        <div className="layer-2 layer parallax" data-speed="1"></div>
        <div className="layer-3 layer parallax" data-speed="0.3"></div>
        <div className="layer-overlay layer parallax" data-speed="0.5"></div>
        <div className="layer-4 layer parallax" data-speed="1"></div>
        <div className="layer-5 layer parallax" data-speed="1"></div>
        <div className="layer-6 layer parallax" data-speed="1"></div>
      </div>
      <div className="clouds">
        <div className="layer-1 layer parallax" data-speed="0.6"></div>
        <div className="layer-2 layer parallax" data-speed="0.8"></div>
        <div className="layer-3 layer parallax" data-speed="1"></div>
        <div className="layer-4 layer parallax" data-speed="0.7"></div>
        <div className="layer-5 layer parallax" data-speed="1"></div>
        <div className="layer-6 layer parallax" data-speed="0.9"></div>
        <div className="layer-7 layer parallax" data-speed="1"></div>
      </div>
    </div>
  );
}
