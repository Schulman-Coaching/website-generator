import Link from 'next/link';

interface CTAProps {
  headline: string;
  subheadline?: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  primaryColor?: string;
}

export function CTA({
  headline,
  subheadline,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  primaryColor = '#1e4d7b',
}: CTAProps) {
  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {headline}
        </h2>
        {subheadline && (
          <p className="mt-4 text-lg text-white/80">
            {subheadline}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={buttonHref}
            className="rounded-md bg-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-gray-100 transition-colors"
            style={{ color: primaryColor }}
          >
            {buttonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
