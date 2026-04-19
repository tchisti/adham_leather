'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="font-serif text-xl font-semibold">Your Cart</h2>
              <Button variant="ghost" size="icon" onClick={closeCart}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
                  <h3 className="mt-4 font-serif text-lg font-semibold">
                    Your cart is empty
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Add some beautiful leather goods to get started.
                  </p>
                  <Button onClick={closeCart} className="mt-6" asChild>
                    <Link href="/collections">
                      Continue Shopping
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {items.map((item) => (
                    <motion.li
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="px-6 py-4"
                    >
                      <div className="flex gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">
                                <Link
                                  href={`/products/${item.product.slug}`}
                                  onClick={closeCart}
                                  className="hover:text-secondary transition-colors"
                                >
                                  {item.product.name}
                                </Link>
                              </h3>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.selectedColor}
                                {item.selectedSize && ` / ${item.selectedSize}`}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                removeItem(
                                  item.product.id,
                                  item.selectedColor,
                                  item.selectedSize
                                )
                              }
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedColor,
                                    item.quantity - 1,
                                    item.selectedSize
                                  )
                                }
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.selectedColor,
                                    item.quantity + 1,
                                    item.selectedSize
                                  )
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="font-medium">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-serif text-xl font-semibold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={closeCart}
                    asChild
                  >
                    <Link href="/collections">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
