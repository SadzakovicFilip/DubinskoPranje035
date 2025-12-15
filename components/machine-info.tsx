import { CheckCircle, Package, Sparkles } from "lucide-react"

export function MachineInfo() {
  return (
    <section id="machine-info" className="py-20 md:py-28 bg-background relative overflow-hidden">
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
          {/* Machine Image Placeholder */}
          <div className="relative animate-in fade-in slide-in-from-left-5 duration-700 order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary border border-border/50 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/10 transition-all duration-500 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Sparkles className="w-16 h-16 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">[Slika mašine će biti dodata ovde]</p>
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
            {/* Accessories Image Placeholder */}
            <div className="relative animate-in fade-in slide-in-from-left-5 duration-700 delay-200 order-2 lg:order-1">
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-secondary to-primary/5 border border-border/50 flex items-center justify-center overflow-hidden shadow-xl transition-all duration-500 hover:shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Package className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">[Slika dodataka i pribora biće dodata ovde]</p>
                </div>
              </div>
            </div>

            {/* Accessories List */}
            <div className="space-y-4 order-1 lg:order-2">
              {[
                {
                  title: "Profesionalni Deterdžent za Dubinsko Pranje",
                  desc: "Ekološki deterdžent specijalizovan za dubinsko čišćenje - efikasan protiv mrlja, bezbedan za alergičare",
                },
                {
                  title: "Kompletan Set Nastavaka i Četki",
                  desc: "Razne četke i nastavci za tepihe, nameštaj, stepenice, automobile - sve površine pokrivene",
                },
                {
                  title: "Detaljno Štampano Uputstvo na Srpskom",
                  desc: "Korak po korak ilustrovano uputstvo sa savetima za različite vrste materijala i mrlja",
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
              { label: "Snaga motora", value: "[Podaci će biti dodati]" },
              { label: "Kapacitet rezervoara", value: "[Podaci će biti dodati]" },
              { label: "Dužina creva", value: "[Podaci će biti dodati]" },
              { label: "Težina", value: "[Podaci će biti dodati]" },
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
        </div>
      </div>
    </section>
  )
}
