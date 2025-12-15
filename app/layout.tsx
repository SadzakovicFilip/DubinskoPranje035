import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Iznajmljivanje Mašina za Dubinsko Čišćenje Nameštaja i Tepiha | Pomoravski Okrug 035 | Srbija",
  description:
    "Iznajmite profesionalne mašine za dubinsko pranje nameštaja, tepiha i automobila u Pomoravskom okrugu (035). Lokalna usluga u Srbiji - uštedite novac i čistite kod kuće bez transporta nameštaja. Pozovite nas danas!",
  generator: "v0.app",
  keywords: [
    "dubinsko čišćenje",
    "iznajmljivanje mašina",
    "pranje nameštaja",
    "pranje tepiha",
    "pranje automobila",
    "čišćenje sofe",
    "Pomoravski okrug",
    "035",
    "Srbija",
    "dubinsko pranje nameštaja",
    "iznajmljivanje mašina za čišćenje",
    "mašine za pranje tepiha",
    "čišćenje nameštaja Srbija",
    "profesionalno čišćenje",
    "lokalna usluga čišćenja",
  ],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
