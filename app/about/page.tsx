import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Adham — our story, craftsmanship, and commitment to creating premium leather goods that last a lifetime.',
  openGraph: {
    title: 'About Us | Adham',
    description: 'Learn about Adham and our commitment to premium leather craftsmanship.',
  },
}

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on materials or construction. Every piece is made from full-grain leather and built to last generations.',
  },
  {
    title: 'Timeless Design',
    description: 'Our designs are classic, not trendy. We create pieces that look better with age and never go out of style.',
  },
  {
    title: 'Sustainable Craft',
    description: 'We partner with tanneries that prioritize sustainable practices and source leather as a byproduct of the food industry.',
  },
  {
    title: 'Fair Production',
    description: 'Our artisans work in safe conditions with fair wages. We believe quality craftsmanship deserves quality treatment.',
  },
]

const timeline = [
  {
    year: '2015',
    title: 'The Beginning',
    description: 'Founded in a small workshop in Portland with a commitment to reviving traditional leather craftsmanship.',
  },
  {
    year: '2017',
    title: 'First Collection',
    description: 'Launched our iconic Captain Boot, which quickly became a bestseller and established our reputation for quality.',
  },
  {
    year: '2019',
    title: 'Expansion',
    description: 'Opened our own manufacturing facility, allowing us to control every step of the production process.',
  },
  {
    year: '2022',
    title: 'Growing Family',
    description: 'Reached 100,000 customers worldwide and expanded our product line to include bags and accessories.',
  },
  {
    year: '2024',
    title: 'Looking Forward',
    description: 'Continuing to innovate while staying true to our roots of quality, craftsmanship, and timeless design.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero section */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-medium tracking-widest text-secondary uppercase">
                Our Story
              </span>
              <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl text-balance">
                Crafted with Purpose, Built to Last
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Adham was born from a simple belief: that the things we carry
                should be made to last. In a world of fast fashion and disposable
                goods, we chose a different path.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Every stitch, every cut, every piece of hardware is chosen with
                intention. We work with master craftsmen who share our passion for
                quality, using techniques passed down through generations.
              </p>
              <div className="mt-8">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/collections">
                    Shop Our Collection
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
                alt="Leather craftsman at work"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 lg:py-28 bg-muted/30" id="story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium tracking-widest text-secondary uppercase">
              What We Believe
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <CheckCircle2 className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-medium tracking-widest text-secondary uppercase">
                The Process
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                From Tannery to Your Doorstep
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our leather is sourced from select tanneries that share our
                commitment to quality and sustainability. We use only full-grain
                leather, the highest grade available, which develops a beautiful
                patina over time.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Each piece is cut by hand, stitched with precision, and finished
                with care. Our craftsmen take pride in their work, knowing that
                every item they create will be cherished for years to come.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Full-grain leather from premium tanneries',
                  'Hand-cut by experienced craftsmen',
                  'Goodyear welt construction on all boots',
                  'Solid brass hardware throughout',
                  'Individually inspected before shipping',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80"
                    alt="Leather crafting detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80"
                    alt="Finished leather boots"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
                    alt="Leather bag crafting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80"
                    alt="Finished leather bag"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium tracking-widest text-secondary uppercase">
              Our Journey
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Building Adham
            </h2>
          </div>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row lg:items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="font-serif text-4xl font-bold text-secondary">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex h-4 w-4 rounded-full bg-secondary flex-shrink-0" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of customers who have discovered the quality and
            craftsmanship of Adham.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/collections">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
