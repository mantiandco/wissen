---
datum: 2026-08-29
nummer: 246
bereich: website
typ: auftrag
autor: archiv
archiv: 11.16
---
# Auftrag 246 — gelaufen, fünf Commits, Vererbung und Bestandsaufnahme


**Ergebnis:** 1 968,5 s über elf Gatter, zehn grün, `diet-check` rot mit 24 statt 26. Fünf Commits `459a7ab` bis `e502f86`.

**Die Combos tragen jetzt eine Ernährungsangabe.** Vorher `diet: null`, damit unter jedem Filter unsichtbar — auch unter dem, den ein Fleischesser antippt, bevor er die Combo bestellt, die auf genau seinem Gericht aufbaut. Gemessen nach der Änderung: **Alle 34 · Fleisch (halal) 7 · Vegetarisch 27 · Vegan 16**, wie vorhergesagt.

**`data-diet` ist weg.** Nach 245 hatte es keinen Leser mehr; das wurde vor dem Entfernen geprüft (kein CSS-Selektor, kein Skript, kein Gatter) und danach am gebauten HTML belegt: null Treffer für `data-diet=`, 70 für `data-diets=`.

**Branntweinessig steht im Wortschatz** (siehe 14.6).

### Der Widerspruch, den dieser Auftrag hinterlässt

**Das Getränk der Combo ist nicht festgelegt.** `content.config.ts:349-361` sagt zum Feld `drink`: „Ein Beispiel, keine Festlegung — bestellt wird frei aus dem Sortiment." Der Auftrag hat die Angabe der Combo trotzdem aus Gericht **und** Flasche abgeleitet, weil ich im Chat behauptet hatte, jede Combo habe ein fest zugeordnetes Getränk. Das stand so nicht in den Daten; ich hatte es aus einem Wert geschlossen und den Kommentar daneben nicht gelesen.

**Richtig ist die einfache Vererbung:** Die Combo trägt den Wert ihres Grundgerichts, das Getränk trägt seinen eigenen. Wenn das abgebildete Getränk nicht das bestellte ist, beschreibt eine Regel, die es einrechnet, das Foto statt das Essen — und ab dem ersten Milchgetränk zeigte eine Combo „vegetarisch", obwohl der Gast sie mit einer veganen Limonade bestellt. Das ist nicht vorsichtig, sondern falsch. Heute folgenlos, weil alle vierzehn Getränke `vegan` tragen. **Gehört zurückgebaut, solange es folgenlos ist.**

Claude Code hat außerdem gemeldet, dass er über den Wortlaut hinausging: `WEITE` ist dreistufig mit halal am weitesten angelegt, damit ein halal-Getränk nicht stillschweigend eine vegane Combo ergibt. Mit dem Rückbau entfällt das.

### Die Bestandsaufnahme

**`src/assets/` — 116 Dateien, 286,8 MiB. Davon haben 272 MiB einen Leser**: die Ableitungsskripte für Teller und Flaschen. **Ohne Leser sind 14,8 MiB, und 10,8 davon sind `pf-teller.psd`.**

**Das Repository ist nicht unordentlich, es trägt die Bildproduktion mit sich.** Ein Aufräumen brächte real rund vier Megabyte roher Flaschenbilder. Diese Zahl gehört festgehalten, damit die Frage nicht alle paar Wochen neu gestellt wird.

**`public/` — 537 Dateien, 19,1 MiB, alle im gebauten Ordner.** Davon 494 im HTML oder CSS angefordert, 43 nie: `robots.txt` und 42 Flaschenscheiben für sieben Getränke, die keine Combo zeigt. Dieselben 42 und dieselben sieben Namen, die `derive-bottles.mjs:99-101` seit dem 25. August festhält.

**Bei `pf-teller.psd` sagt er ausdrücklich „weiß ich nicht".** Kein Leser, aber auch kein Beleg, wovon die Datei die Vorlage ist; ein `pf-teller.png` existiert nirgends. Das ist die richtige Antwort an dieser Stelle — auf dieser Liste wird über Löschungen entschieden, und eine falsche Einstufung wäre teurer als ein Eingeständnis.

### Vier Meldungen

**1 · Die Fehlerklasse aus 245 hat vier Mitglieder, mein Auftrag nannte zwei.** Neben `DishCard.astro` geben `[menu]/[dish].astro:213` und `Bestseller.astro:115` weiter den rohen Datenwert als Chip aus. Im gebauten HTML: **34 unbeschriftete Chips gegen 126 beschriftete**, und `sprache.mjs` sieht keinen davon.

**2 · Der Chip der Combo bleibt leer, ihr Filterwert nicht.** `DishCard.astro:82` bindet die Aufschrift an den rohen `diet`-Wert, der bei Combos `null` bleibt, während `data-diets` aus dem abgeleiteten Wert kommt. Die Combo lässt sich filtern und trägt kein sichtbares Zeichen — **genau das, was die Entscheidung vom 28. August verhindern sollte.**

**3 · `map.mjs` schreibt weiter in einen Ordner, den es nicht mehr gibt.** `npm run map` legt `src/assets/map/` per `mkdir` neu an und füllt es. Die Renditen sind entfernt, der Erzeuger steht.

**4 · Ein Kommentar behauptet etwas, das die Dateien widerlegen.** `derive-bottles.mjs:51` begründet den Verzicht auf Freisteller damit, für Cola und Cola Zero existiere keiner. Es existieren welche — `roh-webp/eb-cola.png` und `eb-colazero.png`, nachgemessen mit derselben Deckung, die derselbe Kommentar zwei Zeilen früher nennt. Als Aussage über den Ordner stimmt der Satz, als Aussage über das Sortiment nicht. Er trägt ein Argument einer Gestaltungsentscheidung.

### Ein Fund, den niemand gesucht hat

**`public/fonts/` steht nicht in git.** Die drei woff2 werden ausgeliefert, entstehen aber aus `npm run fonts`. **Ein frischer Klon baut eine Seite ohne Schriften**, wenn dieser Schritt nicht läuft. Das gehört in die Livegang-Liste, bevor jemand auf einem Server auscheckt.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.16, Zeilen 1941–1983. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
