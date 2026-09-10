---
datum: 2026-09-01
nummer: 264
bereich: website
typ: auftrag
autor: archiv
archiv: 11.37
---
# Auftrag 264 — Tranche 4c, die Kennzeichnung


**Gelandet, sechs Commits, zehn grün.** Drei Berichtigungen (`menu.intro` in Doppelpunkt-Form; Croutons-Spuren von `allergensOptional` nach `allergensTraces`, neues Feld; „Bulgur (Weizen)" 2×), dann 118 Hüllen aus dem Wörterbuch erzeugt — 90 Kennzeichnung, 14 Combos, 14 Getränke; 376 Elemente, 0 Abbrüche, 135 von 139 Einträgen verwendet, vier unverwendet mit Grund. **Danach keine pending-Hülle mehr in `dishes.json` und `drinks.json`.** `sprache`: 715 Schlüssel, de 707/7, en 497/218.

**Die Gatteränderung (`921fab5`, nach Rückfrage):** Die Zutatenprüfung in `sprache` verglich Allergenvermerke in Klammern als **Wortlaut** — und war **nie gegen echte englische Listen gelaufen**, weil Englisch bis 264 immer pending war. Mit übersetzten Listen fiel sie strukturell (11 Gerichte). Claude Code fragte statt zu biegen; Entscheidung: Strukturvergleich — je Position Klammerzahl und Gliederzahl, sprachneutral — mit Kommentar (Zweck, Fallgeschichte, Wortlaut ist Wörterbuchsache) und drei Gegenproben: Klammer entfernt → rot, Element entfernt → rot, Tausch verschiedener Klammerzahl → rot; **Tausch gleicher Klammerzahl → grün** — das sieht die Struktur nicht. Getragen hat es der Eins-zu-eins-Abgleich aus §5e: eine einmalige Prüfung, kein Gatter. Und das Wörterbuch liegt in `/tmp`. → Nachtrag 264b: Wörterbuch ins Repository, Gatter prüft `en[i]` gegen den Wörterbuchwert von `de[i]` — eine Wahrheit.

**Anhang-II-Tafel:** acht von vierzehn Allergenen im Bestand (Gluten, Ei, Soja, Milch, Schalenfrüchte, Sellerie, Senf, Lupine); nicht im Bestand: Krebstiere, Fisch, Erdnüsse, Sesam, Sulphite, Weichtiere.

**Meine Fehler:** 116 statt 117 Hüllen (gezählt statt nachgezählt; er maß vor dem Edit); `budget` 5 statt 6 — **`/vegetarisch/` fehlte, zum dritten Mal eine Ernährungsseite**; „zwei Backtriebmittel-Reihenfolgen" waren drei; „zwei unverwendete Einträge" waren vier. Die Gatterkollision war nicht vorhergesehen — „zehn grün" war ohne Gatteränderung unerreichbar.

**Gemeldet:** Milchträger ohne Klammer in der Zutatenzeile — Butter (bulgur-bites), Hirtenkäse (crispy-cheese-rolls, griechischer-salat, melted-heart); alle vier führen Milch im Allergenfeld, die Zeile selbst nennt es nicht (Klasse K2). bulgur-bites führt Milch zugleich als Allergen und als Spur — Zutat und Spur widersprechen sich. Schreibweisen der Herstellerlisten (Salz/Speisesalz, Ei/Eier/Vollei, drei Backtriebmittel-Fassungen) bleiben Wortlaut.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.37, Zeilen 2280–2292. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
