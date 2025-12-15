"use client";

import { Check, Truck, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    duration: "1 Dan",
    price: "1,500",
    description: "Idealno za brzo osvežavanje",
    popular: false,
  },
  {
    duration: "2 Dana",
    price: "2,500",
    description: "Najčešći izbor naših klijenata",
    popular: true,
  },
  {
    duration: "3-5 Dana",
    price: "3,500",
    description: "Za veće projekte i domaćinstva",
    popular: false,
  },
];

const additionalServices = [
  {
    icon: Truck,
    title: "Dostava na kućnu adresu",
    prices: [
      { city: "Ćuprija", price: "300 din" },
      { city: "Paraćin", price: "400 din" },
      { city: "Jagodina", price: "500 din" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Obuka i uputstva na licu mesta",
    prices: [{ city: "Sve lokacije", price: "500 din" }],
  },
];

export function Pricing() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="pricing"
      className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-background relative"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Transparentne cene
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Cenovnik - Transparentno i Povoljno
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Osnovne cene za iznajmljivanje - vi preuzimate i vraćate mašinu. Bez
            skrivenih troškova! Lokalno pokrivamo Pomoravski okrug (Ćuprija,
            Paraćin, Jagodina - 035).
          </p>
        </div>

        {/* Basic Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-card transition-all duration-500 hover:-translate-y-3 active:scale-[0.98] hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 cursor-pointer group ${
                plan.popular
                  ? "ring-2 ring-primary shadow-xl shadow-primary/10 scale-[1.02] md:scale-105"
                  : "hover:shadow-primary/5"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-3 text-sm font-semibold rounded-t-lg">
                  Najpopularnije
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-3">
                  {plan.duration}
                </CardTitle>
                <div className="mb-3">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2 text-lg">
                    RSD
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Profesionalna mašina za pranje
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Osnovna uputstva za upotrebu
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Vi preuzimate i vraćate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Telefonska podrška 24/7
                    </span>
                  </li>
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full min-h-[52px] cursor-pointer transition-all hover:scale-105 active:scale-95 gap-2 group"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Rezervišite odmah
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">
            Dodatne usluge
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="border-border/50 bg-secondary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] cursor-pointer animate-in fade-in slide-in-from-bottom-4 group"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground mb-3">
                        {service.title}
                      </h4>
                      <div className="space-y-2">
                        {service.prices.map((priceItem, priceIndex) => (
                          <div
                            key={priceIndex}
                            className="flex justify-between items-center gap-2 py-1 border-b border-border/30 last:border-0"
                          >
                            <span className="text-sm text-muted-foreground">
                              {priceItem.city}
                            </span>
                            <span className="text-sm font-semibold text-primary">
                              {priceItem.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Note about prices */}
        <div className="mt-12 text-center px-4">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed bg-secondary/50 rounded-xl px-6 py-4">
            <strong className="text-foreground">Napomena:</strong> Osnovne cene
            podrazumevaju da vi preuzimate i vraćate mašinu sa naše lokacije. Za
            dostavu na vašu adresu i dodatnu obuku na licu mesta, pogledajte
            dodatne usluge.
          </p>
        </div>
      </div>
    </section>
  );
}
