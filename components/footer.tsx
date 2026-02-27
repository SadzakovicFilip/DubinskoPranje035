"use client";

import Link from "next/link";
import { Phone, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  const phoneNumber = "+381604564481";
  const phoneDisplay = "+381 60 456 4481";

  return (
    <footer className="border-t border-border bg-secondary/30 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img
                src="/favicon.svg"
                alt="Dubinsko Pranje 035 - Logo"
                width={48}
                height={48}
              />
              <span className="font-semibold text-lg text-foreground">
                Dubinsko Pranje
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-sm">
              Profesionalne mašine za iznajmljivanje u Pomoravskom okrugu (035).
              Dubinsko pranje i čišćenje nameštaja, tepiha i automobila u
              Ćupriji, Paraćinu i Jagodini.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Usluge
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/dubinsko-pranje-namestaja"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dubinsko pranje nameštaja
                </Link>
              </li>
              <li>
                <Link
                  href="/dubinsko-pranje-tepiha"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dubinsko pranje tepiha
                </Link>
              </li>
              <li>
                <Link
                  href="/dubinsko-pranje-automobila"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dubinsko pranje automobila
                </Link>
              </li>
              <li>
                <Link
                  href="/cenovnik"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cenovnik
                </Link>
              </li>
              <li>
                <Link
                  href="/kako-funkcionise"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kako funkcioniše
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Lokacije
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/dubinsko-pranje-cuprija"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dubinsko pranje Ćuprija
                </Link>
              </li>
              <li>
                <Link
                  href="/dubinsko-pranje-paracin"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dubinsko pranje Paraćin
                </Link>
              </li>
              <li>
                <Link
                  href="/dubinsko-pranje-jagodina"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dubinsko pranje Jagodina
                </Link>
              </li>
              <li className="pt-4 flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground">Pon - Ned</span>
                  <div className="font-semibold text-foreground">08:00 - 20:00</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary cursor-pointer group"
                  onClick={() => trackEvent("click_tel", "footer_tel")}
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="group-hover:underline">{phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/DubinskoPranje035/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-primary cursor-pointer group"
                  onClick={() => trackEvent("click_instagram", "footer_instagram")}
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  <span className="group-hover:underline">@DubinskoPranje035</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-[#25D366] cursor-pointer group"
                  onClick={() => trackEvent("click_whatsapp", "footer_whatsapp")}
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span className="group-hover:underline">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`viber://chat?number=${phoneNumber.replace(/\+/g, "%2B")}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#7360F2] cursor-pointer group"
                  onClick={() => trackEvent("click_viber", "footer_viber")}
                >
                  <MessageCircle className="h-4 w-4 text-[#7360F2]" />
                  <span className="group-hover:underline">Viber</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Pomoravski okrug, Srbija (035)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Dubinsko Pranje 035 -
            Iznajmljivanje mašina za dubinsko čišćenje u Pomoravskom okrugu
            (Ćuprija, Paraćin, Jagodina). Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
