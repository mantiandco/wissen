---
datum: 2026-09-09
nummer: 279
bereich: website
typ: auftrag
autor: archiv
archiv: 11.52
---
# Auftrag 279 — Überschriften, llms.txt, randloses Bild


**Gelandet, sechs Commits (c366cb9 → 41254f7), live nach 92 s.** **Überschriften:** Messung über 86 Dokumente — 4 Verstöße, zwei Bauteile: `Menu.astro` (Gruppen fest h3, Kacheln h4) und `Process.astro` (Schritte fest h3); jetzt je eine Stufe unter `level` abgeleitet. Weil `base.css` nach Tag gestaltet, kamen Klassen hinzu (`.course__title`, `.step__title`, `.card__name` mit `--ausgleich`); Beleg: Markup ohne Stilblock identisch, **Screenshots 0 Pixel verschieden** bei 375/390/700/1280 px für acht Dokumente. Gatter: Regelsatz zentral `scripts/axe-regeln.mjs`, `heading-order` + `page-has-heading-one` aktiv (axe wertet `rules[id].enabled` vor der Tag-Auswahl), Gegenprobe über `axe-probe.mjs`. **llms.txt:** *Es gab keine* (live 404) — meine Behauptung „aus einer frühen Phase“ war eine Annahme. Neu: Hook `llmsTxt` erzeugt sie beim Bau aus routes.ts/meta.json/dishes.json/site.ts, Gliederung in `src/data/llms.mjs`, 94 Zeilen, 79 Links (12 Routen × 2 + 27 Gerichte × 2 + Shop), Titel aus routes.ts, Beschreibungen aus meta.json; Wächter wirft bei unzugeordneter indexierbarer Route; thirdparty prüft mit Sollwert 79. **Bewusst ausgelassen, Taibs Entscheidung offen: Impressum und Datenschutz** (Empfehlung: aufnehmen, Rubrik „Rechtliches“). **Bild randlos:** unter 47,94 rem `inline-size: calc(100% + 2·gutter)`, `sizes` 100vw; live 390×260 ohne Querlauf, CLS 0. **Folge:** DPR 2 lädt jetzt die 1080er (123 KB) statt der 720er (53 KB) — keine 800er-Stufe im srcset; budget misst nur 1440 px/DPR 1 → **mobile Bildlast ohne Gatter** (280). 404-Titel mit „| MANTI & CO.“. **HSTS live: max-age 15552000.** Ein Review-Workflow (47 Agenten) fand vor dem zweiten Lauf: `.card__name` hätte /vegan/ verändert (h2 verlor `balance`, nur bei 375/700 px sichtbar — die Gatterbreiten 390/768/1440 sehen es nicht), falsche Kommentare, llms-Handliste ohne Vollständigkeitsprobe — alle behoben. Claude Codes eigener Fehler: teilbild las `site:` textlich aus astro.config, seine Konstante riss den ersten Lauf; behoben. **Meldeliste:** toter `level="h2"`-Zweig in Menu/Process · contrast/hover ohne Fehlerseiten.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.52, Zeilen 2450–2454. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
