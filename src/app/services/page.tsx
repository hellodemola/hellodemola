import type { Metadata } from "next";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import { Accent, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { PROCESS, SERVICES } from "@/data/services";
import SplitHeading from "@/components/motion/SplitHeading";
import { pageMetadata } from "@/lib/og-pages";

export const metadata: Metadata = pageMetadata(
  "Services",
  "AI features, mobile apps for iOS and Android, web apps and MVPs, websites that win business, and technical leadership, from an AI product engineer with a decade of shipping.",
  { alternates: { canonical: "/services" }, openGraph: { url: "/services" } },
);

const FAQS = [
  {
    q: "Do you build mobile apps?",
    a: "Yes. I build iPhone and Android apps in React Native from one codebase, handle the App Store and Google Play releases, and share one API with your website so everything stays in sync.",
  },
  {
    q: "Do I need AI in my product?",
    a: "Not always. On our first call I’ll tell you honestly whether AI would save you time or money, or whether a simpler solution is better.",
  },
  {
    q: "How do you price work?",
    a: "Most projects get a fixed quote after a short scoping step, so you know the cost before we start. Ongoing work and advisory can be billed monthly.",
  },
  {
    q: "How long does a project take?",
    a: "A business website usually takes two to four weeks. An MVP or AI feature takes four to ten, depending on scope. You’ll see progress on a live link every week.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Yes. I can lead a build, slot in alongside your engineers, or review and unblock work that has stalled.",
  },
  {
    q: "Where are you based?",
    a: "I work remotely with clients in Nigeria, the UK and beyond, and overlap with both West African and European working hours.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Container className="pt-16 pb-16 sm:pt-24">
        <Eyebrow>Services</Eyebrow>
        <SplitHeading className="mt-5 max-w-4xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl" parts={[{ text: "Software that earns its keep, with " }, { text: "AI", accent: true }, { text: " where it counts" }]} />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Four ways I help businesses. Every engagement starts with a free 30-minute call.
        </p>
        <BookButton className="mt-9" />
      </Container>

      <Container className="pb-24">
        <div className="divide-y divide-line border-y border-line">
          {SERVICES.map((s, i) => (
            <section key={s.slug} id={s.slug} className="grid gap-6 py-12 md:grid-cols-[80px_1fr_1.2fr] md:gap-10">
              <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{s.summary}</p>
              </div>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>

      <section className="bg-night py-24 text-paper">
        <Container>
          <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-night-muted uppercase">
            <span className="h-px w-6 bg-accent" />
            Process
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            How a project <Accent>runs</Accent>
          </h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="bg-night-2 p-8">
                <p className="font-mono text-sm text-accent">Step {i + 1}</p>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-night-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow="Questions" title="Before you book" intro={<>Something else on your mind? <Link href="/contact" className="text-ink underline underline-offset-4">Ask me directly</Link>.</>} />
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                {f.q}
                <span aria-hidden="true" className="text-2xl text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </>
  );
}
