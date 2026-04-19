'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/data/products'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={cn(
              'object-cover transition-all duration-500',
              isHovered ? 'scale-105' : 'scale-100'
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Second image on hover */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              className={cn(
                'absolute inset-0 object-cover transition-opacity duration-500',
                isHovered ? 'opacity-100' : 'opacity-0'
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isBestseller && (
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Bestseller
              </span>
            )}
            {product.isNew && (
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="rounded-full bg-destructive/90 px-3 py-1 text-xs font-medium text-white">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm transition-all',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
          >
            <Heart
              className={cn(
                'h-4 w-4 transition-colors',
                isWishlisted ? 'fill-destructive text-destructive' : ''
              )}
            />
          </Button>

          {/* Quick view overlay */}
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 p-4 transition-all duration-300',
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <Button className="w-full" variant="secondary">
              Quick View
            </Button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-3.5 w-3.5',
                    i < Math.floor(product.rating)
                      ? 'fill-secondary text-secondary'
                      : 'fill-muted text-muted'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <h3 className="font-medium text-foreground group-hover:text-secondary transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color options */}
          <div className="flex items-center gap-2 pt-1">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                className="h-4 w-4 rounded-full border border-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
