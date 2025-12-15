import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export function CallToAction() {
  const phoneNumber = "+381604564481"
  const phoneDisplay = "+381 60 456 4481"

  return (
    <section
      id="contact-section"
      className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
        <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
          Kontaktirajte nas
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
          Rezervišite Danas - Imate Čist Dom Sutra
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
          Pozovite nas ili pošaljite poruku na WhatsApp i dobijete mašinu na vašu adresu u Pomoravskom okrugu (035) - sa
          kompletnom obukom i podrškom
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto gap-3 min-h-[56px] min-w-[220px] text-base transition-all hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-primary/30 cursor-pointer group"
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{phoneDisplay}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-3 min-h-[56px] min-w-[220px] text-base bg-[#25D366] text-white border-[#25D366] hover:bg-[#20BA5A] active:scale-95 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/30 cursor-pointer"
            >
              <a href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-3 min-h-[56px] min-w-[220px] text-base bg-[#7360F2] text-white border-[#7360F2] hover:bg-[#665AC1] active:scale-95 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#7360F2]/30 cursor-pointer"
            >
              <a href={`viber://chat?number=${phoneNumber.replace(/\+/g, "%2B")}`}>
                <MessageCircle className="h-5 w-5" />
                Viber
              </a>
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground bg-secondary/50 inline-block px-6 py-3 rounded-full">
          Odgovaramo odmah - dostupni smo 7 dana u nedelji od 8:00 do 20:00
        </p>
      </div>
    </section>
  )
}
