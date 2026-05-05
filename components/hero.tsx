import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background mark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 top-24 h-[520px] w-[520px] opacity-[0.04]">
          <div className="h-full w-full rotate-45 border border-foreground" />
        </div>
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-7">
          <div className="animate-fade-up">
            <p className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              Litigation Chambers · New Delhi
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
              Litigation is not the last step.{" "}
              <span className="italic text-accent">It is the starting point.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Quartz Legal Associates is a founder-led litigation chamber offering strategic disputes counsel,
              commercial advisory, and enforcement-focused representation across India&apos;s highest forums.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.24em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Schedule Consultation
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="#practice"
                className="group inline-flex items-center justify-center gap-3 border border-foreground/80 px-7 py-4 text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                View Practice Areas
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {[
              { k: "9+", v: "Years at the Bar" },
              { k: "12", v: "Practice Verticals" },
              { k: "100+", v: "Matters Argued" },
            ].map((item) => (
              <div key={item.v}>
                <dt className="font-serif text-3xl text-foreground md:text-4xl">{item.k}</dt>
                <dd className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/courthouse.jpg"
              alt="Classical columns of the Supreme Court of India"
              fill
              priority
              className="object-cover grayscale"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-foreground/10" />
            <div className="pointer-events-none absolute inset-0 border border-accent/30" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden bg-foreground p-6 text-background md:block">
            <p className="font-serif text-sm italic leading-snug text-balance">
              &ldquo;Every dispute begins with the structure of the deal. We start there.&rdquo;
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-accent">— Founder&apos;s Note</p>
          </div>
        </div>
      </div>
    </section>
  )
}
