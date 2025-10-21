import { createServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialsList from "@/components/admin/TestimonialsList"

export default async function AdminTestimonialsPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="text-2xl font-serif font-bold text-stone-900">
              Admin Dashboard
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-stone-600 hover:text-stone-900">
                View Site
              </Link>
              <form action="/auth/logout" method="post">
                <Button variant="outline" type="submit">
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/admin" className="text-amber-700 hover:text-amber-800 mb-4 inline-block">
            ← Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Manage Testimonials</h1>
              <p className="text-stone-600">Add, edit, or remove client testimonials</p>
            </div>
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link href="/admin/testimonials/new">Add New Testimonial</Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Testimonials</CardTitle>
          </CardHeader>
          <CardContent>
            <TestimonialsList testimonials={testimonials || []} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
