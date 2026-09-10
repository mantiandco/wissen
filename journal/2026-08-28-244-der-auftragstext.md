---
datum: 2026-08-28
nummer: 244
bereich: website
typ: befund
autor: archiv
archiv: 11.13
---
# Auftrag 244 — der Auftragstext


**Das ist der Stand, an dem Phase 3 endet.** Der Bericht liegt vor und ist in 11.14 ausgewertet. Dieser Abschnitt bleibt als Auftragstext stehen, damit der Bericht ohne den alten Chat lesbar bleibt.

Sein Umfang, damit der Bericht ohne den alten Chat gelesen werden kann:

**§1 Sollwerte.** `sprache.mjs:69` 74 → 80 · `sprache.mjs:74` 39 → 43 · `anrede.mjs:61` 10 → 13 · `anrede.mjs:62` 46 → 47 · dazu die Zahl 39 im Fließtextkommentar `sprache.mjs:598`. **Alle vier zu messen, nicht abzuschreiben** — weicht ein gemessener Wert ab, gilt der gemessene und die Abweichung wird gemeldet.

**§2 Die drei restlichen Tomatensaucen.** `meta.json` `wissenManti.description.de` neu: „Manti sind kleine gefüllte Teigtaschen aus der türkischen Küche — Joghurt darunter, Tomatensauce und Butter darüber. Woher sie kommen, wie man sie isst." — 152 Zeichen gegen 138 vorher, nachzumessen. Dazu der Pelmeni-Absatz und der Kombinationssatz auf `/wissen/mal-was-anderes/` (Wortlaute in 9.6c). **`meta.json` `home.description` und `site-audit.md` sind ausdrücklich ausgenommen.**

**§3 `routes.ts:131`.** `Five items is the whole point of the reduction` → `Four items`. Vorher `navOrder` prüfen; stimmt „vier" nicht mit den Daten überein, wird gemeldet statt geändert.

**§4 Zahlwörter im Footer.** `Footer.astro:31` „siebenunddreißig Seiten" → „vierzig Seiten" · `Footer.astro:158` „allen neununddreißig" → „allen dreiundvierzig". Der Unterschied zwischen „Seiten" (40) und „Dokumenten" (43) ist zu beachten, nicht zu vereinheitlichen.

**§5 Einheit.** `derive-bottles.mjs:104` „Blöcken zu 4 kB" → „4 KiB".

**§6 Die zwei liegengebliebenen Verbesserungen aus 243.** `.wissen__name` auf `font-weight: 600` zusammenstreichen, Grund in den Kommentar. Und den Schema-Kommentar vervollständigen: Der zehnte fett ausgezeichnete Absatz ist kein Punkt geworden, sondern die `<h2>` „Woher der Name „Hingel" kommt".

**§7 Falsche Namen in Kommentaren.** `content.config.ts:1078` nennt ein `DietSection`, das es nicht gibt; gemeint sind `splitParts()` und `splitSection()`. Der Kopfkommentar von `src/lib/diet.ts` beschreibt eine Datei, die nur Ernährungsseiten bedient.

**§8 Umbenennung.** `dietLink` → `copyLink`, `src/lib/diet.ts` → `src/lib/copy-links.ts`. Aufrufstellen: `[diet].astro`, `[...wissen].astro`, `Menu.astro`, `content.config.ts`. `git mv` nur nach `git ls-files`. **Der Namensvorschlag ist ausdrücklich kein Befehl.**

**§11 Neu in der Auftragsform: Commit-Grenzen statt Commit-Zahlen.** Text und Metadaten in einen Commit, alles Übrige nach Ermessen. Fällt nach einem Commit eine Verbesserung an dessen Inhalt auf, kommt ein weiterer Commit — **nicht `--amend`, und nicht verwerfen.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.13, Zeilen 1861–1885. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
