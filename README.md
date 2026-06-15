# Pneumatic India — Product Catalogue Web App

Marketing and product-catalogue site for **Pneumatic India** (Ludhiana, Punjab) — a
manufacturer of hydraulic hoses, adapters, end fittings, couplings, distributor valves
and manifold blocks.

Built with **React 19**, **Vite 6** and **Tailwind CSS v4** (via the official Vite plugin —
no CDN, so there's no "should not be used in production" warning).

## Features

- Steel-blue + industrial-yellow theme with a clean catalogue-overview hero.
- Light / dark mode that defaults to the visitor's OS setting and remembers their choice.
- Filterable product catalogue; each family opens a datasheet modal.
- Contact form that emails the business — works with zero backend.
- Responsive, keyboard-accessible, and respects `prefers-reduced-motion`.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

Requires Node.js 18+.

## Contact form email (FormSubmit)

The contact form sends each enquiry to the business **and** a copy to the sender
— with no backend, no account and no keys. It uses
[FormSubmit](https://formsubmit.co): the app simply POSTs to
`https://formsubmit.co/ajax/<business-email>`.

The only setup is a **one-time activation**: the first time the form is
submitted, FormSubmit emails the business inbox an activation link — click it
once and delivery is enabled from then on.

To change the recipient, edit `email` in `src/data/company.js`. Nothing else to
configure.

## Deploying

This is a static site. Build it and drop `dist/` on any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, cPanel, …):

```bash
npm run build
```

On Netlify/Vercel: build command `npm run build`, publish directory `dist`.
Set `VITE_FORMSPREE_ENDPOINT` in the host's environment variables if you use Formspree.

## Project structure

```
src/
├── components/
│   ├── icons/        Shared + product + social icons
│   ├── layout/       Navbar, Footer, Logo
│   ├── products/     ProductCard, ProductModal
│   ├── sections/     Hero, Capabilities, Products, Certifications, Contact, ContactForm
│   └── ui/           Eyebrow, Reveal, ThemeToggle, PressureGauge
├── data/             company, products, certifications (all content lives here)
├── hooks/            useTheme, useReveal
├── App.jsx
├── main.jsx
└── index.css         Tailwind import + design tokens + custom animations
```

To edit catalogue content, change the files in `src/data/` — no component edits needed.
