'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/lib/data/products'

export function FeaturedCollections() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-medium tracking-widest text-secondary uppercase">
            Collections
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance">
            Shop by Category
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of premium leather goods, each piece
            crafted with the finest materials and attention to detail.
          </p>
        </motion.div>

        {/* Collections grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/collections/${collection.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {collection.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      {collection.productCount} products
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm font-medium text-white">
                      Shop Collection
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
