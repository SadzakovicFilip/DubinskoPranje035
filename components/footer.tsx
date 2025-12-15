import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

export function Footer() {
  const phoneNumber = "+381604564481"
  const phoneDisplay = "+381 60 456 4481"

  return (
    <footer className="border-t border-border bg-secondary/30 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                035
              </div>
              <span className="font-semibold text-lg text-foreground">Dubinsko Pranje</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Profesionalne mašine za iznajmljivanje u Pomoravskom okrugu (035). Čistite nameštaj, tepihe i automobile
              sami i uštedite novac. Lokalna usluga dubinskog pranja u Srbiji.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary cursor-pointer group"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="group-hover:underline">{phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-[#25D366] cursor-pointer group"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span className="group-hover:underline">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`viber://chat?number=${phoneNumber.replace(/\+/g, "%2B")}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#7360F2] cursor-pointer group"
                >
                  <MessageCircle className="h-4 w-4 text-[#7360F2]" />
                  <span className="group-hover:underline">Viber</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@primer.rs</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Pomoravski okrug, Srbija (035)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Radno vreme</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Ponedeljak - Nedelja</span>
              </li>
              <li className="text-2xl font-bold text-foreground">08:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Iznajmljivanje Mašina za Dubinsko Čišćenje - Pomoravski okrug. Sva prava
            zadržana.
          </p>
        </div>
      </div>
    </footer>
  )
}
