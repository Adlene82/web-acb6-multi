import { sanityImageUrl } from '@/lib/sanity';
import { getRealisationBySlug as getLocaleRealisationBySlug, getRealisationList as getLocaleRealisationList, getRealisationStaticSlugs as getLocaleRealisationStaticSlugs } from '@/lib/site-content';
import type { Locale } from '@/lib/locale';
import type { Project } from '@/data/site-content';

export type { Project };

export function getRealisationImage(source?: unknown) {
  return sanityImageUrl(source);
}

export async function getRealisationList(locale: Locale): Promise<Project[]> {
  return getLocaleRealisationList(locale) as Promise<Project[]>;
}

export async function getRealisationBySlug(locale: Locale, slug: string): Promise<Project | null> {
  return getLocaleRealisationBySlug(locale, slug) as Promise<Project | null>;
}

export async function getRealisationStaticSlugs(locale: Locale) {
  return getLocaleRealisationStaticSlugs(locale);
}
