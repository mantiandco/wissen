---
datum: 2026-09-03
nummer: 276
bereich: website
typ: auftrag
autor: archiv
archiv: 11.49
---
# Auftrag 276 — Datenschutzerklärung und Getränke, und der Livegang


**Gelandet, fünf Commits (b3816a7 → c503d21), Vorschau nach 95 s.** Datenschutzerklärung 13 Ziffern de/en, Stand 3. September 2026, Descriptions 155/152; Canonicals absolut auf `https://www.mantiandco.com/`. **Alle 14 Getränkelisten** in `drinks.json`, Wörterbuch 201 → **247**; Kenntlichmachung § 5 LMZDV als neues Feld `marking`, **als offene Zeile unter dem Flaschennamen** (Claude Codes Entscheidung, richtig: eine Kenntlichmachung hinter einem Klick wäre keine); Kanontafel 8 Klassen; /zutaten sagt „… und beim Getränk“. **Zwei Funde von Claude Code:** thirdparty FAIL(8) — die Fremdlinks der Datenschutzerklärung ohne target/noopener → behoben; **`sprache.mjs` las die Getränke nie gegen das Wörterbuch** → geschlossen (186 Kennzeichnungsfelder). kommentar 187/187 — Decke exakt erreicht.

**Meine Korrektur, groß:** „diet 24 → 0“ war falsch. **Die 24 roten Ernährungsangaben hingen nie an den Getränken** — das Gedächtnis trug seit dem 25. August „Auskunft ohne Zutatenlisten zu den Flaschen“, und das stimmte nicht. Es sind **21 Zutaten (24 Vorkommen) in sieben Gerichten mit Chip: Fermento, Pommes frites, Süßkartoffel-Pommes, Nudelsalat, Kartoffelsalat, Schoko-Soufflé, Cheesecake** — Zutaten, deren Name nicht sagt, ob der Chip stimmt (z. B. Emulgator E471 in Margarine beim vegetarischen Cheesecake). Herstellerurteile-Klasse, wie die Croutons. Das Gatter bleibt zu Recht rot; die Chips stehen auf Taibs Aussage. **277 liefert die 21 als Liste zum Einsammeln.**

## LIVEGANG — 3. September 2026, 06:00

Reihenfolge, wie gelaufen: 276-Freigabe (Datenschutz auf der Vorschau) → Pages → Custom domains `www.mantiandco.com` und `mantiandco.com` (alte Einträge A @ 216.150.1.1 und CNAME www → Vercel ersetzt; beide jetzt orange auf Pages) → Redirect-Regel „Redirect from root to WWW“ (Wildcard `https://mantiandco.com/*` → `https://www.mantiandco.com/${1}`, 301, query string erhalten) → sechs Kontrollen im privaten Fenster bestanden (www eure Seite, Apex springt, /speisekarte/, Bestellknopf → Shop, /datenschutz/, Mail). **Was noch nicht gelaufen ist:** Search-Console-Sitemap (Adresse aus robots.txt), Foodamigos-Info, Testbestellung zur Öffnung 10:30 — DNS-Rückweg bereit.

**Backlog nach dem Start (277 ff.):** ⑴ die 21 Herstellerurteile (Liste aus dem diet-Gatter) · ⑵ Schreibweise Malatyali/Malatyalı — Impressum gegen Datenschutz; maßgeblich ist das Handelsregister (Taib) · ⑶ `pages.dev` ohne noindex — Canonical deckt SEO; sauber wäre eine Access-Policy auf dem Pages-Projekt (nur pages.dev geschützt, Custom Domain offen) · ⑷ kommentar-Decke 187/187 — Altbestand abbauen, sonst reißt der nächste Verhältniswert · ⑸ sharp-Audit (8), pending.mjs-Doppeldefekt + Bündelung, Standort.astro:135, zusatzstoffe-Groß/Klein, „acid citric acid“-Form · ⑹ Foodamigos: noindex auf bestellen.* (B1) nachhalten, Logo-Rückweg-Frage · ⑺ Rechtstexte zum Anwalt: Shop-AGB und Widerruf (Entwurf Teil 3.2), Datenschutz-Gegenlese · ⑻ Nährwerte-Entscheidung, video, Restaurant-Horizont · ⑼ `.claude/launch.json` untracked; Claude Codes „Gedächtnis-Eintrag ergänzt“ (276, Teil 6) im nächsten §0 prüfen — Ein-Schreiber-Grundsatz.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.49, Zeilen 2419–2431. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
