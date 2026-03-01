import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { AccessoriesSlideshow } from "@/components/accessories-slideshow"

export function MachineInfo() {
  return (
    <section id="machine-info" className="scroll-mt-16 py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Profesionalna oprema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Profesionalna Mašina za Dubinsko Pranje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Koristimo najsavremeniju opremu koja garantuje rezultate profesionalnog nivoa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Machine Image – ceo uređaj u punoj rezoluciji */}
          <div className="relative animate-in fade-in slide-in-from-left-5 duration-700 order-2 lg:order-1">
            <div className="rounded-3xl border border-border/60 overflow-hidden shadow-2xl shadow-primary/15 bg-card">
              <div className="relative aspect-square bg-background/80">
                <Image
                  src="/images/DubinskoPranje035_slika1.jpg"
                  alt="Profesionalna mašina za dubinsko pranje u Pomoravlju 035 (Ćuprija, Paraćin, Jagodina)"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Machine Specifications */}
          <div className="animate-in fade-in slide-in-from-right-5 duration-700 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Specifikacije i Prednosti</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Naša mašina za dubinsko pranje je profesionalna oprema koja se koristi u hotelima, restoranima i
                čistionicama širom Evrope. Snažan motor i napredna tehnologija ekstrakcije garantuju dubinsko čišćenje
                bez oštećenja materijala.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Profesionalni Rezultati",
                  desc: "Ista oprema koju koriste profesionalne čistionice. Uklanja i najdublje ukorenjene mrlje, prašinu i alergene.",
                },
                {
                  title: "Snažna Ekstrakcija Vode",
                  desc: "Napredni sistem ekstrakcije uklanja do 95% vode iz materijala, što znači brže sušenje i svežiji rezultat.",
                },
                {
                  title: "Bezbedna za Sve Materijale",
                  desc: "Prilagodljive postavke omogućavaju sigurno čišćenje osetljivih materijala poput svile, baršuna i modernih mikrofiber tkanina.",
                },
                {
                  title: "Laka za Upotrebu",
                  desc: "Intuitivan dizajn sa jasnim instrukcijama. Uz dodatnu obuku, svako može postići profesionalne rezultate kod kuće.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-5 rounded-2xl bg-secondary/50 border border-border/50 transition-all duration-300 hover:bg-secondary hover:border-primary/20 hover:shadow-lg active:scale-[0.98] cursor-pointer group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <CheckCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mt-8">
              <p className="text-foreground font-medium text-center leading-relaxed">
                "Korišćenjem profesionalne opreme, uštedite hiljade dinara i postignite rezultate kao da ste angažovali
                čistionicu."
              </p>
            </div>
          </div>
        </div>

        {/* Accessories Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Kompletna oprema
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Šta Dobijate Uz Mašinu</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sve što vam je potrebno za profesionalno dubinsko čišćenje - kompletna oprema u ceni iznajmljivanja
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Accessories Slideshow – levo, 4 slike iz /public/images */}
            <div className="relative animate-in fade-in slide-in-from-left-5 duration-700 delay-200 order-2 lg:order-1">
              <AccessoriesSlideshow />
            </div>

            {/* Accessories List */}
            <div className="space-y-4 order-1 lg:order-2">
              {[
                {
                  title: "Profesionalni Deterdžent za Dubinsko Pranje",
                  desc: "Ekološki deterdžent specijalizovan za dubinsko čišćenje - efikasan protiv mrlja, bezbedan za alergičare.",
                },
                {
                  title: "Šrafilica sa četkama",
                  desc: "Električna šrafilica sa specijalnim četkama za detaljno ribanje i skidanje tvrdokornih fleka sa tepiha, nameštaja i auto sedišta.",
                },
                {
                  title: "Detaljno Štampano Uputstvo na Srpskom",
                  desc: "Korak po korak ilustrovano uputstvo sa savetima za različite vrste materijala i mrlja.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-5 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg active:scale-[0.98] cursor-pointer group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <CheckCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 rounded-2xl bg-secondary/50 border border-border/50">
                <p className="text-foreground font-medium text-center leading-relaxed">
                  <strong>Sve uključeno u cenu</strong> - nema skrivenih troškova ili dodatnih naknada za pribor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">Tehničke Karakteristike</h3>
          <div className="grid sm:grid-cols-2 gap-4 bg-secondary/30 rounded-3xl p-8 border border-border/50">
            {[
              { label: "Težina", value: "12,8 kg" },
              { label: "Dimenzije", value: "52,4 × 33,2 × 44,2 cm" },
              { label: "Maks. učinak po površini (m²/h)", value: "12 – 18" },
              { label: "Protok vazduha (l/s)", value: "71" },
              { label: "Usisavanje (mbar/kPa)", value: "270 / 27" },
              { label: "Količina raspršivanja (l/min)", value: "1" },
              { label: "Pritisak raspršivanja (bar)", value: "1" },
              { label: "Rezervoar za čistu / prljavu vodu (l)", value: "8 / 7" },
              { label: "Snaga turbine (W)", value: "max. 40" },
              { label: "Strujni tip (Ph/V/Hz)", value: "1 / 220 – 240 / 50 – 60" },
              { label: "Težina bez pribora (kg)", value: "8,6" },
            ].map((spec, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/20 active:scale-[0.98] cursor-pointer"
              >
                <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                <div className="text-xl font-semibold text-foreground">{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Oprema */}
          <div className="mt-10">
            <h4 className="text-xl font-semibold text-center mb-6">Oprema</h4>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {[
                "Napojni kabl, 7.5 m",
                "Kratka mlaznica s integrisanom ručkom",
                "Usisno crevo sa raspršivačem (2.5 m)",
                "Uklonjivi 2-u-1 rezervoar",
                "Integrisano spremište za pribor i mlaznice",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
