import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Kako Funkcioniše Dubinsko Pranje | Vodič za Početnike | 035",
  description:
    "Naučite kako funkcioniše dubinsko pranje i čišćenje nameštaja, tepiha i automobila. Korak po korak vodič za korišćenje profesionalne mašine. Iznajmljivanje u Ćupriji, Paraćinu i Jagodini.",
  keywords: [
    "kako radi dubinsko pranje",
    "kako dubinski oprati sofu",
    "uputstvo za dubinsko pranje",
    "kako koristiti mašinu za dubinsko pranje",
    "vodič za dubinsko pranje",
    "dubinsko pranje korak po korak",
    "kako pripremiti stan za dubinsko pranje",
    "dubinsko pranje uputstvo",
    "kako funkcioniše dubinsko čišćenje",
  ],
  alternates: { canonical: "/kako-funkcionise" },
  openGraph: {
    title: "Kako Funkcioniše Dubinsko Pranje | Vodič",
    description:
      "Korak po korak vodič za dubinsko pranje nameštaja, tepiha i automobila profesionalnom mašinom.",
    url: "https://dubinskopranje035.rs/kako-funkcionise",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kako iznajmiti i koristiti mašinu za dubinsko pranje",
  description:
    "Kompletni vodič za iznajmljivanje i korišćenje profesionalne mašine za dubinsko pranje nameštaja, tepiha i automobila u Pomoravskom okrugu.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Rezervišite mašinu",
      text: "Pozovite nas na 060 456 4481 ili pošaljite poruku na WhatsApp/Viber da rezervišete mašinu za željeni datum.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Preuzmite ili sačekajte dostavu",
      text: "Preuzmite mašinu lično ili sačekajte dostavu na vašu adresu u Ćupriji, Paraćinu ili Jagodini.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Pripremite prostor",
      text: "Usisajte prašinu običnim usisivačem, sklonite sitan nameštaj i obezbedite dobro provetravanje.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Napunite mašinu",
      text: "Napunite rezervoar toplom vodom i dodajte profesionalni deterdžent po uputstvu.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Dubinski očistite",
      text: "Ravnomerno prelazite površinu mašinom - ona ubrizgava rastvor i odmah ga izvlači sa prljavštinom.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Pustite da se osuši",
      text: "Otvorite prozore za bolje provetravanje. Sušenje traje 2-6 sati zavisno od materijala.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Vratite mašinu",
      text: "Isperite rezervoar, vratite mašinu i uživajte u svežem, čistom domu.",
    },
  ],
  totalTime: "PT4H",
  tool: [
    "Profesionalna mašina za dubinsko pranje",
    "Profesionalni deterdžent",
    "Običan usisivač (za pripremu)",
  ],
};

export default function KakoFunkPage() {
  const steps = [
    {
      num: "01",
      title: "Rezervišite mašinu",
      desc: "Pozovite nas na 060 456 4481 ili pošaljite poruku na WhatsApp ili Viber. Izaberite datum i trajanje najma (1, 2 ili 3 dana).",
    },
    {
      num: "02",
      title: "Preuzmite ili sačekajte dostavu",
      desc: "Preuzmite mašinu lično bez dodatnih troškova, ili izaberite dostavu na vašu adresu u Ćupriji (300 din), Paraćinu (400 din) ili Jagodini (500 din).",
    },
    {
      num: "03",
      title: "Pripremite prostor za dubinsko pranje",
      desc: "Usisajte prašinu običnim usisivačem, sklonite sitan nameštaj sa površina koje ćete prati i obezbedite dobro provetravanje prostorije.",
    },
    {
      num: "04",
      title: "Napunite mašinu i krenite sa pranjem",
      desc: "Napunite rezervoar toplom vodom, dodajte profesionalni deterdžent po uputstvu i ravnomerno prelazite površinu. Mašina ubrizgava rastvor i odmah ga izvlači sa prljavštinom.",
    },
    {
      num: "05",
      title: "Pustite da se osuši",
      desc: "Otvorite prozore za bolje provetravanje. Zahvaljujući snažnoj ekstrakciji, sušenje traje samo 2-6 sati zavisno od materijala i ventilacije.",
    },
    {
      num: "06",
      title: "Vratite mašinu i uživajte",
      desc: "Isperite rezervoar čistom vodom, vratite mašinu i uživajte u svežem, čistom domu bez alergena, bakterija i neprijatnih mirisa.",
    },
  ];

  return (
    <PageLayout>
      <JsonLd data={howToSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Početna", href: "/" },
              { label: "Kako Funkcioniše" },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Kako Funkcioniše Dubinsko Pranje i Čišćenje
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Kompletni vodič za iznajmljivanje i korišćenje profesionalne
              mašine za dubinsko pranje nameštaja, tepiha i automobila u
              Pomoravskom okrugu (035).
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            6 Jednostavnih Koraka do Čistog Doma
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Saveti za Najbolje Rezultate Dubinskog Pranja
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Temperatura vode
            </h3>
            <p>
              Koristite toplu vodu (30-40°C) za najbolje rezultate. Prevruća
              voda može oštetiti osetljive materijale, a hladna voda slabije
              rastvara deterdžent.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Količina deterdženta
            </h3>
            <p>
              Pridržavajte se uputstva za doziranje. Previše deterdženta ne
              znači bolje čišćenje - višak deterdženta ostaje u materijalu i
              privlači prljavštinu brže.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Tehnika pranja
            </h3>
            <p>
              Prelazite ravnomerno preko površine u paralelnim potezima, poput
              košenja trave. Ne zadržavajte se predugo na jednom mestu jer
              previše vode može oštetiti materijal. Za teže mrlje, napravite
              dva prolaza.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Ubrzavanje sušenja
            </h3>
            <p>
              Otvorite sve prozore u prostoriji, uključite ventilator ili klima
              uređaj i ne gaziте oprane površine dok se ne osuše (2-6 sati).
              Za tepihe, podignite ih na štafelaj ili stolice da vazduh
              cirkuliše sa obe strane.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Spremni da počnete?</h2>
          <p className="text-muted-foreground mb-8">
            Pogledajte cene ili odmah rezervišite mašinu za dubinsko pranje.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="tel:+381604564481">
                <Phone className="h-5 w-5" />
                Pozovite: 060 456 4481
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
      </section>
    </PageLayout>
  );
}
