import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b rule bg-[#081019]/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight">A. Sigiridis-Schlepp</Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/#projects" className="hover:text-white">Projects</Link>
          <Link href="/skills" className="hidden sm:inline hover:text-white">Skills</Link>
          <Link href="/about" className="hidden sm:inline hover:text-white">About</Link>
          <a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" target="_blank" rel="noreferrer" className="hidden md:inline hover:text-white">LinkedIn</a>
          <Link href="/cv" className="hover:text-white">CV</Link>
        </nav>
      </div>
    </header>
  )
}
