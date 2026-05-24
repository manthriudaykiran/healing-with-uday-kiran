# API Structure

This project does not currently expose internal APIs — content is static + redirects flow to TagMango.

When APIs are added, follow this structure.

## Route handlers

```
app/api/
  contact/route.ts        # POST: contact form → email/CRM
  courses/route.ts        # GET:  list courses (DB-backed)
  testimonials/route.ts   # GET:  list testimonials
  webhooks/
    tagmango/route.ts     # POST: TagMango enrollment webhook
    payment/route.ts      # POST: payment provider webhook
```

## Conventions

- One HTTP method per file when possible; otherwise one `route.ts` with named exports.
- Validate all input with `zod`.
- Use `services/api.ts` for outbound calls — never raw `fetch` in route handlers.
- Return `NextResponse.json({ data | error }, { status })`.
- Wrap handlers in a `withErrorHandler` utility (to be added when first API ships).

## Response shape

```ts
{ data: T }            // success
{ error: { code, message } } // failure
```

## Caching

- Static-ish reads: `export const revalidate = 3600;`
- Mutations: always `dynamic = "force-dynamic"`.

## Auth (future)

When auth lands internally:
- Session middleware in `middleware.ts` reads cookie, attaches user.
- Route handlers read `getUser(req)` from a `lib/auth.ts` helper.
- TagMango redirect module is retired.
