'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '@/data/i18n'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLanguage(): Lang {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem('portfolio-lang')
  if (saved === 'en' || saved === 'fr' || saved === 'de') return saved
  const browser = window.navigator.language.toLowerCase()
  if (browser.startsWith('fr')) return 'fr'
  if (browser.startsWith('de')) return 'de'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const initial = detectInitialLanguage()
    setLangState(initial)
    document.documentElement.lang = initial
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-lang', next)
      document.documentElement.lang = next
    }
  }

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
