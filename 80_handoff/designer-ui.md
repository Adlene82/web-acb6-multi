client_id: acb6
project_id: web-acb6-multi
project_root: /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi
task: Concevoir la direction UI premium de la refonte ACB6 en s'inspirant d'Apple France sans copie, avec une lecture mobile-first et un systeme de composants sobre.
inputs:
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/00_source/SOURCE.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/10_brief/BRIEF.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/10_brief/UI_DIRECTION.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/20_architecture/ARCHITECTURE.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/30_design/DESIGN_SYSTEM.md
outputs:
  - direction visuelle premium et sobre
  - principes mobile-first
  - decisions de layout, hero, sections et cartes de realisations
  - systeme de design documente et reutilisable
constraints:
  - conserver `shadcn/ui + lucide-react + semantic tokens`
  - traduire l’inspiration Apple en systeme propre, pas en copie visuelle
  - penser FR et RU des le debut pour la longueur des textes
  - switch de langue textuel, sans drapeaux
  - documenter toute deviation utile sur disque
definition_of_done:
  - la direction UI est documentee et exploitable par le frontend
  - le rendu attendu reste premium, mobile-first et compatible FR/RU
  - les ecarts au socle standard sont explicites et justifies
status: queued
next_action: Formaliser la grille visuelle, les espacements, la hierarchy typographique et les composants de la home.
