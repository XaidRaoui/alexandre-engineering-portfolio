'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { ui } from '@/data/i18n'

export default function AboutPage(){
  const { lang } = useLanguage()
  const t = ui[lang].about
  return <main className="shell py-20"><p className="eyebrow">{t.eyebrow}</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.05em]">{t.title}</h1><div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr]"><div className="space-y-5 text-lg text-zinc-300">{t.paragraphs.map(p=><p key={p}>{p}</p>)}</div><div className="soft-panel p-6"><p className="eyebrow">{t.languages}</p><p className="mt-3 text-xl">{t.languageValue}</p><p className="mt-1 text-sm text-zinc-500">TOEIC 955</p><p className="eyebrow mt-8">{t.interests}</p><p className="mt-3 text-zinc-300">{t.interestsValue}</p><p className="eyebrow mt-8">{t.mobility}</p><p className="mt-3 text-zinc-300">{t.mobilityValue}</p></div></div></main>
}
