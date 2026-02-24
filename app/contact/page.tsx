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
    <div className="min-h-screen bg-white">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex items-center justify-center">
              <div className="text-center px-6">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
                  Let's Create Magic Together
                </h1>
                <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                  Ready to capture your love story? We'll get back within 24 hours. Your love story deserves to be told
                  beautifully.
                </p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            {/* Updated header text color and gradient background */}
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-6 text-balance">
              Let's Create Magic Together
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Ready to capture your love story? We'll get back within 24 hours. Your love story deserves to be told
              beautifully.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-black">Tell Us About Your Day</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" className="border-gray-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="border-gray-300" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+254 700 000 000" className="border-gray-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Wedding Date</Label>
                      <Input id="date" type="date" className="border-gray-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="venue">Venue/Location</Label>
                    <Input
                      id="venue"
                      placeholder="Where will your celebration take place?"
                      className="border-gray-300"
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
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-900 text-lg py-6">Send Inquiry</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-gray-300">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-black">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-700" />
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-700">+254 700 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-700" />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-700">hello@kaplongcreative.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-gray-700" />
                    <div>
                      <p className="font-medium text-black">WhatsApp</p>
                      <p className="text-gray-700">Quick responses</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-gray-700" />
                    <div>
                      <p className="font-medium text-black">Instagram</p>
                      <p className="text-gray-700">@kaplongcreative</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-300">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-black mb-3">Quick Response</h3>
                  <p className="text-gray-700 mb-4">
                    Need immediate assistance? Click below to start a WhatsApp conversation.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-300">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-black mb-3">Based in Kenya</h3>
                  <p className="text-gray-700">
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
