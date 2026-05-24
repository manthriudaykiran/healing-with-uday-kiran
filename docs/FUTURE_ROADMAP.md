# Future Roadmap

The architecture is designed for these modules to land without rewrites.

## Phase 1 — Internal Auth
Replace TagMango redirect with internal sessions.
- New module: `modules/auth/`
- Drop middleware matcher for `/login`, `/dashboard`.
- Wire `lib/prisma.ts` `User` model.

## Phase 2 — Booking System
- New module: `modules/booking/`
- Calendar, slot picker, payment link.
- Webhook handler under `app/api/webhooks/payment`.

## Phase 3 — Meditation Audio Library
- New module: `modules/library/`
- Static CDN-hosted audio with signed URLs for members.
- Player component in `components/ui/AudioPlayer`.

## Phase 4 — Community Portal
- New module: `modules/community/`
- Threads, posts, reactions. DB-backed.
- Lightweight realtime via Pusher or Supabase Realtime.

## Phase 5 — User Profiles & Dashboard
- Replace `/dashboard` redirect with real route.
- New module: `modules/dashboard/` with widgets.

## Phase 6 — Payment Gateway
- Razorpay / Stripe integration.
- New module: `modules/payments/`.

## Phase 7 — Admin Panel
- New route group: `app/(admin)/`.
- Role-gated via middleware extension.

## Phase 8 — CRM Integration
- `services/crm.ts` wraps HubSpot / Zoho.
- Contact form submissions sync.

## Phase 9 — Newsletter
- Resend / Mailchimp under `services/email.ts`.
- Inline forms in `components/sections/`.

## Phase 10 — Live Sessions & Events
- Module: `modules/events/`.
- Optional integration with Zoom / Daily.co.

## Phase 11 — Mobile App Backend
- Promote `app/api/` to a versioned API (`/api/v1`).
- Add REST/GraphQL gateway under `services/`.

## AI Healing Assistant
- Module: `modules/assistant/`.
- Streaming chat UI + Anthropic / OpenAI behind `services/ai.ts`.
