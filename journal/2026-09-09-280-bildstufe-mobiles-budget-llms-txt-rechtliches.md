---
datum: 2026-09-09
nummer: 280
bereich: website
typ: auftrag
autor: archiv
archiv: 11.53
---
# Auftrag 280 — Bildstufe, mobiles Budget, llms.txt Rechtliches


**Gelandet, sechs Commits (4e72004 → 5484339), live nach 61 s.** **800er-Stufe** in Scene (480/720/800/1080; 800 statt 780: bedient 390 und 375 px ohne Hochziehen): 390 px DPR 2 lädt jetzt 68,9 kB statt 120,6; Pipeline 30 s, +66 Dateien; Rezeptprobe: neu kodierte 720er byteidentisch zur committeten — die 800er sind echte Pipeline-Ausgaben. **Mobiles budget-Profil:** 390 × 844 px, DPR 2, dieselbe Drosselung; Zeilen LCP/CLS/JS/LCP-Bild mobil; Grenze **LCP-Bild mobil 90 kB** (größte 800er 73 kB + ein Fünftel, gerundet — die 1080er läge darüber, genau die Regression, die rot werden soll); alle 86 Routen; Zwischenspeicher je Label@Profil, **schreibt nach jedem Ziel, abgebrochener Lauf wiederholt sich einmal** (Lehre aus einem 80-Minuten-Verlust bei Taibs Netzausfall). Voller unkachierter budget-Lauf beider Profile: **90 min**; mit Speicher Sekunden. **Fund:** Startseiten mobil rot — Heldenbild `hero-the-original-840.avif` 126 kB, LCP 2240 ms (> 1800): die Scheibe braucht 578 px, Hero-Stufen sind 560/840/1120 → 840er; nicht geändert (Gestaltung, außerhalb §1) → 281. Weitere Meldungen: 414/430-px-Handys laden Scene-1080er (860er-Stufe fehlt) · `Ingredients.astro` trägt denselben toten level-Zweig · Stufenliste doppelt (Scene.astro, derive-plates.mjs). llms.txt 83 Links (Rubrik Rechtliches), Sollwert aus derselben Liste. Menu/Process: level-Prop weg, Ebenen fest, 0 Verstöße.

**Entscheidung für 281 (10. September):** 600er (Hero) und 860er (Scene) ergänzen, Stufenliste an eine Stelle, Ingredients-Zweig raus; **dann messen: bleibt die mobile LCP der Startseite unter 1,8 s, bleibt die Grenze; sonst gilt mobil Googles „gut“ = 2,5 s** (1,8 s war selbst gesetzt; Desktop behält 1,8) — im Gatter kommentiert, keine Verhältnisangabe.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.53, Zeilen 2455–2461. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
