import type { Metadata } from "next";
import { Container, Eyebrow, ProjectCard } from "@/components/ui";
import SplitHeading from "@/components/motion/SplitHeading";
import { LAB_PROJECTS } from "@/data/lab";
import { pageMetadata } from "@/lib/og-pages";

export const metadata: Metadata = pageMetadata(
  "Lab",
  "Projects in progress: Tiwa, the Zeal Open University redesign, Capitano Nigeria, Imaginations School PTA, the Onasoga Family, UNILAG Business Education Alumni and Amel Susan, with what’s done and what’s left.",
  { alternates: { canonical: "/lab" }, openGraph: { url: "/lab" } },
);

export default function LabPage() {
  return (
    <>
      <Container className="pt-16 pb-14 sm:pt-24">
        <Eyebrow>Lab</Eyebrow>
        <SplitHeading className="mt-5 max-w-3xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl" parts={[{ text: "On the workbench " }, { text: "right now", accent: true }]} />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          What I’m building at the moment. Each project covers what it’s for, what I’ve built so far, and what’s still left to do.
        </p>
      </Container>
      <Container className="pb-24 sm:pb-32">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {LAB_PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} base="/lab" />
          ))}
        </div>
      </Container>
    </>
  );
}
