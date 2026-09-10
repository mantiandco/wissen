---
datum: 2026-09-08
nummer: 278
bereich: website
typ: auftrag
autor: archiv
archiv: 11.51
---
# Auftrag 278 — 404-Seite, Stoffurteile, Kleinvieh


**Gelandet, sieben Commits (4429672 → 0e63948), live nach 115 s.** **404:** eigene Seiten `src/pages/404.astro` + `en/404.astro` über `NotFound.astro` — bewusst NICHT über den 268-Erzeuger (Astro schreibt nur `/404` als `404.html`; eine Route in routes.ts hätte Adresse, Sitemap, hreflang und zählte in acht Sollwerte); Hook `errorPages` zieht `en/404/index.html` → `en/404.html`; Pages nimmt die 404.html je Verzeichnis — live belegt: `/gibt-es-nicht/` und `/speisekarte/gibt-es-nicht/` → HTTP 404 deutsch, `/en/does-not-exist/` und `/en/menu/nope/` → 404 englisch (vorher überall 200). noindex, kein hreflang, kein Umschalter, Copy-Block `notFound`. `fehlerseiten()` in routes.mjs zählt beide für sprache/thirdparty/budget/a11y. **Stoffurteile:** 21 VOCAB-Einträge mit Herkunft; die Klammer entscheidet allein, wenn der Kopf ohne Urteil ist — unbekannter Stoff → rot mit Nennung (Gegenprobe „Erfundinol“ bei jedem Start); **diet 24 → 6**, exakt vorhergesagt. Kanontafel en klein. anrede-Sollwert 50 → 53 Bauteile. **Meldeliste:** halal-Vorbehalt an Vanillearoma/Gewürzextrakten (Alkohol als Hilfsstoff; heute kein halal-Gericht betroffen) · 404-`<title>` ohne „| MANTI & CO.“ → 279 · contrast/hover/teilbild prüfen Fehlerseiten nicht (routenbasiert) · Z. 2429 hier nennt „Malatyalı“ im Backlog-Wortlaut — Zitat, bleibt.

## Erste Woche live — Taibs Messungen (4. und 8. September)

PageSpeed mobil (langsames 4G): **Startseite 100/100/100/100, Speisekarte 99/99/100/100**, FCP 0,9 s, LCP 1,4 s, TBT 0, CLS 0; Vergleichsseite (Smashburger Berlin) 94/100/96/100. **Drei Funde:** ⑴ Barrierefreiheit: „Überschriftenelemente nicht in fortlaufender Reihenfolge“ — `h3` „Combos“ auf /speisekarte/ ohne `h2`; unser a11y-Gatter prüfte nur WCAG-Regeln, `heading-order` ist axe-„best practice“ → 279 misst alle Dokumente und nimmt die Regel ins Gatter. ⑵ „Agentisches Browsing“ 2/3 auf der Startseite: die `llms.txt` entspricht nicht der Empfehlung (keine H1, keine Links — Datei aus einer frühen Phase); auf Unterseiten gilt die Prüfung nicht (2/2). ⑶ „Leistung auf der Nutzerseite“ = CrUX-Felddaten echter Chrome-Besucher über 28 Tage — erscheint erst mit Traffic, fünf Tage nach Livegang zu Recht leer. **Taibs Gestaltungswunsch:** Gerichtsbild auf der Gerichtseite mobil randlos (heute schmaler Rand links/rechts) — entschieden, mit `sizes`-Anpassung. SEOptimer-Empfehlungen (Link Building, Analytics, Pixel, Social) sind Vorlagenkram; Link-Aufbau (Google-Unternehmensprofil, Lieferando-Profil, lokale Verzeichnisse) ist der einzige mit Substanz — später.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.51, Zeilen 2441–2449. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
