'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ui } from '@/data/i18n'

export function Header() {
  const { lang } = useLanguage()
  const t = ui[lang]
  return (
    <header className="sticky top-0 z-50 border-b rule bg-[#081019]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
      <div className="shell flex min-h-16 items-center justify-between gap-3 py-2">
        <Link href="/" className="shrink-0 font-semibold tracking-tight">A. Sigiridis-Schlepp</Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="flex items-center gap-3 text-sm text-zinc-300 sm:gap-5">
            <Link href="/#projects" className="hover:text-white">{t.nav.projects}</Link>
            <Link href="/skills" className="hidden md:inline hover:text-white">{t.nav.skills}</Link>
            <Link href="/about" className="hidden lg:inline hover:text-white">{t.nav.about}</Link>
            <a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" target="_blank" rel="noreferrer" className="hidden xl:inline hover:text-white">LinkedIn</a>
            <Link href="/cv" className="hidden sm:inline hover:text-white">{t.nav.cv}</Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
