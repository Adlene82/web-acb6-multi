import Link from 'next/link';
import { ReactNode } from 'react';
import type { Expertise, Project } from '@/data/site-content';
import type { HomePageContent, SanityLink, StatItem } from '@/lib/site-content';
import { BulletList, Button, Card, Section } from '@/components/ui';

function linkProps(item: SanityLink) {
  return item.openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {};
}

export function HomeHero({ content }: { content: HomePageContent }) {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero__lead">{content.lead}</p>
          <div className="hero__actions">
            <Button href={content.primaryCta.link.href} variant={content.primaryCta.link.variant === 'secondary' ? 'secondary' : content.primaryCta.link.variant === 'ghost' ? 'ghost' : 'primary'} openInNewTab={content.primaryCta.link.openInNewTab}>
              {content.primaryCta.link.label}
            </Button>
            <Button href={content.secondaryCta.link.href} variant={content.secondaryCta.link.variant === 'ghost' ? 'ghost' : 'secondary'} openInNewTab={content.secondaryCta.link.openInNewTab}>
              {content.secondaryCta.link.label}
            </Button>
          </div>
          <div className="hero__stats" aria-label="Points clés">
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

export function SectorsSection({ eyebrow = 'Contextes', title, intro, sectors, proofPoints, highlightEyebrow = 'Secteurs & usages', highlightTitle = 'Des interventions adaptées aux systèmes complexes et aux trajectoires de transformation durables.' }: { eyebrow?: string; title: string; intro: string; sectors: string[]; proofPoints: string[]; highlightEyebrow?: string; highlightTitle?: string }) {
  return (
    <Section tone="alt" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="split-grid">
        <Card className="highlight-card">
          <p className="eyebrow">{highlightEyebrow}</p>
          <h3>{highlightTitle}</h3>
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

export function MethodSection({ eyebrow = 'Méthode', title, intro, steps = [
  { eyebrow: '1. Cadrer', title: "Poser une base claire avant d'accélérer", text: "Nous clarifions les enjeux, la trajectoire et les décisions critiques pour éviter les refontes à répétition." },
  { eyebrow: '2. Concevoir', title: 'Relier vision métier et architecture', text: 'Nous structurons des solutions compréhensibles, pilotables et réellement exploitables par les équipes.' },
  { eyebrow: '3. Transformer', title: 'Faire avancer sans perdre la maîtrise', text: "Nous aidons à séquencer les chantiers, à sécuriser les arbitrages et à garder le cap sur l'impact." },
] }: { eyebrow?: string; title: string; intro: string; steps?: Array<{ eyebrow: string; title: string; text: string }> }) {
  return (
    <Section eyebrow={eyebrow} title={title} intro={intro}>
      <div className="card-grid card-grid--3">
        {steps.map((step) => (
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

export function ProjectsSection({ eyebrow = 'Réalisations', title = 'Des preuves projet éditables, prêtes à être reliées à un CMS.', intro = 'La collection Réalisations est pensée comme un contenu structurant: grille cohérente, détail réplicable et données exploitables.', projects, seeAllLabel = 'Voir toutes les réalisations', projectLabel = 'Voir le projet', seeAllHref = '/realisations' }: { eyebrow?: string; title?: string; intro?: string; projects: Project[]; seeAllLabel?: string; projectLabel?: string; seeAllHref?: string }) {
  return (
    <Section eyebrow={eyebrow} title={title} intro={intro} actions={<Button href={seeAllHref} variant="secondary">{seeAllLabel}</Button>}>
      <div className="project-grid">
        {projects.map((project) => (
          <Card key={project.slug} className="project-card">
            <div className="project-card__media" aria-hidden="true" />
            <div className="project-card__body">
              <p className="eyebrow">{project.sector}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link href={`/realisations/${project.slug}`} className="text-link">{projectLabel}</Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function ProofStrip({ eyebrow = 'Pourquoi ACB6', title = 'Une base front-end pensée pour la lisibilité, la crédibilité et la montée en gamme.', metrics = [
  { value: '5', label: 'pages cibles structurées' },
  { value: '1', label: 'collection Réalisations éditable' },
  { value: '100%', label: 'alignée sur les tokens du thème' },
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

export function CtaBand({ eyebrow = 'Échange', title = "Besoin d'un cadrage, d'une modernisation ou d'une trajectoire d'architecture plus lisible ?", primaryLink = { label: 'Échanger sur votre projet', href: '/contact', variant: 'primary' }, secondaryLink = { label: 'Découvrir nos expertises', href: '/expertises', variant: 'ghost' }, helperText }: { eyebrow?: string; title?: string; primaryLink?: SanityLink; secondaryLink?: SanityLink; helperText?: string }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {helperText ? <p className="site-footer__lead">{helperText}</p> : null}
        </div>
        <div className="cta-band__actions">
          <Button href={primaryLink.href} variant={primaryLink.variant === 'secondary' ? 'secondary' : primaryLink.variant === 'ghost' ? 'ghost' : 'primary'} openInNewTab={primaryLink.openInNewTab}>
            {primaryLink.label}
          </Button>
          <Link href={secondaryLink.href} className="button button--ghost" {...linkProps(secondaryLink)}>
            {secondaryLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
