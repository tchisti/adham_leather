import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Heritage Leather Co.`,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="pt-20 lg:pt-24">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mt-8">
          <span className="text-sm font-medium text-secondary">
            {post.category}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <span className="font-medium text-foreground">HT</span>
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="mt-12 prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">
            {post.excerpt}
          </p>

          <h2>Introduction</h2>
          <p>
            Quality leather goods are an investment that can last a lifetime when
            properly cared for. Whether you&apos;ve just purchased your first pair of
            leather boots or you&apos;re looking to extend the life of a cherished bag,
            understanding the basics of leather care is essential.
          </p>

          <h2>Understanding Your Leather</h2>
          <p>
            Not all leather is created equal. Full-grain leather, which we use
            exclusively at Heritage Leather Co., is the highest quality leather
            available. It includes the entire grain surface, which has not been
            sanded, buffed, or snuffed to remove imperfections.
          </p>
          <p>
            This type of leather develops a beautiful patina over time, becoming
            more personal and unique with each passing year. The natural oils in
            the leather and the way it interacts with your environment create a
            finish that&apos;s truly one-of-a-kind.
          </p>

          <h2>Essential Care Tips</h2>
          <h3>Regular Conditioning</h3>
          <p>
            Leather needs moisture to stay supple and prevent cracking. Apply a
            quality leather conditioner every 3-6 months, depending on how often
            you use the item and the climate you live in. Work the conditioner
            into the leather with a soft cloth, using circular motions.
          </p>

          <h3>Proper Storage</h3>
          <p>
            Store leather items away from direct sunlight and heat sources, which
            can cause fading and drying. For boots, use cedar shoe trees to
            maintain their shape and absorb moisture. Bags should be stuffed with
            tissue paper and stored in dust bags.
          </p>

          <h3>Dealing with Water</h3>
          <p>
            If your leather gets wet, let it dry naturally away from heat sources.
            Once dry, apply conditioner to restore moisture. For added protection,
            consider applying a water-resistant spray designed for leather.
          </p>

          <h2>Conclusion</h2>
          <p>
            Taking care of your leather goods doesn&apos;t have to be complicated. With
            regular conditioning, proper storage, and attention to detail, your
            Heritage Leather Co. products will serve you well for decades to come.
          </p>
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
          <span className="font-medium">Share this article</span>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold">
              Continue Reading
            </h2>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="flex gap-6">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-secondary">
                        {relatedPost.category}
                      </span>
                      <h3 className="mt-1 font-medium group-hover:text-secondary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
