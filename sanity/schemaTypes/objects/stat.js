const statType = {
  name: 'stat',
  title: 'Stat / point cle',
  type: 'object',
  fields: [
    { name: 'value', title: 'Valeur', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'label', title: 'Libelle', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'tone', title: 'Ton', type: 'string', options: { list: ['default', 'highlight', 'proof'] }, initialValue: 'default' },
  ],
};

module.exports = { statType };
