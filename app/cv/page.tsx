const experiences = [
  ['2025–2026', 'KIT · Institute of Fluid Mechanics', 'Master thesis — validation of a hybrid VOF / Euler–Euler multiphase CFD model for PEM-electrolyzer gas–liquid flows. OpenFOAM workflow, mesh/time-step sensitivity, comparison with experiments and Python/ParaView post-processing.'],
  ['2024', 'ADEME · Strasbourg', 'Assistant-engineer internship — industrial energy transition. Waste-heat potential, technical/energy/economic comparison of solutions and decision-support documents.'],
  ['2023', 'Punch Powerglide · Strasbourg', 'Production and quality-control internship in an industrial manufacturing environment.'],
]

const education = [
  ['2024–2026', 'Karlsruhe Institute of Technology (KIT)', 'M.Sc. Maschinenbau · Franco-German double degree. Fluid mechanics, turbulence, numerical methods and physical modelling.'],
  ['2022–2026', 'Arts et Métiers — ENSAM', 'Diplôme d’Ingénieur Généraliste. Mechanics, materials, design, manufacturing and finite elements.'],
  ['2020–2022', 'CPGE PTSI / PT* · Lycée Couffignal', 'Mathematics, physics and engineering sciences.'],
]

function Timeline({ items }: { items: string[][] }) {
  return <div className="mt-6 max-w-5xl">{items.map(([date,title,body]) => <div key={date+title} className="grid gap-3 border-t rule py-7 md:grid-cols-[160px_1fr]"><p className="font-mono text-sm text-sky-200">{date}</p><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-zinc-400">{body}</p></div></div>)}</div>
}

export default function CvPage(){
  return <main className="shell py-20">
    <p className="eyebrow">CV / Experience</p>
    <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-.05em]">Mechanical engineer — simulation, modelling &amp; validation</h1>
    <p className="mt-6 max-w-3xl text-lg text-zinc-400">Arts et Métiers / KIT double-degree profile focused on CFD, finite elements, thermomechanics, vibration, thermohydraulics and scientific computing. Available from September 2026; mobility France, Germany and Switzerland.</p>
    <div className="mt-8 flex flex-wrap gap-3">
      <a href="/docs/alexandre-sigiridis-schlepp-cv.pdf" target="_blank" rel="noreferrer" className="bg-zinc-100 px-5 py-3 text-sm font-medium text-black">Open CV PDF</a>
      <a href="https://www.linkedin.com/in/alexandre-sigiridis-schlepp/" target="_blank" rel="noreferrer" className="border rule px-5 py-3 text-sm">LinkedIn</a>
      <a href="mailto:sigischlepp.alex@gmail.com" className="border rule px-5 py-3 text-sm">Email</a>
    </div>
    <h2 className="mt-16 text-2xl font-semibold">Experience</h2><Timeline items={experiences} />
    <h2 className="mt-16 text-2xl font-semibold">Education</h2><Timeline items={education} />
  </main>
}
