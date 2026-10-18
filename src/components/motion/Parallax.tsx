"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

// Moves its child slower than the page as you scroll past, for depth.
// Wrap an image that overflows its frame a little (e.g. scale-110).
export default function Parallax({
  children,
  distance = 60,
  clip = true,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  /** Clip to the frame, for an oversized image moving inside it. */
  clip?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <div ref={ref} className={`${clip ? "overflow-hidden" : ""} ${className}`}>
      <motion.div className="h-full w-full" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
