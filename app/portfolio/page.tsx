"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const categories = ["All", "Weddings", "Engagements", "Bridal Morning", "Drone Moments", "Details & Decor"]

const portfolioImages = [
  {
    category: "Weddings",
    title: "Sunset vows in Naivasha",
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Bridal Morning",
    title: "Bridal prep in Nairobi",
    id: 2,
    src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Engagements",
    title: "Love session at Karen",
    id: 3,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Drone Moments",
    title: "Aerial ceremony view",
    id: 4,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Details & Decor",
    title: "Wedding rings and flowers",
    id: 5,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Weddings",
    title: "First dance magic",
    id: 6,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Bridal Morning",
    title: "Getting ready moments",
    id: 7,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Engagements",
    title: "Couple's portrait session",
    id: 8,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Drone Moments",
    title: "Reception from above",
    id: 9,
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Details & Decor",
    title: "Table setting elegance",
    id: 10,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Weddings",
    title: "Ceremony emotions",
    id: 11,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Bridal Morning",
    title: "Bride's final touches",
    id: 12,
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&h=600&fit=crop&crop=faces",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === activeCategory)

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
              <Link href="/about" className="text-stone-700 hover:text-stone-900 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-stone-700 hover:text-stone-900 transition-colors font-semibold">
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
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-amber-800 via-stone-800 to-amber-900 bg-clip-text text-transparent mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto text-pretty">
              A collection of love stories captured with intention, artistry, and heart
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-stone-900 text-white"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium">{image.title}</p>
                      <p className="text-sm text-amber-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-white to-stone-50 rounded-lg p-12 border border-stone-100">
            <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-amber-800 to-stone-800 bg-clip-text text-transparent mb-4">
              Ready to create your own story?
            </h2>
            <p className="text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can capture the magic of your special day with the same artistry and attention to
              detail.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-800 to-stone-800 hover:from-amber-900 hover:to-stone-900 text-white shadow-lg"
            >
              <Link href="/contact">Start Planning</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
