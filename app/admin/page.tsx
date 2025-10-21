import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Camera, FileText, MessageSquare, Settings, ImageIcon, LogOut } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Get counts
  const { count: portfolioCount } = await supabase.from("portfolio_items").select("*", { count: "exact", head: true })

  const { count: servicesCount } = await supabase.from("services").select("*", { count: "exact", head: true })

  const { count: testimonialsCount } = await supabase.from("testimonials").select("*", { count: "exact", head: true })

  const { count: blogCount } = await supabase.from("blog_posts").select("*", { count: "exact", head: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-stone-600">Manage your website content</p>
          </div>
          <form action="/auth/logout" method="post">
            <Button variant="outline" type="submit">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Items</CardTitle>
              <ImageIcon className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioCount || 0}</div>
              <p className="text-xs text-stone-600">Total photos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Services</CardTitle>
              <Camera className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{servicesCount || 0}</div>
              <p className="text-xs text-stone-600">Active packages</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
              <MessageSquare className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{testimonialsCount || 0}</div>
              <p className="text-xs text-stone-600">Client reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{blogCount || 0}</div>
              <p className="text-xs text-stone-600">Published articles</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/admin/portfolio">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <ImageIcon className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Manage your wedding photography portfolio</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/services">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Camera className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Services</CardTitle>
                <CardDescription>Update your photography packages and pricing</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/testimonials">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Testimonials</CardTitle>
                <CardDescription>Manage client reviews and feedback</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/blog">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <FileText className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>Create and edit blog articles</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/content">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Settings className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Site Content</CardTitle>
                <CardDescription>Edit homepage and about page content</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
