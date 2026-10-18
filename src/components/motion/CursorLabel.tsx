"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

// A small pill that follows the mouse while it's over the wrapped area,
// e.g. "View case study" over a project. Mouse only; touch and keyboard
// users get the normal link.
export default function CursorLabel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  // The pointer position drives these; the springs follow it. Setting the
  // springs directly would be undone when the component re-renders.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.4 });
  const y = useSpring(my, { stiffness: 500, damping: 40, mass: 0.4 });

  return (
    <div
      ref={ref}
      className="relative"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
        if (!show) {
          // Appear under the cursor rather than flying in from a corner.
          x.jump(mx.get());
          y.jump(my.get());
          setShow(true);
        }
      }}
      onPointerLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink px-4 py-2 text-sm font-medium whitespace-nowrap text-paper shadow-xl"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          >
            {label} →
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
