import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://dubinskopranje035.rs/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      ...(post.image
        ? {
            images: [
              {
                url: post.image,
                width: 1200,
                height: 630,
                alt: post.imageAlt || post.title,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Dubinsko Pranje 035",
      url: "https://dubinskopranje035.rs",
    },
    publisher: {
      "@type": "Organization",
      name: "Dubinsko Pranje 035",
      url: "https://dubinskopranje035.rs",
    },
    ...(post.image
      ? { image: `https://dubinskopranje035.rs${post.image}` }
      : {}),
  };

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <PageLayout>
      <JsonLd data={articleSchema} />

      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("sr-Latn-RS", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              {post.description}
            </p>
          </header>

          {post.image && (
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-border/50 mb-12">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                sizes="(min-width: 768px) 800px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => {
              const trimmed = paragraph.trim();

              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-foreground mt-10 mb-4"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold text-foreground mt-8 mb-3"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }

              if (trimmed.startsWith("- ") || trimmed.startsWith("| ")) {
                const lines = trimmed.split("\n");
                if (lines[0].startsWith("| ")) {
                  return (
                    <div
                      key={index}
                      className="overflow-x-auto my-6 rounded-xl border border-border"
                    >
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-secondary/50">
                            {lines[0]
                              .split("|")
                              .filter(Boolean)
                              .map((cell, i) => (
                                <th
                                  key={i}
                                  className="px-4 py-3 text-left font-semibold text-foreground"
                                >
                                  {cell.trim()}
                                </th>
                              ))}
                          </tr>
                        </thead>
                        <tbody>
                          {lines.slice(2).map((line, lineIdx) => (
                            <tr key={lineIdx} className="border-t border-border">
                              {line
                                .split("|")
                                .filter(Boolean)
                                .map((cell, cellIdx) => (
                                  <td
                                    key={cellIdx}
                                    className="px-4 py-3 text-muted-foreground"
                                  >
                                    {cell.trim()}
                                  </td>
                                ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return (
                  <ul
                    key={index}
                    className="list-disc pl-6 space-y-2 text-muted-foreground my-4"
                  >
                    {lines.map((line, lineIdx) => (
                      <li key={lineIdx}>{line.replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }

              if (trimmed.match(/^\d+\./)) {
                const lines = trimmed.split("\n");
                return (
                  <ol
                    key={index}
                    className="list-decimal pl-6 space-y-2 text-muted-foreground my-4"
                  >
                    {lines.map((line, lineIdx) => (
                      <li key={lineIdx}>
                        {line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed my-4"
                >
                  {trimmed}
                </p>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Spremni za dubinsko pranje?
            </h2>
            <p className="text-muted-foreground mb-6">
              Iznajmite profesionalnu mašinu u Ćupriji, Paraćinu ili Jagodini
              od 3.500 RSD dnevno.
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href="tel:+381604564481">
                <Phone className="h-5 w-5" />
                Pozovite: 060 456 4481
              </a>
            </Button>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
