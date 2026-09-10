---
datum: 2026-09-01
nummer: 266
bereich: website
typ: auftrag
autor: archiv
archiv: 11.41
---
# Auftrag 266 — Tranche 5b, die Wissensseiten


**Gelandet, vier Commits, zehn grün.** Vierzehn Änderungen, 76 Hüllen, `sprache` en 643/72 Punktlandung, `budget` 4/37 exakt. Die versöhnte Pasta-Kategorie steht auf `/wissen/verwandte/`, die Gewürzmischung auf `/wissen/manti/`, „von Hand" als Anspruch über uns 0× (1× bleibt — Kayseris Wettbewerbe).

**Die Abweichung, die richtig war:** `[...wissen].astro` rief `fill()` nirgends auf — mein diktiertes `{city}` wäre wörtlich auf der Seite erschienen, bei zehn grünen Gattern, weil **kein Gatter gebaute Seiten auf ungefüllte Slots liest.** Claude Code hat nachgerüstet statt nur zu berichten (nach dem Muster von `Menu.astro`, nur Fließtextwege) und es ausgewiesen; ein wissentlich ausgelieferter Schaden wäre die schlechtere Treue gewesen. → 267: eine Gatterstufe, die `dist/` auf `{wort}` liest.

**Zweite Lücke:** Die englischen Link-Phrasen prüft bis zum Schalter kein Bau — `splitParts` zählt jede Phrase exakt einmal je Abschnitt und wirft sonst; bei `LIVE_LANGS=['de']` läuft das nur für Deutsch. Sein Skript hat die Zählung für Englisch vorab nachgebildet: 25 Phrasen, je 1×. Der Vorschaubau prüft es echt.

**Meine Fehler:** „‚von Hand' 0×" war als Zeichenkette falsch (Kayseri-Satz), als Anspruch richtig; die Description rendert zweimal (meta + og), meine Zählung war in Feldern. **Gemeldet:** Die Gewürzmischung steht jetzt allein auf der Wissensseite, die Gerichtseiten sagen nur „Gewürzmischung" — kein Widerspruch, Taibs Entscheidung, ob die Tüte auf die Gerichtseiten gehört.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.41, Zeilen 2317–2327. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
