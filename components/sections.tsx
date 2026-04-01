import Link from 'next/link';
import { ReactNode } from 'react';
import { methodSteps, type Expertise, type Project } from '@/data/site-content';
import { methodStepsRu } from '@/data/site-content.ru';
import { defaultLocale, localizePath, type Locale } from '@/lib/locale';
import type { HomePageContent, SanityLink, StatItem } from '@/lib/site-content';
import { BulletList, Button, Card, Section } from '@/components/ui';

const localizedCopy = {
  fr: {
    heroStatsAriaLabel: 'Points cl\u00e9s',
    sectorsHighlightEyebrow: 'Secteurs & usages',
    sectorsHighlightTitle: 'Des interventions adapt\u00e9es aux syst\u00e8mes complexes et aux trajectoires de transformation durables.',
    ctaDefaults: {
      eyebrow: '\u00c9change',
      title: "Besoin d'un cadrage, d'une modernisation ou d'une trajectoire d'architecture plus lisible ?",
      primaryLink: { label: '\u00c9changer sur votre projet', href: '/contact', variant: 'primary' },
      secondaryLink: { label: 'D\u00e9couvrir nos expertises', href: '/expertises', variant: 'ghost' },
    },
  },
  ru: {
    heroStatsAriaLabel: '\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u044b',
    sectorsHighlightEyebrow: '\u0421\u0435\u043a\u0442\u043e\u0440\u044b \u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438',
    sectorsHighlightTitle: '\u041f\u043e\u0434\u0445\u043e\u0434\u044b, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a \u0441\u043b\u043e\u0436\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c \u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c \u0442\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u044f\u043c \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438.',
    ctaDefaults: {
      eyebrow: '\u0421\u0432\u044f\u0437\u044c',
      title: '\u041d\u0443\u0436\u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u044f\u0441\u043d\u0430\u044f \u0440\u0430\u043c\u043a\u0430, \u043c\u043e\u0434\u0435\u0440\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043b\u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0430\u044f \u0442\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u044f?',
      primaryLink: { label: '\u041e\u0431\u0441\u0443\u0434\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442', href: '/contact', variant: 'primary' },
      secondaryLink: { label: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u0443', href: '/expertises', variant: 'ghost' },
    },
  },
} satisfies Record<Locale, {
  heroStatsAriaLabel: string;
  sectorsHighlightEyebrow: string;
  sectorsHighlightTitle: string;
  ctaDefaults: { eyebrow: string; title: string; primaryLink: SanityLink; secondaryLink: SanityLink };
}>;

function resolveLocale(locale?: Locale): Locale {
  return locale ?? defaultLocale;
}

function localizedHref(href: string, locale?: Locale) {
  if (!locale || !href.startsWith('/') || href.startsWith('/studio')) return href;
  return localizePath(href, locale);
}

function linkProps(item: SanityLink) {
  return item.openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {};
}

export function HomeHero({ content, locale }: { content: HomePageContent; locale?: Locale }) {
  const currentLocale = resolveLocale(locale);
  const copy = localizedCopy[currentLocale];

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero__lead">{content.lead}</p>
          <div className="hero__actions">
            <Button href={localizedHref(content.primaryCta.link.href, currentLocale)} variant={content.primaryCta.link.variant === 'secondary' ? 'secondary' : content.primaryCta.link.variant === 'ghost' ? 'ghost' : 'primary'} openInNewTab={content.primaryCta.link.openInNewTab}>
              {content.primaryCta.link.label}
            </Button>
            <Button href={localizedHref(content.secondaryCta.link.href, currentLocale)} variant={content.secondaryCta.link.variant === 'ghost' ? 'ghost' : 'secondary'} openInNewTab={content.secondaryCta.link.openInNewTab}>
              {content.secondaryCta.link.label}
            </Button>
          </div>
          <div className="hero__stats" aria-label={copy.heroStatsAriaLabel}>
            {content.heroStats.map((item) => (
              <div key={item.label} className="hero-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero-panel hero-panel--primary" />
          <div className="hero-panel hero-panel--secondary" />
          <div className="hero-panel hero-panel--accent">
            {content.heroPanelHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExpertiseGridSection({ eyebrow = 'Expertises', title, intro, items }: { eyebrow?: string; title: string; intro: string; items: Expertise[] }) {
  return (
    <Section eyebrow={eyebrow} title={title} intro={intro}>
      <div className="card-grid card-grid--3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <BulletList items={item.points} />
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function SectorsSection({ locale, eyebrow = 'Contextes', title, intro, sectors, proofPoints, highlightEyebrow, highlightTitle }: { locale?: Locale; eyebrow?: string; title: string; intro: string; sectors: string[]; proofPoints: string[]; highlightEyebrow?: string; highlightTitle?: string }) {
  const currentLocale = resolveLocale(locale);
  const copy = localizedCopy[currentLocale];

  return (
    <Section tone="alt" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="split-grid">
        <Card className="highlight-card">
          <p className="eyebrow">{highlightEyebrow ?? copy.sectorsHighlightEyebrow}</p>
          <h3>{highlightTitle ?? copy.sectorsHighlightTitle}</h3>
          <div className="tag-row">
            {sectors.map((sector) => (
              <span key={sector} className="tag">{sector}</span>
            ))}
          </div>
        </Card>
        <div className="stack-grid">
          {proofPoints.map((item) => (
            <Card key={item}><p>{item}</p></Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function MethodSection({ locale, eyebrow = 'M\u00e9thode', title, intro, steps }: { locale?: Locale; eyebrow?: string; title: string; intro: string; steps?: Array<{ eyebrow: string; title: string; text: string }> }) {
  const currentLocale = resolveLocale(locale);
  const resolvedSteps = steps ?? (currentLocale === 'ru' ? methodStepsRu : methodSteps);

  return (
    <Section eyebrow={eyebrow} title={title} intro={intro}>
      <div className="card-grid card-grid--3">
        {resolvedSteps.map((step) => (
          <Card key={step.title}>
            <p className="eyebrow">{step.eyebrow}</p>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function ProjectsSection({ locale, eyebrow = 'R\u00e9alisations', title = 'Des preuves projet \u00e9ditables, pr\u00eates \u00e0 \u00eatre reli\u00e9es \u00e0 un CMS.', intro = 'La collection R\u00e9alisations est pens\u00e9e comme un contenu structurant: grille coh\u00e9rente, d\u00e9tail r\u00e9plicable et donn\u00e9es exploitables.', projects, seeAllLabel = 'Voir toutes les r\u00e9alisations', projectLabel = 'Voir le projet', seeAllHref = '/realisations' }: { locale?: Locale; eyebrow?: string; title?: string; intro?: string; projects: Project[]; seeAllLabel?: string; projectLabel?: string; seeAllHref?: string }) {
  const currentLocale = resolveLocale(locale);

  return (
    <Section eyebrow={eyebrow} title={title} intro={intro} actions={<Button href={localizedHref(seeAllHref, currentLocale)} variant="secondary">{seeAllLabel}</Button>}>
      <div className="project-grid">
        {projects.map((project) => (
          <Card key={project.slug} className="project-card">
            <div className="project-card__media" aria-hidden="true" />
            <div className="project-card__body">
              <p className="eyebrow">{project.sector}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link href={localizedHref(`/realisations/${project.slug}`, currentLocale)} className="text-link">{projectLabel}</Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function ProofStrip({ eyebrow = 'Pourquoi ACB6', title = 'Une base front-end pens\u00e9e pour la lisibilit\u00e9, la cr\u00e9dibilit\u00e9 et la mont\u00e9e en gamme.', metrics = [
  { value: '5', label: 'pages cibles structur\u00e9es' },
  { value: '1', label: 'collection R\u00e9alisations \u00e9ditable' },
  { value: '100%', label: 'align\u00e9e sur les tokens du th\u00e8me' },
] }: { eyebrow?: string; title?: string; metrics?: StatItem[] }) {
  return (
    <section className="proof-strip">
      <div className="container proof-strip__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="proof-strip__grid">
          {metrics.map((item) => (
            <div key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ locale, eyebrow, title, primaryLink, secondaryLink, helperText }: { locale?: Locale; eyebrow?: string; title?: string; primaryLink?: SanityLink; secondaryLink?: SanityLink; helperText?: string }) {
  const currentLocale = resolveLocale(locale);
  const defaults = localizedCopy[currentLocale].ctaDefaults;
  const resolvedEyebrow = eyebrow ?? defaults.eyebrow;
  const resolvedTitle = title ?? defaults.title;
  const resolvedPrimaryLink: SanityLink = primaryLink ?? defaults.primaryLink;
  const resolvedSecondaryLink: SanityLink = secondaryLink ?? defaults.secondaryLink;

  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">{resolvedEyebrow}</p>
          <h2>{resolvedTitle}</h2>
          {helperText ? <p className="site-footer__lead">{helperText}</p> : null}
        </div>
        <div className="cta-band__actions">
          <Button href={localizedHref(resolvedPrimaryLink.href, currentLocale)} variant={resolvedPrimaryLink.variant === 'secondary' ? 'secondary' : resolvedPrimaryLink.variant === 'ghost' ? 'ghost' : 'primary'} openInNewTab={resolvedPrimaryLink.openInNewTab}>
            {resolvedPrimaryLink.label}
          </Button>
          <Link href={localizedHref(resolvedSecondaryLink.href, currentLocale)} className="button button--ghost" {...linkProps(resolvedSecondaryLink)}>
            {resolvedSecondaryLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
