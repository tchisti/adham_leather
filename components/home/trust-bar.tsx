'use client'

import { motion } from 'framer-motion'
import { Shield, Truck, RefreshCw, Award } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Full Grain Leather',
    description: 'Highest quality leather',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $100',
  },
  {
    icon: Shield,
    title: '1-Year Warranty',
    description: 'Craftsmanship guaranteed',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4 lg:py-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-3 font-medium">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
