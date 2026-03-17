"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Navigation } from "@/components/Navigation"

const categories = [
  "All",
  "Weddings",
  "Retreats",
  "Nature",
  "Corporate Events",
  "Engagements",
  "Bridal Morning",
  "Drone Moments",
  "Details & Decor",
]

const portfolioImages = [
  {
    category: "Bridal Morning",
    title: "Bridal prep elegance",
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/015A1322-S9tvbBiT3HNL1L5UMd9qQjPZNUGQWY.jpg",
  },
  {
    category: "Weddings",
    title: "Bride with vibrant bouquet",
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/015A1153-4muQg3rLCW1J4e5WF0hrnzuxIrjLrh.jpg",
  },
  {
    category: "Details & Decor",
    title: "Wedding rings in box",
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4371%20%281%29-XjAmRepwlFldKSM562cLBU5X9Qfoye.jpg",
  },
  {
    category: "Bridal Morning",
    title: "Getting ready moments",
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/015A1256-c9hYfentfpjwd3RYcgBrHw7bnAbc8p.jpg",
  },
  {
    category: "Details & Decor",
    title: "Ring ceremony details",
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4371-SxyPVPtCgYefPYzWUfWHWlTOd4dEuE.jpg",
  },
  {
    category: "Weddings",
    title: "Bridal party celebration",
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/015A1288-FNkZfkZrZITob9sN1HPzRsfwdYB2gE.jpg",
  },
  {
    category: "Details & Decor",
    title: "Elegant ring presentation",
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4351%20%281%29-etfeQJVp4jC3gONhINHfiEIRdV9A04.jpg",
  },
  {
    category: "Details & Decor",
    title: "Wedding shoes and rings",
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4360-MGtcPa0TFFebsSf2piQ7MagNgbTrsh.jpg",
  },
  {
    category: "Details & Decor",
    title: "Ring box on table",
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_4351-B44TSWGog6kTUytPRUCpJjOJuxRXeu.jpg",
  },
  {
    category: "Retreats",
    title: "Wellness retreat in Nanyuki",
    id: 10,
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Retreats",
    title: "Team building moments",
    id: 11,
    src: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Nature",
    title: "Wildlife conservation project",
    id: 12,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Nature",
    title: "Landscape photography session",
    id: 13,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Corporate Events",
    title: "Annual gala dinner",
    id: 14,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Corporate Events",
    title: "Product launch event",
    id: 15,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop&crop=center",
  },
  {
    category: "Engagements",
    title: "Love session at Karen",
    id: 16,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Engagements",
    title: "Couple's portrait session",
    id: 17,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop&crop=faces",
  },
  {
    category: "Drone Moments",
    title: "Aerial ceremony view",
    id: 18,
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop&crop=center",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto text-pretty">
              A collection of moments captured with intention, artistry, and heart across weddings, retreats, nature,
              and corporate events
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
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100 border border-gray-300"
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
                      <p className="text-sm text-gray-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-lg p-12 border border-gray-300">
            <h2 className="text-3xl font-serif font-bold text-black mb-4">
              Ready to create your own story?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can capture the magic of your special day with the same artistry and attention to
              detail.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-900 text-white shadow-lg"
            >
              <Link href="/contact">Start Planning</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
