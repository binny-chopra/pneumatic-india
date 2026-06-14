import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { CopyButton } from '../ui/CopyButton'
import { Shield } from '../icons'
import { CERTS } from '../../data/certifications'
import { COMPANY } from '../../data/company'

export function Certifications() {
  return (
    <section id="certs" className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 blueprint opacity-40" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <Reveal>
              <Eyebrow>Quality you can audit</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl tracking-tight">
                Certified to international standards
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-slate-300 max-w-md">
                Every line is manufactured under a quality, environmental and automotive management
                system — so the part that ships matches the datasheet you signed off.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <CopyButton
                value={COMPANY.gst}
                label="GST"
                icon={<Shield className="w-5 h-5 text-brand-yellow shrink-0" />}
                className="mt-6 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 hover:bg-white/10 hover:border-brand-yellow/40 focus-visible:border-brand-yellow/60 transition"
              />
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {CERTS.map((c, i) => (
              <Reveal key={c.code} delay={i * 80}>
                <div className="h-full rounded-2xl bg-white/[0.06] border border-white/10 p-5 hover:bg-white/[0.1] hover:border-brand-yellow/50 transition text-center">
                  <span className="mx-auto grid place-items-center w-12 h-12 rounded-full border-2 border-brand-yellow text-brand-yellow">
                    <Shield className="w-6 h-6" />
                  </span>
                  <div className="mt-4 font-display font-bold text-lg">{c.code}</div>
                  <div className="mt-1 font-mono-spec text-[10px] tracking-widest uppercase text-slate-400">
                    {c.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
