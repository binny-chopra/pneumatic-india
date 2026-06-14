import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { CAPABILITIES } from '../../data/certifications'

export function Capabilities() {
  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <Reveal>
        <Eyebrow>By the numbers</Eyebrow>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl tracking-tight">
          Built to specification, proven under pressure
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.label} delay={i * 70}>
            <div className="group h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 hover:border-brand-yellow transition">
              <div className="flex items-end gap-1.5">
                <span className="font-display font-bold text-4xl text-brand-blue dark:text-brand-azure">
                  {c.value}
                </span>
                {c.unit && (
                  <span className="font-mono-spec text-xs mb-1.5 text-brand-yellow tracking-widest">{c.unit}</span>
                )}
              </div>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-yellow to-transparent" />
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{c.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
