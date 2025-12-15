import { DollarSign, Home, Gauge, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: DollarSign,
    title: "Uštedite do 5000 din",
    description: "Zašto platiti skup servis? Mašine su iste, vi radite isto, ali plaćate samo iznajmljivanje - ne rad.",
  },
  {
    icon: Home,
    title: "Nula stresa sa transportom",
    description:
      "Tešku sofu ili tepih ne morate nigde nositi. Donosimo vam mašinu, vi čistite kod kuće - lako i praktično.",
  },
  {
    icon: Gauge,
    title: "Iste mašine kao profesionalci",
    description:
      "Koriste ih firme za čišćenje nameštaja i tepiha širom Srbije. Sada dostupne i vama u Pomoravskom okrugu.",
  },
  {
    icon: Clock,
    title: "Vaš tempo, vaše vreme",
    description:
      "Radite noću, ujutru ili vikend - vi birate. Bez čekanja, bez cimanja, bez prilagođavanja tuđem rasporedu.",
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-secondary/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Prednosti iznajmljivanja
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Zašto ljudi u 035 (Ćuprija, Paraćin, Jagodina) biraju iznajmljivanje?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dubinsko pranje i dubinsko čišćenje kod kuće je pametnije, jeftinije i efikasnije, a rezultat je isti kao u
            servisu.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/80 backdrop-blur-sm text-center transition-all duration-500 hover:-translate-y-3 active:scale-[0.98] hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-10 pb-10 px-6">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-primary/25">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
