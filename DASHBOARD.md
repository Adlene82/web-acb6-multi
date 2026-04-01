# DASHBOARD.md

## Etat
- Mode: `PROD_AUTONOME`
- Phase: `implementation`
- Owner courant: `po`
- Blocage 1: le correctif local est confirme par `npm run build`, mais le commit n est pas encore visible sur `origin/main`.
- Blocage 2: `site FR`, `site RU` et `admin /studio` doivent etre revalidees publiquement apres synchronisation GitHub.
- URL canonique site: `https://web-acb6-multi.vercel.app`
- URL canonique admin: `https://web-acb6-multi.vercel.app/studio`
- Matrice QA obligatoire: `https://web-acb6-multi.vercel.app`, `https://web-acb6-multi.vercel.app/ru`, `https://web-acb6-multi.vercel.app/studio`

## Prochaine action
1. Commit/push le correctif local pour synchroniser GitHub.
2. Relancer une QA separee sur `site FR`, `site RU` et `admin /studio`.
3. N ouvrir la validation Vercel qu apres un verdict URL par URL.
