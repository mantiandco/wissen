---
datum: 2026-08-30
nummer: 252
bereich: website
typ: auftrag
autor: archiv
archiv: 11.22
---
# Auftrag 252 — Fußbereich, Rollbalken, drei Zahlen


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

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.22, Zeilen 2053–2076. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
