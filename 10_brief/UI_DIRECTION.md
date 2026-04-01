# UI_DIRECTION.md — ACB6

## Intention visuelle
Construire une direction premium, calme et très lisible, inspirée par Apple France dans la sensation de finition, la respiration et la hiérarchie, sans copier les proportions ni les composants.

## Direction retenue
**Premium editorial minimal**

Traits dominants:
- fond clair, peu de couleurs, contrastes nets
- titres courts et forts
- sections espacées et bien séparées
- contenu prioritaire sur la décoration
- preuves et réalisations au premier plan
- lecture fluide sur mobile avant tout

## Principes de composition
1. **Une idée forte par section**
   - chaque bloc doit être scannable en quelques secondes.
2. **Le vide est un outil**
   - respirations larges, marges généreuses, densité maîtrisée.
3. **La preuve passe avant l’effet**
   - la mise en scène ne doit jamais masquer le contenu.
4. **Mobile-first réel**
   - la version mobile n’est pas un rétrécissement, c’est la base.
5. **FR et RU dès la conception**
   - chaque composant doit survivre à des libellés plus longs.

## Hero
### Rôle
Installer immédiatement le positionnement ACB6 et la promesse de valeur.

### Composition recommandée
- eyebrow discret
- H1 court et affirmé, sur 2 à 4 lignes max
- texte de soutien bref, orienté bénéfice
- CTA principal + CTA secondaire
- visuel de preuve ou d’ambiance métier, jamais décoratif sans sens

### Règles
- pas de carousel
- pas de hero saturé en texte
- un seul message principal par écran
- le hero doit rester lisible même si le russe allonge le titre ou le sous-texte

## Sections
### Structure cible de la home
1. Hero
2. Expertises principales
3. Secteurs / contextes
4. Méthode
5. Réalisations mises en avant
6. Bloc crédibilité
7. CTA final

### Rythme visuel
- alternance de sections blanches et de sections légèrement teintées
- blocs courts, hiérarchie forte
- grilles sobres pour cartes et preuves
- pas de surcharge d’icônes ou de badges

## Réalisations
### Intention
Transformer la page `Réalisations` en actif de preuve, pas en galerie décorative.

### Cartes
Chaque carte doit porter:
- image homogène
- titre
- contexte / secteur
- extrait court
- lien vers détail ou fiche enrichie

### Règles de carte
- ratio image constant sur toute la grille
- texte court mais explicite
- hauteur variable autorisée si la traduction l’exige
- pas de troncature agressive sur les éléments essentiels

## Typographie
- sans-serif nette et contemporaine
- hiérarchie forte entre titres, sous-titres et corps
- corps lisible à 16px minimum
- éviter les titres trop condensés
- accepter des retours à la ligne naturels

## Espacement
- base 8px
- padding mobile généreux
- espaces plus grands entre sections qu’entre éléments d’un même bloc
- ne pas compenser une densité de contenu par une typographie plus petite

## Mobile-first
- navigation simple, lisible et courte
- cartes en une colonne par défaut
- CTA rapidement visibles
- contenu prioritaire au-dessus de l’ornement
- images optimisées et proportionnées

## Switch de langue
- texte uniquement: `FR / RU`
- pas de drapeaux
- préférence donnée à la lisibilité et à l’accessibilité
- largeur réservée pour éviter les sauts de layout

## Gestion des textes longs
- concevoir pour la locale la plus longue
- permettre 2 lignes sur les CTA si nécessaire
- autoriser les cartes et les entêtes à grandir verticalement
- préférer le wrap naturel à la coupe
- éviter les blocs à hauteur fixe sur le contenu éditorial

## Déviations utiles à documenter
- si un composant sort du socle `shadcn/ui`, noter la raison exacte
- si une carte ou un hero reçoit un traitement spécifique pour la page `Réalisations`, l’indiquer explicitement
- si un ajustement FR/RU impose une largeur ou un espacement non standard, le tracer sur disque
