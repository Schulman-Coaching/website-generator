import { pgTable, uuid, varchar, text, timestamp, boolean, integer, jsonb, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const planTypeEnum = pgEnum('plan_type', ['free', 'starter', 'professional', 'enterprise']);
export const subscriptionStatusEnum = pgEnum('subscription_status', ['active', 'canceled', 'past_due', 'trialing']);
export const siteStatusEnum = pgEnum('site_status', ['draft', 'published', 'archived']);
export const leadStatusEnum = pgEnum('lead_status', ['new', 'contacted', 'qualified', 'converted', 'archived']);
export const assetTypeEnum = pgEnum('asset_type', ['image', 'document', 'video']);
export const templateCategoryEnum = pgEnum('template_category', ['business', 'portfolio', 'landing', 'blog']);

// Accounts
export const accounts = pgTable('accounts', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  name: varchar('name', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const accountsRelations = relations(accounts, ({ one, many }) => ({
  subscription: one(subscriptions, {
    fields: [accounts.id],
    references: [subscriptions.accountId],
  }),
  sites: many(sites),
}));

// Subscriptions
export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  accountId: uuid('account_id').notNull().references(() => accounts.id, { onDelete: 'cascade' }),
  planType: planTypeEnum('plan_type').notNull().default('free'),
  status: subscriptionStatusEnum('status').notNull().default('active'),
  stripeCustomerId: varchar('stripe_customer_id', { length: 255 }),
  stripeSubscriptionId: varchar('stripe_subscription_id', { length: 255 }),
  currentPeriodEnd: timestamp('current_period_end'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  account: one(accounts, {
    fields: [subscriptions.accountId],
    references: [accounts.id],
  }),
}));

// Templates
export const templates = pgTable('templates', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  description: text('description'),
  category: templateCategoryEnum('category').notNull().default('business'),
  thumbnailUrl: varchar('thumbnail_url', { length: 500 }),
  baseStyles: jsonb('base_styles').notNull().default({}),
  defaultPages: jsonb('default_pages').notNull().default([]),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const templatesRelations = relations(templates, ({ many }) => ({
  sites: many(sites),
}));

// Sites
export const sites = pgTable('sites', {
  id: uuid('id').primaryKey().defaultRandom(),
  accountId: uuid('account_id').notNull().references(() => accounts.id, { onDelete: 'cascade' }),
  templateId: uuid('template_id').notNull().references(() => templates.id),
  name: varchar('name', { length: 100 }).notNull(),
  subdomain: varchar('subdomain', { length: 63 }).notNull().unique(),
  customDomain: varchar('custom_domain', { length: 255 }),
  status: siteStatusEnum('status').notNull().default('draft'),
  seoSettings: jsonb('seo_settings').notNull().default({}),
  styles: jsonb('styles').notNull().default({}),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const sitesRelations = relations(sites, ({ one, many }) => ({
  account: one(accounts, {
    fields: [sites.accountId],
    references: [accounts.id],
  }),
  template: one(templates, {
    fields: [sites.templateId],
    references: [templates.id],
  }),
  pages: many(pages),
  assets: many(assets),
  leads: many(leads),
}));

// Pages
export const pages = pgTable('pages', {
  id: uuid('id').primaryKey().defaultRandom(),
  siteId: uuid('site_id').notNull().references(() => sites.id, { onDelete: 'cascade' }),
  slug: varchar('slug', { length: 100 }).notNull(),
  title: varchar('title', { length: 100 }).notNull(),
  isHomepage: boolean('is_homepage').notNull().default(false),
  metaTags: jsonb('meta_tags').notNull().default({}),
  order: integer('order').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const pagesRelations = relations(pages, ({ one, many }) => ({
  site: one(sites, {
    fields: [pages.siteId],
    references: [sites.id],
  }),
  components: many(components),
}));

// Components
export const components = pgTable('components', {
  id: uuid('id').primaryKey().defaultRandom(),
  pageId: uuid('page_id').notNull().references(() => pages.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).notNull(),
  order: integer('order').notNull().default(0),
  props: jsonb('props').notNull().default({}),
  styles: jsonb('styles').notNull().default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const componentsRelations = relations(components, ({ one }) => ({
  page: one(pages, {
    fields: [components.pageId],
    references: [pages.id],
  }),
}));

// Assets
export const assets = pgTable('assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  siteId: uuid('site_id').notNull().references(() => sites.id, { onDelete: 'cascade' }),
  type: assetTypeEnum('type').notNull().default('image'),
  filename: varchar('filename', { length: 255 }).notNull(),
  s3Key: varchar('s3_key', { length: 500 }).notNull(),
  cdnUrl: varchar('cdn_url', { length: 500 }).notNull(),
  size: integer('size').notNull(),
  mimeType: varchar('mime_type', { length: 100 }).notNull(),
  metadata: jsonb('metadata').notNull().default({}),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const assetsRelations = relations(assets, ({ one }) => ({
  site: one(sites, {
    fields: [assets.siteId],
    references: [sites.id],
  }),
}));

// Leads
export const leads = pgTable('leads', {
  id: uuid('id').primaryKey().defaultRandom(),
  siteId: uuid('site_id').notNull().references(() => sites.id, { onDelete: 'cascade' }),
  formData: jsonb('form_data').notNull(),
  sourcePage: varchar('source_page', { length: 255 }).notNull(),
  sourceComponent: varchar('source_component', { length: 255 }).notNull(),
  status: leadStatusEnum('status').notNull().default('new'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const leadsRelations = relations(leads, ({ one }) => ({
  site: one(sites, {
    fields: [leads.siteId],
    references: [sites.id],
  }),
}));
