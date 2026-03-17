import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/Navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Image Section */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4488-f19R3VnHZqbeHG2Eyymwo22QKbJKEk.jpg"
              alt="Kaplong Creative team capturing moments"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-12">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4 text-balance">
                  Creators Obsessed with Beautiful Wedding Stories
                </h1>
                <p className="text-xl text-gray-100 max-w-3xl leading-relaxed">
                  A creative team of photographers, videographers, drone pilots, and editors turning real weddings into
                  editorial-quality visual stories.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-20">{/* Moved hero text to hero image section */}</div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/photographer-with-camera-at-wedding-behind-the-sce.jpg"
                alt="Kaplong Creative team at work"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Be present. Be prayerful. Be intentional. From first look to last dance, we capture unscripted joy,
                  holy tears, and sacred promises.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Promise</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Excellence guides everything — our work quality, couple interactions, and how we show up on your big
                  day. Based in Kenya, available worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* About Kaplong Section */}
          <div className="bg-white rounded-2xl shadow-xl p-10 lg:p-12 mb-20">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1 flex flex-col items-center text-center">
                <Image
                  src="/portrait-of-photographer-kaplong-with-camera.jpg"
                  alt="Kaplong, Lead Photographer"
                  width={280}
                  height={350}
                  className="rounded-2xl shadow-lg mb-6"
                />
                <h2 className="text-3xl font-serif font-bold text-black mb-2">
                  Kaplong
                </h2>
                <p className="text-gray-700 font-semibold">Lead Photographer & Founder</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-2xl font-serif text-black">"</span>
                  Photography found me — but God gave it purpose.
                  <span className="text-2xl font-serif text-black">"</span>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a Kenyan candid wedding photographer with a deep love for faith, light, and storytelling. I
                  believe weddings are divine covenants, so my lens is guided by calling, not just composition.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My style blends documentary candor with artistic depth — catching the father's tear, the bride's
                  nervous laugh, the couple's unfiltered prayer. That's where the real story lives.
                </p>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-black font-semibold text-lg">Mission:</p>
                  <p className="text-gray-700 italic">To glorify God through every frame.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-center text-black mb-12">
              Meet The Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "James", role: "Lead Photographer" },
                { name: "Moses", role: "Drone & BTS" },
                { name: "Faith", role: "Editor & Colorist" },
                { name: "Sarah", role: "Content Producer" },
              ].map((member, index) => (
                <Card key={index} className="border-gray-300 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-xl text-black mb-2">{member.name}</h3>
                    <p className="text-gray-700 font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-black text-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-serif font-bold mb-4">Ready to Create Something Beautiful?</h2>
            <p className="text-xl text-gray-300 mb-8">Let's talk about your special day</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold text-lg px-8 py-6"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
