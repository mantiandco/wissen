# Das Wissenssystem von MANTI & CO. — Bauplan

**Stand:** 11. September 2026 · **Anforderung (Taib):** Das Wissen der Firma steht für sich — unabhängig von jeder KI, jedem Werkzeug und jeder Person. Wer es öffnet, ob Mensch oder Maschine, versteht die Vision, kennt den Stand und weiß, was als Nächstes zu tun ist — oder weiß, was zu fragen ist.

---

## 1 · Vier Grundsätze, aus denen alles folgt

**Reiner Text in git.** Markdown-Dateien in einem eigenen Repository `mantiandco/wissen`. Kein Anbieterformat, keine Datenbank, kein Werkzeug als Voraussetzung: ein Texteditor genügt zum Lesen und Schreiben, git versioniert jede Änderung, macht sie vergleichbar und führt parallele Änderungen zusammen. Das Repository ist die einzige Wahrheit. Alles andere — das Projektwissen im Chat, das Auto-Gedächtnis von Claude Code, ein späterer Zugriffsdienst — sind Spiegel oder Zugänge, nie die Quelle.

**Anhängen statt überschreiben.** Das Wissen wächst als Journal: Jeder Vorgang ist eine eigene Datei, die nach dem Schreiben nicht mehr verändert wird. Eine Berichtigung ist ein neuer Eintrag, der auf den alten verweist — so bleibt sichtbar, was einmal galt und warum es nicht mehr gilt (die Malatyalı-Lehre: eine „berichtigte“ Zeile verliert ihre Geschichte). Mehrere Schreiber gleichzeitig können sich so nicht überschreiben — jeder hängt an, niemand fasst fremde Dateien an.

**Der lesbare Stand wird erzeugt, nicht gepflegt.** Kopf, Index und offene Punkte entstehen per Skript aus dem Journal und den Entscheidungen — wie die `llms.txt` der Website aus den Routen. Eine von Hand gepflegte Zusammenfassung veraltet still; eine erzeugte kann nicht lügen, ohne dass das Journal es tut.

**Ein Gatter schützt das Wissen wie die Gatter die Website.** Jeder Eintrag wird geprüft, bevor er in den Hauptzweig darf: Form, Datum, Nummer, Bereich, Verweise — und kein Geheimnis (die Rezeptur-Lehre: was nicht ins Netz darf, darf auch nicht ins Wissen).

---

## 2 · Die Form — Verzeichnis für Verzeichnis

```
wissen/
  README.md            Der Einstieg. Für jeden Leser die erste Datei:
                       was das hier ist, in welcher Reihenfolge lesen,
                       wie schreiben. (Dieser Bauplan, gekürzt.)
  VISION.md            Wofür die Firma steht, wohin sie will: Franchise,
                       eigene Produktion, halal ohne Ausnahme, die
                       Ehrlichkeitsregeln der Marke. Ändert sich selten;
                       jede Änderung ist eine Entscheidung (s. u.).
  REGELN.md            Wie hier gearbeitet wird: Sprachregeln, das
                       Auftrag-und-Bericht-Protokoll, „Melden statt
                       ändern“, Gatter, was nie ins Wissen darf.
  STAND.md             ERZEUGT. Der aktuelle Zustand je Bereich in wenigen
                       Absätzen — das, was heute der Kopf des Gedächtnisses ist.
  OFFEN.md             ERZEUGT. Was als Nächstes zu tun ist, je Bereich,
                       mit Verweis auf den Eintrag, der es begründet.
  journal/             ANHÄNGEN. Ein Eintrag je Vorgang:
    2026-09-03-276-datenschutz-getraenke.md
    2026-09-11-287-gedaechtnis-korrekturen.md
  entscheidungen/      ANHÄNGEN. Eine Datei je Entscheidung, nach dem
    0001-subdomain-statt-pfad.md          Muster „Architecture Decision Record“:
    0002-cloudflare-pages.md              Kontext · Entscheidung · Begründung ·
    0003-gewuerzmischung-geheim.md        Status (gilt / aufgehoben durch 00NN)
  lehren/              ANHÄNGEN. Was schiefging und was seither gilt —
                       heute Abschnitt 17 des Gedächtnisses.
  bereiche/            GEPFLEGT, aber nur über Einträge geändert:
    website.md         das stabile Wissen je Bereich — Kennzeichnung,
    infrastruktur.md   Infrastruktur/DNS, Rechtstexte, Marke, Shop,
    kennzeichnung.md   Lieferanten. Jede Änderung nennt den Eintrag.
    rechtstexte.md
    marke.md
  archiv/              Die alte Datei PROJEKTGEDAECHTNIS.md, eingefroren
                       mit Datum — nichts geht verloren, nichts wird
                       dort mehr geändert.
  scripts/
    pruefen.mjs        Das Gatter (Abschnitt 4).
    stand.mjs          Erzeugt STAND.md und OFFEN.md aus Journal,
                       Entscheidungen und Bereichen.
```

**Ein Journal-Eintrag** hat einen Kopf, den jedes Werkzeug lesen kann, und darunter Prosa:

```
---
datum: 2026-09-11
nummer: 287
bereich: website
typ: auftrag            # auftrag | entscheidung | befund | berichtigung | lehre
autor: claude-code      # oder: taib, claude-chat, <agent-name>
betrifft: [gedaechtnis, wortmarke, gatter]
berichtigt: 2026-09-03-276   # nur bei typ berichtigung
---
Was passiert ist, in fünf bis zwanzig Sätzen. Was gemessen wurde.
Was offen bleibt (das liest stand.mjs für OFFEN.md).
```

---

## 3 · Das Protokoll — wie jeder Leser und Schreiber arbeitet

**Beim Öffnen, egal wer:** `README.md` → `VISION.md` → `STAND.md` → `OFFEN.md` → die letzten drei Journal-Einträge. Danach weiß der Leser, wofür die Firma steht, wo sie steht, was ansteht und was zuletzt geschah. Ist etwas unklar: fragen, nicht annehmen — die Frage selbst wird ein Eintrag (typ befund).

**Beim Schreiben:** ein eigener Zweig je Sitzung oder Agent; ein Journal-Eintrag je Vorgang, ggf. Entscheidungen und Lehren als eigene Dateien; `npm run pruefen`; Pull Request oder Merge in `main`; `stand.mjs` erzeugt den Stand neu. Fremde Einträge werden nie geändert. Nummern werden fortlaufend vergeben — die Prüfung weist Kollisionen ab.

**Für die Website-Aufträge heißt das:** Claude Code liest zu Beginn `wissen/STAND.md` und `OFFEN.md` statt des Monolithen und schreibt am Ende einen Journal-Eintrag statt „Abschnitt 11.NN“. Das Website-Repository behält nur einen Verweis (`WISSEN.md`: „Das Wissen liegt in mantiandco/wissen — lies dort README.md“). Für den Chat legt Taib vorerst `STAND.md` und `OFFEN.md` ins Projektwissen — zwei kurze Dateien statt 3 400 Zeilen; später ersetzt ein Zugang (GitHub-Konnektor oder eigener Dienst) auch das.

---

## 4 · Das Gatter

`pruefen.mjs` läuft vor jedem Merge (lokal, später auch in der Zusammenführung): jeder Journal-Eintrag hat gültigen Kopf (Datum ISO, Nummer eindeutig und fortlaufend, Bereich aus der Liste, typ aus der Liste, autor); Dateiname = Datum-Nummer-Slug; Berichtigungen verweisen auf existierende Einträge; Entscheidungen haben Status und, wenn aufgehoben, den Nachfolger; **Geheimnisliste**: definierte Phrasen (Rezeptur-Bestandteile, Zugangsdaten, Passphrasen, Kontodaten) dürfen nirgends stehen — rot mit Fundstelle; keine Datei außerhalb der Form; STAND.md und OFFEN.md sind aktuell (Erzeugung wiederholen ergibt byteidentisch — sonst rot).

---

## 5 · Die Wanderung — was heute passiert, was später

**Heute (Auftrag 288):** Repository anlegen; die alte Datei ins Archiv; aus ihr per Skript die Einträge 11.01–11.56 als Journal-Dateien erzeugen (rückdatiert, autor: archiv), die Entscheidungen aus Abschnitt 15 als ADRs, die Lehren aus 17, die stabilen Abschnitte (Kennzeichnung, Infrastruktur, Rechtstexte, Marke) in `bereiche/`; VISION und REGELN aus den Abschnitten 1–4; `pruefen.mjs`, `stand.mjs`; erster erzeugter STAND und OFFEN; README. Was das Skript nicht sauber zuordnen kann, bleibt im Archiv und wird gemeldet — nicht geraten.

**Ab dann:** Jeder Auftrag endet mit einem Journal-Eintrag. Das Website-Repository verweist nur noch. Taibs Kopie ins Projektwissen: `STAND.md` + `OFFEN.md`.

**Später, bei mehreren Agenten:** Zweige und Pull Requests statt direktem Push; das Gatter in der Zusammenführung; ein Zugriffsdienst (lesen nach Thema, eintragen mit Prüfung) als gemeinsamer Zugang — der aber die Form nicht ersetzt, sondern bedient.

---

## 6 · Was dieses System NICHT ist

Kein Anbieterprodukt, keine Datenbank, kein Chatverlauf. Verlöre die Firma morgen jeden Zugang zu Anthropic, GitHub oder mir, bliebe ein Ordner mit Textdateien, ein Skript, das den Stand erzeugt, und eine README, die sagt, wie man weitermacht. Das ist die Zukunftssicherheit, die du meinst.
