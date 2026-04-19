export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  category: string
  subcategory?: string
  images: string[]
  colors: { name: string; hex: string }[]
  sizes?: string[]
  features: string[]
  materials: string
  care: string
  stock: number
  rating: number
  reviewCount: number
  isBestseller?: boolean
  isNew?: boolean
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Boots',
    slug: 'boots',
    description: 'Handcrafted leather boots built for a lifetime of adventures.',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
    productCount: 12,
  },
  {
    id: '2',
    name: 'Jackets',
    slug: 'jackets',
    description: 'Classic leather jackets that age beautifully with time.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    productCount: 8,
  },
  {
    id: '3',
    name: 'Bags',
    slug: 'bags',
    description: 'Timeless bags crafted for the modern professional.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    productCount: 15,
  },
  {
    id: '4',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Essential leather accessories for everyday carry.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    productCount: 20,
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'The Captain Boot',
    slug: 'captain-boot',
    price: 285,
    description: 'Our flagship boot, the Captain is built on a classic cap-toe design with a sleek silhouette. Made from premium full-grain leather with a Goodyear welt construction, these boots are designed to last decades with proper care. The leather insole molds to your foot over time for a custom fit, while the studded rubber outsole provides excellent traction.',
    shortDescription: 'Classic cap-toe boot crafted from premium full-grain leather.',
    category: 'Boots',
    subcategory: 'Dress Boots',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
    ],
    colors: [
      { name: 'Cognac', hex: '#8B4513' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Brown', hex: '#654321' },
    ],
    sizes: ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'],
    features: [
      'Full-grain leather upper',
      'Goodyear welt construction',
      'Leather insole & lining',
      'Studded rubber outsole',
      'Steel shank for support',
    ],
    materials: 'Full-grain leather upper, leather insole and lining, rubber outsole with steel shank.',
    care: 'Condition regularly with leather conditioner. Use cedar shoe trees when not in use. Avoid prolonged exposure to water.',
    stock: 45,
    rating: 4.9,
    reviewCount: 847,
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Aviator Leather Jacket',
    slug: 'aviator-leather-jacket',
    price: 495,
    originalPrice: 595,
    description: 'Inspired by classic aviation jackets, our Aviator is crafted from supple full-grain lambskin leather that gets better with age. Features a warm quilted lining, multiple pockets, and authentic brass hardware. The relaxed fit allows for layering while maintaining a sleek silhouette.',
    shortDescription: 'Classic aviator jacket in supple full-grain lambskin.',
    category: 'Jackets',
    subcategory: 'Casual Jackets',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Brown', hex: '#654321' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: [
      'Full-grain lambskin leather',
      'Quilted satin lining',
      'Brass YKK zippers',
      'Multiple interior pockets',
      'Ribbed cuffs and hem',
    ],
    materials: 'Full-grain lambskin leather, quilted polyester lining, brass hardware.',
    care: 'Store on a padded hanger. Condition annually with leather conditioner. Professional cleaning recommended.',
    stock: 23,
    rating: 4.8,
    reviewCount: 312,
    isBestseller: true,
  },
  {
    id: '3',
    name: 'Executive Messenger Bag',
    slug: 'executive-messenger-bag',
    price: 345,
    description: 'The perfect companion for the modern professional. Our Executive Messenger is crafted from vegetable-tanned full-grain leather that develops a beautiful patina over time. Features a padded laptop compartment (fits up to 15"), multiple organizer pockets, and an adjustable shoulder strap.',
    shortDescription: 'Premium leather messenger bag for the modern professional.',
    category: 'Bags',
    subcategory: 'Work Bags',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ],
    colors: [
      { name: 'Tan', hex: '#C69C6D' },
      { name: 'Dark Brown', hex: '#3E2C23' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    features: [
      'Vegetable-tanned full-grain leather',
      'Padded 15" laptop compartment',
      'Brass buckle closures',
      'Adjustable shoulder strap',
      'Interior organizer pockets',
    ],
    materials: 'Vegetable-tanned full-grain cowhide leather, cotton canvas lining, solid brass hardware.',
    care: 'Apply leather conditioner every 3-6 months. Wipe clean with a damp cloth. Avoid overstuffing.',
    stock: 34,
    rating: 4.7,
    reviewCount: 256,
    isNew: true,
  },
  {
    id: '4',
    name: 'Heritage Bifold Wallet',
    slug: 'heritage-bifold-wallet',
    price: 85,
    description: 'Slim yet functional, our Heritage Bifold is crafted from full-grain leather with a beautiful natural grain. Features 6 card slots, 2 hidden pockets, and a full-length bill compartment. The leather is hand-finished with burnished edges for a refined look.',
    shortDescription: 'Classic bifold wallet in full-grain leather.',
    category: 'Accessories',
    subcategory: 'Wallets',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
      'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&q=80',
    ],
    colors: [
      { name: 'Cognac', hex: '#8B4513' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Brown', hex: '#654321' },
    ],
    features: [
      'Full-grain leather',
      '6 card slots',
      '2 hidden pockets',
      'Full-length bill compartment',
      'Burnished edges',
    ],
    materials: 'Full-grain cowhide leather, cotton lining.',
    care: 'Clean with a dry cloth. Condition occasionally to maintain suppleness.',
    stock: 78,
    rating: 4.8,
    reviewCount: 523,
    isBestseller: true,
  },
  {
    id: '5',
    name: 'Classic Dress Belt',
    slug: 'classic-dress-belt',
    price: 75,
    description: 'A wardrobe essential crafted from single-piece full-grain leather. Our Classic Dress Belt features a solid brass buckle with an antique finish and is designed to age beautifully. The leather is thick yet supple, providing years of reliable wear.',
    shortDescription: 'Essential dress belt in full-grain leather.',
    category: 'Accessories',
    subcategory: 'Belts',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&q=80',
    ],
    colors: [
      { name: 'Cognac', hex: '#8B4513' },
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Brown', hex: '#654321' },
    ],
    sizes: ['30', '32', '34', '36', '38', '40', '42'],
    features: [
      'Single-piece full-grain leather',
      'Solid brass buckle',
      '1.25" width',
      'Feathered edges',
      'Handstitched details',
    ],
    materials: 'Full-grain cowhide leather, solid brass buckle.',
    care: 'Store rolled or hanging. Condition occasionally.',
    stock: 92,
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: '6',
    name: 'Weekender Duffel Bag',
    slug: 'weekender-duffel-bag',
    price: 425,
    description: 'The ultimate travel companion for short trips. Our Weekender Duffel is crafted from rugged full-grain leather with a durable canvas lining. Features include a large main compartment, exterior zippered pocket, interior organizer, and detachable shoulder strap with pad.',
    shortDescription: 'Premium leather duffel for weekend getaways.',
    category: 'Bags',
    subcategory: 'Travel Bags',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ],
    colors: [
      { name: 'Tan', hex: '#C69C6D' },
      { name: 'Dark Brown', hex: '#3E2C23' },
    ],
    features: [
      'Full-grain leather',
      'Heavy-duty brass zippers',
      'Detachable shoulder strap',
      'Interior shoe compartment',
      'Exterior zippered pocket',
    ],
    materials: 'Full-grain cowhide leather, cotton canvas lining, brass hardware.',
    care: 'Apply leather conditioner before first use. Store stuffed with tissue paper.',
    stock: 18,
    rating: 4.9,
    reviewCount: 167,
    isNew: true,
  },
]

export const testimonials = [
  {
    id: '1',
    name: 'James Mitchell',
    location: 'New York, NY',
    rating: 5,
    text: 'The Captain Boots are simply incredible. After 3 years of daily wear, they look better than when I bought them. The craftsmanship is unmatched.',
    product: 'The Captain Boot',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'I bought the Executive Messenger Bag for my husband and he uses it every single day. The quality is exceptional and it just keeps getting better with age.',
    product: 'Executive Messenger Bag',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: '3',
    name: 'Michael Torres',
    location: 'Austin, TX',
    rating: 5,
    text: 'This is how leather goods should be made. My Aviator Jacket fits perfectly and the leather quality is outstanding. Worth every penny.',
    product: 'Aviator Leather Jacket',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: '4',
    name: 'Emily Watson',
    location: 'Chicago, IL',
    rating: 5,
    text: 'The attention to detail on the Heritage Wallet is remarkable. The leather has developed such a beautiful patina over the past year.',
    product: 'Heritage Bifold Wallet',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export const blogPosts = [
  {
    id: '1',
    title: 'How to Care for Your Leather Boots',
    slug: 'how-to-care-for-leather-boots',
    excerpt: 'Learn the essential techniques to keep your leather boots looking great for decades.',
    content: '',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80',
    author: 'Heritage Team',
    date: '2024-01-15',
    category: 'Care Guide',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Full Grain vs Genuine Leather: What&apos;s the Difference?',
    slug: 'full-grain-vs-genuine-leather',
    excerpt: 'Understanding the different grades of leather and why it matters for quality.',
    content: '',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    author: 'Heritage Team',
    date: '2024-01-10',
    category: 'Education',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'The Best Leather Bags for Professionals',
    slug: 'best-leather-bags-for-professionals',
    excerpt: 'Our guide to choosing the perfect leather bag for your work style.',
    content: '',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    author: 'Heritage Team',
    date: '2024-01-05',
    category: 'Style Guide',
    readTime: '6 min read',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.isBestseller)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew)
}
