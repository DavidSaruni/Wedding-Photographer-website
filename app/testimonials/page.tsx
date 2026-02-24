import { Card, CardContent } from "@/components/ui/card"
import { createServerClient } from "@/lib/supabase/server"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function TestimonialsPage() {
  const supabase = await createServerClient()
  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-300 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-black"
            >
              Kaplong Creative
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-medium">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-black transition-colors font-medium">
                Services
              </Link>
              <Link href="/testimonials" className="text-black font-semibold">
                Testimonials
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-black transition-colors font-medium">
                Journal
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
                Contact
              </Link>
            </div>
            <Button
              asChild
              className="bg-black hover:bg-gray-900 shadow-lg text-white"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-black/5 to-gray-800/5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-black">
                What Our Couples Say
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real stories from real couples who trusted us to capture their most precious moments
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {testimonials && testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="border-gray-300 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white"
                >
                  <CardContent className="p-0">
                    {testimonial.image_url && (
                      <div className="aspect-video relative">
                        <Image
                          src={testimonial.image_url || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold text-black">{testimonial.name}</p>
                          <p className="text-gray-600 text-sm font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-700 mb-8">No testimonials yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's capture your special moments with the same care and artistry
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Link href="/contact">Check Availability</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
