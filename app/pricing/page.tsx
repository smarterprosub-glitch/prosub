import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Affordable IPTV Subscription Dubai - Best Cheap Plans 2025 | Smarter Pro",
  description:
    "Best IPTV providers Dubai with cheap plans starting at 35 AED/month. Affordable IPTV subscription packages for UAE - 1 month, 6 months, 1 year. HD/4K streaming, no buffering. Fast setup for Smart TV, Firestick, Android, iOS.",
  alternates: {
    canonical: "https://smarterprosubscription.com/pricing",
  },
  keywords:
    "IPTV providers Dubai cheap plans, best IPTV subscription Dubai, affordable Dubai IPTV service 2025, IPTV Dubai no buffering, IPTV subscription without contract, IPTV UAE package with local channels",
}

export default function PricingPage() {
  const plans = [
    {
      name: "1 Month",
      duration: "Monthly Plan",
      price: "35 AED",
      priceDetail: "per month",
      features: [
        "HD & 4K Quality Streaming",
        "All Channel Categories",
        "Multi-Device Support",
        "Fast Activation within 15 mins",
        "24/7 Support",
        "Stable Servers - No Buffering",
        "IPTV Smarters Pro Compatible",
      ],
      popular: false,
    },
    {
      name: "6 Months",
      duration: "Half-Year Plan",
      price: "180 AED",
      priceDetail: "30 AED/month",
      savings: "Save 30 AED",
      features: [
        "HD & 4K Quality Streaming",
        "All Channel Categories",
        "Multi-Device Support",
        "Instant Activation",
        "24/7 Priority Support",
        "Premium Stable Servers",
        "Best Value for Money",
        "IPTV Smarters Pro Setup Guide",
      ],
      popular: true,
    },
    {
      name: "1 Year",
      duration: "Annual Plan",
      price: "360 AED",
      priceDetail: "30 AED/month",
      savings: "Save 60 AED",
      features: [
        "HD & 4K Quality Streaming",
        "All Channel Categories including Arabic & Sports",
        "Multi-Device Support (Smart TV, Firestick, Android, iOS)",
        "Instant Activation",
        "24/7 VIP Support",
        "Premium Stable Servers - Zero Buffering",
        "Maximum Savings",
        "Free Installation & Setup Guide",
        "IPTV Smarters Pro Premium Support",
      ],
      popular: false,
    },
  ]

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Affordable IPTV Subscription Plans <span className="text-gold">Dubai & UAE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Best IPTV providers Dubai with cheap plans for families and individuals. No contract, fast setup for all
              devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular
                    ? "border-gold bg-gradient-to-b from-gold/10 to-card scale-105 shadow-2xl"
                    : "bg-card/50 backdrop-blur-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.duration}</p>
                  <div className="text-5xl font-bold text-gold mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mb-2">{plan.priceDetail}</p>
                  {plan.savings && <p className="text-sm text-gold font-semibold">{plan.savings}</p>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg" asChild>
                  <a
                    href={`https://wa.me/971522462601?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} IPTV plan (${plan.price})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe Now
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20 max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Secure Online Payment Available</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pay safely with our secure online payment link. For payment link and more information, contact or WhatsApp
              us anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I need the secure payment link for IPTV subscription")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Payment Link on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+971522462601">Call Us Now</a>
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30 max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Affordable IPTV Dubai Plans?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">No Contract Required</h3>
                <p className="text-sm">
                  Dubai IPTV subscription without contract - cancel anytime with full flexibility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fast Setup Guide</h3>
                <p className="text-sm">
                  Easy IPTV setup for Smart TV in UAE, Firestick, Android devices - activate in minutes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">No Buffering Guarantee</h3>
                <p className="text-sm">
                  Premium stable servers ensure IPTV Dubai no buffering experience for smooth streaming.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Local & International Channels</h3>
                <p className="text-sm">UAE IPTV package with local channels plus HD channels from worldwide sources.</p>
              </div>
            </div>
          </Card>

          <Card className="p-10 text-center bg-muted/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Plan for Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us for special IPTV packages, bulk subscriptions for hotels, restaurants, and offices in Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a
                  href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I need a custom IPTV plan")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Send Email</Link>
              </Button>
            </div>
          </Card>
          
          <p className="text-sm text-muted-foreground text-center mt-6">
            New user? Read our <Link href="/setup-guide" className="text-gold underline">IPTV Setup Guide for Dubai</Link>
          </p>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
