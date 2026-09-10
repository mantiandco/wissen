---
datum: 2026-08-31
nummer: 256
zusatz: b
bereich: website
typ: auftrag
autor: archiv
archiv: 11.27
---
# Nachtrag 256b — Fußbereich am Rechner starr, Rollbalken überall weg


**Ergebnis:** zehn grün, `budget` 41 gemessen / 0 übernommen — jede Änderung am Fußbereich kippt jedes Dokument, das ist der Preis. Skript 224 → 325 B gzip.

**Am Rechner:** alle fünf Gruppen offen, Klick und Enter wirkungslos, `tabindex=-1`; der echte Tab-Gang zählt 16 Halte statt 21 — die Vorhersage. Größenwechsel in beide Richtungen sauber. Ohne Skript alles offen.

**Am Telefon:** Balken an beiden Reihen fort, Polster weg, 0,0 px Luft unter der Kachelkante, Wischen rastet bei 328 px — **und die nächste Kachel ist 41,7 px angeschnitten**, deckungsgleich mit den 42 px aus 252. Die Aufforderung steht ohne Balken.

**Fünf eigene Messmethodenfehler, alle gefangen und benannt:** eine `getClientRects`-Heuristik zählte Links in geschlossenen Gruppen als Tabstopps (21 statt 7) → echter Tab-Gang · `scrollLeft` direkt nach Zuweisung ergab 0, weiches Rollen ist asynchron → 500 ms Wartezeit · Tab-Gang mitten im Dokument gestartet (15 statt 16) → frischer Aufruf · 120-px-Wisch schnappte unter halber Kachel zurück → 400-px-Stoß · „Überstand" war doppeldeutig → sichtbar und verdeckt getrennt.

**Eine Eigenschaft des Gatters, keine Regression:** Die Tabstoppzahl der Startseite bei 1440 streut um ±1, weil die Pfeilknöpfe der Streifen je nach Rollstand im Moment des Passierens `disabled` sind. Wer eine 47 gegen eine 46 als Fehler liest, liest falsch. `contrast` und `hover` messen die Gruppenüberschriften weiter, obwohl sie keine Tabstopps mehr sind — zu viel prüfen ist die richtige Richtung.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.27, Zeilen 2143–2154. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
