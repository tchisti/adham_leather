import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'default' | 'light' | 'compact'
  href?: string
}

/**
 * Adham brand logo — a bespoke wordmark pairing a geometric
 * leather-stitch diamond monogram with refined spaced capitals.
 */
export function Logo({ className, variant = 'default', href = '/' }: LogoProps) {
  const isLight = variant === 'light'
  const isCompact = variant === 'compact'

  const markColor = isLight ? '#F5F0E8' : 'currentColor'
  const accentColor = '#C4A35A' // Antique gold

  const mark = (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('flex-shrink-0', isCompact ? 'h-7 w-7' : 'h-9 w-9')}
    >
      {/* Outer diamond */}
      <path
        d="M20 2 L38 20 L20 38 L2 20 Z"
        stroke={accentColor}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Inner diamond */}
      <path
        d="M20 8 L32 20 L20 32 L8 20 Z"
        stroke={markColor}
        strokeWidth="0.8"
        strokeOpacity="0.35"
        fill="none"
      />
      {/* Monogram "A" */}
      <path
        d="M20 11 L26 28 M20 11 L14 28 M15.8 23 L24.2 23"
        stroke={markColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Corner stitches — top & bottom */}
      <circle cx="20" cy="2" r="1" fill={accentColor} />
      <circle cx="20" cy="38" r="1" fill={accentColor} />
      <circle cx="2" cy="20" r="1" fill={accentColor} />
      <circle cx="38" cy="20" r="1" fill={accentColor} />
    </svg>
  )

  const wordmark = (
    <span
      className={cn(
        'font-serif tracking-[0.2em] uppercase font-semibold leading-none',
        isCompact ? 'text-base' : 'text-xl lg:text-2xl',
        isLight ? 'text-[#F5F0E8]' : 'text-foreground'
      )}
    >
      Adham
    </span>
  )

  const content = (
    <span className={cn('flex items-center gap-3', className)}>
      {mark}
      {!isCompact && wordmark}
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Adham — Home">
      {content}
    </Link>
  )
}
