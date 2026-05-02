const sectors = [
  "Real estate",
  "SaaS & technology",
  "Logistics & mobility",
  "Media & advertising",
  "Financial services",
  "Consumer & retail",
  "Manufacturing",
  "Hospitality",
]

const stats = [
  { value: "100+", label: "Matters handled" },
  { value: "12+", label: "Sectors served" },
  { value: "100%", label: "Client confidentiality" },
]

export function Clients() {
  return (
    <section id="clients" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              Representative Clients
            </p>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground text-balance md:text-5xl">
              Trusted across sectors, stages and stakes.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We have advised and represented venture-backed startups, listed companies, asset managers and
              individuals in matters that demand discretion and commercial sensitivity. Client identities are
              held in confidence and disclosed only where strictly necessary.
            </p>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8 lg:p-10">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{s.label}</dt>
              <dd className="mt-4 font-serif text-5xl leading-none tracking-tight text-foreground md:text-6xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Industries Served</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:col-span-9">
            {sectors.map((s, i) => (
              <li key={s} className="font-serif text-lg text-foreground md:text-xl">
                <span>{s}</span>
                {i < sectors.length - 1 ? (
                  <span aria-hidden="true" className="ml-6 text-accent">
                    /
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
