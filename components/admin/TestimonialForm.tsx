"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createBrowserClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function TestimonialForm() {
  const router = useRouter()
  const supabase = createBrowserClient()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    image_url: "",
    rating: 5,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("testimonials").insert([formData])

    if (error) {
      alert("Error creating testimonial: " + error.message)
      setLoading(false)
    } else {
      router.push("/admin/testimonials")
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Client Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g., Sarah & Michael"
          required
        />
      </div>

      <div>
        <Label htmlFor="role">Event Details *</Label>
        <Input
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          placeholder="e.g., Nairobi Wedding, 2024"
          required
        />
      </div>

      <div>
        <Label htmlFor="content">Testimonial Content *</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Enter the client's testimonial..."
          rows={6}
          required
        />
      </div>

      <div>
        <Label htmlFor="image_url">Image URL (optional)</Label>
        <Input
          id="image_url"
          type="url"
          value={formData.image_url}
          onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
        <p className="text-sm text-stone-500 mt-1">Add a photo of the couple or event</p>
      </div>

      <div>
        <Label htmlFor="rating">Rating *</Label>
        <Select
          value={formData.rating.toString()}
          onValueChange={(value) => setFormData({ ...formData, rating: Number.parseInt(value) })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 Stars ★★★★★</SelectItem>
            <SelectItem value="4">4 Stars ★★★★</SelectItem>
            <SelectItem value="3">3 Stars ★★★</SelectItem>
            <SelectItem value="2">2 Stars ★★</SelectItem>
            <SelectItem value="1">1 Star ★</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading} className="bg-amber-700 hover:bg-amber-800">
          {loading ? "Creating..." : "Create Testimonial"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
