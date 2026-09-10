---
datum: 2026-09-01
nummer: 263
bereich: website
typ: auftrag
autor: archiv
archiv: 11.36
---
# Auftrag 263 — Tranche 4b, die zwanzig übrigen Gerichte, mit Sammel-Nachtrag


**Gelandet über drei Sitzungen, neun Commits, zehn grün.** Fünfzehn deutsche Berichtigungen (12 Gerichte), Churros zurück auf vegan, sieben Punkte Sammel-Nachtrag, 65 Titel- und 105 Prosa-Hüllen englisch. `dishes.json` ist damit bis auf die Kennzeichnung zweisprachig.

**Zwei Kontextenden, null Rekonstruktion.** Die Sitzung von Claude Code war seit Projektbeginn dieselbe — über vierzig Aufträge — und lief während 263 zweimal voll. Die Übergabe nach Protokoll (Abschnitt 18.1) hat getragen: Erledigtes per `git log` und Diff gegengeprüft, Offenes in Auftragsreihenfolge. Getragen haben abgenommene Tafeln in `/tmp` mit Zählassertionen, Hash-Listen je Zwischenstand, ein Commit je Abschnitt. Gekostet: ein Bytevergleich im falschen Format, ein Hintergrundlauf, der bis zum Ende puffert. **Wiederaufnahme war Messen, nicht Erinnern.**

**Churros (§3.1):** `diet` vegan, Vegan-Bestand 13 → 14; die drei Nutella-Einträge in `allergensOptional`, Muster Pommes. `diet-check` bleibt bei 24, ohne Ausnahme. Am Dokument: `/vegan/` trägt die Churros-Kachel, der Proof zählt „14 Gerichte vegan", `/zutaten/` „Dazu 14 vegan." — die Zahlen liefen mit, weil sie aus Daten kommen.

**Sammel-Nachtrag:** g) Gedächtnis als erster Commit (`f2befaf`), `.gitignore` trug keinen Eintrag. a) Sieben Literale auf `{city}` — das achte war „Mannheimer" und blieb; `deliveryNote` füllt aus `business.city`, die Standort-Überschrift aus `location.city`: heute derselbe Wert, **zwei verschiedene Fakten** (Franchise). b) Der Ruhetag-Satz stand immer richtig — „kein" war ein Tippfehler im 261er-Bericht. c) `translatedNote.de` optional: ein zweiter Leerzustand neben pending, mit Schema, `t()`-Wurf und `sprache`-Zählung. d) `menu.intro` — siehe Fehler unten. e) keine Änderung. f) Schutzkommentar an `.best`, 0 Byte am Bau.

**Meine Fehler:** §3.2d diktierte den mechanischen Singular für `menu.intro` — „Manti sind türkische Teigtaschen" ist aber eine Gattungsaussage über die Stücke, die 262 §6 ausdrücklich der Wissens-Tranche vorbehalten hatte. Ergebnis: „Manti **ist eine** türkische Teigtasche" — ein Gericht aus einem Stück, sinnverschoben, sichtbar auf `/speisekarte/`. Berichtigung in 264 mit der Doppelpunkt-Form (Abschnitt 15). §6b vergaß das Feld, das §3.1 selbst anlegt (`churros.allergensOptional`: +1 Schlüssel — 714, en 379/335, de 706/7). §6c traf die Zahl 17, nicht die Menge: `/standorte/mannheim/` blieb bytegleich (Literal → gefüllter Slot), `/zutaten/` fehlte; seine eigene 15 hatte denselben Fehler (Startseiten-Kachel-Chip, `{vegan}`-Slot). **Sichtbarkeitskarten über Slots und Attribute führen, nicht nur über Prosa.**

**Außerhalb des Repositoriums repariert:** `NEW PF/.claude/launch.json` zeigte noch auf die in 260 gelöschte Krücke (`Failed to spawn process`) — 260 hatte den Pfad nur im Repository gesucht. Jetzt nvm-Node, Dev-Server auf 4323.

**Gemeldet:** Die Churros-Kachelzeile „Dazu zwei Portionen Nutella — nicht vegan." steht jetzt auf `/vegan/` (Taibs Wort). Stadt-Literale außerhalb der acht: `faq.json`, beide Ernährungsseiten-Überschriften, `wissen/anderes.json`, `meta.json` 7×, `routes.ts` 8 Titel, `site.ts`, `map.json` — Rückstand für den Tag der zweiten Stadt; die Titel tragen „Mannheim" absichtlich. `meta.json:58` wissenManti-Description bleibt der echte Gattungs-Kandidat.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.36, Zeilen 2263–2279. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
