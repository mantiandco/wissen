# Stand

*Erzeugt von `scripts/stand.mjs` aus `journal/` und `bereiche/` — nicht von Hand ändern; `npm run stand` erzeugt neu. Je Bereich: die Kopfzeile der Bereichsdatei und der jüngste Journal-Eintrag.*

## website

**Bereichsdatei:** Live seit 3. September 2026 auf www.mantiandco.com (Cloudflare Pages, Repositorium mantiandco/website); Technik steht in website/docs/ (gatter, erzeuger, bildstufen, protokoll, inhalte), Vorgänge im Journal. (`bereiche/website.md`)

**Jüngster Eintrag:** 2026-09-11 · 287 · Auftrag 287 — Korrekturen und Feinschliff, dann das Wissenssystem (`journal/2026-09-11-287-korrekturen-feinschliff-und-das-wissenssystem.md`)

**Teil A, Website (mantiandco/website):** Die Gedächtnis-Datei wurde vor der Wanderung berichtigt — Abschnitt 8.9 (die Logo-Dateinamen waren nie vertauscht; die alte Notiz bleibt zitiert), die Nummern 284–287, die Lehre „Zwei Schreiber an einer Datei“ mit der Regel, dass Claude Code ab 287 das Wissen selbst schreibt, und `pending.mjs` nennt beide Seiten. Das Rezept der Wortmarke-PNG liegt als `scripts/wortmarke-png.mjs` im Repositorium (`npm run wortmarke`, byteidentisch zur committeten Datei, md5 945ebee0d41d564bdc1685cd320c7c6c). `astro check` ist das dreizehnte Gatter (`typen`, streng: Fehler, Warnungen und Hinweise lassen es fallen; 71 Dateien, rund sechs Sekunden); dabei ein Typfehler seit 277 (Standort.astro gab der Karte den aufgelösten Block) und zwei Hinweise behoben. `npm audit fix` ohne Bruchwechsel zog js-yaml und svgo nach; sharp 0.35.4 wurde im Worktree geprüft und nicht übernommen: 248 AVIF-Dateien (83 Teller, 165 Szenen) fallen anders aus, 27 Prozent kleiner, mittlerer Pixelabstand 4,8 von 255 — Taibs Entscheidung. Die Technik steht jetzt wörtlich aus dem Archiv neben dem Code in `docs/` (gatter, erzeuger, bildstufen, protokoll, inhalte), `CLAUDE.md` und `WISSEN.md` verweisen; `PROJEKTGEDAECHTNIS.md` ist aus dem Website-Repositorium entfernt.

## shop

**Bereichsdatei:** Bestellt wird im eigenen Shop von Foodamigos unter bestellen.mantiandco.com; die Website verweist dorthin und schließt keinen Vertrag. (`bereiche/shop.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## infrastruktur

**Bereichsdatei:** Domain mantiandco.com (Zone bei Cloudflare in Taibs Konto, Registrierung IONOS), Website auf Cloudflare Pages aus mantiandco/website, Shop-Subdomain bestellen.* bei Foodamigos (TLS dort), Mail siehe Archiv 13.6; keine Geheimnisse hier. (`bereiche/infrastruktur.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## rechtstexte

**Bereichsdatei:** Deutsch ist verbindlich; Impressum und Datenschutzerklärung stehen auf der Website, AGB und Widerruf gehören in den Foodamigos-Checkout; Anwalt für Shop-AGB, Widerruf und Datenschutz-Gegenlese steht aus. (`bereiche/rechtstexte.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## marke

**Bereichsdatei:** Wortmarke „MANTI / & CO.“ und Signet „M& / CO.“ liegen als SVG im Website-Repositorium (src/assets/brands/MC/), Farben in tokens.css (#20201f, #f6f4ec), Sprachregeln in REGELN.md. (`bereiche/marke.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## kennzeichnung

**Bereichsdatei:** Halal ohne Ausnahme, Kennzeichnung nach LMIV je Gericht, Lieferantenauskünfte belegen jeden Chip; offene Herstellerfragen halten das diet-Gatter rot (6 Angaben, Stand 287). (`bereiche/kennzeichnung.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## marketing

**Bereichsdatei:** Hebel außerhalb des Codes laufen nach `Hebel-ausserhalb-des-Codes.md` (Projektwissen, nicht im Repositorium); der Ausgangswert der Search Console vor dem Livegang steht unten, spätere Messungen im Journal. (`bereiche/marketing.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## restaurant

**Bereichsdatei:** Ein Restaurant ist geplant, Gespräche laufen (Taib, 1. September 2026, im besten Fall drei bis vier Monate); auf der Website steht nur „geplant“, ein Datum aus Gesprächen nicht. (`bereiche/restaurant.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)

## firma

**Bereichsdatei:** MANTI & CO. GmbH, Mannheim — Produktionsküche ohne Gastraum, Lieferung und Abholung; Stammdaten und Liefergebiete stehen unten, Betrieb und Aufträge im Journal. (`bereiche/firma.md`)

**Jüngster Eintrag:** (kein Journal-Eintrag)
