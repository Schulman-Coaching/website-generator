# Website Generator

A template-based website generator platform that allows users to create beautiful, professional websites in minutes.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TailwindCSS, TypeScript
- **Backend**: Fastify, Drizzle ORM, PostgreSQL
- **Package Manager**: pnpm with workspaces
- **Validation**: Zod (shared between frontend/backend)

## Project Structure

```
website-generator/
├── apps/
│   ├── web/                 # Next.js frontend
│   └── api/                 # Fastify backend
├── packages/
│   └── shared/              # Shared types, validation, constants
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Prerequisites

- Node.js 20+
- pnpm 8+
- PostgreSQL 15+

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/website_generator"
JWT_SECRET="your-secret-key-here"
```

### 3. Set up the database

```bash
# Create the database
createdb website_generator

# Run migrations
pnpm db:push
```

### 4. Start development servers

```bash
# Start both frontend and API
pnpm dev

# Or start individually:
pnpm dev:web   # Frontend at http://localhost:3000
pnpm dev:api   # API at http://localhost:3001
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm dev:web` | Start frontend only |
| `pnpm dev:api` | Start API only |
| `pnpm build` | Build all apps |
| `pnpm lint` | Lint all apps |
| `pnpm typecheck` | Type check all apps |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate` | Run Drizzle migrations |
| `pnpm db:push` | Push schema to database |
| `pnpm db:studio` | Open Drizzle Studio |

## API Endpoints

### Health
- `GET /health` - Health check
- `GET /health/ready` - Readiness check

### Auth (v1)
- `POST /api/v1/auth/register` - Register new account
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/me` - Get current user
- `POST /api/v1/auth/logout` - Logout

### Sites (v1)
- `GET /api/v1/sites` - List user's sites
- `GET /api/v1/sites/:id` - Get site details
- `POST /api/v1/sites` - Create new site
- `PATCH /api/v1/sites/:id` - Update site
- `DELETE /api/v1/sites/:id` - Delete site
- `POST /api/v1/sites/:id/publish` - Publish site

### Templates (v1)
- `GET /api/v1/templates` - List available templates
- `GET /api/v1/templates/:id` - Get template details

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture documentation.

## License

Private - All rights reserved
