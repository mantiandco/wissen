---
datum: 2026-09-01
nummer: 264
zusatz: b
bereich: website
typ: auftrag
autor: archiv
archiv: 11.38
---
# Nachtrag 264b — das Wörterbuch ins Repository


**Gelandet, fünf Commits, zehn grün.** `src/data/kennzeichnung-woerterbuch.json` (141 Einträge) — nicht `src/content`, wie ich vorgeschlagen hatte: Dort lädt keine Collection eine lose Datei, und `sprache` hätte sie als fünfzehnte Inhaltsdatei gezählt; Präzedenz `map.json`. Die Zutatenprüfung in `sprache` hat jetzt drei Stufen: **Sperre** (deutsche Angabe ohne Eintrag → rot mit Zeichenkette), **Wortlaut** (`en[i]` = Wörterbuchwert von `de[i]`, feldweise), **Struktur** (bleibt, fängt Fehler im Wörterbuch selbst). Gegenproben: der 264er-Tausch gleicher Klammerzahl → jetzt rot; „Kardamom" ohne Eintrag → rot; „bulgur (weat)" → rot.

**Milch in Klammern** (Taib: „Ist ja Allergene"): Butter (bulgur-bites) und Hirtenkäse (crispy-cheese-rolls, griechischer-salat, melted-heart) tragen „(Milch)"; die Reihenfolge Deutsch + Wörterbuch → `sprache` rot (4) → Englisch nachgezogen → grün ist der Beleg, dass die Prüfung Wortlaut sieht. **Die Milch-Spur bei Bulgur Bites bleibt** — sie stammt aus dem Grieß, dessen Hersteller Spuren angibt; mein „Widerspruch" war eine Redundanz. Die Berichtigung erreichte die Sitzung, bevor etwas entfernt war.

**Mein Fehler:** `/vegan/` in der Budget-Karte, obwohl keines der vier Gerichte vegan ist — der Sichtbarkeitssatz gilt je Chip, nicht pauschal. Sechs Dokumente, nicht sieben. **Offen, entschieden für 265:** Die jetzt unverwendeten Einträge (Butter, Hirtenkäse, Bulgur ohne Klammer; Milch (Croutons), Sellerie (Croutons); Nutella als Zutat) werden gestrichen — ein Wörterbuch mit Vorrat ist eine Hintertür, eines ohne ist die Sperre.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.38, Zeilen 2293–2300. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
