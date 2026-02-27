import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { MachineInfo } from "@/components/machine-info";
import { WhatToClean } from "@/components/what-to-clean";
import { Pricing } from "@/components/pricing";
import { WhyChooseUs } from "@/components/why-choose-us";
import { FAQ } from "@/components/faq";
import { TrustBlock } from "@/components/trust";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <MachineInfo />
      <WhatToClean />

      {/* Location links section for local SEO */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Lokacije
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              Dubinsko Pranje u Pomoravskom Okrugu (035)
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dostavljamo mašinu za dubinsko pranje i čišćenje na vašu adresu u
              Ćupriji, Paraćinu i Jagodini.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                city: "Ćuprija",
                href: "/dubinsko-pranje-cuprija",
                delivery: "Dostava: 300 din",
              },
              {
                city: "Paraćin",
                href: "/dubinsko-pranje-paracin",
                delivery: "Dostava: 400 din",
              },
              {
                city: "Jagodina",
                href: "/dubinsko-pranje-jagodina",
                delivery: "Dostava: 500 din",
              },
            ].map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="group p-8 rounded-2xl bg-card border border-border/50 text-center hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {location.city}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {location.delivery}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Saznajte više
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <WhyChooseUs />
      <TrustBlock />
      <FAQ />

      {/* Internal links section for SEO crawl boost */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Usluge</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/dubinsko-pranje-namestaja" className="text-muted-foreground hover:text-primary transition-colors">
                    Dubinsko pranje nameštaja
                  </Link>
                </li>
                <li>
                  <Link href="/dubinsko-pranje-tepiha" className="text-muted-foreground hover:text-primary transition-colors">
                    Dubinsko pranje tepiha
                  </Link>
                </li>
                <li>
                  <Link href="/dubinsko-pranje-automobila" className="text-muted-foreground hover:text-primary transition-colors">
                    Dubinsko pranje automobila
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Lokacije</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/dubinsko-pranje-cuprija" className="text-muted-foreground hover:text-primary transition-colors">
                    Dubinsko pranje Ćuprija
                  </Link>
                </li>
                <li>
                  <Link href="/dubinsko-pranje-paracin" className="text-muted-foreground hover:text-primary transition-colors">
                    Dubinsko pranje Paraćin
                  </Link>
                </li>
                <li>
                  <Link href="/dubinsko-pranje-jagodina" className="text-muted-foreground hover:text-primary transition-colors">
                    Dubinsko pranje Jagodina
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Informacije
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/cenovnik" className="text-muted-foreground hover:text-primary transition-colors">
                    Cenovnik
                  </Link>
                </li>
                <li>
                  <Link href="/kako-funkcionise" className="text-muted-foreground hover:text-primary transition-colors">
                    Kako funkcioniše
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog i saveti
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
