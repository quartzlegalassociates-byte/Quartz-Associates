import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/founder.jpg"
              alt="Advocate Abhishek Kumar, Founder of Quartz Legal Associates"
              fill
              className="object-cover grayscale"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="mt-6 border-t border-border pt-4">
            <p className="font-serif text-xl text-foreground">Abhishek Kumar</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Founder & Managing Partner
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span aria-hidden="true" className="block h-px w-8 bg-accent" />
            About the Chamber
          </p>
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground text-balance md:text-5xl">
            A founder-led practice, built around the discipline of dispute resolution.
          </h2>

          <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              Quartz Legal Associates is a litigation-first, full-service law firm headquartered in New Delhi. We
              represent founders, promoters, corporates and high-net-worth individuals in disputes that demand
              precision, urgency and strategic foresight.
            </p>
            <p>
              Led by Advocate Abhishek Kumar, the chamber is built on a single conviction — that litigation is
              not a final resort, but the lens through which every commercial decision should be examined.
              We advise so that disputes are anticipated, structured against, and — when they arise — won.
            </p>
            <p>
              From the Supreme Court and High Courts to the NCLT, NCDRC and arbitral tribunals, our work is
              defined by procedural mastery, enforcement focus and a partner-led approach to every brief.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              "Supreme Court & High Court appearances",
              "NCLT / NCLAT insolvency representation",
              "NCDRC consumer mandates",
              "Domestic & institutional arbitration",
              "Commercial advisory with dispute lens",
              "Enforcement & execution proceedings",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 block size-1.5 shrink-0 rotate-45 bg-accent" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="#approach"
              className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Our Approach
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
