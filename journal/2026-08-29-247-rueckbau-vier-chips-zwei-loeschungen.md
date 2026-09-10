---
datum: 2026-08-29
nummer: 247
bereich: website
typ: auftrag
autor: archiv
archiv: 11.17
---
# Auftrag 247 — Rückbau, vier Chips, zwei Löschungen


**Ergebnis:** 1 969,2 s, zehn grün, `diet-check` rot bei 24. Kachelzahlen unverändert 34 · 7 · 27 · 16.

**Der Rückbau der Getränke-Ableitung.** `content.config.ts:349-361` sagt zum Feld `drink`: ein Beispiel, keine Festlegung, bestellt wird frei aus dem Sortiment. Die Regel aus 246 rechnete die Flasche mit und beschrieb damit das Foto statt das Essen. Zurückgebaut auf einfache Vererbung vom Grundgericht.

**Der Fehler war messtechnisch unsichtbar** — vier Kachelzahlen vor und nach dem Rückbau gleich, weil kein Milchgetränk im Sortiment steht. Belegt ist der Rückbau durch einen eigens gebauten Fall: `eb-blueberry` auf `vegetarisch` gesetzt, mit der neuen Regel bleibt Vegan bei 16, mit der 246er fällt es auf 15.

**Die vier rohen Chips** in `[menu]/[dish].astro` und `Bestseller.astro` lesen jetzt dieselbe Aufschrift wie die Filterreihe: 34 rohe Chips vorher, null nachher, beschriftete von 126 auf 174. **Der Chip der Combo** hängt nicht mehr am rohen Wert; 34 von 34 Kacheln tragen jetzt einen.

**`map.mjs`, `map.geo.json` und `pf-teller.psd` sind gefallen.** Die PSD war die Bearbeitungsdatei des Tellers für Hingel's Harvest, versehentlich mitkopiert, Zweitkopie außerhalb vorhanden. **Die 10,8 MiB bleiben in der Historie** — die Löschung räumt den Arbeitsbaum auf und verkleinert das Repository nicht.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.17, Zeilen 1984–1995. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
