"use client";

import { Navigation } from "@/components/navigation";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 sm:pt-24">{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
}
