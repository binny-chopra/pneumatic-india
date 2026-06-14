import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { HydraulicCircuit } from '../ui/HydraulicCircuit'
import { ArrowRight } from '../icons'
import { STANDARDS } from '../../data/products'
import { HERO_IMAGE } from '../../data/heroImage'

export function Hero() {
  return (
    <section id="top" className="relative pt-[68px] overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {/* Product photo backdrop (company catalogue fittings) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 dark:opacity-35"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Readability scrim: solid behind the headline, fading to reveal the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EEF3FA] via-[#EEF3FA]/85 to-[#EEF3FA]/25 dark:from-[#070E1C] dark:via-[#070E1C]/90 dark:to-[#070E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E6EEF8] dark:to-[#070E1C]" />
        {/* Soft brand glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[36rem] h-[36rem] rounded-full bg-brand-yellow/10 dark:bg-brand-yellow/[0.06] blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <Reveal>
            <Eyebrow>ISO 9001 · ISO 14001 · IATF 16949 certified</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 font-display font-bold leading-[0.98] tracking-tight text-[clamp(2.6rem,6vw,4.6rem)]">
              Hydraulic systems
              <br />
              engineered to
              <br />
              <span className="text-brand-blue dark:text-brand-azure">hold pressure.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
              From Ludhiana, Punjab — a complete catalogue of hoses, adapters, end fittings,
              couplings, distributor valves and manifold blocks. One source for sizes from{' '}
              <span className="font-mono-spec text-brand-blue dark:text-brand-azure">1/8"</span> to{' '}
              <span className="font-mono-spec text-brand-blue dark:text-brand-azure">12"</span> and
              pressures up to{' '}
              <span className="font-mono-spec text-brand-blue dark:text-brand-azure">2000&nbsp;bar</span>.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 font-display font-semibold text-white shadow-xl shadow-brand-blue/30 hover:bg-brand-ink transition"
              >
                Explore products <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/30 dark:border-white/15 px-6 py-3.5 font-display font-semibold hover:border-brand-yellow hover:text-brand-blue dark:hover:text-brand-yellow transition"
              >
                Talk to our team
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="flex flex-col items-center">
          <HydraulicCircuit />
        </Reveal>
      </div>

      <div className="marquee relative border-y border-slate-200 dark:border-white/10 bg-brand-navy text-white overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {STANDARDS.map((s) => (
                <span key={s} className="flex items-center gap-3 px-6 py-3 font-mono-spec text-[12px] tracking-wider">
                  <span className="text-brand-yellow">◆</span>
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
