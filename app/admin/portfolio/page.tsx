import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"
import { PortfolioList } from "@/components/admin/PortfolioList"

export default async function AdminPortfolio() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: items } = await supabase.from("portfolio_items").select("*").order("display_order", { ascending: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
                Portfolio Management
              </h1>
              <p className="text-stone-600 mt-1">
                Add and manage photos from weddings, retreats, nature, corporate events, and more
              </p>
            </div>
          </div>
          <Link href="/admin/portfolio/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Photo
            </Button>
          </Link>
        </div>

        <PortfolioList items={items || []} />
      </div>
    </div>
  )
}
