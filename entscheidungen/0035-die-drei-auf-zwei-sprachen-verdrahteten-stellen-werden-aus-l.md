---
status: gilt
archiv: 15
zeile: 2853
---
# Die drei auf zwei Sprachen verdrahteten Stellen werden aus LANGS erzeugt

## Kontext

Umsetzung der Türkisch-Entscheidung Z. 2851 (Gerüst statt Sprache); Z. 2855 (die ehrliche Grenze: kein Aufbau macht eine weitere Sprache umsonst) hängt daran.

## Entscheidung

**Fest auf genau zwei verdrahtet sind drei Stellen:** `i18n()` in `content.config.ts` (`z.object({ de, en })`), `Localized<T>` in `lib/text.ts` (`{ de: T; en: T | Pending }`) und das Feld `text` in `routes.ts`. Alle drei müssen aus `LANGS` erzeugt werden statt buchstabiert.

## Begründung

**Was der Umbau kostet und was er nicht kann.** `src/data/routes.ts` ist bereits richtig gebaut — `LANGS = ['de','en'] as const`, und alles daneben ist `Record<Lang, …>`. Wer dort eine Sprache einträgt, bekommt vom Typprüfer jede Stelle genannt, die sie noch nicht führt. **Fest auf genau zwei verdrahtet sind drei Stellen:** `i18n()` in `content.config.ts` (`z.object({ de, en })`), `Localized<T>` in `lib/text.ts` (`{ de: T; en: T | Pending }`) und das Feld `text` in `routes.ts`. Alle drei müssen aus `LANGS` erzeugt werden statt buchstabiert. **Das ist ein kleiner Auftrag, und heute ist er am billigsten** — solange jeder englische Eintrag `pending` ist, gibt es keine zweite geschriebene Sprache, deren Annahmen die dritte bricht.

**Und die ehrliche Grenze: Kein Aufbau macht eine weitere Sprache umsonst.** Auch danach heißt eine dritte Sprache, dass zu jedem Eintrag in zehn Inhaltsdateien ein Schlüssel dazukommt und jemand ihn füllt. Was das Gerüst leistet, ist etwas anderes: Der Typprüfer und das Gatter nennen jede fehlende Stelle beim Namen, und niemand muss Routen, `hreflang`, Umschalter oder Gatter anfassen. **Das ist viel wert und ist nicht „später einfach einbauen".**

## Status

gilt · Datum: im Archiv nicht genannt

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 15, ab Zeile 2853.*
