import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Sites | Law Firm Website Templates',
  description: 'Preview our professional law firm website templates designed for NYC attorneys.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
