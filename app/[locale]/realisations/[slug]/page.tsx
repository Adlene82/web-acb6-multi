import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/sections';
import { Section } from '@/components/ui';
import { getRealisationBySlug, getRealisationImage, getRealisationStaticSlugs } from '@/lib/realisations';
import { getSanityConfigSummary } from '@/lib/sanity';
import { isLocale, localizePath, locales, type Locale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  const params = await Promise.all(
    locales.map(async (locale) => {
      const items = await getRealisationStaticSlugs(locale);
      return items.map((item) => ({ locale, slug: item.slug }));
    }),
  );

  return params.flat();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) return {};

  const project = await getRealisationBySlug(locale as Locale, slug);

  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.seoDescription,
  };
}

export const revalidate = 60;

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const currentLocale = locale as Locale;
  const [project, sanity, tPages, tCommon] = await Promise.all([
    getRealisationBySlug(currentLocale, slug),
    getSanityConfigSummary(),
    getTranslations({ locale: currentLocale, namespace: 'pages' }),
    getTranslations({ locale: currentLocale, namespace: 'common' }),
  ]);

  const coverImageUrl = getRealisationImage(project?.coverImage);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="page-hero page-hero--detail page-hero--compact">
        <div className="container detail-hero">
          <div>
            <p className="eyebrow">{project.sector}</p>
            <h1>{project.title}</h1>
            <p className="page-hero__lead">{project.summary}</p>
            <p className="eyebrow">{sanity.enabled ? tPages('projectDetail.sanityContent') : tPages('projectDetail.fallback')}</p>
          </div>
          <div className="detail-hero__visual" aria-hidden={coverImageUrl ? undefined : 'true'}>
            {coverImageUrl ? (
              <Image src={coverImageUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            ) : null}
          </div>
        </div>
      </section>

      <Section eyebrow={tPages('projectDetail.eyebrow')} title={tPages('projectDetail.title')}>
        <div className="detail-grid">
          <article className="card">
            <h3>{tPages('projectDetail.context')}</h3>
            <p>{project.challenge}</p>
          </article>
          <article className="card">
            <h3>{tPages('projectDetail.response')}</h3>
            <p>{project.solution}</p>
          </article>
          <article className="card detail-grid__full">
            <h3>{tPages('projectDetail.result')}</h3>
            <p>{project.results}</p>
          </article>
        </div>
      </Section>

      <CtaBand locale={currentLocale} primaryLink={{ label: tCommon('contact'), href: localizePath('/contact', currentLocale), variant: 'primary' }} secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', currentLocale), variant: 'ghost' }} />
    </>
  );
}
