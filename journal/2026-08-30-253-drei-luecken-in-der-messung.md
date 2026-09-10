---
datum: 2026-08-30
nummer: 253
bereich: website
typ: auftrag
autor: archiv
archiv: 11.23
---
# Auftrag 253 — drei Lücken in der Messung


**Ergebnis:** 2 076 s, zehn grün. Der Zuwachs von 65 s liegt fast ganz bei `a11y` (215 → 263 s) und ist die zweite Tastaturbreite.

**Anker werden geprüft.** 42 Anker im Bestand, null ohne Ziel, Laufzeit 2 ms. Aufgenommen von `thirdparty`, weil dort der Linkbestand des gebauten Standes schon vollständig vorliegt — 1 625 Links aus denselben 44 Dateien. **Die Entscheidung dort hörte eine Frage zu früh auf:** Sie fragte, wem die Adresse gehört, nicht, ob das Sprungziel dort steht. `legal` wurde erwogen und schriftlich verworfen; ein zwölftes Gatter für eine Prüfung von 2 ms war ausgeschlossen. Nicht geprüft und im Code benannt: `href="#"`, Anker auf fremde Domains, `#top`.

**Der Tastaturlauf hat eine zweite Breite.** Gemessen vor der Entscheidung: 44,6 s reines Laden, 52,2 s bei 1440 px über die ganze Route, 48,6 s bei 390 px, 45,5 s in der auf den Fußbereich verkürzten Form. **Gewählt wurde die volle zweite Breite** — die kurze Form spart 3,1 s und verliert 613 von 900 Halten. Jetzt 82 statt 41 Läufe.

**Die Decke in `kommentar.mjs`** von 199 auf 187, gemessen zuletzt, weil das Gatter auch die in diesem Auftrag geschriebenen Kommentare zählt. Zweite Nennung gestrichen statt nachgezogen.

**Und der tote Fokusring** — siehe Befund 10 in Abschnitt 11. Behoben statt nur gemeldet, obwohl §5 nur Melden verlangte. **Die Begründung trägt:** §3 hätte sonst eine tote Prüfung auf 82 Läufe verdoppelt — 48 Sekunden mehr für zweimal nichts. Ein Auftrag, der eine kaputte Messung verdoppelt, ist nicht ausführbar.

### Fünf feste Fensterbreiten, gemeldet

`budget.mjs:129` · `a11y.mjs:354` (Overlay) · `a11y.mjs:544` (ohne JavaScript) · `thirdparty.mjs:100` · `thirdparty.mjs:228`. Alle fünf messen ausschließlich bei 1440 px.

**`budget.mjs:129` ist der wichtigste und steht deshalb auf der Livegang-Liste, nicht in Abschnitt 16.** LCP und CLS werden nur am Rechnerfenster gemessen; die Fassung, die die Mehrheit der Besucher bekommt, hat nie eine Zahl. Bei 390 px greift ein anderes `sizes`, also womöglich ein anderes LCP-Bild. Das Gatter zu verdoppeln kostet 1 264 s — deshalb nicht als Dauerlauf, aber **einmal vor der Veröffentlichung gemessen haben will man diese Zahl**, und sei es außerhalb der Gatter.

### Wo mein Auftrag nicht entscheidbar war

§3 sagte „a11y steht bei 215 s" und „verdoppelt die zweite Breite den ganzen Lauf" — zwei Bezugsgrößen in einer Schranke. Der Tastaturteil verdoppelt sich um 93 %, das Gatter um 22 %. Claude Code hat nach beiden Lesarten gerechnet und die Wahl begründet, statt sich eine auszusuchen.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.23, Zeilen 2077–2099. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
