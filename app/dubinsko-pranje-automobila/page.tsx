import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Dubinsko Pranje Automobila | Sedišta, Tapacirung, Enterijer | Ćuprija, Paraćin, Jagodina",
  description:
    "Iznajmite profesionalnu mašinu za dubinsko pranje enterijera automobila u Pomoravskom okrugu (035). Dubinsko čišćenje auto sedišta, tapacirung vrata, gepeka u Ćupriji, Paraćinu i Jagodini.",
  keywords: [
    "dubinsko pranje automobila",
    "dubinsko čišćenje automobila",
    "dubinsko pranje auto sedišta",
    "pranje auto sedišta",
    "dubinsko pranje enterijera automobila",
    "čišćenje enterijera automobila",
    "dubinsko pranje tapacirung",
    "pranje gepeka",
    "dubinsko pranje automobila Ćuprija",
    "dubinsko pranje automobila Paraćin",
    "dubinsko pranje automobila Jagodina",
    "pranje auto sedišta 035",
    "čišćenje automobila Pomoravski okrug",
    "dubinsko čišćenje auto enterijera",
    "cena dubinskog pranja automobila",
  ],
  alternates: { canonical: "/dubinsko-pranje-automobila" },
  openGraph: {
    title:
      "Dubinsko Pranje Automobila | Ćuprija, Paraćin, Jagodina (035)",
    description:
      "Profesionalno dubinsko pranje i čišćenje enterijera automobila - sedišta, tapacirung, gepek. Iznajmite mašinu sa dostavom u Pomoravskom okrugu.",
    url: "https://dubinskopranje035.rs/dubinsko-pranje-automobila",
    images: [
      {
        url: "/images/DubinskoPranje035_slika3.jpg",
        width: 1200,
        height: 630,
        alt: "Dubinsko pranje auto sedišta profesionalnom mašinom",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dubinsko Pranje Enterijera Automobila",
  description:
    "Iznajmljivanje profesionalne mašine za dubinsko pranje i čišćenje enterijera automobila - sedišta, tapacirung, gepek. Dostava u Ćupriji, Paraćinu i Jagodini.",
  provider: {
    "@type": "LocalBusiness",
    name: "Dubinsko Pranje 035",
    telephone: "+381604564481",
    url: "https://dubinskopranje035.rs",
  },
  areaServed: [
    { "@type": "City", name: "Ćuprija" },
    { "@type": "City", name: "Paraćin" },
    { "@type": "City", name: "Jagodina" },
  ],
  serviceType: "Dubinsko pranje automobila",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "3500",
    highPrice: "7000",
    priceCurrency: "RSD",
    offerCount: 3,
  },
};

export default function DubinskoAutoPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Dubinsko Pranje Automobila" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Car className="h-4 w-4" />
                Automobili
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                Dubinsko Pranje Enterijera Automobila u Pomoravskom Okrugu (035)
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iznajmite profesionalnu mašinu za dubinsko pranje auto sedišta,
                tapacirung vrata, gepeka i krovnih obloga. Uklonite mrlje,
                mirise i alergene iz enterijera vašeg automobila kod kuće u
                Ćupriji, Paraćinu ili Jagodini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="tel:+381604564481">
                    <Phone className="h-5 w-5" />
                    Rezervišite mašinu
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/cenovnik">
                    Pogledajte cenovnik
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
              <Image
                src="/images/DubinskoPranje035_slika3.jpg"
                alt="Dubinsko pranje enterijera automobila - čišćenje auto sedišta mašinom"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Šta Sve Možete Dubinski Oprati u Automobilu
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Auto sedišta",
                desc: "Dubinsko pranje auto sedišta uklanja mrlje od hrane, pića, znoja i prljavštine. Sedišta izgledaju i mirišu kao nova.",
              },
              {
                title: "Tapacirung vrata",
                desc: "Dubinsko čišćenje tapacirung obloga na unutrašnjim stranama vrata - uklanjanje prašine i mrlja sa tkanine.",
              },
              {
                title: "Gepek",
                desc: "Dubinsko pranje gepeka automobila - idealno nakon prevoza kućnih ljubimaca, kupovine ili prljave opreme.",
              },
              {
                title: "Krovne obloge",
                desc: "Dubinsko čišćenje krovnih obloga automobila - pažljiv postupak za osetljive materijale sa specijalnim nastavkom.",
              },
              {
                title: "Dečija auto sedišta",
                desc: "Dubinsko pranje dečijih auto sedišta - uklonite mrlje od hrane, soka i bakterije za zdravije putovanje.",
              },
              {
                title: "Pod automobila",
                desc: "Dubinsko pranje podnih prostirki i tepiha u automobilu - izvlačenje prljavštine i peska iz vlakana.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Sve o Dubinskom Pranju Enterijera Automobila
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Dubinsko pranje enterijera automobila je proces koji koristi
              profesionalnu mašinu za dubinsko čišćenje svih tekstilnih
              površina u vozilu. Mašina ubrizgava rastvor deterdženta pod
              pritiskom u vlakna tkanine sedišta, a zatim snažnom ekstrakcijom
              izvlači svu prljavštinu, mrlje i višak vode.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Zašto je dubinsko pranje auto sedišta važno?
            </h3>
            <p>
              Auto sedišta su izložena svakodnevnom znoju, prljavštini sa odeće,
              mrvicama hrane i raznim tečnostima. Vremenom se ova prljavština
              nakuplja duboko u vlaknima i postaje izvor neprijatnih mirisa i
              bakterija. Dubinsko pranje auto sedišta uklanja ovu duboku
              prljavštinu koju običan usisivač ne može da dosegne.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Koliko košta dubinsko pranje automobila u Pomoravskom okrugu?
            </h3>
            <p>
              Iznajmljivanje mašine za dubinsko pranje automobila košta od
              3.500 RSD za jedan dan. Za taj novac možete temeljno oprati ceo
              enterijer jednog ili više automobila. Profesionalni servisi za
              dubinsko čišćenje automobila naplaćuju 5.000-15.000 RSD po
              vozilu, tako da je iznajmljivanje mašine višestruko isplativije.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Dubinsko pranje automobila u Ćupriji, Paraćinu i Jagodini
            </h3>
            <p>
              Dostavljamo mašinu za dubinsko pranje automobila na vašu adresu
              u Ćupriji, Paraćinu i Jagodini. Uz mašinu dobijate specijalne
              nastavke za auto sedišta i teško dostupna mesta, profesionalni
              deterdžent i detaljna uputstva za dubinsko čišćenje enterijera
              vozila. Operite svoj automobil profesionalno bez odlaska na
              autoperionu.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dostupno u Celom Pomoravskom Okrugu
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Iznajmite mašinu za dubinsko pranje automobila i očistite enterijer
            kod kuće.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dubinsko-pranje-cuprija"
              className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-foreground font-medium"
            >
              Dubinsko pranje Ćuprija
            </Link>
            <Link
              href="/dubinsko-pranje-paracin"
              className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-foreground font-medium"
            >
              Dubinsko pranje Paraćin
            </Link>
            <Link
              href="/dubinsko-pranje-jagodina"
              className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-foreground font-medium"
            >
              Dubinsko pranje Jagodina
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
