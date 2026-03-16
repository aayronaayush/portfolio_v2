# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aayush Deo — a full-stack software engineer based in Abu Dhabi, originally from Fiji. The site is being rebuilt from a legacy Next.js 11 (Pages Router, React-JSS) stack to a modern stack.

## Target Stack (New Build)

- **Framework**: Next.js 14+ with App Router and TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Design System

- **Primary**: Deep teal `#0D2B3E`
- **Accent**: Blue `#1A9FD4`
- **Light blue**: `#7DCCE8`
- **Theme**: Dark, premium, confident — no jargon, no purple gradients
- **Typography**: Bold, editorial — avoid Inter/Roboto/system fonts
- **Layout**: Grid-breaking, asymmetric sections, generous white space
- **Animations**: Staggered hero reveal, scroll-triggered section entries via Framer Motion
- **Undertone**: Pacific/ocean (Fiji roots, teal palette) without being literal

## Stack Details

- **Next.js 14 App Router** with TypeScript (strict mode)
- **Tailwind CSS** with custom brand theme defined in `tailwind.config.ts`
- **Framer Motion** for animations
- **lucide-react** for icons
- **clsx + tailwind-merge** via `cn()` helper in `lib/utils.ts`
- Fonts: **Syne** (display/headings) + **DM Sans** (body) loaded via `next/font/google`

## Brand Colors

Defined as CSS custom properties in `globals.css`:

| Token        | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| `brand-bg`  | `#F5FBEF` | Page background (light mint) |
| `brand-surface` | `#E8F0E2` | Cards, sections          |
| `brand-accent` | `#17B890` | CTAs, links, highlights (teal green) |
| `brand-accent-light` | `#1DD9A8` | Hover states, gradients |
| `brand-text` / `brand-white` | `#000000` | Text, icons (black) |

Use Tailwind classes like `bg-brand-bg`, `text-brand-accent`, etc.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint check
- `npm start` — serve production build

## Architecture

### Component Organization

- `components/ui/` — Primitive reusable components (Button, Card, Badge). No business logic.
- `components/layout/` — Navbar, Footer. Rendered in `app/layout.tsx`, wrap all pages.
- `components/sections/` — Page sections (HeroSection, AboutSection, etc.). Each is self-contained.

### Key Conventions

- **Server components by default.** Only add `"use client"` when the component needs interactivity, hooks, or Framer Motion.
- **All component props must have explicit TypeScript interfaces.** No `any` types.
- **Use `cn()` from `lib/utils.ts`** for all conditional/merged classNames. Never raw string concatenation.
- **No inline styles.** Tailwind only, except CSS custom properties in `globals.css`.
- **Every page must export `generateMetadata`** for SEO.
- **Mobile-first, fully responsive.** Design for mobile breakpoint first, then scale up.

### Pages and Routing

All pages use the App Router (`app/` directory). The home page (`app/page.tsx`) composes all section components in order.

### App Router Structure (Target)

Pages/sections: Hero, About, Skills, Contact

### Data Layer

Content lives in `/data/` as typed TypeScript constants:
- `workExperience.ts` — work history (Experience[])
- `projects.ts` — project showcases (Project[])
- `skills.ts` — tech skills with logos
- `testimony.ts` — testimonials

Types are defined in `/types.ts` at the root.

### Static Assets

`/public/` contains images, icons, CV PDF, and favicon.

## Constraints

- Mobile responsive
- Core Web Vitals green
- WCAG AA accessible
- SEO-ready (meta tags, OG images)
- Contact via mailto link (no form backend required)

## Key Skills to Showcase

Flutter, React, Next.js, TypeScript, Node.js, GCP, AWS, Python/Flask, SQL/NoSQL

## Development Workflow

### Visual Verification Loop

After implementing any visual change (component, section, page, or style update), follow this loop:

1. Take a screenshot of the result in the browser (use browser automation tools).
2. Review the screenshot yourself — check layout, spacing, colors, typography, responsiveness, and brand alignment.
3. If issues are found, fix them and take another screenshot (iterate up to **2 self-review cycles**).
4. After 2 iterations, present the screenshot to the user for review and suggest any remaining improvements.
5. Incorporate user feedback until the user accepts.

### Project Plan

`PROJECT_PLAN.md` tracks milestones and tasks for the build. **After completing work on any milestone item, check it off in the plan.** Note any scope changes or deviations. Future sessions should read this file first to understand progress.

### Knowledgebase

Maintain `KNOWLEDGEBASE.md` at the project root. This file must contain comprehensive, up-to-date information about the project: what has been built, current state of each page/component, design decisions made, and any deviations from the original plan. **Update it after every meaningful change.** Future sessions should read this file first to understand where things stand.

### Git

- `main` — production branch
- Branch from and PR into `main`
