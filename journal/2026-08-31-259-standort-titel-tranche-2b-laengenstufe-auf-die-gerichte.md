---
datum: 2026-08-31
nummer: 259
bereich: website
typ: auftrag
autor: archiv
archiv: 11.30
---
# Auftrag 259 — Standort-Titel, Tranche 2b, Längenstufe auf die Gerichte


**Gelandet, vier Commits, jede Zahl traf:** Standort-Titel mit Rubrikwort (48 → 51 / 51), Trio-Titel 64 → 59, 27 `title.en` und 27 `name.en` (`sprache` +54/−54 exakt, je eigene Hülle), `budget` 2 / 39 — genau Trio und Standort. **Die Längenstufe deckt jetzt 108 Gerichtsfelder, 41 Titel und 40 Descriptions;** drei Proben fielen, darunter die Churros-Probe aus 258.

**Der Krümel** lag in `routes.ts`, nicht in `site.ts` — en „Mannheim" → „Location", die Rubrik-gegen-Ort-Asymmetrie aus meinem Diktat behoben. Die 257er-Konstante `mannheimTitle` („eine Anschrift übersetzt sich nicht") ist entfallen, weil ihr Grund nicht mehr trägt.

**Wo `name.en` gelesen wird, wenn der Schalter fällt:** Gerichtseite (Überschrift, Krümel, `alt`, `<title>`-Rückfall, JSON-LD), Kachel, Overlay (liest den DOM der Kachel). Nichts davon ist heute sichtbar.

**Der Fund, der über den Auftrag hinausgeht:** **Der Bau läuft über `../.toolchain/node22` (v22.14.0), weil das System-Node 18.15.0 unter Astros Minimum (≥ 18.20.8) liegt — und das steht nirgends im Repository.** „Ich habe es mir gemerkt." Das ist der falsche Ort: Ein frischer Rechner baut die Seite nicht, und nur einer weiß, warum. Auf der Livegang-Liste; zwei Zeilen im Repository (`engines`, `.nvmrc` oder eine Notiz) im nächsten Auftrag.

**Sonst:** `_redirects` hält `/standort → /standorte/mannheim/` — das Adresswort aus der Begründung steht wirklich im Bestand. Bei Gleichstand 155 nennt die Anzeige das `meta`-Feld zuerst; Befund, kein Fehler.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.30, Zeilen 2179–2191. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
