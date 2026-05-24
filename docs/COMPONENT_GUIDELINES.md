# Component Guidelines

## Three buckets

1. **`components/ui/`** — Primitives. Stateless. Style-only. No business logic. (`Button`, `Card`, `Container`.)
2. **`components/layout/`** — App shell. (`Navbar`, `Footer`.)
3. **`components/sections/`** — Composed homepage/marketing sections. (`Hero`, `CTA`, `TestimonialsCarousel`.)

Feature-specific components live inside their **module** (e.g. `modules/courses/CourseCard.tsx`).

## Rules

- One component per file. Filename = export name (PascalCase).
- Server by default. Add `"use client"` only when necessary.
- Always type props with `interface` or `type`. No `any`.
- Use `cn()` from `@/lib/utils` for conditional classes.
- Use `cva` for variant-driven styles (see `Button`).
- No inline magic numbers — add to `tailwind.config.ts` if reused.

## Accessibility

- Semantic HTML first (`<button>`, `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`).
- All interactive elements must be keyboard-reachable and have visible focus rings.
- Provide `aria-label` for icon-only buttons.
- Animations should respect `prefers-reduced-motion` when added at scale.

## Naming

- Booleans: `is*`, `has*`, `should*`.
- Handlers: `onX` for props, `handleX` for internal.
- Data files: `*.data.ts`. Config files: `*.config.ts`.
