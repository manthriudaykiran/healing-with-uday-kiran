# Deployment Guide

## Recommended: Vercel

The fastest path. Native Next.js 15 support.

```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel
vercel --prod
```

Configure environment variables in the Vercel dashboard (Project → Settings → Environment Variables):
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_TAGMANGO_URL`
- `NEXT_PUBLIC_SITE_NAME`
- (future) `DATABASE_URL`, `RESEND_API_KEY`, etc.

## Alternative: Netlify

Uses the `@netlify/plugin-nextjs` runtime. Set the same env vars, build command `npm run build`, publish directory left blank (handled by plugin).

## Self-hosted (Node)

```bash
npm install
npm run build
NODE_ENV=production npm start
# Defaults to port 3000 — front with nginx / Caddy
```

PM2 example:
```bash
pm2 start npm --name healing -- start
pm2 save
pm2 startup
```

## Docker (sketch)

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]
```

## Post-deploy checklist

- [ ] Confirm `/login` and `/dashboard` redirect to TagMango.
- [ ] Verify OG image and canonical URLs render correctly.
- [ ] Run Lighthouse — target 95+ across the board.
- [ ] Validate sitemap & robots when added.
- [ ] Confirm analytics fires.
