import { AttorneyCard, type Attorney } from './AttorneyCard';

interface AttorneyGridProps {
  headline?: string;
  subheadline?: string;
  attorneys: Attorney[];
  primaryColor?: string;
}

export function AttorneyGrid({
  headline = 'Meet Our Team',
  subheadline,
  attorneys,
  primaryColor = '#1e4d7b',
}: AttorneyGridProps) {
  // Determine grid columns based on number of attorneys
  const gridCols = attorneys.length === 1
    ? 'max-w-md mx-auto'
    : attorneys.length === 2
      ? 'sm:grid-cols-2 max-w-3xl mx-auto'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-gray-600">
              {subheadline}
            </p>
          )}
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-8 ${gridCols}`}>
          {attorneys.map((attorney, index) => (
            <AttorneyCard
              key={index}
              attorney={attorney}
              primaryColor={primaryColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
