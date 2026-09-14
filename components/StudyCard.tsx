'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Study } from '@/data/projects'
import { useLanguage } from './LanguageProvider'
import { localizeStudy, ui } from '@/data/i18n'

export function StudyCard({ study }: { study: Study }) {
  const { lang } = useLanguage()
  const s = localizeStudy(study, lang)
  const t = ui[lang]
  return (
    <Link href={`/studies/${s.slug}`} className="block h-full">
      <article className="soft-panel group h-full overflow-hidden transition hover:border-zinc-600">
        <div className="relative aspect-[16/9] border-b rule bg-white/[0.02]">
          <Image src={s.image} alt={s.title} fill className={`${s.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'} transition duration-500 group-hover:scale-[1.015]`} sizes="(max-width:768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 border border-white/15 bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-zinc-300">{t.card.case}</div>
        </div>
        <div className="p-5">
          <p className="eyebrow">{s.domain}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-.02em] transition group-hover:text-sky-100">{s.title}</h3>
          <p className="mt-3 text-sm text-zinc-400">{s.summary}</p>
          {s.metrics && <p className="mt-4 font-mono text-[10px] uppercase tracking-[.11em] text-zinc-500">{s.metrics.slice(0,2).map(m => `${m.value} ${m.label}`).join(' · ')}</p>}
        </div>
      </article>
    </Link>
  )
}
