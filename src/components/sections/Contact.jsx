import { Reveal } from '../ui/Reveal'
import { Eyebrow } from '../ui/Eyebrow'
import { ContactForm } from './ContactForm'
import { MapPin, Mail, Phone } from '../icons'
import { COMPANY, mailHref, phoneHref } from '../../data/company'

export function Contact() {
  const details = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Works', value: COMPANY.addressFull },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: COMPANY.email, href: mailHref },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: COMPANY.phone, href: phoneHref },
  ]

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Reveal>
            <Eyebrow>Request a quote</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Tell us what you're building
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-md">
              Send the product, size, pressure rating and quantity. We'll come back with availability
              and pricing.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {details.map(({ icon, label, value, href }, i) => (
              <Reveal key={label} delay={120 + i * 70}>
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-azure/15 dark:text-brand-azure shrink-0">
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono-spec text-[10px] uppercase tracking-widest text-slate-400">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-brand-blue dark:hover:text-brand-yellow break-words transition">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
