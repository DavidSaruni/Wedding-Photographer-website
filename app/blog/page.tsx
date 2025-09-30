import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "This Wedding Was More Than a Ceremony — It Was a Whole Vibe",
    excerpt: "Some weddings are just planned. Others are lived. This one was felt.",
    date: "March 15, 2024",
    image: "/wedding-photography-portfolio-image-.jpg?height=300&width=400&query=naivasha wedding ceremony sunset",
    content: `Some weddings are just planned. Others are lived. This one was felt.

From the bride's prep in a sun-drenched Airbnb to the couple's vows under the Naivasha sky, every frame felt like part of a cinematic reel. And our team? We were everywhere — but never in the way.

We don't just document love stories. We flow with them. We breathe with them. And this one reminded us why we do what we do.

The morning started with golden light streaming through vintage windows as Sarah got ready with her closest friends. There's something magical about those quiet moments before the ceremony — the nervous laughter, the careful application of lipstick, the way a mother's hands shake slightly as she fastens her daughter's necklace.

By afternoon, the entire wedding party had moved to the shores of Lake Naivasha. The ceremony was intimate, with only 50 guests, but the emotion was enormous. When David saw Sarah walking down the aisle, the look on his face — that's the moment we live for as photographers.

The reception flowed seamlessly from golden hour portraits to dancing under string lights. Our drone captured the couple's first dance from above, while our ground team focused on the tears of joy from family members.

This is why we do what we do. Not just to take photos, but to preserve the feeling of a day that will never come again.`,
  },
  {
    id: 2,
    title: "Behind the Scenes: What Makes a Wedding Film Cinematic",
    excerpt: "The difference between a wedding video and a wedding film lies in the storytelling.",
    date: "March 8, 2024",
    image:
      "/photographer-with-camera-at-wedding-behind-the-sce.jpg?height=300&width=400&query=wedding videographer behind the scenes",
    content: `The difference between a wedding video and a wedding film lies in the storytelling.

Every couple deserves more than just documentation — they deserve a film that captures the essence of their love story. Here's how we approach cinematic wedding filmmaking at Kaplong Creative.

It starts with understanding the couple's story before we even pick up a camera. What brought them together? What are their quirks? How do they laugh together? These details inform every shot we take.

On the wedding day, we're not just recording events — we're crafting a narrative. The way morning light hits the wedding dress. The father's hands as he adjusts his tie. The quiet moment between the couple before they see their guests.

Our editing process is where the magic really happens. We carefully select moments that tell the complete story, from the anticipation of getting ready to the joy of the celebration. Every cut, every transition, every piece of music is chosen to enhance the emotional journey.

The result? A film that doesn't just show what happened, but makes you feel what it was like to be there.`,
  },
  {
    id: 3,
    title: "Best Time for Bridal Portraits: A Photographer's Guide",
    excerpt: "Timing is everything when it comes to capturing stunning bridal portraits.",
    date: "February 28, 2024",
    image:
      "/elegant-wedding-photography-hero-image-with-bride-.jpg?height=300&width=400&query=bridal portrait golden hour",
    content: `Timing is everything when it comes to capturing stunning bridal portraits.

As wedding photographers, we're often asked: "When is the best time for bridal portraits?" The answer isn't just about light — it's about emotion, energy, and the flow of your wedding day.

**The Golden Hour Magic**
There's a reason photographers obsess over golden hour. That warm, soft light that occurs an hour before sunset creates the most flattering, romantic portraits. Your skin glows, your dress catches the light beautifully, and the background becomes a dreamy blur.

**Morning Light for Intimate Moments**
Don't overlook morning light for getting-ready shots and intimate bridal portraits. The soft, even light streaming through windows creates a timeless, editorial feel that's perfect for those quiet, contemplative moments.

**The Blue Hour for Drama**
Just after sunset, during blue hour, we can create dramatic, magazine-worthy portraits using off-camera lighting. The sky becomes a beautiful gradient backdrop while we light you to perfection.

**Practical Considerations**
- Schedule portraits when you're feeling your best
- Consider your makeup timeline
- Think about your dress and how it photographs in different light
- Don't forget about your partner — couple portraits are just as important

Remember, the best time for your portraits is when you feel confident, relaxed, and ready to be photographed. Everything else, we can work with.`,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold text-stone-900">
              Kaplong Creative
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-stone-700 hover:text-stone-900 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-stone-700 hover:text-stone-900 transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="text-stone-700 hover:text-stone-900 transition-colors">
                Services
              </Link>
              <Link href="/testimonials" className="text-stone-700 hover:text-stone-900 transition-colors">
                Testimonials
              </Link>
              <Link href="/blog" className="text-stone-700 hover:text-stone-900 transition-colors font-semibold">
                Journal
              </Link>
              <Link href="/contact" className="text-stone-700 hover:text-stone-900 transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="bg-stone-900 hover:bg-stone-800">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6">Journal</h1>
            <p className="text-xl text-stone-600 text-pretty">
              Real wedding stories, behind-the-scenes insights, and faith reflections from our photography journey
            </p>
          </div>

          {/* Featured Post */}
          <Card className="border-stone-200 mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="text-sm text-stone-500">{blogPosts[0].date}</div>
                  <h2 className="text-2xl font-serif font-bold text-stone-900">{blogPosts[0].title}</h2>
                  <p className="text-stone-600 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent w-fit"
                  >
                    <Link href={`/blog/${blogPosts[0].id}`}>Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-stone-200">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="text-sm text-stone-500">{post.date}</div>
                    <h3 className="text-xl font-serif font-semibold text-stone-900">{post.title}</h3>
                    <p className="text-stone-600">{post.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
                    >
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-stone-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Stay Connected</h2>
            <p className="text-stone-300 mb-6">
              Get the latest wedding stories, photography tips, and behind-the-scenes insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg text-stone-900"
              />
              <Button variant="secondary" className="bg-white text-stone-900 hover:bg-stone-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
