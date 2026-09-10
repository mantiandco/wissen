# website

Live seit 3. September 2026 auf www.mantiandco.com (Cloudflare Pages, Repositorium mantiandco/website); Technik steht in website/docs/ (gatter, erzeuger, bildstufen, protokoll, inhalte), Vorgänge im Journal.

*Wörtlich aus PROJEKTGEDAECHTNIS-2026-09-11.md; Abschnittsnummern beziehen sich darauf.*

## Archiv — Kopf der Gedächtnis-Datei

# MANTI & CO. — Projektgedächtnis

**Stand:** 11. September 2026 — LIVE seit 3. September, Betrieb. **Gelandet bis 286** (e336021): 282 Öffnungszeiten täglich 11:00–21:00 und Kennzahlen-Streifen weg, 283 Standortseite eine Zeile je Band, 284/285 Wortmarke als PNG für die E-Mail-Signatur (`/img/brand/wortmarke-mail-hell.png`, 800 × 400), 286 Hinweissatz „Montag bis Sonntag.“ ohne „Ruhetag“. **287 (läuft): Korrekturen an dieser Datei, Rezept-Skript, `astro check` als dreizehntes Gatter, sharp-Audit, Doku neben dem Code (docs/) — und dann das Wissenssystem: diese Datei wandert eingefroren nach mantiandco/wissen/archiv/, das Wissen wächst dort als Journal, und ab 287 schreibt Claude Code es selbst.** Außerhalb des Codes: Woche 1 der Hebel-Liste (`Hebel-ausserhalb-des-Codes.md`, Projektwissen); Öffnungszeiten bei Google, Lieferando, Foodamigos (Taib).
**Was das ist:** Die einzige gültige Kontextdatei des Projekts. Sie fasst zusammen, was bis heute entschieden, gemessen und belegt ist. Ab jetzt wird nur noch diese Datei fortgeschrieben — keine neuen Sitzungsnachträge.

**Erste Anweisung:** Diese Datei vollständig lesen, bevor irgendetwas beantwortet wird. Abschnitt 1 ist keine Beschreibung, sondern eine Anweisung.

**Zweite Anweisung, neu am 28. August:** Nach dem Lesen dieser Datei den Quelltext lesen, bevor eine Aussage über den Quelltext gemacht wird. Diese Datei beschreibt den Bau, sie *ist* er nicht. Die letzten vier Aufträge haben in Folge Fehler dadurch erzeugt, dass eine Vorgabe aus dem Gedächtnis geschrieben wurde statt aus der Datei, die sie ändern sollte — Abschnitt 17 zählt sie einzeln auf. **Der Mindestbestand vor dem ersten Auftrag:** `src/content.config.ts`, `src/data/routes.ts`, `src/lib/dish.ts`, `src/lib/copy-links.ts`, `src/pages/[dish].astro`, `src/pages/[diet].astro`, `src/pages/[...wissen].astro`, `scripts/gates.mjs` und die drei Wissensseiten-JSON.

**Was sie ersetzt:** `MANTI-CO-Projektgedaechtnis.md` · `UEBERGABE-MANTI-CO.md` · `Projektgedaechtnis-Sitzung-2026-08-19.md` · `Projektgedaechtnis-Sitzung-2026-08-24.md` · `Offene-Punkte-MANTI-CO.md`. Diese fünf Dateien sind ab sofort tot. Wo sie dieser Datei widersprechen, gilt diese.

**Was daneben bestehen bleibt** — Arbeitsdateien, keine Gedächtnisdateien:
`Rechtstexte-MANTI-CO.md` (Bestandsaufnahme der Foodamigos-Texte) · `MANTI-CO-Rechtstexte-Entwurf.md` (die Entwürfe selbst) · `Mail-an-Foodamigos.md` (gesendet) · `SEO-Roadmap-MANTI-CO.md` und `Umbau-Roadmap-site-light.md` (siehe 4.9 — beide sind in Teilen überholt) · `auftrag-233-bestand.md` (Repository-Bestandsaufnahme) · `/areas/manti-product-ops.md` (Verpackung und Beschaffung).

---

## Archiv 9 — Textstruktur und Titles


## 9.1 Die fünf Blöcke einer Gerichtseite

**Der Teig · Die Füllung · Was daraufkommt · Warum so · Was dazu passt**

Diese Titel sind gesetzt und werden nicht geändert. Sie passen auf die Manti; bei anderen Kategorien bleiben einzelne Blöcke leer und verschwinden.

**Dublettenregel.** The Original ist die Vorlage für **sechs weitere Manti — sieben insgesamt**, an `dishes.json` gezählt. (Die alten Gedächtnisdateien schrieben „sieben weitere" und „acht Seiten"; es gibt keinen achten Manti.) Stünde auf jeder Seite derselbe Teig-Absatz, entstünden sieben Seiten mit nahezu identischem Text — genau die Ähnlichkeit, die bei Gerichtseiten derselben Domain Rankings kostet.

**Die Blockgewichte drehen sich mit dem Unterschied.** Wo zwei Gerichte sich nur im Teig unterscheiden, trägt der Teig-Block; wo die Füllung den Unterschied macht, der Füllungs-Block. Der jeweils gleiche Block schrumpft auf einen Satz mit Verweis auf `/herstellung`. Das Gewicht der Seite liegt auf dem, was nur für dieses Gericht gilt.

**Dasselbe gilt für die Saucenauswahl.** Sie gilt für sechs der sieben Manti. Vollständig steht sie einmal auf `/speisekarte` im Abschnitt „Was dazu geht", die Kennzeichnung auf `/zutaten`. Auf der Gerichtseite nur die empfohlene Kombination. **Keine eigene Seite, solange es zwei Saucen sind.**

## 9.2 Title-Formel

**Gerichtseiten: Füllung oder Merkmal zuerst, Eigenname danach, Marke am Ende.** Grund: „The Original" sucht niemand.

```
Manti mit Rinderhack halal — The Original | MANTI & CO.
Manti mit Kartoffelfüllung — Golden Harvest | MANTI & CO.
Bunte Manti ohne Farbstoff — Nature's Palette | MANTI & CO.
```

**Übrige Seiten: Marke am Ende.** Einzige Ausnahme ist die Startseite, die mit der Marke beginnt.

```
/                     MANTI & CO. — Teigtaschen aus eigener Produktion in Mannheim
/speisekarte          Speisekarte — türkische Teigtaschen | MANTI & CO.
/herstellung          Wie unsere Teigtaschen entstehen | MANTI & CO.
/zutaten              Zutaten, Allergene und was nicht drin ist | MANTI & CO.
/ueber-uns            Eigene Produktion in Mannheim | MANTI & CO.
/standorte/mannheim   Hallesche Straße 8, 68309 Mannheim | MANTI & CO.
/treueprogramm        Punkte sammeln bei jeder Bestellung | MANTI & CO.
```

**Kein Stadtteil, keine Pasta-Begriffe in Titles** (siehe 2.4 und 3.2).

## 9.3 Website-Text und Shop-Text

**Der Websitetext entsteht zuerst, der Shop-Text ist eine Verdichtung daraus** — zwei bis vier Sätze. Die Trennlinie ist **„ranken gegen verkaufen"**, nicht Website gegen Shop.

**Alle 27 Shop-Texte sind geschrieben, im Du, und eingepflegt.** Sie haben die vier Falschaussagen aus der alten Foodamigos-Vorlage erledigt — „100 % Made in Germany", „handgefertigt", „von Hand gerollt" bei den Green Rolls, „gebacken" bei den frittierten Bulgur Bites — sowie die „buttrige Sauce" in den Combo-Texten.

**Warnung:** Shop-Texte und Website-Texte stammen aus derselben Quelle, aber **es gibt keine automatische Verbindung.** Ändert sich eine Zutat, müssen beide angefasst werden.

## 9.4 `/vegan` und `/vegetarisch`

**Beide stehen seit Auftrag 224.** Aufbau: Einleitung, Raster aus den Daten, dann die Tiefe.

`/vegan` — Was vegan heißt · Wo es bei uns eng wird (Teig, Sauce, Fett) · Wie wir trennen (Produktion, Frittieren, Öl) · Wo unsere Zusicherung endet · Warum wir das aufschreiben. Der stärkste Satz: *„Wir haben die zweite Fritteuse gekauft, bevor es einen veganen Gast gab, der danach gefragt hätte."*

`/vegetarisch` — Was vegetarisch heißt (ovo-lakto, lakto, ovo, pescetarisch) · Was die türkische Küche damit zu tun hat (zeytinyağlı) · Wo der Unterschied zu vegan liegt · Das Gericht, mit dem wir anfangen würden (Melted Heart) · Wo wir nicht mitmachen.

**Eine Behauptung wurde gestrichen:** „In Anatolien war Fleisch lange teuer und selten." Ohne Faktencheck wird nicht negativ über andere Länder und Kulturen geschrieben. Ersetzt durch die Beschreibung der Kategorie zeytinyağlı ohne wirtschaftshistorische Aussage.

**zeytinyağlı bleibt.** Taib: „Am Ende des Tages schreiben wir für eine Seite, die neue Maßstäbe setzt. Es muss in Mannheim nicht unbedingt gesucht werden, sondern kann auch informativ sein."

**Verweis von `/speisekarte`**, seit 227 unter der Filterreihe: *„Was vegan und vegetarisch bei uns heißt, wie wir trennen und wo unsere Zusicherung endet, steht auf zwei eigenen Seiten."* Die Filter-Plaketten selbst sind **nicht** verlinkt — aus einem Auswahlfeld würde sonst ein Seitenwechsel.

## 9.5 `/halal` — konzipiert, blockiert

Blocker ist die Lieferantenfrage (Abschnitt 14).

**Aufbau, sobald die Daten stehen:** oben kurz, was geführt wird und welche vier Gerichte, mit Raster · was halal bedeutet, die ganze Kette, nicht nur der Schnitt · was in eurer Hand liegt: eigene Produktionsläufe, getrennte Fritteuse, keine alkoholhaltigen Zutaten · das Zertifikat, sichtbar, mit Stelle und Geltungsbereich.

**Die lokale Absicht steht oben, die Tiefe darunter.** Gegen Wikipedia und Islam-Portale rankt eine Restaurantseite bei „Was ist halal" nicht — bei „Halal essen Mannheim" schon.

**„Schweinefleisch" kommt als Wort nicht vor** (3.2).

## 9.6 Wissensseiten und FAQ — noch nicht geschrieben

Sie behandeln, was nichts mit Ernährungsweisen zu tun hat: Manti als Gericht, die Regionen, die Abgrenzung zu Ravioli, Tortellini, Gyoza, Pierogi, Pelmeni. **Die Tiefe zu Ernährungsweisen lebt auf den Ernährungsseiten** — sonst konkurrieren zwei eigene Seiten um dieselbe Anfrage.

Der Kernsatz aus 2.3 gehört an drei Stellen: Hero, Einleitungstext `/speisekarte`, und auf die Wissensseite zum Thema „mal was anderes essen".

### Die Zahl sieben ist gestrichen

**Hier stand „Sieben Wissensseiten unter `/wissen/`". Die Sieben ist nirgends hergeleitet** — nicht in dieser Datei, nicht in den Suchdaten aus 9.8, nicht in einer Entscheidung. Sie stand in 9.6, in 16.6 und in Abschnitt 18, dreimal derselbe unbelegte Wert, und wurde dadurch zur Vorgabe. **Nach der Regel aus 1.1 wird sie gestrichen und nicht abgeschwächt.** Die Zahl der Seiten ergibt sich aus den Absichten, die es zu bedienen gibt, und das sind fünf.

**Zwei der ursprünglich mitgedachten Themen fallen weg, weil es sie schon gibt.** „Das Verfahren" ist `/herstellung/`, gebaut und veröffentlicht; eine zweite Seite dazu wäre genau die Doppelung, vor der derselbe Absatz bei den Ernährungsseiten warnt. Die Zutaten sind `/zutaten/`, die Produktion ist `/ueber-uns/`.

### Auch die Fünf ist gefallen — korrigiert am 27. August

**Mein Fünf-Seiten-Vorschlag war schlecht begründet, und der Beleg dafür stand in ihm selbst.** Ich habe bei Seite 4 „für diese Seite gibt es keine gemessene Nachfrage" geschrieben und bei Seite 5 „Markenseite, keine Suchseite" — und bei Seite 3 gar keine Zahl genannt, weil es keine gibt. **Damit tragen zwei von fünf Seiten gemessene Nachfrage, drei nicht.** Ich habe das aufgeschrieben und die Folgerung nicht gezogen. Taib hat sie gezogen, ohne die Zahlen zu kennen, allein aus dem Leseeindruck: „das liest sich wie eine Übersicht, nicht wie fünf Seiten."

**Sein Einwand ist richtig, seine Begründung ist es nicht.** „Eine Seite mit gutem Inhalt rankt besser als fünf kurze" vergleicht eine gute Seite gegen fünf schlechte. Der wirkliche Vergleich lautet: eine gute Seite gegen fünf gute. **Google bewertet Dokumente, nicht Abschnitte** — ein Titel, eine Description, eine URL, ein Suchergebnis je Seite. Wer sechs Absichten in ein Dokument legt, hat einen Titel für sechs Fragen.

**Und genau das ist der belegte Fehler des alten Auftritts.** 9.8: „ein Auftritt, der alles auf der Startseite erklärt" → „wird gefunden und nicht geklickt", „manti" auf Position 8,2 mit 2.022 Impressionen und 23 Klicks. **Eine einzige große Wissensseite baut diesen Fehler nach, nur eine Ebene tiefer.** Das ist das Argument gegen die Zusammenlegung, und es ist kein theoretisches — es ist die eigene Messung.

**Die Konzentrationsspanne ist ausdrücklich nicht das Argument.** Taib hat danach gefragt und vorweggenommen, dass es ein schwaches wäre. Es ist ein schwaches. Lange Seiten funktionieren. Der Grund für Trennung ist die Trefferanzeige, nicht die Geduld des Lesers.

### Zwei Seiten, nicht fünf und nicht eine — Vorschlag vom 27. August, noch nicht entschieden

**1 · `/wissen/manti/` — was Manti ist, woher es kommt, wie man es isst.** Nimmt die früheren Seiten 1, 3 und 4 auf. Begründung: „manti", „mantı", „manti essen", „türkische manti", „was ist manti essen" wollen **dasselbe Dokument** — eine vollständige Antwort auf eine Frage. Regionen und Esskultur sind Kapitel dieser Antwort, keine konkurrierenden Absichten. Hierher gehört das Kayseri-Material aus 7.12.

**2 · `/wissen/verwandte/` — Manti neben Ravioli, Tortellini, Gyoza, Pierogi, Pelmeni.** Bleibt getrennt, weil die Absicht eine andere ist: Vergleich, nicht Erklärung. 27 Anfragen, 107 Impressionen, **null Klicks**, alle auf Position 9 bis 12. **Die Position stimmt schon, der Titel fehlt.** Ein Kapitel kann keinen eigenen Titel tragen, und der Titel ist hier das, was den Klick entscheidet.

**`/wissen/mal-was-anderes/` entfällt als Seite.** Der Kernsatz aus 2.3 steht laut diesem Abschnitt ohnehin in Hero und `/speisekarte` — eine dritte Stelle ohne Suchabsicht braucht keine eigene Adresse.

**`/wissen/` als Hub entfällt ebenfalls.** Die Frage aus dem letzten Absatz ist damit beantwortet: Bei zwei Seiten ist eine Übersichtsseite mit zwei Links genau der dünne Inhalt aus 4.1. `/wissen/manti/` ist der Einstieg und verlinkt auf `/wissen/verwandte/`.

**Der Vorbehalt, der gegen die eigene Beweisführung spricht.** Für „Regionen" gibt es keine gemessene Nachfrage — aber es steht auch nichts dazu auf der Domain, also kann nichts ranken. **Denselben Einwand macht 9.8 bei Halal, und er gilt hier genauso.** Das Argument ist deshalb schwach-negativ, nicht beweiskräftig. **Daraus folgt ein Prüfweg statt einer Behauptung:** Das Regionen-Kapitel bekommt eine eigene Überschrift. Sammelt es Impressionen, wird es später eine eigene Seite. Ein Kapitel herauszulösen ist billig; eine Seite ohne Nachfrage zu bauen ist es nicht.

**Taibs Verlinkungsargument spricht für Trennung, nicht für Zusammenlegung.** Ein Verweis von `/wissen/manti/` auf „The Original" beim Wort Kayseri wirkt, weil er aus einem thematisch engen Dokument kommt. Ein Sprunganker innerhalb derselben Seite ist kein Verweis.

### Der Rückspiegel-Einwand — Taib am 27. August, und er trägt

**„Lässt uns der Blick nur auf die Search Console nicht abschweifen? Wir nehmen nur dieses Volumen, anstatt ein Volumen zu bespielen, welches vielleicht größer ist."** Dazu: „Jemand, der Manti nicht kennt, sucht nicht danach."

**Der Einwand ist methodisch richtig und ich habe die Console überbewertet.** Sie zeigt Impressionen nur für Anfragen, bei denen die Domain überhaupt erscheinen durfte. **Sie ist ein Spiegel des bestehenden Auftritts, keine Messung des Marktes.** Ich habe diesen Vorbehalt bei Halal und bei den Regionen jeweils einzeln notiert und ihn trotzdem nicht auf die Beweisführung insgesamt angewandt. Das ist derselbe Fehler wie eine Zeile darüber: Vorbehalt notiert, Folgerung nicht gezogen.

**Das Messgerät ist aber nicht blind.** Ohne jede eigene Seite dazu hat Google den Auftritt für „türkische pasta" (13), „manti nudeln" (15), „dumplings mannheim" (12), „pasta manti" (8), „turkish pasta" (7), „türkische tortellini" (5) eingeblendet — 107 Impressionen. **Der blinde Fleck ist also kein völliger.** Die Brücke wurde erkannt, sie ist nur klein und wird nicht geklickt.

**Wo der Einwand nicht trägt: „italienisch mannheim" und „pasta mannheim" sind verschlossen.** Nicht wegen schlechter Texte, sondern wegen der Absicht. Wer „italienisch essen mannheim" tippt, will einen Italiener; das weiß Google aus dem Klickverhalten von Millionen Sitzungen. **Eine Platzierung gegen die Absicht hält nicht — sie wird erklickt, sofort verlassen und fällt zurück.** Absichtskonflikt ist die härteste Wand im Suchmaschinenfeld und mit Copywriting nicht zu durchschreiben.

**Taibs Tellerrandseite existiert bereits, nur unter anderem Namen: `/wissen/verwandte/` ist sie.** Ravioli, Tortellini, Gyoza, Pierogi, Pelmeni, „türkische pasta", „manti nudeln" — das ist genau die Brücke zu Leuten, die Manti nicht kennen. Sie steht seit dem 25. August im Plan. **Und die Regel dazu steht schon in 17: „Nudeln bleibt Brücke, nicht Kategorie."**

**Die allgemeinen Essensanfragen sind kein Wissensseiten-Thema, sondern ein Karten-Thema.** 9.8: 146 Anfragen, 976 Impressionen, 17 Klicks, bei Positionen um 3. „food near me" hat in zehn Monaten 37 Impressionen gebracht — **eine organische Position 3,4 liegt unter dem Kartenblock, und der nimmt fast alles.** Wer „essen in der Nähe" gewinnen will, gewinnt es im Unternehmensprofil und bei den Lieferdiensten, nicht mit einem Text. **Das gehört nicht in die Wissensseiten-Entscheidung und wird dort auch nicht gelöst.**

### `/wissen/mal-was-anderes/` kommt zurück — Entscheidung vom 27. August, geändert gegenüber demselben Tag

**Ich habe die Seite eine Nachricht zuvor gestrichen und nehme das zurück.** Grund der Streichung war: keine Suchabsicht, also keine eigene Adresse. Der Grund war zu eng, weil er nur einen Abrufweg kannte.

**Taibs Argument: „Oder fragt die KI nicht danach. Aber wenn er nach Pasta sucht und Manti vorgeschlagen bekommt, denkt er sich vielleicht, das probiere ich mal."** Sprachmodelle und KI-Übersichten rufen semantisch ab, nicht wörtlich. Auf „was kann ich in Mannheim essen, das nicht Pizza oder Döner ist" kann Manti nur auftauchen, **wenn es ein Dokument gibt, das diese Begriffe miteinander verbindet.** Ein Kapitel ohne eigene Adresse wird als Textstelle schlechter zitiert als ein Dokument mit eigener Überschrift und eigenem Zweck.

**Der ehrliche Vorbehalt: Dafür gibt es keine Messung.** KI-Sichtbarkeit taucht in der Search Console nicht getrennt auf. **Das ist eine Wette, keine Ableitung**, und sie wird hier als Wette geführt. Sie ist billig — eine Seite —, und derselbe Text trägt die Brücke auch für menschliche Leser. Deshalb wird sie eingegangen.

### Der Stand: drei Seiten

**1 · `/wissen/manti/`** — was Manti ist, woher es kommt, wie man es isst. Regionen und Esskultur als Kapitel mit eigenen Überschriften.
**2 · `/wissen/verwandte/`** — die Brücke von Ravioli, Tortellini, Gyoza, Pierogi, Pelmeni her. Vergleichsabsicht, eigener Titel.
**3 · `/wissen/mal-was-anderes/`** — Brücke für semantischen Abruf, trägt den Kernsatz aus 2.3. **Wird nicht an Klicks gemessen** (Maßstab siehe unten).

Kein Hub unter `/wissen/`. `/wissen/manti/` ist der Einstieg.

### Der ursprüngliche Fünf-Seiten-Vorschlag vom 25. August — überholt, zur Nachvollziehbarkeit erhalten

**1 · `/wissen/manti/` — was Manti ist.** Die Kernseite. Bedient „manti" allein (2.022 Impressionen, Position 8,2, **23 Klicks**), „mantı" (290), „manti essen" (287), „türkische manti" (89), „manti türkisch" (49), „was ist manti essen" (16). Heute antwortet darauf die Startseite. Hierher gehört das Kayseri-Material aus 7.12 — vier Gramm je Manti, vierzig Stück auf einen Löffel, als alte Prahlerei, bewusst aus dem Hero entfernt. **Nicht hierher: Rezept, Herstellung, Zutatenliste.**

**2 · `/wissen/verwandte/` — Manti neben Ravioli, Tortellini, Gyoza, Pierogi, Pelmeni.** Die einzige Seite mit vollständig unbedienter, gemessener Nachfrage: 27 Anfragen, 107 Impressionen, **null Klicks**, alle auf Position 9 bis 12. **Unterscheidungsmerkmale statt Rangfolge** — Größe, Teig, Füllung, Sauce, Garart, Herkunft. **Nicht hierher: „Manti sind die türkischen Ravioli".** Der Vergleich erklärt, er ordnet nicht unter. Und „Nudeln" bleibt Brücke, nicht Kategorie (17).

**3 · `/wissen/regionen/` — wo welches Manti herkommt.** Gibt der Tabelle aus 7.12 einen Ort. Kayseri · Erzurum, Kars, Sivas · Ardahan, Posof · Sinop nur für die Servierart. **Die drei Vorbehalte aus 7.12 gelten wörtlich**, insbesondere: keine Herleitung von „Hingel" aus „Hinkali", und bei Melted Heart gehört nur die Servierart nach Sinop, nicht das Ei im Teig.

**4 · `/wissen/wie-man-manti-isst/` — Joghurt, Butter, Sumach, Minze.** Die Frage, die ein Gast beim ersten Mal wirklich hat. **Für diese Seite gibt es keine gemessene Nachfrage** — sie steht hier, weil sie die Kernseite trägt, nicht weil die Suchdaten sie belegen. Das ist der ehrliche Stand und beim Streichen zuerst zu prüfen.

**5 · `/wissen/mal-was-anderes/` — für alle, die keine Teigtaschen wollen.** Trägt den Kernsatz aus 2.3, so wie es dieser Abschnitt seit jeher vorsieht. **Markenseite, keine Suchseite.** Sie wird nicht an Klicks gemessen.

**Ausdrücklich nicht gebaut:** eine Rezeptseite — sie ersetzt die Bestellung durch eine Kochanleitung und tritt gegen tausend Rezeptportale an. Und nichts auf „manti kaufen"; das ist Versandabsicht und in 9.8 entschieden ausgeschlossen.

**Offen war der Zuschnitt von `/wissen/` selbst** — beantwortet am 27. August, siehe oben: Der Hub entfällt.

### Kayseri: vierzig auf einen Löffel — Auskunft von Taib, 27. August

**Taib zum Original: „das klassische nur, dass auf einen Löffel 40 Stück passen müssen."** Das ist der Kayseri-Maßstab aus 7.12, dort als „alte Prahlerei" verzeichnet.

**Ungeklärt und vor dem Schreiben zu klären: Ist das eine Aussage über die Tradition oder über unser Produkt?** Beide Sätze sind schreibbar, aber sie sind nicht derselbe Satz. „In Kayseri gilt: vierzig Stück müssen auf einen Löffel passen" ist Landeskunde. „Bei uns passen vierzig auf einen Löffel" ist eine Produktangabe und fällt damit unter die Regel aus 1.1 — sie wird nur geschrieben, wenn sie nachgezählt ist. **Bis zur Klärung wird die traditionsbezogene Fassung geschrieben.**

**Ein Maßstab, der vorher festzulegen ist.** „manti" allein ist eine bundesweite Wissensanfrage, und 9.8 zeigt für generische Anfragen durchgehend gute Positionen bei fast keinen Klicks. **Eine Wissensseite, die national rankt, bringt Leser, die in Mannheim nicht bestellen können.** Das ist kein Argument gegen die Seiten — Markenaufbau und Ranking sind hier laut 9.8 dasselbe Ziel —, aber es ist ein Argument gegen den falschen Maßstab. **Gemessen wird an Markenanfragen und an „manti mannheim", nicht an den Klicks auf `/wissen/`.**

**FAQ als Wegweiser, nicht als vierte Fassung.** Startseite unten sechs bis acht Fragen mit Verweis · FAQ-Seite alle Fragen kurz beantwortet, als Verteiler · Ernährungs- und Wissensseiten tragen die Tiefe.

**Warnung:** Google zeigt seit 2023 keine FAQ-Auszeichnungen mehr in den Suchergebnissen, außer bei Behörden- und Gesundheitsseiten. Der Nutzen ist heute allein das Ranking auf die konkrete Frage.

## 9.6a Die drei Wissensseiten sind geschrieben — 27. August

**Taib hat die drei Seiten am 27. August freigegeben („1. ja").** Die Volltexte stehen in `Wissensseiten-Texte.md` im Projektordner — **als Zwischenablage, nicht als Bestandteil des Auftritts.** Die Datei wird gelöscht, sobald der Text in `src/content/copy/wissen/*.json` steht; die Begründung ist dieselbe wie bei den Auftragsdateien aus 1.4.

**Titel und Beschreibungen, gemessen:** `/wissen/manti/` 58/138 Zeichen · `/wissen/verwandte/` 54/145 · `/wissen/mal-was-anderes/` 47/129. Alle Titel unter 60 nach der Regel in `routes.ts`.

**Umfang nach Taibs Antworten:** 962 · 855 · 633 Wörter. **Alle internen Verweise sind gegen `dishes.json` geprüft**, kein unbekanntes Ziel.

**Drei der vier Vorbehalte sind am 27. August erledigt.** Minze und Sumach: Taib — „gehören definitiv bei einem Manti-Gericht dazu" —, jetzt an zwei Stellen eingebaut, **beschrieben als klassische Servierart und nicht als unsere Karte.** Rind statt Lamm: Taib — „Die Allgemeinheit benutzt in der Regel nur Rind" —, aus „überwiegend Rind oder Lamm" ist „in der Regel Rind" geworden. Die vierzig auf dem Löffel bleiben Landeskunde, weil Taib noch nicht gezählt hat („das sende ich einfach nach"). **Der vierte Vorbehalt bleibt offen:** Die Angaben zu den fünf Verwandten liest Taib gegen, sobald die Texte auf der Seite stehen — veröffentlichbar, aber ungeprüft.

**Was die Texte ausdrücklich nicht enthalten** — maschinell nachgesehen: keinen Aggregatorverweis, keine Gleichsetzung „türkische Ravioli" (der Ausdruck steht einmal, in der Überschrift, die ihn zurückweist), keine Herleitung von „Hingel" aus „Hinkali", kein Rezept, keine Zahl über unsere eigenen Manti außer den 0,5–0,6 Millimetern aus `dishes.json`. **Kein „Sie" außer als Pronomen am Satzanfang**, viermal, geprüft.

**Vier fachliche Vorbehalte stehen am Ende der Datei und sind vor der Veröffentlichung zu klären:** getrocknete Minze und Sumach (weggelassen, weil unbelegt) · vierzig auf einen Löffel (steht als Landeskunde über Kayseri, nicht als Produktangabe über uns) · „überwiegend Rind oder Lamm" als vorsichtige Fassung · **die Angaben zu Ravioli, Tortellini, Gyoza, Pierogi und Pelmeni stammen aus allgemeiner Küchenkunde, nicht aus einer im Projekt hinterlegten Quelle.** Bewusst ohne Jahreszahlen und ohne Herkunftsbehauptungen geschrieben, aber sie brauchen einen Leser mit Küchenkenntnis.

**Der inhaltliche Kern der Vergleichsseite** ist ein Unterscheidungsmerkmal, das keiner der Verwandten teilt: **Ravioli bekommen eine Sauce, Manti bekommen Schichten.** Auf die gekochten Teigtaschen kommt kalter Joghurt, darauf warme Tomatensauce, darauf die Gewürze — und man bekommt alle Lagen zugleich auf einen Löffel. Bei Ravioli, Tortellini, Gyoza, Pierogi und Pelmeni liegt die Sauce oben oder daneben. Das ist der Satz, an dem die Seite hängt, und er erklärt nebenbei den Löffel.

**Berichtigt am 30. August, siehe 11.19.** Bis dahin stand hier „unten und oben — kalter Joghurt als Bett, die Teigtasche dazwischen". Das war falsch, und der Fehler lief durch sechs Inhaltsdateien. Der Joghurt liegt **auf** den Manti, nicht darunter.

## 9.6b Die drei Seiten stehen im Bau — Stand 28. August

`Wissensseiten-Texte.md` ist gelöscht, wie in 9.6a vorgesehen. Die Texte liegen in `src/content/copy/wissen/{manti,verwandte,anderes}.json`.

**Abschnittszahlen nach Auftrag 243:** `manti` sieben, `verwandte` neun, `anderes` vier.

`manti.json` — Der Teig · Die Füllung · Die Form, und warum die Größe eine Aussage ist · **Woher Manti kommt — die Regionen** (vier benannte Punkte: Kayseri, Zentralanatolien / Erzurum, Kars, Sivas — der Nordosten / Ardahan und Posof / Sinop an der Schwarzmeerküste; vier Gerichtverweise) · **Woher der Name „Hingel" kommt** (in 243 aus dem Regionen-Abschnitt herausgelöst) · Wie man Manti isst · Und wenn es nicht Manti sein soll (drei Verweise).

`verwandte.json` — **Fünf Fragen, an denen sich alles entscheidet** (fünf benannte Punkte: Wie groß? / Was im Teig? / Was in der Füllung? / Wie gegart? / Und was kommt drauf?) · Der eine Unterschied, den man sich merken kann · Ravioli · Tortellini · Gyoza · Pierogi · Pelmeni · Nein, Manti sind nicht „die türkischen Ravioli" · Wo du anfängst (vier Verweise).

`anderes.json` — Was es ist, in drei Sätzen (zwei Verweise) · Warum es sich als Abwechslung eignet und nicht als Mutprobe · Bei uns wird jeder fündig (sieben Verweise) · Wo es herkommt (zwei Verweise).

**Die endgültigen Kopfmarken** — Titles in `src/data/routes.ts`, Descriptions in `src/content/meta.json`:

| Adresse | Title | Zeichen | Crumb | nav |
|---|---|---|---|---|
| `/wissen/manti/` | `Was ist Manti? Türkische Teigtaschen erklärt \| MANTI & CO.` | 58 | Manti | `null` |
| `/wissen/verwandte/` | `Manti, Ravioli, Pelmeni: der Unterschied \| MANTI & CO.` | 54 | Verwandte | `null` |
| `/wissen/mal-was-anderes/` | `Mal was anderes essen in Mannheim \| MANTI & CO.` | 47 | Mal was anderes | `null` |

`nav: null` bei allen dreien — die Leiste bleibt bei vier Einträgen. Erreichbar sind die Seiten über den Fußbereich und über die Verweise aus den Gerichts- und Ernährungsseiten.

**Kein `noindex`.** Die englischen Fassungen stehen als Route bereit (`/en/what-is-manti/`, `/en/related-dumplings/`, `/en/something-different/`) und sind textlich `pending`.

## 9.6c Die Tomatensauce — ein Zählfehler in drei Runden

**Aufbewahrt, weil das Muster wichtiger ist als die Sache.** Taib am 27. August: „Manchmal stimmt nicht. Klassisch ist es Joghurt mit Knoblauch mit Tomatensauce und eben Gewürze. Aber Tomatensauce gehört definitiv dazu."

Erste Zählung: fünf Stellen. Zweite Zählung, diesmal auch nach Gegenbehauptungen: acht. Tatsächlich elf. Die drei zusätzlichen fand Claude Code — **darunter `meta.json`, also die Beschreibung genau der Seite, deren ersten Absatz die Korrektur betraf.** Der Suchraum war `src/content/copy/`, und das war zu klein.

**Die acht Stellen aus Auftrag 243** (erledigt, Commit `fbdda09`): Einleitung `manti.json` · Kayseri-Punkt · „Wie man Manti isst" erster und zweiter Absatz · Merksatz „unten und oben" auf `/wissen/verwandte/` · Ravioli-Absatz („die Säure kommt vom Joghurt **statt von der Tomate**" — eine Gegenbehauptung) · „Joghurt **statt Tomate**" im Ravioli-Zurückweisungsabschnitt (zweite Gegenbehauptung) · Dreisatzfassung auf `/wissen/mal-was-anderes/`.

**Die drei Stellen aus Auftrag 244**: `meta.json` `wissenManti.description` · Pelmeni-Absatz („dass bei Manti die Butter obenauf gehört") · „die kalte Säure des Joghurts unter der warmen Butter" auf `/wissen/mal-was-anderes/`.

**Zwei Stellen werden ausdrücklich nicht geändert.** `manti.json` „Wenn du unsicher bist, was du dazu wählst: Joghurt und Tomatensauce ist die Fassung, die die meisten das erste Mal bestellen" — der Satz spricht über **unsere Bestellstrecke**, in der die Sauce gewählt wird, nicht über die klassische Servierart. Und `meta.json` `home.description` „Teigtaschen auf Joghurt — wie Ravioli, nur anders" — damals als Einordnung stehen gelassen. **In Auftrag 249 doch geändert**, weil „auf Joghurt" nach der Berichtigung vom 30. August auch als Einordnung die Lage verdreht. **Eine Stelle, die nichts Falsches sagt, wird nicht angefasst, nur weil sie zum selben Thema gehört.**

**Offen bleibt eine Prüfung außerhalb des Codes:** ob in der Foodamigos-Bestellstrecke bei The Original die Tomatensauce vorausgewählt ist. Seit `fbdda09` behauptet `/wissen/manti/`, sie gehöre dazu.

## 9.7 Geschriebene Texte — wo sie stehen

Die vollständigen Wortlaute von Hero, Proof-Zeile, Aktionsleiste, Bestseller-Abschnitt, „Warum anders", den vier Herstellungsschritten, dem Küchenabsatz, dem Bestellabschnitt, den acht Gästestimmen, der Standortseite, dem Treueprogramm, allen Titles und Descriptions sowie dem Impressum stehen **im Repository**, nicht in dieser Datei: `src/content/copy/home.json`, `src/content/meta.json`, `src/content/copy/legal/impressum.json`, `src/content/dishes.json`.

**Titles und Descriptions liegen getrennt.** Die Descriptions stehen in `src/content/meta.json` (13 Einträge), **die Titles in `src/data/routes.ts`** — nicht im Content-Verzeichnis. Wer einen Title ändert, ändert eine TypeScript-Datei, keine Inhaltsdatei. Das ist der Grund für den Punkt „fehlende `title`-Felder" in der Ausschlussliste von 234.

**Das ist Absicht.** Eine zweite Textquelle in einer Gedächtnisdatei läuft mit dem Repository auseinander — genau der Fehler, den die Regel „Preise nur an einer Stelle" verhindern soll. Wer einen Wortlaut braucht, liest ihn dort.

**Zwei Dinge, die dabei zu beachten sind:** Alle Texte in älteren Gedächtnisdateien stehen noch im **Sie** und enthalten teilweise „Kein Bindemittel" — beides überholt. Und die Gästestimmen sind Zitate: Schreibfehler bleiben stehen, sie werden nie angefasst und sind vom Anrede-Gatter ausgenommen.

## 9.8 Der Suchbestand vor dem Umstieg

**Quelle:** Search-Console-Export im Ordner `SC-25-08-26/`, Filter „Letzte 16 Monate", Suchtyp Web. **Tatsächlich abgedeckt sind rund zehn Monate — 15. Oktober 2025 bis 22. August 2026**, weil der Auftritt vorher nicht lief. **Damit ist die Frist erledigt: Der Export enthält die vollständige Geschichte der Domain.** Nicht abgeschnitten — 815 Anfragen, 33 Seiten, das Limit der Oberfläche liegt bei 1.000.

**Alle Zahlen hier beschreiben den alten Auftritt**, nicht den neuen. Genau deshalb wurde der Export gebraucht: Die Pfade wechseln.

**Wichtige Einordnung: Die Klicks stammen überwiegend aus der Foodamigos-Seite, die seit 03/2026 läuft — rund fünf Monate, nicht zehn.** Die Zahlen beschreiben also im Kern einen Fünfmonatszeitraum, und zwar den eines Auftritts, der **alles auf der Startseite erklärt**. Das erklärt beides zugleich: warum die Startseite 94 Prozent der Klicks trägt und warum die Unterseiten gefunden, aber nicht geklickt werden. **Die 2.890 Klicks sind kein Zehnmonatsdurchschnitt, sondern eine Fünfmonatsleistung** — beim Vergleich nach dem Umstieg gehört das berücksichtigt.

**Gesamt:** 2.890 Klicks, 48.834 Impressionen über die Seiten gerechnet. Deutschland 2.783 Klicks, danach lange nichts — Türkei 12, Schweiz 7, Österreich 6. Mobil 2.290 Klicks bei Position 4,39, Computer 550 bei Position 9,39, Tablet 10. **Mobil rankt doppelt so gut. Wer für diesen Auftritt gestaltet, gestaltet mobil.**

**Neunzehn Markenanfragen tragen 1.591 der 1.922 zugeordneten Klicks — 83 Prozent.** 796 Nicht-Markenanfragen bringen zusammen 331 Klicks bei 11.868 Impressionen. **Der Auftritt wird gefunden und nicht geklickt.** (Die Lücke zwischen 2.890 und 1.922 sind anonymisierte Anfragen, das ist normal.)

**Die stärkste Nicht-Markenanfrage ist „manti mannheim":** 3.795 Impressionen, 202 Klicks, Position 4,4. Das ist der lokale Kern und er funktioniert.

**Die größte ungenutzte Position ist das Wort „manti" allein:** 2.022 Impressionen, Position 8,2, **23 Klicks**. Dazu „manti essen" 287 · „mantı" 290 · „türkische manti" 89 · „manti türkisch" 49 · „was ist manti essen" 16. Alles Wissensabsicht, und heute antwortet darauf eine Startseite. **Das ist der Beleg für die Wissensseiten, nicht mehr nur die Begründung.**

**Die Abgrenzung zu den Verwandten hat messbare Nachfrage:** 27 Anfragen, 107 Impressionen, **null Klicks**, alle auf Position 9 bis 12 — „manti nudeln" 15 · „türkische pasta" 13 · „dumplings mannheim" 12 · „pasta manti" 8 · „turkish pasta" 7 · „türkische tortellini" 5. Klein, aber vollständig unbedient. Die Abgrenzungsseite ist damit belegt.

**Eine Kaufabsicht, die niemand bedient:** „manti vegetarisch kaufen" 23 · „vegetarische manti kaufen" 23 · „manti vegan kaufen" 22 · „vegane manti" 13, alle Position 8 bis 17, **ein einziger Klick auf 119 Impressionen**. Dazu „manti kaufen" 60 und „manti nudeln kaufen" 5. **Das Wort „kaufen" ist Versandabsicht, kein Restaurantbesuch — und wir versenden nicht.** **Entschieden (siehe 15): Es wird kein TK-Versand aufgebaut und keine Seite auf „manti kaufen" gerichtet.** Die 119 Impressionen bleiben unbedient, und das ist die Entscheidung, nicht ein Versäumnis.

**Wettbewerbernamen bringen 1.017 Impressionen:** „manti manufaktur mannheim" 356 · „mantici mannheim" 175 · „manti und grillhaus" 122 zusammen · „bio manti" 86 · „mantici" 82 · „manti dream" 33 · „world of manti" 33. Der Auftritt erscheint dort und bekommt 12 Klicks. **Die Kategorie wird über Markennamen gesucht** — ein Argument dafür, dass Markenaufbau und Ranking hier dasselbe Ziel sind, kein Widerspruch.

**Generische Essensanfragen gibt es, und sie bringen nichts ein:** 146 Anfragen, 976 Impressionen, 17 Klicks. „manti turkish near me" 234 auf Position 5,6 · „food near me" 37 auf 3,4 · „restaurant" 34 auf 3,9 · „restaurant in der nähe" 32 auf 2,9 · „essen und trinken" 26 auf 3,4 · „bringdienst mannheim" 103 auf 14,6 · „lieferservice mannheim" 30 auf 2,7 · „döner in der nähe" 38 auf 1,9. **Gute Positionen, so gut wie keine Klicks.** Die Vision „jeder ist unser Kunde" ist damit weder widerlegt noch erfüllt — die Sichtbarkeit existiert, sie wandelt sich nur nicht.

**„manti turkish near me": 234 Impressionen, Position 5,6, null Klicks.** Die `/en`-Sektion des alten Auftritts hat zehn indexierte Seiten, 2.252 Impressionen und 24 Klicks. **Das ist ein Argument, die Mehrsprachigkeit früher anzusehen als „später" (16.6, Punkt 26).**

**Halal: null Anfragen im gesamten Zeitraum.** Kein Grund, die Seite zu streichen — es steht nichts dazu auf der Domain, also kann auch nichts ranken. Aber die Dringlichkeit ist geringer als gedacht.

**Die Unterseiten stehen gut und werden nicht geklickt:**

| Seite | Impressionen | Klicks | CTR | Position |
|---|---|---|---|---|
| `/` | 25.903 | 2.712 | 10,47 % | 4,79 |
| `/standort-und-oeffnungszeiten` | 5.337 | 38 | 0,71 % | 5,07 |
| `/speisekarte` | 3.455 | 73 | 2,11 % | 7,97 |
| `/ueber-uns` | 3.426 | 16 | 0,47 % | 3,61 |
| `/angebote` | 3.034 | 18 | 0,59 % | 3,12 |
| `/belohnungen` | 1.892 | 3 | 0,16 % | 2,55 |
| `/en` | 1.942 | 23 | 1,18 % | 5,38 |

**Die Startseite trägt 2.712 der 2.890 Klicks — 94 Prozent.** Der ganze übrige Auftritt bringt 178.

**`/belohnungen` wurde gefunden, aber nicht geklickt.** 1.892 Impressionen, **drei Klicks, 0,16 Prozent** — die schlechteste Klickrate im ganzen Bestand, bei der besten Position (2,55). Die Nachfrage nach dem Treueprogramm ist damit belegt, der Auftritt fängt sie nicht. **Das ist ein Argument für eine eigene Seite mit eigenem Titel, nicht gegen das Programm.**

**Englisch wird genutzt:** `/en` 1.942 Impressionen, 23 Klicks, 1,18 Prozent — die zweitbeste Klickrate nach der Startseite, und über alle zehn `/en`-Seiten 2.252 Impressionen bei 24 Klicks. Zusammen mit den englischsprachigen Gästen der letzten Monate ist das der Beleg für Mehrsprachigkeit (siehe 15).

**Sechzehn Shop-Seiten unter `/ap/…` sind indexiert:** 3.472 Impressionen, **sechs Klicks**. Darunter Gerichtseiten wie `/ap/4097/58691/the-co-s/fermento` und Getränkeseiten. **Diese Adressen verschwinden beim Pfadwechsel.** Sie sind klickseitig wertlos, aber sie sind indexiert — die Weiterleitungen gehören geplant, bevor umgestellt wird, sonst stehen 3.472 Impressionen auf 404.

**Vermutung, nicht Befund:** Position 2,5 bei 0,2 Prozent Klickrate ist kein Titelproblem, sondern sieht nach Markenanfragen aus — wer „manti und co" sucht, erzeugt Impressionen auf allen Unterseiten und klickt das Hauptergebnis. **Zu prüfen, bevor daraus eine Maßnahme wird:** in der Search Console nach Seite filtern und die zugehörigen Anfragen ansehen. Solange das nicht geprüft ist, wird an keinem Title etwas geändert.

## Archiv 11 — Was die grünen Gatter nicht beweisen (Einleitung)

**Der Grundsatz:** Eine Prüfung, die nichts geprüft hat, besteht nicht. Eine Messung, die nicht zustande kam, ist kein Nullwert.

Der grüne Lauf über 977,5 Sekunden mit `GATTERLAUF: pass (9 von 9)` und `GATES_EXIT=0` bewies bis Auftrag 234 nur, dass kein Skript abgestürzt ist.

**Neun Stellen, an denen eine Prüfung bestehen konnte, ohne etwas geprüft zu haben** — gemessen in Auftrag 233, nicht vermutet. Der Stand nach 234 steht dahinter:

| # | Befund | Stand |
|---|---|---|
| 1 | `diet-check` meldet auch bei `checked = 0` ein Bestehen | geschlossen |
| 2 | Unbekannte Zutaten werden gezählt, führen aber nie zum Durchfallen | geschlossen |
| 3 | `a11y` protokolliert `results.incomplete`, zählt sie aber nie zu den `violations` | geschlossen |
| 4 | `hover`: unveränderte Zustände werden gezählt, führen nie zum Durchfallen | **gemeldet, nicht scharf** — 336 unverändert, 0 verloren |
| 5 | `hover`: verlorene Zustände ebenso | **gemeldet, nicht scharf** |
| 6 | `thirdparty` übersieht Adressen, die erst im JavaScript zusammengesetzt werden | **offen**, Vorschlag liegt vor (siehe 11.1) |
| 7 | `teilbild`: der Riegel greift erst, wenn gar kein Bild vorhanden ist | geschlossen |
| 8 | `budget`: eine fehlende Seitenform erzeugt nur `console.log` | geschlossen |
| 9 | `budget`: ein LCP von 0 ms besteht die Prüfung „unter 1800 ms" | geschlossen |
| 10 | `a11y`: der Fokusring-Befund konnte nie fallen | **geschlossen in 253** |

**Befund 10, gefunden am 30. August und der teuerste bisher.** `a11y.mjs` prüfte den Fokusring mit `getComputedStyle(el, ':focus-visible')`. Das zweite Argument nimmt ein **Pseudo-Element**, keine Pseudo-Klasse; für eine unbekannte Angabe gibt Chrome eine leere Deklaration zurück. Daraus wurde `" "`, und `" "` beginnt nicht mit `0px` und enthält kein `none`. **Jedes „0 ohne Fokusring" seit Auftrag 234 war die Abwesenheit einer Messung, nicht die Abwesenheit eines Fehlers** — über zwanzig Aufträge grün, an der Stelle, die für Menschen ohne Maus über Benutzbarkeit entscheidet.

**Aufgefallen ist er nur, weil die Gegenprobe nicht fiel.** Die Zeile „belegen, dass es fällt" steht seit 244 in jedem Auftrag; hier hat sie zum ersten Mal nicht die Änderung geprüft, sondern die Prüfung.

Behoben in 253: gefragt wird jetzt am Element und an `::before` und `::after`. Die erste Reparatur wurde verworfen, weil sie 78 Halte meldete — `.card__link:focus-visible` setzt ausdrücklich `outline: none` und zeichnet den Ring auf `::after`. **Eine Übermeldung ist auch ein kaputtes Gatter.** Nach `box-shadow` wird nicht gefragt; bei allen aufgefallenen Halten stand `none`, gemessen und nicht vermutet. Klassendurchsicht: drei lebende Aufrufe mit zweitem Argument, die beiden anderen übergeben echte Pseudo-Elemente.

**Zu 4 und 5 gibt es jetzt Zahlen: 336 unveränderte Zustände, null verlorene.** Damit ist klar, was ein scharfes Gatter kosten würde — 336 Fälle, die einzeln zu beurteilen sind. Das ist kein Auftrag, das ist ein Arbeitsprogramm. **Solange keiner verlorengeht, ist die Meldung ausreichend.** Sobald die Zahl der verlorenen über null steigt, wird sie scharf.

**Dieses Muster ist im Projekt schon dreimal aufgetreten:** `diet-check` stand grün und prüfte null Gerichte, weil die Zutatenlisten fehlten. Die Kontrastsonde las Elemente aus `overflow:hidden` und meldete einen falschen Zähler. Das a11y-Gatter fiel wegen einer leeren Menge durch und brach danach vierzehn Prüfungen still ab.

**Und der `bypass`-Befund, gemessen:** Eine Seite ohne `main`, ohne Überschriften und ohne Sprunglink geht durch das a11y-Gatter. Null Verstöße, Gatter grün. Grund: `bypass` läuft als `reviewOnFail` — ein echtes Durchfallen wird zu `incomplete` herabgestuft, und die Zählzeile liest nur `violations`. Dasselbe gilt für `aria-valid-attr-value`: Ein hängender `aria-labelledby`-Verweis geht durch.

axe-core 4.13.0, 70 Regeln aktiv, 45 können `incomplete` ausgehen, davon 42 im Gatter. Drei Gruppen: **Gruppe 1** stellt einen Mangel fest, ohne Zweifel (14 Regeln zur `aria-labelledby`-Prüfung, `duplicate-id-aria`, `bypass`, `td-headers-attr`, `th-has-data-cells`, `server-side-image-map`, `aria-required-children`, `aria-no-deprecated-attr`). **Gruppe 2** kann axe nicht sehen — ein Versäumnis nur, wenn es sonst niemand misst: `color-contrast` ist durch `contrast.mjs` gedeckt, **`link-in-text-block` nicht.** **Gruppe 3** erfordert menschliches Urteil, kein Befund.

## Archiv 18 — Was zuerst zu tun ist (Einleitung)

1. **Metro-Antworten hochladen.** `diet-check` steht seit 234 rot — 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten. Die Metro-Angaben sind die einzige Sache, die es wieder grün macht. **Das ist jetzt der Engpass, nicht mehr ein Punkt unter anderen.** Am 25. August erneut nachgefragt, Antwort: noch nicht da, **und Taib hat ausdrücklich gesagt, dass abgewartet wird — „so schnell geht das nicht".** Ich hatte eine Frist vorgeschlagen; das ist zurückgenommen. **Nicht mehr nachhaken, bis Taib es sagt.** Sie stehen über vier Aufträge hinweg aus (234 bis 237). Die Folge bleibt trotzdem stehen und ist beim Starttermin einzurechnen: **`diet-check` kann vor dieser Antwort nicht grün werden, und kein anderer Auftrag ändert das.**
2. ~~Auftrag 237~~ **gelaufen, elf Commits, nichts offen** (11.8).
3. ~~Häkchen setzen~~ **entschieden: wird nicht gesetzt** (7.7). Churros bleiben vegetarisch, in den Daten ändert sich nichts. Offen ist nur noch, ob der vegane Teig im Fließtext genannt wird — und ein Blick in die Bestellstrecke, ob bei den Pommes wirklich keine Sauce vorausgewählt mitläuft.
4. ~~Auftrag 240~~ **gelaufen, sechs Commits** (11.9). Offen daraus: **zwei Kommentare tragen die alte Mittenspanne 0,4971–0,5020**, richtig ist 0,4961–0,5020 (`derive-bottles.mjs:118 f.`, `bottle-axis.mjs:46`), und **`Auftrag-03-ClaudeCode.md` liegt als ungestagte Löschung im Baum**. Beides klein genug, um an den nächsten Auftrag angehängt zu werden.
4b. **Die zwei Ernährungssätze für Pommes und Churros einbauen** (7.7). Kein Chip ändert sich, nur Text. Kleiner Auftrag, kann an einen größeren angehängt werden.
5. **Auftrag 238: `production` sichtbar machen.**
6. **Auftrag 239: Sprachgerüst auf N Sprachen.** Drei Stellen aus `LANGS` erzeugen statt buchstabieren — `i18n()`, `Localized<T>`, `routes.text`. **Keine dritte Sprache in diesem Auftrag.** Solange jeder englische Eintrag `pending` ist, ist der Umbau am billigsten; danach hat eine geschriebene zweite Sprache Annahmen, die die dritte bricht.
7. ~~Die Wissensseiten~~ **erledigt: drei Seiten, gebaut in 242, korrigiert in 243** (9.6b). Die Reihenfolge, die dabei galt und weiter gilt: erst der vollständige deutsche Bestand, dann Englisch **in einem Zug**. Wer übersetzt, ehe das Deutsche steht, schreibt jeden später ergänzten Text zweimal.
8. **Weiterleitungen zuletzt, aber alle in einem Auftrag** — deutsch, `/en` und die sechzehn indexierten `/ap/…` (9.8). Getrennt beauftragt entstehen zwei Listen, die auseinanderlaufen.

## Archiv 18.1 — Die Reihenfolge für Phase 4 — Stand 31. August


**Gelaufen bis 259** (11.15 bis 11.30). **Die Schnipsel-Ebene ist komplett:** alle 41 Routen tragen Titel und Descriptions in beiden Sprachen, dazu die 27 englischen Gerichtsnamen; die Längenstufe prüft 108 Gerichtsfelder, 41 Titel, 40 Descriptions. Fußbereich und Rollbalken sind, wie Taib sie wollte. `LIVE_LANGS` ist der Schalter.

**Die Reihenfolge ab hier:**

**Sitzungsstart für Claude Code (Wortlaut):**

> Projekt: site-light unter /Users/taibdemirci/Desktop/MANTI/Bilder/NEW PF/site-light. Lies PROJEKTGEDAECHTNIS.md vollständig, bevor du irgendetwas tust — zuerst Abschnitte 15, 17 und 18.1, dann den Rest. Der Stand des Projekts liegt im Repository und in dieser Datei, nirgends sonst; was in früheren Sitzungen gesagt wurde, gilt nur, soweit es dort steht. Danach: git log --oneline -10 und git status berichten, dann warten auf den Auftrag.

**Übergabe, wenn eine Sitzung mitten im Auftrag endet:** neue Sitzung mit dem Startsatz, darunter der vollständige Auftragstext, dazu: §A erst messen (git log, git status, git diff --stat, /tmp-Artefakte, Tafel je Abschnitt: erledigt / angefangen / offen — berichten, bevor etwas geändert wird); §B je Zustand: Erledigtes stichprobenweise gegenprüfen, Angefangenes Paar für Paar vervollständigen oder nach Sicherung des Diffs zurücksetzen und neu ausführen, Offenes in Auftragsreihenfolge; §C Gegenproben, Gatter und Bericht vollständig, mit Teil 0 „Übergabe". Belegt in 263.

1. **Hoster-Auswahl mit Taib** — Stand 2. September, mit der ganzen Vorgeschichte, damit sie nie wieder verlorengeht:

   **Historie:** Phase 1 empfahl Cloudflare doppelt — als Zwischenschicht fürs Pfad-Routing („der Hoster wird austauschbar“) und **Cloudflare Pages** als Hosting; die Empfehlung steht bis heute in der Umbau-Roadmap. Phase 2 relativierte: US-Unternehmen, Art.-28-Vertrag, Drittlandgrundlage, längere Datenschutzerklärung — „europäische Alternative wäre einfacher“. **Seit der Subdomain-Entscheidung ist das Routing-Argument weggefallen** — die Hauptdomain trägt nur noch statische Dateien.

   **Taibs Gewichtung (2. September): Komfort und Konzerngedanke schlagen den Einmal-Text der Datenschutzerklärung** — meine IONOS-Neigung war falsch gewichtet; IONOS gefällt Taib generell nicht (alles separat, am Ende Profipreis). GoDaddy ausgeschieden (US-Preis ohne Cloudflare-Gegenwert, Upsell). Hostinger: EU, tauglich, aber seine Stärke ist der spätere VPS — und **Architektur-Grundsatz, entschieden: öffentliche Website und interner Datei-Server gehören nie auf dieselbe Maschine**; der Server für zentrale Dateien und Backups ist eine eigene, spätere Entscheidung und wählt nicht den Website-Hoster.

   **Neigung damit: Cloudflare Pages** — Push-Deploy löst git-Remote, Repo-Backup und automatischen Bau in einem, kostenlos, Franchise-skalierend. Der eine Arbeitsschritt: Nameserver-Umzug der Zone zu Cloudflare (bleibt Taibs Konto), `bestellen`-Eintrag als reiner DNS-Eintrag übernehmen (Foodamigos-TLS läuft weiter), Foodamigos informieren (ihr IONOS-DNS-Zugang wird hinfällig); die Domain-Registrierung kann bei IONOS bleiben. **Entschieden (Taib, 2. September): Cloudflare Pages — „besser für den Start“.** Stand abends: ⑴ Konten ✓ · ⑶ Nameserver-Umzug ✓ (Zone aktiv; Proben offen; Foodamigos noch nicht informiert, dass ihr IONOS-DNS-Zugang hinfällig ist) · ⑵ Push ✓ (273) · ⑷ **Pages-Projekt — davor 274: Frischklon-Bautest** (Pages klont und baut; `.gitignore` führt `src/assets/plates/` — der Bau aus dem Klon muss byteidentisch zum Hauptbaum sein, sonst wiederholt sich die Schriften-Lücke), dann die Pages-Einstellungen aus dem Bericht (Build-Befehl, Ausgabeordner, Node-Version), Taib verbindet GitHub in der Cloudflare-Oberfläche, erster Bau, Vorschau-URL, Vergleich Vorschau gegen lokales dist · ⑸ Datenschutz-Absatz mit Cloudflare (Art. 28, DPF). Der Livegang selbst bleibt Taibs www-Umstellung nach der Testbestellung.

2. **Live, 286 gelandet (e336021).** Nummern: 284/285 = Wortmarke-PNG, 286 = Hinweissatz, **287 = Korrekturen und Feinschliff, dann das Wissenssystem** (Rezept-Skript `npm run wortmarke`, `astro check` als 13. Gatter, sharp-Audit mit Byteprobe, `docs/`, Wanderung nach mantiandco/wissen). **Danach offen im Code:** pages.dev per Access-Policy schließen (Taib-Klick + Beleg) · Hero DPR 3 (1120er 168 kB) · Nährwerte (bei allen 27 null) · Hauptversionen aus `npm audit` (astro ≤ 7.2.7 critical, puppeteer, esbuild — Bruchwechsel, je eigener Auftrag) · sharp 0.35, falls die Byteprobe in 287 nicht identisch ist. **Taib jetzt:** Öffnungszeiten bei Google, Lieferando, Foodamigos auf 11–21 täglich; Woche 1 der Hebel-Liste. **Außerhalb des Codes, jetzt wichtiger als jeder Auftrag:** die vier Herstelleranfragen (diet 6 → 0) · Google-Unternehmensprofil prüfen (Website-Link, Öffnungszeiten, Bestell-Link auf bestellen.*) · Rechtstexte zum Anwalt (Shop-AGB, Widerruf, Datenschutz-Gegenlese) · Foodamigos-noindex nachhalten · Restaurant-Horizont. Später: pages.dev per Access-Policy, sharp-Audit, Nährwerte.

3. **Sammel-Nachtrag bei Gelegenheit:** kommentar-Beschriftung · git-Identität · TS-Hinweis Standort.astro · en-Slug-Kosmetik.

3. **Was danach fehlt, ist kein Text:** sieben Legal-Hüllen (AGB, Datenschutz, Widerruf — Anwalt, Hosting; Datenschutz muss Stripe **und Adyen** nennen), `ingredients.marks` (Gesetzeswortlaut, schreibbar), `sides.marks` (Herstellerdaten), **Nährwerte** (bei allen 27 null; keine Pflicht für lose Ware — Taibs Entscheidung), `video`.

4. **Das Restaurant** (Taib, 1. September: Gespräche laufen, im besten Fall drei bis vier Monate): Kommt es, ändern sich FAQ (vor Ort essen), Standort (Sitzplätze, Zeiten), die Titel-Regel „Restaurant scheitert, solange es keines gibt" — und die Seite bekommt eine eigene Restaurant-Ebene. Nichts davon vorher; ein Datum aus Gesprächen steht nicht auf der Seite.

3. **`dishes.json` und `drinks.json` sind seit 264 vollständig zweisprachig.** Danach: `intro`, `line`, `sauce`, `sauceTitle` und was sonst ausstehend ist (437 ursprünglich, 81 davon durch Tranche 2 und 2b erledigt). Dabei `voices()`/`video()` ohne `lang` (11.25).

3. **Die Wissens-, Ernährungs- und FAQ-Seiten** in je einer Tranche.

4. **Der `/en/`-Schalter** — `LIVE_LANGS = ['de', 'en']`, erst wenn alle Schlüssel stehen. Dann wird der Gatterlauf lang: die Speicherform aus 254 auf `contrast`, `hover`, `a11y` ausweiten, ein Gatter je Auftrag.

5. **Die FAQ auf der Startseite.** Sechs Betriebsfragen als Anriss mit Verweis auf `/faq/`, keine inhaltlichen.

6. **Die Sollwerte aus `routes.ts` ableiten** (11.21). Sieben von neun, danach bleiben zwei Handwerte.

**Was parallel läuft und an niemandem im Projekt hängt:** die Metro-Antworten (Engpass für `diet-check`, 24), die Halal-Lieferkette (diese Woche), die Schokostückchen, Hosting und Art-28-Vertrag, das Foto der vierzehn Elephant-Bay-Zutatenlisten.

**Livegang-Liste (wächst, wird vor der Veröffentlichung abgearbeitet):** ~~`public/fonts/` nicht in git~~ **im Repository seit 268 (OFL-Lizenzen daneben)** · ~~`PROJEKTGEDAECHTNIS.md` untracked~~ **im Repository seit 263 (`f2befaf`), jeder Auftrag committet es zuerst** · ~~der Bau braucht `../.toolchain/node22`~~ **erledigt in 260/261: `.nvmrc`, `engines`, README, Vorprüfung im Bauskript** · **`git clone` gegen GitHub scheitert mit HTTP 401 — Schlüsselbund bereinigen, bevor ein Remote kommt (11.31)** · **den Hosting-Anbieter entscheiden, bevor die Weiterleitungskarte gebaut wird — `_redirects` ist Netlify/Cloudflare-Format** · LCP/CLS für 390 px einmal messen · **`BUDGET_VOLL=1 npm run gates` als voller Lauf ohne Speicher** · die Weiterleitungskarte · Hosting · Rechtstexte · die Zeiten-Synchronregel `site.ts` ↔ Bestellstrecke · `builtLangs()` braucht mit den Rechtstexten die dritte Bedingung (11.28).

**Kleine offene Reste:** Abschnitt 16, Punkt 20 (Ausschlussliste von 234 — Status ungeklärt) · `derive-bottles.mjs:51` (Begründung widerlegt, 11.16) · die fünf Kommentare mit „37 Routen" aus 251 §6b (alt, nicht falsch) · die doppelte Treueprogramm-Frage auf `/faq/` und `/treueprogramm/` · `Geräte.csv` noch nicht ausgewertet (Taibs 80–85 % mobil als Messung statt Schätzung) · `pending.mjs`: fünf alte Lücken, `npm run pending` endet mit exit 1 (kein Gatter) · ein verwaister Worktree-Eintrag `/private/tmp/n7base` (prunable) · zwei Apostroph-Hausschreibweisen nebeneinander, je Datei einheitlich (11.29); in `home.json:572` ein einzelner U+2019 im Altbestand (11.33) · der `astro check`-Hinweis zu `is:inline`.

**Technik** (Archiv 8 und 10 — Struktur, Datenmodell, Bauregeln, Gatter, Schranken) ist nicht hier wiederholt: sie steht wörtlich aus dem Archiv in `website/docs/` neben dem Code (gatter.md, erzeuger.md, bildstufen.md, protokoll.md, inhalte.md); die vollständigen Abschnitte 8 und 10 stehen im Archiv.
