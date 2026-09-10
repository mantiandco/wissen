---
status: gilt
datum: 2026-08-31
archiv: 11.31
zeile: 2198
---
# Node 24 über nvm festgeschrieben (.nvmrc, engines)

## Kontext

Anlass und Auftraggeber in Z. 2194: „Taib am 31. August: aktualisieren, und es muss beim Hoster reibungslos laufen.“ Die Krücke ../.toolchain/node22 wurde danach gelöscht; Vorprüfung im Bauskript kam in 261.

## Entscheidung

**Gewählt:** nvm 0.40.7 mit Node 24.20.0 — reines Shell-Skript, liest `.nvmrc` nativ. Im Repository (`97b1e96`): `.nvmrc`, `engines.node ^24.20.0`, ein minimales README mit den zwei Dingen, ohne die ein frischer Klon nicht baut (Node, `npm run fonts`). Ein README gab es vorher nicht.

## Begründung

**Gemessen vor dem Installieren:** Astro verlangt `18.20.8 || ^20.3.0 || >=22.0.0`; aktive LTS-Linie 24, neueste 24.20.0; 26.x ist Current und schied aus. Kein Homebrew, kein Versionsverwalter auf dem Rechner.

## Status

gilt · Datum 2026-08-31

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.31, ab Zeile 2198.*
