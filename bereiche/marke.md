# marke

Wortmarke „MANTI / & CO.“ und Signet „M& / CO.“ liegen als SVG im Website-Repositorium (src/assets/brands/MC/), Farben in tokens.css (#20201f, #f6f4ec), Sprachregeln in REGELN.md.

*Wörtlich aus PROJEKTGEDAECHTNIS-2026-09-11.md; Abschnittsnummern beziehen sich darauf.*

## Archiv 8.9 — Logos


**MANTI & CO.** — vier Dateien in `src/assets/brands/MC/`:

| Datei | Tatsächlicher Inhalt | viewBox |
|---|---|---|
| `NewLOGO-Wortmarke.svg` | **Wortmarke**, MANTI / & CO. zweizeilig, 2,00 : 1 | 2471,18 × 1236,8 |
| `NewLOGO-Signet.svg` | **Signet**, M& / CO., 1,01 : 1 | 2133,63 × 2110,62 |
| `NewLOGO-Favicon.svg` | M& CO. auf Platte | 3000 × 3000 |
| `NewLOGO-Favicon-M.svg` | M auf Platte | 3000 × 3000 |

**Berichtigt am 11. September 2026 (Auftrag 287, nach dem Bildbefund aus 284/285):** Bis dahin stand hier „**Die Namen der ersten beiden sind vertauscht.** Nicht umbenannt, damit keine Verweise brechen — aber wer sie zum ersten Mal öffnet, muss es wissen.“ — mit einer Tabelle, die die Wortmarke als „Signet, 2133,63 × 2110,62“ und das Signet als „Wortmarke, einzeilig, 2446,38 × 1236,8“ führte. Das war falsch: Die Dateinamen stimmen seit der ersten Aufnahme (f62216a); `NewLOGO-Wortmarke.svg` zeigt „MANTI“ über „& CO.“ (zweizeilig, 9 Pfade), `NewLOGO-Signet.svg` „M&“ über „CO.“ (5 Pfade); 2446,38 war die Breite einer älteren Fassung der Wortmarke (bis de86c95). Logo.astro nutzt beide richtig (`full` = Wortmarke, `short` = Signet). Die alte Notiz bleibt hier zitiert — Anhängen statt Überschreiben beginnt mit diesem Satz.

**Farbe über `currentColor`.** Die beiden Dateien ohne Platte nehmen die Farbe ihrer Umgebung an — hell in der Kopfleiste, dunkel auf Papier. Bei eigenem Logo zulässig, spart alle Farbfassungen.

**Favicon seit 262b: ein Zeichen auf allen Stufen, SVG vorneweg.** `favicon.svg` (byteidente Kopie der Signet-Quelle, 4 022 B) steht im Head vor den drei PNG-Zeilen; `icon-180.png`, `icon-32.png` und `icon-16.png` kommen alle aus dem Signet. Bis 262b kam die 16er aus dem M (Begründung damals: Strichbreite unter einem Bildpunkt) — Taibs Entscheidung vom 31. August: Wiedererkennung vor Strichbreite, bei 16 px liest niemand eine Marke. `NewLOGO-Favicon-M.svg` bleibt als Rückfalllinie liegen, sein Riegel im Skript auch. **Abnahme am Bild ausstehend** (`../262b-sichtprobe.png`). Die PNGs bleiben, weil Safari am Mac SVG-Favicons nicht liest und iOS für Homescreen und Lesezeichen ausschließlich das `apple-touch-icon`-PNG nimmt — dort war die 180er immer scharf.

**Die Kopfleiste ist nicht hell, sondern `.on-ink` mit Weichzeichner.** Eine schwarze Wortmarke hätte dort 1,62 bis 2,55 : 1 erreicht, die Schranke ist 3 : 1. Diese Zuordnung war in 221 falsch berichtet worden und hat Auftrag 222 zu Fall gebracht.

**Elephant Bay:** `elephant-bay-schwarz.svg` und `elephant-bay-weiss.svg`, je 11,8 kB, 15 echte Pfade, aus den gelieferten EPS erzeugt. **Farbe #231F20**, nicht reines Schwarz — der übliche CMYK-Tiefschwarz aus dem Druck. **Nicht umfärben, fremdes Markeneigentum.** Elephant Bay GmbH, Birkenwaldstraße 214, 70191 Stuttgart, HRB 744251.

Das Logo **ist** die Überschrift des Getränkeabschnitts. Der Text „ELEPHANT BAY" bleibt als visuell verborgene Überschrift im Aufbau (`visually-hidden` mit `aria-hidden`, das Logo trägt `aria-label`) — sonst hörten Vorlesewerkzeuge den Namen zweimal.

**Kein Logo im Teilbild.** Solange ein Gericht abgebildet werden kann, ist es die bessere Wahl. **Und das eigene Logo steht nicht im Getränkeabschnitt** — es steht in der Kopfleiste; auf der eigenen Seite muss man sich nicht selbst als Marke ausweisen.

**Farben:** siehe `bereiche/firma.md` (Archiv 5.1, „Markenfarben“) und `src/styles/tokens.css` der Website. **Sprachregeln:** siehe `REGELN.md` (Archiv 3). **Wortmarke für die E-Mail-Signatur:** `https://www.mantiandco.com/img/brand/wortmarke-mail-hell.png`, erzeugt mit `npm run wortmarke` im Website-Repositorium (Journal 284/285/287).
