import Image from "next/image"

const stages = [
  {
    n: "01",
    title: "Diagnose",
    body: "Every engagement begins with a clear-eyed reading of facts, documents and exposure — separating signal from noise.",
  },
  {
    n: "02",
    title: "Strategise",
    body: "We design a litigation pathway aligned with commercial reality — sequencing reliefs, forums and timing.",
  },
  {
    n: "03",
    title: "Contain risk",
    body: "Interim relief, injunctions and protective orders are pursued early to preserve the client's commercial position.",
  },
  {
    n: "04",
    title: "Enforce",
    body: "Our work is judged at the execution stage. We pursue recovery, compliance and closure — not paper victories.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              Our Approach
            </p>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground text-balance md:text-5xl">
              From the first reading of the brief to the last day of enforcement.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Our methodology is deliberately uncomplicated. Four stages, applied with discipline to every matter,
              regardless of size or sector.
            </p>

            <div className="relative mt-12 hidden aspect-[5/4] w-full overflow-hidden lg:block">
              <Image
                src="/images/library.jpg"
                alt="Antique law library"
                fill
                className="object-cover grayscale"
                sizes="40vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/30" />
            </div>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {stages.map((s, i) => (
              <li
                key={s.n}
                className="grid grid-cols-12 items-start gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 last:pb-0"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-serif text-3xl text-accent md:text-4xl">{s.n}</span>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
