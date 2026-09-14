'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { ui } from '@/data/i18n'

export default function SkillsPage(){
  const { lang } = useLanguage()
  const t = ui[lang].skills
  return <main className="shell py-20"><p className="eyebrow">{t.eyebrow}</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.05em]">{t.title}</h1><div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">{t.groups.map(([title,items])=><section key={title} className="border-t rule pt-5"><h2 className="text-xl font-semibold">{title}</h2><div className="mt-4 flex flex-wrap gap-2">{items.map(i=><span key={i} className="border rule px-3 py-2 text-sm text-zinc-300">{i}</span>)}</div></section>)}</div></main>
}
