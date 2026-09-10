---
status: gilt
datum: 2026-08-31
archiv: 15 / Standort — ein Sprachzweig in `site.ts`, kein Umzug
zeile: 2962
---
# Standort — ein Sprachzweig in `site.ts`, kein Umzug

## Kontext

(siehe Entscheidung)

## Entscheidung

**Entschieden am 31. August, für 257.** Titel und Description der Standortseite liegen in `site.ts locations[0]`, einsprachig. Sie werden `Localized` — de/en nebeneinander in derselben Struktur —, kein Umzug nach `meta.json`. Grund ist der Grundsatz aus `text.ts`: Parallele Sprachablagen sind der Mechanismus, durch den Übersetzungen vergessen werden; nebeneinander sieht man sie. Die pending-Hülle `standort` in `meta.json` entfällt dann — eine Stelle, nicht zwei.

## Begründung

(in der Entscheidung enthalten)

## Status

gilt · Datum 2026-08-31

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 15 / Standort — ein Sprachzweig in `site.ts`, kein Umzug, ab Zeile 2962.*
