"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#approach", label: "Approach" },
  { href: "#clients", label: "Clients" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="#top" className="flex items-center" aria-label="Quartz Legal Associates home">
          <Image
            src="/images/logo.jpg"
            alt="Quartz Legal Associates"
            width={180}
            height={120}
            priority
            className="h-12 w-auto mix-blend-multiply md:h-14"
          />
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 border border-foreground bg-foreground px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Book Consultation
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <li key={l.href} className="border-b border-border/60 last:border-none">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-sm uppercase tracking-[0.18em] text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 bg-foreground px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-background"
            >
              Book Consultation →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
