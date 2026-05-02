"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const STORAGE_KEY = "qla-disclaimer-accepted"

export function DisclaimerGate() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const accepted = window.sessionStorage.getItem(STORAGE_KEY)
      if (accepted !== "true") {
        setOpen(true)
      }
    } catch {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open, mounted])

  function handleAgree() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true")
    } catch {
      // ignore
    }
    setOpen(false)
  }

  function handleDecline() {
    window.location.href = "https://www.google.com"
  }

  if (!mounted || !open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-body"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 px-4 py-8 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-accent/30 bg-background shadow-2xl">
        <div className="flex flex-col items-center border-b border-border px-6 py-8 text-center md:px-12 md:py-10">
          <Image
            src="/images/logo.jpg"
            alt="Quartz Legal Associates"
            width={200}
            height={140}
            className="h-20 w-auto mix-blend-multiply md:h-24"
            priority
          />
          <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-accent">Disclaimer</p>
          <h2 id="disclaimer-title" className="mt-3 font-serif text-2xl text-foreground md:text-3xl">
            Please read before proceeding
          </h2>
        </div>

        <div id="disclaimer-body" className="space-y-4 px-6 py-8 text-sm leading-relaxed text-muted-foreground md:px-12">
          <p>
            As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By
            clicking on &ldquo;I Agree&rdquo; below, the user acknowledges and confirms that:
          </p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>
              There has been no advertisement, personal communication, solicitation, invitation or inducement of any
              sort whatsoever from Quartz Legal Associates or any of its members to solicit any work through this
              website.
            </li>
            <li>
              The user wishes to gain more information about Quartz Legal Associates, its practice areas and its
              advocates for the user&apos;s own information and personal use.
            </li>
            <li>
              The information provided on this website is solely available at the user&apos;s request for informational
              purposes only and should not be interpreted as soliciting or advertisement.
            </li>
            <li>
              No material or information provided on this website should be construed as legal advice. Quartz Legal
              Associates shall not be liable for any consequence of any action taken by the user relying on material or
              information provided on this website.
            </li>
            <li>
              In cases where the user has any legal issues, the user must seek independent legal advice in all matters.
            </li>
          </ul>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-border px-6 py-6 md:flex-row md:items-center md:justify-end md:px-12">
          <button
            type="button"
            onClick={handleDecline}
            className="border border-border px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            I Decline
          </button>
          <button
            type="button"
            onClick={handleAgree}
            autoFocus
            className="bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            I Agree &amp; Enter
          </button>
        </div>
      </div>
    </div>
  )
}
