import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Alexandre Sigiridis-Schlepp — Mechanical Engineer',
  description: 'Mechanical engineer using physics, mathematics, numerical simulation and computation to solve complex engineering problems.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Alexandre Sigiridis-Schlepp — Mechanical Engineer',
    description: 'CFD, FEM, thermomechanics, turbomachinery and computational engineering.',
    type: 'website'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
