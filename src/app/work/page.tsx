import type { Metadata } from "next";
import BookButton from "@/components/BookButton";
import { Container, Eyebrow, ProjectCard } from "@/components/ui";
import { PROJECTS } from "@/data/projects";
import SplitHeading from "@/components/motion/SplitHeading";
import { pageMetadata } from "@/lib/og-pages";

export const metadata: Metadata = pageMetadata(
  "Work",
  "Case studies: websites and web products for Worrington & Co., Zeal Open University, ABF Accounting, Zhill Systems and Covek Properties.",
  { alternates: { canonical: "/work" }, openGraph: { url: "/work" } },
);

export default function WorkPage() {
  return (
    <>
      <Container className="pt-16 pb-14 sm:pt-24">
        <Eyebrow>Work</Eyebrow>
        <SplitHeading className="mt-5 max-w-3xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl" parts={[{ text: "Live products, " }, { text: "real", accent: true }, { text: " businesses" }]} />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Each case study covers what the client needed, what I built, and how it works today.
        </p>
      </Container>
      <Container className="pb-24 sm:pb-32">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-line p-10">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">06 · Yours?</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight">Your product could be next</h2>
            <p className="mt-3 leading-relaxed text-muted">Tell me what you’re building. In 30 minutes you’ll know whether I’m the right fit.</p>
            <BookButton className="mt-6 self-start" />
          </div>
        </div>
      </Container>
    </>
  );
}
