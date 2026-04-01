const themeSettingsType = {
  name: 'themeSettings',
  title: 'Branding borne',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'brandTagline', title: 'Tagline de marque', type: 'string' },
    { name: 'primaryAccent', title: 'Couleur accent principale', type: 'string', description: 'Hexa, ex: #1e5eff' },
    { name: 'secondaryAccent', title: 'Couleur accent secondaire', type: 'string', description: 'Hexa, ex: #0e1625' },
    { name: 'heroTone', title: 'Ton du hero', type: 'string', options: { list: ['light', 'light-premium', 'dark-accent'] }, initialValue: 'light-premium' },
    { name: 'buttonStyle', title: 'Style principal des boutons', type: 'string', options: { list: ['solid', 'soft', 'outline'] }, initialValue: 'solid' },
    { name: 'notes', title: 'Notes de governance', type: 'text', rows: 3, description: 'Perimetre volontairement borne: pas de controle libre du CSS ou du layout.' },
  ],
};

module.exports = { themeSettingsType };
