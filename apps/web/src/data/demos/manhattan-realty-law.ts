import type { Attorney } from '@/components/law-firm/AttorneyCard';
import type { Testimonial } from '@/components/law-firm/Testimonials';
import type { FormField } from '@/components/law-firm/ContactForm';
import type { Stat } from '@/components/law-firm/Stats';

export const manhattanRealtyLawData = {
  firmName: 'Park Avenue Realty Law',
  primaryColor: '#1e3a5f',

  navbar: {
    logo: 'Park Avenue Realty Law',
    phone: '(212) 555-0199',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaText: 'Get Started',
    ctaHref: '#contact',
  },

  hero: {
    headline: 'Manhattan Real Estate Transactions Done Right',
    subheadline: 'Premier real estate law firm serving buyers, sellers, and investors across New York City. From co-op closings to commercial acquisitions, we protect your investment.',
    ctaText: 'Schedule Consultation',
    ctaHref: '#contact',
    secondaryCtaText: 'Our Services',
    secondaryCtaHref: '#services',
  },

  stats: [
    { value: '$2B+', label: 'Transaction Volume' },
    { value: '3,500+', label: 'Closings Completed' },
    { value: '25+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ] as Stat[],

  practiceAreas: {
    headline: 'Real Estate Legal Services',
    subheadline: 'Full-service representation for all New York real estate matters',
    areas: [
      {
        title: 'Residential Closings',
        description: 'Expert representation for condo, co-op, and townhouse purchases and sales throughout Manhattan and Brooklyn. We handle title review, contract negotiation, and closing.',
        icon: 'home' as const,
      },
      {
        title: 'Co-op & Condo Board Applications',
        description: 'Navigate the complex NYC board application process. We prepare comprehensive packages and guide you through financial disclosure and interview preparation.',
        icon: 'document' as const,
      },
      {
        title: 'Commercial Real Estate',
        description: 'Acquisitions, dispositions, and leasing for office, retail, and mixed-use properties. Due diligence, contract negotiation, and closing representation.',
        icon: 'briefcase' as const,
      },
      {
        title: '1031 Exchanges',
        description: 'Structure tax-deferred exchanges to maximize your investment returns. We coordinate with qualified intermediaries and ensure compliance with IRS requirements.',
        icon: 'scale' as const,
      },
    ],
  },

  attorneys: [
    {
      name: 'Sarah Park, Esq.',
      title: 'Founding Partner',
      bio: 'Sarah founded Park Avenue Realty Law after leading the real estate practice at a major NYC firm. She has closed over $1 billion in residential and commercial transactions and is recognized as a leading real estate attorney in New York.',
      education: [
        'J.D., Columbia Law School',
        'B.A., Yale University',
      ],
      barAdmissions: ['New York State Bar', 'New Jersey State Bar'],
      email: 'spark@parkavenuelaw.com',
      phone: '(212) 555-0199',
    },
    {
      name: 'Michael Goldman, Esq.',
      title: 'Partner, Commercial Practice',
      bio: 'Michael specializes in complex commercial real estate transactions, including office acquisitions, retail leasing, and mixed-use development. He represents institutional investors, developers, and private equity firms.',
      education: [
        'J.D., NYU School of Law',
        'M.B.A., NYU Stern',
        'B.S., Cornell University',
      ],
      barAdmissions: ['New York State Bar'],
      email: 'mgoldman@parkavenuelaw.com',
      phone: '(212) 555-0199',
    },
    {
      name: 'Jennifer Walsh, Esq.',
      title: 'Partner, Residential Practice',
      bio: 'Jennifer leads our residential practice, handling high-value condo and co-op transactions throughout Manhattan. She is known for her meticulous attention to detail and her ability to solve problems before they become obstacles.',
      education: [
        'J.D., Fordham University School of Law',
        'B.A., Boston College',
      ],
      barAdmissions: ['New York State Bar'],
      email: 'jwalsh@parkavenuelaw.com',
      phone: '(212) 555-0199',
    },
  ] as Attorney[],

  testimonials: [
    {
      quote: 'Park Avenue Realty Law handled our $4.5M condo purchase flawlessly. Sarah personally reviewed every document and caught issues our broker missed. Worth every penny.',
      author: 'Robert & Lisa M.',
      title: 'Upper East Side Condo Purchase',
      rating: 5,
    },
    {
      quote: 'Michael Goldman is the best commercial real estate attorney in NYC. He\'s handled three acquisitions for our fund, totaling over $50M, all without a hitch. His market knowledge is invaluable.',
      author: 'James T.',
      title: 'Real Estate Fund Manager',
      rating: 5,
    },
    {
      quote: 'Jennifer guided us through the most stressful co-op board process. Her preparation made all the difference - we were approved on the first try despite a complicated financial situation.',
      author: 'Amanda K.',
      title: 'Tribeca Co-op Purchase',
      rating: 5,
    },
  ] as Testimonial[],

  contactForm: {
    headline: 'Start Your Transaction',
    subheadline: 'Contact us to discuss your real estate matter. We respond to all inquiries within one business day.',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text' as const, required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email' as const, required: true, placeholder: 'your@email.com' },
      { name: 'phone', label: 'Phone', type: 'tel' as const, required: true, placeholder: '(212) 555-0000' },
      {
        name: 'transactionType',
        label: 'Transaction Type',
        type: 'select' as const,
        required: true,
        placeholder: 'Select transaction type',
        options: ['Residential Purchase', 'Residential Sale', 'Commercial Acquisition', 'Commercial Sale', 'Commercial Lease', '1031 Exchange', 'Other'],
      },
      {
        name: 'propertyType',
        label: 'Property Type',
        type: 'select' as const,
        required: false,
        placeholder: 'Select property type',
        options: ['Condo', 'Co-op', 'Townhouse', 'Office', 'Retail', 'Mixed-Use', 'Multi-Family', 'Other'],
      },
      { name: 'message', label: 'Additional Details', type: 'textarea' as const, required: false, placeholder: 'Property address, timeline, or other relevant details...' },
    ] as FormField[],
    submitText: 'Request Consultation',
    address: '425 Park Avenue, 22nd Floor\nNew York, NY 10022',
    phone: '(212) 555-0199',
    email: 'info@parkavenuelaw.com',
  },

  footer: {
    firmName: 'Park Avenue Realty Law',
    address: '425 Park Avenue, 22nd Floor\nNew York, NY 10022',
    phone: '(212) 555-0199',
    email: 'info@parkavenuelaw.com',
    disclaimer: 'The information on this website is for general information purposes only and does not constitute legal advice. Contacting our firm does not establish an attorney-client relationship. Past results do not guarantee future outcomes.',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
