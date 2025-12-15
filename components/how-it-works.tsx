import { Package, Sparkles, RotateCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: Package,
    title: "Iznajmite mašinu",
    description: "Pozovite ili pošaljite poruku da rezervišete mašinu za dubinsko pranje. Jednostavno i brzo.",
  },
  {
    icon: Sparkles,
    title: "Dubinski očistite",
    description: "Operite nameštaj, tepihe, auto sedišta - sve što želite. Uputstva za upotrebu su jednostavna.",
  },
  {
    icon: RotateCcw,
    title: "Vratite mašinu",
    description: "Nakon završenog posla, jednostavno vratite mašinu. Bez obaveza, bez komplikacija.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Jednostavno i brzo
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Kako funkcioniše iznajmljivanje u Pomoravskom okrugu?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tri jednostavna koraka do čistog i svežeg doma - lokalna usluga u regionu 035
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 active:scale-[0.98] hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700 cursor-pointer group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-10" />
              )}
              <CardContent className="pt-16 pb-10 px-8">
                <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="absolute -top-3 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
