import type { Metadata } from "next";
import type { OgCard } from "./og-card";

// Share-card content for the fixed pages. Headlines and accents match each
// page's hero; descriptions are the page's meta description.
export const OG_PAGES = {
  home: {
    eyebrow: "Ademola Onasoga · AI Product Engineer",
    title: "I build AI-powered products businesses can run on.",
    accent: "AI-powered",
    description: "Co-founder of Yousure. A decade shipping web and mobile apps for iOS and Android across fintech, insurance, healthcare, edtech and legal.",
    image: "/images/ademola.jpg",
    imagePosition: "center 20%",
    layout: "portrait",
  },
  work: {
    eyebrow: "Selected work",
    title: "Live products, real businesses",
    accent: "real",
    description: "Case studies: Yousure, KJB Professional Services, Worrington & Co., Zeal Open University, ABF Accounting, Zhill Systems and Covek Properties.",
    image: "/work/yousure.jpg",
    imagePosition: "top",
  },
  services: {
    eyebrow: "Services",
    title: "Software that earns its keep, with AI where it counts",
    accent: "AI",
    description: "AI features, mobile apps for iOS and Android, web apps and MVPs, websites that win business, and technical leadership.",
    image: "/images/at-work.jpg",
    imagePosition: "center 30%",
  },
  about: {
    eyebrow: "About",
    title: "Hello, I’m ’Demola.",
    accent: "’Demola.",
    description: "AI product engineer, co-founder of Yousure, software engineer and former engineering manager at Enyata.",
    image: "/images/portrait-mono.jpg",
    imagePosition: "center 20%",
    layout: "portrait",
  },
  contact: {
    eyebrow: "Book a call",
    title: "Let’s talk about what you’re building",
    accent: "building",
    description: "Pick a time for a free 30-minute video call. No pitch deck needed; just bring the idea.",
    image: "/images/ademola.jpg",
    imagePosition: "center 20%",
    layout: "portrait",
  },
} satisfies Record<string, OgCard>;

export function ogAlt(card: OgCard) {
  return card.title.replace(/\n/g, " ");
}

/**
 * Page title + description, repeated into Open Graph and X tags. Without
 * this, pages inherit the root layout's og:title and og:description and
 * every shared link reads like the home page. The image comes from the
 * route's opengraph-image; X falls back to og:image.
 */
export function pageMetadata(title: string, description: string, extra: Metadata = {}): Metadata {
  return {
    ...extra,
    title,
    description,
    openGraph: { type: "website", siteName: "hellodemola", locale: "en_GB", title, description, ...extra.openGraph } as Metadata["openGraph"],
    twitter: { card: "summary_large_image", creator: "@hellodemola", title, description, ...extra.twitter },
  };
}
