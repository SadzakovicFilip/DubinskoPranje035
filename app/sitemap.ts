import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://dubinskopranje035.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/dubinsko-pranje-namestaja`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dubinsko-pranje-tepiha`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dubinsko-pranje-automobila`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dubinsko-pranje-cuprija`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dubinsko-pranje-paracin`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dubinsko-pranje-jagodina`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/cenovnik`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kako-funkcionise`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-02-27"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...blogPosts,
  ];
}
