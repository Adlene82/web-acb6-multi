# DELIVERY_GUARDRAILS.md

## First milestone
- objectif obligatoire: atteindre une premiere URL de test ou prouver un blocage d environnement reel
- un specialiste actif n est jamais une fin de tour a lui seul
- un recap n est jamais une fin de tour a lui seul

## Preview gate
- par defaut: `base_locale_first`
- passer a `all_locales_before_preview` seulement si la demande est explicitement tracee sur disque

## Governance
- les fichiers de gouvernance de la fabrique ne se modifient pas pendant un projet client
- toute demande de changement de workflow/prompt/template doit etre traitee comme maintenance explicite
