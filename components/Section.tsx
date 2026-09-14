export function Section({ index, title, children }: { index: string, title: string, children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t rule py-10 md:grid-cols-[180px_1fr]">
      <div><p className="eyebrow">{index}</p><h2 className="mt-2 text-lg font-semibold">{title}</h2></div>
      <div className="prose-engineering max-w-3xl">{children}</div>
    </section>
  )
}
