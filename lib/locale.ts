export const locales = ['fr', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && (locales as readonly string[]).includes(value));
}

export function localizePath(path: string, locale: Locale) {
  if (!path.startsWith('/')) return path;
  if (path.startsWith('/studio')) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (locales.some((item) => path === `/${item}` || path.startsWith(`/${item}/`))) return path;
  if (locale === defaultLocale) return path;
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}
