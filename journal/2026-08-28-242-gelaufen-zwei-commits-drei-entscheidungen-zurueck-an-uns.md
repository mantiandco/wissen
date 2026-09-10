---
datum: 2026-08-28
nummer: 242
bereich: website
typ: auftrag
autor: archiv
archiv: 11.11
---
# Auftrag 242 — gelaufen, zwei Commits, drei Entscheidungen zurück an uns


**Commits `2440fd0` (wissen) und `b734fa0` (kommentar).** 43 Dokumente, `/wissen/` als 301 in `dist/_redirects`, die drei Seiten in `sitemap-0.xml`, der Stumpf nicht. **25 Verweise im Fließtext**, alle Ziele beim Bau aufgelöst — `route` gegen `routes.ts`, `dish` gegen die Sammlung **und gegen `hasPage()`**. Alle sieben verlinkten Gerichte tragen `intro`, also hat jedes eine Seite; vorher geprüft, nicht vorausgesetzt.

**Elf Gatter, 1969,4 s** — der bislang längste Lauf, gegenüber 1795,7 nach 241. budget 1224,5 · contrast 247,0 · hover 220,9 · a11y 207,0 · thirdparty 67,9. **`sprache` ist grün** und zählt die neuen Einträge als ausstehend statt als fehlend, wie §14 verlangte. `diet-check` rot wie erwartet.

**Offene englische Schlüssel: 592 → 667, plus 75** — 72 Hüllen (manti 22, verwandte 28, anderes 22) und 3 Beschreibungen. **Routenfassungen 13 → 16.**

### Drei Entscheidungen, die Claude Code richtigerweise nicht selbst getroffen hat

**1 · `anrede` steht rot, rc 1, an zwei Satzanfängen mit „Sie".** `anderes.json` sections[0].body.de[0] und `verwandte.json` sections[7].body.de[2] — beide das dritte Personalpronomen, beide am Satzanfang. **Das Gatter bewacht Wörter, nicht den Ton, und sagt das selbst so.** Claude Code hat drei Wege durchgerechnet und keinen genommen: Umschreiben verstößt gegen §1 (diktierter Text), eine Pfadausnahme macht das Gatter auf drei Seiten blind, und den Ausdruck zu ändern nähme ihm „Bitte beachten Sie" — den Fall, für den er da ist.

**Entschieden am 28. August: Die zwei Sätze werden umgeschrieben, das Gatter bleibt, wie es ist.** Der Präzedenzfall steht im Kopf des Gatters selbst — **Auftrag 220 hat sieben gleichartige Stellen umgeschrieben, statt sie freizustellen.** Ein Gatter, das für den eigenen Text eine Ausnahme bekommt, ist ab da eine Meinung und keine Prüfung. Und der Verlust ist null: Beide Sätze lassen sich ohne Bedeutungsverlust anders beginnen.

**2 · Die verlorene Fettauszeichnung — mein §5 war zu breit.** Zehn Absätze trugen `**…**`; das Schema kennt keine Auszeichnung im String, also stünden Sternchen auf der Seite. **Claude Codes Einwand ist richtig: Die vier Regionenabsätze und die fünf Vergleichsfragen sind gebaut wie `points` — Name, dann Text —, und `points` hätte genau dafür existiert.** Mein §5 hat es verboten, weil ich beim Formulieren an Gerichtekacheln dachte. **Dasselbe Fehlermuster wie das Kommentarverbot in 240 §7: Ein Verbot trifft, woran man beim Schreiben nicht gedacht hat.**

**Entschieden: `points` kommt ins `wissenSection`-Schema.** Der Gewinn ist nicht Fettdruck, sondern Struktur — vier benannte Regionen und fünf benannte Fragen sind für einen Leser wie für einen maschinellen Abruf etwas anderes als vier Absätze, die zufällig mit einem Namen anfangen. **Das ist genau die Seite, deren Regionen-Kapitel laut 9.6 später eine eigene Seite werden soll**; als benannte Punkte ist sie dafür vorbereitet.

**Der Preis steht im Schema und ist zu zahlen.** `dietSection` verbietet `links` neben `points`, weil `splitParts()` nur `body` zerlegt — und drei der vier Regionenabsätze verlinken ein Gericht. **Der Kommentar an dieser Zeile nennt den Ausweg selbst: „Wer ihn dort braucht, erweitert `splitParts()` und streicht diese Zeile."** Genau dieser Fall ist eingetreten.

**Die eine Auszeichnung, die nicht zurückkommt,** ist das `**und**` in „Bei Manti liegt sie unten **und** oben". Das ist Hervorhebung im Satz, nicht Struktur. **Der Satz trägt sich ohne sie.**

**3 · `dietLink` und `src/lib/diet.ts` bedienen jetzt zwei Sammlungen.** Claude Code hat die Namen gelassen und je einen Satz in den Kommentar geschrieben — die billige richtige Zwischenlösung. **Entschieden: umbenennen, solange es zwei Sammlungen sind und nicht drei.** Ein Name, der die Hälfte seiner Verwendung verschweigt, ist eine Schuld, die mit jeder weiteren Sammlung teurer wird.

### Sieben gemeldete Stellen, keine angefasst

`routes.ts:131` „Five items is the whole point of the reduction" gegen dreimal „vier Einträge" in derselben Datei · `sprache.mjs` Sollwert 74 Routenfassungen statt 80 · `sprache.mjs` Sollwert 39 Dokumente statt 43 · `anrede.mjs` Sollwert 10 Textdateien statt 13 · `anrede.mjs` Sollwert 46 Bauteildateien statt 47 · `Footer.astro` „siebenunddreißig Seiten" und „neununddreißig Dokumenten" statt 40 und 43 · `derive-bottles.mjs:104` „Blöcken zu 4 kB" statt KiB. **Die letzte hatte er versehentlich mitgeändert und wieder zurückgenommen** — richtig, weil §11 sie nicht aufzählte.

**Zwei Sollwerte mahnt das `sprache`-Gatter selbst an.** Ein Gatter, das seine eigene Veraltung meldet, ist besser gebaut als eines, das schweigt.

### Zwei Selbstkorrekturen von Claude Code

**„Zweimal knapp 33 Minuten" war falsch.** Der zweite Lauf lag bei 1969,4 s (32,8 min), der erste bei 1819,1 s (30,3 min) — zusammen 63,1 Minuten, nicht rund 66. **Ungefragt richtiggestellt, mit der Begründung: „eine Zahl, die ich als Messwert hingeschrieben habe, gehört nicht geschätzt."**

**Der erste Gatterlauf musste wiederholt werden**, weil er ihn durch `tail -70` geschickt und damit die von §16 verlangten Laufzeiten abgeschnitten hatte. Ebenfalls ungefragt gemeldet.

**Zwei Wendungen wurden verlängert, nicht der Fließtext.** In `anderes.json` kommen „vegan" und „vegetarisch" je zweimal im selben Absatz vor; `splitParts()` bricht dann ab, weil nicht entschieden ist, welche Stelle der Link ist. Verlinkt sind jetzt „unter vegan" und „unter vegetarisch" — **Linktext zwei Wörter statt einem, der Fließtext unverändert.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.11, Zeilen 1755–1792. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
