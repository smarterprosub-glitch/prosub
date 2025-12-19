import Link from "next/link"

export const metadata = {
  title: "Disclaimer | Smarter Pro IPTV Service UAE",
  description:
    "Disclaimer for Smarter Pro digital IPTV service. Clarifies service responsibility, third-party content, and user obligations in compliance with UAE regulations.",
  alternates: {
    canonical: "https://smarterprosubscription.com/disclaimer",
  },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Legal <span className="text-gold">Disclaimer</span>
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              General Information
            </h2>
            <p>
              Smarter Pro provides a digital IPTV subscription service intended for informational
              and personal entertainment purposes only. By using this website or our service, you
              agree to the terms outlined in this disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No Content Ownership
            </h2>
            <p>
              Smarter Pro does not own, host, control, or broadcast any television channels, media
              streams, or content displayed through third-party IPTV applications. All trademarks,
              logos, and content remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Third-Party Applications
            </h2>
            <p>
              Our service may require the use of third-party IPTV players such as IPTV Smarters Pro,
              TiviMate, or similar applications. Smarter Pro is not affiliated with or responsible
              for these applications, their availability, or their content policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              User Responsibility
            </h2>
            <p>
              Users are solely responsible for ensuring that the use of IPTV services complies with
              local laws and regulations applicable in their country or region. Smarter Pro does
              not encourage or promote unlawful streaming activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Service Availability
            </h2>
            <p>
              We do not guarantee uninterrupted service, channel availability, or specific content
              access. Channel lists, features, and performance may change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              External Links
            </h2>
            <p>
              Our website may contain links to external websites or services. Smarter Pro is not
              responsible for the content, accuracy, or privacy practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Limitation of Liability
            </h2>
            <p>
              Smarter Pro shall not be held liable for any direct, indirect, or incidental damages
              arising from the use or inability to use our service, website, or third-party tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Changes to This Disclaimer
            </h2>
            <p>
              This disclaimer may be updated at any time without prior notice. Continued use of the
              website or service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this disclaimer, please contact us through our
              official <Link href="/contact" className="text-gold hover:underline">Contact page</Link> or{' '}
              <a href="https://wa.me/971522462601" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp support
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
