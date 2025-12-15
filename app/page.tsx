import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tv, Smartphone, Wifi, Clock, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQ } from "@/components/faq"

export default function Home() {
  const features = [
    { icon: Zap, title: "Fast Activation", description: "Setup IPTV in Dubai home within 15 minutes" },
    { icon: Tv, title: "HD & 4K Quality", description: "Crystal clear IPTV HD channels UAE streaming" },
    { icon: Wifi, title: "No Buffering", description: "IPTV Dubai no buffering - 99.9% uptime" },
    { icon: Clock, title: "24/7 Support", description: "Best IPTV support for UAE customers" },
    { icon: Globe, title: "Worldwide Access", description: "IPTV service Dubai for expats with global content" },
    { icon: Shield, title: "Secure & Reliable", description: "Trusted affordable Dubai IPTV service 2025" },
  ]

  const devices = [
    { name: "Smart TV", description: "Best IPTV apps for Smart TV in UAE" },
    { name: "Fire TV Stick", description: "IPTV Firestick UAE setup" },
    { name: "Android", description: "Android IPTV box Dubai setup" },
    { name: "iOS", description: "Dubai IPTV on Apple TV guide" },
    { name: "TV Box", description: "Android TV Box with IPTV" },
    { name: "IPTV Smarters Pro", description: "IPTV Smarters Pro setup Dubai" },
  ]

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-4 z-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm">
              <span className="text-gold text-sm font-medium">
                Best IPTV Subscription Dubai 2025 - اشتراك IPTV في دبي
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Best IPTV Providers Dubai
              <span className="block text-gold mt-2">Cheap Plans from 35 AED/Month</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty">
              Affordable IPTV subscription Dubai with HD/4K streaming, no buffering, and instant activation. Best IPTV
              for Smart TV, Firestick, Android & iOS. Perfect for sports fans in UAE!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/pricing">View Cheap Plans</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-gold text-gold hover:bg-gold hover:text-background bg-transparent"
                asChild
              >
                <a
                  href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I want IPTV free trial Dubai 2025")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Trial
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="text-lg px-8" asChild>
                <Link href="/pricing">Plans: 35 AED/Month</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Secure online payment available • Call or WhatsApp for payment link:{" "}
              <a href="tel:+971522462601" className="text-gold hover:underline">
                +971 52 246 2601
              </a>
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Best IPTV Subscription Dubai?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium features that make us the best affordable IPTV service in Dubai, UAE and worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 transition-colors"
                >
                  <feature.icon className="w-12 h-12 text-gold mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Devices Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">IPTV for All Devices - Setup in Minutes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How to setup IPTV in Dubai home: Compatible with Smart TV, Firestick UAE, Android, iOS, and more
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {devices.map((device, index) => (
                <Card
                  key={index}
                  className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 transition-colors"
                >
                  <Smartphone className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{device.name}</h3>
                  <p className="text-sm text-muted-foreground">{device.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" variant="outline" asChild>
                <Link href="/setup-guide">View Complete Setup Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your IPTV Journey?</h2>
              <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
                Join thousands enjoying the best IPTV subscription Dubai review-rated service
              </p>
              <p className="text-lg text-gold font-semibold mb-2">
                Affordable plans: 35 AED/month • 180 AED/6 months • 360 AED/year
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Pay securely online with our safe payment link • Call or WhatsApp for more info
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/pricing">View All Plans</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-gold text-gold hover:bg-gold hover:text-background bg-transparent"
                  asChild
                >
                  <a
                    href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I want affordable Dubai IPTV service 2025")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp for Free Trial
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </div>

      <WhatsAppButton />
    </>
  )
}
