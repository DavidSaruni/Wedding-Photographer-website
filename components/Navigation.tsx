"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-300"
          : "bg-white/95 backdrop-blur-md border-b border-gray-300 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group relative text-2xl lg:text-3xl font-serif font-bold transition-all duration-300"
          >
            <span className="text-black group-hover:text-gray-800 transition-all duration-300">
              Kaplong Creative
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-base font-medium transition-all duration-300 group ${
                  isActive(link.href) ? "text-black" : "text-gray-700 hover:text-black"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-black transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-black hover:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold px-6 py-5 text-base text-white"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:text-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-gray-100 text-black border-l-4 border-black"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-black hover:bg-gray-900 shadow-lg mt-4 w-full text-white"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
