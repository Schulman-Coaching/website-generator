'use client';

import { useState } from 'react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

interface ContactFormProps {
  headline?: string;
  subheadline?: string;
  fields: FormField[];
  submitText?: string;
  address?: string;
  phone?: string;
  email?: string;
  primaryColor?: string;
}

export function ContactForm({
  headline = 'Contact Us',
  subheadline = "We're here to help. Send us a message and we'll respond as soon as possible.",
  fields,
  submitText = 'Send Message',
  address,
  phone,
  email,
  primaryColor = '#1e4d7b',
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {subheadline}
            </p>

            <div className="mt-8 space-y-6">
              {address && (
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <svg className="h-5 w-5" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600 whitespace-pre-line">{address}</p>
                  </div>
                </div>
              )}

              {phone && (
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <svg className="h-5 w-5" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                      className="mt-1 text-gray-600 hover:text-gray-900"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {email && (
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    <svg className="h-5 w-5" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 text-gray-600 hover:text-gray-900"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <svg className="h-8 w-8" style={{ color: primaryColor }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Thank You!</h3>
                <p className="mt-2 text-gray-600">
                  We&apos;ve received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-900"
                    >
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <div className="mt-1">
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={4}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:outline-none"
                          style={{ '--tw-ring-color': primaryColor } as React.CSSProperties}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:outline-none"
                          style={{ '--tw-ring-color': primaryColor } as React.CSSProperties}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                        >
                          <option value="">{field.placeholder || 'Select...'}</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:outline-none"
                          style={{ '--tw-ring-color': primaryColor } as React.CSSProperties}
                          onChange={(e) => handleChange(field.name, e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full rounded-md px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                >
                  {submitText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export type { FormField };
