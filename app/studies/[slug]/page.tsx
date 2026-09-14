import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Equation } from '@/components/Equation'
import { studies } from '@/data/projects'

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

  return (
    <main>
      <section className="gridline border-b rule py-14 md:py-20">
        <div className="shell">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#technical-work" className="font-mono text-xs uppercase tracking-[.13em] text-zinc-500 transition hover:text-zinc-200">← Engineering studies</Link>
            {s.report && <a href={s.report} target="_blank" rel="noreferrer" className="border border-sky-300/40 bg-sky-300/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[.12em] text-sky-100">Open technical report PDF ↗</a>}
          </div>
          <p className="eyebrow">{s.domain}</p>
          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-.055em] md:text-7xl md:leading-[.98]">{s.title}</h1>
          <p className="mt-8 max-w-3xl border-l-2 border-sky-300 pl-5 text-lg text-zinc-300">{s.question}</p>
          <div className="mt-8 flex flex-wrap gap-2">{s.tools.map(t => <span key={t} className="rounded-full border rule px-3 py-1 font-mono text-[11px] uppercase tracking-[.08em] text-zinc-400">{t}</span>)}</div>
        </div>
      </section>

      <div className="shell py-10">
        <div className="relative aspect-[16/8.7] overflow-hidden border rule bg-[#080b0f]">
          <Image src={s.image} alt={s.title} fill className={s.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} priority sizes="100vw" />
        </div>

        {s.metrics && <section className="grid gap-4 border-b rule py-8 sm:grid-cols-2 lg:grid-cols-4">{s.metrics.map(m => <div key={`${m.value}-${m.label}`} className="border-l border-zinc-700 pl-4"><div className="text-2xl font-semibold tracking-[-.03em]">{m.value}</div><div className="mt-1 text-xs leading-relaxed text-zinc-500">{m.label}</div></div>)}</section>}

        {s.gallery && s.gallery.length > 0 && <section className="grid gap-6 border-b rule py-12 md:grid-cols-2">{s.gallery.map((f,i)=><figure key={`${f.src}-${i}`}><div className="relative aspect-[16/10] overflow-hidden border rule bg-[#090c10]"><Image src={f.src} alt={f.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" /></div><figcaption className="mt-3 border-l border-zinc-700 pl-3"><div className="text-sm font-medium">{f.title}</div><div className="mt-1 text-xs text-zinc-500">{f.caption}</div></figcaption></figure>)}</section>}

        {s.sections.map((sec,i)=><section key={sec.title} className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">{String(i+1).padStart(2,'0')}</p><h2 className="mt-2 text-xl font-semibold">{sec.title}</h2></div><div className="max-w-3xl text-zinc-300">{sec.body.map((b,j)=><p key={j} className="mb-4 last:mb-0">{b}</p>)}</div></section>)}

        {s.equation && <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">Physics</p><h2 className="mt-2 text-xl font-semibold">Representative equation</h2></div><div className="max-w-3xl"><Equation>{s.equation}</Equation><p className="mt-4 text-sm text-zinc-400">{s.equationLabel}</p></div></section>}

        <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">Results</p><h2 className="mt-2 text-xl font-semibold">What the model shows</h2></div><ul className="max-w-3xl space-y-3 text-zinc-300">{s.results.map(x=><li key={x} className="border-l border-zinc-700 pl-4">{x}</li>)}</ul></section>
        <section className="grid gap-6 border-t rule py-12 md:grid-cols-[170px_1fr]"><div><p className="eyebrow">Limits</p><h2 className="mt-2 text-xl font-semibold">What it does not prove</h2></div><ul className="max-w-3xl space-y-3 text-zinc-400">{s.limitations.map(x=><li key={x}>— {x}</li>)}</ul></section>

        <div className="mt-8 flex flex-wrap gap-3 border-t rule pt-8"><Link href="/#technical-work" className="border rule px-5 py-3 text-sm">← Engineering studies</Link>{s.report && <a href={s.report} className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black" target="_blank" rel="noreferrer">Open technical report PDF ↗</a>}</div>
      </div>
    </main>
  )
}
