import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";

export const metadata: Metadata = {
  title: "Kontakt | Dubinsko Pranje 035 | Ćuprija, Paraćin, Jagodina",
  description:
    "Kontaktirajte nas za iznajmljivanje mašine za dubinsko pranje u Pomoravskom okrugu (035). Telefon: 060 456 4481. WhatsApp, Viber. Preuzimanje 10-20h, dostava 16-19h svaki dan.",
  keywords: [
    "kontakt dubinsko pranje 035",
    "telefon dubinsko pranje Ćuprija",
    "dubinsko pranje kontakt Paraćin",
    "dubinsko pranje kontakt Jagodina",
    "radno vreme dubinsko pranje",
  ],
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const phoneNumber = "+381604564481";

  return (
    <PageLayout>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Kontakt" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Kontaktirajte Nas
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Pozovite nas ili pošaljite poruku za rezervaciju mašine za
              dubinsko pranje u Ćupriji, Paraćinu ili Jagodini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Kako nas kontaktirati
                </h2>
                <div className="space-y-5">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Telefon
                      </div>
                      <div className="text-muted-foreground">
                        +381 60 456 4481
                      </div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-[#25D366]/30 hover:shadow-lg transition-all group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white flex-shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-[#25D366] transition-colors">
                        WhatsApp
                      </div>
                      <div className="text-muted-foreground">
                        Pošaljite poruku
                      </div>
                    </div>
                  </a>

                  <a
                    href={`viber://chat?number=${phoneNumber.replace(/\+/g, "%2B")}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-[#7360F2]/30 hover:shadow-lg transition-all group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7360F2] text-white flex-shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-[#7360F2] transition-colors">
                        Viber
                      </div>
                      <div className="text-muted-foreground">
                        Pošaljite poruku
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/DubinskoPranje035/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-pink-500/30 hover:shadow-lg transition-all group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-white flex-shrink-0">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-pink-500 transition-colors">
                        Instagram
                      </div>
                      <div className="text-muted-foreground">
                        @DubinskoPranje035
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-secondary/50 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informacije
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        Radno vreme
                      </div>
                      <div className="text-muted-foreground">
                        Ponedeljak - Nedelja
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        Preuzimanje: 10h - 20h
                      </div>
                      <div className="text-muted-foreground text-sm mt-1">
                        Dostava: 16h - 19h
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        Područje dostave
                      </div>
                      <div className="text-muted-foreground space-y-1">
                        <p>Ćuprija - dostava 500 RSD</p>
                        <p>Paraćin - dostava 1000 RSD</p>
                        <p>Jagodina - dostava 1000 RSD</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Lično preuzimanje mašine je moguće bez dodatnih troškova.
                      Za dostavu u okolna mesta, kontaktirajte nas za cenu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="w-full gap-2">
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-5 w-5" />
                    Pozovite odmah: 060 456 4481
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
