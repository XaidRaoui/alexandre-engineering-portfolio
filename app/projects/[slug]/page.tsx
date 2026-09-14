import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Equation } from '@/components/Equation'
import { projects } from '@/data/projects'

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = projects.find(x => x.slug === slug)
  if (!p) return {}
  return { title: `${p.title} | Alexandre Sigiridis-Schlepp`, description: p.question }
}

function NumberedSection({ index, title, children }: { index: string, title: string, children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]">
      <div><p className="eyebrow">{index}</p><h2 className="mt-2 text-xl font-semibold tracking-[-.02em]">{title}</h2></div>
      <div className="max-w-3xl text-zinc-300">{children}</div>
    </section>
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find(x => x.slug === slug)
  if (!p) notFound()

  return (
    <main>
      <section className="gridline border-b rule py-14 md:py-20">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#projects" className="font-mono text-xs uppercase tracking-[.13em] text-zinc-500 transition hover:text-zinc-200">← Selected projects</Link>
            {p.report && <a href={p.report} target="_blank" rel="noreferrer" className="border border-sky-300/40 bg-sky-300/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[.12em] text-sky-100 transition hover:bg-sky-300/15">{p.reportLabel ?? 'Open project PDF'} ↗</a>}
          </div>
          <p className="eyebrow">{p.discipline}</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-.055em] md:text-7xl md:leading-[.98]">{p.title}</h1>
          <p className="mt-6 max-w-3xl text-xl text-zinc-300">{p.subtitle}</p>
          <p className="mt-8 max-w-3xl border-l-2 border-sky-300 pl-5 text-lg text-zinc-300">{p.question}</p>
          <div className="mt-8 flex flex-wrap gap-2">{p.tools.map(t => <span key={t} className="rounded-full border rule px-3 py-1 font-mono text-[11px] uppercase tracking-[.08em] text-zinc-400">{t}</span>)}</div>
        </div>
      </section>

      <div className="shell py-10">
        <div className="relative aspect-[16/8.7] overflow-hidden border rule bg-[#080b0f]">
          <Image src={p.hero} alt={p.title} fill className={p.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} priority sizes="100vw" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-5 pb-4 pt-20">
            <p className="font-mono text-[10px] uppercase tracking-[.15em] text-zinc-300">{p.slug === 'market-time-series-ml' ? 'Project presentation visual · conceptual ML schematic' : 'Project visualization · actual simulation output where available'}</p>
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
              <div><p className="eyebrow">Selected figures</p><h2 className="mt-2 text-xl font-semibold">Simulation views</h2></div>
              <p className="max-w-2xl text-sm text-zinc-400">The page uses project outputs rather than decorative renders. Each figure is selected because it supports a specific physical or numerical point.</p>
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

        <NumberedSection index="01" title="Context"><p>{p.context}</p></NumberedSection>
        {p.sections.map((s, i) => <NumberedSection key={s.title} index={String(i + 2).padStart(2, '0')} title={s.title}>{s.body.map((b,j)=><p key={j} className="mb-4 last:mb-0">{b}</p>)}</NumberedSection>)}

        {p.equation && <NumberedSection index={String(p.sections.length + 2).padStart(2,'0')} title="Physics"><Equation>{p.equation}</Equation><p className="mt-4 text-sm text-zinc-400">{p.equationLabel}</p></NumberedSection>}

        <NumberedSection index={String(p.sections.length + 3).padStart(2,'0')} title="Results"><ul className="space-y-3">{p.results.map(x=><li key={x} className="border-l border-zinc-700 pl-4">{x}</li>)}</ul></NumberedSection>
        <NumberedSection index={String(p.sections.length + 4).padStart(2,'0')} title="Limitations"><ul className="space-y-3 text-zinc-400">{p.limitations.map(x=><li key={x}>— {x}</li>)}</ul></NumberedSection>
        <NumberedSection index={String(p.sections.length + 5).padStart(2,'0')} title="What I learned"><div className="flex flex-wrap gap-2">{p.learned.map(x=><span key={x} className="border rule px-3 py-2 text-sm text-zinc-300">{x}</span>)}</div></NumberedSection>

        <div className="mt-8 grid gap-4 border-t rule pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div><p className="text-sm text-zinc-500">Want the full derivation, setup tables and figures?</p><p className="mt-1 text-sm text-zinc-300">The portfolio page summarizes the engineering argument; the attached report or calculation workbook remains the detailed source when one exists.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/#projects" className="border rule px-5 py-3 text-sm">← All projects</Link>{p.report && <a href={p.report} className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black" target="_blank" rel="noreferrer">{p.reportLabel ?? 'Open project report'} ↗</a>}</div>
        </div>
      </div>
    </main>
  )
}
