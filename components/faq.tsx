const faqs = [
  {
    question: "Da li dostavljate mašinu u Ćupriji, Paraćinu i Jagodini?",
    answer:
      "Da. Dostavljamo u Ćupriju, Paraćin i Jagodinu (035). Možete i da preuzmete lično ako vam je brže.",
  },
  {
    question:
      "Koliko traje sušenje posle dubinskog pranja nameštaja ili tepiha?",
    answer:
      "Uz snažnu ekstrakciju sušenje traje u proseku 2–6 sati, zavisno od materijala i provetrenosti prostora.",
  },
  {
    question: "Da li je deterdžent bezbedan za decu i kućne ljubimce?",
    answer:
      "Koristimo profesionalni deterdžent koji je bezbedan pri pravilnoj upotrebi i ispiranju. Sve uputstvo dobijate uz mašinu.",
  },
  {
    question: "Radite li vikendom i da li postoji depozit?",
    answer:
      "Radimo svaki dan 08–20h. Depozit nije potreban ako se zadrže standardni uslovi korišćenja.",
  },
  {
    question: "Da li mašina radi za auto sedišta i tapacirunge?",
    answer:
      "Da. U kompletu su nastavci za auto sedišta, tapacirunge na vratima, gepek i teže dostupna mesta.",
  },
  {
    question: "Koliko košta dubinsko pranje tepiha po m² u 035 regionu?",
    answer:
      "Za iznajmljivanje mašine plaćate fiksnu dnevnu cenu. Tipičan trošak za dubinsko čišćenje tepiha ispadne znatno niži od servisa jer plaćate samo najam mašine.",
  },
  {
    question:
      "Da li dobijam deterdžent uz iznajmljivanje usisivača za dubinsko pranje?",
    answer:
      "Da, dobijate profesionalni deterdžent optimizovan za dubinsko pranje i dubinsko čišćenje. Možete poneti sopstveni ako imate preferencu.",
  },
  {
    question: "Kako da pripremim stan pre dubinskog pranja?",
    answer:
      "Usisajte prašinu, sklonite sitan nameštaj i obezbedite provetravanje da sušenje traje kraće (2–6h u proseku).",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="px-4 py-20 sm:py-28 sm:px-6 lg:px-8 bg-background"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Česta pitanja o dubinskom pranju
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Sve što treba da znate pre iznajmljivanja mašine za dubinsko
            čišćenje
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Fokus na Pomoravski okrug (Ćuprija, Paraćin, Jagodina) i uslugu
            iznajmljivanja usisivača za dubinsko pranje.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
