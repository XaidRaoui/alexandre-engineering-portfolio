import Image from 'next/image'
import Link from 'next/link'
import { Study } from '@/data/projects'

export function StudyCard({ study }: { study: Study }) {
  return (
    <Link href={`/studies/${study.slug}`} className="block h-full">
      <article className="soft-panel group h-full overflow-hidden transition hover:border-zinc-600">
        <div className="relative aspect-[16/9] border-b rule bg-white/[0.02]">
          <Image src={study.image} alt={study.title} fill className={`${study.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'} transition duration-500 group-hover:scale-[1.015]`} sizes="(max-width:768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 border border-white/15 bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-zinc-300">Case study ↗</div>
        </div>
        <div className="p-5">
          <p className="eyebrow">{study.domain}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-.02em] transition group-hover:text-sky-100">{study.title}</h3>
          <p className="mt-3 text-sm text-zinc-400">{study.summary}</p>
          {study.metrics && <p className="mt-4 font-mono text-[10px] uppercase tracking-[.11em] text-zinc-500">{study.metrics.slice(0,2).map(m => `${m.value} ${m.label}`).join(' · ')}</p>}
        </div>
      </article>
    </Link>
  )
}
