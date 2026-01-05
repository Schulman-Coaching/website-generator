import Link from 'next/link';

const templates = [
  {
    id: '1',
    name: 'Professional',
    description: 'Clean and modern design for businesses',
    category: 'Business',
    image: '/templates/professional.jpg',
  },
  {
    id: '2',
    name: 'Creative',
    description: 'Bold and artistic design for portfolios',
    category: 'Portfolio',
    image: '/templates/creative.jpg',
  },
  {
    id: '3',
    name: 'Minimal',
    description: 'Simple and elegant design for any purpose',
    category: 'Landing',
    image: '/templates/minimal.jpg',
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Templates
            </h1>
            <Link
              href="/"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <div
                key={template.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-gray-200">
                  <div className="flex h-full items-center justify-center text-gray-400">
                    <svg
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                    {template.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {template.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {template.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white hover:bg-primary-500">
                      Use Template
                    </button>
                    <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
