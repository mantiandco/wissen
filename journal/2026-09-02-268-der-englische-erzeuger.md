---
datum: 2026-09-02
nummer: 268
bereich: website
typ: auftrag
autor: archiv
archiv: 11.43
---
# Auftrag 268 — der englische Erzeuger


**Gelandet, sechs Commits (12a3752 → 9ffdee9), Hauptbaum zehn grün.** Die Bauweise: ein Top-Level-Rest-Parameter je Seitenfamilie (12 Dateien), jede fragt `builtPaths(key)` über `builtLangs` = LIVE_LANGS ∩ vorhandener Routentext. **„Englisch live schalten heißt seither: ein Eintrag in LIVE_LANGS, sonst nichts."** Zwei `fill`-Fehler dabei behoben (Standort, Kitchen): zwei Sprachfassungen dürfen verschiedene Slots fragen. Das Schloss bleibt: pending hält den Bau der jeweiligen Sprache an.

**Vorschaubau:** 85 Dokumente (41 en + 44 de), Bau in 1,9 s, Sitemap 82. Gatterlauf 65 min: `sprache` **grün** über 164 Routenfassungen — hreflang paarweise mit x-default, Canonical je Sprache, die 25 englischen Link-Phrasen halten im echten Bau; `diet` 24. **Neu rot, beides Gatterfehler, keine Seitenfehler:** `legal` (40 — sucht wörtlich `/impressum/`, Z. 209) und `teilbild` (14 — Gerichtseiten-Muster kennt `/en/menu/` nicht, Z. 171); dazu elf Sollwert-Konstanten, die im Zweisprachen-Bau unter dem Bestand liegen. Zehn Adressen alle 200: /, /en/, /en/menu/, /en/menu/the-original/, /en/vegan/, /en/locations/mannheim/, /en/about-us/, /en/faq/, /en/rewards/, /en/imprint/.

**Sichtbar Deutsches im en-Bau — und die Messlücke:** Der Bericht fand „genau zwei" (Skip-Link „Zum Inhalt springen", Base.astro:211; Rabattband `promo.text`, site.ts:360). **Taib fand einen dritten: „Zentrale" auf der Standortseite, unter der Karte** — die Messung hat ihn übersehen; 269 schließt beide Lücken (Sprachzweige und die Messung selbst). **Entschieden am 2. September: de „Zentrale" bleibt, en „Headquarters".** Und: **Taibs Browser-Messung auf `bestellen.mantiandco.com` ergab „kein Robots-Meta im DOM"** — das vereinbarte `noindex, follow` (B1) fehlt; ein Header ist unbelegt. Schriftliche Erinnerung an Foodamigos formuliert; bis zur Bestätigung bleibt B1 offen (Abschnitt 16).

**Anker geprüft zur Bauzeit** (astro:build:done, weil das Ziel beim Zeichnen noch nicht geschrieben ist): 44 bzw. 88 Anker, Gegenprobe hält den Bau mit Fundstelle; die `/vegan/`-Verweise zeigen auf `/speisekarte/#dazu` und `/en/menu/#dazu`. Mein „FAQ-Anker ungeprüft" war veraltet — `thirdparty` prüft Anker seit ~253; neu ist der Halt im Bau selbst. **Schriften im Repository** (drei woff2, OFL-1.1-Lizenzen, @fontsource-byteidentisch) — von der Livegang-Liste gestrichen. **Bestellziele auf `bestellen.mantiandco.com`** (`order.shop.href`, `promo.href`), Regel: Subdomain der eigenen Domain ist eigen, Bestellknopf bleibt im selben Tab. **`noindex` per curl unmessbar** — Vercel Challenge Mode (429) blockt jeden Nicht-Browser; Punkt B1 bleibt unbelegt, messbar nur in Taibs Browser oder per schriftlicher Bestätigung von Foodamigos. `impressum.description` de 114 / en 115 — der letzte Schlüssel außerhalb der Rechtstexte.

**Zu prüfen (269 §0):** Der Bericht endet mit „Gedächtnis nachgeführt / Erinnerungen gespeichert" — vermutlich Claude Codes eigener Sitzungsspeicher; ob `PROJEKTGEDAECHTNIS.md` seit `12a3752` berührt wurde, zeigt das git-Log — Ein-Schreiber-Grundsatz.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.43, Zeilen 2341–2353. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
