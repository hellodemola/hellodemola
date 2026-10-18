import { cacheLife } from "next/cache";
import Link from "next/link";
import { EMAIL, NAV, SITE, SOCIALS } from "@/data/site";
import BookButton from "./BookButton";
import Magnetic from "./motion/Magnetic";
import SplitHeading from "./motion/SplitHeading";

// The year is cached for a day: the page stays prerendered and the
// copyright still rolls over on its own.
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-night text-paper">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 border-b border-night-line pb-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm tracking-widest text-night-muted uppercase">Have something in mind?</p>
            <SplitHeading
              as="h2"
              inView
              className="mt-4 max-w-xl text-4xl leading-tight font-medium tracking-tight sm:text-5xl"
              parts={[{ text: "Let’s talk about what you’re " }, { text: "building.", accent: true }]}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <BookButton />
              </Magnetic>
              {EMAIL && (
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center rounded-full border border-night-line px-6 py-3 text-sm hover:border-paper">
                  {EMAIL}
                </a>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-4 text-night-muted">Pages</p>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-accent">Home</Link></li>
                {NAV.map((n) => (
                  <li key={n.href}><Link href={n.href} className="hover:text-accent">{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-night-muted">Elsewhere</p>
              <ul className="space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{s.label} ↗</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 pt-8 text-sm text-night-muted sm:flex-row">
          <p>© <CopyrightYear /> {SITE.name}</p>
          <p>{SITE.role} · Building for clients in Nigeria, the UK and beyond</p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none -mt-4 overflow-hidden text-center text-[19vw] leading-[0.8] font-medium tracking-[-0.06em] text-transparent select-none [-webkit-text-stroke:1px_var(--color-night-line)]"
      >
        hellodemola
      </p>
    </footer>
  );
}
