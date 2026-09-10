---
datum: 2026-09-02
nummer: 274
bereich: website
typ: auftrag
autor: archiv
archiv: 11.48
---
# Auftrag 274 — Frischklon-Bautest, zwei Rote, Pages-Einstellungen


**Gelandet, origin/main = f0e45f5, FAIL(1) diet.** **Frischklon baut byteidentisch:** Klon von origin, `npm ci`, `npm run build` (= Node-Vorprüfung gegen .nvmrc + `astro build`, keine Gatter), 629 Dateien, ein Hash über alles identisch zum Hauptbaum; Fehlliste leer; `src/assets/plates/` steht in .gitignore, existiert aber nirgends. `npm ci` läuft durch, aber nicht warnungsfrei: 8 Audit-Funde (1 low, 7 high) in sharp/libvips (Fix = sharp 0.35, Bruchwechsel) und 5 Pakete mit gesperrten install-scripts — Bauzeit-Bibliotheken, nicht auf der Seite; Backlog. **budget-Gatter:** bei wechselndem LCP-Kandidaten wird der schwerste gewogen; der Wechsel selbst ist lastabhängig (zwei flächengleiche Kartenbilder oberhalb der Falte auf /en/vegan/, /en/vegetarian/) und trat im Neulauf nicht auf — Gegenproben über den Zwischenspeicher belegt. **Wissensseite:** Zuschreibung von Bestandteilen an die Gewürzmischung entfernt — **aber mein Ersatzsatz hat die Melted-Heart-Ausnahme geschluckt** („— außer bei Melted Heart, das ohne auskommt“); „jeder Portion“ ist zu breit → 275 stellt sie wieder her. Claude Codes eigener Fehler, selbst gemeldet: `tail -15` schnitt die npm-audit-Zusammenfassung ab (zweites Mal diese Klasse).

**Pages-Einstellungen (gültig, eingetragen):** Preset Astro · `npm run build` · `dist` · Root leer · `NODE_VERSION=24.20.0` (die Vorprüfung verlangt exakt die .nvmrc-Fassung) · `PUPPETEER_SKIP_DOWNLOAD=1` · keine weiteren Variablen · kein Netzzugriff im Bau · Gatter laufen nie auf Pages, nur lokal vor dem Push.

## Cloudflare Pages läuft (2. September, 22:23)

Projekt **`website`**, GitHub-App auf das eine Repository beschränkt, Produktionszweig main, **Vorschau `https://website-4bu.pages.dev`**, erster Bau grün in vier Minuten. **Jeder Push löst einen Neubau aus.** Keine Custom Domain — das ist der Livegang. Erwartung für 275: pages.dev liefert byteidentisch zu dist; Cloudflare setzt auf *.pages.dev üblicherweise `X-Robots-Tag: noindex` — messen, nicht annehmen. **Datenschutz-Absatz Hosting entworfen** (`Datenschutz-Absatz-Cloudflare.md`, de/en, Fakten per Websuche belegt: Cloudflare Germany GmbH München / Cloudflare, Inc. USA, DPF-Zertifizierung, DPA im Dashboard unter Legal zu bestätigen) — Anwalts-Gegenlese beim AGB-Mandat; Voraussetzung: Taib bestätigt das DPA im Cloudflare-Konto.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.48, Zeilen 2408–2418. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
