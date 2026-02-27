import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://dubinskopranje035.rs/sitemap.xml",
    host: "https://dubinskopranje035.rs",
  };
}
