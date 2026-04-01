# Site Factory Template

Ce squelette est la base standard pour un nouveau projet WebFactory.

## Convention de structure
- `00_source/` : notes de la source, URL, captures, inventaire de contenu.
- `10_brief/` : cadrage, brief client, objectifs, contraintes.
- `20_architecture/` : architecture technique, stack, plans d implementation.
- `30_design/` : design system, theme, assets.
- `40_frontend/` : application frontend et composants.
- `50_backend/` : CMS, backend, integrations.
- `60_qa/` : rapports de verification et correctifs.
- `70_release/` : release notes, preview, checklist de publication.
- `80_handoff/` : handoffs inter-agents et resume final.

## Demarrage d un nouveau site
1. Copier ce dossier vers `~/.openclaw/shared/webfactory-projects/<client_id>/<project_id>/`.
2. Renseigner `STATE.json`, `10_brief/BRIEF.md` et `00_source/SOURCE.md`.
3. Envoyer au `po-architecte` un brief avec `client_id`, `project_id`, `project_root`, `source_url`, objectifs et contraintes.
4. Laisser le workflow WebFactory produire `BACKLOG.md`, `DECISIONS.md`, `DASHBOARD.md` et les handoffs.

## Socle UI par defaut
- `shadcn/ui` pour les composants standards
- `lucide-react` pour les icones
- `semantic tokens` pour couleurs et surfaces
- deviations documentees uniquement quand le standard ne suffit pas vraiment

## Socle i18n par defaut
- monolingue par defaut tant que le brief ne demande pas explicitement le multilingue
- si multilingue: `next-intl` pour routing et UI fixe, `Sanity` pour contenu editable, document-level translations en priorite pour les pages/editorial
- traduction machine eventuelle seulement en aide, jamais en publication aveugle
- par defaut, la premiere preview peut partir sur la langue de base sauf gate explicite `all_locales_before_preview`

## Fichiers de kit UI
- `20_architecture/UI_FOUNDATION.md`
- `30_design/DESIGN_SYSTEM.md`
- `40_frontend/UI_IMPLEMENTATION_CHECKLIST.md`
- `60_qa/UI_FOUNDATION_CHECKLIST.md`

## Fichiers de kit i18n
- `20_architecture/I18N_ARCHITECTURE.md`
- `20_architecture/DELIVERY_GUARDRAILS.md`
- `40_frontend/I18N_IMPLEMENTATION_CHECKLIST.md`
- `60_qa/I18N_QA_CHECKLIST.md`

## Mode recommande
Le template est preconfigure pour un demarrage `PROD_AUTONOME` avec traces sur disque.
