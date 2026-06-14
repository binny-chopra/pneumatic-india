// Single source of truth for company contact details and integrations.

export const COMPANY = {
  name: 'Pneumatic India',
  tagline: 'Hydraulic Systems · Ludhiana',
  email: 'pneumaticindialdh@gmail.com',
  phone: '+91-9815752415',
  gst: '03AAGPC5575L1ZO',
  addressShort: 'Industrial Area-C, Ludhiana – 141011',
  addressFull:
    'B-19/2412, Industrial Area-C, Eastman Chowk, Opp. Durga Mandir, Ludhiana – 141011, Punjab, India',
  socials: {
    facebook: 'https://www.facebook.com/www.pneumaticindia.in',
    instagram: 'https://www.instagram.com/pneumatic_india',
    linkedin: 'https://www.linkedin.com/in/gaurav-chopra06',
  },
}

// Tel href needs digits only (keep the leading +).
export const phoneHref = `tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`
export const mailHref = `mailto:${COMPANY.email}`

// Optional Formspree endpoint (set VITE_FORMSPREE_ENDPOINT in .env).
// When present, the contact form POSTs here and delivers to the inbox.
// When empty, the form falls back to opening the visitor's mail client.
export const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
