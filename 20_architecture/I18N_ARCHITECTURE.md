# I18N_ARCHITECTURE.md

## Status
- multilingue: true
- base_locale: fr
- enabled_locales: [fr, ru]
- preview_gate: base_locale_first

## Baseline
- `next-intl` pour routing, labels UI fixes et formatage locale-aware
- `Sanity` pour le contenu editable
- document-level translations par defaut pour pages/editorial en multilingue
- traduction machine eventuelle en assistance seulement

## Rules
- si `multilingue: false`, garder une seule locale active
- si `multilingue: true`, documenter ici les locales actives et le gate preview
- ne pas utiliser les drapeaux comme verite UX du selecteur de langue
- ne pas dupliquer le contenu CMS principal dans `messages/*.json`
