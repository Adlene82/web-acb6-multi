import type { CSSProperties } from 'react';
import { expertises as fallbackExpertisesFr, featuredProjects as fallbackProjectsFr, heroStats as heroStatsFr, navItems as navItemsFr, proofPoints as proofPointsFr, sectors as sectorsFr } from '@/data/site-content';
import { expertisesRu as fallbackExpertisesRu, featuredProjectsRu as fallbackProjectsRu, heroStatsRu, navItemsRu, proofPointsRu, sectorsRu } from '@/data/site-content.ru';
import { localizePath, type Locale, defaultLocale } from '@/lib/locale';
import { sanityClient } from '@/lib/sanity';

export type LinkVariant = 'primary' | 'secondary' | 'ghost' | 'text';
export type SanityLink = { label: string; href: string; variant?: LinkVariant; openInNewTab?: boolean };
export type SanityCta = { eyebrow?: string; link: SanityLink; helperText?: string };
export type StatItem = { value: string; label: string };
export type ContactMethod = { label: string; value: string; href?: string; description?: string };
export type ThemeSettings = { brandTagline?: string; primaryAccent?: string; secondaryAccent?: string; heroTone?: string; buttonStyle?: string; notes?: string };
export type SiteSettings = {
  siteName: string;
  legalName: string;
  brandBaseline: string;
  brandDescription: string;
  primaryNavigation: SanityLink[];
  footerNavigation: SanityLink[];
  contactMethods: ContactMethod[];
  locations: string[];
  legalNoticeLabel: string;
  legalNoticeUrl: string;
  themeSettings: ThemeSettings | null;
};
export type HomePageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: SanityCta;
  secondaryCta: SanityCta;
  heroStats: StatItem[];
  heroPanelHighlights: string[];
  expertisesTitle: string;
  expertisesIntro: string;
  contextsTitle: string;
  contextsIntro: string;
  sectors: string[];
  methodTitle: string;
  methodIntro: string;
  proofPoints: string[];
  proofStripTitle: string;
  proofStripMetrics: StatItem[];
  finalCta: SanityCta;
};
export type AboutPageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  missionTitle: string;
  missionText: string;
  postureTitle: string;
  postureText: string;
  values: string[];
  credibilityPoints: string[];
  finalCta: SanityCta;
};
export type ContactPageContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sectionTitle: string;
  sectionIntro: string;
  contactMethods: ContactMethod[];
  reassuranceEyebrow: string;
  reassuranceText: string;
  formIntro: string;
};
export type SiteExpertise = (typeof fallbackExpertisesFr)[number] & { featuredOnHome?: boolean; order?: number };

function localizedNavigation(items: typeof navItemsFr, locale: Locale) {
  return items.map((item) => ({ ...item, href: localizePath(item.href, locale) }));
}

const fallbackSiteSettingsFr: SiteSettings = {
  siteName: 'ACB6',
  legalName: 'ACB6',
  brandBaseline: 'Conseil & architecture SI',
  brandDescription: "Cabinet de conseil et d'architecture SI pour les transformations lisibles, pilotables et durables.",
  primaryNavigation: navItemsFr.map((item) => ({ ...item, variant: item.href === '/contact' ? 'primary' : 'text' })),
  footerNavigation: navItemsFr,
  contactMethods: [
    { label: 'Email', value: 'contact@acb6.fr', href: 'mailto:contact@acb6.fr' },
    { label: 'Téléphone', value: '+33 (0)0 00 00 00 00', href: 'tel:+33000000000' },
  ],
  locations: ["France - missions de conseil et d'architecture SI"],
  legalNoticeLabel: 'Mentions légales à connecter.',
  legalNoticeUrl: '',
  themeSettings: null,
};

const fallbackSiteSettingsRu: SiteSettings = {
  siteName: 'ACB6',
  legalName: 'ACB6',
  brandBaseline: 'Консалтинг и архитектура ИС',
  brandDescription: 'Консалтинговая практика и архитектура ИС для решений, которые остаются понятными, управляемыми и устойчивыми.',
  primaryNavigation: navItemsRu.map((item) => ({ ...item, variant: item.href === '/contact' ? 'primary' : 'text', href: localizePath(item.href, 'ru') })),
  footerNavigation: navItemsRu.map((item) => ({ ...item, href: localizePath(item.href, 'ru') })),
  contactMethods: [
    { label: 'Email', value: 'contact@acb6.fr', href: 'mailto:contact@acb6.fr' },
    { label: 'Телефон', value: '+33 (0)0 00 00 00 00', href: 'tel:+33000000000' },
  ],
  locations: ['Франция — миссии по консалтингу и архитектуре ИС'],
  legalNoticeLabel: 'Юридическая информация подключается.',
  legalNoticeUrl: '',
  themeSettings: null,
};

const fallbackHomePageFr: HomePageContent = {
  eyebrow: 'Conseil & architecture SI',
  title: 'Donnez à votre transformation digitale une base plus claire, plus crédible et plus durable.',
  lead: "ACB6 accompagne les organisations qui doivent structurer leurs décisions, aligner métier et architecture, et faire avancer des environnements complexes sans perdre la maîtrise.",
  primaryCta: { link: { label: 'Nous contacter', href: '/contact', variant: 'primary' } },
  secondaryCta: { link: { label: 'Voir nos réalisations', href: '/realisations', variant: 'secondary' } },
  heroStats: heroStatsFr,
  heroPanelHighlights: ['Architecture lisible', 'Décisions structurées', 'Exécution durable'],
  expertisesTitle: 'Des expertises structurées pour transformer sans brouiller la lecture.',
  expertisesIntro: 'Chaque domaine est présenté avec un angle clair, des bénéfices lisibles et un niveau de sobriété cohérent avec la direction premium retenue.',
  contextsTitle: 'Une posture crédible pour les environnements métiers et techniques exigeants.',
  contextsIntro: "ACB6 intervient là où la lisibilité, la coordination et la qualité d'architecture conditionnent la réussite des projets.",
  sectors: sectorsFr,
  methodTitle: 'Une progression simple : cadrer, concevoir, transformer.',
  methodIntro: "Le site reflète la même discipline que l'approche projet : peu d'effets, une hiérarchie forte et des messages qui se laissent scanner rapidement.",
  proofPoints: proofPointsFr,
  proofStripTitle: 'Une base front-end pensée pour la lisibilité, la crédibilité et la montée en gamme.',
  proofStripMetrics: [
    { value: '5', label: 'pages cibles structurées' },
    { value: '1', label: 'collection Réalisations éditable' },
    { value: '100%', label: 'alignée sur les tokens du thème' },
  ],
  finalCta: { eyebrow: 'Échange', link: { label: 'Échanger sur votre projet', href: '/contact', variant: 'primary' }, helperText: 'Une prise de contact simple, crédible et directement exploitable.' },
};

const fallbackHomePageRu: HomePageContent = {
  eyebrow: 'Консалтинг и архитектура ИС',
  title: 'Дайте вашей цифровой трансформации более понятную, убедительную и устойчивую основу.',
  lead: 'ACB6 помогает организациям структурировать решения, согласовывать бизнес и архитектуру, а также продвигать сложные среды без потери контроля.',
  primaryCta: { link: { label: 'Связаться с нами', href: '/contact', variant: 'primary' } },
  secondaryCta: { link: { label: 'Смотреть проекты', href: '/realisations', variant: 'secondary' } },
  heroStats: heroStatsRu,
  heroPanelHighlights: ['Понятная архитектура', 'Структурированные решения', 'Устойчивое исполнение'],
  expertisesTitle: 'Структурированная экспертиза, которая помогает трансформации не терять читаемость.',
  expertisesIntro: 'Каждое направление подается с ясным углом, понятными выгодами и уровнем сдержанности, соответствующим премиальному позиционированию.',
  contextsTitle: 'Убедительная подача для требовательных бизнес- и технических контекстов.',
  contextsIntro: 'ACB6 работает там, где читаемость, координация и качество архитектуры определяют успех проектов.',
  sectors: sectorsRu,
  methodTitle: 'Простой путь: сформулировать, спроектировать, трансформировать.',
  methodIntro: 'Сайт отражает ту же дисциплину, что и проектный подход: минимум эффектов, сильная иерархия и сообщения, которые легко просматривать.',
  proofPoints: proofPointsRu,
  proofStripTitle: 'Фронтенд-основа, созданная для читаемости, доверия и перехода на более высокий уровень.',
  proofStripMetrics: [
    { value: '5', label: 'структурированных страниц' },
    { value: '1', label: 'редактируемая коллекция проектов' },
    { value: '100%', label: 'согласованность с theme tokens' },
  ],
  finalCta: { eyebrow: 'Связь', link: { label: 'Обсудить проект', href: '/contact', variant: 'primary' }, helperText: 'Простой, понятный и сразу полезный контакт.' },
};

const fallbackAboutPageFr: AboutPageContent = {
  eyebrow: 'À propos',
  title: 'ACB6 accompagne les transformations qui exigent méthode, lisibilité et maîtrise.',
  lead: 'La page À propos renforce la crédibilité de la marque sans tomber dans un discours institutionnel froid ou générique.',
  missionTitle: 'Mission',
  missionText: 'Aligner métier, architecture et delivery pour faire émerger des trajectoires de transformation plus utiles, plus lisibles et plus robustes.',
  postureTitle: 'Posture',
  postureText: "Privilégier la précision, la pédagogie et la preuve projet plutôt que l'effet de surface ou le discours vague.",
  values: ['Clarté des décisions et des responsabilités', 'Architecture maintenable avant sophistication', 'Posture B2B crédible et sans surpromesse', 'Exigence de lecture sur mobile comme sur desktop'],
  credibilityPoints: ['Un discours piloté par la preuve projet plutôt que par la promesse vague.', 'Une hiérarchie éditoriale pensée pour des contextes métiers et techniques exigeants.'],
  finalCta: { eyebrow: 'Échange', link: { label: 'Parler de votre trajectoire', href: '/contact', variant: 'primary' }, helperText: 'Un échange utile pour cadrer le contexte, les enjeux et les prochaines décisions.' },
};

const fallbackAboutPageRu: AboutPageContent = {
  eyebrow: 'О нас',
  title: 'ACB6 сопровождает трансформации, которым нужны метод, читаемость и контроль.',
  lead: 'Страница «О нас» усиливает доверие к бренду без холодного или шаблонного корпоративного тона.',
  missionTitle: 'Миссия',
  missionText: 'Согласовывать бизнес, архитектуру и delivery, чтобы формировать более полезные, понятные и устойчивые траектории трансформации.',
  postureTitle: 'Подход',
  postureText: 'Ставить на точность, объяснимость и доказательства через проект, а не на поверхностный эффект или размытые обещания.',
  values: ['Понятные решения и зоны ответственности', 'Устойчивая архитектура прежде сложности', 'Надежная B2B-подача без лишних обещаний', 'Читаемость на мобильных так же важна, как на desktop'],
  credibilityPoints: ['Коммуникация, основанная на доказанных проектах, а не на общих обещаниях.', 'Редакционная иерархия, рассчитанная на сложные бизнес- и технические контексты.'],
  finalCta: { eyebrow: 'Связь', link: { label: 'Обсудить вашу траекторию', href: '/contact', variant: 'primary' }, helperText: 'Полезный разговор для фиксации контекста, вопросов и следующих шагов.' },
};

const fallbackContactPageFr: ContactPageContent = {
  eyebrow: 'Contact',
  title: 'Parlons de votre projet, de votre trajectoire SI ou de votre besoin de modernisation.',
  lead: 'Une page de contact simple, rassurante et prête à être branchée sur votre outil de collecte ou votre CRM.',
  sectionTitle: "Un point d'entrée direct, clair et sans friction.",
  sectionIntro: 'Le contenu éditorial se pilote désormais depuis Sanity, tout en gardant le formulaire prêt pour un raccordement technique ultérieur.',
  contactMethods: fallbackSiteSettingsFr.contactMethods,
  reassuranceEyebrow: 'Réassurance',
  reassuranceText: "Le formulaire est prêt pour raccordement technique. Les labels sont visibles, les champs sont sur une colonne mobile et les zones interactives respectent une base d'accessibilité.",
  formIntro: "Décrivez votre contexte, vos enjeux et votre horizon de décision. La structure du formulaire reste volontairement simple pour faciliter l'intégration future.",
};

const fallbackContactPageRu: ContactPageContent = {
  eyebrow: 'Контакты',
  title: 'Давайте обсудим ваш проект, траекторию ИС или задачу модернизации.',
  lead: 'Простая и понятная страница контактов, готовая к подключению к вашему инструменту сбора заявок или CRM.',
  sectionTitle: 'Прямой вход без лишних шагов и трения.',
  sectionIntro: 'Редактируемый контент теперь управляется через Sanity, а форма готова к последующему техническому подключению.',
  contactMethods: fallbackSiteSettingsRu.contactMethods,
  reassuranceEyebrow: 'Подтверждение',
  reassuranceText: 'Форма готова к техническому подключению. Подписи видимы, поля расположены в одну колонку на мобильных и интерактивные зоны отвечают базовым требованиям доступности.',
  formIntro: 'Опишите контекст, задачи и горизонт принятия решения. Структура формы остается намеренно простой, чтобы упростить последующую интеграцию.',
};

const siteSettingsQuery = `*[_type == "siteSettings" && (locale == $locale || ($locale == "fr" && !defined(locale)))][0]{siteName,legalName,brandBaseline,brandDescription,primaryNavigation[]{label,href,variant,openInNewTab},footerNavigation[]{label,href,variant,openInNewTab},contactMethods[]{label,value,href,description},locations,legalNoticeLabel,legalNoticeUrl,themeSettings{brandTagline,primaryAccent,secondaryAccent,heroTone,buttonStyle,notes}}`;
const homePageQuery = `*[_type == "homePage" && (locale == $locale || ($locale == "fr" && !defined(locale)))][0]{eyebrow,title,lead,primaryCta{eyebrow,helperText,link{label,href,variant,openInNewTab}},secondaryCta{eyebrow,helperText,link{label,href,variant,openInNewTab}},heroStats[]{value,label},heroPanelHighlights,expertisesTitle,expertisesIntro,contextsTitle,contextsIntro,sectors,methodTitle,methodIntro,proofPoints,proofStripTitle,proofStripMetrics[]{value,label},finalCta{eyebrow,helperText,link{label,href,variant,openInNewTab}}}`;
const aboutPageQuery = `*[_type == "aboutPage" && (locale == $locale || ($locale == "fr" && !defined(locale)))][0]{eyebrow,title,lead,missionTitle,missionText,postureTitle,postureText,values,credibilityPoints,finalCta{eyebrow,helperText,link{label,href,variant,openInNewTab}}}`;
const contactPageQuery = `*[_type == "contactPage" && (locale == $locale || ($locale == "fr" && !defined(locale)))][0]{eyebrow,title,lead,sectionTitle,sectionIntro,contactMethods[]{label,value,href,description},reassuranceEyebrow,reassuranceText,formIntro}`;
const expertiseQuery = `*[_type == "expertise" && (locale == $locale || ($locale == "fr" && !defined(locale)))] | order(order asc, _createdAt asc){title,summary,points,featuredOnHome,order}`;
const realisationsQuery = `*[_type == "realisations" && (locale == $locale || ($locale == "fr" && !defined(locale))) && published == true] | order(publishedAt desc) { slug, title, summary, sector, challenge, solution, results, featured, published, publishedAt, seoTitle, seoDescription, tags, coverImage, gallery }`;
const realisationBySlugQuery = `*[_type == "realisations" && (locale == $locale || ($locale == "fr" && !defined(locale))) && slug.current == $slug && published == true][0] { slug, title, summary, sector, challenge, solution, results, featured, published, publishedAt, seoTitle, seoDescription, tags, coverImage, gallery }`;
const realisationStaticSlugsQuery = `*[_type == "realisations" && (locale == $locale || ($locale == "fr" && !defined(locale))) && published == true]{"slug": slug.current}`;

function coerceLink(value: Partial<SanityLink> | null | undefined, fallback: SanityLink): SanityLink {
  return { label: value?.label?.trim() || fallback.label, href: value?.href?.trim() || fallback.href, variant: value?.variant || fallback.variant, openInNewTab: value?.openInNewTab ?? fallback.openInNewTab ?? false };
}
function coerceCta(value: Partial<SanityCta> | null | undefined, fallback: SanityCta): SanityCta {
  return { eyebrow: value?.eyebrow?.trim() || fallback.eyebrow, helperText: value?.helperText?.trim() || fallback.helperText, link: coerceLink(value?.link as Partial<SanityLink> | undefined, fallback.link) };
}
function coerceStats(value: Partial<StatItem>[] | null | undefined, fallback: StatItem[]) {
  if (!value?.length) return fallback;
  const cleaned = value.map((item) => ({ value: item.value?.trim() || '', label: item.label?.trim() || '' })).filter((item) => item.value && item.label);
  return cleaned.length ? cleaned : fallback;
}
function coerceStrings(value: string[] | null | undefined, fallback: string[]) {
  if (!value?.length) return fallback;
  const cleaned = value.map((item) => item?.trim()).filter(Boolean) as string[];
  return cleaned.length ? cleaned : fallback;
}
function coerceContactMethods(value: ContactMethod[] | null | undefined, fallback: ContactMethod[]) {
  if (!value?.length) return fallback;
  const cleaned = value.map((item) => ({ label: item.label?.trim() || '', value: item.value?.trim() || '', href: item.href?.trim() || undefined, description: item.description?.trim() || undefined })).filter((item) => item.label && item.value);
  return cleaned.length ? cleaned : fallback;
}
function coerceLinks(value: SanityLink[] | null | undefined, fallback: SanityLink[]) {
  if (!value?.length) return fallback;
  const cleaned = value.map((item) => coerceLink(item, fallback[0] || { label: 'Lien', href: '/', variant: 'text' })).filter((item) => item.label && item.href);
  return cleaned.length ? cleaned : fallback;
}

function fallbackForLocale(locale: Locale) {
  return locale === 'ru'
    ? {
        siteSettings: fallbackSiteSettingsRu,
        homePage: fallbackHomePageRu,
        aboutPage: fallbackAboutPageRu,
        contactPage: fallbackContactPageRu,
        expertises: fallbackExpertisesRu,
        projects: fallbackProjectsRu,
      }
    : {
        siteSettings: fallbackSiteSettingsFr,
        homePage: fallbackHomePageFr,
        aboutPage: fallbackAboutPageFr,
        contactPage: fallbackContactPageFr,
        expertises: fallbackExpertisesFr,
        projects: fallbackProjectsFr,
      };
}

export async function getSiteSettings(locale: Locale = defaultLocale): Promise<SiteSettings> {
  const fallback = fallbackForLocale(locale).siteSettings;
  if (!sanityClient) return fallback;
  const doc = await sanityClient.fetch<Partial<SiteSettings> | null>(siteSettingsQuery, { locale }).catch(() => null);
  if (!doc) return fallback;
  return {
    siteName: doc.siteName?.trim() || fallback.siteName,
    legalName: doc.legalName?.trim() || fallback.legalName,
    brandBaseline: doc.brandBaseline?.trim() || fallback.brandBaseline,
    brandDescription: doc.brandDescription?.trim() || fallback.brandDescription,
    primaryNavigation: coerceLinks(doc.primaryNavigation, fallback.primaryNavigation).map((item) => ({ ...item, href: localizePath(item.href, locale) })),
    footerNavigation: coerceLinks(doc.footerNavigation, fallback.footerNavigation).map((item) => ({ ...item, href: localizePath(item.href, locale) })),
    contactMethods: coerceContactMethods(doc.contactMethods, fallback.contactMethods),
    locations: coerceStrings(doc.locations, fallback.locations),
    legalNoticeLabel: doc.legalNoticeLabel?.trim() || fallback.legalNoticeLabel,
    legalNoticeUrl: doc.legalNoticeUrl?.trim() || fallback.legalNoticeUrl,
    themeSettings: doc.themeSettings || fallback.themeSettings,
  };
}

export async function getHomePageContent(locale: Locale = defaultLocale): Promise<HomePageContent> {
  const fallback = fallbackForLocale(locale).homePage;
  if (!sanityClient) return fallback;
  const doc = await sanityClient.fetch<Partial<HomePageContent> | null>(homePageQuery, { locale }).catch(() => null);
  if (!doc) return fallback;
  return {
    eyebrow: doc.eyebrow?.trim() || fallback.eyebrow,
    title: doc.title?.trim() || fallback.title,
    lead: doc.lead?.trim() || fallback.lead,
    primaryCta: { ...coerceCta(doc.primaryCta, fallback.primaryCta), link: { ...coerceCta(doc.primaryCta, fallback.primaryCta).link, href: localizePath(coerceCta(doc.primaryCta, fallback.primaryCta).link.href, locale) } },
    secondaryCta: { ...coerceCta(doc.secondaryCta, fallback.secondaryCta), link: { ...coerceCta(doc.secondaryCta, fallback.secondaryCta).link, href: localizePath(coerceCta(doc.secondaryCta, fallback.secondaryCta).link.href, locale) } },
    heroStats: coerceStats(doc.heroStats, fallback.heroStats),
    heroPanelHighlights: coerceStrings(doc.heroPanelHighlights, fallback.heroPanelHighlights),
    expertisesTitle: doc.expertisesTitle?.trim() || fallback.expertisesTitle,
    expertisesIntro: doc.expertisesIntro?.trim() || fallback.expertisesIntro,
    contextsTitle: doc.contextsTitle?.trim() || fallback.contextsTitle,
    contextsIntro: doc.contextsIntro?.trim() || fallback.contextsIntro,
    sectors: coerceStrings(doc.sectors, fallback.sectors),
    methodTitle: doc.methodTitle?.trim() || fallback.methodTitle,
    methodIntro: doc.methodIntro?.trim() || fallback.methodIntro,
    proofPoints: coerceStrings(doc.proofPoints, fallback.proofPoints),
    proofStripTitle: doc.proofStripTitle?.trim() || fallback.proofStripTitle,
    proofStripMetrics: coerceStats(doc.proofStripMetrics, fallback.proofStripMetrics),
    finalCta: coerceCta(doc.finalCta, fallback.finalCta),
  };
}

export async function getAboutPageContent(locale: Locale = defaultLocale): Promise<AboutPageContent> {
  const fallback = fallbackForLocale(locale).aboutPage;
  if (!sanityClient) return fallback;
  const doc = await sanityClient.fetch<Partial<AboutPageContent> | null>(aboutPageQuery, { locale }).catch(() => null);
  if (!doc) return fallback;
  return {
    eyebrow: doc.eyebrow?.trim() || fallback.eyebrow,
    title: doc.title?.trim() || fallback.title,
    lead: doc.lead?.trim() || fallback.lead,
    missionTitle: doc.missionTitle?.trim() || fallback.missionTitle,
    missionText: doc.missionText?.trim() || fallback.missionText,
    postureTitle: doc.postureTitle?.trim() || fallback.postureTitle,
    postureText: doc.postureText?.trim() || fallback.postureText,
    values: coerceStrings(doc.values, fallback.values),
    credibilityPoints: coerceStrings(doc.credibilityPoints, fallback.credibilityPoints),
    finalCta: coerceCta(doc.finalCta, fallback.finalCta),
  };
}

export async function getContactPageContent(locale: Locale = defaultLocale): Promise<ContactPageContent> {
  const fallback = fallbackForLocale(locale).contactPage;
  if (!sanityClient) return fallback;
  const doc = await sanityClient.fetch<Partial<ContactPageContent> | null>(contactPageQuery, { locale }).catch(() => null);
  if (!doc) return fallback;
  return {
    eyebrow: doc.eyebrow?.trim() || fallback.eyebrow,
    title: doc.title?.trim() || fallback.title,
    lead: doc.lead?.trim() || fallback.lead,
    sectionTitle: doc.sectionTitle?.trim() || fallback.sectionTitle,
    sectionIntro: doc.sectionIntro?.trim() || fallback.sectionIntro,
    contactMethods: coerceContactMethods(doc.contactMethods, fallback.contactMethods),
    reassuranceEyebrow: doc.reassuranceEyebrow?.trim() || fallback.reassuranceEyebrow,
    reassuranceText: doc.reassuranceText?.trim() || fallback.reassuranceText,
    formIntro: doc.formIntro?.trim() || fallback.formIntro,
  };
}

export async function getExpertiseList(locale: Locale = defaultLocale): Promise<SiteExpertise[]> {
  const fallback = fallbackForLocale(locale).expertises;
  if (!sanityClient) return fallback.map((item, index) => ({ ...item, featuredOnHome: true, order: index + 1 }));
  const docs = await sanityClient.fetch<SiteExpertise[]>(expertiseQuery, { locale }).catch(() => []);
  if (!docs.length) return fallback.map((item, index) => ({ ...item, featuredOnHome: true, order: index + 1 }));
  return docs.map((item, index) => ({ title: item.title, summary: item.summary, points: item.points?.length ? item.points : fallback[index % fallback.length].points, featuredOnHome: item.featuredOnHome ?? true, order: item.order ?? index + 1 }));
}

export async function getRealisationList(locale: Locale = defaultLocale) {
  const fallback = fallbackForLocale(locale).projects;
  if (!sanityClient) return fallback;
  const items = await sanityClient.fetch<any[]>(realisationsQuery, { locale }).catch(() => []);
  if (!items.length) return fallback;
  return items.map(toProject);
}

export async function getRealisationBySlug(locale: Locale, slug: string) {
  const fallback = fallbackForLocale(locale).projects.find((project) => project.slug === slug) ?? null;
  if (!sanityClient) return fallback;

  const item = await sanityClient.fetch<any | null>(realisationBySlugQuery, { locale, slug }).catch(() => null);
  if (!item) return fallback;

  return toProject(item);
}

export async function getRealisationStaticSlugs(locale: Locale = defaultLocale) {
  const fallback = fallbackForLocale(locale).projects;
  if (!sanityClient) return fallback.map((project) => ({ slug: project.slug }));

  const items = await sanityClient.fetch<Array<{ slug: string }>>(realisationStaticSlugsQuery, { locale }).catch(() => []);
  return items.length ? items.filter((item) => item.slug).map((item) => ({ slug: item.slug })) : fallback.map((project) => ({ slug: project.slug }));
}

function toProject(item: any) {
  return {
    slug: item.slug.current,
    title: item.title,
    sector: item.sector,
    summary: item.summary,
    challenge: item.challenge,
    solution: item.solution,
    results: item.results,
    featured: Boolean(item.featured),
    published: Boolean(item.published),
    publishedAt: item.publishedAt ?? '',
    seoTitle: item.seoTitle ?? item.title,
    seoDescription: item.seoDescription ?? item.summary,
    tags: item.tags ?? [],
    coverImage: item.coverImage,
    gallery: item.gallery,
  };
}

export function getThemeCssVariables(themeSettings?: ThemeSettings | null): CSSProperties {
  const vars: Record<string, string> = {};
  if (themeSettings?.primaryAccent) vars['--color-primary'] = themeSettings.primaryAccent;
  if (themeSettings?.secondaryAccent) vars['--color-secondary'] = themeSettings.secondaryAccent;
  return vars as CSSProperties;
}
