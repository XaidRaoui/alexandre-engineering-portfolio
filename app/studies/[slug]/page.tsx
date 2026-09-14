import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { studies } from '@/data/projects'
import { StudyDetailClient } from '@/components/StudyDetailClient'

export function generateStaticParams() { return studies.map(s => ({ slug: s.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = studies.find(x => x.slug === slug)
  if (!s) return {}
  return { title: `${s.title} | Alexandre Sigiridis-Schlepp`, description: s.question }
}

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = studies.find(x => x.slug === slug)
  if (!s) notFound()
  return <StudyDetailClient study={s} />
}
