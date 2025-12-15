import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Tv, Smartphone, TabletSmartphone, MonitorPlay } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "How to Setup IPTV in Dubai Home - Smart TV, Firestick UAE Guide | Smarter Pro",
  description:
    "Easy IPTV setup guides: Best IPTV apps for Smart TV in UAE, Android IPTV box Dubai setup, IPTV Smarters Pro setup Dubai, Dubai IPTV on Apple TV, IPTV Firestick UAE. TiviMate IPTV tips for UAE users.",
  keywords:
    "how to setup IPTV in Dubai home, Android IPTV box Dubai setup, best IPTV apps for Smart TV in UAE, IPTV Smarters Pro setup Dubai, Dubai IPTV on Apple TV setup guide, TiviMate IPTV tips for UAE users",
}

export default function SetupGuidePage() {
  return (
    <>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              How to Setup IPTV in Dubai <span className="text-gold">Home Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Easy step-by-step guides for IPTV Smarters Pro setup Dubai, Firestick UAE, Smart TV, and all devices
            </p>
          </div>

          <Tabs defaultValue="smart-tv" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="smart-tv" className="gap-2">
                <Tv className="w-4 h-4" />
                Smart TV
              </TabsTrigger>
              <TabsTrigger value="firestick" className="gap-2">
                <MonitorPlay className="w-4 h-4" />
                Firestick
              </TabsTrigger>
              <TabsTrigger value="android" className="gap-2">
                <Smartphone className="w-4 h-4" />
                Android
              </TabsTrigger>
              <TabsTrigger value="ios" className="gap-2">
                <TabletSmartphone className="w-4 h-4" />
                iOS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="smart-tv">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Tv className="w-8 h-8 text-gold" />
                  Best IPTV Apps for Smart TV in UAE Setup
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 1: Open App Store</h3>
                    <p className="text-muted-foreground">
                      Navigate to your Smart TV's app store (Samsung Smart Hub, LG Content Store, or Android TV Play
                      Store). This is how to setup IPTV in Dubai home on any Smart TV.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 2: Download IPTV Smarters Pro</h3>
                    <p className="text-muted-foreground">
                      Search for and download "IPTV Smarters Pro" - the best IPTV app for Smart TV in UAE with easy
                      setup and smooth streaming.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 3: Install & Open</h3>
                    <p className="text-muted-foreground">
                      Install the IPTV Smarters Pro app and launch it on your Smart TV. The app is free and easy to use.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 4: IPTV Smarters Pro Setup Dubai</h3>
                    <p className="text-muted-foreground">
                      Choose "Login with Xtream Codes API" and enter the login details (server URL, username, password)
                      we provide after your subscription.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 5: Start Watching</h3>
                    <p className="text-muted-foreground">
                      That's it! You're ready to enjoy thousands of IPTV HD channels UAE in 4K quality on your Smart TV.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="firestick">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MonitorPlay className="w-8 h-8 text-gold" />
                  IPTV Firestick UAE Setup Guide
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 1: Enable Apps from Unknown Sources</h3>
                    <p className="text-muted-foreground">
                      Go to Settings → My Fire TV → Developer Options → Install Unknown Apps → Turn on for "Downloader"
                      or "Silk Browser"
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 2: Download Downloader App</h3>
                    <p className="text-muted-foreground">
                      From the Amazon App Store, search and install the "Downloader" app (free). This helps with IPTV
                      Firestick UAE installation.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 3: Download IPTV Smarters Pro APK</h3>
                    <p className="text-muted-foreground">
                      Open Downloader, enter the IPTV Smarters Pro APK URL (we'll provide), and download the app for
                      your Firestick.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 4: Install & Configure</h3>
                    <p className="text-muted-foreground">
                      Install the APK, open IPTV Smarters Pro, and enter your subscription credentials for instant
                      activation.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 5: Enjoy IPTV Dubai No Buffering</h3>
                    <p className="text-muted-foreground">
                      Start streaming your favorite channels instantly on Firestick with our stable servers!
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="android">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-gold" />
                  Android IPTV Box Dubai Setup
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 1: Download IPTV Smarters Pro</h3>
                    <p className="text-muted-foreground">
                      For Android phones, tablets, or TV boxes: Download "IPTV Smarters Pro" from Google Play Store or
                      via APK (we'll provide link).
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 2: Install the App</h3>
                    <p className="text-muted-foreground">
                      If installing from APK, enable "Install from Unknown Sources" in Settings → Security. This is part
                      of Android IPTV box Dubai setup.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 3: Open & Configure Smarters Pro</h3>
                    <p className="text-muted-foreground">
                      Launch the app, select "Login with Xtream Codes", and enter your login credentials (server,
                      username, password) we provide.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 4: TiviMate IPTV Tips for UAE Users (Optional)</h3>
                    <p className="text-muted-foreground">
                      Advanced users can also use TiviMate IPTV player for enhanced features. We provide setup support
                      for both apps!
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 5: Start Streaming</h3>
                    <p className="text-muted-foreground">
                      Browse channels and start watching on your Android device anywhere in Dubai or worldwide!
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ios">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TabletSmartphone className="w-8 h-8 text-gold" />
                  Dubai IPTV on Apple TV Setup Guide
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 1: Download App from iOS App Store</h3>
                    <p className="text-muted-foreground">
                      For iPhone, iPad, or Apple TV: Search for and download "IPTV Smarters Pro" or "GSE Smart IPTV"
                      from the iOS App Store (free apps).
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 2: Open the App</h3>
                    <p className="text-muted-foreground">
                      Launch the IPTV player app on your iPhone, iPad, or Apple TV. Both apps work great for Dubai IPTV
                      on Apple TV setup.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 3: Add Your IPTV Credentials</h3>
                    <p className="text-muted-foreground">
                      Choose "Xtream Codes API" login method and enter the server URL, username, and password we provide
                      after subscription.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 4: Sync Across All Apple Devices</h3>
                    <p className="text-muted-foreground">
                      Use the same credentials on all your iOS devices (iPhone, iPad, Apple TV) for seamless streaming
                      everywhere.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold mb-2">Step 5: Watch Anywhere</h3>
                    <p className="text-muted-foreground">
                      Enjoy affordable Dubai IPTV service 2025 on your iOS devices wherever you go with smooth HD/4K
                      streaming!
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-10 p-8 text-center bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
            <h2 className="text-3xl font-bold mb-4">Need Help with IPTV Setup?</h2>
            <p className="text-lg text-muted-foreground mb-2">
              Our support team is available 24/7 to help you with IPTV Smarters Pro setup Dubai, Firestick UAE, or any
              device
            </p>
            <p className="text-gold font-semibold mb-6">Fast activation within 15 minutes • Plans from 35 AED/month</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a
                  href={`https://wa.me/971522462601?text=${encodeURIComponent("Hi! I need help with how to setup IPTV in Dubai home")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Help on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">View Affordable Plans</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <WhatsAppButton />
    </>
  )
}
