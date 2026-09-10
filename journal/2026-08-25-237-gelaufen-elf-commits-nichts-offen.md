---
datum: 2026-08-25
nummer: 237
bereich: website
typ: auftrag
autor: archiv
archiv: 11.8
---
# Auftrag 237 — gelaufen, elf Commits, nichts offen


**181 → 0.** Vorher 181 Vorkommen in 31 von 39 Dokumenten, nachher null in null Dokumenten, gemessen mit demselben Skript über denselben `dist/`-Stand. **Taibs Zählung und Claude Codes Zählung waren von Anfang an dieselbe Zahl** — das ist die eigentliche Bestätigung, nicht die Behebung.

**Elf Commits für zehn Abschnitte.** Der elfte, `a5ddf8b`, ist eine Selbstkorrektur ohne Abschnitt. §11 hat keinen Commit.

**Die vierte Stufe steht und heißt „Auslieferung"** — 39 Dokumente, 13 Nadeln, kein Vorkommen. Der Selbsttest ist von 12 auf 12 Proben gewachsen und deckt jetzt auch die Zutatenlisten (ungleiche Länge, abweichende Allergenkennzeichen).

**Die offene Frage aus §2 ist beantwortet, und zwar durch Nachsehen statt durch Annahme.** Ich hatte nicht entschieden, ob `sprache` an neunter Stelle einen vollständigen `dist/`-Stand sieht. Claude Code hat alle elf Skripte nach `astro build`, `rm -rf dist` und `rmSync` durchsucht: kein Gatter baut, keines löscht. **Die Reihenfolge stimmt, nichts wurde umgestellt.** Genau die Auflösung, die eine Vermutung nicht gehabt hätte.

**Der Abbruchzweig bei den Getränkespalten schlägt an — echt nachgestellt, nicht simuliert.** Weil `kind` ein Enum ist, wäre ein erfundener Wert ein unmöglicher Fall gewesen; stattdessen wurde eine vierte Art ins Schema aufgenommen und ein Getränk darauf gesetzt. Der Bau brach mit der vorgesehenen Meldung ab, der Zustand wurde zurückgesetzt.

**Eine begründete Abweichung vom diktierten Code, und sie ist besser als das Diktat.** `const SPALTEN = { … } as const` ließ `astro check` mit zwei Fehlern fallen: `as const` verengt `SPALTEN.tea` auf das Tupel `['ice-tea']`, und `.includes()` nimmt dann kein `'cola'` mehr an — die Prüfung ließe sich gar nicht schreiben. Gebaut wurde stattdessen `Record<'tea'|'lemonade', readonly Getraenkeart[]>` mit `Getraenkeart` aus dem Schema abgeleitet. **Damit meldet sich ein Tippfehler in der Spaltentabelle beim Typprüfer statt als leere Spalte auf der Seite.**

**Getränke in `diet-check`, getrennt ausgewiesen:** 14 von 14 mit Ernährungsangabe, alle drei Zweige gegengetestet (Angabe entfernt · Wert außerhalb des Vorrats · Feld fehlt — letzteres bricht schon im Schema). **Der Gerichteteil bleibt rot**, 26 unbelegte Ernährungsangaben, aus dem seit 234 bekannten Grund. Beides steht nebeneinander und ist getrennt zu lesen.

**Zwei Zahlen zur Einordnung:** JavaScript auf der größten Seite `/speisekarte/` 2.820 B gzip gegen 30 kB Schranke — 27,2 kB Kopffreiheit. LCP höchstens 1.376 ms, CLS höchstens 0,0016, LCP-Bild 79,0 kB. Dokumente unverändert 39.

**Zwei Nachzählungen, die ich beauftragt hatte, und beide bestätigen mich nicht aus Höflichkeit.** `final` hat tatsächlich keinen Leser — das Feld steht nur im Schema, in keinem Bauteil und in keinem Skript. Und Churros ist der einzige `false` von 34 Einträgen. Beim Einleitungsabsatz: 34 Einträge, 7 Combos, 27 Gerichte, **alle 27 haben einen** — der alte Satz war umgekehrt richtig.

**Der Dateikopf von `dish.ts` bleibt unverändert, und hier hatte ich recht.** Claude Codes Bericht zu 236 hatte denselben Fehler auch dort verortet; ich hatte nachgesehen, ihn nicht gefunden und in den Auftrag geschrieben: benennen statt mitändern. Zeile 10 ist ein Konjunktiv über einen Fall, der einträte — keine Aussage über heute. **Zweiter Fall dieser Art nach der Sache mit den „Colas".**

**Claude Codes eigener Fehler, ungefragt gemeldet und in der ganzen Klasse geprüft.** Im Auftragstext stand, es seien „vierzehnmal `[object Object]` auf der Startseite" gewesen. Falsch: `Drinks.astro` wird nur von `[menu]/index.astro` eingebunden, die Sektion steht allein auf der Speisekarte. Die vierzehn waren Teil der 75 der Speisekarte. Nach der Regel, nach einem Fund die ganze Klasse zu prüfen, wurde ein zweites Vorkommen derselben Falschaussage im Kopf von `diet-check.mjs` gefunden. **Beide in `a5ddf8b` korrigiert, der übrige Bestand geprüft.**

**Offen gelassen, bewusst:** Im neuen Schema-Kommentar steht ein Verweis auf „Zeile 169". Sie stimmt heute — aber eine Zeilennummer im Kommentar ist genau die Sorte Aussage, die dieser Auftrag an fünf Stellen korrigiert hat. **Sie gehört durch eine Benennung ersetzt.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.8, Zeilen 1659–1684. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
