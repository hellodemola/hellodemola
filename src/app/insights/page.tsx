import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleParts";
import BookButton from "@/components/BookButton";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { Container, Eyebrow } from "@/components/ui";
import { sortedArticles } from "@/data/articles";
import { pageMetadata } from "@/lib/og-pages";

export const metadata: Metadata = pageMetadata(
  "Insights",
  "Practical articles on how AI can help small and growing businesses in Nigeria, and what it means for the economy, by Ademola Onasoga.",
  { alternates: { canonical: "/insights" }, openGraph: { url: "/insights" } },
);

export default function InsightsPage() {
  const [featured, ...rest] = sortedArticles();

  return (
    <>
      <Container className="pt-16 pb-14 sm:pt-24">
        <Eyebrow>Insights</Eyebrow>
        <SplitHeading
          className="mt-5 max-w-4xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl"
          parts={[{ text: "AI for Nigerian businesses, " }, { text: "minus the hype", accent: true }]}
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Practical guides for owners and founders: where AI saves time and money in a small business, what it costs in naira,
          and what it means for Nigeria’s economy.
        </p>
      </Container>

      <Container className="pb-24 sm:pb-32">
        <Reveal>
          <ArticleCard article={featured} featured />
        </Reveal>
        <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.08}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 rounded-3xl bg-night p-10 text-paper sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Thinking about AI for your business?</h2>
            <p className="mt-2 text-night-muted">Book 30 minutes and I’ll tell you honestly where it would help, and where it wouldn’t.</p>
          </div>
          <BookButton />
        </div>
      </Container>
    </>
  );
}
