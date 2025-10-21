"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { createBrowserClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

type Testimonial = {
  id: string
  name: string
  role: string
  content: string
  image_url: string | null
  rating: number
  created_at: string
}

export default function TestimonialsList({ testimonials }: { testimonials: Testimonial[] }) {
  const router = useRouter()
  const supabase = createBrowserClient()
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return

    setDeleting(id)
    const { error } = await supabase.from("testimonials").delete().eq("id", id)

    if (error) {
      alert("Error deleting testimonial: " + error.message)
    } else {
      router.refresh()
    }
    setDeleting(null)
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-stone-600 mb-4">No testimonials yet</p>
        <Button asChild className="bg-amber-700 hover:bg-amber-800">
          <a href="/admin/testimonials/new">Add Your First Testimonial</a>
        </Button>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Content Preview</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {testimonials.map((testimonial) => (
          <TableRow key={testimonial.id}>
            <TableCell className="font-medium">{testimonial.name}</TableCell>
            <TableCell>{testimonial.role}</TableCell>
            <TableCell>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-500">
                    ★
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell className="max-w-md truncate">{testimonial.content}</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(testimonial.id)}
                disabled={deleting === testimonial.id}
              >
                {deleting === testimonial.id ? "Deleting..." : "Delete"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
