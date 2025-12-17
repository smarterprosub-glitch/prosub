import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Smarter Pro IPTV Service UAE",
  description:
    "Privacy Policy for Smarter Pro IPTV digital service. Learn how we collect, use, and protect your personal information in compliance with UAE regulations.",
  alternates: {
    canonical: "https://smarterprosubscription.com/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Privacy <span className="text-gold">Policy</span>
        </h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              1. Introduction
            </h2>
            <p>
              At Smarter Pro, we respect your privacy and are committed to protecting any personal
              information you share with us. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our digital IPTV service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              2. Information We Collect
            </h2>
            <p>
              We may collect limited personal information when you voluntarily contact us or
              subscribe to our service, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (WhatsApp)</li>
              <li>Basic service-related messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is used strictly for service-related purposes such as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Providing IPTV subscription access</li>
              <li>Customer support and setup assistance</li>
              <li>Sending payment or activation details</li>
              <li>Responding to inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              4. Data Sharing & Disclosure
            </h2>
            <p>
              Smarter Pro does not sell, rent, or trade your personal information to third parties.
              Data may only be shared if required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party tools such as WhatsApp, email services, or payment providers to
              communicate with users. Smarter Pro is not responsible for the privacy practices of
              these external platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              6. Cookies & Tracking
            </h2>
            <p>
              Our website does not actively use cookies for tracking personal behavior. Basic
              analytics may be used to improve website performance and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              7. Data Security
            </h2>
            <p>
              We take reasonable technical and organizational measures to protect your information
              against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              8. User Responsibility
            </h2>
            <p>
              Users are responsible for providing accurate information and for maintaining the
              confidentiality of their communication details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              9. Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated at any time. Continued use of our service indicates
              acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              10. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us through our
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
