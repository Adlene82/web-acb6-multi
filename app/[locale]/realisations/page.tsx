import Image from 'next/image';
import Link from 'next/link';
import { CtaBand } from '@/components/sections';
import { Card, Section } from '@/components/ui';
import { getRealisationImage, getRealisationList } from '@/lib/realisations';
import { getSanityConfigSummary } from '@/lib/sanity';
import { isLocale, localizePath, type Locale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function RealisationsPage({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const [projects, sanity, tPages, tCommon] = await Promise.all([
    getRealisationList(locale as Locale),
    getSanityConfigSummary(),
    getTranslations({ locale: locale as Locale, namespace: 'pages' }),
    getTranslations({ locale: locale as Locale, namespace: 'common' }),
  ]);

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <div className="detail-hero">
            <div>
              <p className="eyebrow">{tPages('realisations.eyebrow')}</p>
              <h1>{tPages('realisations.title')}</h1>
              <p className="page-hero__lead">{tPages('realisations.lead')}</p>
            </div>
            <div className="realisations-highlights">
              <Card className="hero-stat realisations-highlights__item">
                <strong>CMS Sanity</strong>
                <span>{tPages('realisations.highlight1')}</span>
              </Card>
              <Card className="hero-stat realisations-highlights__item">
                <strong>{locale === 'ru' ? 'Фотографии' : 'Photos'}</strong>
                <span>{tPages('realisations.highlight2')}</span>
              </Card>
              <Card className="hero-stat realisations-highlights__item">
                <strong>{locale === 'ru' ? 'Описания' : 'Descriptions'}</strong>
                <span>{tPages('realisations.highlight3')}</span>
              </Card>
              <Card className="hero-stat realisations-highlights__item">
                <strong>{sanity.enabled ? tPages('realisations.sanityActive') : tPages('realisations.sanityInactive')}</strong>
                <span>{sanity.enabled ? `Édition live via ${sanity.dataset}` : locale === 'ru' ? 'Локальный fallback виден, пока не заданы переменные окружения.' : 'Fallback local visible tant que les variables d\'environnement ne sont pas posées.'}</span>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Section title={tPages('realisations.projectListTitle')} intro={tPages('realisations.projectListIntro')} eyebrow={tPages('realisations.eyebrow')}>
        <div className="project-grid">
          {projects.map((project) => {
            const coverImageUrl = getRealisationImage(project.coverImage);

            return (
              <Card key={project.slug} className="project-card">
                <div className="project-card__media" aria-hidden={coverImageUrl ? undefined : 'true'}>
                  {coverImageUrl ? (
                    <Image src={coverImageUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  ) : null}
                </div>
                <div className="project-card__body">
                  <p className="eyebrow">{project.sector}</p>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <Link href={localizePath(`/realisations/${project.slug}`, locale as Locale)} className="text-link">{tCommon('seeProject')}</Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <CtaBand primaryLink={{ label: tCommon('contact'), href: localizePath('/contact', locale as Locale), variant: 'primary' }} secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', locale as Locale), variant: 'ghost' }} />
    </>
  );
}
