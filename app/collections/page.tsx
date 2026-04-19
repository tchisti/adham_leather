import { Metadata } from 'next'
import { CollectionsPageClient } from './collections-page-client'

export const metadata: Metadata = {
  title: 'Shop All Collections',
  description: 'Explore our curated collections of premium leather goods. Handcrafted boots, jackets, bags, and accessories made from full-grain leather.',
  openGraph: {
    title: 'Shop All Collections | Adham',
    description: 'Explore our curated collections of premium leather goods.',
  },
}

export default function CollectionsPage() {
  return <CollectionsPageClient />
}
