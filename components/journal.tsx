import Link from "next/link"
import { articles } from "@/lib/articles"

export function Journal() {
  return (
    <section id="journal" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span
                aria-hidden="true"
                className="block h-px w-8 bg-accent"
              />
              The Quartz Journal
            </p>

            <h2 className="font-serif text-3xl leading-[1.05] tracking-tight text-foreground text-balance md:text-5xl">
              Notes from the chamber.
            </h2>
          </div>

          <Link
            href="#journal"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent"
          >
            All Articles <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug} className="group bg-background">
              <Link
                href={`/journal/${article.slug}`}
                className="block h-full"
              >
                <article className="flex h-full flex-col gap-8 p-8 lg:p-10">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em]">
                    <span className="text-accent">
                      {article.category}
                    </span>

                    <span className="text-muted-foreground">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl leading-snug text-foreground text-balance md:text-2xl">
                    {article.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span>{article.readTime}</span>

                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
