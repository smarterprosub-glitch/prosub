import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions | Smarter Pro Digital IPTV Service UAE",
  description:
    "Official terms and conditions for using Smarter Pro digital IPTV service in UAE. Clear usage policy, legal compliance, and user responsibilities.",
  alternates: {
    canonical: "https://smarterprosubscription.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Terms & <span className="text-gold">Conditions</span>
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              1. Digital Service Description
            </h2>
            <p>
              Smarter Pro provides a digital IPTV subscription service that enables users to access
              television content through compatible third-party applications using an internet
              connection. We do not operate as a broadcaster or content producer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              2. Content & Third-Party Sources
            </h2>
            <p>
              Smarter Pro does not host, upload, store, transmit, or control any media content.
              Content availability depends entirely on external servers and third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              3. Intellectual Property Disclaimer
            </h2>
            <p>
              All channel names, logos, trademarks, and media content referenced or accessible are
              the property of their respective owners. Smarter Pro does not claim ownership or
              affiliation with any broadcaster or network.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              4. User Responsibility & Local Laws
            </h2>
            <p>
              Users are responsible for ensuring that their use of this service complies with local
              laws and regulations in their country or region. Smarter Pro is not liable for misuse
              of the service by end users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              5. Acceptable Usage Policy
            </h2>
            <p>
              The service is intended for personal, non-commercial use only. Redistribution,
              resale, or sharing beyond the permitted number of connections is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              6. Service Availability
            </h2>
            <p>
              Service uptime may vary due to internet conditions, maintenance, or factors beyond
              our control. Continuous availability is not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              7. Payments & Digital Activation
            </h2>
            <p>
              All subscriptions are digital services. Once activated, payments are non-refundable
              unless explicitly stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              8. Updates to Terms
            </h2>
            <p>
              These terms may be updated periodically. Continued use of the service indicates
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              9. Contact & Support
            </h2>
            <p>
              For any questions regarding these terms, users may contact Smarter Pro through the
              official <Link href="/contact" className="text-gold hover:underline">Contact page</Link> or <a href="https://wa.me/971522462601" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp support</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
