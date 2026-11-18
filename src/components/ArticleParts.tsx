import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { formatDate, readMinutes, type Article, type ArticleBlock } from "@/data/articles";

// **bold** is the only inline formatting articles use.
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-6 text-lg leading-[1.75] text-ink/80">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="pt-6 text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-3xl">
                {b.text}
              </h2>
            );
          case "ul":
          case "ol": {
            const Tag = b.type;
            return (
              <Tag key={i} className="space-y-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    {b.type === "ol" ? (
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs text-paper">{j + 1}</span>
                    ) : (
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                    )}
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </Tag>
            );
          }
          case "callout":
            return (
              <aside key={i} className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-7">
                <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">{b.title}</p>
                <p className="mt-2 text-ink">
                  <Inline text={b.text} />
                </p>
              </aside>
            );
        }
      })}
    </div>
  );
}

export function ArticleMeta({ article, className = "" }: { article: Article; className?: string }) {
  return (
    <p className={`font-mono text-xs tracking-widest text-muted uppercase ${className}`}>
      {article.topic} · {readMinutes(article)} min read · {formatDate(article.publishedAt)}
    </p>
  );
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link href={`/insights/${article.slug}`} className={`group block ${featured ? "grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center" : ""}`}>
      <div className={`relative overflow-hidden rounded-2xl bg-paper-2 ${featured ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
        <Image
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          sizes={featured ? "(min-width: 768px) 640px, 100vw" : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold backdrop-blur">{article.topic}</span>
      </div>
      <div className={featured ? "" : "mt-5"}>
        <ArticleMeta article={article} />
        <h3 className={`mt-3 font-semibold tracking-tight transition-colors group-hover:text-accent-ink ${featured ? "text-3xl leading-tight sm:text-4xl" : "text-xl leading-snug"}`}>
          {article.title}
        </h3>
        <p className={`mt-3 leading-relaxed text-muted ${featured ? "text-lg" : ""}`}>{article.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          Read article <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
