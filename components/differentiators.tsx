const items = [
  {
    title: "Litigation-first thinking",
    body: "Every advisory note is stress-tested against how it would survive in court. We design around disputes, not away from them.",
  },
  {
    title: "Founder-led involvement",
    body: "Critical hearings, drafting and strategy carry the founder's signature. No matter is delegated past the point of accountability.",
  },
  {
    title: "Dispute-aware advisory",
    body: "Transactional and corporate advice is shaped by years of contested experience — risk is mapped before it materialises.",
  },
  {
    title: "Procedural precision",
    body: "From limitation to evidence to drafting, our briefs are built on the procedural fundamentals courts respect.",
  },
  {
    title: "Business-aligned outcomes",
    body: "We measure success by enforceability, recovery and commercial closure — not by the volume of orders obtained.",
  },
  {
    title: "Clear, actionable communication",
    body: "Clients receive plain-language updates, defined options and decisions framed around business consequence.",
  },
]

export function Differentiators() {
  return (
    <section className="relative bg-foreground py-24 text-background lg:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-background/60">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              What Sets Us Apart
            </p>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-balance md:text-5xl">
              Counsel that is{" "}
              <span className="italic text-accent">strategic, contested,</span> and commercial.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-background/70 md:text-lg">
              We do not separate &ldquo;litigation&rdquo; from &ldquo;corporate&rdquo;. Every brief begins with the
              same question — what does this look like at the stage of enforcement?
            </p>
          </div>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px bg-background/15 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.title} className="bg-foreground p-8 lg:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="h-px flex-1 bg-background/20" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-balance md:text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-background/70">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
