---
datum: 2026-09-09
nummer: 281
bereich: website
typ: auftrag
autor: archiv
archiv: 11.54
---
# Auftrag 281 — Heldenbild mobil, Stufen an einer Stelle


**Gelandet, sechs Commits (ecfd031 → 57d63e9), live nach 93 s.** `src/data/bildstufen.mjs` (+ .d.mts) hält CARD/HERO/SCENE, gelesen von plate.ts, Scene.astro, derive-plates.mjs (vorher drei Listen); der Bau prüft jede srcset-Datei — Gegenprobe: Stufe 900 nur in der Liste → Bau hält mit Fundstelle und Anweisung. Pipeline-Vollauf 185 s, nur 68 neue Dateien, kein Bestandsbild verändert (Rezeptprobe gilt für die ganze Bibliothek). **Stufen:** Hero 560/600/840/1120, Scene 480/720/800/860/1080. Ergebnis DPR 2: / @ 390 → 600er 86,9 kB (vorher 126,4); the-original @ 414/430 → 860er 80,7 kB (vorher 120,6). **Rest:** Hero @ 414/430 px DPR 2 braucht 612/636 px → weiter 840er (126 kB) — 640er-Stufe deckt beide (282); DPR 3 lädt 1120er (168 kB). **Die Messung entschied die Grenze:** / 1 848 ms, /en/ 1 840 ms mobil (fünf kalte Läufe) → **`BUDGET.lcpMobil` = 2500 ms**, Desktop 1800; heroMobil 90 kB bleibt (600er 86,9 — 3 kB Luft: beim nächsten Heldenmotiv Grenze neu herleiten). Ingredients.astro: level-Zweig weg, h1/h2 fest. Meldungen: Stufenprüfung findet fehlende, nicht überzählige Dateien · `astro check` läuft in keinem Gatter · budget-Vollauf 90 min war unvermeidlich (§4 änderte budget.mjs, das im Speicherschlüssel steht).

**Betriebsänderungen (Taib, 9. September) → 282:** Öffnungszeiten **täglich 11:00–21:00** (bisher Mo–Fr 10:30–21:30, Sa–So 12:00–21:30) — Quelle `site.ts`, Ausgaben Standortseite, Fußzeile, JSON-LD, beide Sprachen; außerhalb der Seite Google-Profil, Lieferando, Foodamigos-Shop (Taib, am Tag des Livegangs von 282). **Der Kennzahlen-Streifen unter dem Startseiten-Titel** („Lieferando 4,9 bei über 500 Bewertungen · Google 5,0 bei über 50 · 14 Gerichte vegan, 9 vegetarisch · Mo–Fr ab 10:30 … · Lieferung und Abholung“) **fällt ganz weg**, samt seiner Daten (Bewertungszahlen mit Standdatum — Drift-Risiko erledigt sich); die Google-Zitate (Voices) bleiben. Strukturierte Daten auf AggregateRating prüfen — was der Gast nicht sieht, darf Google nicht bekommen.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.54, Zeilen 2462–2468. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
