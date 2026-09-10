---
datum: 2026-08-25
nummer: 235
bereich: website
typ: auftrag
autor: archiv
archiv: 11.4
---
# Auftrag 235 — gelaufen, zehn Gatter, drei berechtigte Einwände


**Ergebnis:** zehntes Gatter steht, 106 von 106, Gesamtlauf 1805,2 s. **14 Kontrastzahlen im Quelltext waren falsch, 7 waren unbelegbar und wurden gelöscht.** Details in 10.1a. Das Selbsttest-Verfahren in der Fremddienst-Gegenprobe ist umgesetzt: Eine Gegenprobe, die nicht anschlägt, bringt jetzt das Gatter zu Fall, statt still zu bestehen.

**Nebenwerte aus `budget` (37 von 37):** bester LCP 1368 ms, CLS 0,0016, JS 2,8 kB gzip, LCP-Bild 79,0 kB. **Neun Routen haben gar kein LCP-Bild.** Von den 72 `pending`-Feldern sind 66 blocksperrend und 6 nur im Kopfbereich wirksam.

**Claude Codes drei Einwände — alle drei berechtigt, alle drei gegen meinen Auftrag:**

**Erstens, und das ist ein echter Verlust:** Der Auftrag ließ `scripts/og-image.mjs` löschen. **Damit ist das einzige Rezept für die tatsächlich benutzte Datei `public/og-home.jpg` (104 kB) verschwunden.** Der Auftrag hat diesen Preis nicht genannt — ich habe ihn nicht gesehen. **Das Skript ist nur noch über `git show 62fcc15:scripts/og-image.mjs` erreichbar.** Wer das Teilbild je neu erzeugen muss, holt es dort. Diese Zeile ist die Wiederherstellungsanweisung, sonst gibt es keine.

**Zweitens:** Ich habe „88" als Bezugsgröße zitiert, als wäre sie gemessen. Sie war selbst nur eine Musterzählung. **Eine Zahl bekommt keine Autorität dadurch, dass sie in einem Auftrag steht.**

**Drittens:** „`quelle=` ist verboten, wo ein Tokenpaar existiert" ist nicht maschinell prüfbar. Eine menschliche Regel im Gewand einer Gatterregel. Sie bleibt — aber als das, was sie ist.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.4, Zeilen 1518–1531. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
