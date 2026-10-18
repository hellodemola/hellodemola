"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { Fragment, useRef, type ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type HeadingPart = { text: string; accent?: boolean };

// A headline whose words rise out of a mask one after another. Accent parts
// use the serif italic. Screen readers get the plain sentence.
export default function SplitHeading({
  parts,
  as: Tag = "h1",
  className = "",
  delay = 0,
  inView = false,
}: {
  parts: HeadingPart[];
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Wait until scrolled into view instead of animating on load. */
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  // The heading as a whole decides when to play. Watching each word would
  // miss short ones, which start fully hidden below their mask.
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const play = !inView || seen;
  const words = parts.flatMap((part) =>
    part.text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({ word, accent: part.accent })),
  );
  const label = parts.map((p) => p.text).join("");

  return (
    <Tag ref={ref} className={className} aria-label={label}>
      {words.map(({ word, accent }, i) => (
        <Fragment key={i}>
          <span
            aria-hidden="true"
            className="inline-block overflow-hidden pb-[0.08em] align-bottom"
          >
            <motion.span
              className={`inline-block ${accent ? "pr-[0.06em] font-serif font-normal text-accent italic" : ""}`}
              initial={reduce ? false : { y: "110%", rotate: 4 }}
              animate={play ? { y: "0%", rotate: 0 } : undefined}
              transition={{ duration: 1, delay: delay + i * 0.06, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
          {/* The space sits outside the mask, or inline-block would swallow it. */}
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}
