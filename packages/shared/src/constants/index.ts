// Plan Limits
export const PLAN_LIMITS = {
  free: {
    maxSites: 1,
    maxPagesPerSite: 5,
    maxAssetsPerSite: 50,
    maxAssetSizeMb: 5,
    customDomain: false,
    analytics: false,
    removeWatermark: false,
  },
  starter: {
    maxSites: 3,
    maxPagesPerSite: 20,
    maxAssetsPerSite: 500,
    maxAssetSizeMb: 10,
    customDomain: true,
    analytics: true,
    removeWatermark: true,
  },
  professional: {
    maxSites: 10,
    maxPagesPerSite: 50,
    maxAssetsPerSite: 2000,
    maxAssetSizeMb: 25,
    customDomain: true,
    analytics: true,
    removeWatermark: true,
  },
  enterprise: {
    maxSites: -1, // unlimited
    maxPagesPerSite: -1,
    maxAssetsPerSite: -1,
    maxAssetSizeMb: 100,
    customDomain: true,
    analytics: true,
    removeWatermark: true,
  },
} as const;

export type PlanLimits = typeof PLAN_LIMITS;

// Default Styles
export const DEFAULT_STYLES = {
  primaryColor: '#2563eb',
  secondaryColor: '#1e40af',
  fontFamily: 'Inter, system-ui, sans-serif',
  headingFontFamily: 'Inter, system-ui, sans-serif',
} as const;

// Component Default Props
export const COMPONENT_DEFAULTS: Record<string, Record<string, unknown>> = {
  hero: {
    title: 'Welcome to Your New Website',
    subtitle: 'Build something amazing',
    buttonText: 'Get Started',
    buttonLink: '#contact',
    backgroundImage: null,
    alignment: 'center',
  },
  text: {
    content: '<p>Enter your text here...</p>',
    alignment: 'left',
  },
  image: {
    src: '',
    alt: '',
    caption: null,
  },
  'contact-form': {
    title: 'Contact Us',
    subtitle: "We'd love to hear from you",
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'message', label: 'Message', type: 'textarea', required: true },
    ],
    submitText: 'Send Message',
    successMessage: 'Thank you! We will be in touch soon.',
  },
  cta: {
    title: 'Ready to get started?',
    subtitle: 'Join thousands of satisfied customers',
    buttonText: 'Sign Up Now',
    buttonLink: '#signup',
  },
  features: {
    title: 'Features',
    items: [
      { title: 'Feature 1', description: 'Description of feature 1', icon: 'star' },
      { title: 'Feature 2', description: 'Description of feature 2', icon: 'heart' },
      { title: 'Feature 3', description: 'Description of feature 3', icon: 'zap' },
    ],
  },
  footer: {
    companyName: 'Your Company',
    links: [
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Service', url: '/terms' },
    ],
    socialLinks: [],
  },
  navbar: {
    logo: null,
    links: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Contact', url: '/contact' },
    ],
  },
} as const;

// Supported Font Families
export const FONT_FAMILIES = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Playfair Display',
  'Merriweather',
  'Source Sans Pro',
  'Nunito',
] as const;

// API Error Codes
export const ERROR_CODES = {
  // Auth
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS',
  UNAUTHORIZED: 'UNAUTHORIZED',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',

  // Resources
  NOT_FOUND: 'NOT_FOUND',
  FORBIDDEN: 'FORBIDDEN',
  VALIDATION_ERROR: 'VALIDATION_ERROR',

  // Limits
  SITE_LIMIT_REACHED: 'SITE_LIMIT_REACHED',
  PAGE_LIMIT_REACHED: 'PAGE_LIMIT_REACHED',
  ASSET_LIMIT_REACHED: 'ASSET_LIMIT_REACHED',
  FILE_TOO_LARGE: 'FILE_TOO_LARGE',

  // Domain
  SUBDOMAIN_TAKEN: 'SUBDOMAIN_TAKEN',
  INVALID_SUBDOMAIN: 'INVALID_SUBDOMAIN',
  DOMAIN_VERIFICATION_FAILED: 'DOMAIN_VERIFICATION_FAILED',

  // General
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  RATE_LIMITED: 'RATE_LIMITED',
} as const;

export type ErrorCode = keyof typeof ERROR_CODES;
