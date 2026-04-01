# DECISIONS.md

| Date | Decision | Raison | Impact |
| --- | --- | --- | --- |
| 2026-04-01 | Refonte technique et visuelle de www.acb6.fr | Le site actuel est trop g?n?rique pour la cible | Nouvelle base de contenu et de navigation |
| 2026-04-01 | Direction visuelle inspiree d Apple France | Demande explicite du client pour un rendu premium et sobre | UI plus editoriale, plus aeree, plus mobile-first |
| 2026-04-01 | Multilingue FR/RU avec `base_locale_first` | Le brief demande les deux langues, mais la premiere preview peut partir en FR | `next-intl` requis, FR prioritaire, RU prepare des le debut |
| 2026-04-01 | `Sanity` retenu pour la page `R?alisations` | Besoin d ajout de photos et descriptions editable | CMS obligatoire pour cette zone |
| 2026-04-01 | `web-acb6-multi` demarre par un socle copie du baseline ACB6 | Le template projet etait vide et le besoin exigeait une livraison rapide et complete | La base i18n/Sanity est disponible immediatement pour adaptation locale |
| 2026-04-01 | RU seede dans Sanity avec documents dedies | La locale RU devait etre reellement editable et publiable | Les pages RU lisent maintenant du contenu Sanity live au lieu du fallback local |
| 2026-04-01 | La release livree est reouverte en `non GO` | Le site public laisse remonter du FR sur `/ru`, l admin `/studio` n est pas validee et GitHub etait en retard sur la validation annoncee | Les livrables release et QA doivent etre reecrits avant toute nouvelle validation |
| 2026-04-01 | Deux URLs canoniques sont obligatoires pour ce projet | Le scope produit inclut le site public et l administration embarquee `/studio` | Toute QA et toute release doivent couvrir `site`, `site RU` et `admin /studio` |
| 2026-04-01 | GitHub doit etre sync avant toute validation Vercel | La branche locale etait `ahead` de `origin/main` au moment de l annonce | Une release ne peut plus etre marquee valide tant que le commit livre n est pas visible sur le remote du projet |
