# UI_FOUNDATION.md

## Baseline
- `shadcn/ui` par defaut pour les composants standards
- `lucide-react` par defaut pour les icones
- `semantic tokens` pour couleurs, surfaces, bordures et etats

## Deviations autorisees
Une deviation est acceptable seulement si:
- une contrainte de marque le demande reellement
- un composant n est pas bien couvert par le socle standard
- la valeur produit ou UX justifie clairement le sur-mesure

## Trace minimale attendue
Quand il y a deviation, documenter:
- le composant ou la zone concernee
- pourquoi `shadcn/ui` n etait pas suffisant
- ou vit la deviation dans le code
