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
  const fullText = "Timeless Wedding Stories That Make You Feel It All Over Again"

  const carouselImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5943-ja36Jza8xTUcXnOfNbkNRDMlljgy1u.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5974-aj9zCmAMde1I0aBluyhghD6hSoSaiH.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4538-BWQDsa65vl8j2ekJGCksXjgN1n7YFR.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4568-ozSQ5Ee6jASmkENBszwORf78rYmWak.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4488-f19R3VnHZqbeHG2Eyymwo22QKbJKEk.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5964-wwTq4hJaSI4zmP8OPJrRkMT1L3ddwb.jpg",
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
    }, 4000)

    return () => {
      clearInterval(timer)
      clearInterval(imageTimer)
    }
  }, [carouselImages.length])

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kaplong-YYPGU4uKU41I7CFhT1Rywj7uMClDxm.png"
              alt="Kaplong Creative Logo"
              width={44}
              height={44}
              className="rounded-full shadow-lg"
            />
            <span className="hidden sm:inline text-2xl font-serif font-bold text-white group-hover:text-gray-200 transition-colors">
              Kaplong Creative
            </span>
          </Link>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Link href="/contact">Book Your Date</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-black/5 to-gray-800/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div
                className={`inline-flex items-center px-6 py-3 bg-black border border-white rounded-full text-sm text-white mb-4 shadow-lg transform transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse shadow-lg"></span>
                <span className="font-semibold">📍 Based in Nakuru • Serving All of Kenya</span>
              </div>

              <div className="text-center lg:text-left">
                <h1 className="text-7xl lg:text-9xl font-serif font-bold mb-6 text-balance">
                  <span className="text-black drop-shadow-lg block">
                    Kaplong
                  </span>
                  <span className="text-black drop-shadow-lg block">
                    Creative
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance min-h-[200px]">
                  <span className="text-black drop-shadow-sm">
                    {currentText}
                  </span>
                  <span className="animate-pulse text-black">|</span>
                </h2>

                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                  <span className="font-semibold text-black">Your love deserves more than snapshots.</span> We
                  capture the tears, the laughter, the stolen glances—every moment that makes your heart skip a beat.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 bg-black/5 backdrop-blur-sm rounded-2xl border border-gray-300 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">
                    200+
                  </div>
                  <div className="text-sm text-gray-700 font-medium">Happy Couples</div>
                </div>
                <div className="text-center border-x border-gray-300">
                  <div className="text-4xl font-bold text-black">
                    5★
                  </div>
                  <div className="text-sm text-gray-700 font-medium">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-black">
                    48hr
                  </div>
                  <div className="text-sm text-gray-700 font-medium">Sneak Peek</div>
                </div>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-700 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-black text-white hover:bg-gray-900 text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 font-bold"
                >
                  <Link href="/contact">📅 Check Your Date</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-gray-100 bg-white text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 font-bold"
                >
                  <Link href="/portfolio">✨ See Real Weddings</Link>
                </Button>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-gray-300/30 via-gray-200/20 to-gray-400/30 rounded-3xl opacity-60 blur-2xl animate-pulse"></div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative w-full h-[800px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] border-4 border-black/50">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1500 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Real wedding captured by Kaplong Creative ${index + 1}`}
                        fill
                        className={`object-cover transition-transform duration-[8000ms] ${
                          index === currentImageIndex ? "scale-110" : "scale-100"
                        }`}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by couples across Kenya */}
      <section className="py-12 bg-gray-50 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm text-black uppercase tracking-wider mb-4 font-semibold">
              Trusted by couples across Kenya
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-black">
                200+
              </div>
              <div className="text-sm text-gray-700 group-hover:text-black transition-colors">
                Weddings Captured
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-black">
                98%
              </div>
              <div className="text-sm text-gray-700 group-hover:text-black transition-colors">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-black">
                15+
              </div>
              <div className="text-sm text-gray-700 group-hover:text-black transition-colors">Counties Served</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-black">
                5+
              </div>
              <div className="text-sm text-gray-700 group-hover:text-black transition-colors">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Wedding Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-black mb-6">
              Complete Wedding Coverage
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From intimate ceremonies to grand celebrations, we provide comprehensive documentation that tells your
              unique love story with artistic excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-black hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Photography</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Candid moments and editorial portraits that capture the essence of your celebration
                </p>
              </CardContent>
            </Card>
            <Card className="border-black hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Videography</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cinematic films that bring your wedding day emotions back to life
                </p>
              </CardContent>
            </Card>
            <Card className="border-black hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">🚁</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Drone Coverage</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Breathtaking aerial perspectives that showcase your venue's beauty
                </p>
              </CardContent>
            </Card>
            <Card className="border-black hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Content Creation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
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
            <h2 className="text-3xl font-serif font-bold text-black mb-4">Our Edge</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              We are a collective of creatives capturing weddings with a fresh perspective and editorial feel. Whether
              it's an intimate ceremony or a grand destination wedding, we document love with clarity, energy, and
              intention.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Candid. Clean. Cinematic.</h3>
                <p className="text-gray-700">
                  Our signature style that captures authentic moments with artistic precision
                </p>
              </CardContent>
            </Card>
            <Card className="border-gray-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Team of Specialists</h3>
                <p className="text-gray-700">Photographers, Videographers, Drone Pilots working in perfect harmony</p>
              </CardContent>
            </Card>
            <Card className="border-gray-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-semibold text-black mb-4">Driven by Excellence</h3>
                <p className="text-gray-700">
                  Guided by purpose, delivered with efficiency - faith at the center of everything
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-black mb-4">
              Signature Work
            </h2>
            <p className="text-lg text-gray-700">A glimpse into our recent celebrations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5943-ja36Jza8xTUcXnOfNbkNRDMlljgy1u.jpg"
                alt="Bride and groom with wedding car"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4568-ozSQ5Ee6jASmkENBszwORf78rYmWak.jpg"
                alt="Bride opening gift"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4371%20%281%29-XjAmRepwlFldKSM562cLBU5X9Qfoye.jpg"
                alt="Wedding rings detail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4488-f19R3VnHZqbeHG2Eyymwo22QKbJKEk.jpg"
                alt="Bride with bridesmaids"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5974-aj9zCmAMde1I0aBluyhghD6hSoSaiH.jpg"
                alt="Wedding party fun moment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4538-BWQDsa65vl8j2ekJGCksXjgN1n7YFR.jpg"
                alt="Bridal portrait outdoors"
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
