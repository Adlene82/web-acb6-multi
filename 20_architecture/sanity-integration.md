# Sanity integration — Réalisations

## Objectif
Rendre la page `Réalisations` éditable sans admin maison ad hoc, avec ajout et modification des photos et descriptions via Sanity.

## Source de vérité
- **Sanity** pour les contenus éditables
- fallback de migration: `data/site-content.ts` tant que la bascule n'est pas complète

## Variables d’environnement requises
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION` (optionnel, défaut: `2024-06-01`)

## Flux d’édition
1. ouvrir le dataset Sanity
2. créer ou modifier un document `_type: "realisations"`
3. renseigner le texte éditable et les images
4. publier le document
5. la page `/realisations` et la page détail consomment les documents publiés

## Champs retenus
- `slug`
- `title`
- `summary`
- `sector`
- `challenge`
- `solution`
- `results`
- `coverImage`
- `gallery`
- `tags`
- `featured`
- `published`
- `publishedAt`
- `seoTitle`
- `seoDescription`

## Règles d’architecture
- garder les routes App Router en server components
- ne pas créer de CMS sur mesure
- conserver une hiérarchie éditoriale sobre, premium et mobile-first
- garder le fallback local seulement comme filet temporaire

## Etat observe au 2026-03-31
- `sanity.config.js` existe et nomme `ACB6 Content Studio`.
- `projectId` retombe actuellement sur le placeholder `acb6-project-id` si l environnement n est pas pose.
- La VM ne porte actuellement ni `SANITY_PROJECT_ID`, ni `SANITY_DATASET`, ni `SANITY_API_VERSION`, ni `SANITY_STUDIO_URL`.
- Le repo ne contient pas la dependance `sanity` ni de script pour lancer un Studio local; `http://localhost:3333` n est donc pas une URL projet fiable en l etat.
- Aucune URL publique de Studio n est actuellement tracee sur disque.

## Conclusion operative
Le code Sanity existe bien, mais l acces d edition n est pas encore suffisamment prouve ni outille. La demande editable reste ouverte tant qu un vrai projectId/dataset et un acces Studio fiable ne sont pas traces.


## Schema recommande applique au 2026-03-31
Le projet ne se limite plus au seul type `realisations`.
Le schema applique sur disque couvre maintenant:
- `siteSettings`
- `homePage`
- `aboutPage`
- `contactPage`
- `expertise`
- `realisations`
- objets reutilisables `seo`, `cta`, `link`, `stat`, `imageWithAlt`, `contactMethod`, `socialLink`, `themeSettings`

## Gouvernance du contenu
- editable: titres, textes, CTA, images, navigation, contact, expertises, realisations, SEO, branding borne
- non editable via Sanity: layout global, structure des composants, spacing system, animations, CSS complet


## Support Studio local
- version retenue: `sanity@4.12.0`
- raison: compatible avec `react@19.0.0`, alors que la branche `sanity@5.x` exige `react@19.2.2`
- scripts exposes: `npm run sanity:studio`, `npm run sanity:studio:host`, `npm run sanity:deploy`


## Creation du vrai projet Sanity
Le projet est maintenant pret pour une creation pilotee par `lead-developer`.
Baseline retenue:
- project name: `web-acb6-multi`
- dataset: `production`
- dataset visibility: `public`

Cette visibilite `public` est coherente avec le front actuel, qui lit le contenu publie sans token cote application.


## Cible Studio retenue au 2026-03-31
La cible retenue n est plus un Studio public heberge sous `*.sanity.studio`.
Le projet doit viser un **Embedded Studio** embarque dans l application Next.js, puis deploye sur Vercel sous une route de type `/studio`.

## Implication d architecture
- le projet Sanity et son dataset restent necessaires
- le `projectId` reel reste obligatoire
- l administration finale doit idealement vivre sur `https://web-acb6-multi.vercel.app/studio`
- un test `404 Studio not found` sur un slug `*.sanity.studio` signifie seulement qu aucun Studio public n est deploye a ce slug


## ProjectId reel identifie au 2026-03-31
La liste des projets Sanity confirme que le projet reel du site existe deja:
- `web-acb6-multi` -> `projectId=4zd6lvcv`

Un projet test a aussi ete cree pour valider l organisation et le flux CLI:
- `openclaw-sanity-test-20260331` -> `projectId=z1lafg1e`

La suite n est donc plus la creation du projet, mais le raccordement du repo a `projectId=4zd6lvcv` puis l implementation de l Embedded Studio `/studio`.
