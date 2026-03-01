import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, LayoutGrid, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Dubinsko Pranje Tepiha | Prostirke, Itisoni | Ćuprija, Paraćin, Jagodina (035)",
  description:
    "Iznajmite profesionalnu mašinu za dubinsko pranje tepiha u Pomoravskom okrugu (035). Dubinsko čišćenje tepiha, prostirki i itisona u Ćupriji, Paraćinu i Jagodini. Uklonite mrlje, prašinu i alergene.",
  keywords: [
    "dubinsko pranje tepiha",
    "dubinsko čišćenje tepiha",
    "pranje tepiha",
    "čišćenje tepiha",
    "pranje prostirki",
    "dubinsko pranje itisona",
    "pranje tepiha kod kuće",
    "dubinsko pranje tepiha Ćuprija",
    "dubinsko pranje tepiha Paraćin",
    "dubinsko pranje tepiha Jagodina",
    "pranje tepiha 035",
    "čišćenje tepiha Pomoravski okrug",
    "cena pranja tepiha",
    "dubinsko pranje tepiha cena",
    "koliko košta pranje tepiha",
  ],
  alternates: { canonical: "/dubinsko-pranje-tepiha" },
  openGraph: {
    title: "Dubinsko Pranje Tepiha | Ćuprija, Paraćin, Jagodina (035)",
    description:
      "Profesionalno dubinsko pranje i čišćenje tepiha, prostirki i itisona u Pomoravskom okrugu. Iznajmite mašinu sa dostavom.",
    url: "https://dubinskopranje035.rs/dubinsko-pranje-tepiha",
    images: [
      {
        url: "/images/DubinskoPranje035_slika8.jpeg",
        width: 1200,
        height: 630,
        alt: "Dubinsko pranje tepiha profesionalnom mašinom",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dubinsko Pranje Tepiha",
  description:
    "Iznajmljivanje profesionalne mašine za dubinsko pranje i čišćenje tepiha, prostirki i itisona. Dostava u Ćupriji, Paraćinu i Jagodini.",
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
  serviceType: "Dubinsko pranje tepiha",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "3500",
    highPrice: "7000",
    priceCurrency: "RSD",
    offerCount: 3,
  },
};

export default function DubinskoTepihPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Dubinsko Pranje Tepiha" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <LayoutGrid className="h-4 w-4" />
                Tepihi i prostirke
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                Dubinsko Pranje i Čišćenje Tepiha u Pomoravskom Okrugu (035)
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iznajmite profesionalnu mašinu za dubinsko pranje tepiha i
                uklonite godinama nakupljenu prljavštinu, mrlje i alergene iz
                tepiha, prostirki i itisona kod kuće u Ćupriji, Paraćinu ili
                Jagodini.
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
                src="/images/DubinskoPranje035_slika8.jpeg"
                alt="Dubinsko pranje tepiha profesionalnom mašinom u Pomoravskom okrugu"
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
            Koje Tepihe Možete Dubinski Oprati
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Veliki tepisi",
                desc: "Dubinsko pranje velikih tepiha za dnevni boravak i spavaću sobu - uklonite prašinu, grinje i mrlje iz dubine vlakana.",
              },
              {
                title: "Male prostirke",
                desc: "Dubinsko čišćenje malih prostirki za kupatilo, hodnik i predsoblje. Brzo i efikasno osvežavanje.",
              },
              {
                title: "Itisoni i teket tepihi",
                desc: "Profesionalno dubinsko pranje itisona i teket tepiha - naša mašina izvlači prljavštinu iz najdubljih slojeva.",
              },
              {
                title: "Vuneni tepihi",
                desc: "Dubinsko pranje vunenih tepiha sa prilagođenim podešavanjima - bezbedan postupak za osetljive materijale.",
              },
              {
                title: "Stubišta i hodnici",
                desc: "Dubinsko čišćenje tepiha na stepenicama i hodnicima - praktičan nastavak za teško dostupna mesta.",
              },
              {
                title: "Dečije prostirke",
                desc: "Dubinsko pranje dečijih tepiha i prostirki za igru - uklonite alergene i bakterije za zdravije okruženje.",
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
            Sve o Dubinskom Pranju Tepiha
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Dubinsko pranje tepiha je najefikasniji način za uklanjanje duboko
              ukorenjene prljavštine, mrlja, alergena i neprijatnih mirisa iz
              tepiha. Naša profesionalna mašina ubrizgava rastvor deterdženta
              pod pritiskom duboko u vlakna tepiha, a zatim snažnom ekstrakcijom
              izvlači svu prljavštinu zajedno sa viškom vode.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Koliko košta dubinsko pranje tepiha u Pomoravskom okrugu?
            </h3>
            <p>
              Iznajmljivanje mašine za dubinsko pranje tepiha košta od 3.500 RSD
              za jedan dan. Za taj novac možete oprati neograničen broj tepiha u
              svom domu. Ako uporedite sa cenom profesionalnog servisa za pranje
              tepiha koji naplaćuje 300-500 RSD po kvadratnom metru,
              iznajmljivanje mašine je višestruko isplativije, posebno ako imate
              više tepiha ili veće površine.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Koliko traje sušenje tepiha posle dubinskog pranja?
            </h3>
            <p>
              Zahvaljujući snažnoj ekstrakciji naše mašine, tepih se suši znatno
              brže nego kod ručnog pranja. U proseku, sušenje traje 2 do 6 sati
              zavisno od debljine tepiha i provetrenosti prostorije. Saveti za
              brže sušenje: otvorite prozore, uključite ventilator ili klima
              uređaj, i ne gaziте tepih dok se potpuno ne osuši.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Dubinsko pranje tepiha u Ćupriji, Paraćinu i Jagodini
            </h3>
            <p>
              Dostavljamo mašinu za dubinsko pranje tepiha na vašu adresu u
              Ćupriji (500 RSD dostava), Paraćinu (1000 RSD) i Jagodini (1000
              RSD). Dostava se vrši između 16h i 19h, preuzimanje od 10h do 20h.
              Uz mašinu dobijate profesionalni deterdžent za dubinsko čišćenje
              tepiha, sve nastavke i detaljna uputstva na srpskom jeziku. Takođe
              nudimo obuku na licu mesta za 500 dinara.
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
            Iznajmite mašinu za dubinsko pranje tepiha i prostirki kod kuće.
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
