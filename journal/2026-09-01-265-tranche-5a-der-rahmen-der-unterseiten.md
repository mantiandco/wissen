---
datum: 2026-09-01
nummer: 265
bereich: website
typ: auftrag
autor: archiv
archiv: 11.40
---
# Auftrag 265 — Tranche 5a, der Rahmen der Unterseiten


**Gelandet, vier Commits, zehn grün.** Achtzehn deutsche Änderungen, die Wörterbuch-Bereinigung (141 → 135, Gegenprobe: „Butter" ohne Klammer fällt mit Zeichenkette), 70 englische Hüllen — `sprache` en 567/148, Punktlandung. §2.18 gemessen statt geraten: `.ph` war reine Optik (gestrichelter Platzhalter, kein Verweis), die zwei Felder entfielen in Schema, Copy und Bauteil.

**Mein Fehler, der wiegt:** Der neue Fußtext auf `/zutaten/` behauptet „Allergene, Zusatzstoffe **und Nährwerte** stehen bei jedem Gericht" — `nutrition` ist bei allen 27 Gerichten `null`, die Tabelle rendert nirgends. Ich hatte aus Tabellenbeschriftungen (`dishPage`: „Nährwerte je 100 g") auf Daten geschlossen. **Beschriftungen sind keine Daten** (Prüfpunkt 2). Berichtigung in 266. Dazu: `budget` 40/1, nicht 41 — die Startseite rendert keinen Krümelpfad; die 264a-Karte trug denselben Fehler. „Sechs Nicht-vegan-Zeilen" waren sachlich sechs, als Zeichenkette fünf (Pesto kleingeschrieben).

**Gemeldet:** `/vegan/` behauptet an zwei Stellen („Bei jeder Sauce steht, was drin ist", „an jedem Zusatz steht, was er mitbringt"), was die Beilagenliste seit 265 einlöst — Anker `/speisekarte/#dazu` existiert; für 5c. Die Käse-Zeile ließe sich nicht sinnvoll ableiten (deklinierte Namen), aber eine Leseprüfung in `sprache` könnte Drift melden. Die Gästezitate führen „homemade"/„fresh" im Englischen — wird die Wortprobe je Gatter, brauchen Zitate eine Ausnahme. kJ/kcal stehen im `unit`-Feld, das doppelte Label „Energie" ist die LMIV-Doppelform.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.40, Zeilen 2308–2316. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
