client_id: acb6
project_id: web-acb6-multi
project_root: /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi
task: Implementer la refonte technique ACB6 en Next.js avec multilingue FR/RU, `next-intl`, `Sanity` pour le contenu editable et une page `Réalisations` alimentable par photos et descriptions.
inputs:
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/STATE.json
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/DASHBOARD.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/DECISIONS.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/10_brief/BRIEF.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/10_brief/UI_DIRECTION.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/20_architecture/ARCHITECTURE.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/20_architecture/I18N_ARCHITECTURE.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/30_design/DESIGN_SYSTEM.md
outputs:
  - socle Next.js multilingue FR/RU en place
  - `next-intl` pour le routing locale-aware et les libelles fixes
  - `Sanity` branche pour le contenu editable et la page `Réalisations`
  - frontend mobile-first compatible avec des textes FR/RU plus longs
  - preview de test sur la langue de base puis extension RU conforme au gate projet
constraints:
  - conserver `shadcn/ui + lucide-react + semantic tokens`
  - ne pas introduire de drapeaux pour le switch de langue
  - respecter `base_locale_first`
  - garder `Réalisations` editable via Sanity
  - documenter toute non-utilisation de Sanity si elle se produit
definition_of_done:
  - le site est accessible en preview sur la langue de base
  - la base multilingue tient sans cassure de layout
  - la page `Réalisations` est prête pour l’ajout de photos et descriptions
  - les variables et branchements CMS sont documentes sur disque
status: queued
next_action: Poser la base i18n, brancher Sanity et livrer la premiere URL de test FR.
