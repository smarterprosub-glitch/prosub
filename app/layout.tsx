import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best IPTV Subscription Dubai 2025 - Cheap Plans 35 AED | Smarter Pro",
  description:
    "Best IPTV providers Dubai with cheap plans from 35 AED/month. Affordable IPTV subscription Dubai UAE 2025. HD/4K streaming, no buffering, 24/7 support. IPTV for Smart TV, Firestick UAE, Android, iOS. اشتراك IPTV في دبي رخيص",
  keywords:
    "IPTV providers Dubai cheap plans, best IPTV subscription Dubai review, affordable Dubai IPTV service 2025, IPTV Dubai no buffering, IPTV free trial Dubai 2025, best IPTV apps for Smart TV in UAE, IPTV Smarters Pro setup Dubai, IPTV for sports fans in UAE, اشتراك IPTV في دبي, دليل IPTV الإمارات 2025",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Best IPTV Subscription Dubai 2025 - Cheap Plans from 35 AED",
    description:
      "Best IPTV providers Dubai with affordable plans. HD/4K streaming, no buffering, IPTV for Smart TV & Firestick UAE. Free trial available!",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Smarter Pro Subscription - Best IPTV Dubai",
  description: "Best IPTV providers Dubai cheap plans - Affordable IPTV subscription UAE with HD/4K streaming",
  url: "https://smarterprosubscription.com",
  telephone: "+971522462601",
  email: "smarterprosub@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  areaServed: ["Dubai", "UAE", "Abu Dhabi", "Sharjah", "Worldwide"],
  priceRange: "35-360 AED",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "AED",
    lowPrice: "35",
    highPrice: "360",
    description: "IPTV subscription plans from 35 AED/month to 360 AED/year",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
