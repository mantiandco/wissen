---
datum: 2026-09-02
nummer: 273
bereich: website
typ: auftrag
autor: archiv
archiv: 11.47
---
# Auftrag 273 — Beilagen-Nachtrag, Rezeptur-Rückbau, erster Push


**Gelandet.** Gewürzmischung in `sides.json` nur noch „Gewürze“; Oliven („Oliven, geschwärzt“ / „Olives, blackened“ — Kenntlichmachung im Namen, damit sie vor dem Aufklappen sichtbar ist), Jalapeños, Petersilie als Datensätze → 15 Aufklapper; Pastırma-Klassen mit Stoffnamen; 14 Zusammenlegungen gleicher Gruppen (6× Schalenfrüchte, 8× Ei — „Ei (Mayonnaise, Pesto-Rosso-Sauce)“); Röstzwiebel-Weizen-Klammer an 6 Manti-Gerichten (Taib: Röstzwiebeln zu Manti ja) — 11 Gerichte tragen sie. `sprache` exakt (784 · 777/6/1 · 778/6 · innerhalb 3 · Wörterbuch 201). **Geschichte:** Bundle `~/Desktop/MANTI/site-light-vor-273-teil6.bundle` (354 MB), dann `git filter-repo --replace-text --replace-message` — 7 Blob- und 2 Botschafts-Regeln (Claude Code ergänzte die Botschaften selbst, weil sein §2-Commit-Text die Nadeln nannte); Nachweis: log -S über alle fünf Formen 0, 453 Commits unverändert, HEAD-Baum byteidentisch. **Alle Commit-Hashes vor 273 §6 sind seither historisch** (Zuordnung im 273-Bericht, z. B. 00ea801→6491ecd, c0b9020→…); das Gedächtnis zitiert die alten — kein Fehler. **Push:** Identität lokal gesetzt, Geheimnisprüfung ohne Fund (.git 361 MB, größter Blob pf-teller.psd 10,6 MB), SSH-Schlüssel ed25519 mit Passphrase im Schlüsselbund (Notizdatei `~/.ssh/passphrase-273-notiz.txt` — Taib übernimmt sie in den Passwort-Manager und löscht sie), `ssh -T` grüßt mantiandco, `origin/main = b72d53b`. Alte Commits tragen die automatische fritz.box-Adresse — gepusht, bleibt.

**Zwei Rote, gemeldet, in 274:** ⑴ **budget FAIL(2)** auf `/en/vegan/` und `/en/vegetarian/`: „LCP-Bild nicht wiegbar“ — die fünf Läufe nennen abwechselnd golden-harvest-280.avif und natures-palette-280.avif (je ~10 kB), also kein wiegbarer Median; LCP 804/824 ms, CLS 0, JS 3,0 kB — Messlücke des Gatters, kein Seitenfehler; deutsche Pendants grün; reproduziert im Einzellauf. ⑵ `wissen/manti.json` Z. 188 (+en) — „With us, both come in the spice blend“ — schreibt der Mischung Sumach und Minze zu; kollidiert mit der Geheimnis-Regel vom 2. September. **Ferner:** F3 gilt als entschieden (Sojajoghurt-Spur nur an der Beilage — Vorgabe 271, unwidersprochen) · kommentar-Restbestand exakt an der Decke 187 (Ratsche, gewollt) · Aufnahme-Überschrift sagt „dreizehn“, Datei hat 15 · pending.mjs-Doppeldefekt, nicht in gates.mjs · Standort.astro:135 · zusatzstoffe-Groß/Klein. Claude Codes eigener Fehler, nacherhoben: `| tail -60` hatte die Gattertafel angeschnitten — Teil 1 ist die echte.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.47, Zeilen 2401–2407. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
