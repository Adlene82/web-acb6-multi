const ctaType = {
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
    { name: 'link', title: 'Lien', type: 'link', validation: (Rule) => Rule.required() },
    { name: 'helperText', title: 'Texte d aide', type: 'string' },
  ],
};

module.exports = { ctaType };
