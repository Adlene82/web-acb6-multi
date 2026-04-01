# DESIGN_SYSTEM.md — ACB6

## Fondation
- Composants standards: `shadcn/ui`
- Icônes: `lucide-react`
- Couleurs et surfaces: `semantic tokens`
- Contenu multilingue: FR / RU dès le départ

## Positionnement
Créer une interface B2B premium, sobre et calme, avec une sensation éditoriale haut de gamme proche d’Apple France, mais traduite dans le langage ACB6.

## Principes directeurs
- sobriété visuelle
- hiérarchie forte
- grands espaces
- contenu utile avant tout
- lisibilité mobile d’abord
- compatibilité FR/RU sans cassure de layout

## Palette
### Couleurs sémantiques
- `background`
- `foreground`
- `card`
- `card-foreground`
- `primary`
- `primary-foreground`
- `secondary`
- `secondary-foreground`
- `accent`
- `accent-foreground`
- `muted`
- `muted-foreground`
- `destructive`
- `destructive-foreground`
- `border`
- `input`
- `ring`

### Règles
- privilégier une base claire et lumineuse
- garder un accent unique pour les CTA et les états actifs
- éviter les palettes trop riches ou décoratives
- vérifier le contraste sur fond clair et sur cartes

## Typographie
### Hiérarchie
- H1: très fort, court, lisible
- H2: sections principales
- H3: cartes et sous-blocs
- corps: 16px minimum
- meta: petite taille mais lisible

### Règles de fond
- limiter le nombre de familles à 1 ou 2 max
- garder des poids marqués entre titres et corps
- éviter les titres trop serrés qui cassent les retours à la ligne
- tester les longueurs en français et en russe

### Gestion FR/RU
- accepter des titres plus longs
- autoriser le wrap naturel
- ne pas utiliser des tailles qui écrasent le ton premium
- ne pas figer les hauteurs de titres ou de cartes

## Layout
- container large mais contenu de lecture contrôlé
- sections respirées
- grille claire sur desktop
- empilement net sur mobile
- pas de composition qui dépend d’un centrage excessif

## Composants clés
### Header
- fond clair, bordure subtile
- navigation concise
- switch langue textuel `FR / RU`
- CTA visible sans surcharge

### Hero
- eyebrow discret
- H1 net
- sous-texte bref
- CTA principal + secondaire
- visuel fort si et seulement s’il ajoute une preuve

### Cartes d’expertise
- titre court
- description concise
- marge interne généreuse
- état hover très subtil

### Cartes de réalisations
- image
- titre
- contexte
- extrait
- CTA ou lien
- ratio visuel constant
- hauteur adaptable en FR/RU

### Bandeau CTA
- traitement contrasté mais simple
- un seul message
- une seule action principale

### Footer
- compact
- clair
- informations essentielles seulement

## Spacing
- base 8px
- grands écarts entre sections
- écarts plus serrés à l’intérieur des cartes
- pas de valeurs arbitraires hors échelle

## Rayons et ombres
- rayons doux, pas gimmick
- ombres légères et utilitaires
- éviter les ombres décoratives fortes

## Motion
- transitions courtes: 150 à 250ms
- opacité / transform uniquement
- pas d’animation qui gêne la lecture
- respecter `prefers-reduced-motion`

## Accessibilité
- contraste AA minimum
- focus visible
- zone tactile 44x44px
- ordre de tab cohérent
- texte alternatif sur les visuels utiles

## Déviations à documenter
- tout composant hors socle doit être justifié
- toute hauteur ou largeur spéciale créée pour absorber le russe doit être notée
- toute variation du traitement visuel de `Réalisations` doit être explicite
