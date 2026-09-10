---
datum: 2026-08-28
nummer: 244
bereich: website
typ: auftrag
autor: archiv
archiv: 11.14
---
# Auftrag 244 — gelaufen, fünf Commits, elf Gatter, fünf Funde


**Ergebnis:** Gesamtlauf 1 966,3 s über elf Gatter. `diet-check` rot wie angekündigt — 26 unbelegte Ernährungsangaben, Ausgabe wortgleich mit dem 243er-Lauf, dabei 27/27 Gerichte, 7/7 Kombinationen, 14/14 Getränke geprüft. Die übrigen zehn grün. 43 Dokumente, Bauzeit 2,4 s.

**Alle vier Sollwerte gemessen statt abgeschrieben**, alle vier wie erwartet: `sprache.mjs:69` = 80 (40 Routen × 2 Sprachen), `sprache.mjs:74` = 43, `anrede.mjs:61` = 13, `anrede.mjs:62` = 47. Die neue `wissenManti.description.de` hat 152 Zeichen — unter der Meldeschwelle 155.

**Die Umbenennung ist durch.** `dietLink` → `copyLink`, `src/lib/diet.ts` → `src/lib/copy-links.ts` (`7fb097c`). Belegt durch eine Prüfsumme über den ganzen `dist`-Baum vor und nach der Umbenennung — identisch; Gegenprobe über den alten Importpfad hält den Bau an. **`dietDishes()` ist dabei nach `src/lib/dish.ts` gezogen**: Eine Datei namens `copy-links.ts`, die Gerichte filtert, wäre am Tag ihrer Einführung zur Hälfte falsch benannt gewesen. `dietLinks` in `home.json` bleibt — dort stimmt der Name.

**Fünf Commits statt zwei.** §11 setzte Grenzen, keine Zahl; die Lehre aus 243 hat gegriffen. `c0a74c2` ist eine nachgereichte Verbesserung an `43009e9`, ohne `--amend` und ohne Verwerfen.

### Die Meldeliste

**1 ·** `sprache.mjs:598` sagt, der Sollwert stehe „unten fest" — die Konstante steht auf Zeile 74, also oben. Die Zahl wurde gezogen, das Wort nicht, weil §9 nur die Sollzahlen freigab. **Gehört in 245.**

**2 ·** Drei überholte Zahlen im Kopf von `anrede.mjs`, selbst erzeugt, ungefragt gemeldet und behoben — **nicht durch neue Zahlen, sondern indem die instabilen verschwinden.** Die Fundstellenzahl nennt jetzt die Gatterausgabe, nicht der Kommentar.

**3 ·** „neben den sechs Abschnittstiteln" in `[...wissen].astro`, Auslassung aus 243: Seit der Teilung des Regionen-Abschnitts sind es sieben, und für `/wissen/verwandte/` mit neun hat der Satz nie gestimmt. Trägt jetzt gar keine Zahl mehr und gilt damit auch für die nächste Wissensseite.

**4 ·** Diese Datei nannte an vier Stellen `src/lib/diet.ts`. **Berichtigt sind drei** — Zeile 8 (Mindestbestand), die Bibliotheksliste in 8.8 und der `splitParts()`-Absatz in 8.10. Das sind lebende Verweise. **Die Stellen in 11.11 und 11.13 bleiben stehen:** Sie sind Aufzeichnung — der Auftragstext und die Entscheidung, die zur Umbenennung führte. Dort ist der alte Name richtig, und wer ihn ändert, fälscht das Protokoll.

**5 ·** `dishes.json[7].intro.de` nennt den Joghurt und nicht die Tomatensauce. **Die zwölfte Stelle.** Gefunden über einen Lauf durch alle JSON unter `src/content`, der jeden String sucht, der Joghurt oder Butter nennt und keine Sauce: 47 Treffer roh, fünf nach dem Aussortieren, drei davon zu Recht ohne. Freigegeben am 28. August, Einbau in 245: „Der Klassiker. Kleine Teigtaschen mit Rinderhack, halal, auf Joghurt, darüber Tomatensauce."

### Wo der Auftrag falsch war

**§4, `Footer.astro:158`.** Diktiert war „dreiundvierzig", richtig sind vierzig. Der Satz handelt davon, auf wie vielen Seiten das Stylesheet mitläuft — die drei Weiterleitungsseiten tragen weder Fußzeile noch Stylesheet noch ein `<style>` und sind 338 bis 371 Bytes groß. Claude Code hat sie aufgemacht, gemessen, „vierzig Seiten" geschrieben und einen Satz zur Differenz danebengestellt. **Hätte er gehorcht, stünde dort eine Behauptung über CSS, die drei Dokumente widerlegen.** Die Unterscheidung Seiten (40) gegen Dokumente (43) bleibt gewahrt, nur andersherum aufgelöst als diktiert.

**§3 war zu eng, nicht falsch.** Vier der geprüften Stellen in `routes.ts` sagten bereits „vier Einträge"; nur Zeile 131 stand auf `Five items`.

### Vier Funde am Bericht selbst

**~~Die Gegenprobe zum Sollwert prüft nur eine Richtung.~~ Der Einwand war falsch, nachgelesen am 29. August in `scripts/umfang.mjs`.** `umfang()` kennt drei Fälle: null Geprüftes fällt durch, weniger als der Sollwert fällt durch, mehr gibt eine Warnung und lässt passieren. `ist` ist die Zahl der Dateien, die das Gatter **gelesen** hat — eine Datei, die es übersieht, senkt den Wert und bringt es zu Fall. Ein Überschuss heißt, dass alles geprüft wurde und die Konstante hinterherhinkt; eine Warnung ist dafür die richtige Antwort, und der Kommentar sagt es ausdrücklich: „Kein Fehler."

**Was davon übrig bleibt, viel kleiner:** `gates.mjs` schreibt in die Bilanz nur die Urteilszeile jedes Gatters. Eine Warnung in einem grünen Gatter erreicht die Zusammenfassung nicht und liegt irgendwo in 33 Minuten Ausgabe.

**Zeile 8 war nicht eine Fundstelle unter vieren.** Sie ist die Einstiegsanweisung — der Mindestbestand, den die nächste Sitzung als Erstes öffnet. Wer ihr folgte, scheiterte an Schritt eins.

**In 8.10 stand neben dem Dateinamen auch eine Zeilennummer.** Mit dem Auszug von `dietDishes()` hat sie sich verschoben. Gemeldet wurde der Name, nicht die Nummer; sie ist jetzt gestrichen statt geraten.

**Der Gattertisch summiert sich nicht auf seine eigene Summenzeile.** Die Spalte ergibt 1 968,6, die Zeile SUMME sagt 1 966,3. **In 245 aufgeklärt:** SUMME ist die Ausgabe von `gates.mjs` und zählt die elf Gatter, nicht den Bau. Die Bauzeit steht als eigene Zeile im Tisch und fließt nicht ein. Kein Fehler im Skript — der Tisch sagt es nur nicht dazu. Seit 245 sagt er es.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.14, Zeilen 1886–1926. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
