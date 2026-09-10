---
datum: 2026-09-02
nummer: 271
bereich: website
typ: auftrag
autor: archiv
archiv: 11.46
---
# Auftrag 271 — die Beilagen-Kennzeichnung


**Gelandet, sechs Commits (33c291f → 00ea801), FAIL(1) diet 24, zehn grün.** `src/content/sides.json` mit 12 Datensätzen im mark-Schema, über `id` an die Copy-Items gebunden; Wörterbuch 197 Einträge (155/27/15) im selben Commit; die drei 264b-Gegenproben grün→rot→grün; Anzeige als `<details>` im `<dd>` ohne Skript mit drei Bau-Wächtern (id ohne Datensatz, Datensatz ohne Item, Sprachzweig-Drift). **F1:** 14 Gerichte (6 Manti + 8 Co's) tragen Pesto-Ei und Pesto-Cashew. **F2:** 5 Salate „(Weizen in Röstzwiebel, Pastırma)“ — Taib (2. September): Pastırma war dort bisher nicht wählbar, wird aber aufgenommen; die Seite bleibt so. **F3:** Sojajoghurt-Spur nur an der Beilage. `/zutaten/`: sechs abgeleitete Klassen über eine Kanontafel `additiveClasses` (startsWith, wirft bei ≠1); {vorkommend}/{fehlend} unverändert 8/6. `sprache` exakt auf der Vorhersage (775 · 768/6/1 · 769/6 · innerhalb 3 · unverwendete 0), `sprachrest` 82 Baseline. anrede-Sollwert 14→15 nachgezogen (00ea801) — richtig, nicht übergriffig.

**Meine Fehler:** ⑴ Die abgenommene Aufnahme trug 12 statt 15 Datensätze — beim Zusammenschreiben der Vollfassung habe ich **Oliven und Jalapeños verloren**, die in der Sechser-Fassung standen; Petersilie fehlte immer. ⑵ In §2 habe ich behauptet, Taib habe die Namen der Gewürzmischungs-Bestandteile freigegeben („nur Mengen unveröffentlicht“) — **erfunden; Phase 2 sagt das Gegenteil.** Die vier Namen stehen seit 271 in `sides.json` und in der Commit-Geschichte; 273 nimmt sie aus Daten UND Geschichte, bevor der erste Push das Haus verlässt.

**Meldeliste 271:** pending.mjs-Doppeldefekt (Klammern im ersten Argument; MUSTER_EN nur direkt hinter `"en":`) — vorbestehend, nicht in gates.mjs gebündelt · Wörterbuch-Tafel zusatzstoffe mischt Groß/Klein im Englischen · doppelte Gruppen-Einträge (bulgur-bites: Ei (Mayonnaise) UND Ei (Pesto-Rosso-Sauce)) → 273 legt gleiche Gruppen zusammen · **kommentar-Restbestand steht exakt an der Decke 187** — die nächste unbelegte Verhältniszahl macht das Gatter rot · Pastırma-Klassen in der Aufnahme teils nur mit E-Nummer, der /zutaten/-Satz verspricht Stoffnamen → 273.

## Infrastruktur, 2. September nachmittags — DNS umgezogen, GitHub angelegt

**Die DNS-Zone liegt bei Cloudflare, aktiv seit 17:25.** 19 Einträge 1:1 übernommen — der Scan fand 13, sechs von Hand (bestellen, tasks, www.tasks, drei DKIM) —, **alle mit grauer Wolke („DNS only“)**; Nameserver `chris.ns.cloudflare.com` / `nelly.ns.cloudflare.com` bei IONOS eingetragen, IONOS-Zone stillgelegt. Mail läuft unverändert über die IONOS-Ziele (MX, SPF, DKIM, DMARC, Autodiscover). Die orange Wolke kommt erst mit dem Livegang, nur für die Einträge auf Pages. **Taibs drei Proben bestanden (2. September, 17:42):** Mail hin und zurück, `bestellen` mit Schloss, `www` zeigt den Shop — der DNS-Umzug ist abgeschlossen, ohne Aussetzer. Cloudflare-Tarif: Free — reicht auf absehbare Zeit; Cloudflare Registrar als späterer Ausweg aus IONOS notiert.

**GitHub:** Konto auf business@mantiandco.com, privates Repository **`mantiandco/website`** (leer, ohne README; Taibs Wahl „main“ auf meinen Einwand hin — Zweigname — zu „website“ umbenannt). **Push erfolgt mit 273 (2. September, ~18:30): `origin/main = b72d53b`; Schlüssel im GitHub-Konto hinterlegt.** Seither endet jeder Auftrag mit `git push origin main` — Grundregel. Im Konnektor-Verzeichnis von Claude.ai gibt es keinen GitHub-Konnektor (gesucht, 2. September); der Weg bleibt Berichte + Auszüge.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.46, Zeilen 2386–2400. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
