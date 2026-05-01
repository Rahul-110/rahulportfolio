---
name: Premium parallax portfolio
overview: Build a premium, dark, parallax storytelling portfolio site optimized for fast loads and smooth interactions, using a performance-first architecture (Astro + React islands) with a consistent design system and carefully budgeted animations.
todos:
  - id: choose-stack-scaffold
    content: Scaffold new Astro site (React integration, Tailwind, font setup) in a new folder (e.g. `web/`) so it doesn’t conflict with the existing Wix Velo repo structure.
    status: completed
  - id: design-system
    content: Implement design tokens (dark premium, glass panels, shadows) + typography scale + spacing system.
    status: completed
  - id: layout-sections
    content: "Build section layouts: Hero, Story, Case Studies, Skills & Tools, Testimonials, Contact/CTA with responsive breakpoints."
    status: completed
  - id: motion-system
    content: Add Lenis smooth scrolling + GSAP ScrollTrigger parallax/pinning + micro-interactions (tilt/glow) with reduced-motion support.
    status: completed
  - id: content-case-studies
    content: Create case study data model + card layout + optional detail pages per project (Problem/Process/Final UI).
    status: completed
  - id: perf-a11y-pass
    content: "Audit and tune: image/font loading, JS island sizes, motion fallbacks, keyboard/focus/contrast, Lighthouse run."
    status: completed
isProject: false
---

## Recommended stack (performance-first)
- **Framework**: Astro (static-first) with React islands only where interaction is needed.
- **Styling**: Tailwind CSS + a small set of CSS variables (design tokens) for glassmorphism, shadows, borders, and typography.
- **Animation**:
  - **Smooth scroll**: Lenis (single scroll loop; disabled for `prefers-reduced-motion`).
  - **Scroll-driven**: GSAP + ScrollTrigger for parallax + storytelling sequences.
  - **Micro-interactions**: Framer Motion for hover/tap states on cards/buttons (or GSAP for all, but keep one “motion system” per element).
- **Typography**: Inter for body + Satoshi (or Space Grotesk) for display. Self-host via `@fontsource/*` to avoid render-blocking.

## Information architecture (UX hierarchy)
Single-page, storytelling landing (best conversion) + optional dedicated `/case-studies/[slug]` pages.
- **Top nav**: Work, About, Skills, Testimonials, Contact + primary CTA.
- **Primary CTA**: “View Work” (scroll to Case Studies) + secondary “Hire Me”.

## Page sections (structured layout)
### 1) Hero (above the fold)
- **Content**: Name, Role (“UI/UX Designer”), 1-line value prop, 2 CTAs.
- **Background**: 3-layer parallax (noise + soft gradient blob + subtle “starfield”/grid), low opacity.
- **Animation behavior**:
  - On load: staggered text reveal (Y + opacity), CTA buttons spring-in.
  - On scroll: background layers move at different rates (depth), hero badge micro-float.
  - Hover: magnetic/tilt on primary CTA, glow on focus/hover.

### 2) About / Story (scroll-based storytelling)
- **Layout**: 3–4 “story beats” (Discover → Define → Design → Deliver) with pinned text column and moving visuals column.
- **Animation behavior**:
  - ScrollTrigger pin: text stays pinned while visuals change.
  - Visuals: UI mockups slide/scale with depth; subtle parallax per layer.
  - Each beat: progress indicator (thin line) fills based on scroll.

### 3) Case Studies (high signal)
- **Layout option A (recommended)**: horizontal scroll gallery on desktop (with snap), vertical stacked cards on mobile.
- **Card content**: Project title + role + outcomes (metrics), with “Problem / Process / Final UI” preview chips.
- **Animation behavior**:
  - Hover: 3D tilt + soft shadow lift + background gradient shift.
  - Scroll: cards reveal with small stagger; horizontal track uses GSAP to map vertical scroll to x-translation.
  - Click: route transition into case study detail.

### 4) Skills & Tools
- **Layout**: interactive skill cards + proficiency bars (or “pill cloud” + expandable details).
- **Animation behavior**:
  - On enter: bars fill (CSS transform/width), icons float gently.
  - Hover: radial glow follows cursor (throttled), card border highlight.

### 5) Testimonials
- **Layout**: 3–5 clean cards; optional subtle carousel only if needed.
- **Animation behavior**:
  - On enter: fade-up stagger.
  - Hover: slight lift + border glow.

### 6) Contact / CTA (conversion)
- **Layout**: strong headline + short promise + contact form + quick links.
- **Animation behavior**:
  - CTA button: animated border/shine on hover, clear focus styles.
  - Success state: inline confirmation micro-animation.

## Component breakdown (Astro + React islands)
- **Layout**
  - `[...]/src/layouts/BaseLayout.astro`: meta, fonts, global background, reduced-motion handling.
  - `[...]/src/components/Nav/Nav.astro`: nav structure; React island only if active-section tracking is needed.
  - `[...]/src/components/Section.astro`: consistent spacing, anchors, container widths.
- **Sections**
  - `[...]/src/sections/Hero.astro` + `HeroMotion.tsx` (island): parallax layers + hero timeline.
  - `[...]/src/sections/Story.astro` + `StoryScroll.tsx`: pinned storytelling + beat transitions.
  - `[...]/src/sections/CaseStudies.astro` + `CaseStudiesTrack.tsx`: horizontal scroll + card hover.
  - `[...]/src/sections/Skills.astro` + `SkillsMotion.tsx`: bar fills + icon float.
  - `[...]/src/sections/Testimonials.astro`
  - `[...]/src/sections/Contact.astro` + `ContactForm.tsx` (optional island for validation/submission).
- **UI primitives**
  - `Button`, `Card`, `GlassPanel`, `GradientText`, `IconBadge`, `KpiChip`.
- **Data**
  - `[...]/src/content/caseStudies.ts`: array of case study metadata + optional MDX body per case.
  - `[...]/src/pages/case-studies/[slug].astro`: detailed case study template.

## Animation system (how it stays smooth)
- **One scroll loop**: Lenis drives a single rAF; GSAP ScrollTrigger uses Lenis’ scroll position (no competing scroll handlers).
- **GPU-friendly transforms**: translate/scale/opacity only; avoid layout thrash (no per-frame top/left).
- **Budgeting**:
  - Parallax layers: max 3–4 active at once.
  - Cursor-follow glows/tilt: requestAnimationFrame + throttling; disable on touch.
- **Accessibility**:
  - Respect `prefers-reduced-motion` (disable Lenis + reduce ScrollTrigger effects).
  - Maintain focus rings, contrast, and reduced-motion alternatives.

## Performance checklist (fast loading)
- Self-host fonts with `font-display: swap`.
- Use `astro:assets` / responsive images + `loading="lazy"` below the fold.
- Keep JS islands small; avoid site-wide heavy listeners.
- Use SVG icons; compress images; avoid video backgrounds.

## What we’ll reuse from your current repo
- The interaction patterns in `[parallax-demo/script.js](parallax-demo/script.js)` (parallax elements, scroll reveal, tilt, magnetic buttons) and the design-token approach in `[parallax-demo/styles.css](parallax-demo/styles.css)` will be translated into an Astro/React architecture with stronger performance guards.
