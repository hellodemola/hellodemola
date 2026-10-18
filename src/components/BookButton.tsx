"use client";

import { ReactNode, useCallback } from "react";
import { CALENDLY_URL } from "@/data/site";
import { buttonClass, type ButtonVariant } from "./button";

type CalendlyWindow = Window & {
  Calendly?: { initPopupWidget: (opts: { url: string }) => void };
};

const SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const STYLES = "https://assets.calendly.com/assets/external/widget.css";

// Loads Calendly's popup script on first click only, so pages stay light.
export function loadCalendly(): Promise<void> {
  const w = window as CalendlyWindow;
  if (w.Calendly) return Promise.resolve();
  if (!document.querySelector(`link[href="${STYLES}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLES;
    document.head.appendChild(link);
  }
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT}"]`);
    const script = existing ?? document.createElement("script");
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject());
    if (!existing) {
      script.src = SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  });
}

// Opens the 30-minute call in a Calendly popup. Works as a plain link to
// Calendly too, if scripts are blocked or haven't loaded.
export default function BookButton({
  children = "Book a 30-min call",
  variant = "accent",
  className = "",
}: {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const open = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await loadCalendly();
      (window as CalendlyWindow).Calendly?.initPopupWidget({ url: CALENDLY_URL });
    } catch {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  }, []);

  return (
    <a href={CALENDLY_URL} onClick={open} className={`${buttonClass(variant)} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
