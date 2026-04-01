# UI_IMPLEMENTATION_CHECKLIST.md

## Standard first
- [ ] `shadcn/ui` utilise pour les composants standards
- [ ] `lucide-react` utilise comme source d icones unique
- [ ] semantic tokens utilises pour les couleurs et surfaces
- [ ] pas de melange gratuit de bibliotheques UI ou d icones

## When deviating
- [ ] deviation justifiee par besoin produit, marque ou UX
- [ ] deviation documentee sur disque
- [ ] composant proprietaire clairement localise dans le code

## Quick visual checks
- [ ] etats hover/focus/disabled coherents
- [ ] contrastes et lisibilite acceptables
- [ ] responsive propre sur les ecrans principaux
- [ ] aucun texte visible ne remplace les accents francais par `?`
- [ ] si doute sur un seed/fallback ou une ecriture distante, verifier la source avant build/deploy
