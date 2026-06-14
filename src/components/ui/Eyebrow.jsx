export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono-spec text-[11px] tracking-[0.25em] uppercase text-brand-blue dark:text-brand-azure">
      <span className="h-px w-6 bg-brand-yellow" />
      {children}
    </div>
  )
}
