"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Socials } from "@/components/socials"

// ‚úÖ Replace this with your Formspree form ID
// Sign up at https://formspree.io ‚Üí New Form ‚Üí copy the endpoint ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meengvvr"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus("idle"), 6000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 6000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 6000)
    }
  }

  return (
    <section id="contact" className="relative bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-background/60">
              <span aria-hidden="true" className="block h-px w-8 bg-accent" />
              Schedule a Consultation
            </p>
            <h2 className="font-serif text-3xl leading-[1.05] tracking-tight text-balance md:text-5xl">
              Bring us your most difficult brief.
            </h2>
            <p className="mt-6 max-w-md text-background/70 md:text-lg">
              Initial consultations are confidential and conducted by the founder. We respond to all enquiries
              within one business day.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-start gap-5">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center border border-accent text-accent">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Chambers</p>
                  <p className="mt-2 font-serif text-lg leading-snug">
                    A-117, 2nd Floor, Lajpat Nagar-1
                    <br /> New Delhi 110024, India
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center border border-accent text-accent">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Email</p>
                  <a
                    href="mailto:abhishek.kumar@quartzlegalassociates.in"
                    className="mt-2 inline-block font-serif text-lg hover:text-accent"
                  >
                    abhishek.kumar@quartzlegalassociates.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center border border-accent text-accent">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Telephone</p>
                  <a href="tel:+917676909742" className="mt-2 inline-block font-serif text-lg hover:text-accent">
                    +91 76769 09742
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Connect</p>
              <Socials variant="dark" className="mt-4" />
            </div>

            <div className="mt-12 aspect-[16/9] w-full overflow-hidden border border-background/15 grayscale">
              <iframe
                title="Quartz Legal Associates ‚Äî Lajpat Nagar, New Delhi"
                src="https://www.google.com/maps?q=Quartz%20Legal%20Associates%2C%202nd%20Floor%2C%20A-117%2C%20Block%20A%2C%20Lajpat%20Nagar%20I%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="border border-background/15 bg-background/[0.02] p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Organisation" name="org" />
                <div className="md:col-span-2">
                  <label
                    htmlFor="practice"
                    className="block text-[11px] uppercase tracking-[0.22em] text-background/60"
                  >
                    Practice area of interest
                  </label>
                  <select
                    id="practice"
                    name="practice"
                    className="mt-3 w-full appearance-none border-b border-background/30 bg-transparent py-3 font-serif text-lg text-background outline-none transition-colors focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" className="bg-foreground">
                      Select a practice area
                    </option>
                    {[
                      "Commercial & Corporate Litigation",
                      "Insolvency & Bankruptcy",
                      "Consumer Litigation",
                      "Real Estate & RERA",
                      "Employment & POSH",
                      "Trademark & Brand Enforcement",
                      "Data Protection & Privacy",
                      "Arbitration & ADR",
                      "Other",
                    ].map((o) => (
                      <option key={o} value={o} className="bg-foreground">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-[11px] uppercase tracking-[0.22em] text-background/60"
                  >
                    Brief description of the matter
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-3 w-full resize-none border-b border-background/30 bg-transparent py-3 font-sans text-base text-background outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-background/50">
                Submission of this form does not create an attorney‚client relationship. Please do not include
                privileged or confidential information until such a relationship is formally established.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-accent-foreground transition-colors hover:bg-background hover:text-foreground disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  
                  </span>
                </button>

                {status === "success" && (
                  <p className="text-sm text-accent" role="status">
                    Thank you. We will revert within one business day.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-[0.22em] text-background/60">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-background/30 bg-transparent py-3 font-serif text-lg text-background outline-none transition-colors placeholder:text-background/30 focus:border-accent"
      />
    </div>
  )
}

