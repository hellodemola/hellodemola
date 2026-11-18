import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { LAB_PROJECTS } from "@/data/lab";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/lab", "/services", "/insights", "/about", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${SITE.url}${path}`, priority: path === "" ? 1 : 0.8 })),
    ...PROJECTS.map((p) => ({ url: `${SITE.url}/work/${p.slug}`, priority: 0.7 })),
    ...LAB_PROJECTS.map((p) => ({ url: `${SITE.url}/lab/${p.slug}`, priority: 0.6 })),
    ...ARTICLES.map((a) => ({ url: `${SITE.url}/insights/${a.slug}`, lastModified: a.publishedAt, priority: 0.6 })),
  ];
}
