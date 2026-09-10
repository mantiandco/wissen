---
datum: 2026-09-01
nummer: 267
bereich: website
typ: auftrag
autor: archiv
archiv: 11.42
---
# Auftrag 267 — Tranche 5c und der Vorschaubau, der keiner war


**Hauptbaum sauber gelandet, fünf Commits (553a5fd → e0b70c7), zehn grün.** Fünf Änderungen mit `fill()`-Nachrüstung in `Faq.astro` (enges `vars`: nur street/postalCode/city, nur Antworten); die zwei `/vegan/`-Verweise als `route: "menu"` **ohne Anker** — `copy-links.ts` kennt kein anchor-Feld, sie landen oben statt bei `#dazu` (Meldeliste: geprüftes anchor-Feld wäre die Erweiterung); die **{wort}-Gatterstufe** in `sprache` mit Gegenprobe (fill() entfernt → rot mit Fundstelle `/faq/index.html: {street}`); 65 Hüllen. 717 Schlüssel, de 709/7, en 710/7 — der siebte Rest ist `meta.json impressum.description`, beidseitig pending. `budget` 3/38 exakt.

**Kernbefund (§7): Es gibt keinen en-Erzeuger.** `LIVE_LANGS = ['de','en']` baut ohne Halt durch und erzeugt **null englische Dokumente** — `t()` wird für en nie gerufen, `dist/en/` entsteht nicht, alle zehn Adressen 404. Der Worktree-Gatterlauf macht es aktenkundig: FAIL(2) — diet 24 wie immer, **`sprache` FAIL(41): jede Seite trägt hreflang auf ihr fehlendes Gegenstück.** Umkehrbefund: Der Vorschaubau (beide Sprachen geschaltet) zeigte auf 41 Dokumenten den sichtbaren **English-Umschalter mit totem Ziel** — er kündigte Englisch an und lieferte es nicht. *Präzisiert nach 268: Der Hauptbaum mit `['de']` trug nie einen Umschalter; der Befund galt dem Worktree.* Die en-Pfade sind übersetzt (aus hreflang/routes.ts): `/en/menu/⟨slug⟩/`, `/en/faq/`, `/en/how-we-make-it/`, `/en/ingredients/`, `/en/about-us/`, `/en/rewards/`, `/en/vegan/`, `/en/vegetarian/`, `/en/what-is-manti/`, `/en/related-dumplings/`, `/en/something-different/`, `/en/locations/⟨slug⟩/`, `/en/imprint/` usw.

**Meine Fehler:** §7 war auf einer **Annahme statt Messung** gebaut — ich habe aus hreflang-Gerüst und Umschalter auf den Erzeuger geschlossen (Familie „Beschriftungen sind keine Daten"). Mein 404-Nachtrag nannte drei Ursachen; alle falsch, die wahre fehlte. §6b: 715 statt 717 — die zwei phrase-Schlüssel, die §3 selbst anlegt, nicht mitgezählt; den siebten Rest falsch benannt.

**Schriften, präzisiert und behoben:** `public/fonts/` steht in der **`.gitignore` (Z. 6)** — nicht „untracked"; `git worktree add` überträgt Ignoriertes nicht. Drei woff2 in den Worktree kopiert (public/ und dist/), byteidentisch, 200 über Port 4324. **Jeder frische Klon und jeder Deploy hätte dieselbe Lücke → die Schriften gehören ins Repository (268).** Einschränkung: Der Worktree-Gatterlauf lief **vor** der Kopie — Pixel-Stufen sahen Systemschrift; verbindlich sind die Hauptbaum-Zahlen.

**Ferner gemessen:** Geteilter budget-Zwischenspeicher `../.gatter-zwischenspeicher/` zwischen Hauptbaum und Worktree — wechselseitige Verdrängung, §10 lief deshalb 34:21 mit 41/0; kein Schaden, aber die 254-Abkürzung ist bei zwei Bäumen nichtig. Aus „Hallesche Str." wurde über den Slot „Hallesche Straße" — gewollt, sichtbar. `faq.json` war vor §2 nicht idempotent formatiert (290→293 Zeilen, normalisiert, ausgewiesen).

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.42, Zeilen 2328–2340. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
