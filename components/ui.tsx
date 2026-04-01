import Link from 'next/link';
import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  actions?: ReactNode;
  children: ReactNode;
  tone?: 'default' | 'alt' | 'dark';
};

export function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>;
}

export function Section({ id, eyebrow, title, intro, actions, children, tone = 'default' }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <Container>
        <div className="section__header">
          <div className="section__copy">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
            {intro ? <p className="section__intro">{intro}</p> : null}
          </div>
          {actions ? <div className="section__actions">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function Button({
  href,
  children,
  variant = 'primary',
  openInNewTab = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  openInNewTab?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button button--${variant}`}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <article className={`card ${className}`.trim()}>{children}</article>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
