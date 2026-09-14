import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/data/projects'

export function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <article className="group grid gap-7 border-t rule py-12 transition md:grid-cols-[.92fr_1.08fr] md:items-center">
        <div className={index % 2 ? 'md:order-2 md:pl-5' : 'md:pr-5'}>
          <p className="eyebrow">{String(index + 1).padStart(2, '0')} · {project.discipline}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] transition group-hover:text-sky-100 md:text-[2.6rem] md:leading-[1.05]">{project.title}</h3>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-300">{project.question}</p>
          {project.metrics && (
            <div className="mt-5 grid max-w-xl grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
              {project.metrics.slice(0, 3).map(m => <div key={`${m.value}-${m.label}`} className="border-l border-zinc-700 pl-3"><div className="text-sm font-semibold text-zinc-100">{m.value}</div><div className="mt-0.5 text-[11px] leading-snug text-zinc-500">{m.label}</div></div>)}
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.keywords.slice(0, 5).map(k => <span key={k} className="rounded-full border rule px-3 py-1 font-mono text-[11px] uppercase tracking-[.08em] text-zinc-400">{k}</span>)}
          </div>
          <span className="mt-7 inline-flex border-b border-sky-300 pb-1 text-sm text-sky-200 transition group-hover:text-white">Open technical case study ↗</span>
        </div>
        <div className={`relative aspect-[16/9] overflow-hidden border rule bg-white/[0.03] shadow-[0_24px_65px_rgba(0,0,0,0.18)] transition group-hover:border-zinc-500 ${index % 2 ? 'md:order-1' : ''}`}>
          <Image src={project.hero} alt={project.title} fill className={`project-image ${project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'} transition duration-700 group-hover:scale-[1.018]`} sizes="(max-width: 768px) 100vw, 55vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-300 backdrop-blur-sm">Project {String(index + 1).padStart(2, '0')}</div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-300">Open case study ↗</div>
        </div>
      </article>
    </Link>
  )
}
