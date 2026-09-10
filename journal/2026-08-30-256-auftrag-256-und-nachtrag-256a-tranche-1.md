---
datum: 2026-08-30
nummer: 256
bereich: website
typ: auftrag
autor: archiv
archiv: 11.26
---
# Auftrag 256 und Nachtrag 256a — Tranche 1


**Gelandet:** fünf überarbeitete deutsche Titel (darunter Vegan 66 → 59 und Vegetarisch 67 → 58, beide vorher über der 60er-Grenze), die deutschen Descriptions, das aufgehobene Treue-Pending, die ersten zwölf englischen Texte des Bestands (`sprache`: en 0 → 12 geschrieben). Dokumentzahl 44 = 44 in jedem Bau. **`budget` hat dreimal exakt die Routen neu gemessen, deren Dokument sich änderte** — 8/33, 1/40, 1/40 —, jedes Mal vorhergesagt.

**Nicht gelandet, mit Beweis: die englischen Routentexte (§4).** `builtLangs()` (`routes.ts:522`) prüft **Textpräsenz statt Baubestand**. Gefüllte `text.en` machen die deutsche Seite zur Lügnerin: `hreflang="en"` auf `/en/faq/`, ein Umschalter dorthin — und `sprache` wird rot: „dort liegt kein Dokument". In einer Einwegprobe belegt, zurückgebaut. **Das `sprache`-Gatter war das Schloss, das hielt.**

**Meine Mechanikannahme in §0 war falsch, und die Wahrheit ist besser:** Englische Seiten können durch Text gar nicht zu bauen beginnen — in `src/pages/` gibt es keinen `/en/`-Erzeuger, jedes `getStaticPaths` setzt ausdrücklich `DEFAULT_LANG`. **Englisch geht nur durch einen bewussten Schalter live**, nie aus Versehen mit halbem Text. Mein Abbruchkriterium „Dokumentzahl steigt" konnte deshalb nie anschlagen.

**Standort:** Titel und Description kommen aus `site.ts locations[0]`, einsprachig, direkt gelesen — nicht aus `routes.ts`/`meta.json`. Deutsch als Stringtausch gelandet; Englisch ist eine Strukturentscheidung (Abschnitt 15) und gehört zu 257.

**Ein 61-Zeichen-Titel rutscht durch alle elf Gatter** (§6c, gemessen). Die 60er-Grenze steht nur in einem Kommentar. Längenprüfung kommt in 257 — in `sprache`, das den Bestand schon liest, nicht als zwölftes Gatter.

**256a:** Startseite auf die neue Paarung — Titel 56 „Manti in Mannheim — aus eigener Produktion", Description 146 beginnt mit „Gekocht, wenn du bestellst". Ein Commit, `budget` 1/40. Claude Code hat dabei den Kommentar in `routes.ts:125` mitgezogen, der die 60 als Kante behauptete — und ihn durch „one character short" ersetzt, was wieder eine Zahl ist; mit der Längenprüfung in 257 gehört dort ein Verweis hin.

**Wieder eine Zahl von mir:** Speisekarten-Description 153 behauptet, 154 gemessen. Das Tranche-1-Dokument hatte anfangs 26 falsche Zeichenzahlen und zwei Grenzverletzungen — von Hand gezählt. Seither setzt ein Skript jede Zahl in jedem Dokument.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.26, Zeilen 2126–2142. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
