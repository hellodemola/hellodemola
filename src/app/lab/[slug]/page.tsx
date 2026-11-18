import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { LAB_PROJECTS, getLabProject } from "@/data/lab";
import { pageMetadata } from "@/lib/og-pages";

export function generateStaticParams() {
  return LAB_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lab/[slug]">): Promise<Metadata> {
  const project = getLabProject((await params).slug);
  if (!project) return {};
  return pageMetadata(`${project.name}, in progress`, project.summary, {
    alternates: { canonical: `/lab/${project.slug}` },
    openGraph: { type: "article", url: `/lab/${project.slug}` },
  });
}

export default async function LabProjectPage({ params }: PageProps<"/lab/[slug]">) {
  const project = getLabProject((await params).slug);
  if (!project) notFound();
  const index = LAB_PROJECTS.indexOf(project);
  const next = LAB_PROJECTS[(index + 1) % LAB_PROJECTS.length];

  const facts = [
    { label: "Project", value: project.name },
    { label: "Sector", value: project.industry },
    { label: "Location", value: project.location },
    { label: "My role", value: project.role },
  ];

  return (
    <CaseStudy
      project={project}
      next={next}
      base="/lab"
      eyebrow={`Lab ${String(index + 1).padStart(2, "0")} · ${project.status}`}
      facts={facts}
      backLabel="All lab projects"
      resultLabel="Where it stands"
      nextLabel="Next in the lab"
    />
  );
}
