# MANTI & CO. — Projektgedächtnis

**Stand:** 11. September 2026 — LIVE seit 3. September, Betrieb. **Gelandet bis 286** (e336021): 282 Öffnungszeiten täglich 11:00–21:00 und Kennzahlen-Streifen weg, 283 Standortseite eine Zeile je Band, 284/285 Wortmarke als PNG für die E-Mail-Signatur (`/img/brand/wortmarke-mail-hell.png`, 800 × 400), 286 Hinweissatz „Montag bis Sonntag.“ ohne „Ruhetag“. **287 (läuft): Korrekturen an dieser Datei, Rezept-Skript, `astro check` als dreizehntes Gatter, sharp-Audit, Doku neben dem Code (docs/) — und dann das Wissenssystem: diese Datei wandert eingefroren nach mantiandco/wissen/archiv/, das Wissen wächst dort als Journal, und ab 287 schreibt Claude Code es selbst.** Außerhalb des Codes: Woche 1 der Hebel-Liste (`Hebel-ausserhalb-des-Codes.md`, Projektwissen); Öffnungszeiten bei Google, Lieferando, Foodamigos (Taib).
**Was das ist:** Die einzige gültige Kontextdatei des Projekts. Sie fasst zusammen, was bis heute entschieden, gemessen und belegt ist. Ab jetzt wird nur noch diese Datei fortgeschrieben — keine neuen Sitzungsnachträge.

**Erste Anweisung:** Diese Datei vollständig lesen, bevor irgendetwas beantwortet wird. Abschnitt 1 ist keine Beschreibung, sondern eine Anweisung.

**Zweite Anweisung, neu am 28. August:** Nach dem Lesen dieser Datei den Quelltext lesen, bevor eine Aussage über den Quelltext gemacht wird. Diese Datei beschreibt den Bau, sie *ist* er nicht. Die letzten vier Aufträge haben in Folge Fehler dadurch erzeugt, dass eine Vorgabe aus dem Gedächtnis geschrieben wurde statt aus der Datei, die sie ändern sollte — Abschnitt 17 zählt sie einzeln auf. **Der Mindestbestand vor dem ersten Auftrag:** `src/content.config.ts`, `src/data/routes.ts`, `src/lib/dish.ts`, `src/lib/copy-links.ts`, `src/pages/[dish].astro`, `src/pages/[diet].astro`, `src/pages/[...wissen].astro`, `scripts/gates.mjs` und die drei Wissensseiten-JSON.

**Was sie ersetzt:** `MANTI-CO-Projektgedaechtnis.md` · `UEBERGABE-MANTI-CO.md` · `Projektgedaechtnis-Sitzung-2026-08-19.md` · `Projektgedaechtnis-Sitzung-2026-08-24.md` · `Offene-Punkte-MANTI-CO.md`. Diese fünf Dateien sind ab sofort tot. Wo sie dieser Datei widersprechen, gilt diese.

**Was daneben bestehen bleibt** — Arbeitsdateien, keine Gedächtnisdateien:
`Rechtstexte-MANTI-CO.md` (Bestandsaufnahme der Foodamigos-Texte) · `MANTI-CO-Rechtstexte-Entwurf.md` (die Entwürfe selbst) · `Mail-an-Foodamigos.md` (gesendet) · `SEO-Roadmap-MANTI-CO.md` und `Umbau-Roadmap-site-light.md` (siehe 4.9 — beide sind in Teilen überholt) · `auftrag-233-bestand.md` (Repository-Bestandsaufnahme) · `/areas/manti-product-ops.md` (Verpackung und Beschaffung).

---

# 1. Betriebsanleitung

## 1.1 Wie gearbeitet wird

**Sprache: Deutsch.** Immer.

**Widersprechen, wenn eine Vorgabe falsch ist.** Taibs Wortlaut:

> „Nimm mein Wort nicht als Gesetz, sondern lass uns darauf bauend den richtigen Weg finden. Das Ziel ist entscheidend, nicht mein Wort."

> „Ich will, dass du selbstständig denkst, nicht auf meine Signale wartest. Es geht darum, dass du aus meiner Frage tiefer in die Sachlage gehst und nicht nur eine gerade Linie fährst, sondern wie eine Baumwurzel alle Themen bearbeitest."

> „Du bist derjenige, der diese 5–10 Schritte im Voraus erblicken muss und schauen muss, dass die Vision stimmt."

**Praktisch heißt das:** eine Vorgabe prüfen, bevor sie ausgeführt wird. Die Begründung mitliefern, nicht nur die Korrektur. Weiterdenken als gefragt, ohne auszuschweifen. Eigene Fehler benennen, sobald sie auffallen. Bei Zahlen und Fakten nachfragen statt schätzen.

**Nichts erfinden.** Eine Zahl, die nicht belegt werden kann, wird gestrichen — nicht abgeschwächt, nicht mit „ungefähr" versehen, nicht als Faustregel weitergereicht. Siehe 4.1.

**Vor jedem Rückbezug auf die Projektgeschichte erst suchen, dann behaupten.** Sätze wie „war nie vorgesehen" oder „hatten wir entschieden" sind Tatsachenbehauptungen über diese Datei.

## 1.2 Antwortformat

Knapp. Fließtext statt Aufzählung, wo Fließtext reicht. Keine Zusammenfassung der eigenen Arbeit, keine Wiederholung des Gesagten.

**Am Ende jeder Antwort steht, was Taib konkret zu tun hat** — höchstens drei sofort ausführbare Punkte. Weiter entfernte Aufgaben gehören in Abschnitt 16, nicht in jede Antwort.

## 1.3 Der wichtigste inhaltliche Grundsatz

**Die Startseite fängt und verweist. Sie erklärt nicht.**

Alles, was Erklärung braucht, bekommt eine eigene Seite. Ein Abschnitt gehört nur dann auf die Startseite, wenn er in drei Sätzen abgehandelt ist und auf eine Vollversion zeigt. Das ist nicht nur Übersicht: Jede eigenständige Seite kann für sich ranken, ein Abschnitt auf der Startseite kann es nicht.

## 1.4 Arbeitsteilung mit Claude Code

**Claude Code baut Struktur und Code. Der Chat liefert Texte, Strategie und Entscheidungen.** Claude Code erfindet keine Texte — fehlt einer, legt er einen `pending`-Schlüssel an und meldet ihn.

**Jeder Auftrag ist ein einziger kopierbarer Block. Er steht im Chat, nicht im Projektordner** — festgelegt von Taib am 25. August, nachdem Auftrag 240 als Datei abgelegt worden war. **Auftragsdateien werden nicht angelegt und vorhandene werden gelöscht.** Der Grund ist nicht Ordnung, sondern Eindeutigkeit: Eine Auftragsdatei im Ordner liegt neben dem Quelltext, den sie ändern soll, und wird beim nächsten Lauf mitgelesen — der Agent findet dann eine Anweisung, die er vielleicht schon ausgeführt hat, und kann nicht unterscheiden, ob sie noch gilt. **Der einzige Ordnerinhalt, der Bestand hat, ist diese Datei und das, was ausgeliefert wird.** Aufbau:

1. Nummerierte Abschnitte mit sprechenden Überschriften
2. Ersetzungen als vollständige Alt/Neu-Paare, nie als Beschreibung einer Änderung
3. Die Regel „keine Texte erfinden"
4. Die Sprachregeln aus Abschnitt 3
5. Die Qualitätsschranken aus Abschnitt 10
6. Git: nach jedem Abschnitt einzeln committen, Format `auftrag-NN(abschnitt): was` — **nur für Abschnitte, die etwas ändern.** Ein leerer Commit für einen reinen Melde-Abschnitt wäre eine Behauptung von Arbeit
7. **Eine ausdrückliche Liste dessen, was nicht Teil des Auftrags ist** — ohne sie greift der Agent vor
8. Eine ausdrückliche Liste dessen, was am Ende zu melden ist

**Vier Punkte, die seit den Aufträgen 240 bis 243 verbindlich dazugehören** — jeder ist aus einem gemessenen Fehler entstanden, die Begründungen stehen in 17:

9. **Ein eigener Abschnitt „Melden statt ändern".** Jede Stelle, die beim Arbeiten auffällt und durch den Auftrag falsch, überholt oder widersprüchlich wird, gehört in den Bericht — **nicht in den Commit.** Kommentare eingeschlossen. Ertrag: 241 vier Funde, 242 sieben, 243 fünf. **Ein Verbot bringt null.**
10. **Commit-*Grenzen*, keine Commit-*Zahlen*.** „Zwei Commits" in Auftrag 243 hat eine Verbesserung verhindert, weil ein dritter Commit den Auftrag verletzt hätte und ein `--amend` die Git-Regel. Stattdessen: welche Änderungen zusammengehören, und ausdrücklich „fällt dir nach einem Commit etwas an dessen Inhalt auf, mach einen weiteren".
11. **Kein `tail`, kein `head` auf dem Gatterlauf.** Ein voller Lauf kostet 33 Minuten. In Auftrag 242 war die Ausgabe geschnitten, die Laufzeiten fehlten, und der Lauf musste wiederholt werden.
12. **Ein letzter Punkt im Bericht: „Wo dieser Auftrag falsch, unvollständig oder undurchführbar war"** — mit dem, was stattdessen getan wurde, und **woran es gemessen wurde.** Das ist die Zeile, die die vier folgenschwersten Fehler dieser Woche zutage gefördert hat.

**Und eine Regel an mich selbst, nicht an den Agenten: Die Stelle lesen, bevor sie beauftragt wird.** `git mv` auf eine untrackte Datei, `[wissen].astro` statt `[...wissen].astro`, ein `points`-Verbot, das neun richtige Fälle mitverbot, ein `splitParts()`-Aufruf je Punkt bei einer Funktion, die über den Abschnitt zählt — **vier Fehler in vier Aufträgen, alle vier aus dem Gedächtnis geschrieben statt aus der Datei.**

**Wenn eine Aussage geändert wird, wird die Aussage beauftragt, nicht ein Wortlaut.** Fehler in 213: ein Wortlaut wurde zitiert, drei weitere Fassungen derselben Aussage blieben stehen, zwei davon in den Suchmaschinen-Beschreibungen.

**Was diese Zusammenarbeit trägt:** Claude Code widerspricht und lag dabei mehrfach richtig — bei der Zuschnitt-Statistik, der Radius-Regel, den vier zu engen Spalten, der Aktionsleiste, einem Kontrastwert aus einem `oklab`-Lesefehler, der Hover-Schranke. Anweisungen prüfen ist mehr wert als Anweisungen ausführen. Diese Arbeitsweise muss erhalten bleiben.

**Ein Skill kann eigene Anweisungen mitbringen.** In einer Sitzung tauchte eine Designvorgabe auf, die von niemandem im Projekt stammte („testimonial cards grid, dark tiles, GSAP scroll-reveal stagger"). Ursache war ein installierter UI/UX-Skill. Er wurde abgeschaltet.

---

# 2. Vision und Positionierung

## 2.1 Was diese Website ist

**Eine Unternehmensseite, keine Lieferseite.**

Das Ziel ist ein Restaurant in Mannheim als Sprungbrett, darauf aufbauend Franchise-Anfragen. Der Unternehmensgegenstand im Handelsregister nennt ausdrücklich „die Entwicklung, der Aufbau und die Vergabe von Franchise- und Lizenzsystemen".

**Die Architektur trägt das bereits** und wird dafür kein zweites Mal gebaut: Ordner je Stadt auf einer Domain, `deliveryAreas` als umschaltbares Datenfeld, Standortseiten aus einer Liste. Jeder Relaunch kostet Rankings — deshalb nur einer.

**Lieferung ist ein Kanal, keine Identität.** Die Regel verbietet, sich nach dem Kanal zu benennen. Sie verbietet nicht das Liefern. Geliefert wird weiter, und zwar dauerhaft.

## 2.2 Der Anspruch

Technische und redaktionelle Überlegenheit ist der Burggraben. Taibs Wortlaut: „Wir bauen die Seite, um uns technisch und inhaltlich abzuheben und keinen Konkurrenten an uns in dieser Hinsicht ranzulassen."

Daraus folgt eine Prüffrage für jede geplante Seite und jede Maßnahme: **Kann ein Wettbewerber das an einem Nachmittag kopieren?** Wenn ja, ist es kein Vorsprung. Eigene Messwerte, eigene Zutatenlisten, eigene Kennzeichnung, eine offengelegte Lieferkette und eine Seite ohne Fremdskripte sind nicht kopierbar, weil dahinter Arbeit steckt, die niemand zweimal macht.

## 2.3 Zielgruppe

**Jeder.** Taibs Wortlaut: „Unsere Zielgruppe ist keine kleine Gruppe, sondern jeder."

Der Kernsatz der Marke:

> Bei uns wird jeder fündig. Fleischesser, Vegetarier, Veganer — und auch, wer an dem Abend gar keine Teigtaschen will. Niemand muss auf etwas verzichten, damit die anderen bestellen können.

**Der Gruppengedanke ist ein Beleg, kein Produktversprechen.** Keine Gruppenmenüs, keine Familienpakete, keine Sammelbestellungen, keine eigene Bestellform. Wer daraus ein Produkt macht, ändert Logistik und Geschäftsmodell.

Salate, Suppen, Bowls und Desserts tragen diese Aussage mit. Sie sind nicht Beiwerk.

## 2.4 Das Nachfrageproblem

Nach „Manti" sucht in Deutschland fast niemand. Man kann nicht auf einen Begriff ranken, den keiner eingibt. Die USP ist genau diese Abweichung — Kunden schreiben: „endlich mal was anderes als Pizza, Pasta, Burger."

**Drei Bewegungen:**

**Brückenbegriffe.** Alles, was Hunger ohne Kategoriewunsch beschreibt, und alles, was von einer bekannten Kategorie herüberführt. „Türkische Ravioli" und „türkische Tortellini" sind zwei Beispiele von vielen — Pasta ist eine Brücke, keine Kategorie und kein Hauptziel. Sie gehört in „Warum so" und in die Vergleichsseiten, **nicht in die Titles**: „Pasta bestellen Mannheim" bringt Absprünge.

**Ernährungsweise statt Herkunft.** Vegan, vegetarisch, proteinreich, halal. Kulturell neutral, echtes Volumen, dünne Konkurrenz. **Das ist eine Suchbegriffsstrategie, keine Positionierung** — die Marke ist nicht „das vegane Restaurant".

**Vergleichsinhalte.** Manti gegen Ravioli, Gyoza, Tortellini, Pierogi, Pelmeni. Rankt auf Vergleichssuchen und wird von KI-Systemen zitiert.

## 2.5 Rolle von „türkisch"

Wird nicht weggeworfen — es ist die Beglaubigung. Es wandert nur aus der Überschrift in die Geschichte. Vorn: neu, hausgemacht, für jede Ernährungsweise. Dahinter: die Tradition.

„Manti" wird ebenfalls nicht aufgegeben. Der Markenname ist der Kategoriename — auf „Manti Mannheim" rankt ihr ohnehin. Genau deshalb steckt die Arbeit in den anderen Begriffen.

## 2.6 Drei verschiedene Kämpfe

Ungerichteter Hunger („Essen bestellen Mannheim") ist mit einer eigenen Website gegen Aggregatoren organisch nicht zu gewinnen. Er entscheidet sich an drei anderen Orten:

1. **Im Local Pack** — Google Business Profile, Bewertungen, Nähe, Aktivität. **Dort ist Lieferando schlagbar.**
2. **Innerhalb der Aggregatoren** — Sortiment, Bewertungen, Bilder, Antwortzeit.
3. **In KI-Antworten** — wer zitierfähig schreibt und maschinenlesbar auszeichnet, wird genannt.

**Die realistische organische Beute der eigenen Seite** sind Zwischenbegriffe, Ernährungsweisen, Vergleiche und das Umland. Dort ist die Kaufabsicht höher und die Konkurrenz dünn.

**Folge für die Reihenfolge:** Nach dem Livegang stehen GBP-Ausbau und die maschinenlesbare Schicht (`llms.txt`, Wikidata, Schema-Graph, Crawler-Freigaben) an erster und zweiter Stelle — nicht weitere Textseiten. Bestätigt, aber **erst nach Fertigstellung der Website**.

## 2.7 Die fünf tragenden Elemente

Die alte Foodamigos-Seite rankt. Diese fünf müssen den Wechsel überleben:

1. Checkout auf eigener Domain
2. Speisekarte als indexierbarer Text
3. Mehrseitige Struktur
4. Title- und H1-Formel mit Keyword
5. Kopplung ans Google Business Profile

**Achtung bei der Herkunftsaussage:** In früheren Fassungen stand „grob zwei Drittel der Sichtbarkeit stammen aus Local Pack und Nutzersignalen, ein Drittel aus On-Page". **Diese Aufteilung ist nicht belegt** und stammt aus keiner Messung dieses Projekts. Die Search-Console-Daten liegen seit dem 25. August vor (9.8), **sie belegen die Aufteilung aber nicht** — die Search Console trennt nicht nach Local Pack und On-Page. Die Aussage, die trägt: Die Sichtbarkeit stammt überwiegend nicht aus dem Code.

## 2.8 Reines D2C

B2B und Tiefkühlversand werden auf der Website nicht beworben. Der alte Businessplan war dreigleisig, aber nur für die Bank geschrieben. Jede Formulierung Richtung Großhandel oder Gastronomiebelieferung ist gestrichen.

## 2.9 Foodamigos ist kein Drittpartner

Taibs Wortlaut: „Über die haben wir vollen Zugriff auf alle Daten und Möglichkeiten, per E-Mail an die Kunden ranzukommen. Das ist also kein Drittpartner."

**Ein langfristiger Partner mit vollem Datenzugriff.** Das ändert die Bewertung an zwei Stellen: Die Bestellstrecke ist Teil des eigenen Auftritts, nicht ein fremdes Fenster. Und das eigene E-Mail-Marketing ist möglich — vorausgesetzt, die Einwilligung in der Bestellstrecke ist so formuliert, dass **MANTI & CO. selbst** werben darf (§ 7 UWG). Das ist eine Anwaltsfrage, unabhängig davon, wie eng die Partnerschaft ist. Siehe 12.5.

Die Mängel an den gelieferten Rechtstexten (Abschnitt 12.3) bleiben davon unberührt — ein Partner, der einen Produktmangel hat, bleibt ein Partner.

---

# 3. Verbindliche Sprach- und Textregeln

Jede einzelne kam aus einer Korrektur.

## 3.1 Anrede

**„du", kleingeschrieben.** Verbindlich für Website, Bestellstrecke, Plattformen, Instagram, Verpackung und künftige Kommunikation.

Begründung: An der Theke wird geduzt. Eine Marke, die im Laden anders spricht als auf ihrer Seite, wirkt an beiden Stellen unecht.

**Ausnahmen im Sie:** Impressum, Datenschutzerklärung, AGB, Widerrufsbelehrung. Dort ist die förmliche Anrede üblich, und „Sie haben das Recht auf Auskunft" ist DSGVO-Wortlaut.

**Die Anrede ändert den Ton nicht.** Keine Ausrufezeichen, keine Slogans, keine Superlative. Die Sätze bleiben so kurz und sachlich wie zuvor.

**Ein Gatter bewacht das** (`scripts/anrede.mjs`). Es prüft die Quelle, nicht das gebaute HTML, und meldet Datei, Zeile und Schlüsselpfad. Zwei Pfad-Ausnahmen: `src/content/copy/legal/**` vollständig und `voices.items[*].quote`.

**Falle:** Ein drittes Personalpronomen „Sie" am Satzanfang bringt das Gatter zu Fall — es kann nicht unterscheiden. Solche Konstruktionen von vornherein vermeiden, statt eine Ausnahme zu bauen. **Ein Gatter, das man beim ersten Konflikt lockert, ist keins mehr.** Der Text weicht aus, nicht die Prüfung.

## 3.2 Verbotene Formulierungen

| Verboten | Warum | Ersatz |
|---|---|---|
| **handgemacht**, handgefertigt, von Hand gemacht, von Hand gerollt | Produktion ist maschinell | hausgemacht, aus eigener Produktion |
| **frisch hergestellt**, täglich frisch, jeden Morgen | Vorproduktion 3–4 Wochen, dann schockgefrostet | „gekocht, wenn du bestellst" |
| **Made in Germany** | Industriesprache, kollidiert mit türkischer Herkunft, schwächer als lokal | in eigener Produktion in Mannheim |
| **Preise auf der Website** | Zwei Quellen laufen auseinander; ein veralteter Preis ist schlimmer als keiner | nur in der Bestellstrecke |
| **Stadtteil in Titles** | Nach Vogelstang sucht niemand, verkleinert die Marke | nur „Mannheim" |
| **Aussagen über Wettbewerber** | muss belegbar sein | weglassen |
| **„Kein Bindemittel"** | Kartoffelmehl und Speisestärke binden tatsächlich | ersatzlos gestrichen |
| **„rund"** für die Manti-Form | falsch | „die vier Ecken in der Mitte zusammengefasst" |
| **„Type 405"** | unnötige Tiefe | „Mehl" |
| **„Paprikabutter"** als Bestandteil eines Gerichts | existiert nur als buchbares Extra | weglassen |
| **„Schweinefleisch"** als Wort, auf allen Seiten | „Halal inkludiert bereits kein Schwein, und das Erwähnen kann ein falsches Bild für diejenigen auslösen, die nur skimmen" | weglassen |
| **Fremde Produkt- und Herstellernamen** | „Super Crunch" ist die Aviko-Bezeichnung; die Auswahlleistung würde einem anderen zugeschrieben | eigener Kartenname |

**Der verbindliche Zusatzstoffsatz lautet:** „Kein Geschmacksverstärker, keine Konservierungsstoffe — statt Chemie: minus achtzehn Grad."

**Ausnahme bei Fremdmarken:** Marken, die der Gast bewusst mitbestellt und die den Wert erhöhen — Nutella, Heinz, Elephant Bay.

**Bildsprache:** Keine Aufnahmen von Händen, die Teigtaschen formen. Das Bild würde behaupten, was der Text bewusst nicht sagt. Gilt auch fürs Video.

**Der Frischeanspruch ruht vollständig auf dem Kochzeitpunkt** — und der stimmt zu hundert Prozent. Schockfrosten ist kein Makel, sondern ein Qualitätsargument: kleine Eiskristalle, erhaltene Teigstruktur, keine Konservierungsstoffe nötig. Offen gesagt wirkt es souverän; verschwiegen ist es eine Zeitbombe. Bei Frittiertem heißt es „frittiert, wenn du bestellst".

## 3.3 Sechs Textregeln

**a) Kein Text beschreibt den Weg zum Gast.** Verpackung wird nur dort erwähnt, wo sie den Geschmack erklärt — getrennt abgefüllte Sauce hält den Teig fest, das ist eine Aussage über das Essen. „Nach zwanzig Minuten im Karton" ist es nicht. *Ausgenommen:* Die Lieferstellen in `home.json:17, 245, 343, 386, 390` benennen eine Dienstleistung, die es gibt. Gästezitate werden nie angefasst.

**b) Keine fremden Produkt- oder Herstellernamen.** Siehe Tabelle oben. Dazu die Unterregel: **Aus einem Namen keine Eigenschaft ableiten.** Aus „Super Crunch" wurde einmal eine geriffelte Oberfläche geschlossen und als Tatsache geschrieben.

**c) Keine Aufzählung dessen, was sich ändern kann.** Keine Anzahl von Gerichten im Fließtext, keine Liste der frittierten Gerichte, keine Aufzählung der Sorten mit Ei, keine Nennung einzelner Saucen als vegan oder nicht. Taibs Begründung: „Momentan ist unser Menü noch nicht fix. Wir werden definitiv 2–3 Gerichte und Saucen einführen."

**d) Ein Gericht grenzt sich nicht selbst ein.** Ein Gericht wird nicht dadurch attraktiver, dass man sagt, wozu es passt, sondern dadurch, dass man sagt, was es ist. Die Empfehlung neben einem anderen Gericht schließt alle aus, die dieses andere nicht bestellen. *Ausgenommen:* der Getränkeabschnitt — dort ist die Paarung der Zweck, und wer ein Getränk sucht, hat sein Essen bereits gewählt.

**e) Das Ergebnis nennen, nicht den Weg dorthin.** „Unnötig so viel Infos zu geben, und die Konkurrenz soll nicht wissen, wie wir vorgehen." *Ausgenommen* sind Stellen, an denen das Verfahren die Qualität erklärt und ohnehin sichtbar ist: die zweite Fritteuse, die getrennten Produktionsläufe, das Messgerät für das Öl. Der Unterschied: Die Fritteuse ist eine Entscheidung, die Geld kostet und die ein Wettbewerber kopieren müsste. Wie Spinat aufgetaut wird, ist ein Handgriff, den jeder nachmacht, sobald er ihn kennt.

**f) Verkaufssprache: Beschreibe, was etwas tut, nicht wie man es bekommt.** Formulierungen wie „als Zugabe, die du dazubestellen kannst" beschreiben einen Kassenvorgang statt ein Essen. Wer versteht, was eine Zutat bewirkt, findet das Auswahlfeld allein. **Appetit machen ist erlaubt mit allem, was wahr ist** — Temperatur, Konsistenz, was womit verschmilzt. **Nicht erlaubt:** erfundene Empfindungen und Behauptungen über das Verhalten von Gästen.

## 3.4 Zahlen und Rangfolgen

**Keine Rangaussage und keine Verteilungszahl als Prosa.** „Das am häufigsten bestellte Gericht" kommt aus dem Feld `bestseller`, nicht aus dem Fließtext. „Drei mit Fleisch, drei vegan, eines vegetarisch" entsteht aus den Chips oder gar nicht. Begründung: Am Tag der Lachs-Einführung ist jeder solche Satz falsch.

**Konkret verbotene Sätze:**
- „Sechs von sieben Manti enthalten in der Grundform ein einziges Allergen."
- „14 von 26 vegetarisch" — stammt aus einem festen Text, der nie stimmte.

## 3.5 Die eigene Gewürzmischung

**Wird nicht veröffentlicht — Betriebsgeheimnis.** Die Zusammensetzung steht bewusst in keiner Datei (Taib, 2. September: „überall raus“). In Zutatenlisten steht „Gewürze" — zulässig, solange keine Einzelzutat über zwei Prozent liegt. Nicht veröffentlichen heißt nicht, es auf Nachfrage zu verschweigen.

**Die Salatgewürzmischung ist eine andere** und wird ausgeschrieben: Sumach, Salz, mildes Paprikapulver.

## 3.6 Tiefe der Zutatenlisten

**Gerichtsebene, nicht Zutatentiefe.** „Bulgur, Grieß, Mehl, Ei" statt „feiner Bulgur aus Hartweizen der Sorte X".

Rechtlich: Im Fernabsatz müssen **Allergene** vor Vertragsschluss verfügbar sein (Art. 44 LMIV i.V.m. § 2 LMIDV). Die vollständige Zutatenliste ist bei nicht vorverpackter Ware nicht vorgeschrieben; auf der Website besteht ohnehin keine Pflicht. Zugekaufte Positionen werden mit der Herstellerliste vollständig wiedergegeben.

Bei den neun zugekauften Gerichten darf der Text ausschließlich von **Auswahl und Zubereitung** handeln, nie von Herstellung.

## 3.7 Ton der Marke

Kurze Aussagesätze, konkrete Substantive, keine Füllwörter, trockener Unterton.

> „Nichts steht vorgekocht bereit." · „Nudeln in cremiger Sauce. Mehr ist es nicht." · „Nicht vorher."

Werbesprache würde daneben auseinanderfallen.

**Warnung zur Wiederholung:** „Mehr ist es nicht" steht beim Nudelsalat, „Mehr nicht" bei The Original. Wenn eine Wendung auf mehreren Seiten auftaucht, wird aus einer Pointe eine Masche.

---

# 4. Revidierte Entscheidungen — was nicht mehr gilt

Diese Liste steht hier, damit nichts zweimal entschieden wird. Jede Position mit ihrer Begründung, sonst kehrt sie zurück.

## 4.1 Die erfundene 400-Wörter-Regel

**In einer früheren Sitzung wurde behauptet, eine Gerichtseite brauche 400 Wörter, um zu ranken** — formuliert als „Die Zielgröße für eine Gerichtseite, die tragen soll, liegt bei 400". Sie steht in `SEO-Roadmap-MANTI-CO.md`, Zeile 262.

**Das ist erfunden.** Es gibt keine solche Schwelle, weder bei Google noch in belastbarer Forschung. Die Zahl klang plausibel und wurde als Tatsache gesetzt. Sie hat Druck erzeugt, Texte künstlich zu verlängern.

**Ein Gerichtstext ist so lang, wie er etwas zu sagen hat.** Wenn die Zahl in einem alten Chat oder in der SEO-Roadmap auftaucht, ist sie ungültig.

## 4.2 `/fleisch` wurde zu `/halal`

**Früher:** `/vegan`, `/vegetarisch` und `/fleisch` als drei gleichrangige Filterseiten. Begründung damals: „Fehlte die dritte, wäre Fleisch die unmarkierte Restmenge."

**Jetzt:** Die dritte Seite heißt `/halal`. Der Filter-Chip heißt „halal", und nach „halal essen mannheim" wird gesucht, nach „fleisch essen mannheim" praktisch nicht. Die Seite beantwortet Halal vollständig und legt den Lieferanten offen.

`/fleisch` existiert nirgends — kein Routeneintrag, keine Navigation.

**Der Filter-Chip heißt seit Auftrag 245 „Fleisch (halal)", die Seite weiter `/halal`.** Taib am 28. August: Alles auf der Karte ist halal, auch das Vegane und das Vegetarische — ein Filter, der alles auswählt, wählt nichts aus. Der Chip bezeichnet jetzt, was er tatsächlich auswählt: die vier Fleischgerichte The Original, Fried Dream, Hingel's Beef, Bulgur Bites, dazu ihre drei Combos.

**Das hebt die Chip-Benennung von 4.2 auf, nicht die Adresse.** Die Entscheidung, `/fleisch` zu `/halal` zu machen, war eine über Suchverkehr; ein Chip trägt keinen. Die Seite bleibt `/halal` und bleibt gleichrangig zu `/vegan` und `/vegetarisch`. Wer den Chip später wieder „halal" nennen will, muss erklären, wonach er filtern soll.

**Halal wird nicht mehr über den Filter geführt, sondern übergeordnet** — als Abschnitt auf der Startseite, als Eintrag in der Fußzeile neben Vegetarisch und Vegan, und auf `/halal` in voller Länge. Halal ist ein Lebensgrundsatz, keine Kategorie neben anderen.

## 4.3 Liefergebietsseiten — gestrichen

**Früher:** eigene Seiten je Stadtteil und Umlandort, in der alten Offene-Punkte-Liste als „höchste Priorität nach den Gerichtstexten" geführt.

**Gestrichen aus drei Gründen:** Sie widersprechen der Regel „kein Stadtteil in Titles". Sie widersprechen der Regel, sich nicht als Lieferservice zu positionieren. Und sie sind trivial kopierbar — ein Wettbewerber baut zwanzig davon an einem Nachmittag, also sind sie kein Vorsprung.

Betroffene Stellen in der SEO-Roadmap: Zeilen 212, 265, 267–270, 305, 340, 353, 372, 443, 472, 632, 637. In der Umbau-Roadmap: 139, 371, 373. **Alle ungültig.**

Was bleibt: **eine** Standortseite je Stadt, aus der Liste erzeugt. Die Umlandorte stehen dort als Text, nicht als eigene Seiten.

## 4.4 D3 — nur acht Gerichtseiten

**Aufgehoben.** Jedes Gericht bekommt eine eigene Seite unter `/speisekarte/<slug>`. An die Stelle der festen Zahl tritt eine Schranke: **Die Seite entsteht, sobald `intro` gefüllt ist.** Eine leere Seite ist schlechter als keine.

**Achtung — Widerspruch im Bestand:** Abschnitt 13b der alten 24.-August-Datei behauptet, `hasPage` sei „in Auftrag 201 ersatzlos entfernt". Das ist falsch. `hasPage()` steht in `src/lib/dish.ts:62` und wird an sechs Stellen aufgerufen. Die Behauptung wurde nie gemessen, nur weitergereicht. Siehe 8.4.

## 4.5 Allergen-Kürzel und Legende

**Abgeschafft.** Alles wird ausgeschrieben. Begründung: A–R ist Gastronomie-Konvention ohne Rechtsgrundlage und löst ein Platzproblem, das auf einer Website nicht existiert. Kürzel plus Klartext, nie das Kürzel allein — eine bloße Buchstabenreihe ist für Vorlesewerkzeuge bedeutungslos und für Suchmaschinen nicht auswertbar.

Auf der geschlossenen Kachelfläche steht keine Kennzeichnung, sie ist Scanfläche. Kennzeichnung nur in Kachelrumpf, Overlay und Gerichtseite.

## 4.6 Elephant Bay × MANTI & CO. als Paarung

**Gebaut in 214, zurückgenommen in 216.** Grund: Das Logo stand über der Rubrik „Getränke", also über der Überschrift statt an ihrer Stelle — die Marke erschien zweimal in zehn Zentimetern Abstand. Zudem deckt die Freigabe von Elephant Bay nur die Verwendung des Logos allein, nicht die Paarung.

**Heute ist das Elephant-Bay-Logo die Überschrift des Getränkeabschnitts.**

## 4.7 „Kein Bindemittel"

**Ersatzlos gestrichen**, siehe 3.2. Der erwogene Ersatz „Verdickungsmittel" wäre schlechter gewesen — das ist eine amtliche Zusatzstoff-Klassenbezeichnung und hätte behauptet, es sei einer drin.

## 4.8 Sechs Prüfschranken

**Es sind elf.** Ältere Dateien nennen sechs (`diet`, `legal`, `a11y`, `contrast`, `thirdparty`, `budget`). Hinzugekommen sind `anrede`, `teilbild`, `hover`, `kommentar` und `sprache`. Siehe Abschnitt 10.

**Dieser Abschnitt stand selbst zweimal falsch** — erst auf sechs, dann auf neun, während 10.1 bereits elf führte. Ein Abschnitt, dessen Zweck es ist, überholte Zahlen aus älteren Dateien zu berichtigen, altert genauso wie sie. Er wird bei jedem neuen Gatter mitgezogen.

## 4.9 Was in den beiden Roadmaps nicht mehr gilt

Beide Dateien bleiben als Nachschlagewerk liegen, sind aber in Teilen überholt. **Wer sie liest, muss diese Liste danebenlegen:**

- **SEO-Roadmap Zeile 184** schreibt Next.js vor. Gebaut ist Astro 5 SSG.
- **SEO-Roadmap Zeile 262** enthält die erfundene 400-Wörter-Regel (4.1).
- **SEO-Roadmap Zeilen 96 und 403** behaupten die Zwei-Drittel-Aufteilung der Sichtbarkeit, die Zeile 162 derselben Datei zugleich als unbelegt einräumt (2.7).
- **Alle Liefergebietsseiten-Stellen** (4.3).
- **Der Title-Widerspruch:** SEO-Roadmap Zeile 369 will die Marke vorn, Umbau-Roadmap 227–231 hinten. Gültig ist Abschnitt 9.2 dieser Datei.
- **Die Bestelllink-Frage:** SEO-Roadmap 115, 298 und 299 verbieten Verweise auf Aggregatoren, Umbau-Roadmap 296 beauftragt Lieferando- und Uber-Eats-Verweise. **Entschieden am 25. August zugunsten der SEO-Roadmap** — keine Aggregatorenverweise, nirgends auf dem Auftritt. Umbau-Roadmap 296 ist damit aufgehoben. Begründung in Abschnitt 15.
- **`servesCuisine`** ist an drei Stellen unterschiedlich vorgegeben. Gültig ist, was im Repository steht, bis eine Entscheidung fällt.
- **Alle Aufgaben in beiden Dateien sind unabhängig vom Fortschritt weiterhin als `[ ]` markiert.** Der Haken ist kein Statussignal. Der Status steht in dieser Datei.

---

# 5. Unternehmen und Betriebsdaten

## 5.1 Stammdaten

```
MANTI & CO. GmbH
Hallesche Straße 8, 68309 Mannheim
Telefon: +49 621 76212390
E-Mail: business@mantiandco.com   (rechtlich)
        support@mantiandco.com    (Kunden)

Geschäftsführer: Taib Demirci, Güney Malatyali
                 (beide einzelvertretungsberechtigt, von § 181 BGB befreit)
Registergericht: Amtsgericht Mannheim, HRB 741102
USt-IdNr:        DE348253324
Gegründet:       4. September 2025
Stammkapital:    25.000 € (je 12.300 Anteile — ⚠ ergibt 24.600, siehe unten)
Gesellschaftsvertrag: 06.07.2021, zuletzt geändert 22.08.2025
                 (vormals DS eCom Solutions UG)

Beschäftigte: vier — zwei Geschäftsführer, eine Teilzeitkraft, eine Aushilfe
Aufsichtsbehörde Datenschutz: LfDI Baden-Württemberg

Öffnungszeiten: Mo–Fr 10:30–21:30, Sa–So 12:00–21:30
Domain kanonisch: www.mantiandco.com

Bewertungen: Lieferando 4,9 bei 580 · Google 5,0 bei 57
Markenfarben: #20201f (ink) · #f6f4ec (paper) · Rot aus tokens.css
```

**Die Schreibweise ist „Malatyali“** — so steht sie im Handelsregister (Taib, 3. September). Die frühere Notiz hier („Malatyalı“ mit türkischem ı sei richtig) war falsch; 277 hat alle Rechtstexte auf „Malatyali“ vereinheitlicht.

**⚠ Die Anteilszahl geht nicht auf.** Alle älteren Dateien nennen „Stammkapital 25.000 €, je 12.300 Anteile". Zweimal 12.300 sind 24.600, nicht 25.000. Entweder fehlen 400 Anteile, oder die Zahl je Gesellschafter lautet anders. **Die Angabe stammt aus keiner geprüften Quelle und ist an Gesellschaftsvertrag oder Handelsregisterauszug zu prüfen, bevor sie irgendwo verwendet wird.** Für die Rechtstexte ist sie ohne Bedeutung — dort steht sie nicht.

**Folge aus „vier Beschäftigte":** § 36 VSBG greift nicht (Schwelle über zehn), also keine Pflicht zur Erklärung über Verbraucherschlichtung — die freiwillige Erklärung im Impressum bleibt trotzdem. Und keine Pflicht zur Bestellung eines Datenschutzbeauftragten nach § 38 BDSG. Die Mehrwegangebotspflicht nach VerpackG greift ebenfalls nicht: keine Verkaufsfläche, Küche unter 80 m², vier Beschäftigte.

## 5.2 Liefergebiete und Mindestbestellwerte

| Zone | Postleitzahlen | Mindestbestellwert |
|---|---|---|
| 1 | 68259, 68309, 68519, 68542, 68549 | 8,90 € |
| 2 | 68167, 68305 | 14,00 € |
| 3 | 68163, 68165, 68239, 68526, 68159, 68161 | 20,00 € |
| 4 | 68169, 68199, 68307, 68229 | 25,00 € |
| 5 | 69493, 69469, 68535 | 30,00 € |
| 6 | 68219 | 35,00 € |

**Lieferung immer kostenlos. Bei Abholung kein Mindestbestellwert.**

Ortsnamen im Text: Mannheim, Ilvesheim, Viernheim, Heddesheim, Ladenburg, Weinheim, Hirschberg, Edingen-Neckarhausen.

## 5.3 Bestellvorgang

**Zahlarten:** Apple Pay · Google Pay · Karte (Mastercard, Visa) · Online-Überweisung · PayPal · Barzahlung.
**Abwicklung:** Stripe für PayPal, Adyen für die übrigen. **Die Verträge hält Foodamigos, nicht MANTI & CO.**

**Bestellbestätigung sofort, Annahme automatisch.**
**Lieferzeit** 30 bis 50 Minuten im Regelfall, bei hohem Aufkommen bis etwa 105 Minuten — absolute Ausnahme.
**Servicegebühr:** eigene Zeile im Warenkorb, Deckel 0,99 €. Bei 23,20 € Zwischensumme wurden 0,88 € berechnet. **Der Prozentsatz ist unbekannt und bei Foodamigos erfragt.**
**Pfand:** 0,08 € je Mehrwegflasche, ausgewiesen als „Inkl. 0,08 € Pfand (PET Mehrweg)".
**Grundpreis:** wird ausgewiesen — „(0,33 l, 10,61 €/l)".
**Trinkgeld:** Voreinstellung entfernt, steht auf „Keine".

## 5.4 Treueprogramm

1 Punkt je 1,00 € Bestellwert, automatisch gutgeschrieben. Ab 35 Punkten einlösbar, höchstens 60 Punkte je Bestellung (6,00 €), 90 Tage gültig. Nur im eigenen Shop.

**Neukunden:** 3 € auf jede der ersten fünf Bestellungen, 15 € insgesamt. Die Rabattleiste in der Bestellstrecke sagt bis heute „15 € Rabatt" ohne die Bedingung — irreführend, Taib überarbeitet.

---

# 6. Produktionswahrheit

| Was | Wie |
|---|---|
| Vorproduktion | 3–4 Wochen, dann schockgefrostet bei −18 °C |
| Kochen | direkt aus dem Frost, **ohne Auftauen** |
| Teigdicke | 0,5 bis 0,6 mm |
| Teig | eifrei bei allen Manti **außer Melted Heart** |
| Produktionsläufe | jede Sorte einzeln, Anlage dazwischen mechanisch gewaschen, danach desinfiziert |
| Frittieren | zwei Fritteusen, eine dauerhaft fleischfrei |
| Frittieröl | Sonnenblumen- und Rapsöl aus den Niederlanden; ein Messgerät entscheidet den Wechsel, nicht das Auge |
| Karte | 27 Gerichte + 7 Combos. **Combos zählen nicht mit** |

**Warum kein Spurenhinweis für Ei nötig ist:** Weil jede Sorte einzeln läuft und der Kessel dazwischen mechanisch ausgewaschen wird. Die Desinfektion allein trägt das nicht — sie tötet Keime, Eiweißrückstände bleiben. Maßgeblich ist die mechanische Reinigung.

**Formen**

| Gericht | Form | Zubereitung |
|---|---|---|
| The Original | vier Ecken in der Mitte zusammengefasst, klein | gekocht |
| Golden Harvest, Nature's Palette | dieselbe Form, größere Quadrate | gekocht |
| Melted Heart | Blüte | gekocht |
| Fried Dream | dreieckig gefaltet | frittiert |
| Hingel's Harvest, Hingel's Beef | dreieckig, deutlich größer | gekocht |

Die größeren Quadrate bei Golden Harvest und Nature's Palette haben einen Grund: Kartoffelmasse ist in kleinen Quadraten nicht sauber portionierbar.

**Füllungen**

| Gericht | Füllung |
|---|---|
| The Original | Rinderhack halal, eigene Gewürzmischung, Zwiebelgranulat. **Kein Knoblauch, kein Hefeextrakt** |
| Golden Harvest | vorgegarte Kartoffel (zugekauft), Tomatenmark, Paprikamark, Gewürzmischung, Kartoffelmehl |
| Nature's Palette | identisch mit Golden Harvest. Der Unterschied ist ausschließlich der gefärbte Teig |
| Melted Heart | Hirtenkäse und Speisestärke, **keine Gewürzmischung** |
| Fried Dream | wie The Original |
| Hingel's Harvest | wie Golden Harvest, mehr davon |
| Hingel's Beef | wie The Original, mehr davon |

**Topping-Empfehlungen je Gericht** — immer zwei, siehe 15:

| Gericht | Empfehlung |
|---|---|
| The Original | Sucuk (mehr Fleisch) oder Petersilie (leichter). **Sonderfassung:** ohne Joghurt, doppelt Pesto Rosso plus Gewürzmischung, dazu Paprikabutter |
| Golden Harvest | Pastırma (würzig zur milden Kartoffel) oder Walnüsse (bleibt vegan) |
| Nature's Palette | Hirtenkäse |
| Melted Heart | Walnuss und Petersilie sind bereits fest; Sucuk für eine fleischige Note |
| Fried Dream | Hirtenkäse |
| Hingel's Harvest | Jalapeños |
| Hingel's Beef | Paprikabutter; **Kennerfassung** mit Jalapeños, Pastırma und Petersilie |

**Achtung bei der Sonder- und der Kennerfassung:** Beide nennen Paprikabutter. Das ist zulässig, weil sie dort als **gewähltes Extra** auftritt — nicht als Bestandteil des Gerichts. Der Unterschied ist der ganze Grund für die Sperre in 3.2.

**Zwei Zutaten, die leicht vergessen werden, weil sie beim Kochen zugegeben werden und im Gericht bleiben:** **Bulgur Bowl** enthält Sonnenblumenöl. **Green Rolls** werden mit Zitrone und Rapsöl gekocht — beides gehört in die Zutatenliste.

**Nature's Palette, Färbung:** Rote-Bete-Saft (lila), Karotten- und Tomatensaft mit Kurkuma (orange), Spinat (grün). Alle drei Farben liegen in einer Portion, die Färbung ist leicht herauszuschmecken. **Das Verfahren steht nicht im Text** — dort nur „kein Farbstoff, kein Pulver".

**Linsensuppe:** selbst gekocht, kleine Mengen, **gekühlt gelagert statt eingefroren**, alle paar Tage neu angesetzt, erwärmt bei Bestellung.

**Herkunft der Positionen**

**Aus eigener Produktion (16):** 7 Manti, Bulgur Bites, Bulgur Bowl, Linsensuppe, Bauernsalat, Griechischer Salat, Gemischter Salat, Schokokuchen, Bananenbrot, Milchreis
**Teilweise (2):** Crispy Cheese Rolls (Teig zugekauft), Mediterranes Trio
**Zugekauft (9):** Green Rolls, Fermento, Pommes frites, Süßkartoffel-Pommes, Nudelsalat, Kartoffelsalat, Schoko-Soufflé, Cheesecake, Churros

**Kartengruppen:** Combos, Manti, Suppen, The Co's, Salate, Desserts, Getränke

**Bestseller:** 1 The Original · 2 Bulgur Bites · 3 Golden Harvest · 4 Green Rolls · 5 Hingel's Beef · 6 Crispy Cheese Rolls · 7 Melted Heart

**Combos:** Gericht plus frei wählbares Getränk, 2 € Aufpreis. #1 The Original, #2 Golden Harvest, #3 Nature's Palette, #4 Melted Heart, #5 Fried Dream, #6 Hingel's Harvest, #7 Hingel's Beef. **Die Kurzzeile lautet „Getränk frei wählbar" — ohne Preis.** Der Aufpreis stand vorher im Text und wäre bei jeder Änderung an sieben Stellen falsch.

**Geplant in vier bis sechs Monaten ab August 2026:** eine Lachs-Sorte. Separate Knetmaschine bestätigt, damit ist die Kreuzkontaktfrage gelöst, ohne den bestehenden Ablauf zu ändern. **Fisch muss jetzt schon im Chip-Feld und im Allergenfeld angelegt sein**, sonst laufen Filterseiten und Kennzeichnung auseinander. **Keine eigene Filterseite `/fisch`** — zu dünn. Und **Lachs gehört nicht auf `/halal`**: Pescetarier suchen genau deshalb. Der Name sollte früh feststehen, er bestimmt Slug, Fotoplanung und Position auf der Karte.

---

# 7. Die Karte — Kennzeichnung, Zusätze, Getränke

## 7.1 Die vier Kennzeichnungsfelder

| Feld | Bedeutung |
|---|---|
| `allergens` | ist drin, immer |
| `allergensOptional` | ist drin, wenn du den Zusatz nimmst |
| `allergensTraces` | kann drin sein, ohne dass es jemand hineingibt — bezieht sich auf die **Anlage des Herstellers** |
| `additives` | kennzeichnungspflichtige Zusatzstoffklassen |

**Leeres Array heißt „geprüft, nichts zu kennzeichnen". Ein fehlendes Feld heißt „nicht geprüft" und wird nicht ausgegeben.** Diese Unterscheidung ist der Kern der ganzen Kennzeichnungsarbeit.

Bei `additives` ist das leere Array zusätzlich ein Argument: Es sagt „keine" und wird ausgegeben — gegenüber Wettbewerbern, bei denen überall eine Ziffer steht.

**`allergensTraces` benennt eine Anlage, keine Zutat.** Bei der Linsensuppe stand irrtümlich „Milch (Croutons)" dort — die Croutons werden mitgeliefert, sind also keine Verunreinigung. In 227 nach `allergensOptional` verschoben.

## 7.2 Grundform

| Gericht | `allergens` |
|---|---|
| The Original, Golden Harvest, Nature's Palette, Fried Dream, Hingel's Harvest, Hingel's Beef | Glutenhaltiges Getreide (Weizen) |
| Melted Heart | Weizen, Ei, Milch |
| Linsensuppe | Weizen |
| Bulgur Bites | Weizen, Ei, Milch |
| Bulgur Bowl | Weizen |
| Crispy Cheese Rolls | Weizen, Ei, Milch |
| Green Rolls | keine |
| Fermento | **keine** — seit 231, Mandel war falsch |
| Mediterranes Trio | keine |
| Pommes frites, Süßkartoffel-Pommes | leer |
| Bauernsalat, Gemischter Salat | leer |
| Griechischer Salat | Milch (Hirtenkäse) |
| Nudelsalat | Weizen, Ei, Milch, Senf |
| Kartoffelsalat | Senf |
| Bananenbrot, Schokokuchen, Cheesecake | Weizen, Ei, Milch |
| Milchreis | Milch |
| Schoko-Soufflé | Weizen, Ei, Milch, Soja |
| Churros | Weizen, Milch (Nutella), Schalenfrüchte (Haselnuss in Nutella), Sojabohnen (Nutella) |

## 7.3 Wählbare Zusätze

**Sechs Manti außer Melted Heart:** Milch (Joghurtsauce, Pesto-Rosso-Sauce, zerlassene Butter, Hirtenkäse) · Sojabohnen (vegane Joghurtsauce) · Schalenfrüchte (Walnüsse)
**Melted Heart:** Schalenfrüchte (Walnüsse)
**Alle acht The Co's:** Milch (Joghurtsauce, Pesto-Rosso-Sauce) · Ei (Mayonnaise) · Sojabohnen (vegane Joghurtsauce) · Sellerie (Ketchup)
**Alle fünf Salate:** Milch (Joghurt-Kräuter, Honig-Senf, Hirtenkäse) · Ei (Joghurt-Kräuter, Honig-Senf) · Senf (Honig-Senf) · Schalenfrüchte (Walnüsse) · Weizen (in Röstzwiebel)
**Linsensuppe:** Milch (Croutons) · Sellerie (Croutons)
**Fünf Desserts:** Schalenfrüchte (Walnuss, Mandel)

## 7.4 Spuren und Zusatzstoffe

| Gericht | `allergensTraces` |
|---|---|
| Bananenbrot, Schokokuchen, Cheesecake, Schoko-Soufflé | Schalenfrüchte |
| Churros | Senf, Sojabohnen |
| Bulgur Bites | Sojabohnen, Senf, **Lupine**, Milch — aus der Grießpackung |

| Gericht | `additives` |
|---|---|
| Kartoffelsalat | Konservierungsstoffe |
| Fermento | Konservierungsstoffe, Säuerungsmittel, Stabilisatoren |

## 7.5 Vier Befunde, die niemand vermutet hätte

Diese vier sind die Sorte Fund, wegen der die ganze Kennzeichnungsarbeit nötig war:

1. **Pesto Rosso enthält Schlagsahne** — also Milch bei jedem Manti-Gericht
2. **Ketchup enthält Sellerie** — über die Gewürz- und Kräuterextrakte, liegt beiden Pommes bei
3. **Röstzwiebel enthält Weizen** — auf einem Salat, den jemand mit Zöliakie bedenkenlos bestellen würde
4. **Der Hartweizengrieß trägt Spuren von Lupine** — in den Bulgur Bites

**Die gemeinsame Ursache:** Milch, Ei und Sellerie kommen bei den meisten Gerichten erst über die **Auswahl** herein, nicht über die Grundform. Deshalb reicht eine Allergenangabe je Gericht nicht — sie muss je Option vorliegen.

## 7.6 Fermento — der größte Einzelfund

Drei Fehler in einem Gericht, alle in 230 und 231 behoben.

**Keine Mandeln.** Die Herstellerliste nennt „Yeşil Şeftali" — unreifer Pfirsich. „Çağla" war als grüne Mandel gedeutet und daraus `Schalenfrüchte (Mandel)` abgeleitet worden. Falsch. Der Widerspruch stand live: `dough` sagte „Mandeln", `intro` sagte „Pfirsich", `allergens` war leer. Wer Nussallergie hat, las im Text Mandeln und in der Kennzeichnung nichts.

Originalliste: *Değişen Miktarlarda Sebze (Lahana, Salatalık, Havuç, Domates, Tatlı Biber, Yeşil Şeftali, Acı biber), Su, Tuz, Asitik Düzenleyici (Asetik Asit E-260, Sitrik Asit E-330), Koruyucu (Potasyum Sorbat E-202), Stabilizatör (Kalsiyum Klorür E-509)*

**Die Säure wird zugesetzt.** Der Satz „Fermentiert heißt: Die Säure entsteht von selbst, aus Salz und Zeit, nicht aus Essig" ist widerlegt. Absatz entfernt, Title und Description sagen nicht mehr „fermentiertes Gemüse".

**Der Text grenzte sich selbst ein.** Neu:

> Turşu gehört in der türkischen Küche auf den Tisch, nicht auf den Teller. Es steht dabei, man nimmt sich davon, und es passt zu allem — zu Teigtaschen, zu Bulgur, zu Frittiertem, zum Salat. Säure und Salz wecken auf, was sonst gleichmäßig schmeckt.
>
> Der unreife Pfirsich ist die Zutat, die man nicht erwartet: fest, säuerlich, herber als reifes Obst.

## 7.7 Churros — Chip zurückgestuft

**Von vegan auf vegetarisch, in Auftrag 231.** Die Diät-Prüfung meldete den Konflikt, als sie erstmals gegen echte Zutatenlisten prüfte: Chip „vegan", enthält Nutella, Nutella enthält Magermilchpulver.

Der Chip ist falsch, **solange Nutella zwingend beiliegt**. Der Grundteig ist vegan: Wasser, Weizenmehl, Salz, Dextrose, frittiert in der fleischfreien Fritteuse.

**Das Häkchen wird nicht gesetzt — entschieden von Taib am 25. August.** Damit bleibt der Chip auf „vegetarisch", die Nutella-Allergene bleiben in `allergens` statt in `allergensOptional`, und es gibt keine bedingte Allergenlogik für dieses Gericht. **In den Daten ist nichts zu ändern; der Stand ist schon der richtige.** Was zu ändern ist, ist dieser Abschnitt: Er stand seit 231 als Wartezustand da und ist jetzt eine Festlegung.

**Zu „ohne Option Nutella" ein Einwand, und zwar ein tragender.** Der Vorschlag war, das statt eines Häkchens so zu beschriften. **Das geht nicht, weil eine Option, die es nicht gibt, nicht als Option benannt werden kann.** Wer „vegan — ohne Option Nutella" liest, sucht in der Bestellstrecke nach dieser Wahl und findet sie nicht. Ein Chip, dessen Bedingung unerfüllbar ist, ist schlechter als kein Chip: Er zieht genau den Gast an, den er dann enttäuscht.

**Was stattdessen geht, ohne die Bestellstrecke anzufassen:** die Tatsache als Aussage über den Teig in den Fließtext, nicht als Chip. „Der Teig ist vegan — Wasser, Mehl, Salz, Dextrose. Serviert wird mit Nutella." Das ist belegt, verspricht nichts und steht dem veganen Gast trotzdem zur Verfügung, wenn er vor Ort fragt. **Die dritte Möglichkeit wäre ein zweiter Artikel „Churros ohne Nutella"** — der wäre bestellbar und trüge den Chip zu Recht, verlagert die Fehlerquelle in der Küche aber nur, statt sie zu beseitigen. **Nicht empfohlen, aber benannt, damit die Ablage der Option nachvollziehbar ist.**

**Eine Korrektur an diesem Abschnitt selbst: Es hängt ein Chip daran, nicht drei.** Hier stand „Dasselbe gilt für beide Pommes — dort ist das Häkchen für Ketchup und Mayonnaise ebenfalls nicht gesetzt. Drei vegan-Chips hängen an dieser einen Einstellung." **An den Daten nachgesehen, und der Satz hält nicht stand.** `pommes-frites` und `suesskartoffel-pommes` tragen beide `diet: "vegan"` mit leerem `allergens`; Mayonnaise, Ketchup, Joghurt- und Pesto-Rosso-Sauce stehen dort in `allergensOptional`. Drei weitere Stellen sagen dasselbe: 7.3 führt sie unter **Wählbare Zusätze**, 7.5 sagt „kommen erst über die **Auswahl** herein", und `content.config.ts:283` definiert `allergensOptional` als „ist drin, wenn man den Zusatz nimmt". **Die Saucen werden dazugewählt, nicht abgewählt.** Bei den Pommes gibt es also gar nichts zu setzen — die Frage betraf immer nur Nutella. Vier Belege gegen einen Satz.

**Der Restzweifel ist operativ, nicht datenseitig:** Wenn auf einer Plattform tatsächlich eine Sauce vorausgewählt mitläuft, tragen zwei Gerichte heute einen unverdienten vegan-Chip. Das ist an der Bestellstrecke zu sehen, nicht hier.

**Am 25. August kam die Anweisung, beide Pommes von vegan auf vegetarisch herunterzustufen und in die Beschreibung zu schreiben, sie seien „quasi vegan ohne die Optionen". Ich habe sie nicht ausgeführt und lege den Grund hier ab, damit die Nichtausführung überprüfbar ist.**

**Der Grund ist eine Zahl aus den Daten: Alle dreizehn vegan-Gerichte tragen Milch oder Ei in `allergensOptional`. Dreizehn von dreizehn.** Golden Harvest, Nature's Palette, Hingel's Harvest, Linsensuppe, Bulgur Bowl, Green Rolls, Mediterranes Trio, Fermento, beide Pommes und alle drei Salate. **Die Regel „ein wählbarer Zusatz zieht den Chip herunter" trifft also nicht zwei Gerichte, sondern das ganze Feld.** Wer sie anwendet, hat danach null vegane Gerichte auf der Karte — einschließlich Linsensuppe und Bulgur Bowl. Wer sie nur auf die Pommes anwendet, hat eine Karte, die dieselbe Sachlage zweimal verschieden beantwortet, und das ist die schlechtere der beiden Möglichkeiten.

**Churros und Pommes sind nicht derselbe Fall, und genau daran hängt es.** Bei den Churros liegt Nutella **zwingend** bei — der Gast kann sie nicht abwählen, deshalb steht sie in `allergens` und der Chip ist zu Recht „vegetarisch". Bei den Pommes wird die Sauce **dazugewählt** — deshalb steht sie in `allergensOptional` und `allergens` ist leer. **Pommes ohne Sauce sind vegan, und das ist keine Auslegung, sondern die Bestellung, die der Gast tatsächlich aufgeben kann.** Beide gleich zu behandeln heißt, den Unterschied einzuebnen, den die ganze Kennzeichnungsarbeit aus 7.5 erst herausgearbeitet hat.

**Zu „quasi vegan" gesondert: Der Ausdruck darf nirgends stehen.** Vegan ist eine Ja-Nein-Angabe. „Quasi vegan" ist keine vorsichtigere Fassung von „vegan", sondern eine unbelegbare — es gibt keinen Zustand, den das Wort beschreibt. Eine freiwillige Angabe muss nach LMIV Art. 36 zutreffend und nicht irreführend sein; eine weiche Formulierung erfüllt das schlechter als die harte, nicht besser.

**Was das Anliegen dahinter löst, ohne den Chip anzufassen:** Die Sorge ist berechtigt — ein Gast sieht „vegan", wählt Mayonnaise dazu, und der Chip stimmt für seinen Teller nicht mehr. Das ist ein Beschreibungsproblem, kein Chip-Problem, und die Beschreibung war Taibs eigener Vorschlag. Vorgeschlagener Satz für beide Pommes: **„Die Pommes selbst sind vegan. Saucen wählst du dazu — Mayonnaise und Joghurtsauce sind es nicht."** Und für die Churros: **„Der Teig ist vegan: Wasser, Mehl, Salz, Dextrose. Serviert wird mit Nutella."** Beide Sätze sind belegt, beide sagen dem veganen Gast genau das, was er wissen muss, und keiner nimmt einer anderen Bestellung ihre richtige Angabe weg.

**Entschieden am 25. August: Die Chips bleiben.** Beide Pommes behalten `diet: "vegan"`, alle dreizehn vegan-Gerichte bleiben unangetastet, die Churros bleiben vegetarisch. **Die Anweisung zur Herunterstufung ist damit zurückgenommen, ehe sie ausgeführt wurde.** Was bleibt, sind die zwei Sätze in der Beschreibung — sie sind noch zu schreiben und stehen noch nirgends in den Daten:

> **Pommes (beide):** Die Pommes selbst sind vegan. Saucen wählst du dazu — Mayonnaise und Joghurtsauce sind es nicht.
>
> **Churros:** Der Teig ist vegan: Wasser, Mehl, Salz, Dextrose. Serviert wird mit Nutella.

**Wo sie hingehören, ist noch nicht bestimmt.** `intro` ist der naheliegende Ort, aber der Satz gehört sachlich neben die Zusatzangaben und nicht in den werbenden Einstieg. **Das entscheidet der Auftrag, der sie einbaut, nicht dieser Eintrag.** Merkposten: Was hier in `de` geschrieben wird, wird zu zwei weiteren `pending`-Schlüsseln im Englischen.

## 7.8 Was auf der Karte tatsächlich wählbar ist

**Manti — Extraportion (optional):** Groß (300 g)

**Joghurtsauce — Pflichtfeld:** mit Knoblauch · ohne Knoblauch · vegan mit Knoblauch · vegan ohne Knoblauch · ohne Joghurtsauce. Die vegane Variante ist **auf Sojabasis** und kostet Aufpreis, weil Sojajoghurt teurer ist.

**Sauce — Pflichtfeld:** Pesto Rosso · Tomatensauce (vegan) · ohne Sauce. **Weitere Saucen geplant.**

**Daraus folgt etwas Wichtiges:** Weil die Joghurtsauce ein Pflichtfeld ist und aktiv gewählt wird, gibt es **keinen tierischen Standard**. Golden Harvest, Nature's Palette und Hingel's Harvest sind damit vegan, nicht nur „vegan bestellbar".

**Extras, bei allen sieben Manti:** Sucuk · Pastırma · Jalapeños · Hirtenkäse · Walnüsse · Röstzwiebel · Petersilie · Oliven · Zerlassene Butter · Zerlassene Butter mit Paprika (süß) · Extra Tomatensauce · Extra Pesto Rosso · Extra Joghurtsaucen (vier Varianten) · Extra Gewürzmischung

**Melted Heart** hat keine Joghurt- und keine Saucenwahl — der Käse trägt das Gericht allein. Walnuss und Petersilie sind fest, Abwahl nur über das Kommentarfeld.

**Es gibt keine Paprikabutter im Gericht.** Auf den Fotos liegt Tomatensauce. „Zerlassene Butter mit Paprika (süß)" existiert ausschließlich als buchbares Extra.

**The Co's — Zusätze, bei allen acht gleich:** vier Joghurtsaucen · Tomatensauce · Pesto Rosso · Extra Ketchup · Extra Mayonnaise
**Suppen:** Extra Croutons · Extra Zitrone
**Salat-Dressing — Pflichtfeld:** Honig-Senf · Granatapfel · Joghurt-Kräuter · Olivenöl · kein Dressing
**Salat-Toppings:** Oliven · Walnüsse · Hirtenkäse · Röstzwiebel · Mais · Karotten · Lollo Bionda · Rote Zwiebel · Spitzpaprika
**Desserttopping, bis zu drei:** Walnüsse · Beerenmix · Schokosauce · Mandelstücke · Zimt

**Topping-Empfehlungen: immer zwei, nie eine.** Taibs Begründung: „Ohne die Empfehlung entscheidet sich der Kunde vielleicht überhaupt nicht für ein Topping. Vielleicht bestellt er 2× und probiert beide Vorschläge." Wer zwischen zwei Vorschlägen wählt, hat die Frage „überhaupt ein Topping?" bereits übersprungen.

## 7.9 Zutatenlisten der zugekauften Zusätze

| Zusatz | Zutaten | Bringt mit |
|---|---|---|
| **Honig-Senfsauce** | Wasser, 20 % Rapsöl, 8 % Senf (Wasser, Senfsaaten, Branntweinessig, Speisesalz, Weinessig, Sherryessig, Gewürze, Zucker), 7,7 % Blütenhonig, Branntweinessig, 4 % Sahne, Zucker, Eigelb, modifizierte Stärke, Speisesalz, Gewürze, Verdickungsmittel Xanthan, färbende Lebensmittel Karamellzuckersirup und Karottenkonzentrat, Limettensaftkonzentrat | Milch, Ei, Senf — **und Honig, also nicht vegan** |
| **Joghurt-Kräuter** | 35 % fettarmer Joghurt (1,5 % Fett), Wasser, 20 % Rapsöl, Zucker, Branntweinessig, Eigelb, modifizierte Stärke, Speisesalz, 1 % Kräuter (Petersilie, Schnittlauch, Dill), Verdickungsmittel Xanthan, Zitronensaftkonzentrat | Milch, Ei |
| **Granatapfel-Dressing** | Glukosesirup, Granatapfelsaft (17 %), Wasser, Säuerungsmittel (E330), Farbstoff (E150d), Granatapfelaroma | nichts |
| **Olivenöl** | — | nichts |
| **Ketchup** (Heinz, 17 g) | Tomaten (148 g je 100 g), Branntweinessig, Zucker, Salz, Gewürz- und Kräuterextrakte (**enthält Sellerie**), Gewürz | **Sellerie** |
| **Röstzwiebel** | Weizenmehl | **Weizen** |
| **Sucuk** | Rindfleisch, Rinderfleischfett, Kochsalz, Gewürze, Dextrose, Maltodextrin, Antioxidationsmittel, Geschmacksverstärker, Konservierungsstoff, Säuerungsmittel Citronensäure, Gewürzextrakte, Reifekultur | nichts Kennzeichnungspflichtiges |
| **Pastırma** | Rindfleisch, Kochsalz, Rindergelatine, Gewürze (**Weizen**), Dextrose, Saccharose, Geschmacksverstärker E621, Antioxidationsmittel E301, Konservierungsstoffe E250/E252/E202, Gewürzextrakte | **Weizen**, dazu Rindergelatine |
| **Schokosauce** | Glukosesirup, Zucker, 6,7 % fettarmes Kakaopulver, Wasser, Konservierungsstoff (Kaliumsorbat), Aroma, Salz | Konservierungsstoff |
| **Beerenmix** | Glukosesirup, Invertzuckersirup, Himbeermark, Heidelbeere, Erdbeerfruchtfleisch, Sauerkirschsaftkonzentrat, modifizierte Stärke, Wasser, Aroma, Säuerungsmittel (Citronensäure), färbendes Lebensmittel (Holunderbeerenkonzentrat), Konservierungsstoff (Kaliumsorbat) | Konservierungsstoff |
| **Butter** | reine Butter, aufgekocht und durch ein Sieb gereinigt. Paprikabutter ist dieselbe mit eingerührtem Paprika | Milch |

**Ein Widerspruch, der aufgefallen ist:** Sucuk und Pastırma sind die einzigen Positionen der ganzen Karte mit Geschmacksverstärker. Der Zusatzstoffsatz sagt „In allem, was wir selbst herstellen" und trägt damit — auf dem Teller steht es trotzdem nebeneinander. **Sortimentsfrage, nicht entschieden.**

**Offen:** Schokosauce und Beerenmix enthalten Kaliumsorbat, sind aber Beilagen und keine Gerichte. `additives` sitzt am Gericht — ein Eintrag am Schoko-Soufflé würde behaupten, der Kuchen enthalte Kaliumsorbat. Braucht ein Feld `additivesOptional` oder die Beilagensammlung. **Nicht entschieden.**

## 7.10 Getränke

**Ausschließlich Elephant Bay**, 0,33 l Mehrweg, Einheitspreis. Fritz-Kola und Schweppes sind raus.

**Eistee:** Peach · Peach Zero · Lemon · Pomegranate · Blueberry · Mango Pineapple · Watermelon
**Limonade und Cola:** Lemon · Orange · Lime Mint · ~~Cassis~~ Exotic · Pink Grapefruit · Cola · Cola Zero

**Cassis fliegt raus — entschieden am 25. August 2026.** Damit ist der Plan „Exotic kommt, Cassis fliegt raus" in beiden Hälften vollzogen. **Die Sortenzahl bleibt bei vierzehn**, weil eine Sorte eine andere ersetzt und nicht ergänzt: sieben Eistee, fünf Limonaden, zwei Cola. `SOLL_GETRAENKE` in `scripts/diet-check.mjs` bleibt auf 14 und ist nicht anzufassen — die einzige Zahl, die dieser Wechsel nicht bewegt.

**Exotic ist da — 25. August 2026.** Das Foto liegt als `eb-Exotic.png` in `src/assets/source/produktbilder/getraenke/bearbeitet-final/`, 1536 × 1024 wie die übrigen vierzehn. **Am Etikett nachgesehen, nicht angenommen: Halsring „LEMONADE", Bauchzeile „ELEPHANT BAY LEMONADE" — Exotic ist eine Limonade, kein Eistee.** Damit gehört sie in die Spalte „Limonade & Cola" und trägt den Bezeichner `eb-lem-exotic`, wie die übrigen Limonaden.

**Vegan, bestätigt von Taib am 25. August.** Die Angabe steht damit nicht mehr nur auf der Analogie zum übrigen Regal. **Die Zutatenliste der Flasche ist trotzdem noch nicht abfotografiert** — sie fehlt bei allen vierzehn Sorten und steht in 16.6 als offener Punkt.

**In den Daten steht sie noch nicht.** `drinks.json` führt weiterhin 14 Einträge, `public/img/bottle/` keine Exotic-Fassung, `SOLL_GETRAENKE` steht auf 14.

**Was der Wechsel aufriss und was ihn schließt: Hingel's Harvest.** Seine alternative Empfehlung lautete „Lemonade Cassis". **Ersetzt durch Lemonade Exotic, entschieden von Taib am 25. August**, mit seiner Begründung: zur Milde der Kartoffelfüllung passt der exotische Geschmack. Ich hatte Exotic als naheliegend bezeichnet, aber ausdrücklich nicht gesetzt — eine Empfehlung ist eine Geschmacksfrage und wird nicht aus der Spaltenzugehörigkeit abgeleitet. **Der Satz in `dishes.json` ist mitzuändern:** „Beeriger wird es mit Elephant Bay Lemonade Cassis 0,33 l" trägt eine Geschmacksangabe, die auf Exotic nicht zutrifft. **„Beeriger" ist zu ersetzen, nicht der Name allein auszutauschen.**

**Drei Stellen, an denen Cassis noch steht und weg muss:** der Eintrag `eb-lem-cassis` in `drinks.json` · die Paarung von Hingel's Harvest · der Cassis-Satz im Shop.

**Dazu zwölf Dateien, und hier ist eine Behauptung zu korrigieren, ehe sie im Gedächtnis steht.** Ich hatte zuerst geschrieben, die Fassungen verschwänden beim nächsten `npm run bottles` von selbst. **Das ist falsch, nachgesehen in `derive-bottles.mjs`:** Der Lauf iteriert über `drinks.json` und schreibt; er räumt nicht auf. Ohne den Eintrag entstehen die Dateien nicht neu, aber die vorhandenen bleiben liegen — sechs `eb-lem-cassis-{180,270,360}.{avif,webp}` in `public/img/bottle/` und sechs Scheiben `eb-lem-cassis-{120,180,264}.{avif,webp}` in `public/img/bottle-disc/`. **Sie sind von Hand zu löschen, und anders als bei den 42 Scheiben aus 11.3 hält das Löschen**, weil der Generator sie ohne Dateneintrag nicht wiederherstellt. Genau das war dort der Grund, es zu lassen.

**Die Quelldatei `eb-cassis.png` bleibt liegen, und zwar richtig so.** Das Skript prüft in beide Richtungen: ein Getränk ohne Foto und ein Getränk mit fehlendem Foto brechen den Lauf ab, eine Aufnahme ohne Getränk wird als `orphans` geführt und geduldet — „photography waiting for a drink". Derzeit ist `eb-Exotic.png` dieser Waise; nach dem Wechsel ist es `eb-cassis.png`. **Eine Rücknahme des Wechsels braucht dann kein neues Foto.**

**Zwei Fallstricke, die beim Einpflegen zu erledigen sind.** Erstens: **Der Dateiname trägt ein großes E.** Alle vierzehn anderen Quelldateien sind durchgehend klein. Auf Taibs Mac ist das folgenlos, auf einem Linux-Server nicht — dort sind `eb-Exotic` und `eb-exotic` zwei verschiedene Dateien. **Vor dem Einpflegen umbenennen, nicht danach.** Zweitens: Die Zahl „vierzehn" steht noch in vier Kommentaren — `derive-bottles.mjs` an sechs Stellen, `Drinks.astro` einmal. Kommentare, keine Ausgabe, aber es ist genau die Sorte Zahl, gegen die dieses Projekt Gatter baut.

**Was ausdrücklich nicht anzufassen ist: der Rahmensatz.** In Auftrag 237 wurde „Vierzehn Sorten" aus dem Text gestrichen, weil eine Stückzahl als Prosa neben der Liste steht, die sie erzeugt. **Einen Tag später kommt Exotic, und der Text ist ohne eine einzige Änderung weiterhin richtig.** Die Begründung von gestern hat sich heute belegt.

**Auf Lieferando muss „Elephant-Bay" mit Bindestrich geschrieben werden** — die Plattform stuft „Elephant Bay" sonst fälschlich als alkoholisch ein. Auf der Website normale Schreibweise.

**Getränkepaarungen — an den Daten gezählt, nicht aus einer Quelle übernommen.** Alle sieben Manti tragen ein `pairing` mit primärer und alternativer Empfehlung:

| Gericht | Primär | Alternativ |
|---|---|---|
| The Original | Cola | Ice Tea Peach |
| Golden Harvest | Ice Tea Blueberry | Lemonade Orange |
| Nature's Palette | Ice Tea Mango Pineapple | Ice Tea Watermelon |
| Melted Heart | Lemonade Lemon | Lemonade Pink Grapefruit |
| Fried Dream | Ice Tea Pomegranate | Lemonade Lemon |
| Hingel's Harvest | Ice Tea Peach Zero | ~~Lemonade Cassis~~ **Lemonade Exotic** |
| Hingel's Beef | Cola | Lemonade Orange |

**Zwei Behauptungen aus den alten Gedächtnisdateien sind damit widerlegt.** Dort stand: „Alle vierzehn Sorten kommen mindestens einmal vor, keine zwei Gerichte teilen dieselbe primäre." **Beides stimmt nicht.** The Original und Hingel's Beef haben beide Cola als primäre Empfehlung. Und es kommen **elf der vierzehn Sorten** vor — **Ice Tea Lemon, Lemonade Lime Mint und Cola Zero fehlen ganz.** Die Behauptung stand in der Quelle neben einer Tabelle mit nur drei Zeilen; niemand hat sie je an den Daten nachgezählt.

**Ob die Vollständigkeit überhaupt ein Ziel ist, ist eine offene Frage** (16.7). Eine Empfehlung soll passen, nicht ein Sortiment abarbeiten — zwei Rinderhack-Gerichte vertragen dieselbe Cola. **Aber die Behauptung, es sei vollständig, darf nirgends mehr stehen.**

**Bei jeder Kartenänderung ist die Matrix neu zu zählen.** Der Cassis-Wechsel hat das eingelöst: Hingel's Harvest hat seine Alternative verloren, und der Verlust ist hier eine Lücke und keine stillschweigende Ersetzung. **Ein Getränk, das aus dem Sortiment fällt, fällt nicht aus den Empfehlungen, die es nennen — es muss dort einzeln ersetzt werden.** **Kein Gatter sieht das, und der Grund ist im Schema nachgesehen:** `pairing` ist in `content.config.ts:215` ein gewöhnlicher Text (`txt.optional()`), kein Verweis auf `drinks.json`. Die Empfehlung steht als Fließtext in `dishes.json` — der einzige Cassis-Satz der ganzen Karte, „Beeriger wird es mit Elephant Bay Lemonade Cassis 0,33 l." **Ein Getränk kann also aus den Daten verschwinden und in der Prosa weiterleben, ohne dass ein Lauf rot wird.** Das ist der Kandidat für die nächste Prüfung: jeden in einer Paarung genannten Getränkenamen gegen `drinks.json` halten (16.6).

**Getränke bekommen keine Einzeltexte auf der Website.** Bei einem Sortiment derselben Marke wird jeder längere Text zur Schablone. Rahmensatz plus ein Satz je Sorte im Shop. **Der Rahmensatz steht seit Auftrag 237 ohne Stückzahl und ohne Preisangabe** und lautet in `copy/home.json`:

> Eistee, Limonade und Cola in Mehrwegflaschen, 0,33 l.
>
> Eine Marke aus Stuttgart, das ganze Regal. Wir haben uns entschieden statt gemischt: Die Eistees treffen die Mitte zwischen Eistee-Gefühl und zu viel Zucker, die Limonaden dürfen etwas süßer sein — Limonade eben. Und die Cola muss man niemandem erklären. Weil danach gefragt wird: Bei Elephant Bay ist jede Flasche vegan.

**Korrigierter Fehler:** Die erste Fassung sagte „kräftig gebrüht und weniger süß" und „setzen auf Zitrusfrucht und Kohlensäure statt auf Sirup". Beides war erfunden, das Zweite sogar gegenteilig.

## 7.11 Ernährungszahlen

**Sie kommen aus den Daten, nie aus dem Fließtext.** Zuletzt gemeldet, Stand Auftrag 231: `/vegan` zeigt 13 Gerichte, `/vegetarisch` 23. Vegan ist eine Teilmenge von vegetarisch.

**Achtung:** Die ältere Angabe „13 vegan, 10 vegetarisch, 4 halal" stammt aus der Zeit **vor** der Churros-Rückstufung und ist nicht mit dem heutigen Stand abgeglichen. Wer eine Zahl braucht, liest sie aus `dishes.json`, nicht aus dieser Datei.

## 7.12 Regionale Zuordnungen

Grundlage der geplanten Wissensseiten.

| Gericht | Region beziehungsweise Vorbild |
|---|---|
| The Original | Kayseri |
| Hingel-Linie, Kartoffel | Erzurum, Kars, Sivas |
| Hingel-Linie, Fleisch | Ardahan, Posof |
| Melted Heart, **nur die Servierart** | Sinop, Schwarzmeerküste |
| Bulgur Bites | İçli Köfte |
| Bulgur Bowl | Kısır |
| Crispy Cheese Rolls | Sigara Böreği |
| Green Rolls | Yaprak Sarma |
| Fermento | Turşu |
| Linsensuppe | Mercimek Çorbası |
| Bauernsalat | Çoban Salatası |

**Drei Vorbehalte, die eingehalten werden müssen:**

Bei Melted Heart gehört **nur die Servierart** nach Sinop — Walnuss und zerlassene Butter. **Das Ei im Teig hat nichts damit zu tun.** Dieser Fehler stand einmal im Text.

Sinop-Mantı ist in den Quellen durchgehend als *Hackfleisch*-Gericht beschrieben. Deshalb wird nur die Servierart hergeleitet, nicht das Gericht. Sinop ist eine eigene Stadt, kein Ortsteil von Samsun.

**Die Herleitung von „Hingel" aus dem georgischen „Hinkali" wird nicht verwendet** — die türkische Wikipedia warnt ausdrücklich vor der Verwechslung, die englische nennt eine andere Herleitung. Verwandte Namen sind xəngəl (Aserbaidschanisch), hinkal (Dagestan), xingal (Kurdisch).

**Zitierfähiges Material für die Wissensseiten:** Kayseri — vier Gramm je Manti, vierzig Stück auf einen Löffel, als alte Prahlerei. Bewusst aus dem Hero entfernt, gehört auf `/wissen/`.

---

# 8. Die Website — Struktur, Datenmodell, Bauregeln

## 8.1 Technischer Rahmen

**Astro 5, statischer Generator.** Vollständig vorgerendertes HTML, kein Framework, keine Drittanbieter-Skripte, Schriften lokal. Entwicklungsserver auf `localhost:4323`.

**Der Bau erzeugt 43 HTML-Dokumente: 40 Seiten und 3 Weiterleitungsstümpfe** (Stand nach Auftrag 243, gemessen). Bis Auftrag 241 waren es 39: 37 Seiten und 2 Stümpfe. Ältere Dateien sprechen von „37 Routen, alle mit Status 200". Status 200 kann ein statischer Bau nicht liefern — das ist eine Eigenschaft des Servers, nicht des Bauwerks.

**Bauzeit 2,5 s** (243), davor 2,9 s (242). Die Bauzeit ist nicht das Problem; die elf Gatter brauchen rund 33 Minuten.

**Hosting: noch offen.** Empfehlung Cloudflare Pages. Hostinger scheidet aus, weil ein Reverse Proxy dort nur auf VPS möglich ist. **Blockiert die Datenschutzerklärung**, weil Anbieter, Art-28-Vertrag und Logfile-Speicherdauer benannt werden müssen.

## 8.2 Routen

| Route | Anmerkung |
|---|---|
| `/` | Startseite |
| `/speisekarte/` | Karte mit Filterreihe |
| `/speisekarte/<slug>/` | 27 Gerichtseiten |
| `/vegan/`, `/vegetarisch/` | seit 224 |
| `/herstellung/`, `/zutaten/`, `/ueber-uns/` | |
| `/standorte/mannheim/` | trägt die Kartendarstellung mit Zwei-Klick |
| `/treueprogramm/` | |
| `/impressum/` | einziger geschriebener Rechtstext |
| `/agb/`, `/widerruf/`, `/datenschutz/` | auf `pending`, **nicht gebaut** |
| `/bestellen/` | geplant, führt zur Foodamigos-Strecke |
| `/halal/` | geplant, noch nicht angelegt |
| `/wissen/manti/` | **seit 242**, englisch `/en/what-is-manti/` |
| `/wissen/verwandte/` | **seit 242**, englisch `/en/related-dumplings/` |
| `/wissen/mal-was-anderes/` | **seit 242**, englisch `/en/something-different/` |

**Es gibt keine Übersichtsseite unter `/wissen/`.** Geprüft und so gewollt: Drei Seiten brauchen kein Inhaltsverzeichnis, und eine Übersicht ohne eigenen Inhalt wäre eine Seite, die nur auf andere zeigt. Der Kommentar bei `routes.ts:383` sagt das und stimmt.

**Navigation:** vier Punkte — Speisekarte, Herstellung, Über uns, Standort — plus Bestellknopf. Auf schmalen Geräten eine aufklappende Pille mit gestricheltem Kreis als Knopf, ohne JavaScript. Begründung für vier statt fünf: Die Navigation beantwortet Fragen *vor* der Bestellung.

**Startseite, Reihenfolge:** Aktionsleiste · Hero · Proof · [Video] · Am häufigsten bestellt · [The Original] · Warum anders · Was Gäste schreiben · Bestellen · Standort.

**Auf `/speisekarte/`:** `#karte` mit Filterreihe (vier Chips: Alle, halal, vegetarisch, vegan) · Getränkeabschnitt `#getraenke` · Abschnitt „Was dazu geht" `#dazu`.

**Bestellstrecke:** Foodamigos, zieht von `/speisekarte` auf `/bestellen`.

## 8.3 Datenmodell — `dishes`

Wer mit Claude Code arbeitet, muss diese Feldnamen kennen, sonst beschreibt ein Auftrag etwas, das es so nicht gibt.

| Feld | Inhalt | Pflicht |
|---|---|---|
| `id`, `name`, `slug` | Kennung und Anzeige | ja |
| `intro` | Einleitung, trägt auch das Overlay | **trägt die Seite** |
| `dough` | Blocktitel „Der Teig" | optional |
| `filling` | Blocktitel „Die Füllung" | optional |
| `sauce` | Blocktitel „Was daraufkommt" (hieß bis Auftrag 249 „Darunter, darüber") | optional |
| `why` | Blocktitel „Warum so" | optional |
| `pairing` | Blocktitel „Was dazu passt" | optional |
| `line` | Kachelzeile auf `/speisekarte` | ja |
| `ingredients` | Zutatenliste | ja |
| `allergens` | ist immer drin | ja |
| `allergensOptional`, `allergensTraces` | siehe 7.1 | optional |
| `additives` | Zusatzstoffklassen | leer erlaubt |
| `diet` | Chip: vegan, vegetarisch, halal | ja |
| `production` | `inhouse`, `partial`, `sourced` | ja |
| `related` | Verweise auf verwandte Gerichte | optional |
| `basedOn` | Combo verweist auf ihr Grundgericht | optional |
| `title`, `description` | Kopfmarken | ja |

**Sechs Collections** in `src/content.config.ts` (1016 Zeilen, `.strict()`): `dishes`, `drinks`, `copy`, `meta`, `legal`, `diet`. Der Platzhaltertyp ist `PENDING = z.object({ pending: z.literal(true), note: z.string().optional() })`, eingebunden über `open(s) = z.union([s, PENDING])`. Ein `superRefine` erhebt zehn Einwände.

**Alle Textblöcke sind optional.** Ein leerer Block wird vollständig nicht ausgegeben: kein Element, keine Überschrift, kein Abstand, keine Trennlinie. Auf einer Pommes-Seite darf keine leere Überschrift „Der Teig" stehen.

**Vererbung an die Combos:** Eine Combo übernimmt `allergens`, `allergensOptional`, `allergensTraces` und `additives` ihres Grundgerichts. **Zutatenlisten erbt sie nicht** — eine Cola hat eigene Zutaten, und die Liste des Hauptgerichts allein wäre eine vollständig aussehende Liste, der die Hälfte fehlt. `marksOf()` in `src/lib/dish.ts` holt die Kennzeichnung, auch für Combos.

## 8.4 `hasPage` — die Schranke existiert

```
src/lib/dish.ts:62
!dish.data.basedOn && (dish.data.intro ?? '').trim() !== ''
```

Sechs Aufrufstellen: `dish.ts:79`, `dish.ts:83`, `diet.ts:72`, `[dish].astro:31`, `[dish].astro:38`, `[dish].astro:116`.

**Das ist die Schranke aus 4.4** — eine Seite entsteht, sobald `intro` gefüllt ist, und eine Combo bekommt keine. Der Kommentar bei `dish.ts:70` behauptet etwas anderes als die Daten: `pageOf()` gibt heute nie `null` zurück, weil alle 27 Gerichte einen `intro` haben. Der Kommentar gehört korrigiert, die Funktion nicht.

## 8.5 Overlay und Routing

Der Klick auf eine Kachel öffnet ein Overlay und setzt per History-API die zugehörige Adresse. Die Zurück-Taste schließt das Overlay, statt die Seite zu verlassen. **Ohne JavaScript führt derselbe Klick als gewöhnlicher Link auf die Seite** — das Overlay ist eine Verbesserung, keine Voraussetzung.

Fokus wandert beim Öffnen ins Overlay, Escape schließt, Fokus kehrt auf die auslösende Kachel zurück. `aria-modal`, Fokusfalle, Hintergrund inert.

**Overlay und Seite lesen dieselben Felder.** Keine zweite Textquelle.

## 8.6 Aufbau einer Gerichtseite

Bild · Name als `h1` · Chips · die fünf Blöcke, soweit gefüllt · Kennzeichnungszeilen · Zutatenliste · verwandte Gerichte · Bestellknopf · `MenuItem`-Auszeichnung mit `suitableForDiet`, **ohne Preis** · `BreadcrumbList` Startseite → Speisekarte → Gericht · selbstbezügliches Canonical · eigenes `og:image`.

**`DishMarks.astro:86` hängt beide Nachsätze an die Allergenzeile.** Fehlt `allergens`, entfällt die Zeile ganz — und mit ihr die wählbaren Zusätze. Das war der Grund, warum ein Eintrag aus Auftrag 224 unsichtbar blieb.

## 8.7 Verbindliche Bauregeln

- **Gerichtseite nur bei vorhandenem `intro`**
- **Höchstens ein roter Knopf je Abschnitt**, die Kopfleiste zählt nicht mit
- **Keine Preise auf der Website**, in `content.config.ts` erzwungen
- **Blocküberschriften kommen aus den Daten** — Text ohne Titel bricht den Bau
- **Combos erben Kennzeichnung, aber keine Zutatenliste**
- **Karte lädt erst nach Klick** — Zwei-Klick, `data-embed`
- **Keine eingebettete Karte** ohne Einwilligung: 500 kB und Datenübertragung, bevor jemand zugestimmt hat

## 8.8 Wichtige Dateien

**Inhalte:** `src/content/dishes.json` · `drinks.json` · `meta.json` · `copy/home.json` · `copy/legal/{impressum,datenschutz,agb,widerruf}.json` · `copy/diet/{vegan,vegetarisch}.json` · `src/content.config.ts`

**Bauteile:** `Nav.astro` (`class="nav on-ink"`) · `Logo.astro` · `Base.astro` · `Menu.astro` · `Bestseller.astro` · `DishMarks.astro` · `DishCard` · `Scene.astro` · `Order.astro` · `Standort.astro` · `Location.astro` · `Breadcrumbs.astro` · `Schema.astro` · `[dish].astro`

**Seit 242 dazu:** `src/content/copy/wissen/{manti,verwandte,anderes}.json` · `src/pages/[...wissen].astro`

**Bibliothek:** `src/lib/dish.ts` · `src/lib/copy-links.ts` (hieß bis Auftrag 244 `src/lib/diet.ts`) · `src/data/routes.ts` mit `dietOrder` und `legalOrder`

**Stile:** `src/styles/tokens.css` (Farbtoken, `.on-ink`-Block) · `src/styles/base.css`

**Prüfskripte:** `scripts/gates.mjs` (Läufer) · `diet-check.mjs` · `legal.mjs` · `anrede.mjs` · `teilbild.mjs` · `a11y.mjs` · `contrast.mjs` · `hover.mjs` · `thirdparty.mjs` · `budget.mjs` · `mess.mjs` (geteilter Unterbau) · `routes.mjs` · `favicon.mjs` · `pending.mjs`

**Bilder:** `/img/scene/<gericht>-{720,1080}.{avif,webp}` (LCP-Element der Gerichtseiten) · `/img/plate/hero-the-original-560.avif` (LCP der Startseite, 79,0 kB) · `/og-home.jpg` (Ausweich-Teilbild, 104 kB) · `src/assets/square/` · `src/assets/brands/MC/`

## 8.9 Logos

**MANTI & CO.** — vier Dateien in `src/assets/brands/MC/`:

| Datei | Tatsächlicher Inhalt | viewBox |
|---|---|---|
| `NewLOGO-Wortmarke.svg` | **Wortmarke**, MANTI / & CO. zweizeilig, 2,00 : 1 | 2471,18 × 1236,8 |
| `NewLOGO-Signet.svg` | **Signet**, M& / CO., 1,01 : 1 | 2133,63 × 2110,62 |
| `NewLOGO-Favicon.svg` | M& CO. auf Platte | 3000 × 3000 |
| `NewLOGO-Favicon-M.svg` | M auf Platte | 3000 × 3000 |

**Berichtigt am 11. September 2026 (Auftrag 287, nach dem Bildbefund aus 284/285):** Bis dahin stand hier „**Die Namen der ersten beiden sind vertauscht.** Nicht umbenannt, damit keine Verweise brechen — aber wer sie zum ersten Mal öffnet, muss es wissen.“ — mit einer Tabelle, die die Wortmarke als „Signet, 2133,63 × 2110,62“ und das Signet als „Wortmarke, einzeilig, 2446,38 × 1236,8“ führte. Das war falsch: Die Dateinamen stimmen seit der ersten Aufnahme (f62216a); `NewLOGO-Wortmarke.svg` zeigt „MANTI“ über „& CO.“ (zweizeilig, 9 Pfade), `NewLOGO-Signet.svg` „M&“ über „CO.“ (5 Pfade); 2446,38 war die Breite einer älteren Fassung der Wortmarke (bis de86c95). Logo.astro nutzt beide richtig (`full` = Wortmarke, `short` = Signet). Die alte Notiz bleibt hier zitiert — Anhängen statt Überschreiben beginnt mit diesem Satz.

**Farbe über `currentColor`.** Die beiden Dateien ohne Platte nehmen die Farbe ihrer Umgebung an — hell in der Kopfleiste, dunkel auf Papier. Bei eigenem Logo zulässig, spart alle Farbfassungen.

**Favicon seit 262b: ein Zeichen auf allen Stufen, SVG vorneweg.** `favicon.svg` (byteidente Kopie der Signet-Quelle, 4 022 B) steht im Head vor den drei PNG-Zeilen; `icon-180.png`, `icon-32.png` und `icon-16.png` kommen alle aus dem Signet. Bis 262b kam die 16er aus dem M (Begründung damals: Strichbreite unter einem Bildpunkt) — Taibs Entscheidung vom 31. August: Wiedererkennung vor Strichbreite, bei 16 px liest niemand eine Marke. `NewLOGO-Favicon-M.svg` bleibt als Rückfalllinie liegen, sein Riegel im Skript auch. **Abnahme am Bild ausstehend** (`../262b-sichtprobe.png`). Die PNGs bleiben, weil Safari am Mac SVG-Favicons nicht liest und iOS für Homescreen und Lesezeichen ausschließlich das `apple-touch-icon`-PNG nimmt — dort war die 180er immer scharf.

**Die Kopfleiste ist nicht hell, sondern `.on-ink` mit Weichzeichner.** Eine schwarze Wortmarke hätte dort 1,62 bis 2,55 : 1 erreicht, die Schranke ist 3 : 1. Diese Zuordnung war in 221 falsch berichtet worden und hat Auftrag 222 zu Fall gebracht.

**Elephant Bay:** `elephant-bay-schwarz.svg` und `elephant-bay-weiss.svg`, je 11,8 kB, 15 echte Pfade, aus den gelieferten EPS erzeugt. **Farbe #231F20**, nicht reines Schwarz — der übliche CMYK-Tiefschwarz aus dem Druck. **Nicht umfärben, fremdes Markeneigentum.** Elephant Bay GmbH, Birkenwaldstraße 214, 70191 Stuttgart, HRB 744251.

Das Logo **ist** die Überschrift des Getränkeabschnitts. Der Text „ELEPHANT BAY" bleibt als visuell verborgene Überschrift im Aufbau (`visually-hidden` mit `aria-hidden`, das Logo trägt `aria-label`) — sonst hörten Vorlesewerkzeuge den Namen zweimal.

**Kein Logo im Teilbild.** Solange ein Gericht abgebildet werden kann, ist es die bessere Wahl. **Und das eigene Logo steht nicht im Getränkeabschnitt** — es steht in der Kopfleiste; auf der eigenen Seite muss man sich nicht selbst als Marke ausweisen.

## 8.10 Wie Textseiten aufgebaut sind — Verweise, Abschnitte, benannte Punkte

**Dieser Abschnitt ist Pflichtlektüre, bevor irgendein Auftrag einen Text mit einem Link darin beschreibt.** Vier von fünf Auftragsfehlern der letzten Woche entstanden hier.

### Verweise stehen nicht im Text

**Es gibt kein `set:html` und keine Markdown-Links in den JSON-Dateien.** Der Absatz bleibt eine ununterbrochene Zeichenkette. Daneben steht ein `links`-Feld, das die Wendung nennt und ihr Ziel:

```json
"links": [
  { "phrase": { "de": "The Original", "en": {"pending": true} }, "dish": "the-original" },
  { "phrase": { "de": "Was Manti ist",  "en": {"pending": true} }, "route": "wissenManti" }
]
```

`route` wird gegen `src/data/routes.ts` aufgelöst, `dish` gegen die Sammlung **und** gegen `hasPage()`. Beides geschieht beim Bau. **Eine Wendung, die im Text nicht vorkommt, hält den Bau an** — mit der Meldung „Der Verweis auf … nennt die Wendung „…", und sie steht in keinem Absatz dieses Abschnitts. Der Link fiele lautlos aus der Seite." Das ist der ganze Zweck der Bauart: Ein verlorener Link ist ein Baufehler, kein stiller Textverlust.

### `splitParts()` zählt über den Abschnitt, nicht über den Absatz

`src/lib/copy-links.ts`, `splitParts(paragraphs: string[], hrefs: Map<string,string>, where: string): Part[][]`. **Ohne Zeilennummer:** Die frühere Angabe `:91` hat sich mit dem Auszug von `dietDishes()` nach `dish.ts` verschoben und ist nicht nachgemessen — sie ist gestrichen, nicht geraten. Die Funktion prüft **jede** Wendung gegen **alles**, was sie bekommt, und wirft bei null Treffern. **Daraus folgt eine Regel, die zweimal übersehen wurde:** Man darf sie nicht je Absatz und nicht je Punkt aufrufen, sobald ein Abschnitt mehrere Verweise auf mehrere Absätze verteilt. Der Regionen-Abschnitt auf `/wissen/manti/` hat vier Verweise auf vier verschiedenen Punkten — vier Einzelaufrufe hätten den Bau angehalten.

### `splitSection()` — seit Auftrag 243

```ts
export type SectionPoint = { name: string; parts: Part[][] };
export function splitSection(
  body: string[] | undefined,
  points: readonly { name: string; body: string[] }[] | undefined,
  hrefs: Map<string, string>,
  where: string
): { parts: Part[][] | null; points: SectionPoint[] | null }
```

Legt die Punkt-Texte zu **einer** Liste, zerlegt einmal, verteilt zurück. `splitParts()` selbst ist dabei unverändert geblieben — null gelöschte Zeilen. Beide Seiten, `[diet].astro` und `[...wissen].astro`, benutzen denselben Aufruf; im Frontmatter wird das Ergebnis mit `...splitSection(…)` in das Abschnittsobjekt gespreizt.

### Abschnitte haben entweder `body` oder `points`

`dietSection` und `wissenSection` tragen dieselbe Bauart: `title` (Pflicht), `intro` (optional, ein Satz), `body` **oder** `points`, `links` (optional). Genau eine `.refine()` erzwingt das Entweder-oder. **Die zweite `.refine()`, die `links` neben `points` verbot, ist in Auftrag 243 gestrichen** — sie war seit Auftrag 224 auf Widerruf gesetzt, mit dem Kommentar „Wer ihn dort braucht, erweitert splitParts() und streicht diese Zeile."

```ts
points: i18n(
  z.array(
    z.object({
      name: z.string().min(1),
      body: z.array(z.string().min(1)).nonempty(),
    }).strict(),
  ).nonempty(),
).optional(),
```

**Ein Punkt ist keine Gliederungsebene.** Gezeichnet wird `<dl>` / `<dt>` / `<dd>`, kein `<h3>`. Ein Punkt steht unter der `<h2>` seines Abschnitts und ist ein Aufzählungsglied.

**Die Typografie ist je Seite verschieden, die Mechanik nicht.** Auf `/zutaten` trägt der Name `class="label"`: Mono, Versalien, gesperrt, `--text-muted` — richtig für „GLUTEN". Auf den Wissensseiten trägt er `class="wissen__name"`: Fließtextschrift, `font-weight: 600`, normale Schreibung — richtig für „Kayseri, Zentralanatolien" und „Wie groß?". **600 ist kein geladener Schnitt**, `fonts.css` lädt Hanken Grotesk nur als 400; der Browser rechnet ihn aus, wie schon bei `.loy__q` im Treueprogramm.

### Astro-Routing: ein Parameter ist ein Wegstück

`[diet].astro` trägt `/vegan/` — ein Segment. `/wissen/manti/` hat zwei, also braucht es den Restparameter `[...wissen].astro`. Ein `[wissen].astro` bricht mit `Missing parameter: wissen` ab. Das Vorbild dafür steht seit Monaten im selben Ordner: `standorte/[...location].astro`. **Maßgeblich ist nicht die Art der Seite, sondern die Zahl der Segmente.**

---

# 9. Textstruktur und Titles

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

---

# 10. Qualitätsgatter und Messwerte

## 10.1 Die elf Gatter

**Reihenfolge — was ohne Browser antwortet, steht vorn:**

`diet-check` · `legal` · `anrede` · `teilbild` · `a11y` · `contrast` · `hover` · `kommentar` · `sprache` · `thirdparty` · `budget`

| Gatter | Was es prüft |
|---|---|
| `diet-check` | Kennzeichnung und Zutaten |
| `legal` | Pflichtangaben und Rechtstexte |
| `anrede` | persönliche Anrede, in den Quelltexten |
| `teilbild` | `og:image` je Route — Datei, Maße, Alternativtext |
| `a11y` | axe, über alle gebauten Routen |
| `contrast` | SC 1.4.3 und 1.4.11, an Bildpunkten |
| `hover` | SC 1.4.3 im Überfahrzustand, Übergänge aus |
| `kommentar` | die Kontrastzahlen **in den Quelltextkommentaren** |
| `sprache` | Sprachvollständigkeit — Umfang, Textschlüssel, Markup, Auslieferung |
| `thirdparty` | Fremddienste und Einwilligung |
| `budget` | LCP, CLS, JS, Bild |

**Gesamtlaufzeit nach Auftrag 243: 1981,8 s (33,0 Minuten) — der bisher längste Lauf.** Verlauf: 977,5 s vor 234 · 2088 s nach 234 · 1805,2 nach 235 · 1798,1 nach 236 · 1822,0 nach 237 · 1819,1 nach 240 · 1795,7 nach 241 · 1969,4 nach 242 · 1981,8 nach 243. Der Sprung auf 2088 s kam aus `budget`, das seither alle Routen anfährt statt acht. **`budget` trägt mit 1227,9 s weiterhin knapp zwei Drittel der Gesamtzeit.** Der Anstieg von 241 auf 242 (+173,7 s) ist der Preis der drei neuen Seiten: mehr Routen für `a11y`, `contrast`, `hover` und `budget`.

**Einzelwerte nach 243:** `budget` 1227,9 · `contrast` 255,1 · `hover` 216,5 · `a11y` 212,6 · `thirdparty` 67,9 · `kommentar` 1,0 · `teilbild` 0,2 · `sprache` 0,2 · `diet-check` 0,1 · `legal` 0,1 · `anrede` 0,1. Bau 2,5 s.

**Die schnellen Gatter kosten zusammen unter zwei Sekunden.** Sie stehen deshalb **vor** `thirdparty` und `budget`: Was in einer Sekunde antwortet, hat keinen Grund, hinten zu stehen.

**Praktische Folge für die Auftragsplanung:** Ein voller Lauf kostet eine gute halbe Stunde. Zwei Läufe an einem Tag sind eine Stunde Wartezeit. **Deshalb gilt: keine Vorgabe an Claude Code, deren Prüfung einen zweiten vollen Lauf erzwingt, wenn sie sich vorher lesen lässt.** In Auftrag 242 wurde ein Lauf verworfen, weil die Ausgabe durch `tail -70` geschnitten war und die Laufzeiten fehlten — 33 Minuten für nichts. **Kein `tail`, kein `head` auf dem Gatterlauf.**

**Seit Auftrag 218 laufen sie unabhängig voneinander**, per `spawn` in einer `for`-Schleife, **nicht** in einer `&&`-Kette. Der Gesamtlauf endet mit Fehler, sobald eines gefallen ist — aber jedes hat vorher gemeldet. Vorher galt: Fiel das erste Gatter, wurde an dem Tag nichts weiter gemessen.

**Seit Auftrag 234 meldet jedes Gatter seinen Umfang** — `scripts/umfang.mjs`. Jedes trägt einen Sollwert, druckt „N von M" und **fällt bei null durch**. Das ist der Riegel gegen die Prüfung, die besteht, weil sie nichts angefasst hat.

| Gatter | Sollwert |
|---|---|
| `diet-check` | 27 Gerichte mit Zutatenliste, 7 mit Ernährungsangabe, **14 Getränke mit Ernährungsangabe** |
| `legal` | 37 Routen, 4 Rechtstexte |
| `anrede` | 10 Quelldateien, 46 Textschlüssel |
| `teilbild` | 37 Routen |
| `a11y` | 111 Messpunkte über 37 Routen |
| `contrast` | 111 Messpunkte |
| `hover` | 111 Messpunkte |
| `kommentar` | 106 Annotationen |
| `sprache` | 74 Routenfassungen (37 Routen × 2 Sprachen), **39 durchgesehene Dokumente** |
| `thirdparty` | 37 Routen, 39 Dokumente |
| `budget` | 37 Routen |

**111 = 37 Routen × drei Breiten** (390, 768, 1440). **39 Dokumente = 37 Seiten + zwei Weiterleitungsstummel** — daher fallen die beiden Zahlen bei `thirdparty` auseinander, ohne dass eine davon falsch wäre.

**Diese Tabelle ist an vier Stellen überholt und wird in Auftrag 244 §1 nachgezogen.** Der Bau hat seit 242 drei Seiten mehr; die Sollwerte sind mitgewachsen, die geschriebenen Zahlen nicht. Gemessen nach 243: `sprache` **80** Routenfassungen (Sollwert steht auf 74) und **43** Dokumente (steht auf 39); `anrede` **13** Textdateien (steht auf 10) und **47** Bauteildateien (steht auf 46). Der Wert 39 steht in `sprache.mjs` zweimal — als Konstante bei Zeile 74 und im Fließtext eines Kommentars bei Zeile 598.

**Warum das kein rotes Gatter erzeugt hat:** `umfang.mjs` fällt bei **null** durch und meldet „N von M", ohne bei N > M rot zu werden. Ein zu kleiner Sollwert ist deshalb still. **Das ist die Schwachstelle des Umfangsriegels** — er schützt gegen die Prüfung, die nichts angefasst hat, nicht gegen die Prüfung, die weniger erwartet als da ist.

## 10.1a Das Kommentargatter — was Auftrag 235 geprüft hat

**`scripts/kommentar.mjs` liest die Kontrastzahlen, die neben dem Code stehen, und rechnet sie nach.** Tokenpaare werden **im Browser** aufgelöst, weil `color-mix(in oklab, …)` außerhalb eines Browsers nicht auflösbar ist. Toleranz ± 0,005.

**Zwei Formen:**

```
/* @kontrast vorn=--text-faint hinten=--paper wert=4,07 */
/* @kontrast vorn=… hinten=… kontext=.on-ink wert=… */
/* @kontrast quelle=<skript> datum=… wert=… was="…" */
```

Die dritte Form ist für Behauptungen, die kein Tokenpaar hat. **Sie kommt genau einmal vor** — `DishOverlay.astro:237`.

**Ergebnis des ersten Laufs: 106 von 106.** Davor: **14 Zahlen waren falsch und wurden korrigiert, 7 waren nicht belegbar und wurden gelöscht.**

**`RESTBESTAND = 199` ist eine Decke, kein Soll.** Sie verhindert, dass unannotierte Kontrastbehauptungen wieder zunehmen. Nach unten sichert sie nichts.

**Ehrliche Grenze:** Die Regel „`quelle=` ist verboten, wo ein Tokenpaar existiert" ist **nicht maschinell durchsetzbar**. Claude Code hat das zu Recht angemerkt. Sie steht als menschliche Regel im Kopf des Skripts, verkleidet als Gatterregel — und wer sie umgehen will, kann es.

## 10.1b Das elfte Gatter — Sprachvollständigkeit

**Gebaut in Auftrag 236 — `scripts/sprache.mjs`.** Beschlossen am 25. August 2026 als Auflage zur Mehrsprachigkeit (siehe 15). Der Abschnitt hier ist die Spezifikation, wie sie **vor** dem Bau geschrieben wurde; das Ergebnis steht in 11.7. Sie ist unverändert stehengeblieben, weil sie gehalten hat — bis auf eine Ergänzung, die der Bau erzwungen hat und die unten steht.

**Das Problem, das es löst:** Eine Seite wird auf Deutsch geschrieben oder geändert, die englische Fassung wird vergessen, und niemand merkt es — weil nichts fehlschlägt. Ein stiller Mangel.

**Was es prüft, in drei Stufen:**

**Erstens, Routen.** Jede Sprache hat einen **erklärten Umfang** — eine Liste von Routen, die in dieser Sprache existieren müssen. Das Gatter prüft, dass diese Liste **vollständig** erfüllt ist, und dass keine Route außerhalb des Umfangs eine `hreflang`-Auszeichnung auf diese Sprache trägt.

**Der Unterschied zur Ausnahmeliste, und er ist der Punkt:** Eine Ausnahmeliste sagt „diese Seite zählt nicht" und wächst still. Ein erklärter Umfang sagt „das hier muss es geben, alles davon" — er ist ein Sollwert, und wer ihn kürzt, kürzt sichtbar. **Ich hatte in der vorigen Antwort beides vermischt** — erst „nicht alle 37 Routen brauchen Englisch", dann „keine Ausnahmeliste". Das war ein Widerspruch von mir; so ist er aufgelöst.

**Zweitens, Textschlüssel.** Jeder Schlüssel in einer Content-Collection existiert in jeder aktiven Sprache. Das Zod-Schema erzwingt es, das Gatter zählt es.

**Drittens, Auszeichnung.** Jede Seite trägt `hreflang` auf alle Sprachfassungen **und auf sich selbst**, plus `x-default`. Wechselseitig — eine einseitige Auszeichnung ignoriert Google.

**`pending` bleibt der ehrliche Zwischenstand, kein Schlupfloch.** Ein noch nicht geschriebener englischer Text ist ein Eintrag mit `pending: true` — er existiert, er ist sichtbar, er wird gezählt und im Lauf gedruckt. **Er ist nicht dasselbe wie ein fehlender Eintrag.** Eine Sprachfassung geht erst live, wenn sie null `pending` hat. Damit ist der Zustand „angelegt, aber leer" ein bezifferter Rückstand statt eines Versehens.

**Sollwert nach `umfang.mjs`:** Routen × aktive Sprachen. Fällt bei null durch, wie alle anderen. **Konkret: 74 von 74** — 37 Routen, zwei Sprachen.

**Die Ergänzung aus dem Bau: eine dritte Zahl.** Die Bilanzzeile nennt nicht zwei Werte, sondern drei — geschrieben, ausstehend, **nicht deklariert**. Grund steht in 11.7: Ohne die dritte Zahl zählte eine englische Route, die niemand in den Umfang aufgenommen hatte, als „mit Wörtern" — eine vergessene Übersetzung sah in der Bilanz aus wie eine fertige. Genau der Mangel, gegen den das Gatter gerichtet ist, in der Prüfung selbst.

**Ehrliche Grenze, jetzt schon benannt:** Das Gatter prüft **Vorhandensein, nicht Gleichwertigkeit**. Ein englischer Text, der schlechter ist als der deutsche, besteht. Qualität bleibt eine menschliche Prüfung — die Falle wäre, das Gatter für mehr zu halten, als es kann.

**Dritte Grenze, und sie hat am selben Tag zugeschlagen: Das Gatter prüfte die Daten, nicht die Seite.** Es fragte, ob zu jedem Schlüssel ein Eintrag existiert — nicht, ob der Eintrag aufgelöst an der Seite ankommt. Am 25. August stand er 181 mal als `[object Object]` da, während das Gatter `pass` meldete (11.7a). **Geschlossen in Auftrag 237 durch eine vierte Stufe — „Auslieferung": die gebauten Dateien werden nach 13 Nadeln durchsucht, Sollwert 39 Dokumente, null Funde.** Sie kostet nichts Messbares; `sprache` bleibt bei 0,1 s.

**Damit prüft das Gatter in vier Stufen: Umfang · Textschlüssel · Markup · Auslieferung.** Die letzte ist die billigste und die einzige, die sieht, was ein Gast sieht.

**Zweite Grenze, aus dem Bau: fest verdrahtetes Deutsch im Markup sieht das Gatter nicht.** `i18n()` deckt Inhalte aus den Content-Collections. Zeichenketten, die direkt in den Astro-Komponenten stehen — „Zum Inhalt springen", `aria-label`, das Gerüst der Alternativtexte —, liegen außerhalb. Sie sind deutsch, sie bleiben deutsch, und der Umfangszähler bemerkt es nicht. **Das ist kein Fehler des Gatters, sondern ein offener Posten für die englische Fassung.**

## 10.2 Schranken

| Maß | Schranke | Ort |
|---|---|---|
| LCP | unter 1800 ms | `budget.mjs` |
| CLS | unter 0,02 | `budget.mjs` |
| JavaScript | unter 30 kB gzip | `budget.mjs` |
| LCP-Bild | unter 180 kB | `budget.mjs:69` |
| Kontrast Text | 4,5 : 1 · großer Text 3,0 : 1 | `mess.mjs:319` |
| Überfahrzustand | 1,5 : 1 gegen den Ruhezustand | `hover.mjs:140` |
| axe | ohne Verstöße | `a11y.mjs` |

**Messbedingungen von `budget`:** vierfache CPU-Drosselung, 1,6 Mbit/s, 150 ms RTT.

**Warum die Hover-Schranke 1,5 : 1 ist und nicht 3 : 1.** Claude Codes Begründung, die die ursprüngliche Vorgabe verbessert hat: Die WCAG-Schranke von 3 : 1 für nicht-textliche Anzeigen liegt **über der Decke**. Reines Schwarz gegen den Ruhezustand erreicht 2,96 : 1, `--ink` 2,30 : 1. Eine Schranke oberhalb des Erreichbaren ist kein Maß, sondern ein Verbot des Zustands. 1,5 : 1 entspricht auf der L*-Skala rund ΔL* 11.

**Werte:** auf Papier Ruhe rgb(156,53,42) → Überfahren rgb(91,45,38), 1,60 : 1, ΔL* 13,0. Auf Tinte Ruhe rgb(200,127,34) → Überfahren rgb(220,174,125), 1,60 : 1, ΔL* 14,7 — dort kehrt sich die Richtung um.

**Enge Stelle:** Die 777 roten Textverweise liegen bei 1,60 : 1, nur ein Zehntel über der Schwelle. **Wer am Grundton dreht, bringt sie zum Fallen.**

**Token getrennt:** `--red-text-press` und `--accent-text-press` neben den unveränderten `--red-press` und `--accent-press`. Grund: `--red-press` füllt zwei Knopfflächen und wäre auf den neuen Wert gebracht im dunklen Band bei 1,4 : 1 versunken.

**Aktive Navigationsverweise (`aria-current`) sind ausgenommen.** Eine Rückmeldung sagt „hier kann etwas passieren" — beim aktiven Verweis passiert nichts. Die Ausnahme steht begründet im Kopf von `hover.mjs`, und die Zahl wird bei jedem Lauf mitgedruckt.

**Die Leistenverweise sind ausgereizt, nicht zu schwach gewählt.** Rechnerisch bewiesen: Der Grund erzwingt Y ≥ 0,6900; 1,5 : 1 nach oben verlangte Y = 1,0877, reines Weiß hat Y = 1,0000. Nach unten lässt die Schranke höchstens Y = 0,6500 zu. **Die Menge ist leer.** Der Zustand wird deshalb vom Strich getragen (2 px, `--accent-text-press`), nicht von der Farbe.

## 10.3 Was Auftrag 218 an den Gattern behoben hat

| Fund | Auswirkung |
|---|---|
| Fest verdrahtete Adressen im Kontrast-Gatter | Meldete **eine bessere Zahl als die Wahrheit** — 4,68 statt 3,58 : 1 |
| Stiller Leerlauf im Overlay-Durchgang | 27-mal leer durchgelaufen, ohne Zeile, ohne Zähler |
| Zwei-Klick-Einwilligung | Fünf Verstoßzähler unerreichbar, wenn die geparkte Adresse verschwindet |
| `&&`-Kette | Fiel das erste Gatter, wurde nichts weiter gemessen |
| Bildschranke | Hing an `/hero-/` im Dateinamen — Gerichtseiten liefen daran vorbei |
| Textdurchgang | Fuhr 2 von 35 Routen an, jetzt 9; alle 82 Farbkombinationen werden gemessen |

Die Laufzeit stieg dabei von 545 auf 698 Sekunden. Claude Codes Anmerkung: **Die 545 waren ein Bestwert, sie galten nur, solange alles bestand.**

## 10.4 Messwerte — und was daran fehlt

**Zuletzt gemessen (Stand `auftrag-233-bestand.md`, Commit `a5db37a`):**

| Route | LCP | CLS | JS gzip | LCP-Bild |
|---|---|---|---|---|
| `/` | 1376 ms | 0,0000 | 1,8 kB | 79,0 kB |
| `/speisekarte/` | 372 ms | — | — | Dokument 41,0 kB, gesamt 412,0 kB in 55 Anfragen |
| `/speisekarte/the-original/` | 900 ms | — | — | 51,9 kB |
| `/vegan/` | 736 ms | — | 2,8 kB | 10,1 kB |
| `/vegetarisch/` | 356 ms | — | — | — |
| `/standorte/mannheim/` | 324 ms | — | — | — |
| `/impressum/` | 316 ms | — | — | — |
| `/treueprogramm/` | 324 ms | — | — | — |

**Diese acht waren bis Auftrag 234 der ganze gemessene Bestand. Seit 234 fährt `budget` alle 37 Routen an, und eine fehlende Messung ist ein Durchfallen, kein `console.log`.**

**Ergebnis des ersten vollen Laufs: 37 von 37 gemessen, kein Verstoß.**

| Maß | höchster gemessener Wert | Schranke | Ausnutzung |
|---|---|---|---|
| LCP | 1480 ms auf `/` | 1800 ms | 82 % |
| LCP, alle übrigen Routen | — | 1800 ms | höchstens 56 % |
| CLS | 0,0016 | 0,02 | 8 % |
| JavaScript | 2,8 kB gzip | 30 kB | 9 % |

**Die Startseite ist die einzige enge Stelle.** 82 Prozent bei vierfacher Drosselung heißt: Ein zusätzliches Element vor dem Hero-Bild, und das Gatter fällt. Alle anderen Routen haben mehr als das Doppelte an Luft. **Wer am Kopf der Startseite etwas ändert, misst danach.**

**Der ältere Lauf, Stand 231, bleibt hier stehen, weil er die einzelnen Routen benennt** — die Werte sind älter, aber die einzigen, die es dazu gibt: `/` 1364–1372 ms, CLS 0,0000, 1,8 kB · `/speisekarte/` 372 ms, CLS 0,0000, 2,8 kB · `/speisekarte/the-original/` 896 ms, CLS 0,0000, 1,4 kB · `/vegan/` 736 ms, **CLS 0,0009**, 2,8 kB · `/vegetarisch/` 352 ms, **CLS 0,0016**, 2,8 kB · `/standorte/mannheim/` 328 ms, CLS 0,0000, 1,5 kB. **Die beiden von null verschiedenen CLS-Werte liegen weit unter der Schranke von 0,02, sind aber die einzigen gemessenen Verschiebungen im ganzen Auftritt.**

**Das LCP-Element auf `/` ist das Hero-Bild, nicht die `h1`.** Diese Zuordnung stand früher falsch im Gedächtnis.

## 10.5 Sonstige Läufe

`npm run pending` meldete bis Auftrag 234 **69 offene Textschlüssel**, weil `scripts/pending.mjs` über `meta`, `copy` und `dishes` lief — **nicht über `legal`.** Seit 234 läuft es auch über `legal` und meldet **72**. Die Zahl ist per Gegenzählung bestätigt: **72 = 12 wörtliche Marker + 60 abgeleitete.** **Davon entfallen 26 auf `additives`** — die Zusatzstofffrage ist damit der größte einzelne Textrückstand.

**Die Gegenzählung ist der Punkt, nicht die 72.** Eine Zahl, die aus derselben Schleife stammt, die sie erzeugt, prüft sich selbst nicht. Zwei unabhängige Wege auf dasselbe Ergebnis prüfen sich.

Dazu `npm run plates`, `npm run bottles`, `npm run routes`, `npm run favicon`.

---

# 11. Was die grünen Gatter nicht beweisen

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

## 11.1 Auftrag 234 — gelaufen, acht Commits

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

## 11.2 Weitere gemessene Lücken im Bestand

**Der Füllstand der Kennzeichnungsfelder** über 34 Einträge: `pairing` gefüllt bei 7, ungesetzt bei 27 · `additives` gefüllt bei 2, ungesetzt bei 32, **leeres Array null Mal** · `allergensTraces` gefüllt bei 6, ungesetzt bei 28 · `related` gesetzt bei **null von 34** · `production` an allen 34 Pflicht, Ausgabe nirgends.

**Das leere Array bei `additives` kommt null Mal vor.** Genau dieses leere Array ist nach 7.1 die Aussage „keine" — und damit das Argument gegenüber Wettbewerbern. Solange es nirgends steht, ist die ganze Unterscheidung zwischen „geprüft, nichts" und „nicht geprüft" nur Theorie.

**`--text-faint` fehlte im `.on-ink`-Block** (`tokens.css:244`). **Seit Auftrag 234 steht die Zeile drin**, mit `color-mix(in oklab, var(--paper) 65%, var(--ink))` — 6,45 : 1 gegen `#20201f`. Ohne sie hätte der helle Wert rgb(120,119,115) auf Tinte gestanden, 3,64 : 1. **Die Zeile ist Vorsorge, keine Reparatur:** Alle drei Abnehmer stehen heute außerhalb von `.on-ink`, an 37 Routen nachgesehen. Das steht auch so im Kommentar, damit niemand sie für einen gemessenen Fund hält.

**Hier stand bis zum 25. August eine Zahl von mir, die falsch war.** Ich hatte geschrieben, die drei Verwendungen lägen „bei 3,4 : 1 gegen Papier". Gemessen sind **4,07 : 1 gegen `--paper`** und **3,62 : 1 gegen Papier plus Leinen**. 3,4 ist keines von beidem. **Die Zahl stammt aus dem Kommentar bei `Voices.astro:464`, und der Kommentar ist falsch.** Ich habe einen Kommentar als Messung übernommen — genau der Fehler, den Abschnitt 17 verbietet.

**Die Einordnung war ebenfalls falsch.** Zwei der drei Verwendungen — `Voices.astro:470` und `Bestseller.astro:518` — werden **überhaupt nie gemessen**: Es sind abgeschaltete Knöpfe, deren einziger Inhalt ein SVG ist, und `collectItems()` in `mess.mjs` läuft nur über Textknoten. Die dritte, `Process.astro:72`, ist großer Text (48–80 px, Stärke 900) und schuldet nur 3 : 1. **Kein einziger der drei Fälle war das Problem, für das ich ihn gehalten habe.**

**Achtundachtzig Kontrastkommentare im Bestand sind unbelegt.** In fünfzehn Dateien stehen 88 Kommentare, die ein Kontrastverhältnis behaupten. **Sechs davon sind nachgemessen, einer davon ist falsch, 82 sind ungeprüft.** Das ist keine Einzelstelle, das ist eine ganze Klasse ungeprüfter Zahlen, die im Quelltext wohnt und von dort in Gedächtnisdateien wandert — nachweislich, siehe oben. **Das Gegenmittel ist ein Gatter**, das jeden solchen Kommentar gegen das tatsächlich gemalte Farbpaar rechnet. Höchster Posten in Auftrag 235.

**Zwei neue blinde Flecken, benannt:** `textDecorationThickness` steht **nicht** in `MALT`, der Liste der beobachteten Eigenschaften des Hover-Gatters — ein Element, dessen einzige Rückmeldung eine dickere Unterstreichung ist, gilt als unverändert. Und `collectItems()` geht nur über Textknoten — ein Bedienelement, dessen einziger Inhalt ein SVG ist, wird vom Kontrast-Gatter nie angefasst. **Beide sind heute nicht gemessen, also auch nicht beziffert.** Das ist der Unterschied zu einem Befund.

**Die Zahl der Zusatzstoffklassen ist ungeklärt.** Die Legende auf `/speisekarte` nennt acht. Nach ZZulV sind es elf. **An der Verordnung zu prüfen**, bevor die Legende irgendwo als vollständig ausgegeben wird.

## 11.3 Die 42 Flaschenscheiben — geklärt, sie bleiben liegen

`derive-bottles.mjs` erzeugt für **alle vierzehn** Getränke eine runde Fassung in drei Breiten (120, 180, 264) und zwei Formaten. Das sind 84 Dateien in `public/img/bottle-disc/`, 572 kB. `Combo.astro` fordert sie aber nur für das Getränk an, das im Feld `drink` einer Combo steht — **und es gibt sieben Combos**:

| Combo | Getränk |
|---|---|
| The Original | Ice Tea Peach |
| Golden Harvest | Ice Tea Blueberry |
| Nature's Palette | Lemonade Orange |
| Melted Heart | Ice Tea Watermelon |
| Fried Dream | Ice Tea Pomegranate |
| Hingel's Harvest | Ice Tea Lemon |
| Hingel's Beef | Cola |

**Die 42 nie ausgelieferten Dateien sind die Scheiben der anderen sieben Getränke** — Cola Zero, Lemonade Cassis, Lemonade Pink Grapefruit, Lemonade Lemon, Lemonade Lime Mint, Ice Tea Mango Pineapple, Ice Tea Peach Zero. 288 von 572 kB. Im gebauten `dist/` stehen genau die anderen 42, nachgezählt.

**Sie bleiben liegen, aus drei Gründen.** Sie liegen in `public/` und werden nie angefordert — es sind 288 kB im Repository, nicht auf der Leitung. Löschen wäre keine Handlung, sondern eine Schleife: Beim nächsten `npm run bottles` sind sie wieder da, weil der Generator über alle vierzehn läuft. Und fünf der sieben ungenutzten Getränke stehen in den Empfehlungen der Gerichte — bekommen die je ein Bild, sind genau diese Dateien die gebrauchten.

**Ein Nachtrag zur Zählweise, weil er ein Werkzeugfehler war:** Ich hatte die Zahl 42 bezweifelt, weil ein Grep nach Dateinamen **null** Referenzen fand. Der Grep war das untaugliche Werkzeug — die Pfade werden in `Combo.astro:49` zusammengesetzt. **Wer wissen will, welche Datei benutzt wird, sieht im gebauten `dist/` nach, nicht im Quelltext.**

**Combo-Bild und Empfehlung dürfen auseinandergehen — entschieden am 25. August.** Bei drei Gerichten zeigt das Combo-Bild ein anderes Getränk, als der Text empfiehlt: Nature's Palette (Bild Lemonade Orange, empfohlen Mango Pineapple und Watermelon), Melted Heart (Bild Watermelon, empfohlen Lemonade Lemon und Pink Grapefruit), Hingel's Harvest (Bild Ice Tea Lemon, empfohlen Peach Zero und Cassis). **Taib: Die Getränke sollen Vorschläge sein.** Das Bild zeigt eine Zusammenstellung, der Text nennt zwei, die passen — kein Widerspruch, sondern zwei Angebote.

**Folge für die Textregeln:** Kein Text darf die Empfehlung als Bestandteil der Combo formulieren. „Dazu passt" und „wir empfehlen" sind richtig, „mit" und „inklusive" wären falsch. **Wer die Empfehlungen je bebildert, bebildert sie getrennt vom Combo-Foto** — sonst stehen zwei Bilder desselben Gerichts mit verschiedenen Flaschen nebeneinander und die Unterscheidung ist wieder weg.

## 11.4 Auftrag 235 — gelaufen, zehn Gatter, drei berechtigte Einwände

**Ergebnis:** zehntes Gatter steht, 106 von 106, Gesamtlauf 1805,2 s. **14 Kontrastzahlen im Quelltext waren falsch, 7 waren unbelegbar und wurden gelöscht.** Details in 10.1a. Das Selbsttest-Verfahren in der Fremddienst-Gegenprobe ist umgesetzt: Eine Gegenprobe, die nicht anschlägt, bringt jetzt das Gatter zu Fall, statt still zu bestehen.

**Nebenwerte aus `budget` (37 von 37):** bester LCP 1368 ms, CLS 0,0016, JS 2,8 kB gzip, LCP-Bild 79,0 kB. **Neun Routen haben gar kein LCP-Bild.** Von den 72 `pending`-Feldern sind 66 blocksperrend und 6 nur im Kopfbereich wirksam.

**Claude Codes drei Einwände — alle drei berechtigt, alle drei gegen meinen Auftrag:**

**Erstens, und das ist ein echter Verlust:** Der Auftrag ließ `scripts/og-image.mjs` löschen. **Damit ist das einzige Rezept für die tatsächlich benutzte Datei `public/og-home.jpg` (104 kB) verschwunden.** Der Auftrag hat diesen Preis nicht genannt — ich habe ihn nicht gesehen. **Das Skript ist nur noch über `git show 62fcc15:scripts/og-image.mjs` erreichbar.** Wer das Teilbild je neu erzeugen muss, holt es dort. Diese Zeile ist die Wiederherstellungsanweisung, sonst gibt es keine.

**Zweitens:** Ich habe „88" als Bezugsgröße zitiert, als wäre sie gemessen. Sie war selbst nur eine Musterzählung. **Eine Zahl bekommt keine Autorität dadurch, dass sie in einem Auftrag steht.**

**Drittens:** „`quelle=` ist verboten, wo ein Tokenpaar existiert" ist nicht maschinell prüfbar. Eine menschliche Regel im Gewand einer Gatterregel. Sie bleibt — aber als das, was sie ist.

## 11.5 Die vierzehn Punkte aus §8 — angesehen, nicht angefasst

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

## 11.6 Zwei Texte, entschieden am 25. August — gehören in Auftrag 237

**Noch nicht eingebaut, und zwar mit Absicht:** Auftrag 236 arbeitet zu diesem Zeitpunkt im selben Verzeichnis. Die Dateien tragen bereits `langOf()`, `t()` und die `pending`-Vermerke, committed ist aber nichts. **Wer parallel in `src/content/` schreibt, schreibt gegen einen laufenden Umbau.** Die Texte stehen deshalb hier und wandern in 237.

**`meta.json` → `zutaten.description`** — ersetzt die Dublette mit `/herstellung`:

> Was drin ist und was nicht: Zutaten, Allergene und Zusatzstoffe unserer Gerichte, offen aufgeschrieben statt auf Nachfrage.

`herstellung.description` bleibt unverändert — der Satz über minus achtzehn Grad gehört dorthin.

**`copy/home.json` → `drinks.intro`**, beide Zeilen neu:

> Eistee, Limonade und Cola in Mehrwegflaschen, 0,33 l.

> Eine Marke aus Stuttgart, das ganze Regal. Wir haben uns entschieden statt gemischt: Die Eistees treffen die Mitte zwischen Eistee-Gefühl und zu viel Zucker, die Limonaden dürfen etwas süßer sein — Limonade eben. Und die Cola muss man niemandem erklären. Weil danach gefragt wird: Bei Elephant Bay ist jede Flasche vegan.

**Drei Entscheidungen stecken darin, und alle drei sind Taibs Vorgabe „keine Fakten, die sich ändern":**

**„Vierzehn Sorten" ist gestrichen.** Eine Stückzahl als Prosa neben einer Liste, die sie erzeugt — genau das Muster, gegen das die Kontrastkommentare geprüft werden. Die Zahl steht in den Daten; im Text hat sie nichts verloren.

**„Eine Marke aus Stuttgart" bleibt — jetzt mit Beleg.** Ich hatte den Halbsatz gestrichen, weil die Angabe im Bestand nur an dieser einen Stelle stand. Am 25. August nachgeprüft: **Elephant Bay GmbH, Birkenwaldstraße 214, 70191 Stuttgart, HRB 744251, Getränke aus Stuttgart seit 2015.** Damit ist es keine übernommene Behauptung mehr, sondern eine belegte Angabe, und die Quelle steht hier, damit sie nicht ein drittes Mal geprüft werden muss.

**Die Cola ist jetzt im Text**, weil die Überschrift `colLemonade` sie längst nennt („Limonade & Cola") und der Einleitungstext nur zwei Arten kannte.

**`diet` kommt in das Getränkeschema — entschieden am 25. August.** „Bei Elephant Bay ist jede Flasche vegan" ist Taibs Auskunft. **In `drinks.json` gab es kein `diet`-Feld** — die Getränke trugen nur `id`, `kind`, `name`, `photo`, `order`. Damit stand die Zusage als Prosa da und wurde von nichts geprüft, während bei jedem Gericht `diet-check` genau dafür sorgt. Mit dem Feld trägt die Aussage sich selbst. **Gehört in Auftrag 237**, zusammen mit der Erweiterung von `diet-check` auf die Getränke.

**Ein Fund am Rande, der Taibs Vorgabe bestätigt:** Im alten Projektgedächtnis steht unter 7.10 „Exotic kommt, Cassis fliegt raus". **Die Sortenzahl ändert sich also bereits.** Ein Text mit „vierzehn Sorten" wäre am Tag des Wechsels falsch geworden, ohne dass jemand ihn angefasst hätte.

## 11.7 Auftrag 236 — gelaufen, sechs Commits, elf Gatter

**Das Fundament der Mehrsprachigkeit steht, die englischen Texte fehlen — und zwar sichtbar.** Das war der Zweck: erst der Rahmen, der das Fehlen beziffert, dann der Text.

**`/en` liefert 404, und das ist richtig so — nachgesehen am 25. August, weil Taib gefragt hat.** Englisch ist vorbereitet, aber **nicht veröffentlicht**, und die Trennung ist an vier Stellen belegt: `getStaticPaths` gibt in jeder Seitendatei ausschließlich `DEFAULT_LANG` aus, mit dem Kommentar „Deutsch ausdrücklich" · im gebauten `dist/` gibt es kein Verzeichnis `en` · in keinem der 39 Dokumente steht ein Link auf `/en` · die Kopfzeilen melden 37 × `hreflang="de"` und 37 × `x-default`, kein einziges `en`. **Der Sprachumschalter in der Fußzeile rendert nichts**, weil er nur ausgibt, was ihm als weitere Fassung durchgereicht wird, und das ist heute nichts. Ein Umschalter, der auf einen 404 zeigte, wäre der eigentliche Fehler; den gibt es nicht.

**Wann `/en` aufgeht, ist keine Einstellung, sondern die Textarbeit.** Sobald `getStaticPaths` beide Sprachen ausgibt, läuft der Bau in `t()` und bricht beim ersten `pending`-Schlüssel ab — genau so gebaut, damit keine halbe englische Seite entsteht. **Das Tor öffnet sich mit dem 592. geschriebenen Schlüssel, nicht mit einem Schalter.**

**Was gebaut wurde.** Das Zod-Schema trägt `i18n(s) = z.object({ de: s, en: open(s) })`; `open(s)` erlaubt neben dem Wert den Eintrag `{ pending: true, note }`. Die Komponenten lesen nicht mehr `.data.x`, sondern `t()` — **91 Aufrufstellen in 27 Dateien**, die dichtesten in `Menu.astro` (15), `[menu]/[dish].astro` (12), `[diet].astro` (10) und `lib/loyalty.ts` (8). Dazu `scripts/sprache.mjs` als elftes Gatter und ein Selbsttest mit zwölf Sonden im Arbeitsspeicher.

**Die Bilanzzeile des ersten Laufs, wörtlich:**

```
Selbsttest: 12 von 12 Sonden
de: 37 von 37, 0 ausstehend, 0 nicht deklariert
en:  0 von 37, 37 ausstehend, 0 nicht deklariert
Textschlüssel: 592 — de 583 geschrieben, 9 ausstehend
UMFANG 74 von 74 Routenfassungen
SPRACHE GATE: pass
```

**Das Gatter besteht, obwohl kein einziger englischer Text existiert — und das ist richtig so.** Es prüft, dass jeder Schlüssel in jeder Sprache einen Eintrag hat. `pending` ist ein Eintrag. Die 37 ausstehenden Routen sind kein Mangel, den das Gatter übersieht, sondern eine Zahl, die es bei jedem Lauf ausdruckt. **Die Sprachfassung geht live, wenn diese Zahl null ist.**

**Der Umfang der englischen Schreibarbeit ist damit beziffert: 592 Textschlüssel** über zehn Content-Dateien. Vorher war „wir machen auch Englisch" ein Satz; jetzt ist es eine Zahl.

**Die neun deutschen `pending`** sind keine Lücke im Deutschen, sondern Schlüssel, die es nur in der englischen Struktur gibt oder die noch auf eine Entscheidung warten.

**Der Defekt, den Claude Code selbst gefunden hat.** Bei der Gegenprobe zu §7a zählte das Gatter eine **nicht deklarierte** englische Route als „mit Wörtern". Eine vergessene Übersetzung sah in der Bilanz aus wie eine fertige — exakt der Mangel, gegen den der Auftrag gerichtet ist, im Prüfwerkzeug selbst. Behoben durch die dritte Zahl (`nicht deklariert`, siehe 10.1b). **Gefunden hat ihn nicht das Gatter, sondern die Gegenprobe zum Gatter.**

**Ein zweiter Fehler, ebenfalls selbst korrigiert:** Seine eigene JS-Extraktion meldete 1086/1999 B. Er hat stattdessen `inlineOf`/`gz` aus `budget.mjs` benutzt — dieselbe Funktion, die das Gatter benutzt — und kam auf 1830/2820 B. **Zwei Werkzeuge für dieselbe Zahl sind ein Werkzeug zu viel.**

**Unverändert geblieben, geprüft:** JavaScript byteweise identisch, 39 gebaute Dokumente vorher wie nachher, alle elf Gatter grün außer `diet-check` (rot seit 234, Metro-Antworten fehlen).

**Sein Einwand, angenommen: `/en/imprint/` heißt `/en/legal-notice/`.** „Imprint" ist ein Germanismus — im englischen Sprachraum steht dort „Legal Notice" oder „Legal Information". Der Pfad ist nirgends gebaut, die Änderung kostet nichts. **Entschieden am 25. August: `/en/legal-notice/`.**

**Sein Einwand zum Zuschnitt, ebenfalls angenommen: Der Auftrag war rund doppelt so groß, wie er sein sollte.** Der Grund ist nicht der Umfang, sondern die **Art** der Arbeit: Die 91 Umstellungen von `.data.x` auf `t()` sind mechanisch und über 27 Dateien verteilt, jede einzelne kann still danebengehen — und das Gatter, das sie prüfen würde, entsteht **im selben Auftrag**. Die Umstellungen liefen also ungedeckt. Richtig wäre gewesen: erst Schema und Gatter, dann die Umstellungen.

## 11.7a Der Beweis dazu, am selben Tag: 181 mal `[object Object]`

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

## 11.8 Auftrag 237 — gelaufen, elf Commits, nichts offen

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

## 11.9 Auftrag 240 — gelaufen, sechs Commits, ein Fund danach

**Cassis ist raus, Exotic ist drin, vierzehn Sorten sind vierzehn geblieben.** In den Daten 7 Eistee / 5 Limonade / 2 Cola, `order` lückenlos 1 bis 14, Exotic auf Platz 11 zwischen Lime Mint und Pink Grapefruit — also genau dort, wo Cassis stand. Im gebauten HTML von `/speisekarte/` steht „Exotic" an dieser Stelle und „Cassis" nirgends. Sechs Commits für die Abschnitte 1 bis 6; Abschnitt 7 war eine Verbotsliste und bekam keinen.

### Meine Vorgabe zu `git mv` war falsch

**Der Auftrag schrieb „mit `git mv`, nicht mit `mv`" und begründete das ausführlich. `git mv` schlug fehl:** `fatal: not under version control`, rc 128. **Die Datei war nie eingecheckt** — Exotic war neu im Arbeitsbaum, und `git mv` kann nur umbenennen, was der Index kennt. Ich hatte den getrackten Zustand vorausgesetzt, ohne ihn zu prüfen, und die Begründung so ausgeschmückt, dass sie überzeugend klang.

Claude Code hat den **Zweck** der Vorgabe erfüllt statt ihres Wortlauts: über einen Zwischennamen umbenannt — `mv a tmp && mv tmp A`, weil macOS case-insensitiv ist und `mv a A` direkt nicht verlässlich greift —, dann `git add`. Belegt mit `git ls-files`, nicht mit `ls`, wie verlangt. **Das ist das richtige Verhalten und der Grund, warum Aufträge eine Abweichungsliste verlangen.**

### Ein Fund nach dem Bericht: zwei Kommentare tragen jetzt eine falsche Spanne

**Exotic misst 0,4961 und ist damit der neue Kleinstwert der vierzehn.** Die Spanne lautet heute 0,4961–0,5020; sie lautete vorher 0,4971–0,5020. **An zwei Stellen steht noch die alte:** `derive-bottles.mjs` Zeile 118 f. („Gemessene Spanne der vierzehn: 0,4971 bis 0,5020") und `bottle-axis.mjs` Zeile 46 („liegen dann nicht mehr über 0,4814–0,5039, sondern über 0,4971–0,5020").

**Drei Instanzen haben das durchgelassen.** Der Auftrag — Abschnitt 7 verbot ausdrücklich, Kommentare anzufassen, und dachte dabei nur an das Wort „vierzehn". Der Bericht — er nennt 0,4961 als neuen Kleinstwert, ohne die Folge zu ziehen. Und das Gatter `kommentar`, das mit rc 0 durchlief: **Es prüft, ob Kommentare vorhanden und formal in Ordnung sind, nicht ob eine gemessene Zahl darin noch stimmt.** Das ist keine Lücke im Gatter, sondern seine Bauart — aber sie ist jetzt benannt.

**Der Wert selbst ist unauffällig.** Abstand zur Nennmitte 0,499 beträgt 0,0029, das sind 15 % der Toleranz `RAW_TOLERANCE = 0,02`. Kein Hinweis auf einen anders gearbeiteten Freisteller: Die gemessene Flaschenbreite 0,1055 teilt Exotic mit Peach Zero, der Ausschnitt schlägt nirgends am Rahmen an. Nachmessung an den geschriebenen Dateien: Kachel −0,29 %, Scheibe −0,10 %.

### Eine dritte Maßeinheit im selben Projekt

Der Bericht nennt für Exotics größte AVIF **23,1 kB**, das Skript meldet **22,6 kB**. Beides ist derselbe Wert — der Bericht rechnet dezimal, das Skript in KiB. **Damit sind jetzt drei Zählweisen für Dateigrößen im Umlauf:** `du`-Blockbelegung, Summe der Dateilängen (beide schon in 11.3 auseinandergehalten) und KiB gegen kB. **Wer zwei Zahlen vergleicht, muss wissen, welche von dreien er vor sich hat.** Nebenbei: Exotics 360er AVIF ist mit Abstand die größte der vierzehn; das Budget-Gatter lief trotzdem grün.

### Was der Auftrag richtig vorhergesagt hat

**Die Gegenprobe zum Löschen trägt.** Nach `git rm` der zwölf Cassis-Ableitungen und einem zweiten `npm run bottles` sind sie nicht zurück: 84 Flaschen- und 84 Scheibendateien wie vorher, `git status` zeigt nur die zwölf Löschungen, und der Lauf meldet `eb-cassis` als Foto ohne Getränk. **Der Unterschied zu den 42 Scheiben aus 11.3 ist damit belegt und nicht mehr nur behauptet.**

**42 bleibt 42.** Nachgezählt am gebauten HTML, nicht übernommen. Nur ein Name in der Liste hat gewechselt: `eb-lem-cassis` → `eb-lem-exotic`. Beide Kommentarstellen sind nachgezogen.

**39 Dokumente**, wie erwartet. Astro meldet „37 page(s) built"; die Differenz sind die zwei Weiterleitungsseiten, die Astro anders zählt.

### Gatter

Elf Einzelläufe, **1819,1 s** (30 min 19 s) gegenüber 1798,1 nach 236 und 1822,0 nach 237. budget 1126,6 · contrast 236,8 · hover 196,9 · a11y 192,9 · thirdparty 64,0 · kommentar 1,0 · sprache 0,2 · teilbild 0,2 · diet-check, legal, anrede je 0,1. Die Schwankung liegt in den langen Gattern und ist Rauschen.

**`diet-check` steht weiter auf rc 1: 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten, beide unverändert.** Dieser Auftrag hat sie nicht bewegt, wie beauftragt zu prüfen war. Neu in der Ausgabe: **„Getränke: 14 von 14 mit Ernährungsangabe"** — der Teil des Gatters, der in 234 dazukam, ist grün.

### Zwei lose Enden

**`Auftrag-03-ClaudeCode.md` liegt als ungestagte Löschung im Baum**, ungefragt gemeldet. Sie stammt nicht aus diesem Auftrag: zuletzt am 15. August in `5f81ee6` angefasst, seither gelöscht, ohne dass ein Commit es nachgezogen hätte. **Passt zur Regel aus 1.4 — Aufträge gehören nicht in den Ordner —, muss aber committet werden, sonst steht sie bei jedem `git status` im Weg.**

**Die vegane Angabe für Exotic beruht weiter nicht auf einer gelesenen Zutatenliste.** Claude Code hat das sauber getrennt: Die Nährwerttabelle nennt keine tierische Zutat, aber eine Nährwerttabelle ist keine Zutatenliste. **Das Foto der Zutatenliste steht weiter aus, bei allen vierzehn Sorten.**

## 11.10 Auftrag 241 — gelaufen, ein Commit, vier weitere Funde

**Commit `3a34d76`, drei Dateien, 2 Einfügungen, 140 Löschungen.** Beide Kommentarspannen stehen auf 0,4961–0,5020, `CENTRE = 0.499` unverändert, `Auftrag-03-ClaudeCode.md` gelöscht und eingetragen. `git status` zeigt danach nur noch `PROJEKTGEDAECHTNIS.md` und `SC-25-08-26/` als unversioniert — beide bleiben es. 39 HTML-Dokumente.

**Elf Gatter, 1795,7 s** (29 min 56 s) gegenüber 1819,1 nach 240. budget 1126,7 · contrast 238,7 · a11y 191,0 · hover 174,4 · thirdparty 63,0 · kommentar 1,1 · sprache 0,2 · teilbild 0,2 · diet-check, legal, anrede je 0,1. `diet-check` rot wie erwartet, 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten, unverändert. **Bislang der schnellste der drei letzten Läufe.**

### Die Umkehrung in §8 hat funktioniert

**Auftrag 240 verbot, Kommentare anzufassen, und produzierte null Funde. Auftrag 241 verlangte, überholte Zahlen zu nennen statt zu ändern, und produzierte vier.** Das ist der belegte Gegentest zur Lehre aus 11.9. **Ein Verbot erzeugt Schweigen, ein Auftrag zum Melden erzeugt Befunde** — bei gleichem Risiko, denn gemeldet wird ohne Eingriff.

**Vier überholte Zahlen, genannt und nicht geändert:**

**1 · `bottle-axis.mjs`, Kommentar zu `MIN_EDGE`: „die schwächste echte Messung liegt am Rohbild bei 14,3".** Nachgemessen an den heutigen vierzehn mit `measure(src, BOTTLE)`: schwächste ist eb-cola mit **16,7**. **Die 14,3 gehörte vermutlich zu Cassis** — also derselbe Tausch, der schon die Mittenspanne verschoben hat. Der Satz daneben, „an den fertigen Dateien bei 6,2", stimmt weiterhin auf die Stelle genau (eb-cola-zero, Kachel).

**2 · `derive-bottles.mjs` Zeile 103 f.: „572 kB" und „288 kB"** (`du` über alle 84 Scheiben beziehungsweise über die 42 nie angeforderten) — heute **576 KiB und 292 KiB**.

**3 · `derive-bottles.mjs` Zeile 105: „437 kB beziehungsweise 217 kB"** (Summe der Dateilängen) — heute **438,6 KiB und 218,9 KiB**.

**Was nachgeprüft wurde und weiter stimmt:** Breitenspanne 0,105–0,145 und Median 0,119 · „innerhalb von 0,3 %" (größte Abweichung heute 0,30 % bei Pink Grapefruit, Exotic liegt mit 0,29 % darunter) · „höchstens 0,39 %" · „alle 84" · „zwölf PNG unter `roh-png/`" (nachgezählt: 12) · 0,4824–0,5103 und 0,780–0,833 in `bottle-axis.mjs` (Exotic liegt mit Höhe 0,7918 mitten drin) · „6,2".

### Die dritte Maßeinheit ist jetzt lokalisiert

**`derive-bottles.mjs` Zeile 222: `const kb = (b) => \`${(b / 1024).toFixed(1)} kB\`` — die Funktion rechnet in KiB und beschriftet KiB als „kB".** Deshalb meldet der Lauf „größte 360 avif: 22.6 kB", während die Datei 23,1 kB lang ist. **Damit ist der Einheitenwirrwarr aus 11.9 keine Beobachtung mehr, sondern eine Zeile.** Die Kommentarzahlen aus Punkt 2 und 3 sind in derselben gemischten Lesart notiert — sie zu korrigieren, ohne die Funktion zu korrigieren, würde den Widerspruch nur verschieben. **Beides gehört in denselben Auftrag, keiner ist gestellt.**

### Nachmessung ohne Schreibvorgang

Claude Code hat `measure()` aus `bottle-axis.mjs` direkt und ausschließlich lesend aufgerufen, statt die Zahlen zu schätzen — kein `npm run bottles`, nichts geschrieben, `git status` unberührt. **Ungefragt offengelegt und richtig so:** Der Auftrag verlangte Befunde, und ein Befund ohne Messung wäre eine Vermutung gewesen.

## 11.11 Auftrag 242 — gelaufen, zwei Commits, drei Entscheidungen zurück an uns

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

## 11.11a Auftrag 242 — Zwischenstand vom Vortag

**43 HTML-Dokumente wie vorhergesagt:** 39 wie bisher, plus die drei Wissensseiten und den Weiterleitungsstumpf `/wissen/`. Die drei Seiten stehen in der Sitemap, der Stumpf nicht.

### Meine Vorgabe zum Dateinamen war falsch

**§7 verlangte `src/pages/[wissen].astro` „nach dem Vorbild von `[diet].astro`". Das baut nicht.** Astro schreibt die Datei zwar nach `dist/wissen/manti/index.html` und bricht dann ab: `Missing parameter: wissen`, `at getParameter (routing/manifest/generator.js:17:13)`. **Ein einfacher Parameter steht für ein Wegstück, und diese Adressen haben zwei.** Claude Code hat auf `[...wissen].astro` umgestellt — dasselbe Muster wie `standorte/[...location].astro`, das aus genau demselben Grund schon so heißt.

**Der Fehler war vermeidbar und mein eigener.** `[diet].astro` funktioniert, weil `/vegan/` ein Segment hat; `/wissen/manti/` hat zwei. Der Präzedenzfall stand in derselben Ordnerstruktur, die ich vor dem Schreiben des Auftrags gelesen habe. **Ein Vorbild trägt nur so weit, wie die Form gleich ist** — und die Form ist hier die Zahl der Wegstücke, nicht die Art der Seite.

### Die Verweise im Fließtext

Gelöst über den vorhandenen `links`/`splitParts`-Mechanismus der Ernährungsseiten, **nicht über `set:html`**. Der Absatz bleibt in der JSON ein unzerschnittener String; daneben steht die Wendung mit `route` oder `dish`, **und beide Ziele werden beim Bau geprüft.**

**Die Texte wurden mit einem Skript aus `Wissensseiten-Texte.md` gezogen, nicht abgetippt** — Claude Codes Begründung: „Wortgleichheit ist sonst nur so lange gegeben, wie ich mich nicht vertippe." Die Zwischenablage ist gelöscht, `git ls-files` zählte null.

### Beide Gegenproben haben ausgelöst

**Fehlender `en`-Schlüssel:** `copy/wissen/manti.json.sections[0].title: kein Schlüssel "en"` → `SPRACHE GATE: FAIL (1)`. **Das Gatter unterscheidet also „fehlt" von „steht aus"** — genau die Sorge aus §14, und sie ist ausgeräumt.

**Verlorene Wendung:** Der Bau hält an mit „unter vegan" … steht in keinem Absatz dieses Abschnitts. Ohne die Prüfung wäre der Verweis lautlos aus der Seite gefallen.

### Was §13 schon vor dem Bericht eingebracht hat

Gemeldet, nicht geändert: **`routes.ts:131` sagt „Five items is the whole point of the reduction", während drei andere Stellen derselben Datei „Die Leiste hat vier Einträge" sagen** — ein Widerspruch innerhalb einer Datei. Dazu zwei Sollwerte, die das Sprachgatter selbst anmahnt (74→80 Routenfassungen, 39→43 Dokumente), zwei Zahlwörter in `Footer.astro`, und ein „Blöcken zu 4 kB" in `derive-bottles.mjs` — **dieselbe Einheitenverwechslung wie in §11, dort aber nicht aufgeführt, deshalb stehen gelassen.** Genau richtig: Der Auftrag zählte Stellen auf, und eine nicht aufgezählte Stelle ist keine beauftragte.

### Tomatensauce gehört dazu — Korrektur von Taib, 27. August

**„Manchmal stimmt nicht."** Taib zur Servierart: klassisch ist Knoblauchjoghurt **mit** Tomatensauce und den Gewürzen. **Der Text sagt an einer Stelle „manchmal auch eine Tomatensauce" und an vier weiteren gar nichts davon** — die Definition im Einstieg, der Kayseri-Absatz, die Dreisatzfassung auf `/wissen/mal-was-anderes/` und der Merksatz „unten und oben" auf `/wissen/verwandte/` nennen nur Butter. **Alle fünf gehören zusammen korrigiert, sonst widerspricht sich der Auftritt in sich selbst.** Geht als Auftrag 243 heraus.

**Nicht zu ändern ist `manti.json` Zeile 166** („Joghurt und Tomatensauce ist die Fassung, die die meisten das erste Mal bestellen"). Der Satz spricht über unsere Bestellstrecke, in der die Sauce gewählt wird, nicht über die klassische Servierart. **Zwei richtige Sätze, die sich zu widersprechen scheinen, weil sie von zwei verschiedenen Dingen reden.**

## 11.12 Auftrag 243 — gelaufen, zwei Commits, zehn Gatter grün

Ein Lauf, 1981,8 s (33,0 min), Bau 2,5 s. `budget` 1227,9 · `contrast` 255,1 · `hover` 216,5 · `a11y` 212,6 · `thirdparty` 67,9 · `kommentar` 1,0 · `teilbild` 0,2 · `sprache` 0,2 · `diet-check`/`legal`/`anrede` 0,1. **`anrede` ist grün: 13 Dateien, 2153 Felder, null Fundstellen** — das Gatter selbst ist unangetastet geblieben, wie entschieden. `diet-check` rot wie immer (Metro steht aus).

43 HTML-Dokumente, 40 Seiten plus drei Weiterleitungsstümpfe. **Englische Schlüssel 667 → 671**, zweimal unabhängig gemessen. Commits `fbdda09` (neun Ersetzungen, 9+/9−) und `b4cd4b5` (262+/47−). `manti` hat jetzt sieben Abschnitte, `verwandte` neun, `anderes` vier.

### Der Zählfehler wiederholt sich — 28. August

**Ich habe die Tomatensauce-Stellen zweimal gezählt und beide Male zu wenig gefunden: erst fünf, dann acht, tatsächlich elf.** Beim zweiten Zählen habe ich nach fehlenden Nennungen *und* nach Gegenbehauptungen gesucht — aber nur in `src/content/copy/`. Übersehen habe ich `meta.json`, also **die Beschreibung genau der Seite, deren ersten Absatz ich gerade korrigiert habe.** Nach 243 sagt der Kopf von `/wissen/manti/` „Joghurt darunter, Butter darüber" und der erste Absatz derselben Seite etwas anderes. Dazu zwei weitere Textstellen, die Claude Code gefunden hat: der Pelmeni-Absatz („dass bei Manti die Butter obenauf gehört") und der Kombinationssatz auf `/wissen/mal-was-anderes/` („die kalte Säure des Joghurts unter der warmen Butter").

**Nicht geändert wird `meta.json` Zeile 4**, die Startseitenbeschreibung „Teigtaschen auf Joghurt — wie Ravioli, nur anders". Das ist keine Servierbeschreibung, sondern eine Einordnung, und „auf Joghurt" bleibt richtig. **Eine Stelle, die nichts Falsches sagt, wird nicht angefasst, nur weil sie zum selben Thema gehört.**

### Mein §5 war undurchführbar — von Claude Code gemessen, nicht behauptet

Ich habe vorgegeben, `splitParts()` je Punkt aufzurufen. Die Funktion zählt jede Wendung über alles, was sie bekommt, und **wirft bei null Treffern**. Der Regionen-Abschnitt hat vier Verweise auf vier verschiedenen Punkten — der Aufruf mit dem Kayseri-Punkt fände „Hingel's Harvest" nicht und bräche ab. **Die Regel gilt für den Abschnitt, nicht für seine Glieder.** Claude Code hat den Abbruch als Gegenprobe erzeugt, statt ihn zu vermuten, und dann `splitSection()` daneben gestellt: Punkt-Texte zu einer Liste legen, einmal zerlegen, wieder verteilen. **`splitParts()` hat null gelöschte Zeilen** — die Forderung „ein Weg für beide Seiten" ist damit besser erfüllt als mit meiner Vorgabe.

### Drei kleinere Fehler in meinem Auftrag

**„ohne dessen erste vier Wörter" — es sind fünf** („Ein Wort zum Namen „Hingel"."). **„Der Ortsname wandert unverändert, der Rest bleibt" widerspricht sich bei Ardahan**, weil der Rest ein klein beginnender Nachsatz ist; ich hatte daneben den Rumpf mit großem „Ganz" diktiert. Claude Code ist dem diktierten Ergebnis gefolgt und hat den einen Buchstaben als einzige erlaubte Abweichung ausgewiesen. **„Halbfett" klingt nach einem Schriftschnitt, den es nicht gibt** — `fonts.css` lädt Hanken Grotesk nur als 400, `font-weight: 600` rechnet der Browser aus. Derselbe Wert steht in `.loy__q` für dieselbe Aufgabe.

### Die Commit-Zahl als Zahl war ein Fehler

**Mein §10 schrieb „Zwei Commits" und hat dadurch eine Verbesserung verhindert.** Claude Code wollte nach dem zweiten Commit einen Schema-Kommentar präzisieren; ein dritter Commit hätte meinen Auftrag verletzt, ein `--amend` die stehende Git-Regel. Er hat die Änderung verworfen und gemeldet. **Eine Commit-Zahl ist eine Vorgabe über die Form und wird zur Vorgabe über den Inhalt, sobald beim Arbeiten etwas dazukommt.** Ab sofort: Commit-*Grenzen* vorgeben, nicht Commit-*Zahlen*.

### Fünf tote CSS-Zeilen, selbst gemeldet

`.wissen__name` bekam `font-family`, `font-size`, `color`, `letter-spacing` und `text-transform` — alle fünf sind Erbwerte aus `base.css:111–115`, es gibt keine Regel auf `dl`, `dt` oder `dd`. Wirksam sind nur `font-weight: 600` und `margin-inline-start: 0`. **Er hat nachgemessen statt nachzureichen** und die Streichung selbst vorgeschlagen.

### Zwei Gegenproben, beide erzwungen und beide zurückgenommen

Claude Code hat nicht behauptet, dass die Schranken greifen, sondern sie brechen lassen. **Erstens** „The Original" im Kayseri-Punkt durch „das Klassische" ersetzt → Bau bricht ab mit „Der Verweis … nennt die Wendung „The Original", und sie steht in keinem Absatz dieses Abschnitts. Der Link fiele lautlos aus der Seite." **Zweitens** ein zusätzliches `body` neben `points` gelegt → `InvalidContentEntryDataError`, „Ein Abschnitt hat entweder `body` oder `points`, genau eines von beiden." Beide Male aus der Sicherung zurückgespielt und nachgeparst. **Diese Arbeitsweise ist der Grund, warum die Zusammenarbeit trägt, und sie gehört ausdrücklich erhalten.**

### Wie die neun Ersetzungen abgesichert wurden

Jede Alt-Zeichenkette wurde vor dem Schreiben auf der JSON-Ebene gezählt — `JSON.stringify(alt).slice(1,-1)`, damit ein Treffer über zwei Felder hinweg nicht als einer durchgeht. Bei einer Zahl ≠ 1 hätte das Skript ohne zu schreiben abgebrochen. **Alle neun kamen genau einmal vor.** Beim Umbau zu Punkten wurde kein Text getippt: Name und Rumpf sind aus dem vorhandenen Absatz geschnitten und danach Zeichen für Zeichen gegen den diktierten Wortlaut geprüft. **Einzige erlaubte Abweichung: ein großgeschriebenes „Ganz" bei Ardahan**, weil der Restsatz sonst klein begänne.

## 11.13 Auftrag 244 — der Auftragstext

**Das ist der Stand, an dem Phase 3 endet.** Der Bericht liegt vor und ist in 11.14 ausgewertet. Dieser Abschnitt bleibt als Auftragstext stehen, damit der Bericht ohne den alten Chat lesbar bleibt.

Sein Umfang, damit der Bericht ohne den alten Chat gelesen werden kann:

**§1 Sollwerte.** `sprache.mjs:69` 74 → 80 · `sprache.mjs:74` 39 → 43 · `anrede.mjs:61` 10 → 13 · `anrede.mjs:62` 46 → 47 · dazu die Zahl 39 im Fließtextkommentar `sprache.mjs:598`. **Alle vier zu messen, nicht abzuschreiben** — weicht ein gemessener Wert ab, gilt der gemessene und die Abweichung wird gemeldet.

**§2 Die drei restlichen Tomatensaucen.** `meta.json` `wissenManti.description.de` neu: „Manti sind kleine gefüllte Teigtaschen aus der türkischen Küche — Joghurt darunter, Tomatensauce und Butter darüber. Woher sie kommen, wie man sie isst." — 152 Zeichen gegen 138 vorher, nachzumessen. Dazu der Pelmeni-Absatz und der Kombinationssatz auf `/wissen/mal-was-anderes/` (Wortlaute in 9.6c). **`meta.json` `home.description` und `site-audit.md` sind ausdrücklich ausgenommen.**

**§3 `routes.ts:131`.** `Five items is the whole point of the reduction` → `Four items`. Vorher `navOrder` prüfen; stimmt „vier" nicht mit den Daten überein, wird gemeldet statt geändert.

**§4 Zahlwörter im Footer.** `Footer.astro:31` „siebenunddreißig Seiten" → „vierzig Seiten" · `Footer.astro:158` „allen neununddreißig" → „allen dreiundvierzig". Der Unterschied zwischen „Seiten" (40) und „Dokumenten" (43) ist zu beachten, nicht zu vereinheitlichen.

**§5 Einheit.** `derive-bottles.mjs:104` „Blöcken zu 4 kB" → „4 KiB".

**§6 Die zwei liegengebliebenen Verbesserungen aus 243.** `.wissen__name` auf `font-weight: 600` zusammenstreichen, Grund in den Kommentar. Und den Schema-Kommentar vervollständigen: Der zehnte fett ausgezeichnete Absatz ist kein Punkt geworden, sondern die `<h2>` „Woher der Name „Hingel" kommt".

**§7 Falsche Namen in Kommentaren.** `content.config.ts:1078` nennt ein `DietSection`, das es nicht gibt; gemeint sind `splitParts()` und `splitSection()`. Der Kopfkommentar von `src/lib/diet.ts` beschreibt eine Datei, die nur Ernährungsseiten bedient.

**§8 Umbenennung.** `dietLink` → `copyLink`, `src/lib/diet.ts` → `src/lib/copy-links.ts`. Aufrufstellen: `[diet].astro`, `[...wissen].astro`, `Menu.astro`, `content.config.ts`. `git mv` nur nach `git ls-files`. **Der Namensvorschlag ist ausdrücklich kein Befehl.**

**§11 Neu in der Auftragsform: Commit-Grenzen statt Commit-Zahlen.** Text und Metadaten in einen Commit, alles Übrige nach Ermessen. Fällt nach einem Commit eine Verbesserung an dessen Inhalt auf, kommt ein weiterer Commit — **nicht `--amend`, und nicht verwerfen.**


## 11.14 Auftrag 244 — gelaufen, fünf Commits, elf Gatter, fünf Funde

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


## 11.15 Auftrag 245 — gelaufen, vier Commits, die Filterreihe

**Ergebnis:** 1 972,6 s über elf Gatter, zehn grün, `diet-check` rot. Vier Commits `c026bd6` bis `5efe351`.

**Der Halal-Chip heißt jetzt „Fleisch (halal)"** und liest seine Aufschrift aus `menu.filterLabels` in `copy/home.json`. Vorher druckte das Markup den rohen Datenwert — fest verdrahtetes Deutsch, das `sprache.mjs` nicht sieht, weil es nicht als Text dasteht.

**Vegan ist vegetarisch, und der Filter weiß es jetzt.** Der Fehler: `/vegetarisch/` zog seine Gerichte aus `grid: ['vegetarisch','vegan']` und zeigte 23, der Filter prüfte `[data-diet='vegetarisch']` und zeigte 10. Dasselbe Wort, zwei Antworten, und die auf der Karte war sachlich falsch. Behoben über ein neues `data-diets` mit allen zutreffenden Bezeichnungen und `~=` im CSS, gespeist aus **einer** Zuordnung in `src/lib/dish.ts`. Gegenprobe mit dem alten Selektor: wieder 10.

**Gemessene Kachelzahlen:** Alle 34 · Fleisch (halal) 4 · Vegetarisch 23 · Vegan 13. **Die erwartete „27" für Alle war mein Fehler** — 27 ist eine Gerichtezahl, 34 die Kachelzahl mit den sieben Combos. Claude Code hat die Abweichung berichtet statt sie passend zu machen.

**Vier Fehler im Auftrag, alle von mir.** Beide Zeilennummern gingen um eins daneben (`sprache.mjs` 598 statt 599, `routes.ts` 540 statt 541) — Ursache war meine Zerlegung der Exportdateien, die den führenden Zeilenumbruch als Zeile eins mitzählte. `data-diet` wird in `DishCard.astro` geschrieben, nicht in `Menu.astro`. Und die Annahme, das Fermento führe Branntweinessig, war falsch.

**Sein eigener schwerster Fehler, selbst gemeldet:** Nach der Gegenprobe rief er `git checkout -- Menu.astro` und vernichtete damit die noch nicht committeten Änderungen desselben Auftrags. Zwei CSS-Blöcke und eine Messung neu. Die Lehre steht in Abschnitt 17.

## 11.16 Auftrag 246 — gelaufen, fünf Commits, Vererbung und Bestandsaufnahme

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


## 11.17 Auftrag 247 — Rückbau, vier Chips, zwei Löschungen

**Ergebnis:** 1 969,2 s, zehn grün, `diet-check` rot bei 24. Kachelzahlen unverändert 34 · 7 · 27 · 16.

**Der Rückbau der Getränke-Ableitung.** `content.config.ts:349-361` sagt zum Feld `drink`: ein Beispiel, keine Festlegung, bestellt wird frei aus dem Sortiment. Die Regel aus 246 rechnete die Flasche mit und beschrieb damit das Foto statt das Essen. Zurückgebaut auf einfache Vererbung vom Grundgericht.

**Der Fehler war messtechnisch unsichtbar** — vier Kachelzahlen vor und nach dem Rückbau gleich, weil kein Milchgetränk im Sortiment steht. Belegt ist der Rückbau durch einen eigens gebauten Fall: `eb-blueberry` auf `vegetarisch` gesetzt, mit der neuen Regel bleibt Vegan bei 16, mit der 246er fällt es auf 15.

**Die vier rohen Chips** in `[menu]/[dish].astro` und `Bestseller.astro` lesen jetzt dieselbe Aufschrift wie die Filterreihe: 34 rohe Chips vorher, null nachher, beschriftete von 126 auf 174. **Der Chip der Combo** hängt nicht mehr am rohen Wert; 34 von 34 Kacheln tragen jetzt einen.

**`map.mjs`, `map.geo.json` und `pf-teller.psd` sind gefallen.** Die PSD war die Bearbeitungsdatei des Tellers für Hingel's Harvest, versehentlich mitkopiert, Zweitkopie außerhalb vorhanden. **Die 10,8 MiB bleiben in der Historie** — die Löschung räumt den Arbeitsbaum auf und verkleinert das Repository nicht.

## 11.18 Auftrag 248 — das Loch, das 247 aufgerissen hat

**Ergebnis:** 1 971,8 s, zehn grün, `diet-check` rot bei 24.

Seit 247 trugen die Combos einen sichtbaren Chip, und `diet-check` übersprang sie. Ein Gatter, das eine sichtbare Behauptung nicht ansieht, ist an dieser Stelle eine Meinung. Die sieben werden jetzt über `basedOn` geprüft; die Umfangsmeldung sagt „über ihr Grundgericht geprüft" statt „übersprungen".

**Drei Gegenproben, jede gefallen:** Chip künstlich abweichen lassen (vier Combos gemeldet, nicht sieben — das Gatter meldet, was falsch ist, nicht was es angefasst hat) · die 247er-Regression wiederhergestellt (alle sieben mit „Chip fehlt") · `dist/` beiseitegelegt (Riegel statt stillem Durchlauf).

**Der Preis, den mein Auftrag nicht nannte:** `diet-check` liest jetzt `dist/` und braucht einen Bau. `npm run diet-check` allein meldet ab sofort einen Riegel.

**Und die Grenze, die Claude Code selbst benannt hat:** Die neue Prüfung hätte den Fehler aus 246 nicht gefunden. Sie findet, was heute auseinanderfällt, nicht eine Regel, die erst bei künftigen Daten falsch wird. Der Satz steht im Kopf der Datei, damit ihn niemand für mehr hält.

## 11.19 Auftrag 249 und 249a — der Joghurt liegt oben

**Der Anlass:** Taib am 30. August. Die Seite beschrieb den Joghurt als Bett unter den Teigtaschen — in eurer Küche und allgemein falsch. Auf die gekochten Manti kommt der Joghurt, darauf die Tomatensauce, darauf die Gewürzmischung.

**Umfang:** 23 Stellen in sechs Dateien, davon siebenmal der Blocktitel. Claude Code fand drei weitere und behob sie mit.

**Der Fund, auf den es ankam:** `home.json` sagte „Die Grundlage unter den Manti" — **ohne das Wort Joghurt.** Eine Wortsuche findet das nie; der Durchgang, der den Sachverhalt sucht, findet es. Dazu zwei Stellen, die falsch aussehen und richtig sind: der Joghurt liegt unter der *Sauce*, und die Melted-Heart-Verneinung setzt die neue Lage voraus.

**Der Fehler hat elf Gatter passiert und mehrere Textdurchgänge überstanden**, weil er sachlich ist und nicht formal. Kein Gatter konnte ihn finden. Gefunden hat ihn der Koch, beim Lesen.

**Mein Auftrag brach an einer Stelle ab, zu Recht:** §3.1 zitierte den Stand von *vor* Auftrag 245 — ich hatte die Alt/Neu-Paare gegen die Ausfuhr `export-244a` gebaut, die vier Aufträge alt war. Sechzehn von siebzehn Ketten passten nur, weil die anderen Stellen niemand angefasst hatte. Das war Glück, nicht Sorgfalt.

**249a** war deshalb ein reiner Auszugsauftrag: neun Dateien im heutigen Stand, damit 250 gegen den echten Bestand geschrieben werden konnte.

## 11.20 Auftrag 250 — /faq/ und der Verpackungsabschnitt

**Ergebnis:** 2 037,4 s, zehn grün. **40 → 41 Seiten, 43 → 44 Dokumente.** Acht Commits.

**Die Seite `/faq/`** trägt fünfzehn Einträge in zwei Gruppen — acht Betriebsfragen mit eigener Antwort, sieben Wegweiser. Ein Halal-Eintrag fehlt bewusst und wartet auf `/halal/`.

**Der Verpackungsabschnitt** steht als Block 05 auf der Startseite, zwischen Voices und Order: „Vier Behälter statt einem". Der Joghurt ist kalt, die Manti heiß, jede Lage kommt einzeln. Kein Satz über die Temperatur beim Gast — nachweisbar ist, was die Küche tut, nicht was auf der Straße daraus wird.

**Vier Sollwerte gesetzt:** 82 / 44 / 14 / 50. `SOLL_BAUTEILE` wurde 50 und nicht die von mir geratenen 49 — `anrede.mjs` liest auch `src/pages`, und der Auftrag legt dort eine dritte Datei an.

**Drei Fehler in meinem Auftrag:** `copy/faq.json` ist nicht baubar, weil die `copy`-Sammlung jede Datei dort gegen das Startseiten-Schema prüft — richtig ist `copy/faq/faq.json` mit eigener Sammlung. Die Zeichenzahl der Description war geschätzt (132 behauptet, 117 gemessen). Und `<details>` hätte ich nicht anbieten dürfen: `Treue.astro` schreibt seine Fragen längst aus, mit beiden Gründen daneben.

## 11.21 Auftrag 251 — neun Sollwerte und ein toter Zweig

**Ergebnis:** 2 021,5 s, zehn grün. **Alle achtzehn Umfangszeilen stehen auf „n von n".** Vier Commits.

**Der Fund kam aus 250 §8.7, ungefragt:** Neun festgeschriebene Sollwerte in sechs Gatterdateien standen seit Auftrag 234 auf 37 Routen, 111 Ansichten, 39 Dokumenten. Gemessen waren 41, 123, 44. Sie wurden bei 241, 243 und 250 nicht mitgezogen.

**Warum das niemand merkte:** `umfang.mjs` fällt nur bei Unterdeckung durch. „123 von 111" ist grün. In der Sache hieß das: **vier Routen dürften still ausfallen, ohne dass ein Gatter rot wird** — der Riegel aus 234 war um vier Routen gelockert.

**Alle neun gesetzt, alle neun Erwartungen durch Messung bestätigt.** Der erste Auftrag, dessen Zahlen alle stimmten — sie stammten aus einer Messung und nicht aus meiner Schätzung.

**Die zweiten Nennungen sind gestrichen, nicht nachgezogen**, und drei tiefer liegende durch Verweise auf die Konstante ersetzt. **Ein Verweis kann nicht veralten.**

**Die Bilanz trägt die Überdeckung jetzt nach oben** — in der Gatterzeile und als Sammelliste mit Zahl im Kopf. `gates.mjs` urteilt dabei nicht selbst, sondern liest die Warnzeile von `umfang.mjs`; die Regel bleibt an einer Stelle. Fehlt die Beschriftung, bleibt der Fall ungemeldet statt falsch gemeldet.

**Der tote `noindex`-Zweig** in `astro.config.mjs` verglich ein Objekt `{de, en}` gegen einen String und konnte nie greifen. Ursache ist Auftrag 236, der `path` umgestellt hat; die Stelle ist mitgewandert und dabei stumm geworden. Heute folgenlos, weil `agb` und `widerruf` nicht gebaut werden — falsch geworden wäre sie mit dem ersten fertigen Rechtstext.

**Die Grenze, die Claude Code selbst benannt hat (§8e):** Die Überdeckung steht jetzt in der Bilanz, aber nur für den, der hinsieht, und sie ändert keinen Rückgabewert. Verhindern, dass sie wieder drei Aufträge lang weggelesen wird, kann sie nicht. **Der Ausweg wäre die Quelle, nicht ein Riegel:** Sieben der neun ließen sich aus `routes.ts` ableiten — Routen, Ansichten, Tastaturläufe, Seiten stehen dort deklariert. Das ist kein Selbstbezug, weil der Sollwert aus der Deklaration käme und das gebaute Ergebnis geprüft wird. Übrig blieben `SOLL_TEXTE` und `SOLL_BAUTEILE`, wo ein Handwert die einzige unabhängige Quelle ist. Eigener Auftrag.


## 11.22 Auftrag 252 — Fußbereich, Rollbalken, drei Zahlen

**Ergebnis:** 2 011 s, zehn grün. Sechs Commits.

**Der Fußbereich steht in fünf Gruppen** — Essen · Für jeden · Wissen · Bestellen · MANTI & CO. Die Gruppentitel liegen als Text in `copy/home.json`, `dietOrder` und `wissenOrder` kommen weiter aus `routes.ts`. Kontrast des Gruppentitels 8,05 : 1 bei drei Breiten.

**Am Telefon zugeklappt, am Rechner offen.** Im Markup stehen die Gruppen offen, ein Skript klappt sie unterhalb 768 px zu — fällt es aus, ist alles sichtbar. Randbeitrag des Skripts 132 Byte gzipped, 0,43 % des Budgets.

**Der Rollbalken:** ab 768 px versteckt, darunter mit `--s-4` (16 px) eigenem Platz unter den Kacheln. Vorher 0,0 px freier Raum unter der untersten Kachelkante, nachher 16,0 px, an beiden Reihen gemessen.

### Die Berichtigung zu 251a

**In 251a wurde berichtet, der Rollbalken messe 0 px, und daraus geschlossen, macOS liefere überlagernde Balken.** Der Schluss war zu schnell: `puppeteer.defaultArgs()` enthält **`--hide-scrollbars`**, und das Flag war nicht abgeschaltet. Sämtliche Nullmessungen von 251a sind mit ausgeblendetem Balken entstanden. Die Aussage hält auch mit `ignoreDefaultArgs`, aber aus einem anderen Grund als dem damals genannten.

**Die Verallgemeinerung wiegt schwerer: Der Prüfbrowser blendet Rollbalken grundsätzlich aus.** Alle elf Gatter laufen darin. Für Kontrast, Farben und Bytes ist das gleichgültig; für jede Messung an einer scrollenden Fläche ist es das nicht. **Die Umgebung, in der gemessen wird, hat eine Eigenschaft, die keine Besucherumgebung hat, und kein Gatter kann das melden.**

### Was 252 offen gelassen hat

**Der Anker `#verpackung` wird von niemandem geprüft** — geschlossen in 253 §2.

**Der Tastaturlauf sieht nur eine Breite** — geschlossen in 253 §3.

**Ob der Balken auf Windows oder Linux unter 16 px bleibt**, ist ungeprüft. Dort ist der Balken klassisch und nimmt Platz; 16 px ist die kleinste Stufe der Skala, die überhaupt Raum schafft. Bei einem 17-px-Balken reichte sie knapp nicht.

## 11.23 Auftrag 253 — drei Lücken in der Messung

**Ergebnis:** 2 076 s, zehn grün. Der Zuwachs von 65 s liegt fast ganz bei `a11y` (215 → 263 s) und ist die zweite Tastaturbreite.

**Anker werden geprüft.** 42 Anker im Bestand, null ohne Ziel, Laufzeit 2 ms. Aufgenommen von `thirdparty`, weil dort der Linkbestand des gebauten Standes schon vollständig vorliegt — 1 625 Links aus denselben 44 Dateien. **Die Entscheidung dort hörte eine Frage zu früh auf:** Sie fragte, wem die Adresse gehört, nicht, ob das Sprungziel dort steht. `legal` wurde erwogen und schriftlich verworfen; ein zwölftes Gatter für eine Prüfung von 2 ms war ausgeschlossen. Nicht geprüft und im Code benannt: `href="#"`, Anker auf fremde Domains, `#top`.

**Der Tastaturlauf hat eine zweite Breite.** Gemessen vor der Entscheidung: 44,6 s reines Laden, 52,2 s bei 1440 px über die ganze Route, 48,6 s bei 390 px, 45,5 s in der auf den Fußbereich verkürzten Form. **Gewählt wurde die volle zweite Breite** — die kurze Form spart 3,1 s und verliert 613 von 900 Halten. Jetzt 82 statt 41 Läufe.

**Die Decke in `kommentar.mjs`** von 199 auf 187, gemessen zuletzt, weil das Gatter auch die in diesem Auftrag geschriebenen Kommentare zählt. Zweite Nennung gestrichen statt nachgezogen.

**Und der tote Fokusring** — siehe Befund 10 in Abschnitt 11. Behoben statt nur gemeldet, obwohl §5 nur Melden verlangte. **Die Begründung trägt:** §3 hätte sonst eine tote Prüfung auf 82 Läufe verdoppelt — 48 Sekunden mehr für zweimal nichts. Ein Auftrag, der eine kaputte Messung verdoppelt, ist nicht ausführbar.

### Fünf feste Fensterbreiten, gemeldet

`budget.mjs:129` · `a11y.mjs:354` (Overlay) · `a11y.mjs:544` (ohne JavaScript) · `thirdparty.mjs:100` · `thirdparty.mjs:228`. Alle fünf messen ausschließlich bei 1440 px.

**`budget.mjs:129` ist der wichtigste und steht deshalb auf der Livegang-Liste, nicht in Abschnitt 16.** LCP und CLS werden nur am Rechnerfenster gemessen; die Fassung, die die Mehrheit der Besucher bekommt, hat nie eine Zahl. Bei 390 px greift ein anderes `sizes`, also womöglich ein anderes LCP-Bild. Das Gatter zu verdoppeln kostet 1 264 s — deshalb nicht als Dauerlauf, aber **einmal vor der Veröffentlichung gemessen haben will man diese Zahl**, und sei es außerhalb der Gatter.

### Wo mein Auftrag nicht entscheidbar war

§3 sagte „a11y steht bei 215 s" und „verdoppelt die zweite Breite den ganzen Lauf" — zwei Bezugsgrößen in einer Schranke. Der Tastaturteil verdoppelt sich um 93 %, das Gatter um 22 %. Claude Code hat nach beiden Lesarten gerechnet und die Wahl begründet, statt sich eine auszusuchen.


## 11.24 Auftrag 254 — die Laufzeit vor dem Verdoppeln

**Der Anlass:** Mit gebauten englischen Seiten verdoppelt jedes routenweise Gatter seine Menge — der volle Lauf wäre von 35 auf rund 69 Minuten gestiegen, dauerhaft. §2 hat zuerst gemessen, wo die Zeit liegt: `budget` gibt 99,94 % seiner 1 264 s in der Messschleife aus, davon zwei Drittel im Scrollprotokoll; Browserstart 0,6 s. Die Zeit hängt an der Zahl der Routen — der Ansatz trug.

**Die Form:** ein Inhaltsschlüssel je Route — sha256 über Node- und puppeteer-Fassung, die vier beteiligten Skripte und jede Datei, die der letzte Lauf über die Leitung holte. Speicher außerhalb des Repositoriums (`../.gatter-zwischenspeicher/budget.json`). Tragende Säule ist der **deterministische Bau**, gemessen: 584 von 584 Dateien byte-identisch über zwei Bauten.

**Fünf Bedingungen, alle erfüllt:** Der Schlüssel deckt alles ab, wovon die Messung abhängt (und benennt, was nicht: Chrome-Binärdatei, Maschine, Dateien, die ein künftiger Lauf zusätzlich lüde). Leerer oder verfälschter Speicher führt zur vollen Messung. Die Urteilszeile sagt „n gemessen, m übernommen". **`BUDGET_VOLL=1` erzwingt den vollen Lauf und ist vor jeder Veröffentlichung verbindlich.**

**Vier Gegenproben:** zweiter Lauf 0,19 s statt 1 262,9 s · eine geänderte Route → genau eine neu gemessen · **ein verfälschter Speicherwert (9 999 ms) bringt das Gatter zu Fall** — der Beleg, dass wirklich gelesen wird · Speicher gelöscht → voller Lauf, gleiche Ergebnisse. **Gatterlauf 2 074 s → 793,5 s.**

**Ausweitung auf `contrast`, `hover`, `a11y` lohnt** (~726 s je Lauf), kommt aber **erst nach den Schlüsseln** — solange sich fast jedes Dokument in fast jedem Auftrag ändert, trifft ein Speicher nie. `thirdparty` ungeeignet: Es misst die Welt von heute.

**Nebenbei in §5:** `fassung.mjs:29` und `sprache.mjs:161` auf `LANGS` gestellt — zwei stille Ausfälle bei einer dritten Sprache. Die übrigen Fundstellen (30 Code-Stellen in 6 Skripten, gefährlichste `sprache.mjs:206–208`, `:131`, `pending.mjs:400`) warten mit Auftrag 239.

## 11.25 Auftrag 255 — die Vorlese-Attribute in die Copy

**Dreizehn, nicht fünfzehn.** 253a hatte zwei `aria-label="Elephant Bay"` mitgezählt — ein Markenname ist auf einer englischen Seite wortgleich, also Datenwert, kein Vorlesetext. Nach dem Umbau: null feste deutsche Vorlesewerte im Baum.

**Der Zähler stieg um +3, nicht +13** — vor dem ersten Edit so vorhergesagt: `sprache.mjs` zählt Hüllen, keine Werte; zehn der dreizehn Wörter landeten in bestehenden `{de, en}`-Paaren. **Eine Vorhersage vor der Messung ist der Unterschied zwischen Messung und Ausrede.**

**Video als Sonderfall:** Der Block ist als Ganzes pending, ein deutscher Wert kann darin nicht existieren — das Wort „Deutsch" steht im Vermerk und wird beim Auflösen fällig statt dann erfunden.

**Bytegleichheit war unerreichbar und wurde bewiesen statt wegerklärt:** Astro schreibt ein dynamisches `&` als `&#38;` (+4 Bytes, 41/41), neue Importe verschieben die CSS-Regelreihenfolge bei gleicher Regelmenge (41/41). Nach Normalisierung identisch. **Für den Zwischenspeicher heißt das: Jede Bauteiländerung kippt alle 41 Schlüssel** — 41 Neumessungen in 255, 256b wird dasselbe tun.

**Gemeldet und akut beim Füllen der Schlüssel, nicht erst bei einer dritten Sprache:** `voices()` und `video()` fallen ohne `lang` still auf `DEFAULT_LANG` zurück — eine englische Seite bekäme deutsche Stimmen-Beschriftungen.

## 11.26 Auftrag 256 und Nachtrag 256a — Tranche 1

**Gelandet:** fünf überarbeitete deutsche Titel (darunter Vegan 66 → 59 und Vegetarisch 67 → 58, beide vorher über der 60er-Grenze), die deutschen Descriptions, das aufgehobene Treue-Pending, die ersten zwölf englischen Texte des Bestands (`sprache`: en 0 → 12 geschrieben). Dokumentzahl 44 = 44 in jedem Bau. **`budget` hat dreimal exakt die Routen neu gemessen, deren Dokument sich änderte** — 8/33, 1/40, 1/40 —, jedes Mal vorhergesagt.

**Nicht gelandet, mit Beweis: die englischen Routentexte (§4).** `builtLangs()` (`routes.ts:522`) prüft **Textpräsenz statt Baubestand**. Gefüllte `text.en` machen die deutsche Seite zur Lügnerin: `hreflang="en"` auf `/en/faq/`, ein Umschalter dorthin — und `sprache` wird rot: „dort liegt kein Dokument". In einer Einwegprobe belegt, zurückgebaut. **Das `sprache`-Gatter war das Schloss, das hielt.**

**Meine Mechanikannahme in §0 war falsch, und die Wahrheit ist besser:** Englische Seiten können durch Text gar nicht zu bauen beginnen — in `src/pages/` gibt es keinen `/en/`-Erzeuger, jedes `getStaticPaths` setzt ausdrücklich `DEFAULT_LANG`. **Englisch geht nur durch einen bewussten Schalter live**, nie aus Versehen mit halbem Text. Mein Abbruchkriterium „Dokumentzahl steigt" konnte deshalb nie anschlagen.

**Standort:** Titel und Description kommen aus `site.ts locations[0]`, einsprachig, direkt gelesen — nicht aus `routes.ts`/`meta.json`. Deutsch als Stringtausch gelandet; Englisch ist eine Strukturentscheidung (Abschnitt 15) und gehört zu 257.

**Ein 61-Zeichen-Titel rutscht durch alle elf Gatter** (§6c, gemessen). Die 60er-Grenze steht nur in einem Kommentar. Längenprüfung kommt in 257 — in `sprache`, das den Bestand schon liest, nicht als zwölftes Gatter.

**256a:** Startseite auf die neue Paarung — Titel 56 „Manti in Mannheim — aus eigener Produktion", Description 146 beginnt mit „Gekocht, wenn du bestellst". Ein Commit, `budget` 1/40. Claude Code hat dabei den Kommentar in `routes.ts:125` mitgezogen, der die 60 als Kante behauptete — und ihn durch „one character short" ersetzt, was wieder eine Zahl ist; mit der Längenprüfung in 257 gehört dort ein Verweis hin.

**Wieder eine Zahl von mir:** Speisekarten-Description 153 behauptet, 154 gemessen. Das Tranche-1-Dokument hatte anfangs 26 falsche Zeichenzahlen und zwei Grenzverletzungen — von Hand gezählt. Seither setzt ein Skript jede Zahl in jedem Dokument.


## 11.27 Nachtrag 256b — Fußbereich am Rechner starr, Rollbalken überall weg

**Ergebnis:** zehn grün, `budget` 41 gemessen / 0 übernommen — jede Änderung am Fußbereich kippt jedes Dokument, das ist der Preis. Skript 224 → 325 B gzip.

**Am Rechner:** alle fünf Gruppen offen, Klick und Enter wirkungslos, `tabindex=-1`; der echte Tab-Gang zählt 16 Halte statt 21 — die Vorhersage. Größenwechsel in beide Richtungen sauber. Ohne Skript alles offen.

**Am Telefon:** Balken an beiden Reihen fort, Polster weg, 0,0 px Luft unter der Kachelkante, Wischen rastet bei 328 px — **und die nächste Kachel ist 41,7 px angeschnitten**, deckungsgleich mit den 42 px aus 252. Die Aufforderung steht ohne Balken.

**Fünf eigene Messmethodenfehler, alle gefangen und benannt:** eine `getClientRects`-Heuristik zählte Links in geschlossenen Gruppen als Tabstopps (21 statt 7) → echter Tab-Gang · `scrollLeft` direkt nach Zuweisung ergab 0, weiches Rollen ist asynchron → 500 ms Wartezeit · Tab-Gang mitten im Dokument gestartet (15 statt 16) → frischer Aufruf · 120-px-Wisch schnappte unter halber Kachel zurück → 400-px-Stoß · „Überstand" war doppeldeutig → sichtbar und verdeckt getrennt.

**Eine Eigenschaft des Gatters, keine Regression:** Die Tabstoppzahl der Startseite bei 1440 streut um ±1, weil die Pfeilknöpfe der Streifen je nach Rollstand im Moment des Passierens `disabled` sind. Wer eine 47 gegen eine 46 als Fehler liest, liest falsch. `contrast` und `hover` messen die Gruppenüberschriften weiter, obwohl sie keine Tabstopps mehr sind — zu viel prüfen ist die richtige Richtung.

## 11.28 Auftrag 257 — das Schloss, dann die englischen Routentexte

**Das Schloss ist besser als meine Vorgabe:** `LIVE_LANGS = ['de']` als eine Konstante am Kopf von `routes.ts`; `builtLangs()` verlangt Schaltung **und** Text. Der Tag, an dem Englisch live geht, ist ein Ein-Zeilen-Edit. Gegenprobe: `'en'` geschaltet ohne Dokumente → `hreflang` geschrieben → `sprache` rot.

**Gelandet:** 15 von 17 Routen mit englischen Texten (offen nur `agb`, `widerruf`), null `hreflang="en"` im Bestand, 44 = 44. Standort in `site.ts` `Localized`, die `meta.json`-Hülle entfallen. **Die Längenstufe in `sprache`** — nicht als zwölftes Gatter — mit vier Kantenproben: 60 und 155 bestehen, 61 und 156 fallen mit Ort und Feld. Laufzeit 0,09 s. Gerichtseiten **am Merkmal** ausgenommen, weil über deren Texte damals niemand entschieden hatte (Nature's Palette 158, Mediterranes Trio 64).

**Meine drei Auftragsfehler:** §5 nahm die Gerichte nicht aus · §8 erwartete null Neumessungen, aber ein Import in §4 ordnet CSS um · §4 diktierte einen englischen Standort-Titel *und* die Musterklausel, die sich widersprachen — er ließ die Klausel gewinnen, und dabei kam heraus, dass der deutsche Standort-Titel die bloße Adresse war.

**Zwei Funde für später:** `builtLangs('agb')` meldet Deutsch als gebaut ohne Rechtstext — die dritte Bedingung fehlt, fällig mit den Rechtstexten. Und `sprache` liest den englischen Standort-Zweig per Regex als „mit Wörtern", egal was drinsteht; doppelt abgesichert.

**Aus seiner eigenen Fehlerliste:** „die verstümmelte Ziffer stammte aus der Verdichtung" — 54 803 statt 54 862, eine Zahl, die beim Zusammenfassen seines Arbeitsgedächtnisses kippte, gefangen nur durch Nachmessen. Die Lehre über Zahlen, die kein Skript gesetzt hat, gilt auch für das Gedächtnis des Ausführenden.

## 11.29 Auftrag 258 — Tranche 2, die 27 Gerichts-Descriptions

**Gelandet:** drei deutsche Berichtigungen (Nature's Palette 158 → 155 mit dem Anker in Hausform, Pommes mit Komma, Melted Heart ohne „das anatolische Tortellini" — Taibs Entscheidung, die Blütenform bleibt) und 27 englische Descriptions. `budget` 3 / 38, genau die drei. `sprache` +27/−27 exakt.

**Die Gerichtstitel sind Literale, keine Muster** (§4): 27 handgeschriebene `title.de`, 27 `title.en` pending, dazu `name`. Mit dem Schalter entstehen sie nicht von selbst — sie brauchten Tranche 2b.

**Der Frischeanker existiert nur noch in zwei Formen** — „Gekocht, wenn du bestellst" 6×, „frittiert, wenn du bestellst" 6× — die übrigen 15 Gerichte tragen keinen Bestellzeitpunkt; sechs davon zeitlose Herkunftssätze, eine andere Klasse.

**Der Beleg für eine Regel, den ich mir nicht hätte besser wünschen können:** §3 trug 27 englische Zeilen mit per Skript gezogenen Zeichenzahlen — **alle 27 stimmten**. §2 trug drei deutsche mit von Hand getippten — **zwei falsch** (121/123 statt 122/122; die abgenommene Datei sagte 122, das Skript hatte recht, die Zahlen kippten auf dem Weg durch meine Hände). Dazu die `sprache`-Absolutwerte einen Auftrag alt (701 statt 700). Seit 259 werden Einsetzblöcke aus der Datei erzeugt.

**Kleine Funde:** `description` steht nur im `<head>` (meta und og); das JSON-LD nimmt `line`. Apostroph je Datei einheitlich, aber zwei Hausschreibweisen nebeneinander (`dishes.json` U+0027, `routes.ts` U+2019).

## 11.30 Auftrag 259 — Standort-Titel, Tranche 2b, Längenstufe auf die Gerichte

**Gelandet, vier Commits, jede Zahl traf:** Standort-Titel mit Rubrikwort (48 → 51 / 51), Trio-Titel 64 → 59, 27 `title.en` und 27 `name.en` (`sprache` +54/−54 exakt, je eigene Hülle), `budget` 2 / 39 — genau Trio und Standort. **Die Längenstufe deckt jetzt 108 Gerichtsfelder, 41 Titel und 40 Descriptions;** drei Proben fielen, darunter die Churros-Probe aus 258.

**Der Krümel** lag in `routes.ts`, nicht in `site.ts` — en „Mannheim" → „Location", die Rubrik-gegen-Ort-Asymmetrie aus meinem Diktat behoben. Die 257er-Konstante `mannheimTitle` („eine Anschrift übersetzt sich nicht") ist entfallen, weil ihr Grund nicht mehr trägt.

**Wo `name.en` gelesen wird, wenn der Schalter fällt:** Gerichtseite (Überschrift, Krümel, `alt`, `<title>`-Rückfall, JSON-LD), Kachel, Overlay (liest den DOM der Kachel). Nichts davon ist heute sichtbar.

**Der Fund, der über den Auftrag hinausgeht:** **Der Bau läuft über `../.toolchain/node22` (v22.14.0), weil das System-Node 18.15.0 unter Astros Minimum (≥ 18.20.8) liegt — und das steht nirgends im Repository.** „Ich habe es mir gemerkt." Das ist der falsche Ort: Ein frischer Rechner baut die Seite nicht, und nur einer weiß, warum. Auf der Livegang-Liste; zwei Zeilen im Repository (`engines`, `.nvmrc` oder eine Notiz) im nächsten Auftrag.

**Sonst:** `_redirects` hält `/standort → /standorte/mannheim/` — das Adresswort aus der Begründung steht wirklich im Bestand. Bei Gleichstand 155 nennt die Anzeige das `meta`-Feld zuerst; Befund, kein Fehler.


## 11.31 Auftrag 260 — Node festgeschrieben, die Krücke entfernt

**Der Anlass (11.30):** Der Bau lief über `../.toolchain/node22`, weil das System-Node 18.15.0 unter Astros Minimum lag — nirgends notiert. Taib am 31. August: aktualisieren, und es muss beim Hoster reibungslos laufen.

**Gemessen vor dem Installieren:** Astro verlangt `18.20.8 || ^20.3.0 || >=22.0.0`; aktive LTS-Linie 24, neueste 24.20.0; 26.x ist Current und schied aus. Kein Homebrew, kein Versionsverwalter auf dem Rechner.

**Gewählt:** nvm 0.40.7 mit Node 24.20.0 — reines Shell-Skript, liest `.nvmrc` nativ. Im Repository (`97b1e96`): `.nvmrc`, `engines.node ^24.20.0`, ein minimales README mit den zwei Dingen, ohne die ein frischer Klon nicht baut (Node, `npm run fonts`). Ein README gab es vorher nicht.

**Die Probe, auf die es ankam:** Bau unter altem und neuem Node — **584 von 584 Dateien byte-gleich.** Danach `BUDGET_VOLL=1`-Referenzlauf an Node 24 (41 gemessen), zehn grün, `diet-check` 24. Erst dann die Krücke gelöscht, 176 MB.

**`engines` dokumentiert, es erzwingt nicht.** Probe c fiel nur, weil Astro selbst Node 18 abweist; ein Node 20 oder 22 baute trotz `^24.20.0` stumm. Für Hoster, die aus dem Repository bauen, reicht `.nvmrc`/`engines`; für einen Menschen an einem fremden Rechner nicht — die Vorprüfung im Bauskript kam in 261.

**Zwei Funde an der Maschine:** `git clone` gegen GitHub scheitert mit HTTP 401 — keine globale Git-Konfiguration, vermutlich alte Zugangsdaten im Schlüsselbund; heute folgenlos, wird die erste Fehlermeldung, sobald ein Remote kommt. Und `~/.zshrc` existierte nicht — angelegt, drei Zeilen nvm-Lader.

**Außerhalb des Repositoriums:** Claude Code führt eigene Gedächtnisnotizen (`reference_node_toolchain.md` und einen Index) — dort lebte die Krücke bisher. Ein Arbeitsgedächtnis, das beim Verdichten Ziffern verliert (11.28), ist kein Ort für etwas, das ein anderer Rechner braucht; jetzt steht es im Repository.

## 11.32 Auftrag 261 — Tranche 3, die Startseite

**Gelandet, sechs Commits, zehn grün.** Sechs deutsche Berichtigungen (H1 „Manti aus eigener Produktion", der Doppelsatz zu „Warum anders" aus dem Hero gestrichen, „Lieferung **in** Mannheim" statt „nach", der Anker in Hausform, `footer.nav` „Alle Seiten", Untergrenzen im Proof), 83 englische Felder. `budget` 41 / 0 — vorab so festgehalten, weil `footer.nav` ein `aria-label` auf jeder Seite ist.

**Untergrenzen mit Wächter (Taibs Weg A):** `site.ts` rundet die Zähler ab — ab 200 auf volle Hundert, darunter auf volle Zehn: 580 → „über 500", 57 → „über 50". Die Werte bleiben, datiert mit `reviewsCheckedAt`; **`legal` wird rot, wenn das Datum älter als 90 Tage ist**, und nennt beim Fallen beide Zählerstände. Gegenprobe gefahren. Die 90 Tage sind eine Pflegefrist, von mir vorgeschlagen, als Konstante mit Kommentar.

**Öffnungszeiten als Sprachzweig:** die Beschriftungen der `openingHours` sind `Localized` (Mo–Fr / Mon–Fri); Band, Tabelle und Schema leiten daraus ab. **Der Ruhetag-Satz wird ausgewählt, nicht geschrieben:** sieben Tage belegt → der Satz, sonst eine offene Hülle für den Ruhetag. Eine Tabelle, die still einen Tag verliert, kann nicht mehr „kein Ruhetag" behaupten.

**Die Paritätsstufe in `sprache`** vergleicht die Platzhaltermengen beidseitig geschriebener Schlüssel: 124 verglichen, null rot, genau eine Warnung — `order.body`, `{streetDative}` gegen `{street}`, die eine erlaubte grammatische Abweichung. Ein weggelassener Platzhalter war vorher stumm (260a). **Die Node-Vorprüfung** ist erste Stufe von `npm run build`, wörtlich gegen `.nvmrc`, in Sprache, die auch ein altes Node ausführt.

**Die Stimmen** tragen je eine Sprachangabe; der Vermerk „Translated from German." erscheint nur, wenn Zitatsprache und Seitensprache auseinanderfallen — abgeleitet, kein Teil des Zitats. Nebenwirkung, gemeldet: die deutsche Seite dieser Hülle steht als dauerhaft offene pending-Stelle und taucht bei jedem `npm run pending` auf — das Feld gehört je Sprache optional, nicht ewig ausstehend.

**Meine Fehler:** §7b hat Werte vorhergesagt, `sprache` zählt Hüllen — 255 hatte das gezeigt, ich habe es wieder in der falschen Einheit geschrieben; umgerechnet (713 · 705/8 · 125/588) exakt getroffen. §5 nannte die Mechanik nicht, die ein Vermerk braucht (Seitensprache bis in die Stimmen durchreichen). §6 kollidierte mit der Tabellenregel von `pending.mjs`.

**Gemeldet, nicht geändert:** **„Mannheim" steht an acht Stellen als Literal**, obwohl `{city}` existiert — Straße und Zeiten laufen über Slots, der Stadtname nicht; zwei der acht aus meinem Diktat. Bei der Franchise-Absicht ist der Hero, der „Mannheim" fest sagt, die Zeile, die ein zweiter Standort nicht erben kann. Die H1 divergiert absichtlich (de Produktion, en Brücke — Abschnitt 15). `pending.mjs` hat fünf alte Lücken und endet mit exit 1, vor wie nach 261 — kein Gatter. **Zu klären:** Der Bericht schreibt den Ruhetag-Satz als „kein Ruhetag", im Bestand stand „ohne Ruhetag" — Tippfehler oder Wortwechsel ohne Diktat.


## 11.33 Auftrag 262 — Tranche 4a, die sieben Manti

**Gelandet, drei Commits, zehn grün, 802,8 s.** Zwölf Berichtigungen (F1 in Taibs präzisierter Form, F3 neutral, F4 offen mit Kurkuma, die Hausregel-Singulare in the-original.why und `home.json dish.body`, beidsprachig), 35 Titel, 49 Prosafelder. `dishes.json` vor dem ersten Edit bytegleich zum 261a-Auszug, JSON-Rundlauf byteident, Apostroph durchweg U+0027, 18 Absatzwechsel.

**Zwei meiner Zahlen wurden von vorab festgehaltenen eigenen Herleitungen geschlagen:**

`sprache`: Meine Basis 176/536 stammte **aus meinem eigenen 261er-Auftrag statt aus dem 261er-Bericht** — die Werte-Zahlen, als Hüllen umetikettiert. 176 + 536 = 712 ≠ 713 Schlüssel: **Die Summe ging nicht auf, und niemand hat sie gerechnet.** Seine Basis 125/588, Vorhersage 209/504, gemessen 209/504 — Punktlandung. Weiterhin genau eine Paritätswarnung (`order.body`).

`budget`: Meine 7/34 doppelt falsch — melted-heart hatte keinen deutschen Edit (Englisch rendert bei `LIVE_LANGS=['de']` nicht), und **`/vegan/` und `/vegetarisch/` fehlten**, wo drei der editierten veganen Gerichte mit offenen Karten stehen. Seine Ableitung 8/33, gemessen 8/33. **Die Sichtbarkeitskarte ist damit erweitert: Notes stehen sichtbar auch auf den beiden Ernährungsseiten** (Karten dort offen), geparkt-verborgen auf `/speisekarte/`.

**„44" hat zwei Identitäten** — 41 Routen gegen 44 Dokumente (mit drei Weiterleitungen); mein §5a nannte die 44 unerklärt, beide Lesarten wurden gemessen. Die englische 138er-Description ist am gebauten Bestand nirgends messbar — sie steht in keinem Dokument; belegt an der Quelle.

**Bestandsaufnahme „Manti sind" (repo-weit):** 8 Quell-Fundstellen. Gästezitate und FAQ („die Manti sind heiß" — Stücke) regelkonform; `wissenManti`-Description bleibt laut Auftrag; die Wissens-Seiten (`manti.json:18`, `anderes.json:37`, `verwandte.json:234`) sind die vollständige Restmenge der Gattungs-Plural-Formel und warten auf ihre Tranche. **`menu.intro` trägt dasselbe Aussagemuster auf `/speisekarte/`** — sichtbar neben drei frisch gehobenen Singularen; nächster Auftrag. Dazu ein einzelner U+2019 im Altbestand (`home.json:572`).

**Mein Versäumnis:** Der kleine 261-Nachtrag (acht „Mannheim"-Literale, Ruhetag-Wort, Übersetzt-Vermerk optional) sollte „mit dem Tranche-4-Auftrag" fahren — 262 war dieser Auftrag, und ich habe ihn nicht hineingeschrieben. Fährt gesammelt mit 4b.


## 11.34 Nachtrag 262a — die Zurück-Geste

**Taibs Befund am 31. August:** Der Zwei-Finger-Wisch nach rechts (macOS, zurück in der Chronik) ging auf der Seite nicht — auch im normalen Fenster, auf einer Unterseite, über Text. Damit blieben von vier möglichen Ursachen (Prüfmodus, leere Chronik, Wisch über einer Reihe, seitenweite CSS-Unterdrückung) nur die vierte.

**Gemessen:** `html { overscroll-behavior: none }` in `base.css:35` — **die Kurzschrift unterdrückt beide Achsen.** Der Kommentar darüber begründete nur die senkrechte: Überziehen am Dokumentende zeigte die Zeichenfläche, eine Farbe für zwei Enden. Die waagerechte Unterdrückung war nie Absicht, nur Beifang. Beide Reihen (`ul.best`, `ul.voices`) trugen `overscroll-behavior-x: contain` längst — richtig so: eine Reihe an ihrem linken Rand darf nicht in die Chronik durchreichen.

**Geändert (`3d9d2e1`, eine Datei):** `overscroll-behavior: none` → `overscroll-behavior-y: none`, Kommentar berichtigt und um den Absichtsvermerk ergänzt (die Geste gehört dem Browser; wer die Kurzschrift zurücksetzt, wirft wischende Gäste aus der Seite). Berechnete Werte danach: `html`/`body` auto, beide Reihen contain. `budget` 41 / 0, weil `base.css` jedes Dokument ändert. **Taibs Abnahme am Trackpad: „funktioniert wunderbar."**

**Mein Auftrag war unpräzise:** „x-Unterdrückung entfernen" hätte, wörtlich auf die Deklaration angewandt, die dokumentierte y-Wirkung mit aufgerissen — der Nachtrag hatte die Kurzschrift-Form nicht vorhergesehen; das §3-Sollbild hat ihn richtig geleitet. **Gemeldet, nicht geändert:** `.best` trägt sein `contain` unkommentiert, `.voices` mit Kommentar — der Schutzkommentar für `.best` kommt mit dem Sammel-Nachtrag.

## 11.35 Nachtrag 262b — Signet auf allen Stufen, SVG vorneweg

**Anlass:** Taib wollte in den Lesezeichen das Signet statt des M. Der Bestand war dreistufig — 180 und 32 aus dem Signet, nur die 16er aus dem M (Lesezeichenleiste am Rechner). Dazu seine Frage, warum iPhone-Lesezeichen anderer Seiten gestochen scharf seien: **nicht wegen SVG** — iOS nimmt nur das `apple-touch-icon`-PNG, und ein 180er-PNG ist auf Retina pixelgenau; unsere 180er war es immer. SVG hilft am Rechner (Chrome, Firefox, Edge); **Safari am Mac liest SVG-Favicons nicht** — deshalb beides, SVG vorn, PNG dahinter.

**Gelandet (`b2a0670`, vier Dateien):** `favicon.mjs` rastert alle drei Stufen aus dem Signet, der M-Eintrag entfällt, Kommentar mit der Entscheidung. `public/favicon.svg` als byteidente Kopie der Signet-Quelle, `Base.astro` mit der SVG-Zeile vor den PNG-Zeilen samt Grund. **Die Pipeline ist bewiesen deterministisch:** 32er und 180er neu erzeugt und byteident zum Vorstand (1 770 / 10 893 B); die 16er 446 → 772 B. 41 Dokumente wachsen um genau eine Head-Zeile, die drei Weiterleitungen tragen keine Icon-Zeilen — die Doppelidentität der 44, diesmal in meinem §4a. `budget` 41 / 0, vorab so abgeleitet.

**Sichtprobe:** `../262b-sichtprobe.png`, vier Spalten (alte 16, neue 16, SVG direkt bei 16 gerastert, 32 als Referenz), echte Größe und vierfach ohne Glättung. **Abnahme ausstehend;** gegen das Signet bei 16 nimmt er §2a zurück, das SVG bleibt.

**Randbefund, der über den Nachtrag hinausreicht:** `PROJEKTGEDAECHTNIS.md` ist untracked — außerhalb jeder Versionierung, ohne Remote ohne jede Sicherung außer der Kopie im Projektwissen. Vorschlag an Taib: ins Repository aufnehmen, ein Commit je Fortschreibung. Entscheidung offen.


## 11.36 Auftrag 263 — Tranche 4b, die zwanzig übrigen Gerichte, mit Sammel-Nachtrag

**Gelandet über drei Sitzungen, neun Commits, zehn grün.** Fünfzehn deutsche Berichtigungen (12 Gerichte), Churros zurück auf vegan, sieben Punkte Sammel-Nachtrag, 65 Titel- und 105 Prosa-Hüllen englisch. `dishes.json` ist damit bis auf die Kennzeichnung zweisprachig.

**Zwei Kontextenden, null Rekonstruktion.** Die Sitzung von Claude Code war seit Projektbeginn dieselbe — über vierzig Aufträge — und lief während 263 zweimal voll. Die Übergabe nach Protokoll (Abschnitt 18.1) hat getragen: Erledigtes per `git log` und Diff gegengeprüft, Offenes in Auftragsreihenfolge. Getragen haben abgenommene Tafeln in `/tmp` mit Zählassertionen, Hash-Listen je Zwischenstand, ein Commit je Abschnitt. Gekostet: ein Bytevergleich im falschen Format, ein Hintergrundlauf, der bis zum Ende puffert. **Wiederaufnahme war Messen, nicht Erinnern.**

**Churros (§3.1):** `diet` vegan, Vegan-Bestand 13 → 14; die drei Nutella-Einträge in `allergensOptional`, Muster Pommes. `diet-check` bleibt bei 24, ohne Ausnahme. Am Dokument: `/vegan/` trägt die Churros-Kachel, der Proof zählt „14 Gerichte vegan", `/zutaten/` „Dazu 14 vegan." — die Zahlen liefen mit, weil sie aus Daten kommen.

**Sammel-Nachtrag:** g) Gedächtnis als erster Commit (`f2befaf`), `.gitignore` trug keinen Eintrag. a) Sieben Literale auf `{city}` — das achte war „Mannheimer" und blieb; `deliveryNote` füllt aus `business.city`, die Standort-Überschrift aus `location.city`: heute derselbe Wert, **zwei verschiedene Fakten** (Franchise). b) Der Ruhetag-Satz stand immer richtig — „kein" war ein Tippfehler im 261er-Bericht. c) `translatedNote.de` optional: ein zweiter Leerzustand neben pending, mit Schema, `t()`-Wurf und `sprache`-Zählung. d) `menu.intro` — siehe Fehler unten. e) keine Änderung. f) Schutzkommentar an `.best`, 0 Byte am Bau.

**Meine Fehler:** §3.2d diktierte den mechanischen Singular für `menu.intro` — „Manti sind türkische Teigtaschen" ist aber eine Gattungsaussage über die Stücke, die 262 §6 ausdrücklich der Wissens-Tranche vorbehalten hatte. Ergebnis: „Manti **ist eine** türkische Teigtasche" — ein Gericht aus einem Stück, sinnverschoben, sichtbar auf `/speisekarte/`. Berichtigung in 264 mit der Doppelpunkt-Form (Abschnitt 15). §6b vergaß das Feld, das §3.1 selbst anlegt (`churros.allergensOptional`: +1 Schlüssel — 714, en 379/335, de 706/7). §6c traf die Zahl 17, nicht die Menge: `/standorte/mannheim/` blieb bytegleich (Literal → gefüllter Slot), `/zutaten/` fehlte; seine eigene 15 hatte denselben Fehler (Startseiten-Kachel-Chip, `{vegan}`-Slot). **Sichtbarkeitskarten über Slots und Attribute führen, nicht nur über Prosa.**

**Außerhalb des Repositoriums repariert:** `NEW PF/.claude/launch.json` zeigte noch auf die in 260 gelöschte Krücke (`Failed to spawn process`) — 260 hatte den Pfad nur im Repository gesucht. Jetzt nvm-Node, Dev-Server auf 4323.

**Gemeldet:** Die Churros-Kachelzeile „Dazu zwei Portionen Nutella — nicht vegan." steht jetzt auf `/vegan/` (Taibs Wort). Stadt-Literale außerhalb der acht: `faq.json`, beide Ernährungsseiten-Überschriften, `wissen/anderes.json`, `meta.json` 7×, `routes.ts` 8 Titel, `site.ts`, `map.json` — Rückstand für den Tag der zweiten Stadt; die Titel tragen „Mannheim" absichtlich. `meta.json:58` wissenManti-Description bleibt der echte Gattungs-Kandidat.


## 11.37 Auftrag 264 — Tranche 4c, die Kennzeichnung

**Gelandet, sechs Commits, zehn grün.** Drei Berichtigungen (`menu.intro` in Doppelpunkt-Form; Croutons-Spuren von `allergensOptional` nach `allergensTraces`, neues Feld; „Bulgur (Weizen)" 2×), dann 118 Hüllen aus dem Wörterbuch erzeugt — 90 Kennzeichnung, 14 Combos, 14 Getränke; 376 Elemente, 0 Abbrüche, 135 von 139 Einträgen verwendet, vier unverwendet mit Grund. **Danach keine pending-Hülle mehr in `dishes.json` und `drinks.json`.** `sprache`: 715 Schlüssel, de 707/7, en 497/218.

**Die Gatteränderung (`921fab5`, nach Rückfrage):** Die Zutatenprüfung in `sprache` verglich Allergenvermerke in Klammern als **Wortlaut** — und war **nie gegen echte englische Listen gelaufen**, weil Englisch bis 264 immer pending war. Mit übersetzten Listen fiel sie strukturell (11 Gerichte). Claude Code fragte statt zu biegen; Entscheidung: Strukturvergleich — je Position Klammerzahl und Gliederzahl, sprachneutral — mit Kommentar (Zweck, Fallgeschichte, Wortlaut ist Wörterbuchsache) und drei Gegenproben: Klammer entfernt → rot, Element entfernt → rot, Tausch verschiedener Klammerzahl → rot; **Tausch gleicher Klammerzahl → grün** — das sieht die Struktur nicht. Getragen hat es der Eins-zu-eins-Abgleich aus §5e: eine einmalige Prüfung, kein Gatter. Und das Wörterbuch liegt in `/tmp`. → Nachtrag 264b: Wörterbuch ins Repository, Gatter prüft `en[i]` gegen den Wörterbuchwert von `de[i]` — eine Wahrheit.

**Anhang-II-Tafel:** acht von vierzehn Allergenen im Bestand (Gluten, Ei, Soja, Milch, Schalenfrüchte, Sellerie, Senf, Lupine); nicht im Bestand: Krebstiere, Fisch, Erdnüsse, Sesam, Sulphite, Weichtiere.

**Meine Fehler:** 116 statt 117 Hüllen (gezählt statt nachgezählt; er maß vor dem Edit); `budget` 5 statt 6 — **`/vegetarisch/` fehlte, zum dritten Mal eine Ernährungsseite**; „zwei Backtriebmittel-Reihenfolgen" waren drei; „zwei unverwendete Einträge" waren vier. Die Gatterkollision war nicht vorhergesehen — „zehn grün" war ohne Gatteränderung unerreichbar.

**Gemeldet:** Milchträger ohne Klammer in der Zutatenzeile — Butter (bulgur-bites), Hirtenkäse (crispy-cheese-rolls, griechischer-salat, melted-heart); alle vier führen Milch im Allergenfeld, die Zeile selbst nennt es nicht (Klasse K2). bulgur-bites führt Milch zugleich als Allergen und als Spur — Zutat und Spur widersprechen sich. Schreibweisen der Herstellerlisten (Salz/Speisesalz, Ei/Eier/Vollei, drei Backtriebmittel-Fassungen) bleiben Wortlaut.


## 11.38 Nachtrag 264b — das Wörterbuch ins Repository

**Gelandet, fünf Commits, zehn grün.** `src/data/kennzeichnung-woerterbuch.json` (141 Einträge) — nicht `src/content`, wie ich vorgeschlagen hatte: Dort lädt keine Collection eine lose Datei, und `sprache` hätte sie als fünfzehnte Inhaltsdatei gezählt; Präzedenz `map.json`. Die Zutatenprüfung in `sprache` hat jetzt drei Stufen: **Sperre** (deutsche Angabe ohne Eintrag → rot mit Zeichenkette), **Wortlaut** (`en[i]` = Wörterbuchwert von `de[i]`, feldweise), **Struktur** (bleibt, fängt Fehler im Wörterbuch selbst). Gegenproben: der 264er-Tausch gleicher Klammerzahl → jetzt rot; „Kardamom" ohne Eintrag → rot; „bulgur (weat)" → rot.

**Milch in Klammern** (Taib: „Ist ja Allergene"): Butter (bulgur-bites) und Hirtenkäse (crispy-cheese-rolls, griechischer-salat, melted-heart) tragen „(Milch)"; die Reihenfolge Deutsch + Wörterbuch → `sprache` rot (4) → Englisch nachgezogen → grün ist der Beleg, dass die Prüfung Wortlaut sieht. **Die Milch-Spur bei Bulgur Bites bleibt** — sie stammt aus dem Grieß, dessen Hersteller Spuren angibt; mein „Widerspruch" war eine Redundanz. Die Berichtigung erreichte die Sitzung, bevor etwas entfernt war.

**Mein Fehler:** `/vegan/` in der Budget-Karte, obwohl keines der vier Gerichte vegan ist — der Sichtbarkeitssatz gilt je Chip, nicht pauschal. Sechs Dokumente, nicht sieben. **Offen, entschieden für 265:** Die jetzt unverwendeten Einträge (Butter, Hirtenkäse, Bulgur ohne Klammer; Milch (Croutons), Sellerie (Croutons); Nutella als Zutat) werden gestrichen — ein Wörterbuch mit Vorrat ist eine Hintertür, eines ohne ist die Sperre.

## 11.39 Auszug 264a — der Rest in Zahlen

**218 offene englische Hüllen in zwölf Dateien**, deckungsgleich mit `sprache`: `home.json` 70 (menu 22, dishPage 19, loyalty 12, process 11, je 1 breadcrumbs, ingredients, kitchen, drinks, sides, standort), Wissen 76 (verwandte 29, manti 25, anderes 22), FAQ 34, Ernährung 30 (vegetarisch 16, vegan 14), Legal 4, `meta.json` 4. Der Auftrag hatte den FAQ-Pfad falsch (`copy/faq/faq.json`) und die vier Legal-Dateien vergessen. **Sieben der 218 sind nicht übersetzbar, weil das Deutsche fehlt:** AGB, Datenschutz, Widerruf (Sections und Descriptions) — Anwalt und Hosting. Zwölf deutsche Marker im Baum, davon einer ohne externe Daten schreibbar (`ingredients.marks`: die vierzehn Allergene und die Zusatzstoffklassen im Gesetzeswortlaut) und einer, der Herstellerdaten braucht (`sides.marks`).

**Sichtbarkeit:** `dishPage` rendert auf allen 27 Gerichtseiten und in den Overlays; `breadcrumbs.label` auf allen Routen; `video` nirgends (geparkt); AGB, Datenschutz, Widerruf sind keine Routen, solange ihr deutscher Text fehlt (`legal.ts`).


## 11.40 Auftrag 265 — Tranche 5a, der Rahmen der Unterseiten

**Gelandet, vier Commits, zehn grün.** Achtzehn deutsche Änderungen, die Wörterbuch-Bereinigung (141 → 135, Gegenprobe: „Butter" ohne Klammer fällt mit Zeichenkette), 70 englische Hüllen — `sprache` en 567/148, Punktlandung. §2.18 gemessen statt geraten: `.ph` war reine Optik (gestrichelter Platzhalter, kein Verweis), die zwei Felder entfielen in Schema, Copy und Bauteil.

**Mein Fehler, der wiegt:** Der neue Fußtext auf `/zutaten/` behauptet „Allergene, Zusatzstoffe **und Nährwerte** stehen bei jedem Gericht" — `nutrition` ist bei allen 27 Gerichten `null`, die Tabelle rendert nirgends. Ich hatte aus Tabellenbeschriftungen (`dishPage`: „Nährwerte je 100 g") auf Daten geschlossen. **Beschriftungen sind keine Daten** (Prüfpunkt 2). Berichtigung in 266. Dazu: `budget` 40/1, nicht 41 — die Startseite rendert keinen Krümelpfad; die 264a-Karte trug denselben Fehler. „Sechs Nicht-vegan-Zeilen" waren sachlich sechs, als Zeichenkette fünf (Pesto kleingeschrieben).

**Gemeldet:** `/vegan/` behauptet an zwei Stellen („Bei jeder Sauce steht, was drin ist", „an jedem Zusatz steht, was er mitbringt"), was die Beilagenliste seit 265 einlöst — Anker `/speisekarte/#dazu` existiert; für 5c. Die Käse-Zeile ließe sich nicht sinnvoll ableiten (deklinierte Namen), aber eine Leseprüfung in `sprache` könnte Drift melden. Die Gästezitate führen „homemade"/„fresh" im Englischen — wird die Wortprobe je Gatter, brauchen Zitate eine Ausnahme. kJ/kcal stehen im `unit`-Feld, das doppelte Label „Energie" ist die LMIV-Doppelform.


## 11.41 Auftrag 266 — Tranche 5b, die Wissensseiten

**Gelandet, vier Commits, zehn grün.** Vierzehn Änderungen, 76 Hüllen, `sprache` en 643/72 Punktlandung, `budget` 4/37 exakt. Die versöhnte Pasta-Kategorie steht auf `/wissen/verwandte/`, die Gewürzmischung auf `/wissen/manti/`, „von Hand" als Anspruch über uns 0× (1× bleibt — Kayseris Wettbewerbe).

**Die Abweichung, die richtig war:** `[...wissen].astro` rief `fill()` nirgends auf — mein diktiertes `{city}` wäre wörtlich auf der Seite erschienen, bei zehn grünen Gattern, weil **kein Gatter gebaute Seiten auf ungefüllte Slots liest.** Claude Code hat nachgerüstet statt nur zu berichten (nach dem Muster von `Menu.astro`, nur Fließtextwege) und es ausgewiesen; ein wissentlich ausgelieferter Schaden wäre die schlechtere Treue gewesen. → 267: eine Gatterstufe, die `dist/` auf `{wort}` liest.

**Zweite Lücke:** Die englischen Link-Phrasen prüft bis zum Schalter kein Bau — `splitParts` zählt jede Phrase exakt einmal je Abschnitt und wirft sonst; bei `LIVE_LANGS=['de']` läuft das nur für Deutsch. Sein Skript hat die Zählung für Englisch vorab nachgebildet: 25 Phrasen, je 1×. Der Vorschaubau prüft es echt.

**Meine Fehler:** „‚von Hand' 0×" war als Zeichenkette falsch (Kayseri-Satz), als Anspruch richtig; die Description rendert zweimal (meta + og), meine Zählung war in Feldern. **Gemeldet:** Die Gewürzmischung steht jetzt allein auf der Wissensseite, die Gerichtseiten sagen nur „Gewürzmischung" — kein Widerspruch, Taibs Entscheidung, ob die Tüte auf die Gerichtseiten gehört.


## 11.42 Auftrag 267 — Tranche 5c und der Vorschaubau, der keiner war

**Hauptbaum sauber gelandet, fünf Commits (553a5fd → e0b70c7), zehn grün.** Fünf Änderungen mit `fill()`-Nachrüstung in `Faq.astro` (enges `vars`: nur street/postalCode/city, nur Antworten); die zwei `/vegan/`-Verweise als `route: "menu"` **ohne Anker** — `copy-links.ts` kennt kein anchor-Feld, sie landen oben statt bei `#dazu` (Meldeliste: geprüftes anchor-Feld wäre die Erweiterung); die **{wort}-Gatterstufe** in `sprache` mit Gegenprobe (fill() entfernt → rot mit Fundstelle `/faq/index.html: {street}`); 65 Hüllen. 717 Schlüssel, de 709/7, en 710/7 — der siebte Rest ist `meta.json impressum.description`, beidseitig pending. `budget` 3/38 exakt.

**Kernbefund (§7): Es gibt keinen en-Erzeuger.** `LIVE_LANGS = ['de','en']` baut ohne Halt durch und erzeugt **null englische Dokumente** — `t()` wird für en nie gerufen, `dist/en/` entsteht nicht, alle zehn Adressen 404. Der Worktree-Gatterlauf macht es aktenkundig: FAIL(2) — diet 24 wie immer, **`sprache` FAIL(41): jede Seite trägt hreflang auf ihr fehlendes Gegenstück.** Umkehrbefund: Der Vorschaubau (beide Sprachen geschaltet) zeigte auf 41 Dokumenten den sichtbaren **English-Umschalter mit totem Ziel** — er kündigte Englisch an und lieferte es nicht. *Präzisiert nach 268: Der Hauptbaum mit `['de']` trug nie einen Umschalter; der Befund galt dem Worktree.* Die en-Pfade sind übersetzt (aus hreflang/routes.ts): `/en/menu/⟨slug⟩/`, `/en/faq/`, `/en/how-we-make-it/`, `/en/ingredients/`, `/en/about-us/`, `/en/rewards/`, `/en/vegan/`, `/en/vegetarian/`, `/en/what-is-manti/`, `/en/related-dumplings/`, `/en/something-different/`, `/en/locations/⟨slug⟩/`, `/en/imprint/` usw.

**Meine Fehler:** §7 war auf einer **Annahme statt Messung** gebaut — ich habe aus hreflang-Gerüst und Umschalter auf den Erzeuger geschlossen (Familie „Beschriftungen sind keine Daten"). Mein 404-Nachtrag nannte drei Ursachen; alle falsch, die wahre fehlte. §6b: 715 statt 717 — die zwei phrase-Schlüssel, die §3 selbst anlegt, nicht mitgezählt; den siebten Rest falsch benannt.

**Schriften, präzisiert und behoben:** `public/fonts/` steht in der **`.gitignore` (Z. 6)** — nicht „untracked"; `git worktree add` überträgt Ignoriertes nicht. Drei woff2 in den Worktree kopiert (public/ und dist/), byteidentisch, 200 über Port 4324. **Jeder frische Klon und jeder Deploy hätte dieselbe Lücke → die Schriften gehören ins Repository (268).** Einschränkung: Der Worktree-Gatterlauf lief **vor** der Kopie — Pixel-Stufen sahen Systemschrift; verbindlich sind die Hauptbaum-Zahlen.

**Ferner gemessen:** Geteilter budget-Zwischenspeicher `../.gatter-zwischenspeicher/` zwischen Hauptbaum und Worktree — wechselseitige Verdrängung, §10 lief deshalb 34:21 mit 41/0; kein Schaden, aber die 254-Abkürzung ist bei zwei Bäumen nichtig. Aus „Hallesche Str." wurde über den Slot „Hallesche Straße" — gewollt, sichtbar. `faq.json` war vor §2 nicht idempotent formatiert (290→293 Zeilen, normalisiert, ausgewiesen).


## 11.43 Auftrag 268 — der englische Erzeuger

**Gelandet, sechs Commits (12a3752 → 9ffdee9), Hauptbaum zehn grün.** Die Bauweise: ein Top-Level-Rest-Parameter je Seitenfamilie (12 Dateien), jede fragt `builtPaths(key)` über `builtLangs` = LIVE_LANGS ∩ vorhandener Routentext. **„Englisch live schalten heißt seither: ein Eintrag in LIVE_LANGS, sonst nichts."** Zwei `fill`-Fehler dabei behoben (Standort, Kitchen): zwei Sprachfassungen dürfen verschiedene Slots fragen. Das Schloss bleibt: pending hält den Bau der jeweiligen Sprache an.

**Vorschaubau:** 85 Dokumente (41 en + 44 de), Bau in 1,9 s, Sitemap 82. Gatterlauf 65 min: `sprache` **grün** über 164 Routenfassungen — hreflang paarweise mit x-default, Canonical je Sprache, die 25 englischen Link-Phrasen halten im echten Bau; `diet` 24. **Neu rot, beides Gatterfehler, keine Seitenfehler:** `legal` (40 — sucht wörtlich `/impressum/`, Z. 209) und `teilbild` (14 — Gerichtseiten-Muster kennt `/en/menu/` nicht, Z. 171); dazu elf Sollwert-Konstanten, die im Zweisprachen-Bau unter dem Bestand liegen. Zehn Adressen alle 200: /, /en/, /en/menu/, /en/menu/the-original/, /en/vegan/, /en/locations/mannheim/, /en/about-us/, /en/faq/, /en/rewards/, /en/imprint/.

**Sichtbar Deutsches im en-Bau — und die Messlücke:** Der Bericht fand „genau zwei" (Skip-Link „Zum Inhalt springen", Base.astro:211; Rabattband `promo.text`, site.ts:360). **Taib fand einen dritten: „Zentrale" auf der Standortseite, unter der Karte** — die Messung hat ihn übersehen; 269 schließt beide Lücken (Sprachzweige und die Messung selbst). **Entschieden am 2. September: de „Zentrale" bleibt, en „Headquarters".** Und: **Taibs Browser-Messung auf `bestellen.mantiandco.com` ergab „kein Robots-Meta im DOM"** — das vereinbarte `noindex, follow` (B1) fehlt; ein Header ist unbelegt. Schriftliche Erinnerung an Foodamigos formuliert; bis zur Bestätigung bleibt B1 offen (Abschnitt 16).

**Anker geprüft zur Bauzeit** (astro:build:done, weil das Ziel beim Zeichnen noch nicht geschrieben ist): 44 bzw. 88 Anker, Gegenprobe hält den Bau mit Fundstelle; die `/vegan/`-Verweise zeigen auf `/speisekarte/#dazu` und `/en/menu/#dazu`. Mein „FAQ-Anker ungeprüft" war veraltet — `thirdparty` prüft Anker seit ~253; neu ist der Halt im Bau selbst. **Schriften im Repository** (drei woff2, OFL-1.1-Lizenzen, @fontsource-byteidentisch) — von der Livegang-Liste gestrichen. **Bestellziele auf `bestellen.mantiandco.com`** (`order.shop.href`, `promo.href`), Regel: Subdomain der eigenen Domain ist eigen, Bestellknopf bleibt im selben Tab. **`noindex` per curl unmessbar** — Vercel Challenge Mode (429) blockt jeden Nicht-Browser; Punkt B1 bleibt unbelegt, messbar nur in Taibs Browser oder per schriftlicher Bestätigung von Foodamigos. `impressum.description` de 114 / en 115 — der letzte Schlüssel außerhalb der Rechtstexte.

**Zu prüfen (269 §0):** Der Bericht endet mit „Gedächtnis nachgeführt / Erinnerungen gespeichert" — vermutlich Claude Codes eigener Sitzungsspeicher; ob `PROJEKTGEDAECHTNIS.md` seit `12a3752` berührt wurde, zeigt das git-Log — Ein-Schreiber-Grundsatz.


## 11.44 Auftrag 269 — vor dem Schalter

**Gelandet, fünf Commits (e01eda9 → 9fde40f), Hauptbaum zehn grün, alle Konstanten ohne Warnung.** §0 entlastet: Das Gedächtnis war seit 12a3752 unberührt — die 268er-Zeile meinte Claude Codes eigenen Sitzungsspeicher; Ein-Schreiber-Grundsatz intakt.

**Die Messlücke, Mechanik:** Die alte 6.5-Messung suchte eine **Nadelliste bekannter Zeichenketten** — sie fand nur, was jemand eingetragen hatte. Neu: `sprachrest.mjs` vergleicht **Paare** — jedes en-Dokument gegen sein deutsches Gegenstück, Segment für Segment; identische Segmente sind der Fundvorrat ohne Vorwissen. Am alten Stand fand sie alle drei Konstanten (Skip 41×, Rabattband 41×, „Zentrale" 1×; 83 Segmente), nach den drei Sprachzweigen 80 — der legitime Rest, klassifiziert: Marke, Kunstnamen der Gerichte, Herstellersorten, Lehnwörter, Datenwerte, Rezensentennamen. **Lehre derselben Familie: Eine Nadelliste findet nur bekannte Fehler; ein Paarvergleich findet auch die unbekannten.**

**Drei Sprachzweige** als lokale Records außerhalb des Schlüsselsystems (de-Bau byteident): Skip-Link „Skip to content", Rabattband-Paar, `locations`-Label de „Zentrale" / en „Headquarters". **Zwei Gatter sprachfähig** mit Gegenproben: `legal` liest `<html lang>` und verlangt das Impressum der eigenen Sprache; `teilbild` leitet Muster und Namenslisten je Sprache ab — **vorher sechs falsche Verstöße** (deutsche Namen gegen englische Alternativtexte). **Elf Konstanten** aus `sollwerte()` in einer Stelle, aus den erklärenden Dateien, nie aus `dist/` — fällt eine Fassung aus dem Bau, fällt der Messwert unter das Soll, die richtige Richtung. Mein §5-Fehler: die elfte Konstante (sprache-Fassungen) braucht LANGS, nicht die gebauten Sprachen.

**Worktree: FAIL(1), nur diet-check 24** — zehn grün, 82 Seiten in 1,9 s, zehn Adressen 200, Server frisch auf 4324, getrennte Zwischenspeicher je Baum. **Gemeldet, Entscheidungen offen:** ⑴ Die Google-Zitate stehen auf `/en/` übersetzt unter unverändertem Namen — Taibs Abzeichnung; der Vermerk „Translated from German." existiert seit 263, seine sichtbare Anzeige ist zu prüfen. ⑵ `legal` prüft die en-Rechtstext-Links nicht (`routePath` ohne Sprachargument) — Restlücke für den nächsten Auftrag. ⑶ Ein de-Schlüssel ist weder geschrieben noch ausstehend (710+6=716 von 717) — benennen. Der identische Sigara-Böreği-Titel beider Sprachen ist legitim (Kunstname).

## Die Schokostückchen sind bestätigt — ToDo geschlossen (2. September)

Callebaut Dark Chocolate Chunks (Lieferantenauskunft Esther Spaan): **halal-zertifiziert, vollständig pflanzlich, kein Alkohol im Vanillearoma, kein flüssiger Trägerstoff.** Die Unterzutatenliste im Bestand (Zucker, Kakaomasse, Kakaobutter, Emulgator Sojalecithin, natürliches Vanillearoma) deckt sich wörtlich mit der Herstellerangabe. Packung: „kann Milch enthalten" — nach der Bulgur-Bites-Regel (Herstellerangabe wird geführt) gehört die Milch-Spur in `allergensTraces` von Bananenbrot und Schokokuchen; **Taibs Bestätigung offen.** Der Kennzeichnungsabschnitt für `/zutaten/` ist entworfen (`Zutaten-Kennzeichnungsabschnitt.md`, LMZDV statt der 2021 aufgehobenen ZZulV, drei abgeleitete Slots); der Auskunfts-Schlusssatz entfiel auf Taibs Entscheidung.


## 11.45 Auftrag 270 — der Schalter, der Umschalter, der Rest

**Gelandet, sieben Commits (98d69c9 → c0b9020).** `LIVE_LANGS = ['de','en']` — die eine Zeile, für die das Schloss seit 257 stand; der Hauptbaum baut 82 Seiten. Der erste volle Lauf kam FAIL(2): **Claude Codes eigener Fehler** — die Pillen-Prosa wiederholte zwei Kontrastzahlen neben der Annotation, kommentar-Gatter über der Decke. Behoben, und **die Gültigkeit des Laufs bewiesen statt behauptet:** `dist` vor/nach bitidentisch (md5 über alles), die fünf langsamen Gatter messen denselben Stand, die schnellen erneut → FAIL(1), diet 24, zehn grün, alle Zweisprachen-Konstanten voll (82/85/164/246, Kontrastdecke 110/110). Laufzeit 66 min.

**Der Umschalter:** Pille in `.foot__brand` unter der Wortmarke (mobil dadurch von selbst außerhalb des Akkordeons); aktive Sprache als `<span aria-current>` — kein Link auf sich selbst; hreflang am inaktiven; Radius/Typo vom Bestellknopf, nicht sein Rot; Segmente 89×44 px (SC 2.5.5, 252er-Lehre); Kontraste annotiert (14,81/8,05/4,24). Nebenwirkung gefunden und vermessen: Fußzeilen-Umbruchkappe 57,94 → 63,44 rem.

**Der Kennzeichnungsabschnitt** auf `/zutaten/` lebt: 14 Anhang-II-Namenspaare als Copy (Schema `length(14)`), drei abgeleitete Slots (Zuordnung Stoff→Gruppe per startsWith, wirft bei ≠1 — Wartungsstelle bei neuen Stoffnamen); heutige Werte 8/6/3 wie erwartet. **Die Milch-Spur** steht bei beiden Kuchen (+0 Schlüssel — die Felder existierten; meine +1-Annahme war falsch). **Drei Schließungen:** Der Zitat-Vermerk rendert längst sichtbar (8×, Namenszeile) · `legal` prüft Rechtstextlinks je Dokumentsprache (Gegenprobe exakt) · der unbilanzierte Schlüssel war `translatedNote.de` („optional" seit 263 — nie zu schreiben); `sprache` führt jetzt die Spalte **„absichtlich leer"**: 724+6+1=731, die Bilanz geht sichtbar auf. Punktlandung aller Vorhersagen; `sprachrest` 82 = 80 + zwei Autonyme („ein übersetzter Sprachname verfehlte den, der ihn sucht").

**Abbau:** Worktree, Zweitserver, Vorschau-Zwischenspeicher entfernt, nichts Unversioniertes verloren (geprüft). Vorschau = Dev-Server 4323.

**Backlog (Meldeliste, Sammel-Nachtrag bei Gelegenheit):** kommentar-Gatter beschriftet den Restbestand als „Neu hinzugekommen" · git-Identität ungesetzt · TS-Hinweis `Standort.astro:135` (vorbestehend, stash-belegt) · en-Slugs teils deutsch (`/en/menu/bananenbrot/` — Eigennamen, Kosmetik).

## Die Beilagen-Kennzeichnung ist vollständig (2. September)

Alle dreizehn Beilagen mit Herstellerwortlaut aufgenommen; **Quelle: `Beilagen-Kennzeichnung-Aufnahme.md` im Projektwissen** (von Taib abgelegt — die Datei überlebt Sitzungen, Riss-Lehre angewandt). **Drei Funde mit Gerichtsdaten-Folgen:** ⑴ Pesto Rosso enthält **Ei** (Lysozym im Grana Padano) und **Cashew** als Zutat — beide fehlen in `allergensOptional` der Gerichte, die Pesto führen; ⑵ **Pastırma bringt Weizen** (Çemen) — „(Weizen in Röstzwiebel, Pastırma)"; ⑶ der **Sojajoghurt** trägt eine Schalenfrüchte-Spur — Anzeigeort mit Taib. Randnotizen: Hirtenkäse mit mikrobiellem Lab (Satz-Kandidat Vegetarisch-Seite), Grana Padano g.U. mit tierischem Lab, Oliven geschwärzt (E579). Sucuk-Wortlaut und Tomatensauce-Rezeptur (Wasser, Sonnenblumenöl, Salz dazu) von Taib bestätigt. **271 setzt ein:** Kennzeichnungsfelder nach Gerichts-Muster, `sides.marks`-Anzeige (Form mit Taib), die drei Folgen, {klassen}-Ableitung um Beilagen erweitern.


## 11.46 Auftrag 271 — die Beilagen-Kennzeichnung

**Gelandet, sechs Commits (33c291f → 00ea801), FAIL(1) diet 24, zehn grün.** `src/content/sides.json` mit 12 Datensätzen im mark-Schema, über `id` an die Copy-Items gebunden; Wörterbuch 197 Einträge (155/27/15) im selben Commit; die drei 264b-Gegenproben grün→rot→grün; Anzeige als `<details>` im `<dd>` ohne Skript mit drei Bau-Wächtern (id ohne Datensatz, Datensatz ohne Item, Sprachzweig-Drift). **F1:** 14 Gerichte (6 Manti + 8 Co's) tragen Pesto-Ei und Pesto-Cashew. **F2:** 5 Salate „(Weizen in Röstzwiebel, Pastırma)“ — Taib (2. September): Pastırma war dort bisher nicht wählbar, wird aber aufgenommen; die Seite bleibt so. **F3:** Sojajoghurt-Spur nur an der Beilage. `/zutaten/`: sechs abgeleitete Klassen über eine Kanontafel `additiveClasses` (startsWith, wirft bei ≠1); {vorkommend}/{fehlend} unverändert 8/6. `sprache` exakt auf der Vorhersage (775 · 768/6/1 · 769/6 · innerhalb 3 · unverwendete 0), `sprachrest` 82 Baseline. anrede-Sollwert 14→15 nachgezogen (00ea801) — richtig, nicht übergriffig.

**Meine Fehler:** ⑴ Die abgenommene Aufnahme trug 12 statt 15 Datensätze — beim Zusammenschreiben der Vollfassung habe ich **Oliven und Jalapeños verloren**, die in der Sechser-Fassung standen; Petersilie fehlte immer. ⑵ In §2 habe ich behauptet, Taib habe die Namen der Gewürzmischungs-Bestandteile freigegeben („nur Mengen unveröffentlicht“) — **erfunden; Phase 2 sagt das Gegenteil.** Die vier Namen stehen seit 271 in `sides.json` und in der Commit-Geschichte; 273 nimmt sie aus Daten UND Geschichte, bevor der erste Push das Haus verlässt.

**Meldeliste 271:** pending.mjs-Doppeldefekt (Klammern im ersten Argument; MUSTER_EN nur direkt hinter `"en":`) — vorbestehend, nicht in gates.mjs gebündelt · Wörterbuch-Tafel zusatzstoffe mischt Groß/Klein im Englischen · doppelte Gruppen-Einträge (bulgur-bites: Ei (Mayonnaise) UND Ei (Pesto-Rosso-Sauce)) → 273 legt gleiche Gruppen zusammen · **kommentar-Restbestand steht exakt an der Decke 187** — die nächste unbelegte Verhältniszahl macht das Gatter rot · Pastırma-Klassen in der Aufnahme teils nur mit E-Nummer, der /zutaten/-Satz verspricht Stoffnamen → 273.

## Infrastruktur, 2. September nachmittags — DNS umgezogen, GitHub angelegt

**Die DNS-Zone liegt bei Cloudflare, aktiv seit 17:25.** 19 Einträge 1:1 übernommen — der Scan fand 13, sechs von Hand (bestellen, tasks, www.tasks, drei DKIM) —, **alle mit grauer Wolke („DNS only“)**; Nameserver `chris.ns.cloudflare.com` / `nelly.ns.cloudflare.com` bei IONOS eingetragen, IONOS-Zone stillgelegt. Mail läuft unverändert über die IONOS-Ziele (MX, SPF, DKIM, DMARC, Autodiscover). Die orange Wolke kommt erst mit dem Livegang, nur für die Einträge auf Pages. **Taibs drei Proben bestanden (2. September, 17:42):** Mail hin und zurück, `bestellen` mit Schloss, `www` zeigt den Shop — der DNS-Umzug ist abgeschlossen, ohne Aussetzer. Cloudflare-Tarif: Free — reicht auf absehbare Zeit; Cloudflare Registrar als späterer Ausweg aus IONOS notiert.

**GitHub:** Konto auf business@mantiandco.com, privates Repository **`mantiandco/website`** (leer, ohne README; Taibs Wahl „main“ auf meinen Einwand hin — Zweigname — zu „website“ umbenannt). **Push erfolgt mit 273 (2. September, ~18:30): `origin/main = b72d53b`; Schlüssel im GitHub-Konto hinterlegt.** Seither endet jeder Auftrag mit `git push origin main` — Grundregel. Im Konnektor-Verzeichnis von Claude.ai gibt es keinen GitHub-Konnektor (gesucht, 2. September); der Weg bleibt Berichte + Auszüge.


## 11.47 Auftrag 273 — Beilagen-Nachtrag, Rezeptur-Rückbau, erster Push

**Gelandet.** Gewürzmischung in `sides.json` nur noch „Gewürze“; Oliven („Oliven, geschwärzt“ / „Olives, blackened“ — Kenntlichmachung im Namen, damit sie vor dem Aufklappen sichtbar ist), Jalapeños, Petersilie als Datensätze → 15 Aufklapper; Pastırma-Klassen mit Stoffnamen; 14 Zusammenlegungen gleicher Gruppen (6× Schalenfrüchte, 8× Ei — „Ei (Mayonnaise, Pesto-Rosso-Sauce)“); Röstzwiebel-Weizen-Klammer an 6 Manti-Gerichten (Taib: Röstzwiebeln zu Manti ja) — 11 Gerichte tragen sie. `sprache` exakt (784 · 777/6/1 · 778/6 · innerhalb 3 · Wörterbuch 201). **Geschichte:** Bundle `~/Desktop/MANTI/site-light-vor-273-teil6.bundle` (354 MB), dann `git filter-repo --replace-text --replace-message` — 7 Blob- und 2 Botschafts-Regeln (Claude Code ergänzte die Botschaften selbst, weil sein §2-Commit-Text die Nadeln nannte); Nachweis: log -S über alle fünf Formen 0, 453 Commits unverändert, HEAD-Baum byteidentisch. **Alle Commit-Hashes vor 273 §6 sind seither historisch** (Zuordnung im 273-Bericht, z. B. 00ea801→6491ecd, c0b9020→…); das Gedächtnis zitiert die alten — kein Fehler. **Push:** Identität lokal gesetzt, Geheimnisprüfung ohne Fund (.git 361 MB, größter Blob pf-teller.psd 10,6 MB), SSH-Schlüssel ed25519 mit Passphrase im Schlüsselbund (Notizdatei `~/.ssh/passphrase-273-notiz.txt` — Taib übernimmt sie in den Passwort-Manager und löscht sie), `ssh -T` grüßt mantiandco, `origin/main = b72d53b`. Alte Commits tragen die automatische fritz.box-Adresse — gepusht, bleibt.

**Zwei Rote, gemeldet, in 274:** ⑴ **budget FAIL(2)** auf `/en/vegan/` und `/en/vegetarian/`: „LCP-Bild nicht wiegbar“ — die fünf Läufe nennen abwechselnd golden-harvest-280.avif und natures-palette-280.avif (je ~10 kB), also kein wiegbarer Median; LCP 804/824 ms, CLS 0, JS 3,0 kB — Messlücke des Gatters, kein Seitenfehler; deutsche Pendants grün; reproduziert im Einzellauf. ⑵ `wissen/manti.json` Z. 188 (+en) — „With us, both come in the spice blend“ — schreibt der Mischung Sumach und Minze zu; kollidiert mit der Geheimnis-Regel vom 2. September. **Ferner:** F3 gilt als entschieden (Sojajoghurt-Spur nur an der Beilage — Vorgabe 271, unwidersprochen) · kommentar-Restbestand exakt an der Decke 187 (Ratsche, gewollt) · Aufnahme-Überschrift sagt „dreizehn“, Datei hat 15 · pending.mjs-Doppeldefekt, nicht in gates.mjs · Standort.astro:135 · zusatzstoffe-Groß/Klein. Claude Codes eigener Fehler, nacherhoben: `| tail -60` hatte die Gattertafel angeschnitten — Teil 1 ist die echte.


## 11.48 Auftrag 274 — Frischklon-Bautest, zwei Rote, Pages-Einstellungen

**Gelandet, origin/main = f0e45f5, FAIL(1) diet.** **Frischklon baut byteidentisch:** Klon von origin, `npm ci`, `npm run build` (= Node-Vorprüfung gegen .nvmrc + `astro build`, keine Gatter), 629 Dateien, ein Hash über alles identisch zum Hauptbaum; Fehlliste leer; `src/assets/plates/` steht in .gitignore, existiert aber nirgends. `npm ci` läuft durch, aber nicht warnungsfrei: 8 Audit-Funde (1 low, 7 high) in sharp/libvips (Fix = sharp 0.35, Bruchwechsel) und 5 Pakete mit gesperrten install-scripts — Bauzeit-Bibliotheken, nicht auf der Seite; Backlog. **budget-Gatter:** bei wechselndem LCP-Kandidaten wird der schwerste gewogen; der Wechsel selbst ist lastabhängig (zwei flächengleiche Kartenbilder oberhalb der Falte auf /en/vegan/, /en/vegetarian/) und trat im Neulauf nicht auf — Gegenproben über den Zwischenspeicher belegt. **Wissensseite:** Zuschreibung von Bestandteilen an die Gewürzmischung entfernt — **aber mein Ersatzsatz hat die Melted-Heart-Ausnahme geschluckt** („— außer bei Melted Heart, das ohne auskommt“); „jeder Portion“ ist zu breit → 275 stellt sie wieder her. Claude Codes eigener Fehler, selbst gemeldet: `tail -15` schnitt die npm-audit-Zusammenfassung ab (zweites Mal diese Klasse).

**Pages-Einstellungen (gültig, eingetragen):** Preset Astro · `npm run build` · `dist` · Root leer · `NODE_VERSION=24.20.0` (die Vorprüfung verlangt exakt die .nvmrc-Fassung) · `PUPPETEER_SKIP_DOWNLOAD=1` · keine weiteren Variablen · kein Netzzugriff im Bau · Gatter laufen nie auf Pages, nur lokal vor dem Push.

## Cloudflare Pages läuft (2. September, 22:23)

Projekt **`website`**, GitHub-App auf das eine Repository beschränkt, Produktionszweig main, **Vorschau `https://website-4bu.pages.dev`**, erster Bau grün in vier Minuten. **Jeder Push löst einen Neubau aus.** Keine Custom Domain — das ist der Livegang. Erwartung für 275: pages.dev liefert byteidentisch zu dist; Cloudflare setzt auf *.pages.dev üblicherweise `X-Robots-Tag: noindex` — messen, nicht annehmen. **Datenschutz-Absatz Hosting entworfen** (`Datenschutz-Absatz-Cloudflare.md`, de/en, Fakten per Websuche belegt: Cloudflare Germany GmbH München / Cloudflare, Inc. USA, DPF-Zertifizierung, DPA im Dashboard unter Legal zu bestätigen) — Anwalts-Gegenlese beim AGB-Mandat; Voraussetzung: Taib bestätigt das DPA im Cloudflare-Konto.


## 11.49 Auftrag 276 — Datenschutzerklärung und Getränke, und der Livegang

**Gelandet, fünf Commits (b3816a7 → c503d21), Vorschau nach 95 s.** Datenschutzerklärung 13 Ziffern de/en, Stand 3. September 2026, Descriptions 155/152; Canonicals absolut auf `https://www.mantiandco.com/`. **Alle 14 Getränkelisten** in `drinks.json`, Wörterbuch 201 → **247**; Kenntlichmachung § 5 LMZDV als neues Feld `marking`, **als offene Zeile unter dem Flaschennamen** (Claude Codes Entscheidung, richtig: eine Kenntlichmachung hinter einem Klick wäre keine); Kanontafel 8 Klassen; /zutaten sagt „… und beim Getränk“. **Zwei Funde von Claude Code:** thirdparty FAIL(8) — die Fremdlinks der Datenschutzerklärung ohne target/noopener → behoben; **`sprache.mjs` las die Getränke nie gegen das Wörterbuch** → geschlossen (186 Kennzeichnungsfelder). kommentar 187/187 — Decke exakt erreicht.

**Meine Korrektur, groß:** „diet 24 → 0“ war falsch. **Die 24 roten Ernährungsangaben hingen nie an den Getränken** — das Gedächtnis trug seit dem 25. August „Auskunft ohne Zutatenlisten zu den Flaschen“, und das stimmte nicht. Es sind **21 Zutaten (24 Vorkommen) in sieben Gerichten mit Chip: Fermento, Pommes frites, Süßkartoffel-Pommes, Nudelsalat, Kartoffelsalat, Schoko-Soufflé, Cheesecake** — Zutaten, deren Name nicht sagt, ob der Chip stimmt (z. B. Emulgator E471 in Margarine beim vegetarischen Cheesecake). Herstellerurteile-Klasse, wie die Croutons. Das Gatter bleibt zu Recht rot; die Chips stehen auf Taibs Aussage. **277 liefert die 21 als Liste zum Einsammeln.**

## LIVEGANG — 3. September 2026, 06:00

Reihenfolge, wie gelaufen: 276-Freigabe (Datenschutz auf der Vorschau) → Pages → Custom domains `www.mantiandco.com` und `mantiandco.com` (alte Einträge A @ 216.150.1.1 und CNAME www → Vercel ersetzt; beide jetzt orange auf Pages) → Redirect-Regel „Redirect from root to WWW“ (Wildcard `https://mantiandco.com/*` → `https://www.mantiandco.com/${1}`, 301, query string erhalten) → sechs Kontrollen im privaten Fenster bestanden (www eure Seite, Apex springt, /speisekarte/, Bestellknopf → Shop, /datenschutz/, Mail). **Was noch nicht gelaufen ist:** Search-Console-Sitemap (Adresse aus robots.txt), Foodamigos-Info, Testbestellung zur Öffnung 10:30 — DNS-Rückweg bereit.

**Backlog nach dem Start (277 ff.):** ⑴ die 21 Herstellerurteile (Liste aus dem diet-Gatter) · ⑵ Schreibweise Malatyali/Malatyalı — Impressum gegen Datenschutz; maßgeblich ist das Handelsregister (Taib) · ⑶ `pages.dev` ohne noindex — Canonical deckt SEO; sauber wäre eine Access-Policy auf dem Pages-Projekt (nur pages.dev geschützt, Custom Domain offen) · ⑷ kommentar-Decke 187/187 — Altbestand abbauen, sonst reißt der nächste Verhältniswert · ⑸ sharp-Audit (8), pending.mjs-Doppeldefekt + Bündelung, Standort.astro:135, zusatzstoffe-Groß/Klein, „acid citric acid“-Form · ⑹ Foodamigos: noindex auf bestellen.* (B1) nachhalten, Logo-Rückweg-Frage · ⑺ Rechtstexte zum Anwalt: Shop-AGB und Widerruf (Entwurf Teil 3.2), Datenschutz-Gegenlese · ⑻ Nährwerte-Entscheidung, video, Restaurant-Horizont · ⑼ `.claude/launch.json` untracked; Claude Codes „Gedächtnis-Eintrag ergänzt“ (276, Teil 6) im nächsten §0 prüfen — Ein-Schreiber-Grundsatz.


## 11.50 Auftrag 277 — erster Betriebsauftrag

**Gelandet, vier Commits (e232424 → ef310d9), Push 12:29, live nach 73 s** (Mischzustand beim Ausrollen bis 117 s — normal). Zwölf Gatter: `pending` gebündelt (AUFRUF-Regex verträgt jetzt Klammern, Zeilenumbrüche, Helfer; Gegenzählung 6 = 6, MUSTER_EN über Einrückungs-Stapel). kommentar-Decke **187 → 167**: 20 Prosa-Duplikate von @kontrast-Annotationen entfernt (die Abschrift im Satz veraltet still, die Annotation rechnet das Gatter nach). Wörterbuch-Klassen kleingeschrieben. `.claude/launch.json` war Claude Codes eigene Dev-Server-Konfig aus 276 — Vorschlag: löschen, `.claude/` in .gitignore (278). Das Gedächtnis war fremdfrei; Claude Codes „Gedächtnis-Einträge“ liegen in seinem Auto-Gedächtnis unter ~/.claude/projects/…/memory/, nie in unserer Datei. Meine Kennung „8726e9b7“ war ein SHA-Präfix, kein Commit — Claude Code suchte danach; künftig „Prüfsumme beginnt mit“ statt „Fassung“.

**Die 24 roten diet-Angaben, aufgeschlüsselt (Tabelle im 277-Bericht):** Das Gatter liest den Klassenkopf vor der Klammer („Säuerungsmittel (…)“), und Klassen wurden in 234 absichtlich aus dem Verzeichnis genommen, weil eine Klasse nichts über Herkunft sagt — die Klammer engt ein, begründet aber nie. Ergebnis: **~19 der 24 sind Verzeichnisentscheidungen** (Kaliumsorbat, Calciumchlorid, Dinatriumdiphosphat, Natriumcarbonat, Paprikaextrakt, Guarkernmehl, Natriumcitrate, Natriumalginat, Citronensäure mit C, modifizierte Stärke, Kräuter, Gewürzextrakte, Schokolade mit Unterzutaten … — Herkunft nicht offen, nur der Eintrag fehlt), **3 echte Herstellerfragen: Speisewürze (Kartoffelsalat — Eiweißhydrolysat pflanzlich oder tierisch), E471 in der Margarine und „natürliches Aroma“ (beide Cheesecake)**, dazu bedingt Xanthan (Pommes, Süßkartoffel-Pommes, Cheesecake — Nährmedium). **Für Taib heißt das vier Produkt-Anfragen:** Kartoffelsalat-Lieferant (Speisewürze), Cheesecake-Lieferant (Margarine-E471, Aroma), Pommes-Lieferanten (Xanthan) — jeweils: „Ist das Produkt vegan/vegetarisch? Herstellererklärung.“ Die 19 setzt 278 als Verzeichnisentscheidungen mit Begründung je Stoff.

**Erster Live-Tag, gemessen:** kein HSTS (`strict-transport-security` fehlt — im Dashboard einschaltbar, Taib) · **Soft-404: unbekannter Pfad liefert 200** — eine 404-Seite fehlt (Pages nutzt `404.html`, auch je Verzeichnis für /en/) → 278 · `http://` braucht zwei Sprünge (Always-Use-HTTPS vor der Root→www-Regel) — hinnehmbar · Köpfe: nosniff, referrer-policy, kein x-robots-tag, cache-control max-age=0 für HTML (DYNAMIC), Assets gehasht · robots.txt live = eigene Datei, Cloudflare-Block weg, sitemap-index 200 · pages.dev weiter 200 ohne noindex (Canonical deckt) · Kanontafel `additiveClasses` en groß mitten im Satz („today Preservatives, Acids …“) → 278 klein. **Farben:** Taib erwog graueres Dunkel und beigeres Hell — Entscheidung 3. September: bleibt (#20201f / #f6f4ec); Begründung: Logo klein, auf Fotos und im Druck braucht das Fast-Schwarz, Grau frisst dem Rot die Bühne, Grau auf Beige kippt ins Kartonhafte.


## 11.51 Auftrag 278 — 404-Seite, Stoffurteile, Kleinvieh

**Gelandet, sieben Commits (4429672 → 0e63948), live nach 115 s.** **404:** eigene Seiten `src/pages/404.astro` + `en/404.astro` über `NotFound.astro` — bewusst NICHT über den 268-Erzeuger (Astro schreibt nur `/404` als `404.html`; eine Route in routes.ts hätte Adresse, Sitemap, hreflang und zählte in acht Sollwerte); Hook `errorPages` zieht `en/404/index.html` → `en/404.html`; Pages nimmt die 404.html je Verzeichnis — live belegt: `/gibt-es-nicht/` und `/speisekarte/gibt-es-nicht/` → HTTP 404 deutsch, `/en/does-not-exist/` und `/en/menu/nope/` → 404 englisch (vorher überall 200). noindex, kein hreflang, kein Umschalter, Copy-Block `notFound`. `fehlerseiten()` in routes.mjs zählt beide für sprache/thirdparty/budget/a11y. **Stoffurteile:** 21 VOCAB-Einträge mit Herkunft; die Klammer entscheidet allein, wenn der Kopf ohne Urteil ist — unbekannter Stoff → rot mit Nennung (Gegenprobe „Erfundinol“ bei jedem Start); **diet 24 → 6**, exakt vorhergesagt. Kanontafel en klein. anrede-Sollwert 50 → 53 Bauteile. **Meldeliste:** halal-Vorbehalt an Vanillearoma/Gewürzextrakten (Alkohol als Hilfsstoff; heute kein halal-Gericht betroffen) · 404-`<title>` ohne „| MANTI & CO.“ → 279 · contrast/hover/teilbild prüfen Fehlerseiten nicht (routenbasiert) · Z. 2429 hier nennt „Malatyalı“ im Backlog-Wortlaut — Zitat, bleibt.

## Erste Woche live — Taibs Messungen (4. und 8. September)

PageSpeed mobil (langsames 4G): **Startseite 100/100/100/100, Speisekarte 99/99/100/100**, FCP 0,9 s, LCP 1,4 s, TBT 0, CLS 0; Vergleichsseite (Smashburger Berlin) 94/100/96/100. **Drei Funde:** ⑴ Barrierefreiheit: „Überschriftenelemente nicht in fortlaufender Reihenfolge“ — `h3` „Combos“ auf /speisekarte/ ohne `h2`; unser a11y-Gatter prüfte nur WCAG-Regeln, `heading-order` ist axe-„best practice“ → 279 misst alle Dokumente und nimmt die Regel ins Gatter. ⑵ „Agentisches Browsing“ 2/3 auf der Startseite: die `llms.txt` entspricht nicht der Empfehlung (keine H1, keine Links — Datei aus einer frühen Phase); auf Unterseiten gilt die Prüfung nicht (2/2). ⑶ „Leistung auf der Nutzerseite“ = CrUX-Felddaten echter Chrome-Besucher über 28 Tage — erscheint erst mit Traffic, fünf Tage nach Livegang zu Recht leer. **Taibs Gestaltungswunsch:** Gerichtsbild auf der Gerichtseite mobil randlos (heute schmaler Rand links/rechts) — entschieden, mit `sizes`-Anpassung. SEOptimer-Empfehlungen (Link Building, Analytics, Pixel, Social) sind Vorlagenkram; Link-Aufbau (Google-Unternehmensprofil, Lieferando-Profil, lokale Verzeichnisse) ist der einzige mit Substanz — später.


## 11.52 Auftrag 279 — Überschriften, llms.txt, randloses Bild

**Gelandet, sechs Commits (c366cb9 → 41254f7), live nach 92 s.** **Überschriften:** Messung über 86 Dokumente — 4 Verstöße, zwei Bauteile: `Menu.astro` (Gruppen fest h3, Kacheln h4) und `Process.astro` (Schritte fest h3); jetzt je eine Stufe unter `level` abgeleitet. Weil `base.css` nach Tag gestaltet, kamen Klassen hinzu (`.course__title`, `.step__title`, `.card__name` mit `--ausgleich`); Beleg: Markup ohne Stilblock identisch, **Screenshots 0 Pixel verschieden** bei 375/390/700/1280 px für acht Dokumente. Gatter: Regelsatz zentral `scripts/axe-regeln.mjs`, `heading-order` + `page-has-heading-one` aktiv (axe wertet `rules[id].enabled` vor der Tag-Auswahl), Gegenprobe über `axe-probe.mjs`. **llms.txt:** *Es gab keine* (live 404) — meine Behauptung „aus einer frühen Phase“ war eine Annahme. Neu: Hook `llmsTxt` erzeugt sie beim Bau aus routes.ts/meta.json/dishes.json/site.ts, Gliederung in `src/data/llms.mjs`, 94 Zeilen, 79 Links (12 Routen × 2 + 27 Gerichte × 2 + Shop), Titel aus routes.ts, Beschreibungen aus meta.json; Wächter wirft bei unzugeordneter indexierbarer Route; thirdparty prüft mit Sollwert 79. **Bewusst ausgelassen, Taibs Entscheidung offen: Impressum und Datenschutz** (Empfehlung: aufnehmen, Rubrik „Rechtliches“). **Bild randlos:** unter 47,94 rem `inline-size: calc(100% + 2·gutter)`, `sizes` 100vw; live 390×260 ohne Querlauf, CLS 0. **Folge:** DPR 2 lädt jetzt die 1080er (123 KB) statt der 720er (53 KB) — keine 800er-Stufe im srcset; budget misst nur 1440 px/DPR 1 → **mobile Bildlast ohne Gatter** (280). 404-Titel mit „| MANTI & CO.“. **HSTS live: max-age 15552000.** Ein Review-Workflow (47 Agenten) fand vor dem zweiten Lauf: `.card__name` hätte /vegan/ verändert (h2 verlor `balance`, nur bei 375/700 px sichtbar — die Gatterbreiten 390/768/1440 sehen es nicht), falsche Kommentare, llms-Handliste ohne Vollständigkeitsprobe — alle behoben. Claude Codes eigener Fehler: teilbild las `site:` textlich aus astro.config, seine Konstante riss den ersten Lauf; behoben. **Meldeliste:** toter `level="h2"`-Zweig in Menu/Process · contrast/hover ohne Fehlerseiten.


## 11.53 Auftrag 280 — Bildstufe, mobiles Budget, llms.txt Rechtliches

**Gelandet, sechs Commits (4e72004 → 5484339), live nach 61 s.** **800er-Stufe** in Scene (480/720/800/1080; 800 statt 780: bedient 390 und 375 px ohne Hochziehen): 390 px DPR 2 lädt jetzt 68,9 kB statt 120,6; Pipeline 30 s, +66 Dateien; Rezeptprobe: neu kodierte 720er byteidentisch zur committeten — die 800er sind echte Pipeline-Ausgaben. **Mobiles budget-Profil:** 390 × 844 px, DPR 2, dieselbe Drosselung; Zeilen LCP/CLS/JS/LCP-Bild mobil; Grenze **LCP-Bild mobil 90 kB** (größte 800er 73 kB + ein Fünftel, gerundet — die 1080er läge darüber, genau die Regression, die rot werden soll); alle 86 Routen; Zwischenspeicher je Label@Profil, **schreibt nach jedem Ziel, abgebrochener Lauf wiederholt sich einmal** (Lehre aus einem 80-Minuten-Verlust bei Taibs Netzausfall). Voller unkachierter budget-Lauf beider Profile: **90 min**; mit Speicher Sekunden. **Fund:** Startseiten mobil rot — Heldenbild `hero-the-original-840.avif` 126 kB, LCP 2240 ms (> 1800): die Scheibe braucht 578 px, Hero-Stufen sind 560/840/1120 → 840er; nicht geändert (Gestaltung, außerhalb §1) → 281. Weitere Meldungen: 414/430-px-Handys laden Scene-1080er (860er-Stufe fehlt) · `Ingredients.astro` trägt denselben toten level-Zweig · Stufenliste doppelt (Scene.astro, derive-plates.mjs). llms.txt 83 Links (Rubrik Rechtliches), Sollwert aus derselben Liste. Menu/Process: level-Prop weg, Ebenen fest, 0 Verstöße.

**Entscheidung für 281 (10. September):** 600er (Hero) und 860er (Scene) ergänzen, Stufenliste an eine Stelle, Ingredients-Zweig raus; **dann messen: bleibt die mobile LCP der Startseite unter 1,8 s, bleibt die Grenze; sonst gilt mobil Googles „gut“ = 2,5 s** (1,8 s war selbst gesetzt; Desktop behält 1,8) — im Gatter kommentiert, keine Verhältnisangabe.


## 11.54 Auftrag 281 — Heldenbild mobil, Stufen an einer Stelle

**Gelandet, sechs Commits (ecfd031 → 57d63e9), live nach 93 s.** `src/data/bildstufen.mjs` (+ .d.mts) hält CARD/HERO/SCENE, gelesen von plate.ts, Scene.astro, derive-plates.mjs (vorher drei Listen); der Bau prüft jede srcset-Datei — Gegenprobe: Stufe 900 nur in der Liste → Bau hält mit Fundstelle und Anweisung. Pipeline-Vollauf 185 s, nur 68 neue Dateien, kein Bestandsbild verändert (Rezeptprobe gilt für die ganze Bibliothek). **Stufen:** Hero 560/600/840/1120, Scene 480/720/800/860/1080. Ergebnis DPR 2: / @ 390 → 600er 86,9 kB (vorher 126,4); the-original @ 414/430 → 860er 80,7 kB (vorher 120,6). **Rest:** Hero @ 414/430 px DPR 2 braucht 612/636 px → weiter 840er (126 kB) — 640er-Stufe deckt beide (282); DPR 3 lädt 1120er (168 kB). **Die Messung entschied die Grenze:** / 1 848 ms, /en/ 1 840 ms mobil (fünf kalte Läufe) → **`BUDGET.lcpMobil` = 2500 ms**, Desktop 1800; heroMobil 90 kB bleibt (600er 86,9 — 3 kB Luft: beim nächsten Heldenmotiv Grenze neu herleiten). Ingredients.astro: level-Zweig weg, h1/h2 fest. Meldungen: Stufenprüfung findet fehlende, nicht überzählige Dateien · `astro check` läuft in keinem Gatter · budget-Vollauf 90 min war unvermeidlich (§4 änderte budget.mjs, das im Speicherschlüssel steht).

**Betriebsänderungen (Taib, 9. September) → 282:** Öffnungszeiten **täglich 11:00–21:00** (bisher Mo–Fr 10:30–21:30, Sa–So 12:00–21:30) — Quelle `site.ts`, Ausgaben Standortseite, Fußzeile, JSON-LD, beide Sprachen; außerhalb der Seite Google-Profil, Lieferando, Foodamigos-Shop (Taib, am Tag des Livegangs von 282). **Der Kennzahlen-Streifen unter dem Startseiten-Titel** („Lieferando 4,9 bei über 500 Bewertungen · Google 5,0 bei über 50 · 14 Gerichte vegan, 9 vegetarisch · Mo–Fr ab 10:30 … · Lieferung und Abholung“) **fällt ganz weg**, samt seiner Daten (Bewertungszahlen mit Standdatum — Drift-Risiko erledigt sich); die Google-Zitate (Voices) bleiben. Strukturierte Daten auf AggregateRating prüfen — was der Gast nicht sieht, darf Google nicht bekommen.


## 11.55 Auftrag 282 — Öffnungszeiten, Kennzahlen-Streifen, Hero 640

**Gelandet, fünf Commits (f4b5a59 → 4aa3075), live nach 62 s.** **Zeiten:** ein Band Mo–So 11:00–21:00 in `site.ts`; vorher stand „10:30“ in 84 Dokumenten (JSON-LD im Kopf jeder Seite), nachher 0× alte Zeiten, 86× 11:00/21:00. Ausgaben: Startseite „Mo–So 11:00–21:00“ / „Mon–Sun 11:00–21:00“, Hinweissatz „Montag bis Sonntag, ohne Ruhetag.“ / „Monday to Sunday, no closing day.“, Bestellabschnitt „Mo–So ab 11:00“, JSON-LD eine OpeningHoursSpecification mit sieben dayOfWeek. Die Fußzeile trägt keine Zeiten; `hoursNote.ruhetag` bleibt in beiden Sprachen pending by design (Ruhetag-Fall). **Streifen:** Proof.astro, Copy-Block `home.proof` (4 Schlüssel), site.ts `ratings/reviewsCheckedAt/countFloor/ratingFloors`, legal-Stufe Bewertungsfrist, i18n-Eintrag, anrede 53 → 52 — alles weg, 0 Restfundstellen; `menu().counts`, `hoursBand/hoursPhrase`, Voices bleiben. **AggregateRating war nie im JSON-LD** — Schema.astro schließt Plattform-Bewertungen bewusst aus. Screenshots: Seitenhöhe −107 px (1280) / −142/−167 (390), Bestseller rückt sauber auf. **Hero 640er:** 414/430 px DPR 2 laden 94,9 kB statt 126,4 (über heroMobil 90, aber ungemessen — Gatter misst bei 390). sprache 833 (proof-Hülle weg). Meine §1-Fehler: Fußzeile ohne Zeiten, Standortseite zeigte Tage statt Bänder, ruhetag-Hülle war nie zu schließen.

## 11.56 Auftrag 283 — Standortseite: Zeiten in einer Zeile

**Gelandet, vier Commits (9373b01 → f2d2808), live nach 60 s.** `Standort.astro` zeichnet je Band statt je Tag: `<table class="hours">` mit einer `<tr>` je Band — „Mo–So 11:00–21:00“ / „Mon–Sun 11:00–21:00“; bei mehreren Bändern je Band eine Zeile. Weiche `alleTageBelegt` einmal in `lib/hours.ts`, gezogen von Location.astro und Standort.astro. Entfernt: `standort.days` (14 Tagesnamen) samt Schema, `hoursOn()`. JSON-LD unverändert. sprache 833 unverändert — `days` war ein Feld in der Block-Hülle, kein Schlüssel. **Neu auf der Standortseite: der Hinweissatz „Montag bis Sonntag, ohne Ruhetag.“** — er stand dort nie; mein Auftrag sagte „bleibt darunter“, Claude Code baute den beschriebenen Zustand mit der vorhandenen Hülle; Taib entscheidet, ob er bleibt. Meldungen: Bau-Abbruch bei einem Tag ohne Band entfällt (Lücke zeigt sich als pending-Warnung) · bei 1280 Zeitenspalte deutlich kürzer als Adressspalte · **Kanten-Verbreitung: de und en gingen ≈ 30 s versetzt live — bei Live-Gegenproben beide Sprachen einzeln abfragen.**

## 11.57 Aufträge 284/285 — Wortmarke für die E-Mail-Signatur

**Gelandet: 69b6ce0 (300 × 150, 7,4 kB) und 64bc0d5 (800 × 400, 22,0 KB, Stufe 9), live je ≈ 70–80 s** unter https://www.mantiandco.com/img/brand/wortmarke-mail-hell.png. Quelle am Bild entschieden: `NewLOGO-Wortmarke.svg` = „MANTI / & CO.“ zweizeilig (viewBox 2471,18 × 1236,8) — **die Namen in `brands/MC/` sind nicht vertauscht; Abschnitt 8.9 ist am Bild und in git widerlegt** (Rollen gedreht, „einzeilig“ falsch, 2446,38 überholt) und wartet auf Taibs Berichtigung. Rezept: sharp, currentColor → #f6f4ec, `resize({width})`, `png({compressionLevel: 9})`, kein density-Argument; kein Skript im Repo (Meldung). Gegen die gelieferte 300er: gleiche Maße, alle deckenden Pixel gleich, Kanten-Antialiasing, `caBX`-Chunk (C2PA) 5,8 kB in der gelieferten. **Auslieferung unter gleichem Namen:** Pages liefert `/img/` mit `max-age=14400, must-revalidate`, Kante REVALIDATED je Abruf → neue Datei sofort; Browser bis 4 h alt, Mail-Proxys länger; **ohne width/height in der Signatur erscheint die 800er in 800 CSS-px, auch in versandten Mails** (Taib prüft die Signatur). Kein Gatter kennt Dateien unter `public/img/`, die keine Seite lädt. Nummern: Taibs Stand vergab „(284)“ an den Feinschliff; die Commits tragen 284/285.

**Entscheidung (Taib, 11. September) → 286:** Hinweissatz ohne „Ruhetag“: `location.hoursNote.alleTage` de „Montag bis Sonntag.“, en „Monday to Sunday.“; Startseite und Standortseite, beide Sprachen; „Ruhetag“/„closing day“ danach 0× im dist — die pending-Hülle `hoursNote.ruhetag` (Ruhetag-Fall) bleibt unberührt.

---

# 12. Rechtstexte und Rechtslage

## 12.1 Ausgangslage und wer haftet

**Foodamigos hat den gesamten Webauftritt gestellt** — Unternehmensseite und Bestellstrecke. Beide Rechtstextsätze stammen aus derselben Vorlage.

**Der entscheidende Hebel steht in den Platform Terms.** Ziffer 3.2: *„Der Partner ist allein verantwortlich für sämtliche Inhalte und Rechtstexte. Foodamigos nimmt keine inhaltlich-rechtliche Prüfung vor."* Ausdrücklich einschließlich Impressum, Datenschutz, LMIV-Pflichten und Preisangaben. Ziffer 3.6 verpflichtet den Partner, alle Verbraucherinformationen bereitzustellen.

**Damit haftet MANTI & CO. für Texte, die es nicht geschrieben hat — und hat zugleich das Recht, sie zu ersetzen.** Dieselbe Klausel, die die Haftung zuweist, begründet den Anspruch auf Austausch.

**Die Domain ändert daran nichts.** Ob die Bestellstrecke auf einer Fremddomain läuft oder unter einem Pfad der eigenen: Für die Verantwortlichkeit nach § 5 DDG und Art. 4 Nr. 7 DSGVO ist maßgeblich, wer Anbieter des Dienstes und Vertragspartner des Endkunden ist.

## 12.2 Eine Fassung, nicht zwei

**Datenschutz: ein Text auf `mantiandco.com/datenschutz`**, gegliedert in einen allgemeinen Teil, einen für die Website und einen für die Bestellstrecke. Die Bestellstrecke verweist darauf.

Begründung: Zwei getrennt gepflegte Texte laufen auseinander. Dasselbe Prinzip wie bei Preisen und Gerichtstexten — eine Quelle, alles andere verweist.

**Setzt voraus, dass Foodamigos verlinken statt hinterlegen kann.** Steht als Frage A3.5 in der Mail und ist damit ein Blocker.

**Impressum ebenfalls eine Fassung.**

**Nur die AGB bleiben getrennt, und zwar als zwei verschiedene Dokumente:** Nutzungsbedingungen für die Website (kein Vertrag) und AGB für die Bestellung (Kaufvertrag). Das ist keine Dublette, sondern zwei verschiedene Rechtsverhältnisse.

## 12.3 Die Mängel an den gelieferten Texten

**Impressum:** Verweis auf § 5 TMG statt § 5 DDG · „Inhaber: Taib Demirci" — bei einer GmbH falsch, korrekt sind beide Geschäftsführer · Handelsregister, Registergericht und Registernummer fehlen auf der Bestellseite · USt-IdNr fehlt · „Aufsichtsbehörde: Amtsgericht Mannheim" — ein Amtsgericht ist keine Aufsichtsbehörde · die Steuernummer 37007/21814 stand im Impressum und gehört dort nicht hinein · Hinweis auf die EU-Streitbeilegungsplattform, **die am 20. Juli 2025 eingestellt wurde** und zu entfernen ist.

**Datenschutzerklärung:** Nennt Foodamigos beziehungsweise Amigo Technologies als Verantwortlichen — für Bestelldaten ist es MANTI & CO. · ungefüllter Platzhalter „Datenschutzrechte aller Besucher von (die ‚Website')" · Verweis auf den „Data Protection Act 2018", britisches beziehungsweise irisches Recht · Verweis auf eine „Datenschutzkommission" statt auf den LfDI Baden-Württemberg · es fehlen Anschrift des Verantwortlichen, Speicherfristen, Zahlungsdienstleister und Drittlandübermittlungen · Stand Juni 2022 beziehungsweise Juni 2026.

**Cookie-Richtlinie:** `logLevel:*` und `foodamigos-test-key` als „unbedingt notwendig" eingestuft — beide dienen nicht der gewünschten Funktion und sind nach § 25 Abs. 1 TDDDG einwilligungspflichtig · `foodamigosauth` und `foodamigos-token` je zweimal mit unterschiedlicher Dauer und Kategorie · leere Browser-Hilfelinks · der Verantwortliche heißt „das Geschäft" ohne Namen · zu Stripe fehlt der Anbieter mit Anschrift, **Adyen fehlt ganz** · keine Rechtsgrundlage angegeben.

**AGB:** Ziffer 1 verweist auf eine „vorrangige Vereinbarung", **deren Bezugswort fehlt** — der Kunde kann nicht wissen, welche · Ziffer 11 wählt irisches Recht, nach Art. 6 Abs. 2 Rom-I behält der Verbraucher seinen Heimatschutz, die Klausel läuft leer und ist vermutlich selbst unwirksam · Ziffer 2 deckelt die Gesamthaftung auf 100 €, bei Verbrauchern nach § 309 Nr. 7 BGB vermutlich unwirksam · Ziffer 4 Linkverbot, nicht durchsetzbar · Ziffer 11 Gerichtsstand wahlweise, bei Verbrauchern gilt Art. 18 Brüssel-Ia · es fehlen sämtliche Regelungen zum Kaufvertrag: Vertragsschluss, Lieferzeit, Mindestbestellwerte, Zahlarten, Mängelhaftung · es fehlt der Hinweis auf das Nichtbestehen des Widerrufsrechts nach § 312g Abs. 2 Nr. 2 BGB · es fehlen die Verbraucherinformationen nach Art. 246a EGBGB.

**Der Kern:** Die vorhandenen AGB regeln nur den Systemvertrag, tragen aber die Überschrift „das Geschäft". **Für den Kaufvertrag über Speisen gibt es keine AGB.**

## 12.4 Stand der Entwürfe

**Datei:** `MANTI-CO-Rechtstexte-Entwurf.md`. Enthält Impressum, Datenschutzerklärung und Nutzungsbedingungen für die Unternehmensseite sowie Impressum, AGB, Verbraucherinformationen, Datenschutzerklärung und Cookie-Struktur für die Bestellstrecke.

**21 Stellen waren mit `⚠` markiert. Sie sind geklärt und eingearbeitet:**

| Geklärt | Wert |
|---|---|
| Beschäftigte | vier — § 36 VSBG greift nicht |
| Datenschutzbeauftragter | keiner bestellt, keine Pflicht nach § 38 BDSG |
| Öffnungszeiten | Mo–Fr 10:30–21:30, Sa/So 12:00–21:30 |
| Mindestbestellwert bei Abholung | keiner |
| Wechselgeld | Klausel gestrichen |
| Pfand | 0,08 € je Flasche, wird ausgewiesen |
| Treueprogramm | 1 Punkt je 1,00 €, ab 35 Punkten, max. 60 Punkte = 6,00 €, 90 Tage |
| Rabatte | befristete Aktionen, selbst angelegt |
| VerpackG | Mehrwegangebotspflicht greift nicht — keine Verkaufsfläche, Küche unter 80 m², vier Beschäftigte |
| Kartenanbieter | Google Ireland Limited |
| Instagram | nur verlinkt, nicht eingebettet |
| Servicegebühr | max. 0,99 € je Bestellung, im Warenkorb ausgewiesen |
| Grundpreis | wird bereits ausgewiesen — „(0,33 l, 10,61 €/l)" |

**Noch offen im Entwurf:** Hostinganbieter der Astro-Seite samt Art-28-Vertrag · Speicherdauer der Server-Logfiles · alles, was von Foodamigos kommen muss (Abschnitt 13) · die Fragen an den Anwalt.

## 12.5 Die Fragen an den Anwalt

1. **Rollenverteilung Art. 26 oder Art. 28** — der Widerspruch aus 13.2.
2. **Widerrufsrecht bei mitbestellten Flaschengetränken.** § 312g Abs. 2 Nr. 2 BGB greift bei Speisen; Getränke verderben nicht schnell.
3. **§ 7 PAngV bei Pfand.** Genügt „Inkl. 0,08 € Pfand" der Vorgabe, wonach Pfand **nicht** in den Endpreis einzurechnen ist?
4. **Formulierung zur automatischen Annahme der Bestellung.**
5. **Freitextangaben zu Allergien als Art.-9-Daten?**
6. **§ 11 PAngV bei Rabatten.** Für Speisen greift die Ausnahme des § 11 Abs. 3 PAngV (schnell verderbliche Ware), für Getränke nicht — dort wäre der niedrigste Preis der letzten 30 Tage Bezugspreis. Bei häufigen Aktionen wird der rabattierte Preis zum Bezugspreis.
7. **Einwilligungswortlaut nach § 7 UWG.** Für die Werbeansprache eigener Kunden. Ohne saubere Einwilligung ist die Kundenliste aus 2.9 rechtlich nicht nutzbar — und damit wertlos.

**Der Freund ist Rechtsanwalt und weiß, dass es ein KI-Entwurf ist. Taib übernimmt die Verantwortung ausdrücklich.**

**Reihenfolge:** Erst geben, wenn Foodamigos geantwortet hat. Sonst bekommt er einen Entwurf mit Lücken statt einen mit Fragen.

---

# 13. Foodamigos

## 13.1 Drei verschiedene Vertragspartner

| Quelle | Bezeichnung | Anschrift | Register |
|---|---|---|---|
| Anmeldeformular 10.02.2026 | Foodamigos GmbH | Am Hauptbahnhof 6, 53111 Bonn | — |
| Datenschutzerklärung alt | Foodamigos GmbH | Charlotte-von-Stein-Str. 2, 53177 Bonn | HRB 26506 |
| Datenschutzerklärung neu | **Amigo Technologies UG** | Charlotte-von-Stein-Str. 2, 53177 Bonn | HRB 26506 |

**Dieselbe Registernummer bei unterschiedlicher Rechtsform und Anschrift.** Vor Abschluss der Art-26-Vereinbarung zu klären — man kann keinen Vertrag mit einem Partner schließen, dessen Rechtsform ungeklärt ist.

Geschäftsführung laut Anmeldeformular: Artur Zvinchuk. Berater: Yasin Karaaslan.

**Konditionen:** Kickoff Pro 349 € netto einmalig · monatliches Abonnement umsatzabhängig, 19 € bis 329 € netto · Fahrerentgelt 5 € netto je Fahrt bei Nutzung der Foodamigos-Lieferstruktur · monatlich kündbar · Zahlungsdienstleister Stripe und Adyen.

## 13.2 Art. 26 und Art. 28 widersprechen sich

**Platform Terms Ziffer 9.1:** Foodamigos ist Auftragsverarbeiter, Verantwortlicher bleibt der Partner, ein AVV nach Art. 28 wird geschlossen — **der Link darauf ist ein leerer Platzhalter „(LINK)".**

**Datenschutzerklärung der Bestellstrecke:** Geschäft und FoodAmigos sind **gemeinsam Verantwortliche** nach Art. 26.

Beides zugleich ist nicht möglich.

**Anhaltspunkt für eine Doppelrolle:** Foodamigos erhebt nach Anlage Vergütung Abschnitt 6 eine eigene Servicegebühr direkt vom Endkunden und behält sie ein. Insoweit verfolgt es eigene Zwecke — das spricht für Art. 26, nicht für Art. 28.

## 13.3 Der Vorlagen-Befund

**Ein Vergleich mit Nhas Food 1993 GmbH (City Chicken, Berlin), ebenfalls Foodamigos-Partner, ergibt: Die Bestellseiten-Texte sind wortgleich.** Einschließlich der Schreibfehler — „Sessió" statt Sitzung, dreimal, katalanisch; „FoodAmgios" zweimal —, der leeren Verweise und des Stands Juni 2022.

**Folgerung:** Kein Einzelfall, sondern ein Fehler in der Vorlage. **Das erhöht die Aussicht auf Abhilfe erheblich** — ein Fehler bei einem Kunden ist Kulanz, ein Fehler in der Vorlage ist ein Produktmangel.

**Was Nhas besser macht, betrifft nur die Unternehmensseite** — selbst gebaut, eigener Hoster (Vercel), eigener Datenschutzbeauftragter, offensichtlich anwaltlich begleitet. Deren Datenschutzerklärung ist ein gutes Muster: jeder Dienst mit Anbieter, Anschrift, Rechtsgrundlage und Drittlandgrundlage, saubere Unterscheidung zwischen Einbettung und Verlinkung, Cookie-Tabelle mit konkreten Namen.

**Zwei Fehler auch dort:** Das Impressum verweist auf § 5 TMG statt § 5 DDG, und die notwendigen Cookies stützen sich auf Art. 6 Abs. 1 lit. f DSGVO statt auf § 25 Abs. 2 Nr. 2 TDDDG. Ein Muster, kein Vorbild.

## 13.4 Der `noindex`-Befund

**Eine Suche nach `site:www.mantiandco.com/speisekarte` liefert genau ein Ergebnis.** Titel: „order food online in Mannheim" — englisch, auf einem deutschsprachigen Auftritt. Beschreibung: der Fermento-Text, „Eingelegtes Mischgemüse aus Kohl, Gurken, Karotten, Paprika und mehr, in Salzlake fermentiert".

Beides ist im Backend nicht beeinflussbar.

**Deshalb Variante A: `noindex, follow` auf der gesamten Bestellstrecke.** Nicht wegen Kannibalisierung, sondern weil das, was dort im Index steht, schlechter ist als nichts. **`follow`**, damit die Verlinkungskraft erhalten bleibt.

**Rückfallposition in der Mail:** Falls `noindex` nicht einstellbar ist — können Titel und Beschreibung je Seite selbst gepflegt werden?

## 13.5 Weitere Befunde in der Bestellstrecke

**Trinkgeld — behoben.** Es war auf 10 % voreingestellt und im Gesamtbetrag enthalten, bevor der Kunde es gewählt hatte: Bei 23,20 € Zwischensumme standen 26,26 € statt 22,04 €. Nach § 312a Abs. 3 BGB ist eine Zahlung über das Entgelt für die Hauptleistung hinaus nur wirksam vereinbart, wenn sie **ausdrücklich** vereinbart wurde. **Taib hat die Voreinstellung entfernt.** Die Verteilung erfolgt nach Arbeitsstunden an die vier Beschäftigten, mit dem Steuerberater besprochen.

**Servicegebühr.** Eigene Zeile im Warenkorb, Deckel 0,99 €. Bei 23,20 € Zwischensumme 0,88 €, etwa 3,8 %. Der Erklärtext spricht von „hilft uns" und „unserer Online-Bestellplattform", obwohl die Gebühr vollständig an Foodamigos geht. **Taib lässt es so** — der Kern der Aussage („du unterstützt uns direkt") ist wahr.

**Konsole:** 81 Warnungen, 26 Probleme, ein 404 auf `api/pages/speisekarte/mantico` bei jedem Seitenaufruf. Zum Vergleich: Die eigene Seite läuft mit null Verstößen und 2,8 kB JavaScript. Das ist kein Nebensatz, sondern das Argument in 2.9 in Zahlen.

**Rabattleiste:** „15 € Rabatt" sind tatsächlich fünfmal 3 € auf fünf Bestellungen. Taib überarbeitet.

## 13.6 Die Mail — Stand

**Gesendet am 22./23. August**, ohne Anlagen. Begründung für den Verzicht auf Anlagen: Die Entwürfe hängen an denselben Antworten, die die Mail einholt, und sind noch nicht anwaltlich geprüft.

**A — Rechtliches:** A1 Vertragspartner · A2 Art. 26/28 · A3 Ersetzung der Rechtstexte, fünf Fragen einschließlich **A3.5 Verlinkung statt Hinterlegung** · A4 Mängel im Einzelnen mit dem Vorlagen-Befund

**B — Technisch:** B1 `noindex, follow` · B2 Pfadtausch und `www` · B3 `maximum-scale=1`

**C — Daten:** C1 Kundendaten · C3 Speicherdauer · C4 Zahlungsdienstleister · C5 Cookie-Liste · C6 automatisierte Entscheidungen · C7 Prozentsatz der Servicegebühr

**Erledigt und vor dem Versand entfernt:** B4 Allergene je Option (geht im Backend) · B5 abwählbare Beilagen (über das Kommentarfeld) · B6 Falschaussagen (durch die neuen Shop-Texte behoben) · B7 Rabattdarstellung (Taib überarbeitet) · B8/B9 Pfand und Grundpreis (werden bereits ausgewiesen) · C2 Bestsellerzahlen (Taib kennt den Weg) · Öffnungszeiten (selbst korrigiert)

**Datei:** `Mail-an-Foodamigos.md`.

## 13.7 `www` — Entscheidung

**Die Bestellstrecke läuft durchgehend auf `www.mantiandco.com`.** Entscheidung: Die Unternehmensseite läuft ebenfalls auf `www`, `mantiandco.com` leitet dauerhaft dorthin. Für das Hosting: 301-Weiterleitung von der Fassung ohne `www`, `www` als kanonische Adresse in allen Verweisen.

---

# 14. Lieferanten, Beschaffung und Halal

## 14.1 Das Zertifikat und was es abdeckt

**Zertifiziert ist HEMELAER NV**, Haagdam 2a, 9140 Temse, Belgien. FASFC-Zulassung F104591-104591-H. Zertifikat HEME251015, ausgestellt 15. Oktober 2025, **gültig bis 17. Oktober 2026**. Deckt ab: *Meat cuts and meat-based preparations*, Kategorie C — Food Manufacturing / CI — Halal slaughtering & Processing of Animal products.

**Baumann GmbH & Co. KG**, Am Pariser Weg 25, 68519 Viernheim, ist der Lieferant — **nicht der Zertifikatsinhaber.** Die Formulierung auf `/halal` muss deshalb lauten: „Unser Rinderhack stammt aus zertifizierter Schlachtung und Verarbeitung bei Hemelaer NV in Belgien; geliefert wird es über Baumann in Viernheim."

**Was zwischen Hemelaer und der eigenen Küche passiert, deckt das Dokument nicht ab.** Das ist keine Formalie — es ist der Grund, warum kein Satz über die ganze Kette geschrieben werden darf.

## 14.2 Die Zertifizierungsstelle

**HALAL EXPERTISE ASBL**, gegründet 21. Oktober 2011 in Brüssel, gemeinnützig, USt BE 0840.602.196, Avenue Louise 367, 1050 Ixelles. Die Angaben auf dem Zertifikat stimmen mit dem Handelsregister überein.

**Was fehlt:** Keine Akkreditierung auf der eigenen Website — weder HAK (Türkei), JAKIM (Malaysia), MUI/BPJPH (Indonesien), GAC (Golfstaaten), SASO/SFDA (Saudi-Arabien) noch MOIAT (VAE). Für eine Zertifizierungsstelle ist das ungewöhnlich; bei allen anderen steht die Akkreditierung ganz oben.

**Was die erste Einschätzung korrigiert:** Sie stehen auf der Anerkennungsliste des **Central Islamic Committee of Thailand (CICOT)**, Nummer 23, „Halal Expertise Organization", Belgien, gültig bis 20. Mai 2027. Andere belgische Stellen auf derselben Liste tragen ein Ablaufdatum vom 30. April 2025.

**Weitere Beobachtungen:** Das Team besteht aus freiberuflichen oder ehrenamtlichen Fachleuten, nicht aus festangestellten Auditoren. Sie werben mit einem Verfahren, das „einfach, schnell, leicht umzusetzen und nicht teuer" ist — Geschwindigkeit und Preis sind keine Merkmale, mit denen strenge Prüfstellen werben. Drei Schreibweisen im Umlauf: „IHEC – Halal Expertise asbl" (Zertifikat), „Halal Expertise Organization" (CICOT), „Halal Expertise Certification" (europages).

**Zum Vergleich, europäische Stellen mit breiter Akkreditierung:** Halal Quality Control (Niederlande, seit 1983, anerkannt von MUI, JAKIM, ESMA, SFDA, MUIS, HAC, CICOT) · Halal Food Council of Europe (Brüssel, HAK-akkreditiert seit Juni 2023) · **Halal Control (Rüsselsheim, rund 80 km von Mannheim, über ein Dutzend Anerkennungen, Mitglied im World Halal Council)** · Halal Certification Services (Schweiz, seit 1999) · IIDC (Österreich).

## 14.3 Die Betäubungsfrage — offen und heikel

**Baumann hat mündlich gesagt, es werde ohne Betäubung geschlachtet. Flandern hat die Schlachtung ohne vorherige Betäubung zum 1. Januar 2019 verboten**, der EuGH hat das Verbot Ende 2020 bestätigt. **Temse liegt in Flandern.**

Entweder ist die Auskunft ungenau, oder gemeint war reversible Elektrobetäubung. **Muss schriftlich geklärt werden, bevor ein Satz dazu online geht.**

**Die Haltung dazu:** Zeigen, was dasteht, und nichts darüber hinaus behaupten. Kein „international anerkannt", kein „nach strengsten Standards". Das ist mehr, als Wettbewerber zeigen — und wer strenger prüft, findet dieselben Lücken.

## 14.4 Alternative Lieferanten — recherchiert, nicht geprüft

**Der Filter an jeden Anbieter:** Welche Zertifizierungsstelle? Ist sie akkreditiert, und von wem? Wird betäubt, und wenn ja, wie?

| Anbieter | Ort | Anmerkung |
|---|---|---|
| VOL-KAN GmbH | Großmarkt Mannheim, Gottlieb-Daimler-Str. | Seit 1994, wirbt mit Premium Halal Rindfleisch, B2B. Verarbeitung bei EFETÜRK in Polen |
| Özen Et | Großmarkt Mannheim | Einzel- und Großhandel, Bewertungen gemischt |
| Zafer Fleischgroßhandel | Großmarkt Mannheim | Wenige Bewertungen, alle gut |
| Helal Et Fleischhandel GmbH | Ettlingen, rund 60 km | Seit 1987 auf geschächtetes Fleisch spezialisiert, tägliche Lieferung |

**Ein Wechsel löst das Problem nicht automatisch.** Fast jede Kette in Europa läuft über Zwischenhändler, und die Zertifizierung sitzt beim Schlachtbetrieb. **Gesucht ist eine kürzere und belegbare Kette, kein näherer Lieferant.**

**Reihenfolge — geändert am 25. August 2026.** Bisher galt: erst Baumann fragen, dann die anderen. **Jetzt gehen alle fünf Anfragen gleichzeitig raus** (14.10). Grund: Die strittige Betäubungsauskunft stammt von Baumann. Wer nacheinander fragt, gibt der zweiten Antwort Gelegenheit, sich an der ersten auszurichten. Dass Händler mehrere Quellen führen, bleibt richtig — Baumann steht deshalb weiter auf der Liste, nur nicht mehr allein am Anfang.

## 14.5 Offene Herstellerfragen

**Alle betreffen zugekaufte Positionen. Für vegan und vegetarisch ist keine entscheidend** — alle enthalten ohnehin Milch oder Ei. **Für halal sind vier offen.**

| Position | Was fehlt | An wen |
|---|---|---|
| Cheesecake | E471 Mono-/Diglyceride: pflanzlich oder tierisch? | Metro |
| Cheesecake | „Natürliches Aroma": Ursprung? | Metro |
| Schoko-Soufflé | „Vanillearoma" in der Schokolade: Ursprung? | Metro |
| Nudelsalat | „Gewürze" aufschlüsseln | Metro |
| Kartoffelsalat | „Kräuter", „Gewürze", „Gewürzextrakte", **„Speisewürze"** | Metro |
| Zartbitterstückchen | Lecithinquelle beim alten Lieferanten | erledigt durch Wechsel |

**Die Metro-Antworten liegen Taib seit dem 24. August vor, konnten aber nicht mehr hochgeladen werden. Als Erstes einlesen** — sie schließen vier der offenen Fragen und sind Voraussetzung dafür, dass `diet-check` nach Auftrag 234 grün werden kann.

**Metro-Servicenummer für alle vier Artikel:** +49 800 50 35 75 22 (MCC Trading Deutschland GmbH, Schlüterstraße 7a, 40235 Düsseldorf).

## 14.6 Branntweinessig — entschieden am 28. August

Steckt im Nudelsalat und im Kartoffelsalat. Aus Alkohol destilliert.

**Berichtigt am 29. August:** Frühere Fassungen nannten zusätzlich „beide Dressings" und das Fermento. In `dishes.json` steht „Branntweinessig" dreimal — zweimal als Zutat (Nudelsalat, Kartoffelsalat), einmal im Fließtext des Kartoffelsalats. Das Fermento führt „Säuerungsmittel (Essigsäure, Zitronensäure)", etwas anderes. Der Fehler entstand hier im Chat aus einem Suchmuster, das auf „Essig" ansprang und die Essigsäure mitnahm.

**Die Mehrheitsmeinung hält Essig für halal**, weil der Alkohol vollständig zu Säure umgewandelt ist — eine Minderheit sieht es anders. **Keine Lieferantenfrage, sondern eine Entscheidung von MANTI & CO.**

**Entschieden: gilt als halal.** Taib am 28. August, mit der Mehrheitsmeinung. **Eingebaut in Auftrag 246** als eigener Eintrag im Wortschatz von `scripts/diet-check.mjs`, nicht als Kompositumsregel: Eine Regel, die auf das Grundwort zurückführt, klärt zwei Fälle und öffnet jeden anderen — „Kalbfleisch" endet auf „Fleisch", „Sojasauce" auf „Sauce". Bei einem Gatter, das über halal und vegan entscheidet, wird einzeln geurteilt.

**Warum `Essig: ANY` nicht reichte:** `beurteilen()` schlägt wörtlich nach, dann über die Endung, dann über den Klammerkopf. Ein Kompositum wird an keiner dieser Stellen auf sein Grundwort zurückgeführt. In 245 gemessen, nicht vermutet.

**Auf der Website steht dazu kein Wort.** Der Branntweinessig ist in der Zutatenliste deklariert, und ob man ihn isst, entscheidet der Gast. Das folgt 14.3: zeigen, was dasteht, nichts darüber hinaus behaupten. **Die Entscheidung steht nicht zusätzlich in Abschnitt 15** — eine Aussage an zwei Stellen ist eine Aussage, die an zwei Stellen altert.

**Der Vorbehalt zum Chip hat sich erledigt.** Am 28. August geprüft statt angenommen: Nudelsalat trägt `vegetarisch`, Kartoffelsalat `vegan`. **Keines der betroffenen Gerichte trägt einen Halal-Chip.** Die Entscheidung berührt keine Aussage gegenüber dem Gast, nur den Zähler des Gatters — 26 → 24 unbelegte Ernährungsangaben, 22 → 21 unbekannte Zutaten.

## 14.7 Schokostückchen — Wechsel offen

**Bisher:** Puda Zartbitterschokoladestücke (OSNA Nährmittel GmbH, Osnabrück, über Penny). Zutaten: Kakaomasse, Zucker, Kakaobutter, Emulgator (Lecithine) — **ohne Quellenangabe**. Spuren: Haselnuss, Mandel, Pistazie, Milch. Das Fehlen von Soja in der Spurenangabe spricht für Sonnenblumenlecithin, ist aber nicht belegt.

**Kandidat 1 — Callebaut über Baktotaal**, 10 kg. Zucker, Kakaomasse, Kakaobutter, Emulgator **Sojalecithin**, natürliches Vanillearoma. Stückgröße 8 × 8 × 6 mm. **Bestellung war ausgelöst, kann noch abgebrochen werden.**

**Kandidat 2 — JM Posner**, 10 kg. Zucker, Kakaomasse, Kakaobutter, fettarmes Kakaopulver, Dextrose, Emulgator E-322 **Sonnenblumenlecithin**. Kakaofeststoffe mindestens 47,8 %. **Kein Vanillearoma.** Spuren: Soja, Laktose, Milchprotein. Ausgelobt als vegetarisch, **vegan** und glutenfrei. **Stückgröße 6 × 4 × 4 mm — Taib zu klein.**

**Einordnung Sojalecithin:** Prävalenz der Sojaallergie in Deutschland laut BfR 0,3–0,4 % der Bevölkerung, häufigste Form die pollenassoziierte (Birke). **Sojalecithin ist für die meisten Sojaallergiker verträglich**, weil es kaum Protein enthält — deklariert werden muss es trotzdem, da Lecithin nicht auf der Ausnahmeliste des Anhangs II LMIV steht.

**Fazit: Die Entscheidung sollte an Stückgröße, Vanillearoma und Beschaffungsaufwand hängen, nicht am Soja.** Umsatztechnisch vernachlässigbar.

**Alle anderen gefundenen großen Chunks enthalten Sojalecithin:** Callebaut, RUF, Cake-Masters, Dr. Oetker, SPAR. RUF und SPAR deklarieren nur „Emulgator Lecithine" ohne Quelle — rechtlich ein Hinweis auf Sonnenblumenlecithin, aber nur in 100-g-Beuteln erhältlich.

## 14.8 Drei Mails, die gestellt werden müssen

**An JM Posner:** Führen Sie dieselbe Rezeptur in größerer Stückgröße, gesucht etwa 8 × 8 × 6 mm? · Musterlieferung vor Abnahme von 10 kg möglich? · Ist „geeignet für Veganer" vom Hersteller erklärt oder aus der Zutatenliste abgeleitet?

**An Baktotaal:** Ist das natürliche Vanillearoma pflanzlichen Ursprungs? · Wird Alkohol als Trägerstoff verwendet, verbleibt Restalkohol? · Liegt eine Halal-Zertifizierung vor, von welcher Stelle? · Welche Stückgröße im 10-kg-Gebinde?

**An Baumann:** Welche Stelle zertifiziert Hemelaer, gibt es eine Alternative mit HAK- oder GAC-Akkreditierung? · Wird betäubt, und wenn ja, wie? · Verlängerungszertifikat ab 17. Oktober 2026.

## 14.9 Anfrage an Hemelaer — geschrieben am 25. August 2026

**Datei:** `Anfrage-Hemelaer-Halal.md` im Projektordner. **Auf Englisch** — Taibs Entscheidung; das Zertifikat selbst ist englisch ausgestellt. **Die niederländische Fassung steht in derselben Datei als Rückfallebene**, falls nach vier Wochen keine Antwort kommt.

Elf Fragenblöcke: Warum die Zertifizierung nicht auf der eigenen Website steht · eigene Schlachtung oder zugekaufte Schlachtkörper · **Betäubung: Methode, Umkehrbarkeit, Parameter** · Handschnitt, Muslimschlachter, Tasmiya, Ausblutzeit · Trennung, Schwein im Haus, Rückverfolgbarkeit auf die Charge · Audits pro Jahr, angekündigt oder nicht · zweite Zertifizierung durch eine akkreditierte Stelle · Verlängerung nach dem 17. Oktober 2026 und lückenlose Produktion seit dem 15. Oktober 2025 · Herkunft und Haltung mit Ersatzfrage nach den Rohdaten · Geltungsbereich für unseren Artikel und ob Baumann als Abnehmer bekannt ist · Erlaubnis zur Veröffentlichung.

**Der Brief nennt Baumann offen** als Bezugsweg und als Quelle des Zertifikats, und sagt den Grund der Anfrage: Wir wollen öffentlich etwas schreiben und nichts behaupten, was wir nicht belegen können.

**Dieselben Fragen gehen parallel schriftlich an Baumann.** Nacheinander gefragt, richtet sich die zweite Antwort an der ersten aus. Die mündliche Auskunft „ohne Betäubung" (14.3) ist der Anlass des ganzen Briefes und lässt sich nur durch zwei unabhängige Antworten auflösen.

**Frist: vier Wochen nach Versand.** Ohne Rückmeldung gilt die Sache als ungeklärt, und auf `/halal` steht nur, was auf dem Papier steht — kein Satz über das Verfahren.

**„Haltungsform" ist ein deutsches Handelslabel**, das ein belgischer Betrieb in der Regel nicht führt. Deshalb steht die Ersatzfrage nach Rasse, Futter, Stalltyp, Weidegang und Transportdauer daneben.

**Rechtsstand geprüft am 25. August 2026:** Flandern verbietet die Schlachtung ohne vorherige Betäubung seit dem 1. Januar 2019, der EuGH hat das im Dezember 2020 bestätigt, der EGMR die Verbote später als vereinbar mit der Religionsfreiheit angesehen. **Umkehrbare Betäubung ist die wahrscheinlichste Antwort auf die Betäubungsfrage** — anerkannt von einem Teil der Gelehrten, von einem anderen nicht.

## 14.10 Kurzanfrage an Ersatzlieferanten — geschrieben am 25. August 2026

**Datei:** `Anfrage-Ersatzlieferanten-Halal.md`. Sechs Fragen statt elf, auf Deutsch: Schlachtbetrieb und Land · **Prüfstelle und ihre Akkreditierung** · Betäubung und Umkehrbarkeit · Chargenrückverfolgung · Schwein im Haus und Trennung · Haltungsangaben.

**Geht an alle fünf gleichzeitig**, einschließlich Baumann selbst — Händler führen oft mehrere Quellen, und eine zweite Linie beim bestehenden Lieferanten ist billiger als ein Wechsel. Damit ist die frühere Reihenfolge aus 14.4 („erst Baumann fragen") aufgehoben: Baumann wird jetzt parallel gefragt, weil die Betäubungsauskunft von dort kam und eine sequenzielle Befragung den Antworten Gelegenheit gibt, sich aneinander auszurichten.

**Frage 2 entscheidet, nicht Frage 3.** Ein Betrieb mit HAK- oder GAC-akkreditierter Prüfstelle ist die bessere Kette, selbst bei identischer Antwort zur Betäubung. Der Unterschied liegt darin, wer geprüft hat und wer diese Prüfung anerkennt.

**Frage 4 ist der stille Härtetest.** Ein Zertifikat hat jeder, eine Chargenrückverfolgung nur, wer sie führt.

**Preis wird bewusst nicht gefragt.** Wer zuerst nach Konditionen fragt, bekommt Konditionen und ausweichende Antworten auf alles andere.

**Falls alle fünf dieselbe unbelegte Struktur haben wie heute**, ist die Konsequenz nicht der Wechsel, sondern eine zurückhaltendere Formulierung auf `/halal`.

---

# 15. Entscheidungen mit Begründung

**Diese Liste verhindert, dass eine Frage zweimal diskutiert wird.** Wer eine davon aufheben will, muss die Begründung entkräften, nicht die Entscheidung.

**Keine Verweise auf Lieferando, Uber Eats, Wolt oder andere Aggregatoren — nirgends auf dem Auftritt.** Taib am 25. August: „Definitiv nicht verlinken, dies würde dem ganzen Aufwand, den wir derzeit betreiben, widersprechen." Ziel des Relaunchs ist die eigene Marke; ein Verweis schickt einen Gast, der bereits da ist, zu einem Vermittler, der dieselbe Bestellung teurer abwickelt, und stärkt dessen Marke mit unserer Reichweite.

**Damit ist die Umbau-Roadmap Zeile 296 aufgehoben.** Sie beauftragte die Verweise; die SEO-Roadmap (115, 298, 299) verbot sie. Der Widerspruch ist zugunsten der SEO-Roadmap entschieden. Wer Zeile 296 später wiederfindet, findet hier den Grund.

**Der Fluss läuft nur in eine Richtung.** Die Plattformprofile bleiben bestehen und sollen weiterhin auf `mantiandco.com` zeigen. Umgekehrt nicht. **Das gilt auch für Fußzeile, „Wo du bestellen kannst"-Abschnitte, das Treueprogramm und jede spätere FAQ-Antwort** — der Ort, an dem so ein Verweis unauffällig wieder hereinkommt, ist eine Hilfsseite, nicht die Startseite.

**Foodamigos ist davon nicht berührt.** Der eigene Shop ist kein Aggregator, sondern der eigene Weg.

**Neu am 27. August: Exklusivpartner bei Lieferando.** Taib auf die Frage nach dem Kanal für allgemeine Essensanfragen: „das Google-Unternehmensprofil ist gepflegt und wir sind seit neuestem Exklusivpartner bei Lieferando." **Beides ändert nichts an der Entscheidung oben** — der Fluss läuft weiter nur in eine Richtung, und die Exklusivität ist ein Grund mehr, den eigenen Bestellweg nicht zu verwässern. **Sie ändert aber die Lage bei den allgemeinen Anfragen:** „essen in der Nähe", „lieferservice mannheim", „bringdienst mannheim" werden nicht mit einer Wissensseite gewonnen, sondern im Kartenblock und bei Lieferando — und beide Kanäle stehen bereits. **Das ist die Antwort auf Taibs Tellerrand-Einwand aus 9.6, soweit er die generischen Anfragen betrifft: Der Kanal fehlt nicht, er ist nur nicht der Auftritt.**

**Kein Teilen-Knopf auf den Gerichtseiten.** Links aus Messengern und sozialen Netzwerken tragen für Suchmaschinen kein Gewicht weiter. Der Nutzen wäre Reichweite, nicht Ranking — und Essen wird häufiger fotografiert als verlinkt. Nach dem Livegang gegebenenfalls als Versuch.

~~**Keine Subdomain für die Bestellstrecke.** `bestellen.mantiandco.com` wäre für Suchmaschinen ein eigener Auftritt; Besuche, Verweildauer und Verlinkungen zählten nicht mehr für die Hauptdomain, Cookies und Sitzungen gälten als getrennt. **`/bestellen` als Pfad.**~~ **Aufgehoben Ende August (Abschnitt 15, „Die Bestellstrecke zieht auf bestellen.mantiandco.com“):** Der Pfadtausch war laut Foodamigos technisch nicht machbar; mit `noindex` auf der ganzen Strecke (B1) verliert das Pfad-Argument seinen Kern. Die Verantwortung nach § 5 DDG ändert sich durch die Domain ohnehin nicht.

**`www` als kanonische Fassung.** Die Bestellstrecke läuft bereits darauf.

**Ein Datenschutztext und ein Impressum, zwei getrennte AGB.** Begründung in 12.2.

**Getränke bekommen keine Einzeltexte auf der Website.** Bei vierzehn Sorten derselben Marke wird jeder längere Text zur Schablone. Rahmensatz plus ein Satz je Sorte im Shop.

**Topping-Empfehlungen immer zwei.** Wer zwischen zwei Vorschlägen wählt, hat die Frage „überhaupt ein Topping?" bereits übersprungen.

**Das eigene Logo verschwindet aus dem Getränkeabschnitt.** Es steht in der Kopfleiste; auf der eigenen Seite muss man sich nicht selbst als Marke ausweisen.

**Kein Logo im Teilbild.** Solange ein Gericht abgebildet werden kann, ist es die bessere Wahl.

**Die Tiefe zu Ernährungsweisen lebt auf den Ernährungsseiten**, nicht auf den Wissensseiten. Sonst konkurrieren zwei eigene Seiten um dieselbe Anfrage.

**Der Gruppengedanke ist Beweis, nicht Produkt.** Er begründet, warum die Karte so aussieht — er wird nicht als Kampagne verkauft.

**Ernährungsweise statt Herkunft ist eine Suchbegriffsstrategie, keine Positionierung.** Die Seiten `/vegan`, `/vegetarisch` und `/halal` fangen Anfragen ab. Sie definieren nicht, was MANTI & CO. ist.

**Pasta ist Brücke, nicht Kategorie.** Sie erschließt Anfragen, sie ersetzt nicht das Gericht.

**`aggregateRating` ist aus dem Schema entfernt.** Das JSON-LD gab 5,0 aus 57 Bewertungen aus. Google verlangt, dass ausgezeichnete Bewertungen auf derselben Seite sichtbar sind und nicht die eigene Organisation selbst bewerten. **Eine selbstbezügliche Bewertungsauszeichnung kann eine manuelle Maßnahme auslösen — dann verschwinden alle Rich Results der Domain, nicht nur die Sterne.** Die sichtbare Proof-Zeile bleibt: Sie ist Werbung, keine Auszeichnung. Wieder aufnehmen erst, wenn echte Einzelbewertungen auf der Seite stehen.

**Kein Slider bei den Gästestimmen, sondern ein waagerechter Streifen.** Slider verstecken Inhalt. Der Streifen spart 408 px Höhe und zeigt alles.

**Die Aktionsleiste klebt nicht.** 112 px dauerhaft belegter Bildschirm für einen Satz.

**Die ungleiche letzte Zeile im Raster bleibt.** Sonderregeln je Gruppenanzahl wären schlimmer als die Lücke.

**Bestseller statt eines eigenen Manti-Abschnitts auf der Startseite.** Vermeidet die Doppelung mit `/speisekarte` und zeigt die Bandbreite statt nur einer Gruppe.

**Vier Navigationspunkte, nicht fünf.** Die Navigation beantwortet Fragen *vor* der Bestellung.

**Keine eingebettete Karte.** 500 kB und Datenübertragung vor der Einwilligung.

**Combos bekommen keine eigene Gerichtseite.** Sie würden mit dem Hauptgericht um denselben Inhalt konkurrieren.

**Der UI/UX-Skill ist abgeschaltet.** Er brachte eigene Designvorgaben mit, die weder von Taib noch aus dem Projekt stammten.

**`noindex, follow` auf der Bestellstrecke**, Begründung in 13.4.

**Voreingestelltes Trinkgeld entfernt**, Begründung in 13.5.

**Kein Preis im Fließtext — entschieden am 25. August 2026.** Kein Betrag, keine Preislage, kein „günstig", kein „Einheitspreis". **Auch keine Andeutung**, die den Leser auf den Preis stößt. Taibs Begründung: Der Preis ist ein Schmerzpunkt, und er wirkt nie gut; auf der Bestellstrecke sieht der Gast ihn ohnehin. **Verkauft wird über Qualität und Marke, nicht über den Preis** — das Ziel ist Bindung, die vom Preis unabhängig ist.

**Was das aufhebt:** den Satz „Einheitspreis, alle Sorten gleich" im Getränkeabschnitt, und jede vergleichbare Formulierung, die noch auftaucht.

**`priceRange: '€'` in `Schema.astro:27` bleibt — entschieden.** Es ist strukturierte Angabe für Google, kein Fließtext, bei `LocalBusiness` üblich und im lokalen Ergebnis ausgewertet. **Die Regel gilt für das, was der Gast liest, nicht für das, was die Suchmaschine liest.**

**Die Grenze der Regel — entschieden am 25. August, gegen meinen Vorschlag.** Der Neukundenrabatt bleibt vollständig: „Neu hier? 3 € Rabatt auf jede der ersten fünf Bestellungen — 15 € insgesamt. Code: MANTI". Ich hatte vorgeschlagen, „— 15 € insgesamt" zu streichen, weil die Summe dem Leser vorrechnet, wie viel er spart. **Taibs Begründung, die überzeugt:** MANTI & CO. ist heute keine Marke, auf die hin jemand bestellt. Die Seite wird so gebaut, als wäre sie eine — aber an gezielten Stellen braucht es die Instrumente, die eine kleine Marke braucht, und der Neukundenrabatt ist eine davon.

**Damit lautet die Regel genauer, und das ist der Gewinn aus dem Einwand:** Kein Preis als *Argument* — kein „günstig", kein „ab X €", keine Summe, die neben einer Qualitätsaussage steht und ihr die Arbeit abnimmt. **Ein Angebot mit seinen Konditionen ist kein Preisargument, sondern ein Angebot**, und es steht dort, wo es hingehört: an der Bestellentscheidung, nicht im Fließtext über Herstellung, Zutaten oder Marke. **Der Prüfsatz: Ersetzt die Zahl eine Aussage über Qualität, fällt sie. Erklärt sie eine Bedingung, bleibt sie.**

**Ablaufdatum, damit die Ausnahme nicht zur Gewohnheit wird:** Sie hängt an „wir sind noch klein". Wenn die Marke trägt, ist der Rabatt neu zu bewerten — nicht automatisch zu streichen, aber zu begründen.

**Kein TK-Versand — entschieden am 25. August 2026.** Die Suchdaten zeigen unbediente Kaufabsicht („manti kaufen" 60 Impressionen, die vegetarisch/vegan-Kaufanfragen zusammen 119 bei einem Klick). Sie wird trotzdem nicht bedient. Taibs Begründung: Sobald auf der Seite steht, dass selbst produziert wird, rufen Kunden an und fragen nach Versand — **das genügt als Kanal**. Ein aufgebauter TK-Versand daneben wäre eine weitere Richtung, und bei zu vielen Richtungen wird am Ende keine bedient. **Konsequenz:** keine Seite auf „kaufen", kein Versandhinweis, keine Versandlogistik im Umfang. Der Anruf ist der Weg.

**Mehrsprachigkeit — entschieden am 25. August 2026.** Die Struktur wird jetzt mehrsprachig angelegt, **gefüllt wird zunächst nur Englisch**, und zwar **geschrieben, nicht übersetzt**. Der Punkt stand in 16.6 als Nummer 26 auf „später"; er ist herausgelöst und vorgezogen. **Was das aufhebt:** die Einordnung, Mehrsprachigkeit sei ein Ausbau nach dem Umstieg. **Warum:** Routen, Content-Schema, `hreflang` und Sprachumschalter müssen mehrere Sprachen tragen, bevor 37 Routen stehen — nachher ist es ein Umbau, vorher eine Entscheidung. Nachgesehen am 25. August: In `src/` steht heute **keine einzige Spur** von i18n, `hreflang` oder Locales.

**Kein Google-Übersetzer-Widget.** Fünf unabhängige Gründe: Fremddienst-JavaScript vor der Einwilligung, sprengt die 30-kB-Schranke (wir liegen bei 2,8 kB), erzeugt **keine indexierbaren Adressen** — die Übersetzung entsteht im Browser, der Crawler sieht sie nie —, damit kein `hreflang` und kein Ranking-Gewinn, und es übersetzt Allergen- und Zusatzstoffangaben unkontrolliert mit.

**Foodamigos hat es nicht per Widget gelöst.** In der Search Console stehen zehn eigene `/en`-Adressen mit 2.252 Impressionen; ein Browser-Widget würde dort nicht auftauchen. Echte übersetzte Seiten sind der technisch richtige Weg, unabhängig davon, wie der Text entstand.

**Spanisch und Französisch nein.** Für Englisch gibt es Belege — 2.252 Impressionen, 24 Klicks, „manti turkish near me" 234 Impressionen bei null Klicks, dazu englischsprachige Gäste. Für Spanisch und Französisch gibt es **keinen einzigen Beleg im Bestand**. „Weltsprache" ist kein Argument für eine Mannheimer Ladenadresse; die Nachfrage ist lokal.

**Türkisch — zweimal gedreht am 25. August 2026, gültig ist die dritte Fassung: nicht jetzt, aber vorbereitet.** Morgens „momentan nicht", dann „als dritte Sprache, sobald 237 durch ist", dann endgültig: **Türkisch wird nicht gebaut. Stattdessen wird der Aufbau so umgestellt, dass eine beliebige weitere Sprache — Türkisch, Französisch, Italienisch — später hinzukommen kann, ohne dass etwas umgebaut werden muss.** Das ist die bessere Entscheidung, und zwar aus einem Grund, der beim ersten Anlauf noch nicht auf dem Tisch lag: Der teure Teil ist nie das Gerüst, sondern der Text. 592 Schlüssel je Sprache, geschrieben und nicht übersetzt. Eine Sprache zu bauen, deren Text niemand terminiert hat, erzeugt eine rote Zahl ohne Gegenwert.

**Was der Umbau kostet und was er nicht kann.** `src/data/routes.ts` ist bereits richtig gebaut — `LANGS = ['de','en'] as const`, und alles daneben ist `Record<Lang, …>`. Wer dort eine Sprache einträgt, bekommt vom Typprüfer jede Stelle genannt, die sie noch nicht führt. **Fest auf genau zwei verdrahtet sind drei Stellen:** `i18n()` in `content.config.ts` (`z.object({ de, en })`), `Localized<T>` in `lib/text.ts` (`{ de: T; en: T | Pending }`) und das Feld `text` in `routes.ts`. Alle drei müssen aus `LANGS` erzeugt werden statt buchstabiert. **Das ist ein kleiner Auftrag, und heute ist er am billigsten** — solange jeder englische Eintrag `pending` ist, gibt es keine zweite geschriebene Sprache, deren Annahmen die dritte bricht.

**Und die ehrliche Grenze: Kein Aufbau macht eine weitere Sprache umsonst.** Auch danach heißt eine dritte Sprache, dass zu jedem Eintrag in zehn Inhaltsdateien ein Schlüssel dazukommt und jemand ihn füllt. Was das Gerüst leistet, ist etwas anderes: Der Typprüfer und das Gatter nennen jede fehlende Stelle beim Namen, und niemand muss Routen, `hreflang`, Umschalter oder Gatter anfassen. **Das ist viel wert und ist nicht „später einfach einbauen".**

**Wenn Türkisch später kommt, ist der Beleg dafür nicht die Suche.** Im Bestand steht „mantı" mit 290 Impressionen und die Türkei mit 12 Klicks. **Das ist eine Schreibvariante, kein Sprachsignal** — wer in Mannheim „mantı" tippt, liest in aller Regel Deutsch. **Türkisch wäre eine Markenentscheidung, keine Rankingentscheidung**, und müsste auch so gemessen werden: Wer von dieser Fassung Klicks erwartet, wird enttäuscht sein und dann das Falsche daraus schließen. Was sie leistet, ist etwas anderes — ein türkisch-deutscher Hersteller, der auf Türkisch nichts zu sagen hat, ist genau die Lücke, die die ganze Seite sonst zu schließen versucht.

**Französisch und Italienisch sind Möglichkeiten des Gerüsts, keine Kandidaten.** Für beide gibt es im Bestand keinen Beleg, und die frühere Absage an Spanisch und Französisch bleibt in Kraft. Dass eine Sprache technisch hinzukommen *kann*, ist kein Argument dafür, dass sie hinzukommen *soll*.

**Maschinelle Übersetzung ist ausgeschlossen, und zwar aus dem Kernargument des ganzen Projekts:** Der Vorsprung soll inhaltlich sein. Maschinell übersetzt wird daraus in jeder Sprache Durchschnitt — wir gäben genau den Vorsprung aus, für den wir alles tun.

**Englische Pfade heißen englisch, nicht deutsch mit englischen Buchstaben.** Entschieden am 25. August auf Claude Codes Einwand: **`/en/legal-notice/`, nicht `/en/imprint/`** — „Imprint" ist ein Germanismus, im englischen Sprachraum steht dort „Legal Notice". Nichts davon ist gebaut, die Entscheidung kostet nichts. Sie gilt als Muster für die übrigen englischen Pfade: **Nicht das deutsche Wort übersetzen, sondern den Begriff nehmen, der im Zielsprachraum an dieser Stelle steht.**

**Rechtstexte: Deutsch ist verbindlich**, jede fremdsprachige Fassung trägt einen Vorrangvermerk. **Allergen- und Zusatzstoffangaben werden von Hand geprüft, nie maschinell durchgereicht.** Eine falsch übersetzte Allergenzeile ist Haftung, kein Rankingthema. **Nach LMIV Art. 15 müssen die Pflichtangaben in einer im Mitgliedstaat leicht verständlichen Sprache stehen — das ist Deutsch.** Eine türkische oder englische Allergenzeile ist eine Zugabe, nie ein Ersatz, und sie muss inhaltlich deckungsgleich sein.

**Fünf Festlegungen, die vor einer weiteren Sprache zu treffen sind** — hier festgehalten, weil sie beim Bau des Gerüsts nichts kosten und beim Bau der Sprache teuer werden. **Am Beispiel Türkisch ausformuliert, weil das der wahrscheinlichste Kandidat ist:**

**Pfade ohne türkische Sonderzeichen** — `/tr/hakkimizda/`, nicht `/tr/hakkımızda/`. Prozentkodierte ı, ş, ğ in Adressen brechen beim Kopieren, in Mails und in Analysewerkzeugen. Die Regel aus 15 gilt weiter: nicht das deutsche Wort übersetzen, sondern den Begriff nehmen, der im Zielsprachraum an dieser Stelle steht — also `/tr/menu/`, nicht `/tr/speisekarte/`.

**`hreflang="tr"`, nicht `tr-DE`.** Die Zielgruppe sind Türkischsprachige in Deutschland; eine Regionsangabe verengt ohne Gewinn.

**Anrede auf Türkisch ist ungeklärt und nicht aus dem Deutschen ableitbar.** Das deutsche Kleingeschriebene „du" hat keine saubere Entsprechung: „sen" liest sich in Markentexten sehr vertraulich, „siz" ist der übliche Ton und trotzdem nicht steif. **Das `anrede`-Gatter prüft heute nur Deutsch** — eine türkische Fassung liefe ungeprüft mit, bis dort eine eigene Regel steht. Erst entscheiden, dann bauen.

**Erklärter Umfang für Türkisch, nicht automatisch alle 37 Routen.** Das Mittel dafür existiert bereits (10.1b): Jede Sprache erklärt ihren Umfang, und er ist sichtbar kleiner statt heimlich lückenhaft. Kandidaten für den Ausschluss sind die Rechtstexte — dort ist Deutsch ohnehin verbindlich, und eine türkische Fassung erzeugt Prüfaufwand ohne Nutzen.

**Der Rückstand wird sichtbar größer, und das ist der Zweck.** 592 Textschlüssel je Sprache; eine dritte Sprache bedeutet 1.184 offene Einträge im Gatterlauf statt 592 und einen Routen-Sollwert von 111 statt 74. **Genau deshalb wird das Gerüst gebaut und die Sprache nicht:** Ein Rückstand ohne Termin ist eine Zahl, an die man sich gewöhnt, und daran stirbt die Wirkung des Gatters.

**Sprachvollständigkeit ist eine Gatterfrage, keine Absprache — Taibs Auflage vom 25. August.** Jede neue oder geänderte Seite muss **alle aktiven Sprachen** mitführen. Eine deutsche Seite ohne englisches Gegenstück darf nicht bestehen können. **Begründung in unserer eigenen Sprache:** Das Vergessen einer Übersetzung ist derselbe Fehler wie eine Prüfung, die besteht, weil sie nichts angefasst hat — ein Mangel, der schweigt. **Er wird deshalb nicht ermahnt, sondern gemessen.** Ausführung in 10.1b.

**Alle revidierten Entscheidungen stehen mit ihrer Begründung in Abschnitt 4** — sie werden nicht gelöscht, damit sie nicht erneut beschlossen werden.


## Halal steht über dem Sortiment

**Taib am 28. August:** „Wir warten die Antworten zu diesen vier Gerichten ab. Sollte uns das nicht zufriedenstellen, dann nehmen wir die Artikel aus dem Sortiment. Halal ist für uns wichtiger als die Produkte."

Damit ist der Satz über die Karte keine Behauptung über unbekannte Zutaten, sondern eine über eine Regel — und Regeln kann man belegen, indem man sie einhält.

**Geschrieben wird die Regel, nicht die Eigenschaft.** „Alles bei uns ist halal" ist eine Aussage über Produkte, die jeder Wettbewerber an einem Nachmittag auf seine Seite schreibt. **„Was nicht halal ist, kommt nicht auf die Karte"** ist eine Aussage über eine Entscheidung, stimmt schon heute und ist nicht kopierbar — weil dahinter die Bereitschaft steht, ein verkäufliches Gericht zu streichen.

## Das Sicherungsrisiko ist bewusst übernommen

**Stand 28. August:** `site-light` hat **kein Remote** (`git remote -v` gibt nichts zurück). Das Repository existiert einmal, auf einem Rechner: 307,5 MB, 778 verfolgte Dateien, die Historie seit Auftrag 230. Der Search-Console-Export liegt zwei Ordner weiter unter `~/Desktop/MANTI/Webseite/Search-Console-Export-30-08-26` (am 30. August neu gezogen; der Ordner hieß vorher `…-25-08-26`).

**Dreimal angesprochen, dreimal abgewogen. Taib übernimmt das Risiko und mietet einen Server, wenn die Seite steht.** Das ist eine Entscheidung, kein Versäumnis, und sie wird nicht erneut vorgetragen.

**Festzuhalten ist nur der Unterschied, der dabei leicht untergeht:** Ein gemieteter Server trägt das gebaute Ergebnis — vierzig Seiten. Er trägt nicht die Historie und nicht die 185 MB Quellbilder, aus denen alles entsteht. Hosting und Sicherung sind zwei Dinge.


## Die Saucenkarte — Manti als Pasta gedacht

**Taib am 30. August:** Die Pasta-Küche als Vorbild nehmen, viel abschauen und sich trotzdem abgrenzen, indem das Gericht neu ausgelegt wird. Erster Baustein ist die Pesto-Rosso-Sauce, mit der Manti ohne Joghurt bestellbar sind. Geplant sind weitere Saucen und Toppings.

**Das steht nicht im Widerspruch zu „Nein, Manti sind nicht die türkischen Ravioli".** Der Abschnitt weist nicht die Verwandtschaft zurück, sondern die Bequemlichkeit — das Etikett, das einem das Hinsehen erspart. Wer die Technik der Pasta-Küche übernimmt und dabei Manti bleibt, hat sich mit beidem beschäftigt. **Nicht „wir sind wie Pasta", sondern „wir nehmen von dort, was taugt, und bleiben, was wir sind."** Ich hatte das zunächst als Kollisionskurs gelesen; Taib hat widersprochen und recht behalten.

**Folge für später, nicht für heute:** Die Pesto-Rosso-Fassung ist dann kein Sonderfall der Sauce-Auswahl mehr, sondern die zweite Grundform. Das ändert den Aufbau des Sauce-Blocks auf der Gerichtseite, wenn die dritte Sauce kommt.

## Der Fußbereich wird gruppiert, mobil aufklappbar

**Beschlossen am 30. August.** Vierzehn Verweise in einer Reihe haben keine Ordnung; auf dem Telefon zerfallen sie in ungleiche Zeilen, deren Umbruch die Fensterbreite bestimmt. Fünf Gruppen: **Essen · Für jeden · Wissen · Bestellen · MANTI & CO.**

Zwei Gründe über die Ästhetik hinaus: Drei Beschriftungen sind allein nicht verständlich — „Manti", „Verwandte", „Mal was anderes" sagen erst unter „Wissen" etwas. Und **„Für jeden" ist der Ort, an dem `/halal/` später ohne Umbau landet.**

**Auf dem Telefon aufklappbar, auf dem Rechner nebeneinander.** Im Markup stehen die Gruppen offen, ein kurzes eigenes Skript klappt sie unterhalb der Umbruchbreite zu — fällt das Skript aus, ist alles sichtbar.

**Der Unterschied, der dabei festzuhalten ist:** `Treue.astro` begründet ausgeschriebene Antworten damit, dass Antworten hinter einem Klick keine Antworten sind. **Das gilt für Inhalt, nicht für Navigation.** Im Fußbereich geben fünf sichtbare Überschriften mehr Orientierung als vierzehn gleichrangige Wörter. Wer die Regel später auf den Fußbereich anwendet, wendet sie falsch an.

**Fehler in 252, von Taib am 31. August am gebauten Stand gefunden:** Ein `<details>` bleibt an jeder Breite ein Schalter. Das Skript schloss die Gruppen unterhalb 768 px, sperrte sie oberhalb aber nicht — am Rechner klappte ein Klick auf „Für jeden" die Spalte ein, und die fünf Überschriften waren Tabstopps (252 §5.3: 16 → 21). **256b** hält die Gruppen oberhalb offen und nimmt der Überschrift Klick und Tabstopp; ohne Skript bleibt alles offen.

## Der Rollbalken der waagerechten Reihen

**Beschlossen am 30. August.** Die Gerichtekacheln und die Stimmen-Karten scrollen waagerecht; der Balken liegt heute **im** Inhalt, in den Stimmen quer durch die Karte.

**Umgekehrt am 31. August: Er wird überall versteckt.** 252 hatte ihn am Telefon belassen, mit 16 px Polster darunter — weil ich Taibs Antwort („Lieber verstecken … 80–85 % kommen über die mobile Ansicht") als Zustimmung zu meiner Zweiteilung gelesen hatte. Sie sagte das Gegenteil: Gerade weil die meisten mobil kommen, sollte er dort weg. Und sachlich stimmt es: Auf einem echten iPhone ist der Balken im Ruhezustand unsichtbar und erscheint nur während des Wischens — als Hinweis hat er nie getaugt. **Der Anriss der nächsten Kachel ist die Aufforderung**, am Rechner die Pfeiltasten. Mein Vorbehalt galt Menschen ohne waagerechtes Scrollen, und die sitzen am Rechner, wo die Pfeile stehen. Das Polster entfällt wieder (256b).

**Gemessen in 251a/252:** Am Rechner ist die fünfte Kachel bei 1280 px mit 171 px, bei 1600 px mit 182 px angeschnitten — die Reihe endet nirgends bündig. **Offen:** dieselbe Messung bei 390 px, und Taibs Blick auf einem echten Gerät.


## Titel und Description — der Leitsatz und seine Grenzen

**Entschieden am 30. August, an der Startseite:** Der Titel trägt, **wer es macht** („aus eigener Produktion" — der Markenkern, den Gäste in Rezensionen loben), der erste Halbsatz der Description trägt, **wann gekocht wird** („Gekocht, wenn du bestellst" — der einzige zugelassene Frischeanker, und die vorsorgliche Antwort auf `/herstellung/`, das „minus achtzehn Grad" offen sagt). Taibs Einwand, der Kochsatz klinge selbstverständlich, war ebenso unbelegt wie meine Gegenthese — beides Vermutungen über Leserpsychologie. Entschieden hat, was belegbar ist: Beide Aussagen müssen im Schnipsel stehen, jede genau einmal, jede führt eine Zeile an.

**Der Leitsatz gilt für Schnipsel, die beide Markenaussagen tragen — nicht für jede Route.** Die Speisekarte bedient `manti bestellen`: Dort führen Umfang und Weg, der Kochzeitpunkt ist der zweite Satz. Die Gerichtseiten tragen den Anker als Schlusszeile, wie eine Zutat — und **nur, wo er wahr ist**: kalte Gerichte tragen ihren eigenen ehrlichen Marker (kühl serviert, selbst geschnitten, im eigenen Ofen gebacken).

**Englisch ist die begründete Ausnahme:** Der englische Sucher kennt Manti nicht — sein Problem ist Erkennen, nicht Vertrauen. Deshalb trägt der englische Titel die Brücke („Turkish Dumplings (Manti)"), Produktion und Kochzeitpunkt stehen im zweiten Satz der Description. Entschieden von Taib am 30. August: **Die Ravioli-Brücke wandert von Deutsch nach Englisch**; der deutsche Sucher hat das Wort Manti selbst getippt.

**Weitere Entscheidungen derselben Runde:** „bestellen" bleibt im Speisekarten-Titel (der Knopf steht oben auf der Seite, das Versprechen ist einen Klick entfernt). Das Treue-Pending ist aufgehoben — die Bedingungen stehen öffentlich auf der Seite, und „Ohne Kleingedrucktes" hält, weil es keins gibt. Der Über-uns-Titel wechselt von der Behauptung („Eigene Produktion in Mannheim") zur Marke.

**Der Maßstab je Zeile, für alle Tranchen:** Welche Anfrage bedient sie · welches wahre Merkmal führt sie an · welches Versprechen macht sie, und wo hält die Seite es. „Restaurant" scheitert daran, solange es keines gibt; „near me" gewinnt man über Ortssignale (Google-Unternehmensprofil, nach dem Livegang), nicht über das Wort. **Jede Zeichenzahl in einem Textdokument wird von einem Skript gesetzt**, nie von Hand — das erste Tranche-1-Dokument hatte 26 falsche.

## Die Übersetzung ist die kritische Lektüre — kein eigener Umschreib-Durchgang

**Taib am 30. August:** alle Texte beim Übersetzen kritisch hinterfragen, aus jeder Perspektive, ohne Ego. **Entschieden:** Ja zum Durchgehen, Nein zum Umschreiben als eigenem Vorhaben. Die Übersetzung ist die gründlichste Lektüre, die ein Text bekommt — jede Tranche liest das Deutsche zuerst kritisch, meldet Funde mit Begründung, Taib entscheidet, dann entsteht das Englische auf dem berichtigten Deutsch. So wird jede Zeile genau einmal seziert und nichts zweimal angefasst. **Kein Fließtext wird ohne Befund aufgemacht**: Dafür gibt es keine Messung, die ein Problem zeigt, jede aufgemachte Stelle ist neue Fehlerfläche, und „besser" ohne Kriterium ist eine Schleife ohne Ende. Nach dem Livegang wird überarbeitet, was messbar unterperformt.

**Der Gast-Lesegang** — die einzige Prüfung gegen Fehler der Joghurt-Klasse — bleibt Taibs eigene Sache, eigene Notiz, **keine Livegang-Bedingung im Gedächtnis.** Entschieden am 30. August; wird nicht erneut vorgetragen.

## Auftrag 239 wartet auf eine dritte Sprache

**Entschieden am 30. August.** Die Begründung „heute am billigsten" trug nicht: `Localized<T>` auf N Sprachen zu heben ändert die Form der JSON-Dateien nicht — `{ "de": …, "en": { "pending": true } }` bleibt so stehen, ob `LANGS` buchstabiert oder abgeleitet wird. Die 713 Schlüssel zu füllen berührt keinen davon. Wofür 239 wirklich gut wäre, ist eine dritte Sprache, und die ist nicht entschieden (Türkisch wäre in Mannheim nicht abwegig — aber eine Entscheidung, keine Ableitung). Die zwei stillen Ausfälle daraus sind in 254 getragen; die übrigen Fundstellen warten.

## Der Standort-Titel trägt das Rubrikwort, die Adresse bleibt

**Entschieden von Taib am 31. August.** Der deutsche Standort-Titel war die bloße Anschrift — „Hallesche Straße 8, 68309 Mannheim | MANTI & CO." — kein Produktwort, keine Rubrik, auf dem Nachfolger der Seite mit 5 428 Impressionen und 0,8 % Klickrate. Jetzt: **„Standort Mannheim: Hallesche Straße 8"** und **„Location Mannheim: Hallesche Straße 8"**, je 51. Die Adresse bleibt als Ortssignal (die alte Adresse hieß `/standort-und-oeffnungszeiten`, `_redirects` hält `/standort`), das Rubrikwort kommt dazu; die Krümel heißen beide nach der Rubrik.

## Tranche 2b — Gerichtstitel und -namen auf Englisch

**Entschieden am 31. August.** Das deutsche Muster „Was es ist — Name | MANTI & CO." mit Ernährungsmarke wird gespiegelt. Türkische Gerichtsnamen bleiben (İçli Köfte, Kısır, Sigara Böreği, Yaprak Sarma, Çoban Salatası, Turşu), Markennamen bleiben, generische deutsche Namen werden übersetzt (Linsensuppe → Red Lentil Soup, Milchreis → Rice Pudding). **Mediterranes Trio** verliert die drei Gemüse aus dem Titel — sie stehen in der Description — und bekommt die Ernährungsmarke: 64 → 59.

## Standort — ein Sprachzweig in `site.ts`, kein Umzug

**Entschieden am 31. August, für 257.** Titel und Description der Standortseite liegen in `site.ts locations[0]`, einsprachig. Sie werden `Localized` — de/en nebeneinander in derselben Struktur —, kein Umzug nach `meta.json`. Grund ist der Grundsatz aus `text.ts`: Parallele Sprachablagen sind der Mechanismus, durch den Übersetzungen vergessen werden; nebeneinander sieht man sie. Die pending-Hülle `standort` in `meta.json` entfällt dann — eine Stelle, nicht zwei.


## Bibliotheken: festgeschrieben, absichtlich aktualisiert, eins nach dem anderen

**Entschieden am 31. August, auf Taibs Frage „Wieso nicht immer die aktuelle Version von allem?".** Weil die Gatter auf eine Umgebung kalibriert sind: Der Zwischenspeicher hasht die puppeteer-Fassung, Befund 10 war ein Chrome-Verhalten, der bytegleiche Bau trägt den ganzen Speicher — ein Astro-Hauptversionssprung kann die CSS-Bündelung ändern und all das ungeplant kippen. „Immer das Neueste" hieße, diese Kalibrierung regelmäßig zu verlieren und im Fehlerfall nicht zu wissen, ob Text, Bauteil oder Bibliothek die Ursache war.

**Die Regel:** Versionen sind festgeschrieben (`.nvmrc`, `engines`, Lockfile). Aktualisiert wird absichtlich, **eine Bibliothek je Auftrag**, mit vollem Gatterlauf davor und danach und der Bytegleichheitsprobe am Bau. Node auf LTS, nie Current. Sicherheitslücken sind die Ausnahme, die sofort zum Handeln zwingt — bei einer statischen Seite betreffen sie die Baumaschine, nicht die Seite.

**Hosting, vorgemerkt:** Die Seite ist am Ende nur `dist/`. Lädt der Anbieter die Dateien aus, braucht er kein Node; baut er aus dem Repository, liest er `.nvmrc` und `engines`. Im Bau liegt `_redirects` — das Format von Netlify und Cloudflare Pages; ein anderer Anbieter (Apache, nginx, klassischer Webspace) braucht die Weiterleitungskarte in seinem Format. **Der Anbieter wird entschieden, bevor die Weiterleitungen gebaut werden.**

## Die Startseite — neun Funde, sechs Entscheidungen (Tranche 3)

**Entschieden von Taib am 31. August, alle wie vorgeschlagen.** Die H1 nennt das Produkt („Manti aus eigener Produktion") — der Titel sagte seit 256a „Manti", die Überschrift nicht. Der Satz „so dünn ausgerollt, dass die Füllung durchscheint" stand wörtlich in Hero und „Warum anders" — im Hero gestrichen, „Warum anders" erklärt. „Lieferung **in** Mannheim". Der Anker in Hausform („Gekocht, wenn du bestellst.") — Why behält seine Vorgangsbeschreibung, weil dort der Vorgang erklärt und nicht die Zusage wiederholt wird. `footer.nav` „Alle Seiten". **Die Gästestimmen werden treu übersetzt**, mit Vermerk am Block, nichts poliert — „10/10" bleibt „10/10". Zwei Gäste sagen „hausgemacht" und „frisch": Als Zitat dürfen sie stehen; die Gäste sagen, was die Marke nicht sagen darf.

**Bewertungszahlen: Weg A.** Taib wollte sie zuerst ganz streichen, weil sie gepflegt werden müssen; dagegen: 4,9 bei 580 ist die stärkste Zeile der Seite. Der Kompromiss ist keiner: **Untergrenzen** („bei über 500") werden mit jeder Bewertung wahrer, nie falsch; die **Werte** bleiben datiert mit Wächter im Gatter — der Bau erinnert, nicht das Gedächtnis. Werbung mit Bewertungen muss stimmen, wenn sie steht; Untergrenzen sind dafür die sichere Form.


## Die Hausregel: Manti im Singular

**Entschieden von Taib am 31. August:** „Manti" als Gerichtsname ist Singular, weiblich — die Manti. „Manti ist streng genommen Pasta." Nähe statt Förmlichkeit; es ist ein Gericht. **Wo Stücke gemeint sind** — gezählt, beschrieben, auf dem Löffel —, **bleibt der Plural** oder es heißt „Teigtaschen": „Dieselben Manti, nur nicht gekocht" bleibt, „vierzig auf einen Löffel" bleibt, „die Manti sind heiß" (FAQ, kalt/heiß je Lage) bleibt. Gästezitate bleiben wörtlich. **Wo eine Aussage die Stücke definiert, steht weder „ist" noch „sind", sondern der Doppelpunkt:** „Manti: türkische Teigtaschen — dünner Teig, Füllung, Sauce, gekocht in Wasser." Gelernt an `menu.intro` (263), wo der mechanische Singular „Manti ist eine türkische Teigtasche" ergab — sinnverschoben. Die Gattungsaussagen der Wissens-Seiten („Manti sind kleine gefüllte Teigtaschen") bekommen dieselbe Form in ihrer Tranche.

**Ausgelöst wurde die Regel durch meinen Fehler:** Ich hatte behauptet, „die ganze Seite behandelt Manti als Plural" — nicht nachgesehen (Prüfpunkt 3), und falsch: `hingels-beef` und Melted Heart sprachen längst Singular. Der Bestand war gemischt; Taibs Stilempfinden traf den Bestand besser als meine Totalaussage. Die Entscheidung vereinheitlicht, sie stellt nicht um.

## Toppings: Vorschläge gelten allen Gästen

**Taibs Grundsatz vom 31. August, bei F1:** Die Hauptspeise ist vegan, die Toppings sind optional — und die Empfehlungen sind kalkulierte Paarungen für **alle** Gäste, nicht für die Ernährungsgruppe des Gerichts. Ein Fleischliebhaber darf zur Kartoffelfüllung Pastırma lesen; ein Veganer liest es und wählt ein anderes Topping. **Die kalkulierte Paarung bleibt deshalb vorn** — nur ein Halbsatz sagt, was das Topping mit dem Chip macht („damit ist der Teller nicht mehr vegan"). Gilt für alle weiteren Tranchen.

**Zu F3 festgehalten:** Die Küche beobachtet, dass die klassische Saucenwahl (Joghurt + Tomatensauce) überwiegt — beobachtet, nicht gemessen. Der Satz „so bestellen die meisten" wurde neutral gefasst; mit Optionsdaten aus der Bestellstrecke darf er mit Quelle zurückkommen. Mit den neuen Saucen kann sich das Bild ändern.


## Die Zurück-Geste gehört dem Browser

**Entschieden am 31. August, abgenommen am 1. September.** Die Seite unterdrückt keine Browsergesten. `overscroll-behavior` steht auf `html` nur für die senkrechte Achse (`-y: none`, Kantenfarbe am Anschlag), nie als Kurzschrift. Die beiden waagerechten Reihen tragen `overscroll-behavior-x: contain` mit Kommentar — eine Reihe an ihrem linken Rand reicht nicht in die Chronik durch. **Die Geste selbst prüft kein Skript verlässlich; die Abnahme ist Taibs Trackpad im normalen Fenster.**

## Favicon: ein Zeichen auf allen Stufen, SVG vorneweg

**Entschieden von Taib am 31. August** (Abschnitt 8.9): Signet auf 180, 32 und 16 — Wiedererkennung vor Strichbreite. Dazu `favicon.svg` vor den PNGs für die Browser, die es lesen; PNGs bleiben für Safari am Mac und für iOS, das nur das `apple-touch-icon` kennt. Die 16er-M-Fassung ist Rückfalllinie, falls das Bild gegen das Signet entscheidet.


## Kommentarfeld statt Häkchen — dauerhaft

**Taib am 1. September:** Die Abwahl von Ketchup, Mayonnaise und Nutella lässt sich in Foodamigos nicht einstellen — „das funktioniert nicht". Die Annahme seit 231, das Häkchen sei nur nicht gesetzt, war falsch; die drei Kommentarfeld-Sätze (Pommes ×2, Churros) sind kein Übergang, sondern Dauerzustand. **Geklärt am 1. September: Die Option gibt es nicht.** Die nächste Nachricht an Foodamigos ist ein Funktionswunsch — eine abwählbare Beilage je Gericht —, kein Fehlerbericht.

## Sitzungen von Claude Code — der Zustand liegt nie in der Sitzung

**Entschieden am 1. September, nach 263.** Claude Codes Sitzung war seit Projektbeginn dieselbe; sie lief während 263 zweimal voll, und die Übergabe hat getragen, weil Repository, Zwischenspeicher, `/tmp`-Tafeln und Gedächtnis den Zustand trugen. Taib am 1. September: kein Wechsel um des Wechsels willen, eine laufende Sitzung darf weiterlaufen. Deshalb steht **am Anfang jedes Auftrags, welche Gedächtnis-Abschnitte sich seit dem letzten geändert haben und neu zu lesen sind** — so bleibt eine lange Sitzung aktuell; der Startsatz aus 18.1 gilt für neue Sitzungen. Ein Auftrag, der in einer Sitzung endet, wird nach dem Übergabeprotokoll (18.1) fortgesetzt: erst messen, dann je Zustand gegenprüfen, vervollständigen oder zurücksetzen, nichts erinnern.


## Kennzeichnung: ein Wörterbuch, Rechtsbegriffe, britische Schreibung

**Entschieden von Taib am 1. September.** Zutaten, Allergene und Zusatzstoffe werden nicht übersetzt, sondern nachgeschlagen — **einmal je Zeichenkette**, dieselbe deutsche Angabe überall dieselbe englische. Allergene im englischen Wortlaut von Anhang II der VO (EU) 1169/2011, Zusatzstoffklassen und Aromen nach VO (EG) 1333/2008 — britische Schreibung in der Kennzeichnung, amerikanische in der Prosa; in der Kennzeichnung zählt der Rechtsbegriff, in der Prosa die Stimme. Herstellerlisten bleiben im Wortlaut, auch wo sie sich untereinander unterscheiden. Wo eine Zutat ein Allergen trägt, ohne es zu nennen, wird es in Klammern hervorgehoben („Bulgur (Weizen)"). Das Wörterbuch gehört ins Repository, und das Gatter prüft dagegen (264b).

**Sichtbarkeitskarten, ein Satz, den ich dreimal vergessen habe:** `/vegan/` rendert jede vegane Karte offen, `/vegetarisch/` jede vegane **und** vegetarische — jede Änderung an einem solchen Gericht ändert beide Dokumente, dazu `/speisekarte/` (geparkt), und Zahlen-Slots (`{vegan}` auf `/` und `/zutaten/`) ändern Dokumente ohne ein Wort Prosa.


## Tranche 5a — der Rahmen der Unterseiten, entschieden am 1. September

**Vier Sachfragen, vier Antworten:** Frittiert wird in **Sonnenblumen- und Rapsöl** (`/zutaten/` nannte nur Sonnenblume, Fried Dream die Mischung — die Mischung stimmt). Pesto Rosso enthält Sahne — die Zeile sagt es jetzt. Elephant Bay kommt aus Stuttgart. Der Fußtext auf `/zutaten/` („liegen noch nicht vor") war seit der Allergenaufnahme falsch und sagt jetzt, dass jede Gerichtseite Allergene, Zusatzstoffe und Nährwerte trägt.

**Neun Funde, alle wie vorgeschlagen:** „Seitenpfad" statt „Brotkrumen" · „Drei Füllungen, mehrere Formen" ohne Zahl (Taib: ohne Zahl ist besser) · Desserts nicht mehr pauschal „warm" · sechs Beilagenzeilen sagen „Nicht vegan." und das Intro kündigt es an · Kurkuma auch auf `/herstellung/` und `/zutaten/` · „Salate schneiden wir im Haus, Bananenbrot und Schokokuchen backen wir selbst" statt „bei Bestellung" und „Desserts" · Griechischer Salat in der Käse-Zeile · „per Messgerät geprüft" statt „täglich".

**Die Lehre dieser Tranche:** Seitentexte, die älter sind als die Gerichtstexte, widersprechen ihnen — Öl, Kurkuma, Desserts, Allergene. Wer ein Gericht korrigiert, hält danach die Seiten dagegen, die über alle Gerichte reden.


## Tranche 5b — die Wissensseiten, entschieden am 1. September

**Die Pasta-Kategorie ist versöhnt.** Die Verwandten-Seite sagte „Nudeln sind … eine Kategorie, in die Manti gehört, nicht" — die Speisekarte seit 262 „streng genommen Pasta", das Fundament der Saucenkarte. Taib nimmt den Satz an: „Pasta ist eine Brücke, wenn man Manti erklären will — und streng genommen gehört Manti dazu: Teig, Füllung, Sauce, gekocht in Wasser. Was Manti nicht ist, ist die Kopie von etwas Italienischem." Der Einwand gegen die Unterordnung bleibt, die Kategorie wird bejaht.

**Die Gewürzmischung:** Sie liegt jeder Manti-Portion bei, außer Melted Heart. **Ihre Zusammensetzung wird nirgends genannt** — die Nuance vom 1. September (Minze und Sumach dürften ihr zugeschrieben werden) ist am 2. September aufgehoben: Betriebsgeheimnis, in Zutatenlisten „Gewürze“, kein Bestandteil wird der Mischung zugeschrieben. Die Kennzeichnung nennt nur, was Pflicht ist: keine der vierzehn Allergengruppen, keine Zusatzstoffe.

**Weiter:** „die meisten das erste Mal bestellen" zweimal neutral · Gattungsaussagen dreimal in Doppelpunkt-Form, dazu die wissenManti-Description in beiden Sprachen (139 → 135) · Neutrum-Reste („gutes Manti", „das Sinop-Manti") auf die Manti · „Manti bekommt Schichten" · **„von Hand"** auf der Anderes-Seite war der handgemacht-Anspruch in anderer Kleidung — gestrichen, mit `{city}` · Pelmeni „in der Bauweise" der nächste Nachbar, Pierogi „in der Idee".


## Tranche 5c — Ernährung, FAQ, Impressum, entschieden am 1. September

**Drei Sachfragen:** Das Restaurant ist geplant — Gespräche laufen, im besten Fall Eröffnung in drei bis vier Monaten. **Auf die Seite kommt davon nur „geplant"**; ein Datum aus Gesprächen ist kein Fakt. Kommt es, wird die Seite umgebaut (18.1, Punkt 3). Die sieben Tage Vorbestellung sind eine feste Foodamigos-Einstellung — die Zahl bleibt, hängt aber an dieser Einstellung. **Zahlungsarten: PayPal über Stripe, alle Karten (auch Amex) über Adyen, bar beim Abholen** — Adyen war dem Gedächtnis unbekannt und gehört in die Datenschutzerklärung.

**Fünf Funde, alle wie vorgeschlagen:** „in zwei der Salate" (Griechischer, Nudelsalat) · die Vegan-Seite kennt die beigelegte Mayonnaise · die FAQ-Adresse als Slots · „Ist Manti türkische Ravioli?" · zwei Verweise von `/vegan/` auf die Beilagenliste (`/speisekarte/#dazu`), sofern `linkHref` Anker trägt. Die Ernährungs-Überschriften behalten „Mannheim" — Suchanfrage, wie die Titel.


## Die Bestellstrecke zieht auf bestellen.mantiandco.com — entschieden Ende August, live seit 1. September

**Nachgetragen am 1. September, nachdem diese Entscheidung eine Sitzung lang nur im Chat existierte** („URL-Struktur der Bestellstrecke umgestalten“, 31. August): Foodamigos meldete den in der Mail (B2) vereinbarten Pfadtausch auf `/bestellen` als technisch nicht machbar. Entschieden wurde die Subdomain als B2-Ersatz — mit der Bewertung, dass sie die sauberere Trennung ist und der SEO-Einwand mit `noindex` auf der ganzen Strecke (B1) seinen Kern verliert. **B2 in `Mail-an-Foodamigos.md` ist damit überholt; die Datei trägt noch den alten Stand.**

**Die vereinbarten Punkte an Foodamigos:** Bestellstrecke ausschließlich unter `https://bestellen.mantiandco.com` · **am www-Eintrag ändern sie nichts** — den stellt Taib selbst um, sobald die Subdomain läuft · `noindex, follow` auf jeder Seite der Strecke, als Meta-Tag oder Header, nicht per robots.txt · Termin nennen; **Taib macht erst eine Testbestellung, dann zieht www um.** Seit dem 1. September ist die Subdomain live (Bildschirmfotos); www liefert übergangsweise weiter den Shop aus — erwartet, kein Fehler.

**DNS und Domain:** Die Zone von `mantiandco.com` liegt bei IONOS **in Taibs Konto**; Foodamigos hat Zugangsdaten und legt Einträge dort selbst an (so auch die Subdomain), das TLS-Zertifikat stellt Foodamigos. Der www-Eintrag ist Taibs Sache. **Niemand fragt diese Dinge erneut ab.**

**Was daraus folgt:** Die Bestellziele in `site.ts` stellen im nächsten Auftrag auf `https://bestellen.mantiandco.com` um (Einstieg ist die Wurzel — Bildschirmfoto vom 1. September); ob `noindex` auf der Subdomain gesetzt ist, wird bei Gelegenheit nachgesehen, nicht angenommen. Der www-Umzug auf den eigenen Hoster ist der Livegang und passiert erst nach Taibs Testbestellung.

**Standalone-Shop ohne Rückweg (2. September):** Der Shop auf der Subdomain trägt keinen Startseite-Tab — laut Foodamigos gibt es den nur im „integrierten“ Modus (Foodamigos betreibt die ganze Domain); Standalone sei für Betreiber ohne Website. **Bewertung: nicht gravierend, kein Grund zur Planänderung** — ihr „braucht man eigentlich nicht“ hieße, die Hauptdomain bei Foodamigos zu lassen, das Gegenteil des Plans. Rückweg-Lage: Bestellknöpfe öffnen im selben Tab (270), Browser-Zurück trägt; `noindex` (B1) klemmt Direkteinstiege ab. Kosmetische Anfrage an Foodamigos gestellt: konfigurierbarer Logo-/Website-Link im Standalone-Shop. **`tasks.mantiandco.com` ist Taibs eigenes Claude-Projekt** (Todos/Einkaufslisten, Vercel) — die tasks-/www.tasks-CNAMEs und beiden `_vercel`-TXT gehören dazu, wandern beim DNS-Umzug 1:1 mit.

## Livegang-Entscheidungen, 2. September spät

**AGB sind für die Website kein Blocker** — auf mantiandco.com wird kein Vertrag geschlossen; AGB und Widerrufsinformation gehören in den Foodamigos-Checkout (Rechtstexte-Entwurf Teil 3.2, Anwalt). **Datenschutzerklärung zum Livegang** liegt vollständig vor (`Datenschutzerklaerung-Livegang.md`, de/en, 13 Ziffern; Variante A/B zur Karten-Zustimmung misst 276; Stand-Datum = Tag des Umlegens). **Getränke:** Taib — alle Elephant-Bay-Sorten vegan, Chips bleiben; Zutatenlisten geliefert (`Getraenke-Kennzeichnung-Aufnahme.md`): 10 einsetzbar, **4 sind Kopierfehler der Quelle** (Cola, Cola Zero, Lemonade Lemon, Lemonade Orange — wortgleich mit Lime Mint) und bleiben zurückgestellt; Peach Zero „mit Süßungsmitteln“ (Sucralose, Acesulfam K); Colas werden „koffeinhaltig“, sobald echte Listen da sind. **Der Shop ist bis Donnerstag offline** — die mit Foodamigos vereinbarte Testbestellung findet Donnerstag zur Öffnung statt, DNS-Rückweg bereit. **Cloudflare-DPA:** gilt automatisch als Teil des Self-Serve-Vertrags (v6.3, 20. Juni 2025) — kein Schalter; PDF zu den Akten.

---

---

# 16. Offene Punkte, nach Empfänger

## 16.1 Bei Taib, sofort

| # | Was |
|---|---|
| 1 | **Metro-Antworten hochladen** — liegen vor, schließen vier Zutatenfragen |
| 2 | ~~Häkchen für Nutella und die Pommes-Beilagen~~ **entschieden am 25. August: wird nicht gesetzt.** Churros bleiben vegetarisch, die Pommes waren nie betroffen (7.7) |
| 3 | ~~Search-Console-Export~~ **erledigt am 25. August**, liegt in `SC-25-08-26/`, ausgewertet in 9.8 |
| 4 | Hostinganbieter festlegen und Art-28-Vertrag — blockiert den Datenschutztext |
| 5 | Speicherdauer der Server-Logfiles beim Hoster erfragen |
| 6 | Branntweinessig-Entscheidung |
| 7 | Schokostückchen entscheiden — Callebaut oder Posner |
| 8 | ~~Rabattdarstellung „15 €" überarbeiten~~ **erledigt, im Gedächtnis nicht nachgetragen — mein Versäumnis.** Aktueller Wortlaut: „Neu hier? 3 € Rabatt auf jede der ersten fünf Bestellungen — 15 € insgesamt. Code: MANTI". **Bleibt vollständig — entschieden am 25. August, Begründung in 15.** |
| 9 | Öffnungszeiten im Google-Business-Profil prüfen |
| 10 | **Die fünf Verwandten-Abschnitte gegenlesen** — Ravioli, Tortellini, Gyoza, Pierogi, Pelmeni auf `/wissen/verwandte/`. Der letzte offene sachliche Vorbehalt an den Wissensseiten (9.6a). Taib am 27. August: „das mache ich, nachdem wir die Texte auf der Seite haben" — sie stehen seit 242 |
| 11 | **Die vierzig auf den Löffel zählen.** Taib: „noch nicht gezählt, das sende ich einfach nach". **Bis dahin steht der Satz nur als Landeskunde über Kayseri auf der Seite, nicht als Angabe über unsere Manti** — Regel 1.1 |
| 12 | **In der Bestellstrecke prüfen, ob bei The Original die Tomatensauce vorausgewählt ist.** Seit Commit `fbdda09` behauptet `/wissen/manti/`, sie gehöre klassisch dazu (9.6c) |
| 13 | **Foto der vierzehn Elephant-Bay-Zutatenlisten** — schließt den Getränkerückstand |
| 14 | **Shoptext: Cassis aus der Bestellstrecke nehmen.** Die Website ist seit Auftrag 240 durch, die Foodamigos-Seite nicht (16.6, Punkt 27) |

**Die Aggregatorenfrage ist am 25. August entschieden — siehe 15.** Sie steht hier nicht mehr offen.

## 16.2 Bei Lieferanten

| # | An wen | Was |
|---|---|---|
| 10 | JM Posner | Größere Stückgröße? Muster? Vegan-Auslobung erklärt? |
| 11 | Baktotaal | Vanillearoma-Ursprung, Alkohol, Halal-Zertifizierung, Stückgröße |
| 12 | Baumann | Zertifizierungsstelle, Akkreditierung, Betäubung, Verlängerungszertifikat |

## 16.3 Bei Foodamigos — Mail ist raus

A1 Vertragspartner · A2 Art. 26/28 · A3 Ersetzung und Verlinkung der Rechtstexte · B1 `noindex` · B2 Pfadtausch und `www` · B3 `maximum-scale` · C1 Kundendaten · C3 Speicherdauer · C4 Zahlungsdienstleister · C5 Cookie-Liste · C6 automatisierte Entscheidungen · C7 Prozentsatz der Servicegebühr

## 16.4 Beim Anwalt

Sieben Fragen, siehe 12.5. **Erst geben, wenn Foodamigos geantwortet hat.**

## 16.5 Im Website-Projekt

| # | Was |
|---|---|
| 13 | **Auftrag 235 schreiben.** Reihenfolge: Kommentar-Gatter (88 unbelegte Kontrastzahlen, 11.2) · JS-Adressensonde mit Selbsttest (11.1) · dann die Ausschlussliste von 234 |
| 14 | Nature's Palette: Walnüsse als zweite Empfehlung auch im **Website**-Text |
| 15 | `additivesOptional` oder Beilagensammlung für Schokosauce und Beerenmix |
| 16 | Beilagensammlung `sides` mit Name, Zeile und Allergenen — Claude Codes Vorschlag aus 225. Braucht: welche Beilage an welchem Gericht wählbar ist. `home.sides.marks` wird gestrichen |
| 17 | `link-in-text-block` — dieselbe Farbblindheit wie `color-contrast`, aber kein zweites Gatter dahinter |
| 18 | Kommentar in `[dish].astro:69–74` — teilweise in 217 berichtigt |
| 19 | `site-audit.md` Zeile 244 und 774 tragen den alten Shop-Wortlaut mit „fermentiert" |
| 20 | Alles aus der Ausschlussliste von Auftrag 234 (siehe 11.1) — gehört in Auftrag 235 |

## 16.6 Texte, die noch fehlen

| # | Was | Blocker |
|---|---|---|
| 21 | `/halal` | Lieferantenfrage |
| 22 | ~~Fünf Wissensseiten~~ **erledigt: drei Seiten, gebaut in 242, korrigiert in 243** (9.6, 9.6a, 9.6b). Die Zahl fiel von sieben auf fünf auf zwei auf drei — der Weg dahin steht in 9.6 und ist die Begründung, nicht nur die Chronik | — |
| 23 | **FAQ-Seite als Verteiler** — jetzt an der Reihe, sobald 244 durch ist | keiner |
| 24 | FAQ-Block auf der Startseite, sechs bis acht Fragen | keiner |
| 25 | Einleitungstext `/speisekarte` — trägt er die Breite? | keiner |
| 26 | `llms.txt`, Wikidata, GBP-Ausbau | später |
| 26a | ~~Mehrsprachigkeit — Fundament~~ **erledigt in Auftrag 236**: Schema, `t()`, elftes Gatter (11.7) | — |
| 26b | **671 englische Textschlüssel schreiben** (Stand nach 243; 592 vor 242, 667 nach 242) — plus das fest verdrahtete Deutsch im Markup (10.1b). **In einem Zug, nicht nachgezogen** | keiner, aber viel Arbeit |
| 26c | **Sprachgerüst auf N Sprachen** — `i18n()`, `Localized<T>` und `routes.text` aus `LANGS` erzeugen statt buchstabieren | keiner, und heute am billigsten |
| 26d | ~~Türkisch~~ **zurückgestellt** — kein Termin für 592 türkische Schlüssel, also kein Bau (15) | — |
| 27 | ~~Exotic rein, Cassis raus~~ **erledigt in Auftrag 240** (11.9). Offen ist nur noch der **Shoptext** — die Website ist durch, die Bestellstrecke nicht | keiner |
| 28 | **Paarungen gegen `drinks.json` prüfen** — `pairing` ist Fließtext, kein Verweis; ein gestrichenes Getränk lebt in der Prosa weiter, ohne dass ein Lauf rot wird (7.10) | keiner |

**Liefergebietsseiten stehen hier bewusst nicht mehr.** Sie sind in 4.3 ersatzlos gestrichen; ältere Dateien führen sie noch als „später".

**Zur FAQ:** Aufteilung als Wegweiser, nicht als vierte Fassung. Startseite unten sechs bis acht Fragen mit Verweis · FAQ-Seite alle Fragen, kurz beantwortet, als Verteiler · Ernährungs- und Wissensseiten tragen die Tiefe.

**Warnung:** Google zeigt seit 2023 keine FAQ-Auszeichnungen mehr in den Suchergebnissen, außer bei Behörden- und Gesundheitsseiten. Der Nutzen ist heute nur noch das Ranking auf die konkrete Frage.

## 16.7 Punkte, die aus älteren Dateien stammen und nicht verlorengehen dürfen

Diese standen in Dateien, die mit diesem Dokument ersetzt werden. Sie sind **nicht** entschieden — sie sind nur aufbewahrt.

CMYK- und Pantone-Werte für den Druck · die dunkle Variante der Website · die nie gezählte Stückzahl je Portion · der Satz „vier von sieben Manti ohne Fleisch", der an der aktuellen Karte nachzuzählen ist, bevor er irgendwo steht · das Kayseri-Material für die Wissensseiten · das Kundenzitat zur Sauce und zur Gewürzmischung · MapTiler und Stadia als Kartenalternativen zu Google · die drei offenen Verstöße im Kontrast-Gatter · die Frage, ob Fotos oder Zusätze auf der Karte Vorrang haben · „die buttrige Sauce" in den sieben Plattform-Texten · **ob die Getränkepaarungen das ganze Sortiment abdecken sollen** (7.10 — elf von vierzehn, und der Cassis-Wechsel ändert daran nichts, weil Exotic den Platz eins zu eins einnimmt).

**Erledigt, damit es niemand erneut aufwirft:** Die Einordnung von Pomegranate stand lange offen. In `drinks.json` trägt `eb-pomegranate` das Feld `kind: "ice-tea"` — **die Frage ist an den Daten entschieden.**

**Zwei Gestaltungspunkte aus Taibs eigener Beobachtung — beide erledigt in Auftrag 232, hier nur noch zur Nachvollziehbarkeit.** Die Kopfleiste wurde beim Überfahren golden und wirkte neben dem roten Bestellknopf als zweite Signalfarbe; behoben in `daa0a9a`, die Rückmeldung trägt jetzt allein der Strich. Das Menü schloss nicht beim Tippen daneben; behoben in `a5db37a`, ohne Skript.

**Punkte an Bildern und Video, die an keinem Auftrag hängen:** Prüfung auf einem iOS-Gerät · ein Produktionsfoto · ein Video im Format 9:16 · ein Nachschnitt für `suesskartoffel-pommes` · vier Kacheln zeigen noch einen Requisitenrand.

**Ein Nachtrag zur Wortmarke, damit die Frage nicht wiederkehrt:** Eine nachgelieferte Fassung war eine andere Zeichnung — viewBox 2446,38 wurde zu 2471,18, alle neun Pfade geändert. Taib hatte zwischenzeitlich eine geänderte Fassung gespeichert und sich dann für das Original entschieden. **Der aktuelle Bestand im Repository ist der richtige.**

**Ein Vorbehalt an Auftrag 232:** Er wurde mit der Callebaut-Fassung ausgeführt, also mit Sojalecithin in der Zutatenzeile. **Fällt die Entscheidung in 14.7 auf JM Posner, muss dieser Abschnitt nachgezogen werden** — sonst steht ein Allergen im Text, das im Produkt nicht mehr drin ist.

## 16.8 Andere Arbeitsstränge

**Nicht Teil des Relaunchs, aber Teil des Projekts.**

**Verpackung und CPLA-Besteck.** Europäische Anbieter für die Einzelstandort-Phase (Duni Group, BioPak), mit dem Plan, bei Franchise-Volumen auf Direktimport umzustellen (Bioleader® als führender Kandidat). Zentrale Datei: `/areas/manti-product-ops.md` — bei Beschaffungs- und Verpackungsthemen lesen und fortschreiben.

**Bildbearbeitung.** Freigestellte Produktfotos werden auf einen Leinen-Flat-Lay-Hintergrund (`background.PNG`) komponiert, `TheOriginal.png` dient als Referenz für Licht und Platzierung. **Die Farbsättigung muss aktiv geschützt werden** — Speisen nicht entsättigen, eher leicht anheben gegen den bewusst entsättigten Hintergrund.

**Franchise.** Der Unternehmensgegenstand im Handelsregister nennt ausdrücklich „die Entwicklung, der Aufbau und die Vergabe von Franchise- und Lizenzsystemen". Die Website-Architektur trägt das bereits: Ordner je Stadt auf einer Domain, `deliveryAreas` als umschaltbares Datenfeld, Standortseiten aus einer Liste.

**Gesellschaftsverhältnisse.** Stammkapital 25.000 €, Anteile bei Taib Demirci und Güney Malatyali. **Beide einzelvertretungsberechtigt und von § 181 BGB befreit.** Gesellschaftsvertrag vom 06.07.2021, zuletzt geändert 22.08.2025. Vormals DS eCom Solutions UG. **Zur Anteilszahl siehe den Vorbehalt in 5.1.**

---

# 17. Lehren

**Ein Vorbild trägt nur so weit, wie die Form gleich ist.** Auftrag 242 verlangte `[wissen].astro` „nach dem Vorbild von `[diet].astro`" und übersah, dass `/vegan/` ein Wegstück hat und `/wissen/manti/` zwei. **Maßgeblich war nicht die Art der Seite, sondern die Zahl der Segmente** — und der passende Präzedenzfall, `standorte/[...location].astro`, stand im selben Ordner.

**Eine Aussage, die an fünf Stellen steht, wird an fünf Stellen korrigiert.** Die Tomatensauce fehlte nicht nur dort, wo „manchmal" stand, sondern in vier weiteren Absätzen, die sie gar nicht erwähnten. **Wer nur die auffällige Stelle korrigiert, erzeugt einen Auftritt, der sich selbst widerspricht** — dieselbe Lehre wie beim Wortlaut aus 213, hier aber durch Weglassen statt durch Umformulieren.

**Ein Verbot erzeugt Schweigen, ein Auftrag zum Melden erzeugt Befunde.** Auftrag 240 verbot, Kommentare anzufassen: null Funde, zwei falsche Zahlen blieben stehen. Auftrag 241 verlangte, überholte Zahlen zu nennen statt zu ändern: vier Funde, kein Eingriff. **Das Risiko ist dasselbe, der Ertrag nicht.** Gehört ab sofort in jeden Auftrag als eigener Punkt.

**Eine Messung des eigenen Auftritts ist keine Messung des Marktes.** Die Search Console zeigt nur Anfragen, bei denen die Domain erscheinen durfte. Wer daraus ableitet, was es an Nachfrage gibt, misst seinen eigenen Schatten. **Der Vorbehalt stand dreimal einzeln in 9.6 und wurde trotzdem nicht auf die Beweisführung angewandt.**

**Ein Grund, der nur einen Abrufweg kennt, ist zu eng.** `/wissen/mal-was-anderes/` wurde gestrichen, weil es keine Suchabsicht dafür gibt — und wieder aufgenommen, weil semantischer Abruf durch Sprachmodelle keine Suchabsicht braucht, sondern ein Dokument.

**Wer eine Schwäche aufschreibt, hat die Folgerung noch nicht gezogen.** Der Fünf-Seiten-Vorschlag in 9.6 enthielt bei drei von fünf Seiten den Hinweis, dass keine Nachfrage gemessen ist — sauber notiert, jeweils an seiner Stelle, und deshalb nie zusammengezählt. **Ein Vorbehalt je Punkt ist ein Vorbehalt; drei Vorbehalte in einer Liste sind ein Ergebnis.** Taib hat es aus dem Leseeindruck gesehen, ohne die Zahlen zu kennen.

**Ein Einwand kann richtig sein und trotzdem falsch begründet.** „Eine gute Seite rankt besser als fünf kurze" stimmt und vergleicht das Falsche. Die Antwort lautet weder Zustimmung noch Ablehnung, sondern: den Vergleich richtigstellen und dann neu rechnen.

**Erst suchen, dann behaupten.** „Dazu habe ich keine Informationen" ist keine zulässige Antwort, solange die Projektdateien und die bisherigen Sitzungen nicht durchsucht sind.

**Eine Gegenprobe, die nicht anschlägt, ist zuerst ein Verdacht gegen die Gegenprobe.** Claude Code in 221: Er hatte in `@layer base` eingespeist, wo `@layer components` gewinnt, und dem grünen Ergebnis fast geglaubt. Dieselbe Klasse Fehler in 228, wo seine Sonde `color` an der Hülle las statt `fill` am SVG.

**Wenn eine Aussage geändert wird, wird die Aussage beauftragt, nicht ein Wortlaut.** Fehler in 213: Ein Wortlaut wurde zitiert; drei weitere Fassungen derselben Aussage blieben stehen, zwei davon in den Suchmaschinen-Beschreibungen.

**Unbelegbare Zahlen werden zurückgezogen, nicht abgeschwächt.** Claude Code in 228 zu seinen eigenen „157 Verweisen" aus 227: Die Zahl stand ohne saubere Definition der gezählten Menge im Bericht. Dasselbe gilt für die zwei Drittel in 2.7.

**Eine Korrektur wird an einer Messung beauftragt, nicht an einer Liste.** Die Preiskorrektur wurde aus einer Aufzählung heraus angeordnet; eine Aufzählung ist kein Abbild des Bestands.

**Ein Gatter, das man beim ersten Konflikt lockert, ist keins mehr.** Der zeytinyağlı-Satz hätte durch eine Ausnahme im Anrede-Gatter durchgehen können — dann wäre auch „Sie erhalten eine Nachricht" durchgegangen. **Der Text weicht aus, nicht die Prüfung.**

**Ein dauerhaft rotes Gatter wird genauso ignoriert wie ein blind grünes.** Deshalb werden die Befunde 4 bis 6 in 234 erst gemeldet und dann scharf gestellt.

**„Je Abschnitt ein Commit" gilt nur für Abschnitte, die etwas ändern.** Ein leerer Commit für einen Melde-Abschnitt wäre eine Behauptung von Arbeit.

**Ein Kommentar im Quelltext ist keine Messung.** Er sieht aus wie eine — er steht neben dem Code, er nennt eine Zahl mit Komma, er wurde einmal von jemandem geschrieben, der es wissen musste. Er altert trotzdem, und niemand merkt es. Der Beleg steht in 11.2: Ich habe die falsche 3,4 : 1 aus `Voices.astro:464` ins Gedächtnis übernommen, ohne zu prüfen, und 88 solcher Kommentare stehen noch im Bestand. **Eine Zahl gilt, wenn sie aus einem Lauf kommt, nicht wenn sie irgendwo steht.**

**Eine Prüfung, die im selben Auftrag entsteht wie die Änderung, die sie fangen soll, deckt diese Änderung nicht.** Auftrag 236: Die 91 Umstellungen auf `t()` und das Gatter, das sie prüft, lagen in einem Auftrag — die Umstellungen liefen also ungedeckt. **Vier davon gingen daneben, 181 mal sichtbar auf der Seite** (11.7a). Der Satz stand hier zuerst als Überlegung und ist am selben Tag ein Beleg geworden. **Erst das Netz, dann der Sprung.**

**Ein Gatter, das die Daten prüft, hat die Seite nicht geprüft.** Elf Gatter grün, `sprache` meldet `74 von 74` — und die Startseite zeigt statt des Gerichtsnamens `[object Object]`. Zwischen „der Eintrag existiert" und „das Wort steht auf der Seite" liegt die ganze Ausgabekette, und niemand sah hin. **Die billigste Prüfung ist die am Ende der Kette: Was ausgeliefert wird, wird gelesen.**

**Ein Prüfwerkzeug fällt zuerst in den Fehler, gegen den es gebaut wurde.** `sprache.mjs` zählte eine nicht deklarierte englische Route als fertig — eine vergessene Übersetzung, die aussah wie eine erledigte, im Werkzeug gegen vergessene Übersetzungen. Gefunden hat es die Gegenprobe, nicht das Gatter. **Das ist das stärkste Argument für Selbsttests, das dieses Projekt bisher hat.**

**Eine Zahl, die aus dem Text verschwindet, kann nicht falsch werden.** In Auftrag 237 wurde „Vierzehn Sorten" aus dem Getränketext gestrichen, mit der Begründung, eine Stückzahl gehöre nicht als Prosa neben die Liste, die sie erzeugt. **Am nächsten Tag kam Exotic, und der Text war ohne eine einzige Änderung weiterhin richtig.** Die Regel hat sich innerhalb von vierundzwanzig Stunden selbst bezahlt — das ist der kürzeste Beleg im ganzen Gedächtnis.

**Ein Bericht kann einen Fehler an einer Stelle verorten, an der er nicht ist — zweimal passiert, zweimal durch Nachsehen abgefangen.** Erst die Sache mit den „Colas", dann der Dateikopf von `dish.ts`. In beiden Fällen stand im Auftrag „ich habe nachgesehen und nichts gefunden — findest du dort doch etwas, benenne es im Bericht, statt es mitzuändern", und in beiden Fällen war die Stelle in Ordnung. **Ein Auftrag, der eine fremde Fehlermeldung ungeprüft weiterreicht, lässt eine richtige Zeile ändern.**

**Wer einen eigenen Fehler findet, prüft die ganze Klasse und nicht den Fund.** Claude Code hat in Auftrag 237 eine falsche Ortsangabe von sich selbst gemeldet, danach den Bestand nach derselben Aussage durchsucht und ein zweites Vorkommen gefunden. Ein Fehler, der einmal geschrieben wurde, wurde meistens zweimal geschrieben.

**Ein Gatter misst, was es anfassen kann, nicht was es prüfen soll.** Der Kontrast-Riegel läuft über Textknoten — ein Knopf aus reinem SVG existiert für ihn nicht. Das Hover-Gatter beobachtet eine Liste von Eigenschaften — eine dickere Unterstreichung steht nicht darauf. **Wer wissen will, was ein Gatter deckt, liest seine Sammelfunktion, nicht seinen Namen.**

**Dünner Inhalt ist eine Frage der Substanz, nicht der Wortzahl.** Siehe 4.1 — die erfundene 400-Wörter-Regel.

**Ein Design-Skill kann eigene Anweisungen mitbringen.** In der Sitzung tauchte eine Vorgabe auf, die von niemandem im Projekt kam: „testimonial cards grid, dark tiles, GSAP scroll-reveal stagger". Ursache war ein installierter UI/UX-Skill. Claude Code hat nichts daraus gebaut und nachgefragt. **Der Skill wurde abgeschaltet.**

**Zwischenzustände sind normal.** Die Aufträge liefen mehrfach verschränkt — 224 Abschnitt 1, dann 225 vollständig, dann 224 Abschnitte 2 bis 4. Das ist unschön, aber unschädlich, solange die Berichte es benennen.

**Ein Generator, der schreibt, räumt nicht auf.** Ich hatte in dieses Dokument geschrieben, die Cassis-Flaschenbilder verschwänden beim nächsten Lauf von selbst, sobald der Eintrag aus `drinks.json` fällt. `derive-bottles.mjs` iteriert aber über die Daten und schreibt; es vergleicht nicht mit dem Zielordner. **Der Satz war schon im Gedächtnis, ehe ich nachgesehen habe** — die Korrektur steht in 7.10 mit dem falschen Satz daneben, damit die Richtung erkennbar bleibt. Die Regel dahinter ist allgemein: **Wer behauptet, etwas geschehe automatisch, muss die Stelle gelesen haben, die es tut.**

**Eine Vorgabe, die einen Zustand voraussetzt, muss den Zustand prüfen.** Auftrag 240 schrieb „mit `git mv`, nicht mit `mv`" und begründete es über zwei Absätze. `git mv` scheiterte, weil die Datei nie eingecheckt war — ein neu abgelegtes Foto ist im Arbeitsbaum und nicht im Index. **Die Begründung war so ausführlich, dass sie die ungeprüfte Annahme darunter verdeckt hat.** Je überzeugender eine Anweisung klingt, desto eher wird ihre Voraussetzung nicht mehr nachgesehen.

**Ein Verbot schützt nur, woran man beim Formulieren gedacht hat.** Abschnitt 7 desselben Auftrags verbot, Kommentare anzufassen — gemeint war das Wort „vierzehn". Zwei Kommentare tragen aber eine gemessene Spanne, die derselbe Auftrag verändert hat, und die stehen seitdem falsch da. **Eine Nichtanfassen-Liste ist eine Aussage über den ganzen Bestand, nicht über die Stellen, die einem eingefallen sind.**

**Eine Zahl in einer Merkliste altert schlechter als eine Zahl im Text.** „Drei vegan-Chips hängen an dieser einen Einstellung" stand seit Auftrag 231 in 7.7 und in zwei Aufgabenlisten. **Zwei der drei stimmten nie** — die Pommes-Saucen waren immer Zuwahl, und drei andere Stellen desselben Dokuments sagten das auch. Der Satz überlebte, weil eine Aufgabenzeile nur gelesen und nicht geprüft wird. **Gegen Prosa im laufenden Text gibt es Gatter; gegen eine Aufgabenliste gibt es keine.** Wer eine Aufgabe abhakt, prüft ihre Begründung mit.

**Eine Aussage steht nicht nur im Text, sondern auch im Kopf des Dokuments.** Die Tomatensauce fehlte an fünf Stellen, dann an acht, tatsächlich an elf. Beim zweiten Zählen habe ich `src/content/copy/` durchsucht und `meta.json` nicht — **also die Beschreibung genau der Seite, deren ersten Absatz ich gerade korrigierte.** Wer eine Behauptung im Fließtext ändert, sucht sie in derselben Runde in Title, Description, `alt`-Text und Strukturdaten. **Der Suchraum ist das Dokument, nicht die Datei.**

**Eine Commit-Zahl ist eine Vorgabe über die Form, die zur Vorgabe über den Inhalt wird.** Auftrag 243 §10 schrieb „Zwei Commits". Als beim Arbeiten eine Verbesserung dazukam, war sie nicht mehr unterzubringen: ein dritter Commit hätte den Auftrag verletzt, ein `--amend` die Git-Regel. Die Verbesserung wurde verworfen und gemeldet — richtig gehandelt, falsch beauftragt. **Commit-Grenzen vorgeben, nicht Commit-Zahlen.**

**Eine Vorgabe, die eine Funktion benutzt, muss wissen, worüber die Funktion zählt.** Ich habe angewiesen, `splitParts()` je Punkt aufzurufen. Die Funktion prüft jede Wendung gegen alles, was sie bekommt, und wirft bei null Treffern — **ihre Regel gilt für den Abschnitt, nicht für seine Glieder.** Vier Verweise auf vier Punkten hätten den Bau angehalten. Der Fehler ist derselbe wie beim `git mv`: eine ausführlich begründete Anweisung über einen Aufrufweg, den ich nicht gelesen hatte.

**Ein Feld, das aussieht wie ein Verweis, ist noch keiner.** `pairing` nennt Getränke beim Namen, und das liest sich wie eine Verknüpfung mit `drinks.json`. Im Schema ist es ein gewöhnlicher Text. **Deshalb kann ein Getränk aus dem Sortiment fallen und in der Prosa weiterleben, ohne dass eines von elf Gattern rot wird.** Die Frage „was prüft das eigentlich?" gehört an jedes Feld, dessen Inhalt anderswo auch vorkommt.

**Eine falsche Zahl wird entfernt, nicht berichtigt.** Claude Code hat in 244 zweimal eine überholte Zahl aus einem Kommentar geworfen, statt sie nachzuziehen — im Kopf von `anrede.mjs` und bei „den sechs Abschnittstiteln". Beide Kommentare stimmen seitdem dauerhaft, weil sie nichts mehr behaupten, was sich bewegt. **Eine Zahl in einem Kommentar altert immer, weil niemand einen Kommentar misst.** Sie gehört dorthin, wo sie erzeugt wird — in die Gatterausgabe —, oder nirgendwohin.

**Der Suchraum ist der Inhaltsbaum, nicht der Ordner.** Die Tomatensauce wurde viermal gezählt: fünf, acht, elf, zwölf. Die Lehre aus der dritten Runde lautete „der Suchraum ist das Dokument, nicht die Datei", und sie war zu klein. Die zwölfte Stelle lag in `dishes.json`, also außerhalb von `copy/` — im Kurztext des Gerichts selbst, der zugleich das Overlay trägt. **Jede Runde hat den Suchraum vergrößert, nachdem sie falsch lag.** Eine Aussage darüber, wie ein Gericht serviert wird, wird über alles unter `src/content` gesucht, in einem Zug.


**Eine Gegenprobe wird mit der Kopie zurückgenommen, nicht mit `git checkout`.** In 245 hat Claude Code nach einer absichtlich herbeigeführten Fehlmessung `git checkout -- Menu.astro` gerufen und damit seine eigenen, noch nicht committeten Änderungen desselben Auftrags vernichtet. **HEAD enthält nicht, was noch nicht committet ist.** Wer einen Zustand herstellt, um ihn zu widerlegen, sichert die Datei vorher nach `/tmp` und kopiert sie zurück. „Zustand wiederherstellen" heißt nicht „auf HEAD zurückwerfen".

**Der Suchraum gilt auch für Code, nicht nur für Texte.** Die Lehre aus der Tomatensauce — vier Zählrunden, jede zu klein — habe ich beim nächsten Auftrag selbst nicht angewandt: Auftrag 246 nannte zwei Stellen, an denen ein roher Datenwert als Chip ausgegeben wird, und es waren vier. Wer eine Fehlerklasse benennt, zählt sie über den ganzen Baum aus, bevor er den Auftrag schreibt — nicht über die Dateien, die ihm gerade offen liegen.

**Der Datenwert und der Kommentar daneben sind zwei Quellen.** In 246 habe ich behauptet, jede Combo habe ein fest zugeordnetes Getränk, weil im Datensatz `drink: "eb-peach"` stand. Zwölf Zeilen weiter erklärt das Schema, das sei ein Beispiel und bestellt werde frei. Ein Feld sagt, **was** dasteht; der Kommentar sagt, **was es bedeutet**. Wer nur das erste liest, hat den Quelltext nicht gelesen, sondern nur die Hälfte davon.


**Eine Null oder eine Eins, die wie eine Antwort aussieht, wird nachgesehen.** Viermal in fünf Aufträgen: `<span class="chip">` fand null Treffer, weil Astro Scope-Hashes anhängt · das Overlay maß null Zeilen, weil die geparkte Hülle statt des Dialogs vermessen wurde · `grep -c '<loc>'` gab 1, weil die Sitemap eine einzige Zeile ist und `-c` Zeilen zählt · ein Suchmuster meldete 33 tote Verweise, weil `.json` als `.js` gelesen wurde. Jedes Mal hätte die erste Zahl nach Erfolg ausgesehen. **Eine Messung, die auf Anhieb ein rundes Ergebnis liefert, ist zuerst ein Verdacht gegen die Messung.**

**Eine behauptete Behebung ohne Gegenprobe ist keine.** In Auftrag 249 habe ich einen systematischen Zählfehler benannt — meine Zerlegung der Ausfuhren zählte den Zeilenumbruch der Kopfzeile als Zeile eins — und „behoben" geschrieben. Behoben war nichts; ich hatte die Ursache beschrieben und mit derselben Zerlegung weitergearbeitet. Sämtliche Zeilennummern in Auftrag 250 waren wieder um eins zu hoch. **Eine einzige Nummer gegen die Datei zu prüfen hätte gereicht.**

**Alt/Neu-Paare werden gegen einen frischen Auszug geschrieben, nicht gegen einen alten.** Auftrag 249 zitierte einen Satz im Stand von vor 245 — geändert hatte ihn ich selbst, vier Aufträge zuvor. Sechzehn von siebzehn Ketten passten, weil die übrigen Stellen zufällig unberührt geblieben waren. Ein Auszug altert mit jedem Auftrag, der auf ihn folgt.

**Eine Zahl in einem Kommentar wird gestrichen, nicht nachgezogen — und wo es geht, durch einen Verweis ersetzt.** Auftrag 251 hat sechs zweite Nennungen entfernt und drei weitere durch Verweise auf die Konstante ersetzt, die sie tragen. **Ein Verweis kann nicht veralten.**

**Ein Sollwert, den nur ein Mensch nachzieht, wird irgendwann nicht nachgezogen.** Neun standen drei Aufträge lang falsch, und die Warnung stand bei jedem Lauf in der Ausgabe. Wo eine unabhängige Deklaration existiert — `routes.ts` für Routen und Ansichten —, gehört der Sollwert von dort abgeleitet. Ein Handwert ist nur dort richtig, wo es keine zweite Quelle gibt.


**Zeilennummern gelten in einem Auftrag nur bis zu dem Abschnitt, der dieselbe Datei anfasst.** In 252 nannte §5 die Zeilen 169 und 171; richtig waren 248 und 250, an beiden Stellen genau 79 Zeilen Differenz — die Zeilen, die §2 und §3 desselben Auftrags vorher in dieselbe Datei geschrieben hatten. Die Nummern stammten aus dem Auszug und waren dort richtig; **falsch wurden sie durch den eigenen Auftrag, bevor der spätere Abschnitt an die Reihe kam.** Ab da gilt allein die Zeichenkette.

**Die Gegenprobe prüft nicht nur die Änderung, sondern die Prüfung.** Befund 10 — der tote Fokusring in `a11y.mjs` — ist nur aufgefallen, weil eine Gegenprobe nicht fiel, die hätte fallen müssen. Über zwanzig Aufträge lang meldete das Gatter „0 ohne Fokusring" und las dabei nichts ab. **Eine Prüfung, die noch nie gefallen ist, ist keine bestandene Prüfung, sondern eine unbelegte.** Wer ein Gatter erweitert, lässt es vorher einmal fallen.

**Eine Übermeldung ist genauso kaputt wie eine Untermeldung.** Die erste Reparatur des Fokusrings meldete 78 Halte, weil `.card__link` den Ring auf `::after` zeichnet und die Abfrage nur das Element ansah. Ein Gatter, das Richtiges meldet, wird abgeschaltet — von Hand oder im Kopf.


**Ein Abbruchkriterium muss den echten Mechanismus treffen, sonst schützt es nichts.** 256 §0 verlangte Abbruch, wenn die Dokumentzahl steigt — englische Seiten können aber gar nicht durch Text entstehen, weil es keinen `/en/`-Erzeuger gibt. Das Kriterium hätte nie angeschlagen. Der echte Fehlmechanismus war ein anderer (`builtLangs` → hreflang → `sprache`), und gefunden hat ihn nur die Einwegprobe. **Wer einen Auftrag mit einer Sicherung versieht, muss wissen, wovor sie sichert — sonst ist sie ein Placebo mit Paragraphenzeichen.**

**Die Antwort lesen, nicht die eigene Frage darin bestätigt sehen.** Taibs „Lieber verstecken … 80–85 % kommen mobil" habe ich als Zustimmung zu meiner Zweiteilung gelesen; es war das Gegenteil. Der Rollbalken blieb am Telefon einen Auftrag lang stehen, und die Begründung dafür stand in meiner Handschrift im Gedächtnis. **Eine Antwort, die zur eigenen Frage passt, ist zuerst ein Verdacht.**

**Zahlen in Dokumenten setzt ein Skript, nie die Hand.** Das Tranche-1-Dokument trug 26 falsch gezählte Zeichenzahlen und zwei Grenzverletzungen, die Speisekarten-Angabe im Auftrag war um eins daneben, 253a hatte zwei Attribute zu viel gezählt. Jedes Mal eine Zahl, die richtig aussah. **Eine Zahl, die kein Skript gesetzt hat, ist in einem Dokument dieses Projekts nicht zulässig.**

**Eine Vorhersage vor der Messung ist der Unterschied zwischen Messung und Ausrede.** 255 hat +3 statt +13 vorhergesagt, bevor der erste Edit lief; 256 hat 8/33 Neumessungen vorhergesagt und dreimal getroffen. Wer hinterher erklärt, warum die Zahl anders ist, erklärt; wer vorher sagt, welche kommt, misst.


**Einsetzblöcke werden aus der abgenommenen Datei erzeugt, nicht abgetippt.** In 258 stimmten die 27 per Skript gezogenen Zeichenzahlen auf den Punkt, und die zwei von Hand geschriebenen waren falsch — die Datei hatte recht, die Zahlen kippten auf dem Weg durch meine Hände. In 259 kam jede Zahl aus dem Skript, und jede traf. **Der Weg von der Datei in den Auftrag ist eine Übertragung, und jede Übertragung von Hand ist eine Fehlerquelle** — auch bei drei Zahlen, auch wenn sie einfach aussehen.

**Auch das Gedächtnis des Ausführenden verdichtet Ziffern.** 54 803 statt 54 862, gefangen nur durch Nachmessen (257). Was Claude Code „sich merkt", ist kein Ort für etwas, das ein anderer Rechner braucht — die Toolchain-Abhängigkeit aus 259 gehört ins Repository, nicht in ein Arbeitsgedächtnis, das beim Zusammenfassen Zahlen verliert.


**Eine Vorhersage steht in der Einheit, in der das Gatter zählt.** 255 hatte gezeigt, dass `sprache` Hüllen zählt, nicht Werte. In 261 habe ich trotzdem 83 Werte vorhergesagt — Zahlen, die in der Ausgabe nie erscheinen können. Claude Code hat umgerechnet und getroffen; die Vorhersage war trotzdem keine. **Wer ein Gatter voraussagt, hat vorher gelesen, was es zählt.**

**Ein Slot, der existiert, wird benutzt.** `{city}` gab es, und „Mannheim" stand an acht Stellen fest — zwei davon aus meinem Diktat, eine Woche nachdem der Standort-Titel ins `Localized` wanderte. Straße und Zeiten liefen längst über Slots; der Stadtname war die Lücke, weil er in jedem Satz natürlich klingt. **Die natürlichste Stelle für ein Literal ist die, an der man es zuletzt sucht.**


**Die Basis einer Vorhersage kommt aus dem letzten Bericht, nie aus dem eigenen letzten Auftrag.** In 262 habe ich 176/536 vorhergesagt — meine eigenen, vom 261er-Bericht bereits korrigierten Auftragszahlen, recycelt. Dass die Summe 712 nicht auf die 713 Schlüssel aufging, hätte es sofort verraten: **Eine Summe, die nicht aufgeht, ist die billigste aller Prüfungen.** Claude Code hat die Basis neu gemessen, vorab festgehalten und auf den Punkt getroffen — zweimal in einem Auftrag (auch `budget` 8/33 gegen meine 7/34, weil ich zwei Seiten der Sichtbarkeitskarte vergessen hatte). Wer eine Erwartung aus einer Karte ableitet, leitet sie vollständig ab — oder schreibt in den Auftrag, dass der Ausführende sie ableitet und vorab festhält. Das Zweite hat sich als das Verlässlichere erwiesen.


**Eine Kurzschrift unterdrückt mehr, als ihr Kommentar begründet.** `overscroll-behavior: none` sollte das senkrechte Überziehen bändigen und nahm die waagerechte Geste still mit — ein Kommentar, der nur eine Achse erklärt, über einer Regel, die beide trifft. Wer eine CSS-Kurzschrift setzt, setzt alles, was sie zusammenfasst; und wer einen Auftrag über eine Eigenschaft schreibt, benennt beide Formen, Kurzschrift und Langschrift — sonst heißt „entfernen" zweierlei.


**Eine Hausregel gilt für ihren Fall, nicht für ihr Wort.** Die Singular-Regel gilt für Manti als Gerichtsname. In 263 habe ich sie mechanisch auf einen Satz angewandt, der das Wort „Manti" trug, aber die Stücke definierte — und 262 §6 hatte diese Klasse ausdrücklich zurückgestellt. Das Ergebnis war grammatisch richtig und inhaltlich falsch. **Bevor eine Regel angewandt wird, wird der Fall bestimmt, nicht das Wort gesucht.**


**Eine Prüfung, die nie gegen echte Daten gelaufen ist, ist ungeprüft.** Die Zutatenprüfung in `sprache` stand seit ihrem Bau grün — weil das, was sie prüfen sollte, nie existierte. Grün ohne Gegenstand ist kein Befund. Wer ein Gatter baut, führt es einmal gegen Daten, die es fallen lassen müssten; sonst ist das Gatter eine Behauptung (264).


**Eine Entscheidung, die nur im Chat gefallen ist, ist für die nächste Sitzung nie gefallen.** Die Subdomain-Entscheidung wurde beschlossen, an Foodamigos versendet — und nicht ins Gedächtnis geschrieben; `Mail-an-Foodamigos.md` behielt das alte B2. Die nächste Sitzung las beide Quellen, fand den alten Stand und präsentierte Taib die erledigte Entscheidung als Neuigkeit und die vereinbarte Lösung als Abweichung. **Zweite Hälfte derselben Lehre: Vor jeder Aussage über die Projektgeschichte werden auch die früheren Chats durchsucht, nicht nur die Dateien** — die Dateien können den alten Stand tragen. Jede Sitzung, die etwas entscheidet, endet mit der Fortschreibung; sonst hat sie nichts entschieden.


**Ein Verweis auf eine Fähigkeit belegt die Fähigkeit nicht.** hreflang-Zeilen, ein sichtbarer Umschalter, übersetzte Pfadnamen in `routes.ts` — alles sprach dafür, dass die Seite Englisch bauen kann, und nichts davon war der Erzeuger. Der stand als „noch zu bauen" im Code. Wer eine Fähigkeit behauptet oder einplant, misst sie einmal: ein Bau, ein Blick nach `dist/en/`. Dieselbe Familie wie „Beschriftungen sind keine Daten" und „ein Gatter, das nie gegen echte Daten lief, ist ungeprüft" (267).

**Zwei Schreiber an einer Datei, und ein Absatz verschwindet.** Bis 286 schrieben Taib und Claude Code beide in diese Datei — Taib ersetzte sie als Ganzes, Claude Code hängte je Auftrag an. In 285 ging so der einzige Absatz über Auftrag 284 verloren, und der Stand vergab die Nummer 284 an etwas anderes; keine Prüfung hat es gemeldet. **Ab Auftrag 287 schreibt Claude Code das Wissen selbst** — als Journal in mantiandco/wissen, ein Eintrag je Vorgang, nie überschrieben, geprüft von einem Gatter; Taib ersetzt keine Gedächtnis-Datei mehr, er beauftragt Einträge und Berichtigungen. Zwei Schreiber brauchen ein Anhänge-Protokoll; ein gemeinsames Dokument ohne Protokoll verliert still.

---

# 18. Was zuerst zu tun ist

1. **Metro-Antworten hochladen.** `diet-check` steht seit 234 rot — 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten. Die Metro-Angaben sind die einzige Sache, die es wieder grün macht. **Das ist jetzt der Engpass, nicht mehr ein Punkt unter anderen.** Am 25. August erneut nachgefragt, Antwort: noch nicht da, **und Taib hat ausdrücklich gesagt, dass abgewartet wird — „so schnell geht das nicht".** Ich hatte eine Frist vorgeschlagen; das ist zurückgenommen. **Nicht mehr nachhaken, bis Taib es sagt.** Sie stehen über vier Aufträge hinweg aus (234 bis 237). Die Folge bleibt trotzdem stehen und ist beim Starttermin einzurechnen: **`diet-check` kann vor dieser Antwort nicht grün werden, und kein anderer Auftrag ändert das.**
2. ~~Auftrag 237~~ **gelaufen, elf Commits, nichts offen** (11.8).
3. ~~Häkchen setzen~~ **entschieden: wird nicht gesetzt** (7.7). Churros bleiben vegetarisch, in den Daten ändert sich nichts. Offen ist nur noch, ob der vegane Teig im Fließtext genannt wird — und ein Blick in die Bestellstrecke, ob bei den Pommes wirklich keine Sauce vorausgewählt mitläuft.
4. ~~Auftrag 240~~ **gelaufen, sechs Commits** (11.9). Offen daraus: **zwei Kommentare tragen die alte Mittenspanne 0,4971–0,5020**, richtig ist 0,4961–0,5020 (`derive-bottles.mjs:118 f.`, `bottle-axis.mjs:46`), und **`Auftrag-03-ClaudeCode.md` liegt als ungestagte Löschung im Baum**. Beides klein genug, um an den nächsten Auftrag angehängt zu werden.
4b. **Die zwei Ernährungssätze für Pommes und Churros einbauen** (7.7). Kein Chip ändert sich, nur Text. Kleiner Auftrag, kann an einen größeren angehängt werden.
5. **Auftrag 238: `production` sichtbar machen.**
6. **Auftrag 239: Sprachgerüst auf N Sprachen.** Drei Stellen aus `LANGS` erzeugen statt buchstabieren — `i18n()`, `Localized<T>`, `routes.text`. **Keine dritte Sprache in diesem Auftrag.** Solange jeder englische Eintrag `pending` ist, ist der Umbau am billigsten; danach hat eine geschriebene zweite Sprache Annahmen, die die dritte bricht.
7. ~~Die Wissensseiten~~ **erledigt: drei Seiten, gebaut in 242, korrigiert in 243** (9.6b). Die Reihenfolge, die dabei galt und weiter gilt: erst der vollständige deutsche Bestand, dann Englisch **in einem Zug**. Wer übersetzt, ehe das Deutsche steht, schreibt jeden später ergänzten Text zweimal.
8. **Weiterleitungen zuletzt, aber alle in einem Auftrag** — deutsch, `/en` und die sechzehn indexierten `/ap/…` (9.8). Getrennt beauftragt entstehen zwei Listen, die auseinanderlaufen.

## 18.1 Die Reihenfolge für Phase 4 — Stand 31. August

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

---

## 18.2 Der Ausgangswert vor dem Livegang

**Festgehalten am 30. August**, weil der Relaunch sämtliche Adressen ändert und mit der Weiterleitungskarte jede Zeile der Seiten-Tabelle verschiebt. Wer in sechs Monaten wissen will, ob es besser geworden ist, braucht diese Zahlen — als Stand hier, nicht als Ausfuhr in einem Ordner.

**Quelle:** Search-Console-Ausfuhr `~/Desktop/MANTI/Webseite/Search-Console-Export-30-08-26`, Suchtyp Web.

**Zeitraum: 15. Oktober 2025 bis 27. August 2026, 317 Tage.** Der Filter der Ausfuhr sagt „letzte 16 Monate"; die Daten beginnen vier Tage nach dem ersten Verkauf über Lieferando. **Ich habe die Beschriftung gelesen statt der Datei und die 16 Monate weitergegeben — Taib hat es berichtigt.**

**28 566 Impressionen, 2 923 Klicks.** Davon 22 119 Impressionen (77,4 %) seit März 2026, dem Monat der Professionalisierung des Auftritts. Von 597 im Oktober auf rund 4 200 im Juli und August.

**Die Klickraten je Seite** — der eigentliche Befund, unabhängig vom Alter des Unternehmens:

| Seite | Impressionen | Position | CTR |
|---|---|---|---|
| Startseite | 26 500 | 4,8 | 10,5 % |
| /speisekarte | 3 581 | 7,8 | 2,1 % |
| /standort-und-oeffnungszeiten | 5 428 | 5,0 | 0,8 % |
| /angebote | 3 118 | 3,1 | 0,6 % |
| /ueber-uns | 3 551 | 3,6 | 0,5 % |
| /belohnungen | 1 972 | 2,6 | **0,15 %** |

**Position 2,6 bei 0,15 Prozent.** Die Domain steht in den ersten drei Ergebnissen und wird nicht genommen. Das ist kein Rankingproblem — die Sichtbarkeit ist da und wird nicht eingelöst. **Titel und Description sind damit ein stärkerer Hebel als weiterer Inhalt.**

**826 Suchanfragen. Vierzehn davon in Frageform, zusammen 46 Impressionen.** Null zu halal, null zu Allergenen, drei zu Öffnungszeiten mit vier Impressionen. Gesucht wird das Produkt mit der Stadt: `manti mannheim` 3 854, `manti` 2 069, `manti bestellen` 296.

**Der Vorbehalt gilt und ist wichtig:** Die Console zeigt nur Anfragen, für die die Domain erscheinen durfte. Sie ist ein Spiegel des bestehenden Auftritts, keine Messung des Marktes — und der Auftritt war in diesem Zeitraum fünf Monate alt. **Dass kaum Fragen gesucht werden, belegt nicht, dass niemand fragt.** Die FAQ bleibt deshalb als Betriebsseite begründet; als Suchinstrument ist sie weder belegt noch widerlegt.

**66 englischsprachige Anfragen, 577 Impressionen, null Klicks.** `manti turkish near me` allein 240 Impressionen auf Position 5,6. Die Seite erscheint und wird nicht genommen, weil nichts darauf englisch ist. **Das ist der gemessene Beleg für die englischen Schlüssel** (671 am 28. August, 713 nach `/faq/` und Verpackungsabschnitt, 701 offen nach 256) — keine Erweiterung ins Ungewisse, sondern Nachfrage, die heute verfällt.

**Noch nicht ausgewertet:** `Geräte.csv` aus derselben Ausfuhr. Taib schätzt den mobilen Anteil auf 80–85 %; die Datei kann die Schätzung durch eine Messung ersetzen.

**Was die Ausfuhr nicht kann:** Volumen für Begriffe nennen, für die die Domain nicht rankt. Jede Aussage über „hohes Volumen" bei `essen bestellen mannheim` oder `türkisches restaurant mannheim` ist eine Setzung, keine Analyse. Ein Werkzeug für Suchvolumen ist eine Anschaffung und steht aus.

---

*Ende. Diese Datei ist die einzige gültige Kontextdatei. Wer etwas ändert, ändert es hier.*
