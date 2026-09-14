'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Study } from '@/data/projects'
import { Equation } from '@/components/Equation'
import { useLanguage } from '@/components/LanguageProvider'
import { localizeStudy, ui } from '@/data/i18n'

export function StudyDetailClient({ study }: { study: Study }) {
  const { lang } = useLanguage()
  const s = localizeStudy(study, lang)
  const t = ui[lang].study
  return (
    <main>
      <section className="gridline border-b rule py-14 md:py-20">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#technical-work" className="font-mono text-xs uppercase tracking-[.13em] text-zinc-500 transition hover:text-zinc-200">{t.back}</Link>
            {s.report && <a href={s.report} target="_blank" rel="noreferrer" className="border border-sky-300/40 bg-sky-300/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[.12em] text-sky-100">{t.report}</a>}
          </div>
          <p className="eyebrow">{s.domain}</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-.055em] md:text-7xl md:leading-[.98]">{s.title}</h1>
          <p className="mt-8 max-w-3xl border-l-2 border-sky-300 pl-5 text-lg text-zinc-300">{s.question}</p>
          <div className="mt-8 flex flex-wrap gap-2">{s.tools.map(tool => <span key={tool} className="rounded-full border rule px-3 py-1 font-mono text-[11px] uppercase tracking-[.08em] text-zinc-400">{tool}</span>)}</div>
        </div>
      </section>

      <div className="shell py-10">
        <div className="relative aspect-[16/8.7] overflow-hidden border rule bg-[#080b0f]">
          <Image src={s.image} alt={s.title} fill className={s.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} priority sizes="100vw" />
        </div>

        {s.metrics && <section className="grid gap-4 border-b rule py-8 sm:grid-cols-2 lg:grid-cols-4">{s.metrics.map(m => <div key={`${m.value}-${m.label}`} className="border-l border-zinc-700 pl-4"><div className="text-2xl font-semibold tracking-[-.03em]">{m.value}</div><div className="mt-1 text-xs leading-relaxed text-zinc-500">{m.label}</div></div>)}</section>}

        {s.gallery && s.gallery.length > 0 && <section className="grid gap-6 border-b rule py-12 md:grid-cols-2">{s.gallery.map((fig,i)=><figure key={`${fig.src}-${i}`}><div className="relative aspect-[16/10] overflow-hidden border rule bg-[#090c10]"><Image src={fig.src} alt={fig.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" /></div><figcaption className="mt-3 border-l border-zinc-700 pl-3"><div className="text-sm font-medium">{fig.title}</div><div className="mt-1 text-xs text-zinc-500">{fig.caption}</div></figcaption></figure>)}</section>}

        {s.sections.map((section,i)=><section key={section.title} className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">{String(i+1).padStart(2,'0')}</p><h2 className="mt-2 text-xl font-semibold">{section.title}</h2></div><div className="max-w-3xl text-zinc-300">{section.body.map((body,j)=><p key={j} className="mb-4 last:mb-0">{body}</p>)}</div></section>)}

        {s.equation && <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">{t.physics}</p><h2 className="mt-2 text-xl font-semibold">{t.representativeEquation}</h2></div><div className="max-w-3xl"><Equation>{s.equation}</Equation><p className="mt-4 text-sm text-zinc-400">{s.equationLabel}</p></div></section>}

        <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">{t.results}</p><h2 className="mt-2 text-xl font-semibold">{t.resultsTitle}</h2></div><ul className="max-w-3xl space-y-3 text-zinc-300">{s.results.map(result=><li key={result} className="border-l border-zinc-700 pl-4">{result}</li>)}</ul></section>
        <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">{t.limits}</p><h2 className="mt-2 text-xl font-semibold">{t.limitsTitle}</h2></div><ul className="max-w-3xl space-y-3 text-zinc-400">{s.limitations.map(limit=><li key={limit}>— {limit}</li>)}</ul></section>

        <div className="mt-8 flex flex-wrap gap-3 border-t rule pt-8"><Link href="/#technical-work" className="border rule px-5 py-3 text-sm">{t.back}</Link>{s.report && <a href={s.report} className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black" target="_blank" rel="noreferrer">{t.report}</a>}</div>
      </div>
    </main>
  )
}
