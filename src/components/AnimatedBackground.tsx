import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function AnimatedBackground() {
  const mountains = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLDivElement>(".parallax").forEach((layer) => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * parseFloat(depth || "1"));
        gsap.to(layer, { y: movement, ease: "none" });
      });
    },
    { dependencies: [mountains], scope: mountains, revertOnUpdate: true }
  );

  return (
    <div className="mountains" ref={mountains}>
      <div className="layer-bg layer parallax" data-depth="1"></div>
      <div className="layer-1 layer parallax" data-depth="1"></div>
      <div className="layer-2 layer parallax" data-depth="1"></div>
      <div className="layer-3 layer parallax" data-depth="1"></div>
      <div className="layer-overlay layer parallax" data-depth="1"></div>
      <div className="layer-4 layer parallax" data-depth="1"></div>
      <div className="layer-5 layer parallax" data-depth="1"></div>
      <div className="layer-6 layer parallax" data-depth="1"></div>
    </div>
  );
}
