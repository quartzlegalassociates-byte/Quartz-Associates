const forums = [
  "Supreme Court of India",
  "Delhi High Court",
  "NCLT",
  "NCDRC",
  "NCLAT",
  "Bombay High Court",
  "DRT",
  "RERA Tribunals",
  "District Courts",
  "Arbitral Tribunals",
]

export function ForumsMarquee() {
  return (
    <section
      aria-label="Courts and forums of representation"
      className="border-y border-border bg-foreground py-6 text-background"
    >
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {[...forums, ...forums].map((f, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="whitespace-nowrap font-serif text-lg italic text-background/90">{f}</span>
              <span aria-hidden="true" className="size-1 rotate-45 bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
