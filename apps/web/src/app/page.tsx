import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Website Generator
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Create beautiful, professional websites in minutes. No coding required.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get Started
          </Link>
          <Link
            href="/templates"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Browse Templates <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Beautiful Templates</h3>
          <p className="mt-2 text-sm text-gray-600">
            Choose from professionally designed templates for any industry.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Lightning Fast</h3>
          <p className="mt-2 text-sm text-gray-600">
            Your site loads instantly with our optimized hosting infrastructure.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">Secure & Reliable</h3>
          <p className="mt-2 text-sm text-gray-600">
            SSL included. Your site is always secure and available.
          </p>
        </div>
      </div>
    </main>
  );
}
