'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Project } from '@/data/projects'
import { Equation } from '@/components/Equation'
import { useLanguage } from '@/components/LanguageProvider'
import { localizeProject, ui } from '@/data/i18n'

function NumberedSection({ index, title, children }: { index: string, title: string, children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]">
      <div><p className="eyebrow">{index}</p><h2 className="mt-2 text-xl font-semibold tracking-[-.02em]">{title}</h2></div>
      <div className="max-w-3xl text-zinc-300">{children}</div>
    </section>
  )
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const { lang } = useLanguage()
  const p = localizeProject(project, lang)
  const t = ui[lang].project
  return (
    <main>
      <section className="gridline border-b rule py-14 md:py-20">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#projects" className="font-mono text-xs uppercase tracking-[.13em] text-zinc-500 transition hover:text-zinc-200">{t.back}</Link>
            <div className="flex flex-wrap gap-2">
              {p.video && <a href={p.video} target="_blank" rel="noreferrer" className="border border-zinc-600 bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[.12em] text-zinc-200 transition hover:border-zinc-400 hover:bg-white/[0.06]">▶ {t.video} ↗</a>}
              {p.report && <a href={p.report} target="_blank" rel="noreferrer" className="border border-sky-300/40 bg-sky-300/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[.12em] text-sky-100 transition hover:bg-sky-300/15">{p.reportLabel ?? t.report} ↗</a>}
            </div>
          </div>
          <p className="eyebrow">{p.discipline}</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-.055em] md:text-7xl md:leading-[.98]">{p.title}</h1>
          <p className="mt-6 max-w-3xl text-xl text-zinc-300">{p.subtitle}</p>
          <p className="mt-8 max-w-3xl border-l-2 border-sky-300 pl-5 text-lg text-zinc-300">{p.question}</p>
          <div className="mt-8 flex flex-wrap gap-2">{p.tools.map(tool => <span key={tool} className="rounded-full border rule px-3 py-1 font-mono text-[11px] uppercase tracking-[.08em] text-zinc-400">{tool}</span>)}</div>
        </div>
      </section>

      <div className="shell py-10">
        <div className="relative aspect-[16/8.7] overflow-hidden border rule bg-[#080b0f]">
          <Image src={p.hero} alt={p.title} fill className={p.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} priority sizes="100vw" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-5 pb-4 pt-20">
            <p className="font-mono text-[10px] uppercase tracking-[.15em] text-zinc-300">{p.slug === 'market-time-series-ml' ? t.visualConcept : t.visualActual}</p>
          </div>
        </div>

        {p.metrics && p.metrics.length > 0 && (
          <section className="grid gap-4 border-b rule py-8 sm:grid-cols-2 lg:grid-cols-4">
            {p.metrics.map(m => <div key={`${m.value}-${m.label}`} className="border-l border-zinc-700 pl-4"><div className="text-2xl font-semibold tracking-[-.03em] text-zinc-100">{m.value}</div><div className="mt-1 max-w-[220px] text-xs leading-relaxed text-zinc-500">{m.label}</div></div>)}
          </section>
        )}

        {p.gallery && p.gallery.length > 1 && (
          <section className="border-b rule py-12">
            <div className="mb-7 grid gap-4 md:grid-cols-[170px_1fr]">
              <div><p className="eyebrow">{t.figuresEyebrow}</p><h2 className="mt-2 text-xl font-semibold">{t.figuresTitle}</h2></div>
              <p className="max-w-2xl text-sm text-zinc-400">{t.figuresBody}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {p.gallery.map((fig, index) => (
                <figure key={`${fig.src}-${index}`} className={index === 0 ? 'md:col-span-2' : ''}>
                  <div className={`relative overflow-hidden border rule bg-[#090c10] ${index === 0 ? 'aspect-[16/8.6]' : 'aspect-[16/10]'}`}>
                    <Image src={fig.src} alt={fig.title} fill className="object-cover" sizes={index === 0 ? '100vw' : '(max-width:768px) 100vw, 50vw'} />
                  </div>
                  <figcaption className="mt-3 grid gap-1 border-l border-zinc-700 pl-3">
                    <span className="text-sm font-medium text-zinc-200">{fig.title}</span>
                    <span className="text-xs leading-relaxed text-zinc-500">{fig.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <NumberedSection index="01" title={t.context}><p>{p.context}</p></NumberedSection>
        {p.sections.map((section, i) => <NumberedSection key={section.title} index={String(i + 2).padStart(2, '0')} title={section.title}>{section.body.map((body,j)=><p key={j} className="mb-4 last:mb-0">{body}</p>)}</NumberedSection>)}

        {p.equation && <NumberedSection index={String(p.sections.length + 2).padStart(2,'0')} title={t.physics}><Equation>{p.equation}</Equation><p className="mt-4 text-sm text-zinc-400">{p.equationLabel}</p></NumberedSection>}

        <NumberedSection index={String(p.sections.length + 3).padStart(2,'0')} title={t.results}><ul className="space-y-3">{p.results.map(result=><li key={result} className="border-l border-zinc-700 pl-4">{result}</li>)}</ul></NumberedSection>
        <NumberedSection index={String(p.sections.length + 4).padStart(2,'0')} title={t.limitations}><ul className="space-y-3 text-zinc-400">{p.limitations.map(limit=><li key={limit}>— {limit}</li>)}</ul></NumberedSection>
        <NumberedSection index={String(p.sections.length + 5).padStart(2,'0')} title={t.learned}><div className="flex flex-wrap gap-2">{p.learned.map(item=><span key={item} className="border rule px-3 py-2 text-sm text-zinc-300">{item}</span>)}</div></NumberedSection>

        <div className="mt-8 grid gap-4 border-t rule pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><p className="text-sm text-zinc-500">{t.fullPrompt}</p><p className="mt-1 text-sm text-zinc-300">{t.fullBody}</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/#projects" className="border rule px-5 py-3 text-sm">{t.back}</Link>{p.video && <a href={p.video} className="border rule px-5 py-3 text-sm" target="_blank" rel="noreferrer">▶ {t.video} ↗</a>}{p.report && <a href={p.report} className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black" target="_blank" rel="noreferrer">{p.reportLabel ?? t.report} ↗</a>}</div>
        </div>
      </div>
    </main>
  )
}
