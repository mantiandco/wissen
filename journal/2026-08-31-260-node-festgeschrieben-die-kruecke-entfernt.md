---
datum: 2026-08-31
nummer: 260
bereich: website
typ: auftrag
autor: archiv
archiv: 11.31
---
# Auftrag 260 — Node festgeschrieben, die Krücke entfernt


**Der Anlass (11.30):** Der Bau lief über `../.toolchain/node22`, weil das System-Node 18.15.0 unter Astros Minimum lag — nirgends notiert. Taib am 31. August: aktualisieren, und es muss beim Hoster reibungslos laufen.

**Gemessen vor dem Installieren:** Astro verlangt `18.20.8 || ^20.3.0 || >=22.0.0`; aktive LTS-Linie 24, neueste 24.20.0; 26.x ist Current und schied aus. Kein Homebrew, kein Versionsverwalter auf dem Rechner.

**Gewählt:** nvm 0.40.7 mit Node 24.20.0 — reines Shell-Skript, liest `.nvmrc` nativ. Im Repository (`97b1e96`): `.nvmrc`, `engines.node ^24.20.0`, ein minimales README mit den zwei Dingen, ohne die ein frischer Klon nicht baut (Node, `npm run fonts`). Ein README gab es vorher nicht.

**Die Probe, auf die es ankam:** Bau unter altem und neuem Node — **584 von 584 Dateien byte-gleich.** Danach `BUDGET_VOLL=1`-Referenzlauf an Node 24 (41 gemessen), zehn grün, `diet-check` 24. Erst dann die Krücke gelöscht, 176 MB.

**`engines` dokumentiert, es erzwingt nicht.** Probe c fiel nur, weil Astro selbst Node 18 abweist; ein Node 20 oder 22 baute trotz `^24.20.0` stumm. Für Hoster, die aus dem Repository bauen, reicht `.nvmrc`/`engines`; für einen Menschen an einem fremden Rechner nicht — die Vorprüfung im Bauskript kam in 261.

**Zwei Funde an der Maschine:** `git clone` gegen GitHub scheitert mit HTTP 401 — keine globale Git-Konfiguration, vermutlich alte Zugangsdaten im Schlüsselbund; heute folgenlos, wird die erste Fehlermeldung, sobald ein Remote kommt. Und `~/.zshrc` existierte nicht — angelegt, drei Zeilen nvm-Lader.

**Außerhalb des Repositoriums:** Claude Code führt eigene Gedächtnisnotizen (`reference_node_toolchain.md` und einen Index) — dort lebte die Krücke bisher. Ein Arbeitsgedächtnis, das beim Verdichten Ziffern verliert (11.28), ist kein Ort für etwas, das ein anderer Rechner braucht; jetzt steht es im Repository.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.31, Zeilen 2192–2207. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
