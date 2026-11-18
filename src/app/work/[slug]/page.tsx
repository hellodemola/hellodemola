import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { PROJECTS, getProject } from "@/data/projects";
import { pageMetadata } from "@/lib/og-pages";

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
    <CaseStudy
      project={project}
      next={next}
      base="/work"
      eyebrow={`Case study ${String(index + 1).padStart(2, "0")} · ${project.industry}`}
      facts={facts}
      backLabel="All work"
      resultLabel="The result"
      nextLabel="Next case study"
    />
  );
}
