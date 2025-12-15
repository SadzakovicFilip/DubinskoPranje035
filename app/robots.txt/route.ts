import { NextResponse } from "next/server"

const siteUrl = "https://dubinskopranje035.rs"

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join("\n")

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}

