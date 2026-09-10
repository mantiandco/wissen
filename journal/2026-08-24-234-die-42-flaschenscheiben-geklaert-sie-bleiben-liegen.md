---
datum: 2026-08-24
nummer: 234
bereich: website
typ: befund
autor: archiv
archiv: 11.3
---
# Die 42 Flaschenscheiben — geklärt, sie bleiben liegen


`derive-bottles.mjs` erzeugt für **alle vierzehn** Getränke eine runde Fassung in drei Breiten (120, 180, 264) und zwei Formaten. Das sind 84 Dateien in `public/img/bottle-disc/`, 572 kB. `Combo.astro` fordert sie aber nur für das Getränk an, das im Feld `drink` einer Combo steht — **und es gibt sieben Combos**:

| Combo | Getränk |
|---|---|
| The Original | Ice Tea Peach |
| Golden Harvest | Ice Tea Blueberry |
| Nature's Palette | Lemonade Orange |
| Melted Heart | Ice Tea Watermelon |
| Fried Dream | Ice Tea Pomegranate |
| Hingel's Harvest | Ice Tea Lemon |
| Hingel's Beef | Cola |

**Die 42 nie ausgelieferten Dateien sind die Scheiben der anderen sieben Getränke** — Cola Zero, Lemonade Cassis, Lemonade Pink Grapefruit, Lemonade Lemon, Lemonade Lime Mint, Ice Tea Mango Pineapple, Ice Tea Peach Zero. 288 von 572 kB. Im gebauten `dist/` stehen genau die anderen 42, nachgezählt.

**Sie bleiben liegen, aus drei Gründen.** Sie liegen in `public/` und werden nie angefordert — es sind 288 kB im Repository, nicht auf der Leitung. Löschen wäre keine Handlung, sondern eine Schleife: Beim nächsten `npm run bottles` sind sie wieder da, weil der Generator über alle vierzehn läuft. Und fünf der sieben ungenutzten Getränke stehen in den Empfehlungen der Gerichte — bekommen die je ein Bild, sind genau diese Dateien die gebrauchten.

**Ein Nachtrag zur Zählweise, weil er ein Werkzeugfehler war:** Ich hatte die Zahl 42 bezweifelt, weil ein Grep nach Dateinamen **null** Referenzen fand. Der Grep war das untaugliche Werkzeug — die Pfade werden in `Combo.astro:49` zusammengesetzt. **Wer wissen will, welche Datei benutzt wird, sieht im gebauten `dist/` nach, nicht im Quelltext.**

**Combo-Bild und Empfehlung dürfen auseinandergehen — entschieden am 25. August.** Bei drei Gerichten zeigt das Combo-Bild ein anderes Getränk, als der Text empfiehlt: Nature's Palette (Bild Lemonade Orange, empfohlen Mango Pineapple und Watermelon), Melted Heart (Bild Watermelon, empfohlen Lemonade Lemon und Pink Grapefruit), Hingel's Harvest (Bild Ice Tea Lemon, empfohlen Peach Zero und Cassis). **Taib: Die Getränke sollen Vorschläge sein.** Das Bild zeigt eine Zusammenstellung, der Text nennt zwei, die passen — kein Widerspruch, sondern zwei Angebote.

**Folge für die Textregeln:** Kein Text darf die Empfehlung als Bestandteil der Combo formulieren. „Dazu passt" und „wir empfehlen" sind richtig, „mit" und „inklusive" wären falsch. **Wer die Empfehlungen je bebildert, bebildert sie getrennt vom Combo-Foto** — sonst stehen zwei Bilder desselben Gerichts mit verschiedenen Flaschen nebeneinander und die Unterscheidung ist wieder weg.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.3, Zeilen 1494–1517. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
