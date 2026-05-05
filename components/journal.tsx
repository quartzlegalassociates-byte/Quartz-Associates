import Link from "next/link"

const posts = [
  {
    cat: "Insolvency",
    date: "Coming soon",
    title: "Personal guarantor proceedings: what promoters often miss in CIRP defence.",
    read: "8 min read",
  },
  {
    cat: "Arbitration",
    date: "Coming soon",
    title: "Section 9 reliefs in commercial disputes ‚Äî when interim is the entire war.",
    read: "6 min read",
  },
  {
    cat: "Brand Enforcement",
    date: "Coming soon",
    title: "Dynamic injunctions and the modern playbook for online infringement.",
    read: "7 min read",
  },
]

export function Journal() {
  return (
    <section id="journal" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              The Quartz Journal
            </p>
            <h2 className="font-serif text-3xl leading-[1.05] tracking-tight text-foreground text-balance md:text-5xl">
              Notes from the chamber.
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent"
          >
            All Articles <span aria-hidden="true">‚Üí</span>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.title} className="group bg-background">
              <article className="flex h-full flex-col gap-8 p-8 lg:p-10">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
                  <span className="text-accent">{p.cat}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-serif text-xl leading-snug text-foreground text-balance md:text-2xl">
                  {p.title}
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span>{p.read}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    ‚Üí
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

