import { ContactForm } from '@/components/contact-form';
import { CtaBand } from '@/components/sections';
import { Card, Section } from '@/components/ui';
import { getContactPageContent } from '@/lib/site-content';
import { isLocale, localizePath, type Locale } from '@/lib/locale';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function ContactPage({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const currentLocale = locale as Locale;
  const [page, tPages] = await Promise.all([
    getContactPageContent(currentLocale),
    getTranslations({ locale: currentLocale, namespace: 'pages' }),
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

      <Section eyebrow={tPages('contact.eyebrow')} title={page.sectionTitle} intro={page.sectionIntro}>
        <div className="contact-layout">
          <Card>
            <h3>{tPages('contact.writeUs')}</h3>
            <p>{page.formIntro}</p>
            <ContactForm />
          </Card>
          <Card>
            <h3>{tPages('contact.coordinates')}</h3>
            <ul className="site-footer__list">
              {page.contactMethods.map((method) => (
                <li key={`${method.label}-${method.value}`}>
                  {method.href ? <a href={method.href}>{method.value}</a> : method.value}
                  {method.description ? <span> - {method.description}</span> : null}
                </li>
              ))}
            </ul>
            <div className="contact-note">
              <p className="eyebrow">{tPages('contact.reassurance')}</p>
              <p>{page.reassuranceText}</p>
            </div>
          </Card>
        </div>
      </Section>

      <CtaBand
        locale={currentLocale}
        eyebrow={page.reassuranceEyebrow}
        primaryLink={{ label: page.title, href: localizePath('/realisations', currentLocale), variant: 'primary' }}
        secondaryLink={{ label: tPages('expertises.title'), href: localizePath('/expertises', currentLocale), variant: 'ghost' }}
        helperText={page.reassuranceText}
      />
    </>
  );
}
