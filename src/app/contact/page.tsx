import type { Metadata } from "next";
import CalendlyInline from "@/components/CalendlyInline";
import { Container, Eyebrow } from "@/components/ui";
import { CALENDLY_URL, EMAIL, SOCIALS } from "@/data/site";
import SplitHeading from "@/components/motion/SplitHeading";
import { pageMetadata } from "@/lib/og-pages";

export const metadata: Metadata = pageMetadata(
  "Book a call",
  "Book a free 30-minute call with Ademola Onasoga to talk about your product, website or AI idea.",
  { alternates: { canonical: "/contact" }, openGraph: { url: "/contact" } },
);

const AGENDA = [
  "What you want to build, and why now",
  "Where AI could help, and where it wouldn’t",
  "A rough timeline and budget range",
  "Next steps, if we’re a fit",
];

export default function ContactPage() {
  return (
    <Container className="grid gap-12 pt-16 pb-24 sm:pt-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div>
        <Eyebrow>Contact</Eyebrow>
        <SplitHeading className="mt-5 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl" parts={[{ text: "Let’s " }, { text: "talk", accent: true }]} />
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Pick a time for a free 30-minute video call. No pitch deck needed; just bring the idea.
        </p>

        <h2 className="mt-12 font-mono text-xs tracking-widest text-muted uppercase">On the call</h2>
        <ul className="mt-4 space-y-3">
          {AGENDA.map((a) => (
            <li key={a} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {a}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-mono text-xs tracking-widest text-muted uppercase">Prefer to write?</h2>
        <ul className="mt-4 space-y-2">
          {EMAIL && (
            <li>
              <a href={`mailto:${EMAIL}`} className="underline decoration-accent underline-offset-4 hover:text-accent">
                {EMAIL}
              </a>
            </li>
          )}
          {SOCIALS.filter((s) => s.label === "LinkedIn" || s.label === "X").map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-4 hover:text-accent">
                Message me on {s.label} ↗
              </a>
            </li>
          ))}
          <li>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
              Open the calendar on Calendly ↗
            </a>
          </li>
        </ul>
      </div>
      <CalendlyInline />
    </Container>
  );
}
