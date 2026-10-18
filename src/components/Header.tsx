"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SOCIALS } from "@/data/site";
import BookButton from "./BookButton";
import Magnetic from "./motion/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className={`relative grid size-10 place-items-center rounded-full font-serif text-2xl italic ${light ? "bg-paper text-ink" : "bg-ink text-paper"}`}>
        d
        <span className="pulse-dot absolute -top-0.5 -right-0.5 size-3 rounded-full border-2 border-paper bg-green-500" />
      </span>
      <span className="text-xl font-semibold tracking-tight">hellodemola</span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  // The menu remembers the page it was opened on, so it closes itself
  // after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);
  // Hover is remembered with its page, so a highlight never sticks after
  // navigating away mid-hover.
  const [hover, setHover] = useState<{ href: string; on: string } | null>(null);
  const hovered = hover?.on === pathname ? hover.href : null;
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Stop the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const active = NAV.find((n) => pathname === n.href || pathname.startsWith(`${n.href}/`))?.href ?? null;
  const highlight = hovered ?? active;

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
        <motion.div
          className="relative mx-auto flex items-center justify-between rounded-full border transition-[background-color,border-color,box-shadow] duration-500"
          animate={{
            maxWidth: scrolled ? 1040 : 1280,
            height: scrolled ? 64 : 76,
            paddingLeft: scrolled ? 12 : 20,
            paddingRight: scrolled ? 10 : 12,
          }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            backgroundColor: scrolled ? "rgba(15,17,21,0.92)" : "rgba(255,255,255,0.65)",
            borderColor: scrolled ? "rgba(255,255,255,0.08)" : "var(--color-line)",
            boxShadow: scrolled ? "0 20px 50px -20px rgba(15,17,21,0.5)" : "none",
            color: scrolled ? "var(--color-paper)" : "var(--color-ink)",
            backdropFilter: "blur(14px)",
          }}
        >
          <Link href="/" aria-label="hellodemola, home">
            <Wordmark light={scrolled} />
          </Link>

          <nav className="hidden md:block" aria-label="Main" onMouseLeave={() => setHover(null)}>
            <ul className="flex items-center gap-1">
              {NAV.map((item) => {
                const isActive = active === item.href;
                return (
                  <li key={item.href} className="relative">
                    {highlight === item.href && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full ${scrolled ? "bg-white/12" : "bg-ink"}`}
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHover({ href: item.href, on: pathname })}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative block rounded-full px-5 py-2.5 text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
                        highlight === item.href ? "text-paper" : scrolled ? "text-paper/70 hover:text-paper" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.25}>
              <BookButton className="!px-6 !py-3 !text-[15px] !font-semibold shadow-lg shadow-accent/25">Book a call</BookButton>
            </Magnetic>
          </div>

          <button
            type="button"
            className={`relative z-50 grid size-12 place-items-center rounded-full md:hidden ${scrolled ? "bg-paper text-ink" : "bg-ink text-paper"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>

          {/* Reading progress */}
          <motion.span
            aria-hidden="true"
            className="absolute right-6 -bottom-px left-6 h-0.5 origin-left rounded-full bg-accent"
            style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
          />
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            data-lenis-prevent
            className="fixed inset-0 z-30 flex flex-col bg-night px-6 pt-28 pb-10 text-paper md:hidden"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...NAV].map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-baseline gap-4 py-2 text-5xl font-semibold tracking-tight ${pathname === item.href ? "text-accent" : ""}`}
                    >
                      <span className="font-mono text-sm text-night-muted">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              className="mt-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BookButton className="w-full !py-4 !text-base" />
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-night-muted">
                {SOCIALS.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
