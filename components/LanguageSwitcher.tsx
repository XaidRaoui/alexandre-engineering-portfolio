'use client'

import { languageLabels, type Lang } from '@/data/i18n'
import { useLanguage } from './LanguageProvider'

const languages: Lang[] = ['en', 'fr', 'de']

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center rounded-full border border-white/15 bg-black/20 p-0.5 font-mono text-[10px] uppercase tracking-[.1em] backdrop-blur-sm" aria-label="Language selector">
      {languages.map(code => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1.5 transition ${lang === code ? 'bg-zinc-100 text-black' : 'text-zinc-400 hover:text-white'}`}
        >
          {languageLabels[code]}
        </button>
      ))}
    </div>
  )
}
