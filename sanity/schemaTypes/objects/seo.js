const seoType = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    { name: 'metaTitle', title: 'Meta title', type: 'string', validation: (Rule) => Rule.max(70) },
    { name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, validation: (Rule) => Rule.max(170) },
    { name: 'ogTitle', title: 'Open Graph title', type: 'string' },
    { name: 'ogDescription', title: 'Open Graph description', type: 'text', rows: 3 },
    { name: 'ogImage', title: 'Open Graph image', type: 'image', options: { hotspot: true } },
    { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
    { name: 'robots', title: 'Robots', type: 'string', options: { list: ['index,follow', 'noindex,nofollow'] }, initialValue: 'index,follow' },
  ],
};

module.exports = { seoType };
