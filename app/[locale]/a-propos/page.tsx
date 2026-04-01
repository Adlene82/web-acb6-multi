import { CtaBand, ProofStrip } from '@/components/sections';
import { Card, Section } from '@/components/ui';
import { getAboutPageContent } from '@/lib/site-content';
import { isLocale, localizePath, type Locale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function AboutPage({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const [page, tPages, tCommon] = await Promise.all([
    getAboutPageContent(locale as Locale),
    getTranslations({ locale: locale as Locale, namespace: 'pages' }),
    getTranslations({ locale: locale as Locale, namespace: 'common' }),
  ]);

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-hero__lead">{page.lead}</p>
        </div>
      </section>

      <Section eyebrow={tPages('about.positioningEyebrow')} title={tPages('about.positioningTitle')} intro={tPages('about.positioningIntro')}>
        <div className="split-grid split-grid--balanced">
          <Card>
            <h3>{page.missionTitle}</h3>
            <p>{page.missionText}</p>
          </Card>
          <Card>
            <h3>{page.postureTitle}</h3>
            <p>{page.postureText}</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow={tPages('about.valuesEyebrow')} title={tPages('about.valuesTitle')}>
        <div className="card-grid card-grid--2">
          {page.values.map((value) => (
            <Card key={value}><p>{value}</p></Card>
          ))}
        </div>
      </Section>

      {page.credibilityPoints.length ? (
        <Section eyebrow={tPages('about.credibilityEyebrow')} title={tPages('about.credibilityTitle')}>
          <div className="card-grid card-grid--2">
            {page.credibilityPoints.map((item) => (
              <Card key={item}><p>{item}</p></Card>
            ))}
          </div>
        </Section>
      ) : null}

      <ProofStrip
        eyebrow={locale === 'ru' ? 'Почему ACB6' : 'Pourquoi ACB6'}
        title={locale === 'ru'
          ? 'Фронтенд-основа, созданная для читаемости, доверия и роста.'
          : 'Une base front-end pensée pour la lisibilité, la crédibilité et la montée en gamme.'}
        metrics={locale === 'ru'
          ? [
              { value: '5', label: 'структурированных страниц' },
              { value: '1', label: 'редактируемая коллекция проектов' },
              { value: '100%', label: 'согласованность с theme tokens' },
            ]
          : undefined}
      />
      <CtaBand
        eyebrow={tCommon('contact')}
        primaryLink={{ label: page.finalCta.link.label, href: localizePath('/contact', locale as Locale), variant: 'primary' }}
        secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', locale as Locale), variant: 'ghost' }}
        helperText={page.finalCta.helperText}
      />
    </>
  );
}
