// Account & Auth Types
export interface Account {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  accountId: string;
  planType: PlanType;
  status: SubscriptionStatus;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  currentPeriodEnd: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type PlanType = 'free' | 'starter' | 'professional' | 'enterprise';
export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing';

// Template Types
export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category: TemplateCategory;
  thumbnailUrl: string | null;
  baseStyles: TemplateStyles;
  defaultPages: TemplatePageConfig[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TemplateCategory = 'business' | 'portfolio' | 'landing' | 'blog';

export interface TemplateStyles {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  headingFontFamily: string;
}

export interface TemplatePageConfig {
  slug: string;
  title: string;
  components: ComponentConfig[];
}

// Site Types
export interface Site {
  id: string;
  accountId: string;
  templateId: string;
  name: string;
  subdomain: string;
  customDomain: string | null;
  status: SiteStatus;
  seoSettings: SeoSettings;
  styles: SiteStyles;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type SiteStatus = 'draft' | 'published' | 'archived';

export interface SeoSettings {
  title: string | null;
  description: string | null;
  ogImage: string | null;
  favicon: string | null;
}

export interface SiteStyles {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  headingFontFamily: string;
  customCss: string | null;
}

// Page Types
export interface Page {
  id: string;
  siteId: string;
  slug: string;
  title: string;
  isHomepage: boolean;
  metaTags: PageMetaTags;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PageMetaTags {
  title: string | null;
  description: string | null;
  ogImage: string | null;
  noIndex: boolean;
}

// Component Types
export interface Component {
  id: string;
  pageId: string;
  type: ComponentType;
  order: number;
  props: Record<string, unknown>;
  styles: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export type ComponentType =
  | 'hero'
  | 'text'
  | 'image'
  | 'gallery'
  | 'contact-form'
  | 'cta'
  | 'features'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'footer'
  | 'navbar';

export interface ComponentConfig {
  type: ComponentType;
  props: Record<string, unknown>;
  styles?: Record<string, unknown>;
}

// Asset Types
export interface Asset {
  id: string;
  siteId: string;
  type: AssetType;
  filename: string;
  s3Key: string;
  cdnUrl: string;
  size: number;
  mimeType: string;
  metadata: Record<string, unknown>;
  createdAt: Date;
}

export type AssetType = 'image' | 'document' | 'video';

// Lead Types
export interface Lead {
  id: string;
  siteId: string;
  formData: Record<string, unknown>;
  sourcePage: string;
  sourceComponent: string;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'archived';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
