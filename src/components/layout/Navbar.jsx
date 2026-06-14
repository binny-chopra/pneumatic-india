import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { ThemeToggle } from '../ui/ThemeToggle'
import { ArrowRight, Menu, Close } from '../icons'

const LINKS = [
  ['Products', '#products'],
  ['Capabilities', '#capabilities'],
  ['Certifications', '#certs'],
  ['Contact', '#contact'],
]

export function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#F4F7FB]/85 dark:bg-[#070E1C]/85 border-b border-slate-200/70 dark:border-white/10'
          : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono-spec text-[12px] tracking-wide uppercase text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-yellow transition-colors"
            >
              {label}
            </a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-yellow px-4 py-2 font-display font-semibold text-[13px] text-brand-navy hover:brightness-95 transition shadow-lg shadow-brand-yellow/25"
          >
            Request a quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-lg text-brand-navy dark:text-white"
          >
            {open ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-1 bg-[#F4F7FB]/95 dark:bg-[#070E1C]/95 backdrop-blur border-b border-slate-200 dark:border-white/10">
          <div className="flex flex-col gap-1">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 rounded-lg font-mono-spec text-sm uppercase tracking-wide text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-lg bg-brand-yellow px-4 py-3 font-display font-semibold text-sm text-brand-navy"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
