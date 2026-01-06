import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Navbar,
  Hero,
  PracticeAreas,
  AttorneyGrid,
  Testimonials,
  FAQ,
  ContactForm,
  Footer,
} from '@/components/law-firm';
import { chenImmigrationData } from '@/data/demos/chen-immigration';

export const metadata: Metadata = {
  title: 'Chen & Associates | Immigration Law Demo',
  description: 'Demo site for an immigration law firm in Flushing, Queens.',
};

export default function ChenImmigrationDemo() {
  const data = chenImmigrationData;

  return (
    <div className="min-h-screen">
      {/* Demo Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2 text-center text-sm">
        <span className="text-yellow-800">
          This is a demo site.{' '}
          <Link href="/demo" className="font-medium underline hover:no-underline">
            View all demos
          </Link>
        </span>
      </div>

      <Navbar
        logo={data.navbar.logo}
        phone={data.navbar.phone}
        links={data.navbar.links}
        ctaText={data.navbar.ctaText}
        ctaHref={data.navbar.ctaHref}
        primaryColor={data.primaryColor}
      />

      <Hero
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
        ctaText={data.hero.ctaText}
        ctaHref={data.hero.ctaHref}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaHref={data.hero.secondaryCtaHref}
        primaryColor={data.primaryColor}
      />

      <section id="services">
        <PracticeAreas
          headline={data.practiceAreas.headline}
          subheadline={data.practiceAreas.subheadline}
          areas={data.practiceAreas.areas}
          columns={4}
          primaryColor={data.primaryColor}
        />
      </section>

      <section id="about">
        <AttorneyGrid
          headline="Meet Your Attorney"
          subheadline="Dedicated to your immigration success"
          attorneys={data.attorneys}
          primaryColor={data.primaryColor}
        />
      </section>

      <Testimonials
        headline="Client Success Stories"
        subheadline="Hear from families we've helped"
        testimonials={data.testimonials}
        primaryColor={data.primaryColor}
      />

      <section id="faq">
        <FAQ
          headline={data.faq.headline}
          subheadline={data.faq.subheadline}
          items={data.faq.items}
          primaryColor={data.primaryColor}
        />
      </section>

      <ContactForm
        headline={data.contactForm.headline}
        subheadline={data.contactForm.subheadline}
        fields={data.contactForm.fields}
        submitText={data.contactForm.submitText}
        address={data.contactForm.address}
        phone={data.contactForm.phone}
        email={data.contactForm.email}
        primaryColor={data.primaryColor}
      />

      <Footer
        firmName={data.footer.firmName}
        address={data.footer.address}
        phone={data.footer.phone}
        email={data.footer.email}
        disclaimer={data.footer.disclaimer}
        links={data.footer.links}
        primaryColor={data.primaryColor}
      />
    </div>
  );
}
