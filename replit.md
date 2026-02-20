# replit.md

## Overview

Blue Lobster Travel is a luxury travel website focused on New England destinations. It's a full-stack web application with a marketing-style homepage featuring scroll animations, a destination builder quiz, and a contact form. The brand identity uses a nautical/maritime theme with a luxury editorial design aesthetic (serif headings, sharp corners, navy/gold color palette).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript, built using Vite
- **Routing**: Wouter (lightweight client-side router)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming. Custom luxury design system with "Deep Maritime Blue" color palette, Playfair Display (serif headings) and DM Sans (body text) fonts
- **Animations**: Framer Motion for scroll reveal animations and page transitions
- **State/Data**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (tsx for dev, esbuild for production)
- **API Design**: REST API with a shared route contract in `shared/routes.ts` that defines paths, methods, input schemas, and response schemas using Zod. Both client and server reference the same contract.
- **Database**: PostgreSQL via `node-postgres` (pg) pool
- **ORM**: Drizzle ORM with drizzle-zod for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` — currently has a `contacts` table (id, name, email, message, createdAt)
- **Storage pattern**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation, providing a clean abstraction layer

### Shared Code
- `shared/schema.ts` — Database schema (Drizzle) and Zod validation schemas
- `shared/routes.ts` — API route contract with type-safe path, method, input, and response definitions

### Development vs Production
- **Dev**: Vite dev server with HMR proxied through Express (`server/vite.ts`)
- **Production**: Vite builds static assets to `dist/public`, esbuild bundles server to `dist/index.cjs`, Express serves static files via `server/static.ts`
- **Build script**: `script/build.ts` handles both client (Vite) and server (esbuild) builds, with an allowlist for bundled server dependencies

### Database Management
- Schema changes use `drizzle-kit push` (via `npm run db:push`)
- Migrations output to `./migrations` directory
- `DATABASE_URL` environment variable required

## External Dependencies

- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable. Uses `pg` (node-postgres) pool with Drizzle ORM
- **Google Fonts**: Playfair Display and DM Sans loaded via Google Fonts CDN
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev-only Replit integrations)
- **No authentication**: The app currently has no auth system
- **No external APIs**: The app is self-contained with just a contact form submission endpoint