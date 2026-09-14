const groups = [
  ['Fluid Mechanics & CFD', ['OpenFOAM','RANS','k–ω SST','Multiphase flow','VOF','Euler–Euler','Pressure-drop modelling','Wall treatment','Mesh studies','Thermohydraulics']],
  ['Finite Element Analysis', ['Abaqus','ANSYS','Code_Aster','Structural mechanics','Modal / vibration analysis','Thermomechanics','Contact','Nonlinearities','Fatigue fundamentals','Topology optimization']],
  ['Mechanical Engineering', ['Mechanical design','Dimensioning','Machine dynamics','Turbomachinery','Tolerance / GPS fundamentals','CATIA','SolidWorks','Creo','3DEXPERIENCE']],
  ['Scientific Computing', ['Python','NumPy','pandas','SciPy','MATLAB','Optimization','Numerical methods','Time-series modelling','Machine learning','Git','Linux','C++ fundamentals']],
  ['Verification & Validation', ['Mesh convergence','Time-step sensitivity','Experimental comparison','Critical discrepancy analysis','Post-processing automation','Model limitations']]
]
export default function SkillsPage(){return <main className="shell py-20"><p className="eyebrow">Skills</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.05em]">Engineering domains, not progress bars.</h1><div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">{groups.map(([title,items])=><section key={title as string} className="border-t rule pt-5"><h2 className="text-xl font-semibold">{title}</h2><div className="mt-4 flex flex-wrap gap-2">{(items as string[]).map(i=><span key={i} className="border rule px-3 py-2 text-sm text-zinc-300">{i}</span>)}</div></section>)}</div></main>}
