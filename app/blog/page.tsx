import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/data/products'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Discover leather care tips, style guides, and expert advice from Adham. Learn how to care for your leather goods and make informed purchasing decisions.',
  openGraph: {
    title: 'Blog | Adham',
    description: 'Leather care tips, style guides, and expert advice.',
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium tracking-widest text-secondary uppercase">
            The Journal
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Leather Care & Style Guide
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Expert advice on caring for your leather goods, style inspiration,
            and insights into the world of premium craftsmanship.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Featured post */}
        <Link href={`/blog/${featuredPost.slug}`} className="group block">
          <article className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                  Featured
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm font-medium text-secondary">
                {featuredPost.category}
              </span>
              <h2 className="mt-2 font-serif text-2xl font-semibold group-hover:text-secondary transition-colors sm:text-3xl lg:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:text-secondary transition-colors">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        </Link>

        {/* Other posts */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="font-serif text-2xl font-semibold">Latest Articles</h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4">
                    <span className="text-sm font-medium text-secondary">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-semibold text-lg group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-xl bg-muted/50 p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl font-semibold">
            Stay in the Know
          </h2>
          <p className="mt-2 text-muted-foreground">
            Subscribe to our newsletter for the latest articles, care tips, and
            exclusive offers.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
            >
              Subscribe Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
