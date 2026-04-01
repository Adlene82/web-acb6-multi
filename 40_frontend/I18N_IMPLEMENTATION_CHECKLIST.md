# I18N_IMPLEMENTATION_CHECKLIST.md

## Scope
- [ ] le projet dit explicitement si le multilingue est actif ou non
- [ ] la locale de base est tracee sur disque
- [ ] le gate preview est trace sur disque: `base_locale_first` ou `all_locales_before_preview`

## Frontend
- [ ] `next-intl` porte le routing locale-aware et les libelles UI fixes
- [ ] le contenu editorial principal ne duplique pas `Sanity` dans `messages/*.json`
- [ ] le switch de langue utilise des noms/codes de langue, pas des drapeaux
- [ ] les layouts supportent l expansion de texte entre langues

## CMS
- [ ] `Sanity` reste la source de verite pour le contenu editable
- [ ] document-level translations privilegiees pour pages/editorial si le projet est multilingue
- [ ] fallback de langue documente et coherent

## Translation quality
- [ ] toute traduction machine eventuelle est explicitement tracee comme assistance
- [ ] aucune auto-publication de traduction machine sans revue
