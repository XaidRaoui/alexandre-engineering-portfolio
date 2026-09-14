import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/ProjectCard'
import { StudyCard } from '@/components/StudyCard'
import { projects, studies } from '@/data/projects'

const visualStrip = [
  { src: '/assets/multimorph-regimes.png', label: 'Multiphase CFD', meta: 'MultiMorph · gas morphology' },
  { src: '/assets/compressor-coupled-stage.png', label: 'Turbomachinery', meta: 'Rotor–stator · U magnitude' },
  { src: '/assets/v4-engine.png', label: 'Mechanical design', meta: '135° V4 · dynamics & balancing' },
  { src: '/assets/aero-airfoil-aoa10.png', label: 'External aerodynamics', meta: 'Airfoil · separation & wake' }
]

export default function Home() {
  return (
    <main>
      <section className="gridline border-b rule">
        <div className="shell grid min-h-[82vh] items-center gap-12 py-16 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
          <div>
            <p className="eyebrow">Mechanical engineering · simulation · R&amp;D</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-[5.3rem] lg:leading-[.94]">Alexandre<br/>Sigiridis-Schlepp</h1>
            <p className="mt-6 max-w-2xl text-xl text-zinc-200">Mechanical Engineer — Numerical Simulation, Fluid Mechanics &amp; Computational Engineering</p>
            <p className="mt-6 max-w-2xl text-zinc-400">Arts et Métiers / KIT double-degree engineer focused on turning physical problems into verified numerical models. CFD, finite elements, thermomechanics, turbomachinery, mechanical design and scientific computing.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[.12em] text-zinc-500">
              <span>OpenFOAM</span><span>ANSYS</span><span>Abaqus</span><span>Code_Aster</span><span>Python</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link href="#projects" className="bg-zinc-100 px-5 py-3 font-medium text-black transition hover:bg-white">Explore projects</Link>
              <a href="/docs/alexandre-sigiridis-schlepp-cv.pdf" className="border rule px-5 py-3 transition hover:border-zinc-500" target="_blank" rel="noreferrer">CV PDF</a>
              <a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" className="border rule px-5 py-3 transition hover:border-zinc-500" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-main relative overflow-hidden border rule">
              <Image src="/assets/compressor-featured-iso.png" alt="Axial-compressor rotor-stator CFD velocity-magnitude field" fill priority className="object-contain" sizes="(max-width:1024px) 100vw, 55vw" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-5 pb-4 pt-16">
                <div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-sky-200">Featured simulation</p><p className="mt-1 text-sm text-zinc-100">Coupled axial-compressor rotor–stator stage</p></div>
                <span className="hidden font-mono text-[10px] uppercase tracking-[.14em] text-zinc-400 sm:block">U magnitude</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="relative aspect-[16/10] overflow-hidden border rule bg-white"><Image src="/assets/multimorph-regimes.png" alt="MultiMorph gas morphology" fill className="object-cover" sizes="18vw" /></div>
              <div className="relative aspect-[16/10] overflow-hidden border rule bg-[#111]"><Image src="/assets/v4-engine.png" alt="135 degree V4 engine mechanical design" fill className="object-contain p-1" sizes="18vw" /></div>
              <div className="relative aspect-[16/10] overflow-hidden border rule bg-[#111]"><Image src="/assets/aero-airfoil-aoa10.png" alt="Airfoil CFD velocity field" fill className="object-contain" sizes="18vw" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b rule py-8">
        <div className="shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visualStrip.map((v) => (
            <div key={v.src} className="group relative aspect-[16/9] overflow-hidden border rule bg-white/[0.02] shadow-[0_20px_55px_rgba(0,0,0,0.16)] backdrop-blur-sm">
              <Image src={v.src} alt={v.label} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" sizes="(max-width:640px) 100vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-sm font-medium">{v.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-[.12em] text-zinc-400">{v.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="shell py-20">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <div><p className="eyebrow">Selected engineering work</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.045em] md:text-5xl">Engineering reasoning, not software badges.</h2></div>
          <p className="max-w-xl text-zinc-400 md:justify-self-end">Every flagship project is clickable and opens a dedicated technical case-study page. Supporting reports and calculation files are linked directly where available.</p>
        </div>
        {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </section>

      <section id="technical-work" className="border-y rule py-20">
        <div className="shell">
          <p className="eyebrow">Engineering studies</p>
          <div className="mt-4 flex items-end justify-between gap-8">
            <h2 className="text-4xl font-semibold tracking-[-.04em]">Additional technical work</h2>
            <p className="hidden max-w-md text-sm text-zinc-400 md:block">Shorter studies stay compact: enough to show the modelling choice and result without pretending every exercise is a research project.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{studies.map(s => <StudyCard key={s.title} study={s} />)}</div>
        </div>
      </section>

      <section className="shell py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Technical profile</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.04em]">Physics first. Software second.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              ['Fluid mechanics & CFD','OpenFOAM · RANS · k–ω SST · VOF · Euler–Euler · pressure losses · wall treatment'],
              ['Finite elements','ANSYS · Abaqus · Code_Aster · thermomechanics · structural mechanics · topology optimization'],
              ['Mechanical engineering','Design · dynamics · dimensioning · turbomachinery · tolerance / GPS fundamentals'],
              ['Scientific computing','Python · NumPy · pandas · SciPy · optimization · time-series modelling']
            ].map(([t,b]) => <div key={t} className="border-t rule pt-4"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-zinc-400">{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-t rule py-24">
        <div className="shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow">Contact</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-.04em]">Simulation, R&amp;D, calculation or computational engineering.</h2></div>
          <div className="flex flex-wrap gap-3"><a href="/docs/alexandre-sigiridis-schlepp-cv.pdf" target="_blank" rel="noreferrer" className="border rule px-5 py-3 text-sm">CV PDF</a><a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" target="_blank" rel="noreferrer" className="border rule px-5 py-3 text-sm">LinkedIn</a><a href="mailto:sigischlepp.alex@gmail.com" className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black">Email</a></div>
        </div>
      </section>
    </main>
  )
}
