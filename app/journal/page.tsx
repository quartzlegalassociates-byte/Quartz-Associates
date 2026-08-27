import Link from "next/link"
import { articles } from "@/lib/articles"

export const metadata = {
  title: "Quartz Legal Journal | Legal Analysis & Insights",
  description:
    "Legal analysis and practical insights from Quartz Legal Associates on commercial litigation, arbitration, insolvency, commercial courts and dispute resolution.",
}

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-accent"
          >
            ← Quartz Legal Associates
          </Link>
        </div>
      </header>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-4xl border-b border-border pb-12">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span
                aria-hidden="true"
                className="block h-px w-8 bg-accent"
              />
              The Quartz Journal
            </p>

            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight md:text-7xl">
              Analysis from the chamber.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Legal analysis, practical insights and strategic perspectives
              on commercial disputes, arbitration, insolvency and dispute
              resolution.
            </p>
          </div>

          <div className="mt-16">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Latest Articles
              </p>

              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {articles.length} Articles
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-background"
                >
                  <Link
                    href={`/journal/${article.slug}`}
                    className="flex h-full flex-col p-8 lg:p-10"
                  >
                    <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em]">
                      <span className="text-accent">
                        {article.category}
                      </span>

                      <span className="text-muted-foreground">
                        {article.date}
                      </span>
                    </div>

                    <h2 className="mt-10 font-serif text-2xl leading-snug md:text-3xl">
                      {article.title}
                    </h2>

                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>

                    <div className="mt-10 flex items-center justify-between border-t border-border pt-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      <span>{article.readTime}</span>

                      <span className="transition-transform group-hover:translate-x-1">
                        Read Article →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
