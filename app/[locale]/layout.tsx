import { notFound } from 'next/navigation';
import { Footer, Header } from '@/components/site-shell';
import { getSiteSettings, getThemeCssVariables } from '@/lib/site-content';
import { isLocale, locales, type Locale } from '@/lib/locale';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const settings = await getSiteSettings(locale as Locale);

  return (
    <div style={getThemeCssVariables(settings.themeSettings)}>
      <Header settings={settings} locale={locale as Locale} />
      <main>{children}</main>
      <Footer settings={settings} locale={locale as Locale} />
    </div>
  );
}
