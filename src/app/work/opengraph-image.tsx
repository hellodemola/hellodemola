import { ogContentType, ogSize, renderOgCard } from "@/lib/og-card";
import { OG_PAGES, ogAlt } from "@/lib/og-pages";

export const alt = ogAlt(OG_PAGES.work);
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard(OG_PAGES.work);
}
