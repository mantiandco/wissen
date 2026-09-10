---
datum: 2026-08-28
nummer: 242
bereich: website
typ: befund
autor: archiv
archiv: 11.11a
---
# Auftrag 242 — Zwischenstand vom Vortag


**43 HTML-Dokumente wie vorhergesagt:** 39 wie bisher, plus die drei Wissensseiten und den Weiterleitungsstumpf `/wissen/`. Die drei Seiten stehen in der Sitemap, der Stumpf nicht.

### Meine Vorgabe zum Dateinamen war falsch

**§7 verlangte `src/pages/[wissen].astro` „nach dem Vorbild von `[diet].astro`". Das baut nicht.** Astro schreibt die Datei zwar nach `dist/wissen/manti/index.html` und bricht dann ab: `Missing parameter: wissen`, `at getParameter (routing/manifest/generator.js:17:13)`. **Ein einfacher Parameter steht für ein Wegstück, und diese Adressen haben zwei.** Claude Code hat auf `[...wissen].astro` umgestellt — dasselbe Muster wie `standorte/[...location].astro`, das aus genau demselben Grund schon so heißt.

**Der Fehler war vermeidbar und mein eigener.** `[diet].astro` funktioniert, weil `/vegan/` ein Segment hat; `/wissen/manti/` hat zwei. Der Präzedenzfall stand in derselben Ordnerstruktur, die ich vor dem Schreiben des Auftrags gelesen habe. **Ein Vorbild trägt nur so weit, wie die Form gleich ist** — und die Form ist hier die Zahl der Wegstücke, nicht die Art der Seite.

### Die Verweise im Fließtext

Gelöst über den vorhandenen `links`/`splitParts`-Mechanismus der Ernährungsseiten, **nicht über `set:html`**. Der Absatz bleibt in der JSON ein unzerschnittener String; daneben steht die Wendung mit `route` oder `dish`, **und beide Ziele werden beim Bau geprüft.**

**Die Texte wurden mit einem Skript aus `Wissensseiten-Texte.md` gezogen, nicht abgetippt** — Claude Codes Begründung: „Wortgleichheit ist sonst nur so lange gegeben, wie ich mich nicht vertippe." Die Zwischenablage ist gelöscht, `git ls-files` zählte null.

### Beide Gegenproben haben ausgelöst

**Fehlender `en`-Schlüssel:** `copy/wissen/manti.json.sections[0].title: kein Schlüssel "en"` → `SPRACHE GATE: FAIL (1)`. **Das Gatter unterscheidet also „fehlt" von „steht aus"** — genau die Sorge aus §14, und sie ist ausgeräumt.

**Verlorene Wendung:** Der Bau hält an mit „unter vegan" … steht in keinem Absatz dieses Abschnitts. Ohne die Prüfung wäre der Verweis lautlos aus der Seite gefallen.

### Was §13 schon vor dem Bericht eingebracht hat

Gemeldet, nicht geändert: **`routes.ts:131` sagt „Five items is the whole point of the reduction", während drei andere Stellen derselben Datei „Die Leiste hat vier Einträge" sagen** — ein Widerspruch innerhalb einer Datei. Dazu zwei Sollwerte, die das Sprachgatter selbst anmahnt (74→80 Routenfassungen, 39→43 Dokumente), zwei Zahlwörter in `Footer.astro`, und ein „Blöcken zu 4 kB" in `derive-bottles.mjs` — **dieselbe Einheitenverwechslung wie in §11, dort aber nicht aufgeführt, deshalb stehen gelassen.** Genau richtig: Der Auftrag zählte Stellen auf, und eine nicht aufgezählte Stelle ist keine beauftragte.

### Tomatensauce gehört dazu — Korrektur von Taib, 27. August

**„Manchmal stimmt nicht."** Taib zur Servierart: klassisch ist Knoblauchjoghurt **mit** Tomatensauce und den Gewürzen. **Der Text sagt an einer Stelle „manchmal auch eine Tomatensauce" und an vier weiteren gar nichts davon** — die Definition im Einstieg, der Kayseri-Absatz, die Dreisatzfassung auf `/wissen/mal-was-anderes/` und der Merksatz „unten und oben" auf `/wissen/verwandte/` nennen nur Butter. **Alle fünf gehören zusammen korrigiert, sonst widerspricht sich der Auftritt in sich selbst.** Geht als Auftrag 243 heraus.

**Nicht zu ändern ist `manti.json` Zeile 166** („Joghurt und Tomatensauce ist die Fassung, die die meisten das erste Mal bestellen"). Der Satz spricht über unsere Bestellstrecke, in der die Sauce gewählt wird, nicht über die klassische Servierart. **Zwei richtige Sätze, die sich zu widersprechen scheinen, weil sie von zwei verschiedenen Dingen reden.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.11a, Zeilen 1793–1824. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
