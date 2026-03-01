"use client";

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import Image from "next/image";

export function Hero() {
  const phoneNumber = "+381604564481";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 hidden md:block bg-black">
        <Image
          src="/images/DubinskoCiscenje035_slika6.jpg"
          alt="Profesionalna mašina za dubinsko čišćenje - Dubinsko Pranje 035"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
      </div>
      <div className="absolute inset-0 -z-10 block md:hidden">
        <Image
          src="/images/DubinskoCiscenje035_slika7.jpg"
          alt="Profesionalna mašina za dubinsko čišćenje - Dubinsko Pranje 035"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
      </div>

      <div className="absolute inset-0 -z-5 bg-black/20" />

      <div className="mx-auto max-w-7xl w-full">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-8 py-8 sm:py-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white cursor-pointer hover:bg-white/15 active:scale-95 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 duration-700 border border-white/20 backdrop-blur-sm drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Dostupno odmah
          </div>

          <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
            Iznajmljivanje Mašina za Dubinsko Pranje
            <span className="block mt-2 text-white">
              Ćuprija, Paraćin, Jagodina (035)
            </span>
          </h1>

          <p className="mb-10 text-lg sm:text-xl lg:text-2xl leading-relaxed text-white font-bold text-pretty animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200 max-w-3xl mx-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]">
            Profesionalno pranje tepiha, nameštaja i vozila – čist dom, zdravija
            porodica –{" "}
            <strong className="text-white font-semibold">
              za 70% manje novca
            </strong>
            ! Iznajmite usisivač za dubinsko pranje u 035 (Ćuprija, Paraćin,
            Jagodina) i uklonite alergene, bakterije i mrlje bez odlaska iz
            kuće.
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
                <a
                  href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click_whatsapp", "hero_whatsapp")}
                >
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
                <a
                  href={`viber://chat?number=${phoneNumber.replace(
                    /\+/g,
                    "%2B"
                  )}`}
                  onClick={() => trackEvent("click_viber", "hero_viber")}
                >
                  <MessageCircle className="h-5 w-5" />
                  Viber
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
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
              <span>Deterdžent i oprema uključeni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
