import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody, ArticleCard, ArticleMeta } from "@/components/ArticleParts";
import BookButton from "@/components/BookButton";
import SplitHeading from "@/components/motion/SplitHeading";
import { Container } from "@/components/ui";
import { ARTICLES, getArticle, sortedArticles } from "@/data/articles";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/og-pages";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return pageMetadata(article.title, article.excerpt, {
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article", url: `/insights/${article.slug}`, publishedTime: article.publishedAt, authors: [SITE.name] },
  });
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = sortedArticles()
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => Number(b.topic === article.topic) - Number(a.topic === article.topic))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    image: `${SITE.url}${article.cover.src}`,
    author: { "@type": "Person", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/insights/${article.slug}`,
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="!max-w-4xl pt-12 sm:pt-20">
        <Link href="/insights" className="text-sm text-muted hover:text-ink">
          ← All insights
        </Link>
        <ArticleMeta article={article} className="mt-10" />
        <SplitHeading
          className="mt-5 text-4xl leading-[1.08] font-medium tracking-tight sm:text-6xl"
          parts={[{ text: article.title }]}
        />
        <p className="mt-6 text-xl leading-relaxed text-muted">{article.excerpt}</p>
        <div className="mt-8 flex items-center gap-3">
          <span className="relative size-11 overflow-hidden rounded-full bg-paper-2">
            <Image src="/images/ademola.jpg" alt="" fill sizes="44px" className="object-cover object-[50%_15%]" />
          </span>
          <span className="text-sm">
            <span className="block font-semibold">{SITE.name}</span>
            <span className="text-muted">{SITE.role} · Co-founder, Yousure</span>
          </span>
        </div>
      </Container>

      <Container className="mt-12 !max-w-5xl">
        <figure>
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl bg-paper-2">
            <Image src={article.cover.src} alt={article.cover.alt} fill priority sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-right text-xs text-muted">
            Photo:{" "}
            <a href={article.cover.credit} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
              {article.cover.credit.includes("unsplash") ? "Unsplash" : "Pexels"}
            </a>
          </figcaption>
        </figure>
      </Container>

      <Container className="!max-w-3xl py-16 sm:py-20">
        <ArticleBody blocks={article.body} />

        <div className="mt-16 rounded-3xl bg-night p-8 text-paper sm:p-10">
          <p className="font-mono text-xs tracking-widest text-night-muted uppercase">Work with me</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Want to put this to work in your business?</h2>
          <p className="mt-3 text-night-muted">
            I build AI features, web and mobile apps for businesses in Nigeria and beyond. Book a free 30-minute call and we’ll
            find the one change worth making first.
          </p>
          <BookButton className="mt-6" />
        </div>
      </Container>

      <section className="border-t border-line bg-paper-2/60 py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Keep reading</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
