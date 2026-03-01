import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Dubinsko Pranje Paraćin | Iznajmljivanje Mašina za Čišćenje | 035",
  description:
    "Dubinsko pranje i čišćenje u Paraćinu - iznajmljivanje profesionalne mašine za dubinsko pranje nameštaja, tepiha i automobila. Dostava na adresu u Paraćinu. Pozovite 060 456 4481.",
  keywords: [
    "dubinsko pranje Paraćin",
    "dubinsko čišćenje Paraćin",
    "iznajmljivanje usisivača Paraćin",
    "iznajmljivanje mašina Paraćin",
    "dubinsko pranje nameštaja Paraćin",
    "dubinsko pranje tepiha Paraćin",
    "dubinsko pranje automobila Paraćin",
    "dubinsko pranje sofe Paraćin",
    "dubinsko čišćenje sofe Paraćin",
    "pranje tepiha Paraćin",
    "pranje nameštaja Paraćin",
    "pranje auto sedišta Paraćin",
    "čišćenje nameštaja Paraćin",
    "čišćenje tepiha Paraćin",
    "profesionalno čišćenje Paraćin",
    "Paraćin 035",
  ],
  alternates: { canonical: "/dubinsko-pranje-paracin" },
  openGraph: {
    title: "Dubinsko Pranje Paraćin | Iznajmljivanje Mašina | 035",
    description:
      "Profesionalno dubinsko pranje i čišćenje nameštaja, tepiha i automobila u Paraćinu. Iznajmite mašinu sa dostavom na vašu adresu.",
    url: "https://dubinskopranje035.rs/dubinsko-pranje-paracin",
    images: [
      {
        url: "/images/Paraćin.jpg",
        width: 1200,
        height: 630,
        alt: "Dubinsko pranje u Paraćinu - profesionalna mašina za čišćenje",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dubinsko Pranje 035 - Paraćin",
  description:
    "Iznajmljivanje profesionalne mašine za dubinsko pranje i čišćenje nameštaja, tepiha i automobila u Paraćinu. Dostava na adresu, obuka i podrška.",
  telephone: "+381604564481",
  url: "https://dubinskopranje035.rs/dubinsko-pranje-paracin",
  areaServed: { "@type": "City", name: "Paraćin" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paraćin",
    addressRegion: "Pomoravski okrug",
    addressCountry: "RS",
    postalCode: "35250",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.8611,
    longitude: 21.4044,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "20:00",
  },
};

export default function ParacinPage() {
  return (
    <PageLayout>
      <JsonLd data={localBusinessSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Dubinsko Pranje Paraćin" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                Paraćin
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                Dubinsko Pranje i Čišćenje u Paraćinu
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iznajmite profesionalnu mašinu za dubinsko pranje u Paraćinu i
                očistite nameštaj, tepihe i automobile kod kuće. Dostava mašine
                na vašu adresu u Paraćinu za samo 1000 dinara. Deterdžent,
                oprema i uputstva uključeni u cenu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="tel:+381604564481">
                    <Phone className="h-5 w-5" />
                    Pozovite: 060 456 4481
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/cenovnik">
                    Cenovnik
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
              <Image
                src="/images/Paraćin.jpg"
                alt="Dubinsko pranje u Paraćinu - profesionalna mašina za dubinsko čišćenje"
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
            Usluge Dubinskog Pranja u Paraćinu
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dubinsko pranje nameštaja u Paraćinu",
                desc: "Operite sofu, fotelju, madrac i stolice profesionalnom mašinom za dubinsko čišćenje. Dostava na adresu u Paraćinu.",
                href: "/dubinsko-pranje-namestaja",
              },
              {
                title: "Dubinsko pranje tepiha u Paraćinu",
                desc: "Dubinsko čišćenje tepiha, prostirki i itisona u vašem domu u Paraćinu. Uklonite prašinu, mrlje i alergene.",
                href: "/dubinsko-pranje-tepiha",
              },
              {
                title: "Dubinsko pranje automobila u Paraćinu",
                desc: "Dubinsko pranje auto sedišta, tapacirung i gepeka. Očistite enterijer vozila profesionalno u Paraćinu.",
                href: "/dubinsko-pranje-automobila",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                  Saznajte više
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Dubinsko Pranje u Paraćinu - Sve Što Treba da Znate
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Paraćin je jedan od najživljih gradova u Pomoravskom okrugu,
              poznat po tekstilnoj industriji i preduzimljivim stanovnicima. Ako
              živite u Paraćinu i potrebno vam je dubinsko pranje nameštaja,
              tepiha ili enterijera automobila, nudimo vam pristupačno rešenje -
              iznajmljivanje profesionalne mašine sa dostavom na vašu adresu.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Koliko košta dubinsko pranje u Paraćinu?
            </h3>
            <p>
              Cena iznajmljivanja mašine za dubinsko pranje u Paraćinu počinje
              od 3.500 RSD za jedan dan. Dostava na kućnu adresu u Paraćinu
              košta 1000 dinara. Za taj novac dobijate profesionalnu mašinu,
              deterdžent, sve nastavke i uputstva - i možete oprati neograničen
              broj nameštaja, tepiha i automobila tokom trajanja najma.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Dostava mašine za dubinsko pranje u Paraćinu
            </h3>
            <p>
              Dostavljamo mašinu za dubinsko pranje na vašu adresu u Paraćinu.
              Dostava se vrši u periodu između 16h i 19h. Lično preuzimanje može
              da se vrši od 10h do 20h, svakog dana uključujući vikend. Za
              rezervaciju pozovite 060 456 4481 ili pišite na WhatsApp/Viber.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Šta dobijate uz iznajmljivanje mašine u Paraćinu?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Profesionalnu mašinu za dubinsko pranje i čišćenje</li>
              <li>Profesionalni deterdžent optimizovan za dubinsko pranje</li>
              <li>
                Električna šrafilica sa četkama za ribanje tvrdokornih mrlja
              </li>
              <li>Kompletna štampana uputstva na srpskom jeziku</li>
              <li>Telefonska podrška tokom celog perioda korišćenja</li>
              <li>Opciona obuka na licu mesta (500 din)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dostupno i u Okolnim Gradovima
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dubinsko-pranje-cuprija"
              className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-foreground font-medium"
            >
              Dubinsko pranje Ćuprija
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
