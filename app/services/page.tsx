import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/Navigation"

const packages = [
  {
    name: "The Essentials",
    price: "Starting at KSh 80,000",
    features: ["6 hrs photo coverage", "1 photographer", "200 edited photos", "Private gallery", "Basic retouching"],
  },
  {
    name: "The Signature",
    price: "Starting at KSh 150,000",
    popular: true,
    features: [
      "Full-day coverage",
      "2 photographers + 1 videographer",
      "350+ edited photos",
      "Highlight video",
      "Advanced retouching",
      "Same-day preview",
    ],
  },
  {
    name: "The Legacy",
    price: "Starting at KSh 250,000",
    features: [
      "Full-day coverage",
      "2 photographers + 2 videographers + Drone",
      "500+ edited photos",
      "Highlight + Documentary Film",
      "Wedding Album",
      "Content creation package",
      "Same-day edits",
    ],
  },
]

const faqs = [
  {
    question: "What's your turnaround time?",
    answer: "2–6 weeks depending on the package. We provide a same-day preview within 48 hours.",
  },
  {
    question: "Do you travel for weddings?",
    answer: "Yes! We're available across Kenya and internationally. Travel costs are calculated separately.",
  },
  {
    question: "What's required to book?",
    answer: "A 30% retainer is required to secure your date, with the balance due before your wedding day.",
  },
  {
    question: "How do you deliver photos?",
    answer: "Online gallery with download options + backup storage for 6 months. Physical albums available as add-ons.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Image Section */}
          <div className="relative h-[350px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5943-ja36Jza8xTUcXnOfNbkNRDMlljgy1u.jpg"
              alt="Wedding photography services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent flex items-center">
              <div className="px-12 max-w-3xl">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-balance">
                  Everything You Need to Remember Your Day — Beautifully
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  From intimate ceremonies to grand celebrations, we offer comprehensive wedding documentation services
                  tailored to your vision.
                </p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-6">
              Everything You Need to Remember Your Day — Beautifully
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
              From intimate ceremonies to grand celebrations, we offer comprehensive wedding documentation services
              tailored to your vision.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Photography",
                description: "Lead + Assistant photographers capturing every moment",
              },
              {
                title: "Cinematic Videography",
                description: "Highlight & Documentary edits that tell your story",
              },
              {
                title: "Drone Coverage",
                description: "Licensed pilots providing stunning aerial perspectives",
              },
              {
                title: "Content Creation",
                description: "Vertical reels and TikTok-ready content for social sharing",
              },
            ].map((service, index) => (
              <Card key={index} className="border-gray-300">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-black text-center mb-12">Wedding Packages</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`border-gray-300 relative ${pkg.popular ? "ring-2 ring-black" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-serif text-2xl text-black">{pkg.name}</CardTitle>
                    <p className="text-gray-700 font-medium">{pkg.price}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-black hover:bg-gray-900">
                      <Link href="/contact">Choose Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-700 mb-4">Need something custom?</p>
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-100 bg-transparent"
              >
                <Link href="/contact">Let's build your dream package</Link>
              </Button>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-black text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-black">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
