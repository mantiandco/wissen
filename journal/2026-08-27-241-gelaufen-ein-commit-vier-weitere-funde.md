---
datum: 2026-08-27
nummer: 241
bereich: website
typ: auftrag
autor: archiv
archiv: 11.10
---
# Auftrag 241 — gelaufen, ein Commit, vier weitere Funde


**Commit `3a34d76`, drei Dateien, 2 Einfügungen, 140 Löschungen.** Beide Kommentarspannen stehen auf 0,4961–0,5020, `CENTRE = 0.499` unverändert, `Auftrag-03-ClaudeCode.md` gelöscht und eingetragen. `git status` zeigt danach nur noch `PROJEKTGEDAECHTNIS.md` und `SC-25-08-26/` als unversioniert — beide bleiben es. 39 HTML-Dokumente.

**Elf Gatter, 1795,7 s** (29 min 56 s) gegenüber 1819,1 nach 240. budget 1126,7 · contrast 238,7 · a11y 191,0 · hover 174,4 · thirdparty 63,0 · kommentar 1,1 · sprache 0,2 · teilbild 0,2 · diet-check, legal, anrede je 0,1. `diet-check` rot wie erwartet, 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten, unverändert. **Bislang der schnellste der drei letzten Läufe.**

### Die Umkehrung in §8 hat funktioniert

**Auftrag 240 verbot, Kommentare anzufassen, und produzierte null Funde. Auftrag 241 verlangte, überholte Zahlen zu nennen statt zu ändern, und produzierte vier.** Das ist der belegte Gegentest zur Lehre aus 11.9. **Ein Verbot erzeugt Schweigen, ein Auftrag zum Melden erzeugt Befunde** — bei gleichem Risiko, denn gemeldet wird ohne Eingriff.

**Vier überholte Zahlen, genannt und nicht geändert:**

**1 · `bottle-axis.mjs`, Kommentar zu `MIN_EDGE`: „die schwächste echte Messung liegt am Rohbild bei 14,3".** Nachgemessen an den heutigen vierzehn mit `measure(src, BOTTLE)`: schwächste ist eb-cola mit **16,7**. **Die 14,3 gehörte vermutlich zu Cassis** — also derselbe Tausch, der schon die Mittenspanne verschoben hat. Der Satz daneben, „an den fertigen Dateien bei 6,2", stimmt weiterhin auf die Stelle genau (eb-cola-zero, Kachel).

**2 · `derive-bottles.mjs` Zeile 103 f.: „572 kB" und „288 kB"** (`du` über alle 84 Scheiben beziehungsweise über die 42 nie angeforderten) — heute **576 KiB und 292 KiB**.

**3 · `derive-bottles.mjs` Zeile 105: „437 kB beziehungsweise 217 kB"** (Summe der Dateilängen) — heute **438,6 KiB und 218,9 KiB**.

**Was nachgeprüft wurde und weiter stimmt:** Breitenspanne 0,105–0,145 und Median 0,119 · „innerhalb von 0,3 %" (größte Abweichung heute 0,30 % bei Pink Grapefruit, Exotic liegt mit 0,29 % darunter) · „höchstens 0,39 %" · „alle 84" · „zwölf PNG unter `roh-png/`" (nachgezählt: 12) · 0,4824–0,5103 und 0,780–0,833 in `bottle-axis.mjs` (Exotic liegt mit Höhe 0,7918 mitten drin) · „6,2".

### Die dritte Maßeinheit ist jetzt lokalisiert

**`derive-bottles.mjs` Zeile 222: `const kb = (b) => \`${(b / 1024).toFixed(1)} kB\`` — die Funktion rechnet in KiB und beschriftet KiB als „kB".** Deshalb meldet der Lauf „größte 360 avif: 22.6 kB", während die Datei 23,1 kB lang ist. **Damit ist der Einheitenwirrwarr aus 11.9 keine Beobachtung mehr, sondern eine Zeile.** Die Kommentarzahlen aus Punkt 2 und 3 sind in derselben gemischten Lesart notiert — sie zu korrigieren, ohne die Funktion zu korrigieren, würde den Widerspruch nur verschieben. **Beides gehört in denselben Auftrag, keiner ist gestellt.**

### Nachmessung ohne Schreibvorgang

Claude Code hat `measure()` aus `bottle-axis.mjs` direkt und ausschließlich lesend aufgerufen, statt die Zahlen zu schätzen — kein `npm run bottles`, nichts geschrieben, `git status` unberührt. **Ungefragt offengelegt und richtig so:** Der Auftrag verlangte Befunde, und ein Befund ohne Messung wäre eine Vermutung gewesen.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.10, Zeilen 1727–1754. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
