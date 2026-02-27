import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Saveti za Dubinsko Pranje i Čišćenje",
  description:
    "Korisni saveti i vodiči za dubinsko pranje nameštaja, tepiha i automobila. Naučite kako da održavate čist i zdrav dom u Ćupriji, Paraćinu i Jagodini.",
  keywords: [
    "blog dubinsko pranje",
    "saveti za čišćenje",
    "vodič za dubinsko pranje",
    "kako prati nameštaj",
    "kako prati tepihe",
    "saveti za održavanje nameštaja",
  ],
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageLayout>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[{ label: "Početna", href: "/" }, { label: "Blog" }]}
          />

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Blog - Saveti za Dubinsko Pranje i Čišćenje
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Korisni vodiči, saveti i informacije o dubinskom pranju
              nameštaja, tepiha i automobila za zdrav i čist dom.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border border-border/50 bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {post.image && (
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("sr-Latn-RS", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Pročitajte više
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
