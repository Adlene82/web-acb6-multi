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

  const currentLocale = locale as Locale;
  const [projects, sanity, tPages, tCommon] = await Promise.all([
    getRealisationList(currentLocale),
    getSanityConfigSummary(),
    getTranslations({ locale: currentLocale, namespace: 'pages' }),
    getTranslations({ locale: currentLocale, namespace: 'common' }),
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
                <strong>{currentLocale === 'ru' ? '\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438' : 'Photos'}</strong>
                <span>{tPages('realisations.highlight2')}</span>
              </Card>
              <Card className="hero-stat realisations-highlights__item">
                <strong>{currentLocale === 'ru' ? '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u044f' : 'Descriptions'}</strong>
                <span>{tPages('realisations.highlight3')}</span>
              </Card>
              <Card className="hero-stat realisations-highlights__item">
                <strong>{sanity.enabled ? tPages('realisations.sanityActive') : tPages('realisations.sanityInactive')}</strong>
                <span>{sanity.enabled ? `\u00c9dition live via ${sanity.dataset}` : currentLocale === 'ru' ? '\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 fallback \u0432\u0438\u0434\u0435\u043d, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f.' : "Fallback local visible tant que les variables d'environnement ne sont pas pos\u00e9es."}</span>
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
                  <Link href={localizePath(`/realisations/${project.slug}`, currentLocale)} className="text-link">{tCommon('seeProject')}</Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <CtaBand locale={currentLocale} primaryLink={{ label: tCommon('contact'), href: localizePath('/contact', currentLocale), variant: 'primary' }} secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', currentLocale), variant: 'ghost' }} />
    </>
  );
}
