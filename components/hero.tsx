"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Sparkles } from "lucide-react"

export function Hero() {
  const phoneNumber = "+381604564481"

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-500/15 px-5 py-2.5 text-sm font-medium text-green-700 cursor-pointer hover:bg-green-500/25 active:scale-95 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 duration-700 border border-green-500/20">
            <Sparkles className="h-4 w-4" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Dostupno odmah
          </div>

          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Iznajmljivanje Mašina za Dubinsko Pranje
            <span className="block mt-2 text-primary">Ćuprija, Paraćin, Jagodina (035)</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl lg:text-2xl leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 max-w-3xl mx-auto">
            Profesionalno pranje tepiha, nameštaja i vozila - čist dom, zdravija porodica -{" "}
            <strong className="text-foreground font-semibold">za 70% manje novca</strong>! Uklonite alergene, bakterije
            i mrlje profesionalnim mašinama bez odlaska iz kuće.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto gap-3 min-h-[56px] min-w-[220px] text-base transition-all hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-primary/25 cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              Rezervišite odmah
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-3 min-h-[56px] min-w-[220px] text-base bg-[#25D366] text-white border-[#25D366] hover:bg-[#20BA5A] hover:text-white active:scale-95 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/25 cursor-pointer"
              >
                <a href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-3 min-h-[56px] min-w-[220px] text-base bg-[#7360F2] text-white border-[#7360F2] hover:bg-[#665AC1] hover:text-white active:scale-95 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7360F2]/25 cursor-pointer"
              >
                <a href={`viber://chat?number=${phoneNumber.replace(/\+/g, "%2B")}`}>
                  <MessageCircle className="h-5 w-5" />
                  Viber
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Dostava isti dan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Podrška 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>100+ zadovoljnih klijenata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
