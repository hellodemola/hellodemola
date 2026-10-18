"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/data/site";
import { loadCalendly } from "./BookButton";

type CalendlyInlineWindow = Window & {
  Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
};

// The booking calendar embedded in the page. Initialised by hand rather
// than by Calendly's auto-scan, so it also appears after client-side
// navigation.
export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("primary_color", "ff5a1f");
    loadCalendly()
      .then(() => {
        el.replaceChildren();
        (window as CalendlyInlineWindow).Calendly?.initInlineWidget({ url: url.toString(), parentElement: el });
      })
      .catch(() => {});
  }, []);

  return (
    <div ref={ref} className="h-[700px] w-full overflow-hidden rounded-2xl border border-line bg-white">
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-muted">
        <p>Loading the calendar…</p>
        <a href={CALENDLY_URL} className="text-ink underline underline-offset-4">
          Or open it on Calendly
        </a>
      </div>
    </div>
  );
}
