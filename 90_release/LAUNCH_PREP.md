# LAUNCH_PREP - ACB6

## Objectif
Valider une publication WebFactory seulement quand les deux surfaces canoniques du projet sont conformes: le site public et l administration `/studio`.

## Etat actuel
- Build local precedemment valide, mais release publique reouverte.
- URL site publique observee: `https://web-acb6-multi.vercel.app`.
- URL admin cible: `https://web-acb6-multi.vercel.app/studio`.
- URL RU cible: `https://web-acb6-multi.vercel.app/ru`.
- Blocage actif 1: melange FR/RU sur la version publique.
- Blocage actif 2: validation admin `/studio` absente et page publique constatee vide.
- Blocage actif 3: branche locale `ahead` de `origin/main` au moment de la validation annoncee.

## Ce qu il faut obtenir
- GitHub synchronise avant toute nouvelle validation Vercel.
- Une QA distincte sur `site FR`, `site RU` et `admin /studio`.
- Une release rouverte seulement quand la matrice complete est verte.

## Statut de lancement
- Lancement bloque tant que les trois conditions ci dessus ne sont pas satisfaites.
