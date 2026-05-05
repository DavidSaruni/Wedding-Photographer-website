'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { useState } from "react"

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const currentDate = new Date()
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => null)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f1ed" }}>
      {/* Navigation */}
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-black mb-4 text-balance">
              Your Story is Too Good
            </h1>
            <h2 className="text-5xl lg:text-6xl font-serif font-light text-black mb-8 text-balance">
              Not to be Captured
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-700">
              <div>
                <p className="font-medium">Email hello@kaplongcreative.com</p>
                <p>Telephone +254 796 431 935</p>
              </div>
              <div className="text-2xl text-gray-500">&</div>
              <div>
                <p className="font-medium">Hours: Monday – Friday</p>
                <p>9:00am – 5:00pm EAT</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 mb-16 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JIM_5974-aj9zCmAMde1I0aBluyhghD6hSoSaiH.jpg"
              alt="Wedding Photography"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div>
                <Label className="font-medium text-gray-800 text-sm">Your Name *</Label>
                <Input
                  placeholder="Your and Your Love's Names"
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">Email Address *</Label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">Phone Number</Label>
                <Input
                  placeholder="Your Phone Number"
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">What service are you inquiring about? *</Label>
                <select className="mt-2 w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:outline-none">
                  <option value="">Select a service</option>
                  <option value="photography">Wedding Photography</option>
                  <option value="videography">Videography</option>
                  <option value="both">Photography & Videography</option>
                </select>
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">Wedding Date</Label>
                <Input
                  type="date"
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">Wedding Location</Label>
                <Input
                  placeholder="Wedding Location"
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">Guest Count</Label>
                <Input
                  placeholder="Guest Count"
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0"
                />
              </div>

              <div>
                <Label className="font-medium text-gray-800 text-sm">Tell us more about your wedding *</Label>
                <Textarea
                  placeholder="Share your wedding story, location and what film coverage you want..."
                  className="mt-2 border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-gray-900 placeholder-gray-500 focus:border-gray-600 focus:ring-0 min-h-24 resize-none"
                />
              </div>
            </div>

            {/* Schedule a Call Section */}
            <div className="mt-12 pt-8 border-t border-gray-400">
              <h3 className="font-serif text-2xl font-bold text-black mb-2">Schedule a call</h3>
              <p className="text-sm text-gray-600 mb-6">
                Pick your preferred day and time and we'll confirm by email.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <div className="bg-white p-4 rounded">
                    <div className="mb-4 flex items-center justify-between">
                      <button className="text-gray-600 hover:text-gray-900">&lt;</button>
                      <h4 className="font-medium text-gray-900">
                        {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                      </h4>
                      <button className="text-gray-600 hover:text-gray-900">&gt;</button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-600 mb-2">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                        <div key={d}>{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {emptyDays.map((_, i) => (
                        <div key={`empty-${i}`}></div>
                      ))}
                      {days.map((day) => (
                        <button
                          key={day}
                          onClick={() =>
                            setSelectedDate(
                              `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                            )
                          }
                          className={`py-1 rounded text-sm ${
                            selectedDate?.includes(`-${String(day).padStart(2, "0")}`)
                              ? "bg-gray-900 text-white"
                              : "text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-xs">
                    <button className="text-gray-600 hover:text-gray-900 underline">RESET</button>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <p className="text-sm font-medium text-gray-800 mb-4 uppercase tracking-wide">Pick a Time</p>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded border text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? "bg-gray-900 text-white border-gray-900"
                            : "border-gray-400 text-gray-900 hover:border-gray-900"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTime && (
                    <button className="mt-6 w-full py-3 px-4 bg-gray-900 text-white rounded text-sm font-medium hover:bg-black">
                      CONFIRM SLOT
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 pt-8 border-t border-gray-400">
              <Button className="text-black bg-transparent hover:bg-gray-200 underline px-0 py-2 h-auto font-medium text-sm">
                SUBMIT FORM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
