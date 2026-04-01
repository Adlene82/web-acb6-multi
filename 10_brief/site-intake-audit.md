# Audit source et qualification de refonte — ACB6

## Identifiants
- client_id: `acb6`
- project_id: `web-acb6-multi`
- project_root: `/home/adlene/.openclaw/shared/webfactory-projects/acb6/web-acb6-multi`

## Demande exprimée
Le client veut refaire `www.acb6.fr` techniquement et visuellement, s'inspirer du style de `https://www.samsung.com/fr/`, améliorer les contenus, ajouter une page `Réalisations` et garantir une bonne adaptation mobile.

## Audit du site source `www.acb6.fr`

### Stack probable
- Builder legacy détecté: `IONOS MyWebsite`.
- Indices: meta generator `IONOS MyWebsite`, assets `website-start.de`, structure de builder hébergé.

### Navigation actuelle observée
- Accueil
- Qui sommes-nous ?
- Nos offres
- Nous contacter

### Hero / promesse actuelle
- Message principal observé: `ACB6 société de conseil et de services moteur de la transformation digitale.`
- Constats:
  - promesse courte mais générique;
  - différenciation faible;
  - peu de preuve métier visible dès l'entrée.

### Contenus actuels observés
- Positionnement autour de la transformation digitale, du conseil, de l'architecture SI et des secteurs énergie & utilities.
- Les textes sont majoritairement descriptifs, longs et peu structurés pour le scan rapide.
- Peu de mise en avant de résultats, cas clients, méthodologie ou bénéfices concrets.

### CTA observés
- CTA faibles et répétitifs: `Voir`.
- Contact via formulaire simple.
- Pas de CTA premium ou de parcours orienté conversion B2B.

### Footer observé
- Présence d'éléments techniques/legacy non désirables dans une refonte moderne: `Version imprimable`, `Plan du site`, `Connexion`.

### Ton actuel
- Corporate, informatif, sérieux.
- Mais trop générique et peu différenciant.
- Manque de densité de preuve et de formulation orientée valeur client.

## Audit de la référence `samsung.com/fr`

### Signaux de style pertinents
- Sections hero larges et visuelles.
- Typographie forte et nette.
- Rythme de page soutenu par blocs contrastés.
- CTA très lisibles.
- Impression premium, fluide, contemporaine.
- Expérience responsive clairement pensée.

### Ce qu'il faut reprendre
- le sentiment de modernité et de qualité;
- la clarté visuelle;
- la hiérarchie forte;
- les grands aplats/visuels;
- le rythme des sections et des cartes.

### Ce qu'il ne faut pas reprendre tel quel
- les codes e-commerce;
- la surcharge produit;
- les patterns trop orientés catalogue grand public;
- les promesses marketing inadaptées au conseil B2B.

## Qualification du projet
- Type de projet: **refonte sur mesure inspirée d'une référence premium**.
- Ce n'est pas un clone fidèle.
- Ce n'est pas non plus une simple modernisation graphique.
- Le périmètre impose:
  - une nouvelle base technique;
  - une nouvelle hiérarchie éditoriale;
  - une architecture de contenu revue;
  - une page `Réalisations` structurante;
  - une exécution mobile-first.

## Arborescence cible recommandée
- Accueil
- Expertises / Offres
- Réalisations
- À propos
- Contact

## Principes éditoriaux recommandés
- Écrire plus court, plus concret et plus orienté bénéfices.
- Montrer les secteurs, expertises et résultats.
- Ajouter des preuves: réalisations, contextes d'intervention, type de missions.
- Installer un ton premium sobre: précis, crédible, sans jargon inutile.

## Structure recommandée de la page `Réalisations`
- Intro claire sur les projets menés.
- Grille de cartes avec visuel.
- Pour chaque réalisation:
  - titre;
  - contexte / client ou secteur;
  - besoin;
  - solution apportée;
  - bénéfices / résultat;
  - photo principale.
- Prévoir une structure facilement éditable et duplicable.

## Recommandation de cadrage
Passer en phase UI/UX avec un brief de direction artistique inspiré de Samsung, mais adapté à une marque B2B de conseil. Ensuite seulement implémenter sur une stack moderne propre.
