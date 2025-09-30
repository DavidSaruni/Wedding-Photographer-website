import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold text-stone-900">
              Kaplong Creative
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-stone-700 hover:text-stone-900 transition-colors font-semibold">
                About
              </Link>
              <Link href="/portfolio" className="text-stone-700 hover:text-stone-900 transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="text-stone-700 hover:text-stone-900 transition-colors">
                Services
              </Link>
              <Link href="/testimonials" className="text-stone-700 hover:text-stone-900 transition-colors">
                Testimonials
              </Link>
              <Link href="/blog" className="text-stone-700 hover:text-stone-900 transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-stone-700 hover:text-stone-900 transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="bg-stone-900 hover:bg-stone-800">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6 text-balance">
              We Are a Team of Creators Obsessed with Telling Wedding Stories Beautifully and Efficiently
            </h1>
            <p className="text-xl text-stone-600 text-pretty">
              We're not a one-man show. Kaplong is a creative house made up of experienced photographers, cinematic
              videographers, skilled drone pilots, and passionate editors.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">
                Together, we turn real weddings into editorial-quality visual stories. Our approach is simple: be
                present, be prayerful, and be intentional. From the first look to the last dance, we capture the
                unscripted joy, the holy tears, the sacred promises.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Our process is guided by excellence — and it shows in the quality of our work, how we interact with our
                couples, and how we show up on the big day. We're based in Kenya and available to travel.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/photographer-with-camera-at-wedding-behind-the-sce.jpg"
                alt="Kaplong Creative team at work"
                width={400}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* About Kaplong Section */}
          <div className="bg-white rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">About Kaplong</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-lg text-stone-700 leading-relaxed">
                  I'm a Kenyan-based candid wedding photographer with a deep love for faith, light, and storytelling.
                  Photography found me — but God gave it purpose.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  I believe weddings are not just beautiful celebrations; they are divine covenants. That's why my lens
                  is guided not just by composition, but by calling.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  My style blends documentary candor with artistic depth. You'll find me quietly catching the father's
                  tear, the bride's nervous laugh, the couple's unfiltered prayer. That's where the real story is.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  My journey started years ago with a borrowed camera and a burden to create. Since then, I've
                  documented love stories across Kenya and beyond, always led by one mission: to glorify God through
                  every frame.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/portrait-of-photographer-kaplong-with-camera.jpg"
                  alt="Kaplong, Lead Photographer"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "James", role: "Lead Photographer" },
                { name: "Moses", role: "Drone & BTS" },
                { name: "Faith", role: "Editor & Colorist" },
                { name: "Sarah", role: "Content Producer" },
              ].map((member, index) => (
                <Card key={index} className="border-stone-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-stone-900 mb-1">{member.name}</h3>
                    <p className="text-stone-600 text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-stone-900 text-white rounded-lg p-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to create something beautiful together?</h2>
            <p className="text-xl text-stone-300 mb-8">Let's talk about your special day</p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-stone-900 hover:bg-stone-100">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
