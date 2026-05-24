# Healing with Uday Kiran

Premium healing & emotional intelligence platform. Modular Next.js architecture, scalable for future features.

## Quick start

```bash
# 1. Install
npm install

# 2. Configure environment
cp .env.example .env.local

# 3. Run dev server
npm run dev   # http://localhost:3000

# 4. Build for production
npm run build && npm start
```

## Scripts

| Command            | Purpose                          |
| ------------------ | -------------------------------- |
| `npm run dev`      | Start dev server                 |
| `npm run build`    | Production build                 |
| `npm run start`    | Run production server            |
| `npm run lint`     | ESLint                           |
| `npm run typecheck`| TypeScript check                 |
| `npm run format`   | Prettier write                   |
| `npm run db:generate` | Prisma client (when DB added) |

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · shadcn-style primitives · Framer Motion · Zustand · Prisma (PostgreSQL-ready) · ESLint · Prettier · Husky.

## Authentication

Authentication is **delegated to TagMango**. Routes `/login`, `/dashboard`, `/member`, `/account` are intercepted by `middleware.ts` and redirected to:
```
https://academy.udaykiranmanthri.com/web/dashboard/getstarted
```
To swap to internal auth later, replace `modules/tagmango/redirect.ts` and remove the middleware matcher.

## Documentation

- [Project Architecture](./docs/PROJECT_ARCHITECTURE.md)
- [API Structure](./docs/API_STRUCTURE.md)
- [Component Guidelines](./docs/COMPONENT_GUIDELINES.md)
- [Future Roadmap](./docs/FUTURE_ROADMAP.md)
- [Environment Setup](./docs/ENVIRONMENT_SETUP.md)
- [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)
- [Contributing](./docs/CONTRIBUTING.md)
