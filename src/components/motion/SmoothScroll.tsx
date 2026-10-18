"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Inertia scrolling, the weighted feel of most award sites. Skipped for
// people who prefer reduced motion, and on touch devices, which already
// scroll natively.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -80 } });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
