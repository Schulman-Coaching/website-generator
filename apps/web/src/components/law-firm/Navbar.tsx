'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  logo: string;
  phone?: string;
  links: { label: string; href: string }[];
  ctaText?: string;
  ctaHref?: string;
  primaryColor?: string;
}

export function Navbar({
  logo,
  phone,
  links,
  ctaText,
  ctaHref,
  primaryColor = '#1e4d7b'
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-xl font-bold" style={{ color: primaryColor }}>
              {logo}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {phone}
              </a>
            )}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: primaryColor }}
              >
                {ctaText}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="block py-2 text-base font-medium text-gray-700"
              >
                {phone}
              </a>
            )}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className="block mt-4 rounded-md px-4 py-2 text-center text-base font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
