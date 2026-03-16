# Project Plan — Portfolio v3

## Milestone 1: Foundation

- [x] Configure Tailwind theme with brand colors (`brand-bg`, `brand-surface`, `brand-accent`, `brand-accent-light`, `brand-white`)
- [x] Set up fonts: Syne (display/headings) + DM Sans (body) via `next/font/google`
- [x] Create `lib/utils.ts` with `cn()` helper (clsx + tailwind-merge)
- [x] Set up `globals.css` with CSS custom properties and base styles
- [x] Create root `layout.tsx` with dark theme, fonts, and metadata
- [x] Install Framer Motion and lucide-react

## Milestone 2: Layout Components

- [x] Navbar — logo/name, nav links, mobile hamburger menu
- [x] Footer — email, LinkedIn, GitHub links
- [x] Responsive shell working on mobile and desktop

## Milestone 3: Hero Section

- [x] Full-viewport hero with name, punchy one-liner, CTA button
- [x] Staggered reveal animation (Framer Motion)
- [x] Responsive typography scaling

## Milestone 4: About Section

- [x] Background story: Fiji → Abu Dhabi, full-stack engineer
- [x] Asymmetric layout with generous white space
- [x] Scroll-triggered entry animation

## Milestone 5: Skills Section

- [x] Display: Flutter, React, Next.js, TypeScript, Node.js, GCP, AWS, Python/Flask, SQL/NoSQL
- [x] Visual grid or tag-based layout
- [x] Scroll-triggered animation

## Milestone 6: Contact Section

- [x] Email mailto link + LinkedIn + GitHub
- [x] Clean, minimal layout
- [x] CTA styling consistent with hero

## Milestone 7: Polish & SEO

- [x] `generateMetadata` on all pages
- [x] OG image and meta tags
- [ ] Favicon
- [ ] Lighthouse audit — Core Web Vitals green
- [ ] WCAG AA accessibility pass
- [ ] Final responsive QA across breakpoints
