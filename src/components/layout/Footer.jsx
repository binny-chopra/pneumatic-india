import { Logo } from './Logo'
import { MapPin, Mail, Phone } from '../icons'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../icons/SocialIcons'
import { PRODUCTS } from '../../data/products'
import { COMPANY, mailHref, phoneHref } from '../../data/company'

const SOCIALS = [
  { icon: <FacebookIcon className="w-5 h-5" />, href: COMPANY.socials.facebook, label: 'Facebook' },
  { icon: <InstagramIcon className="w-5 h-5" />, href: COMPANY.socials.instagram, label: 'Instagram' },
  { icon: <LinkedinIcon className="w-5 h-5" />, href: COMPANY.socials.linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#070E1C]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-slate-500 dark:text-slate-400">
              Manufacturer of hydraulic hoses, adapters, end fittings, couplings, distributor valves
              and manifold blocks — Ludhiana, Punjab, India.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono-spec text-[11px] uppercase tracking-widest text-slate-400">Products</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-yellow transition"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono-spec text-[11px] uppercase tracking-widest text-slate-400">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-yellow shrink-0" /> {COMPANY.addressShort}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={mailHref} className="hover:text-brand-blue dark:hover:text-brand-yellow break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={phoneHref} className="hover:text-brand-blue dark:hover:text-brand-yellow">
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-spec text-[11px] text-slate-400">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span>GST {COMPANY.gst} · ISO 9001 · ISO 14001 · IATF 16949</span>
        </div>
      </div>
    </footer>
  )
}
