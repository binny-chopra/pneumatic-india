import { useEffect, useState } from 'react'
import { Check, AlertTriangle, Info, Close } from '../icons'

const TONES = {
  success: {
    Icon: Check,
    ring: 'border-emerald-500/30',
    chip: 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400',
  },
  error: {
    Icon: AlertTriangle,
    ring: 'border-red-500/30',
    chip: 'bg-red-500/15 text-red-500 dark:text-red-400',
  },
  info: {
    Icon: Info,
    ring: 'border-brand-blue/30 dark:border-sky-400/30',
    chip: 'bg-brand-blue/15 text-brand-blue dark:text-sky-300',
  },
}

/**
 * Floating toast. Parent passes a `toast` object ({ id, type, message }) to show
 * one; it slides in, auto-dismisses after `duration`, slides out, then calls
 * onClose. A new object identity (changing id) re-triggers it.
 */
export function Toast({ toast, onClose, duration = 4000 }) {
  const [current, setCurrent] = useState(null)
  const [visible, setVisible] = useState(false)

  // Show on new toast; schedule auto-dismiss.
  useEffect(() => {
    if (!toast) return
    setCurrent(toast)
    setVisible(false)
    const raf = requestAnimationFrame(() => setVisible(true))
    const hide = setTimeout(() => setVisible(false), duration)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hide)
    }
  }, [toast, duration])

  // After the slide-out finishes, unmount and notify the parent.
  useEffect(() => {
    if (visible || !current) return
    const done = setTimeout(() => {
      setCurrent(null)
      onClose?.()
    }, 320)
    return () => clearTimeout(done)
  }, [visible, current, onClose])

  if (!current) return null
  const tone = TONES[current.type] || TONES.info
  const { Icon } = tone

  return (
    <div className="fixed z-[80] inset-x-4 bottom-5 flex justify-center sm:inset-x-auto sm:right-6 sm:justify-end pointer-events-none">
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto flex items-start gap-3 max-w-sm rounded-xl border ${tone.ring} bg-white/95 dark:bg-[#0c1730]/95 backdrop-blur-md px-4 py-3 shadow-2xl shadow-brand-navy/25 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className={`grid place-items-center w-7 h-7 rounded-lg shrink-0 ${tone.chip}`}>
          <Icon className="w-4 h-4" />
        </span>
        <p className="text-sm leading-snug text-slate-700 dark:text-slate-200 pt-0.5">{current.message}</p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss"
          className="ml-1 -mr-1 -mt-0.5 p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0"
        >
          <Close className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
