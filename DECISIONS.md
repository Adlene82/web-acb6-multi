# DECISIONS.md

| Date | Decision | Raison | Impact |
| --- | --- | --- | --- |
| 2026-04-01 | Refonte technique et visuelle de www.acb6.fr | Le site actuel est trop générique pour la cible | Nouvelle base de contenu et de navigation |
| 2026-04-01 | Direction visuelle inspiree d’Apple France | Demande explicite du client pour un rendu premium et sobre | UI plus editoriale, plus aeree, plus mobile-first |
| 2026-04-01 | Multilingue FR/RU avec `base_locale_first` | Le brief demande les deux langues, mais la premiere preview peut partir en FR | `next-intl` requis, FR prioritaire, RU prepare des le debut |
| 2026-04-01 | `Sanity` retenu pour la page `Réalisations` | Besoin d’ajout de photos et descriptions editable | CMS obligatoire pour cette zone |
| 2026-04-01 | `web-acb6-multi` démarre par un socle copié du baseline ACB6 | Le template projet était vide et le besoin exigeait une livraison rapide et complète | La base i18n/Sanity est disponible immédiatement pour adaptation locale |
| 2026-04-01 | RU seedé dans Sanity avec documents dédiés | La locale RU devait être réellement editable et publiable | Les pages RU lisent maintenant du contenu Sanity live au lieu du fallback local |
