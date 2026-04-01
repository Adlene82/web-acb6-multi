export type NavItem = {
  label: string;
  href: string;
};

export type Expertise = {
  title: string;
  summary: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  featured: boolean;
  published: boolean;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  coverImage?: unknown;
  gallery?: unknown[];
};

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Expertises', href: '/expertises' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export const heroStats = [
  { value: 'B2B', label: 'Conseil et architecture SI orientés impact' },
  { value: 'Mobile-first', label: 'Conçu pour une lecture fluide sur tous les écrans' },
  { value: 'Éditable', label: 'Structure prête pour enrichir les réalisations' },
];

export const expertises: Expertise[] = [
  {
    title: 'Transformation digitale',
    summary: 'Cadrer, prioriser et sécuriser les programmes de transformation avec une vision métier exploitable.',
    points: ['Alignement métier et SI', 'Feuille de route pragmatique', 'Décisions structurantes documentées'],
  },
  {
    title: 'Architecture fonctionnelle',
    summary: 'Clarifier les flux, les rôles et les dépendances pour rendre les trajectoires plus lisibles.',
    points: ['Cartographie cible', 'Parcours et processus', 'Vision transverse'],
  },
  {
    title: 'Architecture applicative',
    summary: 'Construire des socles applicatifs cohérents, maintenables et capables d’évoluer.',
    points: ['Urbanisation', 'Interopérabilité', 'Découpage maîtrisé'],
  },
  {
    title: 'Architecture technique & infrastructure',
    summary: 'Sécuriser les choix techniques qui soutiennent la performance, la résilience et l’exploitation.',
    points: ['Socle technique', 'Résilience', 'Performance & gouvernance'],
  },
  {
    title: 'Outils collaboratifs, web et mobile',
    summary: 'Faire émerger des solutions utiles, lisibles et adoptables pour les équipes et les métiers.',
    points: ['Portails métier', 'Applications de support', 'Expériences orientées usage'],
  },
  {
    title: 'Énergie & Utilities',
    summary: 'Mettre à profit une expérience crédible des environnements complexes et fortement contraints.',
    points: ['Systèmes critiques', 'Contexte réglementaire', 'Vision long terme'],
  },
];

export const featuredProjects: Project[] = [
  {
    slug: 'pilotage-si-industrialise',
    title: 'Pilotage SI industrialisé pour un opérateur multi-sites',
    sector: 'Énergie & Utilities',
    summary: 'Structuration d’une trajectoire SI pour améliorer la lisibilité des priorités et la coordination des équipes.',
    challenge: 'L’organisation faisait face à des dépendances applicatives peu visibles, à une gouvernance diffuse et à une difficulté croissante à arbitrer les évolutions.',
    solution: 'ACB6 a cadré une cartographie cible, défini des principes d’architecture et installé un cadre de pilotage commun entre métiers, projets et exploitation.',
    results: 'Les décisions sont devenues plus rapides, les chantiers mieux séquencés et les sujets à forte valeur plus faciles à défendre.',
    featured: true,
    published: true,
    publishedAt: '2026-03-01',
    seoTitle: 'Pilotage SI industrialisé | ACB6',
    seoDescription: 'Exemple de réalisation ACB6 autour du pilotage SI et de la structuration d’une trajectoire de transformation.',
    tags: ['architecture', 'pilotage', 'transformation'],
  },
  {
    slug: 'modernisation-portail-metier',
    title: 'Modernisation d’un portail métier à fort usage terrain',
    sector: 'Services complexes',
    summary: 'Refonte d’un socle applicatif et de l’expérience de service pour réduire la friction opérationnelle.',
    challenge: 'Le portail existant freinait l’adoption, multipliait les contournements et rendait les parcours essentiels plus coûteux.',
    solution: 'ACB6 a réaligné les besoins métier, la structure applicative et les exigences techniques afin de proposer un cadre de modernisation durable.',
    results: 'L’équipe a obtenu une base plus claire, plus facile à faire évoluer et mieux adaptée aux usages prioritaires.',
    featured: true,
    published: true,
    publishedAt: '2026-02-15',
    seoTitle: 'Modernisation d’un portail métier | ACB6',
    seoDescription: 'Réalisation ACB6 sur la modernisation d’un portail métier dans un contexte de services complexes.',
    tags: ['web', 'portail', 'adoption'],
  },
  {
    slug: 'cadre-architecture-programme',
    title: 'Cadre d’architecture pour un programme de transformation transverse',
    sector: 'Conseil & architecture SI',
    summary: 'Mise en place d’un cadre de décision pour articuler les enjeux métier, techniques et de delivery.',
    challenge: 'Plusieurs équipes contribuaient au même programme sans référentiel commun ni hiérarchie explicite des décisions.',
    solution: 'ACB6 a structuré les principes directeurs, les dépendances et les points de contrôle nécessaires à une exécution plus fiable.',
    results: 'Le programme a gagné en cohérence, en visibilité et en capacité d’exécution progressive.',
    featured: false,
    published: true,
    publishedAt: '2026-01-28',
    seoTitle: 'Cadre d’architecture transverse | ACB6',
    seoDescription: 'Réalisation ACB6 dédiée à la mise en place d’un cadre d’architecture pour un programme transverse.',
    tags: ['gouvernance', 'architecture', 'programme'],
  },
];

export const methodSteps = [
  {
    eyebrow: '1. Cadrer',
    title: 'Poser une base claire avant d’accélérer',
    text: 'Nous clarifions les enjeux, la trajectoire et les décisions critiques pour éviter les refontes à répétition.',
  },
  {
    eyebrow: '2. Concevoir',
    title: 'Relier vision métier et architecture',
    text: 'Nous structurons des solutions compréhensibles, pilotables et réellement exploitables par les équipes.',
  },
  {
    eyebrow: '3. Transformer',
    title: 'Faire avancer sans perdre la maîtrise',
    text: 'Nous aidons à séquencer les chantiers, à sécuriser les arbitrages et à garder le cap sur l’impact.',
  },
];

export const proofPoints = [
  'Approche sobre, structurée et orientée résultat',
  'Expertise sur des contextes complexes et exigeants',
  'Hiérarchie éditoriale pensée pour la crédibilité B2B',
  'Collection de réalisations prête à être reliée à un CMS',
];

export const sectors = ['Énergie & Utilities', 'Systèmes complexes', 'Transformation transverse', 'Architecture applicative', 'Outillage métier'];
