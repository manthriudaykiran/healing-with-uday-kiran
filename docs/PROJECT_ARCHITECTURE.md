# Project Architecture

## Philosophy

The codebase is organised as **composable layers**, not features by page. Each layer has a single responsibility. New modules plug in without touching unrelated code.

## Layers

```
app/         Routing + page composition (thin)
components/  Stateless UI — primitives (ui/), layout/, sections/
modules/     Self-contained feature units (courses, tagmango, contact, ...)
features/    Cross-module flows (future: booking, ai-assistant)
lib/         Framework-adjacent helpers (cn, seo, prisma)
services/    External API clients (fetch wrappers)
hooks/       Reusable React hooks
store/       Zustand global UI state
config/      Static site/app config (env-driven)
constants/   Enums, route maps
types/       Shared TypeScript types
utils/       Pure functions
styles/      Global tokens
prisma/      DB schema
docs/        All documentation
```

## Module contract

Every `modules/*` directory must:

1. Own its own data (`*.data.ts`), components, and logic.
2. Expose a clean public surface via an `index.ts` re-export or named files.
3. Never reach into another module's internals — communicate via `services/` or shared `types/`.
4. Be deletable: removing a module should only break direct importers.

## Path aliases

```ts
"@/*"            // repo root
"@/components/*" // components
"@/modules/*"    // modules
"@/lib/*", "@/services/*", "@/hooks/*", "@/store/*"
"@/config/*", "@/constants/*", "@/types/*", "@/utils/*"
```

## Rendering

- All pages default to **Server Components** (SEO + perf).
- Components that use state, motion, or browser APIs add `"use client"` (Navbar, ContactForm, TestimonialsCarousel, Hero animations).

## Data flow

```
[ External APIs / DB ]  ──>  services/   ──>  modules/{feature}  ──>  components ──>  app/{route}
                                              ▲
                                       config/, types/
```

## Why this scales

- New page → add a folder under `app/`, compose existing modules.
- New feature → add a folder under `modules/`, wire into a page.
- Swap external service → replace one module (e.g. `tagmango/` → `auth-internal/`).
- Add DB → flip on Prisma in `lib/prisma.ts`, build queries inside the module that needs them.
