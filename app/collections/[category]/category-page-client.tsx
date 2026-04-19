'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/product-card'
import type { Collection, Product } from '@/lib/data/products'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

interface CategoryPageClientProps {
  collection: Collection
  products: Product[]
}

export function CategoryPageClient({
  collection,
  products,
}: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState('featured')

  const sortedProducts = useMemo(() => {
    const sorted = [...products]

    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'bestselling':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'newest':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
    }

    return sorted
  }, [products, sortBy])

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero banner */}
      <div className="relative h-64 lg:h-80">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/collections"
              className="hover:text-white transition-colors"
            >
              Collections
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{collection.name}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
          >
            {collection.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/90 max-w-2xl"
          >
            {collection.description}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            {sortedProducts.length} products
          </p>

          {/* Sort dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Sort: {sortOptions.find((o) => o.value === sortBy)?.label}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              No products in this collection yet.
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/collections">Browse All Products</Link>
            </Button>
          </div>
        )}

        {/* SEO text */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="font-serif text-2xl font-semibold">
            Premium Leather {collection.name}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            {collection.description} Each piece in our {collection.name.toLowerCase()}{' '}
            collection is handcrafted from full-grain leather by skilled artisans
            using traditional techniques. We use only the finest materials and
            construction methods to ensure your purchase lasts a lifetime.
          </p>
        </div>
      </div>
    </div>
  )
}
