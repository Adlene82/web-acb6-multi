const expertiseType = {
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    { name: 'locale', title: 'Locale', type: 'string', options: { list: [{ title: 'FR', value: 'fr' }, { title: 'RU', value: 'ru' }] }, validation: (Rule) => Rule.required() },
    { name: 'title', title: 'Titre', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() },
    { name: 'summary', title: 'Résumé', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
    { name: 'points', title: 'Points clés', type: 'array', of: [{ type: 'string' }], validation: (Rule) => Rule.min(2) },
    { name: 'body', title: 'Contenu détaillé', type: 'array', of: [{ type: 'block' }] },
    { name: 'category', title: 'Catégorie', type: 'string' },
    { name: 'featuredOnHome', title: 'Mettre en avant sur l accueil', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Ordre', type: 'number' },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
  orderings: [{ title: 'Ordre ascendant', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', locale: 'locale' }, prepare: ({ title, subtitle, locale }) => ({ title, subtitle: [locale ? locale.toUpperCase() : null, subtitle].filter(Boolean).join(' · ') }) },
};

module.exports = { expertiseType };
