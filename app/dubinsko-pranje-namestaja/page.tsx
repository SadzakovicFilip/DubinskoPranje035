import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Sofa, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Dubinsko Pranje Nameštaja | Sofe, Fotelje, Madraci | Ćuprija, Paraćin, Jagodina",
  description:
    "Iznajmite profesionalnu mašinu za dubinsko pranje nameštaja u Pomoravskom okrugu (035). Dubinsko čišćenje sofe, fotelje, madraca, kauča i stolica u Ćupriji, Paraćinu i Jagodini. Dostava na adresu.",
  keywords: [
    "dubinsko pranje nameštaja",
    "dubinsko čišćenje nameštaja",
    "dubinsko pranje sofe",
    "dubinsko čišćenje sofe",
    "pranje fotelje",
    "dubinsko pranje madraca",
    "pranje kauča",
    "dubinsko pranje stolice",
    "čišćenje tapaciranog nameštaja",
    "dubinsko pranje nameštaja Ćuprija",
    "dubinsko pranje nameštaja Paraćin",
    "dubinsko pranje nameštaja Jagodina",
    "dubinsko pranje sofe Ćuprija",
    "dubinsko pranje sofe Paraćin",
    "dubinsko pranje sofe Jagodina",
    "pranje nameštaja 035",
    "čišćenje nameštaja Pomoravski okrug",
  ],
  alternates: { canonical: "/dubinsko-pranje-namestaja" },
  openGraph: {
    title: "Dubinsko Pranje Nameštaja | Ćuprija, Paraćin, Jagodina (035)",
    description:
      "Profesionalno dubinsko pranje i čišćenje sofe, fotelje, madraca i ostalog nameštaja u Pomoravskom okrugu. Iznajmite mašinu sa dostavom.",
    url: "https://dubinskopranje035.rs/dubinsko-pranje-namestaja",
    images: [
      {
        url: "/images/DubinskoPranje035_slika2.jpg",
        width: 1200,
        height: 630,
        alt: "Dubinsko pranje nameštaja - sofa pre i posle čišćenja",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dubinsko Pranje Nameštaja",
  description:
    "Iznajmljivanje profesionalne mašine za dubinsko pranje i čišćenje nameštaja - sofe, fotelje, madraci, stolice, kauči. Dostava u Ćupriji, Paraćinu i Jagodini.",
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
  serviceType: "Dubinsko pranje nameštaja",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "3500",
    highPrice: "7000",
    priceCurrency: "RSD",
    offerCount: 3,
  },
};

export default function DubinskoNamPage() {
  return (
    <PageLayout>
      <JsonLd data={serviceSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Dubinsko Pranje Nameštaja" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sofa className="h-4 w-4" />
                Nameštaj
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                Dubinsko Pranje i Čišćenje Nameštaja u Pomoravskom Okrugu (035)
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Iznajmite profesionalnu mašinu za dubinsko pranje nameštaja i
                očistite sofu, fotelju, madrac, kauč ili stolice kod kuće u
                Ćupriji, Paraćinu ili Jagodini. Uklonite mrlje, alergene,
                bakterije i neprijatne mirise bez odlaska u čistionicu.
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
                src="/images/DubinskoPranje035_slika2.jpg"
                alt="Dubinsko pranje nameštaja - profesionalna mašina čisti sofu u Ćupriji"
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
            Šta Sve Možete Dubinski Oprati od Nameštaja
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sofe i kauči",
                desc: "Dubinsko pranje sofe uklanja mrlje od hrane, pića, znoja i kućnih ljubimaca. Sofa izgleda i miriše kao nova.",
              },
              {
                title: "Fotelje i stolice",
                desc: "Dubinsko čišćenje fotelja i trpezarijskih stolica uklanja prašinu, grinje i alergene iz dubine tkanine.",
              },
              {
                title: "Madraci i jastuci",
                desc: "Dubinsko pranje madraca je ključno za zdravlje - uklanja grinje, bakterije i znoj koji se nakupljaju mesecima.",
              },
              {
                title: "Tapaciran nameštaj",
                desc: "Sav tapaciran nameštaj - od tabure do dečije stolice - može se dubinski oprati našom profesionalnom mašinom.",
              },
              {
                title: "Kreveti i ležaljke",
                desc: "Dubinsko čišćenje kreveta i ležaljki za spavaću sobu ili dnevni boravak - sveži rezultati za celu porodicu.",
              },
              {
                title: "Kancelarijske stolice",
                desc: "Radne stolice i kancelarijski nameštaj takođe zaslužuju dubinsko pranje - poboljšajte higijenu radnog prostora.",
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
            Kako Funkcioniše Dubinsko Pranje Nameštaja
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Dubinsko pranje nameštaja je proces koji koristi profesionalnu
              mašinu za ubrizgavanje rastvora deterdženta duboko u vlakna
              tkanine, a zatim snažnom ekstrakcijom izvlači svu prljavštinu,
              mrlje, alergene i višak vode. Za razliku od običnog usisavanja
              koje čisti samo površinu, dubinsko čišćenje nameštaja dopire do
              najdubljih slojeva materijala.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Zašto je dubinsko pranje sofe i nameštaja važno?
            </h3>
            <p>
              Vaša sofa, fotelja i madrac su leglo grinja, bakterija, alergena
              i prašine koji se nakupljaju mesecima. Istraživanja pokazuju da
              prosečna sofa sadrži više bakterija po kvadratnom centimetru nego
              WC daska. Dubinsko pranje nameštaja uklanja do 99% alergena i
              značajno poboljšava kvalitet vazduha u vašem domu u Ćupriji,
              Paraćinu ili Jagodini.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Koliko često treba dubinski prati nameštaj?
            </h3>
            <p>
              Preporučujemo dubinsko čišćenje nameštaja najmanje jednom u 6
              meseci. Ako imate kućne ljubimce, malu decu ili alergije,
              poželjno je dubinsko pranje sofe i fotelja na svaka 3 meseca.
              Iznajmljivanjem naše mašine za dubinsko pranje, ovaj proces
              postaje pristupačan i praktičan za svaku porodicu u Pomoravskom
              okrugu.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Dubinsko pranje nameštaja u Ćupriji, Paraćinu i Jagodini
            </h3>
            <p>
              Nudimo iznajmljivanje profesionalne mašine za dubinsko pranje
              nameštaja sa dostavom na adresu u Ćupriji, Paraćinu i Jagodini.
              Dostava se vrši između 16h i 19h, preuzimanje od 10h do 20h.
              Cena iznajmljivanja počinje od 3.500 RSD za jedan dan, što je
              višestruko jeftinije od angažovanja profesionalnog servisa za
              dubinsko čišćenje. Uz mašinu dobijate deterdžent, sve nastavke i
              detaljna uputstva.
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
            Iznajmite mašinu za dubinsko pranje nameštaja i očistite sofu,
            fotelju ili madrac kod kuće.
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
