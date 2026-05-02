import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { ForumsMarquee } from "@/components/forums-marquee"
import { About } from "@/components/about"
import { PracticeAreas } from "@/components/practice-areas"
import { Differentiators } from "@/components/differentiators"
import { Approach } from "@/components/approach"
import { Clients } from "@/components/clients"
import { Journal } from "@/components/journal"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <ForumsMarquee />
      <About />
      <PracticeAreas />
      <Differentiators />
      <Approach />
      <Clients />
      <Journal />
      <Contact />
      <SiteFooter />
    </main>
  )
}
