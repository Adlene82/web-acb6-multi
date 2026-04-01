# Sanity project bootstrap

## Contexte observe
- le CLI Sanity est connecte au compte `Adlene82`
- l organisation retenue est `ACB6` (`o6tXASmTN`)
- un projet test a ete cree avec succes: `openclaw-sanity-test-20260331` -> `z1lafg1e`
- la liste des projets montre deja le vrai projet du site: `web-acb6-multi` -> `4zd6lvcv`

## Conclusion operative
Le vrai projet Sanity existe deja.
Il ne faut plus demander a l equipe de le creer une nouvelle fois.
La suite correcte est de **raccorder le repo a `projectId=4zd6lvcv`**, fixer `SANITY_DATASET=production`, puis implementer l Embedded Studio `/studio`.

## Variables d environnement attendues
- `SANITY_PROJECT_ID=4zd6lvcv`
- `SANITY_DATASET=production`
- optionnel: `SANITY_API_VERSION=2024-06-01`

## URL a tracer apres implementation
- locale de dev: `http://localhost:3333`
- cible de prod / preview: `https://web-acb6-multi.vercel.app/studio`

## Definition de done
- le repo est raccorde a `projectId=4zd6lvcv`
- `SANITY_DATASET=production` est pose
- la route `/studio` existe et la cible Vercel correspondante est documentee
