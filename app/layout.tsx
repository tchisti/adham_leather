import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/lib/cart-context'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Adham | Premium Leather Goods',
    template: '%s | Adham',
  },
  description: 'Discover Adham — premium, handcrafted leather goods made from full-grain leather. Bags, wallets, belts, and accessories built to last a lifetime.',
  keywords: ['Adham leather', 'premium leather bags', 'full grain leather', 'handmade leather goods', 'leather accessories'],
  authors: [{ name: 'Adham' }],
  creator: 'Adham',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adhamleather.com',
    siteName: 'Adham',
    title: 'Adham | Premium Leather Goods',
    description: 'Discover Adham — premium, handcrafted leather goods made from full-grain leather.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adham — Premium Leather Goods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adham | Premium Leather Goods',
    description: 'Discover Adham — premium, handcrafted leather goods made from full-grain leather.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
