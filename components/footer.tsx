import Link from "next/link"
import { Mail, MessageCircle, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gold">Smarter Pro</span> Subscription
            </h3>
            <p className="text-sm text-muted-foreground">
              Premium IPTV services in Dubai and worldwide. HD/4K streaming with 24/7 support.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/channels" className="text-muted-foreground hover:text-gold transition-colors">
                  Channels
                </Link>
              </li>
              <li>
                <Link href="/setup-guide" className="text-muted-foreground hover:text-gold transition-colors">
                  Setup Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-gold transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/971522462601`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:smarterprosub@gmail.com"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:smarterprosub@gmail.com"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  smarterprosub@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`https://wa.me/971522462601`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +971 52 246 2601
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+971522462601" className="text-muted-foreground hover:text-gold transition-colors">
                  +971 52 246 2601
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Smarter Pro Subscription. All rights reserved.</p>
          <p className="mt-2">Premium IPTV Service | Dubai, UAE & Worldwide</p>
        </div>
      </div>
    </footer>
  )
}
