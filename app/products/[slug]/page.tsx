import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPageClient } from './product-page-client'
import { products, getProductBySlug } from '@/lib/data/products'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Heritage Leather Co.`,
      description: product.shortDescription,
      images: product.images.map((image) => ({ url: image })),
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return <ProductPageClient product={product} relatedProducts={relatedProducts} />
}
