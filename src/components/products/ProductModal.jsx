import { useEffect } from 'react'
import { ProductIcon } from '../icons/ProductIcon'
import { ArrowRight, Check, Close } from '../icons'

export function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C1730] shadow-2xl overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-brand-blue via-brand-azure to-brand-yellow" />

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="grid place-items-center w-14 h-14 rounded-xl bg-brand-blue text-white">
                <ProductIcon type={product.icon} className="w-8 h-8" />
              </span>
              <div>
                <div className="font-mono-spec text-[10px] tracking-widest uppercase text-brand-yellow">
                  {product.category}
                </div>
                <h3 className="font-display font-bold text-2xl leading-tight">{product.name}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500"
            >
              <Close className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
            {product.detail}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="rounded-lg bg-slate-50 dark:bg-white/[0.04] p-3">
                <div className="font-mono-spec text-[9px] uppercase tracking-widest text-slate-400">{key}</div>
                <div className="mt-1 font-mono-spec text-[13px] font-semibold text-brand-blue dark:text-brand-azure">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <Check className="w-4 h-4 mt-0.5 text-brand-yellow shrink-0" /> {b}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-5 py-3 font-display font-semibold text-brand-navy hover:brightness-95 transition"
          >
            Enquire about {product.name} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
