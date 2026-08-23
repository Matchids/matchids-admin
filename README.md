# Matchids Admin

The internal dashboard administrators use to manage Matchids: Books,
Categories, Kids Art, Users, Orders, Payments, Donations, Donation
Campaigns, Featured Content, and Platform Settings.

This is a separate app from `matchids-web` on purpose — admin tooling has
a different audience, a different security posture (every route requires
an authenticated ADMIN-role account), and shouldn't ship in the same
bundle as the public site.

## What's implemented vs. what's a placeholder

| Section | Status |
|---|---|
| Overview | Real — reads `GET /api/admin/overview` from matchids-backend |
| Books, Categories, Kids Art | Read-only today (existing public endpoints); create/edit forms are the next step, backed by new admin endpoints in matchids-backend |
| Users, Orders, Payments, Donations | Placeholder — matchids-backend doesn't have admin list endpoints for these yet; each placeholder page names exactly what to add |
| Donation Campaigns | Reads active campaigns; create/edit is a placeholder |
| Featured Content, Platform Settings | Placeholder — no data model exists yet |

Nothing here fakes data to look more finished than it is.

## Auth

Sign-in posts to `matchids-backend`'s `POST /api/auth/login` and stores
the returned token client-side (`src/lib/api.ts`). The backend is what
actually enforces ADMIN-only access — this app just refuses to render
anything useful without a token, and shows the backend's error if a
non-admin account tries to sign in.

**Security note:** storing the token in `localStorage` is a starting
point, not a production-hardened pattern — for launch, move to an
httpOnly cookie set by a small Next.js API route proxy in front of
matchids-backend, so the token is never reachable from JavaScript.

## Local setup

```bash
npm install
cp .env.example .env
npm run dev   # http://localhost:3001
```

Requires a running `matchids-backend` with at least one ADMIN-role user
(create one directly via `matchids-database`'s seed or Prisma Studio
during development — there's no public admin sign-up flow, intentionally).
