import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";
import { OG_PAGES } from "@/lib/og-pages";
import { PROJECTS, getProject } from "@/data/projects";

export const alt = "Case study by Ademola Onasoga";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) return renderOgCard(OG_PAGES.work);
  return renderOgCard({
    eyebrow: `Case study · ${project.industry}`,
    title: project.name,
    description: project.summary,
    image: project.image,
    imagePosition: "top",
  });
}
