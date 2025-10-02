import { notFound } from "next/navigation"
import { getPostBySlug, devotionalPosts } from "@/lib/devotionals-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

// Add generateMetadata function for dynamic titles
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Find the post directly from the devotionalPosts array
    const post = devotionalPosts.find(
      (p) => p.slug === params.slug && p.category === "Blog"
    )
    
    if (!post) {
      return {
        title: 'Blog Post Not Found - @SDAMTC'
      }
    }

    return {
      title: `${post.title} - @SDAMTC`,
      description: post.excerpt,
    }
  } catch (error) {
    return {
      title: 'Blog - @SDAMTC'
    }
  }
}

export async function generateStaticParams() {
  return devotionalPosts
    .filter((post) => post.category === "Blog")
    .map((post) => ({
      slug: post.slug,
    }))
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post || post.category !== "Blog") {
    notFound()
  }

  return (
    <div className="lg:pr-[14.28%]">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/#weekly-inspiration">
          <Button variant="ghost" className="mb-6 hover:bg-muted">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <Badge className="bg-blue-600 text-white mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6 text-pretty">{post.excerpt}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/#weekly-inspiration">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Messages
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Leave a Comment</Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
