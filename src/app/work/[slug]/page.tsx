import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookButton from "@/components/BookButton";
import { buttonClass } from "@/components/button";
import Devices from "@/components/Devices";
import MacFrame from "@/components/MacFrame";
import ScrollTilt from "@/components/motion/ScrollTilt";
import { Accent, Container, Eyebrow } from "@/components/ui";
import { PROJECTS, getProject } from "@/data/projects";
import { pageMetadata } from "@/lib/og-pages";
import SplitHeading from "@/components/motion/SplitHeading";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const title = `${project.name} case study`;
  return pageMetadata(title, project.summary, {
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", url: `/work/${project.slug}` },
  });
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const facts = [
    { label: "Client", value: project.name },
    { label: "Industry", value: project.industry },
    { label: "Location", value: project.location },
    { label: "My role", value: project.role },
  ];

  return (
    <article>
      <Container className="pt-12 sm:pt-20">
        <Link href="/work" className="text-sm text-muted hover:text-ink">
          ← All work
        </Link>
        <Eyebrow className="mt-10">
          Case study {String(index + 1).padStart(2, "0")} · {project.industry}
        </Eyebrow>
        <SplitHeading className="mt-5 max-w-4xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl" parts={[{ text: project.name }]} />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{project.summary}</p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-5">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-xs tracking-widest text-muted uppercase">{f.label}</dt>
              <dd className="mt-2 font-medium">{f.value}</dd>
            </div>
          ))}
          <div>
            <dt className="font-mono text-xs tracking-widest text-muted uppercase">Live site</dt>
            <dd className="mt-2 font-medium">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline decoration-accent underline-offset-4 hover:text-accent">
                {project.urlLabel} ↗
              </a>
            </dd>
          </div>
        </dl>
      </Container>

      <Container className="mt-12">
        <div className="rounded-3xl bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,var(--color-paper-2)_70%)] px-[6%] pt-[7%] pb-[5%] ring-1 ring-line">
          <ScrollTilt className="mx-auto max-w-4xl">
            <Devices desktop={project.image} mobile={project.mobile} alt={project.name} priority sizes="(min-width: 1152px) 900px, 90vw" />
          </ScrollTilt>
        </div>
      </Container>

      <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>The brief</Eyebrow>
        </div>
        <div className="space-y-5 text-lg leading-relaxed sm:text-xl">
          {project.brief.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div>
          <Eyebrow>What I built</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border border-line bg-white px-3 py-1 font-mono text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {project.built.map((b, i) => (
            <div key={b.title} className={`bg-paper p-7 ${i === project.built.length - 1 && project.built.length % 2 === 1 ? "sm:col-span-2" : ""}`}>
              <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-medium">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
            </div>
          ))}
        </div>

        {project.gallery?.map((g) => (
          <figure key={g.src} className="lg:col-span-2">
            <div className="rounded-3xl bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,var(--color-paper-2)_70%)] px-[6%] pt-[7%] pb-[5%] ring-1 ring-line">
              <ScrollTilt className="mx-auto max-w-4xl">
                <MacFrame src={g.src} alt={g.caption} sizes="(min-width: 1152px) 900px, 90vw" />
              </ScrollTilt>
            </div>
            <figcaption className="mt-4 text-center text-sm text-muted">{g.caption}</figcaption>
          </figure>
        ))}

        <div>
          <Eyebrow>The result</Eyebrow>
        </div>
        <div className="space-y-5 text-lg leading-relaxed sm:text-xl">
          {project.outcome.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${buttonClass("outline")} mt-4`}>
            Visit {project.urlLabel} ↗
          </a>
        </div>
      </Container>

      <section className="border-t border-line bg-paper-2/60">
        <Container className="grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
              Want something like <Accent>this</Accent>?
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">Book a free 30-minute call. Bring the idea; I’ll bring honest advice on how to build it.</p>
            <BookButton className="mt-8" />
          </div>
          <Link href={`/work/${next.slug}`} className="group rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-xl hover:shadow-ink/5">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">Next case study</p>
            <div className="mt-4 flex items-center gap-5">
              <div className="relative aspect-[16/10] w-36 shrink-0 overflow-hidden rounded-lg border border-line">
                <Image src={next.image} alt="" fill sizes="144px" className="object-cover object-top" />
              </div>
              <div>
                <p className="text-xl font-medium tracking-tight group-hover:text-accent">{next.name} →</p>
                <p className="mt-1 text-sm text-muted">{next.industry}</p>
              </div>
            </div>
          </Link>
        </Container>
      </section>
    </article>
  );
}
