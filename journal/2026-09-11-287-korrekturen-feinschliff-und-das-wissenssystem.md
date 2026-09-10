---
datum: 2026-09-11
nummer: 287
bereich: website
typ: auftrag
autor: claude-code
betrifft: [gedaechtnis, wortmarke, gatter, sharp, docs, wissenssystem, wanderung]
---
# Auftrag 287 — Korrekturen und Feinschliff, dann das Wissenssystem

**Teil A, Website (mantiandco/website):** Die Gedächtnis-Datei wurde vor der Wanderung berichtigt — Abschnitt 8.9 (die Logo-Dateinamen waren nie vertauscht; die alte Notiz bleibt zitiert), die Nummern 284–287, die Lehre „Zwei Schreiber an einer Datei“ mit der Regel, dass Claude Code ab 287 das Wissen selbst schreibt, und `pending.mjs` nennt beide Seiten. Das Rezept der Wortmarke-PNG liegt als `scripts/wortmarke-png.mjs` im Repositorium (`npm run wortmarke`, byteidentisch zur committeten Datei, md5 945ebee0d41d564bdc1685cd320c7c6c). `astro check` ist das dreizehnte Gatter (`typen`, streng: Fehler, Warnungen und Hinweise lassen es fallen; 71 Dateien, rund sechs Sekunden); dabei ein Typfehler seit 277 (Standort.astro gab der Karte den aufgelösten Block) und zwei Hinweise behoben. `npm audit fix` ohne Bruchwechsel zog js-yaml und svgo nach; sharp 0.35.4 wurde im Worktree geprüft und nicht übernommen: 248 AVIF-Dateien (83 Teller, 165 Szenen) fallen anders aus, 27 Prozent kleiner, mittlerer Pixelabstand 4,8 von 255 — Taibs Entscheidung. Die Technik steht jetzt wörtlich aus dem Archiv neben dem Code in `docs/` (gatter, erzeuger, bildstufen, protokoll, inhalte), `CLAUDE.md` und `WISSEN.md` verweisen; `PROJEKTGEDAECHTNIS.md` ist aus dem Website-Repositorium entfernt.

**Teil B, das Wissen (mantiandco/wissen):** Form nach dem Bauplan — README, VISION, REGELN, Journal, Entscheidungen, Lehren, Bereiche, Archiv, `scripts/pruefen.mjs` (Gatter mit Selbsttest, 13 Proben, Geheimnisliste als Wortprüfsummen und Muster) und `scripts/stand.mjs` (STAND.md und OFFEN.md, deterministisch). Die Wanderung lief per Skript (`scripts/wanderung.mjs`) aus der eingefrorenen Datei: 59 Journal-Einträge aus den Abschnitten 11.x (Datum aus dem Landungs-Commit des Auftrags), 62 Lehren aus 17, neun Bereichsdateien, Entscheidungen aus 15, 4 und den „entschieden“-Sätzen mit wörtlichem Beleg; die Restliste im Archiv nennt jeden nicht zugeordneten Absatz mit Grund. Dieser Eintrag ist der erste mit autor claude-code.

## Offen
- Die vier Wortprüfsummen der Gewürzmischung in `scripts/geheimnisse.mjs` eintragen (`npm run geheimnis -- <wort>`, nur die Prüfsumme) — Taib; bis dahin prüft der Geheimnis-Teil nur die Muster.
- Abschnitt 8.9 des Archivs ist berichtigt; die Entscheidung „sharp 0.35“ (27 Prozent kleinere AVIF, andere Bytes) — Taib.
- Website, Code: pages.dev per Access-Policy schließen (Taib-Klick + Beleg) · Hero DPR 3 (1120er 168 kB) · Nährwerte (bei allen 27 null) · Hauptversionen aus `npm audit` (astro ≤ 7.2.7 critical, puppeteer, esbuild — je eigener Auftrag mit Byteprobe) · diet-Gatter rot, bis die vier Herstellerfragen beantwortet sind.
- Außerhalb des Codes: Öffnungszeiten bei Google, Lieferando, Foodamigos auf 11–21 täglich; Google-Unternehmensprofil (Website-Link, Bestell-Link auf bestellen.*); Rechtstexte zum Anwalt (Shop-AGB, Widerruf, Datenschutz-Gegenlese); Foodamigos-noindex nachhalten; Woche 1 der Hebel-Liste; Restaurant-Horizont.
- Für den Chat: Taib legt `STAND.md` und `OFFEN.md` ins Projektwissen, bis ein Zugang das ersetzt.
