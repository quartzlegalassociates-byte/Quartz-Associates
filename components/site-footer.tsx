import Link from "next/link"
import Image from "next/image"
import { Socials } from "@/components/socials"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="#top" className="inline-flex items-center" aria-label="Quartz Legal Associates home">
              <Image
                src="/images/logo.jpg"
                alt="Quartz Legal Associates"
                width={240}
                height={160}
                className="h-20 w-auto mix-blend-multiply"
              />
            </Link>
            <p className="mt-6 max-w-md font-serif text-xl leading-snug text-foreground text-balance md:text-2xl">
              Strategic litigation. Commercial advisory. Enforcement-focused representation.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              <li><Link href="#about" className="hover:text-accent">About</Link></li>
              <li><Link href="#practice" className="hover:text-accent">Practice</Link></li>
              <li><Link href="#approach" className="hover:text-accent">Approach</Link></li>
              <li><Link href="#clients" className="hover:text-accent">Clients</Link></li>
              <li><Link href="#journal" className="hover:text-accent">Journal</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Practice</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              <li>Commercial Litigation</li>
              <li>IBC / NCLT</li>
              <li>Arbitration</li>
              <li>RERA</li>
              <li>Brand Enforcement</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Contact</p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-foreground">
              A-117, 2nd Floor, Lajpat Nagar-1
              <br />
              New Delhi 110024, India
              <br />
              <a href="mailto:abhishek.kumar2015c@gmail.com" className="hover:text-accent">
                abhishek.kumar2015c@gmail.com
              </a>
              <br />
              <a href="tel:+917676909742" className="hover:text-accent">
                +91 76769 09742
              </a>
            </address>
            <Socials variant="light" className="mt-6" />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Quartz Legal Associates. All rights reserved.</p>
          <p className="max-w-xl text-pretty">
            As per the Bar Council of India Rules, advocates are not permitted to solicit work or advertise. By
            visiting this site, you acknowledge information here is for general purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
