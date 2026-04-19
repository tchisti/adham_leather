'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ProductCard } from '@/components/product/product-card'
import { products, collections } from '@/lib/data/products'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const priceRanges = [
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $250', min: 100, max: 250 },
  { label: '$250 - $400', min: 250, max: 400 },
  { label: 'Over $400', min: 400, max: Infinity },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

export function CollectionsPageClient() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      )
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some((rangeIndex) => {
          const range = priceRanges[rangeIndex]
          return product.price >= range.min && product.price < range.max
        })
      )
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'bestselling':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
    }

    return filtered
  }, [selectedCategories, selectedPriceRanges, sortBy])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const togglePriceRange = (index: number) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPriceRanges([])
  }

  const activeFilterCount = selectedCategories.length + selectedPriceRanges.length

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {collections.map((collection) => (
            <div key={collection.id} className="flex items-center gap-3">
              <Checkbox
                id={`category-${collection.slug}`}
                checked={selectedCategories.includes(collection.name)}
                onCheckedChange={() => toggleCategory(collection.name)}
              />
              <label
                htmlFor={`category-${collection.slug}`}
                className="text-sm cursor-pointer"
              >
                {collection.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price ranges */}
      <div>
        <h3 className="font-semibold mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range, index) => (
            <div key={range.label} className="flex items-center gap-3">
              <Checkbox
                id={`price-${index}`}
                checked={selectedPriceRanges.includes(index)}
                onCheckedChange={() => togglePriceRange(index)}
              />
              <label
                htmlFor={`price-${index}`}
                className="text-sm cursor-pointer"
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="pt-20 lg:pt-24">
      {/* Page header */}
      <div className="bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Shop All Products
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of handcrafted leather goods,
              each piece made with the finest full-grain leather.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </p>

            {/* Active filters */}
            {activeFilterCount > 0 && (
              <div className="hidden sm:flex items-center gap-2">
                {selectedCategories.map((category) => (
                  <Button
                    key={category}
                    variant="secondary"
                    size="sm"
                    className="h-7 gap-1"
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                    <X className="h-3 w-3" />
                  </Button>
                ))}
                {selectedPriceRanges.map((index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    size="sm"
                    className="h-7 gap-1"
                    onClick={() => togglePriceRange(index)}
                  >
                    {priceRanges[index].label}
                    <X className="h-3 w-3" />
                  </Button>
                ))}
              </div>
            )}
          </div>

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

        <div className="flex gap-12">
          {/* Desktop sidebar filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">
                  No products match your filters.
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* SEO text */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="font-serif text-2xl font-semibold">
            Premium Leather Goods Collection
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Explore our complete collection of handcrafted leather goods. From
            classic leather boots built with Goodyear welt construction to
            timeless messenger bags and premium accessories, each piece is
            crafted from full-grain leather and designed to last a lifetime.
            Our artisans use traditional techniques combined with modern quality
            standards to create products that age beautifully and become more
            personal with time.
          </p>
        </div>
      </div>
    </div>
  )
}
