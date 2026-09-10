---
datum: 2026-08-29
nummer: 245
bereich: website
typ: auftrag
autor: archiv
archiv: 11.15
---
# Auftrag 245 — gelaufen, vier Commits, die Filterreihe


**Ergebnis:** 1 972,6 s über elf Gatter, zehn grün, `diet-check` rot. Vier Commits `c026bd6` bis `5efe351`.

**Der Halal-Chip heißt jetzt „Fleisch (halal)"** und liest seine Aufschrift aus `menu.filterLabels` in `copy/home.json`. Vorher druckte das Markup den rohen Datenwert — fest verdrahtetes Deutsch, das `sprache.mjs` nicht sieht, weil es nicht als Text dasteht.

**Vegan ist vegetarisch, und der Filter weiß es jetzt.** Der Fehler: `/vegetarisch/` zog seine Gerichte aus `grid: ['vegetarisch','vegan']` und zeigte 23, der Filter prüfte `[data-diet='vegetarisch']` und zeigte 10. Dasselbe Wort, zwei Antworten, und die auf der Karte war sachlich falsch. Behoben über ein neues `data-diets` mit allen zutreffenden Bezeichnungen und `~=` im CSS, gespeist aus **einer** Zuordnung in `src/lib/dish.ts`. Gegenprobe mit dem alten Selektor: wieder 10.

**Gemessene Kachelzahlen:** Alle 34 · Fleisch (halal) 4 · Vegetarisch 23 · Vegan 13. **Die erwartete „27" für Alle war mein Fehler** — 27 ist eine Gerichtezahl, 34 die Kachelzahl mit den sieben Combos. Claude Code hat die Abweichung berichtet statt sie passend zu machen.

**Vier Fehler im Auftrag, alle von mir.** Beide Zeilennummern gingen um eins daneben (`sprache.mjs` 598 statt 599, `routes.ts` 540 statt 541) — Ursache war meine Zerlegung der Exportdateien, die den führenden Zeilenumbruch als Zeile eins mitzählte. `data-diet` wird in `DishCard.astro` geschrieben, nicht in `Menu.astro`. Und die Annahme, das Fermento führe Branntweinessig, war falsch.

**Sein eigener schwerster Fehler, selbst gemeldet:** Nach der Gegenprobe rief er `git checkout -- Menu.astro` und vernichtete damit die noch nicht committeten Änderungen desselben Auftrags. Zwei CSS-Blöcke und eine Messung neu. Die Lehre steht in Abschnitt 17.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.15, Zeilen 1927–1940. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
