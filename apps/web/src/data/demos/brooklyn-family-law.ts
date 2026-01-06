import type { Attorney } from '@/components/law-firm/AttorneyCard';
import type { Testimonial } from '@/components/law-firm/Testimonials';
import type { FormField } from '@/components/law-firm/ContactForm';
import type { FAQItem } from '@/components/law-firm/FAQ';

export const brooklynFamilyLawData = {
  firmName: 'Russo Family Law Group',
  primaryColor: '#0d9488',

  navbar: {
    logo: 'Russo Family Law',
    phone: '(718) 555-0234',
    links: [
      { label: 'Practice Areas', href: '#services' },
      { label: 'Our Team', href: '#team' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaText: 'Free Consultation',
    ctaHref: '#contact',
  },

  hero: {
    headline: 'Protecting What Matters Most',
    subheadline: 'Compassionate family law representation in Brooklyn. We guide you through difficult times with care, respect, and fierce advocacy for your rights.',
    ctaText: 'Get Help Today',
    ctaHref: '#contact',
    secondaryCtaText: 'How We Can Help',
    secondaryCtaHref: '#services',
  },

  practiceAreas: {
    headline: 'Family Law Services',
    subheadline: 'Dedicated legal support for families in transition',
    areas: [
      {
        title: 'Divorce & Separation',
        description: 'Whether contested or uncontested, we protect your interests and help you move forward. We handle asset division, alimony, and all aspects of divorce proceedings in Kings County.',
        icon: 'scale' as const,
      },
      {
        title: 'Child Custody & Visitation',
        description: 'Your children come first. We fight for custody arrangements that serve their best interests while protecting your parental rights. Experienced in Kings County Family Court.',
        icon: 'users' as const,
      },
      {
        title: 'Child & Spousal Support',
        description: 'Ensuring fair financial support for you and your children. We help establish, modify, and enforce child support and maintenance orders.',
        icon: 'heart' as const,
      },
      {
        title: 'Mediation Services',
        description: 'Resolve disputes without the stress and cost of litigation. Our trained mediators help couples reach agreements that work for everyone.',
        icon: 'shield' as const,
      },
    ],
  },

  attorneys: [
    {
      name: 'Maria Russo, Esq.',
      title: 'Founding Partner',
      bio: 'Maria founded Russo Family Law Group after 12 years at a large Manhattan firm because she wanted to provide personalized attention to families in her Brooklyn community. She is a certified matrimonial law specialist and has been recognized as a Super Lawyers Rising Star.',
      education: [
        'J.D., Brooklyn Law School, magna cum laude',
        'B.A., NYU',
      ],
      barAdmissions: ['New York State Bar', 'U.S. District Court, EDNY'],
      email: 'maria@russofamilylaw.com',
      phone: '(718) 555-0234',
    },
    {
      name: 'Anthony Russo, Esq.',
      title: 'Partner',
      bio: 'Anthony brings a litigation background to family law, making him particularly effective in contested custody and high-asset divorce cases. He is known for his calm demeanor in court and his ability to find creative solutions to complex problems.',
      education: [
        'J.D., St. John\'s University School of Law',
        'B.S., Fordham University',
      ],
      barAdmissions: ['New York State Bar'],
      email: 'anthony@russofamilylaw.com',
      phone: '(718) 555-0234',
    },
  ] as Attorney[],

  testimonials: [
    {
      quote: 'Maria helped me through the most difficult time of my life. She fought for my custody rights while always keeping my children\'s wellbeing at the center. I couldn\'t have asked for better representation.',
      author: 'Jennifer T.',
      title: 'Custody Client',
      rating: 5,
    },
    {
      quote: 'Going through a divorce is never easy, but having the Russo team in my corner made all the difference. They were responsive, professional, and genuinely cared about my outcome.',
      author: 'Michael R.',
      title: 'Divorce Client',
      rating: 5,
    },
    {
      quote: 'Anthony represented me in a contentious support modification case. His courtroom presence is impressive, and he got me a result that was fair for everyone. Highly recommend.',
      author: 'David K.',
      title: 'Support Modification Client',
      rating: 5,
    },
    {
      quote: 'We chose mediation to keep things civil for our kids. Maria guided us through every decision with patience and wisdom. The process was much smoother than we expected.',
      author: 'Sarah & James P.',
      title: 'Mediation Clients',
      rating: 5,
    },
  ] as Testimonial[],

  faq: {
    headline: 'Frequently Asked Questions',
    subheadline: 'Common questions about divorce and family law in New York',
    items: [
      {
        question: 'How long does a divorce take in New York?',
        answer: 'An uncontested divorce in New York typically takes 3-6 months from filing to finalization. Contested divorces can take 1-2 years or longer, depending on the complexity of issues like custody, asset division, and whether the case goes to trial. We work to resolve cases efficiently while protecting your interests.',
      },
      {
        question: 'How is child custody determined in Brooklyn?',
        answer: 'Kings County Family Court determines custody based on the "best interests of the child." Factors include each parent\'s ability to provide care, the child\'s existing relationships, each parent\'s home environment, and the child\'s preferences (if old enough). Courts generally favor arrangements that allow both parents to maintain meaningful relationships with their children.',
      },
      {
        question: 'What is equitable distribution in New York?',
        answer: 'New York is an "equitable distribution" state, meaning marital property is divided fairly (not necessarily equally) in a divorce. The court considers factors like the length of the marriage, each spouse\'s income and property, contributions to marital property, and custody of children. We help ensure you receive your fair share.',
      },
      {
        question: 'Can I modify a custody or support order?',
        answer: 'Yes, custody and support orders can be modified if there has been a "substantial change in circumstances." This might include a significant income change, relocation, changes in the child\'s needs, or concerns about safety. We regularly help clients petition for modifications in Kings County Family Court.',
      },
      {
        question: 'Do I need a lawyer for an uncontested divorce?',
        answer: 'While not legally required, having a lawyer review your agreement ensures you understand your rights and aren\'t waiving anything important. Even in amicable divorces, there are legal and financial implications that benefit from professional review. We offer flat-fee services for uncontested divorces.',
      },
      {
        question: 'What should I bring to my initial consultation?',
        answer: 'Please bring any existing court orders, prenuptial agreements, recent tax returns, pay stubs, a list of assets and debts, and any relevant correspondence with your spouse. The more information you can provide, the better we can assess your situation and provide guidance.',
      },
    ] as FAQItem[],
  },

  contactForm: {
    headline: 'Speak With a Family Law Attorney',
    subheadline: 'Your consultation is confidential. Let us help you understand your options.',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text' as const, required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email' as const, required: true, placeholder: 'your@email.com' },
      { name: 'phone', label: 'Phone', type: 'tel' as const, required: true, placeholder: '(718) 555-0000' },
      {
        name: 'caseType',
        label: 'How Can We Help?',
        type: 'select' as const,
        required: true,
        placeholder: 'Select your matter type',
        options: ['Divorce', 'Child Custody', 'Child Support', 'Spousal Support/Alimony', 'Modification of Existing Order', 'Mediation', 'Other Family Matter'],
      },
      {
        name: 'urgency',
        label: 'Urgency Level',
        type: 'select' as const,
        required: false,
        placeholder: 'How urgent is your matter?',
        options: ['I\'m exploring my options', 'I need help within the next few weeks', 'This is urgent - I need help immediately'],
      },
      { name: 'message', label: 'Brief Description', type: 'textarea' as const, required: false, placeholder: 'Tell us briefly about your situation...' },
    ] as FormField[],
    submitText: 'Request Free Consultation',
    address: '16 Court Street, Suite 2100\nBrooklyn, NY 11241',
    phone: '(718) 555-0234',
    email: 'intake@russofamilylaw.com',
  },

  footer: {
    firmName: 'Russo Family Law Group',
    address: '16 Court Street, Suite 2100\nBrooklyn, NY 11241',
    phone: '(718) 555-0234',
    email: 'intake@russofamilylaw.com',
    disclaimer: 'The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.',
    links: [
      { label: 'Practice Areas', href: '#services' },
      { label: 'Our Team', href: '#team' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
