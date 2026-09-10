---
datum: 2026-09-01
nummer: 262
zusatz: b
bereich: website
typ: auftrag
autor: archiv
archiv: 11.35
---
# Nachtrag 262b — Signet auf allen Stufen, SVG vorneweg


**Anlass:** Taib wollte in den Lesezeichen das Signet statt des M. Der Bestand war dreistufig — 180 und 32 aus dem Signet, nur die 16er aus dem M (Lesezeichenleiste am Rechner). Dazu seine Frage, warum iPhone-Lesezeichen anderer Seiten gestochen scharf seien: **nicht wegen SVG** — iOS nimmt nur das `apple-touch-icon`-PNG, und ein 180er-PNG ist auf Retina pixelgenau; unsere 180er war es immer. SVG hilft am Rechner (Chrome, Firefox, Edge); **Safari am Mac liest SVG-Favicons nicht** — deshalb beides, SVG vorn, PNG dahinter.

**Gelandet (`b2a0670`, vier Dateien):** `favicon.mjs` rastert alle drei Stufen aus dem Signet, der M-Eintrag entfällt, Kommentar mit der Entscheidung. `public/favicon.svg` als byteidente Kopie der Signet-Quelle, `Base.astro` mit der SVG-Zeile vor den PNG-Zeilen samt Grund. **Die Pipeline ist bewiesen deterministisch:** 32er und 180er neu erzeugt und byteident zum Vorstand (1 770 / 10 893 B); die 16er 446 → 772 B. 41 Dokumente wachsen um genau eine Head-Zeile, die drei Weiterleitungen tragen keine Icon-Zeilen — die Doppelidentität der 44, diesmal in meinem §4a. `budget` 41 / 0, vorab so abgeleitet.

**Sichtprobe:** `../262b-sichtprobe.png`, vier Spalten (alte 16, neue 16, SVG direkt bei 16 gerastert, 32 als Referenz), echte Größe und vierfach ohne Glättung. **Abnahme ausstehend;** gegen das Signet bei 16 nimmt er §2a zurück, das SVG bleibt.

**Randbefund, der über den Nachtrag hinausreicht:** `PROJEKTGEDAECHTNIS.md` ist untracked — außerhalb jeder Versionierung, ohne Remote ohne jede Sicherung außer der Kopie im Projektwissen. Vorschlag an Taib: ins Repository aufnehmen, ein Commit je Fortschreibung. Entscheidung offen.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.35, Zeilen 2252–2262. Datum aus dem Commit, der den Abschnitt anlegte.*
