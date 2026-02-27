import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://dubinskopranje035.rs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dubinsko Pranje i Čišćenje 035 | Iznajmljivanje Mašina | Ćuprija, Paraćin, Jagodina",
    template: "%s | Dubinsko Pranje 035",
  },
  description:
    "Iznajmljivanje profesionalnih mašina za dubinsko pranje i dubinsko čišćenje nameštaja, tepiha i automobila u Pomoravskom okrugu (035) – Ćuprija, Paraćin, Jagodina. Dostava na adresu, obuka i podrška.",
  keywords: [
    "dubinsko pranje",
    "dubinsko čišćenje",
    "iznajmljivanje mašina za dubinsko pranje",
    "iznajmljivanje usisivača",
    "dubinsko pranje nameštaja",
    "dubinsko pranje tepiha",
    "dubinsko pranje automobila",
    "dubinsko čišćenje nameštaja",
    "dubinsko čišćenje tepiha",
    "dubinsko čišćenje automobila",
    "dubinsko pranje sofe",
    "dubinsko pranje madraca",
    "pranje auto sedišta",
    "čišćenje sofe",
    "pranje tepiha",
    "dubinsko pranje Ćuprija",
    "dubinsko pranje Paraćin",
    "dubinsko pranje Jagodina",
    "dubinsko čišćenje Ćuprija",
    "dubinsko čišćenje Paraćin",
    "dubinsko čišćenje Jagodina",
    "iznajmljivanje usisivača Ćuprija",
    "iznajmljivanje usisivača Paraćin",
    "iznajmljivanje usisivača Jagodina",
    "Pomoravski okrug",
    "035",
    "Pomoravlje",
    "profesionalno čišćenje",
    "cena dubinskog pranja",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Dubinsko Pranje i Čišćenje 035 | Iznajmljivanje Mašina | Ćuprija, Paraćin, Jagodina",
    description:
      "Profesionalne mašine za dubinsko pranje i dubinsko čišćenje nameštaja, tepiha i automobila u Pomoravskom okrugu (035) – dostava isti dan.",
    url: SITE_URL,
    siteName: "Dubinsko Pranje 035",
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dubinsko Pranje i Čišćenje 035 | Iznajmljivanje Mašina | Ćuprija, Paraćin, Jagodina",
    description:
      "Iznajmite profesionalnu mašinu za dubinsko pranje i čišćenje u Pomoravskom okrugu (035) – dostava, obuka, podrška.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dubinsko Pranje 035",
  url: `${SITE_URL}/`,
  description:
    "Profesionalne mašine za dubinsko pranje i dubinsko čišćenje nameštaja, tepiha i automobila u Pomoravskom okrugu (Ćuprija, Paraćin, Jagodina). Iznajmljivanje usisivača sa dostavom, obukom i podrškom.",
  telephone: "+381604564481",
  areaServed: [
    { "@type": "City", name: "Ćuprija" },
    { "@type": "City", name: "Paraćin" },
    { "@type": "City", name: "Jagodina" },
    { "@type": "AdministrativeArea", name: "Pomoravski okrug" },
  ],
  priceRange: "$$",
  image: `${SITE_URL}/images/DubinskoCiscenje035_slika6.jpg`,
  logo: `${SITE_URL}/logo.png`,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.9278,
    longitude: 21.3783,
  },
  openingHoursSpecification: [
    {
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
      opens: "08:00",
      closes: "20:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+381604564481",
    contactType: "customer service",
    areaServed: "RS",
    availableLanguage: ["Serbian"],
  },
  sameAs: [
    "https://wa.me/381604564481",
    "https://www.instagram.com/DubinskoPranje035/",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "RS",
    addressRegion: "Pomoravski okrug",
    addressLocality: "Ćuprija",
    postalCode: "35230",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Iznajmljivanje mašina za dubinsko pranje i čišćenje",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Iznajmljivanje mašine za dubinsko pranje - 1 dan",
        price: "3500",
        priceCurrency: "RSD",
      },
      {
        "@type": "Offer",
        name: "Iznajmljivanje mašine za dubinsko pranje - 2 dana",
        price: "5500",
        priceCurrency: "RSD",
      },
      {
        "@type": "Offer",
        name: "Iznajmljivanje mašine za dubinsko pranje - 3 dana",
        price: "7000",
        priceCurrency: "RSD",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Da li dostavljate mašinu za dubinsko pranje u Ćupriji, Paraćinu i Jagodini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, dostavljamo mašinu za dubinsko pranje i dubinsko čišćenje na adresu u Ćupriji, Paraćinu i Jagodini (035). Cena dostave zavisi od lokacije.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko traje sušenje posle dubinskog pranja nameštaja ili tepiha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uz profesionalnu ekstrakciju, sušenje obično traje između 2 i 6 sati u zavisnosti od materijala i ventilacije prostorije.",
      },
    },
    {
      "@type": "Question",
      name: "Da li je deterdžent bezbedan za decu i kućne ljubimce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Koristimo profesionalne deterdžente koji su bezbedni za decu i kućne ljubimce kada se koriste po uputstvu koje dobijate uz mašinu.",
      },
    },
    {
      "@type": "Question",
      name: "Mogu li da iznajmim mašinu za dubinsko čišćenje vikendom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, radimo svakog dana od 08:00 do 20:00 uključujući vikend. Možete zakazati preuzimanje ili dostavu bilo kog dana.",
      },
    },
    {
      "@type": "Question",
      name: "Da li mašina radi za auto sedišta i tapacirunge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, uz mašinu dobijate nastavke za auto sedišta, tapacirunge vrata i gepek, kao i uputstvo za pravilno dubinsko pranje enterijera vozila.",
      },
    },
    {
      "@type": "Question",
      name: "Koliko košta dubinsko pranje tepiha u Ćupriji, Paraćinu i Jagodini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Iznajmljivanje mašine za dubinsko pranje košta od 3.500 RSD za 1 dan. Za taj novac možete oprati neograničen broj tepiha, nameštaja i auto sedišta.",
      },
    },
    {
      "@type": "Question",
      name: "Da li dobijam deterdžent uz iznajmljivanje mašine za dubinsko pranje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, profesionalni deterdžent za dubinsko pranje i čišćenje je uključen u cenu iznajmljivanja.",
      },
    },
    {
      "@type": "Question",
      name: "Kako da pripremim stan pre dubinskog pranja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usisajte prašinu običnim usisivačem, sklonite sitan nameštaj i obezbedite dobro provetravanje prostorije da sušenje traje kraće (2-6 sati).",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CZ3WV8852Y"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CZ3WV8852Y');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
