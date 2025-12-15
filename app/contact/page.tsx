"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open email client with form data
    const subject = `IPTV Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    window.location.href = `mailto:smarterprosub@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Need secure payment link? We're here to help. Contact us anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <Mail className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:smarterprosub@gmail.com"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                smarterprosub@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <a
                href={`https://wa.me/971522462601`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                +971 52 246 2601
              </a>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+971522462601" className="text-muted-foreground hover:text-gold transition-colors">
                +971 52 246 2601
              </a>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone (Optional)</label>
                  <Input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
                <h2 className="text-2xl font-bold mb-4">Quick Contact via WhatsApp</h2>
                <p className="text-muted-foreground mb-6">
                  Get instant responses to your queries through WhatsApp. Request secure payment link, ask questions, or
                  get a free trial. Our team is available 24/7 to assist you.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a
                    href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I have a question about your IPTV service")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </Card>

              <Card className="p-8 bg-muted/50">
                <h2 className="text-2xl font-bold mb-4">Secure Online Payment</h2>
                <p className="text-muted-foreground mb-4">
                  We offer safe and secure online payment options. Contact us via WhatsApp or call to receive your
                  personalized payment link.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a
                      href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I need the secure payment link")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request Payment Link
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="tel:+971522462601">Call for Payment Info</a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span className="font-semibold text-gold">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span className="font-semibold text-gold">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Response:</span>
                    <span className="font-semibold">Within 2-4 hours</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50">
                <h2 className="text-2xl font-bold mb-4">Service Areas</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Primary:</strong> Dubai, UAE
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Additional:</strong> We serve customers worldwide with premium
                  IPTV services
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
