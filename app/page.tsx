import { HeroSection } from '@/components/home/hero-section'
import { TrustBar } from '@/components/home/trust-bar'
import { FeaturedCollections } from '@/components/home/featured-collections'
import { Bestsellers } from '@/components/home/bestsellers'
import { CraftsmanshipSection } from '@/components/home/craftsmanship-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { NewsletterSection } from '@/components/home/newsletter-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedCollections />
      <Bestsellers />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
