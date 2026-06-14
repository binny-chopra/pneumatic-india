import { ProductIcon } from '../icons/ProductIcon'
import { ArrowRight } from '../icons'

export function ProductCard({ product, onOpen }) {
  return (
    <button
      onClick={() => onOpen(product)}
      className="group text-left h-full w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 flex flex-col hover:-translate-y-1 hover:border-brand-blue dark:hover:border-brand-azure hover:shadow-2xl hover:shadow-brand-blue/10 transition duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-azure/15 dark:text-brand-azure group-hover:bg-brand-yellow group-hover:text-brand-navy transition">
          <ProductIcon type={product.icon} />
        </span>
        <span className="font-mono-spec text-[10px] tracking-widest uppercase text-slate-400 dark:text-slate-500">
          {product.category}
        </span>
      </div>

      <h3 className="mt-5 font-display font-semibold text-lg leading-snug">{product.name}</h3>
      <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 flex-1">{product.tagline}</p>

      <dl className="mt-4 space-y-1.5 font-mono-spec text-[11px]">
        {Object.entries(product.specs).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between gap-3 border-b border-dashed border-slate-200 dark:border-white/10 pb-1"
          >
            <dt className="text-slate-400 uppercase tracking-wider">{key}</dt>
            <dd className="text-brand-blue dark:text-brand-azure font-medium text-right">{value}</dd>
          </div>
        ))}
      </dl>

      <span className="mt-4 inline-flex items-center gap-1 font-mono-spec text-[11px] uppercase tracking-widest text-slate-400 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition">
        View datasheet <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </button>
  )
}
