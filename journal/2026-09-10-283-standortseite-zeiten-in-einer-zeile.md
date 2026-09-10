---
datum: 2026-09-10
nummer: 283
bereich: website
typ: auftrag
autor: archiv
archiv: 11.56
---
# Auftrag 283 — Standortseite: Zeiten in einer Zeile


**Gelandet, vier Commits (9373b01 → f2d2808), live nach 60 s.** `Standort.astro` zeichnet je Band statt je Tag: `<table class="hours">` mit einer `<tr>` je Band — „Mo–So 11:00–21:00“ / „Mon–Sun 11:00–21:00“; bei mehreren Bändern je Band eine Zeile. Weiche `alleTageBelegt` einmal in `lib/hours.ts`, gezogen von Location.astro und Standort.astro. Entfernt: `standort.days` (14 Tagesnamen) samt Schema, `hoursOn()`. JSON-LD unverändert. sprache 833 unverändert — `days` war ein Feld in der Block-Hülle, kein Schlüssel. **Neu auf der Standortseite: der Hinweissatz „Montag bis Sonntag, ohne Ruhetag.“** — er stand dort nie; mein Auftrag sagte „bleibt darunter“, Claude Code baute den beschriebenen Zustand mit der vorhandenen Hülle; Taib entscheidet, ob er bleibt. Meldungen: Bau-Abbruch bei einem Tag ohne Band entfällt (Lücke zeigt sich als pending-Warnung) · bei 1280 Zeitenspalte deutlich kürzer als Adressspalte · **Kanten-Verbreitung: de und en gingen ≈ 30 s versetzt live — bei Live-Gegenproben beide Sprachen einzeln abfragen.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.56, Zeilen 2473–2476. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
