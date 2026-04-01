#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const roots = ['app', 'components', 'lib'];
const extensions = new Set(['.ts', '.tsx']);
const markers = [
  '?change', '?changer', '?ditable', '?ditables', 'R?alisations', 'Cr?dibilit?', 'M?thode',
  'd?sormais', 'orient?e', 'dur?e', 'rep?res', 'ex?cution', 'Coordonn?es', '?crivez-nous',
  'cl?s', 'coh?rent', 'cadr?', 'r?ponse', 'r?sultat', 'b?n?fice', 'm?tier', 'acc?l?rer',
  'connect?', '? propos', 'Param?tres', 'publi?s', 'lisibilit?', 'cr?dibilit?', 's?curit?',
  'retour ? ', 'r?utilisable', 'compr?hensible', 'pr?tes', 'structur?e', 'c?ur'
];
const hits = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full);
      continue;
    }
    if (!extensions.has(extname(full))) continue;
    const text = readFileSync(full, 'utf8');
    const lines = text.split(/\r?\n/);
    lines.forEach((line, idx) => {
      for (const marker of markers) {
        if (line.includes(marker)) {
          hits.push(`${full}:${idx + 1}: ${line.trim()}`);
          break;
        }
      }
    });
  }
}

for (const dir of roots) walk(join(process.cwd(), dir));
if (hits.length) {
  console.error('encoding-regression');
  for (const hit of hits) console.error(hit);
  process.exit(1);
}
console.log('encoding-ok');
