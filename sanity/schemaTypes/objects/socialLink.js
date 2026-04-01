const socialLinkType = {
  name: 'socialLink',
  title: 'Lien social',
  type: 'object',
  fields: [
    { name: 'network', title: 'Reseau', type: 'string', options: { list: ['LinkedIn', 'X', 'YouTube', 'GitHub', 'Autre'] }, validation: (Rule) => Rule.required() },
    { name: 'label', title: 'Libelle visible', type: 'string' },
    { name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required() },
  ],
};

module.exports = { socialLinkType };
