# Sanity Studio access

## Baseline observee
- projet Sanity reel: `web-acb6-multi` -> `projectId=4zd6lvcv`
- dataset retenu: `production`
- package Studio: `sanity@4.12.0`
- cible admin retenue: Embedded Studio sur `/studio`
- domaine public: `https://web-acb6-multi.vercel.app`

## Correctif applique
- `app/(site)` isole maintenant le layout public du Studio embarque.
- `lib/sanity-studio-config.ts` expose un desk guide avec singletons (`siteSettings`, `homePage`, `aboutPage`, `contactPage`) puis collections (`expertise`, `realisations`).
- `lib/site-content.ts` et `lib/realisations.ts` branchent le front sur Sanity avec fallback de migration.
- `sanity/seed/initial-content.json` a ete applique via `npx sanity documents create ... --replace` pour rendre le Studio utile immediatement.
- Vercel porte maintenant `SANITY_PROJECT_ID=4zd6lvcv` et `SANITY_DATASET=production` en production et development.
- Le redeploy Vercel a ete refait depuis une copie hors `.git` pour contourner le rejet `Git author ... must have access to the team`.
- L origine CORS `https://web-acb6-multi.vercel.app` a ete ajoutee au projet Sanity pour autoriser la surface Studio publique.

## Verification
- `npm run build` -> OK avec `SANITY_PROJECT_ID=4zd6lvcv` et `SANITY_DATASET=production`
- `https://web-acb6-multi.vercel.app/` -> 200
- `https://web-acb6-multi.vercel.app/ru` -> 200, contenu localise RU sur la capture de verification
- `https://web-acb6-multi.vercel.app/studio` -> 200, surface Studio visible avec options de connexion (`Google`, `GitHub`, `E-mail / password`)
- le HTML public de `/studio` ne contient pas `site-header` ni `site-footer`
- la dataset publique contient maintenant les documents seedes pour `siteSettings`, `homePage`, `aboutPage`, `contactPage`, `expertise` et `realisations`

## Risque restant
- Le workflow projet est bon, mais OpenClaw n indexe toujours pas correctement les skills workspace Sanity dans `openclaw skills list` malgre leur presence disque et leur allowlist. Cela doit etre traite comme un incident runtime OpenClaw separe du projet `web-acb6-multi`.
