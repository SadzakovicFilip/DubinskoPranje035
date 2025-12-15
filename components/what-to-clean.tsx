import { Sofa, LayoutGrid, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const cleaningOptions = [
  {
    icon: Sofa,
    title: "Nameštaj",
    items: ["Sofe i fotelje", "Madrac i jastuk", "Trpezarijske stolice", "Tapacirung nameštaj"],
  },
  {
    icon: LayoutGrid,
    title: "Tepihi i prostirke",
    items: ["Veliki tepihi", "Male prostirke", "Tekući podovi", "Stubišta"],
  },
  {
    icon: Car,
    title: "Automobili",
    items: ["Sedišta automobila", "Tapete na vratima", "Gepek", "Krovne obloge"],
  },
]

export function WhatToClean() {
  return (
    <section
      id="what-to-clean"
      className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-secondary/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Univerzalna primena
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Vraćamo Život Svakom Nameštaju, Tepihu i Automobilu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Od zaprljanih sofa do osveženih automobila - profesionalne mašine koje uklanjaju ono što običan usisivač ne
            može
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cleaningOptions.map((option, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 active:scale-[0.98] hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700 cursor-pointer group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-10 pb-10 px-8 flex flex-col">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 mx-auto">
                  <option.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-5 text-xl font-semibold text-foreground text-center">{option.title}</h3>
                <ul className="space-y-3 w-full pl-4">
                  {option.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span
                        className="h-2 w-2 rounded-full bg-primary flex-shrink-0 transition-transform group-hover:scale-125"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
