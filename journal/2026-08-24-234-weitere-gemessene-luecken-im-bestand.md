---
datum: 2026-08-24
nummer: 234
bereich: website
typ: befund
autor: archiv
archiv: 11.2
---
# Weitere gemessene Lücken im Bestand


**Der Füllstand der Kennzeichnungsfelder** über 34 Einträge: `pairing` gefüllt bei 7, ungesetzt bei 27 · `additives` gefüllt bei 2, ungesetzt bei 32, **leeres Array null Mal** · `allergensTraces` gefüllt bei 6, ungesetzt bei 28 · `related` gesetzt bei **null von 34** · `production` an allen 34 Pflicht, Ausgabe nirgends.

**Das leere Array bei `additives` kommt null Mal vor.** Genau dieses leere Array ist nach 7.1 die Aussage „keine" — und damit das Argument gegenüber Wettbewerbern. Solange es nirgends steht, ist die ganze Unterscheidung zwischen „geprüft, nichts" und „nicht geprüft" nur Theorie.

**`--text-faint` fehlte im `.on-ink`-Block** (`tokens.css:244`). **Seit Auftrag 234 steht die Zeile drin**, mit `color-mix(in oklab, var(--paper) 65%, var(--ink))` — 6,45 : 1 gegen `#20201f`. Ohne sie hätte der helle Wert rgb(120,119,115) auf Tinte gestanden, 3,64 : 1. **Die Zeile ist Vorsorge, keine Reparatur:** Alle drei Abnehmer stehen heute außerhalb von `.on-ink`, an 37 Routen nachgesehen. Das steht auch so im Kommentar, damit niemand sie für einen gemessenen Fund hält.

**Hier stand bis zum 25. August eine Zahl von mir, die falsch war.** Ich hatte geschrieben, die drei Verwendungen lägen „bei 3,4 : 1 gegen Papier". Gemessen sind **4,07 : 1 gegen `--paper`** und **3,62 : 1 gegen Papier plus Leinen**. 3,4 ist keines von beidem. **Die Zahl stammt aus dem Kommentar bei `Voices.astro:464`, und der Kommentar ist falsch.** Ich habe einen Kommentar als Messung übernommen — genau der Fehler, den Abschnitt 17 verbietet.

**Die Einordnung war ebenfalls falsch.** Zwei der drei Verwendungen — `Voices.astro:470` und `Bestseller.astro:518` — werden **überhaupt nie gemessen**: Es sind abgeschaltete Knöpfe, deren einziger Inhalt ein SVG ist, und `collectItems()` in `mess.mjs` läuft nur über Textknoten. Die dritte, `Process.astro:72`, ist großer Text (48–80 px, Stärke 900) und schuldet nur 3 : 1. **Kein einziger der drei Fälle war das Problem, für das ich ihn gehalten habe.**

**Achtundachtzig Kontrastkommentare im Bestand sind unbelegt.** In fünfzehn Dateien stehen 88 Kommentare, die ein Kontrastverhältnis behaupten. **Sechs davon sind nachgemessen, einer davon ist falsch, 82 sind ungeprüft.** Das ist keine Einzelstelle, das ist eine ganze Klasse ungeprüfter Zahlen, die im Quelltext wohnt und von dort in Gedächtnisdateien wandert — nachweislich, siehe oben. **Das Gegenmittel ist ein Gatter**, das jeden solchen Kommentar gegen das tatsächlich gemalte Farbpaar rechnet. Höchster Posten in Auftrag 235.

**Zwei neue blinde Flecken, benannt:** `textDecorationThickness` steht **nicht** in `MALT`, der Liste der beobachteten Eigenschaften des Hover-Gatters — ein Element, dessen einzige Rückmeldung eine dickere Unterstreichung ist, gilt als unverändert. Und `collectItems()` geht nur über Textknoten — ein Bedienelement, dessen einziger Inhalt ein SVG ist, wird vom Kontrast-Gatter nie angefasst. **Beide sind heute nicht gemessen, also auch nicht beziffert.** Das ist der Unterschied zu einem Befund.

**Die Zahl der Zusatzstoffklassen ist ungeklärt.** Die Legende auf `/speisekarte` nennt acht. Nach ZZulV sind es elf. **An der Verordnung zu prüfen**, bevor die Legende irgendwo als vollständig ausgegeben wird.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.2, Zeilen 1476–1493. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
