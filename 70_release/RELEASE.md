# RELEASE.md

## Statut
- NO_GO

## URLs cibles
- site: `https://web-acb6-multi.vercel.app`
- admin: `https://web-acb6-multi.vercel.app/studio`

## Constat
- La release publique annoncee est reouverte car la matrice FR/RU/admin n a pas ete validee correctement.
- La publication GitHub/Vercel ne peut plus etre consideree comme conforme tant que le remote GitHub n inclut pas le commit livre.
- `/studio` fait partie du scope produit et doit etre traite comme une URL canonique, pas comme un check facultatif.

## Conditions de reouverture de la release
1. Correctif code confirme localement pour les fallbacks FR et les liens locale-aware.
2. Depot GitHub du projet synchronise; branche locale non `ahead`.
3. QA distincte et documentee sur `site FR`, `site RU` et `admin /studio`.
