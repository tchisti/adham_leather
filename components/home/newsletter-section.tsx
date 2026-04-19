'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&q=80"
          alt="Leather goods background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-medium tracking-widest text-secondary uppercase">
            Join the Family
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl text-balance">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Subscribe to our newsletter for exclusive offers, early access to new
            arrivals, and leather care tips from our craftsmen.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <CheckCircle2 className="h-8 w-8 text-secondary-foreground" />
              </div>
              <p className="mt-4 text-lg font-medium text-white">
                Welcome to the Heritage family!
              </p>
              <p className="text-white/70">
                Check your email for your discount code.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-secondary focus:ring-secondary"
              />
              <Button type="submit" className="gap-2" size="lg">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/60">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
