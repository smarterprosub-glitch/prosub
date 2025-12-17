import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Film,
  Trophy,
  Baby,
  Globe2,
  Tv2,
  Music,
  BookOpen,
  Sparkles,
  Check,
} from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "IPTV Channels Dubai | Arabic, Sports & HD Channels UAE – Smarter Pro",
  description:
    "Explore full IPTV channels list in Dubai & UAE. Arabic, sports, movies, kids, Indian & international HD/4K channels. Best IPTV service for UAE expats with no buffering.",
  alternates: {
    canonical: "https://smarterprosubscription.com/channels",
  },
  keywords:
    "IPTV channels Dubai, IPTV UAE Arabic channels, sports IPTV Dubai, IPTV for expats UAE, HD IPTV channels UAE, IPTV live TV Dubai",
}

export default function ChannelsPage() {
  const categories = [
    {
      icon: Trophy,
      name: "Sports IPTV Channels",
      description: "Best IPTV for sports fans in Dubai & UAE",
      highlights: [
        "BeIN Sports",
        "Premier League",
        "Champions League",
        "NBA",
        "Cricket",
        "UFC",
        "Formula 1",
      ],
    },
    {
      icon: Sparkles,
      name: "Arabic TV Channels",
      description: "Complete IPTV UAE Arabic channels list",
      highlights: [
        "MBC Channels",
        "OSN",
        "Abu Dhabi TV",
        "Dubai One",
        "Al Jazeera",
        "Arabic Drama",
      ],
    },
    {
      icon: Film,
      name: "Movies & Entertainment",
      description: "Latest movies & series in HD / 4K",
      highlights: [
        "Hollywood",
        "Bollywood",
        "Arabic Cinema",
        "Netflix-style content",
        "TV Series",
      ],
    },
    {
      icon: Baby,
      name: "Kids IPTV Channels",
      description: "Safe IPTV kids channels in UAE",
      highlights: [
        "Disney",
        "Nickelodeon",
        "Cartoons",
        "Educational Channels",
        "Family Safe Content",
      ],
    },
    {
      icon: Tv2,
      name: "Indian TV Channels",
      description: "Hindi & regional Indian IPTV",
      highlights: [
        "Star Plus",
        "Sony",
        "Colors",
        "Zee TV",
        "South Indian Channels",
      ],
    },
    {
      icon: Music,
      name: "Pakistani Channels",
      description: "Popular Pakistani entertainment",
      highlights: ["ARY", "Geo", "HUM TV", "PTV", "Express TV"],
    },
    {
      icon: Globe2,
      name: "International Channels",
      description: "Best IPTV service Dubai for expats",
      highlights: [
        "UK Channels",
        "USA Channels",
        "Europe",
        "Asia",
        "Worldwide Content",
      ],
    },
    {
      icon: BookOpen,
      name: "News & Lifestyle",
      description: "24/7 news & lifestyle channels",
      highlights: [
        "BBC",
        "CNN",
        "Documentaries",
        "Travel",
        "Lifestyle Shows",
      ],
    },
  ]

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* HERO */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              IPTV Channels in <span className="text-gold">Dubai & UAE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch Arabic, sports, movies, kids and international IPTV channels
              in HD & 4K. Perfect IPTV solution for UAE residents and expats.
            </p>
          </div>

          {/* CATEGORIES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm hover:border-gold/50 transition-all"
              >
                <category.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* SEO TEXT BLOCK */}
          <Card className="p-8 max-w-4xl mx-auto mb-16 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4">
              Why Our IPTV Channels Are Best in Dubai?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Our IPTV service in Dubai offers stable, high-quality streaming
              with thousands of live TV channels. Whether you want Arabic
              channels, sports IPTV, or international entertainment, our servers
              are optimized for UAE internet providers to ensure no buffering.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All IPTV subscriptions are compatible with Smart TV, Android,
              Firestick, iOS, and IPTV Smarters Pro. Setup is quick and support is
              available 24/7.
            </p>
          </Card>

          {/* CTA */}
          <Card className="p-10 text-center bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
            <h2 className="text-3xl font-bold mb-4">
              Start Watching All IPTV Channels Today
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Choose affordable IPTV subscription plans in Dubai starting from
              just 35 AED per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">View IPTV Pricing Plans</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={`https://wa.me/971522462601?text=${encodeURIComponent(
                    "Hi! I want to know about IPTV channels available in Dubai"
                  )}`}
                  target="_blank"
                >
                  Ask on WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              New user? Read our{" "}
              <Link href="/setup-guide" className="text-gold underline">
                IPTV Setup Guide for Dubai
              </Link>
            </p>
          </Card>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
