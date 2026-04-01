const siteSettingsType = {
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identité' },
    { name: 'brand', title: 'Marque' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'contact', title: 'Contact' },
    { name: 'theme', title: 'Branding borné' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    { name: 'locale', title: 'Locale', type: 'string', options: { list: [{ title: 'FR', value: 'fr' }, { title: 'RU', value: 'ru' }] }, group: 'identity', validation: (Rule) => Rule.required() },
    { name: 'siteName', title: 'Nom du site', type: 'string', group: 'brand', validation: (Rule) => Rule.required() },
    { name: 'legalName', title: 'Raison sociale', type: 'string', group: 'brand' },
    { name: 'brandBaseline', title: 'Baseline', type: 'string', group: 'brand' },
    { name: 'brandDescription', title: 'Description courte', type: 'text', rows: 3, group: 'brand' },
    { name: 'primaryNavigation', title: 'Navigation principale', type: 'array', of: [{ type: 'link' }], group: 'navigation' },
    { name: 'footerNavigation', title: 'Navigation footer', type: 'array', of: [{ type: 'link' }], group: 'navigation' },
    { name: 'contactMethods', title: 'Coordonnées', type: 'array', of: [{ type: 'contactMethod' }], group: 'contact' },
    { name: 'socialLinks', title: 'Liens sociaux', type: 'array', of: [{ type: 'socialLink' }], group: 'contact' },
    { name: 'locations', title: 'Zones d intervention', type: 'array', of: [{ type: 'string' }], group: 'contact' },
    { name: 'legalNoticeLabel', title: 'Libellé mentions légales', type: 'string', group: 'contact' },
    { name: 'legalNoticeUrl', title: 'URL mentions légales', type: 'string', group: 'contact' },
    { name: 'themeSettings', title: 'Branding borné', type: 'themeSettings', group: 'theme' },
    { name: 'defaultSeo', title: 'SEO par défaut', type: 'seo', group: 'seo' },
  ],
  preview: { select: { locale: 'locale' }, prepare: ({ locale }) => ({ title: 'Paramètres du site', subtitle: locale ? `Singleton logique · ${locale.toUpperCase()}` : 'Singleton logique' }) },
};

module.exports = { siteSettingsType };
