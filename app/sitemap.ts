import type { MetadataRoute } from 'next'
import { projects, studies } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/skills`, lastModified: new Date() },
    { url: `${base}/cv`, lastModified: new Date() },
    ...projects.map(p => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
    ...studies.map(s => ({ url: `${base}/studies/${s.slug}`, lastModified: new Date() }))
  ]
}
