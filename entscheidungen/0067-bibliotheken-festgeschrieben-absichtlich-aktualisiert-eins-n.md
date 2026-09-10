---
status: gilt
datum: 2026-08-31
archiv: 15 / Bibliotheken: festgeschrieben, absichtlich aktualisiert, eins nach dem anderen
zeile: 2969
---
# Bibliotheken: festgeschrieben, absichtlich aktualisiert, eins nach dem anderen

## Kontext

Begründung steht in Zeile 2967, die Regel in Zeile 2969.

## Entscheidung

**Die Regel:** Versionen sind festgeschrieben (`.nvmrc`, `engines`, Lockfile). Aktualisiert wird absichtlich, **eine Bibliothek je Auftrag**, mit vollem Gatterlauf davor und danach und der Bytegleichheitsprobe am Bau. Node auf LTS, nie Current. Sicherheitslücken sind die Ausnahme, die sofort zum Handeln zwingt — bei einer statischen Seite betreffen sie die Baumaschine, nicht die Seite.

## Begründung

**Entschieden am 31. August, auf Taibs Frage „Wieso nicht immer die aktuelle Version von allem?".** Weil die Gatter auf eine Umgebung kalibriert sind: Der Zwischenspeicher hasht die puppeteer-Fassung, Befund 10 war ein Chrome-Verhalten, der bytegleiche Bau trägt den ganzen Speicher — ein Astro-Hauptversionssprung kann die CSS-Bündelung ändern und all das ungeplant kippen. „Immer das Neueste" hieße, diese Kalibrierung regelmäßig zu verlieren und im Fehlerfall nicht zu wissen, ob Text, Bauteil oder Bibliothek die Ursache war.

## Status

gilt · Datum 2026-08-31

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 15 / Bibliotheken: festgeschrieben, absichtlich aktualisiert, eins nach dem anderen, ab Zeile 2969.*
