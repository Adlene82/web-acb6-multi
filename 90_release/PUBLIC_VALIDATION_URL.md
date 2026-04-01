# PUBLIC_VALIDATION_URL - ACB6

## URLs canoniques attendues
- site: `https://web-acb6-multi.vercel.app`
- admin: `https://web-acb6-multi.vercel.app/studio`
- locale RU du site: `https://web-acb6-multi.vercel.app/ru`

## Etat courant
- Le projet Vercel dedie `web-acb6-multi` reste bien lie au dossier `web-acb6-multi`.
- La release publique actuelle est gelee en `non GO`.
- L admin `/studio` est en scope produit mais n a pas de validation admin exploitable documentee.
- Le repo dedie `https://github.com/Adlene82/web-acb6-multi` etait en retard par rapport a la branche locale au moment de la validation annoncee.

## Regle de reprise
1. GitHub doit etre synchronise avant toute nouvelle validation Vercel.
2. La QA doit couvrir separement `site FR`, `site RU` et `admin /studio`.
3. Une seule URL publique ne suffit plus pour declarer le projet livre.
