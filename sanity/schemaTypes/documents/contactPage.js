const contactPageType = {
  name: 'contactPage',
  title: 'Page Contact',
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
    { name: 'sectionTitle', title: 'Titre section', type: 'string', group: 'content' },
    { name: 'sectionIntro', title: 'Intro section', type: 'text', rows: 4, group: 'content' },
    { name: 'contactMethods', title: 'Coordonnées visibles', type: 'array', of: [{ type: 'contactMethod' }], group: 'content' },
    { name: 'reassuranceEyebrow', title: 'Eyebrow reassurance', type: 'string', group: 'content' },
    { name: 'reassuranceText', title: 'Texte reassurance', type: 'text', rows: 4, group: 'content' },
    { name: 'formIntro', title: 'Intro formulaire', type: 'text', rows: 3, group: 'content' },
    { name: 'seo', title: 'SEO', type: 'seo', group: 'seo' },
  ],
  preview: { select: { locale: 'locale' }, prepare: ({ locale }) => ({ title: 'Contact', subtitle: locale ? `Singleton logique · ${locale.toUpperCase()}` : 'Singleton logique' }) },
};

module.exports = { contactPageType };
