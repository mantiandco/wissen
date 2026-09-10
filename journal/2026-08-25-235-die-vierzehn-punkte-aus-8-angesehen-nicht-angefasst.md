---
datum: 2026-08-25
nummer: 235
bereich: website
typ: befund
autor: archiv
archiv: 11.5
---
# Die vierzehn Punkte aus §8 — angesehen, nicht angefasst


**Vollständige Liste aus dem 235er Bericht.** Sie stand eine Antwort lang nur im Sitzungsprotokoll, weil ich sie beim Eintragen übersprungen habe — der Fehler ist meiner und ist derselbe Typ wie die Punkte 3 und 11 in der Liste selbst: eine Behauptung über den Bestand, die nicht stimmte.

**Zwei zuerst, weil sie eigene Aufträge sind und keine Aufräumarbeit:**

**1 · `production` wird nirgends gezeigt.** `content.config.ts:121`, `z.enum(['inhouse','partial','sourced'])`, an allen 34 Einträgen gepflegt — 23 inhouse, 2 partial, 9 sourced. **In den 39 gebauten Dateien erscheint keiner der drei Werte.** Ein vollständig gepflegtes Feld ohne Abnehmer, und zwar ausgerechnet das Argument, das die Seite gegenüber Wettbewerbern hat. Aufwand: ein Chip an der Kachel, eine Zeile auf der Gerichtseite, ein halber Tag. **Es ist eine Gestaltungsfrage, keine Codefrage.**

**2 · `link-in-text-block` ist die einzige schlafende Lücke.** Die axe-Regel der Gruppe 2, hinter der kein zweites Gatter steht. Sie läuft mit (`wcag2a`), steht aber nicht in `INCOMPLETE_ALS_VERSTOSS`. Im 235er Lauf: 111 `incomplete`-Meldungen, alle `color-contrast`, **keine einzige** `link-in-text-block`. Heute also eine Lücke, kein Mangel. Schließen hieße: Verweise im Fließtext gegen ihren Absatz messen, 3 : 1 oder Unterstreichung, geschätzt ein Tag — **in `contrast.mjs`, nicht als zwölftes Gatter.**

**Die übrigen zwölf:**

| | Ort | Folge | Aufwand |
|---|---|---|---|
| 3 · `final` | `content.config.ts:147` | Der Kommentar behauptet, `Plate.astro` lasse bei `final: false` den Alternativtext weg. **Es gibt keinen Leser des Feldes.** Dokumentiertes Verhalten, das nicht existiert. | Kommentar richtigstellen: Minuten. Feld entfernen: eine Stunde — aber Churros trägt `false` für ein Platzhalterfoto, das Feld ist die einzige Spur davon. |
| 4 · Doppelte Beschreibung | `meta.json` | `herstellung.description` und `zutaten.description` sind **wortgleich**: „Konservieren heißt bei uns minus achtzehn Grad — kein Geschmacksverstärker, keine Konservierungsstoffe aus eigener Produktion." Am 25. August erneut nachgeprüft, immer noch identisch. **Es ist der `<meta description>`, nicht der Seiteninhalt** — er steht nirgends auf der Seite, sondern nur im Google-Ergebnis. Deshalb war er beim Ansehen der beiden Seiten nicht zu finden. **Der Satz gehört inhaltlich zu `/herstellung`** (er handelt vom Einfrieren), also braucht `/zutaten` den neuen. | Ein Satz Text, unter 160 Zeichen. Liegt bei Taib. |
| 5 · Abschnittsnummern | `index.astro:42–52` | `blocks` filtert **vor** dem Nummerieren. Kommt das Video, rutschen alle Nummern darunter um eins. | Nummern an den Schlüssel binden: zwei Stunden. |
| 6 · `additives`, vierter Zustand | `dishes.json` | 2 gefüllt, 32 nicht gesetzt, leeres Array **null Mal**. Bei `allergens` ist der Unterschied gepflegt (20/7/7). „Geprüft, nichts zu kennzeichnen" ist bei Zusatzstoffen unbelegt. | Küchenarbeit, kein Code. Hängt an Metro. |
| 7 · `priceRange`, `servesCuisine` | `Schema.astro:27–28` | `'€'` und fünf Küchenbegriffe fest verdrahtet statt in `site.ts`, wo alles andere über den Betrieb steht. | Zwanzig Minuten. |
| 8 · Getränkefilter | `Drinks.astro:14` | **Am 25. August nachgesehen und die Beschreibung im Bericht widerlegt:** Die Überschrift lautet bereits `"Limonade & Cola"` (`copy/home.json`, `colLemonade`) — die Colas stehen **nicht** unter „Limonaden". Taib hat die Formulierung bestätigt, sie bleibt. **Übrig bleiben zwei kleinere Sachen:** Der Filter ist negativ definiert (`kind !== 'ice-tea'`), eine dritte Getränkeart landete still unter „Limonade & Cola". Und der Einleitungstext nennt nur zwei Arten — „Eistee und Limonade in Mehrwegflaschen" und „die Limonaden dürfen etwas süßer sein" —, während die Überschrift drei nennt. | Minuten, nicht eine Stunde. Der Einleitungssatz ist Text und liegt bei Taib. |
| 9 · Fehlende `title` | `dishes.json` | 27 von 34 haben `title`, die 7 Combos nicht — sie erben über `basedOn`. | Keiner, solange die Erbung steht. |
| 10 · Titel und Beschreibung getrennt | `routes.ts` vs. `meta.json` | Zwei Dateien für zwei Hälften desselben Dokumentkopfs. **Claude Code hält die Trennung für richtig und rät vom Zusammenlegen ab** — Titel gehören zur Route, Beschreibungen sind Text und gehören unter `content/`, wo `pending` sie zählt. | Zusammenlegen: ein Tag. Wird nicht gemacht. |
| 11 · Falscher Kommentar | `dish.ts:70` | „Ein Gericht von siebenundzwanzig hat einen Einleitungsabsatz." **Nachgezählt: 27 von 27.** Derselbe Fehler im Kopf der Datei. Der Absatz begründet, warum `pageOf()` null zurückgeben kann — mit einem Normalfall, den er genau verkehrt herum beschreibt. | Zwei Sätze, zehn Minuten. **Derselbe Defekttyp wie die Kontrastzahlen, nur mit einer Stückzahl statt einem Verhältnis.** |
| 12 · Toter Zweig | `DishIngredients.astro:47` | `Array.isArray(ingredients) ? ingredients : []` behandelt `{ pending: true }`. Kein Gericht trägt das. Richtig gebaut, nie betreten. | Stehenlassen kostet nichts. **Claude Code rät vom Entfernen ab** — es ist der Rückweg für ein Gericht, dessen Liste die Küche noch nicht abgezeichnet hat. |
| 13 · Leeres `<h2>` | `DishOverlay.astro:37` | Die einzige leere Überschrift im Bestand. JavaScript füllt sie beim Öffnen; ohne JavaScript ist das Overlay nicht erreichbar. Steht trotzdem im Quelltext jeder Kartenansicht. | Ein Fallback-Text: zwanzig Minuten. **Er wäre erfundener Text** — wird nicht gemacht. |
| 14 · Doppelter Shop-Verweis | `site.ts:276` und `:302` | `order.shop.href` und `promo.href` tragen beide dieselbe Adresse. Der Kommentar begründet das, sagt aber nicht, dass eine Adressänderung an zwei Stellen nachzuziehen ist. | Ein Satz im Kommentar: fünf Minuten. |

**Nicht Teil der vierzehn**, aber im selben Bericht: der Nachtrag zu Combo-Foto und Empfehlung (siehe 11.3, entschieden), und Claude Codes eigener Fehler in `gates.mjs` („Neun Prüfungen" über zehn Einträgen) — **behoben, Commit `b315395`**.

**Die Einteilung für die weitere Arbeit:**

**Wahrheitsfehler — 3, 7, 8, 11, 14.** Falsche Aussagen im Bestand, zusammen unter einem halben Tag. **Punkt 8 ist der einzige, den ein Gast sieht.** Diese fünf gehören in einen Auftrag, weil sie dieselbe Sorte Fehler sind, gegen die Auftrag 235 ein Gatter gebaut hat — und ein Gatter gegen falsche Zahlen zu bauen, während fünf falsche Aussagen stehen bleiben, ist widersprüchlich.

**Entscheidungen bei Taib — 4 und 6.** Beides Text beziehungsweise Küche, 6 hängt an Metro.

**Wird nicht gemacht — 9, 10, 12, 13.** Alle vier mit Begründung, alle vier auf Claude Codes Rat oder weil die Behebung erfundenen Text erzeugte.

**Eigene Aufträge — 1 und 2.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.5, Zeilen 1532–1570. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
