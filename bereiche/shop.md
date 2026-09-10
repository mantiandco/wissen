# shop

Bestellt wird im eigenen Shop von Foodamigos unter bestellen.mantiandco.com; die Website verweist dorthin und schließt keinen Vertrag.

*Wörtlich aus PROJEKTGEDAECHTNIS-2026-09-11.md; Abschnittsnummern beziehen sich darauf.*

## Archiv 5.3 — Bestellvorgang


**Zahlarten:** Apple Pay · Google Pay · Karte (Mastercard, Visa) · Online-Überweisung · PayPal · Barzahlung.
**Abwicklung:** Stripe für PayPal, Adyen für die übrigen. **Die Verträge hält Foodamigos, nicht MANTI & CO.**

**Bestellbestätigung sofort, Annahme automatisch.**
**Lieferzeit** 30 bis 50 Minuten im Regelfall, bei hohem Aufkommen bis etwa 105 Minuten — absolute Ausnahme.
**Servicegebühr:** eigene Zeile im Warenkorb, Deckel 0,99 €. Bei 23,20 € Zwischensumme wurden 0,88 € berechnet. **Der Prozentsatz ist unbekannt und bei Foodamigos erfragt.**
**Pfand:** 0,08 € je Mehrwegflasche, ausgewiesen als „Inkl. 0,08 € Pfand (PET Mehrweg)".
**Grundpreis:** wird ausgewiesen — „(0,33 l, 10,61 €/l)".
**Trinkgeld:** Voreinstellung entfernt, steht auf „Keine".

## Archiv 5.4 — Treueprogramm


1 Punkt je 1,00 € Bestellwert, automatisch gutgeschrieben. Ab 35 Punkten einlösbar, höchstens 60 Punkte je Bestellung (6,00 €), 90 Tage gültig. Nur im eigenen Shop.

**Neukunden:** 3 € auf jede der ersten fünf Bestellungen, 15 € insgesamt. Die Rabattleiste in der Bestellstrecke sagt bis heute „15 € Rabatt" ohne die Bedingung — irreführend, Taib überarbeitet.

## Archiv 13 — Foodamigos


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
