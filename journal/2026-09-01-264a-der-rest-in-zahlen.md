---
datum: 2026-09-01
nummer: 264
zusatz: a
bereich: website
typ: auftrag
autor: archiv
archiv: 11.39
---
# Auszug 264a — der Rest in Zahlen


**218 offene englische Hüllen in zwölf Dateien**, deckungsgleich mit `sprache`: `home.json` 70 (menu 22, dishPage 19, loyalty 12, process 11, je 1 breadcrumbs, ingredients, kitchen, drinks, sides, standort), Wissen 76 (verwandte 29, manti 25, anderes 22), FAQ 34, Ernährung 30 (vegetarisch 16, vegan 14), Legal 4, `meta.json` 4. Der Auftrag hatte den FAQ-Pfad falsch (`copy/faq/faq.json`) und die vier Legal-Dateien vergessen. **Sieben der 218 sind nicht übersetzbar, weil das Deutsche fehlt:** AGB, Datenschutz, Widerruf (Sections und Descriptions) — Anwalt und Hosting. Zwölf deutsche Marker im Baum, davon einer ohne externe Daten schreibbar (`ingredients.marks`: die vierzehn Allergene und die Zusatzstoffklassen im Gesetzeswortlaut) und einer, der Herstellerdaten braucht (`sides.marks`).

**Sichtbarkeit:** `dishPage` rendert auf allen 27 Gerichtseiten und in den Overlays; `breadcrumbs.label` auf allen Routen; `video` nirgends (geparkt); AGB, Datenschutz, Widerruf sind keine Routen, solange ihr deutscher Text fehlt (`legal.ts`).

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.39, Zeilen 2301–2307. Datum aus dem Commit, der den Abschnitt anlegte.*
