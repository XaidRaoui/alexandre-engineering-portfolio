'use client'

import { useLanguage } from './LanguageProvider'
import { ui } from '@/data/i18n'

export function Footer() {
  const { lang } = useLanguage()
  const t = ui[lang]
  return (
    <footer className="mt-24 border-t rule bg-white/[0.015] py-10 backdrop-blur-sm">
      <div className="shell flex flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>{t.footer}</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:sigischlepp.alex@gmail.com" className="hover:text-white">{t.home.email}</a>
          <a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="/docs/alexandre-sigiridis-schlepp-cv.pdf" target="_blank" rel="noreferrer" className="hover:text-white">CV PDF</a>
        </div>
      </div>
    </footer>
  )
}
