import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortfolioForm } from "@/components/admin/PortfolioForm"

export default async function NewPortfolioItem() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto p-6 max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/portfolio">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
              Add Portfolio Item
            </h1>
            <p className="text-stone-600 mt-1">Upload a new wedding photo</p>
          </div>
        </div>

        <PortfolioForm />
      </div>
    </div>
  )
}
