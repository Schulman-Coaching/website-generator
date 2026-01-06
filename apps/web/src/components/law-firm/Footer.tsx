import Link from 'next/link';

interface FooterProps {
  firmName: string;
  address: string;
  phone: string;
  email: string;
  disclaimer?: string;
  links?: { label: string; href: string }[];
  primaryColor?: string;
}

export function Footer({
  firmName,
  address,
  phone,
  email,
  disclaimer,
  links,
  primaryColor = '#1e4d7b',
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">{firmName}</h3>
            <p className="mt-4 text-sm whitespace-pre-line">{address}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          {links && links.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500">{disclaimer}</p>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {firmName}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
}
