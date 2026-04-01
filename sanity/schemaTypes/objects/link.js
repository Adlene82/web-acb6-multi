const linkType = {
  name: 'link',
  title: 'Lien',
  type: 'object',
  fields: [
    { name: 'label', title: 'Libelle', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'href', title: 'URL ou chemin', type: 'string', description: 'Ex: /contact ou https://example.com', validation: (Rule) => Rule.required() },
    { name: 'variant', title: 'Style', type: 'string', options: { list: ['primary', 'secondary', 'ghost', 'text'] }, initialValue: 'primary' },
    { name: 'openInNewTab', title: 'Ouvrir dans un nouvel onglet', type: 'boolean', initialValue: false },
  ],
};

module.exports = { linkType };
