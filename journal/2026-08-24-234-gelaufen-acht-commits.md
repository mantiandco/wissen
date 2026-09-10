---
datum: 2026-08-24
nummer: 234
bereich: website
typ: auftrag
autor: archiv
archiv: 11.1
---
# Auftrag 234 — gelaufen, acht Commits


**234 ist erledigt.** Acht Commits, je Abschnitt einer, nur für Abschnitte, die etwas geändert haben:

`dd26138` Token — `--text-faint` in `.on-ink` · `dba6743` `pending` — `legal`-Sammlung und Gegenzählung · `1724a4d` `teilbild` — je Route statt in der Summe · `5d4cdd1` `budget` — alle 37 Routen, fehlende Messung ist Durchfall · `8ef1413` `a11y` — `incomplete` wird gewertet, drei Regeln werden Verstöße · `73c3ba3` `diet`-Wortschatz — Klassennamen zählen nicht als pflanzlich · `25d7bb1` `diet`-Urteil — unbekannte Zutat mit Ernährungsangabe ist ein Fall · `93bf272` Zählwerk — jedes Gatter meldet Umfang und fällt bei null durch

**Ergebnis: acht Gatter grün, `diet-check` rot.** Das war vorhergesagt und ist kein Programmfehler. 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten, verteilt auf sieben Gerichte: Fermento, Pommes frites, Süßkartoffel-Pommes, Nudelsalat, Kartoffelsalat, Schoko-Soufflé, Cheesecake. **Es bleibt rot, bis die Metro-Angaben da sind. Ohne Ausnahmeliste.** Eine Ausnahmeliste ist der nächste Weg, ein Gatter stillzulegen.

**`a11y` bleibt grün, ist aber schärfer.** Neun `incomplete`-Regeln zählen jetzt mit, keine schlägt heute an. **Belegt ist das durch einen eingebauten Fehlschlag, nicht durch den grünen Balken** — genau die Gegenprobe, die 233 gefehlt hat.

**`teilbild` 37 von 37, mit einer benannten Ausnahme:** `/speisekarte/churros/` hat kein Szenenbild. Dasselbe Fehlen erklärt, warum die Route kein Bild-LCP meldet. Eine Ausnahme, die benannt und begründet ist, ist keine Ausnahmeliste.

**Am Ernährungs-Wortschatz wurden acht Zusatzstoff-Klassennamen entfernt** — ein Klassenname ist keine Zutat und belegt nicht, dass etwas pflanzlich ist. **`modifizierte Maisstärke`, `Kartoffelstärke` und `Gewürze` bleiben bewusst drin**, mit Begründung im Kopf der Datei.

**Claude Code hat sich in diesem Auftrag selbst berichtigt:** Beim Überfahrzustand der Navigationsverweise hatte er die Deklaration gelesen statt zu messen. Der Strich bleibt bei 1 px. Das Gatter lässt ihn aus drei Gründen durch, **von denen keiner Sichtbarkeit heißt** — siehe 10.2, der Beweis der leeren Menge.

**Die Befunde 4, 5 und 6 wurden zuerst gemeldet, nicht sofort scharf gestellt.** Grund: Ein Gatter, das blind auf „Verstoß" umgestellt wird, steht dauerhaft rot — und ein dauerhaft rotes Gatter wird ignoriert. Das ist derselbe Fehlermodus wie ein blind grünes.

**Zwei Vorschläge aus dem Bericht, beschieden:**

**Zweistufige Messung bei `budget` — abgelehnt.** Vorgeschlagen war: zwei Läufe je Route, fünf nur dort, wo ein Wert näher als 20 Prozent an die Schranke kommt; 77 statt 190 Ladevorgänge. Die 20 Prozent sind eine neue Zahl, an der sich das Gatter später leise lockern lässt — derselbe Fehlermodus wie eine Ausnahmeliste. 35 Minuten sind tragbar; die Messung **ist** das Produkt. Wieder aufzunehmen erst, wenn sich die Lauffrequenz ändert. **Die Drosselung auf 1,6 Mbit/s wird ausdrücklich nicht angehoben** — die Schranke von 1800 ms wurde für dieses Netz gesetzt, ein schnelleres Netz misst etwas anderes.

**JS-Adressensonde bei `thirdparty` — angenommen, mit Bedingung.** Die Bedingung ist der **Selbsttest**: eine eingebaute Seite, die eine fremde Adresse zusammensetzt, ohne sie zu laden, damit eine kaputte Sonde das Gatter zum Fallen bringt statt still zu bestehen. Das mechanisiert den Satz „Eine Gegenprobe, die nicht anschlägt, ist zuerst ein Verdacht gegen die Gegenprobe." **Nicht dringend** — der Auftritt trägt heute so gut wie kein fremdes JavaScript, die Sonde ist Vorsorge. Sie gehört in 235 **unter** das Kommentar-Gatter aus 11.2.

**Was 234 ausdrücklich nicht enthielt** und in einen Folgeauftrag gehört: das dokumentierte, aber von keiner Komponente gelesene Feld `final` · die identische Beschreibung bei `herstellung` und `zutaten` in `meta.json` · die Abschnittsnummerierung auf der Startseite, die sich verschiebt, sobald das Video kommt (`index.astro` filtert `blocks` vor dem Nummerieren) · die beiden Kennzeichnungsblöcke in `Sides.astro:18` und `Ingredients.astro`, die still verschwinden, weil `home.*.marks` auf `pending` steht · der vierte Zustand von `additives` · der fest verdrahtete Vorladepfad in `Base.astro:126–136`, der auf `hero-the-original-*.avif` zeigt · `priceRange` und `servesCuisine` · der Getränkefilter · die Ausgabe von `production`, das an allen 34 Einträgen Pflicht ist und nirgends erscheint · fehlende `title`-Felder · der falsche Kommentar bei `dish.ts:70` · der tote Zweig · die zwei toten Skripte `og-image.mjs` und `sections.mjs` · 42 nie ausgelieferte Bilder in `public/img/bottle-disc/` (siehe 11.3) · `.DS_Store` in `src/content/` und zweimal in `dist` · ein leeres `<h2>` · ein doppelter Shop-Verweis · `link-in-text-block`.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.1, Zeilen 1450–1475. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
