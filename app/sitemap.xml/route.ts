import { NextResponse } from "next/server"

const siteUrl = "https://dubinskopranje035.rs"

export function GET() {
  const lastmod = new Date().toISOString()
  const urls = [
    {
      loc: siteUrl,
      priority: "1.0",
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

