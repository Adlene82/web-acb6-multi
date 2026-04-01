const imageWithAltType = {
  name: 'imageWithAlt',
  title: 'Image avec metadonnees',
  type: 'object',
  fields: [
    { name: 'asset', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() },
    { name: 'alt', title: 'Texte alternatif', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'caption', title: 'Legende', type: 'string' },
    { name: 'credit', title: 'Credit', type: 'string' },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
      subtitle: 'caption',
    },
  },
};

module.exports = { imageWithAltType };
