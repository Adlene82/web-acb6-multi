client_id: acb6
project_id: web-acb6-multi
project_root: /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi
task: Revalider separement `site FR`, `site RU` et `admin /studio` apres correctif lead-developer, puis rendre un verdict factuel URL par URL.
inputs:
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/STATE.json
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/DASHBOARD.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/60_qa/QA_REPORT.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/70_release/RELEASE.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/90_release/PUBLIC_VALIDATION_URL.md
  - /home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi/20_architecture/sanity-studio-access.md
outputs:
  - `60_qa/QA_REPORT.md` recrit avec matrice URL complete
  - `70_release/RELEASE.md` aligne sur le verdict reel
  - preuve `skills_used:` tracee sur disque
constraints:
  - charger `qa-checklists`, `accessibility`, `playwright-pro`, `github`, `vercel-release`
  - ecrire explicitement `skills_used:` dans le rapport
  - tester obligatoirement `https://web-acb6-multi.vercel.app`, `https://web-acb6-multi.vercel.app/ru` et `https://web-acb6-multi.vercel.app/studio`
  - melange de langues, page vide, 404, 401, 500 ou repo GitHub `ahead` => FAIL
  - une seule URL validee ne suffit jamais pour marquer ce projet `GO`
definition_of_done:
  - le rapport QA liste les trois URLs, leur resultat et le verdict final
  - le verdict est `GO` seulement si les trois cibles passent et si GitHub est synchronise
status: done
next_action: attendre une nouvelle demande ou un retour client.
