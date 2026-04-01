# Content model — ACB6

## Objectif
Prévoir une structure de contenu simple à maintenir, surtout pour la page `Réalisations`.

## Types de contenu recommandés

### 1. Pages statiques
- accueil
- expertises
- à propos
- contact

### 2. Réalisations
Chaque réalisation doit pouvoir être ajoutée sans refaire la structure de la page.

## Modèle recommandé pour une réalisation
- `slug`
- `title`
- `summary`
- `sector`
- `client_name` (optionnel)
- `challenge`
- `solution`
- `results` (optionnel mais recommandé)
- `cover_image`
- `gallery` (0..n images)
- `tags` (optionnel)
- `featured` (booléen)
- `published` (booléen)
- `published_at`
- `seo_title`
- `seo_description`

## Affichage recommandé
### Liste / grille
- image principale
- titre
- secteur
- résumé court

### Détail
- visuel principal
- contexte
- besoin
- solution
- résultat
- galerie
- CTA contact

## Bénéfice de ce modèle
- ajout simple de nouveaux projets
- cohérence visuelle
- meilleure maintenabilité
- possibilité future de filtrage ou de mise en avant

## Solution d’édition retenue à ce stade
- source canonique: **Sanity** pour les données éditables de `Réalisations`
- rendu par `app/realisations/page.tsx` et `app/realisations/[slug]/page.tsx`
- édition: ajout/modification dans l’interface Sanity, sans admin maison ad hoc
- migration: conserver temporairement la structure typée existante comme base de mappage jusqu’à la bascule complète
- règle de design: garder les images cadrées, la copie courte et la hiérarchie premium B2B sobre, mobile-first

## Schéma Sanity recommandé
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
