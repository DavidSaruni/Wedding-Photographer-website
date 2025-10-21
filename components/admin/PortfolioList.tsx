"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { useState } from "react"

interface PortfolioItem {
  id: string
  title: string
  description: string | null
  image_url: string
  category: string
  display_order: number
}

export function PortfolioList({ items }: { items: PortfolioItem[] }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return

    setDeleting(id)
    const supabase = createClient()
    const { error } = await supabase.from("portfolio_items").delete().eq("id", id)

    if (error) {
      alert("Error deleting item: " + error.message)
    } else {
      router.refresh()
    }
    setDeleting(null)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image src={item.image_url || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-stone-600 mb-2">{item.category}</p>
            {item.description && <p className="text-sm text-stone-500 mb-4 line-clamp-2">{item.description}</p>}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent"
                onClick={() => router.push(`/admin/portfolio/${item.id}`)}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(item.id)}
                disabled={deleting === item.id}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
