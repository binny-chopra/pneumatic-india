import { useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail } from '../icons'
import { Toast } from '../ui/Toast'
import { COMPANY, EMAILJS, emailjsConfigured } from '../../data/company'

const inputCls =
  'w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-4 py-3 text-sm outline-none focus:border-brand-blue dark:focus:border-brand-azure transition disabled:opacity-60'

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
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState(null)
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const notify = (type, message) => setToast({ id: Date.now(), type, message })

  const submit = useCallback(
    async (e) => {
      e.preventDefault()
      if (sending) return

      // 1) Validation — must pass before anything is sent.
      if (!form.name.trim() || !isEmail(form.email) || !form.message.trim()) {
        notify('error', 'Please add your name, a valid email and a message.')
        return
      }

      setSending(true)

      // Parameters consumed by the EmailJS template (see .env.example for setup).
      const params = {
        to_email: `${COMPANY.email}, ${form.email}`, // business + sender
        from_name: form.name,
        reply_to: form.email,
        user_email: form.email,
        company: form.company.trim() || '—',
        message: form.message.trim(),
      }

      // Not configured yet (e.g. this preview) — demonstrate the flow honestly.
      if (!emailjsConfigured) {
        await new Promise((r) => setTimeout(r, 600))
        setForm(EMPTY)
        setSending(false)
        notify('info', 'Preview only — add your EmailJS keys to actually send. Fields cleared.')
        return
      }

      try {
        await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, params, {
          publicKey: EMAILJS.publicKey,
        })
        setForm(EMPTY)
        notify('success', 'Thanks! Your enquiry was sent — a copy is on its way to your inbox too.')
      } catch {
        notify('error', `Couldn't send right now. Please email us at ${COMPANY.email}.`)
      } finally {
        setSending(false)
      }
    },
    [form, sending],
  )

  return (
    <>
      <form
        onSubmit={submit}
        className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8 shadow-xl"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Your name">
            <input className={inputCls} value={form.name} onChange={set('name')} placeholder="Full name" autoComplete="name" disabled={sending} />
          </Field>
          <Field label="Email">
            <input className={inputCls} type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" autoComplete="email" disabled={sending} />
          </Field>
        </div>

        <div className="mt-4">
          <Field label="Company (optional)">
            <input className={inputCls} value={form.company} onChange={set('company')} placeholder="Company name" autoComplete="organization" disabled={sending} />
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
              disabled={sending}
            />
          </Field>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 font-display font-semibold text-white hover:bg-brand-ink disabled:opacity-60 disabled:cursor-not-allowed transition shadow-lg shadow-brand-blue/30"
        >
          <Mail className="w-5 h-5" /> {sending ? 'Sending…' : 'Send'}
        </button>

        <p className="mt-3 font-mono-spec text-[10px] text-slate-400">
          Sent to {COMPANY.email} — with a copy to your address. No app opens.
        </p>
      </form>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  )
}
