# Das Wissen von MANTI & CO.

**Was das hier ist.** Das Wissen der Firma steht für sich — unabhängig von jeder KI, jedem Werkzeug und jeder Person. Wer es öffnet, ob Mensch oder Maschine, versteht die Vision, kennt den Stand und weiß, was als Nächstes zu tun ist — oder weiß, was zu fragen ist. Der vollständige Bauplan (Taib, 11. September 2026) liegt in `archiv/Wissenssystem-Bauplan-2026-09-11.md`; diese README ist seine Kurzfassung für Einstieg und Protokoll.

## Vier Grundsätze

**Reiner Text in git.** Markdown-Dateien in diesem Repository `mantiandco/wissen`. Kein Anbieterformat, keine Datenbank, kein Werkzeug als Voraussetzung: ein Texteditor genügt zum Lesen und Schreiben, git versioniert jede Änderung. Das Repository ist die einzige Wahrheit; das Projektwissen im Chat, das Auto-Gedächtnis von Claude Code, ein späterer Zugriffsdienst sind Spiegel oder Zugänge, nie die Quelle.

**Anhängen statt überschreiben.** Das Wissen wächst als Journal: Jeder Vorgang ist eine eigene Datei, die nach dem Schreiben nicht mehr verändert wird. Eine Berichtigung ist ein neuer Eintrag, der auf den alten verweist — so bleibt sichtbar, was einmal galt und warum es nicht mehr gilt. Mehrere Schreiber können sich so nicht überschreiben: jeder hängt an, niemand fasst fremde Dateien an.

**Der lesbare Stand wird erzeugt, nicht gepflegt.** `STAND.md` und `OFFEN.md` entstehen per Skript aus dem Journal und den Bereichen. Eine von Hand gepflegte Zusammenfassung veraltet still; eine erzeugte kann nicht lügen, ohne dass das Journal es tut.

**Ein Gatter schützt das Wissen.** Jeder Eintrag wird geprüft, bevor er in den Hauptzweig darf: Form, Datum, Nummer, Bereich, Verweise — und kein Geheimnis. Was nicht ins Netz darf, darf auch nicht ins Wissen.

## Die Form

```
wissen/
  README.md          Der Einstieg — diese Datei.
  VISION.md          Wofür die Firma steht (Archiv 2). Ändert sich selten; jede Änderung ist eine Entscheidung.
  REGELN.md          Wie gearbeitet wird (Archiv 1, 3, 4): Sprachregeln, Protokoll, was nicht mehr gilt.
  STAND.md           ERZEUGT — je Bereich die Kopfzeile der Bereichsdatei und der jüngste Journal-Eintrag.
  OFFEN.md           ERZEUGT — je Bereich die offenen Punkte der Einträge, die kein späterer Eintrag erledigt nennt.
  journal/           ANHÄNGEN — ein Eintrag je Vorgang: 2026-09-11-287-korrekturen-und-wissenssystem.md
  entscheidungen/    ANHÄNGEN — eine Datei je Entscheidung: 0001-slug.md (Kontext · Entscheidung · Begründung · Status)
  lehren/            ANHÄNGEN — eine Datei je Lehre: 001-slug.md
  bereiche/          GEPFLEGT, aber nur über Einträge geändert: website, shop, infrastruktur, rechtstexte,
                     marke, kennzeichnung, marketing, restaurant, firma — je eine Datei
  unterlagen/        Abgenommene Quelldokumente, wörtlich, je mit Kopf (datum, bereich, status: abgenommen,
                     verweis auf den Auftrag, der sie nutzte, quelle mit md5) — Aufnahmen, Rechtstext-Fassungen,
                     Analysen. Bereichsdateien verweisen darauf, statt sie zu wiederholen. Seit Auftrag 288.
  archiv/            Die alte Gedächtnis-Datei, eingefroren mit Datum; die Restliste der Wanderung; der Bauplan.
  scripts/           pruefen.mjs (Gatter) · stand.mjs (Erzeuger) · schema.mjs (die Form) ·
                     geheimnisse.mjs (Geheimnisliste) · geheimnis-hash.mjs · wanderung.mjs (einmalig, 287;
                     hält seit 288 an, damit sie keine geänderte Bereichsdatei überschreibt)
```

**Ein Journal-Eintrag** heißt `JJJJ-MM-TT-NNN[z]-slug.md` und beginnt mit einem Kopf, den jedes Werkzeug lesen kann:

```
---
datum: 2026-09-11
nummer: 287               # die Auftragsnummer; bei typ auftrag eindeutig und fortlaufend
zusatz: a                 # nur bei Nachträgen (256a, 262b …)
bereich: website          # website | shop | infrastruktur | rechtstexte | marke | kennzeichnung | marketing | restaurant | firma
typ: auftrag              # auftrag | entscheidung | befund | berichtigung | lehre
autor: claude-code        # oder: taib, claude-chat, archiv, <agent-name>
betrifft: [gedaechtnis, wortmarke, gatter]
berichtigt: 2026-09-03-276     # nur bei typ berichtigung: Kennung eines bestehenden Eintrags
erledigt: [2026-09-10-286, 2026-09-11-287#4]   # ganzer Offen-Block, oder mit #N nur Punkt N (ab 1)
archiv: 11.49                  # nur autor archiv: Abschnitt der eingefrorenen Datei
---
# Titel

Was passiert ist, in fünf bis zwanzig Sätzen. Was gemessen wurde.

## Offen
- Was offen bleibt — das liest stand.mjs für OFFEN.md.
```

Die Kennung eines Eintrags ist `datum-nummer[zusatz]` (etwa `2026-09-11-287`). Die Listen für `bereich` und `typ` stehen in `scripts/schema.mjs`; wer eine erweitert, tut es dort, und das Gatter kennt sie danach.

**Erledigt melden:** Ein späterer Eintrag nennt unter `erledigt:` die Kennung — dann fällt der ganze Offen-Block des genannten Eintrags aus `OFFEN.md` — oder `kennung#N`, dann nur dessen N-ter Punkt. Ist von einem Sammelpunkt nur ein Teil erledigt, wird der Punkt genommen und sein Rest im neuen Eintrag unter „## Offen“ weitergeführt; fremde Einträge werden nie geändert.

**Eine Entscheidung** heißt `NNNN-slug.md`, trägt im Kopf `status: gilt | aufgehoben`, `datum` und bei aufgehoben `aufgehoben_durch: NNNN`, und darunter Kontext, Entscheidung, Begründung, Status.

**Abweichungen vom Bauplan, die die Wanderung nötig machte (287):** Die alte Datei hat je Auftrag oft mehrere Abschnitte (Auftragstext, Zwischenstand, Beweis, Nachträge 256a/262b). Deshalb ist die Nummer nur bei `typ: auftrag` eindeutig — Befunde und Entscheidungen dürfen dieselbe Nummer tragen —, Nachträge tragen `zusatz`, und „fortlaufend“ gilt für neue Einträge (autor ≠ archiv): ihre Nummer ist größer als jede frühere. Archiv-Einträge tragen das Landungsdatum aus den Commits der Website; wo es keines gab, ein Datum aus dem Text, sonst das des Commits, der den Abschnitt anlegte.

## Das Protokoll

**Beim Öffnen, egal wer:** `README.md` → `VISION.md` → `STAND.md` → `OFFEN.md` → die letzten drei Journal-Einträge. Danach weiß der Leser, wofür die Firma steht, wo sie steht, was ansteht und was zuletzt geschah. Ist etwas unklar: fragen, nicht annehmen — die Frage selbst wird ein Eintrag (`typ: befund`).

**Beim Schreiben:** ein Journal-Eintrag je Vorgang, gegebenenfalls Entscheidungen und Lehren als eigene Dateien; `npm run pruefen`; `npm run stand`; Commit und Push nach `main` (später: eigener Zweig je Sitzung oder Agent und Pull Request). Fremde Einträge werden nie geändert; eine Berichtigung ist ein neuer Eintrag. Nummern werden fortlaufend vergeben — das Gatter weist Kollisionen ab.

**Für die Website-Aufträge (ab 288):** Claude Code liest zu Beginn `STAND.md`, `OFFEN.md` und die letzten drei Einträge statt eines Monolithen und schreibt am Ende einen Journal-Eintrag; dann werden beide Repositorien gepusht. Das Website-Repository `mantiandco/website` trägt nur den Verweis `WISSEN.md`; seine Technik steht dort in `docs/`. Für den Chat legt Taib vorerst `STAND.md` und `OFFEN.md` ins Projektwissen.

**Ab 287 schreibt Claude Code das Wissen selbst.** Taib ersetzt keine Gedächtnis-Datei mehr; er beauftragt Einträge, Entscheidungen und Berichtigungen. Grund: zwei Schreiber an einer Datei, und ein Absatz verschwand (Lehre 062).

## Das Gatter

`npm run pruefen` läuft vor jedem Commit: Es prüft zuerst sich selbst (jede Prüfung wird an einer Vorrichtung einmal zum Fallen gebracht) und dann den Bestand — Dateinamen, Köpfe, Listen, Eindeutigkeit und Fortlaufen der Nummern, Verweise (`berichtigt`, `erledigt`, `aufgehoben_durch`), keine Datei außerhalb der Form, die Geheimnisliste über jede Datei (auch das Archiv), und dass `STAND.md` und `OFFEN.md` aktuell sind (die Erzeugung wiederholen muss byteidentisch sein).

**Die Geheimnisliste** (`scripts/geheimnisse.mjs`): Die vier Bestandteile der Gewürzmischung stehen nicht im Klartext, sondern als Prüfsummen der Wörter — `npm run geheimnis -- <wort>` gibt die Prüfsumme aus, das Wort selbst landet nirgends. Dazu Muster für Zugangsdaten, Passphrasen, IBAN und Token. Ein Fund wird mit Datei gemeldet, nie mit Zitat.

## Der Erzeuger

`npm run stand` schreibt `STAND.md` (je Bereich: die erste nicht leere Zeile nach der Überschrift der Bereichsdatei, dann der jüngste Journal-Eintrag mit seinem ersten Absatz) und `OFFEN.md` (je Bereich alle „## Offen“-Abschnitte der Einträge, die kein späterer Eintrag unter `erledigt:` nennt). Kein Datum der Erzeugung, keine Zufallsreihenfolge — zweimal erzeugen ergibt dieselben Bytes.

## Was dieses System nicht ist

Kein Anbieterprodukt, keine Datenbank, kein Chatverlauf. Verlöre die Firma morgen jeden Zugang zu Anthropic, GitHub oder Claude, bliebe ein Ordner mit Textdateien, ein Skript, das den Stand erzeugt, und diese README, die sagt, wie man weitermacht.
