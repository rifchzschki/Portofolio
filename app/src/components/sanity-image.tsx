import { getSanityImage } from '../lib/sanity/sanityImage'

export interface SanityImageProps {
  asset?: { _ref: string } | null
  width?: number
  height?: number
  alt?: string
  className?: string
}

export function SanityImage({
  asset,
  width = 800,
  height,
  alt = '',
  className = '',
}: SanityImageProps) {

  if (!asset?._ref) {
    return <div className={`bg-gray-300 ${className}`}></div>
  }

  const { src, srcSet } = getSanityImage(asset._ref, width, height)

  return (
    <img
      src={src}
      srcSet={srcSet.join(', ')}
      sizes={`(max-width: ${width}px) 100vw, ${width}px`}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}
