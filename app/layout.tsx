import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Quartz Legal Associates | Commercial Litigation & Arbitration Lawyers, New Delhi",
  description:
    "Quartz Legal Associates is a litigation-first law firm in New Delhi led by Advocate Abhishek Kumar. Strategic representation before the Supreme Court, High Courts, NCLT, NCDRC and arbitral tribunals.",
  keywords: [
    "commercial litigation lawyer Delhi",
    "NCLT lawyer",
    "arbitration lawyer India",
    "IBC lawyer Delhi",
    "Supreme Court advocate",
    "Quartz Legal Associates",
    "Abhishek Kumar advocate",
    "RERA lawyer",
    "POSH lawyer Delhi",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Quartz Legal Associates",
    description:
      "Litigation is not the last step. It is the starting point. Strategic litigation, commercial advisory, and enforcement-focused representation.",
    type: "website",
    locale: "en_IN",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
