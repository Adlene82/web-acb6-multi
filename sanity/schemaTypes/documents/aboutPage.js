const aboutPageType = {
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identité' },
    { name: 'hero', title: 'Hero' },
    { name: 'content', title: 'Contenu' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    { name: 'locale', title: 'Locale', type: 'string', options: { list: [{ title: 'FR', value: 'fr' }, { title: 'RU', value: 'ru' }] }, group: 'identity', validation: (Rule) => Rule.required() },
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', group: 'hero' },
    { name: 'title', title: 'Titre', type: 'string', group: 'hero', validation: (Rule) => Rule.required() },
    { name: 'lead', title: 'Texte d introduction', type: 'text', rows: 4, group: 'hero' },
    { name: 'missionTitle', title: 'Titre mission', type: 'string', group: 'content' },
    { name: 'missionText', title: 'Texte mission', type: 'text', rows: 4, group: 'content' },
    { name: 'postureTitle', title: 'Titre posture', type: 'string', group: 'content' },
    { name: 'postureText', title: 'Texte posture', type: 'text', rows: 4, group: 'content' },
    { name: 'values', title: 'Valeurs', type: 'array', of: [{ type: 'string' }], group: 'content' },
    { name: 'credibilityPoints', title: 'Points de crédibilité', type: 'array', of: [{ type: 'string' }], group: 'content' },
    { name: 'finalCta', title: 'CTA final', type: 'cta', group: 'content' },
    { name: 'seo', title: 'SEO', type: 'seo', group: 'seo' },
  ],
  preview: { select: { locale: 'locale' }, prepare: ({ locale }) => ({ title: 'À propos', subtitle: locale ? `Singleton logique · ${locale.toUpperCase()}` : 'Singleton logique' }) },
};

module.exports = { aboutPageType };
