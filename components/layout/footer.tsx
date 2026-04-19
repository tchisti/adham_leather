'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/brand/logo'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/collections' },
    { name: 'Boots', href: '/collections/boots' },
    { name: 'Jackets', href: '/collections/jackets' },
    { name: 'Bags', href: '/collections/bags' },
    { name: 'Accessories', href: '/collections/accessories' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  support: [
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'Care Guide', href: '/care-guide' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Warranty', href: '/warranty' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      {/* Newsletter section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl font-semibold">
              Join the Adham Circle
            </h3>
            <p className="mt-2 text-muted-foreground">
              Subscribe for exclusive offers and 10% off your first order.
            </p>
          </div>

          {isSubscribed ? (
            <div className="text-center">
              <p className="font-medium text-secondary">
                Thank you for subscribing!
              </p>
              <p className="text-sm text-muted-foreground">
                Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background"
              />
              <Button type="submit" className="gap-2">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                Premium, handcrafted leather goods made from full-grain leather.
                Built to last a lifetime.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Shop links */}
            <div>
              <h4 className="font-semibold">Shop</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="font-semibold">Support</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Adham. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
