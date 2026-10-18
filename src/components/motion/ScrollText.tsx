"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import type { HeadingPart } from "./SplitHeading";

function Word({ children, progress, range, accent }: { children: string; progress: MotionValue<number>; range: [number, number]; accent?: boolean }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? "font-serif font-normal text-accent italic" : undefined}>
      {children}{" "}
    </motion.span>
  );
}

// A big statement whose words light up one by one as it scrolls through
// the viewport.
export default function ScrollText({ parts, className = "" }: { parts: HeadingPart[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = parts.flatMap((p) => p.text.split(" ").filter(Boolean).map((w) => ({ w, accent: p.accent })));

  return (
    <p ref={ref} className={className}>
      {words.map(({ w, accent }, i) =>
        reduce ? (
          <span key={i} className={accent ? "font-serif font-normal text-accent italic" : undefined}>
            {w}{" "}
          </span>
        ) : (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={accent}>
            {w}
          </Word>
        ),
      )}
    </p>
  );
}
