import { z } from 'zod';

// Auth Schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required').max(100).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

// Site Schemas
export const createSiteSchema = z.object({
  name: z.string().min(1, 'Site name is required').max(100),
  templateId: z.string().uuid('Invalid template ID'),
  subdomain: z
    .string()
    .min(3, 'Subdomain must be at least 3 characters')
    .max(63)
    .regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, 'Invalid subdomain format'),
});

export const updateSiteSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  customDomain: z.string().max(255).nullable().optional(),
  seoSettings: z
    .object({
      title: z.string().max(60).nullable().optional(),
      description: z.string().max(160).nullable().optional(),
      ogImage: z.string().url().nullable().optional(),
      favicon: z.string().url().nullable().optional(),
    })
    .optional(),
  styles: z
    .object({
      primaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
      secondaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
      fontFamily: z.string().max(100).optional(),
      headingFontFamily: z.string().max(100).optional(),
      customCss: z.string().max(10000).nullable().optional(),
    })
    .optional(),
});

export type CreateSiteInput = z.infer<typeof createSiteSchema>;
export type UpdateSiteInput = z.infer<typeof updateSiteSchema>;

// Page Schemas
export const createPageSchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  title: z.string().min(1, 'Page title is required').max(100),
  isHomepage: z.boolean().optional().default(false),
});

export const updatePageSchema = z.object({
  slug: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .optional(),
  title: z.string().min(1).max(100).optional(),
  metaTags: z
    .object({
      title: z.string().max(60).nullable().optional(),
      description: z.string().max(160).nullable().optional(),
      ogImage: z.string().url().nullable().optional(),
      noIndex: z.boolean().optional(),
    })
    .optional(),
  order: z.number().int().min(0).optional(),
});

export type CreatePageInput = z.infer<typeof createPageSchema>;
export type UpdatePageInput = z.infer<typeof updatePageSchema>;

// Component Schemas
export const componentTypeSchema = z.enum([
  'hero',
  'text',
  'image',
  'gallery',
  'contact-form',
  'cta',
  'features',
  'testimonials',
  'pricing',
  'faq',
  'footer',
  'navbar',
]);

export const createComponentSchema = z.object({
  type: componentTypeSchema,
  order: z.number().int().min(0).optional(),
  props: z.record(z.unknown()).optional().default({}),
  styles: z.record(z.unknown()).optional().default({}),
});

export const updateComponentSchema = z.object({
  order: z.number().int().min(0).optional(),
  props: z.record(z.unknown()).optional(),
  styles: z.record(z.unknown()).optional(),
});

export type CreateComponentInput = z.infer<typeof createComponentSchema>;
export type UpdateComponentInput = z.infer<typeof updateComponentSchema>;

// Lead Schemas
export const createLeadSchema = z.object({
  formData: z.record(z.unknown()),
  sourcePage: z.string().max(255),
  sourceComponent: z.string().max(255),
});

export const updateLeadStatusSchema = z.object({
  status: z.enum(['new', 'contacted', 'qualified', 'converted', 'archived']),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
export type UpdateLeadStatusInput = z.infer<typeof updateLeadStatusSchema>;

// Pagination Schema
export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  pageSize: z.coerce.number().int().min(1).max(100).optional().default(20),
});

export type PaginationInput = z.infer<typeof paginationSchema>;
