# I18N_QA_CHECKLIST.md

## Locale matrix
- [ ] toutes les locales actives ont ete testees
- [ ] la locale de base correspond a la decision sur disque
- [ ] le gate preview reel a ete respecte (`base_locale_first` ou `all_locales_before_preview`)

## UX
- [ ] le switch de langue fonctionne
- [ ] le switch de langue n utilise pas les drapeaux comme source de verite
- [ ] aucune page testee ne melange plusieurs langues de facon involontaire
- [ ] les longueurs de texte ne cassent pas la mise en page

## Content
- [ ] le fallback de langue est coherent quand une traduction manque
- [ ] le contenu editable affiche la bonne locale attendue
- [ ] `/studio` est coherent si la cible produit l expose

## SEO / release
- [ ] canonical et alternate/hreflang sont coherents quand cette surface est active
- [ ] metadata et titres restent coherents par locale testee
