import { useCallback, useState } from 'react'
import { Copy, Check } from '../icons'

// Robust clipboard write: Clipboard API first, textarea + execCommand fallback
// for older browsers or restricted contexts. Never throws.
async function writeClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

/**
 * Click-to-copy chip. Renders an optional leading icon + label + monospace value
 * and a copy/confirm affordance, with transient "Copied" feedback.
 */
export function CopyButton({ value, label, icon, className = '' }) {
  const [copied, setCopied] = useState(false)

  const onCopy = useCallback(async () => {
    const ok = await writeClipboard(value)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }
  }, [value])

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy ${label ? label + ' ' : ''}${value}`}
      title="Click to copy"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {icon}
      {label && (
        <span className="font-mono-spec text-[11px] uppercase tracking-widest opacity-70">{label}</span>
      )}
      <span className="font-mono-spec text-xs tracking-wide select-all">{value}</span>
      <span className="ml-1 inline-flex items-center gap-1 font-mono-spec text-[10px] uppercase tracking-wider">
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">Copied</span>
          </>
        ) : (
          <Copy className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition" />
        )}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </button>
  )
}
