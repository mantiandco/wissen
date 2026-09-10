---
datum: 2026-08-30
nummer: 254
bereich: website
typ: auftrag
autor: archiv
archiv: 11.24
---
# Auftrag 254 — die Laufzeit vor dem Verdoppeln


**Der Anlass:** Mit gebauten englischen Seiten verdoppelt jedes routenweise Gatter seine Menge — der volle Lauf wäre von 35 auf rund 69 Minuten gestiegen, dauerhaft. §2 hat zuerst gemessen, wo die Zeit liegt: `budget` gibt 99,94 % seiner 1 264 s in der Messschleife aus, davon zwei Drittel im Scrollprotokoll; Browserstart 0,6 s. Die Zeit hängt an der Zahl der Routen — der Ansatz trug.

**Die Form:** ein Inhaltsschlüssel je Route — sha256 über Node- und puppeteer-Fassung, die vier beteiligten Skripte und jede Datei, die der letzte Lauf über die Leitung holte. Speicher außerhalb des Repositoriums (`../.gatter-zwischenspeicher/budget.json`). Tragende Säule ist der **deterministische Bau**, gemessen: 584 von 584 Dateien byte-identisch über zwei Bauten.

**Fünf Bedingungen, alle erfüllt:** Der Schlüssel deckt alles ab, wovon die Messung abhängt (und benennt, was nicht: Chrome-Binärdatei, Maschine, Dateien, die ein künftiger Lauf zusätzlich lüde). Leerer oder verfälschter Speicher führt zur vollen Messung. Die Urteilszeile sagt „n gemessen, m übernommen". **`BUDGET_VOLL=1` erzwingt den vollen Lauf und ist vor jeder Veröffentlichung verbindlich.**

**Vier Gegenproben:** zweiter Lauf 0,19 s statt 1 262,9 s · eine geänderte Route → genau eine neu gemessen · **ein verfälschter Speicherwert (9 999 ms) bringt das Gatter zu Fall** — der Beleg, dass wirklich gelesen wird · Speicher gelöscht → voller Lauf, gleiche Ergebnisse. **Gatterlauf 2 074 s → 793,5 s.**

**Ausweitung auf `contrast`, `hover`, `a11y` lohnt** (~726 s je Lauf), kommt aber **erst nach den Schlüsseln** — solange sich fast jedes Dokument in fast jedem Auftrag ändert, trifft ein Speicher nie. `thirdparty` ungeeignet: Es misst die Welt von heute.

**Nebenbei in §5:** `fassung.mjs:29` und `sprache.mjs:161` auf `LANGS` gestellt — zwei stille Ausfälle bei einer dritten Sprache. Die übrigen Fundstellen (30 Code-Stellen in 6 Skripten, gefährlichste `sprache.mjs:206–208`, `:131`, `pending.mjs:400`) warten mit Auftrag 239.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.24, Zeilen 2100–2113. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
