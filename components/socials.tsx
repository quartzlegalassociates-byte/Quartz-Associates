import { cn } from "@/lib/utils"

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/917676909742",
  instagram: "https://www.instagram.com/quartz_legal_associates",
  linkedin: "https://www.linkedin.com/company/quartzlegalassociates",
  facebook: "https://www.facebook.com/quartzlegalassociates",
}

type Variant = "light" | "dark"

const baseClass =
  "inline-flex size-10 items-center justify-center border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"

const variantClass: Record<Variant, string> = {
  light:
    "border-foreground/70 text-foreground hover:border-accent hover:text-accent focus-visible:ring-offset-background",
  dark:
    "border-background/30 text-background hover:border-accent hover:text-accent focus-visible:ring-offset-foreground",
}

export function Socials({
  variant = "light",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      <li>
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Quartz Legal Associates on WhatsApp"
          className={cn(baseClass, variantClass[variant])}
        >
          <WhatsAppIcon className="size-4" />
        </a>
      </li>
      <li>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Quartz Legal Associates on LinkedIn"
          className={cn(baseClass, variantClass[variant])}
        >
          <LinkedInIcon className="size-4" />
        </a>
      </li>
      <li>
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Quartz Legal Associates on Instagram"
          className={cn(baseClass, variantClass[variant])}
        >
          <InstagramIcon className="size-4" />
        </a>
      </li>
      <li>
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Quartz Legal Associates on Facebook"
          className={cn(baseClass, variantClass[variant])}
        >
          <FacebookIcon className="size-4" />
        </a>
      </li>
    </ul>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M19.11 4.93A10 10 0 0 0 3.6 17.27L2.05 22l4.86-1.52a10 10 0 0 0 4.78 1.22h.01a10 10 0 0 0 7.07-17.07h.34ZM11.7 20.05h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.88.9.92-2.81-.2-.3a8.3 8.3 0 1 1 6.7 3.55Zm4.55-6.21c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.16.25-.64.8-.79.97-.15.16-.29.18-.54.06-.25-.12-1.06-.39-2.02-1.24a7.6 7.6 0 0 1-1.4-1.74c-.15-.25 0-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.18-.48-.31Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M13.5 21.95V13.9h2.7l.4-3.13H13.5V8.78c0-.9.25-1.52 1.55-1.52h1.66V4.46c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13v2.3H7.55v3.13h2.73v8.05h3.22Z" />
    </svg>
  )
}
