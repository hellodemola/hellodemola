import type { Metadata } from "next";
import Image from "next/image";
import BookButton from "@/components/BookButton";
import { buttonClass } from "@/components/button";
import { Accent, Container, Eyebrow } from "@/components/ui";
import { SITE, SOCIALS } from "@/data/site";
import SplitHeading from "@/components/motion/SplitHeading";
import { pageMetadata } from "@/lib/og-pages";

export const metadata: Metadata = pageMetadata(
  "About",
  "Ademola Onasoga (hellodemola): AI product engineer and software engineer, former engineering manager at Enyata, and mentor to developers.",
  { alternates: { canonical: "/about" }, openGraph: { url: "/about" } },
);

const EXPERIENCE: { when: string; role: string; org: string; href?: string; body: string }[] = [
  {
    when: "Now",
    role: "Co-founder",
    org: "Yousure",
    href: "https://yousure.ng",
    body: "Leading product and engineering for a health insurance marketplace and a SaaS workspace for insurance brokers: web apps, admin, API and data.",
  },
  {
    when: "Now",
    role: SITE.current.title,
    org: "Independent and client work",
    body: "Building software products for clients, from first prototype to production.",
  },
  {
    when: "Before",
    role: SITE.previous.title,
    org: SITE.previous.company,
    body: "Led engineering teams shipping products for clients, and mentored founders and developers through the Enyata start-up bootcamp.",
  },
  {
    when: "Across a decade",
    role: "Frontend and product engineer",
    org: "FinTech, remittance, healthcare, e-commerce, EdTech",
    body: "Built and shipped web products end to end, working closely with product, design and business teams.",
  },
];

const TOOLKIT = [
  { group: "AI", items: ["LLM APIs (Claude, OpenAI)", "Retrieval (RAG)", "Agents and tool use", "Evals and guardrails"] },
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Mobile", items: ["React Native", "Expo", "iOS and Android", "App Store and Play releases"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma"] },
  { group: "Delivery", items: ["Vercel", "CI/CD", "Testing", "Team leadership"] },
];

const linkedin = SOCIALS.find((s) => s.label === "LinkedIn")!.href;

export default function AboutPage() {
  return (
    <>
      <Container className="grid items-end gap-12 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Eyebrow>About</Eyebrow>
          <SplitHeading className="mt-5 text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl" parts={[{ text: "Hello, I’m " }, { text: "’Demola.", accent: true }]} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted sm:text-xl">
            <p>
              I’m Ademola Onasoga, known online as <span className="text-ink">hellodemola</span>. I’m an AI product engineer: I
              build the software, and I decide where AI makes it better.
            </p>
            <p>
              For a decade I’ve built products across fintech, remittance, healthcare, e-commerce, edtech, real estate and legal.
              I’ve been the engineer in the code and the engineering manager responsible for the team and the deadline. That
              second role taught me to care about what the business gets, not just what ships.
            </p>
            <p>
              Today I’m co-founder of Yousure, I work as a software engineer, and I take on a small number of client projects on web and mobile. If you have a product
              to build or an AI idea to test, I’d like to hear about it.
            </p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-paper-2 lg:max-w-none">
          <Image src="/images/portrait-mono.jpg" alt="Ademola Onasoga" fill priority sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
        </div>
      </Container>

      <section className="border-t border-line py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>Experience</Eyebrow>
          <ol className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {EXPERIENCE.map((e) => (
              <li key={e.role} className="grid gap-2 bg-paper p-7 sm:grid-cols-[140px_1fr] sm:gap-8">
                <p className="font-mono text-xs tracking-widest text-muted uppercase sm:pt-1.5">{e.when}</p>
                <div>
                  <h2 className="text-xl font-medium tracking-tight">
                    {e.role}{" "}
                    <span className="text-muted">
                      ·{" "}
                      {e.href ? (
                        <a href={e.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                          {e.org} ↗
                        </a>
                      ) : (
                        e.org
                      )}
                    </span>
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">{e.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-night py-20 text-paper sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/bootcamp.jpg" alt="Ademola with developers at a start-up bootcamp" fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-night-muted uppercase">
              <span className="h-px w-6 bg-accent" />
              Community
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
              Teaching makes me a <Accent>better builder</Accent>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-night-muted">
              I’ve mentored developers through the Enyata start-up bootcamp, and I share what I learn on YouTube and in articles.
              Explaining something clearly is the best test of whether you understand it, and clients get the same clarity.
            </p>
            <a href="https://www.youtube.com/@hellodemola3958" target="_blank" rel="noopener noreferrer" className={`${buttonClass("light")} mt-8`}>
              Watch on YouTube ↗
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>Toolkit</Eyebrow>
          <div className="grid gap-8 sm:grid-cols-2">
            {TOOLKIT.map((t) => (
              <div key={t.group}>
                <h2 className="text-lg font-medium">{t.group}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.items.map((i) => (
                    <span key={i} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="recruiters" className="scroll-mt-24 border-t border-line bg-paper-2/60 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Eyebrow>For recruiters</Eyebrow>
            <div>
              <h2 className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
                The <Accent>short</Accent> version
              </h2>
              <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {[
                  ["Focus", "AI product engineering; full-stack web; iOS and Android apps"],
                  ["Experience", "10 years, including engineering management"],
                  ["Current", `Co-founder, Yousure · ${SITE.current.title}`],
                  ["Previous", `${SITE.previous.title}, ${SITE.previous.company}`],
                  ["Core stack", "TypeScript, React, Next.js, React Native, Node.js"],
                  ["Works", "Remote, with teams in Nigeria, the UK and beyond"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-paper p-6">
                    <dt className="font-mono text-xs tracking-widest text-muted uppercase">{k}</dt>
                    <dd className="mt-2 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className={buttonClass("ink")}>
                  View LinkedIn ↗
                </a>
                <BookButton variant="outline">Schedule an intro</BookButton>
              </div>
              <p className="mt-4 text-sm text-muted">CV available on request.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
