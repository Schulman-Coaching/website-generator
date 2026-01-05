# Website Generator Platform - Architecture Design

A template-based website builder platform similar to Clio's law firm website builder, designed for 50K+ users with platform hosting and export capabilities.

## Overview

### Key Features
- Pre-designed themes users can customize
- Built-in integrations (booking, forms, payments, CRM)
- Platform hosting + export option
- Multi-tenant architecture for scale

---

## System Context Diagram

```
                                    ┌─────────────────────────────────────────┐
                                    │           External Services             │
                                    │  ┌─────────┐ ┌─────────┐ ┌───────────┐  │
                                    │  │ Stripe  │ │Calendar │ │ Email/SMS │  │
                                    │  └────┬────┘ └────┬────┘ └─────┬─────┘  │
                                    └───────┼──────────┼─────────────┼────────┘
                                            │          │             │
┌──────────────┐                     ┌──────┴──────────┴─────────────┴──────┐
│   End Users  │ ─── view sites ───▶ │                                      │
│  (Visitors)  │                     │      Website Generator Platform      │
└──────────────┘                     │                                      │
                                     │  ┌────────────────────────────────┐  │
┌──────────────┐                     │  │         Builder App            │  │
│   Customers  │ ─── build sites ──▶ │  │  (Template Editor + Dashboard) │  │
│ (Subscribers)│                     │  └────────────────────────────────┘  │
└──────────────┘                     │                                      │
                                     │  ┌────────────────────────────────┐  │
┌──────────────┐                     │  │      Generated Sites Host      │  │
│    Admins    │ ─── manage ───────▶ │  │    (Multi-tenant CDN/Edge)     │  │
└──────────────┘                     │  └────────────────────────────────┘  │
                                     └──────────────────────────────────────┘
                                                       │
                                            ┌──────────┴──────────┐
                                            │   Domain Registrar  │
                                            │   (DNS Management)  │
                                            └─────────────────────┘
```

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              PRESENTATION LAYER                                  │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │    Builder SPA      │  │   Customer Portal   │  │   Admin Dashboard       │  │
│  │  (React/Next.js)    │  │   (Account Mgmt)    │  │   (Internal Tools)      │  │
│  └─────────┬───────────┘  └─────────┬───────────┘  └───────────┬─────────────┘  │
└────────────┼────────────────────────┼──────────────────────────┼────────────────┘
             │                        │                          │
             ▼                        ▼                          ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                 API GATEWAY                                      │
│            (Rate Limiting, Auth, Request Routing, API Versioning)               │
└─────────────────────────────────────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              SERVICE LAYER                                       │
│                                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │   Auth       │  │   Site       │  │   Template   │  │   Asset Service      │ │
│  │   Service    │  │   Service    │  │   Service    │  │   (Images/Media)     │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────────────┘ │
│                                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │   Publish    │  │   Domain     │  │   Forms/     │  │   Analytics          │ │
│  │   Service    │  │   Service    │  │   Leads CRM  │  │   Service            │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────────────┘ │
│                                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                           │
│  │   Billing    │  │   Export     │  │   Booking/   │                           │
│  │   Service    │  │   Service    │  │   Calendar   │                           │
│  └──────────────┘  └──────────────┘  └──────────────┘                           │
└─────────────────────────────────────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              DATA LAYER                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │ PostgreSQL  │  │    Redis    │  │     S3      │  │   Elasticsearch        │ │
│  │ (Primary DB)│  │   (Cache)   │  │  (Assets)   │  │   (Search/Analytics)   │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Site Hosting Architecture (Multi-Tenant)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                         GENERATED SITES DELIVERY                                │
│                                                                                 │
│    customer1.yourplatform.com  ──┐                                              │
│    customer2.yourplatform.com  ──┼──▶ ┌─────────────┐    ┌──────────────────┐  │
│    www.customdomain.com        ──┤    │  Cloudflare │───▶│  Edge Workers/   │  │
│    www.anotherclient.com       ──┘    │     CDN     │    │  Lambda@Edge     │  │
│                                       └──────┬──────┘    └────────┬─────────┘  │
│                                              │                    │            │
│                                              │     ┌──────────────┘            │
│                                              ▼     ▼                           │
│                                       ┌─────────────────┐                      │
│                                       │   Site Router   │                      │
│                                       │ (Tenant Lookup) │                      │
│                                       └────────┬────────┘                      │
│                                                │                               │
│              ┌─────────────────────────────────┼──────────────────────────┐    │
│              ▼                                 ▼                          ▼    │
│     ┌─────────────────┐              ┌─────────────────┐       ┌────────────┐  │
│     │  Static Assets  │              │  Dynamic APIs   │       │  Forms/    │  │
│     │  (S3 + CDN)     │              │ (Booking, CRM)  │       │  Payments  │  │
│     └─────────────────┘              └─────────────────┘       └────────────┘  │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## Core Data Model

```
┌─────────────────────┐       ┌─────────────────────┐
│       Account       │       │    Subscription     │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │──────▶│ id (PK)             │
│ email               │       │ account_id (FK)     │
│ password_hash       │       │ plan_type           │
│ created_at          │       │ status              │
│ settings (JSONB)    │       │ stripe_id           │
└─────────────────────┘       └─────────────────────┘
          │
          │ 1:N
          ▼
┌─────────────────────┐       ┌─────────────────────┐
│        Site         │       │      Template       │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │──────▶│ id (PK)             │
│ account_id (FK)     │       │ name                │
│ template_id (FK)    │       │ category            │
│ subdomain           │       │ base_styles (JSONB) │
│ custom_domain       │       │ schema_version      │
│ status (draft/live) │       │ thumbnail_url       │
│ published_at        │       └─────────────────────┘
│ seo_settings (JSONB)│
└─────────────────────┘
          │
          │ 1:N
          ▼
┌─────────────────────┐       ┌─────────────────────┐
│        Page         │       │      Component      │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │       │ id (PK)             │
│ site_id (FK)        │──────▶│ page_id (FK)        │
│ slug                │       │ type (hero/form/..) │
│ title               │       │ order               │
│ is_homepage         │       │ props (JSONB)       │
│ meta_tags (JSONB)   │       │ styles (JSONB)      │
└─────────────────────┘       └─────────────────────┘
          │
          │
          ▼
┌─────────────────────┐       ┌─────────────────────┐
│       Asset         │       │       Lead          │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │       │ id (PK)             │
│ site_id (FK)        │       │ site_id (FK)        │
│ type (image/doc)    │       │ form_data (JSONB)   │
│ s3_key              │       │ source_page         │
│ cdn_url             │       │ created_at          │
│ metadata (JSONB)    │       │ status              │
└─────────────────────┘       └─────────────────────┘
```

---

## Key Architectural Decisions

### 1. Site Storage Strategy

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **JSON Document per Site** | Fast reads, simple schema | Complex queries, migration challenges | **Recommended** for page/component data |
| **Relational Tables** | Strong consistency, complex queries | More joins, slower for full-page loads | Use for accounts, billing, leads |
| **Hybrid Approach** | Best of both | More complexity | **Selected** |

### 2. Site Rendering Strategy

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **SSG at Publish Time** | Fastest delivery, cheapest hosting, best SEO | Rebuild needed for dynamic content | **Recommended** for site content |
| **SSR on Request** | Always fresh | Higher latency, more compute cost | Use for dynamic features (forms, booking) |
| **Client-Side Rendering** | Simple | Poor SEO, slow initial load | Avoid for public sites |

**Recommendation**: Pre-build static HTML/CSS at publish time, inject dynamic widgets via iframes or lazy-loaded JS.

### 3. Multi-Tenant Hosting

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Single S3 Bucket + CDN** | Simple, cost-effective | Domain routing complexity | **Selected** |
| **Bucket per Customer** | Strong isolation | Expensive at scale, complex management | Enterprise tier only |
| **Kubernetes per Customer** | Full isolation | Overkill for static sites | Not recommended |

---

## Technology Recommendations

```
┌────────────────────────────────────────────────────────────────┐
│                    RECOMMENDED TECH STACK                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  FRONTEND                                                      │
│  ├─ Next.js 14+ (App Router)     Builder application          │
│  ├─ React + TypeScript           Component library            │
│  ├─ TailwindCSS                  Styling (builder + templates)│
│  ├─ Zustand or Jotai             State management             │
│  └─ React DnD / dnd-kit          Drag-and-drop editing        │
│                                                                │
│  BACKEND                                                       │
│  ├─ Node.js + Fastify            High-performance API         │
│  │   (or NestJS for structure)                                │
│  ├─ PostgreSQL                   Primary database             │
│  ├─ Redis                        Caching, sessions, queues    │
│  ├─ BullMQ                       Background jobs              │
│  └─ Prisma or Drizzle            ORM                          │
│                                                                │
│  INFRASTRUCTURE                                                │
│  ├─ AWS / Cloudflare             CDN + Edge computing         │
│  ├─ S3 / R2                      Asset + site storage         │
│  ├─ Lambda@Edge / Workers        Tenant routing               │
│  ├─ Route53 / Cloudflare DNS     Domain management            │
│  └─ Kubernetes (EKS)             Service orchestration        │
│                                                                │
│  INTEGRATIONS                                                  │
│  ├─ Stripe                       Billing + payments           │
│  ├─ Resend / SendGrid            Transactional email          │
│  ├─ Cal.com or Calendly API      Booking integration          │
│  └─ Cloudflare Images            Image optimization           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Publish Flow Sequence

```
┌────────┐      ┌─────────┐      ┌─────────┐      ┌─────┐      ┌─────┐
│ User   │      │ Builder │      │ Publish │      │ S3  │      │ CDN │
│        │      │   API   │      │ Service │      │     │      │     │
└───┬────┘      └────┬────┘      └────┬────┘      └──┬──┘      └──┬──┘
    │                │                │              │            │
    │  Click Publish │                │              │            │
    │───────────────▶│                │              │            │
    │                │                │              │            │
    │                │  Queue Build   │              │            │
    │                │───────────────▶│              │            │
    │                │                │              │            │
    │                │                │  Fetch Site  │            │
    │                │                │    Config    │            │
    │                │                │──────────────│            │
    │                │                │              │            │
    │                │                │  Build HTML  │            │
    │                │                │  + Assets    │            │
    │                │                │──────┐       │            │
    │                │                │      │       │            │
    │                │                │◀─────┘       │            │
    │                │                │              │            │
    │                │                │ Upload Files │            │
    │                │                │─────────────▶│            │
    │                │                │              │            │
    │                │                │     Invalidate Cache      │
    │                │                │───────────────────────────▶
    │                │                │              │            │
    │                │  Publish Done  │              │            │
    │                │◀───────────────│              │            │
    │                │                │              │            │
    │  Site is Live  │                │              │            │
    │◀───────────────│                │              │            │
    │                │                │              │            │
```

---

## Implementation Phases

### Phase 1: Core Builder MVP
- Account system with auth (email + OAuth)
- 3 base templates with theme customization
- Page editor with basic components (hero, text, images, contact form)
- Subdomain publishing (customer.yourplatform.com)
- Basic lead capture (form submissions)

### Phase 2: Professional Features
- Custom domain support with SSL automation
- Asset library (image upload, management)
- SEO settings per page
- Export to static files (ZIP download)
- Analytics dashboard (page views, leads)

### Phase 3: Business Integrations
- Stripe payment integration for sites
- Booking/calendar widget
- CRM features (lead management, notes, status)
- Email notifications on form submissions

### Phase 4: Scale & Enterprise
- Multi-site support per account
- Team/collaboration features
- White-label option
- API access for developers
- Advanced analytics + A/B testing

---

## Key Considerations for 50K+ Scale

1. **CDN-First**: Serve all static content from edge locations
2. **Database Sharding**: Plan for tenant-based partitioning
3. **Async Processing**: All heavy work (builds, exports) via queues
4. **Rate Limiting**: Protect APIs and prevent abuse
5. **Observability**: Structured logging, distributed tracing, alerting

---

## Next Steps

Potential areas to explore in more detail:
- **Builder UI architecture** (component system, state management)
- **Multi-tenant domain routing** (DNS, SSL automation)
- **Template system design** (how to structure customizable templates)
- **Specific service design** (billing, forms, CRM)
