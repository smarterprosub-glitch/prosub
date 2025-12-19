import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is IPTV and how does it work in Dubai? (ما هو IPTV في دبي؟)",
      answer:
        "IPTV (Internet Protocol Television) delivers TV content over the internet instead of traditional cable or satellite. In Dubai and UAE, you simply need a stable internet connection (10 Mbps for HD, 25 Mbps for 4K) and a compatible device to stream thousands of channels in HD/4K quality with no buffering.",
    },
    {
      question: "How much does IPTV cost in Dubai? (كم تكلفة IPTV في دبي؟)",
      answer:
        "Our affordable IPTV subscription Dubai starts at just 35 AED per month, 180 AED for 6 months (save 30 AED), or 360 AED for 1 year (save 60 AED). These are the best cheap IPTV plans in Dubai with no hidden fees and no contract required.",
    },
    {
      question: "Which devices work with your IPTV service? (Best IPTV apps for Smart TV in UAE)",
      answer:
        "Our IPTV works on all Smart TVs (Samsung, LG, Sony), Amazon Firestick UAE, Android IPTV box Dubai setup, iOS devices (iPhone, iPad, Apple TV), MAG boxes, and IPTV Smarters Pro. Check our Setup Guide for how to setup IPTV in Dubai home for each device.",
    },
    {
      question: "Is IPTV legal in Dubai? (هل IPTV في دبي قانوني؟)",
      answer:
        "IPTV legality in Dubai and the UAE depends on how the service is used and the content source. Our platform provides a digital IPTV service and setup support. We encourage all users to follow local laws and regulations when accessing or viewing any content. IPTV is intended for personal entertainment use only.",
    },
    {
      question: "Do you offer IPTV free trial Dubai 2025?",
      answer:
        "Yes! We offer a free IPTV trial so you can test our service quality, channel lineup, and no buffering performance before subscribing. Contact us on WhatsApp to activate your free trial for the best IPTV subscription Dubai experience.",
    },
    {
      question: "What channels are included? (IPTV UAE Arabic channels list & IPTV HD channels UAE)",
      answer:
        "We offer thousands of channels including Sports (Premier League, La Liga, NBA, Cricket for sports fans in UAE), Movies, Kids channels, Arabic channels (MBC, OSN, BeIN - IPTV UAE قنوات عربية), Indian, Pakistani, and worldwide content. Our UAE IPTV package with local channels includes everything you need.",
    },
    {
      question: "How to setup IPTV in Dubai home? (طريقة تشغيل IPTV على التلفزيون)",
      answer:
        "Setup is very easy! After subscription, you'll receive login credentials within 15 minutes. For Smart TV: Download IPTV Smarters Pro app. For Firestick UAE: Install Smarters app from app store. For Android: Use IPTV Smarters Pro setup Dubai guide. Detailed step-by-step instructions are in our Setup Guide page.",
    },
    {
      question: "What's the difference between IPTV and traditional TV? (ما الفرق بين IPTV و TV التقليدية في دبي؟)",
      answer:
        "IPTV uses internet connection for streaming (more flexible, cheaper, more channels), while traditional TV uses satellite/cable (expensive, limited channels). IPTV Dubai no buffering gives you better quality at affordable prices with instant access to worldwide content perfect for expats.",
    },
    {
      question: "How to choose the best IPTV in UAE? (كيف أختار IPTV في الإمارات؟)",
      answer:
        "Choose based on: 1) Server stability (our 99.9% uptime guarantees no buffering), 2) Channel variety (we offer UAE, Arabic, sports, international), 3) Price (our cheap plans start at 35 AED), 4) Device compatibility (works on all devices), 5) Customer support (24/7 available). We're rated as best IPTV providers Dubai review 2025.",
    },
    {
      question: "Can I use IPTV for sports fans in UAE? (IPTV دبي قنوات رياضية)",
      answer:
        "We're the best IPTV for sports fans in UAE with live coverage of Premier League, La Liga, Serie A, NBA, Cricket, UFC, Tennis, and more in HD/4K quality. Perfect for watching all major sporting events with zero lag and no buffering.",
    },
    {
      question: "Do you have Arabic IPTV channels? (اشتراك IPTV في دبي قنوات عربية)",
      answer:
        "Yes! We offer comprehensive Arabic channel lineup including MBC, OSN, BeIN Sports, drama channels, news channels and more. Our سيرفر IPTV الإمارات جودة عالية provides the best Arabic content for UAE residents.",
    },
    {
      question: "Is technical support available 24/7?",
      answer:
        "Our technical support team is available 24/7 via WhatsApp (+971522462601), email, and phone to help you with IPTV Smarters Pro setup Dubai, troubleshooting, TiviMate IPTV tips for UAE users, or any questions. Best support in the industry!",
    },
  ]

  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            IPTV Dubai Guide <span className="text-gold">2025</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about best IPTV subscription Dubai - دليل IPTV الإمارات
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
