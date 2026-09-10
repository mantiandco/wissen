---
datum: 2026-08-30
nummer: 250
bereich: website
typ: auftrag
autor: archiv
archiv: 11.20
---
# Auftrag 250 — /faq/ und der Verpackungsabschnitt


**Ergebnis:** 2 037,4 s, zehn grün. **40 → 41 Seiten, 43 → 44 Dokumente.** Acht Commits.

**Die Seite `/faq/`** trägt fünfzehn Einträge in zwei Gruppen — acht Betriebsfragen mit eigener Antwort, sieben Wegweiser. Ein Halal-Eintrag fehlt bewusst und wartet auf `/halal/`.

**Der Verpackungsabschnitt** steht als Block 05 auf der Startseite, zwischen Voices und Order: „Vier Behälter statt einem". Der Joghurt ist kalt, die Manti heiß, jede Lage kommt einzeln. Kein Satz über die Temperatur beim Gast — nachweisbar ist, was die Küche tut, nicht was auf der Straße daraus wird.

**Vier Sollwerte gesetzt:** 82 / 44 / 14 / 50. `SOLL_BAUTEILE` wurde 50 und nicht die von mir geratenen 49 — `anrede.mjs` liest auch `src/pages`, und der Auftrag legt dort eine dritte Datei an.

**Drei Fehler in meinem Auftrag:** `copy/faq.json` ist nicht baubar, weil die `copy`-Sammlung jede Datei dort gegen das Startseiten-Schema prüft — richtig ist `copy/faq/faq.json` mit eigener Sammlung. Die Zeichenzahl der Description war geschätzt (132 behauptet, 117 gemessen). Und `<details>` hätte ich nicht anbieten dürfen: `Treue.astro` schreibt seine Fragen längst aus, mit beiden Gründen daneben.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.20, Zeilen 2022–2033. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
