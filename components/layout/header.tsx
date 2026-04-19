'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, User, Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { Logo } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Shop', href: '/collections' },
  { name: 'Men', href: '/collections/men' },
  { name: 'Women', href: '/collections/women' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { totalItems, openCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-secondary',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                  {(pathname === item.href || pathname.startsWith(item.href + '/')) && (
                    <motion.span
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-x-2 lg:gap-x-4">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>

              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              <Button variant="ghost" size="icon" asChild aria-label="Account">
                <Link href="/account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={openCart}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-background lg:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer />
    </>
  )
}
