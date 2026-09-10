---
datum: 2026-08-30
nummer: 255
bereich: website
typ: auftrag
autor: archiv
archiv: 11.25
---
# Auftrag 255 — die Vorlese-Attribute in die Copy


**Dreizehn, nicht fünfzehn.** 253a hatte zwei `aria-label="Elephant Bay"` mitgezählt — ein Markenname ist auf einer englischen Seite wortgleich, also Datenwert, kein Vorlesetext. Nach dem Umbau: null feste deutsche Vorlesewerte im Baum.

**Der Zähler stieg um +3, nicht +13** — vor dem ersten Edit so vorhergesagt: `sprache.mjs` zählt Hüllen, keine Werte; zehn der dreizehn Wörter landeten in bestehenden `{de, en}`-Paaren. **Eine Vorhersage vor der Messung ist der Unterschied zwischen Messung und Ausrede.**

**Video als Sonderfall:** Der Block ist als Ganzes pending, ein deutscher Wert kann darin nicht existieren — das Wort „Deutsch" steht im Vermerk und wird beim Auflösen fällig statt dann erfunden.

**Bytegleichheit war unerreichbar und wurde bewiesen statt wegerklärt:** Astro schreibt ein dynamisches `&` als `&#38;` (+4 Bytes, 41/41), neue Importe verschieben die CSS-Regelreihenfolge bei gleicher Regelmenge (41/41). Nach Normalisierung identisch. **Für den Zwischenspeicher heißt das: Jede Bauteiländerung kippt alle 41 Schlüssel** — 41 Neumessungen in 255, 256b wird dasselbe tun.

**Gemeldet und akut beim Füllen der Schlüssel, nicht erst bei einer dritten Sprache:** `voices()` und `video()` fallen ohne `lang` still auf `DEFAULT_LANG` zurück — eine englische Seite bekäme deutsche Stimmen-Beschriftungen.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.25, Zeilen 2114–2125. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
