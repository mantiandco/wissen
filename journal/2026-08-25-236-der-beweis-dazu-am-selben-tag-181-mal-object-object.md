---
datum: 2026-08-25
nummer: 236
bereich: website
typ: befund
autor: archiv
archiv: 11.7a
---
# Der Beweis dazu, am selben Tag: 181 mal `[object Object]`


**Taib hat es gesehen, bevor irgendein Gatter es gesehen hat** — auf der Startseite und auf der Speisekarte stand statt des Gerichtsnamens `[object Object]`. Am 25. August im gebauten Stand nachgezählt.

**181 Vorkommen in 31 der 39 gebauten Dateien:** Speisekarte 75, `/vegetarisch` 46, `/vegan` 26, Startseite 7, dazu 27 Gerichtseiten mit je einem.

**Vier Fundstellen, fünf Zeilen** — überall dasselbe Muster: Der Wert wurde oben korrekt über `t()` aufgelöst und unten trotzdem roh ausgegeben.

| Datei | Zeile | Ausgabe | Vorkommen |
|---|---|---|---|
| `DishIngredients.astro` | 49/55 | `c.ingredients` — die Rubrik „Zutaten"; **das Bauteil kennt `t()` überhaupt nicht** | 90 |
| `DishCard.astro` | 151, 154 | `{d.name}` statt `{name}` — `name` steht aufgelöst in Zeile 92 | 70 |
| `Drinks.astro` | 112, 125 | `{d.data.name}` — die Getränkenamen, ohne `t()` | 14 |
| `Bestseller.astro` | 111 | `{dish.data.name}` — `name` liegt aufgelöst im Kachelobjekt, Zeile 45 | 7 |

**Was daneben sauber ist, ebenfalls gemessen:** kein `undefined`, kein `NaN`, kein durchgereichter `pending`-Vermerk, kein Vorkommen des Platzhaltertextes im Auslieferstand. Der Defekt ist scharf umrissen und keine allgemeine Unordnung.

**Der eigentliche Befund ist nicht der Fehler, sondern was ihn nicht gefunden hat.** Elf Gatter liefen, `sprache` meldete `pass` und `74 von 74`, `a11y` meldete keinen Verstoß — und die deutsche Seite zeigte an 181 Stellen kein Wort, sondern eine Fehlermeldung von JavaScript. **Das Sprachgatter prüft die Datenlage, nicht das Ergebnis.** Es fragt, ob zu jedem Schlüssel in jeder Sprache ein Eintrag existiert. Ob der Eintrag je an der Seite ankommt, fragt es nicht.

**Damit ist die Lehre aus 11.7 nicht mehr eine Überlegung, sondern ein Beleg:** Vier der 91 ungedeckten Umstellungen sind danebengegangen, und die Deckung wäre im selben Auftrag entstanden.

**Die Konsequenz ist billig und gehört in Auftrag 237:** eine Zeile am Ende des Sprachgatters, die jede gebaute Datei nach `[object Object]` durchsieht. Sollwert: 39 Dokumente durchgesehen, null Funde. **Kein zwölftes Gatter** — es ist dieselbe Frage wie die anderen drei, nur am anderen Ende der Kette: nicht „steht der Text in den Daten", sondern „steht er auf der Seite".

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.7a, Zeilen 1636–1658. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
