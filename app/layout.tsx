import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Dubinsko pranje i čišćenje | Iznajmljivanje usisivača 035 | Ćuprija, Paraćin, Jagodina",
  description:
    "Iznajmljivanje profesionalnih mašina za dubinsko pranje i dubinsko čišćenje nameštaja, tepiha i vozila u Pomoravskom okrugu (035) – Ćuprija, Paraćin, Jagodina. Dostava, obuka i podrška.",
  generator: "v0.app",
  keywords: [
    "dubinsko pranje",
    "dubinsko čišćenje",
    "iznajmljivanje usisivača",
    "iznajmljivanje mašina",
    "dubinsko pranje nameštaja",
    "dubinsko pranje tepiha",
    "pranje automobila",
    "čišćenje sofe",
    "Ćuprija",
    "Paraćin",
    "Jagodina",
    "Pomoravski okrug",
    "035",
    "Srbija",
    "profesionalno čišćenje",
    "lokalna usluga čišćenja",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Dubinsko pranje i čišćenje | Iznajmljivanje usisivača 035 | Ćuprija, Paraćin, Jagodina",
    description:
      "Profesionalne mašine za dubinsko pranje i dubinsko čišćenje nameštaja, tepiha i automobila u Pomoravlju (035) – dostava isti dan.",
    url: "https://dubinskopranje035.rs/",
    siteName: "Dubinsko Pranje 035",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Dubinsko pranje i čišćenje u Pomoravskom okrugu 035",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dubinsko pranje i čišćenje | Iznajmljivanje usisivača 035 | Ćuprija, Paraćin, Jagodina",
    description:
      "Iznajmite mašinu za dubinsko pranje i čišćenje u Pomoravskom okrugu (035) – dostava, obuka, podrška.",
    images: ["/placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Optional: populate when real ocene budu dostupne
  const aggregateRating:
    | { "@type": "AggregateRating"; ratingValue: number; ratingCount: number }
    | undefined = undefined;

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dubinsko Pranje 035",
    url: "https://dubinskopranje035.rs/",
    description:
      "Profesionalne mašine za dubinsko pranje i dubinsko čišćenje nameštaja, tepiha i automobila u Pomoravskom okrugu (Ćuprija, Paraćin, Jagodina). Iznajmljivanje usisivača sa dostavom, obukom i podrškom.",
    telephone: "+381604564481",
    areaServed: [
      "Ćuprija",
      "Paraćin",
      "Jagodina",
      "Pomoravski okrug",
      "035",
      "Srbija",
    ],
    priceRange: "RSD",
    image: "https://dubinskopranje035.rs/placeholder.jpg",
    logo: "https://dubinskopranje035.rs/icon.svg",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.9208,
      longitude: 21.3699,
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
      areaServed: "Pomoravski okrug",
      availableLanguage: ["Serbian"],
    },
    sameAs: [
      "https://wa.me/381604564481",
      "viber://chat?number=%2B381604564481",
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
      name: "Iznajmljivanje mašina za dubinsko pranje i čišćenje 035",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Iznajmljivanje mašine za dubinsko pranje - 1 dan",
        },
        {
          "@type": "Offer",
          name: "Iznajmljivanje mašine za dubinsko pranje - 2 dana",
        },
        {
          "@type": "Offer",
          name: "Iznajmljivanje mašine za dubinsko pranje - 3-5 dana",
        },
      ],
    },
    ...(aggregateRating ? { aggregateRating } : {}),
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
          text: "Da, dostavljamo mašinu za dubinsko pranje i dubinsko čišćenje na adresu u Ćupriji, Paraćinu i Jagodini (035).",
        },
      },
      {
        "@type": "Question",
        name: "Koliko traje sušenje posle dubinskog pranja nameštaja ili tepiha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uz profesionalnu ekstrakciju, sušenje obično traje između 2 i 6 sati u zavisnosti od materijala i ventilacije.",
        },
      },
      {
        "@type": "Question",
        name: "Da li je deterdžent bezbedan za decu i kućne ljubimce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Koristimo deterdžente namenjene profesionalnom dubinskom čišćenju koji su bezbedni za decu i kućne ljubimce kada se koriste po uputstvu.",
        },
      },
      {
        "@type": "Question",
        name: "Mogu li da iznajmim mašinu za dubinsko čišćenje vikendom?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, radimo svakog dana od 08:00 do 20:00 i možete zakazati preuzimanje ili dostavu i vikendom.",
        },
      },
      {
        "@type": "Question",
        name: "Da li mašina radi za auto sedišta i tapacirunge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Da, uz mašinu dobijate nastavke za auto sedišta, tapacirunge vrata i gepek, kao i uputstvo za pravilno dubinsko pranje.",
        },
      },
    ],
  };

  return (
    <html lang="sr">
      <body className={`font-sans antialiased`}>
        {children}
        <Script
          id="seo-schema-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Script
          id="seo-schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
