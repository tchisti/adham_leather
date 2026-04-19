'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  'Full-grain leather sourced from premium tanneries',
  'Hand-stitched details using waxed thread',
  'Goodyear welt construction for resoling',
  'Solid brass hardware that ages beautifully',
  'Each piece inspected by master craftsmen',
]

export function CraftsmanshipSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"
                  alt="Leather craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80"
                  alt="Leather wallet detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
                  alt="Leather bag"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80"
                  alt="Leather boots"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest text-secondary uppercase">
              Our Craft
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance">
              Built to Last Generations
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe in creating products that stand the test of time. Each
              piece is handcrafted by skilled artisans using traditional
              techniques passed down through generations, combined with modern
              quality standards.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary mt-0.5" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/about">
                  Learn Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
