# Sanity schema recommande

## Intention
Mettre en place un schema **riche mais borne** pour rendre le contenu du site editable par le client sans transformer Sanity en editeur libre de design.

## Principes
- Sanity gere le contenu metier, editorial et SEO.
- Le design system, la structure de page et le CSS restent dans le code.
- Un branding borne est accepte: logo, baseline, accent principal, tonalite hero, style de bouton.
- Le layout, les espacements et la logique de composants ne deviennent pas libres dans le CMS.

## Types appliques

### Singletons logiques
- `siteSettings`: nom du site, baseline, navigation, footer, contact, liens sociaux, SEO global, branding borne.
- `homePage`: hero, stats, CTAs, intro des sections, points de preuve, bandeau final.
- `aboutPage`: hero, mission, posture, valeurs, points de credibilite.
- `contactPage`: hero, intro, coordonnees, reassurance, texte de formulaire.

### Collections
- `expertise`: titre, resume, points cles, contenu detaille, categorie, ordre, SEO.
- `realisations`: identite projet, recit, medias, preuves, SEO, references vers expertises.

### Objets reutilisables
- `seo`
- `link`
- `cta`
- `stat`
- `imageWithAlt`
- `contactMethod`
- `socialLink`
- `themeSettings`

## Perimetre editable recommande au client
- titres
- textes
- images
- CTA
- navigation
- coordonnees
- realisations
- expertises
- SEO
- branding borne

## Perimetre non editable via Sanity
- structure du layout
- CSS global
- tokens complets du design system
- animations
- composition libre de sections hors cadre

## Statut
Le schema est present sur disque dans `sanity/schemaTypes/`.
Le Studio reste conditionne a un vrai `SANITY_PROJECT_ID` et a un dataset reel.
