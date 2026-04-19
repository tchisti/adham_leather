import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CategoryPageClient } from './category-page-client'
import { collections, getProductsByCategory } from '@/lib/data/products'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const collection = collections.find((c) => c.slug === category)

  if (!collection) {
    return {
      title: 'Collection Not Found',
    }
  }

  return {
    title: `${collection.name} Collection`,
    description: collection.description,
    openGraph: {
      title: `${collection.name} Collection | Adham`,
      description: collection.description,
      images: [{ url: collection.image }],
    },
  }
}

export async function generateStaticParams() {
  return collections.map((collection) => ({
    category: collection.slug,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const collection = collections.find((c) => c.slug === category)

  if (!collection) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(collection.name)

  return (
    <CategoryPageClient collection={collection} products={categoryProducts} />
  )
}
