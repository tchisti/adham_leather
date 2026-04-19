'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Product } from './data/products'

export interface CartItem {
  product: Product
  quantity: number
  selectedColor: string
  selectedSize?: string
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (product: Product, color: string, size?: string) => void
  removeItem: (productId: string, color: string, size?: string) => void
  updateQuantity: (productId: string, color: string, quantity: number, size?: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const addItem = useCallback((product: Product, color: string, size?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      )

      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += 1
        return updated
      }

      return [...prev, { product, quantity: 1, selectedColor: color, selectedSize: size }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: string, color: string, size?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.product.id === productId &&
            item.selectedColor === color &&
            item.selectedSize === size)
      )
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: string, color: string, quantity: number, size?: string) => {
      if (quantity < 1) {
        removeItem(productId, color, size)
        return
      }

      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId &&
          item.selectedColor === color &&
          item.selectedSize === size
            ? { ...item, quantity }
            : item
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
