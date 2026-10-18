import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${SITE.url}${path}`, priority: path === "" ? 1 : 0.8 })),
    ...PROJECTS.map((p) => ({ url: `${SITE.url}/work/${p.slug}`, priority: 0.7 })),
  ];
}
