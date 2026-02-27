import { Sofa, LayoutGrid, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const cleaningOptions = [
  {
    icon: Sofa,
    title: "Nameštaj",
    items: ["Sofe i fotelje", "Madrac i jastuk", "Trpezarijske stolice", "Tapacirung nameštaj"],
    image: "/images/DubinskoPranje035_slika2.jpg",
  },
  {
    icon: LayoutGrid,
    title: "Tepihi i prostirke",
    items: ["Veliki tepihi", "Male prostirke", "Tekući podovi", "Stubišta"],
    image: "/images/DubinskoPranje035_slika4.jpg",
  },
  {
    icon: Car,
    title: "Automobili",
    items: ["Sedišta automobila", "Tapete na vratima", "Gepek", "Krovne obloge"],
    image: "/images/DubinskoPranje035_slika3.jpg",
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
              <CardContent className="pt-0 pb-10 px-0 flex flex-col overflow-hidden">
                {/* Slika za svaku sekciju */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={option.image}
                    alt={`Dubinsko čišćenje - ${option.title}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground shadow-lg">
                    <option.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="px-8 pt-6">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
