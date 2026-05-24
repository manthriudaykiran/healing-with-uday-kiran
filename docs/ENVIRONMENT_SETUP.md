# Environment Setup

## Prerequisites

- Node.js **20.x** or later
- npm 10+ (or pnpm/yarn — npm shown below)
- Git
- (Optional) PostgreSQL 15+ — only when DB modules ship
- VS Code recommended

## Steps

```bash
git clone <repo-url>
cd UdayKiran_Healing
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable                    | Required | Purpose                                  |
| --------------------------- | -------- | ---------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | yes      | Canonical site URL (SEO, OG)             |
| `NEXT_PUBLIC_SITE_NAME`     | no       | Display name override                    |
| `NEXT_PUBLIC_TAGMANGO_URL`  | yes      | External auth/dashboard redirect target  |
| `DATABASE_URL`              | future   | PostgreSQL connection string             |
| `NEXT_PUBLIC_GA_ID`         | future   | Google Analytics ID                      |
| `RESEND_API_KEY`            | future   | Transactional email provider             |

## VS Code

Recommended extensions auto-prompt via `.vscode/extensions.json`:
Tailwind IntelliSense · Prettier · ESLint · Prisma · Pretty TS Errors · Material Icon Theme.

Format-on-save and ESLint auto-fix are already configured in `.vscode/settings.json`.

## Git hooks

After `npm install`, run once:
```bash
npx husky init
echo "npx lint-staged" > .husky/pre-commit
```
This enables pre-commit formatting + linting via `lint-staged`.
