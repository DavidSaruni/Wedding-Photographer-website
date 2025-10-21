import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/Navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Image Section */}
          <div className="relative h-[300px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5974-aj9zCmAMde1I0aBluyhghD6hSoSaiH.jpg"
              alt="Contact Kaplong Creative"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/30 flex items-center justify-center">
              <div className="text-center px-6">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
                  Let's Create Magic Together
                </h1>
                <p className="text-xl text-amber-100 max-w-2xl mx-auto">
                  Ready to capture your love story? We'll get back within 24 hours. Your love story deserves to be told
                  beautifully.
                </p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            {/* Updated header text color and gradient background */}
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
              Let's Create Magic Together
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Ready to capture your love story? We'll get back within 24 hours. Your love story deserves to be told
              beautifully.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-stone-900">Tell Us About Your Day</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" className="border-stone-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="border-stone-300" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+254 700 000 000" className="border-stone-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Wedding Date</Label>
                      <Input id="date" type="date" className="border-stone-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="venue">Venue/Location</Label>
                    <Input
                      id="venue"
                      placeholder="Where will your celebration take place?"
                      className="border-stone-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Services Interested In</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Photography",
                        "Videography",
                        "Drone Coverage",
                        "Content Creation",
                        "Same-Day Edits",
                        "Wedding Album",
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service.toLowerCase().replace(" ", "-")} />
                          <Label htmlFor={service.toLowerCase().replace(" ", "-")} className="text-sm font-normal">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Vision</Label>
                    <Textarea
                      id="message"
                      placeholder="Share your story, vision, and any special details about your day..."
                      className="border-stone-300 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-stone-900 hover:bg-stone-800 text-lg py-6">Send Inquiry</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-stone-900">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-stone-600" />
                    <div>
                      <p className="font-medium text-stone-900">Phone</p>
                      <p className="text-stone-600">+254 700 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-stone-600" />
                    <div>
                      <p className="font-medium text-stone-900">Email</p>
                      <p className="text-stone-600">hello@kaplongcreative.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-stone-600" />
                    <div>
                      <p className="font-medium text-stone-900">WhatsApp</p>
                      <p className="text-stone-600">Quick responses</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-stone-600" />
                    <div>
                      <p className="font-medium text-stone-900">Instagram</p>
                      <p className="text-stone-600">@kaplongcreative</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-stone-900 mb-3">Quick Response</h3>
                  <p className="text-stone-600 mb-4">
                    Need immediate assistance? Click below to start a WhatsApp conversation.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-stone-900 mb-3">Based in Kenya</h3>
                  <p className="text-stone-600">
                    We're located in Nairobi and available for weddings across Kenya and internationally. Travel costs
                    calculated separately for destination weddings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
