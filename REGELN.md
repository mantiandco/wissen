# Regeln

*Wörtlich aus PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitte 1, 3 und 4. Wie hier gearbeitet wird; das Protokoll des Wissens selbst steht in README.md, das der Website-Aufträge in website/docs/protokoll.md.*

## Archiv 1 — Betriebsanleitung


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

## Archiv 3 — Verbindliche Sprach- und Textregeln


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

## Archiv 4 — Revidierte Entscheidungen — was nicht mehr gilt


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
