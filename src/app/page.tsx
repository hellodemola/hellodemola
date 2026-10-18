import Image from "next/image";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import { buttonClass } from "@/components/button";
import LogoMarquee from "@/components/motion/LogoMarquee";
import Magnetic from "@/components/motion/Magnetic";
import Parallax from "@/components/motion/Parallax";
import PhoneFrame from "@/components/PhoneFrame";
import Reveal from "@/components/motion/Reveal";
import ScrollText from "@/components/motion/ScrollText";
import SplitHeading from "@/components/motion/SplitHeading";
import { Accent, Container, Eyebrow, ProjectCard, SectionHeading } from "@/components/ui";
import { PROJECTS } from "@/data/projects";
import { AUDIENCES, PROCESS, SERVICES } from "@/data/services";
import { SITE } from "@/data/site";

const PHONES = ["kjb", "yousure", "worrington"].map((slug) => PROJECTS.find((p) => p.slug === slug)!);

const INDUSTRIES = ["FinTech", "InsurTech", "Remittance", "Healthcare", "EdTech", "E-commerce", "Real estate", "Legal"];

export default function HomePage() {
  const [featured, ...rest] = PROJECTS;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft accent glow behind the hero */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,31,0.14),transparent)] blur-2xl" />
        <Container className="relative grid items-center gap-12 pt-12 pb-20 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-28">
          <div>
            <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-sm">
              <span className="pulse-dot size-2 rounded-full bg-green-500" />
              Available for new projects
            </p>
            <SplitHeading
              className="mt-7 text-[2.6rem] leading-[1.04] font-medium tracking-tight sm:text-6xl lg:text-7xl"
              delay={0.1}
              parts={[{ text: "I build " }, { text: "AI-powered", accent: true }, { text: " products businesses can run on." }]}
            />
            <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "650ms" }}>
              I’m {SITE.nickname} Onasoga, an AI product engineer and co-founder of Yousure. For a decade I’ve shipped
              web and mobile apps for iOS and Android across fintech, insurance, healthcare, edtech and legal, and I add
              AI where it pays for itself.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "800ms" }}>
              <Magnetic>
                <BookButton />
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link href="/work" className={buttonClass("outline")}>
                  See my work
                </Link>
              </Magnetic>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="hero-photo relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-2">
              <Parallax distance={50} className="absolute inset-0">
                <Image
                  src="/images/ademola.jpg"
                  alt="Ademola Onasoga"
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className="scale-110 object-cover object-[50%_20%]"
                />
              </Parallax>
            </div>
            <div className="rise absolute -bottom-5 -left-3 rounded-2xl border border-line bg-white/90 px-5 py-4 shadow-lg shadow-ink/5 backdrop-blur sm:-left-8" style={{ animationDelay: "1100ms" }}>
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">Currently</p>
              <p className="mt-1 font-medium">{SITE.current.title}</p>
              <p className="text-sm text-muted">
                Ex-{SITE.previous.title}, {SITE.previous.company}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof strip */}
      <section className="border-y border-line bg-[#fbf9f6]">
        <Container className="flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 font-mono text-xs tracking-widest text-muted uppercase">Shipped for</p>
          <LogoMarquee />
        </Container>
      </section>

      {/* Statement */}
      <section className="py-24 sm:py-36">
        <Container>
          <ScrollText
            className="max-w-5xl text-3xl leading-[1.2] font-medium tracking-tight sm:text-5xl"
            parts={[
              { text: "For ten years I’ve turned ideas into software that people actually use. Now I build with AI, but only " },
              { text: "where it earns its place:", accent: true },
              { text: " saving time, cutting cost, or making a product smarter for the people who rely on it." },
            ]}
          />
        </Container>
      </section>

      {/* Who I help */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading
            eyebrow="Who I work with"
            title={<>One engineer, <Accent>three</Accent> kinds of conversation</>}
            intro="Whether you need customers, a product, or a hire, here’s where I can help."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.who} delay={i * 0.1} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10">
                  <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">For {a.who.toLowerCase()}</p>
                  <h3 className="mt-4 text-xl font-medium tracking-tight">{a.headline}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{a.body}</p>
                  <Link href={a.cta.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
                    {a.cta.label} <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-night py-24 text-paper sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-night-muted uppercase">
                  <span className="h-px w-6 bg-accent" />
                  What I do
                </p>
              </Reveal>
              <SplitHeading
                as="h2"
                inView
                className="mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-4xl"
                parts={[{ text: "From the first idea to " }, { text: "production,", accent: true }, { text: " with AI where it counts" }]}
              />
            </div>
            <Link href="/services" className="shrink-0 text-sm font-medium text-night-muted hover:text-paper">
              All services →
            </Link>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line sm:grid-cols-2">
            {SERVICES.map((s, i) => (
              <div key={s.slug} className={`group relative overflow-hidden bg-night-2 p-8 sm:p-10 ${i === SERVICES.length - 1 && SERVICES.length % 2 === 1 ? "sm:col-span-2" : ""}`}>
                {/* Accent glow that follows hover */}
                <span aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-accent/0 blur-3xl transition-colors duration-700 group-hover:bg-accent/15" />
                <Reveal delay={(i % 2) * 0.1}>
                  <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 text-2xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-night-muted">{s.summary}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {s.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Work */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Selected work" title={<>Products in the <Accent>wild</Accent></>} intro="My own company, plus live products for law, tax, education, accounting and property firms." />
            <Link href="/work" className="shrink-0 text-sm font-medium text-muted hover:text-ink">
              All case studies →
            </Link>
          </div>
          <div className="mt-14">
            <ProjectCard project={featured} index={0} large />
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.12}>
                <ProjectCard project={p} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Web and mobile */}
      <section className="relative overflow-hidden bg-night py-24 text-paper sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,31,0.18),transparent)] blur-2xl" />
        <Container className="relative grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-night-muted uppercase">
                <span className="h-px w-6 bg-accent" />
                Web, iOS and Android
              </p>
            </Reveal>
            <SplitHeading
              as="h2"
              inView
              className="mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl"
              parts={[{ text: "Built for the screen your customers " }, { text: "actually use.", accent: true }]}
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-night-muted">
                Most of your customers will meet you on a phone. I design for that first, then build native apps for iPhone
                and Android in React Native, sharing one API and one design with your website.
              </p>
              <ul className="mt-8 grid max-w-lg grid-cols-2 gap-3 text-sm">
                {["iOS and Android from one codebase", "App Store and Play releases", "Push, offline and payments", "One API for web and app"].map((f) => (
                  <li key={f} className="flex gap-3 rounded-xl border border-night-line bg-night-2 px-4 py-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="relative mx-auto flex w-full max-w-xl items-end justify-center gap-[4%]">
            {PHONES.map((p, i) => (
              <Parallax key={p.slug} distance={i === 1 ? 0 : 90} clip={false} className={i === 1 ? "z-10 w-[34%] -translate-y-6" : "w-[30%] opacity-90"}>
                <Reveal delay={i * 0.12} y={60}>
                  <PhoneFrame src={p.mobile!} alt={`${p.name} on a phone`} sizes="(min-width: 1024px) 220px, 34vw" />
                </Reveal>
              </Parallax>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-line bg-paper-2/60 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="How we’d work together"
            title={<>Clear steps, <Accent>no surprises</Accent></>}
            intro="You always know what’s being built, what it costs and when you’ll see it."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.1} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-paper p-7 transition duration-500 hover:-translate-y-1 hover:border-ink/30">
                    <span className="grid size-10 place-items-center rounded-full bg-ink font-mono text-sm text-paper">{i + 1}</span>
                    <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* About teaser */}
      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Parallax distance={80} className="relative aspect-[4/5] rounded-[2rem] bg-paper-2">
              <Image src="/images/at-work.jpg" alt="Ademola at work, headphones on, at his laptop" fill sizes="(min-width: 1024px) 540px, 100vw" className="scale-110 object-cover" />
            </Parallax>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>About</Eyebrow>
            </Reveal>
            <SplitHeading
              as="h2"
              inView
              className="mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-4xl"
              parts={[{ text: "Engineer by trade, " }, { text: "product person", accent: true }, { text: " by habit" }]}
            />
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  I’ve spent ten years building products across {INDUSTRIES.slice(0, 5).join(", ").toLowerCase()} and more. I’ve
                  written the code, and I’ve managed the engineers who write it.
                </p>
                <p>
                  Today I help businesses ship software that works on day one, and I bring AI in only where it makes the product
                  faster, cheaper or smarter for the people using it.
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
                <div>
                  <dt className="text-sm text-muted">Building products</dt>
                  <dd className="mt-1 text-3xl font-medium tracking-tight">10 yrs</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Industries</dt>
                  <dd className="mt-1 text-3xl font-medium tracking-tight">{INDUSTRIES.length}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Led teams as</dt>
                  <dd className="mt-1 text-3xl font-medium tracking-tight">EM</dd>
                </div>
              </dl>
              <Magnetic strength={0.2}>
                <Link href="/about" className={`${buttonClass("ink")} mt-10`}>
                  More about me
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
