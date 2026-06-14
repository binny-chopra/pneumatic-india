import { ProductIcon } from '../icons/ProductIcon'
import { COMPANY } from '../../data/company'

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 group" aria-label={`${COMPANY.name} home`}>
      <span className="relative grid place-items-center w-10 h-10 rounded-lg bg-brand-blue text-white shadow-lg shadow-brand-blue/30">
        <span
          className="absolute inset-0 rounded-lg ring-2 ring-brand-yellow/0 group-hover:ring-brand-yellow/80 transition"
          aria-hidden="true"
        />
        <ProductIcon type="fitting" className="w-6 h-6" />
      </span>
      <span className="leading-tight">
        <span className="block font-display font-bold text-[15px] tracking-tight uppercase">
          {COMPANY.name}
        </span>
        <span className="block mt-1.5 font-mono-spec font-bold text-[10px] tracking-[0.22em] text-brand-blue dark:text-sky-300 uppercase">
          {COMPANY.tagline}
        </span>
      </span>
    </a>
  )
}
