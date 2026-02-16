# EventFlow API

NestJS backend for EventFlow. Handles event ingestion, streams, consumers, and auth.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your values (especially DATABASE_URL)
npx prisma generate
```

## Database

- **Generate client (after schema changes):** `npx prisma generate`
- **Apply migrations (requires running PostgreSQL):** `npx prisma migrate dev --name <name>`
- **Production deploy:** `npx prisma migrate deploy`

Schema and migrations live in `prisma/` (see docs 3.3 for the data model).

## Run

```bash
npm run start:dev
```

API runs at http://localhost:3000 (or `PORT` from `.env`).

## Scripts

- `npm run build` - compile
- `npm run start` - run
- `npm run start:dev` - run with watch
- `npm run lint` - lint
- `npm run test` - unit tests
- `npm run test:e2e` - e2e tests
