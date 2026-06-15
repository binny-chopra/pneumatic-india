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

// Client-side email delivery via EmailJS (no backend). When all three values are
// present the contact form sends the enquiry to the business AND a copy to the
// sender, entirely in the browser. Set these in .env (see .env.example).
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

export const emailjsConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
)
