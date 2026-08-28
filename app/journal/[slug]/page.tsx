import Link from "next/link"
import { notFound } from "next/navigation"
import { articles, getArticleBySlug } from "@/lib/articles"

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article Not Found | Quartz Legal Journal",
    }
  }

  return {
    title: `${article.title} | Quartz Legal Journal`,
    description: article.excerpt,
    authors: [{ name: article.author }],
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
          <Link
            href="/journal"
            className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-accent"
          >
            ← The Quartz Journal
          </Link>

          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-accent"
          >
            Quartz Legal Associates
          </Link>
        </div>
      </header>

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em]">
            <span className="text-accent">{article.category}</span>
            <span className="text-muted-foreground">{article.date}</span>
            <span className="text-muted-foreground">{article.readTime}</span>
          </div>

          <h1 className="max-w-5xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {article.excerpt}
          </p>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Written by
            </p>

            <p className="mt-2 font-serif text-lg">
              {article.author}
            </p>
          </div>
        </div>
      </section>

      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {article.sections.map((section, index) => (
            <section
              key={`${article.slug}-${index}`}
              className={index === 0 ? "" : "mt-14"}
            >
              {section.heading && (
                <h2 className="mb-6 font-serif text-3xl leading-tight md:text-4xl">
                  {section.heading}
                </h2>
              )}

              <div className="space-y-6">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${article.slug}-${index}-${paragraphIndex}`}
                    className="text-lg leading-[1.85] text-foreground/85"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-20 border-t border-border pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Quartz Legal Journal
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Legal analysis and practical insights from the chamber.
                </p>
              </div>

              <Link
                href="/journal"
                className="inline-flex items-center text-[11px] uppercase tracking-[0.22em] text-accent transition-transform hover:translate-x-1"
              >
                ← More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-foreground py-20 text-background lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.28em] opacity-60">
            Need legal assistance?
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Bring us your most difficult brief.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-70">
            Initial consultations are confidential and conducted by the
            founder. We respond to enquiries within one business day.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex border border-background px-7 py-4 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-background hover:text-foreground"
          >
            Schedule Consultation →
          </Link>
        </div>
      </section>
    </main>
  )
}
