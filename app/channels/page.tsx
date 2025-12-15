import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Film, Trophy, Baby, Globe2, Tv2, Music, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "IPTV Channels Dubai - Sports, Arabic, HD Channels UAE List | Smarter Pro",
  description:
    "Complete IPTV UAE Arabic channels list, sports channels (Premier League, NBA, Cricket), movies, kids content. Best IPTV HD channels UAE with no buffering. Perfect for sports fans in UAE and expats.",
  keywords:
    "IPTV live TV Dubai channels guide, IPTV UAE Arabic channels list, IPTV UAE kids channels guide, IPTV HD channels UAE list, IPTV for sports fans in UAE, IPTV service Dubai for expats",
}

export default function ChannelsPage() {
  const categories = [
    {
      icon: Trophy,
      name: "Sports Channels",
      description: "Best IPTV for sports fans in UAE",
      highlights: ["Premier League", "La Liga", "NBA", "Cricket", "UFC", "Tennis", "BeIN Sports"],
    },
    {
      icon: Film,
      name: "Movies & Entertainment",
      description: "Latest blockbusters in HD/4K",
      highlights: ["Hollywood", "Bollywood", "Arabic Cinema", "Box Office Hits", "Netflix-style content"],
    },
    {
      icon: Baby,
      name: "Kids Content",
      description: "IPTV UAE kids channels guide",
      highlights: ["Cartoons", "Educational", "Disney", "Nickelodeon", "Safe content"],
    },
    {
      icon: Sparkles,
      name: "Arabic Channels",
      description: "IPTV UAE Arabic channels list",
      highlights: ["MBC", "OSN", "BeIN Sports", "Drama", "News", "Al Jazeera", "Abu Dhabi TV"],
    },
    {
      icon: Tv2,
      name: "Indian Channels",
      description: "Complete Indian TV lineup",
      highlights: ["Star Plus", "Sony", "Colors", "Zee TV", "Regional", "Hindi content"],
    },
    {
      icon: Music,
      name: "Pakistani Channels",
      description: "Top Pakistani entertainment",
      highlights: ["ARY", "Geo", "Hum TV", "PTV", "Express", "Drama channels"],
    },
    {
      icon: Globe2,
      name: "Worldwide Content",
      description: "IPTV service Dubai for expats",
      highlights: ["UK", "USA", "Europe", "Asia", "Africa", "Latin America"],
    },
    {
      icon: BookOpen,
      name: "News & Lifestyle",
      description: "Stay informed and entertained",
      highlights: ["CNN", "BBC", "Al Jazeera", "Documentary", "Lifestyle", "Travel"],
    },
  ]

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              IPTV Live TV Dubai <span className="text-gold">Channels Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete IPTV HD channels UAE list with Arabic, sports, movies, and worldwide content. Perfect for expats
              and sports fans!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 transition-all hover:scale-105"
              >
                <category.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <ul className="space-y-1">
                  {category.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-10 text-center bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Access All HD Channels?</h2>
            <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
              Subscribe to best IPTV subscription Dubai and start watching your favorite content in HD/4K
            </p>
            <p className="text-gold font-semibold mb-8">
              Starting at just 35 AED/month • 180 AED/6 months • 360 AED/year
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/pricing">View Cheap Plans</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-gold text-gold hover:bg-gold hover:text-background bg-transparent"
                asChild
              >
                <a
                  href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I want to know about IPTV UAE Arabic channels list")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask About Channels
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
