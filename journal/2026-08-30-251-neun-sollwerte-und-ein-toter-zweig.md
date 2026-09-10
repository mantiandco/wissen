---
datum: 2026-08-30
nummer: 251
bereich: website
typ: auftrag
autor: archiv
archiv: 11.21
---
# Auftrag 251 — neun Sollwerte und ein toter Zweig


**Ergebnis:** 2 021,5 s, zehn grün. **Alle achtzehn Umfangszeilen stehen auf „n von n".** Vier Commits.

**Der Fund kam aus 250 §8.7, ungefragt:** Neun festgeschriebene Sollwerte in sechs Gatterdateien standen seit Auftrag 234 auf 37 Routen, 111 Ansichten, 39 Dokumenten. Gemessen waren 41, 123, 44. Sie wurden bei 241, 243 und 250 nicht mitgezogen.

**Warum das niemand merkte:** `umfang.mjs` fällt nur bei Unterdeckung durch. „123 von 111" ist grün. In der Sache hieß das: **vier Routen dürften still ausfallen, ohne dass ein Gatter rot wird** — der Riegel aus 234 war um vier Routen gelockert.

**Alle neun gesetzt, alle neun Erwartungen durch Messung bestätigt.** Der erste Auftrag, dessen Zahlen alle stimmten — sie stammten aus einer Messung und nicht aus meiner Schätzung.

**Die zweiten Nennungen sind gestrichen, nicht nachgezogen**, und drei tiefer liegende durch Verweise auf die Konstante ersetzt. **Ein Verweis kann nicht veralten.**

**Die Bilanz trägt die Überdeckung jetzt nach oben** — in der Gatterzeile und als Sammelliste mit Zahl im Kopf. `gates.mjs` urteilt dabei nicht selbst, sondern liest die Warnzeile von `umfang.mjs`; die Regel bleibt an einer Stelle. Fehlt die Beschriftung, bleibt der Fall ungemeldet statt falsch gemeldet.

**Der tote `noindex`-Zweig** in `astro.config.mjs` verglich ein Objekt `{de, en}` gegen einen String und konnte nie greifen. Ursache ist Auftrag 236, der `path` umgestellt hat; die Stelle ist mitgewandert und dabei stumm geworden. Heute folgenlos, weil `agb` und `widerruf` nicht gebaut werden — falsch geworden wäre sie mit dem ersten fertigen Rechtstext.

**Die Grenze, die Claude Code selbst benannt hat (§8e):** Die Überdeckung steht jetzt in der Bilanz, aber nur für den, der hinsieht, und sie ändert keinen Rückgabewert. Verhindern, dass sie wieder drei Aufträge lang weggelesen wird, kann sie nicht. **Der Ausweg wäre die Quelle, nicht ein Riegel:** Sieben der neun ließen sich aus `routes.ts` ableiten — Routen, Ansichten, Tastaturläufe, Seiten stehen dort deklariert. Das ist kein Selbstbezug, weil der Sollwert aus der Deklaration käme und das gebaute Ergebnis geprüft wird. Übrig blieben `SOLL_TEXTE` und `SOLL_BAUTEILE`, wo ein Handwert die einzige unabhängige Quelle ist. Eigener Auftrag.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.21, Zeilen 2034–2052. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
