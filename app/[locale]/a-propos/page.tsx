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

  const currentLocale = locale as Locale;
  const [page, tPages, tCommon] = await Promise.all([
    getAboutPageContent(currentLocale),
    getTranslations({ locale: currentLocale, namespace: 'pages' }),
    getTranslations({ locale: currentLocale, namespace: 'common' }),
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
        eyebrow={currentLocale === 'ru' ? '\u041f\u043e\u0447\u0435\u043c\u0443 ACB6' : 'Pourquoi ACB6'}
        title={currentLocale === 'ru'
          ? '\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u043e\u0441\u043d\u043e\u0432\u0430, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u0438, \u0434\u043e\u0432\u0435\u0440\u0438\u044f \u0438 \u0440\u043e\u0441\u0442\u0430.'
          : 'Une base front-end pens\u00e9e pour la lisibilit\u00e9, la cr\u00e9dibilit\u00e9 et la mont\u00e9e en gamme.'}
        metrics={currentLocale === 'ru'
          ? [
              { value: '5', label: '\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446' },
              { value: '1', label: '\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432' },
              { value: '100%', label: '\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0441 theme tokens' },
            ]
          : undefined}
      />
      <CtaBand
        locale={currentLocale}
        eyebrow={tCommon('contact')}
        primaryLink={{ label: page.finalCta.link.label, href: localizePath('/contact', currentLocale), variant: 'primary' }}
        secondaryLink={{ label: tCommon('expertises'), href: localizePath('/expertises', currentLocale), variant: 'ghost' }}
        helperText={page.finalCta.helperText}
      />
    </>
  );
}
