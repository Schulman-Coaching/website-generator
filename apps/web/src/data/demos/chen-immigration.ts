import type { Attorney } from '@/components/law-firm/AttorneyCard';
import type { Testimonial } from '@/components/law-firm/Testimonials';
import type { FormField } from '@/components/law-firm/ContactForm';
import type { FAQItem } from '@/components/law-firm/FAQ';

export const chenImmigrationData = {
  firmName: 'Chen & Associates',
  primaryColor: '#1e4d7b',

  navbar: {
    logo: 'Chen & Associates',
    phone: '(718) 555-0188',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaText: 'Free Consultation',
    ctaHref: '#contact',
  },

  hero: {
    headline: 'Your Path to the American Dream Starts Here',
    subheadline: 'Trusted immigration attorney serving the Flushing community for over 15 years. We speak Mandarin, Cantonese, and English.',
    ctaText: 'Schedule Free Consultation',
    ctaHref: '#contact',
    secondaryCtaText: 'Our Services',
    secondaryCtaHref: '#services',
  },

  practiceAreas: {
    headline: 'Immigration Services',
    subheadline: 'Comprehensive legal assistance for all your immigration needs',
    areas: [
      {
        title: 'Family-Based Immigration',
        description: 'Reunite with your loved ones through family petitions, spousal visas, and green card applications for immediate relatives.',
        icon: 'users' as const,
      },
      {
        title: 'Employment Visas',
        description: 'H-1B, L-1, O-1, and other work visas for professionals and skilled workers. We help employers and employees navigate the process.',
        icon: 'briefcase' as const,
      },
      {
        title: 'Citizenship & Naturalization',
        description: 'Guide you through the naturalization process, from N-400 application to citizenship interview preparation.',
        icon: 'globe' as const,
      },
      {
        title: 'Deportation Defense',
        description: 'Aggressive representation in removal proceedings. We fight to keep families together and protect your right to stay.',
        icon: 'shield' as const,
      },
    ],
  },

  attorneys: [
    {
      name: 'David Chen, Esq.',
      title: 'Founding Attorney',
      bio: 'David Chen founded Chen & Associates in 2009 after working at a prestigious Manhattan immigration firm. Born in Taiwan, he understands firsthand the challenges immigrants face. He has successfully handled over 2,000 immigration cases and is known for his personal attention to each client.',
      education: [
        'J.D., Fordham University School of Law',
        'B.A., Columbia University',
      ],
      barAdmissions: ['New York State Bar', 'U.S. District Court, EDNY'],
      email: 'dchen@chenimmigration.com',
      phone: '(718) 555-0188',
    },
  ] as Attorney[],

  testimonials: [
    {
      quote: 'Mr. Chen helped my entire family get green cards after years of uncertainty. He explained everything clearly in Mandarin and was always available to answer our questions. We are forever grateful.',
      author: 'Wei L.',
      title: 'Family Immigration Client',
      rating: 5,
    },
    {
      quote: 'After being denied twice by other lawyers, David took my H-1B case and got it approved. His knowledge of immigration law is exceptional. He truly cares about his clients.',
      author: 'Priya S.',
      title: 'Employment Visa Client',
      rating: 5,
    },
    {
      quote: 'The team at Chen & Associates guided me through my citizenship application with patience and professionalism. I am now a proud U.S. citizen thanks to them!',
      author: 'Carlos M.',
      title: 'Naturalization Client',
      rating: 5,
    },
  ] as Testimonial[],

  faq: {
    headline: 'Frequently Asked Questions',
    subheadline: 'Answers to common immigration questions',
    items: [
      {
        question: 'How long does the green card process take?',
        answer: 'Processing times vary significantly based on the type of green card and your country of origin. Family-based green cards for immediate relatives typically take 12-18 months, while employment-based green cards can take 1-3 years or longer. During your consultation, we will provide a more accurate timeline based on your specific situation.',
      },
      {
        question: 'What documents do I need for my immigration case?',
        answer: 'Required documents depend on your case type. Generally, you will need: valid passport, birth certificate, marriage certificate (if applicable), financial documents proving income meets requirements, photos meeting USCIS specifications, and evidence of your relationship or employment. We provide a detailed checklist during your initial consultation.',
      },
      {
        question: 'Can I work while my green card is pending?',
        answer: 'Yes, in most cases. If you have filed for adjustment of status (Form I-485), you can apply for an Employment Authorization Document (EAD) that allows you to work legally while your case is pending. We help all our clients obtain work permits as part of our service.',
      },
      {
        question: 'What happens if my visa application is denied?',
        answer: 'A denial is not the end. Depending on the reason for denial, you may be able to file a motion to reopen or reconsider, appeal to the Board of Immigration Appeals, or submit a new application addressing the issues that caused the denial. We have experience successfully overturning denials.',
      },
      {
        question: 'Do you offer services in Chinese?',
        answer: 'Yes! Attorney David Chen is fluent in Mandarin and Cantonese. Our entire staff can assist you in Chinese. We understand the unique needs of the Asian immigrant community in Queens and are proud to serve our neighbors in Flushing.',
      },
    ] as FAQItem[],
  },

  contactForm: {
    headline: 'Schedule Your Free Consultation',
    subheadline: 'Take the first step toward your immigration goals. Contact us today for a confidential consultation.',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text' as const, required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email' as const, required: true, placeholder: 'your@email.com' },
      { name: 'phone', label: 'Phone', type: 'tel' as const, required: true, placeholder: '(718) 555-0000' },
      {
        name: 'caseType',
        label: 'Type of Case',
        type: 'select' as const,
        required: true,
        placeholder: 'Select your case type',
        options: ['Family-Based Immigration', 'Employment Visa (H-1B, L-1, etc.)', 'Citizenship/Naturalization', 'Deportation Defense', 'Asylum', 'Other'],
      },
      { name: 'message', label: 'Tell Us About Your Case', type: 'textarea' as const, required: false, placeholder: 'Briefly describe your immigration situation...' },
    ] as FormField[],
    submitText: 'Request Free Consultation',
    address: '136-20 38th Avenue, Suite 3B\nFlushing, NY 11354',
    phone: '(718) 555-0188',
    email: 'info@chenimmigration.com',
  },

  footer: {
    firmName: 'Chen & Associates',
    address: '136-20 38th Avenue, Suite 3B\nFlushing, NY 11354',
    phone: '(718) 555-0188',
    email: 'info@chenimmigration.com',
    disclaimer: 'The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
