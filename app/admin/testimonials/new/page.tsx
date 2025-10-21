import { createServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialForm from "@/components/admin/TestimonialForm"

export default async function NewTestimonialPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

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

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/admin/testimonials" className="text-amber-700 hover:text-amber-800 mb-4 inline-block">
            ← Back to Testimonials
          </Link>
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Add New Testimonial</h1>
          <p className="text-stone-600">Create a new client testimonial</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Testimonial Details</CardTitle>
          </CardHeader>
          <CardContent>
            <TestimonialForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
