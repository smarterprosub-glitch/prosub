import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Best IPTV Subscription in Dubai 2025 – Affordable Home IPTV Service in UAE | Smarter Pro",
  description: "Get the best IPTV subscription in Dubai for 2025 with Smarter Pro. Enjoy reliable HD & 4K streaming on Smart TV, Firestick, Android & iOS.",
  metadataBase: new URL('https://smarterprosubscription.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best IPTV Subscription in Dubai 2025 | Smarter Pro',
    description: 'Affordable IPTV service in UAE with HD & 4K streaming on all devices. Fast setup, no buffering, and 24/7 support.',
    url: 'https://smarterprosubscription.com',
    siteName: 'Smarter Pro IPTV',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IPTV Subscription in Dubai 2025 | Smarter Pro',
    description: 'Premium IPTV service with HD/4K streaming in UAE. Works on Smart TV, Firestick, Android & iOS.',
  },
  keywords: ['IPTV Dubai', 'IPTV UAE', 'IPTV Subscription', 'Best IPTV 2025', 'IPTV for Smart TV', 'Firestick IPTV', 'IPTV for Android', 'IPTV for iOS', 'IPTV Smarters Pro', '4K IPTV'],
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* HERO */}
        <section className="py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Best IPTV Subscription in <span className="text-gold">Dubai 2025</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Premium IPTV service in the UAE offering seamless HD & 4K streaming on all devices.
            Experience buffer-free entertainment with our optimized service for Smart TVs, Firestick, Android, and iOS devices.
          </p>
          <div className="flex gap-3 justify-center text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Simple setup
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Stable performance
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Flexible plans
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">✔</span> Personal home use
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/pricing">View Plans</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={`https://wa.me/971522462601?text=${encodeURIComponent(
                  "Hi! I want to know more about IPTV subscription in Dubai"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Inquiry
              </a>
            </Button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Premium IPTV Service in Dubai & UAE
            </h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-12 text-muted-foreground">
              Experience the future of home entertainment with our reliable IPTV service, designed specifically for UAE residents and expats. Enjoy crystal-clear streaming with our optimized network infrastructure.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Instant Activation",
                  text: "Get started within minutes with our guided IPTV setup process in Dubai homes and apartments.",
                },
                {
                  title: "4K & HD Streaming",
                  text: "Crystal-clear picture quality with adaptive bitrate streaming for all internet speeds.",
                },
                {
                  title: "Zero Buffering",
                  text: "Optimized servers ensure smooth playback even during peak hours in the UAE.",
                },
                {
                  title: "All Devices Supported",
                  text: "Smart TVs, Firestick, Android boxes, iOS, and Apple TV - all fully compatible.",
                },
                {
                  title: "24/7 Expert Support",
                  text: "Dedicated assistance via WhatsApp and email for all your IPTV needs in Dubai.",
                },
                {
                  title: "Flexible Plans",
                  text: "Choose from monthly, 6-month, or yearly subscriptions to match your viewing preferences.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DEVICES */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              IPTV for All Devices – Simple Setup in Dubai
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our IPTV service works seamlessly with all major devices and platforms used in UAE homes:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Smart TV (Samsung/LG/Sony)",
                "Amazon Firestick UAE",
                "Android Phones & Tablets",
                "iPhone & iPad",
                "Apple TV 4K",
                "Android TV Box",
                "IPTV Smarters Pro",
                "Web Browsers",
              ].map((device, i) => (
                <Card key={i} className="p-4 text-sm bg-card/50">
                  {device}
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild>
                <Link href="/setup-guide">View Setup Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              How IPTV Works in Dubai Homes
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              IPTV (Internet Protocol Television) delivers your favorite TV content through your internet connection, providing more flexibility and features than traditional cable or satellite TV.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 text-left">
              {[
                {
                  step: "1",
                  title: "Choose Your Plan",
                  description: "Select from our flexible subscription options that fit your viewing preferences."
                },
                {
                  step: "2",
                  title: "Setup & Install",
                  description: "Follow our easy setup guide or get help from our support team."
                },
                {
                  step: "3",
                  title: "Start Streaming",
                  description: "Enjoy buffer-free HD & 4K content on all your devices instantly."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Ideal For</h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {[
                  "Families in Dubai & UAE",
                  "Expats & International Viewers",
                  "Cord Cutters",
                  "Sports Enthusiasts",
                  "Movie Lovers",
                  "Multi-Device Households"
                ].map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Get Started with IPTV in Dubai Today
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers in the UAE enjoying premium IPTV service with unbeatable reliability and support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">Choose a Plan</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* LEGAL / SAFE NOTICE */}
        <section className="py-12 text-center text-sm text-muted-foreground max-w-4xl mx-auto px-4">
          <h3 className="text-lg font-medium mb-6">IPTV in Dubai – Important Usage Information</h3>
          <div className="space-y-4 text-left">
            <p>• Smarter Pro Subscription provides IPTV technology access, setup guidance, and device compatibility support only.</p>
            <p>• We do not host, store, or broadcast any TV channels or media content.</p>
            <p>• The service is intended strictly for personal home entertainment use.</p>
            <p>• Users are responsible for ensuring compliance with local laws and regulations in the UAE.</p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-muted">
            <h4 className="font-medium mb-4">Smarter Pro Subscription</h4>
            <p className="mb-2">Premium IPTV technology service for home entertainment in Dubai, UAE & worldwide.</p>
            <p>HD/4K streaming support • Flexible plans • 24/7 assistance</p>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </>
  )
}
