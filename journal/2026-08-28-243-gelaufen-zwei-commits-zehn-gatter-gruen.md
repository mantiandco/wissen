---
datum: 2026-08-28
nummer: 243
bereich: website
typ: auftrag
autor: archiv
archiv: 11.12
---
# Auftrag 243 — gelaufen, zwei Commits, zehn Gatter grün


Ein Lauf, 1981,8 s (33,0 min), Bau 2,5 s. `budget` 1227,9 · `contrast` 255,1 · `hover` 216,5 · `a11y` 212,6 · `thirdparty` 67,9 · `kommentar` 1,0 · `teilbild` 0,2 · `sprache` 0,2 · `diet-check`/`legal`/`anrede` 0,1. **`anrede` ist grün: 13 Dateien, 2153 Felder, null Fundstellen** — das Gatter selbst ist unangetastet geblieben, wie entschieden. `diet-check` rot wie immer (Metro steht aus).

43 HTML-Dokumente, 40 Seiten plus drei Weiterleitungsstümpfe. **Englische Schlüssel 667 → 671**, zweimal unabhängig gemessen. Commits `fbdda09` (neun Ersetzungen, 9+/9−) und `b4cd4b5` (262+/47−). `manti` hat jetzt sieben Abschnitte, `verwandte` neun, `anderes` vier.

### Der Zählfehler wiederholt sich — 28. August

**Ich habe die Tomatensauce-Stellen zweimal gezählt und beide Male zu wenig gefunden: erst fünf, dann acht, tatsächlich elf.** Beim zweiten Zählen habe ich nach fehlenden Nennungen *und* nach Gegenbehauptungen gesucht — aber nur in `src/content/copy/`. Übersehen habe ich `meta.json`, also **die Beschreibung genau der Seite, deren ersten Absatz ich gerade korrigiert habe.** Nach 243 sagt der Kopf von `/wissen/manti/` „Joghurt darunter, Butter darüber" und der erste Absatz derselben Seite etwas anderes. Dazu zwei weitere Textstellen, die Claude Code gefunden hat: der Pelmeni-Absatz („dass bei Manti die Butter obenauf gehört") und der Kombinationssatz auf `/wissen/mal-was-anderes/` („die kalte Säure des Joghurts unter der warmen Butter").

**Nicht geändert wird `meta.json` Zeile 4**, die Startseitenbeschreibung „Teigtaschen auf Joghurt — wie Ravioli, nur anders". Das ist keine Servierbeschreibung, sondern eine Einordnung, und „auf Joghurt" bleibt richtig. **Eine Stelle, die nichts Falsches sagt, wird nicht angefasst, nur weil sie zum selben Thema gehört.**

### Mein §5 war undurchführbar — von Claude Code gemessen, nicht behauptet

Ich habe vorgegeben, `splitParts()` je Punkt aufzurufen. Die Funktion zählt jede Wendung über alles, was sie bekommt, und **wirft bei null Treffern**. Der Regionen-Abschnitt hat vier Verweise auf vier verschiedenen Punkten — der Aufruf mit dem Kayseri-Punkt fände „Hingel's Harvest" nicht und bräche ab. **Die Regel gilt für den Abschnitt, nicht für seine Glieder.** Claude Code hat den Abbruch als Gegenprobe erzeugt, statt ihn zu vermuten, und dann `splitSection()` daneben gestellt: Punkt-Texte zu einer Liste legen, einmal zerlegen, wieder verteilen. **`splitParts()` hat null gelöschte Zeilen** — die Forderung „ein Weg für beide Seiten" ist damit besser erfüllt als mit meiner Vorgabe.

### Drei kleinere Fehler in meinem Auftrag

**„ohne dessen erste vier Wörter" — es sind fünf** („Ein Wort zum Namen „Hingel"."). **„Der Ortsname wandert unverändert, der Rest bleibt" widerspricht sich bei Ardahan**, weil der Rest ein klein beginnender Nachsatz ist; ich hatte daneben den Rumpf mit großem „Ganz" diktiert. Claude Code ist dem diktierten Ergebnis gefolgt und hat den einen Buchstaben als einzige erlaubte Abweichung ausgewiesen. **„Halbfett" klingt nach einem Schriftschnitt, den es nicht gibt** — `fonts.css` lädt Hanken Grotesk nur als 400, `font-weight: 600` rechnet der Browser aus. Derselbe Wert steht in `.loy__q` für dieselbe Aufgabe.

### Die Commit-Zahl als Zahl war ein Fehler

**Mein §10 schrieb „Zwei Commits" und hat dadurch eine Verbesserung verhindert.** Claude Code wollte nach dem zweiten Commit einen Schema-Kommentar präzisieren; ein dritter Commit hätte meinen Auftrag verletzt, ein `--amend` die stehende Git-Regel. Er hat die Änderung verworfen und gemeldet. **Eine Commit-Zahl ist eine Vorgabe über die Form und wird zur Vorgabe über den Inhalt, sobald beim Arbeiten etwas dazukommt.** Ab sofort: Commit-*Grenzen* vorgeben, nicht Commit-*Zahlen*.

### Fünf tote CSS-Zeilen, selbst gemeldet

`.wissen__name` bekam `font-family`, `font-size`, `color`, `letter-spacing` und `text-transform` — alle fünf sind Erbwerte aus `base.css:111–115`, es gibt keine Regel auf `dl`, `dt` oder `dd`. Wirksam sind nur `font-weight: 600` und `margin-inline-start: 0`. **Er hat nachgemessen statt nachzureichen** und die Streichung selbst vorgeschlagen.

### Zwei Gegenproben, beide erzwungen und beide zurückgenommen

Claude Code hat nicht behauptet, dass die Schranken greifen, sondern sie brechen lassen. **Erstens** „The Original" im Kayseri-Punkt durch „das Klassische" ersetzt → Bau bricht ab mit „Der Verweis … nennt die Wendung „The Original", und sie steht in keinem Absatz dieses Abschnitts. Der Link fiele lautlos aus der Seite." **Zweitens** ein zusätzliches `body` neben `points` gelegt → `InvalidContentEntryDataError`, „Ein Abschnitt hat entweder `body` oder `points`, genau eines von beiden." Beide Male aus der Sicherung zurückgespielt und nachgeparst. **Diese Arbeitsweise ist der Grund, warum die Zusammenarbeit trägt, und sie gehört ausdrücklich erhalten.**

### Wie die neun Ersetzungen abgesichert wurden

Jede Alt-Zeichenkette wurde vor dem Schreiben auf der JSON-Ebene gezählt — `JSON.stringify(alt).slice(1,-1)`, damit ein Treffer über zwei Felder hinweg nicht als einer durchgeht. Bei einer Zahl ≠ 1 hätte das Skript ohne zu schreiben abgebrochen. **Alle neun kamen genau einmal vor.** Beim Umbau zu Punkten wurde kein Text getippt: Name und Rumpf sind aus dem vorhandenen Absatz geschnitten und danach Zeichen für Zeichen gegen den diktierten Wortlaut geprüft. **Einzige erlaubte Abweichung: ein großgeschriebenes „Ganz" bei Ardahan**, weil der Restsatz sonst klein begänne.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.12, Zeilen 1825–1860. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
