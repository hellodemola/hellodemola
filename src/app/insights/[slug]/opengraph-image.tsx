import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";
import { OG_PAGES } from "@/lib/og-pages";
import { ARTICLES, getArticle, readMinutes } from "@/data/articles";

export const alt = "Insight by Ademola Onasoga";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) return renderOgCard(OG_PAGES.insights);
  return renderOgCard({
    eyebrow: `${article.topic} · ${readMinutes(article)} min read`,
    title: article.title,
    accent: article.accent,
    description: article.excerpt,
    image: article.cover.src,
  });
}
