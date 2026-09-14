import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectDetailClient } from '@/components/ProjectDetailClient'

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find(x => x.slug === slug)
  if (!p) return {}
  return { title: `${p.title} | Alexandre Sigiridis-Schlepp`, description: p.question }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find(x => x.slug === slug)
  if (!p) notFound()
  return <ProjectDetailClient project={p} />
}
