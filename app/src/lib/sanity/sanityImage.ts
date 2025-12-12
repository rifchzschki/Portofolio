import { buildSrc, buildSrcSet } from '@sanity-image/url-builder'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET

const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/`

export function getSanityImage(assetRef: string, width = 800, height?: number) {
  const img = buildSrc({
    id: assetRef,
    width,
    height,
    baseUrl,
    mode: height ? 'cover' : 'contain'
  })

  const srcSet = buildSrcSet({
    id: assetRef,
    width,
    height,
    baseUrl
  })

  return {
    src: img.src,
    width: img.width,
    height: img.height,
    srcSet
  }
}
