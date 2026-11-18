import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";
import { OG_PAGES } from "@/lib/og-pages";
import { LAB_PROJECTS, getLabProject } from "@/data/lab";

export const alt = "Project in progress by Ademola Onasoga";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return LAB_PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getLabProject((await params).slug);
  if (!project) return renderOgCard(OG_PAGES.lab);
  return renderOgCard({
    eyebrow: `Lab · ${project.industry}`,
    title: project.name,
    description: project.summary,
    image: project.image,
    imagePosition: "top",
  });
}
