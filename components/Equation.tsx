'use client'
import { BlockMath } from 'react-katex'
export function Equation({ children }: { children: string }) {
  return <div className="my-6 overflow-x-auto rounded-md border rule bg-black/20 px-4 py-4"><BlockMath math={children} /></div>
}
