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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-800 to-stone-900 bg-clip-text text-transparent"
            >
              Kaplong Creative
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">
                About
              </Link>
              <Link href="/portfolio" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/services" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">
                Services
              </Link>
              <Link href="/testimonials" className="text-amber-700 font-semibold">
                Testimonials
              </Link>
              <Link href="/blog" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">
                Journal
              </Link>
              <Link href="/contact" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">
                Contact
              </Link>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-stone-900/5 to-amber-800/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-stone-900 via-amber-800 to-stone-900 bg-clip-text text-transparent">
                What Our Couples Say
              </span>
            </h1>
            <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
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
                  className="border-amber-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm"
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
                          <span key={i} className="text-amber-500 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-lg text-stone-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold text-stone-900">{testimonial.name}</p>
                          <p className="text-amber-700 text-sm font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-stone-600 mb-8">No testimonials yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Let's capture your special moments with the same care and artistry
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-amber-900 hover:bg-amber-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Link href="/contact">Check Availability</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
