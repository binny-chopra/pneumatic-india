import { useState } from 'react'
import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { ProductCard } from '../products/ProductCard'
import { CATEGORIES, PRODUCTS } from '../../data/products'

export function Products({ onOpen }) {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)

  return (
    <section id="products" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <Reveal>
            <Eyebrow>Product catalogue</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Eight families. One supplier.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-3 max-w-xl text-slate-500 dark:text-slate-400">
              Select a family to open its datasheet — sizes, pressures, materials and the standards
              it's built to.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`rounded-lg px-4 py-2 font-mono-spec text-[12px] tracking-wide uppercase transition ${
                  filter === c
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/25'
                    : 'border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-brand-yellow'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {list.map((product, i) => (
          <Reveal key={product.id} delay={(i % 4) * 60}>
            <ProductCard product={product} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
