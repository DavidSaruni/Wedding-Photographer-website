"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const fullText = "Modern Wedding Storytelling Crafted with Precision and Soul"

  const carouselImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop&crop=center",
  ]

  useEffect(() => {
    setIsVisible(true)

    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(imageTimer)
    }
  }, [carouselImages.length])

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
              <Link href="/testimonials" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">
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
      <section className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-stone-900/5 to-amber-800/10"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-stone-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full text-sm text-emerald-800 mb-4 shadow-lg border border-emerald-200/50 transform transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse shadow-lg"></span>
                <span className="font-semibold">Available for 2024-2025 Weddings</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-serif font-bold leading-[0.85] text-balance min-h-[280px]">
                  <span className="bg-gradient-to-br from-stone-900 via-amber-900 via-stone-800 to-amber-800 bg-clip-text text-transparent drop-shadow-sm">
                    {currentText}
                  </span>
                  <span className="animate-pulse text-amber-600">|</span>
                </h1>

                <div className="space-y-4">
                  <p
                    className={`text-2xl lg:text-3xl font-light bg-gradient-to-r from-amber-700 via-stone-600 to-amber-800 bg-clip-text text-transparent text-pretty transform transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    Photography • Videography • Drone • Content Creation
                  </p>
                  <p
                    className={`text-xl text-amber-700 font-semibold tracking-wide transform transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    🇰🇪 Kenya & Beyond
                  </p>
                </div>
              </div>

              <div
                className={`space-y-8 transform transition-all duration-700 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                <p className="text-xl text-stone-700 text-pretty leading-relaxed font-light">
                  <span className="font-semibold text-amber-800">Candid. Clean. Cinematic.</span> We are a collective of
                  creatives capturing weddings with a fresh perspective and editorial feel that stands the test of time.
                </p>

                <div className="grid grid-cols-3 gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-900 bg-clip-text text-transparent">
                      200+
                    </div>
                    <div className="text-sm text-stone-600 font-medium">Weddings</div>
                  </div>
                  <div className="text-center border-x border-stone-200">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-900 bg-clip-text text-transparent">
                      5+
                    </div>
                    <div className="text-sm text-stone-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-br from-amber-700 to-amber-900 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-sm text-stone-600 font-medium">Counties Covered</div>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-700 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-700 via-amber-800 to-stone-800 hover:from-amber-800 hover:via-amber-900 hover:to-stone-900 text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Link href="/portfolio">📸 View Our Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-300 text-amber-800 hover:bg-amber-50 bg-white/90 backdrop-blur-sm text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <Link href="/contact">✨ Check Availability</Link>
                </Button>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-300/30 via-stone-300/20 to-amber-400/30 rounded-3xl opacity-60 blur-2xl animate-pulse"></div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&h=800&fit=crop&crop=faces"
                  alt="Wedding photography by Kaplong Creative - Elegant bride and groom"
                  width={700}
                  height={800}
                  className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] border-4 border-white/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-stone-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce delay-1000">
                  <span className="text-2xl">📷</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce delay-1500">
                  <span className="text-2xl">💍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by couples across Kenya */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm text-amber-700 uppercase tracking-wider mb-4 font-semibold">
              Trusted by couples across Kenya
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-sm text-stone-600 group-hover:text-amber-700 transition-colors">
                Weddings Captured
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-stone-600 group-hover:text-amber-700 transition-colors">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-sm text-stone-600 group-hover:text-amber-700 transition-colors">Counties Served</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm text-stone-600 group-hover:text-amber-700 transition-colors">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Wedding Coverage */}
      <section className="py-20 bg-gradient-to-br from-stone-50 via-amber-50/20 to-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-stone-900 to-amber-800 bg-clip-text text-transparent mb-6">
              Complete Wedding Coverage
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              From intimate ceremonies to grand celebrations, we provide comprehensive documentation that tells your
              unique love story with artistic excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-amber-200/50 hover:shadow-xl hover:border-amber-300 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Photography</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Candid moments and editorial portraits that capture the essence of your celebration
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200/50 hover:shadow-xl hover:border-amber-300 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Videography</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Cinematic films that bring your wedding day emotions back to life
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200/50 hover:shadow-xl hover:border-amber-300 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🚁</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Drone Coverage</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Breathtaking aerial perspectives that showcase your venue's beauty
                </p>
              </CardContent>
            </Card>
            <Card className="border-amber-200/50 hover:shadow-xl hover:border-amber-300 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Content Creation</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Social media ready content to share your joy with the world
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Our Edge</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
              We are a collective of creatives capturing weddings with a fresh perspective and editorial feel. Whether
              it's an intimate ceremony or a grand destination wedding, we document love with clarity, energy, and
              intention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-stone-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Candid. Clean. Cinematic.</h3>
                <p className="text-stone-600">
                  Our signature style that captures authentic moments with artistic precision
                </p>
              </CardContent>
            </Card>
            <Card className="border-stone-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Team of Specialists</h3>
                <p className="text-stone-600">Photographers, Videographers, Drone Pilots working in perfect harmony</p>
              </CardContent>
            </Card>
            <Card className="border-stone-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-semibold text-stone-900 mb-4">Driven by Excellence</h3>
                <p className="text-stone-600">
                  Guided by purpose, delivered with efficiency - faith at the center of everything
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-stone-900 to-amber-800 bg-clip-text text-transparent mb-4">
              Signature Work
            </h2>
            <p className="text-lg text-stone-700">A glimpse into our recent celebrations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=faces"
                alt="Wedding ceremony moment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&crop=faces"
                alt="First dance photography"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop&crop=faces"
                alt="Bridal portrait"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=400&fit=crop&crop=faces"
                alt="Engagement session"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop&crop=center"
                alt="Wedding details"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop&crop=faces"
                alt="Couple portrait"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-300 text-amber-800 hover:bg-amber-50 bg-white/90 backdrop-blur-sm shadow-lg"
            >
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Our Couples Say */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-stone-900 to-amber-800 bg-clip-text text-transparent mb-6">
              What Our Couples Say
            </h2>
            <p className="text-xl text-stone-700">Real stories from real couples</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-amber-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=300&fit=crop&crop=faces"
                    alt="Sarah & Michael"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-lg text-stone-700 mb-6 italic leading-relaxed">
                    "Kaplong Creative didn't just photograph our wedding—they captured our souls. Every image tells our
                    story with such authenticity and beauty. Professional from start to finish, and the results were
                    absolutely breathtaking."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-stone-900">Sarah & Michael</p>
                      <p className="text-amber-700 text-sm font-medium">Nairobi Wedding, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-amber-200/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500&h=300&fit=crop&crop=faces"
                    alt="Grace & David"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-lg text-stone-700 mb-6 italic leading-relaxed">
                    "The team blended seamlessly into our day and captured pure magic without forcing anything. Their
                    faith-centered approach aligned perfectly with our values, and every photo reflects the joy and love
                    we felt."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-stone-900">Grace & David</p>
                      <p className="text-amber-700 text-sm font-medium">Mombasa Wedding, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-300 text-amber-800 hover:bg-amber-50 bg-white/90 backdrop-blur-sm shadow-lg"
            >
              <Link href="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Let's Create Something Beautiful Together */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-stone-900 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 to-stone-900/60"></div>

        <div className="absolute inset-0 grid grid-cols-4 gap-6 p-6 opacity-80">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden transform transition-all duration-1500 shadow-2xl ${
                index === currentImageIndex
                  ? "scale-125 opacity-100 z-20 ring-4 ring-white/30"
                  : index === (currentImageIndex + 1) % carouselImages.length
                    ? "scale-110 opacity-90 z-10"
                    : index === (currentImageIndex + 2) % carouselImages.length
                      ? "scale-105 opacity-75"
                      : "scale-100 opacity-60"
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Wedding photography ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="absolute top-16 left-16 w-40 h-40 rounded-full overflow-hidden opacity-70 animate-pulse shadow-2xl ring-2 ring-white/20">
          <Image
            src={carouselImages[0] || "/placeholder.svg"}
            alt="Floating wedding photo"
            fill
            className="object-cover scale-110"
          />
        </div>
        <div className="absolute bottom-16 right-16 w-48 h-48 rounded-full overflow-hidden opacity-75 animate-pulse delay-1000 shadow-2xl ring-2 ring-white/20">
          <Image
            src={carouselImages[2] || "/placeholder.svg"}
            alt="Floating wedding photo"
            fill
            className="object-cover scale-110"
          />
        </div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full overflow-hidden opacity-60 animate-pulse delay-500 shadow-xl ring-2 ring-white/15">
          <Image
            src={carouselImages[4] || "/placeholder.svg"}
            alt="Floating wedding photo"
            fill
            className="object-cover scale-110"
          />
        </div>
        <div className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full overflow-hidden opacity-65 animate-pulse delay-700 shadow-xl ring-2 ring-white/15">
          <Image
            src={carouselImages[1] || "/placeholder.svg"}
            alt="Floating wedding photo"
            fill
            className="object-cover scale-110"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center z-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Limited availability for 2024-2025
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Your wedding day deserves to be captured with the same care and intention you've put into planning it. Let's
            tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-900 hover:bg-amber-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <Link href="/contact">Check Availability</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
