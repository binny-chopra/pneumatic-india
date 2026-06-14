import { useCallback, useState } from 'react'
import { Mail, Check } from '../icons'
import { COMPANY, FORMSPREE_ENDPOINT } from '../../data/company'

const inputCls =
  'w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-brand-blue dark:focus:border-brand-azure transition'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono-spec text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
const EMPTY = { name: '', email: '', company: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState({ state: 'idle', msg: '' })
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = useCallback(
    async (e) => {
      e.preventDefault()

      if (!form.name.trim() || !isEmail(form.email) || !form.message.trim()) {
        setStatus({ state: 'error', msg: 'Please add your name, a valid email and a message.' })
        return
      }

      setStatus({ state: 'sending', msg: '' })

      // Path A — Formspree: delivers to the inbox in the background.
      if (FORMSPREE_ENDPOINT) {
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...form,
              _subject: `Website enquiry from ${form.name}`,
              _cc: form.email, // auto-copy the person who filled the form
            }),
          })
          if (!res.ok) throw new Error('network')
          setStatus({
            state: 'success',
            msg: "Thanks — your enquiry is on its way, and a copy has been sent to your email.",
          })
          setForm(EMPTY)
        } catch {
          setStatus({
            state: 'error',
            msg: `Couldn't send right now. Please email us directly at ${COMPANY.email}.`,
          })
        }
        return
      }

      // Path B — no endpoint set: open the visitor's mail client, pre-addressed,
      // CC'ing their own address so they keep a copy.
      const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || '-'}\n\n${form.message}`,
      )
      const cc = encodeURIComponent(form.email)
      window.location.href = `mailto:${COMPANY.email}?cc=${cc}&subject=${subject}&body=${body}`
      setStatus({
        state: 'success',
        msg: 'Your email app is opening — it CCs your address so you keep a copy. Just hit send.',
      })
    },
    [form],
  )

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8 shadow-xl"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name">
          <input className={inputCls} value={form.name} onChange={set('name')} placeholder="Full name" autoComplete="name" />
        </Field>
        <Field label="Email">
          <input className={inputCls} type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Company (optional)">
          <input className={inputCls} value={form.company} onChange={set('company')} placeholder="Company name" autoComplete="organization" />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="What do you need?">
          <textarea
            className={`${inputCls} resize-none`}
            rows="5"
            value={form.message}
            onChange={set('message')}
            placeholder="Tell us the product, size, pressure rating and quantity…"
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status.state === 'sending'}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 font-display font-semibold text-white hover:bg-brand-ink disabled:opacity-60 transition shadow-lg shadow-brand-blue/30"
      >
        <Mail className="w-5 h-5" /> {status.state === 'sending' ? 'Sending…' : 'Send email'}
      </button>

      <div aria-live="polite" className="min-h-[1.25rem] mt-3">
        {status.state === 'success' && (
          <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
            <Check className="w-4 h-4" /> {status.msg}
          </p>
        )}
        {status.state === 'error' && <p className="text-sm text-red-500">{status.msg}</p>}
      </div>

      <p className="mt-1 font-mono-spec text-[10px] text-slate-400">
        Goes to {COMPANY.email} — with a copy to your address.
      </p>
    </form>
  )
}
