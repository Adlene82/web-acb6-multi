import { CtaBand, MethodSection, SectorsSection } from '@/components/sections';
import { Card, Section } from '@/components/ui';
import { getExpertiseList, getHomePageContent } from '@/lib/site-content';
import { isLocale, localizePath, type Locale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function ExpertisesPage({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const currentLocale = locale as Locale;
  const [expertises, homePage, tPages, tCommon] = await Promise.all([
    getExpertiseList(currentLocale),
    getHomePageContent(currentLocale),
    getTranslations({ locale: currentLocale, namespace: 'pages' }),
    getTranslations({ locale: currentLocale, namespace: 'common' }),
  ]);

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <p className="eyebrow">{tPages('expertises.eyebrow')}</p>
          <h1>{tPages('expertises.title')}</h1>
          <p className="page-hero__lead">{tPages('expertises.intro')}</p>
        </div>
      </section>

      <Section eyebrow={tCommon('expertises')} title={tPages('expertises.title')} intro={tPages('expertises.intro')}>
        <div className="card-grid card-grid--2">
          {expertises.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <MethodSection locale={currentLocale} eyebrow={tCommon('expertises')} title={homePage.methodTitle} intro={homePage.methodIntro} />
      <SectorsSection locale={currentLocale} eyebrow={tCommon('expertises')} title={homePage.contextsTitle} intro={homePage.contextsIntro} sectors={homePage.sectors} proofPoints={homePage.proofPoints} />
      <CtaBand
        locale={currentLocale}
        eyebrow={tCommon('contact')}
        primaryLink={{ ...homePage.finalCta.link, href: localizePath(homePage.finalCta.link.href, currentLocale) }}
        secondaryLink={{ label: tCommon('seeAllRealisations'), href: localizePath('/realisations', currentLocale), variant: 'ghost' }}
        helperText={homePage.finalCta.helperText}
      />
    </>
  );
}
