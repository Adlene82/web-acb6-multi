client_id: acb6
project_id: web-acb6-multi
project_root: /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi
task: Corriger la version livree pour supprimer les fallbacks FR sur `/ru`, localiser les liens internes et reouvrir proprement la release avec deux URLs canoniques (`site` + `admin /studio`).
inputs:
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/STATE.json
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/DASHBOARD.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/DECISIONS.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/60_qa/QA_REPORT.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/70_release/RELEASE.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/90_release/PUBLIC_VALIDATION_URL.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/20_architecture/sanity-studio-access.md
outputs:
  - correctif code locale-aware confirme localement
  - preuve `skills_used:` tracee sur disque
  - build local confirme avec code `0`
  - handoff QA remis a jour avec la matrice `site FR` / `site RU` / `admin /studio`
constraints:
  - charger d abord `sanity`, `nextjs-architecture`, `github`, `vercel-release`, `shared-state-discipline`
  - ecrire explicitement `skills_used:` dans le livrable technique ou le handoff aval
  - `/studio` reste une URL canonique en scope produit
  - ne pas marquer la release valide tant que GitHub est `ahead` ou que le commit livre n est pas visible sur le remote
  - tout texte et tout lien publics doivent etre coherents pour FR et RU
definition_of_done:
  - le correctif applicatif est sur disque et le build local passe
  - les deux URLs canoniques sont tracees sur disque
  - le projet reste en `non GO` tant que GitHub n est pas synchronise et que QA n a pas revalide les trois cibles
status: done
next_action: synchroniser GitHub, puis transmettre a `qa-release` une matrice URL complete et verifiable.
