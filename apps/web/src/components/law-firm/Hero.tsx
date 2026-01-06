import Link from 'next/link';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
  primaryColor?: string;
  alignment?: 'left' | 'center';
}

export function Hero({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
  primaryColor = '#1e4d7b',
  alignment = 'center',
}: HeroProps) {
  const alignmentClasses = alignment === 'center'
    ? 'text-center items-center'
    : 'text-left items-start';

  return (
    <section
      className="relative min-h-[500px] lg:min-h-[600px] flex items-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* Gradient background if no image */}
      {!backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${primaryColor}99 100%)`,
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${alignmentClasses} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
            {subheadline}
          </p>
          <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${alignment === 'center' ? 'justify-center' : ''}`}>
            <Link
              href={ctaHref}
              className="rounded-md bg-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-gray-100 transition-colors text-center"
              style={{ color: primaryColor }}
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
