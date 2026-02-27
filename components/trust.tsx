export function TrustBlock() {
  return (
    <section className="px-4 py-16 sm:py-20 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 sm:p-12 shadow-lg shadow-primary/5">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Poverenje u 035
            </p>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Zašto nam veruju korisnici u Ćupriji, Paraćinu i Jagodini
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Profesionalna oprema, dostava na adresu i podrška tokom celog
              procesa dubinskog pranja. Svaki korisnik dobija kompletnu obuku i
              uputstva za postizanje najboljeg rezultata.
            </p>
          </div>
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 space-y-4 shadow-xl shadow-primary/20">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  ✓
                </div>
                <span className="text-sm font-medium">Profesionalna mašina iste klase kao u čistionicama</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  ✓
                </div>
                <span className="text-sm font-medium">Dostava i preuzimanje na vašu adresu u Pomoravskom okrugu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  ✓
                </div>
                <span className="text-sm font-medium">Deterdžent, oprema i uputstva uključeni u cenu</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold flex-shrink-0">
                  ✓
                </div>
                <span className="text-sm font-medium">Telefonska podrška 7 dana u nedelji od 08h do 20h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
