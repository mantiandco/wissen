---
datum: 2026-08-31
nummer: 257
bereich: website
typ: auftrag
autor: archiv
archiv: 11.28
---
# Auftrag 257 — das Schloss, dann die englischen Routentexte


**Das Schloss ist besser als meine Vorgabe:** `LIVE_LANGS = ['de']` als eine Konstante am Kopf von `routes.ts`; `builtLangs()` verlangt Schaltung **und** Text. Der Tag, an dem Englisch live geht, ist ein Ein-Zeilen-Edit. Gegenprobe: `'en'` geschaltet ohne Dokumente → `hreflang` geschrieben → `sprache` rot.

**Gelandet:** 15 von 17 Routen mit englischen Texten (offen nur `agb`, `widerruf`), null `hreflang="en"` im Bestand, 44 = 44. Standort in `site.ts` `Localized`, die `meta.json`-Hülle entfallen. **Die Längenstufe in `sprache`** — nicht als zwölftes Gatter — mit vier Kantenproben: 60 und 155 bestehen, 61 und 156 fallen mit Ort und Feld. Laufzeit 0,09 s. Gerichtseiten **am Merkmal** ausgenommen, weil über deren Texte damals niemand entschieden hatte (Nature's Palette 158, Mediterranes Trio 64).

**Meine drei Auftragsfehler:** §5 nahm die Gerichte nicht aus · §8 erwartete null Neumessungen, aber ein Import in §4 ordnet CSS um · §4 diktierte einen englischen Standort-Titel *und* die Musterklausel, die sich widersprachen — er ließ die Klausel gewinnen, und dabei kam heraus, dass der deutsche Standort-Titel die bloße Adresse war.

**Zwei Funde für später:** `builtLangs('agb')` meldet Deutsch als gebaut ohne Rechtstext — die dritte Bedingung fehlt, fällig mit den Rechtstexten. Und `sprache` liest den englischen Standort-Zweig per Regex als „mit Wörtern", egal was drinsteht; doppelt abgesichert.

**Aus seiner eigenen Fehlerliste:** „die verstümmelte Ziffer stammte aus der Verdichtung" — 54 803 statt 54 862, eine Zahl, die beim Zusammenfassen seines Arbeitsgedächtnisses kippte, gefangen nur durch Nachmessen. Die Lehre über Zahlen, die kein Skript gesetzt hat, gilt auch für das Gedächtnis des Ausführenden.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.28, Zeilen 2155–2166. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
