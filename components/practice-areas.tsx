import Link from "next/link"

type Area = {
  number: string
  title: string
  description: string
  services: string[]
}

const areas: Area[] = [
  {
    number: "01",
    title: "Commercial & Corporate Litigation",
    description:
      "High-stakes contractual, shareholder and commercial disputes argued before commercial courts, High Courts and the Supreme Court.",
    services: [
      "Shareholder & joint-venture disputes",
      "Contract enforcement & damages",
      "Recovery & injunctive relief",
      "Oppression & mismanagement actions",
    ],
  },
  {
    number: "02",
    title: "Insolvency & Bankruptcy (IBC / NCLT)",
    description:
      "Representation of operational creditors, financial creditors, corporate debtors and resolution applicants before the NCLT and NCLAT.",
    services: [
      "Section 7, 9 & 10 petitions",
      "Resolution plan structuring",
      "CIRP & liquidation strategy",
      "Personal guarantor proceedings",
    ],
  },
  {
    number: "03",
    title: "Consumer Litigation (NCDRC)",
    description:
      "Complex consumer disputes for businesses and HNIs before District, State and National Consumer Commissions.",
    services: [
      "Service deficiency & unfair trade",
      "Real-estate buyer claims",
      "Insurance & banking disputes",
      "Class & representative actions",
    ],
  },
  {
    number: "04",
    title: "Real Estate & RERA",
    description:
      "Strategic counsel and representation in real estate disputes, RERA proceedings and project enforcement matters.",
    services: [
      "Buyer & developer disputes",
      "RERA filings & defence",
      "Title due diligence",
      "Possession & refund claims",
    ],
  },
  {
    number: "05",
    title: "Employment & POSH",
    description:
      "Employment disputes, executive separations and statutory POSH compliance for organisations and individuals.",
    services: [
      "Wrongful termination",
      "Non-compete & confidentiality",
      "POSH committees & inquiries",
      "Industrial & labour disputes",
    ],
  },
  {
    number: "06",
    title: "Trademark & Brand Enforcement",
    description:
      "Litigation-led brand protection — from urgent injunctions to nationwide enforcement of trademarks and trade dress.",
    services: [
      "Infringement & passing-off suits",
      "Ex-parte & dynamic injunctions",
      "Anti-counterfeiting raids",
      "Domain & online enforcement",
    ],
  },
  {
    number: "07",
    title: "Data Protection & Privacy",
    description:
      "Advisory and contentious work under the DPDP Act and emerging privacy frameworks, with a litigation-aware lens.",
    services: [
      "DPDP compliance audits",
      "Breach response & investigations",
      "Cross-border data issues",
      "Regulatory representation",
    ],
  },
  {
    number: "08",
    title: "Arbitration & ADR",
    description:
      "Domestic and institutional arbitrations, mediation and enforcement of awards before commercial courts.",
    services: [
      "Section 9 & 17 interim relief",
      "Institutional arbitrations",
      "Award challenges & enforcement",
      "Pre-arbitral mediation",
    ],
  },
]

export function PracticeAreas() {
  return (
    <section id="practice" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              Practice Areas
            </p>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground text-balance md:text-5xl">
              Eight verticals. One litigation philosophy.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Our practice is structured around the disputes most relevant to modern Indian businesses. Each vertical
              is built on the same foundation — commercial awareness, procedural rigour, and a clear path to
              enforceable outcomes.
            </p>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {areas.map((area) => (
            <li key={area.title} className="group relative bg-background">
              <article className="flex h-full flex-col gap-6 p-8 transition-colors duration-500 group-hover:bg-foreground group-hover:text-background lg:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-xs tracking-widest text-accent">{area.number}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 items-center justify-center border border-current opacity-30 transition-opacity group-hover:opacity-100"
                  >
                    →
                  </span>
                </div>
                <h3 className="font-serif text-2xl leading-tight text-balance md:text-3xl">{area.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
                  {area.description}
                </p>
                <ul className="mt-2 space-y-2 border-t border-border pt-5 transition-colors group-hover:border-background/20">
                  {area.services.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[13px]">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 block size-1 shrink-0 rotate-45 bg-accent"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors group-hover:text-accent"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
