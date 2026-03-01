import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { Pricing } from "@/components/pricing";

export const metadata: Metadata = {
  title:
    "Cenovnik Dubinskog Pranja 035 | Cena Iznajmljivanja Mašine | Ćuprija, Paraćin, Jagodina",
  description:
    "Cenovnik iznajmljivanja mašine za dubinsko pranje u Pomoravskom okrugu (035). Od 3.500 RSD dnevno. Transparentne cene za Ćupriju, Paraćin i Jagodinu. Bez skrivenih troškova.",
  keywords: [
    "cena dubinskog pranja",
    "koliko košta dubinsko pranje",
    "cenovnik dubinskog pranja",
    "cena iznajmljivanja mašine za dubinsko pranje",
    "cena pranja tepiha",
    "cena pranja nameštaja",
    "cena dubinskog čišćenja",
    "dubinsko pranje cena Ćuprija",
    "dubinsko pranje cena Paraćin",
    "dubinsko pranje cena Jagodina",
    "koliko košta pranje tepiha po m2",
    "cena iznajmljivanja usisivača",
    "cena dubinskog pranja 035",
  ],
  alternates: { canonical: "/cenovnik" },
  openGraph: {
    title: "Cenovnik Dubinskog Pranja 035 | Od 3.500 RSD",
    description:
      "Transparentne cene iznajmljivanja mašine za dubinsko pranje u Ćupriji, Paraćinu i Jagodini. Od 3.500 RSD za 1 dan.",
    url: "https://dubinskopranje035.rs/cenovnik",
  },
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Cenovnik iznajmljivanja mašine za dubinsko pranje 035",
  description:
    "Cene iznajmljivanja profesionalne mašine za dubinsko pranje i čišćenje u Ćupriji, Paraćinu i Jagodini.",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Iznajmljivanje mašine za dubinsko pranje - 1 dan",
      price: "3500",
      priceCurrency: "RSD",
      description:
        "Jednodnevno iznajmljivanje profesionalne mašine za dubinsko pranje sa deterdžentom i opremom.",
    },
    {
      "@type": "Offer",
      name: "Iznajmljivanje mašine za dubinsko pranje - 2 dana",
      price: "5500",
      priceCurrency: "RSD",
      description:
        "Dvodnevno iznajmljivanje - najčešći izbor za kompletno čišćenje stana ili kuće.",
    },
    {
      "@type": "Offer",
      name: "Iznajmljivanje mašine za dubinsko pranje - 3 dana",
      price: "7000",
      priceCurrency: "RSD",
      description:
        "Trodnevno iznajmljivanje za veće projekte i detaljno dubinsko čišćenje.",
    },
  ],
};

export default function CenovnikPage() {
  return (
    <PageLayout>
      <JsonLd data={offerSchema} />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[{ label: "Početna", href: "/" }, { label: "Cenovnik" }]}
          />

          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              Cenovnik Dubinskog Pranja u Pomoravskom Okrugu (035)
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Transparentne cene iznajmljivanja profesionalne mašine za dubinsko
              pranje i čišćenje u Ćupriji, Paraćinu i Jagodini. Bez skrivenih
              troškova - sve uključeno u cenu.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Najčešća Pitanja o Cenama
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <h3 className="text-xl font-semibold text-foreground">
              Koliko košta dubinsko pranje tepiha po m2?
            </h3>
            <p>
              Kod nas ne plaćate po kvadratnom metru. Plaćate fiksnu dnevnu cenu
              za iznajmljivanje mašine (od 3.500 RSD) i možete oprati
              neograničen broj tepiha. Profesionalni servisi naplaćuju 300-500
              RSD po m2, što za prosečan stan iznosi 5.000-15.000 RSD.
              Iznajmljivanjem mašine štedite 50-70%.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Da li je deterdžent uključen u cenu?
            </h3>
            <p>
              Da, profesionalni deterdžent za dubinsko pranje je uključen u cenu
              iznajmljivanja. Ne morate kupovati ništa dodatno.
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Koliko košta dostava u Ćupriji, Paraćinu i Jagodini?
            </h3>
            <p>
              Dostava u Ćupriji košta 500 RSD, u Paraćinu 1000 RSD, a u Jagodini
              1000 RSD. Dostava se vrši u periodu između 16h i 19h, preuzimanje
              može od 10h do 20h. Možete i lično preuzeti mašinu bez troškova
              dostave.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
