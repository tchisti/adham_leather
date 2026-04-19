'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  Star,
  Minus,
  Plus,
  Heart,
  Truck,
  Shield,
  RefreshCw,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { ProductCard } from '@/components/product/product-card'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/data/products'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface ProductPageClientProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductPageClient({
  product,
  relatedProducts,
}: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, selectedColor.name, selectedSize)
  }

  return (
    <div className="pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/collections"
            className="hover:text-foreground transition-colors"
          >
            Collections
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/collections/${product.category.toLowerCase()}`}
            className="hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="space-y-4">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
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
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg transition-all',
                    selectedImage === index
                      ? 'ring-2 ring-secondary ring-offset-2'
                      : 'opacity-70 hover:opacity-100'
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-4 w-4',
                      i < Math.floor(product.rating)
                        ? 'fill-secondary text-secondary'
                        : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Title and price */}
            <h1 className="mt-4 font-serif text-3xl font-semibold lg:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Color selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <span className="font-medium">Color: {selectedColor.name}</span>
              </div>
              <div className="mt-3 flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'h-10 w-10 rounded-full transition-all',
                      selectedColor.name === color.name
                        ? 'ring-2 ring-secondary ring-offset-2'
                        : 'hover:scale-110'
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            {product.sizes && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Size</span>
                  <button className="text-sm text-secondary hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'min-w-12 rounded-lg border px-4 py-2 text-sm font-medium transition-all',
                        selectedSize === size
                          ? 'border-secondary bg-secondary text-secondary-foreground'
                          : 'border-border hover:border-secondary'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-medium">Quantity</span>
              <div className="mt-3 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>

                {product.stock < 10 && (
                  <span className="text-sm text-destructive">
                    Only {product.stock} left in stock
                  </span>
                )}
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="flex-1 text-base" onClick={handleAddToCart}>
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart
                  className={cn(
                    'h-5 w-5',
                    isWishlisted ? 'fill-destructive text-destructive' : ''
                  )}
                />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl border border-border p-4">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="mt-2 text-xs">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="mt-2 text-xs">1-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="h-5 w-5 text-secondary" />
                <span className="mt-2 text-xs">Easy Returns</span>
              </div>
            </div>

            {/* Key features */}
            <div className="mt-8">
              <h3 className="font-medium">Key Features</h3>
              <ul className="mt-3 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Materials</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {product.materials}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Care Instructions</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {product.care}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Free shipping</strong>{' '}
                      on all orders over $100. Standard shipping takes 3-5
                      business days.
                    </p>
                    <p>
                      <strong className="text-foreground">Easy returns</strong>{' '}
                      within 30 days of purchase. Items must be unworn and in
                      original packaging.
                    </p>
                    <p>
                      <strong className="text-foreground">1-year warranty</strong>{' '}
                      covers manufacturing defects. We stand behind our
                      craftsmanship.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl font-semibold lg:text-3xl">
              You May Also Like
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
