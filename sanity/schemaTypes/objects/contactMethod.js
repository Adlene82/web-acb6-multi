const contactMethodType = {
  name: 'contactMethod',
  title: 'Moyen de contact',
  type: 'object',
  fields: [
    { name: 'label', title: 'Libelle', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'value', title: 'Valeur', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'href', title: 'Lien', type: 'string', description: 'Ex: mailto:... ou tel:...' },
    { name: 'description', title: 'Description', type: 'string' },
  ],
};

module.exports = { contactMethodType };
