import Link from 'next/link';

const demos = [
  {
    name: 'Chen & Associates',
    slug: 'chen-immigration',
    practiceArea: 'Immigration Law',
    location: 'Flushing, Queens',
    description: 'A welcoming immigration law practice serving the diverse Queens community. Features multilingual support and comprehensive visa services.',
    color: '#1e4d7b',
  },
  {
    name: 'Russo Family Law Group',
    slug: 'brooklyn-family-law',
    practiceArea: 'Family Law',
    location: 'Downtown Brooklyn',
    description: 'A compassionate family law firm helping Brooklyn families through divorce, custody, and support matters with care and expertise.',
    color: '#0d9488',
  },
  {
    name: 'Park Avenue Realty Law',
    slug: 'manhattan-realty-law',
    practiceArea: 'Real Estate Law',
    location: 'Midtown Manhattan',
    description: 'A premier real estate law firm handling high-value residential and commercial transactions across New York City.',
    color: '#1e3a5f',
  },
];

export default function DemoIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                &larr; Back to Home
              </Link>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Law Firm Demo Sites
              </h1>
              <p className="mt-1 text-gray-600">
                Preview our professional website templates designed for NYC attorneys
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Cards */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Color Banner */}
              <div
                className="h-3"
                style={{ backgroundColor: demo.color }}
              />

              {/* Preview Area */}
              <div
                className="h-48 flex items-center justify-center"
                style={{ backgroundColor: `${demo.color}10` }}
              >
                <div className="text-center">
                  <p
                    className="text-2xl font-bold"
                    style={{ color: demo.color }}
                  >
                    {demo.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Click to preview
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: `${demo.color}15`,
                      color: demo.color,
                    }}
                  >
                    {demo.practiceArea}
                  </span>
                  <span className="text-xs text-gray-500">
                    {demo.location}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                  {demo.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {demo.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium" style={{ color: demo.color }}>
                  View Demo
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            About These Demos
          </h2>
          <p className="mt-4 text-gray-600">
            These demo sites showcase our law firm website templates designed specifically for NYC attorneys.
            Each template is fully customizable and includes:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Mobile-responsive design that looks great on all devices
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Lead capture forms integrated with your intake system
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              SEO-optimized for local NYC searches
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Compliant with NY attorney advertising rules
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
