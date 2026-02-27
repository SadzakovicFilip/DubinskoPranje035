import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Dubinsko Pranje Ćuprija | Iznajmljivanje Mašina za Čišćenje | 035",
  description:
    "Dubinsko pranje i čišćenje u Ćupriji - iznajmljivanje profesionalne mašine za dubinsko pranje nameštaja, tepiha i automobila. Dostava na adresu u Ćupriji. Pozovite 060 456 4481.",
  keywords: [
    "dubinsko pranje Ćuprija",
    "dubinsko čišćenje Ćuprija",
    "iznajmljivanje usisivača Ćuprija",
    "iznajmljivanje mašina Ćuprija",
    "dubinsko pranje nameštaja Ćuprija",
    "dubinsko pranje tepiha Ćuprija",
    "dubinsko pranje automobila Ćuprija",
    "dubinsko pranje sofe Ćuprija",
    "dubinsko čišćenje sofe Ćuprija",
    "pranje tepiha Ćuprija",
    "pranje nameštaja Ćuprija",
    "pranje auto sedišta Ćuprija",
    "čišćenje nameštaja Ćuprija",
    "čišćenje tepiha Ćuprija",
    "profesionalno čišćenje Ćuprija",
    "Ćuprija 035",
  ],
  alternates: { canonical: "/dubinsko-pranje-cuprija" },
  openGraph: {
    title: "Dubinsko Pranje Ćuprija | Iznajmljivanje Mašina | 035",
    description:
      "Profesionalno dubinsko pranje i čišćenje nameštaja, tepiha i automobila u Ćupriji. Iznajmite mašinu sa dostavom na vašu adresu.",
    url: "https://dubinskopranje035.rs/dubinsko-pranje-cuprija",
    images: [
      {
        url: "/images/DubinskoCiscenje035_slika6.jpg",
        width: 1200,
        height: 630,
        alt: "Dubinsko pranje u Ćupriji - profesionalna mašina za čišćenje",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dubinsko Pranje 035 - Ćuprija",
  description:
    "Iznajmljivanje profesionalne mašine za dubinsko pranje i čišćenje nameštaja, tepiha i automobila u Ćupriji. Dostava na adresu, obuka i podrška.",
  telephone: "+381604564481",
  url: "https://dubinskopranje035.rs/dubinsko-pranje-cuprija",
  areaServed: { "@type": "City", name: "Ćuprija" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ćuprija",
    addressRegion: "Pomoravski okrug",
    addressCountry: "RS",
    postalCode: "35230",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.9278,
    longitude: 21.3783,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
};

export default function CuprijaPage() {
  return (
    <PageLayout>
      <JsonLd data={localBusinessSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Dubinsko Pranje Ćuprija" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                Ćuprija
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                Dubinsko Pranje i Čišćenje u Ćupriji
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iznajmite profesionalnu mašinu za dubinsko pranje u Ćupriji i
                očistite nameštaj, tepihe i automobile kod kuće. Dostava mašine
                na vašu adresu u Ćupriji za samo 300 dinara. Deterdžent, oprema
                i uputstva uključeni u cenu.
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
                src="/images/DubinskoCiscenje035_slika6.jpg"
                alt="Dubinsko pranje u Ćupriji - profesionalna mašina za dubinsko čišćenje"
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
            Usluge Dubinskog Pranja u Ćupriji
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dubinsko pranje nameštaja u Ćupriji",
                desc: "Operite sofu, fotelju, madrac i stolice profesionalnom mašinom za dubinsko čišćenje. Dostava na adresu u Ćupriji.",
                href: "/dubinsko-pranje-namestaja",
              },
              {
                title: "Dubinsko pranje tepiha u Ćupriji",
                desc: "Dubinsko čišćenje tepiha, prostirki i itisona u vašem domu u Ćupriji. Uklonite prašinu, mrlje i alergene.",
                href: "/dubinsko-pranje-tepiha",
              },
              {
                title: "Dubinsko pranje automobila u Ćupriji",
                desc: "Dubinsko pranje auto sedišta, tapacirung i gepeka. Očistite enterijer vozila profesionalno u Ćupriji.",
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
            Dubinsko Pranje u Ćupriji - Sve Što Treba da Znate
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Ćuprija je grad u centralnoj Srbiji, u Pomoravskom okrugu,
              poznat po bogatoj istoriji i gostoprimljivim ljudima. Ako živite
              u Ćupriji ili okolini i tražite profesionalno dubinsko pranje
              nameštaja, tepiha ili automobila, na pravom ste mestu.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Zašto izabrati dubinsko pranje u Ćupriji umesto servisa?
            </h3>
            <p>
              Profesionalni servisi za dubinsko čišćenje u Ćupriji naplaćuju
              od 5.000 do 15.000 dinara za čišćenje jedne sofe ili kompleta
              nameštaja. Iznajmljivanjem naše mašine za samo 3.500 RSD dnevno,
              možete oprati sav nameštaj, sve tepihe i automobile u svom domu
              - koliko god puta želite tokom trajanja najma.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Dostava mašine za dubinsko pranje u Ćupriji
            </h3>
            <p>
              Dostavljamo mašinu za dubinsko pranje na vašu kućnu adresu u
              Ćupriji za samo 300 dinara. Možete i lično preuzeti mašinu bez
              dodatnih troškova. Radimo svakog dana od 08:00 do 20:00,
              uključujući vikend. Pozovite nas na 060 456 4481 ili pišite na
              WhatsApp/Viber za rezervaciju.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Šta dobijate uz iznajmljivanje mašine u Ćupriji?
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Profesionalnu mašinu za dubinsko pranje i čišćenje</li>
              <li>Profesionalni deterdžent optimizovan za dubinsko pranje</li>
              <li>Električna šrafilica sa četkama za ribanje tvrdokornih mrlja</li>
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
