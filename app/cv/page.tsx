'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { ui } from '@/data/i18n'

function Timeline({ items }: { items: readonly (readonly string[])[] }) {
  return <div className="mt-6 max-w-5xl">{items.map(([date,title,body]) => <div key={date+title} className="grid gap-3 border-t rule py-7 md:grid-cols-[160px_1fr]"><p className="font-mono text-sm text-sky-200">{date}</p><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-zinc-400">{body}</p></div></div>)}</div>
}

export default function CvPage(){
  const { lang } = useLanguage()
  const t = ui[lang].cv
  return <main className="shell py-20">
    <p className="eyebrow">{t.eyebrow}</p>
    <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-.05em]">{t.title}</h1>
    <p className="mt-6 max-w-3xl text-lg text-zinc-400">{t.intro}</p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="/docs/alexandre-sigiridis-schlepp-cv.pdf" target="_blank" rel="noreferrer" className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black">{t.open}</a>
      <a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" target="_blank" rel="noreferrer" className="border rule px-5 py-3 text-sm">LinkedIn</a>
      <a href="mailto:sigischlepp.alex@gmail.com" className="border rule px-5 py-3 text-sm">{ui[lang].home.email}</a>
    </div>
    <h2 className="mt-16 text-2xl font-semibold">{t.experience}</h2><Timeline items={t.experiences} />
    <h2 className="mt-16 text-2xl font-semibold">{t.education}</h2><Timeline items={t.educationRows} />
  </main>
}
