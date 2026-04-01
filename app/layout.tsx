import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import './globals.css';
import { cssVariables } from '@/lib/theme';

export const metadata: Metadata = {
  title: {
    default: 'ACB6 - Conseil & architecture SI',
    template: '%s | ACB6',
  },
  description: "Cabinet de conseil et d'architecture SI pour des transformations plus lisibles, crédibles et durables.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body style={cssVariables as React.CSSProperties}>{children}</body>
    </html>
  );
}
