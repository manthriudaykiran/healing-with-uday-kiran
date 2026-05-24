# Contributing

## Branching

- `main` — always deployable.
- `feat/<short-name>` — new features.
- `fix/<short-name>` — bug fixes.
- `chore/<short-name>` — tooling, docs, refactors.

## Commit style

Conventional Commits:
```
feat(courses): add cohort schedule section
fix(navbar): close mobile menu on route change
docs(readme): clarify env setup
chore(deps): bump framer-motion
```

## Before opening a PR

```bash
npm run typecheck
npm run lint
npm run format
npm run build
```

All four must pass. Pre-commit hook (Husky + lint-staged) handles format/lint automatically.

## Adding a new module

1. Create `modules/<name>/` with at minimum: `index.ts`, components, `*.data.ts` if static data.
2. Add types to `types/index.ts` if shared.
3. Expose the module through a page in `app/<route>/` or a section component.
4. Keep external integrations behind `services/`.
5. Document the module in `docs/FUTURE_ROADMAP.md` if it represents a phase milestone.

## Adding a new page

1. Create `app/<route>/page.tsx`.
2. Export `metadata` via `buildMetadata({ title, path })`.
3. Compose existing section components and modules — avoid bespoke layout where possible.

## Code review checklist

- [ ] No `any` types
- [ ] Server components by default
- [ ] Accessibility: labels, focus, semantic HTML
- [ ] No new external service calls outside `services/`
- [ ] All new env vars added to `.env.example` + `ENVIRONMENT_SETUP.md`
