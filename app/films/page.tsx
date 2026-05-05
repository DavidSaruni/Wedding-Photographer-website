'use client'

import { Navigation } from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const YOUTUBE_CHANNEL = "kaplongcreative"
const YOUTUBE_VIDEOS = [
  {
    id: "dQw4w9WgXcQ",
    title: "Our Love Story",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    date: "2024-12-15",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Destination Wedding in the Mountains",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    date: "2024-11-20",
  },
  {
    id: "9bZkp7q19f0",
    title: "Intimate Garden Ceremony",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    date: "2024-10-10",
  },
  {
    id: "tYzMGcUty6s",
    title: "Grand Reception Highlights",
    thumbnail: "https://img.youtube.com/vi/tYzMGcUty6s/maxresdefault.jpg",
    date: "2024-09-05",
  },
  {
    id: "aqz-KE-bpKQ",
    title: "Emotional First Look",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    date: "2024-08-15",
  },
  {
    id: "xfY3h9vsKkE",
    title: "Sunset Beach Wedding",
    thumbnail: "https://img.youtube.com/vi/xfY3h9vsKkE/maxresdefault.jpg",
    date: "2024-07-22",
  },
  {
    id: "ZjibEkDoV6A",
    title: "Cinematic Same-Day Edit",
    thumbnail: "https://img.youtube.com/vi/ZjibEkDoV6A/maxresdefault.jpg",
    date: "2024-06-18",
  },
  {
    id: "oUFJJNQGwhk",
    title: "Modern Urban Wedding",
    thumbnail: "https://img.youtube.com/vi/oUFJJNQGwhk/maxresdefault.jpg",
    date: "2024-05-30",
  },
]

export default function FilmsPage() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof YOUTUBE_VIDEOS)[0] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-black mb-6">
              Our Films
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cinematic wedding stories told with heart. Watch our latest films and see how we capture the magic of your most precious moments.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={`https://www.youtube.com/@${YOUTUBE_CHANNEL}/videos`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                Visit Our YouTube Channel
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Featured Video */}
          {selectedVideo && (
            <div className="mb-16">
              <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-serif font-bold text-black mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600">
                  {new Date(selectedVideo.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          )}

          {/* Video Grid */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-black mb-8">
              {selectedVideo ? "More Films" : "All Films"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {YOUTUBE_VIDEOS.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                    selectedVideo?.id === video.id ? "ring-2 ring-black" : ""
                  }`}
                >
                  <div className="relative pt-[56.25%] bg-gray-200 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white border border-gray-200">
                    <h3 className="font-serif font-bold text-black text-left line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 text-left">
                      {new Date(video.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold text-black mb-6">
                Ready to Create Your Film?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                Every wedding deserves a cinematic story. Let's create yours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold text-lg"
              >
                Book Your Wedding
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
