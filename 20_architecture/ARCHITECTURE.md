# ARCHITECTURE.md

## Stack cible
- Next.js
- shadcn/ui
- lucide-react
- semantic tokens

## Options selon scope
- monolingue standard: stack ci-dessus seulement
- multilingue: ajouter `next-intl` pour le routing/formatage et `Sanity` comme source de verite du contenu editable

## Structure
- UI standard sur socle `shadcn/ui`
- icones sur `lucide-react`
- theming via tokens semantiques
- contenu editable via CMS seulement quand le besoin produit le demande
- si multilingue, modeliser les pages/editorial dans `Sanity` avec document-level translations par defaut

## Decisions ouvertes
- quels composants sortent reellement du socle standard
- quels besoins editoriaux doivent vivre dans le CMS
- si le multilingue est hors scope, `STATE.json` doit rester sur une seule locale active
