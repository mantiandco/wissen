---
datum: 2026-08-25
nummer: 236
bereich: website
typ: auftrag
autor: archiv
archiv: 11.7
---
# Auftrag 236 — gelaufen, sechs Commits, elf Gatter


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

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.7, Zeilen 1599–1635. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
