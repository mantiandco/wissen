---
datum: 2026-09-10
nummer: 284
bereich: website
typ: auftrag
autor: archiv
archiv: 11.57
---
# Aufträge 284/285 — Wortmarke für die E-Mail-Signatur


**Gelandet: 69b6ce0 (300 × 150, 7,4 kB) und 64bc0d5 (800 × 400, 22,0 KB, Stufe 9), live je ≈ 70–80 s** unter https://www.mantiandco.com/img/brand/wortmarke-mail-hell.png. Quelle am Bild entschieden: `NewLOGO-Wortmarke.svg` = „MANTI / & CO.“ zweizeilig (viewBox 2471,18 × 1236,8) — **die Namen in `brands/MC/` sind nicht vertauscht; Abschnitt 8.9 ist am Bild und in git widerlegt** (Rollen gedreht, „einzeilig“ falsch, 2446,38 überholt) und wartet auf Taibs Berichtigung. Rezept: sharp, currentColor → #f6f4ec, `resize({width})`, `png({compressionLevel: 9})`, kein density-Argument; kein Skript im Repo (Meldung). Gegen die gelieferte 300er: gleiche Maße, alle deckenden Pixel gleich, Kanten-Antialiasing, `caBX`-Chunk (C2PA) 5,8 kB in der gelieferten. **Auslieferung unter gleichem Namen:** Pages liefert `/img/` mit `max-age=14400, must-revalidate`, Kante REVALIDATED je Abruf → neue Datei sofort; Browser bis 4 h alt, Mail-Proxys länger; **ohne width/height in der Signatur erscheint die 800er in 800 CSS-px, auch in versandten Mails** (Taib prüft die Signatur). Kein Gatter kennt Dateien unter `public/img/`, die keine Seite lädt. Nummern: Taibs Stand vergab „(284)“ an den Feinschliff; die Commits tragen 284/285.

**Entscheidung (Taib, 11. September) → 286:** Hinweissatz ohne „Ruhetag“: `location.hoursNote.alleTage` de „Montag bis Sonntag.“, en „Monday to Sunday.“; Startseite und Standortseite, beide Sprachen; „Ruhetag“/„closing day“ danach 0× im dist — die pending-Hülle `hoursNote.ruhetag` (Ruhetag-Fall) bleibt unberührt.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.57, Zeilen 2477–2484. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
