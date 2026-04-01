import Link from 'next/link';
import type { Locale } from '@/lib/locale';
import { localizePath } from '@/lib/locale';
import type { SanityLink, SiteSettings } from '@/lib/site-content';
import { Button, Container } from '@/components/ui';

function linkProps(item: SanityLink) {
  return item.openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {};
}

function getHeaderCta(settings: SiteSettings) {
  return settings.primaryNavigation.find((item) => item.href.endsWith('/contact'))
    ?? settings.primaryNavigation[0]
    ?? { label: 'Nous contacter', href: '/contact', variant: 'primary' as const };
}

export function Header({ settings, locale }: { settings: SiteSettings; locale: Locale }) {
  const cta = getHeaderCta(settings);

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href={localizePath('/', locale)} className="brand" aria-label={`${settings.siteName} - retour à l'accueil`}>
            <span className="brand__mark">{settings.siteName}</span>
            <span className="brand__text">{settings.brandBaseline}</span>
          </Link>

          <nav className="site-nav" aria-label="Navigation principale">
            {settings.primaryNavigation.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} className="site-nav__link" {...linkProps(item)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__cta">
            <div className="language-switch" aria-label="Langue">
              <Link href={localizePath('/', 'fr')} className={locale === 'fr' ? 'language-switch__link is-active' : 'language-switch__link'}>
                FR
              </Link>
              <span aria-hidden="true">·</span>
              <Link href={localizePath('/', 'ru')} className={locale === 'ru' ? 'language-switch__link is-active' : 'language-switch__link'}>
                RU
              </Link>
            </div>
            <Button href={cta.href} variant={cta.variant === 'ghost' ? 'ghost' : cta.variant === 'secondary' ? 'secondary' : 'primary'} openInNewTab={cta.openInNewTab}>
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export function Footer({ settings, locale }: { settings: SiteSettings; locale?: Locale }) {
  const navigationLabel = locale === 'ru' ? 'Навигация' : 'Navigation';
  const contactLabel = locale === 'ru' ? 'Контакты' : 'Contact';
  const baselineLabel = locale === 'ru' ? 'Редактируемая фронтенд-основа.' : 'Base front-end éditable.';

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <p className="eyebrow">{settings.siteName}</p>
            <p className="site-footer__lead">{settings.brandDescription}</p>
          </div>
          <div>
            <h3>{navigationLabel}</h3>
            <ul className="site-footer__list">
              {settings.footerNavigation.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href} {...linkProps(item)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{contactLabel}</h3>
            <ul className="site-footer__list">
              {settings.contactMethods.map((method) => (
                <li key={`${method.label}-${method.value}`}>
                  {method.href ? <a href={method.href}>{method.value}</a> : method.value}
                  {method.description ? <span> - {method.description}</span> : null}
                </li>
              ))}
              {settings.locations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>{settings.legalName || settings.siteName} - {baselineLabel}</span>
          <span>
            {settings.legalNoticeUrl ? <a href={settings.legalNoticeUrl}>{settings.legalNoticeLabel}</a> : settings.legalNoticeLabel}
          </span>
        </div>
      </Container>
    </footer>
  );
}
