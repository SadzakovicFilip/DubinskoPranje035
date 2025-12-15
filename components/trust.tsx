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
              Recenzije i preporuke za dubinsko pranje u Ćupriji, Paraćinu i
              Jagodini
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Placeholder dok ne stignu prave recenzije. Ovde ćemo istaći ocene
              i iskustva klijenata iz Pomoravskog okruga. Kada dobijemo prve
              ocene, dodaćemo ih i u schema (aggregateRating).
            </p>
          </div>
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 space-y-3 shadow-xl shadow-primary/20">
            <div className="text-4xl font-bold">4.9/5</div>
            <p className="text-sm opacity-90">
              120+ zakupa mašine za dubinsko pranje u 035 (placeholder)
            </p>
            <p className="text-sm opacity-90">
              „Brza dostava u Ćupriji, obuka na licu mesta i mašina je izvadila
              svu prljavštinu iz tepiha.“ — Primer korisnika
            </p>
            <p className="text-xs opacity-80">
              Zameniti stvarnim ocenama čim budu dostupne (GBP / Instagram /
              direktni upiti).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
